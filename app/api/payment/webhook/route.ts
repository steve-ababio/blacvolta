import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import { verifyPaystackSignature } from "@/app/utils/paystack/utils";
import { Order, OrderStatus, PaymentMethod, PaymentStatus } from "@prisma/client";
import { EmailService } from "@/app/lib/email/service/email.service";
import { OrderReceiptPayload } from "@/app/types/types";


export async function POST(req: Request) {
  const paystackSecret = process.env.PAYSTACK_SECRET_KEY || "";
  const bodyBuffer = await req.arrayBuffer(); // Raw body
  const bodyString = Buffer.from(bodyBuffer).toString("utf-8");
  const signature = req.headers.get("x-paystack-signature"); // Header sent by Paystack
  if (!verifyPaystackSignature(bodyString,signature as string, paystackSecret)) {
      return NextResponse.json({ status: "error", message: "Invalid signature" }, { status: 400 });
  }
  const event = JSON.parse(bodyString);
  if (event.event === "charge.success") {
    const reference = event.data.reference;
    const channel = event.data.authorization.channel;
    const merchantName = event.data.authorization.bank;
    const email = event.data.email;
    const payment = await confirmPayment(reference,channel);
    const order = await confirmOrder(payment.orderId);

    const orderReceiptPayload:OrderReceiptPayload = {
        guest:{
          name:order.guest!.name,
          email:order.guest!.email,
          phoneNumber:order.guest!.phoneNumber as string
        },
        order:{
          id:order.id,
          createdAt:order.createdAt.toString(),
          paymentStatus:payment!.status,
          subTotal:payment.subTotal,
          tax:payment.taxAmount,
          totalAmount:payment.totalAmount,
          status:order.status,
          currency:payment.currency,
        },
        items:order.items.map(item=>({
          quantity:item.quantity,
          unitPrice:item.unitPrice,
          product:item.product
        })),
        address:{
          street:order.shippingAddress!.street,
          city:order.shippingAddress!.city,
          state:order.shippingAddress!.state,
          postalCode:order.shippingAddress!.postalCode,
          country:order.shippingAddress!.country
        }
    }
    const receipientEmail = order.guest!.email
    await sendEmails(receipientEmail,orderReceiptPayload);
  }
  return NextResponse.json({ status: "success" });
}

async function confirmPayment(reference:string,channel:PaymentMethod){
    let transaction = await prisma.payment.findUnique({where:{id:reference}});
    if(!transaction){
      throw new Error("Invalid Reference");
    }
    if (transaction.status !== PaymentStatus.PENDING) {
      throw new Error('Transaction has already been processed');
    }
    transaction = await prisma.payment.update({
      data:{
        status:PaymentStatus.PAID,
        paymentMethod:channel.toUpperCase() as PaymentMethod,
      },
      where:{
        id:reference
      }
   });
   return transaction;
}
async function confirmOrder(orderId:string){
  let order = await prisma.order.findUnique({where:{id:orderId}});
    if(!order){
      throw new Error("Order does not exist");
    }
    if (order.status !== OrderStatus.PENDING) {
      throw new Error('Order has already been processed');
    }
 const result = await prisma.order.update({
    data:{
      status:OrderStatus.SHIPPED, 
    },
    where:{
      id:orderId
    },
    include:{
      guest:true,
      items:{
        include:{
          product:true
      }},
      shippingAddress:true,
      payment:true
    }
 });
 return result;
}

async function sendEmails(email:string,orderReceiptPayload:OrderReceiptPayload){
    const emailService = new EmailService();
    await Promise.all([
        emailService.sendOrderReceiptEmail(
            email,
            "Order Confirmation",
            "/templates/order-confirmation.html",
            orderReceiptPayload
        ),
        emailService.sendStoreManagerEmail(
            email,
            "New Order Received",
            "/templates/store-receipt.html",
            orderReceiptPayload
        )
    ]);

}

import { EmailService } from '@/app/lib/email/service/email.service';
import { prisma } from '@/app/lib/prisma';
import { OrderReceiptPayload } from '@/app/types/types';
import { Address, Currency, Guest, Order, OrderItem, Payment, PaymentMethod, PaymentProvider, PaymentStatus } from '@prisma/client';
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';


type ExpectedType<T, K extends keyof T = never> = Omit<T, "id" | "createdAt"| "updatedAt" | K>;
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {customer,items,totalAmount,taxAmount,subTotal } = body;
    const {name,email,phoneNumber,address} = customer;

    const guest = await createGuest({name,email,phoneNumber});
    const orderDetails:ExpectedType<Order,"status"> = {
       guestId:guest.id
    }
    const order = await createOrder(orderDetails)
    const newOrderItems = items.map((item:any) => ({
        quantity:item.quantity,
        orderId:order.id,
        productId:item.product.id,
        unitPrice:item.product.price
    }));
    
    const paymentDetails:ExpectedType<Payment,"currency"> = {
        orderId:order.id,
        totalAmount,
        subTotal,
        taxAmount,
        status:PaymentStatus.PENDING,
        provider:PaymentProvider.PAYSTACK,
        paymentMethod:null
    }
    const [transaction,] = await Promise.all([
        createPayment(paymentDetails),
        createShippingAddress({...address,orderId:order.id}),
        createOrderItems(newOrderItems)
    ]);
    const link = await initializePayment(subTotal,transaction.id,email,transaction.currency);
    return NextResponse.json({ success: true, paymentLink:link, transactionId:transaction.id });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json({ success: false, error: 'Failed to create order' }, { status: 500 });
  }
}


async function createGuest(guestDetails:ExpectedType<Guest>){
    let guest = await prisma.guest.findUnique({
        where:{
            email:guestDetails.email
        }
    });
    if (!guest) {
        guest = await prisma.guest.create({
            data:  guestDetails,
        });
    }
    return guest;
}
async function createPayment(payment:ExpectedType<Payment,"paymentMethod"|"currency">){
    const result = await prisma.payment.create({
        data:payment
    });
    return result;

}
async function createOrderItems(orderItems:ExpectedType<OrderItem>[]){
    const productIds = orderItems.map((i: any) => i.product?.id).filter(Boolean);
    const existing = await prisma.product.findMany({
    where: { id: { in: productIds } },
    select: { id: true },
    });

    if (existing.length !== productIds.length) {
    const missing = productIds.filter(id => !existing.some(p => p.id === id));
    throw new Error(`Missing products: ${missing.join(", ")}`);
    }
    const result = await prisma.orderItem.createMany({
        data:orderItems
    });
    return result;
}
async function createShippingAddress(address:ExpectedType<Address>){
    const result =  await prisma.address.create({
        data:address
    });
    return result;
}
async function createOrder(order:ExpectedType<Order,"status">){

    const result = await prisma.order.create({
        data:order,
    });
    return result;
}
async function initializePayment(amount:number,reference:string,email:string,currency:Currency){
    const url = 'https://api.paystack.co/transaction/initialize';
    const paystackSecretKey  = `Bearer ${process.env.PAYSTACK_SECRET_KEY}`;
    const requestData = {
        amount: Math.ceil(amount * 100), // Paystack uses minor currency units
        reference,
        currency: currency.toUpperCase(), // Default to 'GHS' if not provided
        email: email
    };
    try {
        const response = await axios.post(url, requestData, {
        headers: {
            'Authorization': paystackSecretKey,
            'Content-Type': 'application/json'
        }
        });
        if (response.data.status) {
            return response.data.data.authorization_url;
        } else {
        throw new Error('Failed to initiate payment');
        }
    } catch (error) {
        console.error('Error initiating Paystack payment:', error);
        throw new Error('Paystack request failed');
    }
}



import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET( request: Request,{ params }: { params: { id: string } }){
  try {
    const transactionId = params.id;
    if (!transactionId) {
      return NextResponse.json(
        { message: "transaction Id is required" },
        { status: 400 }
      );
    }

    const order = await prisma.order.findFirst({
      where: { payment:{
            id: transactionId
      }},
      include: {
        items: {
            include:{
                product:true
            }
        },
        payment:true,
      },
    });
    if (!order) {
      return NextResponse.json(
        { message: "Order not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to fetch order" },
      { status: 500 }
    );
  }
}
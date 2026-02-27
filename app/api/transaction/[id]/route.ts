import { prisma } from "@/app/lib/prisma"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import { NextResponse } from "next/server"

export async function GET(_: Request, { params }: Params) {

  const transaction = await prisma.payment.findUnique({
    where: { id: params.id },
  })
  
  if (!transaction) {
    return NextResponse.json({ error: "Transaction not found" }, { status: 404 })
  }
  return NextResponse.json(transaction)
}
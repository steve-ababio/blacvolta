import { prisma } from "@/app/lib/prisma"
import { NextResponse } from "next/server"

type Params = {
  params: { id: string }
}

export async function GET(_: Request, { params }: Params) {
  const product = await prisma.product.findUnique({
    where: { id: params.id },
  })
  
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 })
  }

  return NextResponse.json(product)
}
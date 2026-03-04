import { prisma } from "@/app/lib/prisma"
import { ProductCategory } from "@prisma/client";
import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  const category = searchParams.get("category");
  const limit = Number(searchParams.get("limit") ?? 20)
  const page = Number(searchParams.get("page") ?? 1)

  const products = await prisma.product.findMany({
    where:  category
    ? {
        category: {
          has: category as ProductCategory,
        },
      }
    : undefined,
    take: limit,
    skip: (page - 1) * limit,
    orderBy: { createdAt: "desc" },
  })

  return NextResponse.json(products)
}
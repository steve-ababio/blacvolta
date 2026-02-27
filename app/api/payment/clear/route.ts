import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ cleared: true });
  res.cookies.delete("payment_success");
  return res;
}
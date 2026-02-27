import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { reference } = await req.json();
  const res = await fetch(
    `https://api.paystack.co/transaction/verify/${reference}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      },
    }
  );

  const data = await res.json();
  if (data.data?.status === "success") {
    const response = NextResponse.json({ success: true });

    // 🔐 TEMPORARY ACCESS TOKEN (server-controlled)
    response.cookies.set("payment_success", "true", {
      httpOnly: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60, // 1 minute
    });

    return response;
  }

  return NextResponse.json({ success: false }, { status: 400 });
}
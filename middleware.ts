import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/success") {
    const allowed = req.cookies.get("payment_success");
    if (!allowed) {
      return NextResponse.redirect(new URL("/merchandise", req.url));
    }
    return NextResponse.next();
  }
}
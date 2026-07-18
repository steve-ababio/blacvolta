import { EmailService } from "@/app/lib/email/service/email.service";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields (name, email, subject, message) are required." },
        { status: 400 }
      );
    }

    const emailService = new EmailService();
    await emailService.sendContactEmail({
      name,
      email,
      subject,
      message,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error in contact route:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send message." },
      { status: 500 }
    );
  }
}

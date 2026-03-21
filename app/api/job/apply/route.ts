import { EmailService } from "@/app/lib/email/service/email.service";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const jobTitle = formData.get("jobTitle") as string;
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const linkedin = formData.get("linkedin") as string;
    const cover = formData.get("cover") as string;
    const file = formData.get("cv") as File | null;

    let attachment = [];

    if (file) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      attachment.push({
        filename: file.name,
        content: buffer,
      });
    }
    const jobApplicationPayload = {
        jobTitle,
        firstName,
        lastName,
        email,
        phone,
        linkedIn:linkedin,
        cover,
    }
    
    const emailService = new EmailService();
    await emailService.sendJobApplication(
        email,
        "Job Application",
        "/job-application.html",
        jobApplicationPayload,
        attachment
    )
    // // Configure transporter
    // const transporter = nodemailer.createTransport({
    //     host: process.env.MAIL_HOST, 
    //     port: Number(process.env.MAIL_PORT),
    //     secure: true,
    //     auth: {
    //         user: process.env.EMAIL_USER,
    //         pass: process.env.EMAIL_PASS,
    //     },
    // });

    // await transporter.sendMail({
    //   from: `"Job Application" <${email}>`,
    //   to: process.env.EMAIL_TO,
    //   subject: `New Application: ${firstName} ${lastName}`,
    //   html: `
    //     <h3>New Job Application</h3>
    //     <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>LinkedIn:</strong> ${linkedin}</p>
    //     <p><strong>Cover Letter:</strong></p>
    //     <p>${cover}</p>
    //   `,
    //   attachments: attachment,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
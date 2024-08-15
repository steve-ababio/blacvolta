import { NextRequest, NextResponse } from "next/server";
import { createTransport } from "nodemailer";

export async function POST(req:NextRequest){
    const receiveddata = await req.formData()
    const email = receiveddata.get("email") as string;
    const name = receiveddata.get("name") as string;
    const jobtitle = receiveddata.get("jobtitle") as string;
    const document = receiveddata.get("document") as File;

    const arraybuffer = await document.arrayBuffer();
    const filecontent = Buffer.from(new Uint8Array(arraybuffer));
    try{
        const transporter = createTransport({
            host:process.env.SMTP_HOST as string,
            port:parseInt(process.env.SMTP_PORT as string,10),
            auth:{
                user:process.env.SMTP_EMAIL as string,
                pass:process.env.SMTP_PASSWORD as string
            }
        });
        console.log(process.env.SMTP_EMAIL);
        const result = await transporter.sendMail({
            from:process.env.SMTP_EMAIL as string,
            to:process.env.SMTP_RECIPIENT_EMAIL as string,
            subject:`${jobtitle} Job application`,
            html:`
            <h1>JOB application</h1>
            <div>Email: ${email}</div>
            <div>Name:${name}</div>
            `,
            attachments:[
                {
                    content:filecontent,
                    filename:document.name,
                }
            ]
        });
        console.log(result);
        return NextResponse.json({success:true},{
            status:200,
        })
    }catch(error){
        console.log(error);
        return NextResponse.json({success:false,error},{
            status:500,
        })
    }
}
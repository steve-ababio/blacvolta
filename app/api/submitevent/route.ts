import { prisma } from "@/app/lib/prisma";
import { uploadImage } from "@/app/utils/utils";
import { NextResponse } from "next/server";
import shortuuid from "short-uuid";

export async function POST(req:Request){
    const data = await req.formData();
    const organizationname = data.get("organizationname") as string;
    const email = data.get("email") as string;
    const phonenumber = data.get("phonenumber") as string;
    const Description = data.get("eventdescription") as string;
    const EventDate = data.get("eventdate") as string || "";
    const EventTime = data.get("eventtime") as string;
    const EventName = data.get("eventname") as string;
    const Venue = data.get("eventvenue") as string;
    const TicketLinks = data.get("ticketlinks") as string;
    const SocialLinks = data.get("sociallinks") as string;
    const InquiryNumber = data.get("inquirynumber") as string;
    const IsEventWeeklyString = data.get("iseventweekly");
    const image = data.get("eventflyer") as File;
    const DayofWeek = data.get("dayofweek") as string;
    const IsEventWeekly = JSON.parse(IsEventWeeklyString as string) as boolean;
    
    try{
        const imageurl = await uploadImage(image) as string;
        const eventid = `BV-${shortuuid.generate()}`;
        console.log(eventid,organizationname,email);
        await prisma.event.create({
            data:{
                Organizationname:organizationname,
                Email:email,
                Phonenumber:phonenumber,
                FlyerImagePath:imageurl,
                Description,
                EventDate,
                EventName,
                EventTime,
                Venue,
                TicketLinks,
                SocialLinks,
                InquiryNumber,
                IsEventWeekly,
                DayofWeek,
                EventId:eventid,
                approved:false,
                paid:false
            }
        });
    }catch(error){
        console.log(error);
        return NextResponse.json({ message:"Could not create event", status: 500 });
    }
    return NextResponse.json({ message: "Event created successfully", });
}

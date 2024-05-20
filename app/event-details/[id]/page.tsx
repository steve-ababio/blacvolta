"use client"
import { IEventDetails } from "@/app/constants/constants";

import Link from "next/link";
import EventDetailFooter from "./components/eventdetailsfooter/eventdetailsfooter";
import EventMainInfo from "./components/eventmaindetails/eventmaindetails";
import EventImage from "./components/eventimage/eventimage";
import EventHeader from "./components/header/header";
import { LuCalendarClock } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { PiTicketLight } from "react-icons/pi";

export default function EventDetail({searchParams}: {searchParams: IEventDetails;}) {
  const {EventName,EventDate,FlyerImagePath,SocialLinks,EventTime,Venue,TicketLinks,InquiryNumber,Description} = searchParams;
  const eventdate = new Date(EventDate).toDateString();

  return (
    <main className="bg-[rgb(22,22,22)] text-white min-h-dvh">
      <EventHeader EventName={EventName}  />
      <main className="w-[95%] max-w-[50rem] mx-auto">
        <EventImage FlyerImagePath={"/uploads/eventflyer.jpeg"} />
        <div className="p-[10px] border-t-slate-300  border-t">
            <h2 className="text-white font-bold p-[10px] mb-8 kameric text-[23px]">
                {EventName}
            </h2>
            <div className="py-[20px] md:px-[40px] md:py-[40px] px-[20px] border border-slate-200 flex flex-col gap-y-8 rounded-[12px]">
                <EventMainInfo
                    title={eventdate} 
                    Icon={LuCalendarClock }
                    titlesibling={<time className="text-[#9A9A9A] text-[16px] kameric font-normal">{EventTime}</time>}
                />
                <EventMainInfo
                    title={Venue}
                    Icon={IoLocationOutline}
                />     
                <EventMainInfo
                    title={"Get your tickets"} 
                    Icon={PiTicketLight}
                    titlesibling={<Link className="text-[16px] kameric text-blue-500 underline" target="_blank" href={TicketLinks}>{TicketLinks}</Link>}
                />
            </div>
        </div>
        <EventDetailFooter 
            description={Description}
            flyerImagePath={FlyerImagePath}
            eventDate={EventDate}
            eventName={EventName}
            eventTime={EventTime}
            venue={Venue}
            phonenumber={InquiryNumber}
            sociallink={SocialLinks}
        />
      </main>
    </main>
  );
}

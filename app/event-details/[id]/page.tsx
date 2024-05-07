"use client"
import { IEventDetails } from "@/app/constants/constants";
import { HiTicket } from "react-icons/hi2";
import { ImLocation2 } from "react-icons/im";
import Link from "next/link";
import EventDetailFooter from "./components/eventdetailsfooter/eventdetailsfooter";
import { FaCalendarMinus } from "react-icons/fa";
import EventMainInfo from "./components/eventmaindetails/eventmaindetails";
import EventImage from "./components/eventimage/eventimage";
import EventHeader from "./components/header/header";

export default function EventDetail({searchParams}: {searchParams: IEventDetails;}) {
  const {EventName,EventDate,FlyerImagePath,SocialLinks,EventTime,Venue,TicketLinks,InquiryNumber,Description} = searchParams;
  const eventdate = new Date(EventDate).toDateString();

  return (
    <main className="bg-white min-h-dvh">
      <EventHeader EventName={EventName}  />
      <main className="w-[95%] max-w-[55rem] mx-auto">
        <EventImage FlyerImagePath={FlyerImagePath} />
        <div className="p-[10px] border-y-slate-300  border-y">
            <h2 className="text-slate-700 font-bold p-[10px] mb-8 text-[25px]">
                {EventName}
            </h2>
            <EventMainInfo
                title={eventdate} 
                className="bg-orange-400/40"
                Icon={FaCalendarMinus}
                titlesibling={<time className="text-slate-500 text-[14px] font-semibold">{EventTime}</time>}
            />
            <EventMainInfo
                title={Venue} 
                className="bg-blue-400/40"
                Icon={ImLocation2}
            />     
            <EventMainInfo
                title={"Get your tickets"} 
                className="bg-red-400/40"
                Icon={HiTicket}
                titlesibling={<Link className="text-[14px] text-blue-500 underline" target="_blank" href={TicketLinks}>{TicketLinks}</Link>}
            />
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

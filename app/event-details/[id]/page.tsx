"use client"
import { IEventDetails } from "@/app/constants/constants";
import { HiTicket } from "react-icons/hi2";
import { ImLocation2 } from "react-icons/im";
import { BsCalendar4} from "react-icons/bs";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";
import EventDetailFooter from "./eventdetailsfooter/eventdetailsfooter";
import { FaCalendarMinus } from "react-icons/fa";

export default function EventDetail({searchParams}: {searchParams: IEventDetails;}) {
  const {EventName,EventDate,FlyerImagePath,EventTime,Venue,TicketLinks,InquiryNumber,Description} = searchParams;
  const eventdate = new Date(EventDate).toDateString();

  return (
    <main className="bg-white min-h-dvh">
      <nav className="flex p-[10px]">
        <Link href="/">
            <div className="mr-[20px]">
                <BiLeftArrowAlt color="rgb(71 85 105" className="hover:scale-125 duration-300" size={30}  />
            </div>
        </Link>
        <header>
            <h1 className="ml-[20px] flex-1 text-slate-700 font-bold text-[20px]">{EventName}</h1>
        </header>
      </nav>
      <main>
        <div className={`h-[30dvh] my-[30px]`}>
            <img
                id="flyerimage"
                src={`${FlyerImagePath}`}
                className="max-w-full h-full w-full object-contain rounded-[10px]"
                alt="Event flyer"
            />
        </div>
        <div className="p-[10px] border-b-slate-300 border-b">
            <h2 className="text-slate-700 font-bold p-[10px] text-[25px]">
                {EventName}
            </h2>
            <div className="p-[10px] bg-zinc-200/40 rounded-[15px]  pb-[10px]">
                <div className="flex items-center">
                    <div className="flex-1 flex justify-center items-center">
                        <FaCalendarMinus size={25} color="rgb(71 85 105" />
                    </div>
                    <div className="text-slate-600 flex-[7] m-[10px]">
                        <h2 className="text-slate-700 text-[16px] font-bold">{eventdate}</h2>
                        <time className="text-slate-400 text-[14px] font-semibold">{EventTime}</time>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="flex-1 flex justify-center items-center">
                        <ImLocation2 size={25} color="rgb(71 85 105" />
                    </div>
                    <div className="text-slate-600 flex-[7] m-[10px]">
                    <   h2 className="my-[10px] text-[16px] font-bold">{Venue}</h2>
                    </div>
                </div>        
                <div className="flex items-center">
                    <div className="flex-1 flex justify-center items-center">
                        <HiTicket size={25} color="rgb(71 85 105)" />
                    </div>
                    <div className="text-slate-600 flex-[7] m-[10px]">
                        <h2 className="my-[10px] text-[16px] font-bold">Get your tickets</h2>
                        <Link className="text-[14px] underline" target="_blank" href={TicketLinks}>{TicketLinks}</Link>
                    </div>
                </div>
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
        />
      </main>
    </main>
  );
}

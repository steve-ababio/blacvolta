import { IEventDetails } from "@/app/constants/constants";
import { HiTicket } from "react-icons/hi2";
import { ImLocation2 } from "react-icons/im";
import { BsCalendar4, BsEnvelope, BsEnvelopePlus} from "react-icons/bs";
import { BiLeftArrowAlt } from "react-icons/bi";
import { LuCalendarClock } from "react-icons/lu";
import { BsDownload } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import Link from "next/link";
import EventDetailFooter from "./eventdetailsfooter/eventdetailsfooter";

export default function EventDetail({searchParams,}: {searchParams: IEventDetails;}) {
  const {
    EventName,
    EventDate,
    FlyerImagePath,
    EventTime,
    Venue,
    TicketLinks,
  } = searchParams;

  const eventdate = new Date(EventDate).toDateString();
  return (
    <main className="bg-white min-h-dvh">
      <nav className="flex p-[10px]">
        <Link href="/calender">
            <div className="mr-[20px]">
                <BiLeftArrowAlt color="rgb(71 85 105" className="hover:scale-125 duration-300" size={30}  />
            </div>
        </Link>
        <h1 className="ml-[20px] flex-1 text-slate-700 font-bold text-[20px]">
          {EventName}
        </h1>
      </nav>
      <div>
        <div className={`h-[30dvh] my-[30px]`}>
            <img
            src={`${FlyerImagePath}`}
            className="max-w-full h-full w-full object-contain rounded-[10px]"
            alt="Event flyer"
            />
        </div>
        <h2 className="text-slate-700 font-bold p-[10px] text-[25px]">
            {EventName}
        </h2>
        <div className="p-[10px] bg-gray-200/50 border-b-slate-400 border pb-[10px]">
            <div className="flex items-center">
                <div className="flex-1 flex justify-center items-center">
                    <BsCalendar4 size={25} color="rgb(71 85 105" />
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
                    <a className="text-[14px]" href={TicketLinks}>{TicketLinks}</a>
                </div>
            </div>
        </div>
        <div>
            <h2 className="px-[10px] py-[20px] text-slate-700 font-bold text-[20px]">About this event</h2>
            <div className="p-[40px] flex text-slate-500">
                <EventDetailFooter text="Inquiry" icon={<CgNotes size={25}/>}/>
                <EventDetailFooter text="Add to calender" icon={<BsCalendar4 size={25}/>}/>
                <EventDetailFooter text="Follow Event" icon={<BsEnvelopePlus size={25}/>}/>
                <EventDetailFooter text="Download Flyer" icon={<BsDownload size={25}/>}/>
            </div>
        </div>
      </div>
    </main>
  );
}

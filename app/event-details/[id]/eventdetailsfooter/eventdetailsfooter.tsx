import { BsDownload,BsEnvelopePlus,BsCalendar4 } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import EventDetailFooterItem from "../eventdetailsfooteritem/eventdetailsfooteritem";
import { addToCalender, downloadEventFlyer } from "@/app/utils/utils";
import Link from "next/link";

type EventDetailFooterProps = {
    description:string,
    flyerImagePath:string,
    eventName:string,
    eventDate:string,
    venue:string,
    eventTime:string,
    phonenumber:string
}
export default function EventDetailFooter({description,flyerImagePath,phonenumber,venue,eventName,eventDate,eventTime}:EventDetailFooterProps){

    return(
        <div>
            <div className="px-[10px]">
                <h2 className="py-[20px] text-slate-700 font-bold text-[20px]">About this event</h2>
                <p className="text-[1rem] text-slate-400">{description}</p>
            </div>
            <div className="p-[40px] flex text-slate-500">
                <Link href={`tel:${phonenumber}`}><EventDetailFooterItem text="Inquiry" icon={<CgNotes size={25}/>}/></Link>
                <EventDetailFooterItem text="Add to calender" onclick={(e)=>addToCalender(e,{eventDate,eventName,eventTime,venue,description})} icon={<BsCalendar4 size={25}/>}/>
                <EventDetailFooterItem text="Follow Event" icon={<BsEnvelopePlus size={25}/>}/>
                <EventDetailFooterItem text="Download Flyer" onclick={e=>downloadEventFlyer(e,flyerImagePath)} icon={<BsDownload size={25}/>}/>
            </div>
        </div>
    )
}
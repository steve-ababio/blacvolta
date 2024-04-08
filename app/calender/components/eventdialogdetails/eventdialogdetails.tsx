import { IEventDetails } from "@/app/constants/constants";
import Link from "next/link";

export default function EventDialogDetails(props:IEventDetails){
    const {Id,EventDate,EventName,EventTime,Venue,FlyerImagePath,Description,TicketLinks} = props;
    let eventdate = new Date(EventDate).toDateString();
    return (
        <>
            <h2 className="my-3 font-bold text-slate-600">{eventdate} Events</h2>
            <div className="flex border-b border-b-[#9A9A9A]">
                <div className="p-[10px] rounded-lg flex-1">
                    <img className="rounded-[10px] max-w-full block" src={FlyerImagePath} alt="Event flyer" />
                </div>
                <div className="p-[10px] flex-[3] text-[1rem]">
                    <div className="text-[#d2042d] font-bold my-[5px]">{EventTime} | {Venue}</div>
                    <div className="font-bold text-slate-600 my-[5px]">{EventName}</div>
                    <a href={TicketLinks} target="_blank" className="my-[5px] block underline text-slate-600">{TicketLinks}</a>
                    <div className="font-bold text-slate-600 my-[5px]">{Description}</div>
                    <div className="mt-[5px] text-right my-[5px]">
                        <Link
                         href={{
                            pathname:`/event-details/${Id}`,
                            query:{...props}
                        }}
                        // as={`/event-details/${Id}`}
                        >
                            <button className="bg-slate-800 text-white px-3 py-1 rounded-[4px] text-[13px]">more info</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
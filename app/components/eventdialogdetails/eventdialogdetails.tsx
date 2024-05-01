import { IEventDetails } from "@/app/constants/constants";
import Link from "next/link";

export default function EventDialogDetails(props:IEventDetails){
    const {Id,EventDate,EventName,EventTime,Venue,FlyerImagePath,Description,TicketLinks} = props;

    return (
        <>
            <div className="sm:flex border-b border-b-[#9A9A9A]">
                <div className="p-[10px] rounded-lg sm:flex-[1]">
                    <img fetchPriority="high" className="rounded-[10px] max-h-full max-w-full block" src={FlyerImagePath} alt="Event flyer" />
                </div>
                <div className="p-[10px] sm:flex-[3] text-[1rem] text-slate-600 ">
                    <div className="text-[#d2042d] font-bold my-[5px]">{EventTime} | {Venue}</div>
                    <div className="font-bold my-[5px]">{EventName}</div>
                    <a href={TicketLinks} target="_blank" className="my-[5px] block underline text-slate-600">{TicketLinks}</a>
                    <div className="font-bold my-[5px]">{Description}</div>
                    <div className="mt-[5px] text-right my-[5px]">
                        <Link
                         href={{
                            pathname:`/event-details/${Id}`,
                            query:{...props}
                        }}
                        // as={`/event-details/${Id}`}
                        >
                            <button className="bg-slate-800 hover:bg-slate-900 my-4 sm:my-0 text-white px-3 py-1 rounded-[4px] text-[13px]">more info</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
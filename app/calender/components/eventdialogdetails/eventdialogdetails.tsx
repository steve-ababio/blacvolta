import { IEventDetails } from "@/app/constants/constants";
import Link from "next/link";

export default function EventDialogDetails(props:IEventDetails){
    const {Id,EventDate,EventName,EventTime,Venue,FlyerImagePath} = props;
    let eventdate = new Date(EventDate).toDateString();
    return (
        <>
            <h2 className="my-3 font-bold text-slate-600">{eventdate} Events</h2>
            <div className="flex border-b border-b-[#9A9A9A]">
                <div className="p-[10px] rounded-lg flex-1">
                    <img  className="rounded-[10px] max-w-full block" src={FlyerImagePath} alt="Event flyer" />
                </div>
                <div className="p-[10px] flex-[3] text-[14px]">
                    <div className="text-[#d2042d] font-bold">{EventTime} | {Venue}</div>
                    <div className="font-bold text-slate-600">{EventName}</div>
                    <div className="mt-[5px] text-right">
                        <Link
                         href={{
                            pathname:`/event-details/${Id}`,
                            query:{...props}
                        }}
                        // as={`/event-details/${Id}`}
                        >
                            <button className="bg-slate-800 text-white px-2 py-1 rounded-[4px] text-[13px]">more info</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
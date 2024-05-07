import { IEventDetails } from "@/app/constants/constants";
import Image from "next/image";
import Link from "next/link";

export default function EventDialogDetails(props:IEventDetails){
    const {Id,EventDate,EventName,EventTime,Venue,FlyerImagePath,Description,TicketLinks} = props;

    return (
        <>
            <div className="grid grid-cols-[1fr] sm:grid-cols-[250px,1fr] md:grid-cols-[300px,1fr] lg:grid-cols-[350px,1fr] border-b w-full border-b-[#9A9A9A]">
                {/* <div className="p-[10px] h-[250px] sm:h-auto rounded-lg sm:flex-[1]">
                    <img fetchPriority="high" className="rounded-[10px] max-h-full max-w-full block" src={FlyerImagePath} alt="Event flyer" />
                </div> */}
                <div className="m-[10px] place-content-center max-w-[250px] sm:max-w-none relative h-[250px] md:h-[300px] lg:h-[350px] rounded-lg">
                    <Image
                        priority
                        src={FlyerImagePath}
                        style={{borderRadius:"10px",display:"block"}}
                        layout="fill"
                        alt="Event flyer"
                    />
                </div>
                <div className="p-[10px] sm:flex sm:flex-col sm:flex-[3] text-[1rem] text-slate-600 ">
                    <div className="text-[#d2042d] font-bold my-[5px]">{EventTime} | {Venue}</div>
                    <div className="font-bold my-[5px]">{EventName}</div>
                    <Link href={TicketLinks} target="_blank" className="my-[5px] block underline text-blue-400">{TicketLinks}</Link>
                    <div className="font-bold my-[5px]">{Description}</div>
                    <div className="mt-[5px] sm:mt-auto text-right my-[5px]">
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
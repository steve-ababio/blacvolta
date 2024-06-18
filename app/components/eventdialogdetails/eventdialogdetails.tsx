import { IEventDetails } from "@/app/constants/constants";
import { useAmplitudeContext } from "@/app/hooks/amplitude";
import Image from "next/image";
import Link from "next/link";

export default function EventDialogDetails(props:IEventDetails){
    const {Id,EventName,EventTime,Venue,FlyerImagePath,Description,EventDate,TicketLinks} = props;
    const {trackAmplitudeEvent} = useAmplitudeContext();

    function trackClickEvent(){
        trackAmplitudeEvent("selected-event",{
            EventName,
            Venue,
            EventDate
        })
    }
    return (
        <>
            <div className="grid grid-cols-[1fr] sm:grid-cols-[250px,1fr] md:grid-cols-[300px,1fr] lg:grid-cols-[350px,1fr] border-b w-full border-b-[#9A9A9A]">
                <div className="m-[10px] place-content-center max-w-[250px] sm:max-w-none relative h-[250px] md:h-[300px] lg:h-[350px] rounded-lg">
                    <Image
                        priority
                        src={FlyerImagePath}
                        style={{borderRadius:"10px",display:"block"}}
                        layout="fill"
                        className="text-white"
                        alt="Event flyer"
                    />
                </div>
                <div className={`p-[10px] sm:flex sm:flex-col sm:flex-[3]  text-white font-kamerik `}>
                    <div className="text-white text-[16px] font-bold my-[5px]"><time className="font-normal">{EventTime}</time> | <span>{Venue}</span> </div>
                    <div className="font-bold my-[5px] text-[16px]">{EventName}</div>
                    <Link href={TicketLinks} target="_blank" className="my-[5px] block text-[14px] sm:text-[16px] underline text-blue-400">{TicketLinks}</Link>
                    <div className="font-normal text-[#9A9A9A] text-[16px] my-[5px]">{Description}</div>
                    <div className="mt-[5px] sm:mt-auto text-right my-[5px]">
                        <Link
                            onClick={trackClickEvent}
                            href={{
                                pathname:`/event-details/${Id}`,
                                query:{...props}
                            }}
                        // as={`/event-details/${Id}`} bg-slate-800 hover:bg-slate-900
                        >
                            <button  className="
                                border border-white hover:bg-white hover:text-slate-700
                                active:bg-white active:text-slate-700 my-4 sm:my-0
                                text-white px-4 py-2 rounded-[4px] text-[13px] duration-300 font-bold"
                            >MORE INFO</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
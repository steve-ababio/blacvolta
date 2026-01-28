import { BvEvent } from "@/app/types/types";
import Image from "next/image";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { formatDateTime } from "@/app/utils/utils";

export default function EventDialogDetails(props:BvEvent){
    const {cover_image,start_date,title,location,description,category,timezone,id} = props;
    const time = formatDateTime(start_date,timezone);
    
    return (
        <>
            <div className="grid grid-cols-[1fr] sm:grid-cols-[250px,1fr] md:grid-cols-[300px,1fr] lg:gap-x-12 md:py-8 md:gap-x-6 lg:grid-cols-[350px,1fr] border-b w-full border-b-[#9A9A9A]">
                <div className="m-[10px] place-content-center h-full w-full relative rounded-lg">
                    <Image
                        priority
                        src={cover_image.value}
                        style={{borderRadius:"10px",height:'auto',width:'auto',display:"block"}}
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="text-bvlight"
                        alt="Event flyer"
                    />
                </div>
                <div className={`p-[10px] sm:flex sm:flex-col sm:flex-[3]  text-bvlight font-kamerik `}>
                    <div className="text-[16px] font-bold my-[5px]"><time className="font-normal">{time}</time> | <span></span>{title}</div>
                    <div className="font-bold my-[5px] text-[16px]">{location.name}</div>
                    <div className="font-normal text-bvgray text-[16px] my-[5px]">{description}</div>
                    <div className="mt-[5px] flex items-center justify-between sm:mt-auto text-right my-[5px]">
                         <div className="text-black bg-white rounded-[4px] w-fit px-4 py-1.5 text-sm">{category}</div>
                        <Link
                            href={{
                                pathname:`/event-details/${id}`,
                            }}
                        // as={`/event-details/${Id}`} bg-slate-800 hover:bg-slate-900
                        >
                            <button  className="
                                border border-white hover:bg-white hover:text-slate-700
                                active:bg-white active:text-slate-700 my-4 sm:my-0
                                text-bvlight px-4 py-2 rounded-[4px] text-[13px] duration-300 font-bold"
                            >MORE INFO</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
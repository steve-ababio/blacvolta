import { BsDownload,BsEnvelopePlus,BsCalendar4 } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import EventDetailFooterItem from "../eventdetailsfooteritem/eventdetailsfooteritem";
import { addToCalender, downloadFile } from "@/app/utils/utils";
import Link from "next/link";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";

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
    const [downloading,setDownloading] = useState(false);
    
    async function downloadEventFlyer(e:React.MouseEvent,FlyerImagePath:string){
        setDownloading(true);
        const response = await fetch(`/api/image?imagepath=${FlyerImagePath}`);
        const imageblob = await response.blob();
        const imageurl = URL.createObjectURL(imageblob);
        downloadFile(imageurl,"eventflyer");
        setDownloading(false);
    }
    return(
        <div>
            <div className="px-[10px]">
                <h2 className="py-[20px] text-slate-700 font-bold text-[20px]">About this event</h2>
                <p className="text-[1rem] text-slate-400">{description}</p>
            </div>
            <div className="p-[40px] flex text-slate-500">
                <Link className="flex-1" href={`tel:${phonenumber}`}><EventDetailFooterItem text="Inquiry" icon={<CgNotes size={25}/>}/></Link>
                <EventDetailFooterItem text="Add to calendar" onclick={(e)=>addToCalender(e,{eventDate,eventName,eventTime,venue,description})} icon={<BsCalendar4 size={25}/>}/>
                <EventDetailFooterItem text="Follow Event" icon={<BsEnvelopePlus size={25}/>}/>
                {
                    downloading ?
                    <div className="flex-1 flex justify-center items-center">
                        <RotatingLines 
                            strokeColor="black" 
                            strokeWidth="4"
                            animationDuration="0.8"
                            width="25"
                            visible={true} />
                    </div>
                    :<EventDetailFooterItem 
                        text="Download Flyer" 
                        onclick={e=>downloadEventFlyer(e,flyerImagePath)} 
                        icon={<BsDownload size={25}/>}
                    />
                }
            </div>
        </div>
    )
}
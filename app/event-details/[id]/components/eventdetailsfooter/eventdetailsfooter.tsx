import { BsDownload,BsEnvelopePlus,BsCalendar4 } from "react-icons/bs";
import EventDetailFooterItem from "../eventdetailsfooteritem/eventdetailsfooteritem";
import { addToCalender, downloadFile } from "@/app/utils/utils";
import Link from "next/link";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { MdManageSearch } from "react-icons/md";

type EventDetailFooterProps = {
    description:string,
    flyerImagePath:string,
    eventName:string,
    eventDate:string,
    venue:string,
    eventTime:string,
    phonenumber:string,
    sociallink:string,
}


export default function EventDetailFooter({description,flyerImagePath,sociallink,phonenumber,venue,eventName,eventDate,eventTime}:EventDetailFooterProps){
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
                <p className="text-[1rem] text-slate-500">{description}</p>
            </div>
            <div className="py-[40px]  gap-2 sm:px-[40px] flex items-start text-slate-500">
                <Link className="flex-1 text-center" href={`tel:${phonenumber}`}><EventDetailFooterItem text="Inquiry" icon={<MdManageSearch size={25}/>}/></Link>
                <EventDetailFooterItem classname="grow-2" text="Add to calendar" onclick={(e)=>addToCalender(e,{eventDate,eventName,eventTime,venue,description})} icon={<BsCalendar4 size={25}/>}/>
                <Link href={sociallink} className="flex-1 text-center"><EventDetailFooterItem text="Follow Event" icon={<BsEnvelopePlus size={25}/>}/></Link>
                {
                    downloading ?
                    <div className="flex-1 flex justify-center items-center">
                        <RotatingLines 
                            strokeColor="rgb(54, 58, 69)" 
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
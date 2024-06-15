"use client"
import Link from "next/link";
import EventDetailFooterItem from "@/app/event-details/[id]/components/eventdetailsfooteritem/eventdetailsfooteritem";
import { BsDownload,BsEnvelopePlus,BsCalendar4 } from "react-icons/bs";
import { addToCalender, downloadFile } from "@/app/utils/utils";
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
                {
                    description.length > 0 &&
                    <>
                        <h2 className="font-kamerik pt-[20px] pb-[5px] text-slate-200 font-bold text-[20px]">About this event </h2>
                        <p className="text-[1rem] text-[#9A9A9A]">{description}</p>
                    </>
                }
            </div>
            <div className="py-[40px] px-[10px] flex gap-2 items-start text-slate-200">
                <Link className="text-center flex-1" href={`tel:${phonenumber}`}><EventDetailFooterItem text="Inquiry" icon={<MdManageSearch size={25}/>}/></Link>
                <EventDetailFooterItem  text="Add to calendar" onclick={(e)=>addToCalender(e,{eventDate,eventName,eventTime,venue,description})} icon={<BsCalendar4 size={25}/>}/>
                <Link href={sociallink} className="text-center flex-1"><EventDetailFooterItem text="Follow Event" icon={<BsEnvelopePlus size={25}/>}/></Link>
                {
                    downloading ?
                    <div className="flex flex-1 justify-center self-center">
                        <RotatingLines 
                            strokeColor="white" 
                            strokeWidth="4"
                            animationDuration="0.8"
                            width="25"
                            visible={true}
                        />
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
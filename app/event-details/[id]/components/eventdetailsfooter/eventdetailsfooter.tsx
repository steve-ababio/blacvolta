"use client"
import Link from "next/link";
import EventDetailFooterItem from "@/app/event-details/[id]/components/eventdetailsfooteritem/eventdetailsfooteritem";
import { BsDownload,BsEnvelopePlus,BsCalendar4 } from "react-icons/bs";
import { addToCalender, downloadFile } from "@/app/utils/utils";
import { useEffect, useState } from "react";
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
    const [open, setOpen] = useState(false);


    // Prevent background scroll when sheet is open
    useEffect(() => {
    if (open) {
    document.body.style.overflow = "hidden";
    } else {
    document.body.style.overflow = "";
    }
    return () => {
    document.body.style.overflow = "";
    };
    }, [open]);
    
    
    return (
        <>
            <div className="px-[10px]">
            {
                description.length > 0 &&
                <>
                    <h2 className="font-kamerik pt-[20px] pb-[5px] text-slate-200 font-bold text-[20px]">About this event </h2>
                    <p className="text-[1rem] text-[#9A9A9A]">{description}</p>
                </>
            }
            </div>
            <div className="block md:hidden">
                <div className="mt-4">
                    <button
                        onClick={() => setOpen(true)}
                        className="px-6 py-3 font-semibold rounded-md bg-white text-black w-full shadow-2xl hover:opacity-90 transition"
                    >
                        Show More
                    </button>
                </div>

                {/* Backdrop */}
                {open && (
                <div
                onClick={() => setOpen(false)}
                className="fixed inset-0 bg-black/40 z-40"
                />
                )}


                {/* Bottom Sheet */}
                <div
                className={`fixed bottom-0 left-0 right-0 z-50 bg-slate-700 rounded-t-2xl shadow-2xl transform transition-transform duration-300 ease-out
                ${open ? "translate-y-0" : "translate-y-full"}`}
                style={{ height: "65vh" }}
                >
                {/* Handle */}
                <div className="flex justify-center py-2">
                <div className="h-1.5 w-12 rounded-full bg-gray-300" />
                </div>

                <div className="p-6">
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

                <button
                onClick={() => setOpen(false)}
                className="w-full py-3 rounded-xl bg-gray-900 text-white"
                >
                Close
                </button>
                </div>
                </div>
            </div>
            <div className="hidden md:block">
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
    </>
    // return(
    //     <div>
    //         <div className="px-[10px]">
    //             {
    //                 description.length > 0 &&
    //                 <>
    //                     <h2 className="font-kamerik pt-[20px] pb-[5px] text-slate-200 font-bold text-[20px]">About this event </h2>
    //                     <p className="text-[1rem] text-[#9A9A9A]">{description}</p>
    //                 </>
    //             }
    //         </div>
    //         <div className="py-[40px] px-[10px] flex gap-2 items-start text-slate-200">
    //             <Link className="text-center flex-1" href={`tel:${phonenumber}`}><EventDetailFooterItem text="Inquiry" icon={<MdManageSearch size={25}/>}/></Link>
    //             <EventDetailFooterItem  text="Add to calendar" onclick={(e)=>addToCalender(e,{eventDate,eventName,eventTime,venue,description})} icon={<BsCalendar4 size={25}/>}/>
    //             <Link href={sociallink} className="text-center flex-1"><EventDetailFooterItem text="Follow Event" icon={<BsEnvelopePlus size={25}/>}/></Link>
    //             {
    //                 downloading ?
    //                 <div className="flex flex-1 justify-center self-center">
    //                     <RotatingLines 
    //                         strokeColor="white" 
    //                         strokeWidth="4"
    //                         animationDuration="0.8"
    //                         width="25"
    //                         visible={true}
    //                     />
    //                 </div>
    //                 :<EventDetailFooterItem 
    //                     text="Download Flyer" 
    //                     onclick={e=>downloadEventFlyer(e,flyerImagePath)} 
    //                     icon={<BsDownload size={25}/>}
    //                 />
    //             }
    //         </div>
    //     </div>
    )

}
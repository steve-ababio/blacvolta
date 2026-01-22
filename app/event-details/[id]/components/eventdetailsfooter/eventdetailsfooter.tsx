"use client"
import Link from "next/link";
import EventDetailFooterItem from "@/app/event-details/[id]/components/eventdetailsfooteritem/eventdetailsfooteritem";
import { BsDownload,BsEnvelopePlus,BsCalendar4 } from "react-icons/bs";
import { addToCalender, downloadFile } from "@/app/utils/utils";
import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { MdManageSearch } from "react-icons/md";
import { Calendar, Download, Heart, ListFilter, MailPlus, Share2 } from "lucide-react";
import { ActionSheet } from "../action-sheet/action-sheet";

type EventDetailFooterProps = {
    id:string,
    description:string,
    flyerImagePath:string,
    eventName:string,
    eventDate:string,
    venue:string,
    eventTime:string,
    phonenumber:string,
    sociallink:string,
}

export default function EventDetailFooter({id,description,flyerImagePath,sociallink,phonenumber,venue,eventName,eventDate,eventTime}:EventDetailFooterProps){
    const [downloading,setDownloading] = useState(false);
    const actions = [
        { 
          icon: <ListFilter className="h-7 w-7" strokeWidth={1.5} />, 
          label: "Inquiry",
          onClick: (e:React.MouseEvent) => makeInquiry()
        },
        { 
          icon: <Calendar className="h-7 w-7" strokeWidth={1.5} />, 
          label: "Add to calendar",
          onClick: (e:React.MouseEvent)=>addToCalender(e,{eventDate,eventName,eventTime,venue,description})
        },
        { 
          icon: <MailPlus className="h-7 w-7" strokeWidth={1.5} />, 
          label: "Follow Event",
          onClick: (e:React.MouseEvent) => followEvent()
        },
        { 
          icon: <Download className="h-7 w-7" strokeWidth={1.5} />, 
          label: "Download Flyer",
          onClick: (e:React.MouseEvent)=>downloadEventFlyer(e,flyerImagePath)
        },
        { 
          icon: <Share2 className="h-7 w-7" strokeWidth={1.5} />, 
          label: "Share",
          onClick: (e:React.MouseEvent) => handleShare(e)
        },
      ];
    async function downloadEventFlyer(e:React.MouseEvent,FlyerImagePath:string){
        setDownloading(true);
        const response = await fetch(`/api/image?imagepath=${FlyerImagePath}`);
        const imageblob = await response.blob();
        const imageurl = URL.createObjectURL(imageblob);
        downloadFile(imageurl,"eventflyer");
        setDownloading(false);
    }
    const [isOpen, setIsOpen] = useState(false);

    const handleShare = async (e:React.MouseEvent) => {
        if (!navigator.share) {
          alert('Sharing not supported on this browser');
          return;
        }
        const url = `https://blacvolta.com/event-details/${id}`
        try {
          await navigator.share({
            title: eventName,
            text: description,
            url: url ?? window.location.href,
          });
        } catch (error) {
          console.error('Share failed:', error);
        }
    }
    function makeInquiry(){
        const linkElement = document.createElement("a");
        linkElement.href = `tel:${phonenumber}`;
        linkElement.click();
    }
    function followEvent(){
        const linkElement = document.createElement("a");
        linkElement.href = sociallink;
        linkElement.click();
       
    }
    // Prevent background scroll when sheet is open
    useEffect(() => {
        if (isOpen) {
        document.body.style.overflow = "hidden";
        } else {
        document.body.style.overflow = "";
        }
        return () => {
        document.body.style.overflow = "";
        };
    }, [isOpen]);
    
    
    return (
        <section className="px-3">
            <div className="px-[10px]">
            {
                description.length > 0 &&
                <>
                    <h2 className="font-kamerik pt-[20px] pb-[5px] text-slate-200 font-bold text-[20px]">About this event </h2>
                    <p className="text-[1rem] text-[#9A9A9A]">{description}</p>
                </>
            }
            </div>
            <div className="mt-4">
                <button
                    onClick={() => setIsOpen(true)}
                    className="px-6 py-3 mb-5 font-semibold rounded-md bg-white text-black w-full shadow-2xl hover:opacity-90 transition"
                >
                    Show More
                </button>
            </div>
            
            {/* <div className="hidden md:block">
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
            </div> */}
            <ActionSheet 
                isOpen={isOpen} 
                onClose={() => setIsOpen(false)} 
                actions={actions}
                columns={3}
            />
        </section>
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
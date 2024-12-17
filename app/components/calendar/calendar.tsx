"use client"
import { Calendar } from 'primereact/calendar';
import { useEffect, useRef, useState } from 'react';
import EventDialog from '@/app/components/eventdialog/eventdialog';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import { useAmplitudeContext } from '@/app/hooks/amplitude';
import Image from "next/image";
import { Nullable } from 'primereact/ts-helpers';
import CtaButton from '../ctabutton/ctabutton';

export default function CalenderModal(){
    const[date,setDate] = useState<Date|null>();
    const[dialogvisible,setDialogVisible] = useState(false);
    const calendarsection = useRef<HTMLDivElement>(null);
    const {trackAmplitudeEvent} = useAmplitudeContext();
    
    function showEventDialog(date:Nullable<Date>){
        setDialogVisible(true);
        const formatteddate = date?.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric'});
        trackAmplitudeEvent("selected-event-date",{EventDate:formatteddate});
    }
    function closeEventDialog(){
        setDialogVisible(false);
    }
    useEffect(()=>{
        calendarsection.current?.scrollIntoView({block:"start",behavior:"smooth"}); 
    },[]);
    return (
        <section ref={calendarsection} id="bv-calender" className="h-full flex flex-col bg-bvprimary items-center justify-center pt-[3rem]">
            <CtaButton href="/uploadevent" label="PUBLISH MY EVENT" />
            <div className="h-[100px] w-full mt-10 relative"><Image src="/assets/images/ads/visa.png" fill className="object-contain absolute mx-auto w-full height-auto" alt="visa ad" /></div>
            <div className="text-center pb-8 mt-12">
                <h2 className="font-kamerik font-bold text-[25px] md:text-[30px] text-white">UPCOMING EVENTS</h2>
            </div>
            <div className="max-w-[40rem] w-[90%]">
                <Calendar
                    autoFocus
                    value={date}
                    className='w-full' 
                    onChange={(e) => {setDate(e.value);showEventDialog(e.value)}}
                    inline
                />
            </div>
            <EventDialog date={date} visible={dialogvisible} closeEventDialog={closeEventDialog}  />
        </section>
    )
}
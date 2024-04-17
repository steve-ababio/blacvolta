"use client"
import { Calendar } from 'primereact/calendar';
import { useEffect, useRef, useState } from 'react';
import EventDialog from '../eventdialog/eventdialog';
import 'primereact/resources/themes/lara-light-blue/theme.css';

export default function CalenderModal(){
    const[date,setDate] = useState<Date|null>();
    const[dialogvisible,setDialogVisible] = useState(false);
    const calendarsection = useRef<HTMLDivElement>(null);
    
    function showEventDialog(){
        setDialogVisible(true)
    }
    function closeEventDialog(){
        setDialogVisible(false);
    }
    useEffect(()=>{
        window.addEventListener("DOMContentLoaded",()=>{
            console.log("page loaded")
            calendarsection.current?.scrollIntoView({block:"start",behavior:"smooth"});
        })
       
    },[]);
    return (
        <section ref={calendarsection} className="h-full flex flex-col items-center justify-center pt-[3%] pb-11">
            <div className="text-center pb-8">
                <h1 className="poppins text-[20px] sm:text-[30px] text-white">UPCOMING EVENTS</h1>
            </div>
            <div className="max-w-[40rem] w-[90%]">
                <Calendar
                    value={date}
                    className='w-full' onChange={(e) => {setDate(e.value);showEventDialog()}}
                    inline
                />
            </div>
            <EventDialog date={date} visible={dialogvisible} closeEventDialog={closeEventDialog}  />
        </section>
    )
}
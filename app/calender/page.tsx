"use client"
import { Calendar } from 'primereact/calendar';
import { useState } from 'react';
import Header from '../components/header/header';
import EventDialog from './components/eventdialog/eventdialog';

export default function Calender(){
    const[date,setDate] = useState<Date|null>();
    const[dialogvisible,setDialogVisible] = useState(false);
    
    function showEventDialog(){
        setDialogVisible(true)
    }
    function closeEventDialog(){
        setDialogVisible(false);
    }
    return(
        <div className="h-dvh">
            <Header />
            <div className="h-full flex flex-col items-center justify-center">
                <div className="text-center -mt-[150px] mb-[90px]">
                    <h1 className='poppins text-[20px] sm:text-[30px]'>UPCOMING EVENTS</h1>
                </div>
                <Calendar value={date}  onChange={(e) => {setDate(e.value);showEventDialog()}} inline/>
            </div>
            <EventDialog date={date} visible={dialogvisible} closeEventDialog={closeEventDialog}  />
        </div>
    )
}
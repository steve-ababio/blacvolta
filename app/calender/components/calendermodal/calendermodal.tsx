"use client"

import { Calendar } from 'primereact/calendar';
import { useState } from 'react';
import EventDialog from '../eventdialog/eventdialog';

export default function CalenderModal(){
    const[date,setDate] = useState<Date|null>();
    const[dialogvisible,setDialogVisible] = useState(false);
    
    function showEventDialog(){
        setDialogVisible(true)
    }
    function closeEventDialog(){
        setDialogVisible(false);
    }
    return (
       <>
        <Calendar value={date} onChange={(e) => {setDate(e.value);showEventDialog()}} inline/>
        <EventDialog date={date} visible={dialogvisible} closeEventDialog={closeEventDialog}  />
       </> 
    )
}
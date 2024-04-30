import downloadjs from "downloadjs";
import html2canvas from "html2canvas";
import { createEvent, EventAttributes } from "ics";

const createEventPromise = function(eventattributes:EventAttributes):Promise<string>{
    return new Promise((resolve,reject)=>{
        createEvent(eventattributes,
            function(error,value){
            if(error){
                return reject(error);
            }
            resolve(value);
        })
    })
}


type EventDetails = {
    eventDate:string,
    eventTime:string,
    venue:string,
    description:string,
    eventName:string
}
export async function addToCalender(e:React.MouseEvent,{eventDate,eventTime,venue,eventName,description}:EventDetails){
    const datearray = eventDate.split("-");
    const eventdate = datearray.map((value)=>parseInt(value));
    const timearray = eventTime.split(":");
    const eventtime = timearray.map((value)=>parseInt(value));

    const event:EventAttributes = {
        title:eventName,
        start:[eventdate[0],eventdate[1],eventdate[2],eventtime[0],eventtime[1]],
        end:[eventdate[0],eventdate[1],eventdate[2],eventtime[0],eventtime[1]],
        location:venue,
        description:description,
    };
    const value = await createEventPromise(event);
    downloadFile(`data:text/calendar,${encodeURIComponent(value)}`,"calendar-event");
}


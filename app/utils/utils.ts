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
export function downloadFile(hrefvalue:string,filename:string){
    const link = document.createElement("a");
    link.href = hrefvalue;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
function formatTime(hourstring:string,other:string){
    const [minutestring,meridian] = other.split(" ");
    let hour = parseInt(hourstring,10);
    let minute = parseInt(minutestring,10);
    if(hour != 12 && meridian === "PM"){
        hour += 12;
    }
    if(hour === 12 && meridian === "AM"){
        hour = 0;
    }
    return [hour,minute];
}
export async function addToCalender(e:React.MouseEvent,{eventDate,eventTime,venue,eventName,description}:EventDetails){
    const datearray = eventDate.split("-");
    const eventdate = datearray.map((value)=>parseInt(value));
    const timearray = eventTime.split(":");

    const [hour,minute] = formatTime(timearray[0],timearray[1]);
    const event:EventAttributes = {
        title:eventName,
        start:[eventdate[0],eventdate[1],eventdate[2],hour,minute],
        end:[eventdate[0],eventdate[1],eventdate[2],hour,minute],
        location:venue,
        description:description,
    };
    const value = await createEventPromise(event);
    downloadFile(`data:text/calendar,${encodeURIComponent(value)}`,"calendar-event");
}


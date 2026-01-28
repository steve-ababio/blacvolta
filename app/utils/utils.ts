import { createEvent, EventAttributes } from "ics";
import { FILE_UPLOAD_URL } from "../constants";
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
export async function uploadImage(image:File){
    const imageformdata = new FormData();
    imageformdata.append("image",image)
    const imageresponse = await fetch(FILE_UPLOAD_URL,{method:"POST",body:imageformdata});
    const {file_name} = await imageresponse.json();
    return file_name as string;
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

export const setTokens = (accessToken: string, refreshToken: string) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  };
  
  export const getAccessToken = () =>
    localStorage.getItem('accessToken');
  
  export const getRefreshToken = () =>
    localStorage.getItem('refreshToken');
  
  export const clearTokens = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  };
  export function formatEventDate(date: Date) {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    
    const formatted = `${yyyy}-${mm}-${dd}`;
    return formatted;
  }
  export function formatDateTime(
    date: string | Date,
    timezone: string = Intl.DateTimeFormat().resolvedOptions().timeZone
  ): string {
    const parsedDate = typeof date === 'string' ? new Date(date) : date;
  
    if (isNaN(parsedDate.getTime())) {
      return '';
    }
  
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZone: timezone,
    }).format(parsedDate);
  }
  
  export function formatDate(date: Date) {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    
    const formatted = `${yyyy}-${mm}-${dd}`;
    return formatted;
  }

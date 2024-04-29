import { IEventDetails } from "@/app/constants/constants";
import EventDialogDetails from "../eventdialogdetails/eventdialogdetails";
import useSWR from "swr";
import Loading from "../eventdialog/loading";

let events:IEventDetails[]; 

const fetcher = (url:string) => fetch(url).then(res => res.json());
export default  function DialogContent({date}:{date:string|undefined}){
    const selecteddate = new Date(date as string).toLocaleDateString("sv");
    const {data,error,isLoading} = useSWR(`/api/events?date=${selecteddate}`,fetcher);

    if (error) return <div>Failed to load</div>
    if(isLoading) return <Loading />
    events = data;
    const sortedevents = events.sort((event1,event2)=>{
        let time1meridian = event1.EventTime.split(" ");
        let time2meridian = event2.EventTime.split(" ");

        const [hourstring1,_] = event1.EventTime.split(":");
        let hour1 = parseInt(hourstring1,10);
        const [hourstring2,__] = event2.EventTime.split(":");
        let hour2 = parseInt(hourstring2,10);

        if(Object.is(time1meridian[1],"PM")){
            if(hour1 !== 12){
                hour1 += 12
            }
        }
        if(Object.is(time1meridian[1],"AM")){
            if(hour1 === 12){
                hour1 = 0;
            }
        }
        if(Object.is(time2meridian[1],"PM")){
            if(hour2 !== 12){
                hour2 += 12
            }
        }
        if(Object.is(time2meridian[1],"AM")){
            if(hour2 === 12){
                hour2 = 0;
            }
        }
        if(hour1 < hour2){
            return -1;
        }else{
            return 1;
        }
    });
    console.log("events: ",events);

    console.log("sorted events:",sortedevents);
    return(
        <div>
            {
               (data.length === 0) ? <div className='text-[1.1rem] sm:text-[1.5em] text-center mt-[50%] font-bold'>No events found for {date}</div>: 
               (sortedevents.map(event => <EventDialogDetails key={event.Id} {...event} />))
            } 
        </div>
    )
}

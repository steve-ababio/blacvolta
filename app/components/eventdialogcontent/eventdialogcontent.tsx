import { IEventDetails } from "@/app/constants/constants";
import EventDialogDetails from "@/app/components/eventdialogdetails/eventdialogdetails";
import useSWR from "swr";
// import Loading from "@/app/components/eventdialog/loading";
import { VscDebugDisconnect } from "react-icons/vsc";
import PulseLoader from "@/app/components/pulseloader/pulseloader";

let events:IEventDetails[]; 
const fetcher = (url:string) => fetch(url).then(res => res.json());
export default function DialogContent({date}:{date:string|undefined}){
    const selecteddate = new Date(date as string).toLocaleDateString("sv");
    const {data,error,isLoading} = useSWR(`/api/events?date=${selecteddate}`,fetcher);

    if (error) {
        return(
            <div className="flex justify-center items-center">
                <VscDebugDisconnect size={40} color="white"/>
                <div className="text-red-600 font-[25px]">Failed to load</div>
            </div>
        )
    }
    if(isLoading) return <PulseLoader />
    events = data;
    // function sortByTime(events:IEventDetails[]){
    //     let sortedValue = 0;
    //     const sortedevents = events.sort((event1,event2)=>{
    //     let time1meridian = event1.EventTime.split(" ");
    //     let time2meridian = event2.EventTime.split(" ");

    //     const [hourstring1,_] = event1.EventTime.split(":");
    //     let hour1 = parseInt(hourstring1,10);
    //     const [hourstring2,__] = event2.EventTime.split(":");
    //     let hour2 = parseInt(hourstring2,10);

    //     if(Object.is(time1meridian[1],"PM")){
    //         if(hour1 !== 12){
    //             hour1 += 12
    //         }
    //     }
    //     if(Object.is(time1meridian[1],"AM")){
    //         if(hour1 === 12){
    //             hour1 = 0;
    //         }
    //     }
    //     if(Object.is(time2meridian[1],"PM")){
    //         if(hour2 !== 12){
    //             hour2 += 12
    //         }
    //     }
    //     if(Object.is(time2meridian[1],"AM")){
    //         if(hour2 === 12){
    //             hour2 = 0;
    //         }
    //     }
    //     console.log(hour1,hour2);
    //     if(hour1 < hour2){
    //         sortedValue = -1;
    //         return -1;
    //     }else{
    //         sortedValue = 1;
    //         return 1;
    //     }
    //     });
    //     return sortedValue;
    // }
    function sortByTime(events: IEventDetails[]): number {
        const [event1, event2] = events;
    
        // Extract time and meridian
        const [time1, meridian1] = event1.EventTime.split(" ");
        const [time2, meridian2] = event2.EventTime.split(" ");
    
        // Convert to 24-hour format
        const [hour1, minute1] = time1.split(":").map(Number);
        const [hour2, minute2] = time2.split(":").map(Number);
    
        const convertedHour1 = meridian1 === "PM" && hour1 !== 12 ? hour1 + 12 : meridian1 === "AM" && hour1 === 12 ? 0 : hour1;
        const convertedHour2 = meridian2 === "PM" && hour2 !== 12 ? hour2 + 12 : meridian2 === "AM" && hour2 === 12 ? 0 : hour2;
    
        // Compare times
        if (convertedHour1 !== convertedHour2) {
            return convertedHour1 - convertedHour2;
        }
        return minute1 - minute2;
    }
    
    function sortByPriority(events: IEventDetails[]): IEventDetails[] {
        return events.sort((prevEvent, nextEvent) => {
            if (prevEvent.rating !== nextEvent.rating) {
                return nextEvent.rating - prevEvent.rating; 
            }
            // If ratings are equal, sort by time
            return sortByTime([prevEvent, nextEvent]);
        });
    }
    const sortedEvents = sortByPriority(events);
    
    return(
        <div className="h-full">
            {
               (data.length === 0) ? <div className='text-[1.1rem] h-screen w-full flex justify-center font-kamerik items-center sm:text-[1.5em] text-bvlight text-center font-bold'>No events found for {date}</div>:
               <div> 
                    <h2 className="my-3 font-bold text-bvlight text-[23px]">{new Date(sortedEvents[0].EventDate).toDateString()} Events</h2>
                    {(sortedEvents.map(event => <EventDialogDetails key={event.Id} {...event} />))}
               </div>
            } 
        </div>
    )
}

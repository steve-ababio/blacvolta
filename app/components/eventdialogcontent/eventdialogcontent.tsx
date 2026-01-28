import EventDialogDetails from "@/app/components/eventdialogdetails/eventdialogdetails";
import useSWR from "swr";
// import Loading from "@/app/components/eventdialog/loading";
import { VscDebugDisconnect } from "react-icons/vsc";
import PulseLoader from "@/app/components/pulseloader/pulseloader";
import { formatEventDate } from "@/app/utils/utils";
import { addDays } from "date-fns";
import { BvEvent } from "@/app/types/types";

const page = 1;
const limit = 100;
let events:BvEvent[] = []; 
const fetcher = (url:string) => fetch(url).then(res => res.json());
export default function DialogContent({date}:{date:string|undefined}){
    const selectedDate = new Date(date as string).toLocaleDateString("sv");
    const startDate = formatEventDate(new Date(selectedDate));
    const endDate = formatEventDate(addDays(selectedDate, 1));
    const eventUrl = `https://api.blacvolta.com/api/events?date_from=${startDate}&date_to=${endDate}&page=${page}&${limit}&status=published`
    const {data,error,isLoading} = useSWR(eventUrl,fetcher);
    
    if (error) {
        return(
            <div className="flex justify-center items-center">
                <VscDebugDisconnect size={40} color="white"/>
                <div className="text-red-600 font-[25px]">Failed to load</div>
            </div>
        )
    }
    if(isLoading) return <PulseLoader />
    events = data.data.events;
    
    function sortByTime(events: BvEvent[]) {
       return events.sort(compareStartDates);
    }
    function compareStartDates(a: BvEvent, b: BvEvent) {
        return new Date(a.start_date).getTime() - new Date(b.start_date).getTime();
    }
    const sortedEvents = sortByTime(events);
    
    return(
        <div className="h-full">
            {
               (data.length === 0) ? <div className='text-[1.1rem] h-screen w-full flex justify-center font-kamerik items-center sm:text-[1.5em] text-bvlight text-center font-bold'>No events found for {date}</div>:
               <div> 
                    <h2 className="my-3 font-bold text-bvlight text-[23px]">{new Date(sortedEvents[0].start_date).toDateString()} Events</h2>
                    {(sortedEvents.map(event => <EventDialogDetails key={event.id} {...event} />))}
               </div>
            } 
        </div>
    )
}

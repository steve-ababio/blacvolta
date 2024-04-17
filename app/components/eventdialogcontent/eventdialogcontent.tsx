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
    return(
        <div>
            {
               (data.length === 0) ? <div className='text-[1.1rem] sm:text-[1.5em] text-center mt-[50%] font-bold'>No events found for {date}</div>: 
               (events.map(event => <EventDialogDetails key={event.Id} {...event} />))
            } 
        </div>
    )
}

import { IEventDetails } from "@/app/constants/constants";
import EventDialogDetails from "@/app/components/eventdialogdetails/eventdialogdetails";
import useSWR from "swr";
import Loading from "@/app/components/eventdialog/loading";
import { VscDebugDisconnect } from "react-icons/vsc";

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
    return(
        <div className="h-full">
            {
               (data.length === 0) ? <div className='text-[1.1rem] h-[80vh] w-full flex justify-center font-kamerik items-center sm:text-[1.5em] text-white text-center font-bold'>No events found for {date}</div>:
               <div> 
                    <h2 className="my-3 font-bold text-white text-[23px]">{new Date(sortedevents[0].EventDate).toDateString()} Events</h2>
                    {(sortedevents.map(event => <EventDialogDetails key={event.Id} {...event} />))}
               </div>
            } 
        </div>
    )
}

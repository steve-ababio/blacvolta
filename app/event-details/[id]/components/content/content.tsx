'use client'
import PulseLoader from "@/app/components/pulseloader/pulseloader";
import { formatDateTime } from "@/app/utils/utils";
import { VscDebugDisconnect } from "react-icons/vsc";
import useSWR from "swr";
import EventHeader from "../header/header";
import EventImage from "../eventimage/eventimage";
import EventDetails from "../event-details/event-details";
import EventDetailFooter from "../eventdetailsfooter/eventdetailsfooter";

const fetcher = (url:string) => fetch(url).then(res => res.json());
export default function EventContent({id}:{id:string}){

    const eventUrl = `https://api.blacvolta.com/api/events/${id}`;
    const {data,error,isLoading} = useSWR(eventUrl,fetcher);
    if (error) {
      return(
          <div className="flex justify-center items-center">
              <VscDebugDisconnect size={40} color="white"/>
              <div className="text-red-600 font-[25px]">Failed to load</div>
          </div>
      )
    }
    if(isLoading)  
      return(
       <div className="h-screen w-full flex items-center justify-center"><PulseLoader /></div>
      )
    const event = data.data;
    const eventdate = new Date(event.start_date).toDateString();
    const time = formatDateTime(event.start_date,event.timezone);

    return (
      <main className="bg-[rgb(22,22,22)] text-white min-h-dvh">
        <EventHeader EventName={data.title}  />
        <main className="w-[100%] max-w-[50rem] mx-auto">
          <EventImage flyerImagePath={event.cover_image.value} title={event.title} />
          <div className="p-[10px] ">
              <h2 className="text-white hidden sm:block font-bold p-[10px] mb-8 font-kamerik text-[23px]">
                  {event.title}
              </h2>
              <EventDetails
                eventDate={eventdate}
                venue={event.venue}
                eventTime={time}
                ticketLink={event.external_url}
                mapUrl={event.google_maps_link}
              />
          </div>
          <EventDetailFooter 
              id={id!}
              description={event.description}
              flyerImagePath={event.cover_image.value}
              eventDate={eventdate}
              eventName={event.title}
              eventTime={time}
              venue={event.venue}
              phonenumber={event.contact_phone!}
              lat={event.location.latitude}
              long={event.location.longitude}
              tickets={event.tickets}
          />
        </main>
      </main>
    );
}
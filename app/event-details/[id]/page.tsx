import { IEventDetails } from "@/app/constants/constants";
import EventDetailFooter from "@/app/event-details/[id]/components/eventdetailsfooter/eventdetailsfooter";
import EventImage from "@/app/event-details/[id]/components/eventimage/eventimage";
import EventHeader from "@/app/event-details/[id]/components/header/header";
import EventDetails from "./components/event-details/event-details";


export default function EventDetail({searchParams}: {searchParams: IEventDetails}) {
  const {EventName,EventDate,FlyerImagePath,SocialLinks,EventTime,Venue,TicketLinks,InquiryNumber,Description,EventId} = searchParams;
  const eventdate = new Date(EventDate).toDateString();

  return (
    <main className="bg-[rgb(22,22,22)] text-white min-h-dvh">
      <EventHeader EventName={EventName}  />
      <main className="w-[100%] max-w-[50rem] mx-auto">
        <EventImage flyerImagePath={FlyerImagePath} title={EventName} />
        <div className="p-[10px] ">
            <h2 className="text-white hidden sm:block font-bold p-[10px] mb-8 font-kamerik text-[23px]">
                {EventName}
            </h2>
            <EventDetails
              eventDate={eventdate}
              venue={Venue}
              eventTime={EventTime}
              ticketLink={TicketLinks}
            />
        </div>
        <EventDetailFooter 
            id={EventId!}
            description={Description}
            flyerImagePath={FlyerImagePath}
            eventDate={EventDate}
            eventName={EventName}
            eventTime={EventTime}
            venue={Venue}
            phonenumber={InquiryNumber}
            sociallink={SocialLinks}
        />
      </main>
    </main>
  );
}

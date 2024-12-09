import { Suspense } from "react";
import { unstable_noStore } from "next/cache";
import PodcastStations from "@/app/components/podcaststations/podcaststations";
import Home from "@/app/components/home/home";
import Footer from "@/app/components/footer/footer";
import CalenderModal from "@/app/components/calendar/calendar";
import BlogLoader from "@/app/components/editorialloader/editorialloader";
import Editorials from "@/app/components/editorialposts/editorialposts";
import LatestDettyDecemberGuide from "./components/latestdettydecemberguide/latestdettydecemberguide";
import Ads from "./components/ads/upcomingevent";
import TicketPopup from "./components/ticketpopup/ticketpopup";

export default async function HomePage() 
{
  unstable_noStore();  
  return (
    <main className="min-h-screen">
      <Home />
      <CalenderModal />
      <Ads />
      <Suspense fallback={<BlogLoader size={3} />}>
        <LatestDettyDecemberGuide />
      </Suspense>
      <Suspense fallback={<BlogLoader size={3} />}>
        <Editorials />
      </Suspense>
      <PodcastStations />
      <Footer />
      <TicketPopup />
    </main>
  );
}


import { unstable_noStore } from "next/cache";
import PodcastStations from "@/app/components/podcaststations/podcaststations";
import Home from "@/app/components/home/home";
import Footer from "@/app/components/footer/footer";
import CalenderModal from "@/app/components/calendar/calendar";
import Editorials from "@/app/components/editorialposts/editorialposts";
import Ads from "./components/ads/upcomingevent";
import AdBanner from "./components/ads/ad-banner";

export default async function HomePage() 
{
  unstable_noStore();  
  return (
    <main className="min-h-screen">
      <Home />
      <CalenderModal />
      <AdBanner />
      <Ads />
      <Editorials />
      <PodcastStations />
      <Footer />
      {/* <TicketPopup /> */}
    </main>
  );
}

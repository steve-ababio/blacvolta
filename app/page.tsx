
import { unstable_noStore } from "next/cache";
import PodcastStations from "@/app/components/podcaststations/podcaststations";
import Home from "@/app/components/home/home";
import Footer from "@/app/components/footer/footer";
import CalenderModal from "@/app/components/calendar/calendar";
import Editorials from "@/app/components/editorialposts/editorialposts";
import Ads from "./components/ads/upcomingevent";
import AdBanner from "./components/ads/ad-banner";
import { FILE_BASE_URL } from "./constants";
import Partners from "./bv-card/components/partners/partners.component";
import { PartnerType } from "./types/enums";

export default async function HomePage() 
{
  unstable_noStore();  
  return (
    <main className="min-h-screen">
      <Home />
      <div className="py-5 mt-5">
        <video src={`${FILE_BASE_URL}bv-card-motion.mp4`} className="w-full h-auto md:h-[450px] object-contain" autoPlay loop muted></video>
      </div>
      <CalenderModal />
      {/* <AdBanner /> */}
      {/* <Ads /> */}
      <Partners type={PartnerType.BV_SOCIAL}/>
      <Editorials />
      <PodcastStations />
      <Footer />
      {/* <TicketPopup /> */}
    </main>
  );
}

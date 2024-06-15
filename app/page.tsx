import { Suspense } from "react";
import { unstable_noStore } from "next/cache";
import PodcastStations from "@/app/components/podcaststations/podcaststations";
import Home from "@/app/components/home/home";
import Footer from "@/app/components/footer/footer";
import CalenderModal from "@/app/components/calendar/calendar";
import BlogLoader from "@/app/components/editorialloader/editorialloader";
import Editorials from "@/app/components/editorialposts/editorialposts";

export default async function HomePage() 
{
  unstable_noStore();  
  return (
    <main className="min-h-screen">
      <Home />
      <CalenderModal />
      <Suspense fallback={<BlogLoader size={3} />}>
        <Editorials />
      </Suspense>
      <PodcastStations />
      <Footer />
    </main>
  );
}

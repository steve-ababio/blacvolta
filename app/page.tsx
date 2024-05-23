import PodcastStations from "./components/podcaststations/podcaststations";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import CalenderModal from "./components/calendar/calendar";
import { unstable_noStore } from "next/cache";
import { Suspense } from "react";
import BlogLoader from "./components/editorialloader/editorialloader";
import Editorials from "./components/editorialposts/editorialposts";

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

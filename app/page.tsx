import PodcastStations from "./components/podcaststations/podcaststations";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import CalenderModal from "./components/calendar/calendar";
import BlogPosts from "./components/blogposts/blogposts";
import { unstable_noStore } from "next/cache";
import { Suspense } from "react";

export default async function HomePage() 
{
  unstable_noStore();  
  return (
    <main className="min-h-screen">
      <Home />
      <CalenderModal />
      <Suspense fallback={<div className="text-[20px] text-white font-kamerik flex justify-center items-center">Fetching blogs</div>}>
        <BlogPosts />
      </Suspense>
      <PodcastStations />
      <Footer />
    </main>
  );
}

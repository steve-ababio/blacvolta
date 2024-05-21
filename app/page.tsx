import PodcastStations from "./components/podcaststations/podcaststations";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import CalenderModal from "./components/calendar/calendar";
import BlogPosts from "./components/blogposts/blogposts";
import { unstable_noStore } from "next/cache";
import { Suspense } from "react";
import BlogLoader from "./components/blogloader/blogloader";

export default async function HomePage() 
{
  unstable_noStore();  
  return (
    <main className="min-h-screen">
      <Home />
      <CalenderModal />
      <Suspense fallback={<BlogLoader size={3} />}>
        <BlogPosts />
      </Suspense>
      <PodcastStations />
      <Footer />
    </main>
  );
}

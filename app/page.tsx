import PodcastStations from "./components/podcaststations/podcaststations";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import CalenderModal from "./components/calendar/calendar";
import BlogPosts from "./components/blogposts/blogposts";
import { Suspense } from "react";

export default function HomePage() {
  
  return (
    <main className="min-h-screen">
      <Home />
      <CalenderModal />
      <Suspense fallback={<div className="flex justify-center items-center">loading blogs</div>}>
        <BlogPosts />
      </Suspense>
      <PodcastStations />
      <Footer />
    </main>
  );
}

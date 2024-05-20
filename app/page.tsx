import UpcomingEvent from "./components/ads/upcomingevent";
import PodcastStations from "./components/podcaststations/podcaststations";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import CalenderModal from "./components/calendar/calendar";
import BlogPosts from "./components/blogposts/blogposts";

export default function App() {
  
  return (
    <main className="min-h-screen">
      <Home />
      <CalenderModal />
      <BlogPosts />
      <PodcastStations />
      <Footer />
    </main>
  );
}

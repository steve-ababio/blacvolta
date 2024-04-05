import UpcomingEvent from "./components/upcomingevent/upcomingevent";
import PodcastStations from "./components/podcaststations/podcaststations";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";

export default function App() {
  
  return (
    <main>
      <Home />
      <UpcomingEvent />
      <PodcastStations />
      <Footer />
    </main>
  );
}

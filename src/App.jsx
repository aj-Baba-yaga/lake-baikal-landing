import Bookings from "./components/Bookings";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Tour from "./components/Tour";
import TourCards from "./components/TourCards";
import SEO from "./components/SEO";

function App() {
  return (
    <>
      <SEO
        title="Lake Baikal Tours | Premium Guided Expeditions"
        description="Discover premium guided tours across Lake Baikal. Explore winter expeditions, summer treks, and cultural journeys with expert guides."
      />

      <Hero />
      <Intro />
      <Tour />
      <TourCards />
      <Bookings />
      <Footer />
    </>
  );
}

export default App;

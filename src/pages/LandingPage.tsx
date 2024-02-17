import Footer from "../components/Footer/Footer";
import Hero from "../components/HeroSection/Hero";
import Navbar from "../components/Navbar/Navbar";
import OurServices from "../components/OurServices/OurServices";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero id="hero" />
      <OurServices id="our-services" />
      <Footer />
    </div>
  );
}

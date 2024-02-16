import FrequentlyAskedQuestions from "../components/Faqs/Faqs";
import Footer from "../components/Footer/Footer";
import Hero from "../components/HeroSection/Hero";
import Navbar from "../components/Navbar/Navbar";
import ServicesProvided from "../components/ServicesProvided/ServicesProvided";
import WhyUs from "../components/WhyUs/WhyUs";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero id="hero" />
      <WhyUs id="why-us" />
      {/* <ServicesProvided id="services" /> */}
      {/* <FrequentlyAskedQuestions id="faq" /> */}
      <Footer />
    </div>
  );
}

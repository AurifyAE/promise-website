import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import HeroSection from "./components/home/HeroSection";
import Link from "next/link";
import AboutSection from "./components/home/AboutSection";
import EthicalRefiningSection from "./components/home/EthicalRefiningSection";
import InvestmentOptions from "./components/home/InvestmentOptions";
import WhyChooseUs from "./components/home/WhyChooseUs";


export default function Home() {

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      <Services />

      <WhyChooseUs />

      <InvestmentOptions />

      <EthicalRefiningSection />

      {/* <Testimonials /> */}

      <Contact />
      <Footer />
    </div>
    
  );
}

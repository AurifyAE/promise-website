import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}


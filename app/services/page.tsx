import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
 

function ServicesPage() {
  return (
    <div>
        <Navbar />
        <div className="pt-20 md:pt-24">
            <Services />
        </div>
        <Footer />
    </div>
  )
}

export default ServicesPage;
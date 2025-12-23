import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import { products } from "@/data/products";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/videos/home/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full w-full flex-col justify-center px-8 text-left text-white md:px-16 lg:px-24">
          <div className="max-w-2xl">
            <h1 className="mb-1 text-3xl  md:text-4xl lg:text-5xl">
              Excellence in
            </h1>
            <h1 className="mb-8 text-3xl font-bold md:text-4xl lg:text-5xl">
              Precious Metals Refining
            </h1>
            <p className="mb-8 text-sm md:text-base">
              Sharjah's trusted gold and precious metals refinery, delivering world-class refining, assaying, recycling, and silver purification services with integrity and precision.
            </p>
            <button className="rounded-full bg-[#ECC273] px-6 py-3 text-sm  md:text-base text-black transition-colors hover:bg-[#d4b28a] flex items-center justify-center gap-2">
              Explore Our Services <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        {/* Fixed Quote Button */}
        <button className="fixed bottom-8 right-8 z-50 rounded-full bg-black/70 backdrop-blur-sm px-8 py-3 text-sm text-white shadow-lg transition-all hover:scale-103 hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-opacity-50 md:px-8 md:py-4 md:text-base flex items-center justify-center gap-2">
          REQUEST FOR QUOTE <ArrowRight className="w-4 h-4 -rotate-45" />
        </button>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col items-center md:flex-row gap-12">
            {/* Left Column - Image */}
            <div className="w-full md:w-1/2">
              <div className="relative h-80 md:h-96 overflow-hidden shadow-xl">
                <Image
                  src="/images/home/gold-in-hand.jpg"
                  alt="Precious Metals Refining"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Right Column - Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Refining with Responsibility, Precision, and Trust</h2>
              <p className="text-[#1A1A1A] mb-8 leading-relaxed">
                Promise Gold Refinery is a state-of-the-art facility in Sharjah, UAE, offering high-purity gold and silver refining services to clients worldwide. We combine cutting-edge technology with responsible sourcing practices aligned with OECD guidelines — ensuring transparency, traceability, and sustainability in every process.
              </p>
              <button className="bg-[#EBDECF] hover:bg-[#D9C8B4] text-black py-3 px-8 rounded-full transition-colors duration-300 flex items-center justify-center gap-2">
                About Our Refinery  <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      

      <Services />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="relative overflow-visible rounded-[40px] border border-[#E3C9A4] bg-white px-8 py-12 md:px-12 md:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-8">
                  WHY CHOOSE US
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 text-sm md:text-base pb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-[#C2882A] leading-snug">
                      Experience &amp;
                      <br />
                      Expertise
                    </h3>
                    <p className="mt-2 text-zinc-700 leading-relaxed">
                      Decades of refining knowledge and global best practices.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#C2882A] leading-snug">
                      Transparency &amp;
                      <br />
                      Security
                    </h3>
                    <p className="mt-2 text-zinc-700 leading-relaxed">
                      Full traceability and documented chain-of-custody.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#C2882A] leading-snug">
                      Responsible
                      <br />
                      Sourcing
                    </h3>
                    <p className="mt-2 text-zinc-700 leading-relaxed">
                      100% OECD-compliant ethical refining and sourcing.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#C2882A] leading-snug">
                      Advanced
                      <br />
                      Technology
                    </h3>
                    <p className="mt-2 text-zinc-700 leading-relaxed">
                      Precision equipment ensuring consistently high recovery rates.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:items-end justify-between gap-10">
                <div className="relative md:h-60 md:w-30 lg:h-96 lg:w-80 bg-white -mt-180 md:-mr-120 md:-mt-120 lg:mr-0 lg:-mt-30 -rotate-12 rounded-full mb-5 opacity-50 md:opacity-100">
                  <div className="absolute right-5 md:right-15 lg:top-0 lg:right-30 w-12 h-12 md:w-15 md:h-15 lg:h-30 lg:w-30 rounded-full bg-[#ECC273]" />
                  <div className="absolute top-15 right-0 md:top-18  md:right-5 lg:top-35 lg:right-10 w-12 h-12 md:w-15 md:h-15  lg:h-30 lg:w-30 rounded-full bg-[#294734]/50" />
                  <div className="absolute top-30 md:top-28 right-5 md:right-10 lg:top-70 lg:right-28 w-12 h-12 md:w-15 md:h-15 lg:h-30 lg:w-30 rounded-full bg-[#294734]" />
                </div>

                <button className="rounded-full bg-[#E3C9A4] px-6 py-3 text-xs md:text-sm tracking-wide text-black shadow-sm transition-colors hover:bg-[#d1b384] flex items-center justify-center gap-2">
                  LEARN MORE ABOUT OUR PROCESS <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left: Product carousel */}
            <div className="flex-1 w-full overflow-x-auto pb-4">
              <div className="flex gap-10 min-w-max">
                {products.map((product) => (
                  <div key={product.id} className="flex flex-col items-center">
                    <div className="relative h-72 w-56 flex items-end justify-center">
                      <Image
                        src={product.imageSrc}
                        alt={product.name}
                        fill
                        className="object-contain drop-shadow-xl"
                      />
                    </div>
                    <div
                      className={`-mt-6 h-18 rounded-full bg-black flex items-center justify-center text-[10px] tracking-[0.2em] text-white uppercase ${
                        product.id === 'gold-1kg'
                          ? 'w-56 text-center'
                          : 'w-56'
                      }`}
                    >
                      {product.weightLabel}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Heading + arrow */}
            <div className="flex items-center lg:items-end gap-4 lg:flex-col lg:gap-8">
              <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ECC273] shadow-md transition-transform hover:scale-105">
                <ArrowRight className="w-4 h-4 text-black" />
              </button>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black text-right lg:text-left lg:-rotate-6 leading-tight whitespace-nowrap">
                YOUR
                <br />
                INVESTMENT
                <br />
                OPTIONS
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-1">
              <h2 className="text-4xl text-black font-bold mb-6">Ethical Refining, Global Standards</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                At Promise Gold Refinery, we are committed to ethical sourcing and sustainable refining practices. We follow OECD guidelines to ensure all precious metals are responsibly obtained and processed with full environmental and social compliance.
              </p>
              <Link
                href="/ethical-refining"
                className="bg-[#EBDECF] hover:bg-[#D9C8B4] text-black py-3 px-8 rounded-full transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Our Responsible Practices <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:order-2">
              <div className="relative overflow-hidden shadow-xl">
                <Image
                  src="/images/home/gold-refining.jpg"
                  alt="Our Services"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <Contact />
      <Footer />
    </div>
    
  );
}

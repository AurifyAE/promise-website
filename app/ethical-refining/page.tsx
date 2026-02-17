import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function EthicalRefining() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Banner */}
      <section className="relative mt-22 h-72 md:h-96 w-full">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/home/gold-refining-full-width.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
          Environmental, Social, and Governance (ESG)
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl space-y-6 text-[#1A1A1A]">
          <p className="text-sm md:text-base leading-relaxed">
          The act of refining carries responsibility beyond the refinery walls.
          </p>

          <p className="text-sm md:text-base leading-relaxed">
          Promise Gold Refinery operates with an understanding that precious metals connect economies, communities, and generations. We are committed to conducting operations in a manner that reflects environmental awareness, social responsibility, and ethical governance.

          </p>

          <div className="space-y-3 text-sm md:text-base">
            <h5 className="text-base md:text-lg font-bold text-black">
            Our ESG commitment includes:
            </h5>
            <p className="leading-relaxed font-bold">
            Environmental Responsibility
            </p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>Controlled waste management practices</li>
              <li>Efficient material recovery to minimize resource loss</li>
              <li>Responsible handling of refining by-products</li>
            </ul>
          </div>

          <div className="space-y-3 text-sm md:text-base">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
            
            </h2>
            <p className="font-bold">
            Social Responsibility
            </p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>Fair and respectful workplace environment</li>
              <li>Skilled employment opportunities</li>
              <li>Safe and structured working conditions</li>
            </ul>
        
          </div>

          <div className="space-y-3 text-sm md:text-base">
            <p className="font-bold">
            Governance Integrity
            </p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>Transparent operational procedures</li>
              <li>Structured client onboarding and documentation</li>
              <li>Responsible sourcing awareness</li>
            </ul>
            <p className="leading-relaxed">
              We recognize that ESG is not a destination, but a continuous path of improvement.
            </p>
          </div>

          {/* <div className="space-y-3 text-sm md:text-base">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Transparency &amp; Accountability
            </h2>
            <p className="leading-relaxed">
              Transparency is central to our mission. Every refined product from Promise Gold Refinery is backed by a chain of custody that can be independently verified, ensuring our clients receive gold that is:
            </p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>Fully traceable</li>
              <li>Ethically sourced</li>
              <li>Refined according to rigorous global standards</li>
            </ul>
            <p className="leading-relaxed">
              Whether serving artisanal miners, international banks, jewellery manufacturers, or global traders, we stand behind the integrity of every transaction.
            </p>
          </div> */}
        </div>
      </section>

      <Footer />
    </div>
  );
}


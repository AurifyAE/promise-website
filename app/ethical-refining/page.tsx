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
            Ethical Refining &amp; Global Standards
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl space-y-10 text-[#1A1A1A]">
          <p className="text-sm md:text-base leading-relaxed">
            At Promise Gold Refinery, ethical refining and adherence to global standards are at the heart of everything we do. As a trusted precious metals refinery based in Sharjah, we are committed to responsible practices that ensure every ounce of gold we process is refined with integrity, transparency, and respect for people and the planet — setting a benchmark in the industry for ethical excellence.
          </p>

          <div className="space-y-3 text-sm md:text-base">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Responsible Sourcing You Can Trust
            </h2>
            <p className="leading-relaxed">
              We believe that ethical sourcing is the foundation of responsible refining. That’s why every batch of gold we accept is carefully vetted through strict due diligence procedures aligned with internationally recognised frameworks such as the OECD Due Diligence Guidance for Responsible Supply Chains. This ensures that:
            </p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>All gold is conflict-free and sourced from legitimate, traceable origins.</li>
              <li>Supply chain partners meet our high standards for human rights, labour practices, and environmental stewardship.</li>
              <li>Comprehensive documentation and transparent processes support full traceability from source to refined product.</li>
            </ul>
          </div>

          <div className="space-y-3 text-sm md:text-base">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Global Compliance &amp; Best Practices
            </h2>
            <p className="leading-relaxed">
              Promise Gold Refinery adheres to strict international standards and regulatory requirements throughout the refining journey. Our processes are designed to meet or exceed global expectations, including:
            </p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>Compliance with anti-money laundering (AML) and know-your-customer (KYC) protocols.</li>
              <li>Rigorous internal quality control measures that uphold accountability at every stage.</li>
              <li>Alignment with widely recognised industry benchmarks for precious metal refining and responsible trade.</li>
            </ul>
            <p className="leading-relaxed">
              By integrating these standards into our operations, we not only deliver refined gold of exceptional quality but also reinforce trust with partners and clients worldwide.
            </p>
          </div>

          <div className="space-y-3 text-sm md:text-base">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Environmental &amp; Social Responsibility
            </h2>
            <p className="leading-relaxed">
              We are dedicated to minimising the environmental impact of refining while supporting the communities connected to our supply chain. Our commitment includes:
            </p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>Promoting environmentally sound practices and efficient resource management.</li>
              <li>Encouraging our suppliers and partners to uphold strong environmental and social governance (ESG) principles.</li>
              <li>Ensuring our refining operations contribute positively to sustainable economic development.</li>
            </ul>
            <p className="leading-relaxed">
              By championing these values, we help foster a gold ecosystem that is not only profitable but also socially responsible and environmentally sustainable.
            </p>
          </div>

          <div className="space-y-3 text-sm md:text-base">
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


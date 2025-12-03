import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Testimonials from "@/app/components/Testimonials";
import Footer from "@/app/components/Footer";
import Faq, { FAQItem } from "@/app/components/Faq";
import { ArrowRight } from "lucide-react";

const faqData: FAQItem[] = [
    {
      question: "What purity levels are available for silver?",
      answer: "We refine to commercial and investment standards including 999 and 999.9 fineness with certificates."
    },
    {
      question: "Do you accept silver scrap and industrial residues?",
      answer: "Yes - we process jewelry scrap, industrial residuals and bullion"
    },
    {
      question: "Can you produce custom forms (bars, granules)?",
      answer: "Yes - we can produce cast bars, granules or client-specified formats."
    }
  ];

  const whatWeOffer = [
    "Full refining workflow: melting, chemical purification, electrolytic refining (as needed) and final assaying.",
    "Deliverable forms: cast bars, granules and specified fineness (e.g., 999, 999.9).",
    "Traceable documentation: certificates of analysis and secure chain-of-custody paperwork."
  ]

  const benefits = [
    "Jewelry manufacturers, industrial buyers, coin and bar producers."
  ]


export default function GoldRefining() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Top Section - Text Left, Image Right with Curved Shape */}
      <section className="relative pt-20 md:pt-24 pb-0 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Text */}
            <div className="py-12 lg:py-20">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6">
                High-Purity  Silver Refining
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
              Silver Refining in Sharjah — High-Purity Silver for Jewellery & Industry
              Promise Gold Refinery provides precision silver refining to transform raw silver feeds into market-grade, high-purity silver suitable for jewellery, industrial, and bullion markets.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              <span className="font-semibold">Key Features:</span>
                <ul className="list-disc list-outside text-gray-700 leading-relaxed text-sm md:text-base px-6">
                  {whatWeOffer.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </p>
            </div>

            {/* Right Side - Image with Curved Shape */}
            <div className="relative h-[400px] md:h-[500px]">
              {/* Image */}
              <div className="relative h-full w-full rounded-bl-[300px] overflow-hidden">
                <Image
                  src="/images/services/silver-refining-img1.png"
                  alt="Refinery facility"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section - Image Left, Text Right with Curved Shape */}
      <section className="relative py-0 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Image with Curved Shape */}
            <div className="relative h-[400px] md:h-[500px] rounded-tr-[300px] overflow-hidden order-2 lg:order-1">
              {/* Image */}
              <div className="relative h-full w-full">
                <Image
                  src="/images/services/silver-refining-img2.png"
                  alt="Gold refining process"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right Side - Text and Buttons */}
            <div className="py-12 lg:py-20 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl -rotate-4 font-bold text-black mb-6">
                WHO BENEFITS
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                <ul className="list-disc list-outside text-gray-700 leading-relaxed text-sm md:text-base px-6">
                  {benefits.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#294734] hover:bg-[#1e3326] text-white py-3 px-8 rounded-4xl transition-colors font-semibold duration-300 flex items-center justify-center gap-2">
                  ENQUIRE NOW <ArrowRight className="w-4 h-4" />
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq faqData={faqData} />

      <Testimonials />
      <Footer />
    </div>
  );
}


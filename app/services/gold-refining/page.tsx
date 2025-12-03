import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Testimonials from "@/app/components/Testimonials";
import Footer from "@/app/components/Footer";
import Faq, { FAQItem } from "@/app/components/Faq";
import { ArrowRight } from "lucide-react";

const faqData: FAQItem[] = [
  {
    question: "What purity levels can you achieve?",
    answer: "We refine gold to industry standards including 999 and 999.9 fineness, with certificate of analysis."
  },
  {
    question: "Do you accept scrap and jewelry?",
    answer: "Yes — we accept scrap, jewelry, ore and bullion with secure handling and transparent settlement."
  },
  {
    question: "How long does refining take?",
    answer: "Turnaround times vary by consignment size; request a quote for a specific timeline and express options."
  },
];

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
                Gold Refining Services
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
                Promise Gold Refinery is a state-of-the-art precious metals refinery based in Sharjah, UAE, established in 2024. We specialize in gold, silver, and other precious metal refining, utilizing the latest technology to deliver precise, efficient, and sustainable results for clients around the world.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                At Promise Gold Refinery, we take pride in our responsible sourcing practices, strictly adhering to OECD Due Diligence Guidelines and international standards for ethical precious metal refining. Our processes ensure transparency, traceability, and integrity from start to finish.
              </p>
            </div>

            {/* Right Side - Image with Curved Shape */}
            <div className="relative h-[400px] md:h-[500px]">
              {/* Image */}
              <div className="relative h-full w-full rounded-bl-[300px] overflow-hidden">
                <Image
                  src="/images/home/refinery-image.jpg"
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
                  src="/images/home/gold-refining.jpg"
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
                Advanced refining equipment and experienced metallurgists.
                Competitive recovery rates and transparent fee structures.
                Compliance with OECD responsible sourcing guidelines and international standards.
                Solutions for jewelers, miners, banks, industrial buyers and investors.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                Backed by advanced technology and a customer-first approach, we continue to enhance client experience while reinforcing Dubai and Sharjah’s reputation as world-class centers for gold refining, metal recovery, and precious-metals trade.
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


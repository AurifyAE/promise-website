'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import Testimonials from "@/app/components/Testimonials";
import Footer from "@/app/components/Footer";
import Faq, { FAQItem } from "@/app/components/Faq";
import { ArrowRight } from "lucide-react";

const faqData: FAQItem[] = [
    {
      question: "Do you handle electronic waste?",
      answer: "Yes — we accept electronic components and PCBs and use specialized processes to recover precious metals safely."
    },
    {
      question: "Is recycled gold as valuable as mined gold?",
      answer: "Recycled gold is chemically identical once refined to the same fineness and carries strong sustainability value."
    },
    {
      question: "How do you manage hazardous materials?",
      answer: "We follow strict hazardous materials protocols and regulatory requirements for safe handling and disposal."
    },
    
  ];

  const keyFeatures = [
    "Advanced recovery techniques: chemical refining, electro-chemical recovery and smelting optimised for different feedstocks.",
    "E-waste & industrial scrap: safe handling and specialised processing for PCBs, connectors, catalysts and residues.",
    "Sustainability benefits: reduces need for primary mining, lowers environmental footprint and supports circular supply chains.",
    "Regulatory compliance: secure waste handling, hazardous materials controls and accurate material reporting."
  ]

  const benefits = [
    "Electronics recyclers, manufacturers, jewelers, industrial clients and sustainability-focused investors."
  ]


export default function MetalRecycling() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Top Section - Text Left, Image Right with Curved Shape */}
      <section className="relative pt-20 md:pt-24 pb-0 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Text */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="py-12 lg:py-20"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6"
              >
                Sustainable Metal Recycling in UAE
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base"
              >
                Promise Gold Refinery's metal recycling service extracts valuable precious metals (gold, silver, platinum, palladium) from end-of-life products, jewellery scrap and electronic waste. Our recycling process prioritises high recovery, environmental compliance and responsible downstream management.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-gray-700 leading-relaxed text-sm md:text-base"
              >
              <span className="font-semibold">Key Features:</span>
              <ul className="list-disc list-outside text-gray-700 leading-relaxed text-sm md:text-base px-6">
                {keyFeatures.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.5 + index * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
              </motion.div>
            </motion.div>

            {/* Right Side - Image with Curved Shape */}
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative h-[400px] md:h-[500px]"
            >
              {/* Image */}
              <div className="relative h-full w-full rounded-bl-[300px] overflow-hidden">
                <Image
                  src="/images/services/metal-recycling-img1.png"
                  alt="Refinery facility"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom Section - Image Left, Text Right with Curved Shape */}
      <section className="relative py-0 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Image with Curved Shape */}
            <motion.div
              initial={{ opacity: 0, x: -60, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative h-[400px] md:h-[500px] rounded-tr-[300px] overflow-hidden order-2 lg:order-1"
            >
              {/* Image */}
              <div className="relative h-full w-full">
                <Image
                  src="/images/services/metal-recycling-img2.png"
                  alt="Gold refining process"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Right Side - Text and Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="py-12 lg:py-20 order-1 lg:order-2"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-3xl md:text-4xl lg:text-5xl -rotate-4 font-bold text-black mb-6"
              >
                WHO BENEFITS
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base"
              >
                <ul className="list-disc list-outside text-gray-700 leading-relaxed text-sm md:text-base px-6">
                  {benefits.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.4 + index * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#294734] hover:bg-[#1e3326] text-white py-3 px-8 rounded-4xl transition-colors font-semibold duration-300 flex items-center justify-center gap-2"
                >
                  ENQUIRE NOW <ArrowRight className="w-4 h-4" />
                </motion.button>
                
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Faq faqData={faqData} />

      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
}


'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
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
                Refining with Responsibility, Precision, and Trust
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
                Promise Gold Refinery is a state-of-the-art precious metals refinery based in Sharjah, UAE, established in 2024. We specialize in gold, silver, and other precious metal refining, utilizing the latest technology to deliver precise, efficient, and sustainable results for clients around the world.
              </motion.p>
              <motion.p
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
                At Promise Gold Refinery, we take pride in our responsible sourcing practices, strictly adhering to OECD Due Diligence Guidelines and international standards for ethical precious metal refining. Our processes ensure transparency, traceability, and integrity from start to finish.
              </motion.p>
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
                  src="/images/about/about-img1.png"
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
                  src="/images/about/about-img2.png"
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
              {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
                Customised Precious-Metal Refining Solutions
              </h2> */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base"
              >
              Promise Gold Refinery delivers <span className="font-bold text-lg"> customised precious-metal refining  solutions</span> for a wide spectrum of clients - from artisanal and small-scale miners to major mining groups, jewelers, industrial manufacturers, financial institutions, and government entities. Each refining project is designed around the client's specific needs, ensuring maximum recovery, exceptional purity, and full compliance with international quality benchmarks.
              </motion.p>
              <motion.p
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
                Backed by advanced technology and a customer-first approach, we continue to enhance client experience while reinforcing Dubai and Sharjah's reputation as world-class centers for gold refining, metal recovery, and precious-metals trade.
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
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#294734] hover:bg-[#1e3326] text-white py-3 px-8 rounded-lg transition-colors duration-300 font-semibold flex items-center justify-center gap-2"
                >
                  ENQUIRE NOW <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/teams"
                    className="bg-[#ECC273] hover:bg-[#d4b28a] text-black py-3 px-8 rounded-lg transition-colors duration-300 font-semibold flex items-center justify-center gap-2"
                  >
                    VIEW TEAM
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}


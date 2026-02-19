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
      <section className="relative pt-30 md:pt-24 pb-0 overflow-hidden">
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
              className="py-6 lg:py-20 order-2 lg:order-1"
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
                Our Beginning
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
                Trade routes once crossed deserts guided only by stars and conviction. Today, those routes continue through modern gateways of exchange and industry.
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
                className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base"
              >
                Promise Gold Refinery was established in the Sharjah Airport Free Zone, one of the region’s most strategic hubs for precious metals movement and transformation. Founded by professionals with deep understanding of precious metals and international trade, the refinery was built to provide structured, reliable, and transparent refining services in alignment with global expectations.
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
                className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base"
              >
                From its earliest days, the refinery has remained focused on disciplined growth - prioritizing operational integrity, metallurgical accuracy, and client trust above all else.
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
              >Our mission is simple: to refine precious metals with clarity, precision, and responsibility.
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
              className="relative h-[400px] md:h-[500px] order-1 lg:order-2"
            >
              {/* Image */}
              <div className="relative h-full w-full rounded-2xl md:rounded-l-[300px] overflow-hidden">
                <Image
                  src="/images/about/about-img2.png"
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
          <div className="grid grid-cols-1 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="py-6 lg:py-20 md:text-center"
            >
              {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
                Customised Precious-Metal Refining Solutions
              </h2> */}
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
                The Facility
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base"
              >
              Our refinery operates within a secure, controlled industrial environment designed specifically for precious metal processing.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-gray-700 leading-relaxed text-sm md:text-base"
              >
                With a refining capacity of 400 kilograms per shift, the facility is equipped to handle a wide range
                of precious metal inputs, including:
              </motion.p>
              
              <div className="flex flex-col items-center justify-center md:gap-8 w-full my-10">
                <motion.div
                  initial={{ opacity: 0, x: -60, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative w-full h-64 sm:h-80 md:h-[560px] overflow-hidden mb-6 md:mb-0"
                >
                  <Image
                    src="/images/about/steps-of-gold-refining.svg"
                    alt="Gold refining process"
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
                
                <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-xl md:text-2xl lg:text-3xl font-semibold text-black"
              >
                Comprehensive Metal Processing Facility
              </motion.h2>
                <motion.div
                  initial={{ opacity: 0, x: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative w-full md:w-1/2 h-72 sm:h-80 md:h-[560px] overflow-hidden"
                >
                  <Image
                    src="/images/about/metal-processing.svg"
                    alt="Gold refining process"
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base"
              >
                  Each stage of the process is governed by strict operational protocols to ensure material integrity, accuracy, and safety.
              </motion.p>
              
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative pt-10 md:pt-24 pb-0 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/* Left Side - Image */}
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
              <div className="relative h-full w-full rounded-2xl md:rounded-r-[300px] overflow-hidden">
                <Image
                  src="/images/about/about-img1.png"
                  alt="Refinery facility"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
            </motion.div>

            {/* Right Side - Text */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="py-6 lg:py-20"
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
                Our People
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
                className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base"
              >
                Refining is not accomplished by machinery alone. It is accomplished by discipline, experience, and human judgment.
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
                className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base"
              >
                Our workforce consists of skilled metallurgical technicians, laboratory analysts, operational supervisors, and logistics personnel who collectively uphold the refinery’s operational standards.
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
                className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base"
              >
                Each individual within the refinery understands that their role is not simply technical - it is custodial. They are entrusted with material that represents the effort, capital, and trust of others.
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
              >Their discipline ensures that every process is executed with precision and accountability.
              </motion.p>
            </motion.div>

            
          </div>
        </div>
      </section>

      <section className="relative pt-10 md:pt-24 pb-0 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 gap-8">

            {/* Left Side - Text */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="py-6 lg:py-20  md:text-center"
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
                Policy and Procedure
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
                Structure creates trust.
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
                className="text-gray-700 leading-relaxed mb-2 text-sm md:text-base"
              >
                Our operational framework is governed by documented policies and procedures designed to ensure:
              </motion.p>

              <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative mx-auto w-full md:w-1/2 h-72 sm:h-80 md:h-[560px] overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-full w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/about/policy-procedures.svg"
                  alt="Refinery facility"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base"
              >
                Every lot received is tracked, documented, and processed under defined operational controls, ensuring traceability and accountability throughout its lifecycle within the refinery.
              </motion.p>
            </motion.div>

            {/* Right Side - Image with Curved Shape */}
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Get in touch with our team to discuss your precious metal refining needs, or learn more about the experts behind Promise Gold Refinery.
            </p>
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
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#294734] hover:bg-[#1e3326] text-white py-3 px-8 rounded-lg transition-colors duration-300 font-semibold flex items-center justify-center gap-2"
            >
              ENQUIRE NOW <ArrowRight className="w-4 h-4" />
            </motion.button>
            {/* <motion.div
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
            </motion.div> */}
          </motion.div>
        </div>
      </section>

      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}


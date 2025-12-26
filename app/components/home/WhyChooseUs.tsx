'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative overflow-visible rounded-[40px] border border-[#E3C9A4] bg-white px-8 py-12 md:px-12 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-2">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-8"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.1,
                  ease: "easeOut"
                }}
              >
                WHY CHOOSE US
              </motion.h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 text-sm md:text-base pb-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.2,
                    ease: "easeOut"
                  }}
                >
                  <h3 className="text-lg font-semibold text-[#C2882A] leading-snug">
                    Experience &amp;
                    <br />
                    Expertise
                  </h3>
                  <p className="mt-2 text-zinc-700 leading-relaxed">
                    Decades of refining knowledge and global best practices.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3,
                    ease: "easeOut"
                  }}
                >
                  <h3 className="text-lg font-semibold text-[#C2882A] leading-snug">
                    Transparency &amp;
                    <br />
                    Security
                  </h3>
                  <p className="mt-2 text-zinc-700 leading-relaxed">
                    Full traceability and documented chain-of-custody.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.4,
                    ease: "easeOut"
                  }}
                >
                  <h3 className="text-lg font-semibold text-[#C2882A] leading-snug">
                    Responsible
                    <br />
                    Sourcing
                  </h3>
                  <p className="mt-2 text-zinc-700 leading-relaxed">
                    100% OECD-compliant ethical refining and sourcing.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.5,
                    ease: "easeOut"
                  }}
                >
                  <h3 className="text-lg font-semibold text-[#C2882A] leading-snug">
                    Advanced
                    <br />
                    Technology
                  </h3>
                  <p className="mt-2 text-zinc-700 leading-relaxed">
                    Precision equipment ensuring consistently high recovery rates.
                  </p>
                </motion.div>
              </div>
            </div>

            <div className="flex flex-col lg:items-end justify-between gap-10">
              <div className="relative md:h-60 md:w-30 lg:h-96 lg:w-80 bg-white -mt-180 md:-mr-120 md:-mt-120 lg:mr-0 lg:-mt-30 -rotate-12 rounded-full mb-5 opacity-50 md:opacity-100">
                <motion.div 
                  className="absolute right-5 md:right-15 lg:top-0 lg:right-30 w-12 h-12 md:w-15 md:h-15 lg:h-30 lg:w-30 rounded-full bg-[#ECC273]"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    delay: 0.3,
                    type: "spring",
                    stiffness: 150,
                    damping: 12
                  }}
                />
                <motion.div 
                  className="absolute top-15 right-0 md:top-18  md:right-5 lg:top-35 lg:right-10 w-12 h-12 md:w-15 md:h-15  lg:h-30 lg:w-30 rounded-full bg-[#294734]/50"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    delay: 0.35,
                    type: "spring",
                    stiffness: 150,
                    damping: 12
                  }}
                />
                <motion.div 
                  className="absolute top-30 md:top-28 right-5 md:right-10 lg:top-70 lg:right-28 w-12 h-12 md:w-15 md:h-15 lg:h-30 lg:w-30 rounded-full bg-[#294734]"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    delay: 0.5,
                    type: "spring",
                    stiffness: 150,
                    damping: 12
                  }}
                />
              </div>

              <motion.button 
                className="rounded-full bg-[#E3C9A4] px-6 py-3 text-xs md:text-sm tracking-wide text-black shadow-sm transition-colors hover:bg-[#d1b384] flex items-center justify-center gap-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/about-us" className="flex items-center justify-center gap-2">
                  LEARN MORE ABOUT OUR PROCESS <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;


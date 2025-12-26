'use client';

import Image from 'next/image';
import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title1: 'High-Purity',
    title2: 'Gold Refining',
    description: 'Transform gold ore, scrap, and bullion into 999.9-purity gold with our advanced refining process.',
    imageSrc: '/images/home/refinery-image.jpg',
    alt: 'Gold being poured into a mold',
    link: '/services/gold-refining'
  },
  {
    title1: 'Certified',
    title2: 'Assaying Services',
    description: 'Accurate, traceable, and certified assays for gold, silver, and other precious metals — ensuring confidence and fair value in every transaction.',
    imageSrc: '/images/home/certified-assaying.jpg',
    alt: 'Furnace with glowing hot metal inside',
    link: '/services/assaying-services'
  },
  {
    title1: 'Sustainable',
    title2: 'Metal Recycling',
    description: 'Eco-friendly recycling of gold, silver, platinum, and palladium from e-waste and industrial scrap.',
    imageSrc: '/images/home/metal-recycling.jpg',
    alt: 'Molten metal being poured',
    link: '/services/metal-recycling'
  },
  {
    title1: 'High-Purity',
    title2: 'Silver Refining',
    description: 'Delivering 999+ purity silver for jewelry, industrial, and investment applications — refined with precision.',
    imageSrc: '/images/home/silver-refining.jpg',
    alt: 'Refined silver granules',
    link: '/services/silver-refining'
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Vertical Title - Hidden on mobile */}
          <div className="hidden lg:flex lg:col-span-2 items-center justify-center">
            <h2 className="text-5xl font-bold text-black tracking-wider -rotate-82 origin-center whitespace-nowrap">
              OUR SERVICES
            </h2>
          </div>

          {/* Mobile Title */}
          <div className="lg:hidden text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-800">Our Services</h2>
          </div>

          {/* Cards Grid */}
          <div className="lg:col-span-10">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-8">
                {services.filter((_, i) => i % 2 === 0).map((service, index) => (
                  <motion.div
                    key={index * 2}
                    initial={{ opacity: 0, y: 60, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.9,
                      delay: index * 0.15,
                      ease: [0.16, 1, 0.3, 1], // Smooth ease-out-expo curve
                    }}
                    className="group bg-[#FCF7F1] rounded-3xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer px-8 lg:px-12 py-10 "
                  >
                    <Link href={service.link} className="space-y-8">
                    <div className="flex items-center justify-between">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.15 + 0.2,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <motion.h3
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.15 + 0.3,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="text-2xl lg:text-3xl font-bold text-zinc-800"
                        >
                          {service.title1}
                        </motion.h3>
                        <motion.h3
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.15 + 0.4,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="text-2xl lg:text-3xl font-bold text-zinc-800"
                        >
                          {service.title2}
                        </motion.h3>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.15 + 0.35,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="w-14 h-14 bg-[#EBDECF] backdrop-blur-sm rounded-full flex items-center justify-center shadow-md transition-all group-hover:bg-zinc-100 group-hover:scale-105"
                      >
                        <ArrowRight className="w-5 h-5 text-zinc-700" />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.7,
                        delay: index * 0.15 + 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="relative h-64 md:h-72 overflow-hidden rounded-[60px]"
                    >
                      <Image
                        src={service.imageSrc}
                        alt={service.alt}
                        fill
                        className="object-contain transition-transform duration-700 group-hover:scale-105"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.15 + 0.6,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="relative"
                    >
                      <p className="text-zinc-600 leading-relaxed">
                        {service.description}
                      </p>
                    </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col gap-8 mt-10 md:mt-30">
                {services.filter((_, i) => i % 2 === 1).map((service, index) => (
                  <motion.div
                    key={index * 2 + 1}
                    initial={{ opacity: 0, y: 60, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.9,
                      delay: index * 0.15 + 0.2, // Smooth stagger with slight offset for cascading effect
                      ease: [0.16, 1, 0.3, 1], // Smooth ease-out-expo curve
                    }}
                    className="group bg-[#FCF7F1] rounded-3xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer px-8 lg:px-12 py-10 space-y-8"
                  >
                    <Link href={service.link} className="space-y-8">
                    <div className="flex items-center justify-between">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.15 + 0.4,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <motion.h3
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.15 + 0.5,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="text-2xl lg:text-3xl font-bold text-zinc-800"
                        >
                          {service.title1}
                        </motion.h3>
                        <motion.h3
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.15 + 0.6,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="text-2xl lg:text-3xl font-bold text-zinc-800"
                        >
                          {service.title2}
                        </motion.h3>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.15 + 0.55,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="w-14 h-14 bg-[#EBDECF] backdrop-blur-sm rounded-full flex items-center justify-center shadow-md transition-all group-hover:bg-zinc-100 group-hover:scale-110"
                      >
                        <ArrowRight className="w-5 h-5 text-zinc-700" />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.7,
                        delay: index * 0.15 + 0.7,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="relative h-64 md:h-72 overflow-hidden rounded-[60px]"
                    >
                      <Image
                        src={service.imageSrc}
                        alt={service.alt}
                        fill
                        className="object-contain transition-transform duration-700 group-hover:scale-105"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.15 + 0.8,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className=""
                    >
                      <p className="text-zinc-600 leading-relaxed">
                        {service.description}
                      </p>
                    </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
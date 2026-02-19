'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const services = [
  {
    title: 'Assaying',
    tagline: 'Truth begins with measurement.',
    description: [
      'Our assay laboratory conducts precise metallurgical analysis to determine the purity and composition of precious metals.',
      'Through controlled sampling and laboratory procedures, we provide accurate purity determination essential for refining and settlement.',
    ],
    imageSrc: '/images/services/assaying-of-gold.jpeg',
    alt: 'Assay laboratory',
    href: '/contact-us',
  },
  {
    title: 'Smelting',
    tagline: 'Smelting is the first transformation — where solid material yields to fire.',
    description: [
      'Our smelting operations are conducted under controlled thermal environments, ensuring efficient separation of precious metals from base material.',
      'This stage prepares material for subsequent refining and purification.',
    ],
    imageSrc: '/images/services/smelting.png',
    alt: 'Smelting operations',
    href: '/contact-us',
  },
  {
    title: 'Refining',
    tagline: 'Refining is the act of purification — the disciplined removal of impurity to reveal intrinsic value.',
    description: [
      'Our refining process is conducted through structured metallurgical methods designed to achieve high purity precious metal output.',
      'Each refining cycle is governed by procedural control and material accountability.',
    ],
    imageSrc: '/images/home/refinery-image.jpg',
    alt: 'Refining process',
    href: '/contact-us',
  },
  {
    title: 'Casting',
    tagline: 'Form gives structure to value.',
    description: [
      'Following refining, precious metals are cast into bar form through controlled casting procedures.',
      'Each bar is produced under monitored conditions to ensure structural consistency and purity integrity.',
    ],
    imageSrc: '/images/services/casting-of-bars.png',
    alt: 'Casting and bar production',
    href: '/contact-us',
  },
  {
    title: 'Precious Metal Recycling',
    tagline: 'What has served once can serve again.',
    description: [
      'Precious metals retain their value beyond their first form. Our recycling services recover precious metals from scrap, industrial waste, and residual material.',
      'This process contributes to resource continuity while preserving material value.',
    ],
    imageSrc: '/images/services/recycling.png',
    alt: 'Precious metal recycling',
    href: '/contact-us',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-24 md:pt-32 pb-20">
        <div className="container max-w-6xl mx-auto px-4 md:px-8">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-3">
              Our Services
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              From assaying to casting and recycling — precision at every stage.
            </p>
          </motion.header>

          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            {services.map((service, index) => {
              const imageFirst = index % 2 === 0;
              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.5,
                    delay: 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center bg-[#FCF7F1] rounded-2xl p-6 md:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div
                    className={`relative overflow-hidden rounded-xl ${
                      imageFirst ? 'lg:col-span-4' : 'lg:col-span-4 lg:col-start-9'
                    }`}
                  >
                    <div className="relative h-52 w-full max-w-lg mx-auto sm:h-56 lg:max-w-none lg:mx-0 lg:h-72 bg-white rounded-2xl overflow-hidden">
                      <Image
                        src={service.imageSrc}
                        alt={service.alt}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                  <div
                    className={`lg:col-span-8 ${imageFirst ? '' : 'lg:col-start-1 lg:row-start-1'}`}
                  >
                    <h2 className="text-xl md:text-2xl font-bold text-zinc-900 mb-2">
                      {service.title}
                    </h2>
                    <p className="text-amber-800/90 italic text-sm mb-4">
                      {service.tagline}
                    </p>
                    <div className="space-y-2.5 text-gray-700 text-sm md:text-base leading-relaxed">
                      {service.description.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>

                    <div className="mt-6">
                      <Link href={service.href} className="inline-flex">
                        <motion.span
                          
                          className="flex items-center gap-2 rounded-full bg-[#EBDECF] px-5 py-2.5 text-sm font-semibold text-zinc-900 transition-colors duration-300 hover:bg-[#D9C8B4]"
                        >
                          Enquiry Now
                          <motion.div
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
                          >
                            <ArrowRight className="h-4 w-4 text-zinc-700" />
                          </motion.div>
                        </motion.span>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

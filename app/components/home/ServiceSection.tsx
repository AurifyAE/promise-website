 'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

type ServiceCard =
  | {
      kind: 'service';
      title: string;
      imageSrc: string;
      description: string;
      alt: string;
    }
  | {
      kind: 'cta';
      title: string;
      description: string;
      href: string;
    };

const cards: ServiceCard[] = [
  {
    kind: 'service',
    title: 'Precision Assaying',
    imageSrc: '/images/services/assaying-of-gold.jpeg',
    description: 'Our assay laboratory conducts precise metallurgical analysis to determine the purity and composition of precious metals.',
    alt: 'Gold being poured into a mold',
  },
  {
    kind: 'service',
    title: 'Controlled Smelting Operations',
    imageSrc: '/images/services/smelting.png',
    description: 'Our smelting operations are conducted under controlled thermal environments, ensuring efficient separation of precious metals from base material.',
    alt: 'Furnace with glowing hot metal inside',
  },
  {
    kind: 'service',
    title: 'Advanced Gold and Silver Refining',
    imageSrc: '/images/home/silver-refining.jpg',
    description: 'Our refining process is conducted through structured metallurgical methods designed to achieve high purity precious metal output.',
    alt: 'Molten metal being poured',
  },
  {
    kind: 'service',
    title: 'Investment Bar Casting',
    imageSrc: '/images/services/casting-of-bars.png',
    description: 'Following refining, precious metals are cast into bar form through controlled casting procedures.',
    alt: 'Refined silver granules',
  },
  {
    kind: 'service',
    title: 'Precious Metal Recycling and Recovery',
    imageSrc: '/images/services/recycling.png',
    description: 'Precious metals retain their value beyond their first form. Our recycling services recover precious metals from scrap, industrial waste, and residual material.',
    alt: 'Refined silver granules',
  },
  {
    kind: 'cta',
    title: 'Every Product is Guaranteed Purity',
    description:
      'Accurate, traceable processes and rigorous quality checks ensure confidence in every bar and every batch.',
    href: '/services',
  },
];

export default function ServiceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  const imageVariants = {
    hidden: { 
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold text-zinc-900 md:text-5xl">Our Services</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((card, idx) => {
            if (card.kind === 'cta') {
              return (
                <motion.div
                  key={`cta-${idx}`}
                  variants={cardVariants}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="flex flex-col justify-center rounded-3xl bg-[#FCF7F1] p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h3 className="text-xl md:text-2xl font-semibold text-zinc-900">{card.title}</h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="mt-4 text-xs md:text-sm xl:text-base leading-relaxed text-zinc-700"
                    >
                      {card.description}
                    </motion.p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-8"
                  >
                    <Link href={card.href} className="inline-flex">
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center gap-2 rounded-full bg-[#EBDECF] px-6 py-3 text-black transition-colors duration-300 hover:bg-[#D9C8B4]"
                      >
                        Know More
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                        >
                          <ArrowRight className="h-5 w-5 text-zinc-700" />
                        </motion.div>
                      </motion.span>
                    </Link>
                  </motion.div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={`${card.title}-${idx}`}
                variants={cardVariants}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-[#FCF7F1] p-10 gap-2 md:gap-4 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <motion.h3
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-4 text-xl md:text-2xl text-pretty font-semibold text-zinc-900"
                >
                  {card.title}
                </motion.h3>

                <motion.div
                  variants={imageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="relative h-56 overflow-hidden rounded-4xl bg-white/30 group/image"
                >
                  <Image
                    src={card.imageSrc}
                    alt={card.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover/image:scale-110"
                  />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-4 text-xs md:text-sm xl:text-base leading-relaxed text-zinc-700"
                >
                  {card.description}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
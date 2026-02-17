'use client'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


const AboutSection = () => {
  return (
    <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto px-4">
            <div className="flex flex-col items-center lg:flex-row gap-12">
            {/* Left: Image */}
            <motion.div 
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="relative h-80 lg:h-96 overflow-hidden shadow-xl">
                <Image src="/images/home/gold-in-hand.jpg" alt="Precious Metals Refining" fill className="object-cover" priority />
                </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div 
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                <motion.h2 
                className="text-3xl md:text-4xl font-bold text-black mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                >
                Refining with Responsibility, Precision, and Trust
                </motion.h2>
                <motion.p 
                className="text-[#1A1A1A] mb-3 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                >
                    In every age, gold has represented permanence in an impermanent world.
                </motion.p>
                <motion.p 
                className="text-[#1A1A1A] mb-3 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                >
                    Promise Gold Refinery was founded upon a simple conviction: that refining precious metals is not merely an industrial process, but a custodial responsibility. Located in the United Arab Emirates - a historic gateway connecting East and West - the refinery serves as a modern sanctuary where raw material is transformed into instruments of purity, value, and global exchange.
                </motion.p>
                <motion.p 
                className="text-[#1A1A1A] mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                >
                    With a refining capacity of 400 kilograms per shift and a focused specialization in gold and silver, the refinery supports miners, traders, jewelers, and institutions across regional and international markets.
                </motion.p>
                <Link href="/about-us" className="">
                    <motion.button 
                    className="flex items-center justify-center gap-2 bg-[#EBDECF] hover:bg-[#D9C8B4] text-black py-3 px-8 rounded-full transition-colors duration-300 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    >
                        About Our Refinery <ArrowRight className="w-4 h-4" />
                    </motion.button>
                </Link>
            </motion.div>
            </div>
        </div>
        </section>
  )
}

export default AboutSection
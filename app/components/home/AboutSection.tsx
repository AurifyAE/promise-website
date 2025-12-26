'use client'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


const AboutSection = () => {
  return (
    <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto px-4">
            <div className="flex flex-col items-center md:flex-row gap-12">
            {/* Left: Image */}
            <motion.div 
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="relative h-80 md:h-96 overflow-hidden shadow-xl">
                <Image src="/images/home/gold-in-hand.jpg" alt="Precious Metals Refining" fill className="object-cover" priority />
                </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div 
                className="w-full md:w-1/2"
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
                className="text-[#1A1A1A] mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                >
                    Promise Gold Refinery is a state-of-the-art facility in Sharjah, UAE, offering high-purity gold and silver refining services to clients worldwide. We combine cutting-edge technology with responsible sourcing practices aligned with OECD guidelines — ensuring transparency, traceability, and sustainability in every process.
                </motion.p>
                <motion.button 
                className="bg-[#EBDECF] hover:bg-[#D9C8B4] text-black py-3 px-8 rounded-full transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >
                    <Link href="" className="flex items-center justify-center gap-2">
                        About Our Refinery <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.button>
            </motion.div>
            </div>
        </div>
        </section>
  )
}

export default AboutSection
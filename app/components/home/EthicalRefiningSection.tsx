'use client'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


const EthicalRefiningSection = () => {
  return (
    <section className="pt-5 pb-10 md:py-20 px-4 md:px-8">
        <div className="container mx-auto px-4">
            <div className="flex flex-col items-center md:flex-row gap-12">
                {/* Right: Content */}
                <motion.div 
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <motion.h2 
                        className="text-2xl md:text-4xl font-bold text-black mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Ethical Refining, Global Standards
                    </motion.h2>
                    <motion.p 
                        className="text-[#1A1A1A] text-sm md:text-base mb-8 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        At Promise Gold Refinery, we are committed to ethical sourcing and sustainable refining practices. We follow OECD guidelines to ensure all precious metals are responsibly obtained and processed with full environmental and social compliance.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <Link
                            href="/ethical-refining"
                            className='inline-flex items-center justify-center gap-2'
                        >
                        <motion.button 
                            className="bg-[#EBDECF] hover:bg-[#D9C8B4] text-sm md:text-base text-black py-3 px-8 rounded-full transition-colors duration-300 flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                                Our Responsible Practices <ArrowRight className="w-4 h-4" />
                        </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Left: Image */}
                <motion.div 
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="relative h-80 md:h-96 overflow-hidden shadow-xl">
                        <Image src="/images/home/gold-refining.jpg" alt="Precious Metals Refining" fill className="object-cover" priority />
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default EthicalRefiningSection
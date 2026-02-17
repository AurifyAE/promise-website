'use client'
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import whatsAppIcon from '../../../public/icons/whatsapp-yellow.svg'

function AnimatedHeading({ text, delay = 0 }: { text: string; delay?: number }) {
    return (
        <motion.h1
            className="mb-1 text-xl md:text-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay }}
        >
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        delay: delay + i * 0.05,
                    }}
                    className="inline-block"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.h1>
    );
}

export default function HeroSection() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                >
                    <source src="/videos/home/hero-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex h-full w-full flex-col justify-center px-8 text-left text-white md:px-16 lg:px-24">
                <motion.div
                    className="max-w-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="mb-1 font-bold text-xl md:text-3xl">
                        <AnimatedHeading text="Where Fire Reveals Truth." delay={0.3} />
                    </div>
                    <div className="mb-8 text-xl md:text-3xl">
                        <AnimatedHeading text="Where Metal Becomes Trust." delay={1.2} />
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.2, duration: 0.8, ease: "easeOut" }}
                        className="w-lg mb-8 text-sm md:text-base text-pretty"
                    >
                        In the ancient lands where trade shaped civilizations, gold was never merely a metal. It was certainty. It was continuity. It was legacy.<br/><br/>At Promise Gold Refinery, we continue that legacy - refining precious metals with precision, discipline, and unwavering integrity.

                    </motion.p>
                    <Link href="/services" className='inline-block'>
                        <motion.button
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.8, duration: 0.8, ease: "easeOut" }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center gap-2 rounded-full bg-[#ECC273] px-6 py-3 text-sm md:text-base text-black transition-all hover:bg-[#d4b28a] hover:scale-105 duration-300 cursor-pointer"
                        >
                            Explore Our Services <ArrowRight className="w-4 h-4" />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
            {/* Fixed Quote Button */}
            <motion.a
                href="https://wa.me/971505794931"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 z-50 flex h-12 items-center rounded-full bg-black/70 backdrop-blur-sm shadow-2xl md:h-12 overflow-hidden"
                initial={{ width: 48 }}
                whileHover={{ width: "auto" }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
                {/* Arrow - always centered in initial state, moves slightly on hover */}
                <motion.div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black/70"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                >
                    <Image
                      src={whatsAppIcon}
                      alt=""
                      width={5}
                      height={5}
                      className={`h-5 w-5`}
                      priority
                    />
                </motion.div>
                <span className="whitespace-nowrap px-6 text-sm text-white">
                    REQUEST FOR QUOTE
                </span>
            </motion.a>
        </section>
    );
}


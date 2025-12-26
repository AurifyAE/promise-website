'use client'
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const container = {
    hidden: { opacity: 0 },
    visible: (delay: number = 0) => ({
        opacity: 1,
        transition: {
            delayChildren: delay,
            staggerChildren: 0.05, // Smooth letter stagger
        },
    }),
};

const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 20 },
    },
};

function AnimatedHeading({ text, delay }: { text: string; delay?: number }) {
    return (
        <motion.h1
            className="mb-1 text-3xl md:text-4xl lg:text-5xl"
            variants={container}
            initial="hidden"
            animate="visible"
            custom={delay}
        >
            {text.split("").map((char, i) => (
                <motion.span key={i} variants={child} className="inline-block">
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
                    <div className="mb-1 text-3xl md:text-4xl lg:text-5xl">
                        <AnimatedHeading text="Excellence in" delay={0.3} />
                    </div>
                    <div className="mb-8 text-3xl font-bold md:text-4xl lg:text-5xl">
                        <AnimatedHeading text="Precious Metals Refining" delay={1.2} />
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.2, duration: 0.8, ease: "easeOut" }}
                        className="mb-8 text-sm md:text-base"
                    >
                        Sharjah's trusted gold and precious metals refinery, delivering world-class refining, assaying, recycling, and silver purification services with integrity and precision.
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.8, duration: 0.8, ease: "easeOut" }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-full bg-[#ECC273] px-6 py-3 text-sm md:text-base text-black transition-colors hover:bg-[#d4b28a] flex items-center justify-center gap-2"
                    >
                        Explore Our Services <ArrowRight className="w-4 h-4" />
                    </motion.button>
                </motion.div>
            </div>
            {/* Fixed Quote Button */}

            <motion.button
                className="fixed bottom-8 right-8 z-50 flex h-16 items-center rounded-full bg-black/70 backdrop-blur-sm shadow-2xl md:h-16 overflow-hidden"
                initial={{ width: 64 }}
                whileHover={{ width: "auto" }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
                {/* Arrow - always centered in initial state, moves slightly on hover */}
                <motion.div
                    className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-black/70"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                >
                    <ArrowRight className="h-5 w-5 -rotate-45" />
                </motion.div>
                <span className="whitespace-nowrap px-6 text-sm text-white md:text-base">
                    REQUEST FOR QUOTE
                </span>
            </motion.button>
        </section>
    );
}


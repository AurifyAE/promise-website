'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { products } from "@/data/products";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { use } from "react";
import Contact from "@/app/components/Contact";
import Testimonials from "@/app/components/Testimonials";

const productSpecs: Record<
  string,
  {
    weight: string;
    length: string;
    diameter: string;
    thickness: string;
    fineness: string;
    certification: string;
  }
> = {
  "gold-250g": {
    weight: "250 g",
    length: "50 mm",
    diameter: "24 mm",
    thickness: "4.0 mm",
    fineness: "999.9",
    certification: "LBMA",
  },
  "gold-500g": {
    weight: "500 g",
    length: "85 mm",
    diameter: "30 mm",
    thickness: "7.0 mm",
    fineness: "999.9",
    certification: "LBMA",
  },
  "gold-1kg": {
    weight: "1 kg",
    length: "116.5 mm",
    diameter: "51 mm",
    thickness: "9.5 mm",
    fineness: "999",
    certification: "LBMA",
  },
};

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const current = products.find((p) => p.id === id) ?? products[0];
  const specs = productSpecs[id] ?? productSpecs["gold-1kg"];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          {/* Top row: product variants + copy */}
          <section className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Variant row */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="overflow-x-auto pb-4 scrollbar-hide"
              >
                <div className="flex gap-10 min-w-max">
                  {products.map((product, index) => {
                    const isActive = product.id === id;
                    return (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <Link
                          href={`/products/${product.id}`}
                          className="group flex flex-col items-center"
                        >
                          <div className="relative h-48 w-32 md:h-56 md:w-40 flex items-end justify-center">
                            <Image
                              src={product.imageSrc}
                              alt={product.name}
                              fill
                              className="object-contain drop-shadow-xl transition-transform duration-300 group-hover:-translate-y-1"
                            />
                          </div>
                          <div
                            className={`-mt-6 h-14 w-40 rounded-full bg-black flex items-center justify-center text-[10px] tracking-[0.18em] text-white uppercase transition-all duration-300 ${
                              isActive
                                ? "opacity-100 translate-y-0"
                                : "opacity-70 group-hover:opacity-100 group-hover:-translate-y-0.5"
                            }`}
                          >
                            {product.weightLabel}
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Copy block */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="space-y-4"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-black"
                >
                  Gold Bars
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-sm md:text-base text-gray-700 leading-relaxed max-w-md"
                >
                  High‑purity 24K gold bars for investment, trading, and
                  jewellery. Available in multiple weights from 250g to 1kg, all
                  stamped with unique serial numbers and accompanied by an assay
                  certificate.
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Detail card section */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
              {/* Large product image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col items-center col-span-1"
              >
                <div className="relative h-80 w-56 md:h-80 md:w-56 flex items-end justify-center">
                  <Image
                    src={current.imageSrc}
                    alt={current.name}
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="mt-4 h-16 w-56 rounded-full bg-black flex items-center justify-center text-[10px] tracking-[0.2em] text-white uppercase"
                >
                  {specs.weight.toUpperCase()} GOLD BAR
                </motion.div>
              </motion.div>

              {/* Specs card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative w-full col-span-2"
              >
                <div className="relative rounded-3xl bg-white shadow-[0_18px_45px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
                  <div className="flex items-center justify-between px-8 pt-8 pb-4">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="text-2xl md:text-3xl font-semibold text-black"
                    >
                      {current.name.replace("Gold Bar", "")}Gold Bar
                    </motion.h2>
                    <motion.button
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.4,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="rounded-full bg-[#1F6B3C] px-6 py-3 text-xs md:text-sm font-semibold text-white shadow-md hover:bg-[#175131] transition-colors"
                    >
                      ENQUIRE NOW →
                    </motion.button>
                  </div>

                  <div className="px-8 pb-8">
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="text-xs md:text-sm font-semibold text-gray-700 mb-4"
                    >
                      Specifications
                    </motion.p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs md:text-sm">
                      <SpecCard label="WEIGHT" value={specs.weight} index={0} />
                      <SpecCard label="LENGTH" value={specs.length} index={1} />
                      <SpecCard label="DIAMETER" value={specs.diameter} index={2} />
                      <SpecCard label="THICKNESS" value={specs.thickness} index={3} />
                      <SpecCard label="FINENESS" value={specs.fineness} index={4} />
                      <SpecCard
                        label="CERTIFICATION"
                        value={specs.certification}
                        index={5}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </main>
        
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

function SpecCard({ label, value, index = 0 }: { label: string; value: string; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: 0.6 + index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="rounded-xl bg-[#F7F7F7] px-4 py-3 flex flex-col gap-1"
    >
      <span className="text-[10px] uppercase tracking-[0.15em] text-gray-500">
        {label}
      </span>
      <span className="text-sm font-semibold text-black">{value}</span>
    </motion.div>
  );
}



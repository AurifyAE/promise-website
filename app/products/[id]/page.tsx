'use client';

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { animate } from "framer-motion";
import { products } from "@/data/products";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import Testimonials from "@/app/components/Testimonials";

const heightMap: Record<string, string> = {
  "1 Kg": "max-h-[360px]",
  "500 gm": "max-h-[300px]",
  "250 gm": "max-h-[220px]",
  "116 gm": "max-h-[180px]"
};


export default function ProductDetailPage() {
  const [activeProductId, setActiveProductId] = useState(products[0].id);
  const current = products.find((p) => p.id === activeProductId) ?? products[0];
  const specs = current.specs;
  const [activeImage, setActiveImage] = useState(0);
  const variantContainerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const containerRef = useRef(null);

  // Track scroll relative to this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Map scroll → path length
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const container = variantContainerRef.current;
    const target = itemRefs.current[activeProductId];
  
    if (!container || !target) return;
  
    const containerRect = container.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
  
    const start = container.scrollLeft;
    const targetScroll =
      start +
      (targetRect.left - containerRect.left) -
      containerRect.width / 2 +
      targetRect.width / 2;
  
    const controls = animate(start, targetScroll, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        container.scrollLeft = latest;
      },
    });
  
    return () => controls.stop();
  }, [activeProductId]);
  
  

  useEffect(() => {
    setActiveImage(0);
  }, [activeProductId]); 


  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      <main className="pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8 flex flex-col">
          {/* Top row: product variants + copy */}
          <section className="relative mb-32 order-2 md:order-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Variant row */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                ref={variantContainerRef}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="overflow-x-auto pb-4 scrollbar-hide py-4 md:p-8 border-2 border-[#ecc273a8] rounded-[40px] z-1"
                
              >
                <div className="flex items-end gap-6 px-6 min-w-max snap-x snap-mandatory">
                {products.map((product, index) => {
                  const isActive = product.id === activeProductId;

                  return (
                    <motion.div
                      key={product.id}
                      ref={(el) => {
                        itemRefs.current[product.id] = el
                      }}
                      className="shrink-0 w-[180px] md:w-[220px]"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.08,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => setActiveProductId(product.id)}
                        className="group flex flex-col items-center focus:outline-none cursor-pointer"
                      >
                        {/* PRODUCT IMAGE */}
                        <div className="relative w-full flex items-end justify-center">
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            width={200}
                            height={1}
                            className={`
                              object-contain drop-shadow-xl transition-transform duration-300
                              group-hover:-translate-y-1
                              ${heightMap[product.specs.weight] ?? ""}
                            `}
                          />
                        </div>

                        {/* LABEL */}
                        <div
                          className={`
                            -mt-4 h-14 w-full rounded-full
                            flex items-center justify-center
                            text-[10px] tracking-[0.18em] uppercase
                            transition-all duration-300
                            ${
                              isActive
                                ? "bg-[#294734] text-white"
                                : "bg-black text-white/80"
                            }
                          `}
                        >
                          {product.name
                            .replace(
                              /GOLD KILO BAR|GOLD BAR|SILVER BAR|KILOBAR|KILO BAR| GOLD TT BAR|for Fire assay Lab analysis/gi,
                              ""
                            )
                            .trim()}
                        </div>
                      </button>
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
                  High-purity 24K gold bars for investment, trading, and
                  jewellery. Available in multiple weights from 250g to 1kg, all
                  stamped with unique serial numbers and accompanied by an assay
                  certificate.
                </motion.p>
              </motion.div>
            </div>

            <div className="relative h-[5vh] hidden md:flex items-start">
              <div
                ref={containerRef}
                className="absolute -top-20 right-93"
              >
                      <svg
                  width="660"
                  height="250"
                  viewBox="-265 40 820 240"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d="
                      M 300 50
                      H 520
                      Q 550 50 550 80
                      V 150
                      Q 550 180 520 180
                      H -220
                      Q -260 180 -260 210
                      V 260
                    "
                    stroke="#848482"
                    strokeWidth="2"
                    fill="none"
                    style={{ pathLength }}
                  />
                </svg>
              </div>
            </div>
          </section>
          {/* Detail card section */}
          <section className="order-1 md:order-2">
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
                {/* MAIN IMAGE */}
                <div className="relative h-80 w-80 flex items-end justify-center">
                  <motion.div
                    key={activeImage}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={current.images?.[activeImage] ?? current.images?.[0]}
                      alt={current.name}
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </motion.div>
                </div>

                {/* WEIGHT BADGE */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="hidden md:flex mt-6 h-16 w-56 rounded-full bg-black items-center justify-center text-[10px] tracking-[0.2em] text-white uppercase"
                >
                  {current.name.toUpperCase().replace(/for Fire assay Lab analysis/gi, "").trim()}
                </motion.div>

                {/* THUMBNAILS */}
                {current.images.length > 1 && (
                  <div className="mt-6 flex gap-3">
                    {current.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImage(index)}
                        className={`relative h-16 w-12 rounded-lg border overflow-hidden transition-all ${
                          activeImage === index
                            ? "border-black"
                            : "border-gray-300 opacity-70 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${current.name} thumbnail ${index + 1}`}
                          fill
                          sizes="48px"
                          className="object-contain"
                        />
                      </button>
                    ))}
                  </div>
                )}
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
                  <div className="flex flex-col md:flex-row md:items-center justify-between px-8 pt-8 pb-4 gap-4">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="md:w-[40vw] text-2xl md:text-3xl text-pretty font-semibold text-black"
                    >
                      {current.name}
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
                      className="rounded-full bg-[#175131] w-52 px-6 py-3 text-xs md:text-sm font-semibold text-white shadow-md hover:bg-[#1F6B3C] transition-colors"
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
                      <SpecCard label="Weight" value={specs.weight} index={0} />
                      <SpecCard label="Width" value={specs.width} index={1} />
                      <SpecCard label="Height" value={specs.height } index={2} />
                      <SpecCard label="Breadth" value={specs.breadth} index={3} />
                      <SpecCard label="Fineness" value={specs.fineness} index={4} />
                      <SpecCard
                        label="Certification"
                        value={specs.certification ?? "-"}
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
        
      {/* {/* <Testimonials /> */}
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



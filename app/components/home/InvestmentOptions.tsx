'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import Link from 'next/link';

const InvestmentOptions = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Product carousel */}
          <motion.div 
            className="flex-1 w-full overflow-x-auto overflow-y-hidden pb-10 custom-scrollbar"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-baseline gap-10 min-w-max">
              {products.map((product, index) => (
                <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group flex flex-col items-center "
              >
                <motion.div
                  key={product.id}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1, 
                    delay: index * 0.30,
                    ease: "easeOut"
                  }}
                >
                  <div className="relative w-56 flex items-end justify-center">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={160}
                      height={300}
                      className="object-contain drop-shadow-xl"
                    />
                  </div>
                  <div
                    className={`-mt-6 w-56 h-18 rounded-full bg-black flex items-center justify-center text-[10px] tracking-[0.2em] text-white uppercase px-2 text-center`}
                  >
                    {product.name.replace(/GOLD KILO BAR|GOLD BAR|SILVER BAR|KILOBAR|KILO BAR| GOLD TT BAR|for Fire assay Lab analysis/gi, "").trim()}
                  </div>
                </motion.div>
              </Link>
                
              ))}
            </div>
          </motion.div>

          {/* Right: Heading + arrow */}
          <motion.div 
            className="flex items-center lg:items-end gap-4 lg:flex-col lg:gap-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <motion.button 
              className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ECC273] shadow-md transition-transform hover:scale-105 cursor-pointer"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/products" className="flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-black" />
              </Link>
            </motion.button>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold tracking-tight text-black text-right lg:text-left lg:-rotate-6 leading-tight whitespace-nowrap"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              YOUR
              <br />
              INVESTMENT
              <br />
              OPTIONS
            </motion.h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOptions;


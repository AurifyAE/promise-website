'use client';

import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { products } from "@/data/products";

const heightMap: Record<string, string> = {
  "1 Kg": "max-h-[360px]",
  "500 gm": "max-h-[300px]",
  "250 gm": "max-h-[220px]",
  "116 gm": "max-h-[180px]"
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-24 md:pt-32 pb-20">
        <div className="container max-w-6xl mx-auto px-4 md:px-8">
          <section className="mb-16 ">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold text-black mb-8">
              Investment Bars and Refined Precious Metals
            </h1>
            <p className="text-gray-700 mx-auto text-sm md:text-base">
            Throughout history, refined gold and silver have served as instruments of wealth preservation, exchange, and continuity. At Promise Gold Refinery, we offer a range of investment bars and refined precious metals that are ideal for investors, jewellers, and institutions.
            </p>
            <p className="text-gray-700 mx-auto text-sm md:text-base">
              Promise Gold Refinery produces refined precious metals in structured bar formats suitable for commercial, institutional, and investment use.
            </p>
            <div className="mt-6 space-y-2 text-gray-700 mx-auto text-sm md:text-base">
              <p className="font-semibold">Our products include:</p>
              <p>
                <span className="font-semibold">Gold Bars</span> – Produced in controlled casting environments, ensuring
                consistency, structural integrity, and purity verification.
              </p>
              <p>
                <span className="font-semibold">Silver Bars</span> – Refined silver bars suitable for industrial and
                investment applications.
              </p>
              <p>
                Each bar undergoes rigorous metallurgical processes and quality verification prior to release.
              </p>
            </div>
          </section>

          <section className="flex flex-wrap items-baseline justify-center gap-10">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group flex flex-col items-center"
              >
                <div className="relative w-56 flex items-end justify-center">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={200}
                    height={1}
                    className={`object-contain drop-shadow-xl transition-transform duration-300 group-hover:-translate-y-1 ${heightMap[product.specs.weight]}`}
                    
                  />
                </div>
                <div className="-mt-6 h-18 w-56 rounded-full bg-black flex items-center justify-center text-[10px] tracking-[0.18em] text-white text-center uppercase px-2">
                  {product.name.replace(/GOLD KILO BAR|GOLD BAR|SILVER BAR|KILOBAR|KILO BAR| GOLD TT BAR|for Fire assay Lab analysis/gi, "").trim()}
                </div>
              </Link>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}



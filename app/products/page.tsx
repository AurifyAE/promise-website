'use client';

import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <section className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
              Gold Investment Bars
            </h1>
            <p className="text-gray-700 max-w-2xl mx-auto text-sm md:text-base">
              Explore our range of high‑purity 24K gold bars, refined to
              international standards and ideal for investors, jewellers, and
              institutions.
            </p>
          </section>

          <section className="flex flex-wrap items-baseline justify-center gap-10">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group flex flex-col items-center"
              >
                <div className="relative w-40 flex items-end justify-center">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={160}
                    height={300}
                    className="object-contain drop-shadow-xl transition-transform duration-300 group-hover:-translate-y-1"
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



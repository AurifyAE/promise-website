'use client';

import Image from "next/image";
import Link from "next/link";

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
              <div className="overflow-x-auto pb-4 scrollbar-hide">
                <div className="flex gap-10 min-w-max">
                  {products.map((product) => {
                    const isActive = product.id === id;
                    return (
                      <Link
                        key={product.id}
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
                    );
                  })}
                </div>
              </div>

              {/* Copy block */}
              <div className="space-y-4">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
                  Gold Bars
                </h1>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-md">
                  High‑purity 24K gold bars for investment, trading, and
                  jewellery. Available in multiple weights from 250g to 1kg, all
                  stamped with unique serial numbers and accompanied by an assay
                  certificate.
                </p>
              </div>
            </div>
          </section>

          {/* Detail card section */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
              {/* Large product image */}
              <div className="flex flex-col items-center col-span-1">
                <div className="relative h-80 w-56 md:h-80 md:w-56 flex items-end justify-center">
                  <Image
                    src={current.imageSrc}
                    alt={current.name}
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
                <div className="mt-4 h-16 w-56 rounded-full bg-black flex items-center justify-center text-[10px] tracking-[0.2em] text-white uppercase">
                  {specs.weight.toUpperCase()} GOLD BAR
                </div>
              </div>

              {/* Specs card */}
              <div className="relative w-full col-span-2">
                <div className="relative rounded-3xl bg-white shadow-[0_18px_45px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
                  <div className="flex items-center justify-between px-8 pt-8 pb-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-black">
                      {current.name.replace("Gold Bar", "")}Gold Bar
                    </h2>
                    <button className="rounded-full bg-[#1F6B3C] px-6 py-3 text-xs md:text-sm font-semibold text-white shadow-md hover:bg-[#175131] transition-colors">
                      ENQUIRE NOW →
                    </button>
                  </div>

                  <div className="px-8 pb-8">
                    <p className="text-xs md:text-sm font-semibold text-gray-700 mb-4">
                      Specifications
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs md:text-sm">
                      <SpecCard label="WEIGHT" value={specs.weight} />
                      <SpecCard label="LENGTH" value={specs.length} />
                      <SpecCard label="DIAMETER" value={specs.diameter} />
                      <SpecCard label="THICKNESS" value={specs.thickness} />
                      <SpecCard label="FINENESS" value={specs.fineness} />
                      <SpecCard
                        label="CERTIFICATION"
                        value={specs.certification}
                      />
                    </div>
                  </div>
                </div>
              </div>
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

function SpecCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-[#F7F7F7] px-4 py-3 flex flex-col gap-1">
      <span className="text-[10px] uppercase tracking-[0.15em] text-gray-500">
        {label}
      </span>
      <span className="text-sm font-semibold text-black">{value}</span>
    </div>
  );
}



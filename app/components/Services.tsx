'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title1: 'High-Purity',
    title2: 'Gold Refining',
    description: 'Transform gold ore, scrap, and bullion into 999.9-purity gold with our advanced refining process.',
    imageSrc: '/images/home/refinery-image.jpg',
    alt: 'Gold being poured into a mold',
  },
  {
    title1: 'Certified',
    title2: 'Assaying Services',
    description: 'Accurate, traceable, and certified assays for gold, silver, and other precious metals — ensuring confidence and fair value in every transaction.',
    imageSrc: '/images/home/certified-assaying.jpg',
    alt: 'Furnace with glowing hot metal inside',
  },
  {
    title1: 'Sustainable',
    title2: 'Metal Recycling',
    description: 'Eco-friendly recycling of gold, silver, platinum, and palladium from e-waste and industrial scrap.',
    imageSrc: '/images/home/metal-recycling.jpg',
    alt: 'Molten metal being poured',
  },
  {
    title1: 'High-Purity',
    title2: 'Silver Refining',
    description: 'Delivering 999+ purity silver for jewelry, industrial, and investment applications — refined with precision.',
    imageSrc: '/images/home/silver-refining.jpg',
    alt: 'Refined silver granules',
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Vertical Title - Hidden on mobile */}
          <div className="hidden lg:flex lg:col-span-2 items-center justify-center">
            <h2 className="text-5xl font-bold text-black tracking-wider -rotate-82 origin-center whitespace-nowrap">
              OUR SERVICES
            </h2>
          </div>

          {/* Mobile Title */}
          <div className="lg:hidden text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-800">Our Services</h2>
          </div>

          {/* Cards Grid */}
          <div className="lg:col-span-10">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-8">
                {services.filter((_, i) => i % 2 === 0).map((service, index) => (
                  <div
                    key={index * 2}
                    className="group bg-[#FCF7F1] rounded-3xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer px-8 lg:px-12 py-10 space-y-8"
                  >
                    <div className='flex items-center justify-between'>
                      <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-zinc-800">
                        {service.title1}
                      </h3>
                      <h3 className="text-2xl lg:text-3xl font-bold text-zinc-800">
                        {service.title2}
                      </h3>
                      </div>
                      <div className="w-14 h-14 bg-[#EBDECF] backdrop-blur-sm rounded-full flex items-center justify-center shadow-md transition-all group-hover:bg-zinc-100 group-hover:scale-105">
                        <ArrowRight className="w-5 h-5 text-zinc-700" />
                      </div>
                    </div>
                    <div className="relative h-64 md:h-72 overflow-hidden">
                      <Image
                        src={service.imageSrc}
                        alt={service.alt}
                        fill
                        className="object-contain transition-transform duration-500"
                      />
                      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" /> */}
                    </div>

                    <div className="relative">
                      <p className="text-zinc-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col gap-8 mt-10 md:mt-30">
                {services.filter((_, i) => i % 2 === 1).map((service, index) => (
                  <div
                    key={index * 2 + 1}
                    className="group bg-[#FCF7F1] rounded-3xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer px-8 lg:px-12 py-10 space-y-8"
                  >
                    <div className='flex items-center justify-between '>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-zinc-800">
                        {service.title1}
                      </h3>
                      <h3 className="text-2xl lg:text-3xl font-bold text-zinc-800">
                        {service.title2}
                      </h3>
                      </div>
                      <div className="w-14 h-14 bg-[#EBDECF] backdrop-blur-sm rounded-full flex items-center justify-center shadow-md transition-all group-hover:bg-zinc-100 group-hover:scale-110">
                        <ArrowRight className="w-5 h-5 text-zinc-700" />
                      </div>
                    </div>
                    <div className="relative h-64 md:h-72 overflow-hidden">
                      <Image
                        src={service.imageSrc}
                        alt={service.alt}
                        fill
                        className="object-contain transition-transform duration-500"
                      />
                      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" /> */}
                    </div>

                    <div className="">
                      <p className="text-zinc-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
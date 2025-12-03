'use client';

import Image from "next/image";
import { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const galleryImages = [
  { id: 1, src: "/images/home/gold-refining.jpg", alt: "Gallery Image 1" },
  { id: 2, src: "/images/home/gold-refining.jpg", alt: "Gallery Image 2" },
  { id: 3, src: "/images/home/gold-refining.jpg", alt: "Gallery Image 3" },
  { id: 4, src: "/images/home/gold-refining.jpg", alt: "Gallery Image 4" },
  { id: 5, src: "/images/home/gold-refining.jpg", alt: "Gallery Image 5" },
  { id: 6, src: "/images/home/gold-refining.jpg", alt: "Gallery Image 6" },
  { id: 7, src: "/images/home/gold-refining.jpg", alt: "Gallery Image 7" },
  { id: 8, src: "/images/home/gold-refining.jpg", alt: "Gallery Image 8" },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    
    const scrollAmount = 200;
    const currentScroll = carouselRef.current.scrollLeft;
    const newScroll = direction === 'left' 
      ? currentScroll - scrollAmount 
      : currentScroll + scrollAmount;
    
    carouselRef.current.scrollTo({
      left: newScroll,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-20 md:pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 transform -rotate-2 inline-block">
              OUR GALLERY
            </h1>
            <h2 className="text-base md:text-lg text-black mb-6 font-normal">
              Welcome to Our Gallery
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-sm md:text-base">
              Explore a curated collection of moments, creations, and experiences that define our brand. Each image reflects our commitment to quality, craftsmanship, and excellence. Browse through and discover the story behind what we do.
            </p>
          </div>

          {/* Main Gallery Image */}
          <div className="mb-16 flex justify-center">
            <div className="relative w-full max-w-4xl h-[350px] md:h-[450px] rounded-lg overflow-hidden shadow-lg bg-gray-100">
              <Image
                src={galleryImages[selectedImage]?.src || "/images/gallery/gallery-1.jpg"}
                alt={galleryImages[selectedImage]?.alt || "Gallery Image"}
                fill
                className="object-cover"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'%3E%3Crect fill='%23e5e7eb' width='800' height='450'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='24' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EGallery Image%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => scrollCarousel('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#EBDECF] hover:bg-[#D9C8B4] flex items-center justify-center shadow-lg transition-colors duration-200"
              aria-label="Previous images"
            >
              <svg
                className="w-6 h-6 md:w-7 md:h-7 text-[#A97C50]"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Carousel Container */}
            <div
              ref={carouselRef}
              className="overflow-x-auto scrollbar-hide px-12 md:px-20"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex gap-4 min-w-max p-2">
                {galleryImages.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden shrink-0 transition-all duration-300 ${
                      selectedImage === index
                        ? 'ring-4 ring-[#A97C50] scale-102'
                        : 'hover:scale-105 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23e5e7eb' width='200' height='200'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='18' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EImage%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scrollCarousel('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#EBDECF] hover:bg-[#D9C8B4] flex items-center justify-center shadow-lg transition-colors duration-200"
              aria-label="Next images"
            >
              <svg
                className="w-6 h-6 md:w-7 md:h-7 text-[#A97C50]"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}


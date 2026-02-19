'use client';

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const galleryImages = [
  { id: 1, src: "/images/gallery/group_gold_1.jpg", alt: "Gold Refining Process" },
  { id: 2, src: "/images/gallery/group-2.jpg", alt: "Gold Bar Manufacturing" },
  { id: 3, src: "/images/gallery/group-3.jpg", alt: "Gold Refining Facility" },
  { id: 4, src: "/images/gallery/group-4.jpg", alt: "Precious Metal Processing" },
  { id: 5, src: "/images/gallery/group-5.jpg", alt: "Gold Casting Process" },
  { id: 6, src: "/images/gallery/group-6.jpg", alt: "Gold Quality Inspection" },
  { id: 7, src: "/images/gallery/group-7.jpg", alt: "Gold Refinery Operations" },
  { id: 8, src: "/images/gallery/group-8.jpg", alt: "Gold Refining Equipment" },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [prevImage, setPrevImage] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleSelectImage = (newIndex: number) => {
    setPrevImage(selectedImage);
    setSelectedImage(newIndex);
  };

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

  // For image slide direction animation
  const imageSlideDirection =
    selectedImage > prevImage
      ? 1
      : selectedImage < prevImage
      ? -1
      : 0;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header Section */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 transform inline-block"
              initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.07 }}
            >
              Our Gallery
            </motion.h1>
            <motion.h2
              className="text-base md:text-lg text-black mb-6 font-normal"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
            >
              Welcome to Our Gallery
            </motion.h2>
            <motion.p
              className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-sm md:text-base"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.33 }}
            >
              Explore a curated collection of moments, creations, and experiences that define our brand. Each image reflects our commitment to quality, craftsmanship, and excellence. Browse through and discover the story behind what we do.
            </motion.p>
          </motion.div>

          {/* Main Gallery Image */}
          <div className="mb-16 flex justify-center">
            <div className="relative w-full max-w-4xl h-[450px] md:h-[560px] rounded-lg overflow-hidden shadow-lg bg-gray-100">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={galleryImages[selectedImage]?.src}
                  initial={{
                    x: imageSlideDirection === 0 ? 0 : imageSlideDirection > 0 ? 100 : -100,
                    opacity: 0,
                    scale: 0.95
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                  }}
                  exit={{
                    x: imageSlideDirection === 0 ? 0 : imageSlideDirection > 0 ? -100 : 100,
                    opacity: 0,
                    scale: 0.97
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 32,
                    duration: 0.45
                  }}
                  className="absolute inset-0"
                  style={{ zIndex: 1 }}
                >
                  <Image
                    src={galleryImages[selectedImage]?.src || "/images/gallery/gallery-1.jpg"}
                    alt={galleryImages[selectedImage]?.alt || "Gallery Image"}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'%3E%3Crect fill='%23e5e7eb' width='800' height='450'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='24' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EGallery Image%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative">
            {/* Left Arrow */}
            <motion.button
              onClick={() => scrollCarousel('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#EBDECF] hover:bg-[#D9C8B4] flex items-center justify-center shadow-lg transition-colors duration-200"
              aria-label="Previous images"
              whileTap={{ scale: 0.85 }}
              whileHover={{ scale: 1.07 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              <svg
                className="w-6 h-6 md:w-7 md:h-7 text-[#A97C50]/75"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Carousel Container */}
            <div
              ref={carouselRef}
              className="overflow-x-auto scrollbar-hide px-12 md:px-20"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex gap-4 min-w-max p-2">
                {galleryImages.map((image, index) => (
                  <motion.button
                    key={image.id}
                    onClick={() => handleSelectImage(index)}
                    className={`relative w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden shrink-0 transition-all duration-300 ${
                      selectedImage === index
                        ? 'ring-2 ring-[#A97C50]/75 scale-102'
                        : 'hover:scale-105 opacity-80 hover:opacity-100'
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 * index, duration: 0.47, type: "spring", stiffness: 200 }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        e.currentTarget.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23e5e7eb' width='200' height='200'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='18' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EImage%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <motion.button
              onClick={() => scrollCarousel('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#EBDECF] hover:bg-[#D9C8B4] flex items-center justify-center shadow-lg transition-colors duration-200"
              aria-label="Next images"
              whileTap={{ scale: 0.85 }}
              whileHover={{ scale: 1.07 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              <svg
                className="w-6 h-6 md:w-7 md:h-7 text-[#A97C50]/75"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}


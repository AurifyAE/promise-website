'use client';

import { motion, useMotionValue, animate } from 'framer-motion';
import { useState, useEffect, useCallback, useRef } from 'react';

const testimonials = [
  {
    quote: "Promise Gold Refinery has been an exceptional partner for our mining operations. Their refining accuracy, transparent reporting, and timely settlements make them one of the most reliable refineries we’ve worked with. We appreciate their commitment to responsible sourcing and look forward to a long-term partnership",
    name: "Ahmed Al Mansoori,",
    position: "Director, Al Noor Mining Co."
  },
  {
    quote: "We rely on Promise Gold Refinery for all our gold and silver refining needs. The purity of their refined metals consistently meets our high jewelry production standards. Their professionalism, quick turnaround, and integrity make them a trusted part of our supply chain.",
    name: "Sofia Karim,",
    position: "Founder, Golden Aura Jewels"
  },
  {
    quote: "What truly sets Promise Gold Refinery apart is their dedication to ethical and sustainable refining. Their adherence to OECD guidelines and transparent sourcing practices give us full confidence in every transaction",
    name: "Laila Hussein,",
    position: "Sustainability Officer, Green Earth Minerals"
  },
];

const clampValue = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export default function Testimonials() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);

  const [slideWidth, setSlideWidth] = useState(0);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  const updateMeasurements = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const viewportWidth = viewport.getBoundingClientRect().width;
    const trackWidth = track.scrollWidth;

    const firstChild = track.children[0] as HTMLElement | undefined;
    const secondChild = track.children[1] as HTMLElement | undefined;

    let spacing = firstChild?.getBoundingClientRect().width ?? viewportWidth;
    if (firstChild && secondChild) {
      spacing = Math.abs(secondChild.offsetLeft - firstChild.offsetLeft);
    }

    const maxDrag = Math.max(trackWidth - viewportWidth, 0);
    const nextConstraints = { left: -maxDrag, right: 0 };

    setSlideWidth(spacing);
    setConstraints(nextConstraints);

    const clampedPosition = clampValue(x.get(), nextConstraints.left, nextConstraints.right);
    x.set(clampedPosition);
  }, [x]);

  useEffect(() => {
    updateMeasurements();
    window.addEventListener('resize', updateMeasurements);

    return () => {
      window.removeEventListener('resize', updateMeasurements);
    };
  }, [updateMeasurements]);


  const clampPosition = useCallback(
    (value: number) => clampValue(value, constraints.left, constraints.right),
    [constraints]
  );

  const handleDragEnd = useCallback(() => {
    // Smooth continuous scroll without snapping
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return undefined;

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
      event.preventDefault();

      const nextPosition = clampPosition(x.get() - event.deltaX * 1.6);
      animate(x, nextPosition, { duration: 0.15, ease: [0.25, 0.1, 0.25, 1] });
    };

    viewport.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      viewport.removeEventListener('wheel', handleWheel);
    };
  }, [clampPosition, x]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-black font-bold text-center mb-16">
          Trusted by Industry Leaders
        </h2>

        <div className="max-w-6xl mx-auto">
          <div
            ref={viewportRef}
            className="overflow-hidden rounded-4xl md:rounded-[3rem] touch-pan-y"
            style={{
              touchAction: 'pan-y',
              WebkitUserSelect: 'none',
              userSelect: 'none',
              WebkitTapHighlightColor: 'transparent'
            }}
          >
            <motion.div
              ref={trackRef}
              className="flex gap-6 px-2"
              drag="x"
              dragConstraints={constraints}
              dragElastic={0.1}
              dragMomentum={true}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
              style={{ x }}
              onDragEnd={handleDragEnd}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="flex-none w-[90%] px-2 sm:w-3/4 md:w-1/2 lg:w-1/2"
                >
                  <motion.div
                    className="group relative aspect-square rounded-4xl md:rounded-[90px] lg:rounded-full bg-[#EBDECF] p-8 sm:p-10 flex flex-col items-center justify-center text-center shadow-lg border border-[#d5c3ad]"
                  >
                    <span className="absolute -top-1 text-5xl text-[#CC9B5A]">
                      &ldquo;
                    </span>
                    <p className="text-gray-700 text-sm md:text-base italic mb-6 leading-relaxed px-2">
                      {`"${t.quote}"`}
                    </p>
                    <div className="font-semibold text-[#1A1A1A]">{t.name}</div>
                    <div className="text-sm text-gray-600">{t.position}</div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
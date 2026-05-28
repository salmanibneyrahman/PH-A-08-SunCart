"use client";

import { useState, useEffect, useRef } from "react"; // useRef jog kora hoyeche
import Link from "next/link";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
  {
    id: 1,
    title: "Summer Sale 50% OFF",
    subtitle: "Shop the hottest summer essentials at unbeatable prices",
    tag: "Limited Time Offer",
    cta: "Shop Now",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&q=80",
  },
  {
    id: 2,
    title: "Hot Deals This Week",
    subtitle: "Sunglasses, beach wear, skincare and more — all on sale",
    tag: "Hot Deals",
    cta: "Explore Deals",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1400&q=80",
  },
  {
    id: 3,
    title: "New Arrivals 2026",
    subtitle: "Discover the latest summer collection curated just for you",
    tag: "New Collection",
    cta: "View Collection",
    image: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?q=80&w=1172",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };


  const goTo = (index) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 600);
  };

  const handleManualNext = () => {
    if (animating) return;
    goTo((current + 1) % slides.length);
  };

  const handleManualPrev = () => {
    if (animating) return;
    goTo((current - 1 + slides.length) % slides.length);
  };

  // 2. Real-time background continuous runtime garbage collection management
  useEffect(() => {

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      next();
    }, 4000); // 4 seconds delay auto slide profile

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [current]);

  const slide = slides[current];

  return (
    <div className="relative w-full h-[480px] md:h-[580px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0" key={`bg-${current}`}>
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          priority
          className="object-cover transition-all duration-700 animate__animated animate__fadeIn"
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content Wrapper */}
      <div
        key={`content-${current}`}
        className="absolute inset-0 flex items-center justify-end px-8 md:px-20 animate__animated animate__fadeInUp animate__slow"
      >
        <div className="text-right max-w-xl">
          <span className="inline-block bg-orange-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            {slide.tag}
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 drop-shadow-lg">
            {slide.title}
          </h1>
          <p className="text-white/80 text-base md:text-lg mb-8 leading-relaxed">
            {slide.subtitle}
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-gray-900 font-bold text-sm uppercase tracking-widest px-8 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg"
          >
            {slide.cta}
          </Link>
        </div>
      </div>

      {/* Arrow Controls with new manual lifecycle triggers */}
      <button
        onClick={handleManualPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white transition z-10"
      >
        <FiChevronLeft size={20} />
      </button>
      <button
        onClick={handleManualNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white transition z-10"
      >
        <FiChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? "bg-orange-500 w-6" : "bg-white/50"
              }`}
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    sm: "https://i.pinimg.com/736x/d4/c7/a3/d4c7a338a53108312365223ec2bd5bf3.jpg",
    md: "https://www.sivajewellers.com/wp-content/uploads/2024/11/Siva-Jewellers-Today-Ads-Poster-3_11zon.jpg",
    xl: "https://shreebalajijewellers.in/images/B-Web03.jpg",
    title: "Beautiful Mountains",
  },
  {
    sm: "https://i.pinimg.com/236x/e8/df/f0/e8dff0ffbc9b1905b4f9342c95d36799.jpg",
    md: "https://www.krishnajewellers.com/blog/wp-content/uploads/2021/11/gold-jewellery-video-call-shopping-at-krishna-jewellers.jpg",
    xl: "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/09/Artboard-2.png",
    title: "Serene Lake",
  },
  {
    sm: "https://i.pinimg.com/236x/e8/df/f0/e8dff0ffbc9b1905b4f9342c95d36799.jpg",
    md: "https://i.pinimg.com/originals/28/ab/11/28ab11b28c7565c6c8e61e6b1d2e3d49.jpg",
    xl: "https://shreebalajijewellers.in/images/B-Web04.jpg",
    title: "City Skyline",
  },
];

const getImage = (img) => {
  if (typeof window !== "undefined") {
    if (window.innerWidth >= 1280) return img.xl;
    if (window.innerWidth >= 768) return img.md;
    return img.sm;
  }
  return img.sm;
};

export default function Topbanner() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  // Auto carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // 5 seconds
    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={current}
          src={getImage(images[current])}
          alt={images[current].title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Left / Right Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/30 p-3 rounded-full hover:bg-white/50"
      >
        <ChevronLeft size={30} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/30 p-3 rounded-full hover:bg-white/50"
      >
        <ChevronRight size={30} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 w-full flex justify-center gap-3">
        {images.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === idx ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

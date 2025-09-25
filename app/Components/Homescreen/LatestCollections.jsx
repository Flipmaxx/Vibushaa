"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function LatestCollections() {
  const [reels, setReels] = useState([]); // ✅ no <string[]>
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    async function fetchReels() {
      setReels([
        "https://www.instagram.com/reel/XXXXXXXX/embed",
        "https://www.instagram.com/reel/YYYYYYYY/embed",
        "https://www.instagram.com/reel/ZZZZZZZZ/embed",
        "https://www.instagram.com/reel/WWWWWWWW/embed",
        "https://www.instagram.com/reel/AAAAAAA/embed",
        "https://www.instagram.com/reel/BBBBBBB/embed",
      ]);
    }
    fetchReels();
  }, []);

  const next = () => {
    if (reels.length > 0) {
      setCurrent((prev) => (prev + 1) % reels.length);
    }
  };

  const prev = () => {
    if (reels.length > 0) {
      setCurrent((prev) => (prev - 1 + reels.length) % reels.length);
    }
  };

  return (
    <section className="py-12 bg-white">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-yellow-700">
          Our Latest Collections
        </h2>
        <p className="text-gray-500 mt-2">
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
        </p>
      </div>

      {/* Carousel Wrapper */}
      <div className="relative max-w-7xl mx-auto flex items-center">
        {/* Left Arrow */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-0 z-10 bg-white shadow-lg rounded-full p-3 -ml-6 hover:bg-gray-100 transition"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        {/* Reels Container */}
        <div className="flex overflow-hidden gap-6 w-full justify-center">
          {reels.slice(current, current + 4).map((reel, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 rounded-2xl overflow-hidden shadow-lg w-64 h-96 bg-black"
            >
              <iframe
                src={reel}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-0 z-10 bg-white shadow-lg rounded-full p-3 -mr-6 hover:bg-gray-100 transition"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {reels.map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 rounded-full ${
              idx === current ? "bg-yellow-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

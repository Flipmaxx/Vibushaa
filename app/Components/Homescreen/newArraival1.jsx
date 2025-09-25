'use client'

import { Heart } from "lucide-react";

export default function NewArrival1() {
  const products = [
    {
      id: 1,
      image: "/Images/p1.png",
      title: "Manju Inspired Lotus Choker",
      oldPrice: "₹2,529",
      price: "₹1,89",
      badge: "Sold Out",
      badgeType: "gray",
    },
    {
      id: 2,
      image: "/Images/p2.png",
      title: "Manju Inspired Lotus Choker",
      oldPrice: "₹2,529",
      price: "₹1,897",
      badge: "Sale",
      badgeType: "red",
    },
    {
      id: 3,
      image: "/Images/p3.png",
      title: "Manju Inspired Lotus Choker",
      oldPrice: "₹2,529",
      price: "₹1,897",
      badge: "Sale",
      badgeType: "red",
    },
    {
      id: 4,
      image: "/Images/p4.png",
      title: "Manju Inspired Lotus Choker",
      oldPrice: "₹2,529",
      price: "₹1,897",
      badge: "Sale",
      badgeType: "red",
    },
  ];

  return (
    <section className="relative w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-10 relative z-10 gap-4">
        <div>
          <h1 className="text-5xl  text-yellow-600 mb-2">
            New Arrival
          </h1>
          <p className="text-sm text-gray-500 max-w-lg">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry. Lorem Ipsum Has Been The Industry&apos;s Standard Dummy
            Text Ever Since The 1500s.
          </p>
        </div>
        <a
          href="#"
          className="text-sm font-medium text-gray-700 hover:text-yellow-600 flex items-center gap-1"
        >
          View All →
        </a>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10">
       {products.map((item) => (
  <div key={item.id} className="flex flex-col group relative">
    {/* Card container */}
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm relative transition">
      {/* Product Image */}
      <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full group-hover:h-80 h-96 object-cover"
        />
        {/* Badge */}
       {item.badge && (
  <span
    className={`absolute bottom-3 left-0 text-center text-xs px-3 py-3 w-20  text-white 
      ${
        item.badgeType === "red"
          ? "bg-gradient-to-r from-[#2E1532] to-[#2E1532]/10"
          : "bg-gradient-to-r from-gray-500/100 to-gray-500/10"
      }`}
  >
    {item.badge}
  </span>
)}

        {/* Wishlist Icon */}
        <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
          <Heart size={16} className="text-gray-600" />
        </button>
      </div>
    </div>

    {/* Add to Cart Button - visible on card hover */}
    <div className="hidden group-hover:block mt-4">
      <button className="py-3 bg-[#2E1532] w-full text-white rounded-lg">
        Add to Cart
      </button>
    </div>

    {/* Product Info */}
    <div className="text-center text-sm mt-5 px-2">
      <h2 className="font-medium text-gray-800">{item.title}</h2>
      <div className="flex gap-4 items-center justify-center mt-2">
        <div className="relative inline-block text-gray-400 text-sm">
          <h1 className="line-through">{item.oldPrice}</h1>
        </div>
        <h2 className="text-gray-900 font-semibold">{item.price}</h2>
      </div>
    </div>
  </div>
))}

      </div>
    </section>
  );
}

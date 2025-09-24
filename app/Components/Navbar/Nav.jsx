"use client";

import { useState } from "react";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingCart,
  FiPhone,
  FiHome,
  FiMenu,
  FiX,
} from "react-icons/fi";

export default function Navbar() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src="/Images/L1.png" alt="Vibusha's" className="h-10 w-auto" />
          </div>

          {/* Desktop Middle Section */}
          <div className="hidden lg:flex flex-1 flex-col items-center space-y-2">
            {/* Store + Contact + Search */}
            <div className="flex items-center space-x-6 text-sm text-gray-700">
              <div className="flex items-center space-x-1 cursor-pointer">
                <FiHome className="w-4 h-4" />
                <span>Store</span>
              </div>
              <div className="flex items-center space-x-1">
                <FiPhone className="w-4 h-4" />
                <span>+91 3678926578</span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder='Search "Bracelets"'
                  className="border rounded-md py-1 px-4 pl-10 w-72 focus:outline-none focus:ring-1 focus:ring-yellow-600"
                />
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            {/* Nav Links */}
            <div className="flex space-x-6 text-sm font-medium">
              <div className="relative">
                <button
                  onClick={() => setCategoryOpen(!categoryOpen)}
                  className="flex items-center space-x-1 hover:text-yellow-600"
                >
                  Shop by Category
                  <svg
                    className="w-3 h-3 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {categoryOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded shadow-lg">
                    <ul>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Necklace</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Earrings</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Haarams</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">AD Stone Jewellery</li>
                    </ul>
                  </div>
                )}
              </div>
              <a href="#" className="hover:text-yellow-600">New Arrivals</a>
              <a href="#" className="hover:text-yellow-600">Best Seller</a>
              <a href="#" className="hover:text-yellow-600">Necklace</a>
              <a href="#" className="hover:text-yellow-600">Earrings</a>
              <a href="#" className="hover:text-yellow-600">Haarams</a>
              <a href="#" className="hover:text-yellow-600">AD Stone Jewellery</a>
              <a href="#" className="hover:text-yellow-600">Gifting</a>
            </div>
          </div>

          {/* Right: Country + Icons */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            <div className="hidden sm:block text-sm">India | INR ₹</div>
            <FiUser size={22} className="text-gray-700 cursor-pointer" title="Account" />
            <FiHeart size={22} className="text-gray-700 cursor-pointer" title="Wishlist" />
            <FiShoppingCart size={22} className="text-gray-700 cursor-pointer" title="Cart" />

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t h-screen shadow-md px-4 py-4 space-y-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder='Search "Bracelets"'
              className="border rounded-md py-2 px-4 pl-10 w-full focus:outline-none focus:ring-1 focus:ring-yellow-600"
            />
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>

          {/* Links */}
          <ul className="space-y-3 text-sm font-medium">
            <li className="cursor-pointer hover:text-yellow-600">Shop by Category</li>
            <li className="cursor-pointer hover:text-yellow-600">New Arrivals</li>
            <li className="cursor-pointer hover:text-yellow-600">Best Seller</li>
            <li className="cursor-pointer hover:text-yellow-600">Necklace</li>
            <li className="cursor-pointer hover:text-yellow-600">Earrings</li>
            <li className="cursor-pointer hover:text-yellow-600">Haarams</li>
            <li className="cursor-pointer hover:text-yellow-600">AD Stone Jewellery</li>
            <li className="cursor-pointer hover:text-yellow-600">Gifting</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

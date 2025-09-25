'use client'

import { Mail, Phone, Instagram, Facebook, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#2A122A] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 xl:px-0">
        {/* Left Section - Logo & Email */}
        <div>
          <h2 className="text-2xl font-semibold text-[#C5A15A] mb-4">Vibusha&apos;s</h2>
          <p className="text-sm mb-4">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. 
            Lorem Ipsum Has Been.
          </p>
          {/* Email Input */}
          <div className="flex items-center bg-white rounded overflow-hidden w-full max-w-xs">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-3 py-2 text-sm text-black outline-none flex-grow"
            />
            <button className="bg-[#C5A15A] px-4 py-2">
              <span className="text-white">&gt;</span>
            </button>
          </div>
          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6">
            <Instagram className="w-5 h-5 cursor-pointer hover:text-white" />
            <Facebook className="w-5 h-5 cursor-pointer hover:text-white" />
            <Youtube className="w-5 h-5 cursor-pointer hover:text-white" />
          </div>
        </div>

        {/* Links Section 1 */}
        <div>
          <h3 className="font-semibold text-white mb-3">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Our Story</li>
            <li>Why Buy From Us</li>
            <li>Shipping Policy</li>
            <li>Corporate Gifting</li>
            <li>Testimonials</li>
          </ul>
        </div>

        {/* Links Section 2 */}
        <div>
          <h3 className="font-semibold text-white mb-3">Guides & Policies</h3>
          <ul className="space-y-2 text-sm">
            <li>Buying & Price Guide</li>
            <li>Diamond Guide</li>
            <li>Jewellery Care Guide</li>
            <li>Certification Guide</li>
            <li>Shipping Policy</li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="font-semibold text-white mb-3">Customer Support</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +91 0000000000
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> Email
            </li>
            <li>
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-400">
        © 2025 Flipmaxx Global LLP. All Rights Reserved.
      </div>
    </footer>
  )
}

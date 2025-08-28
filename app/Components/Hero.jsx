

export default function Hero() {
  return (
    <div className="w-full h-screen relative">
      {/* Desktop / Tablet Image */}
      <img
        src="/videos/B.jpg" // for larger screens
        alt="Background desktop"
        fill
        priority
        className="object-cover hidden sm:block"
      />

      {/* Mobile Image */}
      <img
        src="/videos/M.jpg" // put mobile version in /public/videos
        alt="Background mobile"
        fill
        priority
        className="object-cover block sm:hidden"
      />
    </div>
  );
}

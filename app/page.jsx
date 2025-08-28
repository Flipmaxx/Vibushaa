import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen relative">
      {/* Desktop / Tablet Image */}
      <Image
        src="/videos/B.jpg" // for larger screens
        alt="Background desktop"
        fill
        priority
        className="object-cover hidden sm:block"
      />

      {/* Mobile Image */}
      <Image
        src="/videos/M.jpg" // put mobile version in /public/videos
        alt="Background mobile"
        fill
        priority
        className="object-cover block sm:hidden"
      />
    </div>
  );
}

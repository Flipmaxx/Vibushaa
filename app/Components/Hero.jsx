
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full h-screen relative">
      {/* Desktop / Tablet Image */}
      <Image
        src="/videos/B.jpg"
        alt="Background desktop"
        fill
        priority
        className="object-cover hidden sm:block"
      />

      {/* Mobile Image */}
      <Image
        src="/videos/M.jpg"
        alt="Background mobile"
        fill
        priority
        className="object-cover block sm:hidden"
      />
    </div>
  );
}

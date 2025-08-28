
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full h-screen relative">
      {/* Desktop / Tablet Image */}
    <img src="/Videos/M.jpg" alt="" />

   
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

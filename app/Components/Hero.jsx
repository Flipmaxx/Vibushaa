
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full h-screen relative">
      {/* Desktop / Tablet Image */}
    <img src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg" alt="" />

   
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

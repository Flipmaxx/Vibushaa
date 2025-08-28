
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-auto h-screen">
  
    <img src="/Videos/B.jpg" alt="" className="hidden md:inline w-screen object-cover h-screen" />

   
    <img src="/Videos/M.jpg" alt="" className="md:hidden h-screen object-cover w-screen"/>
    </div>
  );
}

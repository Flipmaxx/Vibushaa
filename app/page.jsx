import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <video
        src="/videos/logo.mp4"
        className="w-full  h-screen object-cover "
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}
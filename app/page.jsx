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
      <img src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg" alt="" />
    </div>
  );
}
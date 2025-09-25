'use client'

export default function Videobanner2() {
  return (
    <div className="w-screen h-120 md:h-[80vh] overflow-hidden relative">
      <video
        src="/Videos/V2.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
      <div className="bg-black/30 absolute inset-0"></div>
    </div>  
  )
}

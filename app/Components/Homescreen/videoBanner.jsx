'use client'

export default function Videobanners() {
  return (
    <div className="w-screen h-120 md:h-[80vh] overflow-hidden relative">
      <video
        src="/Videos/V1.mp4"
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

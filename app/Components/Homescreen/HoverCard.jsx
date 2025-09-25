'use client'

export default function HoverCard() {
  return (
    <section className="relative w-full h-auto py-16">

      <div className="relative max-w-7xl mx-auto px-4 xl:px-0">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-semibold text-[#B89153]">Diamond Jewellery</h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
            Lorem Ipsum Has Been The Industry&apos;s Standard.
          </p>
        </div>

        {/* Video Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "/Videos/V1.mp4",
            "/Videos/V2.mp4",
            "/Videos/V1.mp4",
            "/Videos/V2.mp4",
          ].map((video, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              {/* Video */}
              <video
                src={video}
                muted
                loop
                playsInline
                autoPlay
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover Card */}
              <div className="absolute bottom-2 left-2 right-2 bg-white/90 p-4 rounded-2xl  
                              opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
                              transition-all duration-300">
                <h3 className="font-semibold text-gray-900">Manju Inspired Lotus Choker</h3>
                <p className="text-gray-500 line-through text-sm">₹2,529</p>
                <p className="text-green-600 font-semibold">From ₹1,897</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

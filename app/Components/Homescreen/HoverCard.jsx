'use client'

export default function HoverCard() {
  return (
    <section className="relative w-full h-auto py-16 xl:py-20">

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
        <div
  className="absolute bottom-2 left-2 right-2 bg-white/90 p-4 rounded-2xl  
             opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
             transition-all duration-300"
>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center h-[8vh]">
    {/* Product Image */}
    <div className="flex justify-center lg:justify-center">
      <img src="./Images/p1.png" alt="Product" className="w-30 h-20 object-cover" />
    </div>

    {/* Product Info */}
    <div className="text-center lg:text-left">
      <h3 className="font-semibold text-gray-900 text-xs sm:text-xs">
        Manju Inspired Lotus Choker
      </h3>
     <div className="flex gap-2">
         <p className="text-gray-500 line-through text-xs sm:text-xs">₹2,529</p>
      <p className="text-green-600 font-semibold text-xs sm:text-xs">From ₹1,897</p>
     </div>
    </div>
  </div>
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

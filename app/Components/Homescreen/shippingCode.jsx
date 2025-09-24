'use client'

export default function ShippingCodes() {
  const features = [
    {
      image: "/Images/V1.png",
      title: "Exclusive",
      subtitle: "COLLECTIONS",
    },
    {
      image: "/Images/V2.png",
      title: "Fast",
      subtitle: "DELIVERY",
    },
    {
      image: "/Images/V3.png",
      title: "Trusted",
      subtitle: "QUALITY",
    },
    {
      image: "/Images/V4.png",
      title: "Customer",
      subtitle: "CARE SUPPORT",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto bg-white py-14">
      <div className="  grid grid-cols-2 md:grid-cols-4 gap-12 xl:gap-45 text-center px-6 xl:px-0">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={item.image}
              alt={item.title}
              className="w-14 h-14 xl:w-20 xl:h-20 mb-4 object-contain"
            />
            <h3 className="text-base md:text-lg font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="text-[11px] md:text-xs tracking-wide text-gray-500 uppercase">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

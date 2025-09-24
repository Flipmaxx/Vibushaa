"use client";

export default function Category() {
  const categories = [
    { name: "NEW ARRIVALS", img: "/Images/C1.png" },
    { name: "HAARAMS", img: "/Images/C2.png" },
    { name: "NECKLACE", img: "/Images/C3.png" },
    { name: "EARRINGS", img: "/Images/C4.png" },
    { name: "AD STONE JEWELLERY", img: "/Images/C5.png" },
    { name: "CHOKER", img: "/Images/C6.png" },
    { name: "DW BY OZY", img: "/Images/C7.png" },
  ];

  return (
    <div className="bg-white py-13 px-16 md:px-3 container mx-auto w-full  md:max-w-3xl lg:max-w-4xl xl:max-w-7xl">
      <div className="flex space-x-4 sm:space-x-12 overflow-x-auto scrollbar-hide items-center justify-center">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex-shrink-0 text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 border-yellow-500 p-1 mx-auto overflow-hidden">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="mt-2 text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 whitespace-nowrap">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

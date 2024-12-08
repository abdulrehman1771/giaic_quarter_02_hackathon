import React from "react";

const TopCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/image-20.svg", // Replace with actual paths
      shopButton: true,
    },
    {
      id: 2,
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/image-1171.svg",
      shopButton: false,
    },
    {
      id: 3,
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/image-1180.svg",
      shopButton: false,
    },
    {
      id: 4,
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/image-1181.svg",
      shopButton: false,
    },
  ];

  return (
    <div className="w-full mt-16">
      <div className="flex w-[95%] mx-auto justify-center max-w-[1400px]">
        <div className="text-center py-8">
          <h2 className="text-4xl font-extrabold mb-6 joesfin-sans text-[#151875]">Top Categories</h2>
          <div className="flex flex-wrap justify-center space-x-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className="relative bg-white  rounded-lg p-4 max-w-xs"
              >
                <div
                  className={`border-4 rounded-full ${
                    category.shopButton
                      ? ""
                      : "border-gray-200"
                  } p-4`}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-40 h-40 object-cover rounded-full"
                  />
                </div>
                {category.shopButton && (
                  <button className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 bg-green-500 text-white py-1 px-4 rounded-lg shadow-lg">
                    View Shop
                  </button>
                )}
                <h3 className="mt-6 text-xl font-semibold">{category.name}</h3>
                <p className="text-gray-600">{category.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            {/* Pagination Dots */}
            <span className="inline-block w-3 h-3 bg-pink-500 rounded-full mx-1"></span>
            <span className="inline-block w-3 h-3 bg-gray-300 rounded-full mx-1"></span>
            <span className="inline-block w-3 h-3 bg-gray-300 rounded-full mx-1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;

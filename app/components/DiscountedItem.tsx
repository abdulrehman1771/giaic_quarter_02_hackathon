import React from "react";

const DiscountItem: React.FC = () => {
  return (
    <div className="w-full mt-16">
      <div className="w-[95%] mx-auto max-w-[1400px]">
        <div className="mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4 josefin-sans text-[#151875]">Discount Item</h1>
          <div className="flex justify-center gap-4 text-lg text-pink-600 font-medium mb-8">
            <a href="#" className="hover:underline">
              Wood Chair
            </a>
            <span className="text-[#151875]">•</span>
            <a href="#" className="hover:underline">
              Plastic Chair
            </a>
            <span className="font-extrabold text-4xl josefin-sans text-[#151875]">•</span>
            <a href="#" className="hover:underline">
              Sofa Collection
            </a>
          </div>

          <div className="flex">
            {/* Left Section */}

            <div className="md:w-1/2 text-left">
              <h2 className="text-4xl font-extrabold mb-2 josefin-sans text-[#151875]">
                20% Discount Of All Products
              </h2>
              <h3 className="text-[#FB2E86] text-2xl font-semibold mb-6">
                Eams Sofa Compact
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
                feugiat habitasse nec, bibendum condimentum.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600 mb-8">
                <p className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✔</span> Material
                  expose like metals
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✔</span> Clear
                  lines and geometric figures
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✔</span> Simple
                  neutral colours
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✔</span> Material
                  expose like metals
                </p>
              </div>
              <button className="bg-[#FB2E86] text-white py-3 px-8 font-medium hover:bg-pink-600 transition">
                Shop Now
              </button>
            </div>

            {/* Right Section */}
            <div className="md:w-1/2 flex justify-center relative">
              <div className="absolute w-96 h-96 bg-pink-100 rounded-full -z-10"></div>
              <img
                src="/tortuga.svg"
                alt="Eams Sofa Compact"
                className="w-full max-w-md object-cover relative z-10 scale-150"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountItem;

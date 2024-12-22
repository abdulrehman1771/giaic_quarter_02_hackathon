import React from "react";
import Image from "next/image";
import { IoCheckmark } from "react-icons/io5";


const DiscountItem: React.FC = () => {
  return (
    <div className="w-full mt-16">
      <div className="w-[90%] mx-auto max-w-[1400px]">
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
            <span className="text-[#151875]">•</span>
            <a href="#" className="hover:underline">
              Sofa Collection
            </a>
          </div>

          <div className="flex mx-auto md:items-center justify-center flex-col-reverse md:flex-row">
            {/* Left Section */}

            <div className="md:w-1/2 text-left">
              <h2 className="text-4xl font-extrabold mb-2 josefin-sans text-[#151875]">
                20% Discount Of All Products
              </h2>
              <h3 className="josefin-sans text-[#FB2E86] text-2xl font-medium mb-6">
                Eams Sofa Compact
              </h3>
              <p className="text-[#B7BACB] text-lg mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
                feugiat habitasse nec, bibendum condimentum.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#B7BACB] mb-8">
                <p className="flex items-center gap-2">
                  <IoCheckmark className="stroke-[#7569B2] stroke-3 scale-150"/> Material
                  expose like metals
                </p>
                <p className="flex items-center gap-2">
                <IoCheckmark className="stroke-[#7569B2] stroke-3 scale-150"/> Clear
                  lines and geometric figures
                </p>
                <p className="flex items-center gap-2">
                <IoCheckmark className="stroke-[#7569B2] stroke-3 scale-150"/> Simple
                  neutral colours
                </p>
                <p className="flex items-center gap-2">
                <IoCheckmark className="stroke-[#7569B2] stroke-3 scale-150"/> Material
                  expose like metals
                </p>
              </div>
              <button className="bg-[#FB2E86] josefin-sans text-white py-3 px-8 font-medium hover:bg-[#e03c83] transition">
                Shop Now
              </button>
            </div>

            {/* Right Section */}
            <div className="md:w-1/2 flex justify-center relative">
              <div className="absolute w-72 h-72 sm:w-[450px] sm:h-[450px] bg-[#FCECF1] rounded-full -z-10"></div>
              <Image
                src="/tortuga.svg"
                alt="Eams Sofa Compact"
                width={800}
                height={800}
                // layout="responsive"
                className="max-w-sm sm:max-w-screen-xl relative z-10"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountItem;

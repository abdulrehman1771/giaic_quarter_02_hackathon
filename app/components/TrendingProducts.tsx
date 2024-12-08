import React from "react";
import Image from "next/image";
interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  originalPrice: number;
}

interface Discount {
  image: string;
  text: string;
  linkText: string;
}

const TrendingProducts: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      image: "/image-1170.svg",
      title: "Cantilever chair",
      price: 26,
      originalPrice: 42,
    },
    {
      id: 2,
      image: "/image-1177.svg",
      title: "Cantilever chair",
      price: 26,
      originalPrice: 42,
    },
    {
      id: 3,
      image: "/image-31.svg",
      title: "Cantilever chair",
      price: 26,
      originalPrice: 42,
    },
    {
      id: 4,
      image: "/image-33.svg",
      title: "Cantilever chair",
      price: 26,
      originalPrice: 42,
    },
  ];

  const discounts: Discount[] = [
    {
      image: "/image-1162.svg",
      text: "23% off in all products",
      linkText: "Shop Now",
    },
    {
      image: "/image-1161.svg",
      text: "23% off in all products",
      linkText: "View Collection",
    },
  ];

  return (
    <>
      <div className="mt-16 w-full ">
        <div className="w-[90%] max-w-[1400px] mx-auto">
          <div className="w-container mx-auto px-4 py-8">
            <h1 className="text-center text-4xl font-extrabold text-[#151875] mb-8">
              Trending Products
            </h1>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white shadow-md rounded-md p-4"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full bg-[#F5F6F8] h-40 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-center text-[#151875] text-lg font-bold">
                    {product.title}
                  </h3>
                  <div className="flex justify-center gap-7">
                  <p className="text-center text-[#151875] font-medium">
                    ${product.price}
                  </p>
                  <p className="text-center line-through text-gray-500">
                    ${product.originalPrice}
                  </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Discount Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {discounts.map((discount, index) => (
                <div
                  key={index}
                  className="bg-pink-50 border-2 rounded-md p-4 flex items-center"
                >
                  <img
                    src={discount.image}
                    alt="Discount"
                    className="w-20 h-20 object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold">{discount.text}</h3>
                    <a href="#" className="text-pink-600 font-medium underline">
                      {discount.linkText}
                    </a>
                  </div>
                </div>
              ))}
              <div className="text-[#151875]">
                <div className="w-full flex gap-5 mb-1 items-center">
                    <div className="bg-[#F5F6F8]">
                        <Image src="image-33.svg" width={80} height={80} alt="image"></Image>
                    </div>
                    <div>
                        <h4 className="font-semibold">Executive Seat chair</h4>
                        <p>$32.00</p>
                    </div>
                </div>
                <div className="w-full flex gap-5 mb-1 items-center">
                    <div className="bg-[#F5F6F8]">
                        <Image src="image-19.svg" width={80} height={80} alt="image"></Image>
                    </div>
                    <div>
                        <h4 className="font-semibold">Executive Seat chair</h4>
                        <p>$32.00</p>
                    </div>
                </div>
                <div className="w-full flex gap-5 mb-1 items-center">
                    <div className="bg-[#F5F6F8]">
                        <Image src="image-28.svg" width={80} height={80} alt="image"></Image>
                    </div>
                    <div>
                        <h4 className="font-semibold">Executive Seat chair</h4>
                        <p>$32.00</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingProducts;

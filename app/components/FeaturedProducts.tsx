import Image from "next/image";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { FiZoomIn } from "react-icons/fi";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      image: "/image-1168.svg",
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
    },
    {
      id: 2,
      image: "/image-1.svg",
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      isFeatured: true,
    },
    {
      id: 3,
      image: "/image-1169.svg",
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
    },
    {
      id: 4,
      image: "/image-3.svg",
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
    },
  ];

  return (
    <>
      <div className="w-full">
        <div className="py-16 w-[95%] mx-auto max-w-[1900px]">
          <h2 className="text-4xl font-extrabold text-center mb-8 text-[#1A0B5B]">
            Featured Products
          </h2>
          <div className="flex flex-col w-full md:flex-row justify-center items-center gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className={`relative w-full md:w-64 border rounded-lg shadow-md`}
              >
                <div className="w-full flex items-center justify-center bg-[#F7F7F7] h-72 object-cover rounded-t-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    // className="mx-auto pt-1/2 pb-1/2"
                  ></Image>
                </div>
                {product.isFeatured && (
                  <div className="absolute top-3 left-3 flex space-x-2">
                    <button
                      title="cart"
                      type="button"
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow"
                    >
                      <LuShoppingCart className="stroke-[#2F1AC4]" />
                    </button>
                    <button
                      title="cart"
                      type="button"
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow"
                    >
                      <FaRegHeart className="fill-[#1DB4E7]" />
                    </button>
                    <button
                      title="cart"
                      type="button"
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow"
                    >
                      <FiZoomIn className="stroke-[#1DB4E7]" />
                    </button>
                  </div>
                )}
                <div
                  className={` p-4 text-center ${
                    product.isFeatured
                      ? "bg-[#2F1AC4] text-white"
                      : "bg-white text-[#151875]"
                  }`}
                >
                  <h3
                    className={`josefin-sans font-semibold text-2xl  ${
                      product.isFeatured ? "" : "text-[#FB2E86]"
                    }`}
                  >
                    {product.name}
                  </h3>
                  <p className="text-sm">
                    Code -{" "}
                    <span className="josefin-sans font-medium">
                      {product.code}
                    </span>
                  </p>
                  <p className="text-xl font-bold mt-2">{product.price}</p>
                  {product.isFeatured && (
                    <button className="mt-4 bg-green-500 text-white py-1 px-3 rounded">
                      View Details
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex item justify-center mt-6">
            <div className="w-6 h-2 bg-pink-500 rounded-full mx-1"></div>
            <div className="w-6 h-2 bg-gray-300 rounded-full mx-1"></div>
            <div className="w-6 h-2 bg-gray-300 rounded-full mx-1"></div>
            <div className="w-6 h-2 bg-gray-300 rounded-full mx-1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;

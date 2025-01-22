import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { IList } from "../shop/shop_list/page";
import Link from "next/link";

// interface Product {
//   id: number;
//   image: string;
//   title: string;
//   price: number;
//   originalPrice: number;
// }

// interface Discount {
//   id: number;
//   image: string;
//   text: string;
//   linkText: string;
// }

const TrendingProducts = async () => {
  // const products: Product[] = [
  //   {
  //     id: 1,
  //     image: "/image-1170.svg",
  //     title: "Cantilever chair",
  //     price: 26,
  //     originalPrice: 42,
  //   },
  //   {
  //     id: 2,
  //     image: "/image-1177.svg",
  //     title: "Cantilever chair",
  //     price: 26,
  //     originalPrice: 42,
  //   },
  //   {
  //     id: 3,
  //     image: "/image-31.svg",
  //     title: "Cantilever chair",
  //     price: 26,
  //     originalPrice: 42,
  //   },
  //   {
  //     id: 4,
  //     image: "/image-33.svg",
  //     title: "Cantilever chair",
  //     price: 26,
  //     originalPrice: 42,
  //   },
  // ];

  // const discounts: Discount[] = [
  //   {
  //     id:1,
  //     image: "/image-1162.svg",
  //     text: "23% off in all products",
  //     linkText: "Shop Now",
  //   },
  //   {
  //     id:2,
  //     image: "/image-1161.svg",
  //     text: "23% off in all products",
  //     linkText: "View Collection",
  //   },
  // ];

  const prd: IList[] = await client.fetch(
    `*[_type == "product"][10...14]{_id,name, "imageUrl": image.asset->url, price, discountPercentage, stockLevel, description}`
  );

  const twoPrd: IList[] = [prd[2], prd[3]];
  const threePrd: IList[] = [prd[1], prd[2], prd[3]];

  return (
    <>
      <div className="mt-16 w-full ">
        <div className="w-[95%] max-w-[1400px] mx-auto">
          <div className="w-container mx-auto px-4 py-8">
            <h1 className="text-center text-4xl font-extrabold text-[#151875] mb-8">
              Trending Products
            </h1>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {prd.map((product: IList) => (
                <>
                  <Link href={`/shop/shop_list/${product._id}`}>
                    <div
                      key={product._id}
                      className="bg-white shadow-md rounded-md p-4"
                    >
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={20}
                        height={20}
                        sizes="100"
                        className="w-full bg-[#F5F6F8] h-80 object-contain rounded-md mb-4"
                      ></Image>
                      <h3 className="text-center text-[#151875] text-lg font-bold">
                        {/* <Link href={`/shop/shop_list/${product._id}`}> */}
                        {product.name}
                        {/* </Link> */}
                      </h3>
                      <div className="flex justify-center gap-7">
                        <p className="text-center text-[#151875] font-medium">
                          ${(product.discountPercentage / 100) * product.price}
                        </p>
                        <p className="text-center line-through text-gray-500">
                          ${product.price}
                        </p>
                      </div>
                    </div>
                  </Link>
                </>
              ))}
            </div>

            {/* Discount Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {twoPrd.map((product: IList) => (
                <div
                  key={product._id}
                  className="bg-pink-50 border-2 rounded-md p-4 flex items-center"
                >
                  <Image
                    src={product.imageUrl}
                    alt="Discount"
                    width={20}
                    height={20}
                    sizes="100"
                    className="w-20 h-20 object-contain mr-4"
                  ></Image>
                  <div>
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <Link
                      href={`/shop/shop_list/${product._id}`}
                      className="text-pink-600 font-medium underline"
                    >
                      View Product
                    </Link>
                  </div>
                </div>
              ))}

              <div className="text-[#151875]">
                {threePrd.map((product: IList) => {
                  return (
                    <>
                    <Link href={`/shop/shop_list/${product._id}`}>
                    <div
                      key={product._id}
                      className="w-full flex gap-5 mb-1 items-center"
                    >
                      <div className="bg-[#F5F6F8]">
                        <Image
                        className="object-cover"
                          src={product.imageUrl}
                          width={80}
                          height={80}
                          sizes="100"
                          alt={product.name}
                        ></Image>
                      </div>
                      <div>
                        <h4 className="font-semibold">{product.name}</h4>
                        <p>${product.price}</p>
                      </div>
                    </div>
                    </Link>

                    </>

                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingProducts;

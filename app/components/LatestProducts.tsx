import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

const LatestProducts = async () => {
  // const products = [
  //   {
  //     id: 1,
  //     image: "/image-1166.svg",
  //     name: "Comfort Handy Craft",
  //     price: "$42.00",
  //     oldPrice: "$65.00",
  //     isNew: true,
  //   },
  //   {
  //     id: 2,
  //     image: "/image-15.svg",
  //     name: "Comfort Handy Craft",
  //     price: "$42.00",
  //     oldPrice: "$65.00",
  //     isOnSale: true,
  //   },
  //   {
  //     id: 3,
  //     image: "/image-1160.svg",
  //     name: "Comfort Handy Craft",
  //     price: "$42.00",
  //     oldPrice: "$65.00",
  //   },
  //   {
  //     id: 4,
  //     image: "/image-23.svg",
  //     name: "Comfort Handy Craft",
  //     price: "$42.00",
  //     oldPrice: "$65.00",
  //   },
  //   {
  //     id: 5,
  //     image: "/image-32.svg",
  //     name: "Comfort Handy Craft",
  //     price: "$42.00",
  //     oldPrice: "$65.00",
  //   },
  //   {
  //     id: 6,
  //     image: "/image-2.svg",
  //     name: "Comfort Handy Craft",
  //     price: "$42.00",
  //     oldPrice: "$65.00",
  //   },
  // ];

  const prod = await client.fetch(
    '*[_type == "product"][6..11]{_id,name, "imageUrl": image.asset->url, name, price, discountPercentage}'
  );
  // console.log(prod)
  return (
    <>
      <div className="w-full">
        <div className="py-16 w-[95%] mx-auto max-w-[1900px]">
          <div className="py-12">
            <h2 className="text-4xl font-extrabold text-center mb-8 text-indigo-900">
              <span className="relative inline-block">
                <span className="relative">Latest Products</span>
              </span>
            </h2>
            <div className="flex justify-center space-x-8 text-sm mb-8">
              <button className="text-pink-500 font-semibold underline">
                New Arrival
              </button>
              <button className="text-gray-700 hover:text-indigo-900">
                Best Seller
              </button>
              <button className="text-gray-700 hover:text-indigo-900">
                Featured
              </button>
              <button className="text-gray-700 hover:text-indigo-900">
                Special Offer
              </button>
            </div>
            <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {prod.map(
                (product: {
                  _id: string;
                  imageUrl: string;
                  name: string;
                  isNew: boolean;
                  isOnSale: boolean;
                  price: number;
                  discountPercentage: number;
                }) => (
                  <>
                    <Link href={`/shop/shop_list/${product._id}`}>
                      <div
                        key={product._id}
                        className="w-full relative bg-white rounded-lg overflow-hidden"
                      >
                        <Image
                          src={product.imageUrl}
                          alt={product.name}
                          width={20}
                          height={20}
                          sizes="100%"
                          className="bg-[#F7F7F7] w-full h-96 object-contain"
                        ></Image>
                        {product.isNew}
                        {product.isOnSale && (
                          <span className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-semibold py-1 px-3 rounded-full">
                            Sale
                          </span>
                        )}
                        <div className="flex gap-5 p-4 items-center justify-between text-center">
                          <h3 className="font-medium border-b-2 text-lg text-gray-800">
                            {product.name}
                          </h3>
                          <div className="flex justify-center space-x-2 my-2">
                            <span className="text-pink-500 font-bold">
                              ${product.price}
                            </span>
                            <span className="text-gray-500 line-through">
                              ${product.discountPercentage}
                            </span>
                          </div>
                          <div className="flex justify-center space-x-2 mt-4"></div>
                        </div>
                      </div>
                    </Link>
                  </>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestProducts;

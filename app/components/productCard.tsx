import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { IList } from "../shop/shop_list/page";

export default function Card({data}:{data}) {   
  const product:IList = data[0]
    console.log(data.length)
  return (
    <>
      <div className="w-full p-10 flex shadow-md gap-5">
        <div className="w-[45%] grid grid-cols-3 grid-rows-3 gap-2">
          <div className="bg-slate-100 w-full h-40 relative">
            {
                product.imageUrl?
              <Link href={`${product.imageUrl}`} className="">
              <Image
                src={`${product.imageUrl}`}
                className=""
                // width={100}
                // height={100}
                // layout="responsive"
                fill
                alt={product.name}
                ></Image>
            </Link>
            :""
              }
          </div>
          <div className="relative bg-slate-100 w-full row-span-3 col-span-2">
          {
                product.imageUrl?
              <Link href={`${product.imageUrl}`} className="">
              <Image
                src={`${product.imageUrl}`}
                className=""
                // width={100}
                // height={100}
                // layout="responsive"
                fill
                alt={product.name}
                ></Image>
            </Link>
            :""
              }
          </div>
          <div className="relative bg-slate-100 w- h-40">
          {
                product.imageUrl?
              <Link href={`${product.imageUrl}`} className="">
              <Image
                src={`${product.imageUrl}`}
                className=""
                // width={100}
                // height={100}
                // layout="responsive"
                fill
                alt={product.name}
                ></Image>
            </Link>
            :""
              }
          </div>
          <div className="relative bg-slate-100 w- h-40">
          {
                product.imageUrl?
              <Link href={`${product.imageUrl}`} className="">
              <Image
                src={`${product.imageUrl}`}
                className=""
                // width={100}
                // height={100}
                // layout="responsive"
                fill
                alt={product.name}
                ></Image>
            </Link>
            :""
              }
          </div>
        </div>
        <div className="w-[55%] my-auto">
          <h1 className="josefin-sans font-semibold text-[#0D134E] text-4xl">
            {product.name}
          </h1>
          <div className="flex my-5 items-center gap-3">
            <div className="flex gap-2">
              <FaStar className="fill-[#FFC416]" />
              <FaStar className="fill-[#FFC416]" />
              <FaStar className="fill-[#FFC416]" />
              <FaStar className="fill-[#FFC416]" />
              <FaStar className="fill-[#FFC416]" />
            </div>
            <div>
              <p className="josefin-sans font-medium text-[#0D134E]">(22)</p>
            </div>
          </div>
          <div className="flex items-center gap-3 my-5">
            <h3 className="text-[#0D134E] font-semibold">${(product.discountPercentage / 100) * product.price}</h3>
            <h3 className="line-through text-[#FB2E86] font-semibold">${product.price}</h3>
          </div>
          <h3 className="josefin-sans text-[#151875] font-semibold my-5">
            Color:
          </h3>
          <p className="w-[80%] josefin-sans text-[#A9ACC6] font-medium">
            {product.description}
          </p>
          <div className="my-5 flex items-center gap-3">
            <div>
              <button
                type="button"
                className="josefin-sans font-medium bg-[#FB2E86] text-white p-3"
              >
                Add To Cart
              </button>
            </div>
            <div>
              <FaRegHeart size={40} className="fill-[#151875]" />
            </div>
          </div>
          <h3 className="josefin-sans text-[#151875] font-semibold my-5">
            Categories:
          </h3>
          <h3 className="josefin-sans text-[#151875] font-semibold my-5">
            Tags:
          </h3>
          <div className="flex gap-3 items-center">
            <div>
              <h3 className="josefin-sans text-[#151875] font-semibold my-5">
                Share
              </h3>
            </div>

            <Link href={""}>
              <FaFacebook className="fill-[#151875]" />
            </Link>
            <Link href={""}>
              <RiInstagramFill className="fill-[#FB2E86]" />
            </Link>
            <Link href={""}>
              <FaTwitter className="fill-[#151875]" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

import FilterBar from "@/app/components/FilterBar";
import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { FiZoomIn } from "react-icons/fi";

interface IList {
  id: number;
  title: string;
  discountedPrice: string;
  oldPrice: string;
  image: string;
  productDetails: string;
}

export default function shopList() {
  const list_items: IList[] = [
    {
      id: 1,
      title: "Accumsan tincidunt",
      discountedPrice: "$26.00",
      oldPrice: "$52.00",
      image: "/shopListPhoto1.jpeg",
      productDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 2,
      title: "In nulla",
      discountedPrice: "$26.00",
      oldPrice: "$52.00",
      image: "/shopListPhoto2.jpeg",
      productDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 3,
      title: "Vel sem",
      discountedPrice: "$26.00",
      oldPrice: "$52.00",
      image: "/shopListPhoto3.jpeg",
      productDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 4,
      title: "Porttitor cum",
      discountedPrice: "$26.00",
      oldPrice: "$52.00",
      image: "/shopListPhoto4.jpeg",
      productDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 5,
      title: "Nunc in",
      discountedPrice: "$26.00",
      oldPrice: "$52.00",
      image: "/shopListPhoto5.jpeg",
      productDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 6,
      title: "Vitae facilisis",
      discountedPrice: "$26.00",
      oldPrice: "$52.00",
      image: "/shopListPhoto6.jpeg",
      productDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 7,
      title: "In nulla",
      discountedPrice: "$26.00",
      oldPrice: "$52.00",
      image: "/shopListPhoto7.jpeg",
      productDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
  ];

  return (
    <>
      <div className="w-full">
        <div className="w-full bg-[#F6F5FF]">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <div className="h-[286px] flex flex-col justify-center">
              <h1 className="josefin-sans text-4xl font-extrabold text-[#101750]">
                Shop List
              </h1>
              <div className="flex gap-1 font-medium">
                <div>
                  <Link href={"/"}>Home</Link>
                </div>
                <div className="text-[#FB2E86]">
                  <p>. Shop List</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] max-w-[1400px] mx-auto">
        <div className="my-40">
          <FilterBar head="E-commerce Accessories & Fashion Item" />
        </div>

        <div className="flex w-full">

          <div className="grid gap-5 grid-cols-1 w-full">
            {list_items.map((tmp, index) => {
              return (
                <div
                  key={index}
                  className="flex lg:flex-row flex-col gap-6 p-3 shadow-lg shadow-[#F6F6FD80] items-center"
                >
                  <div className="flex relative justify-center items-center w-full md:flex-col lg:flex-row lg:w-[350px] h-60 bg-black">
                    <div className="relative w-full h-full">
                      <Image
                        className=""
                        src={tmp.image}
                        objectFit="cover"
                        layout="fill"
                        sizes="100%"
                        alt={tmp.image}
                      ></Image>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex my-3 flex-col gap-1">
                      <h1 className="josefin-sans font-bold text-[#111C85] text-2xl">
                        {tmp.title}
                      </h1>
                      <div className="flex gap-2 items-center">
                        <div className="w-3 h-3 rounded-full bg-[#DE9034]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#E60584]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#5E37FF]"></div>
                      </div>
                    </div>
                    <div className="flex my-3 gap-4 items-center font-semibold">
                      <h3 className="text-[#111C85]">{tmp.discountedPrice}</h3>
                      <h3 className="text-[#FF2AAA] line-through">
                        {tmp.oldPrice}
                      </h3>
                      <div className="flex gap-2 scale-90">
                        <FaStar className="fill-[#FFC416]" />
                        <FaStar className="fill-[#FFC416]" />
                        <FaStar className="fill-[#FFC416]" />
                        <FaStar className="fill-[#FFC416]" />
                        <FaStar className="fill-[#B2B2B2]" />
                      </div>
                    </div>
                    <div className="w-[80%] leading-8 text-lg text-[#9295AA]">
                      <p>{tmp.productDetails}</p>
                    </div>

                    <div className="flex items-center mt-4 gap-5">
                      <div className="flex items-center justify-center w-14 h-14 rounded-full shadow-sm">
                        <LuShoppingCart className="scale-125 stroke-[#535399]" />
                      </div>
                      <div className="flex items-center justify-center w-14 h-14 rounded-full shadow-sm">
                        <FaRegHeart className="scale-125 fill-[#535399]" />
                      </div>
                      <div className="flex items-center justify-center w-14 h-14 rounded-full shadow-sm">
                        <FiZoomIn className="scale-125 stroke-[#535399]" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full my-20">
          <div className="h-[100%] w-[90%] flex items-center max-w-[1400px] mx-auto">
            <div className="weWorkWith h-28 w-full mx-auto"></div>
          </div>
        </div>
      </div>
    </>
  );
}

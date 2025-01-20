import Image from "next/image";
import Link from "next/link";


export default function Hero() {
  return (
    <>
      <div className="w-full bg-[#F2F0FF]">
        <div className="flex flex-col w-[95%] mx-auto max-w-[1900px]">
          <div className="flex justify-center">
            <div className="hidden md:flex md:flex-col">
              <div>
                <Image
                  src="/lamp-hero.png"
                  width={20}
                  height={20}
                  className=""
                  layout="responsive"
                  alt=""
                ></Image>
              </div>
            </div>
            <div className="py-10 self-center flex flex-col justify-center">
              <div className="text-lg text-center md:text-left md:text-xl text-[#FB2E86] leading-[5rem]">
                <p>Best Furniture For Your Castle....</p>
              </div>
              <div className=" max-w-[800px] josefin-sans text-center md:text-left text-3xl md:text-4xl lg:text-6xl font-bold leading-[2rem] md:leading-[3rem] lg:leading-[5rem]">
                <h1>New Furniture Collection Trends in 2020</h1>
              </div>
              <div className="text-center md:text-left text-sm md:text-xl text-[#8A8FB9]">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </p>
              </div>
              <div className="items-center self-center scale-75 md:scale-100 md:self-auto justify-center font-medium mt-8 text-xl text-white josefin-sans">
                <Link href={"/shop/shop_list"}>
                <button title="button" type="button" className=" px-9 py-3  bg-[#FB2E86]">Shop Now</button>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex md:items-center">
              <Image
                className="mt-5"
                src="/sofa-hero.png"
                width={20}
                height={20}
                layout="responsive"
                alt=""
              ></Image>
            </div>
          </div>

          <div className="flex gap-16 items-center justify-center scale-[20%] pb-9">
            {/* Green diamond with pink center */}
            <div className="relative w-12 h-12 bg-transparent border-4 border-pink-500 rotate-45 flex items-center justify-center">
              <div className="absolute w-8 h-8 bg-pink-500"></div>
            </div>

            {/* Empty pink diamonds */}
            <div className="w-12 h-12 bg-transparent border-4 border-pink-500 rotate-45"></div>
            <div className="w-12 h-12 bg-transparent border-4 border-pink-500 rotate-45"></div>
          </div>
        </div>
      </div>
    </>
  );
}

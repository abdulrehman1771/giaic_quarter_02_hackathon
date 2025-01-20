import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import LatestProducts from "./components/LatestProducts";
import ShopexOffer from "./components/ShopexOffer";
import Image from "next/image";
import TrendingProducts from "./components/TrendingProducts";
import DiscountItem from "./components/DiscountedItem";
import TopCategories from "./components/TopCategories";
import LatestBlog from "./components/LatestBlog";

export default async function Home() {
  
  
  
  return (
    <>
      <Hero />

      {await FeaturedProducts()}
      {await LatestProducts()}
      {/* <LatestProducts /> */}
      <ShopexOffer />

      <div className="w-full bg-[#F1F0FF]">
        <div className="py-20 w-[90%] mx-auto max-w-[1400px]">
          <div className="flex items-center flex-col md:flex-row gap-20 mx-auto">
            <div className="relative ">
              <div className="relative rounded-full w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] md:w-[400px] md:h-[400px] bg-[#F5E1FC]">
                <Image
                  src="sofa-home.svg"
                  width={900}
                  height={900}
                  alt="sofa home"
                  className="absolute w-full md:max-w-2xl"
                ></Image>
              </div>
            </div>
            <div className="">
              <div className="text-4xl josefin-sans font-bold leading-[3rem] text-[#151875] mb-6">
                <h1>Unique Features Of leatest & Trending Poducts</h1>
              </div>
              <div className="text-lg text-[#ACABC3]">
                <div className="leading-10">
                  <div className=" items-center">
                    <div className="inline-block mr-4 w-3 h-3 rounded-full bg-[#F52B70]"></div>
                    All frames constructed with hardwood solids and laminates
                  </div>
                  <div className="items-center">
                    <div className="inline-block mr-4 w-3 h-3 rounded-full bg-[#2B2BF5]"></div>
                    Reinforced with double wood dowels, glue, screw - nails
                    corner blocks and machine nails
                  </div>
                  <div className="items-center">
                    <div className="inline-block mr-4 w-3 h-3 rounded-full bg-[#2BF5CC]"></div>
                    Arms, backs and seats are structurally reinforced
                  </div>
                </div>
              </div>
              <div className="mt-8 gap-7 flex items-center ">
                <div className="bg-[#FB2E86] text-lg text-white font-medium">
                  <button className="px-9 py-3" type="button">
                    Add to Cart
                  </button>
                </div>
                <div className="text-[#151875]">
                  <h4 className="font-bold">B&B Italian Sofa </h4>
                  <p className="font-medium">$32.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TrendingProducts />
      <DiscountItem />
      <TopCategories />

      <div className="w-full">
        <div className="h-[100%] w-[90%] flex items-center max-w-[1400px] mx-auto"></div>
        <div className="newsLetterBg relative flex items-center justify-center py-16 bg-cover bg-center">
          <div className="flex flex-col justify-center px-8 py-12 text-center max-w-2xl">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Get Latest Update By Subscribe Our Newsletter
              </h2>
              <button className="mt-4 bg-pink-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-pink-600">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full my-16">
        <div className="h-[100%] w-[90%] flex items-center max-w-[1400px] mx-auto">
          <div className="weWorkWith h-28 w-full mx-auto"></div>
        </div>
      </div>

      <LatestBlog />

    </>
  );
}

import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import LatestProducts from "./components/LatestProducts";
import ShopexOffer from "./components/ShopexOffer";
import Image from "next/image";
import TrendingProducts from "./components/TrendingProducts";
import DiscountItem from "./components/DiscountedItem";
import TopCategories from "./components/TopCategories";
import LatestBlog from "./components/LatestBlog";
import Footer from "./components/Footer";


export default function Home() {
  return (
   <>
   <Hero />

   <FeaturedProducts/>
   <LatestProducts/>
    <ShopexOffer/>

    <div className="mt-12 w-full h-[579px] bg-[#F1F0FF]">
    <div className="h-[100%] w-[90%] flex items-center max-w-[1400px] mx-auto">
      <div className="relative">
        <Image src="sofa-home.svg" width={600} height={600} alt="sofa home"></Image>
      </div>
      <div className="w-[40%]">
        <div className="text-4xl font-bold leading-[3rem] text-[#151875] mb-6">
          <h1>Unique Features Of leatest &
          Trending Poducts</h1>
        </div>
        <div className="text-lg text-[#ACABC3]">
          <ul className="list-disc">
            <li>All frames constructed with hardwood solids and laminates</li>
            <li>Reinforced with double wood dowels, glue, screw - nails corner 
            blocks and machine nails</li>
            <li>Arms, backs and seats are structurally reinforced</li>
          </ul>
        </div>
        <div className="mt-8 gap-7 flex items-center ">
          <div className="bg-[#FB2E86] text-lg text-white font-medium">
            <button className="px-9 py-3" type="button">Add to Cart</button>
          </div>
          <div className="text-[#151875]">
            <h4 className="font-bold">B&B Italian Sofa </h4>
            <p className="font-medium">$32.00</p>
          </div>
        </div>
      </div>
    </div>
    </div>

    <TrendingProducts />
    <DiscountItem />
    <TopCategories/>

    
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

    <LatestBlog/>
   </>
  );
}

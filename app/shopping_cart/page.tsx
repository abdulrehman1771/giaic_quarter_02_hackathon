import Link from "next/link";
import Image from "next/image";
import { IoCloseCircle } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa6";



const ShoppingCart = () => {
  return (
    <>
      <div>
        <div className="w-full">
          <div className="w-full bg-[#F6F5FF]">
            <div className="w-[90%] max-w-[1400px] mx-auto">
              <div className="h-[286px] flex flex-col justify-center">
                <h1 className="josefin-sans text-4xl font-extrabold text-[#101750]">
                  Shopping Cart
                </h1>
                <div className="flex gap-1 font-medium">
                  <div>
                    <Link href={"/"}>Home</Link>
                  </div>
                  <div className="text-[#FB2E86]">
                    <p>. Shopping Cart</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full my-40">
        <div className="w-[90%] max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row text-center gap-9">
            <div className="w-full row-span-2 col-span-5">

            <div className="grid grid-cols-5 josefin-sans font-bold text-[#1D3178] text-2xl ">
              <div className="col-span-2 text-left">Product</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Total</div>
            </div>

            <div className="my-8">
            <div className="grid grid-cols-5 border-b-2 items-center py-5">
              <div className="col-span-2 text-left flex gap-5 items-center">
                <div className="relative">
                <Image src={"/image-1170.svg"} width={110} height={110} alt="product">
                </Image>
                <div className="absolute top-0 right-0">
                  <button type="button" title="Remove from Cart">
                  <IoCloseCircle size={20}/>
                  </button>
                </div>
                </div>
                <div> 
                  <h3 className="font-medium text-xl">Ut diam consequat</h3>
                  <p className="text-[#A1A8C1]">Color: Brown</p>
                  <p className="text-[#A1A8C1]">Size: XL</p>
                </div>
              </div>
              <div className="text-[#15245E] font-medium">$32.00</div>
              <div className="flex text-[#BEBFC2] text-lg items-center justify-center">
                <div><button type="button" title="subtract quantity" className="w-5 h-6 flex justify-center items-center bg-[#E7E7EF]"><FaMinus size={10} /></button></div>
                <div className="w-10 h-6 flex justify-center items-center bg-[#F0EFF2]">1</div>
                <div><button type="button" title="subtract quantity" className="w-5 h-6 flex justify-center items-center bg-[#E7E7EF]"><FaPlus size={10} /></button></div>
              </div>
              <div className="text-[#15245E] font-medium">£219.00</div>
            </div>       
            </div>

            <div className="flex justify-between py-5 josefin-sans">
            <div>
              <button type="button" className="text-white font-medium py-3 px-8 bg-[#FB2E86]">Update Cart</button>
            </div>
            <div>
              <button type="button" className="text-white font-medium py-3 px-8 bg-[#FB2E86]">Clear Cart</button>
            </div>

            </div>

            </div>
            <div className="w-[40%] flex flex-col gap-10">
            <div className="w-full col-span-2 flex flex-col">
              <div className="text-center josefin-sans font-bold text-2xl text-[#1D3178]">
                <h1 className="py-5">Cart Tools</h1>
              </div>
              <div className="w-full h-full bg-[#F4F4FC] p-5">
                <div className="flex justify-between border-b-2 py-4 text-lg text-[#1D3178]">
                  <h3 className="font-semibold">Subtotals:</h3>
                  <h3 className="font-medium">£219.00</h3>
                </div>
                <div className="flex justify-between border-b-2 py-4 text-lg text-[#1D3178]">
                  <h3 className="font-semibold">Totals:</h3>
                  <h3 className="font-medium">£325.00</h3>
                </div>
                <div className="flex gap-3 py-5 items-center">
                    <input title="checkbox" type="checkbox" className="w-4 h-4 border border-[#19D16F] rounded-sm bg-gray-50 focus:ring-3 focus:ring-[#19D16F] dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-[#19D16F] dark:ring-offset-gray-800" required />
                    <label htmlFor="checkbox" className="text-sm text-[#8A91AB]">Shipping & taxes calculated at checkout</label>
                </div>
                <div className="">
                  <button type="button" className="w-full p-4 mx-auto text-center text-white text-lg font-medium bg-[#19D16F]">Proceed to checkout</button>
                </div>
              </div>
            </div>
            <div className="w-full col-span-2 flex flex-col">
              <div className="text-center josefin-sans font-bold text-2xl text-[#1D3178]">
                <h1 className="py-5">Calculate Shopping</h1>
              </div>
              <div className="w-full h-full bg-[#F4F4FC] p-5">
                <div className="flex justify-between py-4 text-lg text-[#1D3178]">
                  <input className="w-full p-3 border-b-2 bg-[#F4F4FC] focus:outline-none" type="text" title="shopping" placeholder="City" />
                </div>
                <div className="flex justify-between py-4 text-lg text-[#1D3178]">
                  <input className="w-full p-3 border-b-2 bg-[#F4F4FC] focus:outline-none" type="text" title="shopping" placeholder="Country" />
                </div>
                <div className="flex justify-between py-4 text-lg text-[#1D3178]">
                  <input className="w-full p-3 border-b-2 bg-[#F4F4FC] focus:outline-none" type="text" title="shopping" placeholder="Postal Code" />
                </div>
                <div className="">
                  <button type="button" className="w-full p-4 mt-5 mx-auto text-center text-white text-lg font-medium bg-[#FB2E86]">Calculate Shipping</button>
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

export default ShoppingCart;

import Link from "next/link";

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
          <div className="grid lg:grid-cols-7 gap-5">
            <div className="border-2 w-full h-96 row-span-2 col-span-5"></div>
            <div className="border-2 w-full col-span-2 flex flex-col">
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
                  <input title="checkbox" type="checkbox" className="w-4 h-4 border border-[#19D16F] rounded-sm bg-gray-50 focus:ring-3 focus:ring-[#19D16F] dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-[#19D16F] dark:ring-offset-gray-800" required/>
                    <label htmlFor="checkbox" className="text-sm text-[#8A91AB]">Shipping & taxes calculated at checkout</label>
                </div>
                <div className="">
                  <button type="button" className="w-full p-4 mx-auto text-center text-white text-lg font-medium bg-[#19D16F]">Proceed to checkout</button>
                </div>
              </div>
            </div>
            <div className="border-2 w-full col-span-2 flex flex-col">
              <div className="text-center josefin-sans font-bold text-2xl text-[#1D3178]">
                <h1 className="py-5">Calculate Shopping</h1>
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
                  <input title="checkbox" type="checkbox" className="w-4 h-4 border border-[#19D16F] rounded-sm bg-gray-50 focus:ring-3 focus:ring-[#19D16F] dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-[#19D16F] dark:ring-offset-gray-800" required/>
                    <label htmlFor="checkbox" className="text-sm text-[#8A91AB]">Shipping & taxes calculated at checkout</label>
                </div>
                <div className="">
                  <button type="button" className="w-full p-4 mx-auto text-center text-white text-lg font-medium bg-[#19D16F]">Proceed to checkout</button>
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

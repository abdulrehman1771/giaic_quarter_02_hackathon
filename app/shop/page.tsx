import Link from "next/link";

export default async function shop() {
  
  // const response = await fetch('http://localhost:3000/data/products.json')
  // const data = await response.json()
  // console.log(data)
  
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
                  <p>. Shop</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div className="w-full">
        <div className="w-[90%] leading-10 mx-auto max-w-[1400px] py-14">
            <h2>Click Below Links:</h2>
            <Link href="/shop/shop_grid_default" className="josefin-sans font-bold underline text-[#151875] text-2xl "> Shop Grid Default</Link><br /><br />
            <Link href="/shop/shop_list" className="josefin-sans font-bold underline text-[#151875] text-2xl "> Shop Grid Default</Link>
        </div>
      </div>
    </>
  );
}

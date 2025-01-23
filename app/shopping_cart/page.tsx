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
  </div>
      </>
  )
}

export default ShoppingCart;
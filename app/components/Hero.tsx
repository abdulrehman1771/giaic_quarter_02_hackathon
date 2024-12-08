
export default function Hero() {
  return (
    <>
      <div className="w-full bg-[#F2F0FF]">
        <div className="flex w-[95%] mx-auto max-w-[1900px]">
          <div>
            <img src="lamp-hero.png" alt="" />
          </div>
          <div className=" self-center">
            <div className="text-xl text-[#FB2E86] leading-[5rem]">
              <p>Best Furniture For Your Castle....</p>
            </div>
            <div className="max-w-[800px] josefin-sans text-6xl font-bold leading-[5rem]">
              <h1>New Furniture Collection Trends in 2020</h1>
            </div>
            <div className="text-xl text-[#8A8FB9]">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
            </div>
            <div className="items-center justify-center font-medium mt-8 text-xl text-white josefin-sans">
              <button className=" px-9 py-3  bg-[#FB2E86]">Shop Now</button>
            </div>
          </div>
          <div className=" self-center">
            <div>
              <img className="w-[629px]" src="sofa-hero.png" alt="" />
            </div>
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
    </>
  );
}

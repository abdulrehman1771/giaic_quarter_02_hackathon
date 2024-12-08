import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <div className="w-full bg-[#F6F5FF]">
        <div className="w-[90%] max-w-[1400px] mx-auto">
          <div className="h-[286px] flex flex-col justify-center">
            <h1 className="josefin-sans text-4xl font-extrabold text-[#101750]">
              My Account
            </h1>
            <div className="flex gap-1 font-medium">
              <div>
                <Link href={"/"}>Home</Link>
              </div>
              <div className="text-[#FB2E86]">
                <p>. 404 Not Found</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[100%] w-[90%] flex flex-col justify-center items-center max-w-[1400px] mx-auto">
        <div className="">
          <Image
            src="not-found.svg"
            width={700}
            height={700}
            alt="not-found"
          ></Image>
        </div>
        <div >
            <Link className="px-6 py-3 bg-[#FB2E86] text-white" href={'/'}>Back To Home</Link>
        </div>
      </div>

      <div className="w-full my-16">
        <div className="h-[100%] w-[90%] flex items-center max-w-[1400px] mx-auto">
          <div className="weWorkWith h-28 w-full mx-auto"></div>
        </div>
      </div>
    </>
  );
}

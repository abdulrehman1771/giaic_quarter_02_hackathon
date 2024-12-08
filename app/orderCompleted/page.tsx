import Link from "next/link";
import Image from "next/image";

export default function OrderCompleted() {
  return (
    <>
      <div className="w-full">
        <div className="w-[90%] max-w-[1400px] mx-auto">

          <div className="mt-11 bg-white p-8 rounded-lg text-center">
            
            <div className="flex justify-between items-center mb-4">
              
              <div className="flex items-center">
                
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Image src="clock.svg" width={100} height={100} alt="clock"></Image>
                </div>
              </div>
              <div className="flex items-center">
                
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <Image src="checkList.svg" width={100} height={100} alt="checkList"></Image>
                </div>
              </div>
            </div>
            <div className="flex justify-center mx-auto">
                <Image className="self-center shadow-md rounded-[100px]" src="checkSign.svg" width={50} height={50} alt=""></Image>
            </div>
            <h1 className="mt-5 text-2xl font-bold josefin-sans text-gray-800 mb-4">
              Your Order Is Completed!
            </h1>
            <p className="mx-auto text-gray-600 mb-6">
              Thank you for your order! Your order is being processed and will
              be completed within 3-6 hours. You will receive an email
              confirmation when your order is completed.
            </p>
            <Link href={'/'} className="bg-pink-500 text-white px-4 py-2 rounded-lg">
              Continue Shopping
            </Link>
          </div>

          <div className="w-full my-16">
            <div className="h-[100%] w-[90%] flex items-center max-w-[1400px] mx-auto">
              <div className="weWorkWith h-28 w-full mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

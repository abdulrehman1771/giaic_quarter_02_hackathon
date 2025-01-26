import Link from "next/link";
import Card from "../../../components/productCard";
import { HiArrowLongRight } from "react-icons/hi2";
import { client } from "@/sanity/lib/client";
import { IList } from "../page";

export default async function ProductDetails({
  params,
}: {
  params: { slug: number };
}) {
  const { slug } = params;
  const products: IList[] = await client.fetch(
    `*[_type == "product" && _id == "${slug}"]{_id,name, "imageUrl": image.asset->url, price, discountPercentage, stockLevel, description}`
  );

  const product = products[0];
  // const products:IList[] = [product]
  // console.log(slug)
  // console.log(product)
  try {
    if (!product) {
      return (
        <>
          <div className="w-full">
            <div className="max-w-[1400px] flex justify-center gap-5 flex-col items-center py-60 mx-auto w-[90%]">
              <h1 className="josefin-sans text-6xl text-center">Product Not Found!</h1>
              <Link href={"/shop/shop_list/"} className="py-5 px-8 my- bg-[#FB2E86] text-white josefin-sans font-semibold">Go Back</Link>
            </div>
          </div>
        </>
      );
    }
    return (
      <>
        <div className="w-full">
          <div className="w-full bg-[#F6F5FF]">
            <div className="w-[90%] max-w-[1400px] mx-auto">
              <div className="h-[286px] flex flex-col justify-center">
                <h1 className="josefin-sans text-4xl font-extrabold text-[#101750]">
                  Product Details
                </h1>
                <div className="flex gap-1 font-medium">
                  <div>
                    <Link href={"/"}>Home</Link>
                  </div>
                  <div className="text-[#FB2E86]">
                    <p>. {product.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <div className="my-40">
              <Card data={products} />
            </div>
          </div>
          <div className="my-40 py-20 bg-[#F9F8FE]">
            <div className="w-[90%] max-w-[1400px] mx-auto">
              <div className="flex gap-4 font-semibold text-lg">
                <Link
                  className="hover:underline josefin-sans text-[#151875]"
                  href={""}
                >
                  Description
                </Link>
                <Link
                  className="hover:underline josefin-sans text-[#151875]"
                  href={""}
                >
                  Additional Info
                </Link>
                <Link
                  className="hover:underline josefin-sans text-[#151875]"
                  href={""}
                >
                  Reviews
                </Link>
                <Link
                  className="hover:underline josefin-sans text-[#151875]"
                  href={""}
                >
                  Video
                </Link>
              </div>
              <div className="my-7">
                <h1 className="text-lg josefin-sans text-[#151875] font-semibold my-2">
                  Varius tempor.
                </h1>
                <p className="text-[#A9ACC6] font-normal text-sm leading-5">
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus
                  dolor ornare faucibus vel sed et eleifend habitasse amet.
                  Montes, mauris varius ac est bibendum. Scelerisque a, risus ac
                  ante. Velit consectetur neque, elit, aliquet. Non varius proin
                  sed urna, egestas consequat laoreet diam tincidunt. Magna eget
                  faucibus cras justo, tortor sed donec tempus. Imperdiet
                  consequat, quis diam arcu, nulla lobortis justo netus dis. Eu
                  in fringilla vulputate nunc nec. Dui, massa viverr .
                </p>
              </div>
              <div className="my-7">
                <h1 className="text-lg josefin-sans text-[#151875] font-semibold my-2">
                  More Details
                </h1>
                <div className="flex gap-2 my-3 items-center">
                  <HiArrowLongRight />
                  <button
                    type="button"
                    className="hover:underline text-[#A9ACC6] font-normal text-sm leading-5"
                  >
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus
                    ds diam arcu, nulla lobortis justo netus dis. Eu in
                    fringilla vulputate nunc nec. Dui, massa viverr .
                  </button>
                </div>
                <div className="flex gap-2 my-3 items-center">
                  <HiArrowLongRight />
                  <button
                    type="button"
                    className="hover:underline text-[#A9ACC6] font-normal text-sm leading-5"
                  >
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus
                    ds diam arcu, nulla lobortis justo netus dis. Eu in
                    fringilla vulputate nunc nec. Dui, massa viverr .
                  </button>
                </div>
                <div className="flex gap-2 my-3 items-center">
                  <HiArrowLongRight />
                  <button
                    type="button"
                    className="hover:underline text-[#A9ACC6] font-normal text-sm leading-5"
                  >
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus
                    ds diam arcu, nulla lobortis justo netus dis. Eu in
                    fringilla vulputate nunc nec. Dui, massa viverr .
                  </button>
                </div>
                <div className="flex gap-2 my-3 items-center">
                  <HiArrowLongRight />
                  <button
                    type="button"
                    className="hover:underline text-[#A9ACC6] font-normal text-sm leading-5"
                  >
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus
                    ds diam arcu, nulla lobortis justo netus dis. Eu in
                    fringilla vulputate nunc nec. Dui, massa viverr .
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.log(error);
    return <></>;
  }
}

import Link from "next/link";
import Image from "next/image";
import FilterBar from "@/app/components/FilterBar";
import { IList } from "../shop_list/page";
import { client } from "@/sanity/lib/client";

// interface IPhoto {
//   id: number;
//   prodName: string;
//   discountedPrice: string;
//   originalPrice: string;
//   photo: string;
// }



export default async function shopGridDefault() {

  
    const data: IList[] = await client.fetch(
      '*[_type == "product"]{_id,name, "imageUrl": image.asset->url, price, discountPercentage, stockLevel, description}'
    );
  

  // const photoDetails: IPhoto[] = [
  //   {
  //     id: 1,
  //     prodName: "Vel elit euismod",
  //     discountedPrice: "$26.00",
  //     originalPrice: "$42.00",
  //     photo: "/gridPhoto1.png",
  //   },
  //   {
  //     id: 2,
  //     prodName: "Ultricies condimentum imperdiet",
  //     discountedPrice: "$26.00",
  //     originalPrice: "$42.00",
  //     photo: "/gridPhoto2.png",
  //   },
  //   {
  //     id: 3,
  //     prodName: "Vitae suspendisse sed",
  //     discountedPrice: "$26.00",
  //     originalPrice: "$42.00",
  //     photo: "/gridPhoto3.png",
  //   },
  //   {
  //     id: 4,
  //     prodName: "Sed at fermentum",
  //     discountedPrice: "$26.00",
  //     originalPrice: "$42.00",
  //     photo: "/gridPhoto4.png",
  //   },
  //   {
  //     id: 5,
  //     prodName: "Fusce pellentesque at",
  //     discountedPrice: "$26.00",
  //     originalPrice: "$42.00",
  //     photo: "/gridPhoto5.png",
  //   },
  //   {
  //     id: 6,
  //     prodName: "Vestibulum magna laoreet",
  //     discountedPrice: "$26.00",
  //     originalPrice: "$42.00",
  //     photo: "/gridPhoto6.png",
  //   },
  //   {
  //     id: 7,
  //     prodName: "Sollicitudin amet orci",
  //     discountedPrice: "$26.00",
  //     originalPrice: "$42.00",
  //     photo: "/gridPhoto7.png",
  //   },
  //   {
  //     id: 8,
  //     prodName: "Ultrices mauris sit",
  //     discountedPrice: "$26.00",
  //     originalPrice: "$42.00",
  //     photo: "/gridPhoto8.png",
  //   },
  //   {
  //     id: 9,
  //     prodName: "Pellentesque condimentum ac",
  //     discountedPrice: "$26.00",
  //     originalPrice: "$42.00",
  //     photo: "/gridPhoto9.png",
  //   },
  //   {
  //     id: 10,
  //     prodName: "Cras scelerisque velit",
  //     discountedPrice: "$26.00",
  //     originalPrice: "$42.00",
  //     photo: "/gridPhoto10.png",
  //   },
  //   {
  //     id: 11,
  //     prodName: "Lectus vulputate faucibus",
  //     discountedPrice: "$26.00",
  //     originalPrice: "$42.00",
  //     photo: "/gridPhoto11.png",
  //   },
  //   {
  //     id: 12,
  //     prodName: "Purus risus, ut",
  //     discountedPrice: "$26.00",
  //     originalPrice: "$42.00",
  //     photo: "/gridPhoto12.png",
  //   },
  // ];



  return (
    <>
      <div className="w-full">
        <div className="w-full bg-[#F6F5FF]">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <div className="h-[286px] flex flex-col justify-center">
              <h1 className="josefin-sans text-4xl font-extrabold text-[#101750]">
                Shop Grid Default
              </h1>
              <div className="flex gap-1 font-medium">
                <div>
                  <Link href={"/"}>Home</Link>
                </div>
                <div className="text-[#FB2E86]">
                  <p>. Shop Grid Default</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[90%] max-w-[1400px] mx-auto">
          <div className="my-40">
            <FilterBar head="E-commerce Accessories & Fashion Item"/>
          </div>
          <div className="grid w-full gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.map((tmp) => {
              return (
                <>
                <Link href={`/shop/shop_grid_default/${tmp._id}`}>
                  <div key={tmp._id} className="w-72 h-96">
                    <div className="flex justify-center items-center w-full h-64 bg-[#F6F7FB] hover:bg-[#EBF4F3]">
                      <div>
                        <Image
                          className="object-cover"
                          src={tmp.imageUrl}
                          width={200}
                          height={200}
                          alt="image"
                        ></Image>
                      </div>
                    </div>
                    <div>
                      <div className="text-center mt-3 w-[98%]">
                        <h1 className="josefin-sans font-bold text-lg text-[#151875]">
                          {tmp.name}
                        </h1>
                        <div className="flex gap-2 my-1 justify-center">
                          <div className="w-2 h-2 rounded-full bg-[#DE9034]"></div>
                          <div className="w-2 h-2 rounded-full bg-[#EC42A2]"></div>
                          <div className="w-2 h-2 rounded-full bg-[#8568FF]"></div>
                        </div>
                        <div className="flex gap-3 items-center justify-center">
                          <div className="text-sm text-[#151875] font-semibold">
                            <h5>${(tmp.discountPercentage / 100) * tmp.price}</h5>
                          </div>
                          <div className="text-sm text-[#FB2E86] font-semibold line-through">
                            <h5>${tmp.price}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>

                </>
              );
            })}
          </div>
        </div>


        <div className="w-full my-16">
          <div className="h-[100%] w-[90%] flex items-center max-w-[1400px] mx-auto">
            <div className="weWorkWith h-28 w-full mx-auto"></div>
          </div>
        </div>
      </div>
    </>
  );
}

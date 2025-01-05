import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";


interface IRecentPost {
    id: number;
    title: string;
    date: string;
    image: string;
  }
  
  interface IOfferProduct {
    id: number;
    title: string;
    price_range: string;
    image: string;
  }
  

interface ISaleProduct {
    id: number;
    title: string;
    date: string;
    image: string;
  }

export default function BlogSideBar(){

    
  const recent_posts: IRecentPost[] = [
    {
      id: 1,
      title: "It is a long established fact",
      date: "Aug 09 2020",
      image: "/recent_post1.jpeg",
    },
    {
      id: 2,
      title: "It is a long established fact",
      date: "Aug 09 2020",
      image: "/recent_post2.jpeg",
    },
    {
      id: 3,
      title: "It is a long established fact",
      date: "Aug 09 2020",
      image: "/recent_post3.jpeg",
    },
    {
      id: 4,
      title: "It is a long established fact",
      date: "Aug 09 2020",
      image: "/recent_post4.jpeg",
    },
  ];

  

  const offer_products: IOfferProduct[] = [
    {
      id: 1,
      title: "Duis lectus est.",
      price_range: "$12.00 - $15.00",
      image: "/offer-product1.jpeg",
    },
    {
      id: 2,
      title: "Sed placerat.",
      price_range: "$12.00 - $15.00",
      image: "/offer-product2.jpeg",
    },
    {
      id: 3,
      title: "Netus proin.",
      price_range: "$12.00 - $15.00",
      image: "/offer-product3.jpeg",
    },
    {
      id: 4,
      title: "Platea in.",
      price_range: "$12.00 - $15.00",
      image: "/offer-product4.jpeg",
    },
  ];



    const sale_products: ISaleProduct[] = [
        {
          id: 1,
          title: "Elit ornare in enim mauris.",
          date: "Aug 09 2020",
          image: "/sale-product-image1.jpeg",
        },
        {
          id: 2,
          title: "Elit ornare in enim mauris.",
          date: "Aug 09 2020",
          image: "/sale-product-image2.jpeg",
        },
        {
          id: 3,
          title: "Elit ornare in enim mauris.",
          date: "Aug 09 2020",
          image: "/sale-product-image3.jpeg",
        },
      ];


    return(
        <>
             <div className="hidden md:flex md:gap-7 md:flex-col md:w-1/4">
              <div>
                <h3 className="josefin-sans text-[#151875] mb-2 font-semibold text-lg">
                  Search
                </h3>
                <div className="relative border-2 border-[#BDBDD8] p-2">
                  <input
                    className="w-full focus:outline-none "
                    type="text"
                    title="search"
                    placeholder="Search for Posts"
                  />
                  <button
                    className="absolute right-5 top-3"
                    type="button"
                    title="search"
                  >
                    <FiSearch className="stroke-[#BDBDD8]" />
                  </button>
                </div>
              </div>
              <div>
                <h3 className="josefin-sans text-[#151875] mb-2 font-semibold text-lg">
                  Categories
                </h3>
                <div className="grid grid-cols-2 gap-2 josefin-sans text-sm font-normal text-[#151875]">
                  <div className="p-1 bg-[#F939BF] text-white">
                    <button className="" type="button" title="hobbies">
                      Hobbies (14)
                    </button>
                  </div>
                  <div className="p-1">
                    <button className="" type="button" title="hobbies">
                      Women (21)
                    </button>
                  </div>
                  <div className="p-1">
                    <button className="" type="button" title="hobbies">
                      Women (21)
                    </button>
                  </div>
                  <div className="p-1">
                    <button className="" type="button" title="hobbies">
                      Women (21)
                    </button>
                  </div>
                  <div className="p-1">
                    <button className="" type="button" title="hobbies">
                      Women (21)
                    </button>
                  </div>
                  <div className="p-1">
                    <button className="" type="button" title="hobbies">
                      Women (21)
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="josefin-sans text-[#151875] mb-2 font-semibold text-lg">
                  Recent Posts
                </h3>
                <div className="flex flex-col gap-3">
                  {recent_posts.map((tmp, id) => {
                    return (
                      <div key={id} className="w-full flex items-center gap-2">
                        <div className="relative w-2/5 h-16">
                          <Image
                            src={tmp.image}
                            // objectFit="cover"
                            className="object-cover"
                            layout="fill"
                            // width={200}
                            // height={200}
                            alt={tmp.title}
                          ></Image>
                        </div>
                        <div>
                          <h5 className="josefin-sans text-sm font-semibold text-[#151875]">
                            {tmp.title}
                          </h5>
                          <p className="text-xs text-[#8A8FB9]">{tmp.date}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <h3 className="josefin-sans text-[#151875] mb-2 font-semibold text-lg">
                  Sale Product
                </h3>
                <div className="flex flex-col gap-3">
                  {sale_products.map((tmp, id) => {
                    return (
                      <div key={id} className="w-full flex items-center gap-2">
                        <div className="relative w-2/5 h-16">
                          <Image
                            src={tmp.image}
                            objectFit="cover"
                            className="object-center"
                            layout="fill"
                            alt={tmp.title}
                          ></Image>
                        </div>
                        <div>
                          <h5 className="josefin-sans text-sm font-semibold text-[#151875]">
                            {tmp.title}
                          </h5>
                          <p className="text-xs text-[#8A8FB9]">{tmp.date}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <h3 className="josefin-sans text-[#151875] mb-2 font-semibold text-lg">
                  Offer Product
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {offer_products.map((tmp, id) => {
                    return (
                      <div
                        key={id}
                        className="w-full flex flex-col text-center items-center gap-2"
                      >
                        <div className="relative w-full h-16">
                          <Image
                            src={tmp.image}
                            objectFit="cover"
                            className="object-center"
                            layout="fill"
                            alt={tmp.title}
                          ></Image>
                        </div>
                        <div>
                          <h5 className="josefin-sans text-sm font-semibold text-[#151875]">
                            {tmp.title}
                          </h5>
                          <p className="text-xs text-[#8A8FB9]">
                            {tmp.price_range}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <h3 className="josefin-sans text-[#151875] mb-2 font-semibold text-lg">
                  Follow
                </h3>
                <div className="flex gap-4">
                  <FaFacebook size={30} className="fill-[#5625DF]" />
                  <RiInstagramFill size={30} className="fill-[#FF27B7]" />
                  <FaTwitter size={30} className="fill-[#37DAF3]" />
                </div>
              </div>
              <div>
                <h3 className="josefin-sans text-[#151875] mb-2 font-semibold text-lg">
                  Tags
                </h3>
                <div className="grid grid-cols-3 gap-4">
                <div className="josefin-sans hover:text-[#FB2E86] focus:text-[#FB2E86] text-[#151875]">
                    <button className="underline font-medium" type="button">
                        General
                    </button>
                </div>
                <div className="josefin-sans hover:text-[#FB2E86] focus:text-[#FB2E86] text-[#151875]">
                    <button className="underline font-medium" type="button">
                    Atsanil
                    </button>
                </div>
                <div className="josefin-sans hover:text-[#FB2E86] focus:text-[#FB2E86] text-[#151875]">
                    <button className="underline font-medium" type="button">
                    Insas.
                    </button>
                </div>
                <div className="josefin-sans hover:text-[#FB2E86] focus:text-[#FB2E86] text-[#151875]">
                    <button className="underline font-medium" type="button">
                    Bibsaas
                    </button>
                </div>
                <div className="josefin-sans hover:text-[#FB2E86] focus:text-[#FB2E86] text-[#151875]">
                    <button className="underline font-medium" type="button">
                    Nulla.
                    </button>
                </div>
                </div>
              </div>
            </div>
        </>
    )
}
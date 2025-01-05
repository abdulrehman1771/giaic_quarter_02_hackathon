
import path from "path";
import fs from "fs";
import Image from "next/image";
import { FaPenNib } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";

interface IBlog {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
}

interface IPreviewVideo {
  id: number;
  image: string;
  alt: string;
}

interface IBlogProduct {
  id: number;
  image: string;
  title: string;
  price: number;
  oldPrice: number;
}

import BlogSideBar from "@/app/components/BlogSideBar";

export default function BlogPage({ params }: { params: { slug: number } }) {
  let { slug } = params;
  console.log(slug);

  const previewVideo: IPreviewVideo[] = [
    {
      id: 1,
      image: "/blogPreviewVideoImage1.jpeg",
      alt: "blogPreviewVideoImage1.jpeg",
    },
    {
      id: 2,
      image: "/blogPreviewVideoImage2.jpeg",
      alt: "blogPreviewVideoImage2.jpeg",
    },
  ];

  const blogProduct: IBlogProduct[] = [
    {
      id: 1,
      image: "/BlogPostImage-01.jpeg",
      title: "Quam sed",
      price: 32.0,
      oldPrice: 56.0,
    },
    {
      id: 2,
      image: "/BlogPostImage-02.jpeg",
      title: "Tristique sed",
      price: 32.0,
      oldPrice: 56.0,
    },
    {
      id: 3,
      image: "/BlogPostImage-03.jpeg",
      title: "A etiam",
      price: 32.0,
      oldPrice: 56.0,
    },
    {
      id: 4,
      image: "/BlogPostImage-04.jpeg",
      title: "A etiam",
      price: 32.0,
      oldPrice: 56.0,
    },
  ];

  const filePath = path.join(process.cwd(), "app/blog/blogList.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const blogs: IBlog[] = JSON.parse(jsonData);
  return (
    <>
      <div className="w-full">
        <div className="w-full bg-[#F6F5FF]">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <div className="h-[286px] flex flex-col justify-center">
              <h1 className="josefin-sans text-4xl font-extrabold text-[#101750]">
                Blog Details
              </h1>
              <div className="flex gap-1 font-medium">
                <div>
                  <Link href={"/"}>Home</Link>
                </div>
                <div className="text-[#FB2E86]">
                  <p>. {blogs[slug].title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto w-[90%]">
          <div className=" py-20 md:flex md:gap-10">
            <div className="w-full">
              <div className="w-full">
                <div className="w-full">
                  <Image
                    className="w-full object-cover rounded-xl"
                    src={blogs[slug].image}
                    // objectFit="cover"
                    width={200}
                    height={100}
                    // layout="fill"
                    sizes="100%"
                    alt={blogs[slug].title}
                  ></Image>
                </div>
                <div className="h-11 flex gap-5 my-5">
                  <div className="flex gap-2 items-center">
                    <FaPenNib className="fill-[#FB2E86] scale-75" />
                    <div className="px-6 py-1 bg-[#FFE7F9] rounded-md">
                      <p className="josefin-sans text-[#151875] font-medium text-sm">
                        {blogs[slug].author}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <LuCalendarDays className="stroke-[#FFA454] scale-75" />
                    <div className="px-6 py-1 bg-[#FFECE2] rounded-sm">
                      <p className="josefin-sans text-[#151875] font-medium text-sm">
                        {blogs[slug].date}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-10">
                  <h1 className="josefin-sans font-bold text-[#151875] text-3xl mb-4">
                    {blogs[slug].title}
                  </h1>
                  <p className="text-[#8A8FB9] mb-4">
                    {blogs[slug].description}
                  </p>

                  <p className="text-[#8A8FB9] my-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Velit dapibus est, nunc, montes, lacus consequat integer
                    viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea
                    donec vitae ante posuere malesuada.Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Velit dapibus est, nunc,
                    montes, lacus consequat integer viverra. Sit morbi etiam
                    quam rhoncus. Velit in arcu platea donec vitae ante posuere
                    malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Velit dapibus est, nunc,{" "}
                  </p>

                  <div className=" border-[#FC45A0] border-l-2 w-full bg-[#FAFAFB] p-5 my-10 text-[#8A8FB9]">
                    <p className="leading-10">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Commodo dictum sapien, amet, consequat. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Commodo dictum
                      sapien, amet, consequat toamk risusu”
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    {previewVideo.map((tmp, id) => {
                      return (
                        <>
                          <div
                            className="relative w-full cursor-pointer"
                            key={id}
                          >
                            <div
                              key={id}
                              className="absolute z-10 w-full h-full  hover:bg-black hover:bg-opacity-50"
                            >
                              <div className="relative opacity-0 hover:opacity-100 w-full h-full hover:flex hover:justify-center hover:items-center">
                                <span className="w-20 h-20 rounded-full bg-white"></span>
                                <FaPlay className="absolute z-20 fill-[#FC209D] mx-auto top-[48%]" />
                              </div>
                            </div>
                            <Image
                              key={id}
                              className="w-full h-96 object-cover"
                              src={tmp.image}
                              width={800}
                              height={200}
                              alt={tmp.alt}
                            ></Image>
                          </div>
                        </>
                      );
                    })}
                  </div>

                  <div className="my-20 text-[#8A8FB9]">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Velit dapibus est, nunc, montes, lacus consequat integer
                      viverra. Sit morbi etiam quam rhoncus. Velit in arcu
                      platea donec vitae ante posuere malesuada.Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Velit dapibus
                      est, nunc, montes, lacus consequat integer viverra. Sit
                      morbi etiam quam rhoncus. Velit in arcu platea donec vitae
                      ante posuere malesuada.Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Velit dapibus est, nunc,{" "}
                    </p>
                  </div>
                  <div className="w-full grid sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {blogProduct.map((tmp, id) => {
                      return (
                        <div key={id}>
                          <Image
                            src={tmp.image}
                            width={10}
                            height={10}
                            alt={tmp.title}
                            sizes="100%"
                            className="object-cover h-96 w-full"
                          ></Image>
                          <div className="text-center py-3">
                            <h1 className="josefin-sans font-semibold text-xl my-2">
                              {tmp.title}
                            </h1>
                            <div className="flex justify-center my-2 josefin-sans gap-2 font-normal">
                              <h4 className="">${tmp.price}.00</h4>
                              <h4 className="line-through text-[#FF38B0]">
                                ${tmp.oldPrice}.00
                              </h4>
                            </div>
                            <div className="flex gap-3 justify-center">
                              <FaStar className="fill-[#FFD659]" />
                              <FaStar className="fill-[#FFD659]" />
                              <FaStar className="fill-[#FFD659]" />
                              <FaStar className="fill-[#FFD659]" />
                              <FaStar className="fill-[#B2B2B2]" />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div>
                    <p className="my-10 text-[#8A8FB9]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Velit dapibus est, nunc, montes, lacus consequat integer
                      viverra. Sit morbi etiam quam rhoncus. Velit in arcu
                      platea donec vitae ante posuere malesuada.Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Velit dapibus
                      est, nunc, montes, lacus consequat integer viverra. Sit
                      morbi etiam quam rhoncus. Velit in arcu platea donec vitae
                      ante posuere malesuada.Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Velit dapibus est, nunc,{" "}
                    </p>

                    <p className="my-10 text-[#8A8FB9]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Velit dapibus est, nunc, montes, lacus consequat integer
                      viverra. Sit morbi etiam quam rhoncus. Velit in arcu
                      platea donec vitae ante posuere malesuada.Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Velit dapibus
                      est, nunc, montes, lacus consequat integer viverra. Sit
                      morbi etiam quam rhoncus. Velit in arcu platea donec vitae
                      ante posuere malesuada.Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Velit dapibus est, nunc,{" "}
                    </p>
                  </div>

                  <div className="flex justify-center gap-4">
                    <FaFacebook size={30} className="fill-[#5625DF]" />
                    <RiInstagramFill size={30} className="fill-[#FF27B7]" />
                    <FaTwitter size={30} className="fill-[#37DAF3]" />
                  </div>

                  <div className="flex justify-between my-10 p-3 w-full bg-[#F7F8FB]">
                    <div>
                      {/* <Link href={`/blog/${slug++}`}> */}
                      <Link href={``}>
                        <HiArrowLongLeft className="fill-[#8A8FB9] inline-block" />
                        <p className="inline-block text-[#8A8FB9]">
                            Previous Post
                        </p>
                      </Link>
                    </div>
                    <div>
                      {/* <Link href={`/blog/${slug--}`}> */}
                      <Link href={``}>
                        <p className="inline-block text-[#8A8FB9]">
                            Next Post
                        </p>
                        <HiArrowLongRight className="fill-[#8A8FB9] inline-block" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <BlogSideBar />
          </div>
        </div>
      </div>
    </>
  );
}

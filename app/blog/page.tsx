import Link from "next/link";
import Image from "next/image";
import { FaPenNib } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import BlogSideBar from "../components/BlogSideBar";
import path from "path";
import fs from "fs";

interface IBlog {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
}


export default async function Blog() {
  const filePath = path.join(process.cwd(), 'app/blog/blogList.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const blogs: IBlog[] = JSON.parse(jsonData);
  

  // const blog: IBlog[] = [
  //   {
  //     id: 1,
  //     title: "Mauris at orci non vulputate diam tincidunt nec.",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
  //     image: "/blog-image1.jpeg",
  //     date: "Aug 09 2020",
  //     author: "Surf Auxion",
  //   },
  //   {
  //     id: 2,
  //     title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
  //     image: "/blog-image2.jpeg",
  //     date: "Aug 09 2020",
  //     author: "Surf Auxion",
  //   },
  //   {
  //     id: 3,
  //     title: "Sit nam congue feugiat nisl, mauris amet nisi.",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
  //     image: "/blog-image3.jpeg",
  //     date: "Aug 09 2020",
  //     author: "Surf Auxion",
  //   },
  // ];

  return (
    <>
      <div className="w-full">
        <div className="w-full bg-[#F6F5FF]">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <div className="h-[286px] flex flex-col justify-center">
              <h1 className="josefin-sans text-4xl font-extrabold text-[#101750]">
                Blog Page
              </h1>
              <div className="flex gap-1 font-medium">
                <div>
                  <Link href={"/"}>Home</Link>
                </div>
                <div className="text-[#FB2E86]">
                  <p>. Blog Page</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-[90%] max-w-[1400px] mx-auto py-24">
          <div className="md:flex md:gap-10">
            <div className="relative w-full md:w-3/4">
              {blogs.map((tmp, id:number) => {
                return (
                  <div className="mb-5 w-full flex flex-col" key={id}>
                    <div className="w-full">
                      <Image
                        className="w-full object-cover rounded-xl"
                        src={tmp.image}
                        // objectFit="cover"
                        width={200}
                        height={100}
                        // layout="fill"
                        sizes="100%"
                        alt={tmp.title}
                      ></Image>
                    </div>
                    <div className="h-11 flex gap-5 my-5">
                      <div className="flex gap-2 items-center">
                        <FaPenNib className="fill-[#FB2E86] scale-75" />
                        <div className="px-6 py-1 bg-[#FFE7F9] rounded-md">
                          <p className="josefin-sans text-[#151875] font-medium text-sm">
                            {tmp.author}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <LuCalendarDays className="stroke-[#FFA454] scale-75" />
                        <div className="px-6 py-1 bg-[#FFECE2] rounded-sm">
                          <p className="josefin-sans text-[#151875] font-medium text-sm">
                            {tmp.date}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-10">
                      <h1 className="josefin-sans font-bold text-[#151875] text-3xl mb-4">
                        {tmp.title}
                      </h1>
                      <p className="text-[#8A8FB9] mb-4">{tmp.description}</p>
                      <button
                        className="text-[#151875] font-medium"
                        type="button"
                        title="read more"
                        
                      >
                        <Link href={`/blog/${id}`}>Read More <span className="text-[#FB2E86]">●</span></Link>
                      </button>
                    </div>
                  </div>
                );
              })}

              <div className="flex gap-5 justify-center">
                <button
                  className="py-1 px-3 focus:bg-[#FB2CA8] border-2 border-[#E0D3F5] text-[#E0D3F5] hover:bg-[#FB2CA8] hover:text-white"
                  type="button"
                >
                  1
                </button>
                <button
                  className="py-1 px-3 focus:bg-[#FB2CA8] border-2 border-[#E0D3F5] text-[#E0D3F5] hover:bg-[#FB2CA8] hover:text-white"
                  type="button"
                >
                  2
                </button>
                <button
                  className="py-1 px-3 focus:bg-[#FB2CA8] border-2 border-[#E0D3F5] text-[#E0D3F5] hover:bg-[#FB2CA8] hover:text-white"
                  type="button"
                >
                  3
                </button>
                <button
                  className="py-1 px-3 focus:bg-[#FB2CA8] border-2 border-[#E0D3F5] text-[#E0D3F5] hover:bg-[#FB2CA8] hover:text-white"
                  type="button"
                >
                  4
                </button>
              </div>
            </div>
           <BlogSideBar/>
          </div>

          
          <div className="weWorkWith h-28 w-full mx-auto my-16"></div>
        </div>
      </div>
    </>
  );
}

import React from "react";

const LatestBlog = () => {
  const blogs = [
    {
      id: 1,
      author: "SaberAli",
      date: "21 August, 2020",
      title: "Top essential Trends in 2021",
      content:
        "More off this less hello samlande lied much over tightly circa horse taped mightly",
      image: "/top-1.jpeg", // Replace with actual paths
      link: "#",
    },
    {
      id: 2,
      author: "Surfauxion",
      date: "21 August, 2020",
      title: "Top essential trends in 2021",
      content:
        "More off this less hello samlande lied much over tightly circa horse taped mightly",
      image: "/top-2.jpeg",
      link: "#",
    },
    {
      id: 3,
      author: "SaberAli",
      date: "21 August, 2020",
      title: "Top essential Trends in 2021",
      content:
        "More off this less hello samlande lied much over tightly circa horse taped mightly",
      image: "/top-3.jpeg",
      link: "#",
    },
  ];

  return (
    <div className="w-full overflow-hidden">
    <div className="flex w-[95%] mx-auto max-w-[1400px]">

    <div className="mx-auto py-16 bg-white">
      <h2 className="text-center text-4xl font-extrabold josefin-sans text-[#151875] mb-8">
        Latest Blog
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-16">
        {blogs.map((blog, index) => (
          <div
            key={blog.id}
            className={`relative bg-white shadow-md rounded-lg overflow-hidden ${
              index === 0 ? "" : ""
            }`}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <span className="mr-2">✍️ {blog.author}</span>
                <span>📅 {blog.date}</span>
              </div>
              <h3 className="text-xl font-semibold text-[#151875] mb-4">
                {blog.title}
              </h3>
              <p className="text-gray-600 mb-4">{blog.content}</p>
              <a
                href={blog.link}
                className="text-pink-500 font-bold hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
    </div>

  );
};

export default LatestBlog;

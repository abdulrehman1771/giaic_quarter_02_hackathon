import Image from "next/image";

const ShopexOffer = () => {
  const offers = [
    {
      id: 1,
      icon: "/free-delivery.svg",
      title: "Free Delivery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      id: 2,
      icon: "/cashback-1.svg",
      title: "100% Cash Back",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      id: 3,
      icon: "/premium-quality.svg",
      title: "Quality Product",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      id: 4,
      icon: "/24-hour-support.svg",
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
  ];

  return (
    <div className="w-full">
      <div className="py-16 w-[95%] mx-auto max-w-[1900px]">
        <section className="py-12 my-24">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold text-indigo-900">
              Our Features
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  className="mx-auto text-4xl mb-4 pt-10"
                  src={offer.icon}
                  alt={offer.icon}
                  // layout="fill"
                  width={60}
                  height={60}
                  // objectFit="contain"
                ></Image>

                <h3 className="josefin-sans text-xl font-semibold text-[#151875] mb-2">
                  {offer.title}
                </h3>
                <p className="text-[#1A0B5B4D] font-medium">
                  {offer.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ShopexOffer;

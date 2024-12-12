import Link from "next/link";

export default function About() {
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
    <>
      <div className="w-full">
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
                  <p>. About Us</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[90%] max-w-[1400px] mx-auto">
          <div className="bg-white overflow-hidden flex items-center mt-48">
            <div className="w-1/2">
              <img
                src="/about-img.jpeg"
                alt="Business Meeting"
                className="object-cover h-96 w-full rounded-lg"
              />
            </div>
            <div className="w-1/2 p-8">
              <h1 className="text-4xl font-extrabold text-[#101750] josefin-sans mb-4">
                Know About Our Ecommerce Business, History
              </h1>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
                tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
                vitae lobortis quis bibendum quam.
              </p>
              <button
                type="button"
                className="bg-[#FB2E86] text-white px-4 py-2 rounded-sm"
              >
                Contact us
              </button>
            </div>
          </div>

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
                  <img
                    className="mx-auto text-4xl mb-4"
                    src={offer.icon}
                    alt={offer.icon}
                  />

                  <h3 className="text-xl font-semibold text-indigo-900 mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600">{offer.description}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="max-w-md w-full space-y-8 mx-auto my-24">
              
            <div className="text-center">
                
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Our Client Say!
              </h2>  
            </div>  
            <div className="flex justify-center space-x-4 mt-4">
                
              <img
                className="h-12 w-12 rounded-full"
                src="textimonial-1.svg"
                alt="Client 1"
              />  
              <img
                className="h-12 w-12 rounded-full"
                src="textimonial-2.svg"
                alt="Client 2"
              />  
              <img
                className="h-12 w-12 rounded-full"
                src="textimonial-3.svg"
                alt="Client 3"
              />  
            </div>  
            <div className="text-center mt-4">
                
              <h3 className="text-xl font-semibold text-gray-900">
                Selina Gomez
              </h3>  
              <p className="text-sm text-gray-500">Ceo At Webecy Digital</p>  
            </div>  
            <div className="mt-4 text-center">
                
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.  
              </p>  
            </div>  
          </div>
        </div>
      </div>
    </>
  );
}

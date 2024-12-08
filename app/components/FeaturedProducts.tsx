const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      image: "/image-1168.svg",
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
    },
    {
      id: 2,
      image: "/image-1.svg",
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      isFeatured: true,
    },
    {
      id: 3,
      image: "/image-1169.svg",
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
    },
    {
      id: 4,
      image: "/image-3.svg",
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
    },
  ];

  return (
    <>
    <div className="w-full">
      <div className="py-16 w-[95%] mx-auto max-w-[1900px]">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-[#1A0B5B]">
          Featured Products
        </h2>
        <div className="flex justify-center items-center gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className={`relative w-64 border rounded-lg shadow-md ${
                product.isFeatured ? "border-pink-500" : "border-gray-200"
              }`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              {product.isFeatured && (
                <div className="absolute top-3 left-3 flex space-x-2">
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">
                    🛒
                  </button>
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">
                    🔍
                  </button>
                </div>
              )}
              <div
                className={`p-4 ${
                  product.isFeatured ? "bg-indigo-500 text-white" : "bg-white"
                }`}
              >
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-sm">
                  Code - <span className="font-medium">{product.code}</span>
                </p>
                <p className="text-xl font-bold mt-2">{product.price}</p>
                {product.isFeatured && (
                  <button className="mt-4 bg-green-500 text-white py-1 px-3 rounded">
                    View Details
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex item justify-center mt-6">
          <div className="w-6 h-2 bg-pink-500 rounded-full mx-1"></div>
          <div className="w-6 h-2 bg-gray-300 rounded-full mx-1"></div>
          <div className="w-6 h-2 bg-gray-300 rounded-full mx-1"></div>
          <div className="w-6 h-2 bg-gray-300 rounded-full mx-1"></div>
        </div>
      </div>
    </div>

    </>
  );
};

export default FeaturedProducts;

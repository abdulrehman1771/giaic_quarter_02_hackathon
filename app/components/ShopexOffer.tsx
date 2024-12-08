const ShopexOffer = () => {
    const offers = [
      {
        id: 1,
        icon: "/free-delivery.svg",
        title: '24/7 Support',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
      },
      {
        id: 2,
        icon: "/cashback-1.svg",
        title: '24/7 Support',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
      },
      {
        id: 3,
        icon: "/premium-quality.svg",
        title: '24/7 Support',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
      },
      {
        id: 4,
        icon: "/24-hour-support.svg",
        title: '24/7 Support',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
      },
    ];
  
    return (
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-indigo-900">
            What Shopex Offer!
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <img className="mx-auto text-4xl mb-4"  src={offer.icon} alt={offer.icon} />
              
              <h3 className="text-xl font-semibold text-indigo-900 mb-2">
                {offer.title}
              </h3>
              <p className="text-gray-600">{offer.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ShopexOffer;
  
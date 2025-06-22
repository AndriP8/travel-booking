import PropertyCard from "./PropertyCard";

export default function PropertyList() {
  // Mock data for properties
  const properties = [
    {
      img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1560&q=80",
      location: "Private room in center of London",
      title: "Stay at this spacious Edwardian House",
      description:
        "1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 4.73,
      price: "$30 / night",
      total: "$117 total",
    },
    {
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      location: "Private room in center of London",
      title: "Independent luxury studio apartment",
      description:
        "2 guest · 3 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen",
      star: 4.3,
      price: "$40 / night",
      total: "$157 total",
    },
    {
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      location: "Private room in center of London",
      title: "London Studio Apartments",
      description:
        "4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine",
      star: 3.8,
      price: "$35 / night",
      total: "$207 total",
    },
    {
      img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      location: "Private room in center of London",
      title: "30 mins to Oxford Street, Excel London",
      description:
        "1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 4.1,
      price: "$55 / night",
      total: "$320 total",
    },
    {
      img: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1856&q=80",
      location: "Private room in center of London",
      title: "Spacious Peaceful Modern Bedroom",
      description:
        "3 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Free parking · Dry Cleaning",
      star: 5.0,
      price: "$60 / night",
      total: "$450 total",
    },
    {
      img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      location: "Private room in center of London",
      title: "The Blue Room In London",
      description:
        "2 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Washing Machine",
      star: 4.23,
      price: "$65 / night",
      total: "$480 total",
    },
    {
      img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      location: "Private room in center of London",
      title: "Luxurious Studio Apartment",
      description:
        "3 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 3.85,
      price: "$90 / night",
      total: "$650 total",
    },
    {
      img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      location: "Private room in center of London",
      title: "Modern Apartment in Central London",
      description:
        "4 guest · 2 bedroom · 2 bed · 2 bathrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 4.5,
      price: "$120 / night",
      total: "$740 total",
    },
  ];

  return (
    <section className="border-t">
      <div className="pt-6 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl text-black font-semibold pb-5">
          Places to stay
        </h2>

        <div className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-scroll gap-6">
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              img={property.img}
              location={property.location}
              title={property.title}
              description={property.description}
              star={property.star}
              price={property.price}
              total={property.total}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

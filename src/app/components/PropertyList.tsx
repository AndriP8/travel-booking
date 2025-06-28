import { AccommodationResponse } from "@/types/accommodations";
import PropertyCard from "./PropertyCard";

interface PropertyListProps {
  properties: AccommodationResponse["data"];
}

export default function PropertyList({ properties }: PropertyListProps) {
  return (
    <section className="border-t">
      <div className="pt-6 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl text-black font-semibold pb-5">
          Places to stay
        </h2>

        <div className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-scroll gap-6">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              images={property.images}
              location={property.location}
              title={property.title}
              description={property.description || ""}
              rating={property.rating}
              price={property.price}
              country={property.country}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

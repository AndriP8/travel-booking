import Image from "next/image";

interface PropertyCardProps {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
}

export default function PropertyCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}: PropertyCardProps) {
  return (
    <div className="cursor-pointer transition duration-200 ease-out text-black">
      <div className="relative h-52 w-full md:h-64 flex-shrink-0">
        <Image src={img} alt={title} fill className="object-cover rounded-xl" />
      </div>

      <div className="flex flex-col flex-grow mt-2 p-2">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500 truncate">{location}</p>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4 text-[#FF385C]"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm pl-1">{star}</p>
          </div>
        </div>

        <h4 className="text-base font-semibold mt-1 truncate">{title}</h4>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="text-lg font-semibold">{price}</p>
          <p className="text-right text-sm text-gray-500">{total}</p>
        </div>
      </div>
    </div>
  );
}

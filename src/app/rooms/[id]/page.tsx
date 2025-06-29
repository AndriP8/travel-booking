import Header from "@/app/components/Header";
import { COUNTRY_CURRENCY_MAP } from "@/app/utils/currency";
import { DetailAccommodationResponse } from "@/types/accommodations";
import Image from "next/image";

export default async function RoomPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await fetch(
    `http://localhost:3001/api/accommodations/${id}`,
  );
  const { data: room } = (await response.json()) as DetailAccommodationResponse;

  const defaultStayedDays = 2;
  const totalRoomPrice = room.price * defaultStayedDays;
  const currency = COUNTRY_CURRENCY_MAP.get(room.country) || "$";
  const defaultCleaningFee = 50;
  const defaultServiceFee = 80;
  const totalPrice = totalRoomPrice + defaultCleaningFee + defaultServiceFee;

  const checkinDate = new Date();
  const checkoutDate = new Date(checkinDate);
  checkoutDate.setDate(checkoutDate.getDate() + defaultStayedDays);

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="md:col-span-2 md:row-span-2">
            <Image
              src={room.images}
              alt={room.title}
              layout="responsive"
              width={500}
              height={300}
              className="rounded-xl"
            />
          </div>
          <div className="md:col-span-1">
            <Image
              src={room.images}
              alt={room.title}
              layout="responsive"
              width={500}
              height={300}
              className="rounded-xl"
            />
          </div>
          <div className="md:col-span-1">
            <Image
              src={room.images}
              alt={room.title}
              layout="responsive"
              width={500}
              height={300}
              className="rounded-xl"
            />
          </div>
          <div className="md:col-span-1">
            <Image
              src={room.images}
              alt={room.title}
              layout="responsive"
              width={500}
              height={300}
              className="rounded-xl"
            />
          </div>
          <div className="md:col-span-1">
            <Image
              src={room.images}
              alt={room.title}
              layout="responsive"
              width={500}
              height={300}
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column - Details */}
          <div className="md:w-2/3">
            <h1 className="text-2xl font-bold mb-4">{room.title}</h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-amber-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="ml-1">{room.rating}</span>
              </div>
              <div>·</div>
              <div>Superhost</div>
              <div>·</div>
              <div>
                {room.location}, {room.country}
              </div>
            </div>

            <div className="border-b border-gray-200 pb-8 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={room.hosts?.picture_url || "/default-avatar.png"}
                  alt={room.hosts?.name || "Host"}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div>
                  <div className="font-medium">
                    Hosted by {room.hosts?.name}
                  </div>
                  <div className="text-gray-500">
                    Joined in{" "}
                    {new Date(room.hosts?.created_at || "").getFullYear()}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{room.hosts?.about}</p>
            </div>

            {/* Amenities */}
            <div className="border-b border-gray-200 pb-8 mb-8">
              <h2 className="text-xl font-bold mb-4">What this place offers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {room.amenities?.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="md:w-1/3">
            <div className="sticky top-24 border border-gray-200 rounded-xl p-6 shadow-md">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-xl font-bold">
                    {currency} {totalRoomPrice}{" "}
                  </span>
                  <span className="text-gray-500">
                    {defaultStayedDays} night
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-1">{room.rating}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4 border border-gray-300 rounded-lg p-2">
                <div className="border-r border-gray-300 p-2">
                  <div className="text-xs font-medium">CHECK-IN</div>
                  <div>{checkinDate.toLocaleDateString()}</div>
                </div>
                <div className="p-2">
                  <div className="text-xs font-medium">CHECKOUT</div>
                  <div>{checkoutDate.toLocaleDateString()}</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-xs font-medium mb-1">GUESTS</div>
                <div>1 guest</div>
              </div>

              <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 transition">
                Reserve
              </button>

              <div className="text-center text-sm text-gray-500 mt-4">
                You won't be charged yet
              </div>

              <div className="flex justify-between mt-4 text-sm">
                <div>
                  {currency} {room.price} x {defaultStayedDays} nights
                </div>
                <div>
                  {currency} {totalRoomPrice}
                </div>
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <div>Cleaning fee</div>
                <div>
                  {currency} {defaultCleaningFee}
                </div>
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <div>Service fee</div>
                <div>
                  {currency} {defaultServiceFee}
                </div>
              </div>
              <div className="flex justify-between mt-4 pt-4 border-t border-gray-200 font-medium">
                <div>Total</div>
                <div>
                  {currency} {totalPrice}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import PaymentMethod from "@/app/components/PaymentMethod";
import { COUNTRY_CURRENCY_MAP } from "@/app/utils/currency";
import { DetailAccommodationResponse } from "@/types/accommodations";

export default async function StayPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(
    `http://localhost:3001/api/accommodations/${id}`,
  );
  const { data: stay } = (await response.json()) as DetailAccommodationResponse;

  const defaultStayedDays = 2;
  const today = new Date();
  const checkInDate = new Date(today);
  const checkOutDate = new Date(today);
  checkInDate.setDate(today.getDate() + 1);
  checkOutDate.setDate(checkInDate.getDate() + defaultStayedDays - 1);

  const totalPrice = stay.price * defaultStayedDays;
  const currency = COUNTRY_CURRENCY_MAP.get(stay.country) || "$";
  return (
    <div className="mx-auto px-6 py-8 w-2/3 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Payment Form */}
        <PaymentMethod />

        {/* Right Column - Booking Summary */}
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-6">
            {/* Property Info */}
            <div className="flex space-x-4 mb-6">
              <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={stay.images}
                  alt="Property"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {stay.title}
                </h3>
                <div className="flex items-center space-x-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 fill-current text-gray-900"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2`.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                  </svg>

                  <span className="font-medium">{stay.rating}</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-600">Superhost</span>
                </div>
              </div>
            </div>

            {/* Non-refundable Notice */}
            <div className="mb-6 text-sm text-gray-600">
              This reservation is non-refundable.{" "}
              <button className="underline text-gray-900">Full policy</button>
            </div>

            {/* Trip Details */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">Trip details</h4>
                <button className="text-sm underline">Change</button>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <div>
                  {checkInDate.toLocaleDateString()} –{" "}
                  {checkOutDate.toLocaleDateString()}
                </div>
                <div>1 adult</div>
              </div>
            </div>

            {/* Price Details */}
            <div className="border-t pt-4 mb-6">
              <h4 className="font-semibold mb-4">Price details</h4>
              <div className="flex justify-between mb-2 text-sm">
                <span>
                  {currency}
                  {stay.price} x {defaultStayedDays} nights
                </span>
                <span>
                  {currency}
                  {totalPrice}
                </span>
              </div>
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between font-semibold">
                  <span>
                    Total {currency}
                    {totalPrice}
                  </span>
                  <span>
                    {currency}
                    {totalPrice}
                  </span>
                </div>
              </div>
              <button className="text-sm underline mt-2">
                Price breakdown
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

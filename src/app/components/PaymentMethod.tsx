"use client";
import { useState } from "react";

export default function PaymentMethod() {
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiration: "",
    cvv: "",
    streetAddress: "",
    aptSuite: "",
    city: "",
    state: "",
    zipCode: "",
    country: "Indonesia",
  });

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  return (
    <div className="space-y-8">
      {/* Payment Method Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-6">1. Add a payment method</h2>

        <div className="mb-6">
          <label className="flex items-center p-4 border-2 border-gray-900 rounded-lg cursor-pointer mb-4">
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
              className="w-5 h-5 mr-3"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>

            <span className="flex-1 font-medium">Credit or debit card</span>
            <div className="flex items-center space-x-1">
              <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                VISA
              </div>
              <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                MC
              </div>
            </div>
            <input
              type="radio"
              name="payment"
              value="card"
              checked={selectedPayment === "card"}
              onChange={(e) => setSelectedPayment(e.target.value)}
              className="ml-3 w-4 h-4"
            />
          </label>

          {/* Card Details Form */}
          <div className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Card number"
                value={formData.cardNumber}
                onChange={(e) =>
                  handleInputChange("cardNumber", e.target.value)
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-gray-900 focus:outline-none"
                autoComplete="cc-number"
                autoCorrect="off"
                spellCheck="false"
                inputMode="numeric"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Expiration"
                value={formData.expiration}
                onChange={(e) =>
                  handleInputChange("expiration", e.target.value)
                }
                className="p-3 border border-gray-300 rounded-lg focus:border-gray-900 focus:outline-none"
                autoComplete="cc-exp"
                autoCorrect="off"
                spellCheck="false"
                inputMode="numeric"
              />
              <input
                type="text"
                placeholder="CVV"
                value={formData.cvv}
                onChange={(e) => handleInputChange("cvv", e.target.value)}
                className="p-3 border border-gray-300 rounded-lg focus:border-gray-900 focus:outline-none"
                autoComplete="cc-csc"
                autoCorrect="off"
                spellCheck="false"
                inputMode="numeric"
              />
            </div>
          </div>
        </div>

        {/* Billing Address */}
        <div className="mb-6">
          <h3 className="font-semibold mb-4">Billing address</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Street address"
              value={formData.streetAddress}
              onChange={(e) =>
                handleInputChange("streetAddress", e.target.value)
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-gray-900 focus:outline-none"
              autoComplete="address-line1"
              autoCorrect="off"
              spellCheck="false"
            />
            <input
              type="text"
              placeholder="Apt or suite number"
              value={formData.aptSuite}
              onChange={(e) => handleInputChange("aptSuite", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-gray-900 focus:outline-none"
              autoComplete="address-line2"
              autoCorrect="off"
              spellCheck="false"
            />
            <input
              type="text"
              placeholder="City"
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-gray-900 focus:outline-none"
              autoComplete="address-level3"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="State"
                value={formData.state}
                onChange={(e) => handleInputChange("state", e.target.value)}
                className="p-3 border border-gray-300 rounded-lg focus:border-gray-900 focus:outline-none"
                autoComplete="address-level1"
              />
              <input
                type="text"
                placeholder="ZIP code"
                value={formData.zipCode}
                onChange={(e) => handleInputChange("zipCode", e.target.value)}
                className="p-3 border border-gray-300 rounded-lg focus:border-gray-900 focus:outline-none"
                autoComplete="postal-code"
                autoCorrect="off"
                spellCheck="false"
                inputMode="numeric"
              />
            </div>
            <div className="relative">
              <select
                value={formData.country}
                onChange={(e) => handleInputChange("country", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-gray-900 focus:outline-none appearance-none bg-white"
                autoComplete="country"
              >
                <option value="Indonesia">Indonesia</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
              </select>
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
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
          Next
        </button>
      </div>

      {/* Review Reservation Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold">2. Review your reservation</h2>
      </div>
    </div>
  );
}

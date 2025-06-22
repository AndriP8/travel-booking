"use client";

import { useState } from "react";

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearchBarClick = () => {
    setIsExpanded(true);
  };

  const handleCloseClick = () => {
    setIsExpanded(false);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 py-4 sm:py-7 relative">
      {/* Mobile Search Bar (Collapsed) */}
      {!isExpanded && (
        <div
          onClick={handleSearchBarClick}
          className="flex w-full max-w-3xl bg-white border border-white rounded-full shadow-md cursor-pointer md:hidden"
        >
          <div className="flex items-center flex-grow px-4 py-3">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4 text-gray-500 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <div>
                <p className="text-sm font-medium">Anywhere</p>
                <div className="flex text-xs text-gray-500">
                  <span>Any week</span>
                  <span className="mx-1">·</span>
                  <span>Add guests</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center pr-2">
            <button className="p-2 rounded-full border border-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Mobile Expanded Search (when clicked) */}
      {isExpanded && (
        <div className="fixed inset-0 bg-white z-50 p-4 md:hidden">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={handleCloseClick}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="text-sm font-medium">Stays</div>
            <div className="w-8"></div> {/* Empty div for alignment */}
          </div>

          <div className="flex flex-col space-y-4 mt-6">
            {/* Location */}
            <div className="border border-gray-300 rounded-xl p-4">
              <p className="text-xs font-bold mb-1">Where</p>
              <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="outline-none text-sm placeholder-gray-400 text-gray-600 bg-transparent w-full"
                type="text"
                placeholder="Search destinations"
              />
            </div>

            {/* Date Range */}
            <div className="flex space-x-2">
              <div className="border border-gray-300 rounded-xl p-4 flex-1">
                <p className="text-xs font-bold mb-1">Check in</p>
                <p className="text-sm text-gray-400">Add dates</p>
              </div>
              <div className="border border-gray-300 rounded-xl p-4 flex-1">
                <p className="text-xs font-bold mb-1">Check out</p>
                <p className="text-sm text-gray-400">Add dates</p>
              </div>
            </div>

            {/* Guests */}
            <div className="border border-gray-300 rounded-xl p-4">
              <p className="text-xs font-bold mb-1">Who</p>
              <p className="text-sm text-gray-400">Add guests</p>
            </div>

            <button className="bg-[#FF385C] text-white py-3 px-6 rounded-lg font-medium mt-4">
              Search
            </button>
          </div>
        </div>
      )}

      {/* Desktop Search Bar */}
      <div className="hidden md:flex w-full max-w-3xl bg-white border rounded-full p-2 shadow-lg">
        <div className="flex flex-grow flex-row">
          {/* Location */}
          <div className="flex-grow px-4 py-2 border-r border-white cursor-pointer hover:bg-gray-100 rounded-full">
            <p className="text-xs font-bold">Where</p>
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="outline-none text-sm placeholder-gray-400 text-gray-600 bg-transparent w-full"
              type="text"
              placeholder="Search destinations"
            />
          </div>

          {/* Check-in */}
          <div className="flex-grow px-4 py-2 border-r border-white cursor-pointer hover:bg-gray-100 rounded-full">
            <p className="text-xs font-bold">Check in</p>
            <p className="text-sm text-gray-400">Add dates</p>
          </div>

          {/* Check-out */}
          <div className="flex-grow px-4 py-2 border-r border-white cursor-pointer hover:bg-gray-100 rounded-full">
            <p className="text-xs font-bold">Check out</p>
            <p className="text-sm text-gray-400">Add dates</p>
          </div>

          {/* Guests */}
          <div className="flex-grow px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-full">
            <p className="text-xs font-bold">Who</p>
            <p className="text-sm text-gray-400">Add guests</p>
          </div>
        </div>

        {/* Search button */}
        <button className="bg-[#FF385C] p-3 rounded-full text-white ml-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

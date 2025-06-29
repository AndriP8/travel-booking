import { Suspense } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PropertyList from "../components/PropertyList";
import { ListAccommodationResponse } from "@/types/accommodations";

type SearchParams = {
  location?: string;
  checkin?: string;
  checkout?: string;
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const queryParams = (await searchParams) || "";
  const response = await fetch(
    `http://localhost:3001/api/search?${new URLSearchParams(queryParams)}}`,
  );
  const result = (await response.json()) as ListAccommodationResponse;

  return (
    <div className="bg-white">
      <Header />
      <main className="flex flex-col">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 px-6">
            <Suspense fallback={<div>Loading properties...</div>}>
              <PropertyList properties={result.data} />
            </Suspense>
          </div>

          {/* Map placeholder - will be integrated later */}
          <div className="hidden lg:block sticky top-[76px] right-0 w-[40%] h-[calc(100vh-76px)] bg-gray-200">
            <div className="relative h-full w-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500">Map will be integrated here</p>
              </div>

              <div className="absolute top-1/4 left-1/4 bg-white rounded-full px-2 py-1 shadow-md text-sm font-medium">
                Rp1,067,062
              </div>
              <div className="absolute top-1/2 left-1/3 bg-white rounded-full px-2 py-1 shadow-md text-sm font-medium">
                Rp1,966,401
              </div>
              <div className="absolute bottom-1/3 right-1/4 bg-white rounded-full px-2 py-1 shadow-md text-sm font-medium">
                Rp2,085,542
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

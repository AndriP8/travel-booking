import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import PropertyList from "./components/PropertyList";
import Footer from "./components/Footer";
import { ListAccommodationResponse } from "../types/accommodations";

type ApiResponse<T extends (...args: any) => any> = Awaited<ReturnType<T>>;

export default async function Home() {
  const response = await fetch("http://localhost:3001/api/accommodations");
  const result = (await response.json()) as ListAccommodationResponse;
  return (
    <div className="bg-white">
      <Header />
      <main className="flex flex-col">
        <SearchBar />
        <PropertyList properties={result.data} />
      </main>
      <Footer />
    </div>
  );
}

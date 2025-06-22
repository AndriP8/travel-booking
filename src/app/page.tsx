import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import PropertyList from "./components/PropertyList";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main className="flex flex-col">
        <SearchBar />
        <PropertyList />
      </main>
      <Footer />
    </div>
  );
}

import Navbar from "@/components/Navbar";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-mint text-brand-dark">
      <Navbar />

      <header className="bg-brand-green text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="bg-brand-yellow text-brand-dark font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest">
            Premium Real Estate Agency
          </span>
          <h1 className="text-4xl md:text-6xl font-black mt-4 mb-6 leading-tight">
            Secure Your Dream Home Now
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 font-light">
            Modern, premium residential landmarks featuring smart deck homes, world-class lifestyle amenities, and prime connectivity.
          </p>
          <a 
            href="#listings" 
            className="bg-brand-red hover:bg-red-700 text-white font-bold text-lg px-8 py-3.5 rounded-xl shadow-lg transition inline-block"
          >
            Explore Current Projects
          </a>
        </div>
      </header>

      <main id="listings" className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-brand-dark">Featured Developments</h2>
          <p className="text-gray-600 mt-2">Handpicked direct opportunities with verified structural pricing configurations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((item) => (
            <PropertyCard key={item.id} item={item} />
          ))}
        </div>
      </main>

      <footer className="bg-brand-dark text-gray-400 py-8 text-center border-t border-gray-800 text-sm">
        <p>© 2026 Basu Properties. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
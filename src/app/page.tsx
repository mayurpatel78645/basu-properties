import Navbar from "@/components/Navbar";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-light text-brand-dark">
      <Navbar />

      {/* Hero Section */}
      <header className="hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-6 py-28 text-center">
          <div className="inline-block bg-brand-yellow text-brand-dark font-bold px-5 py-2 rounded-full text-sm uppercase tracking-widest mb-8">
            Premium Real Estate Agency
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            Secure Your Dream
            <br />
            Home Today
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-white/90">
            Discover premium residential developments in Mira Road and
            Bhayander with exceptional amenities, smart layouts, and
            unbeatable connectivity.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#listings"
              className="bg-brand-red text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="tel:9702350304"
              className="bg-white text-brand-dark px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition"
            >
              Call Now
            </a>
          </div>
        </div>
      </header>

      {/* Featured Properties */}
      <main id="listings" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">
            Featured Developments
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Carefully selected residential opportunities with verified
            pricing, premium amenities, and strong future growth potential.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((item) => (
            <PropertyCard key={item.id} item={item} />
          ))}
        </div>
      </main>

      {/* About Section */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-6">
            Why Choose Basu Properties?
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Basu Properties helps families and investors find quality homes
            in Mira Road and Bhayander. We work directly with reputed
            developers to provide verified inventory, transparent pricing,
            and professional guidance throughout the buying journey.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-brand-green text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-6">
            Schedule Your Site Visit
          </h2>

          <p className="text-xl mb-8">
            Speak directly with our property consultant and explore available
            options today.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:9702350304"
              className="bg-brand-red text-white px-8 py-4 rounded-xl font-bold"
            >
              Call Girish Patel
            </a>

            <a
              href="https://wa.me/919702350304"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-brand-dark px-8 py-4 rounded-xl font-bold"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-brand-dark text-gray-300 py-8 text-center">
        <p>© 2026 Basu Properties. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
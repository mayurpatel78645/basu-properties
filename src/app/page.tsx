import Navbar from "@/components/Navbar";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-light text-brand-dark">
      <Navbar />

      {/* Hero Section */}
      <header className="relative h-[70vh] min-h-[550px] overflow-hidden">
        {/* Background Image */}
        <img
          src="/assets/oasis-tower.jpeg"
          alt="Luxury Residential Tower"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="max-w-5xl mx-auto text-center px-6">
            <div className="inline-block bg-brand-yellow text-brand-dark font-bold px-5 py-2 rounded-full text-sm uppercase tracking-widest mb-6">
              Premium Real Estate Agency
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
              Premium Homes
              <br />
              in Mira Road & Bhayander
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Discover premium residential projects with world-class amenities,
              excellent connectivity, and verified pricing.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#listings"
                className="bg-brand-red text-white px-8 py-4 rounded-xl font-bold text-lg"
              >
                View Projects
              </a>

              <a
                href="tel:9702350304"
                className="bg-white text-brand-dark px-8 py-4 rounded-xl font-bold text-lg"
              >
                Call Office
              </a>

              <a
                href="https://wa.me/919702350304"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-green text-white px-8 py-4 rounded-xl font-bold text-lg"
              >
                WhatsApp: Girish Patel
              </a>

              <a
                href="https://wa.me/9867354736"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-green text-white px-8 py-4 rounded-xl font-bold text-lg"
              >
                WhatsApp: Pankaj Rastogi
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Videos */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Property Walkthrough Videos
          </h2>

          <p className="text-xl text-gray-600">
            Explore our featured projects through detailed video walkthroughs.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <video
              controls
              muted
              className="w-full"
              poster="/assets/oasis-tower.jpeg"
            >
              <source src="/assets/oasis_muted.mp4" type="video/mp4" />
            </video>

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                Oasis by Leena Group
              </h3>

              <p className="text-gray-600 mt-2">
                Luxury residential development with rooftop amenities and premium deck homes.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <video
              controls
              muted
              className="w-full"
              poster="/assets/space-residence.jpeg"
            >
              <source src="/assets/space_muted.mp4" type="video/mp4" />
            </video>

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                Space Residence-II
              </h3>

              <p className="text-gray-600 mt-2">
                Nearing possession project featuring balcony homes and ready sample flats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <main id="listings" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
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

      {/* Why Basu Properties */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-12">
            Why Choose Basu Properties?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-brand-light p-6 rounded-2xl shadow">
              <h3 className="font-bold text-xl mb-2">
                Verified Projects
              </h3>

              <p>
                Carefully selected residential developments from reputed builders.
              </p>
            </div>

            <div className="bg-brand-light p-6 rounded-2xl shadow">
              <h3 className="font-bold text-xl mb-2">
                Direct Pricing
              </h3>

              <p>
                Transparent pricing with access to developer offers and inventory.
              </p>
            </div>

            <div className="bg-brand-light p-6 rounded-2xl shadow">
              <h3 className="font-bold text-xl mb-2">
                Site Visit Support
              </h3>

              <p>
                Professional guidance during property visits and comparisons.
              </p>
            </div>

            <div className="bg-brand-light p-6 rounded-2xl shadow">
              <h3 className="font-bold text-xl mb-2">
                Local Expertise
              </h3>

              <p>
                Deep understanding of Mira Road and Bhayander real estate markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-brand-green text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-6">
            Schedule Your Site Visit
          </h2>

          <div className="mb-10">
            <p className="text-2xl font-bold">
              Girish Patel
            </p>

            <p className="text-lg text-gray-200 mt-2">
              Property Consultant
            </p>

            <p className="text-2xl font-bold mt-4">
              +91 97023 50304 <br/> +91 9702350304
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:9702350304"
              className="bg-brand-red text-white px-8 py-4 rounded-xl font-bold"
            >
              Call Girish Patel
            </a>

            <a
              href="tel:9867354736"
              className="bg-brand-red text-white px-8 py-4 rounded-xl font-bold"
            >
              Call Pankaj Rastogi
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

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919702350304"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-brand-green text-white px-5 py-4 rounded-full shadow-2xl z-50 font-bold"
      >
        WhatsApp
      </a>

      <footer className="bg-brand-dark text-gray-300 py-8 text-center">
        <p>© 2026 Basu Properties. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
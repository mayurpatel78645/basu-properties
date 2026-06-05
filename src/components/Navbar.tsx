export default function Navbar() {
  return (
    <nav className="bg-brand-green h-16 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        
        <div className="flex items-center">
          <span className="text-3xl font-bold text-brand-yellow">
            BASU 
          </span>

          <span className="text-3xl font-light text-white ml-1">
            &nbsp;PROPERTIES
          </span>
        </div>

        <a
          href="tel:9702350304"
          className="bg-brand-red hover:opacity-90 text-white font-semibold px-5 py-2 rounded-lg transition"
        >
          Call Office
        </a>

      </div>
    </nav>
  );
}
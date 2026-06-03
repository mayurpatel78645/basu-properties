export default function Navbar() {
  return (
    <nav className="bg-brand-green text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-wider text-brand-yellow">BASU</span>
          <span className="text-2xl font-light">PROPERTIES</span>
        </div>
        <a 
          href="tel:9702350304" 
          className="bg-brand-red hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-lg transition"
        >
          Call Office
        </a>
      </div>
    </nav>
  );
}
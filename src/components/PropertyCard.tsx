import { Property } from "../data/properties";

export default function PropertyCard({ item }: { item: Property }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col">

      {/* Property Image */}
      {item.image && (
        <div className="h-48 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>
      )}

      <div className="p-6 flex-grow">

        <div className="flex justify-between items-start mb-4">
          <span
            className={`text-xs font-bold uppercase px-3 py-1 rounded-full ${
              item.isUrgent
                ? "bg-brand-red text-white"
                : "bg-brand-yellow text-brand-dark"
            }`}
          >
            {item.tagline}
          </span>

          <span className="text-sm text-gray-500">
            {item.status}
          </span>
        </div>

        <h3 className="text-3xl font-extrabold text-brand-dark mb-5">
          {item.title}
        </h3>

        <div className="bg-gray-50 rounded-2xl p-4 mb-5">
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">
              1 BHK
            </p>

            <p className="text-2xl font-extrabold text-brand-green">
              {item.price1bhk}
            </p>

            <p className="text-sm text-gray-600">
              {item.carpet1bhk}
            </p>
          </div>

          {item.price2bhk && (
            <div className="mt-4 pt-4 border-t">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">
                2 BHK
              </p>

              <p className="text-2xl font-extrabold text-brand-green">
                {item.price2bhk}
              </p>

              <p className="text-sm text-gray-600">
                {item.carpet2bhk}
              </p>
            </div>
          )}
        </div>

        <ul className="space-y-2">
          {item.highlights.slice(0, 5).map((highlight, index) => (
            <li
              key={index}
              className="text-gray-600 flex items-start text-sm"
            >
              <span className="mr-2 text-brand-yellow font-bold">
                ✓
              </span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t bg-gray-50 p-6">
        <p className="text-xs text-gray-500 mb-2">
          Property Consultant
        </p>

        <p className="font-bold text-lg text-brand-dark">
          {item.agent.name}
        </p>

        <div className="flex gap-3 mt-4">
          <a
            href={`tel:${item.agent.phone}`}
            className="flex-1 bg-brand-red text-white text-center py-3 rounded-xl font-bold"
          >
            Call
          </a>

          <a
            href={`https://wa.me/91${item.agent.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-brand-green text-white text-center py-3 rounded-xl font-bold"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
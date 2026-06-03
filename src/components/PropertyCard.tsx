import { Property } from "../data/properties";

export default function PropertyCard({ item }: { item: Property }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col justify-between">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span className={`text-xs font-bold uppercase px-3 py-1 rounded-full ${
            item.isUrgent ? 'bg-brand-red text-white animate-pulse' : 'bg-brand-yellow text-brand-dark'
          }`}>
            {item.tagline}
          </span>
          <span className="text-sm text-gray-500 font-medium">{item.status}</span>
        </div>

        <h3 className="text-2xl font-bold text-brand-dark mb-4">{item.title}</h3>

        <div className="space-y-3 bg-brand-mint p-4 rounded-xl mb-4">
          <div>
            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">1 BHK Config</p>
            <p className="text-lg font-bold text-brand-green">{item.price1bhk} <span className="text-sm font-normal text-gray-600">({item.carpet1bhk})</span></p>
          </div>
          {item.price2bhk && (
            <div className="border-t border-gray-200 pt-2">
              <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">2 BHK Config</p>
              <p className="text-lg font-bold text-brand-green">{item.price2bhk} <span className="text-sm font-normal text-gray-600">({item.carpet2bhk})</span></p>
            </div>
          )}
        </div>

        <ul className="space-y-2 mb-6">
          {item.highlights.map((highlight, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-start">
              <span className="text-brand-yellow mr-2">✔</span> {highlight}
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6 bg-gray-50 border-t border-gray-100 mt-auto">
        <p className="text-xs text-gray-500 mb-1">Exclusive Sourcing Agent:</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-brand-dark">{item.agent.name}</p>
            <p className="text-sm text-gray-600">{item.agent.phone}</p>
          </div>
          <a 
            href={`tel:${item.agent.phone}`}
            className="bg-brand-green hover:bg-emerald-900 text-white font-bold px-4 py-2 rounded-xl text-sm transition text-center"
          >
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}
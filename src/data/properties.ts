export interface Property {
  id: string;
  title: string;
  tagline: string;
  status: string;
  isUrgent: boolean;
  price1bhk: string;
  carpet1bhk: string;
  price2bhk?: string;
  carpet2bhk?: string;
  highlights: string[];
  agent: { name: string; phone: string; };
}

export const properties: Property[] = [
  {
    id: "space-residence-2",
    title: "Space Residence-II",
    tagline: "Nearing Possession",
    status: "Under Construction",
    isUrgent: true,
    price1bhk: "93 Lakh all in",
    carpet1bhk: "531 sq.ft",
    price2bhk: "1.41 Cr all in",
    carpet2bhk: "794 sq.ft",
    highlights: ["All flats are with balcony", "Sample flat ready"],
    agent: { name: "Girish Patel", phone: "9702350304" }
  },
  {
    id: "oasis-leena-group",
    title: "Oasis by Leena Group",
    tagline: "⚡ Golden Opportunity!",
    status: "42 Storey Luxury Landmark",
    isUrgent: false,
    price1bhk: "69 Lacs ++",
    carpet1bhk: "431, 512, 515, 518 sq.ft",
    price2bhk: "1.30 Cr ++",
    carpet2bhk: "751, 772 sq.ft",
    highlights: [
      "Premium 1 & 2 Bed deck Homes",
      "Mesmerizing view & Rooftop amenities",
      "20+ Lifestyle Amenities",
      "Jodi options available",
      "Upcoming Metro Station - 5 mins Walk",
      "Mira Road Station - 1.4 Kms | Bhayander Station - 2 Kms",
      "Schools, Colleges & Hospitals within 2 Kms",
      "RERA Possession: Dec 2028"
    ],
    agent: { name: "Girish Patel", phone: "9702350304" }
  },
  {
    id: "kanakia-mira-road",
    title: "Kanakia Mira Road East",
    tagline: "Ready Option",
    status: "Exclusive Pricing",
    isUrgent: false,
    price1bhk: "1 Cr 12 Lakhs",
    carpet1bhk: "With Steel Parking",
    highlights: ["Premium infrastructure", "Highly connected locality"],
    agent: { name: "Girish Patel", phone: "9702350304" }
  }
];
export interface OfficeItem {
  id: string;
  city: string;
  country: string;
  flag: string;
  address: string;
  hours: string;
  phone: string;
  email: string;
  mapCoordinates: { lat: number; lng: number };
  badge: string;
}

export const officesData: OfficeItem[] = [
  {
    id: "us",
    city: "Delaware",
    country: "United States",
    flag: "🇺🇸",
    address: "1201 North Orange Street, Suite 7100, Wilmington, DE 19801",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM EST",
    phone: "+1 (302) 555-0134",
    email: "us@elitefiling.co",
    mapCoordinates: { lat: 39.7459, lng: -75.5466 },
    badge: "US Headquarters & Registered Agent Center"
  },
  {
    id: "uk",
    city: "London",
    country: "United Kingdom",
    flag: "🇬🇧",
    address: "71-75 Shelton Street, Covent Garden, London WC2H 9JQ",
    hours: "Mon - Fri: 9:00 AM - 5:30 PM GMT",
    phone: "+44 20 7946 0912",
    email: "uk@elitefiling.co",
    mapCoordinates: { lat: 51.5147, lng: -0.1246 },
    badge: "UK & European Legal Hub"
  },
  {
    id: "uae",
    city: "Dubai",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    address: "Meydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai",
    hours: "Mon - Fri: 8:30 AM - 5:30 PM GST",
    phone: "+971 4 800 3548",
    email: "uae@elitefiling.co",
    mapCoordinates: { lat: 25.1558, lng: 55.3003 },
    badge: "GCC & Free Zone Operations Center"
  },
  {
    id: "ca",
    city: "Toronto",
    country: "Canada",
    flag: "🇨🇦",
    address: "100 King Street West, Suite 5600, Toronto, ON M5X 1C9",
    hours: "Mon - Fri: 9:00 AM - 5:00 PM EST",
    phone: "+1 (416) 555-0189",
    email: "ca@elitefiling.co",
    mapCoordinates: { lat: 43.6487, lng: -79.3817 },
    badge: "Canadian Federal Incorporation Office"
  },
  {
    id: "pk",
    city: "Karachi",
    country: "Pakistan",
    flag: "🇵🇰",
    address: "Suite 402, FTC Building, Shahrah-e-Faisal, Karachi 74400",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM PKT",
    phone: "+92 21 3555 0122",
    email: "pk@elitefiling.co",
    mapCoordinates: { lat: 24.8607, lng: 67.0011 },
    badge: "SECP & FBR Compliance Division"
  }
];

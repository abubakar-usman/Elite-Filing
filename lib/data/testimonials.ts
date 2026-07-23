export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  country: string;
  flag: string;
  avatar: string;
  rating: number;
  quote: string;
  metric: string;
  category: "all" | "formation" | "tax" | "banking" | "trademark";
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "1",
    name: "Amina Al-Rashid",
    role: "Co-Founder & CEO",
    company: "SaaSify Cloud",
    country: "UAE",
    flag: "🇦🇪",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote: "Elite Filing set up our Delaware C-Corp and EIN in under two weeks. Their team answered every question the same day — it felt like having an in-house corporate counsel guiding us every step.",
    metric: "$1.2M Seed Raised in US",
    category: "formation"
  },
  {
    id: "2",
    name: "Daniel Kovacs",
    role: "Director of Commerce",
    company: "Nordic Goods LTD",
    country: "United Kingdom",
    flag: "🇬🇧",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote: "We moved our multi-brand e-commerce operation to a UK LTD with VAT registration and Stripe onboarding. Zero surprises, and pricing was exactly what they quoted upfront.",
    metric: "3 Stores Onboarded",
    category: "banking"
  },
  {
    id: "3",
    name: "Hassan Mahmud",
    role: "Founder",
    company: "FinPay Global",
    country: "Pakistan",
    flag: "🇵🇰",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote: "From SECP incorporation to FBR NTN, PSEB registration, and a USPTO trademark, everything ran through one dedicated specialist. That continuity made an enormous difference for our startup.",
    metric: "0.25% Tax Concession Secured",
    category: "tax"
  },
  {
    id: "4",
    name: "Sarah Jenkins",
    role: "Managing Partner",
    company: "Apex Growth Agency",
    country: "United States",
    flag: "🇺🇸",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote: "Elite Filing handled our Registered Agent transition and annual state filings flawlessly. The automated compliance alerts ensure we never miss a deadline.",
    metric: "100% On-Time State Filings",
    category: "formation"
  },
  {
    id: "5",
    name: "Liam O'Connor",
    role: "Founder",
    company: "Atlas Supply Co.",
    country: "Canada",
    flag: "🇨🇦",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote: "Incorporating in Canada and getting our CRA GST/HST number was effortless. Elite Filing secured our CIPO trademark application and set up Wise multi-currency banking within days.",
    metric: "CRA GST/HST Active in 48h",
    category: "trademark"
  },
  {
    id: "6",
    name: "Tariq Al-Mansoor",
    role: "Managing Director",
    company: "Meydan Logistics FZ",
    country: "UAE",
    flag: "🇦🇪",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote: "Elite Filing secured our Dubai Free Zone license and 3-Year Investor Visas faster than any traditional PRO agency in Dubai. Absolutely stellar execution.",
    metric: "3 Visas Issued in 5 Days",
    category: "formation"
  }
];

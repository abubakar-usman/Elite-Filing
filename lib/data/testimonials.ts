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
    name: "[Client Name]",
    role: "Co-Founder & CEO",
    company: "[Tech Startup]",
    country: "UAE",
    flag: "🇦🇪",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote: "[Testimonial quote from client goes here once approved.]",
    metric: "[Verified Result]",
    category: "formation"
  },
  {
    id: "2",
    name: "[Client Name]",
    role: "Director of Commerce",
    company: "[Retail Group]",
    country: "United Kingdom",
    flag: "🇬🇧",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote: "[Testimonial quote from client goes here once approved.]",
    metric: "[Verified Result]",
    category: "banking"
  },
  {
    id: "3",
    name: "[Client Name]",
    role: "Founder",
    company: "[Fintech Startup]",
    country: "Pakistan",
    flag: "🇵🇰",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote: "[Testimonial quote from client goes here once approved.]",
    metric: "[Verified Result]",
    category: "tax"
  },
  {
    id: "4",
    name: "[Client Name]",
    role: "Managing Partner",
    company: "[Marketing Agency]",
    country: "United States",
    flag: "🇺🇸",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote: "[Testimonial quote from client goes here once approved.]",
    metric: "[Verified Result]",
    category: "formation"
  },
  {
    id: "5",
    name: "[Client Name]",
    role: "Founder",
    company: "[Logistics Startup]",
    country: "Canada",
    flag: "🇨🇦",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote: "[Testimonial quote from client goes here once approved.]",
    metric: "[Verified Result]",
    category: "trademark"
  },
  {
    id: "6",
    name: "[Client Name]",
    role: "Managing Director",
    company: "[Logistics Company]",
    country: "UAE",
    flag: "🇦🇪",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote: "[Testimonial quote from client goes here once approved.]",
    metric: "[Verified Result]",
    category: "formation"
  }
];

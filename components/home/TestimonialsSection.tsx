"use client";

import { useState } from "react";
import { ShieldCheck, CheckCircle2, User } from "lucide-react";

type TestimonialCategory = "all" | "formation" | "tax" | "banking" | "trademark";

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  flag: string;
  quote: string;
  metric: string;
  category: TestimonialCategory;
}

const filterTabs: { id: TestimonialCategory | "all"; label: string }[] = [
  { id: "all", label: "All Reviews" },
  { id: "formation", label: "Company Formation" },
  { id: "tax", label: "Tax & Compliance" },
  { id: "banking", label: "Banking & Merchant" },
  { id: "trademark", label: "Trademark & IP" },
];

const testimonials: TestimonialItem[] = [
  {
    id: "1",
    name: "[Client Name]",
    role: "Co-Founder & CEO",
    company: "[Tech Startup]",
    flag: "🇦🇪",
    quote: "[Testimonial quote from client goes here once approved.]",
    metric: "[Verified Result]",
    category: "formation",
  },
  {
    id: "2",
    name: "[Client Name]",
    role: "Director of Commerce",
    company: "[Retail Group]",
    flag: "🇬🇧",
    quote: "[Testimonial quote from client goes here once approved.]",
    metric: "[Verified Result]",
    category: "banking",
  },
  {
    id: "3",
    name: "[Client Name]",
    role: "Founder",
    company: "[Fintech Startup]",
    flag: "🇵🇰",
    quote: "[Testimonial quote from client goes here once approved.]",
    metric: "[Verified Result]",
    category: "tax",
  },
  {
    id: "4",
    name: "[Client Name]",
    role: "Managing Partner",
    company: "[Marketing Agency]",
    flag: "🇺🇸",
    quote: "[Testimonial quote from client goes here once approved.]",
    metric: "[Verified Result]",
    category: "formation",
  },
  {
    id: "5",
    name: "[Client Name]",
    role: "Founder",
    company: "[Logistics Startup]",
    flag: "🇨🇦",
    quote: "[Testimonial quote from client goes here once approved.]",
    metric: "[Verified Result]",
    category: "trademark",
  },
  {
    id: "6",
    name: "[Client Name]",
    role: "Managing Director",
    company: "[Logistics Company]",
    flag: "🇦🇪",
    quote: "[Testimonial quote from client goes here once approved.]",
    metric: "[Verified Result]",
    category: "formation",
  },
];

export function TestimonialsSection() {
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all" ? testimonials : testimonials.filter((t) => t.category === filter);

  return (
      <section className="pt-10 pb-24 bg-grey border-b border-slate-200">
      <div className="container-page">
    
    {/* Header Area */}
    <div className="max-w-3xl mb-12">
      <div className="eyebrow">What Our Clients Say</div>
      <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
        Trusted by founders forming businesses worldwide.
      </h2>
      <p className="mt-5 text-lg text-slate-600">
        Hear directly from entrepreneurs, SaaS founders, and e-commerce directors who built their
        companies with Elite Filing.
      </p>
    </div>

    {/* Filter Buttons - Added more bottom margin (mb-16) to prevent congestion */}
    <div className="flex flex-wrap gap-3 mb-16">
      {/* Assuming these are buttons/links */}
      <button className="px-5 py-2 rounded-full bg-blue-700 text-white text-sm font-medium">All Reviews</button>
      <button className="px-5 py-2 rounded-full border border-slate-200 text-slate-600 text-sm hover:bg-slate-50">Company Formation</button>
      <button className="px-5 py-2 rounded-full border border-slate-200 text-slate-600 text-sm hover:bg-slate-50">Tax & Compliance</button>
      <button className="px-5 py-2 rounded-full border border-slate-200 text-slate-600 text-sm hover:bg-slate-50">Banking & Merchant</button>
      <button className="px-5 py-2 rounded-full border border-slate-200 text-slate-600 text-sm hover:bg-slate-50">Trademark & IP</button>
    </div>

    {/* 2. Increased gap from 6 to 10 to stop it from looking congested */}
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          key={item}
          // 3. Increased internal padding to p-10 (standard is p-6 or p-8) 
          // 4. Added 'leading-relaxed' to the text to give more space between lines
          className="p-10 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        >
          {/* Tags row */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex flex-col gap-2">
               <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded border border-blue-100 w-fit">Verified Client</span>
               <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-1 rounded border border-emerald-100 w-fit">[Verified Result]</span>
            </div>
            <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded">AE</span>
          </div>

          <p className="text-slate-700 italic text-base leading-relaxed mb-8">
            "[Testimonial quote from client goes here once approved.]"
          </p>

          {/* Client Info */}
          <div className="pt-6 border-t border-slate-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                <span className="text-slate-400">👤</span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">[Client Name]</h4>
              <p className="text-xs text-slate-500">Co-Founder & CEO · [Tech Startup]</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}

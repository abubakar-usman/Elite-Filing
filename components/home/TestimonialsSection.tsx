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
    <section className="section-pad bg-slate-50 dark:bg-slate-900/50">
      <div className="container-page">
        <div className="max-w-3xl mb-10">
          <div className="eyebrow !text-blue-600 dark:!text-blue-400">What Our Clients Say</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white">
            Trusted by founders forming businesses worldwide.
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-300">
            Hear directly from entrepreneurs, SaaS founders, and e-commerce directors who built their
            companies with Elite Filing.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                filter === tab.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md shadow-slate-900/5 flex flex-col justify-between relative group hover:border-blue-500/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span className="text-xs font-bold text-blue-700 dark:text-blue-400">
                      Verified Client
                    </span>
                  </div>
                  <div className="text-xl leading-none px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    {item.flag}
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 mb-4">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{item.metric}</span>
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <User className="w-5 h-5 text-slate-400" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>{item.name}</span>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {item.role} ·{" "}
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      {item.company}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

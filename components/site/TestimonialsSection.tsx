"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, CheckCircle2, User } from "lucide-react";
import { testimonialsData } from "@/lib/data/testimonials";

export function TestimonialsSection() {
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all"
    ? testimonialsData
    : testimonialsData.filter((t) => t.category === filter);

  return (
    <section className="section-pad bg-slate-50 dark:bg-slate-900/50">
      <div className="container-page">
        <div className="max-w-3xl mb-10">
          <div className="eyebrow">What Our Clients Say</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white">
            Trusted by founders forming businesses worldwide.
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-300">
            Hear directly from entrepreneurs, SaaS founders, and e-commerce directors who built their companies with Elite Filing.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {[
            { id: "all", label: "All Reviews" },
            { id: "formation", label: "Company Formation" },
            { id: "tax", label: "Tax & Compliance" },
            { id: "banking", label: "Banking & Merchant" },
            { id: "trademark", label: "Trademark & IP" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                filter === tab.id
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md shadow-slate-900/5 flex flex-col justify-between relative group hover:border-orange-500/40 transition-all"
            >
              <div>
                {/* Header Rating & Flag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <div className="text-xl leading-none px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    {item.flag}
                  </div>
                </div>

                {/* Metric Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 mb-4">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{item.metric}</span>
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <User className="w-5 h-5 text-slate-400" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <span className="text-xs text-emerald-500">✓ Verified</span>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {item.role} · <span className="font-medium text-slate-700 dark:text-slate-300">{item.company}</span>
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

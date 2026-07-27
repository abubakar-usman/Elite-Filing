"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "Which countries do you support?", a: "We currently support company formation and compliance in the United States, United Kingdom, United Arab Emirates, Canada, and Pakistan. France, Germany, and Turkey are launching soon." },
  { q: "How long does company formation take?", a: "Timelines vary by jurisdiction — from 24 hours in the US to 5–10 business days for UAE Free Zone entities. Your specialist gives you a firm timeline before you commit." },
  { q: "Do I need to travel or visit an office?", a: "In almost every case, no. Our process is fully remote, with secure document collection and e-signature. UAE mainland entities occasionally require in-person KYC." },
  { q: "Is your pricing really flat?", a: "Yes. Every service has a clear scope and a fixed price. Government fees are disclosed upfront and passed through at cost." },
  { q: "Can you help after the company is registered?", a: "Yes — that's most of what we do. Tax filings, bookkeeping, trademark protection, banking, and consultancy are all available on ongoing plans." },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-pad bg-surface">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <div className="eyebrow">FAQ</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold">Answers before you ask.</h2>
          <p className="mt-4 text-foreground/70">
            Can&apos;t find what you need?{" "}
            <Link href="/contact" className="text-orange font-semibold underline underline-offset-4">Ask our team</Link>.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="card-surface !shadow-none hover:!transform-none hover:!shadow-none overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left px-6 py-5"
                >
                  <span className="font-semibold text-navy-deep pr-6">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 text-orange transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 -mt-2 text-foreground/70 leading-relaxed">{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

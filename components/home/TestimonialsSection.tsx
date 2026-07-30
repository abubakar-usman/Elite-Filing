"use client";

import { User, ShieldCheck, Globe2, Users, FileCheck, Landmark } from "lucide-react";

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
  // Duplicating the testimonials array ensures a seamless, infinite loop for the slider
  const sliderItems = [...testimonials, ...testimonials];

  return (
    <section className="pt-10 pb-24 bg-grey border-b border-slate-200 overflow-hidden">
      {/* 
        Injecting the keyframe animation and hover pause directly here.
      */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scroll-marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: scroll-marquee 40s linear infinite;
        }
        /* This pauses the entire track when a user hovers over it */
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        `
      }} />

      <div className="container-page">
        {/* Header Area */}
        <div className="max-w-3xl mb-16">
          <div className="eyebrow">What Our Clients Say</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
            Trusted by founders forming businesses worldwide.
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Hear directly from entrepreneurs, SaaS founders, and e-commerce directors who built their
            companies with Elite Filing.
          </p>
        </div>
      </div>

      {/* Auto-scrolling Slider Area */}
      <div className="relative w-full flex">
        {/* Changed from pb-8 to py-6 so the top shadow glow doesn't get clipped on hover */}
        <div className="flex w-max animate-marquee py-6 items-stretch">
          {sliderItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[350px] md:w-[420px] shrink-0 px-4 md:px-5"
            >
              <div className="group h-full flex flex-col p-8 md:p-10 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/60 shadow-sm transition-all duration-500 ease-out whitespace-normal cursor-default hover:-translate-y-1.5 hover:border-orange/60 hover:shadow-[0_12px_40px_-12px_color-mix(in_oklab,var(--orange)_25%,transparent)] dark:hover:shadow-[0_12px_40px_-12px_color-mix(in_oklab,var(--orange)_15%,transparent)]">
                
                {/* Tags row */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded border border-blue-100 w-fit">
                      Verified Client
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-1 rounded border border-emerald-100 w-fit">
                      {item.metric}
                    </span>
                  </div>
                  <span className="text-lg bg-slate-50 dark:bg-slate-900 px-2 py-1 rounded border border-slate-100 dark:border-slate-800">
                    {item.flag}
                  </span>
                </div>

                {/* Quote body */}
                <p className="text-slate-700 dark:text-slate-300 italic text-base leading-relaxed mb-8 grow">
                  "{item.quote}"
                </p>

                {/* Client Info */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800/60 flex items-center gap-4 mt-auto">
                  {/* Icon animates to orange on group-hover */}
                  <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-400 shrink-0 transition-all duration-500 ease-out group-hover:bg-orange/10 group-hover:text-orange group-hover:scale-105">
                    <User size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white transition-colors duration-500 group-hover:text-orange/90">{item.name}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {item.role} · {item.company}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustSignals() {
  const items = [
    {
      icon: Globe2,
      metric: "Global Founders",
      label: "Trusted by founders in over 20 countries",
      desc: "Providing reliable corporate services for entrepreneurs worldwide."
    },
    {
      icon: FileCheck,
      metric: "Multi-Market",
      label: "Registrations completed across 5+ jurisdictions",
      desc: "US, UK, UAE, Canada, and Pakistan."
    },
    {
      icon: ShieldCheck,
      metric: "Expert Team",
      label: "Licensed partners and in-house compliance specialists",
      desc: "Direct filing with state departments and registries."
    },
    {
      icon: Users,
      metric: "Clear Pricing",
      label: "Transparent, upfront pricing with no surprise charges",
      desc: "You'll always know what you're paying for before you commit."
    },
    {
      icon: Landmark,
      metric: "Banking Network",
      label: "Partnered with top-tier global banks",
      desc: "Seamless business account access alongside your company formation."
    }
  ];

  // Duplicate items for a seamless, infinite scroll loop
  const sliderItems = [...items, ...items];

  return (
    <section className="py-12 border-y border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/20 overflow-hidden">
      
      {/* Keyframes for Slider */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scroll-trust-marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-trust-marquee {
          animation: scroll-trust-marquee 40s linear infinite;
        }
        .animate-trust-marquee:hover {
          animation-play-state: paused;
        }
        `
      }} />

      <div className="relative w-full flex">
        {/* Added extra vertical padding so the elegant shadow doesn't get clipped */}
        <div className="flex w-max animate-trust-marquee py-6 items-stretch">
          {sliderItems.map((item, idx) => (
            <div
              key={`${item.metric}-${idx}`}
              className="w-[320px] md:w-[380px] shrink-0 px-3.5"
            >
              {/* 
                Elegant Enterprise Hover:
                - duration-500 ease-out makes the hover feel expensive and smooth
                - border-orange/50 gives a sophisticated, non-harsh outline
                - The custom shadow uses color-mix to create a beautiful, subtle orange glow
              */}
              <div 
                className="group h-full flex items-start gap-4.5 p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/60 shadow-sm transition-all duration-500 ease-out cursor-default hover:-translate-y-1.5 hover:border-orange/60 hover:shadow-[0_12px_40px_-12px_color-mix(in_oklab,var(--orange)_25%,transparent)] dark:hover:shadow-[0_12px_40px_-12px_color-mix(in_oklab,var(--orange)_15%,transparent)]"
              >
                {/* Icon Container - Starts with brand blue, transitions smoothly to soft orange */}
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 transition-all duration-500 ease-out group-hover:bg-orange/10 group-hover:text-orange group-hover:scale-105">
                  <item.icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col h-full mt-0.5">
                  <div className="text-[19px] font-bold font-display text-slate-900 dark:text-white leading-tight transition-colors duration-500 group-hover:text-navy-deep dark:group-hover:text-blue-50">
                    {item.metric}
                  </div>
                  {/* Label starts with brand blue, smoothly shifts to orange/90 on hover */}
                  <div className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mt-1.5 transition-colors duration-500 group-hover:text-orange/90">
                    {item.label}
                  </div>
                  <div className="text-[13.5px] text-slate-500 dark:text-slate-400 mt-2 leading-relaxed font-medium">
                    {item.desc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
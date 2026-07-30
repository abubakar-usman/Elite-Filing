"use client";

import { ShieldCheck, Globe2, Users, FileCheck, Landmark } from "lucide-react";

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
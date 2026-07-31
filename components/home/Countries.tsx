import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { countriesData } from "@/lib/data/countries";

const comingSoon = {
  flags: ["🇫🇷", "🇩🇪", "🇹🇷"],
  title: "France, Germany & Turkey",
  label: "Launching Soon",
};

export function Countries() {
  return (
    <section className="section-pad bg-slate-50 dark:bg-slate-900/50 animate-fade-up border-b border-slate-200 dark:border-slate-800">
      <div className="container-page">
        
        {/* Header Section */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="eyebrow">Countries We Cover</div>
            {/* Heading color reverted exactly to original */}
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white">
              Wherever You Want to Build, We Can Take You There
            </h2>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              We currently support company formation and compliance in five key markets, with new
              jurisdictions added regularly.
            </p>
          </div>
          <Link href="/countries" className="btn-ghost group inline-flex items-center gap-2">
            View All Country Guides 
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Grid Section */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {countriesData.map((c) => (
            <Link
              key={c.slug}
              href={`/countries/${c.slug}`}
              className="group relative flex flex-col h-full p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-orange/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
            >
              {/* Elegant Expanding Gradient Top Border */}
              <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-orange to-orange-soft w-0 group-hover:w-full transition-all duration-700 ease-out z-20" />

              {/* Top Content: Flag Icon & Titles */}
              <div className="flex items-start gap-5 mb-6">
                {/* Premium Framed Flag Wrapper with subtle inner glow/shadow */}
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-800/50 border border-slate-200/60 dark:border-slate-700 shadow-inner flex items-center justify-center text-3xl group-hover:scale-105 group-hover:-translate-y-1 group-hover:shadow-lg transition-all duration-500 ease-out">
                  {c.flag}
                </div>
                
                <div className="pt-1.5">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {c.name}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                    {c.tagline}
                  </p>
                </div>
              </div>

              {/* Stats Block (Refined Enterprise Pill) */}
              {c.stats?.[0] && (
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 text-xs transition-colors duration-500 group-hover:border-blue-100 dark:group-hover:border-blue-900/50">
                    <span className="text-slate-500 dark:text-slate-400">{c.stats[0].label}:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {c.stats[0].key}
                    </span>
                  </div>
                </div>
              )}

              {/* Footer - Pinned perfectly to the bottom with mt-auto */}
              <div className="mt-auto pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  Explore {c.name}
                </span>
                
                {/* Elegant Circular Arrow Button */}
                <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors duration-500">
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transform group-hover:translate-x-0.5 transition-all duration-300" />
                </div>
              </div>
            </Link>
          ))}

          {/* "Coming Soon" Interactive Card */}
          <div className="group relative flex flex-col h-full p-6 md:p-8 rounded-2xl bg-transparent border-2 border-dashed border-slate-200 dark:border-slate-700/70 flex items-center justify-center text-center transition-all duration-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50/50 dark:hover:bg-slate-800/20 overflow-hidden cursor-default">
            <div className="relative z-10 flex flex-col items-center">
              
              {/* Floating Flags Animation */}
              <div className="flex gap-3 text-3xl mb-5 group-hover:-translate-y-2 transition-transform duration-700 ease-out">
                {comingSoon.flags.map((flag, idx) => (
                  <span key={idx} className="drop-shadow-sm opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                    {flag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {comingSoon.title}
              </h3>
              
              {/* Premium Launching Pill */}
              <div className="mt-3.5 inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400 group-hover:bg-orange/10 group-hover:text-orange transition-colors duration-500">
                {comingSoon.label}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
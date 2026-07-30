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
    <section className="section-pad animate-fade-up">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="eyebrow">Countries We Cover</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white">
              Wherever You Want to Build, We Can Take You There
            </h2>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
              We currently support company formation and compliance in five key markets, with new
              jurisdictions added regularly.
            </p>
          </div>
          <Link href="/countries" className="btn-ghost">
            View All Country Guides <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {countriesData.map((c) => (
            <Link
              key={c.slug}
              href={`/countries/${c.slug}`}
              className="card-surface p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-4xl leading-none">{c.flag}</div>
              <div>
                <div className="font-bold text-slate-900 dark:text-white text-lg">{c.name}</div>
                <div className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-0.5">
                  {c.tagline}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                  {c.stats?.[0]?.label}: <strong>{c.stats?.[0]?.key}</strong>
                </div>
              </div>
            </Link>
          ))}
          <div className="card-surface p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex flex-col justify-center items-center text-center opacity-80 min-h-[120px]">
            <div className="flex gap-2 text-2xl mb-2">
              {comingSoon.flags.map((flag) => (
                <span key={flag}>{flag}</span>
              ))}
            </div>
            <div className="font-bold text-slate-900 dark:text-white text-base">{comingSoon.title}</div>
            <div className="text-[10px] uppercase tracking-wider font-bold text-slate-500 mt-1">
              {comingSoon.label}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

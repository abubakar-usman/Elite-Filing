import type { Metadata } from "next";
import Link from "next/link";
import { countriesData } from "@/lib/data/countries";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Supported Countries & Jurisdictions — Elite Filing",
  description: "Form companies and manage tax compliance in the United States, United Kingdom, UAE, Canada, and Pakistan with Elite Filing.",
};

export default function CountriesOverviewPage() {
  return (
    <div className="py-12">
      {/* Hero */}
      <section className="container-page py-12 text-center max-w-4xl mx-auto">
        <div className="eyebrow mx-auto mb-4">Global Coverage</div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold text-navy-deep dark:text-white leading-tight">
          Incorporate & Scale Across <span className="text-orange">Five Primary Markets</span>.
        </h1>
        <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Each jurisdiction has unique legal, tax, trademark, and banking advantages. Explore our dedicated country guides to choose the right fit for your expansion.
        </p>
      </section>

      {/* Country Cards */}
      <section className="container-page py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {countriesData.map((country) => (
            <article
              key={country.slug}
              className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between group hover:border-orange-500/50 hover:shadow-xl transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-5xl leading-none">{country.flag}</span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-500/10 text-orange-500">
                    Dedicated Page
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">
                  {country.name}
                </h2>

                <p className="mt-2 text-xs font-semibold text-orange-500">
                  {country.tagline}
                </p>

                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {country.heroDesc}
                </p>

                <div className="mt-6 space-y-2 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span><strong>Tax Authority:</strong> {country.taxation.authority}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span><strong>IP Office:</strong> {country.trademarks.authority}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href={`/countries/${country.slug}`}
                  className="inline-flex items-center justify-between w-full text-sm font-semibold text-orange-500 group-hover:text-orange-600"
                >
                  <span>Explore {country.name} Page</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

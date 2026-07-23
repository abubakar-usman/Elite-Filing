import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { countriesData } from "@/lib/data/countries";
import { CheckCircle2, ArrowRight, Building2, Receipt, Shield, Landmark, HelpCircle, ChevronRight } from "lucide-react";
import { TrustSignals } from "@/components/site/TrustSignals";

interface CountryPageProps {
  params: Promise<{ country: string }>;
}

export async function generateStaticParams() {
  return countriesData.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({ params }: CountryPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const item = countriesData.find((c) => c.slug === resolvedParams?.country);
  if (!item) return { title: "Country Not Found" };

  return {
    title: `${item.name} Company Formation, Tax & Banking — Elite Filing`,
    description: item.heroDesc,
  };
}

export default async function DedicatedCountryPage({ params }: CountryPageProps) {
  const resolvedParams = await params;
  const item = countriesData.find((c) => c.slug === resolvedParams?.country);

  if (!item) {
    notFound();
  }

  return (
    <div className="pb-24">
      
      {/* Breadcrumb */}
      <div className="bg-slate-900 text-white py-4 border-b border-slate-800">
        <div className="container-page flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/countries" className="hover:text-white">Countries</Link>
          <ChevronRight className="w-3 h-3 text-orange-500" />
          <span className="text-white font-medium">{item.name}</span>
        </div>
      </div>

      {/* Country Hero */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-16 md:py-24 border-b border-slate-800">
        <div className="container-page max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-5xl leading-none">{item.flag}</span>
            <div>
              <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block">Official Country Blueprint</span>
              <span className="text-lg font-semibold text-white">{item.tagline}</span>
            </div>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white leading-tight">
            Form Your Company in <span className="text-orange">{item.name}</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
            {item.heroDesc}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-lg shadow-orange-500/25 text-sm"
            >
              <span>Start {item.name} Incorporation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 text-sm"
            >
              Book {item.name} Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Country Quick Stats */}
      <section className="py-8 bg-slate-800/50 border-b border-slate-800 text-white">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {item.stats.map((st) => (
            <div key={st.label}>
              <div className="text-2xl sm:text-3xl font-bold text-orange-400 font-display">{st.key}</div>
              <div className="text-xs text-slate-300 mt-1">{st.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Signals */}
      <TrustSignals />

      {/* 1. Formation Services Section */}
      <section className="container-page py-20">
        <div className="max-w-3xl mb-12">
          <div className="eyebrow">01. Formation Services</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Available Business Entities in {item.name}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {item.entities.map((entity) => (
            <div
              key={entity.name}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{entity.name}</h3>
                <p className="mt-2 text-xs font-semibold text-orange-500">Best for: {entity.bestFor}</p>
                <p className="mt-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{entity.taxOverview}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 flex justify-between">
                <span>Avg. Timeline:</span>
                <span className="font-semibold text-slate-900 dark:text-white">{entity.processingTime}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Taxation & Compliance Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800">
        <div className="container-page">
          <div className="max-w-3xl mb-12">
            <div className="eyebrow">02. Taxation & Compliance</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              {item.name} Tax Architecture & Annual Filing Rules
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-4">
                <Receipt className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.taxation.authority}</h3>
              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <span className="text-xs text-slate-500 block">Tax Rates:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{item.taxation.rate}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Filing Deadline:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{item.taxation.filingDeadline}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-slate-900 dark:text-white">Key Compliance Directives:</h4>
              {item.taxation.keyPoints.map((point, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Trademarks & IP Section */}
      <section className="container-page py-20">
        <div className="max-w-3xl mb-12">
          <div className="eyebrow">03. Trademark & Brand Protection</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Registering Trademarks with {item.trademarks.authority}
          </h2>
        </div>

        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm grid gap-6 md:grid-cols-2 items-center">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{item.trademarks.authority}</h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.trademarks.processDesc}</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-center">
            <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold block">Average Processing Time</span>
            <span className="text-3xl font-extrabold text-orange-500 font-display mt-2 block">{item.trademarks.avgTime}</span>
            <Link href="/contact" className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-orange-500 hover:text-orange-600">
              Start Trademark Application Search <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Banking & Payments Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800">
        <div className="container-page">
          <div className="max-w-3xl mb-12">
            <div className="eyebrow">04. Business Banking Solutions</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Banking & Merchant Payout Options in {item.name}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-4">
                <Landmark className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Banking Partners & Gateways</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.banking.options.map((opt) => (
                  <span key={opt} className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    {opt}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-xs text-slate-600 dark:text-slate-400 italic">
                Recommendation: {item.banking.recommendation}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Mandatory Verification Dossier</h3>
              <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                {item.banking.requirements.map((req) => (
                  <li key={req} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Country Packages */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container-page">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <div className="eyebrow !text-orange-400 mx-auto">{item.name} Pricing Packages</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
              Incorporate in {item.name} Today
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {item.packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`p-8 rounded-3xl flex flex-col justify-between relative ${
                  pkg.popular
                    ? "bg-slate-800 border-2 border-orange-500 shadow-2xl shadow-orange-500/20"
                    : "bg-slate-950 border border-slate-800"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider">
                    Recommended
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                  <div className="mt-4 font-extrabold text-4xl text-white">{pkg.price}</div>

                  <ul className="mt-6 space-y-3 text-xs text-slate-300">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800">
                  <Link
                    href="/contact"
                    className={`w-full py-3 px-4 rounded-xl text-center text-xs font-semibold block transition-all ${
                      pkg.popular
                        ? "bg-orange-500 hover:bg-orange-600 text-white"
                        : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                    }`}
                  >
                    Select Package
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Country FAQ */}
      <section className="container-page py-20 max-w-4xl">
        <div className="max-w-2xl mb-12">
          <div className="eyebrow">Frequently Asked Questions</div>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
            {item.name} Incorporation FAQ
          </h2>
        </div>

        <div className="space-y-4">
          {item.faqs.map((faq) => (
            <div
              key={faq.q}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <h3 className="font-semibold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-orange-500 shrink-0" />
                <span>{faq.q}</span>
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

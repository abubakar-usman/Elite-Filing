import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
    alternates: { canonical: `https://elite-filing.com/countries/${item.slug}` },
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
      <div className="bg-navy-deep text-white py-4 border-b border-navy">
        <div className="container-page flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/countries" className="hover:text-white">Countries</Link>
          <ChevronRight className="w-3 h-3 text-orange" />
          <span className="text-white font-medium">{item.name}</span>
        </div>
      </div>

      {/* Country Hero */}
      <section className="relative bg-navy-deep text-white py-16 md:py-24 border-b border-navy overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={item.heroImage || "/back.jpg"}
            alt={item.name}
            fill
            priority
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/85 to-transparent" />
        </div>

        <div className="container-page max-w-4xl relative z-10">
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

          {item.heroDesc && (
            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
              {item.heroDesc}
            </p>
          )}

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-white bg-gradient-to-r from-orange to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-lg shadow-orange/25 text-sm"
            >
              <span>Start {item.name} Incorporation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-white bg-navy hover:bg-slate-700 border border-slate-700 text-sm"
            >
              Book {item.name} Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Country Quick Stats */}
      {item.stats && item.stats.length > 0 && (
        <section className="py-8 bg-navy/50 border-b border-navy text-white">
          <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {item.stats.map((st) => (
              <div key={st.label}>
                <div className="text-2xl sm:text-3xl font-bold text-orange-400 font-display">{st.key}</div>
                <div className="text-xs text-slate-300 mt-1">{st.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Trust Signals */}
      <TrustSignals />

      {/* Services Breakdown */}
      <section className="container-page py-20 bg-surface-alt dark:bg-navy-deep/60 border-y border-border dark:border-navy">
        <div className="max-w-3xl mb-12">
          <div className="eyebrow">Services Overview</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-deep dark:text-white">
            Available Services in {item.name}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {item.serviceCategories?.map((category) => (
            <div
              key={category.categoryName}
              className="p-6 rounded-3xl bg-white dark:bg-navy-deep border border-border dark:border-navy shadow-sm"
            >
              <h3 className="text-xl font-bold text-navy-deep dark:text-white mb-4">
                {category.categoryName}
              </h3>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {category.items.map((srv, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange shrink-0 mt-0.5" />
                    <span>{srv}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Package Option */}
      {item.packageOption && (
        <section className="container-page py-20">
          <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-navy-deep text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent opacity-50"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <div className="eyebrow !text-orange-400">Featured Package</div>
                <h3 className="mt-3 text-2xl md:text-3xl font-bold">Complete Package</h3>
                <p className="mt-4 text-slate-300 leading-relaxed text-sm md:text-base">
                  {item.packageOption}
                </p>
              </div>
              <div className="shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-orange hover:bg-orange-600 transition-colors shadow-lg shadow-orange/20"
                >
                  {item.sectionCta || `Start Your ${item.name} Company`}
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {item.faqs && item.faqs.length > 0 && (
        <section className="container-page py-20 max-w-4xl mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow">Common Questions</div>
            <h2 className="mt-3 text-3xl font-bold text-navy-deep dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {item.faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white dark:bg-navy-deep border border-border shadow-sm">
                <h3 className="text-lg font-bold text-navy-deep dark:text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Bottom CTA — clear next step after all content */}
      <section className="py-16 bg-navy-deep">
        <div className="container-page">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5">
            <div>
              <div className="eyebrow !text-orange-400">Ready to incorporate?</div>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold text-white">
                Start Your {item.name} Company Today
              </h2>
              <p className="mt-3 text-slate-300 text-sm max-w-lg">
                Our {item.name} specialists will prepare your documents, file with the relevant authority, and keep you compliant from day one.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="btn-primary-cta text-sm"
              >
                Start {item.name} Incorporation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/schedule"
                className="btn-secondary-cta text-sm"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

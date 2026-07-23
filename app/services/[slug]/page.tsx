import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData } from "@/lib/data/services";
import { CheckCircle2, ArrowRight, HelpCircle, ChevronRight, Building2, Receipt, Shield, MapPin, Landmark, Calculator, ShoppingBag, Sparkles, Briefcase, LucideIcon } from "lucide-react";
import { TrustSignals } from "@/components/site/TrustSignals";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Receipt,
  Shield,
  MapPin,
  Landmark,
  Calculator,
  ShoppingBag,
  Sparkles,
  Briefcase,
};

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams?.slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} — Elite Filing Services`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams?.slug);

  if (!service) {
    notFound();
  }

  const IconComponent = iconMap[service.iconName] || Building2;

  return (
    <div className="pb-24">
      
      {/* Breadcrumb Header */}
      <div className="bg-slate-900 text-white py-4 border-b border-slate-800">
        <div className="container-page flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/services" className="hover:text-white">Services</Link>
          <ChevronRight className="w-3 h-3 text-orange-500" />
          <span className="text-white font-medium">{service.title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-16 md:py-24 border-b border-slate-800">
        <div className="container-page max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-semibold uppercase tracking-wider mb-6">
            <IconComponent className="w-4 h-4" />
            <span>Dedicated Service Category</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white leading-tight">
            {service.title}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
            {service.fullDesc}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-lg shadow-orange-500/25 text-sm"
            >
              <span>Get Started with {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 text-sm"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <TrustSignals />

      {/* Features Grid */}
      <section className="container-page py-20">
        <div className="max-w-3xl mb-12">
          <div className="eyebrow">Service Breakdown</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            What is Included in {service.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Comprehensive support designed to keep your entity legally protected and operational.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {service.features.map((feature, i) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0 font-bold text-sm">
                0{i + 1}
              </div>
              <div>
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Jurisdiction Matrix */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800">
        <div className="container-page">
          <div className="max-w-3xl mb-12">
            <div className="eyebrow">Supported Jurisdictions</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Jurisdiction Support Matrix
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              Timelines and pricing tailored across our 5 primary coverage countries.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.jurisdictionSupport.map((j) => (
              <div
                key={j.country}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-3xl leading-none">{j.flag}</span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {j.duration}
                    </span>
                  </div>
                  <h4 className="font-semibold text-lg text-slate-900 dark:text-white">{j.country}</h4>
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{j.note}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-sm">
                  <span className="text-xs text-slate-500">Starting from</span>
                  <span className="font-bold text-orange-500">{j.priceStarting}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="container-page py-20">
        <div className="max-w-3xl mb-12">
          <div className="eyebrow">Execution Roadmap</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            How We Deliver {service.title}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {service.processSteps.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative"
            >
              <div className="font-display text-orange-500 text-4xl font-bold mb-3">{step.step}</div>
              <h3 className="font-semibold text-base text-slate-900 dark:text-white">{step.title}</h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container-page">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <div className="eyebrow !text-orange-400 mx-auto">Transparent Pricing</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
              {service.title} Service Packages
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Clear upfront pricing with zero surprise add-ons.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {service.packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`p-8 rounded-3xl flex flex-col justify-between relative ${
                  pkg.popular
                    ? "bg-slate-800 border-2 border-orange-500 shadow-2xl shadow-orange-500/20"
                    : "bg-slate-950 border border-slate-800"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white">{pkg.price}</span>
                    {pkg.period && <span className="text-xs text-slate-400">{pkg.period}</span>}
                  </div>

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
                        ? "bg-orange-500 hover:bg-orange-600 text-white shadow-md"
                        : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                    }`}
                  >
                    Select {pkg.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      <section className="container-page py-20 max-w-4xl">
        <div className="max-w-2xl mb-12">
          <div className="eyebrow">Frequently Asked Questions</div>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
            Common Questions About {service.title}
          </h2>
        </div>

        <div className="space-y-4">
          {service.faqs.map((faq) => (
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

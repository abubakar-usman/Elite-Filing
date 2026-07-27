import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
    alternates: { canonical: `https://elite-filing.com/services/${service.slug}` },
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
      <div className="bg-navy-deep text-white py-4 border-b border-navy">
        <div className="container-page flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/services" className="hover:text-white">Services</Link>
          <ChevronRight className="w-3 h-3 text-orange" />
          <span className="text-white font-medium">{service.title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-navy-deep text-white py-16 md:py-24 border-b border-navy overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image || "/back.jpg"}
            alt={service.title}
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/85 to-transparent" />
        </div>

        <div className="container-page max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange/20 text-orange-400 border border-orange-500/30 text-xs font-semibold uppercase tracking-wider mb-6">
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
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-lg shadow-orange/25 text-sm"
            >
              <span>Get Started with {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-white bg-navy hover:bg-slate-700 border border-slate-700 text-sm"
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
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-deep dark:text-white">
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
              className="p-6 rounded-2xl bg-white dark:bg-navy-deep border border-border dark:border-navy shadow-sm flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-orange/10 text-orange flex items-center justify-center shrink-0 font-bold text-sm">
                0{i + 1}
              </div>
              <div>
                <h3 className="font-semibold text-lg text-navy-deep dark:text-white">{feature.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sub-Services (Sections 5 & 6) */}
      {service.subServices && service.subServices.length > 0 && (
        <section className="py-20 bg-surface-alt dark:bg-navy-deep/40 border-y border-border dark:border-navy">
          <div className="container-page">
            <div className="max-w-3xl mb-12">
              <div className="eyebrow">Deep Expertise</div>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-deep dark:text-white">
                Specialized Solutions
              </h2>
              <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
                Tailored expertise to solve specific challenges within {service.title}.
              </p>
            </div>

            <div className="space-y-12">
              {service.subServices.map((sub, idx) => (
                <div key={idx} className="bg-white dark:bg-navy-deep p-8 md:p-10 rounded-3xl border border-border dark:border-navy shadow-sm">
                  <h3 className="text-2xl font-bold text-navy-deep dark:text-white">{sub.headline}</h3>
                  <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">{sub.intro}</p>
                  
                  <div className="mt-8">
                    <h4 className="text-sm font-semibold text-navy-deep dark:text-white uppercase tracking-wider mb-4">What&apos;s Included</h4>
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {sub.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {sub.cta && (
                    <div className="mt-8 pt-8 border-t border-slate-100 dark:border-navy">
                      <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-navy-deep dark:bg-navy hover:bg-navy dark:hover:bg-slate-700 transition-colors text-sm">
                        {sub.cta} <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Jurisdiction Matrix */}
      <section className="py-20 bg-surface-alt dark:bg-navy-deep/60 border-y border-border dark:border-navy">
        <div className="container-page">
          <div className="max-w-3xl mb-12">
            <div className="eyebrow">Supported Jurisdictions</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-deep dark:text-white">
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
                className="p-6 rounded-2xl bg-white dark:bg-navy-deep border border-border dark:border-navy shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-3xl leading-none">{j.flag}</span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-navy text-slate-700 dark:text-slate-300">
                      {j.duration}
                    </span>
                  </div>
                  <h4 className="font-semibold text-lg text-navy-deep dark:text-white">{j.country}</h4>
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{j.note}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-navy flex items-center justify-between text-sm">
                  <span className="text-xs text-slate-500">Starting from</span>
                  <span className="font-bold text-orange">{j.priceStarting}</span>
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
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-deep dark:text-white">
            How We Deliver {service.title}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {service.processSteps.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-white dark:bg-navy-deep border border-border dark:border-navy shadow-sm relative"
            >
              <div className="font-display text-orange text-4xl font-bold mb-3">{step.step}</div>
              <h3 className="font-semibold text-base text-navy-deep dark:text-white">{step.title}</h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-navy-deep text-white">
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
                    ? "bg-navy border-2 border-orange-500 shadow-2xl shadow-orange/20"
                    : "bg-navy-deep border border-navy"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-orange text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
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

                <div className="mt-8 pt-6 border-t border-navy">
                  <Link
                    href="/contact"
                    className={`w-full py-3 px-4 rounded-xl text-center text-xs font-semibold block transition-all ${
                      pkg.popular
                        ? "bg-orange hover:bg-orange-600 text-white shadow-md"
                        : "bg-navy hover:bg-slate-700 text-white border border-slate-700"
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
          <h2 className="mt-3 text-3xl font-bold text-navy-deep dark:text-white">
            Common Questions About {service.title}
          </h2>
        </div>

        <div className="space-y-4">
          {service.faqs.map((faq) => (
            <div
              key={faq.q}
              className="p-6 rounded-2xl bg-white dark:bg-navy-deep border border-border dark:border-navy shadow-sm"
            >
              <h3 className="font-semibold text-base text-navy-deep dark:text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-orange shrink-0" />
                <span>{faq.q}</span>
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA — Never let the page end without a next step */}
      <section className="py-16 bg-navy-deep">
        <div className="container-page">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5">
            <div>
              <div className="eyebrow !text-orange-400">Ready to get started?</div>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold text-white">
                Start Your {service.title} Today
              </h2>
              <p className="mt-3 text-slate-300 text-sm max-w-lg">
                Our specialists are ready to file, advise, and keep your business on the right side of every jurisdiction you operate in.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="btn-primary-cta text-sm"
              >
                Get Started <ArrowRight className="w-4 h-4" />
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

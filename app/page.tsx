import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Receipt,
  Shield,
  MapPin,
  Landmark,
  Calculator,
  ShoppingBag,
  Sparkles,
  Briefcase,
  Globe2,
  Lock,
  Users2,
  LucideIcon,
} from "lucide-react";
import { FAQSection } from "./FAQSection";
import { TrustSignals } from "@/components/site/TrustSignals";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { servicesData } from "@/lib/data/services";
import { countriesData } from "@/lib/data/countries";

export const metadata: Metadata = {
  title: "Elite Filing — Form, Launch, and Scale Your Business Globally",
  description:
    "Elite Filing helps founders register companies, manage tax and compliance, and expand across the US, UK, UAE, Canada, and Pakistan — with transparent pricing and dedicated specialists.",
  openGraph: {
    title: "Elite Filing — Form, Launch, and Scale Your Business Globally",
    description:
      "Elite Filing helps founders register companies, manage tax and compliance, and expand across the US, UK, UAE, Canada, and Pakistan — with transparent pricing and dedicated specialists.",
  },
};

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

const why = [
  { icon: Globe2, title: "Proven Across Global Markets", desc: "Hands-on filing experience in five jurisdictions — advice grounded in real filings, not templates." },
  { icon: Receipt, title: "Transparent, Upfront Pricing", desc: "You'll always know what you're paying for. No hidden add-ons, no surprise renewal fees." },
  { icon: Lock, title: "Confidentiality by Default", desc: "Sensitive company and personal data handled with strict confidentiality at every step." },
  { icon: Users2, title: "One Team, Every Stage", desc: "From formation to compliance, work with specialists who already know your business." },
];

const steps = [
  { n: "01", t: "Tell Us What You Need", d: "Choose your service and country, then complete a short online application. Most forms take under five minutes." },
  { n: "02", t: "We Prepare and File", d: "Our specialists prepare your documents, file with the relevant authority, and keep you updated at every stage." },
  { n: "03", t: "You're Ready to Operate", d: "Once approved, you receive your registration documents and, if needed, ongoing tax, compliance, and banking support." },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSignals />
      <Overview />
      <ServicesGrid />
      <Countries />
      <WhyChoose />
      <HowItWorks />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[620px] text-white overflow-hidden bg-slate-900">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/back.jpg"
          alt="Business background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[2px]" /> 
      </div>

      <div className="container-page pt-20 md:pt-28 pb-24 md:pb-36 relative z-10">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-semibold uppercase tracking-wider mb-6">
            <span>Corporate Services</span> · <span>Business Consulting</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[1.02] font-semibold text-white">
            Form, Structure, and <span className="text-orange">Scale Your Business</span> Across Global Markets.
          </h1>

          <p className="mt-7 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            Elite Filing helps entrepreneurs, established companies, and global investors register
            companies, manage compliance, and expand with confidence across the US, UK, UAE, Canada,
            and Pakistan.
          </p>
          
          <div className="mt-9 flex flex-wrap gap-3.5">
            <Link href="/pricing" className="btn-accent text-sm">
              Start Your Company <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-ghost !text-white !border-white/25 hover:!bg-white/10 text-sm">
              Book a Free Consultation
            </Link>
          </div>
          
          <p className="mt-6 text-xs text-white/60 max-w-xl">
            Transparent upfront pricing, zero hidden charges, and a dedicated in-country specialist managing every filing.
          </p>
        </div>

        <div className="pointer-events-none absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-orange-500/20 blur-3xl animate-floaty" />
      </div>
    </section>
  );
}

function Overview() {
  return (
    <section className="section-pad">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr] items-center">
        <div>
          <div className="eyebrow">What we do</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight text-slate-900 dark:text-white">
            One partner for every stage of your business.
          </h2>
        </div>
        <div className="space-y-5 text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            Elite Filing is a corporate services and business consulting firm built for founders who
            need more than a form-filling service. We help you choose the right jurisdiction, register
            correctly the first time, and stay compliant year after year.
          </p>
          <p>
            From your first LLC or private limited company to trademark protection, tax registration,
            business banking, and ongoing bookkeeping — our team manages the process so you can focus
            on building your business.
          </p>
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="section-pad bg-slate-50 dark:bg-slate-900/50">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="eyebrow">Nine Core Categories</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white">What you can do with Elite Filing</h2>
          </div>
          <Link href="/services" className="btn-ghost">Explore all services <ArrowRight className="w-4 h-4" /></Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((s) => {
            const IconComponent = iconMap[s.iconName] || Building2;
            return (
              <article key={s.slug} className="card-surface p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group hover:border-orange-500/50 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">{s.title}</h3>
                  <p className="mt-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{s.shortDesc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <Link href={`/services/${s.slug}`} className="inline-flex items-center gap-1 text-xs font-semibold text-orange-500 hover:text-orange-600">
                    <span>View Category Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Countries() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="eyebrow">Countries We Cover</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white">Wherever you want to build, we take you there.</h2>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
              We currently support company formation, taxation, trademark, and banking across five key markets.
            </p>
          </div>
          <Link href="/countries" className="btn-ghost">View All Country Guides <ArrowRight className="w-4 h-4" /></Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {countriesData.map((c) => (
            <Link key={c.slug} href={`/countries/${c.slug}`} className="card-surface p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 flex items-start gap-4 transition-all">
              <div className="text-4xl leading-none">{c.flag}</div>
              <div>
                <div className="font-bold text-slate-900 dark:text-white text-lg">{c.name}</div>
                <div className="text-xs text-orange-500 font-medium mt-0.5">{c.tagline}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">{c.stats[0]?.label}: <strong>{c.stats[0]?.key}</strong></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="section-pad bg-slate-950 text-white relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full bg-orange-500/15 blur-3xl" />
      <div className="container-page relative">
        <div className="max-w-2xl">
          <div className="eyebrow !text-orange-400">Why Elite Filing</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-white">Why founders choose Elite Filing.</h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {why.map((w) => (
            <div key={w.title} className="group">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-orange-400 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <w.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{w.title}</h3>
              <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="section-pad bg-slate-50 dark:bg-slate-900/50">
      <div className="container-page">
        <div className="max-w-2xl mb-14">
          <div className="eyebrow">How it works</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white">From application to approved, in three steps.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative">
              <div className="font-display text-orange-500 text-5xl font-bold">{s.n}</div>
              <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">{s.t}</h3>
              <p className="mt-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 to-slate-950 p-10 md:p-16 text-white border border-slate-800 shadow-2xl">
          <div className="pointer-events-none absolute -right-20 -top-20 w-[420px] h-[420px] rounded-full bg-orange-500/25 blur-3xl" />
          <div className="relative max-w-2xl">
            <div className="eyebrow !text-orange-400">Ready when you are</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-white">
              Your business, registered right, wherever you want to grow.
            </h2>
            <p className="mt-5 text-slate-300 text-base md:text-lg">
              Join thousands of founders around the world who trust Elite Filing to handle legal paperwork — so they can focus on building.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link href="/pricing" className="btn-accent text-sm">Start Your Company Today <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/contact" className="btn-ghost !text-white !border-white/25 hover:!bg-white/10 text-sm">Book a Free Consultation</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

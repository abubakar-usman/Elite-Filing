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
import { IndustriesSlider } from "@/components/site/IndustriesSlider";

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

const lifecycleSteps = [
  { n: "01", t: "Start", d: "Strategic incorporation, holding company formation, and jurisdictional structuring for global entry." },
  { n: "02", t: "Operate", d: "Developing robust SOPs, corporate governance charters, and internal financial controls." },
  { n: "03", t: "Scale", d: "Navigating regulatory compliance, managing cross-border tax, and raising institutional capital." },
  { n: "04", t: "Expand", d: "Aggressive market scaling, M&A advisory, post-merger integration, and digital transformation." },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSignals />
      <Overview />
      <ServicesGrid />
      <IndustriesSlider />
      <Countries />
      <WhyChoose />
      <HowItWorks />
      <TestimonialsSection />
      <ConsultationCTA />
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
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
          alt="Modern Corporate Boardroom"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />
      </div>

      <div className="container-page pt-20 md:pt-32 pb-24 md:pb-40 relative z-10">
        <div className="max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-semibold uppercase tracking-wider mb-8 shadow-sm">
            <span>Form</span> · <span>Launch</span> · <span>Grow</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[1.05] font-semibold text-white tracking-tight">
            Architecting the Future of <span className="text-orange">Global Enterprise.</span>
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed font-light">
            Transforming visionary companies into globally compliant, scalable, and resilient organizations. Elite Filing is your strategic partner for cross-border expansion, corporate governance, and complex structuring.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/schedule" className="btn-accent text-base px-8 py-4 shadow-xl shadow-orange-500/20">
              Book an Advisory Session <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/services" className="btn-ghost !text-white !border-white/20 hover:!bg-white/10 text-base px-8 py-4 backdrop-blur-md">
              Explore Our Services
            </Link>
          </div>

          <p className="mt-8 text-sm text-slate-400 max-w-xl">
            Trusted by venture-backed startups and multinational corporations across the US, UK, UAE, Canada, and Pakistan.
          </p>
        </div>

        <div className="pointer-events-none absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-orange-500/20 blur-3xl animate-floaty" />
      </div>
    </section>
  );
}

function Overview() {
  return (
    <section className="section-pad animate-fade-up">
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
    <section className="section-pad bg-slate-50 dark:bg-slate-900/50 animate-fade-up">
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
              <article key={s.slug} className="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-orange-500/50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col">
                {/* Card Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image src={s.image || "/back.jpg"} alt={s.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent group-hover:from-transparent transition-all duration-500" />
                </div>
                {/* Card Body */}
                <div className="p-8 flex flex-col flex-1">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors mb-5">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">{s.title}</h3>
                    <p className="mt-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{s.shortDesc}</p>
                  </div>
                  <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 mt-6">
                    <Link href={`/services/${s.slug}`} className="inline-flex items-center gap-1 text-xs font-semibold text-orange-500 hover:text-orange-600">
                      <span>View Category Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
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
    <section className="section-pad animate-fade-up">
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
            <Link key={c.slug} href={`/countries/${c.slug}`} className="card-surface p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl leading-none">{c.flag}</div>
              <div>
                <div className="font-bold text-slate-900 dark:text-white text-lg">{c.name}</div>
                <div className="text-xs text-orange-500 font-medium mt-0.5">{c.tagline}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">{c.stats[0]?.label}: <strong>{c.stats[0]?.key}</strong></div>
              </div>
            </Link>
          ))}
          {/* Coming Soon Card */}
          <div className="card-surface p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex flex-col justify-center items-center text-center opacity-80 min-h-[120px]">
            <div className="flex gap-2 text-2xl mb-2">
              <span>🇫🇷</span>
              <span>🇩🇪</span>
              <span>🇹🇷</span>
            </div>
            <div className="font-bold text-slate-900 dark:text-white text-base">France, Germany & Turkey</div>
            <div className="text-[10px] uppercase tracking-wider font-bold text-slate-500 mt-1">Launching Soon</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="section-pad bg-slate-950 text-white relative overflow-hidden animate-fade-up">
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full bg-orange-500/15 blur-3xl" />
      <div className="container-page relative">
        <div className="max-w-2xl">
          <div className="eyebrow !text-orange-400">Why Elite Filing</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-white">Why founders choose Elite Filing.</h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {why.map((w) => (
            <div key={w.title} className="group hover:-translate-y-1 transition-transform duration-300 p-6 rounded-2xl hover:bg-white/5">
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
          <div className="eyebrow">The Business Lifecycle</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white">A long-term partner from formation to global expansion.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {lifecycleSteps.map((s, idx) => (
            <div 
              key={s.n} 
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative hover:border-orange-500/30 hover:shadow-lg hover:-translate-y-1 transition-all animate-fade-up"
              style={{ animationDelay: `${idx * 150}ms`, animationFillMode: "both" }}
            >
              <div className="font-display text-orange-500 text-5xl font-bold opacity-80">{s.n}</div>
              <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">{s.t}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="section-pad animate-fade-up">
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

function ConsultationCTA() {
  return (
    <section className="section-pad bg-orange-500/5 dark:bg-orange-500/10 border-y border-orange-500/10">
      <div className="container-page text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white">
          Not Sure Where to Start?
        </h2>
        <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Book a free consultation and our team will help you choose the right jurisdiction, entity type, and service package for your goals.
        </p>
        <div className="mt-8">
          <Link href="/contact" className="btn-accent">
            Book a Free Consultation <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

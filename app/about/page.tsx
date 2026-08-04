import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Image3DCard } from "@/components/site/Image3DCard";
import { TeamAnimatedShowcase } from "@/components/site/TeamAnimatedShowcase";
import {
  Compass,
  HeartHandshake,
  ShieldCheck,
  Globe2,
  FileCheck,
  Users,
  Lock,
  Award,
  CheckCircle2,
  Quote,
  ArrowRight,
  Sparkles
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Elite Filing — Built for Founders Who Refuse to Cut Corners",
  description:
    "Learn how Elite Filing helps global founders form, structure, and scale companies across five jurisdictions with transparent pricing and dedicated specialists.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Elite Filing",
    description:
      "A corporate services and consulting firm built for founders who want their business done right — the first time.",
  },
};

const values = [
  { icon: Compass, t: "Transparency", d: "Clear pricing, clear timelines, no fine print surprises." },
  { icon: ShieldCheck, t: "Precision", d: "Every filing checked against the current requirements of the relevant authority." },
  { icon: Lock, t: "Confidentiality", d: "Your business and personal information is handled with strict discretion." },
  { icon: HeartHandshake, t: "Partnership", d: "We aim to be a long-term partner, not a one-time transaction." },
];

const differentiators = [
  {
    icon: Globe2,
    t: "Multi-Jurisdictional Expertise",
    d: "Deep, practical experience across offshore formations, international tax compliance, and cross-border structuring.",
  },
  {
    icon: FileCheck,
    t: "Compliance-First Approach",
    d: "We build your structure to stay compliant, not just to get approved. Fewer surprises down the line.",
  },
  {
    icon: Users,
    t: "Personalised Support",
    d: "Every client is assigned a dedicated point of contact who understands their business model.",
  },
  {
    icon: Lock,
    t: "Confidentiality and Trust",
    d: "We treat every document and detail you share with the discretion it deserves.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      
      {/* ── Refined Hero Section ── */}
      <section 
        className="relative w-full overflow-hidden bg-[#030b20] flex flex-col justify-center border-b border-white/10"
        style={{ minHeight: "clamp(450px, 55vh, 600px)" }}
      >
        {/* Background Image: Highly relevant to corporate consulting, legal filing, and business strategy */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920"
            alt="Corporate Business Consulting and Filing"
            fill
            priority
            className="object-cover object-center opacity-30 mix-blend-luminosity"
          />
          {/* Brand Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030b20] via-[#082255]/90 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030b20] via-transparent to-transparent z-10 opacity-80" />
        </div>

        <div className="container-page relative z-20 py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-5 shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-[#F07228]" />
              <span className="text-[11.5px] font-bold text-white uppercase tracking-widest">About Elite Filing</span>
            </div>
            
            {/* Scaled down heading */}
            <h1 className="font-display text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-[1.15] drop-shadow-lg">
              Built for Founders Who Refuse to <span className="text-[#F07228]">Cut Corners.</span>
            </h1>
            
            {/* Scaled down description */}
            <p className="mt-5 text-base md:text-[17px] text-blue-100/90 leading-relaxed font-light max-w-xl drop-shadow-md">
              Elite Filing is a corporate services and business consulting firm helping entrepreneurs and investors form, structure, and scale companies across the world&apos;s leading markets.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Story Section ── */}
      <section className="section-pad bg-white dark:bg-slate-950">
        <div className="container-page grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 space-y-7">
            <div>
              <div className="eyebrow !text-[#F07228] flex items-center gap-2">
                <div className="w-6 h-px bg-[#F07228]" /> Our Story
              </div>
              <h2 className="mt-3 font-display text-3xl md:text-[36px] font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight">
                Why Elite Filing Exists
              </h2>
            </div>
            
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15.5px]">
              <p>
                Registering and running a compliant business across international markets should not require a legal team of your own. Founders too often lose weeks navigating unfamiliar government portals, inconsistent advice, and service providers who disappear once the initial filing is complete. Elite Filing was founded to remove that friction.
              </p>
              <p>
                We pair multi-jurisdictional expertise with a disciplined, transparent process, so entrepreneurs, established companies, e-commerce sellers, and global investors can register a company, register for tax, protect their brand, and remain compliant without the delays and back-and-forth that typically accompany this work.
              </p>
              <p className="text-slate-500 dark:text-slate-400 font-medium italic pt-2 border-l-2 border-[#0e3b96] pl-4 text-[14.5px]">
                We currently operate across the United States, United Kingdom, United Arab Emirates, Canada, and Pakistan, and we are actively expanding into new markets, including France, Germany, and Turkey.
              </p>
            </div>
            
            <div className="pt-3 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                <div className="text-2xl font-display font-bold text-[#0e3b96] dark:text-blue-400">5+</div>
                <div className="text-[12.5px] font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">Global Jurisdictions</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                <div className="text-2xl font-display font-bold text-[#0e3b96] dark:text-blue-400">100%</div>
                <div className="text-[12.5px] font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">Compliance Rate</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 bg-[#0e3b96]/5 rounded-3xl -rotate-2 scale-105 transition-transform duration-500 hover:rotate-0" />
            <div className="relative z-10">
              <Image3DCard
                src="/DSC_8155.JPG"
                alt="Elite Filing Operations Headquarters"
                title="Global Corporate Headquarters"
                subtitle="Processing filings with precision and dedication."
                badge="Elite Headquarters"
                aspectRatio="aspect-[4/3]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CEO Spotlight Showcase ── */}
      <section className="section-pad relative overflow-hidden" style={{ background: "linear-gradient(180deg, #030b20 0%, #082255 100%)" }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F07228]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0e3b96]/40 rounded-full blur-[100px] pointer-events-none" />

        <div className="container-page relative z-10">
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5">
              <Image3DCard
                src="/DSC_8242.JPG"
                alt="Founder & CEO of Elite Filing"
                title="Najeeb Ullah Khan Salar"
                subtitle="Founder & Chief Executive Officer"
                badge="Leadership"
                aspectRatio="aspect-[3/4]"
                ceoVariant={true}
                textBelow={false}
                priority
              />
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-[#F07228]/10 text-[#F88D4F] border border-[#F07228]/20">
                <Award className="w-3.5 h-3.5" /> Leadership & Vision
              </div>

              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-[42px] font-bold text-white tracking-tight">
                  Najeeb Ullah Khan Salar
                </h2>
                <p className="text-[#F07228] font-semibold text-[16px] md:text-[17px] mt-1.5">
                  Founder & Chief Executive Officer
                </p>
              </div>

              <div className="relative p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl">
                <Quote className="w-8 h-8 text-[#F07228]/20 absolute top-5 right-5" />
                <p className="text-slate-200 text-[16px] md:text-[17px] italic leading-relaxed relative z-10">
                  &ldquo;Our vision at Elite Filing is to eliminate border friction for founders worldwide. Whether you are forming a Delaware LLC, a UK LTD, or a UAE Freezone entity, you deserve the exact same rigor, transparency, and personal attention that major corporations enjoy.&rdquo;
                </p>
              </div>

              <div className="space-y-3.5 text-[14.5px] text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#F07228] shrink-0 mt-0.5" />
                  <span><strong className="text-white">10+ Years Experience:</strong> Cross-border entity structuring & global compliance.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#F07228] shrink-0 mt-0.5" />
                  <span><strong className="text-white">Transparent Operations:</strong> Zero hidden fees, clear deadlines, and hands-on founder guidance.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#F07228] shrink-0 mt-0.5" />
                  <span><strong className="text-white">Global Jurisdictions:</strong> US, UK, UAE, Canada, Pakistan & expanding European markets.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Operational Specialists ── */}
      <section id="specialists" className="section-pad bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="container-page space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <div className="eyebrow !text-[#0e3b96] dark:!text-blue-400 justify-center">
              <Users className="w-4 h-4" /> Operational Specialists & Advisors
            </div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-[40px] font-extrabold text-slate-950 dark:text-white tracking-tight">
              Expertise in Action
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 text-base md:text-[17px] leading-relaxed">
              Explore how our corporate advisors, tax specialists, and legal-tech engineers manage every step of your entity formation.
            </p>
          </div>
          <TeamAnimatedShowcase />
        </div>
      </section>

      {/* ── Our Mission & Differentiators ── */}
      <section className="section-pad bg-white dark:bg-slate-950">
        <div className="container-page">
          
          {/* Mission Statement */}
          <div className="text-center max-w-4xl mx-auto mb-20 p-8 md:p-12 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-[#0e3b96]/10 text-[#0e3b96] dark:bg-blue-900/30 dark:text-blue-300 mb-5">
              Our Mission
            </div>
            <p className="text-xl md:text-2xl lg:text-[28px] font-display leading-relaxed text-slate-900 dark:text-white">
              Our mission is simple: give businesses of every size access to the same level of corporate
              expertise, compliance discipline, and personalised service that was once reserved for companies
              with in-house legal and finance teams. Whether you are filing your first LLC or managing entities
              across four countries, we hold ourselves to the same standard of precision and care.
            </p>
          </div>

          {/* What Sets Us Apart */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-950 dark:text-white">
                A standard of service you won&apos;t find elsewhere.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {differentiators.map((d) => (
                <div key={d.t} className="flex flex-col gap-4 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md hover:border-[#0e3b96]/30 transition-all duration-300 group">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-[#0e3b96]/5 group-hover:bg-[#0e3b96] text-[#0e3b96] group-hover:text-white flex items-center justify-center transition-colors duration-300 border border-[#0e3b96]/10">
                    <d.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[17px] font-bold text-slate-900 dark:text-white mb-2">{d.t}</h3>
                    <p className="text-[14.5px] text-slate-600 dark:text-slate-400 leading-relaxed">{d.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Values */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-950 dark:text-white">
                Four values that show up in every filing.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => (
                <div key={v.t} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="w-10 h-10 rounded-lg bg-[#F07228]/10 text-[#F07228] flex items-center justify-center mb-4">
                    <v.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-[17px] font-bold text-slate-900 dark:text-white mb-1.5">{v.t}</h3>
                  <p className="text-[14.5px] text-slate-600 dark:text-slate-400 leading-relaxed">{v.d}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Tightened Final CTA ── */}
      <section className="section-pad bg-white dark:bg-slate-950 pb-24">
        <div className="container-page">
          <div 
            className="relative overflow-hidden rounded-3xl p-10 md:p-14 text-center text-white border border-[#0e3b96]/30 shadow-xl max-w-5xl mx-auto"
            style={{ background: "linear-gradient(135deg, #030b20 0%, #0e3b96 100%)" }}
          >
            <div className="pointer-events-none absolute -right-32 -top-32 w-[400px] h-[400px] rounded-full bg-[#F07228]/20 blur-[100px]" />
            <div className="pointer-events-none absolute -left-32 -bottom-32 w-[400px] h-[400px] rounded-full bg-[#1145AC]/40 blur-[100px]" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-5">
              <span className="inline-block font-bold uppercase tracking-widest text-[#F88D4F] text-[11.5px]">
                Get Started Today
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
                Ready to Work With a Team That Treats Your Business Like It Matters?
              </h2>
              <p className="text-blue-100/80 text-[15.5px] md:text-[17px] max-w-xl mx-auto font-light">
                Schedule a consultation to discuss your incorporation, tax compliance, or multi-jurisdiction expansion goals.
              </p>
              <div className="mt-8 flex justify-center">
                <Link 
                  href="/contact" 
                  className="group inline-flex items-center gap-2 px-6 py-3.5 bg-[#F07228] text-white font-bold text-[15px] rounded-xl transition-all duration-300 hover:bg-[#d45510] hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-8px_rgba(240,114,40,0.6)]"
                >
                  Book a Free Consultation
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
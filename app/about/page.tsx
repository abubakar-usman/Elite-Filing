import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
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
    <>
      <PageHero
        eyebrow="About Elite Filing"
        title="Built for Founders Who Refuse to Cut Corners"
        description="Elite Filing is a corporate services and business consulting firm helping entrepreneurs and investors form, structure, and scale companies across the world's leading markets."
      />

      {/* Our Story Section with Picture */}
      <section className="section-pad">

        <div className="container-page grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="eyebrow">Our Story</div>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold">Why Elite Filing Exists</h2>
            </div>
            <div className="space-y-5 text-foreground/80 leading-relaxed text-lg">
              <p>
                Registering and running a compliant business across international markets should not require a legal team of your own. Founders too often lose weeks navigating unfamiliar government portals, inconsistent advice, and service providers who disappear once the initial filing is complete. Elite Filing was founded to remove that friction.
              </p>
              <p>
                We pair multi-jurisdictional expertise with a disciplined, transparent process, so entrepreneurs, established companies, e-commerce sellers, and global investors can register a company, register for tax, protect their brand, and remain compliant without the delays and back-and-forth that typically accompany this work.
              </p>
              <p className="text-base text-foreground/65 pt-2">
                We currently operate across the United States, United Kingdom, United Arab Emirates, Canada, and Pakistan, and we are actively expanding into new markets, including France, Germany, and Turkey.
              </p>
            </div>
            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-surface-alt border border-border">
                <div className="text-2xl font-bold text-navy-deep">5+</div>
                <div className="text-sm text-foreground/70">Global Jurisdictions</div>
              </div>
              <div className="p-4 rounded-xl bg-surface-alt border border-border">
                <div className="text-2xl font-bold text-navy-deep">100%</div>
                <div className="text-sm text-foreground/70">Compliance Rate</div>
              </div>
            </div>
          </div>

          {/* Picture in Our Story Section */}
          <div className="lg:col-span-6">
            <Image3DCard
              src="/DSC_8155.JPG"
              alt="Elite Filing Operations Headquarters and Culture"
              title="Global Corporate Headquarters"
              subtitle="Where our corporate specialists process filings with precision and dedication."
              badge="Elite Headquarters"
              aspectRatio="aspect-[4/3]"
              priority
            />
          </div>
        </div>
      </section>

      {/* CEO Spotlight Showcase */}
      <section className="section-pad bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-page relative z-10">
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            {/* CEO 3D Card (Solo Picture of CEO) */}
            <div className="lg:col-span-5">
              <Image3DCard
                src="/DSC_8242.JPG"
                alt="Founder & CEO of Elite Filing"
                title="Najeeb Ullah Khan Salar"
                subtitle="Founder & Chief Executive Officer"
                badge="Founder & CEO"
                aspectRatio="aspect-[3/4]"
                ceoVariant={true}
                textBelow={false}
                priority
              />
            </div>

            {/* CEO Bio & Statement */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <Award className="w-3.5 h-3.5" /> Leadership & Vision
              </div>

              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                  Muhammad Abubakar
                </h2>
                <p className="text-amber-400 font-medium text-lg mt-1">
                  Founder & Chief Executive Officer — Elite Filing
                </p>
              </div>

              <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <Quote className="w-8 h-8 text-amber-400/30 absolute top-4 right-4" />
                <p className="text-slate-200 text-base md:text-lg italic leading-relaxed relative z-10">
                  &ldquo;Our vision at Elite Filing is to eliminate border friction for founders worldwide. Whether you are forming a Delaware LLC, a UK LTD, or a UAE Freezone entity, you deserve the exact same rigor, transparency, and personal attention that major corporations enjoy.&rdquo;
                </p>
              </div>

              <div className="space-y-2.5 text-sm text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>10+ Years Experience:</strong> Cross-border entity structuring & global compliance.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>Transparent Operations:</strong> Zero hidden fees, clear deadlines, and hands-on founder guidance.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>Global Jurisdictions:</strong> US, UK, UAE, Canada, Pakistan & expanding European markets.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Specialists & Advisors Section (ONLY ONE PICTURE VISIBLE AT A TIME WITH ANIMATION) */}
      <section id="specialists" className="section-pad bg-surface-alt border-y border-border">
        <div className="container-page space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="eyebrow justify-center">
              <Users className="w-4 h-4" /> Operational Specialists & Advisors
            </div>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-navy-deep tracking-tight">
              Expertise in Action
            </h2>
            <p className="mt-3 text-foreground/75 text-lg leading-relaxed">
              Explore how our corporate advisors, tax specialists, and legal-tech engineers manage every step of your entity formation.
            </p>
          </div>

          {/* Animated Single Card Showcase */}
          <TeamAnimatedShowcase />
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="section-pad">

        <div className="container-page text-center max-w-4xl mx-auto">
          <div className="eyebrow">Our Mission</div>
          <p className="mt-6 text-2xl md:text-3xl font-medium leading-relaxed text-navy-deep">
            Our mission is simple: give businesses of every size access to the same level of corporate expertise, compliance discipline, and personalised service that was once reserved for companies with in-house legal and finance teams.
          </p>

        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="eyebrow">What Sets Us Apart</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold max-w-2xl">
            A standard of service you won&apos;t find elsewhere.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {differentiators.map((d) => (
              <div key={d.t} className="flex gap-4 p-6 rounded-2xl border border-border bg-card shadow-sm">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-orange/10 text-orange flex items-center justify-center">
                  <d.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-deep">{d.t}</h3>
                  <p className="mt-2 text-foreground/70 leading-relaxed">{d.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-pad">
        <div className="container-page">
          <div className="eyebrow">Our Values</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold max-w-2xl">
            Four values that show up in every filing we touch.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.t} className="card-surface p-7">
                <div className="w-11 h-11 rounded-xl bg-orange/10 text-orange flex items-center justify-center">
                  <v.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy-deep">{v.t}</h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="section-pad">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-10 md:p-16 text-center text-white border border-white/10 shadow-2xl">
            {/* Ambient theme lighting */}
            <div className="pointer-events-none absolute -right-20 -top-20 w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 w-[400px] h-[400px] rounded-full bg-amber-500/15 blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-4">
              <span className="eyebrow !text-amber-400 justify-center">
                Get Started Today
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Ready to Work With a Team That Treats Your Business Like It Matters?
              </h2>
              <p className="text-slate-300 text-base md:text-lg max-w-xl mx-auto">
                Schedule a consultation to discuss your incorporation, tax compliance, or multi-jurisdiction expansion goals.
              </p>
              <div className="mt-8 flex justify-center pt-2">
                <Link href="/contact" className="btn-accent text-base">
                  Book a Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

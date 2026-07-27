import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { Compass, HeartHandshake, ShieldCheck, Sparkles, Globe2, FileCheck, Users, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "About Elite Filing — Built for Founders Who Refuse to Cut Corners",
  description:
    "Learn how Elite Filing helps global founders form, structure, and scale companies across five jurisdictions with transparent pricing and dedicated specialists.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Elite Filing",
    description: "A corporate services and consulting firm built for founders who want their business done right — the first time.",
  },
};

const values = [
  { icon: Compass, t: "Transparency", d: "Clear pricing, clear timelines, no fine print surprises." },
  { icon: ShieldCheck, t: "Precision", d: "Every filing checked against the current requirements of the relevant authority." },
  { icon: Lock, t: "Confidentiality", d: "Your business and personal information is handled with strict discretion." },
  { icon: HeartHandshake, t: "Partnership", d: "We aim to be a long-term partner, not a one-time transaction." },
];

const differentiators = [
  { icon: Globe2, t: "Multi-Jurisdictional Expertise", d: "Deep, practical experience across offshore formations, international tax compliance, and cross-border structuring, not just knowledge of a single market." },
  { icon: FileCheck, t: "Compliance-First Approach", d: "We build your structure to stay compliant, not just to get approved. That means fewer surprises down the line." },
  { icon: Users, t: "Personalised Support", d: "Every client is assigned a point of contact who understands their business, not a rotating queue of support agents." },
  { icon: Lock, t: "Confidentiality and Trust", d: "We treat every document and detail you share with the discretion it deserves." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Elite Filing"
        title="Built for Founders Who Refuse to Cut Corners"
        description="Elite Filing is a corporate services and business consulting firm helping entrepreneurs and investors form, structure, and scale companies across the world's leading markets."
      />

      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <div className="eyebrow">Our Story</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold">Why Elite Filing Exists</h2>
          </div>
          <div className="space-y-5 text-foreground/75 leading-relaxed">
            <p>
              Registering and running a compliant business across international markets should not require a legal team of your own. Founders too often lose weeks, and sometimes months, navigating unfamiliar government portals, inconsistent advice, and service providers who disappear once the initial filing is complete. Elite Filing was founded to remove that friction.
            </p>
            <p>
              We pair multi-jurisdictional expertise with a disciplined, transparent process, so entrepreneurs, established companies, ecommerce sellers, and global investors can register a company, register for tax, protect their brand, and remain compliant, without the delays and back-and-forth that typically accompany this work. We currently operate across the United States, United Kingdom, United Arab Emirates, Canada, and Pakistan, and we are actively expanding into new markets, including France, Germany, and Turkey.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-alt">
        <div className="container-page text-center max-w-4xl mx-auto">
          <div className="eyebrow">Our Mission</div>
          <p className="mt-6 text-2xl md:text-3xl font-medium leading-relaxed text-navy-deep">
            Our mission is simple: give businesses of every size access to the same level of corporate expertise, compliance discipline, and personalised service that was once reserved for companies with in-house legal and finance teams.
          </p>
          <p className="mt-6 text-lg text-foreground/70">
            Whether you are filing your first LLC or managing entities across four countries, we hold ourselves to the same standard of precision and care.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="eyebrow">What Sets Us Apart</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold max-w-2xl">A standard of service you won&apos;t find elsewhere.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {differentiators.map((d) => (
              <div key={d.t} className="flex gap-4 p-6 rounded-2xl border border-border">
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

      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="eyebrow">Our Values</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold max-w-2xl">Four values that show up in every filing we touch.</h2>
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

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <div className="eyebrow">Our Team</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold">The People Behind Elite Filing</h2>
          </div>
          <p className="text-foreground/75 leading-relaxed text-lg">
            Our team includes formation specialists, tax advisors, trademark professionals, and business consultants with direct experience in each of the jurisdictions we serve. Rather than generalists handling every market, we assign specialists who focus on specific countries and service areas, so your filing is handled by someone who genuinely knows the rules.
            <span className="text-foreground/55 italic"> (Individual team bios and photos to be added by the marketing team before launch.)</span>
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="rounded-3xl bg-surface-alt p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold max-w-2xl mx-auto">
              Ready to Work With a Team That Treats Your Business Like It Matters?
            </h2>
            <div className="mt-8 flex justify-center">
              <Link href="/contact" className="btn-accent">Book a Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

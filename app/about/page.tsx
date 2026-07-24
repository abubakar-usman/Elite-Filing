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
        title="Built for founders who refuse to cut corners."
        description="Elite Filing was founded on a simple premise: registering and running a business across borders should be precise, transparent, and free of surprises. We built the team, playbooks, and systems to make that real."
      />

      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <div className="eyebrow">Our story</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold">A firm shaped by real filings, not template libraries.</h2>
          </div>
          <div className="space-y-5 text-foreground/75 leading-relaxed">
            <p>
              We started Elite Filing after watching too many founders lose time, money, and momentum
              to providers that treated business formation like a checkout. Wrong entity choices,
              missed filings, invisible renewal fees — every one of them avoidable with the right team.
            </p>
            <p>
              Today, Elite Filing is a full-service corporate and consulting firm with hands-on
              experience across the US, UK, UAE, Canada, and Pakistan. We work with startups, ecommerce
              operators, and established multinationals — with the same standard of care for every one.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-alt">
        <div className="container-page text-center max-w-4xl mx-auto">
          <div className="eyebrow">Our Mission</div>
          <p className="mt-6 text-2xl md:text-3xl font-medium leading-relaxed text-navy-deep">
            Give businesses of every size access to the same level of corporate expertise, compliance discipline, and personalised service that was once reserved for companies with in-house legal and finance teams.
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
            <div className="eyebrow">Our team</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold">The people behind Elite Filing.</h2>
          </div>
          <p className="text-foreground/75 leading-relaxed text-lg">
            Elite Filing is a distributed team of corporate lawyers, chartered accountants, licensed
            registered agents, and business consultants. We hire locally in every jurisdiction we
            operate in — so when you file in the UAE, a UAE specialist is on the other side of the
            email. <span className="text-foreground/55 italic">(Individual team bios coming soon.)</span>
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="rounded-3xl bg-surface-alt p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold max-w-2xl mx-auto">
              Ready to work with a team that treats your business like it matters?
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

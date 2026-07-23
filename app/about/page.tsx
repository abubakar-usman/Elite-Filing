import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { Compass, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

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
  { icon: ShieldCheck, t: "Precision", d: "Filings prepared meticulously and reviewed twice before submission." },
  { icon: HeartHandshake, t: "Partnership", d: "You get a dedicated specialist, not a ticket number in a queue." },
  { icon: Compass, t: "Clarity", d: "Every fee, every timeline, and every decision explained in plain English." },
  { icon: Sparkles, t: "Ambition", d: "We back founders who want to build something that outlasts them." },
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

      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="eyebrow">What we stand for</div>
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

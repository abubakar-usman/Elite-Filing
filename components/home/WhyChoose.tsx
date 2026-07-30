import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe2, Receipt, Lock, Users2, LucideIcon } from "lucide-react";

const backgroundImage =
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop";

const reasons: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Globe2,
    title: "Proven Expertise Across Global Markets",
    desc: "Our team has hands-on experience registering and maintaining companies across five countries and counting, so you get advice grounded in real filings, not generic templates.",
  },
  {
    icon: Receipt,
    title: "Transparent, Upfront Pricing",
    desc: "You will always know what you are paying for before you commit. No hidden add-ons, no surprise renewal fees.",
  },
  {
    icon: Lock,
    title: "Confidentiality You Can Rely On",
    desc: "We handle sensitive company and personal information with strict confidentiality and secure document handling at every step.",
  },
  {
    icon: Users2,
    title: "One Team, Every Stage",
    desc: "From formation to trademark to ongoing compliance, you work with people who already know your business, instead of starting over with a new provider each time.",
  },
];

export function WhyChoose() {
  return (
    <section className="section-pad bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Business collaboration"
          fill
          className="object-cover opacity-10"
        />
      </div>
      
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full bg-blue-500/15 blur-3xl" />

      <div className="container-page relative z-10">
        <div className="max-w-2xl">
          <div className="eyebrow !text-blue-400">Why Elite Filing</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-white">
            Why Founders Choose Elite Filing
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((w) => (
            <div
              key={w.title}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/30"
            >
              {/* 1. CONSTANT ANIMATED GLOW (Always visible) */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-60 animate-pulse group-hover:animate-none" />
              
              {/* 2. HOVER OVERLAY (Light dark-shaded orange) */}
              <div className="absolute inset-0 bg-orange-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card Content */}
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/10 text-orange-400 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0.1)] group-hover:shadow-[0_0_25px_rgba(249,115,22,0.4)]">
                  <w.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white transition-colors group-hover:text-orange-50">
                  {w.title}
                </h3>
                <p className="mt-2.5 text-xs text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors">
                  {w.desc}
                </p>
              </div>
              
              {/* Decorative corner light */}
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-orange-500/10 blur-2xl group-hover:bg-orange-500/20 transition-all" />
            </div>
          ))}
        </div>

        <div className="mt-14 pt-10 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-slate-300 text-sm max-w-md">
            See the team and values behind every filing we touch.
          </p>
          <Link href="/about" className="btn-secondary-cta inline-flex items-center gap-2 text-sm transition-transform hover:translate-x-1">
            Meet the Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
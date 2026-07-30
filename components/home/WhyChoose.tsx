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
    <section className="section-pad bg-slate-950 text-white relative overflow-hidden animate-fade-up">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Business collaboration"
          fill
          className="object-cover opacity-10"
        />
      </div>
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
              className="group hover:-translate-y-1 transition-transform duration-300 p-6 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <w.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{w.title}</h3>
              <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-10 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-slate-300 text-sm max-w-md">
            See the team and values behind every filing we touch.
          </p>
          <Link href="/about" className="btn-secondary-cta inline-flex items-center gap-2 text-sm">
            Meet the Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

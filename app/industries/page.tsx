import type { Metadata } from "next";
import Link from "next/link";
import { industriesData } from "@/lib/data/industries";
import { ArrowRight, ShoppingBag, Cpu, Briefcase, Globe2, Building, Landmark, LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Industry Solutions — Elite Filing",
  description: "Specialized corporate structures, tax blueprints, and compliance for E-commerce, SaaS & Tech, Professional Services, Import/Export, Real Estate, and Financial Services.",
};

const iconMap: Record<string, LucideIcon> = {
  ShoppingBag,
  Cpu,
  Briefcase,
  Globe2,
  Building,
  Landmark,
};

export default function IndustriesOverviewPage() {
  return (
    <div className="py-12">
      {/* Hero */}
      <section className="container-page py-12 text-center max-w-4xl mx-auto">
        <div className="eyebrow mx-auto mb-4">Tailored Industry Blueprints</div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold text-navy-deep dark:text-white leading-tight">
          Corporate Structuring Built for <span className="text-orange">Your Specific Industry</span>.
        </h1>
        <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Every industry has distinct regulatory requirements, risk profiles, and payment gateway rules. We provide specialized legal entities and tax blueprints for 6 key sectors.
        </p>
      </section>

      {/* Industries Grid */}
      <section className="container-page py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industriesData.map((ind) => {
            const IconComponent = iconMap[ind.iconName] || Briefcase;
            return (
              <article
                key={ind.slug}
                className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between group hover:border-orange-500/50 hover:shadow-xl transition-all"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all mb-6">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">
                    {ind.title}
                  </h2>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {ind.shortDesc}
                  </p>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-xs font-semibold text-slate-500 block mb-2">Recommended Structure:</span>
                    <span className="text-xs font-bold text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full inline-block">
                      {ind.recommendedEntities[0]?.country} · {ind.recommendedEntities[0]?.entity}
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="inline-flex items-center justify-between w-full text-sm font-semibold text-orange-500 group-hover:text-orange-600"
                  >
                    <span>View Dedicated Industry Blueprint</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      {/* CTA Section */}
      <section className="container-page py-16">
        <div className="rounded-3xl bg-surface-alt p-10 md:p-14 text-center border border-border">
          <h2 className="text-3xl md:text-4xl font-semibold max-w-2xl mx-auto text-navy-deep dark:text-white">
            Don&apos;t See Your Industry Listed?
          </h2>
          <p className="mt-4 text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
            Our corporate structure team can build a custom blueprint for specialized sectors including web3, healthcare, and education.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/contact" className="btn-accent">
              Talk to Our Team <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { industriesData } from "@/lib/data/industries";
import { CheckCircle2, ArrowRight, ChevronRight, ShoppingBag, Cpu, Briefcase, Globe2, Building, Landmark, LucideIcon } from "lucide-react";
import { TrustSignals } from "@/components/site/TrustSignals";

const iconMap: Record<string, LucideIcon> = {
  ShoppingBag,
  Cpu,
  Briefcase,
  Globe2,
  Building,
  Landmark,
};

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industriesData.map((ind) => ({ slug: ind.slug }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const ind = industriesData.find((i) => i.slug === slug);
  if (!ind) return { title: "Industry Not Found" };

  return {
    title: `${ind.title} — Elite Filing Industry Solutions`,
    description: ind.shortDesc,
  };
}

export default async function DedicatedIndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const ind = industriesData.find((i) => i.slug === slug);

  if (!ind) {
    notFound();
  }

  const IconComponent = iconMap[ind.iconName] || Briefcase;

  return (
    <div className="pb-24">
      
      {/* Breadcrumb */}
      <div className="bg-slate-900 text-white py-4 border-b border-slate-800">
        <div className="container-page flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/industries" className="hover:text-white">Industries</Link>
          <ChevronRight className="w-3 h-3 text-orange-500" />
          <span className="text-white font-medium">{ind.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-slate-900 text-white py-16 md:py-24 border-b border-slate-800 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={ind.image || "/back.jpg"}
            alt={ind.title}
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-transparent" />
        </div>

        <div className="container-page max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-semibold uppercase tracking-wider mb-6">
            <IconComponent className="w-4 h-4" />
            <span>Dedicated Industry Blueprint</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white leading-tight">
            Corporate Solutions for <span className="text-orange">{ind.title}</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
            {ind.heroDesc}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-lg shadow-orange-500/25 text-sm"
            >
              <span>Build My {ind.title} Structure</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 text-sm"
            >
              Schedule Strategy Call
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <TrustSignals />

      {/* Recommended Entities */}
      <section className="container-page py-20">
        <div className="max-w-3xl mb-12">
          <div className="eyebrow">Optimal Structures</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Recommended Entities for {ind.title}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {ind.recommendedEntities.map((rec) => (
            <div
              key={rec.entity}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block mb-2">{rec.country}</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{rec.entity}</h3>
                <p className="mt-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{rec.why}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link href="/contact" className="inline-flex items-center gap-1 text-xs font-semibold text-orange-500 hover:text-orange-600">
                  <span>Select Structure</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions Provided */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800">
        <div className="container-page">
          <div className="max-w-3xl mb-12">
            <div className="eyebrow">Industry Capabilities</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Solutions Included in Our {ind.title} Package
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ind.solutionsProvided.map((sol) => (
              <div key={sol} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{sol}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Feature */}
      <section className="container-page py-20 max-w-4xl">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="pointer-events-none absolute -right-20 -top-20 w-80 h-80 rounded-full bg-orange-500/20 blur-3xl" />
          
          <div className="relative">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider">
              {ind.caseStudy.metrics}
            </span>

            <h3 className="mt-6 text-2xl sm:text-3xl font-bold text-white">
              Case Study: {ind.caseStudy.client}
            </h3>

            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              {ind.caseStudy.summary}
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white bg-orange-500 hover:bg-orange-600 shadow-md"
              >
                <span>Read Full Expansion Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

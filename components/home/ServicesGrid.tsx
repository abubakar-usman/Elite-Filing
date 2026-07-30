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
  LucideIcon,
} from "lucide-react";
import { servicesData } from "@/lib/data/services";

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

export function ServicesGrid() {
  return (
    <section className="section-pad bg-slate-50 dark:bg-slate-900/50 animate-fade-up">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="eyebrow">Nine Core Categories</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white">
              What You Can Do With Elite Filing
            </h2>
          </div>
          <Link href="/services" className="btn-ghost">
            Explore all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((s) => {
            const IconComponent = iconMap[s.iconName] || Building2;
            return (
              <article
                key={s.slug}
                className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-blue-500/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={s.image || "/back.jpg"}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent group-hover:from-transparent transition-all duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div>
                    <div className="w-11 h-11 rounded-lg bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors mb-5">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                      {s.title}
                    </h3>
                    <p className="mt-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {s.shortDesc}
                    </p>
                  </div>
                  <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 mt-6">
                    <Link
                      href={`/services/${s.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
                    >
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

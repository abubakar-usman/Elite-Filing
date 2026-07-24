import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/lib/data/services";
import { ArrowRight, CheckCircle2, Building2, Receipt, Shield, MapPin, Landmark, Calculator, ShoppingBag, Sparkles, Briefcase, LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Corporate Services — Elite Filing",
  description: "Explore Elite Filing's 9 core service categories: Company Formation, Tax & Compliance, Trademark & IP, Registered Agent, Business Banking, Accounting, Ecommerce Setup, Growth, and Consultancy.",
};

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

export default function ServicesPage() {
  return (
    <div className="py-12">
      {/* Hero */}
      <section className="container-page py-12 text-center max-w-4xl mx-auto">
        <div className="eyebrow mx-auto mb-4">Complete Services Architecture</div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold text-navy-deep dark:text-white leading-tight">
          Nine Specialized Services to <span className="text-orange">Form, Protect & Scale</span> Your Business.
        </h1>
        <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          From your initial corporate entity filing to tax registrations, international trademarks, business banking, and monthly bookkeeping — our specialists manage every stage.
        </p>
      </section>

      {/* Services Grid */}
      <section className="container-page py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName] || Building2;
            return (
              <article
                key={service.slug}
                className="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-orange-500/50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Card Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image src={service.image || "/back.jpg"} alt={service.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent group-hover:from-transparent transition-all duration-500" />
                </div>
                {/* Card Body */}
                <div className="p-8 flex flex-col flex-1">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all mb-6">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <span className="text-[10px] font-bold tracking-widest uppercase text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full">
                    {service.category} Service
                  </span>

                  <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <ul className="mt-6 space-y-2 text-xs text-slate-600 dark:text-slate-400">
                    {service.features.slice(0, 3).map((f) => (
                      <li key={f.title} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{f.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-between w-full text-sm font-semibold text-orange-500 group-hover:text-orange-600"
                  >
                    <span>View Dedicated Page & Pricing</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
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
            Not Sure Which Service You Need?
          </h2>
          <p className="mt-4 text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
            Our specialists can help you determine the exact setup required for your business goals and jurisdiction.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/contact" className="btn-accent">
              Talk to a Specialist <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

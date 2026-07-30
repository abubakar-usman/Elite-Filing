import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Overview() {
  return (
    <section className="section-pad animate-fade-up">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr] items-center">
        <div>
          <div className="eyebrow">What we do</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight text-slate-900 dark:text-white">
            One Partner for Every Stage of Your Business
          </h2>
          <div className="mt-8">
            <Link href="/services" className="btn-secondary-cta-dark inline-flex items-center gap-2 text-sm">
              See All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="space-y-5 text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            Elite Filing is a corporate services and business consulting firm built for founders who
            need more than a form-filling service. We help you choose the right jurisdiction,
            register your company correctly the first time, and stay compliant year after year. From
            your first LLC or private limited company to trademark protection, tax registration,
            business banking, and ongoing bookkeeping, our team manages the process so you can focus
            on building your business.
          </p>
          <p>
            We work with startups launching their first entity, ecommerce sellers expanding into new
            marketplaces, and established companies restructuring across multiple countries.
            Wherever you are in your journey, we bring the same commitment to precision,
            transparency, and professionalism.
          </p>
        </div>
      </div>
    </section>
  );
}

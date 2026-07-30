import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    n: "01",
    t: "Tell Us What You Need",
    d: "Choose your service and country, and complete a short online application. Most forms take less than five minutes.",
  },
  {
    n: "02",
    t: "We Prepare and File",
    d: "Our specialists prepare your documents, file with the relevant government body, and keep you updated at every stage.",
  },
  {
    n: "03",
    t: "You're Ready to Operate",
    d: "Once approved, you receive your registration documents and, if needed, ongoing support for tax, compliance, and banking.",
  },
];

export function HowItWorks() {
  return (
<section className="pt-16 pb-24 bg-white border-b border-slate-200">
  <div className="container-page">
    <div className="max-w-2xl mb-14">
      <div className="eyebrow">How It Works</div>
      <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-slate-900">
        From Application to Approved, in Three Steps
      </h2>
    </div>
    <div className="grid gap-6 md:grid-cols-3">
      {steps.map((s, idx) => (
        <div
          key={s.n}
          /* RESTORED: These are your original box classes */
          className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm relative hover:border-blue-500/30 hover:shadow-lg hover:-translate-y-1 transition-all animate-fade-up"
          style={{ animationDelay: `${idx * 150}ms`, animationFillMode: "both" }}
        >
          <div className="font-display text-blue-600 text-5xl font-bold opacity-80">
            {s.n}
          </div>
          <h3 className="mt-4 text-xl font-bold text-slate-900">{s.t}</h3>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">{s.d}</p>
        </div>
      ))}
    </div>
    <div className="mt-12 text-center">
      <Link href="/pricing" className="btn-secondary-cta-dark inline-flex items-center gap-2 text-sm">
        View Pricing & Get Started <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </div>
</section>
  );
}

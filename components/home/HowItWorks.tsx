import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    n: "01",
    t: "Tell Us What You Need",
    d: "Choose your service and country, and complete a short online application. Most forms take less than five minutes.",
    // Image: Professional working on an online application/laptop
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
  },
  {
    n: "02",
    t: "We Prepare and File",
    d: "Our specialists prepare your documents, file with the relevant government body, and keep you updated at every stage.",
    // Image: Formal documents being prepared and reviewed
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
  },
  {
    n: "03",
    t: "You're Ready to Operate",
    d: "Once approved, you receive your registration documents and, if needed, ongoing support for tax, compliance, and banking.",
    // Image: Confident business owner operating successfully
    img: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=800&auto=format&fit=crop",
  },
];

export function HowItWorks() {
  return (
    <section className="pt-16 pb-24 bg-white border-b border-slate-200">
      <div className="container-page">
        
        {/* Header Section */}
        <div className="max-w-2xl mb-14">
          <div className="eyebrow">How It Works</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-slate-900">
            From Application to Approved, in Three Steps
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s, idx) => (
            <div
              key={s.n}
              className="group flex flex-col rounded-2xl bg-white border border-slate-200 shadow-sm relative hover:border-orange/40 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 animate-fade-up overflow-hidden"
              style={{ animationDelay: `${idx * 150}ms`, animationFillMode: "both" }}
            >
              {/* Image Section */}
              <div className="relative h-52 w-full overflow-hidden border-b border-slate-100">
                <img 
                  src={s.img} 
                  alt={s.t}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content Section */}
              <div className="p-8 flex-1 flex flex-col bg-white">
                {/* Restored Large Visible Numbering with elegant hover */}
                <div className="font-display text-navy text-5xl font-bold opacity-80 group-hover:text-orange transition-colors duration-300">
                  {s.n}
                </div>
                
                <h3 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-navy-deep transition-colors duration-300">
                  {s.t}
                </h3>
                
                <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">
                  {s.d}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-12 text-center">
          <Link href="/pricing" className="btn-secondary-cta-dark group inline-flex items-center gap-2 text-sm">
            View Pricing & Get Started 
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
import { ShieldCheck, Globe2, Users, FileCheck } from "lucide-react";

export function TrustSignals() {
  const items = [
    {
      icon: Globe2,
      metric: "50+ Jurisdictions",
      label: "Global Corporate Coverage",
      desc: "Structuring cross-border entities across North America, Europe, Middle East, and Asia."
    },
    {
      icon: FileCheck,
      metric: "$2B+ Assets",
      label: "Under Advisory Structures",
      desc: "Protecting corporate wealth through optimized holding companies and SPVs."
    },
    {
      icon: ShieldCheck,
      metric: "99.8% Compliance",
      label: "Regulatory Audit Success",
      desc: "Rigorous state, federal, and international annual compliance management."
    },
    {
      icon: Users,
      metric: "500+ Enterprises",
      label: "Long-term Strategic Partners",
      desc: "Advising private equity, venture-backed startups, and multinational corporations."
    }
  ];

  return (
    <section className="py-10 border-y border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40">
      <div className="container-page">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <div
              key={item.metric}
              className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-orange-500/30 hover:shadow-md hover:-translate-y-1 transition-all animate-fade-up"
              style={{ animationDelay: `${idx * 150}ms`, animationFillMode: "both" }}
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl font-bold font-display text-slate-900 dark:text-white leading-tight">
                  {item.metric}
                </div>
                <div className="text-xs font-semibold text-orange-500 uppercase tracking-wider mt-0.5">
                  {item.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

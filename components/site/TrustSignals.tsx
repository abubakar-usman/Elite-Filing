import { ShieldCheck, Globe2, Users, FileCheck } from "lucide-react";

export function TrustSignals() {
  const items = [
    {
      icon: Globe2,
      metric: "Global Founders",
      label: "Trusted by founders in over 20 countries",
      desc: "Providing reliable corporate services for entrepreneurs worldwide."
    },
    {
      icon: FileCheck,
      metric: "Multi-Market",
      label: "Registrations completed across 5+ jurisdictions",
      desc: "US, UK, UAE, Canada, and Pakistan."
    },
    {
      icon: ShieldCheck,
      metric: "Expert Team",
      label: "Licensed partners and in-house compliance specialists",
      desc: "Direct filing with state departments and registries."
    },
    {
      icon: Users,
      metric: "Clear Pricing",
      label: "Transparent, upfront pricing with no surprise charges",
      desc: "You'll always know what you're paying for before you commit."
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

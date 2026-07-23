import { ShieldCheck, Globe2, Users, FileCheck } from "lucide-react";

export function TrustSignals() {
  const items = [
    {
      icon: Globe2,
      metric: "20+ Countries",
      label: "Founders served globally",
      desc: "Trusted by entrepreneurs across North America, Europe, Middle East, and Asia."
    },
    {
      icon: FileCheck,
      metric: "5,000+ Filings",
      label: "Registrations completed",
      desc: "Proven track record with zero registration rejections."
    },
    {
      icon: ShieldCheck,
      metric: "99.8% Compliance",
      label: "Regulatory audit score",
      desc: "Rigorous state & federal annual filing management."
    },
    {
      icon: Users,
      metric: "50+ Specialists",
      label: "In-country legal & tax pros",
      desc: "Work directly with dedicated specialists in each market."
    }
  ];

  return (
    <section className="py-10 border-y border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40">
      <div className="container-page">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.metric}
              className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm"
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

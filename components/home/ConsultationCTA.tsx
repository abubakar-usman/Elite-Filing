import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ConsultationCTA() {
  return (
    <section className="py-6 md:py-8 bg-slate-50 dark:bg-slate-900/20 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="container-page flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center md:text-left">
        <p className="text-slate-600 dark:text-slate-400 text-[15px] font-medium">
          <span className="font-semibold text-slate-900 dark:text-white mr-1">Not sure where to start?</span> 
          Our team can help you choose the right jurisdiction and service package.
        </p>
        <Link 
          href="/schedule" 
          className="text-navy dark:text-blue-400 font-bold hover:text-orange dark:hover:text-orange transition-colors duration-200 inline-flex items-center gap-1 text-[15px]"
        >
          Book a Free Consultation <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

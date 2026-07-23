"use client";

import { useState, useEffect } from "react";
import { Calendar, MessageSquare, X, ArrowUpRight } from "lucide-react";

interface StickyCTAProps {
  onOpenConsultation: () => void;
}

export function StickyCTA({ onOpenConsultation }: StickyCTAProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 max-w-4xl mx-auto animate-fade-up">
      <div className="bg-slate-900/95 dark:bg-slate-950/95 backdrop-blur-xl border border-slate-800 text-white rounded-2xl p-3 sm:p-4 shadow-2xl shadow-slate-950/50 flex items-center justify-between gap-3 sm:gap-6">
        
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 border border-orange-500/30">
            <Calendar className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="font-semibold text-xs sm:text-sm text-white truncate">Ready to form or expand your business?</div>
            <div className="text-[11px] sm:text-xs text-slate-300 truncate">Book a free 1-on-1 consultation with an in-country specialist.</div>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-md shadow-orange-500/20 transition-all hover:scale-[1.02]"
          >
            <span>Book Strategy Call</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <a
            href="https://wa.me/13025550134"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => setDismissed(true)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

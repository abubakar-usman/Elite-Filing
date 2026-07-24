"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowUpRight, ChevronRight, Search, UserCheck } from "lucide-react";
import Image from "next/image";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/countries", label: "Countries" },
  { to: "/industries", label: "Industries" },
  { to: "/pricing", label: "Pricing" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
] as const;

interface HeaderProps {
  onOpenConsultation?: () => void;
}

export function Header({ onOpenConsultation }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname?.startsWith(to));

  return (
    <div className="w-full sticky top-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 max-w-8xl mx-auto transition-all duration-300">
      <header className="relative bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-lg shadow-slate-900/5 rounded-full px-4 sm:px-6 lg:px-10 py-2.5 flex items-center justify-between transition-all duration-300">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Elite Filing"
            width={40}
            height={40}
            className="h-10 w-10 sm:h-12 sm:w-12 object-contain rounded-full bg-white p-0.5 shadow-sm"
          />
          <div className="leading-tight hidden sm:block">
            <div className="font-semibold text-slate-900 dark:text-white text-base sm:text-lg">Elite Filing</div>
            <div className="text-[9px] tracking-[0.2em] font-bold text-orange-500 uppercase">
              Form · Launch · Grow
            </div>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
          {nav.map((n) => (
            <Link
              key={n.to}
              href={n.to}
              className={`px-2 xl:px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 whitespace-nowrap flex items-center gap-1 ${
                isActive(n.to)
                  ? "text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 font-semibold shadow-xs"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60"
              }`}
            >
              <span>{n.label}</span>
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center shrink-0 gap-2">
          <Link
            href="/login"
            className="px-3.5 py-2 rounded-full text-xs xl:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Sign In
          </Link>
          <button
            type="button"
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-1.5 px-4 xl:px-5 py-2 rounded-full text-xs xl:text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-md shadow-orange-500/20 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span className="whitespace-nowrap">Book Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          className="lg:hidden p-2 rounded-full text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Mobile Dropdown Panel */}
        {open && (
          <div className="absolute top-full left-0 right-0 mt-3 p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xl rounded-3xl overflow-hidden transition-all duration-200 z-50">
            <div className="flex flex-col gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  href={n.to}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-2.5 rounded-2xl text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive(n.to)
                      ? "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/40 font-bold"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{n.label}</span>
                  </span>
                  {isActive(n.to) && <ChevronRight className="w-4 h-4 text-orange-500" />}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-2xl text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 text-center"
                >
                  Sign In to Portal
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    if (onOpenConsultation) onOpenConsultation();
                  }}
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 shadow-md shadow-orange-500/20 text-center cursor-pointer"
                >
                  Book a Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
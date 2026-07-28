"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import { DesktopNav } from "../navigation/DesktopNav";
import { MobileNav } from "../navigation/MobileNav";

interface HeaderProps {
  onOpenConsultation?: () => void;
}

export function Header({ onOpenConsultation }: HeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMobileMenu = useCallback(() => setOpen(false), []);

  return (
    <div className="w-full sticky top-0 z-50 transition-all duration-300 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800">
      <header className="relative flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2.5 transition-all duration-300">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
            onClick={closeMobileMenu}
          >
            <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
              <Image
                src="/logo_new.png"
                alt="Elite Filing"
                width={48}
                height={48}
                priority
                className="object-contain w-full h-full"
              />
            </div>
            <div className="flex flex-col items-center justify-center pt-0.5 -ml-1">
              <div className="font-serif tracking-widest text-[#1a2b5c] dark:text-blue-100 text-sm sm:text-base uppercase leading-none" style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}>
                ELITE FILING
              </div>
              <div className="font-sans font-bold tracking-[0.22em] text-[#f47b20] text-[5px] sm:text-[6px] mt-1 uppercase leading-none w-full text-center">
                FORM.LAUNCH.GROW
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-4">
            <DesktopNav />
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center shrink-0 gap-2">
            <Link
              href="/login"
              className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              Sign In
            </Link>
            <button
              type="button"
              onClick={onOpenConsultation}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 shadow-sm shadow-orange-500/20 hover:shadow-md hover:shadow-orange-500/30 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="whitespace-nowrap">Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            className="lg:hidden p-2.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {open && (
          <MobileNav setOpen={setOpen} onOpenConsultation={onOpenConsultation} />
        )}
      </header>
    </div>
  );
}
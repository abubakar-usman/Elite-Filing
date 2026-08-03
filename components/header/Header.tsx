"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { countriesData } from "@/lib/data/countries";
import { cn } from "@/lib/utils";
import {
  Building2,
  Receipt,
  Shield,
  MapPin,
  Landmark,
  Calculator,
  ShoppingBag,
  Sparkles,
  Briefcase,
  ArrowRight,
  Rocket,
  ShieldCheck,
  ChevronRight,
  Menu,
  X,
  Phone,
  User,
  Globe2,
} from "lucide-react";

// ─── Header Data ─────────────────────────────────────────────────────────────

const brand = {
  logoSrc: "/logo_new.png",
  logoAlt: "Elite Filing",
  name: "ELITE FILING",
  tagline: "FORM.LAUNCH.GROW",
};

// Theme-matched colors (Navy Deep, Navy, Orange)
const serviceMenuItems = [
  { slug: "company-formation", label: "Company Formation", icon: Building2, color: "#0e3b96", bg: "rgba(14,59,150,0.08)", border: "rgba(14,59,150,0.15)" },
  { slug: "tax-compliance", label: "Tax & Compliance", icon: Receipt, color: "#F07228", bg: "rgba(240,114,40,0.08)", border: "rgba(240,114,40,0.15)" },
  { slug: "trademark-ip", label: "Trademark & IP", icon: Shield, color: "#1145AC", bg: "rgba(17,69,172,0.08)", border: "rgba(17,69,172,0.15)" },
  { slug: "registered-agent", label: "Registered Agent", icon: MapPin, color: "#0e3b96", bg: "rgba(14,59,150,0.08)", border: "rgba(14,59,150,0.15)" },
  { slug: "banking-payments", label: "Banking & Payments", icon: Landmark, color: "#F07228", bg: "rgba(240,114,40,0.08)", border: "rgba(240,114,40,0.15)" },
  { slug: "accounting", label: "Accounting", icon: Calculator, color: "#1145AC", bg: "rgba(17,69,172,0.08)", border: "rgba(17,69,172,0.15)" },
  { slug: "ecommerce-setup", label: "Ecommerce Setup", icon: ShoppingBag, color: "#F07228", bg: "rgba(240,114,40,0.08)", border: "rgba(240,114,40,0.15)" },
  { slug: "growth-marketing", label: "Growth & Marketing", icon: Sparkles, color: "#0e3b96", bg: "rgba(14,59,150,0.08)", border: "rgba(14,59,150,0.15)" },
  { slug: "business-consultancy", label: "Consultancy", icon: Briefcase, color: "#1145AC", bg: "rgba(17,69,172,0.08)", border: "rgba(17,69,172,0.15)" },
];

const activeCountries = countriesData.filter((c) => !c.comingSoon);
const comingSoonCountries = countriesData.filter((c) => c.comingSoon);

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/industries", label: "Industries" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

const mobileTopLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

const mobileSimpleLinks = [
  { href: "/industries", label: "Industries" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

const actions = {
  signIn: { href: "/client-portal", label: "Client Portal" },
  consultation: { label: "Book Consultation" },
};

// ─── Top Bar ─────────────────────────────────────────────────────────────────
function TopBar() {
  return (
    <div
      className="w-full relative overflow-hidden"
      style={{
        background: "linear-gradient(105deg, #030b20 0%, #082255 40%, #0e3b96 100%)",
        boxShadow: "inset 0 -1px 0 0 rgba(255,255,255,0.1)"
      }}
    >
      <div className="absolute top-0 right-[15%] w-96 h-[150%] bg-[#1145AC]/40 blur-[80px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-[20%] w-72 h-[150%] bg-[#F07228]/[0.08] blur-[80px] pointer-events-none rounded-full" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 h-11 sm:h-12 flex items-center justify-between gap-3 relative z-10">
        <div className="flex items-center gap-2.5 min-w-0 group">
          <div className="w-[22px] h-[22px] rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-white/15 transition-colors">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F88D4F]" />
          </div>
          <span className="text-blue-100/90 text-[11.5px] sm:text-[12.5px] font-medium tracking-wide truncate">
            Expert Corporate Setup & <span className="text-white font-semibold drop-shadow-sm">Tax Compliance</span>
          </span>
        </div>

        <div className="flex items-center gap-4 sm:gap-5 shrink-0">
          <div className="hidden md:flex items-center gap-2 text-[12px] text-blue-100/80 font-medium tracking-wide">
            <Globe2 className="w-3.5 h-3.5 text-[#F88D4F]/80" />
            <span>100% Remote Incorporation</span>
          </div>
          <div className="w-px h-5 bg-white/10 hidden md:block" />
          <Link
            href="/services"
            className="group flex items-center gap-1.5 text-[11px] sm:text-[12px] font-bold text-white rounded-full px-4 py-[5px] sm:py-1.5 transition-all duration-300 hover:-translate-y-[0.5px] hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #F07228 0%, #d45510 100%)",
              boxShadow: "0 2px 10px -2px rgba(240,114,40,0.5)",
              border: "1px solid rgba(255,255,255,0.15)"
            }}
          >
            <Rocket className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span className="hidden sm:inline tracking-wide">Start Your Formation</span>
            <span className="sm:hidden tracking-wide">Get Started</span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 opacity-90" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

interface HeaderProps {
  onOpenConsultation?: () => void;
}

export function Header({ onOpenConsultation }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = useCallback(() => setOpen(false), []);

  return (
    <div className="w-full sticky top-0 z-[100]">
      <TopBar />
      <header
        className={cn(
          "w-full transition-all duration-500 ease-out",
          scrolled
            ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl backdrop-saturate-150 border-b border-[#0e3b96]/[0.08] dark:border-slate-800/50"
            : "bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200/30 dark:border-slate-800/30"
        )}
        style={{
          boxShadow: scrolled
            ? "0 8px 32px -8px rgba(14,59,150,0.10), 0 1px 0 0 rgba(14,59,150,0.04), inset 0 -1px 0 0 rgba(14,59,150,0.05)"
            : "0 1px 8px -4px rgba(14,59,150,0.06)",
        }}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between h-[80px] sm:h-[90px] xl:h-[104px] px-6 md:px-8 lg:px-10 xl:px-12 gap-4">
          <div className="flex items-center justify-start shrink-0">
            <HeaderLogo onClick={closeMobileMenu} />
          </div>

          <div className="hidden xl:flex items-center justify-center shrink-0">
            <DesktopNav />
          </div>

          <div className="flex items-center justify-end gap-2 lg:gap-3 shrink-0">
            <div className="hidden md:flex items-center gap-2 lg:gap-3">
              <Link
                href={actions.signIn.href}
                className="inline-flex items-center gap-1.5 2xl:gap-2 px-3 2xl:px-5 py-2 text-[12px] 2xl:text-[13px] font-semibold text-[#0e3b96] border border-[#0e3b96]/15 rounded-xl bg-[#0e3b96]/[0.04] hover:bg-[#0e3b96]/[0.10] hover:border-[#0e3b96]/25 transition-all duration-300 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0e3b96]/40 focus-visible:ring-offset-2"
              >
                <User className="w-3.5 h-3.5 shrink-0 opacity-70" />
                <span className="hidden lg:inline">{actions.signIn.label}</span>
                <span className="lg:hidden">Portal</span>
              </Link>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-1.5 2xl:gap-2 px-3 2xl:px-5 py-2 text-[12px] 2xl:text-[13px] font-bold text-white rounded-xl whitespace-nowrap transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F07228]/50 focus-visible:ring-offset-2"
                style={{
                  background: "linear-gradient(135deg, #F07228 0%, #d45510 100%)",
                  boxShadow: "0 3px 14px -3px rgba(240,114,40,0.50)",
                }}
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span className="hidden lg:inline">{actions.consultation.label}</span>
                <span className="lg:hidden">Consult</span>
              </button>
            </div>

            <button
              className="xl:hidden p-2.5 rounded-xl text-[#0e3b96] hover:bg-[#0e3b96]/[0.07] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0e3b96]/40 focus-visible:ring-offset-1"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="max-w-[1440px] mx-auto px-4 pb-4">
            <MobileNav setOpen={setOpen} onOpenConsultation={onOpenConsultation} />
          </div>
        )}
      </header>
    </div>
  );
}

function HeaderLogo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="group flex items-center outline-none transition-transform duration-300 mt-2.5 sm:mt-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0e3b96]/40 focus-visible:rounded-lg focus-visible:ring-offset-2 -ml-2 sm:-ml-3 lg:-ml-5"
    >
      <div className="relative flex items-center justify-center w-[65px] h-[65px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] shrink-0 mt-1">
        <Image
          src={brand.logoSrc}
          alt={brand.logoAlt}
          width={256}
          height={256}
          priority
          className="w-full h-full object-contain scale-[1.3]"
          style={{ filter: "drop-shadow(0 2px 4px rgba(17,69,172,0.12))" }}
        />
      </div>

      <div className="flex flex-col items-center justify-center z-10">
        <span
          className="font-display font-semibold text-[#0e3b96] dark:text-blue-100 uppercase whitespace-nowrap leading-none text-[16px] sm:text-[20px] lg:text-[23px]"
          style={{ letterSpacing: "0.03em" }}
        >
          {brand.name}
        </span>
        <span
          className="font-sans font-bold uppercase leading-none text-[#F07228] mt-[5px] sm:mt-[7px] text-[7px] sm:text-[8px] lg:text-[9px]"
          style={{ 
            letterSpacing: "0.26em", 
            marginLeft: "0.26em" 
          }}
        >
          {brand.tagline}
        </span>
      </div>
    </Link>
  );
}

function DesktopNav() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname?.startsWith(path + "/");
  };

  const base = "relative inline-flex h-[36px] w-max items-center justify-center rounded-lg px-4 text-[13.5px] font-semibold transition-all duration-300 ease-out whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0e3b96]/40 focus-visible:ring-offset-1";

  const navLinkClass = (active: boolean) => cn(
    base,
    active
      ? "text-[#0e3b96] dark:text-blue-300"
      : "text-slate-600 hover:text-[#0e3b96] dark:text-slate-400 dark:hover:text-blue-300"
  );

  const triggerClass = (active: boolean) => cn(
    base,
    "!bg-transparent !border-none !shadow-none !ring-0",
    "hover:!text-[#0e3b96] dark:hover:!text-blue-300",
    "data-[state=open]:!text-[#0e3b96] dark:data-[state=open]:!text-blue-300",
    "[&>svg]:opacity-50 [&>svg]:transition-all [&>svg]:duration-300 data-[state=open]:[&>svg]:opacity-100 data-[state=open]:[&>svg]:text-[#0e3b96]",
    "focus-visible:!ring-2 focus-visible:!ring-[#0e3b96]/40 focus-visible:!ring-offset-1",
    active
      ? "!text-[#0e3b96] dark:!text-blue-300"
      : "!text-slate-600 dark:!text-slate-400"
  );

  return (
    <NavigationMenu className="hidden xl:flex z-[100]">
      <NavigationMenuList className="gap-1">
        {primaryLinks.slice(0, 2).map((link) => (
          <NavigationMenuItem key={link.href}>
            <NavigationMenuLink asChild>
              <Link href={link.href} className={navLinkClass(isActive(link.href))}>
                {link.label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}

        <NavigationMenuItem>
          <NavigationMenuTrigger className={triggerClass(isActive("/services"))}>
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            {/* Mega Menu Surface with solid border and rich shadow */}
            <div
              className="bg-white dark:bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-[#0e3b96]/15 dark:border-slate-800"
              style={{
                width: "1080px",
                boxShadow: "0 24px 72px -12px rgba(14,59,150,0.18), 0 8px 24px -4px rgba(0,0,0,0.06)",
              }}
            >
              {/* ── Active Countries Grid with Padded Cards ── */}
              <div className="p-5 grid grid-cols-5 gap-3 bg-slate-50/50 dark:bg-slate-900/10">
                {activeCountries.map((country) => (
                  <div 
                    key={country.slug} 
                    className="flex flex-col bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#0e3b96]/20"
                  >
                    {/* Country Header */}
                    <NavigationMenuLink asChild>
                      <Link
                        href={`/services/${country.slug}`}
                        className="group flex items-center gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800/80 transition-all duration-300"
                      >
                        <span className="text-[22px] leading-none shrink-0 drop-shadow-sm transition-transform group-hover:scale-110">{country.flag}</span>
                        <span className="text-[13px] font-bold uppercase tracking-wider text-[#0e3b96] dark:text-blue-300 group-hover:text-[#F07228] transition-colors leading-tight">
                          {country.name}
                        </span>
                      </Link>
                    </NavigationMenuLink>

                    {/* Service Items List */}
                    <ul className="flex flex-col gap-1 flex-1">
                      {country.serviceCategories.slice(0, 5).map((cat) => {
                        const svcMeta = serviceMenuItems.find((s) => {
                          const catLower = cat.categoryName.toLowerCase();
                          return catLower.includes(s.slug.replace(/-/g, " ").split(" ")[0]);
                        });
                        const Icon = svcMeta?.icon;
                        return (
                          <li key={cat.categoryName}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={`/services/${country.slug}`}
                                className="group flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-200"
                              >
                                {Icon && (
                                  <span 
                                    className="w-7 h-7 rounded-md flex items-center justify-center shrink-0 border transition-all duration-300 group-hover:scale-105"
                                    style={{ 
                                      backgroundColor: svcMeta?.bg,
                                      borderColor: svcMeta?.border
                                    }}
                                  >
                                    <Icon 
                                      className="w-3.5 h-3.5 transition-colors" 
                                      style={{ color: svcMeta?.color }}
                                    />
                                  </span>
                                )}
                                <span className="text-[12.5px] font-medium text-slate-600 dark:text-slate-300 group-hover:text-[#0e3b96] dark:group-hover:text-blue-300 transition-colors leading-tight">
                                  {cat.categoryName}
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>

              {/* ── Coming Soon + Footer ── */}
              <div
                className="px-6 py-4 flex items-center justify-between"
                style={{ 
                  borderTop: "1px solid rgba(14,59,150,0.10)", 
                  background: "linear-gradient(to right, rgba(248,250,255,1), rgba(255,255,255,1))" 
                }}
              >
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F07228] shrink-0">Coming Soon</span>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    {comingSoonCountries.map((c) => (
                      <span
                        key={c.slug}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11.5px] font-medium text-slate-600 bg-white border border-slate-200/80 shadow-sm"
                      >
                        <span className="grayscale opacity-60 text-[14px] leading-none">{c.flag}</span>
                        {c.name}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href="/services"
                  className="shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0e3b96]/5 text-[13px] font-semibold text-[#0e3b96] hover:bg-[#0e3b96] hover:text-white dark:text-blue-400 dark:hover:text-white transition-all duration-300 group"
                >
                  Explore All Services 
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {primaryLinks.slice(2).map((link) => (
          <NavigationMenuItem key={link.href}>
            <NavigationMenuLink asChild>
              <Link href={link.href} className={navLinkClass(isActive(link.href))}>
                {link.label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileNav({
  setOpen,
  onOpenConsultation,
}: {
  setOpen: (open: boolean) => void;
  onOpenConsultation?: () => void;
}) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname?.startsWith(path + "/");
  };

  const close = () => setOpen(false);

  return (
    <div className="absolute top-full left-0 right-0 mt-3 mx-4 bg-white dark:bg-slate-950 border border-slate-200/70 dark:border-slate-800/70 shadow-2xl rounded-2xl z-50 max-h-[85vh] flex flex-col overflow-hidden">
      <nav className="flex flex-col gap-1 p-5 overflow-y-auto overscroll-contain flex-1 min-h-0 bg-slate-50/30">
        
        {mobileTopLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={close}
            className={cn(
              "px-4 py-3.5 rounded-xl text-[15.5px] font-semibold transition-colors flex items-center justify-between",
              isActive(link.href)
                ? "text-[#0e3b96] dark:text-blue-400 bg-[#0e3b96]/5 dark:bg-blue-900/20 border border-[#0e3b96]/10"
                : "text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-900 border border-transparent hover:border-slate-200"
            )}
          >
            <span>{link.label}</span>
            {isActive(link.href) && <ChevronRight className="w-4 h-4 text-[#0e3b96] dark:text-blue-400" />}
          </Link>
        ))}

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="services" className="border-b-0">
            <AccordionTrigger
              className={cn(
                "px-4 py-3.5 rounded-xl text-[15.5px] font-semibold transition-colors hover:no-underline",
                isActive("/services")
                  ? "text-[#0e3b96] dark:text-blue-400 bg-[#0e3b96]/5 dark:bg-blue-900/20 border border-[#0e3b96]/10"
                  : "text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-900 border border-transparent hover:border-slate-200"
              )}
            >
              Services by Country
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-4 px-1">
              <Link
                href="/services"
                onClick={close}
                className="mx-3 px-4 py-3 mb-4 text-[14px] font-bold text-white flex items-center justify-between rounded-xl transition-all shadow-sm"
                style={{ background: "linear-gradient(135deg, #0e3b96 0%, #1145AC 100%)" }}
              >
                View Global Overview <ArrowRight className="w-4 h-4" />
              </Link>
              
              {/* Active Countries - Padded Cards for Mobile */}
              <div className="grid grid-cols-1 gap-2 px-3">
                {activeCountries.map((country) => (
                  <Link
                    key={country.slug}
                    href={`/services/${country.slug}`}
                    onClick={close}
                    className="group flex items-center gap-3 px-3 py-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-[#0e3b96]/30 transition-all"
                  >
                    <span className="text-[24px] leading-none w-8 text-center shrink-0 drop-shadow-sm">{country.flag}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[14px] font-bold text-[#0e3b96] dark:text-blue-300 uppercase tracking-wide group-hover:text-[#F07228] transition-colors">{country.name}</p>
                      <p className="text-[11.5px] text-slate-500 truncate">{country.tagline}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#0e3b96] group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                ))}
              </div>

              {/* Coming Soon Countries */}
              <div className="mt-4 pt-4 border-t border-slate-200/60 dark:border-slate-800 mx-3">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#F07228] mb-3">Coming Soon</p>
                <div className="grid grid-cols-1 gap-2">
                  {comingSoonCountries.map((country) => (
                    <div key={country.slug} className="flex items-center gap-3 px-3 py-2 bg-white/60 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800 opacity-80">
                      <span className="text-[20px] leading-none w-8 text-center shrink-0 grayscale">{country.flag}</span>
                      <span className="text-[13.5px] font-medium text-slate-500 flex-1">{country.name}</span>
                      <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#0e3b96]/5 text-[#0e3b96] border border-[#0e3b96]/10">Soon</span>
                    </div>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {mobileSimpleLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={close}
            className={cn(
              "px-4 py-3.5 rounded-xl text-[15.5px] font-semibold transition-colors flex items-center justify-between",
              isActive(link.href)
                ? "text-[#0e3b96] dark:text-blue-400 bg-[#0e3b96]/5 dark:bg-blue-900/20 border border-[#0e3b96]/10"
                : "text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-900 border border-transparent hover:border-slate-200"
            )}
          >
            <span>{link.label}</span>
            {isActive(link.href) && <ChevronRight className="w-4 h-4 text-[#0e3b96] dark:text-blue-400" />}
          </Link>
        ))}
      </nav>

      <div className="p-5 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-3 shrink-0">
        <Link
          href={actions.signIn.href}
          onClick={close}
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-[15px] font-semibold text-[#0e3b96] bg-[#0e3b96]/5 border border-[#0e3b96]/15 hover:bg-[#0e3b96]/10 transition-colors text-center shadow-sm"
        >
          <User className="w-4.5 h-4.5" />
          {actions.signIn.label}
        </Link>
        <button
          type="button"
          onClick={() => {
            close();
            onOpenConsultation?.();
          }}
          className="w-full btn-primary-cta py-3.5 text-[15px] cursor-pointer rounded-xl"
        >
          <Phone className="w-4.5 h-4.5" />
          {actions.consultation.label}
        </button>
      </div>
    </div>
  );
}
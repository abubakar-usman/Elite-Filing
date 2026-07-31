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
import { servicesData } from "@/lib/data/services";
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
  TrendingUp,
  ChevronRight,
  Menu,
  X,
  Phone,
  User,
  Mail,
  Clock,
  Star,
  Globe2,
  type LucideIcon,
} from "lucide-react";

// ─── Header Data ─────────────────────────────────────────────────────────────

const brand = {
  logoSrc: "/logo_new.png",
  logoAlt: "Elite Filing",
  name: "ELITE FILING",
  tagline: "FORM.LAUNCH.GROW",
};

const iconMap: Record<string, LucideIcon> = {
  Building2, Receipt, Shield, MapPin, Landmark,
  Calculator, ShoppingBag, Sparkles, Briefcase,
};

const coreServices = servicesData.filter((s) => s.category === "core");
const complianceServices = servicesData.filter((s) => s.category === "compliance");
const growthServices = servicesData.filter((s) => s.category === "growth");

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/industries", label: "Industries" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

const mobileTopLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

const mobileSimpleLinks = [
  { href: "/industries", label: "Industries" },
  { href: "/pricing", label: "Pricing" },
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
      {/* Enhanced Ambient glow accents */}
      <div className="absolute top-0 right-[15%] w-96 h-[150%] bg-[#1145AC]/40 blur-[80px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-[20%] w-72 h-[150%] bg-[#F07228]/[0.08] blur-[80px] pointer-events-none rounded-full" />

      {/* Increased height from h-10 sm:h-11 to h-11 sm:h-12 */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 h-11 sm:h-12 flex items-center justify-between gap-3 relative z-10">
        
        {/* Left — Value Proposition */}
        <div className="flex items-center gap-2.5 min-w-0 group">
          <div className="w-[22px] h-[22px] rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-white/15 transition-colors">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F88D4F]" />
          </div>
          <span className="text-blue-100/90 text-[11.5px] sm:text-[12.5px] font-medium tracking-wide truncate">
            Expert Corporate Setup & <span className="text-white font-semibold drop-shadow-sm">Tax Compliance</span>
          </span>
        </div>

        {/* Right — Capabilities & CTA */}
        <div className="flex items-center gap-4 sm:gap-5 shrink-0">
          <div className="hidden md:flex items-center gap-2 text-[12px] text-blue-100/80 font-medium tracking-wide">
            <Globe2 className="w-3.5 h-3.5 text-[#F88D4F]/80" />
            <span>100% Remote Incorporation</span>
          </div>
          
          <div className="w-px h-5 bg-white/10 hidden md:block" />
          
          <a
            href="/pricing"
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
          </a>
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
        {/* FIX: Removed flex-1. justify-between combined with the fixed logo box naturally balances the spacing without overlapping! Added gap-4 to prevent any physical collisions. */}
        <div className="max-w-[1440px] mx-auto flex items-center justify-between h-[80px] sm:h-[90px] xl:h-[104px] px-6 md:px-8 lg:px-10 xl:px-12 gap-4">
          
          {/* Left — Logo */}
          <div className="flex items-center justify-start shrink-0">
            <HeaderLogo onClick={closeMobileMenu} />
          </div>

          {/* Center — Desktop Nav */}
          <div className="hidden xl:flex items-center justify-center shrink-0">
            <DesktopNav />
          </div>

          {/* Right — CTA Buttons + Hamburger */}
          <div className="flex items-center justify-end gap-2 lg:gap-3 shrink-0">
            
            {/* CTA buttons visible on md+ screens */}
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

            {/* Hamburger — visible below xl */}
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
      {/* Logo Graphic — scales down on small screens */}
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

      {/* Brand Text — responsive font sizing */}
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
            <div className="w-[820px] p-8 bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80 shadow-2xl shadow-blue-900/5 rounded-2xl">
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <h5 className="mb-4 text-[11px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                    <Rocket className="w-4 h-4 text-orange" /> Core Formation
                  </h5>
                  <ul className="flex flex-col gap-1.5">
                    {coreServices.map((service) => {
                      const Icon = iconMap[service.iconName];
                      return (
                        <li key={service.slug}>
                          <NavigationMenuLink asChild>
                            <Link href={`/services/${service.slug}`} className="group flex items-center gap-3.5 p-2 -mx-2 rounded-xl hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-200">
                              {Icon && (
                                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-navy-deep dark:bg-slate-800 dark:text-blue-400 group-hover:bg-white group-hover:shadow-sm border border-transparent group-hover:border-blue-100 transition-all duration-200 shrink-0">
                                  <Icon className="w-4 h-4" />
                                </div>
                              )}
                              <span className="text-[14px] font-semibold text-slate-700 dark:text-slate-300 group-hover:text-navy-deep dark:group-hover:text-white transition-colors">
                                {service.title}
                              </span>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div>
                  <h5 className="mb-4 text-[11px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                    <ShieldCheck className="w-4 h-4 text-orange" /> Tax & Compliance
                  </h5>
                  <ul className="flex flex-col gap-1.5">
                    {complianceServices.map((service) => {
                      const Icon = iconMap[service.iconName];
                      return (
                        <li key={service.slug}>
                          <NavigationMenuLink asChild>
                            <Link href={`/services/${service.slug}`} className="group flex items-center gap-3.5 p-2 -mx-2 rounded-xl hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-200">
                              {Icon && (
                                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-navy-deep dark:bg-slate-800 dark:text-blue-400 group-hover:bg-white group-hover:shadow-sm border border-transparent group-hover:border-blue-100 transition-all duration-200 shrink-0">
                                  <Icon className="w-4 h-4" />
                                </div>
                              )}
                              <span className="text-[14px] font-semibold text-slate-700 dark:text-slate-300 group-hover:text-navy-deep dark:group-hover:text-white transition-colors">
                                {service.title}
                              </span>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div>
                  <h5 className="mb-4 text-[11px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                    <TrendingUp className="w-4 h-4 text-orange" /> Growth & Scale
                  </h5>
                  <ul className="flex flex-col gap-1.5">
                    {growthServices.map((service) => {
                      const Icon = iconMap[service.iconName];
                      return (
                        <li key={service.slug}>
                          <NavigationMenuLink asChild>
                            <Link href={`/services/${service.slug}`} className="group flex items-center gap-3.5 p-2 -mx-2 rounded-xl hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-200">
                              {Icon && (
                                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-navy-deep dark:bg-slate-800 dark:text-blue-400 group-hover:bg-white group-hover:shadow-sm border border-transparent group-hover:border-blue-100 transition-all duration-200 shrink-0">
                                  <Icon className="w-4 h-4" />
                                </div>
                              )}
                              <span className="text-[14px] font-semibold text-slate-700 dark:text-slate-300 group-hover:text-navy-deep dark:group-hover:text-white transition-colors">
                                {service.title}
                              </span>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800/80 flex justify-end">
                <Link href="/services" className="text-[13px] font-semibold text-[#0e3b96] hover:text-[#08255c] dark:text-blue-400 dark:hover:text-white flex items-center gap-1.5 transition-colors">
                  Explore Complete Service Catalog <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className={triggerClass(isActive("/countries"))}>
            Countries
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[520px] p-8 bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80 shadow-2xl shadow-blue-900/5 rounded-2xl">
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                {countriesData.filter((c) => !c.comingSoon).map((country) => (
                  <li key={country.slug} className="list-none">
                    <NavigationMenuLink asChild>
                      <Link href={`/countries/${country.slug}`} className="group flex items-center gap-4 p-2.5 -mx-2.5 rounded-xl hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-200">
                        <div className="text-[22px] leading-none shadow-sm rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center w-12 h-10 border border-slate-200/60 dark:border-slate-700/60 transition-transform group-hover:scale-105 shrink-0">
                          {country.flag}
                        </div>
                        <div className="text-[14.5px] font-semibold text-slate-700 dark:text-slate-300 group-hover:text-navy-deep dark:group-hover:text-white transition-colors">
                          {country.name}
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
                <h6 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-slate-400">Coming Soon</h6>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {countriesData.filter((c) => c.comingSoon).map((country) => (
                    <li key={country.slug} className="list-none">
                      <div className="flex items-center gap-4 p-2.5 -mx-2.5 rounded-xl opacity-70">
                        <div className="text-[22px] leading-none rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center w-12 h-10 border border-slate-200/60 dark:border-slate-700/60 shrink-0">
                          {country.flag}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[14.5px] font-semibold text-slate-500 dark:text-slate-400">
                            {country.name}
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400">
                            Soon
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800/80 flex justify-end">
                <Link href="/countries" className="text-[13px] font-semibold text-[#0e3b96] hover:text-[#08255c] dark:text-blue-400 dark:hover:text-white flex items-center gap-1.5 transition-colors">
                  Compare all jurisdictions <ArrowRight className="w-4 h-4" />
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
      <nav className="flex flex-col gap-1 p-5 overflow-y-auto overscroll-contain flex-1 min-h-0">
        
        {mobileTopLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={close}
            className={cn(
              "px-4 py-3.5 rounded-xl text-[15.5px] font-semibold transition-colors flex items-center justify-between",
              isActive(link.href)
                ? "text-navy-deep dark:text-blue-400 bg-blue-50/80 dark:bg-blue-900/20"
                : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900/50"
            )}
          >
            <span>{link.label}</span>
            {isActive(link.href) && <ChevronRight className="w-4 h-4 text-navy-deep dark:text-blue-400" />}
          </Link>
        ))}

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="services" className="border-b-0">
            <AccordionTrigger
              className={cn(
                "px-4 py-3.5 rounded-xl text-[15.5px] font-semibold transition-colors hover:no-underline",
                isActive("/services")
                  ? "text-navy-deep dark:text-blue-400 bg-blue-50/80 dark:bg-blue-900/20"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900/50"
              )}
            >
              Services
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-4 px-2">
              <Link
                href="/services"
                onClick={close}
                className="px-4 py-3 mb-2 text-[14px] font-bold text-navy-deep dark:text-blue-400 flex items-center gap-2 rounded-xl bg-blue-50/50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-900/50"
              >
                View All Services <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="grid grid-cols-1 gap-1">
                {servicesData.map((service) => {
                  const Icon = iconMap[service.iconName];
                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={close}
                      className="group flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-blue-50/40 dark:hover:bg-blue-900/20 transition-colors"
                    >
                      {Icon && <Icon className="h-4.5 w-4.5 text-slate-400 group-hover:text-navy-deep dark:group-hover:text-blue-400 transition-colors" />}
                      <span className="text-[14.5px] font-semibold text-slate-600 dark:text-slate-300 group-hover:text-navy-deep dark:group-hover:text-white transition-colors">
                        {service.title}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="countries" className="border-b-0">
            <AccordionTrigger
              className={cn(
                "px-4 py-3.5 rounded-xl text-[15.5px] font-semibold transition-colors hover:no-underline",
                isActive("/countries")
                  ? "text-navy-deep dark:text-blue-400 bg-blue-50/80 dark:bg-blue-900/20"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900/50"
              )}
            >
              Countries
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-4 px-2">
              <Link
                href="/countries"
                onClick={close}
                className="px-4 py-3 mb-2 text-[14px] font-bold text-navy-deep dark:text-blue-400 flex items-center gap-2 rounded-xl bg-blue-50/50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-900/50"
              >
                Compare Jurisdictions <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="grid grid-cols-1 gap-1">
                {countriesData.filter((c) => !c.comingSoon).map((country) => (
                  <Link
                    key={country.slug}
                    href={`/countries/${country.slug}`}
                    onClick={close}
                    className="group flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-blue-50/40 dark:hover:bg-blue-900/20 transition-colors"
                  >
                    <div className="text-xl w-6 h-6 flex items-center justify-center">
                      {country.flag}
                    </div>
                    <span className="text-[14.5px] font-semibold text-slate-600 dark:text-slate-300 group-hover:text-navy-deep dark:group-hover:text-white transition-colors">
                      {country.name}
                    </span>
                  </Link>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <h6 className="mb-2 px-4 text-[11px] font-bold uppercase tracking-widest text-slate-400">Coming Soon</h6>
                <div className="grid grid-cols-1 gap-1">
                  {countriesData.filter((c) => c.comingSoon).map((country) => (
                    <div
                      key={country.slug}
                      className="flex items-center gap-4 px-4 py-3 rounded-xl opacity-60"
                    >
                      <div className="text-xl w-6 h-6 flex items-center justify-center">
                        {country.flag}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[14.5px] font-semibold text-slate-500 dark:text-slate-400">
                          {country.name}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400">
                          Soon
                        </span>
                      </div>
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
                ? "text-navy-deep dark:text-blue-400 bg-blue-50/80 dark:bg-blue-900/20"
                : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900/50"
            )}
          >
            <span>{link.label}</span>
            {isActive(link.href) && <ChevronRight className="w-4 h-4 text-navy-deep dark:text-blue-400" />}
          </Link>
        ))}
      </nav>

      <div className="p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 space-y-3 shrink-0">
        <Link
          href={actions.signIn.href}
          onClick={close}
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-[15px] font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-blue-50 hover:text-[#0e3b96] hover:border-blue-200 transition-colors text-center shadow-sm"
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
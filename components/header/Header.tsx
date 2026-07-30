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
      className="w-full hidden sm:block border-b border-[#1145AC]/40 relative overflow-hidden"
      style={{
        background: "linear-gradient(90deg, #04102c 0%, #08255c 50%, #0e3b96 100%)",
      }}
    >
      {/* Subtle ambient glow to make the top bar look ultra-modern */}
      <div className="absolute top-0 right-1/4 w-96 h-full bg-[#1145AC]/40 blur-2xl pointer-events-none" />

      {/* Increased height to h-[54px] for better presence and breathing room */}
      <div className="max-w-[1440px] mx-auto px-8 lg:px-10 h-[54px] flex items-center justify-between gap-4 relative z-10">
        
        {/* Left — Professional Value Proposition Badge (Factual, no fake claims) */}
        <div className="flex items-center gap-3 bg-white/[0.05] border border-white/[0.08] rounded-full px-4 py-1.5 backdrop-blur-md shadow-sm">
          <ShieldCheck className="w-4 h-4 text-[#F88D4F]" />
          <span className="text-blue-50 text-[13px] font-medium tracking-wide">
            Expert Corporate Setup & <span className="text-white font-semibold">International Tax Compliance</span>
          </span>
        </div>

        {/* Right — Capabilities & CTA (No "free consultation") */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 text-[13px] text-blue-200 font-medium">
            <Globe2 className="w-4 h-4 text-blue-400 opacity-90" />
            <span>100% Remote Incorporation</span>
          </div>
          
          <div className="w-px h-5 bg-blue-700/60 hidden md:block" />
          
          <a
            href="/pricing"
            className="group flex items-center gap-2 text-[13px] font-bold text-white bg-[#F07228] hover:bg-[#d45510] rounded-full px-5 py-2 transition-all duration-300 shadow-[0_2px_12px_-2px_rgba(240,114,40,0.5)] hover:shadow-[0_4px_16px_-2px_rgba(240,114,40,0.7)] hover:-translate-y-[1px]"
          >
            <Rocket className="w-4 h-4 text-white/90" />
            <span>Start Your Formation</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
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

  const closeMobileMenu = useCallback(() => setOpen(false), []);

  return (
    <div className="w-full sticky top-0 z-[100]">
      <TopBar />

      <header
        className="bg-white/98 dark:bg-slate-950/98 backdrop-blur-2xl border-b border-slate-200/70 dark:border-slate-800/70 w-full transition-all duration-300"
        style={{ boxShadow: "0 2px 24px -6px rgba(17,69,172,0.10), 0 1px 0 0 rgba(17,69,172,0.06)" }}
      >
        {/* Adjusted Header Height to h-[104px] to fit the large logo perfectly */}
        <div className="max-w-[1440px] mx-auto grid grid-cols-[1fr_auto_1fr] items-center h-[104px] px-8 lg:px-10">
          
          <div className="flex items-center justify-start">
            <HeaderLogo onClick={closeMobileMenu} />
          </div>

          <div className="hidden lg:flex items-center">
            <DesktopNav />
          </div>

          <div className="flex items-center justify-end gap-2.5">
            <div className="hidden lg:flex items-center gap-2.5">
              <Link
                href={actions.signIn.href}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-[13px] font-semibold text-[#0e3b96] bg-[#eef3ff] border border-[#c7d7ff] rounded-xl hover:bg-[#dce9ff] hover:border-[#a5bfff] hover:shadow-sm transition-all duration-200 whitespace-nowrap"
              >
                <User className="w-3.5 h-3.5 shrink-0 opacity-70" />
                <span>{actions.signIn.label}</span>
              </Link>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-bold text-white rounded-xl whitespace-nowrap transition-all duration-200 hover:scale-[1.02] active:scale-100"
                style={{
                  background: "linear-gradient(135deg, #F07228 0%, #d45510 100%)",
                  boxShadow: "0 4px 18px -4px rgba(240,114,40,0.60)",
                }}
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span>{actions.consultation.label}</span>
              </button>
            </div>

            <button
              className="lg:hidden p-2 rounded-xl text-[#0e3b96] bg-[#eef3ff] border border-[#c7d7ff] hover:bg-[#dce9ff] transition-colors focus:outline-none"
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
      // Added negative margin to pull the entire logo block further to the left edge
      className="group outline-none flex items-center -ml-4 lg:-ml-8"
    >
      <div className="relative flex items-center justify-center w-24 h-24 shrink-0 transition-transform duration-300 group-hover:scale-[1.05]">
        <Image
          src={brand.logoSrc}
          alt={brand.logoAlt}
          width={256}
          height={256}
          priority
          // Increased scale from 110 to 1.3 to make the logo graphic significantly larger
          className="w-full h-full object-contain scale-[1.3]"
          style={{ filter: "drop-shadow(0 2px 4px rgba(17,69,172,0.12))" }}
        />
      </div>

      {/* Adjusted the margin (ml-3) to keep the text perfectly spaced from the newly enlarged graphic */}
      <div className="flex flex-col justify-center z-10 ml-3">
        <span
          className="font-display font-extrabold text-[#0e3b96] dark:text-blue-100 uppercase whitespace-nowrap leading-none"
          style={{ fontSize: 22, letterSpacing: "0.14em" }}
        >
          {brand.name}
        </span>
        <span
          className="font-sans font-bold uppercase leading-none text-[#F07228] mt-1.5"
          style={{ fontSize: 9, letterSpacing: "0.28em" }}
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

  const base = "inline-flex h-[36px] w-max items-center justify-center rounded-lg px-3.5 text-[13.5px] font-semibold transition-all duration-200 focus:outline-none whitespace-nowrap shrink-0";

  const navLinkClass = (active: boolean) => cn(
    base,
    active
      ? "bg-[#eef3ff] text-[#0e3b96] shadow-[inset_0_0_0_1px_rgba(17,69,172,0.18)] dark:bg-blue-900/30 dark:text-blue-300"
      : "text-slate-500 hover:bg-[#eef3ff] hover:text-[#0e3b96] dark:text-slate-400 dark:hover:bg-blue-900/30 dark:hover:text-blue-300"
  );

  const triggerClass = (active: boolean) => cn(
    base,
    "!bg-transparent",
    "hover:!bg-[#eef3ff] hover:!text-[#0e3b96] dark:hover:!bg-blue-900/30 dark:hover:!text-blue-300",
    "data-[state=open]:!bg-[#eef3ff] data-[state=open]:!text-[#0e3b96] dark:data-[state=open]:!bg-blue-900/30 dark:data-[state=open]:!text-blue-300",
    "[&>svg]:opacity-50 data-[state=open]:[&>svg]:opacity-100 data-[state=open]:[&>svg]:text-[#0e3b96]",
    active
      ? "!text-[#0e3b96] !shadow-[inset_0_0_0_1px_rgba(17,69,172,0.18)] dark:!text-blue-300"
      : "!text-slate-500 dark:!text-slate-400"
  );

  return (
    <NavigationMenu className="hidden lg:flex z-[100]">
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
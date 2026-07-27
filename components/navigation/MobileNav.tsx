"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  ChevronRight,
  Phone,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Receipt,
  Shield,
  MapPin,
  Landmark,
  Calculator,
  ShoppingBag,
  Sparkles,
  Briefcase,
};

interface MobileNavProps {
  setOpen: (open: boolean) => void;
  onOpenConsultation?: () => void;
}

export function MobileNav({ setOpen, onOpenConsultation }: MobileNavProps) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname?.startsWith(path + "/");
  };

  const simpleLinks = [
    { to: "/industries", label: "Industries" },
    { to: "/pricing", label: "Pricing" },
    { to: "/resources", label: "Resources" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="absolute top-full left-0 right-0 mt-1 mx-2 sm:mx-4 bg-white dark:bg-slate-950 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-xl rounded-2xl z-50 max-h-[80vh] flex flex-col overflow-hidden">
      {/* Scrollable nav links */}
      <nav className="flex flex-col gap-1 p-4 overflow-y-auto overscroll-contain flex-1 min-h-0">

        {/* Home */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className={cn(
            "px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between",
            isActive("/")
              ? "text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 font-semibold"
              : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60"
          )}
        >
          <span>Home</span>
          {isActive("/") && <ChevronRight className="w-4 h-4 text-blue-500" />}
        </Link>

        {/* About */}
        <Link
          href="/about"
          onClick={() => setOpen(false)}
          className={cn(
            "px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between",
            isActive("/about")
              ? "text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 font-semibold"
              : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60"
          )}
        >
          <span>About</span>
          {isActive("/about") && <ChevronRight className="w-4 h-4 text-blue-500" />}
        </Link>

        {/* Accordion Sections */}
        <Accordion type="single" collapsible className="w-full">
          {/* Services */}
          <AccordionItem value="services" className="border-b-0">
            <AccordionTrigger
              className={cn(
                "px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors hover:no-underline",
                isActive("/services")
                  ? "text-blue-700 dark:text-blue-400 font-semibold"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60"
              )}
            >
              Services
            </AccordionTrigger>
            <AccordionContent className="pt-1 pb-3 px-1">
              <Link
                href="/services"
                onClick={() => setOpen(false)}
                className="px-3 py-2 mb-2 text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/30"
              >
                View All Services <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <div className="space-y-0.5 border-l-2 border-slate-100 dark:border-slate-800 ml-2">
                {servicesData.map((service) => {
                  const Icon = iconMap[service.iconName];
                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-2.5 pl-3 pr-2 py-2 rounded-r-lg hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
                    >
                      {Icon && (
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                      )}
                      <span className="text-[13px] font-medium text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">
                        {service.title}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Countries */}
          <AccordionItem value="countries" className="border-b-0">
            <AccordionTrigger
              className={cn(
                "px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors hover:no-underline",
                isActive("/countries")
                  ? "text-blue-700 dark:text-blue-400 font-semibold"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60"
              )}
            >
              Countries
            </AccordionTrigger>
            <AccordionContent className="pt-1 pb-3 px-1">
              <Link
                href="/countries"
                onClick={() => setOpen(false)}
                className="px-3 py-2 mb-2 text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/30"
              >
                Compare Jurisdictions <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <div className="grid grid-cols-1 gap-1 ml-1">
                {countriesData.map((country) => (
                  <Link
                    key={country.slug}
                    href={`/countries/${country.slug}`}
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <div className="text-lg w-8 h-8 flex items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50">
                      {country.flag}
                    </div>
                    <span className="text-[13px] font-medium text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">
                      {country.name}
                    </span>
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Simple Links */}
        {simpleLinks.map((n) => (
          <Link
            key={n.to}
            href={n.to}
            onClick={() => setOpen(false)}
            className={cn(
              "px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between",
              isActive(n.to)
                ? "text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 font-semibold"
                : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60"
            )}
          >
            <span>{n.label}</span>
            {isActive(n.to) && <ChevronRight className="w-4 h-4 text-blue-500" />}
          </Link>
        ))}
      </nav>

      {/* Sticky Action Buttons — always visible at bottom */}
      <div className="p-3 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-2 shrink-0">
        <Link
          href="/login"
          onClick={() => setOpen(false)}
          className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-center"
        >
          Sign In to Portal
        </Link>
        <button
          type="button"
          onClick={() => {
            setOpen(false);
            if (onOpenConsultation) onOpenConsultation();
          }}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 shadow-sm shadow-orange-500/20 transition-all text-center cursor-pointer"
        >
          <Phone className="w-4 h-4" />
          Book a Consultation
        </button>
      </div>
    </div>
  );
}
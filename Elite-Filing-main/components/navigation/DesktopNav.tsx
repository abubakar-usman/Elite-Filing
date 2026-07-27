"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
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

const coreServices = servicesData.filter((s) => s.category === "core");
const complianceServices = servicesData.filter((s) => s.category === "compliance");
const growthServices = servicesData.filter((s) => s.category === "growth");

const ListItem = React.forwardRef<
  React.ComponentRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { title: string; iconName?: string }
>(({ className, title, children, iconName, ...props }, ref) => {
  const Icon = iconName ? iconMap[iconName] : null;

  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "group block select-none rounded-lg p-2.5 leading-none no-underline outline-none transition-all duration-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 focus:bg-slate-50 dark:focus:bg-slate-800/60",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-3">
            {Icon && (
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 transition-colors group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40">
                <Icon className="h-4.5 w-4.5" />
              </div>
            )}
            <div className="min-w-0">
              <div className="text-[13px] font-semibold text-slate-800 dark:text-white leading-tight mb-0.5 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                {title}
              </div>
              <p className="line-clamp-1 text-[11px] leading-snug text-slate-500 dark:text-slate-400">
                {children}
              </p>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function DesktopNav() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname?.startsWith(path + "/");
  };

  const linkStyle = (path: string) =>
    cn(
      navigationMenuTriggerStyle(),
      "bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white font-medium text-[13px] transition-all h-9 px-3 rounded-lg",
      isActive(path)
        ? "text-blue-700 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/30 font-semibold"
        : "text-slate-600 dark:text-slate-400"
    );

  const triggerStyle = (path: string) =>
    cn(
      "bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white font-medium text-[13px] transition-all h-9 px-3 rounded-lg data-[state=open]:bg-slate-50 dark:data-[state=open]:bg-slate-800/60",
      isActive(path)
        ? "text-blue-700 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/30 font-semibold"
        : "text-slate-600 dark:text-slate-400"
    );

  return (
    <NavigationMenu className="hidden lg:flex z-50">
      <NavigationMenuList className="gap-0.5">

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/" className={linkStyle("/")}>
              Home
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/about" className={linkStyle("/about")}>
              About
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Services Mega Menu */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className={triggerStyle("/services")}>
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[780px] p-5 lg:w-[860px]">
              <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-slate-100 dark:border-slate-800">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Our Services</h4>
                <Link
                  href="/services"
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 flex items-center gap-1 transition-colors"
                >
                  View all services <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-5">
                <div>
                  <h5 className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 flex items-center gap-1.5 px-2.5">
                    <Rocket className="w-3 h-3" /> Core Formation
                  </h5>
                  <ul className="flex flex-col">
                    {coreServices.map((service) => (
                      <ListItem
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        title={service.title}
                        iconName={service.iconName}
                      >
                        {service.shortDesc}
                      </ListItem>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 flex items-center gap-1.5 px-2.5">
                    <ShieldCheck className="w-3 h-3" /> Tax & Compliance
                  </h5>
                  <ul className="flex flex-col">
                    {complianceServices.map((service) => (
                      <ListItem
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        title={service.title}
                        iconName={service.iconName}
                      >
                        {service.shortDesc}
                      </ListItem>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 flex items-center gap-1.5 px-2.5">
                    <TrendingUp className="w-3 h-3" /> Growth & Scale
                  </h5>
                  <ul className="flex flex-col">
                    {growthServices.map((service) => (
                      <ListItem
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        title={service.title}
                        iconName={service.iconName}
                      >
                        {service.shortDesc}
                      </ListItem>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Countries Mega Menu */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className={triggerStyle("/countries")}>
            Countries
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[560px] p-5 lg:w-[620px]">
              <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-slate-100 dark:border-slate-800">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Supported Jurisdictions</h4>
                <Link
                  href="/countries"
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 flex items-center gap-1 transition-colors"
                >
                  Compare all <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <ul className="grid grid-cols-2 gap-2">
                {countriesData.map((country) => (
                  <li key={country.slug}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={`/countries/${country.slug}`}
                        className="group flex items-center gap-3 rounded-lg p-2.5 transition-all hover:bg-slate-50 dark:hover:bg-slate-800/60"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 dark:bg-slate-800 text-xl border border-slate-200/50 dark:border-slate-700/50 transition-transform group-hover:scale-105">
                          {country.flag}
                        </div>
                        <div>
                          <div className="text-[13px] font-semibold text-slate-800 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                            {country.name}
                          </div>
                          <p className="line-clamp-1 text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                            {country.tagline}
                          </p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/industries" className={linkStyle("/industries")}>
              Industries
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/pricing" className={linkStyle("/pricing")}>
              Pricing
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/resources" className={linkStyle("/resources")}>
              Resources
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/contact" className={linkStyle("/contact")}>
              Contact
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Send, CheckCircle2, Loader2 } from "lucide-react";
import { servicesData } from "@/lib/data/services";
import { countriesData } from "@/lib/data/countries";
import { industriesData } from "@/lib/data/industries";
import { toast } from "sonner";

// ─── Footer data ─────────────────────────────────────────────────────────────

const brand = {
  logoSrc: "/logo_new.png",
  logoAlt: "Elite Filing",
  name: "ELITE FILING",
  tagline: "FORM.LAUNCH.GROW",
  description:
    "A corporate services and consulting firm helping founders form, structure, and scale businesses across the US, UK, UAE, Canada, and Pakistan.",
  email: "hello@elite-filing.com",
  phone: "+1 (302) 555-0134",
  offices: "Delaware · London · Dubai\nToronto · Rawalpindi",
};

const newsletter = {
  title: "Subscribe to Global Corporate Insights",
  description: "Get formation and compliance tips for global founders, straight to your inbox.",
  placeholder: "Enter your work email",
  buttonLabel: "Subscribe",
  successMessage: "Thank you for subscribing! Check your inbox soon.",
  toastSuccess: "Subscribed to global tax & compliance alerts!",
};

const companyLinks = [
  { href: "/track", label: "Track Filing Status", highlight: true, badge: "Live" },
  { href: "/pricing", label: "Pricing & Calculator" },
  { href: "/about", label: "About Us" },
  { href: "/resources", label: "Knowledge Center" },
  { href: "/contact", label: "Contact Us & Offices" },
  { href: "/admin", label: "Specialist Portal (Admin)", muted: true },
];

const socialLinks = [
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://twitter.com", label: "X (Twitter)" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/refund", label: "Refund Policy" },
  { href: "/cookies", label: "Cookie Policy" },
];

// ─── Component ───────────────────────────────────────────────────────────────

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "footer" }),
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error || "Subscription failed.");
      }

      setSubscribed(true);
      toast.success(newsletter.toastSuccess);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Error subscribing";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="mt-24 relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-700 via-blue-500 to-orange" />

      {/* Newsletter */}
      <div className="bg-slate-900 border-b border-slate-800/60 py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-slate-800/30 blur-3xl pointer-events-none" />

        <div className="container-page flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
          <div className="max-w-2xl text-center lg:text-left">
            <h3 className="text-3xl font-bold font-display text-white">{newsletter.title}</h3>
            <p className="mt-3 text-base text-slate-300">{newsletter.description}</p>
          </div>

          <div className="w-full lg:w-auto min-w-[320px]">
            {subscribed ? (
              <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-sm font-medium shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>{newsletter.successMessage}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={newsletter.placeholder}
                  className="px-5 py-3.5 rounded-xl bg-slate-950/50 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 grow transition-all shadow-inner"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 text-sm shrink-0 shadow-lg shadow-blue-900/20 disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <span>{newsletter.buttonLabel}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Columns */}
      <div className="bg-slate-950 text-white">
        <div className="container-page py-20 grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-0 w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg pr-2">
              <div className="relative flex items-center justify-center w-20 h-20 shrink-0 translate-y-1.5">
                <Image src={brand.logoSrc} alt={brand.logoAlt} width={80} height={80} className="w-full h-full object-contain scale-110" />
              </div>
              <div className="flex flex-col items-center justify-center pt-0.5 -ml-1">
                <div className="font-serif tracking-widest text-white text-base sm:text-lg uppercase leading-none" style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}>
                  {brand.name}
                </div>
                <div className="font-sans font-bold tracking-[0.22em] text-orange text-[6px] sm:text-[7px] mt-1 uppercase leading-none w-full text-center">
                  {brand.tagline}
                </div>
              </div>
            </Link>

            <p className="text-[13px] text-slate-400 leading-relaxed pr-6">{brand.description}</p>

            <div className="space-y-3.5 text-[13px] text-slate-300 pt-2 border-t border-slate-800/80 mr-6">
              <a href={`mailto:${brand.email}`} className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="w-7 h-7 rounded-md bg-slate-900 flex items-center justify-center group-hover:bg-blue-900/50 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <span>{brand.email}</span>
              </a>
              <a href={`tel:${brand.phone.replace(/\D/g, "")}`} className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="w-7 h-7 rounded-md bg-slate-900 flex items-center justify-center group-hover:bg-blue-900/50 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <span>{brand.phone}</span>
              </a>
              <div className="flex items-start gap-3 group">
                <div className="w-7 h-7 rounded-md bg-slate-900 flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <span className="leading-snug text-slate-400 mt-1 whitespace-pre-line">{brand.offices}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
  <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-white">Services</h4>
  <ul className="mt-6 space-y-3 text-[13px] text-slate-400">
    {/* 1. We slice the array to only show the first 5 items */}
    {servicesData.slice(0, 5).map((s) => (
      <li key={s.slug}>
        <Link href={`/services/${s.slug}`} className="hover:text-blue-400 transition-colors block">
          {s.title}
        </Link>
      </li>
    ))}
    {servicesData.length > 5 && (
      <li className="pt-2">
        <Link 
          href="/services" 
          className="text-blue-400 font-medium hover:text-blue-300 transition-colors flex items-center gap-1"
        >
          View All Services <span className="text-[10px]">→</span>
        </Link>
      </li>
    )}
  </ul>
</div>

          {/* Countries */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-white">Jurisdictions</h4>
            <ul className="mt-6 space-y-3.5 text-[13px] text-slate-400">
              {countriesData.map((c) => (
                <li key={c.slug}>
                  <Link href={`/countries/${c.slug}`} className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <span className="text-base leading-none grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all">{c.flag}</span>
                    <span>{c.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
  <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-white">Industries</h4>
  <ul className="mt-6 space-y-3 text-[13px] text-slate-400">
    {/* 1. Only show the first 5 industries */}
    {industriesData.slice(0, 5).map((ind) => (
      <li key={ind.slug}>
        <Link href={`/industries/${ind.slug}`} className="hover:text-blue-400 transition-colors block">
          {ind.title}
        </Link>
      </li>
    ))}
    {industriesData.length > 5 && (
      <li className="pt-2">
        <Link 
          href="/industries" 
          className="text-blue-400 font-medium hover:text-blue-300 transition-colors flex items-center gap-1"
        >
          View All Industries <span className="text-[10px]">→</span>
        </Link>
      </li>
    )}
  </ul>
</div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-white">Company</h4>
            <ul className="mt-6 space-y-3 text-[13px] text-slate-400">
              {companyLinks.map((link) => (
                <li key={link.href} className={link.muted ? "pt-3 mt-3 border-t border-slate-800/80" : undefined}>
                  <Link
                    href={link.href}
                    className={
                      link.highlight
                        ? "font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
                        : link.muted
                          ? "text-slate-500 hover:text-slate-300 transition-colors block"
                          : "hover:text-blue-400 transition-colors block"
                    }
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="text-[9px] bg-blue-900/50 text-blue-300 border border-blue-700/50 px-1.5 py-0.5 rounded font-mono uppercase">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Connect</h5>
              <div className="flex flex-wrap gap-4 text-[13px] text-slate-400">
                {socialLinks.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legal bar */}
        <div className="border-t border-orange-500/10 bg-[#020617] py-8">
  <div className="container-page flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] text-slate-400">
    
    {/* Copyright Text */}
    <div className="font-medium">
      © {new Date().getFullYear()} <span className="text-white">Elite Filing Co.</span> All rights reserved.
    </div>

    {/* Legal Links */}
    <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-3">
      {legalLinks.map((link) => (
        <Link 
          key={link.href} 
          href={link.href} 
          // 3. Hover changed to Orange-500
          // 4. Added "group" for the animated underline effect
          className="relative group hover:text-orange-500 transition-colors duration-300"
        >
          {link.label}
          {/* 5. Animated Orange Underline */}
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      ))}
    </div>
  </div>
</div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Mail, MapPin, Phone, Send, CheckCircle2, Loader2, 
  Linkedin, Instagram, Twitter
} from "lucide-react";
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
  { href: "/about", label: "About Us" },
  { href: "/resources", label: "Knowledge Center" },
  { href: "/contact", label: "Contact Us & Offices" },
  { href: "/admin", label: "Specialist Portal (Admin)", muted: true },
];

const socialLinks = [
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
  { href: "https://instagram.com", label: "Instagram", icon: Instagram },
  { href: "https://twitter.com", label: "X", icon: Twitter },
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
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-700 via-blue-500 to-orange-500" />

      {/* Newsletter Section */}
      <div className="bg-slate-900 border-b border-slate-800/60 py-16 relative overflow-hidden">
        <div className="container-page flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
          <div className="max-w-2xl text-center lg:text-left">
            <h3 className="text-3xl font-bold font-display text-white">{newsletter.title}</h3>
            <p className="mt-3 text-base text-slate-300">{newsletter.description}</p>
          </div>

          <div className="w-full lg:w-auto min-w-[320px]">
            {subscribed ? (
              <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-sm font-medium">
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
                  className="px-5 py-3.5 rounded-xl bg-slate-950/50 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 grow transition-all shadow-inner"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 text-sm shrink-0 disabled:opacity-50"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <span>{newsletter.buttonLabel}</span>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="bg-slate-950 text-white">
        <div className="container-page py-20 grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          
          {/* Brand & Contacts Column */}
          <div className="space-y-6 flex flex-col items-start">
            
            {/* Perfectly aligned stacked Logo Lockup matching the image */}
            <Link href="/" className="inline-flex flex-col items-center group focus:outline-none">
              
              {/* Graphic Mark - Increased size and reduced bottom margin to pull it closer to text */}
              <div className="relative w-[180px] h-[180px] -mb-12 -mt-15"> 
                <Image 
                  src={brand.logoSrc} 
                  alt={brand.logoAlt} 
                  width={256} 
                  height={256} 
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" 
                />
              </div>

              {/* Title (Serif) */}
              <div 
                className="font-serif tracking-[0.03em] text-white text-[22px] md:text-[24px] uppercase leading-none transition-colors group-hover:text-blue-200"
                style={{ fontFamily: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif" }}
              >
                {brand.name}
              </div>

              {/* Tagline (Orange Sans-serif with wide tracking) */}
              <div className="font-sans font-bold tracking-[0.26em] text-[#F07228] text-[8px] md:text-[9px] mt-2 uppercase leading-none pl-[0.26em]">
                {brand.tagline}
              </div>
              
            </Link>

            <p className="text-[13px] text-slate-400 leading-relaxed pr-6 pt-2">
              {brand.description}
            </p>

            {/* Contact Info Section */}
            <div className="space-y-4 text-[13px] text-slate-300 pt-6 border-t border-slate-800/80 w-full pr-6">
              <a href={`mailto:${brand.email}`} className="flex items-center gap-3 hover:text-orange-500 transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center group-hover:bg-orange-500/10">
                  <Mail className="w-4 h-4 text-blue-400 group-hover:text-orange-500" />
                </div>
                <span>{brand.email}</span>
              </a>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>
                <span className="leading-snug text-slate-400 whitespace-pre-line mt-1">
                  {brand.offices}
                </span>
              </div>
            </div>
          </div>

          {/* Services (Sliced to 5) */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-white">Services</h4>
            <ul className="mt-6 space-y-3 text-[13px] text-slate-400">
              {servicesData.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link href="/services" className="hover:text-blue-400 transition-colors block">{s.title}</Link>
                </li>
              ))}
              {servicesData.length > 5 && (
                <li className="pt-2">
                  <Link href="/services" className="text-blue-400 font-medium hover:text-blue-300 transition-colors">View All Services →</Link>
                </li>
              )}
            </ul>
          </div>

          {/* Jurisdictions */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-white">Jurisdictions</h4>
            <ul className="mt-6 space-y-3.5 text-[13px] text-slate-400">
              {/* Active Jurisdictions */}
              {countriesData.filter((c) => !c.comingSoon).map((c) => (
                <li key={c.slug}>
                  <Link href={`/services/${c.slug}`} className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <span className="text-base leading-none grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all">{c.flag}</span>
                    <span>{c.name}</span>
                  </Link>
                </li>
              ))}

              {/* Coming Soon Jurisdictions */}
              {countriesData.filter((c) => c.comingSoon).map((c) => (
                <li key={c.slug} className="flex items-center justify-between gap-2 text-slate-500/70 select-none">
                  <div className="flex items-center gap-2">
                    <span className="text-base leading-none grayscale opacity-40">{c.flag}</span>
                    <span>{c.name}</span>
                  </div>
                  <span className="text-[8px] bg-slate-900/80 text-slate-500 border border-slate-800 px-1.5 py-0.5 rounded font-mono uppercase tracking-tighter">
                    Soon
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries (Sliced to 5) */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-white">Industries</h4>
            <ul className="mt-6 space-y-3 text-[13px] text-slate-400">
              {industriesData.slice(0, 5).map((ind) => (
                <li key={ind.slug}>
                  <Link href={`/industries/${ind.slug}`} className="hover:text-blue-400 transition-colors block">{ind.title}</Link>
                </li>
              ))}
              {industriesData.length > 5 && (
                <li className="pt-2">
                  <Link href="/industries" className="text-blue-400 font-medium hover:text-blue-300 transition-colors">View All Industries →</Link>
                </li>
              )}
            </ul>
          </div>

          {/* Company & Socials */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-white">Company</h4>
            <ul className="mt-6 space-y-3 text-[13px] text-slate-400">
              {companyLinks.map((link) => (
                <li key={link.href} className={link.muted ? "pt-3 mt-3 border-t border-slate-800/80" : undefined}>
                  <Link href={link.href} className={link.highlight ? "font-semibold text-blue-400 hover:text-blue-300" : "hover:text-blue-400 block"}>
                    {link.label} {link.badge && <span className="text-[9px] bg-blue-900/50 px-1.5 py-0.5 rounded ml-1">{link.badge}</span>}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Connect</h5>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-900/50 transition-all hover:border-orange-500/50 hover:bg-orange-500/10"
                  >
                    <link.icon className="w-4 h-4 text-slate-400 transition-colors group-hover:text-orange-500" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legal Bar */}
        <div className="border-t border-orange-500/10 bg-[#020617] py-8">
          <div className="container-page flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] text-slate-400">
            <div>
              © {new Date().getFullYear()} <span className="text-white">Elite Filing Co.</span> All rights reserved.
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-3">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="relative group hover:text-orange-500 transition-colors duration-300">
                  {link.label}
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
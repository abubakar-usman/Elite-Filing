"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Send, CheckCircle2, Loader2 } from "lucide-react";
import { servicesData } from "@/lib/data/services";
import { countriesData } from "@/lib/data/countries";
import { industriesData } from "@/lib/data/industries";
import { toast } from "sonner";

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
      toast.success("Subscribed to global tax & compliance alerts!");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Error subscribing";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="mt-24 relative">
      {/* Refined gradient separator for elegance */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-700 via-blue-500 to-orange-500" />

      {/* Top Newsletter & Global Banner */}
      <div className="bg-slate-900 border-b border-slate-800/60 py-16 relative overflow-hidden">
        {/* Subtle background texture/glow */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-slate-800/30 blur-3xl pointer-events-none" />

        <div className="container-page flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
          <div className="max-w-2xl text-center lg:text-left">
            <h3 className="text-3xl font-bold font-display text-white">Subscribe to Global Corporate Insights</h3>
            <p className="mt-3 text-base text-slate-300">
              Get formation and compliance tips for global founders, straight to your inbox.
            </p>
          </div>

          <div className="w-full lg:w-auto min-w-[320px]">
            {subscribed ? (
              <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-sm font-medium shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Thank you for subscribing! Check your inbox soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
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
                      <span>Subscribe</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Mega Footer Columns Grid */}
      <div className="bg-slate-950 text-white">
        <div className="container-page py-20 grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          
          {/* Column 1: Brand & Office Hubs */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-1 w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg pr-2">
              <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 shrink-0">
                <Image src="/logo_new.png" alt="Elite Filing" width={48} height={48} className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col items-center justify-center pt-0.5 -ml-1">
                <div className="font-serif tracking-widest text-white text-sm sm:text-base uppercase leading-none" style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}>
                  ELITE FILING
                </div>
                <div className="font-sans font-bold tracking-[0.22em] text-[#f47b20] text-[5px] sm:text-[6px] mt-1 uppercase leading-none w-full text-center">
                  FORM.LAUNCH.GROW
                </div>
              </div>
            </Link>

            <p className="text-[13px] text-slate-400 leading-relaxed pr-6">
              A corporate services and consulting firm helping founders form, structure, and scale businesses across the US, UK, UAE, Canada, and Pakistan.
            </p>

            <div className="space-y-3.5 text-[13px] text-slate-300 pt-2 border-t border-slate-800/80 mr-6">
              <a href="mailto:hello@elite-filing.com" className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="w-7 h-7 rounded-md bg-slate-900 flex items-center justify-center group-hover:bg-blue-900/50 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <span>hello@elite-filing.com</span>
              </a>
              <a href="tel:+13025550134" className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="w-7 h-7 rounded-md bg-slate-900 flex items-center justify-center group-hover:bg-blue-900/50 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <span>+1 (302) 555-0134</span>
              </a>
              <div className="flex items-start gap-3 group">
                <div className="w-7 h-7 rounded-md bg-slate-900 flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <span className="leading-snug text-slate-400 mt-1">Delaware · London · Dubai<br/>Toronto · Rawalpindi</span>
              </div>
            </div>
          </div>

          {/* Column 2: 9 Services */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-white">Services</h4>
            <ul className="mt-6 space-y-3 text-[13px] text-slate-400">
              {servicesData.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-blue-400 transition-colors block">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: 5 Countries */}
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

          {/* Column 4: 6 Industries */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-white">Industries</h4>
            <ul className="mt-6 space-y-3 text-[13px] text-slate-400">
              {industriesData.map((ind) => (
                <li key={ind.slug}>
                  <Link href={`/industries/${ind.slug}`} className="hover:text-blue-400 transition-colors block">
                    {ind.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Company & Legal */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-white">Company</h4>
            <ul className="mt-6 space-y-3 text-[13px] text-slate-400">
              <li>
                <Link href="/track" className="font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2">
                  <span>Track Filing Status</span>
                  <span className="text-[9px] bg-blue-900/50 text-blue-300 border border-blue-700/50 px-1.5 py-0.5 rounded font-mono uppercase">Live</span>
                </Link>
              </li>
              <li><Link href="/pricing" className="hover:text-blue-400 transition-colors block">Pricing & Calculator</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors block">About Us</Link></li>
              <li><Link href="/resources" className="hover:text-blue-400 transition-colors block">Knowledge Center</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors block">Contact Us & Offices</Link></li>
              <li className="pt-3 mt-3 border-t border-slate-800/80">
                <Link href="/admin" className="text-slate-500 hover:text-slate-300 transition-colors block">
                  Specialist Portal (Admin)
                </Link>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Connect</h5>
              <div className="flex flex-wrap gap-4 text-[13px] text-slate-400">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Instagram</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">X (Twitter)</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar Legal */}
        <div className="border-t border-slate-800/80 bg-slate-950/50 py-8">
          <div className="container-page flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] text-slate-500">
            <div>
              © {new Date().getFullYear()} Elite Filing Co. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-3">
              <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
              <Link href="/refund" className="hover:text-slate-300 transition-colors">Refund Policy</Link>
              <Link href="/cookies" className="hover:text-slate-300 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

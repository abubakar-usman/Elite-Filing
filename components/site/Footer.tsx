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
    <footer className="mt-24 bg-slate-950 text-white border-t border-slate-800">
      
      {/* Top Newsletter & Global Banner */}
      <div className="border-b border-slate-800/80 bg-slate-900/60 py-12">
        <div className="container-page flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-2xl font-bold font-display text-white">Subscribe to Global Corporate Insights</h3>
            <p className="mt-2 text-sm text-slate-300">
              Get formation and compliance tips for global founders, straight to your inbox.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Thank you for subscribing! Check your inbox soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 w-full max-w-md">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 grow"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-5 py-3 rounded-xl font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 text-sm shrink-0 shadow-md disabled:opacity-50 cursor-pointer"
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
      <div className="container-page py-16 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        
        {/* Column 1: Brand & Office Hubs */}
        <div className="lg:col-span-1 space-y-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-white rounded-xl p-1.5 shrink-0">
              <Image src="/logo.png" alt="Elite Filing" width={36} height={36} className="h-9 w-9 object-contain" />
            </div>
            <div>
              <div className="font-display text-lg font-bold text-white">Elite Filing</div>
              <div className="text-[9px] tracking-[0.2em] font-bold text-orange-400 uppercase">Form · Launch · Grow</div>
            </div>
          </Link>

          <p className="text-xs text-slate-400 leading-relaxed">
            A corporate services and consulting firm helping founders form, structure, and scale businesses across the US, UK, UAE, Canada, and Pakistan.
          </p>

          <div className="space-y-2 text-xs text-slate-300 pt-2">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-orange-400 shrink-0" />
              <span>hello@elite-filing.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-orange-400 shrink-0" />
              <span>+1 (302) 555-0134</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <span>Delaware · London · Dubai · Toronto · Rawalpindi</span>
            </div>
          </div>
        </div>

        {/* Column 2: 9 Services */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-orange-400">Services</h4>
          <ul className="mt-4 space-y-2 text-xs text-slate-300">
            {servicesData.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-white transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: 5 Countries */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-orange-400">Jurisdictions</h4>
          <ul className="mt-4 space-y-2.5 text-xs text-slate-300">
            {countriesData.map((c) => (
              <li key={c.slug}>
                <Link href={`/countries/${c.slug}`} className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-sm leading-none">{c.flag}</span>
                  <span>{c.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: 6 Industries */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-orange-400">Industries</h4>
          <ul className="mt-4 space-y-2.5 text-xs text-slate-300">
            {industriesData.map((ind) => (
              <li key={ind.slug}>
                <Link href={`/industries/${ind.slug}`} className="hover:text-white transition-colors">
                  {ind.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5: Company & Legal */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-orange-400">Client Portal & Company</h4>
          <ul className="mt-4 space-y-2.5 text-xs text-slate-300">
            <li>
              <Link href="/track" className="font-semibold text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-1.5">
                <span>Track Filing Status</span>
                <span className="text-[10px] bg-orange-500/20 text-orange-400 border border-orange-500/30 px-1.5 py-0.5 rounded font-mono">LIVE</span>
              </Link>
            </li>
            <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing & Calculator</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/resources" className="hover:text-white transition-colors">Knowledge Center</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us & Offices</Link></li>
            <li className="pt-2 border-t border-slate-800">
              <Link href="/admin" className="text-slate-400 hover:text-slate-200 transition-colors">
                Specialist Portal (Admin)
              </Link>
            </li>
          </ul>

          <div className="mt-6 pt-4 border-t border-slate-800">
            <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Connect</h5>
            <div className="flex gap-3 text-slate-400 text-xs">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">LinkedIn</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">X (Twitter)</a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar Legal */}
      <div className="border-t border-slate-800/80 bg-slate-950 py-6">
        <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Elite Filing Co. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-6 text-slate-400">
            <Link href="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300">Terms of Service</Link>
            <Link href="/refund" className="hover:text-slate-300">Refund Policy</Link>
            <Link href="/cookies" className="hover:text-slate-300">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

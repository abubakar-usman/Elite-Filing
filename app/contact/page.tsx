import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";
import { officesData } from "@/lib/data/offices";
import { Mail, Phone, MapPin, MessageSquare, Calendar, Clock, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us & Global Offices — Elite Filing",
  description: "Get in touch with Elite Filing via WhatsApp, Calendly, direct email, phone, or visit our office locations in Delaware, London, Dubai, Toronto, and Karachi.",
};

export default function ContactPage() {
  return (
    <div className="pb-24">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-16 md:py-20 border-b border-slate-800 text-center">
        <div className="container-page max-w-4xl">
          <div className="eyebrow !text-orange-400 mx-auto mb-4">Contact & Support Hub</div>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white leading-tight">
            We&apos;re Here to Support Your <span className="text-orange">Global Growth</span>.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Connect directly with an international corporate specialist via WhatsApp, live Calendly scheduling, email, or visit our physical office hubs.
          </p>

          {/* Direct Quick Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/13025550134"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/25 text-sm transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat Instant on WhatsApp</span>
            </a>

            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-white bg-orange-500 hover:bg-orange-600 shadow-lg shadow-orange-500/25 text-sm transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Calendly Call</span>
            </a>

            <a
              href="tel:+13025550134"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>Call +1 (302) 555-0134</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Direct Contact Cards */}
      <section className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          
          {/* Direct Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Get in Touch</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Our average response time for general inquiries is under 4 business hours.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase">General & Sales Inquiries</div>
                  <div className="text-base font-semibold text-slate-900 dark:text-white mt-0.5">hello@elite-filing.com</div>
                  <div className="text-xs text-slate-500 mt-1">For new company formations, quotes, & strategy</div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase">Tax & Compliance Helpdesk</div>
                  <div className="text-base font-semibold text-slate-900 dark:text-white mt-0.5">compliance@elite-filing.com</div>
                  <div className="text-xs text-slate-500 mt-1">For existing client tax returns, filings, & legal notices</div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase">Instant WhatsApp Line</div>
                  <div className="text-base font-semibold text-slate-900 dark:text-white mt-0.5">+1 (302) 555-0134</div>
                  <div className="text-xs text-slate-500 mt-1">Available 24/7 for quick founder queries</div>
                </div>
              </div>
            </div>
          </div>

          {/* Department Inquiry Form */}
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Send an Inquiry</h3>
            <p className="text-xs text-slate-500 mb-6">Select your target department to route your message to a dedicated specialist.</p>
            <ContactForm />
          </div>

        </div>
      </section>

      {/* Global Office Locations Grid */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800">
        <div className="container-page">
          <div className="max-w-3xl mb-12">
            <div className="eyebrow">Physical Presence</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Five Global Office Locations
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              Our specialists operate directly out of registered office hubs in Delaware, London, Dubai, Toronto, and Karachi.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {officesData.map((off) => (
              <div
                key={off.id}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-4xl leading-none">{off.flag}</span>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-500">
                      {off.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{off.city}, {off.country}</h3>

                  <div className="mt-4 space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span>{off.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>{off.hours}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>{off.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>{off.email}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href={`https://maps.google.com/?q=${off.mapCoordinates.lat},${off.mapCoordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-orange-500 hover:text-orange-600"
                  >
                    <span>View Map Directions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

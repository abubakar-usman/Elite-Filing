"use client";

import { useState, useEffect } from "react";
import { X, Calendar, Clock, CheckCircle2, Phone, Mail, User, Globe, ArrowRight, MessageSquare } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function ConsultationModal({ isOpen, onClose, defaultService = "Company Formation" }: ConsultationModalProps) {
  const [activeTab, setActiveTab] = useState<"calendly" | "form">("calendly");
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "United States",
    service: defaultService,
    notes: ""
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-navy-deep to-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30">
              <Calendar className="w-5 h-5 text-orange" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white leading-snug">Book a Free 1-on-1 Strategy Session</h3>
              <p className="text-xs text-white/70">Speak directly with an international corporate specialist</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Toggle Bar */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-1.5 gap-2 shrink-0">
          <button
            onClick={() => setActiveTab("calendly")}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
              activeTab === "calendly"
                ? "bg-white dark:bg-slate-800 text-navy-deep dark:text-white shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Calendar className="w-4 h-4 text-orange-500" /> Live Calendly Scheduler
          </button>
          <button
            onClick={() => setActiveTab("form")}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
              activeTab === "form"
                ? "bg-white dark:bg-slate-800 text-navy-deep dark:text-white shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <MessageSquare className="w-4 h-4 text-orange-500" /> Quick Callback Request
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto grow">
          {activeTab === "calendly" ? (
            <div className="space-y-4">
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-4 flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <span className="font-semibold text-slate-900 dark:text-white">30-Minute Consultation:</span> Select a date & time below to schedule your private call with a specialist (US, UK, UAE, Canada, Pakistan).
                </div>
              </div>

              {/* Calendly Interactive Embed Component */}
              <div className="w-full min-h-[460px] bg-slate-50 dark:bg-slate-950/60 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden relative flex flex-col justify-center items-center p-6">
                <iframe
                  src="https://calendly.com"
                  title="Schedule Consultation"
                  className="w-full h-[460px] rounded-xl border-0 hidden sm:block"
                />
                <div className="sm:hidden text-center space-y-4 p-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center mx-auto">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-base text-slate-900 dark:text-white">Open Calendly Portal</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Click below to open our live scheduling calendar in a new tab.</p>
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white bg-orange-500 hover:bg-orange-600 text-sm shadow-md"
                  >
                    Open Calendly Schedule <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-semibold text-slate-900 dark:text-white">Consultation Requested!</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-slate-900 dark:text-white">{formData.name}</span>. A senior corporate strategist will reach out to <span className="font-semibold">{formData.email}</span> within 4 business hours.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-4 px-6 py-2.5 rounded-xl font-semibold text-white bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-sm"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Your Full Name *</label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Doe"
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Email Address *</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@company.com"
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Phone / WhatsApp Number</label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Target Jurisdiction</label>
                      <div className="relative">
                        <Globe className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <select
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none"
                        >
                          <option value="United States">🇺🇸 United States</option>
                          <option value="United Kingdom">🇬🇧 United Kingdom</option>
                          <option value="UAE">🇦🇪 United Arab Emirates</option>
                          <option value="Canada">🇨🇦 Canada</option>
                          <option value="Pakistan">🇵🇰 Pakistan</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Service Required</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none"
                    >
                      <option value="Company Formation">Company Formation & Registration</option>
                      <option value="Tax Registration & Filing">Tax Registration & Filing (EIN/VAT/NTN)</option>
                      <option value="Trademark & IP Protection">Trademark & IP Protection</option>
                      <option value="Registered Agent & Address">Registered Agent & Virtual Address</option>
                      <option value="Business Banking & Payments">Business Banking & Payments</option>
                      <option value="Accounting & Bookkeeping">Accounting & Bookkeeping</option>
                      <option value="Ecommerce Business Setup">Ecommerce Business Setup</option>
                      <option value="Growth & Marketing">Growth & Marketing</option>
                      <option value="Business Consultancy">Business Consultancy & Strategy</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Brief Description of Project</label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Tell us about your business goals, timeframe, or specific questions..."
                      className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-md shadow-orange-500/20 text-sm transition-all"
                    >
                      Submit Consultation Request
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 shrink-0">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Confidential & NDA Protected
          </div>
          <div>Response within 4 business hours</div>
        </div>
      </div>
    </div>
  );
}

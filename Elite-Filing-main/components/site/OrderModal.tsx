"use client";

import { useState } from "react";
import { X, CheckCircle2, Loader2, ShieldCheck, ArrowRight, Building2 } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCountry: "us" | "uk" | "uae" | "ca" | "pk";
  selectedTier: "starter" | "growth" | "scale";
  initialAddons?: {
    bankAccount?: boolean;
    trademark?: boolean;
    taxFiling?: boolean;
  };
}

export function OrderModal({
  isOpen,
  onClose,
  selectedCountry,
  selectedTier,
  initialAddons = {},
}: OrderModalProps) {
  const [loading, setLoading] = useState(false);
  const [orderResult, setOrderResult] = useState<{ orderId: string; totalAmount: number; currency: string } | null>(null);

  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    companyNameOption1: "",
    companyNameOption2: "",
    addons: {
      bankAccount: initialAddons.bankAccount ?? true,
      trademark: initialAddons.trademark ?? false,
      taxFiling: initialAddons.taxFiling ?? true,
      expressProcessing: false,
    },
    notes: "",
  });

  if (!isOpen) return null;

  const countryLabels: Record<string, string> = {
    us: "🇺🇸 United States",
    uk: "🇬🇧 United Kingdom",
    uae: "🇦🇪 United Arab Emirates",
    ca: "🇨🇦 Canada",
    pk: "🇵🇰 Pakistan",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        customerName: formData.customerName,
        email: formData.email,
        phone: formData.phone,
        country: selectedCountry,
        tier: selectedTier,
        companyNameOption1: formData.companyNameOption1,
        companyNameOption2: formData.companyNameOption2,
        addons: formData.addons,
        notes: formData.notes,
      };

      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        throw new Error(json.error || "Failed to process order.");
      }

      setOrderResult({
        orderId: json.data.id,
        totalAmount: json.data.totalAmount,
        currency: json.data.currency,
      });

      toast.success(`Filing Order #${json.data.id} Created!`);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Error placing order";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30">
              <Building2 className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Start Company Formation Order</h3>
              <p className="text-xs text-slate-300">
                {countryLabels[selectedCountry]} — <span className="capitalize font-semibold text-orange-400">{selectedTier} Package</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto grow">
          {orderResult ? (
            <div className="py-10 text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/20 shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Order Received & Queued!</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                Your filing order reference is{" "}
                <span className="font-mono font-bold text-orange-500 px-2 py-0.5 rounded bg-orange-500/10">
                  {orderResult.orderId}
                </span>
              </p>
              <p className="text-xs text-slate-500">
                Estimated Total: <span className="font-bold text-slate-900 dark:text-white">{orderResult.currency}{orderResult.totalAmount.toLocaleString()}</span>. An assigned corporate specialist will verify your company name and contact you within 2 business hours.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href={`/track?orderId=${orderResult.orderId}`}
                  onClick={onClose}
                  className="px-6 py-3 rounded-xl font-semibold text-white bg-orange-500 hover:bg-orange-600 shadow-md text-xs flex items-center gap-2"
                >
                  <span>Track Filing Status</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-xl font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 text-xs"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.customerName}
                    onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Work Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Desired Company Name (1st Preference) *</label>
                  <input
                    type="text"
                    required
                    value={formData.companyNameOption1}
                    onChange={(e) => setFormData({ ...formData, companyNameOption1: e.target.value })}
                    placeholder="e.g. Apex Global Systems LLC"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Backup Name (2nd Preference)</label>
                  <input
                    type="text"
                    value={formData.companyNameOption2}
                    onChange={(e) => setFormData({ ...formData, companyNameOption2: e.target.value })}
                    placeholder="e.g. Apex Global Solutions LLC"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Phone / WhatsApp</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 019-2831"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>

              {/* Addons Selection */}
              <div className="pt-2">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">Optional Services & Add-ons</label>
                <div className="grid gap-2 sm:grid-cols-2">
                  <label className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between text-xs cursor-pointer">
                    <span className="font-semibold text-slate-900 dark:text-white">Business Banking Intro</span>
                    <input
                      type="checkbox"
                      checked={formData.addons.bankAccount}
                      onChange={(e) => setFormData({ ...formData, addons: { ...formData.addons, bankAccount: e.target.checked } })}
                      className="rounded border-slate-300 text-orange-500 focus:ring-orange-500 w-4 h-4"
                    />
                  </label>
                  <label className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between text-xs cursor-pointer">
                    <span className="font-semibold text-slate-900 dark:text-white">Tax ID & VAT/NTN Filing</span>
                    <input
                      type="checkbox"
                      checked={formData.addons.taxFiling}
                      onChange={(e) => setFormData({ ...formData, addons: { ...formData.addons, taxFiling: e.target.checked } })}
                      className="rounded border-slate-300 text-orange-500 focus:ring-orange-500 w-4 h-4"
                    />
                  </label>
                  <label className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between text-xs cursor-pointer">
                    <span className="font-semibold text-slate-900 dark:text-white">Trademark Registration</span>
                    <input
                      type="checkbox"
                      checked={formData.addons.trademark}
                      onChange={(e) => setFormData({ ...formData, addons: { ...formData.addons, trademark: e.target.checked } })}
                      className="rounded border-slate-300 text-orange-500 focus:ring-orange-500 w-4 h-4"
                    />
                  </label>
                  <label className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between text-xs cursor-pointer">
                    <span className="font-semibold text-slate-900 dark:text-white">Express 24-hr Processing</span>
                    <input
                      type="checkbox"
                      checked={formData.addons.expressProcessing}
                      onChange={(e) => setFormData({ ...formData, addons: { ...formData.addons, expressProcessing: e.target.checked } })}
                      className="rounded border-slate-300 text-orange-500 focus:ring-orange-500 w-4 h-4"
                    />
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Additional Notes</label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Any specific state preferences or questions for your specialist..."
                  className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-md shadow-orange-500/20 text-sm flex items-center justify-center gap-2 disabled:opacity-50 transition-all cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Creating Order...</span>
                    </>
                  ) : (
                    <span>Submit & Queue Order</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 shrink-0">
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-emerald-500" /> Guaranteed Registration Filing
          </div>
          <div>No upfront payment needed until name check is approved</div>
        </div>
      </div>
    </div>
  );
}

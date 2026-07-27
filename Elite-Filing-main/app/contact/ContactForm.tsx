"use client";

import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { submitContactForm } from "@/app/actions/contact";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || "",
      company: (formData.get("company") as string) || "",
      country: formData.get("country") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await submitContactForm(data);

      if (!res.success) {
        throw new Error(res.error || "Failed to send message.");
      }

      setSubmitted(true);
      toast.success("Message sent! Check your email inbox for updates.");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "An unexpected error occurred.";
      setErrorMsg(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card-surface p-6 md:p-8">
      {submitted ? (
        <div className="text-center py-10 space-y-4 animate-fade-in">
          <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20 shadow-md">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Message Delivered to Specialists!</h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto">
            A confirmation notification has been dispatched. A senior corporate strategist will respond to your email within 4 business hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 px-6 py-2.5 rounded-xl font-semibold text-white bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-xs transition-colors"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Send your message</h2>
          <p className="mt-1 text-xs text-slate-500">We respond to all inquiries within 4 business hours.</p>

          {errorMsg && (
            <div className="mt-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field label="Full name" name="name" required placeholder="e.g. John Smith" />
            <Field label="Email address" type="email" name="email" required placeholder="john@company.com" />
            <Field label="Phone number" type="tel" name="phone" placeholder="e.g. +1 234 567 890" />
            <Field label="Company (optional)" name="company" placeholder="e.g. Acme Corp" />
            <SelectField
              label="Country of interest"
              name="country"
              required
              options={["United States", "United Kingdom", "United Arab Emirates", "Canada", "Pakistan", "Other"]}
            />
          </div>

          <div className="mt-4">
            <SelectField
              label="Service you're interested in"
              name="service"
              required
              options={[
                "Company Formation",
                "Tax & Compliance",
                "Trademark & IP",
                "Registered Agent & Address",
                "Accounting & Bookkeeping",
                "Ecommerce Setup",
                "Business Consultancy",
                "Something else",
              ]}
            />
          </div>

          <div className="mt-4">
            <label className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Tell us about your business</label>
            <textarea
              name="message"
              rows={4}
              required
              minLength={5}
              className="mt-1.5 w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Where are you today, and where do you want to expand?"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-md shadow-orange-500/20 text-sm flex items-center justify-center gap-2 disabled:opacity-50 transition-all cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending via Resend...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">{label}</label>
      <select
        name={name}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
        defaultValue=""
      >
        <option value="" disabled>Choose an option</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

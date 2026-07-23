"use client";

import { Send } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="card-surface p-8 md:p-10"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      {submitted ? (
        <div className="text-center py-10">
          <div className="w-14 h-14 mx-auto rounded-full bg-orange/10 flex items-center justify-center text-orange">
            <Send className="w-6 h-6" />
          </div>
          <h3 className="mt-5 text-2xl font-semibold text-navy-deep">Thanks — message received.</h3>
          <p className="mt-2 text-foreground/70">A specialist will be in touch within one business day.</p>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-semibold text-navy-deep">Send your message</h2>
          <p className="mt-2 text-sm text-foreground/70">We usually respond within one business day.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field label="Full name" name="name" required />
            <Field label="Email address" type="email" name="email" required />
            <Field label="Company (optional)" name="company" />
            <SelectField label="Country of interest" name="country" options={["United States", "United Kingdom", "United Arab Emirates", "Canada", "Pakistan", "Not sure yet"]} />
          </div>
          <div className="mt-4">
            <SelectField label="Service you're interested in" name="service" options={["Company Formation", "Tax & Compliance", "Trademark & IP", "Registered Agent & Address", "Accounting & Bookkeeping", "Ecommerce Setup", "Business Consultancy", "Something else"]} />
          </div>
          <div className="mt-4">
            <label className="text-xs uppercase tracking-widest text-foreground/60 font-semibold">Tell us about your business</label>
            <textarea
              name="message"
              rows={5}
              required
              className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange"
              placeholder="Where are you today, and where do you want to go?"
            />
          </div>
          <button type="submit" className="btn-accent mt-7 w-full sm:w-auto">
            Send Your Message <Send className="w-4 h-4" />
          </button>
        </>
      )}
    </form>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-foreground/60 font-semibold">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-foreground/60 font-semibold">{label}</label>
      <select
        name={name}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange"
        defaultValue=""
      >
        <option value="" disabled>Choose an option</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

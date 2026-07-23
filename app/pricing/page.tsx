"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, HelpCircle, Calculator } from "lucide-react";

type CountryKey = "us" | "uk" | "uae" | "ca" | "pk";

export default function PricingPage() {
  const [selectedCountry, setSelectedCountry] = useState<CountryKey>("us");
  const [calcNeedBank, setCalcNeedBank] = useState(true);
  const [calcNeedTrademark, setCalcNeedTrademark] = useState(false);
  const [calcNeedTax, setCalcNeedTax] = useState(true);

  // Country price matrix
  const pricingData: Record<CountryKey, {
    currency: string;
    starter: { price: number; name: string; desc: string };
    growth: { price: number; name: string; desc: string };
    scale: { price: number; name: string; desc: string };
    stateFeeNote: string;
  }> = {
    us: {
      currency: "$",
      starter: { price: 199, name: "US Starter LLC", desc: "Wyoming/Delaware LLC formation & registered agent." },
      growth: { price: 399, name: "US Business Complete", desc: "Starter + Official IRS EIN tax ID, Operating Agreement, & bank setup." },
      scale: { price: 799, name: "US Global Scale", desc: "Complete + USPTO trademark search, tax return preparation, & dedicated manager." },
      stateFeeNote: "+ official state filing fee ($60 for Wyoming, $90 for Delaware)."
    },
    uk: {
      currency: "£",
      starter: { price: 149, name: "UK Standard Formation", desc: "Companies House filing, London registered address, & digital certificates." },
      growth: { price: 299, name: "UK Business & VAT", desc: "Starter + HMRC Corporation Tax & VAT registration, Wise banking priority." },
      scale: { price: 599, name: "UK E-Commerce Scale", desc: "Business + UKIPO trademark submission & CT600 tax return prep." },
      stateFeeNote: "Includes mandatory £50 Companies House government fee."
    },
    uae: {
      currency: "$",
      starter: { price: 1850, name: "Free Zone Starter", desc: "1-Year Trade License, shared virtual office, & digital corporate kit." },
      growth: { price: 3650, name: "Dubai Business + Visa", desc: "Starter + 3-Year Residency Visa, Emirates ID, FTA Tax TRN, & bank account." },
      scale: { price: 6900, name: "UAE Enterprise & Mainland", desc: "Mainland license, up to 3 Visas, physical office Ejari, & trademark." },
      stateFeeNote: "Covers standard Free Zone authority registration."
    },
    ca: {
      currency: "$",
      starter: { price: 349, name: "Canada Federal Starter", desc: "Articles of Incorporation, NUANS name search, & CRA Business Number." },
      growth: { price: 699, name: "Canada Business & Tax", desc: "Starter + CRA GST/HST account, provincial registration, & Wise banking." },
      scale: { price: 1399, name: "Canada Scale Suite", desc: "Business + CIPO trademark filing & T2 Corporate Tax return prep." },
      stateFeeNote: "+ Canadian government filing fees ($200 CAD)."
    },
    pk: {
      currency: "PKR ",
      starter: { price: 45000, name: "SECP Starter Pvt Ltd", desc: "SECP Name reservation, digital signatures, & FBR NTN registration." },
      growth: { price: 85000, name: "Pakistan IT Export Suite", desc: "Starter + FBR Sales Tax (STRN), PSEB setup, & Meezan FCVA USD banking." },
      scale: { price: 165000, name: "Pakistan Scale & IPO", desc: "IT Suite + IPO Pakistan trademark filing, WebOC customs, & Chamber cert." },
      stateFeeNote: "Includes SECP digital signature processing."
    }
  };

  const curr = pricingData[selectedCountry];

  // Calculator estimated quote calculation
  const calculateTotal = () => {
    let base = selectedCountry === "pk" ? 45000 : selectedCountry === "uae" ? 1850 : selectedCountry === "uk" ? 149 : 199;
    if (calcNeedBank) base += selectedCountry === "pk" ? 20000 : selectedCountry === "uae" ? 500 : 150;
    if (calcNeedTrademark) base += selectedCountry === "pk" ? 35000 : selectedCountry === "uae" ? 1500 : 350;
    if (calcNeedTax) base += selectedCountry === "pk" ? 25000 : selectedCountry === "uae" ? 450 : 250;
    return base;
  };

  return (
    <div className="pb-24">
      
      {/* Hero */}
      <section className="container-page py-16 text-center max-w-4xl mx-auto">
        <div className="eyebrow mx-auto mb-4">100% Upfront Transparency</div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold text-navy-deep dark:text-white leading-tight">
          Simple, Predictable Pricing for <span className="text-orange">Every Jurisdiction</span>.
        </h1>
        <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          No hidden state maintenance fees, no surprise renewal hikes, no legal jargon. Choose your target country below to compare full corporate packages.
        </p>

        {/* Country Filter Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto p-2 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          {[
            { id: "us" as const, label: "🇺🇸 United States" },
            { id: "uk" as const, label: "🇬🇧 United Kingdom" },
            { id: "uae" as const, label: "🇦🇪 UAE" },
            { id: "ca" as const, label: "🇨🇦 Canada" },
            { id: "pk" as const, label: "🇵🇰 Pakistan" },
          ].map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCountry(c.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCountry === c.id
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container-page py-8">
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          
          {/* Starter */}
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Entry Tier</span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{curr.starter.name}</h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">{curr.starter.desc}</p>
              
              <div className="mt-6 font-extrabold text-4xl text-slate-900 dark:text-white font-display">
                {curr.currency}{curr.starter.price.toLocaleString()}
              </div>
              <p className="mt-1 text-[11px] text-slate-500">{curr.stateFeeNote}</p>

              <ul className="mt-8 space-y-3 text-xs text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Entity Articles filing</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Digital Certificate & Kit</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> 1st Year Registered Address</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Standard processing</li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
              <Link href="/contact" className="w-full py-3 rounded-xl font-semibold text-xs text-center text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 block">
                Select Starter Package
              </Link>
            </div>
          </div>

          {/* Growth - Recommended */}
          <div className="p-8 rounded-3xl bg-slate-900 text-white border-2 border-orange-500 shadow-2xl shadow-orange-500/20 flex flex-col justify-between relative">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider">
              Most Popular
            </span>

            <div>
              <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block">Complete Tier</span>
              <h3 className="text-2xl font-bold text-white mt-1">{curr.growth.name}</h3>
              <p className="mt-2 text-xs text-slate-300">{curr.growth.desc}</p>
              
              <div className="mt-6 font-extrabold text-4xl text-white font-display">
                {curr.currency}{curr.growth.price.toLocaleString()}
              </div>
              <p className="mt-1 text-[11px] text-slate-400">{curr.stateFeeNote}</p>

              <ul className="mt-8 space-y-3 text-xs text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" /> Everything in Starter</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" /> Tax Registration (EIN / VAT / NTN)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" /> Operating Agreement / MOA</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" /> Priority Bank Application Prep</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" /> Expedited 24-Hour Filing</li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <Link href="/contact" className="w-full py-3 rounded-xl font-semibold text-xs text-center text-white bg-orange-500 hover:bg-orange-600 block shadow-md">
                Select Complete Package
              </Link>
            </div>
          </div>

          {/* Scale */}
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Enterprise Tier</span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{curr.scale.name}</h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">{curr.scale.desc}</p>
              
              <div className="mt-6 font-extrabold text-4xl text-slate-900 dark:text-white font-display">
                {curr.currency}{curr.scale.price.toLocaleString()}
              </div>
              <p className="mt-1 text-[11px] text-slate-500">{curr.stateFeeNote}</p>

              <ul className="mt-8 space-y-3 text-xs text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Everything in Business Complete</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Full Trademark Application Search</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> 1st Year Tax Return Prep</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Dedicated Senior Specialist</li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
              <Link href="/contact" className="w-full py-3 rounded-xl font-semibold text-xs text-center text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 block">
                Select Scale Package
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Custom Quote Calculator */}
      <section className="container-page py-20 max-w-4xl">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Interactive Custom Quote Calculator</h3>
              <p className="text-xs text-slate-300">Configure your precise corporate setup requirements for instant estimate</p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 mt-8">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Target Country</label>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value as CountryKey)}
                  className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white"
                >
                  <option value="us">United States (LLC / C-Corp)</option>
                  <option value="uk">United Kingdom (LTD)</option>
                  <option value="uae">United Arab Emirates (Free Zone / Mainland)</option>
                  <option value="ca">Canada (Federal / Provincial)</option>
                  <option value="pk">Pakistan (SECP Pvt Ltd)</option>
                </select>
              </div>

              <div className="space-y-2 text-xs text-slate-300 pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={calcNeedBank}
                    onChange={(e) => setCalcNeedBank(e.target.checked)}
                    className="rounded text-orange-500 focus:ring-orange-500"
                  />
                  <span>Include Digital Banking & Payment Gateway Setup</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={calcNeedTax}
                    onChange={(e) => setCalcNeedTax(e.target.checked)}
                    className="rounded text-orange-500 focus:ring-orange-500"
                  />
                  <span>Include Tax Registration & 1st Year Compliance</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={calcNeedTrademark}
                    onChange={(e) => setCalcNeedTrademark(e.target.checked)}
                    className="rounded text-orange-500 focus:ring-orange-500"
                  />
                  <span>Include Trademark Application Search & Filing</span>
                </label>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between text-center">
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold block">Estimated Total Investment</span>
                <div className="text-4xl font-extrabold text-orange-400 font-display mt-3">
                  {curr.currency}{calculateTotal().toLocaleString()}
                </div>
                <p className="text-[11px] text-slate-500 mt-2">Transparent quote with zero hidden charges.</p>
              </div>

              <Link
                href="/contact"
                className="mt-6 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 shadow-md block text-center"
              >
                Lock In This Estimate Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="container-page py-12 max-w-4xl">
        <div className="max-w-2xl mb-8">
          <div className="eyebrow">Pricing FAQ</div>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">Questions About Pricing & State Fees</h2>
        </div>

        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h3 className="font-semibold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-orange-500" /> Are state and government fees included?
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              We separate government fees clearly so you see exactly what goes to state departments (e.g., $60 in Wyoming, £50 in UK) versus our service fees.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h3 className="font-semibold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-orange-500" /> Are there recurring annual renewal costs?
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Yes, state governments mandate annual report renewals (e.g. Wyoming $62/yr, Registered Agent $149/yr). We notify you 60 days before deadlines to keep your company in Good Standing.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

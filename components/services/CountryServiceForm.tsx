"use client";

import { useState } from "react";
import { CountryItem } from "@/lib/data/countries";
import { 
  CheckCircle2, Loader2, ArrowRight, ShoppingCart, X, PlusCircle,
  Building2, Shield, Landmark, Calculator, Briefcase, Globe2, FileText, FileCheck, Stamp
} from "lucide-react";
import { toast } from "sonner";

const getServiceIcon = (name: string) => {
  const nameLower = name.toLowerCase();
  if (nameLower.includes("llc") || nameLower.includes("corp") || nameLower.includes("ltd")) return <Building2 className="w-6 h-6 text-blue-500" />;
  if (nameLower.includes("agent") || nameLower.includes("protect")) return <Shield className="w-6 h-6 text-emerald-500" />;
  if (nameLower.includes("tax") || nameLower.includes("ein") || nameLower.includes("itin")) return <Calculator className="w-6 h-6 text-orange-500" />;
  if (nameLower.includes("bank")) return <Landmark className="w-6 h-6 text-indigo-500" />;
  if (nameLower.includes("compliance") || nameLower.includes("annual")) return <FileCheck className="w-6 h-6 text-purple-500" />;
  if (nameLower.includes("trademark")) return <Stamp className="w-6 h-6 text-rose-500" />;
  if (nameLower.includes("visa") || nameLower.includes("residency")) return <Globe2 className="w-6 h-6 text-sky-500" />;
  return <Briefcase className="w-6 h-6 text-slate-500" />;
};

const getServiceDescription = (name: string, countryName: string): string => {
  const nameLower = name.toLowerCase();
  
  if (nameLower.includes("llc")) return `Formation of a Limited Liability Company in ${countryName}, providing personal liability protection and flexible tax options.`;
  if (nameLower.includes("c-corp") || nameLower.includes("c-corp")) return `Incorporation of a C-Corporation, ideal for startups planning to raise venture capital or go public.`;
  if (nameLower.includes("ltd") || nameLower.includes("limited")) return `Registration of a Private Limited Company (Ltd), the most popular structure for businesses in ${countryName}.`;
  if (nameLower.includes("agent")) return `Reliable registered agent service to receive official government correspondence and legal notices on your behalf.`;
  if (nameLower.includes("ein") || nameLower.includes("tax id")) return `Procurement of your Employer Identification Number (EIN) or local Tax ID required for banking and tax filing.`;
  if (nameLower.includes("itin")) return `Assistance with the ITIN application process (Form W-7) for non-US residents.`;
  if (nameLower.includes("compliance") || nameLower.includes("annual")) return `Comprehensive support to ensure your business meets all annual state and federal compliance requirements.`;
  if (nameLower.includes("trademark")) return `Professional trademark services to protect your intellectual property and brand identity in ${countryName}.`;
  if (nameLower.includes("tax")) return `Expert tax preparation, filing, and advisory services to keep your business in good standing with authorities.`;
  if (nameLower.includes("bank") || nameLower.includes("account")) return `Guidance and support in opening a corporate bank account for your ${countryName} business.`;
  if (nameLower.includes("address") || nameLower.includes("virtual")) return `A premium virtual business address to establish a professional presence and receive mail.`;
  if (nameLower.includes("visa") || nameLower.includes("residency")) return `Assistance with corporate visa applications and residency programs for founders and employees.`;

  return `Professional ${name} service tailored to help you seamlessly operate and grow your business in ${countryName}.`;
};

interface CountryServiceFormProps {
  country: CountryItem;
}

export function CountryServiceForm({ country }: CountryServiceFormProps) {
  // Cart state: array of selected service names
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    notes: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Helper to get price by service name
  const getServicePrice = (name: string): number => {
    for (const cat of country.serviceCategories) {
      const item = cat.items.find((i) => i.name === name);
      if (item) return item.price;
    }
    return 0;
  };

  const toggleService = (name: string) => {
    setSelectedServices((prev) => 
      prev.includes(name) 
        ? prev.filter((s) => s !== name) 
        : [...prev, name]
    );
  };

  const totalPrice = selectedServices.reduce((sum, name) => sum + getServicePrice(name), 0);
  
  // Currency symbol
  const currency = country.slug === "united-kingdom" ? "£" : country.slug === "uae" ? "AED " : country.slug === "pakistan" ? "Rs " : "$";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedServices.length === 0) {
      toast.error("Please select at least one service.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      toast.success("Order submitted successfully! Our team will contact you shortly.");
      
      // Optionally save to localStorage or global state if persistence is needed later
      // But user requested "no checkout page for new", so just a success state is fine.
    } catch {
      toast.error("Failed to submit order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSuccess) {
    return (
      <div className="bg-white dark:bg-slate-900 border border-emerald-500/30 rounded-3xl p-10 text-center shadow-xl animate-fade-in">
        <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-emerald-500" />
        </div>
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Request Received</h3>
        <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
          Thank you for choosing Elite Filing. We have received your service request for {country.name}. One of our specialists will review your details and contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
      
      {/* Left Column: Services Selection */}
      <div className="lg:col-span-7 xl:col-span-7 space-y-10">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center text-sm">1</span>
            Select Services
          </h2>
          <p className="text-slate-500 text-sm mt-1 ml-10">Choose the services you need for your {country.name} business.</p>
        </div>

        {country.serviceCategories.map((category) => (
          <div key={category.categoryName} className="mb-12">
            <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-5 pb-3 border-b border-slate-200 dark:border-slate-800">
              {category.categoryName}
            </h3>
            <div className="grid sm:grid-cols-2 gap-5">
              {category.items.map((item) => (
                <div 
                  key={item.name}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-card hover:border-orange/30 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Subtle top gradient */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent group-hover:via-orange transition-colors" />
                  
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center mb-5 border border-slate-100 dark:border-slate-700/50 group-hover:scale-110 group-hover:bg-white dark:group-hover:bg-slate-800 transition-all shadow-sm">
                      {getServiceIcon(item.name)}
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                      {getServiceDescription(item.name, country.name)}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                    <span className="font-semibold text-slate-900 dark:text-white text-lg">
                      {currency}{item.price.toLocaleString()}
                    </span>
                    <button
                      onClick={() => !selectedServices.includes(item.name) && toggleService(item.name)}
                      disabled={selectedServices.includes(item.name)}
                      className={`text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 transition-colors ${
                        selectedServices.includes(item.name) 
                          ? "bg-navy text-white shadow-md border border-navy" 
                          : "bg-slate-50 text-slate-600 border border-slate-200 hover:bg-orange/10 hover:text-orange hover:border-orange/30 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-orange/10 dark:hover:text-orange dark:hover:border-orange/30"
                      }`}
                    >
                      {selectedServices.includes(item.name) ? (
                        <><CheckCircle2 className="w-4 h-4" /> Added</>
                      ) : (
                        <><PlusCircle className="w-4 h-4" /> Add</>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Right Column: Order Summary & Form (Sticky) */}
      <div className="lg:col-span-5 xl:col-span-5 relative">
        <div className="sticky top-24 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-card max-h-[calc(100vh-6rem)] overflow-y-auto overflow-x-hidden">
          
          {/* Cart Header */}
<div className="bg-navy-deep p-6 text-white flex items-center justify-between">
  <div className="flex items-center gap-3">
    <ShoppingCart className="w-5 h-5 text-orange" />
    <h3 className="text-white font-bold text-lg">
      Order Summary
    </h3>
  </div>

  <div className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold text-white">
    {selectedServices.length}{" "}
    {selectedServices.length === 1 ? "item" : "items"}
  </div>
</div>
          {/* Cart Items */}
          <div className="p-6 max-h-[250px] overflow-y-auto border-b border-slate-100 dark:border-slate-800">
            {selectedServices.length === 0 ? (
              <div className="text-center py-6 text-slate-500 text-sm">
                No services selected yet.
              </div>
            ) : (
              <ul className="space-y-3">
                {selectedServices.map((name) => (
                  <li key={name} className="flex justify-between items-center text-sm bg-white dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <span className="text-slate-700 dark:text-slate-300 font-medium leading-tight">{name}</span>
                    <div className="flex items-center gap-4 shrink-0">
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {currency}{getServicePrice(name).toLocaleString()}
                      </span>
                      <button 
                        type="button" 
                        onClick={() => toggleService(name)}
                        className="w-6 h-6 rounded-md flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-500/10 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Total */}
          <div className="p-6 bg-slate-50 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
            <span className="font-bold text-slate-900 dark:text-white">Total Estimate</span>
            <span className="text-2xl font-bold text-orange">
              {currency}{totalPrice.toLocaleString()}
            </span>
          </div>

          {/* Form */}
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Dropdown Selector */}
              <div className="mb-6 bg-slate-50 dark:bg-slate-800/40 p-5 rounded-2xl border border-slate-200 dark:border-slate-700/60">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Add Service
                </label>
                <select 
                  className="w-full px-5 py-3.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-base font-medium focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy text-slate-900 dark:text-white transition-all cursor-pointer"
                  onChange={(e) => {
                    if (e.target.value) {
                      if (!selectedServices.includes(e.target.value)) {
                        toggleService(e.target.value);
                      }
                      e.target.value = "";
                    }
                  }}
                  defaultValue=""
                >
                  <option value="" disabled>Select a service to add...</option>
                  {country.serviceCategories.flatMap(cat => cat.items.map(item => ({ ...item, category: cat.categoryName }))).map((item, index) => (
                    <option key={`${item.category}-${item.name}-${index}`} value={item.name} disabled={selectedServices.includes(item.name)}>
                      {item.name} — {currency}{item.price.toLocaleString()}
                    </option>
                  ))}
                </select>
              </div>

              <h4 className="font-bold text-slate-900 dark:text-white mb-4 mt-8 text-sm uppercase tracking-wider border-t border-slate-100 dark:border-slate-800 pt-6">Your Details</h4>
              <div>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Full Name" 
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/50 text-base focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy transition-all placeholder:text-slate-400" 
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email Address" 
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/50 text-base focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy transition-all placeholder:text-slate-400" 
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/50 text-base focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy transition-all placeholder:text-slate-400" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  name="companyName"
                  placeholder="Company Name (Optional)" 
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/50 text-base focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy transition-all placeholder:text-slate-400" 
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting || selectedServices.length === 0}
                className="w-full py-4 rounded-xl bg-orange hover:bg-orange-soft text-white font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-6 text-lg shadow-lg shadow-orange/20 hover:shadow-orange/40"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Checkout <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
              
              <p className="text-center text-sm text-slate-500 mt-4">
                No payment required today. We will review your request and send an official invoice.
              </p>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
}

"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, Loader2, CheckCircle2, Clock, FileText, UserCheck, ShieldCheck, AlertCircle, ArrowRight, Building } from "lucide-react";
import { OrderFiling } from "@/lib/db/schema";
import { toast } from "sonner";
import Link from "next/link";

function TrackContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("orderId") || "";

  const [query, setQuery] = useState(initialQuery);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState<OrderFiling | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchStatus = async (searchQuery: string) => {
    if (!searchQuery.trim()) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: searchQuery }),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        throw new Error(json.error || "No filing order found.");
      }

      setOrder(json.data);
      toast.success(`Filing Status Loaded for #${json.data.id}`);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Error loading status";
      setOrder(null);
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialQuery) {
      fetchStatus(initialQuery);
    }
  }, [initialQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchStatus(query);
  };

  const getStatusBadge = (status: OrderFiling["status"]) => {
    switch (status) {
      case "completed":
        return <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">Filing Completed</span>;
      case "ein_vat_issuance":
        return <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/10 text-purple-600 border border-purple-500/20">Tax ID Issuance</span>;
      case "government_processing":
        return <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 border border-blue-500/20">Government Filing</span>;
      case "name_reservation":
        return <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-600 border border-amber-500/20">Name Check</span>;
      default:
        return <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-500/10 text-slate-600 border border-slate-500/20">Submitted</span>;
    }
  };

  return (
    <div className="pb-24">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-16 md:py-20 border-b border-slate-800 text-center">
        <div className="container-page max-w-3xl">
          <div className="eyebrow !text-orange-400 mx-auto mb-4">Real-Time Client Portal</div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
            Track Corporate <span className="text-orange">Filing Progress</span>
          </h1>
          <p className="mt-4 text-base text-slate-300 max-w-xl mx-auto">
            Enter your Order ID (e.g. EF-2026-8942) or registered email address to view live state submission updates and documents.
          </p>

          {/* Search Box */}
          <form onSubmit={handleSearch} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <div className="relative grow">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
              <input
                type="text"
                required
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter Order ID (EF-2026-8942) or Email"
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 font-mono"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3.5 rounded-2xl font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-lg shadow-orange-500/25 text-sm flex items-center justify-center gap-2 shrink-0 disabled:opacity-50 transition-all cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Searching...</span>
                </>
              ) : (
                <>
                  <span>Track Order</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Order Chips */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
            <span>Try sample order IDs:</span>
            <button
              onClick={() => {
                setQuery("EF-2026-8942");
                fetchStatus("EF-2026-8942");
              }}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 font-mono text-orange-400 border border-slate-700 transition-colors"
            >
              EF-2026-8942 (US LLC)
            </button>
            <button
              onClick={() => {
                setQuery("EF-2026-1044");
                fetchStatus("EF-2026-1044");
              }}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 font-mono text-orange-400 border border-slate-700 transition-colors"
            >
              EF-2026-1044 (Pakistan SECP)
            </button>
          </div>
        </div>
      </section>

      {/* Main Track Output Section */}
      <section className="container-page py-12 max-w-4xl">
        {error && (
          <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-600 text-sm flex items-start gap-3">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold">Filing Record Not Found</div>
              <p className="text-xs text-red-500 mt-1">{error}</p>
            </div>
          </div>
        )}

        {order && (
          <div className="space-y-8 animate-fade-in">
            {/* Header Status Card */}
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xl font-bold text-orange-500">{order.id}</span>
                  {getStatusBadge(order.status)}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-2 flex items-center gap-2">
                  <Building className="w-5 h-5 text-orange-500" />
                  <span>{order.companyNameOption1}</span>
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Filed by <span className="font-semibold text-slate-700 dark:text-slate-300">{order.customerName}</span> ({order.email}) · Created on {new Date(order.createdAt).toLocaleDateString()}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-right text-xs space-y-1">
                <div className="text-slate-400 uppercase tracking-wider font-semibold text-[10px]">Estimated Completion</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  {new Date(order.estimatedCompletionDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </div>
                <div className="text-emerald-500 font-semibold flex items-center justify-end gap-1 text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5" /> On Track
                </div>
              </div>
            </div>

            {/* Grid Layout: Timeline + Specialist Info */}
            <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
              
              {/* Timeline Steps */}
              <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span>Filing Milestone Progress</span>
                </h3>

                <div className="space-y-6 relative before:absolute before:inset-0 before:left-[19px] before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800 before:z-0">
                  {order.timeline.map((step, idx) => (
                    <div key={idx} className="relative z-10 flex items-start gap-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2 transition-all ${
                          step.completed
                            ? "bg-emerald-500 border-emerald-500 text-white shadow-md shadow-emerald-500/20"
                            : step.current
                            ? "bg-orange-500 border-orange-500 text-white ring-4 ring-orange-500/20 animate-pulse"
                            : "bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-400"
                        }`}
                      >
                        {step.completed ? (
                          <CheckCircle2 className="w-5 h-5" />
                        ) : (
                          <span className="text-xs font-bold">{idx + 1}</span>
                        )}
                      </div>

                      <div className="grow pt-1">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className={`text-sm font-bold ${step.completed || step.current ? "text-slate-900 dark:text-white" : "text-slate-500"}`}>
                            {step.title}
                          </h4>
                          <span className="text-[11px] text-slate-400 font-mono">{step.date}</span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar: Specialist & Issued Documents */}
              <div className="space-y-6">
                
                {/* Specialist Card */}
                <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-md">
                  <div className="text-[11px] font-bold text-orange-400 uppercase tracking-widest mb-3">Assigned Specialist</div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-lg border border-orange-500/30">
                      {order.specialistAssigned.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">{order.specialistAssigned.name}</div>
                      <div className="text-xs text-slate-400">{order.specialistAssigned.officeLocation}</div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-800 text-xs space-y-2">
                    <div className="flex items-center justify-between text-slate-300">
                      <span>Direct Contact:</span>
                      <a href={`mailto:${order.specialistAssigned.email}`} className="text-orange-400 hover:underline">
                        Email Specialist
                      </a>
                    </div>
                  </div>
                </div>

                {/* Issued Documents */}
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-orange-500" />
                    <span>Issued Documents</span>
                  </h4>

                  {order.documentsIssued.length === 0 ? (
                    <p className="text-xs text-slate-500 italic">Documents will appear here once issued by government authority.</p>
                  ) : (
                    <div className="space-y-2">
                      {order.documentsIssued.map((doc, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs">
                          <div>
                            <div className="font-semibold text-slate-900 dark:text-white">{doc.name}</div>
                            <div className="text-[10px] text-slate-400">Issued {doc.issuedDate}</div>
                          </div>
                          <span className="px-2 py-1 rounded bg-orange-500/10 text-orange-500 font-mono text-[10px] font-bold">
                            {doc.type}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>

            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default function TrackPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-500">Loading Filing Tracker...</div>}>
      <TrackContent />
    </Suspense>
  );
}

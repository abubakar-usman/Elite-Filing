"use client";

import { useState, useEffect } from "react";
import { OrderFiling, ContactInquiry, ConsultationBooking } from "@/lib/db/schema";
import { RefreshCw, CheckCircle2, FileText, Calendar, Building2, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

export default function AdminDashboardPage() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<{ totalInquiries: number; totalConsultations: number; totalOrders: number; totalSubscribers: number; activeFilingOrders: number } | null>(null);
  const [orders, setOrders] = useState<OrderFiling[]>([]);
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);
  const [consultations, setConsultations] = useState<ConsultationBooking[]>([]);

  const [activeTab, setActiveTab] = useState<"orders" | "inquiries" | "consultations">("orders");
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      // Fetch stats
      const statsRes = await fetch("/api/health");
      const statsJson = await statsRes.json();
      if (statsJson.stats) setStats(statsJson.stats);

      // Fetch orders
      const ordersRes = await fetch("/api/orders");
      const ordersJson = await ordersRes.json();
      if (ordersJson.data) setOrders(ordersJson.data);

      toast.success("Dashboard data refreshed");
    } catch (err) {
      console.error(err);
      toast.error("Failed to load admin dashboard data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdateStatus = async (orderId: string, newStatus: OrderFiling["status"]) => {
    setUpdatingId(orderId);
    try {
      const res = await fetch(`/api/orders/${orderId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error || "Failed to update status");
      }

      setOrders((prev) =>
        prev.map((o) => (o.id === orderId ? json.data : o))
      );

      toast.success(`Order #${orderId} updated to ${newStatus}`);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Error updating status";
      toast.error(msg);
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="pb-24 pt-8">
      <div className="container-page">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <div className="eyebrow">Corporate Operations Hub</div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">Specialist Portal & Orders Dashboard</h1>
          </div>

          <button
            onClick={fetchData}
            disabled={loading}
            className="px-4 py-2.5 rounded-xl font-semibold text-xs text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            <span>Refresh Data</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-8">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase">Active Filing Orders</div>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">{stats?.activeFilingOrders ?? 0}</div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase">Total Orders Filed</div>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">{stats?.totalOrders ?? 0}</div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase">Inquiries & Leads</div>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">{stats?.totalInquiries ?? 0}</div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase">Strategy Bookings</div>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">{stats?.totalConsultations ?? 0}</div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
              <Calendar className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 mt-10 gap-6">
          <button
            onClick={() => setActiveTab("orders")}
            className={`pb-3 text-sm font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === "orders"
                ? "border-orange-500 text-orange-500"
                : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Client Filing Orders ({orders.length})
          </button>
          <button
            onClick={() => setActiveTab("inquiries")}
            className={`pb-3 text-sm font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === "inquiries"
                ? "border-orange-500 text-orange-500"
                : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Contact Inquiries ({inquiries.length})
          </button>
          <button
            onClick={() => setActiveTab("consultations")}
            className={`pb-3 text-sm font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === "consultations"
                ? "border-orange-500 text-orange-500"
                : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Strategy Bookings ({consultations.length})
          </button>
        </div>

        {/* Content Table */}
        <div className="mt-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm overflow-hidden">
          {activeTab === "orders" ? (
            orders.length === 0 ? (
              <div className="p-12 text-center text-slate-500">No filing orders recorded yet.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-semibold uppercase tracking-wider">
                      <th className="p-4">Order ID & Company</th>
                      <th className="p-4">Client Contact</th>
                      <th className="p-4">Jurisdiction & Tier</th>
                      <th className="p-4">Total Amount</th>
                      <th className="p-4">Filing Stage Status</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {orders.map((o) => (
                      <tr key={o.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="p-4">
                          <div className="font-mono font-bold text-orange-500 text-sm">{o.id}</div>
                          <div className="font-semibold text-slate-900 dark:text-white mt-0.5">{o.companyNameOption1}</div>
                          {o.companyNameOption2 && <div className="text-[10px] text-slate-400">Alt: {o.companyNameOption2}</div>}
                        </td>

                        <td className="p-4">
                          <div className="font-semibold text-slate-900 dark:text-white">{o.customerName}</div>
                          <div className="text-slate-500">{o.email}</div>
                          {o.phone && <div className="text-[10px] text-slate-400">{o.phone}</div>}
                        </td>

                        <td className="p-4">
                          <div className="font-bold uppercase text-slate-900 dark:text-white">{o.country}</div>
                          <div className="capitalize text-slate-500">{o.tier} Package</div>
                        </td>

                        <td className="p-4 font-bold text-slate-900 dark:text-white font-mono text-sm">
                          {o.currency}{o.totalAmount.toLocaleString()}
                        </td>

                        <td className="p-4">
                          <select
                            value={o.status}
                            disabled={updatingId === o.id}
                            onChange={(e) => handleUpdateStatus(o.id, e.target.value as OrderFiling["status"])}
                            className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none"
                          >
                            <option value="submitted">1. Submitted</option>
                            <option value="name_reservation">2. Name Reservation</option>
                            <option value="doc_verification">3. Doc Verification</option>
                            <option value="government_processing">4. Government Processing</option>
                            <option value="ein_vat_issuance">5. Tax ID Issuance</option>
                            <option value="completed">6. Filing Completed</option>
                          </select>
                        </td>

                        <td className="p-4 text-right">
                          <Link
                            href={`/track?orderId=${o.id}`}
                            className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-600 font-semibold"
                          >
                            <span>View Portal</span>
                            <ChevronRight className="w-4 h-4" />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          ) : (
            <div className="p-12 text-center text-slate-500">
              {activeTab === "inquiries" ? "Contact inquiries will populate here as messages arrive." : "Strategy call bookings will populate here."}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

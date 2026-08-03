import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Building2, FileText, CheckSquare, Clock, ArrowUpRight, ShieldCheck, FolderPlus } from "lucide-react";
import { StripeCheckoutButton } from "./StripeCheckoutButton";
import { TaskToggleButton } from "./TaskToggleButton";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  const sessionUser = session?.user as { id?: string; email?: string; name?: string } | undefined;

  if (!sessionUser || !sessionUser.email) {
    redirect("/login");
  }

  // Fetch real User record from Supabase PostgreSQL
  const user = await prisma.user.findUnique({
    where: { email: sessionUser.email.toLowerCase() },
    include: {
      companies: {
        include: { filings: true },
      },
      documents: true,
      tasks: {
        orderBy: { createdAt: "desc" },
      },
    },
  });

  if (!user) {
    redirect("/login");
  }

  const allFilings = user.companies.flatMap((c) => c.filings);
  const activeFilings = allFilings.filter((f) => f.status !== "Completed");
  const completedFilings = allFilings.filter((f) => f.status === "Completed");

  return (
    <div className="min-h-screen bg-slate-950 text-white pb-24 pt-8">
      <div className="container-page">
        
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-8">
          <div>
            <div className="eyebrow !text-orange-400">Authenticated Client Portal</div>
            <h1 className="text-3xl sm:text-4xl font-bold font-display text-white mt-1">
              Welcome, <span className="text-orange-400">{user.name || user.email.split("@")[0]}</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Real-time governance, filing status, and compliance center for your corporate entities.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/dashboard/documents"
              className="px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors flex items-center gap-2"
            >
              <FolderPlus className="w-4 h-4 text-orange-400" />
              <span>Document Center</span>
            </Link>
            <Link
              href="/services"
              className="px-4 py-2.5 rounded-xl font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-colors shadow-md text-xs flex items-center gap-2"
            >
              <span>Form New Company</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Real Metrics Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-8">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase">Registered Companies</span>
              <Building2 className="w-5 h-5 text-orange-400" />
            </div>
            <div className="text-3xl font-extrabold text-white mt-2 font-display">{user.companies.length}</div>
            <div className="text-[11px] text-slate-500 mt-1">Entity structures under management</div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase">Active Filings</span>
              <Clock className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-3xl font-extrabold text-white mt-2 font-display">{activeFilings.length}</div>
            <div className="text-[11px] text-slate-500 mt-1">{completedFilings.length} completed filings</div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase">Pending Tasks</span>
              <CheckSquare className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-3xl font-extrabold text-white mt-2 font-display">
              {user.tasks.filter((t) => !t.isCompleted).length}
            </div>
            <div className="text-[11px] text-slate-500 mt-1">Action items requiring attention</div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase">Vault Documents</span>
              <FileText className="w-5 h-5 text-purple-400" />
            </div>
            <div className="text-3xl font-extrabold text-white mt-2 font-display">{user.documents.length}</div>
            <div className="text-[11px] text-slate-500 mt-1">Verified files stored in Supabase</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-[1fr_360px] mt-10">
          
          {/* Companies & Filings List */}
          <div className="space-y-8">
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-orange-400" />
                  <span>My Corporate Entities</span>
                </h2>
                <span className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-mono">
                  {user.companies.length} Total
                </span>
              </div>

              {user.companies.length === 0 ? (
                <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-4">
                  <p className="text-sm text-slate-400">No corporate entities registered yet.</p>
                  <StripeCheckoutButton userId={user.id} serviceName="US Starter LLC Formation" priceAmount={199} />
                </div>
              ) : (
                <div className="space-y-4">
                  {user.companies.map((comp) => (
                    <div key={comp.id} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-base text-white">{comp.name}</span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-500/10 text-orange-400 border border-orange-500/20">
                            {comp.jurisdiction}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">
                          Entity Type: {comp.entityType} · Created {new Date(comp.createdAt).toLocaleDateString()}
                        </p>

                        {/* Filings for Company */}
                        <div className="mt-3 space-y-2">
                          {comp.filings.map((filing) => (
                            <div key={filing.id} className="flex items-center gap-2 text-xs">
                              <span className="text-slate-300 font-semibold">{filing.serviceName}</span>
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                filing.status === "Paid" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"
                              }`}>
                                {filing.status}
                              </span>
                              <span className="text-slate-500 font-mono">${filing.pricePaid}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <StripeCheckoutButton userId={user.id} companyName={comp.name} serviceName="Tax & Compliance Package" priceAmount={250} buttonText="Add Tax Filing ($250)" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Action Tasks Sidebar */}
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-emerald-400" />
                <span>Pending Onboarding Tasks</span>
              </h3>

              {user.tasks.length === 0 ? (
                <p className="text-xs text-slate-500 italic">No active tasks. Outstanding items will appear here after filing.</p>
              ) : (
                <div className="space-y-3">
                  {user.tasks.map((task) => (
                    <div key={task.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                      <TaskToggleButton taskId={task.id} isCompleted={task.isCompleted} />
                      <div>
                        <div className={`text-xs font-semibold ${task.isCompleted ? "line-through text-slate-500" : "text-white"}`}>
                          {task.title}
                        </div>
                        {task.description && <div className="text-[11px] text-slate-400 mt-0.5">{task.description}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Client Security Banner */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2 font-bold text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Supabase PostgreSQL Protection</span>
              </div>
              <p>All corporate records and filing metadata are synced in real time to your Supabase cloud database instance.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

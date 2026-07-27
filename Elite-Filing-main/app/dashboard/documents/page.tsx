import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { FileText, ArrowLeft, Download, ShieldCheck } from "lucide-react";
import { DocumentUploader } from "./DocumentUploader";

export interface DocumentItem {
  id: string;
  name: string;
  url: string;
  status: string;
  createdAt: Date | string;
  userId?: string | null;
  filingId?: string | null;
}

export interface UserWithDocuments {
  id: string;
  email: string;
  name?: string | null;
  documents: DocumentItem[];
}

export default async function DocumentsPage() {
  const session = await getServerSession(authOptions);
  const sessionUser = session?.user as { id?: string; email?: string } | undefined;

  if (!sessionUser || !sessionUser.email) {
    redirect("/login");
  }

  // Fetch real User and their Documents from Supabase PostgreSQL via Prisma
  const user: UserWithDocuments | null = await prisma.user.findUnique({
    where: { email: sessionUser.email.toLowerCase() },
    include: {
      documents: {
        orderBy: { createdAt: "desc" },
      },
    },
  });

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white pb-24 pt-8">
      <div className="container-page max-w-5xl space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <Link href="/dashboard" className="inline-flex items-center gap-1.5 text-xs text-orange-400 hover:underline mb-2">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Dashboard
            </Link>
            <h1 className="text-3xl font-bold font-display text-white">Document Vault & Compliance Center</h1>
            <p className="text-xs text-slate-400 mt-1">
              Secure UploadThing cloud storage for identity verification, passports, and incorporation certificates.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
            <ShieldCheck className="w-4 h-4" />
            <span>Encrypted Vault Storage</span>
          </div>
        </div>

        {/* UploadThing Upload Zone */}
        <DocumentUploader />

        {/* Uploaded Documents List */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-purple-400" />
              <span>Vault Document Table</span>
            </h2>
            <span className="text-xs font-mono text-slate-400 px-3 py-1 rounded-full bg-slate-800">
              {user.documents.length} Uploaded Files
            </span>
          </div>

          {user.documents.length === 0 ? (
            <div className="p-10 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-2">
              <FileText className="w-10 h-10 text-slate-600 mx-auto" />
              <p className="text-sm text-slate-400">No documents uploaded to database yet.</p>
              <p className="text-xs text-slate-500">Use the UploadThing dropzone above to store identity files or corporate articles.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-950 text-slate-400 border-b border-slate-800 uppercase font-semibold text-[10px] tracking-wider">
                    <th className="p-4">Document Name</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Uploaded At</th>
                    <th className="p-4 text-right">Download File</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {user.documents.map((doc: DocumentItem) => (
                    <tr key={doc.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="p-4 font-semibold text-white flex items-center gap-2">
                        <FileText className="w-4 h-4 text-orange-400 shrink-0" />
                        <span>{doc.name}</span>
                      </td>
                      <td className="p-4">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {doc.status}
                        </span>
                      </td>
                      <td className="p-4 text-slate-400 font-mono text-[11px]">
                        {new Date(doc.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </td>
                      <td className="p-4 text-right">
                        <a
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 font-semibold text-xs"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>View File</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}


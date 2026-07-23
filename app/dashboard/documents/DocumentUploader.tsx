"use client";

import { UploadDropzone } from "@uploadthing/react";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { FileText, ShieldCheck } from "lucide-react";

export function DocumentUploader() {
  const router = useRouter();

  return (
    <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-orange-400" />
            <span>Secure Vault Upload (UploadThing)</span>
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Upload Passport, Drivers License, or Articles PDF (max 16MB).
          </p>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Encrypted Storage</span>
        </div>
      </div>

      <div className="border-2 border-dashed border-slate-700 hover:border-orange-500/50 rounded-2xl p-4 transition-colors bg-slate-950/60">
        <UploadDropzone<OurFileRouter, "documentUploader">
          endpoint="documentUploader"
          onClientUploadComplete={(res) => {
            toast.success("Document uploaded & saved to database!");
            router.refresh();
          }}
          onUploadError={(error: Error) => {
            toast.error(`Upload error: ${error.message}`);
          }}
          appearance={{
            button: "bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs py-2 px-4 rounded-xl transition-colors",
            label: "text-xs text-slate-300 font-medium",
            allowedContent: "text-[10px] text-slate-500",
          }}
        />
      </div>
    </div>
  );
}

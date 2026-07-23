"use client";

import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ConsultationModal } from "@/components/site/ConsultationModal";
import { StickyCTA } from "@/components/site/StickyCTA";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header onOpenConsultation={() => setModalOpen(true)} />
      <main className="flex-1">{children}</main>
      <Footer />

      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />

      <StickyCTA onOpenConsultation={() => setModalOpen(true)} />
    </div>
  );
}

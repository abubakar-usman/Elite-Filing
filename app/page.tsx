import type { Metadata } from "next";
import { TrustSignals } from "@/components/site/TrustSignals";
import { HomeJsonLd } from "@/components/home/HomeJsonLd";
import { Hero } from "@/components/home/Hero";
import { Overview } from "@/components/home/Overview";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Countries } from "@/components/home/Countries";
import { WhyChoose } from "@/components/home/WhyChoose";
import { HowItWorks } from "@/components/home/HowItWorks";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Elite Filing — Form, Launch, and Scale Your Business Globally",
  description:
    "Elite Filing helps founders register companies, manage tax and compliance, and expand across the US, UK, UAE, Canada, and Pakistan — with transparent pricing and dedicated specialists.",
  alternates: { canonical: "https://elite-filing.com" },
  openGraph: {
    title: "Elite Filing — Form, Launch, and Scale Your Business Globally",
    description:
      "Elite Filing helps founders register companies, manage tax and compliance, and expand across the US, UK, UAE, Canada, and Pakistan — with transparent pricing and dedicated specialists.",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <Hero />
      <TrustSignals />
      <Overview />
      <ServicesGrid />
      <Countries />
      <WhyChoose />
      <HowItWorks />
      <TestimonialsSection />
      <ConsultationCTA />
      <FinalCTA />
    </>
  );
}

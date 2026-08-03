import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { countriesData } from "@/lib/data/countries";
import { ChevronRight, HelpCircle, MapPin } from "lucide-react";
import { TrustSignals } from "@/components/site/TrustSignals";
import { CountryServiceForm } from "@/components/services/CountryServiceForm";

interface CountryPageProps {
  params: Promise<{ country: string }>;
}

export async function generateStaticParams() {
  return countriesData.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({ params }: CountryPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const item = countriesData.find((c) => c.slug === resolvedParams?.country);
  if (!item) return { title: "Services Not Found" };

  return {
    title: `${item.name} Corporate Services & Pricing — Elite Filing`,
    description: item.heroDesc || item.intro,
    alternates: { canonical: `https://elite-filing.com/services/${item.slug}` },
  };
}

export default async function CountryServicesPage({ params }: CountryPageProps) {
  const resolvedParams = await params;
  const item = countriesData.find((c) => c.slug === resolvedParams?.country);

  if (!item) {
    notFound();
  }

  return (
    <div className="pb-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
      
      {/* ── Breadcrumb Strip ── */}
      <div className="w-full bg-[#f8fafe] dark:bg-slate-900/60 border-b border-[#0e3b96]/10 dark:border-slate-800 py-3.5">
        <div className="container-page flex items-center gap-2.5 text-[13px] font-semibold text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-[#0e3b96] dark:hover:text-blue-300 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600" />
          <Link href="/services" className="hover:text-[#0e3b96] dark:hover:text-blue-300 transition-colors">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#F07228]" />
          <span className="text-[#0e3b96] dark:text-white flex items-center gap-1.5">
            {item.name}
          </span>
        </div>
      </div>

      {/* ── Country Hero ── */}
      <section 
        className="relative w-full overflow-hidden bg-slate-900 flex flex-col justify-center"
        style={{ minHeight: "clamp(500px, 60vh, 700px)" }}
      >
        {/* Background Image - Clean and natural without the blue tint */}
        <div className="absolute inset-0 z-0">
          <Image
            src={item.heroImage || "/back.jpg"}
            alt={item.name}
            fill
            priority
            className="object-cover opacity-90"
            style={{ objectPosition: item.heroImagePosition || "center center" }}
          />
          {/* 
            Neutral gradient overlay: dark on the left for text readability, 
            completely transparent on the right to let the image pop 
          */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent z-10" />
        </div>

        <div className="container-page relative z-20 py-24 md:py-32 lg:py-40">
          <div className="max-w-2xl">
            
            {/* Jurisdiction Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-5 shadow-lg">
              <span className="text-xl leading-none drop-shadow-sm">{item.flag}</span>
              <div className="w-px h-4 bg-white/30" />
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#F88D4F]" />
                <span className="text-[12px] font-bold text-white uppercase tracking-wider">{item.name} Jurisdiction</span>
              </div>
            </div>

            {/* Headline - Scaled Down */}
            <h1 className="font-display text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-[1.2] drop-shadow-lg">
              {item.pageHeadline}
            </h1>

            {/* Description - Scaled Down */}
            <p className="mt-4 text-base md:text-[17px] text-slate-200 leading-relaxed font-light max-w-xl drop-shadow-md">
              {item.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Services & Order Form */}
      <section className="container-page py-16 -mt-8 relative z-30">
        <CountryServiceForm country={item} />
      </section>

      {/* Trust Signals */}
      <TrustSignals />

      {/* FAQs */}
      {item.faqs && item.faqs.length > 0 && (
        <section className="container-page py-20 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="eyebrow">Common Questions</div>
            <h2 className="mt-3 text-3xl font-display font-bold text-navy-deep dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {item.faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#0e3b96]/20 flex gap-4 items-start group">
                <HelpCircle className="w-5 h-5 text-[#F07228] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-[17px] font-bold text-slate-900 dark:text-white mb-2 leading-snug">{faq.q}</h3>
                  <p className="text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
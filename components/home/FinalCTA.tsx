import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

const backgroundImage =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";

export function FinalCTA() {
  return (
    <section className="section-pad animate-fade-up">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 p-10 md:p-16 text-white border border-slate-800 shadow-2xl">
          <div className="absolute inset-0 z-0">
            <Image
              src={backgroundImage}
              alt="Modern skyscraper"
              fill
              className="object-cover opacity-15"
            />
          </div>
          <div className="pointer-events-none absolute -right-20 -top-20 w-[420px] h-[420px] rounded-full bg-blue-500/20 blur-3xl" />
          <div className="relative max-w-2xl z-10">
            <div className="eyebrow !text-blue-400">Ready when you are</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-white">
              Your Business, Registered Right, Wherever You Want to Grow
            </h2>
            <p className="mt-5 text-slate-300 text-base md:text-lg">
              Join founders around the world who trust Elite Filing to handle the paperwork, so they
              can focus on building.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/pricing" className="btn-primary-cta inline-flex items-center gap-2">
                Start Your Company Today <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/schedule" className="btn-secondary-cta inline-flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

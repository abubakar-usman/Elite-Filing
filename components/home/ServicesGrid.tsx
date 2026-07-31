import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/lib/data/services";

export function ServicesGrid() {
  return (
    <section className="section-pad bg-slate-50 dark:bg-slate-900/50 animate-fade-up border-b border-slate-200 dark:border-slate-800">
      <div className="container-page">
        
        {/* Header Section */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="eyebrow">Nine Core Categories</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white">
              What You Can Do With Elite Filing
            </h2>
          </div>
          <Link href="/services" className="btn-ghost group inline-flex items-center gap-2">
            Explore all services 
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid Section */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((s) => (
            <Link
              href={`/services/${s.slug}`}
              key={s.slug}
              // Added `h-full` here to ensure all cards stretch identically
              className="group relative flex flex-col h-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-orange/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Elegant Expanding Orange Top Border */}
              <div className="absolute top-0 left-0 h-1 bg-orange w-0 group-hover:w-full transition-all duration-500 z-20" />

              {/* Image Container (shrink-0 ensures flex layout never squashes the image) */}
              <div className="relative w-full h-56 shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <Image
                  src={s.image || "/back.jpg"}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
              </div>

              {/* Content Container (flex-1 ensures this section takes up the remaining vertical space) */}
              <div className="p-6 flex flex-col flex-1">
                
                {/* Title (Line-clamp added to prevent extreme line breaks) */}
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 group-hover:text-orange transition-colors duration-300 line-clamp-2">
                  {s.title}
                </h3>
                
                {/* Description */}
                <p className="mt-2.5 mb-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                  {s.shortDesc}
                </p>
                
                {/* Footer - `mt-auto` acts like a spring, pushing the footer to the exact bottom of every card */}
                <div className="mt-auto pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-900 dark:text-slate-200 group-hover:text-orange transition-colors duration-300">
                    View Category Details
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-orange transform group-hover:translate-x-1 transition-all duration-300" />
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
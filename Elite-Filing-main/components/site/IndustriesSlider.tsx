"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { industriesData } from "@/lib/data/industries";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export function IndustriesSlider() {
  const plugin = useRef(
    // stopOnInteraction: false ensures it keeps auto-sliding after user swipe/drag
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  // Only show the enterprise industries we added plus a few others for the slider
  const sliderIndustries = industriesData.slice(0, 6);

  return (
    <section className="section-pad animate-fade-up">
      <div className="container-page">
        {/* We wrap the entire header inside the Carousel so the arrow buttons can be placed inline without overlapping */}
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={() => plugin.current.stop()}
          onMouseLeave={() => plugin.current.play()}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          {/* Header & Controls Container */}
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="eyebrow">Enterprise Industries</div>
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white">
                Specialized advisory for every sector.
              </h2>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Formatted Arrow Buttons placed inline */}
              <div className="hidden md:flex items-center gap-2">
                <CarouselPrevious className="static translate-y-0 h-12 w-12 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all shadow-sm" />
                <CarouselNext className="static translate-y-0 h-12 w-12 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all shadow-sm" />
              </div>
              <Link href="/industries" className="btn-ghost">
                View All Industries <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          <CarouselContent className="-ml-4 md:-ml-6">
            {sliderIndustries.map((ind) => {
              const bgImage = ind.image || "/back.jpg";
              return (
                <CarouselItem key={ind.slug} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                  <Link href={`/industries/${ind.slug}`} className="block group h-full">
                    <div className="relative h-[380px] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 cursor-grab active:cursor-grabbing">
                      <Image
                        src={bgImage}
                        alt={ind.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />
                      
                      <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full">
                        <h3 className="text-2xl font-bold text-white mb-2">{ind.title}</h3>
                        <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          {ind.shortDesc}
                        </p>
                        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                          Explore Sector <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck, Globe, Building } from "lucide-react";

// Premium enterprise background images (Cinematic & Corporate)
const backgroundImages = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070", // Sleek modern glass corporate headquarters
  "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=2073", // Premium global boardroom & office glass
  "https://images.unsplash.com/photo-1668120084348-efc2ba0ad31d?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Executive consulting & international business desk
];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  // Background Slider Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[75vh] xl:min-h-[760px] flex items-center text-white overflow-hidden bg-[#0B1120]">
      
      {/* Background Image Slider with Cinematic Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((src, index) => (
          <div
            key={src}
            // 1.5s smooth crossfade for the opacity transition
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              index === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={src}
              alt="Elite Filing Corporate Global Services"
              fill
              priority={index === 0}
              // 8s continuous linear zoom while the image is active
              className={`object-cover transition-transform duration-[8000ms] ease-out ${
                index === currentImage ? "scale-110" : "scale-100"
              }`}
            />
          </div>
        ))}
        
        {/* Enterprise Gradients: Multiply layer deepens the image colors for an ultra-premium corporate look */}
        <div className="absolute inset-0 bg-[#070e1c]/40 mix-blend-multiply z-10" />
        
        {/* Smooth structural gradients for perfect text contrast & edge blending */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/90 to-[#0B1120]/20 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1120]/30 to-[#0B1120] z-10" />
      </div>

      <div className="container-page relative z-20 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-[1200px]">
          
          {/* Eyebrow / Trust Badge */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange/30 bg-orange/10 backdrop-blur-md mb-8 animate-fade-up shadow-lg shadow-orange/5"
            style={{ animationDelay: "0ms" }}
          >
            <ShieldCheck className="w-4 h-4 text-orange" />
            <span className="text-[11px] md:text-xs font-bold uppercase tracking-widest text-orange-soft">
              Global Corporate Setup & Compliance
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-display text-4xl md:text-5xl lg:text-[52px] xl:text-[58px] leading-[1.15] font-semibold text-white tracking-tight animate-fade-up"
            style={{ animationDelay: "150ms" }}
          >
            Form, Structure, and Scale Your Business <br className="hidden md:block" />
            Across <span className="text-orange">Global Markets.</span>
          </h1>

          {/* Paragraph */}
          <p
            className="mt-6 text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed font-light animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            Elite Filing is a corporate services and business consulting firm that helps first-time
            founders, established companies, and global investors register companies, manage tax and
            regulatory compliance, and expand with confidence across the United States, United Kingdom,
            United Arab Emirates, Canada, and Pakistan, with additional markets launching soon.
          </p>

          {/* Action Buttons */}
          <div
            className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: "450ms" }}
          >
            <Link href="/services" className="btn-primary-cta flex items-center gap-2 group">
              Start Your Company <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/schedule" className="btn-secondary-cta flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Book a Free Consultation
            </Link>
          </div>

          {/* Enterprise Stats / Features Footer */}
          <div
            className="mt-16 pt-8 border-t border-slate-700/50 flex flex-col sm:flex-row gap-8 sm:gap-16 animate-fade-up"
            style={{ animationDelay: "600ms" }}
          >
            <div className="flex items-center gap-3.5 group">
              <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                <Globe className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">5+ Jurisdictions</div>
                <div className="text-xs text-slate-400 mt-0.5">US, UK, UAE, Canada, Pakistan</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3.5 group">
              <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                <Building className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">End-to-End Setup</div>
                <div className="text-xs text-slate-400 mt-0.5">Entity, Tax, IP & Banking</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3.5 group">
              <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">100% Compliant</div>
                <div className="text-xs text-slate-400 mt-0.5">Guaranteed strict adherence</div>
              </div>
            </div>
          </div>

        </div>

        {/* Ambient Blue Glow Blob */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px] animate-floaty" />
      </div>
    </section>
  );
}
"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles, CheckCircle2 } from "lucide-react";

interface TeamMember {
  id: string;
  src: string;
  title: string;
  badge: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

const teamMembers: TeamMember[] = [
  {
    id: "strategy",
    src: "/DSC_8153.JPG",
    title: "Executive Strategy & Legal Formation",
    badge: "Strategy & Legal",
    subtitle: "Entity Structuring & Cross-Border Blueprints",
    description:
      "Our senior corporate advisors evaluate international business models to build optimal multi-jurisdictional entity blueprints, protecting assets and enabling rapid global growth.",
    highlights: ["Custom Articles & Operating Agreements", "Holding & Operating Company Structures", "Multi-Currency Capital Planning"],
  },
  {
    id: "compliance",
    src: "/DSC_8161.JPG",
    title: "Multi-Jurisdiction Tax & Compliance",
    badge: "Tax & Compliance",
    subtitle: "Regulatory Audit & Annual Maintenance",
    description:
      "Tax and regulatory specialists ensuring foreign entity filings, corporate returns, and annual reporting adhere 100% to local government standards across the US, UK, UAE, and beyond.",
    highlights: ["IRS & Companies House Filings", "UAE Corporate Tax & VAT Registration", "Beneficial Ownership (BOI) Reporting"],
  },
  {
    id: "advisory",
    src: "/DSC_8184.JPG",
    title: "Global Advisory & Client Operations",
    badge: "Client Operations",
    subtitle: "Tailored Support for Startups & Investors",
    description:
      "Hands-on consultants dedicated to high-growth tech startups, e-commerce brands, and international founders, delivering step-by-step clarity for every corporate decision.",
    highlights: ["International Banking Facilitation", "E-Commerce Payment Gateway Structuring", "Registered Agent & Office Services"],
  },
  {
    id: "tech",
    src: "/DSC_8169.JPG",
    title: "Digital Filing Infrastructure",
    badge: "Technology & Systems",
    subtitle: "Real-Time Tracking & Automated Records",
    description:
      "Legal-tech engineers maintaining our secure digital platform, giving clients instant visibility into filing statuses, tax IDs, renewal dates, and corporate documents.",
    highlights: ["Encrypted Client Portal", "Automated Renewal Reminders", "Instant PDF Document Delivery"],
  },
  {
    id: "onboarding",
    src: "/DSC_8172.JPG",
    title: "Dedicated Client Onboarding",
    badge: "1-on-1 Support",
    subtitle: "1-on-1 Personalized Advisory",
    description:
      "Your primary point of contact guiding you through identity verification, document collection, and custom charter requirements with zero back-and-forth friction.",
    highlights: ["Single Point of Contact", "24-Hour Response Standard", "Bespoke Incorporation Roadmap"],
  },
];

export function TeamAnimatedShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const activeMember = teamMembers[currentIndex];

  // Auto-play timer (changes every 5 seconds if not paused)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    if (index === currentIndex || isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Mouse 3D tilt handler for the active card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rY = ((x - centerX) / centerX) * 8;
    const rX = ((centerY - y) / centerY) * 8;

    setRotateX(rX);
    setRotateY(rY);

    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.2,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      className="space-y-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Category Tab Selectors */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
        {teamMembers.map((member, idx) => (
          <button
            key={member.id}
            onClick={() => goToSlide(idx)}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 ${
              idx === currentIndex
                ? "bg-navy-deep text-white shadow-lg shadow-navy-deep/20 scale-105 border border-navy"
                : "bg-surface text-foreground/70 hover:bg-surface-alt border border-border"
            }`}
          >
            <span className="text-orange mr-1.5 font-bold">0{idx + 1}.</span>
            {member.badge}
          </button>
        ))}
      </div>

      {/* SINGLE ANIMATED 3D FEATURED CARD */}
      <div className="perspective-1000">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transition: "transform 0.15s ease-out, box-shadow 0.3s ease",
            transformStyle: "preserve-3d",
          }}
          className="relative overflow-hidden rounded-3xl bg-card border border-border shadow-2xl transition-all duration-500"
        >
          {/* Light Sheen Glare */}
          <div
            className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,${glarePos.opacity}) 0%, transparent 60%)`,
            }}
          />

          {/* Animated Card Content (Image + Details) */}
          <div className="grid gap-0 lg:grid-cols-12 items-stretch min-h-[440px]">
            {/* Left: 3D Image Showcase */}
            <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[440px] overflow-hidden bg-slate-950">
              <div
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  isAnimating ? "opacity-30 scale-105 blur-sm" : "opacity-100 scale-100 blur-0"
                }`}
              >
                <Image
                  src={activeMember.src}
                  alt={activeMember.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-950/90" />
              </div>

              {/* Floating Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange text-white shadow-lg shadow-orange/30">
                  <Sparkles className="w-3.5 h-3.5" /> {activeMember.badge}
                </span>
              </div>

              {/* Slide Counter Overlay */}
              <div className="absolute bottom-4 left-4 z-20 bg-slate-950/80 text-white px-3 py-1 rounded-lg border border-white/20 text-xs font-mono backdrop-blur-md">
                {currentIndex + 1} / {teamMembers.length}
              </div>
            </div>

            {/* Right: Detailed Description Panel */}
            <div className="lg:col-span-5 p-7 md:p-10 flex flex-col justify-between bg-card relative z-10 border-t lg:border-t-0 lg:border-l border-border">
              <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-orange">
                  Operational Specialist & Advisor
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-navy-deep tracking-tight">
                  {activeMember.title}
                </h3>
                <p className="text-sm font-semibold text-accent">
                  {activeMember.subtitle}
                </p>
                <p className="text-foreground/75 text-sm md:text-base leading-relaxed">
                  {activeMember.description}
                </p>

                {/* Key Highlights list */}
                <div className="space-y-2 pt-3 border-t border-border/60">
                  {activeMember.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2.5 text-xs md:text-sm text-foreground/80 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-orange shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Animated Progress Bar & Navigation Controls */}
              <div className="pt-6 mt-6 border-t border-border flex items-center justify-between">
                {/* Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Team Specialist"
                    className="p-2.5 rounded-xl border border-border bg-surface hover:bg-surface-alt text-navy-deep transition-all hover:scale-105 active:scale-95"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next Team Specialist"
                    className="p-2.5 rounded-xl border border-border bg-surface hover:bg-surface-alt text-navy-deep transition-all hover:scale-105 active:scale-95"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setIsPaused(!isPaused)}
                    aria-label={isPaused ? "Play Slideshow" : "Pause Slideshow"}
                    className="p-2.5 rounded-xl border border-border bg-surface hover:bg-surface-alt text-navy-deep transition-all text-xs font-semibold flex items-center gap-1.5 ml-2"
                  >
                    {isPaused ? <Play className="w-4 h-4 text-orange" /> : <Pause className="w-4 h-4 text-navy" />}
                    <span className="hidden sm:inline">{isPaused ? "Paused" : "Auto-playing"}</span>
                  </button>
                </div>

                {/* Animated Dot Indicators */}
                <div className="flex items-center gap-1.5">
                  {teamMembers.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        idx === currentIndex ? "w-7 bg-orange" : "w-2 bg-border hover:bg-navy/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

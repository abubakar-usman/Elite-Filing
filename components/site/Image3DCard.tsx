"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

interface Image3DCardProps {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  badge?: string;
  aspectRatio?: string;
  className?: string;
  ceoVariant?: boolean;
  priority?: boolean;
  textBelow?: boolean;
}

export function Image3DCard({
  src,
  alt,
  title,
  subtitle,
  badge,
  aspectRatio = "aspect-[16/10]",
  className = "",
  ceoVariant = false,
  priority = false,
  textBelow = true,
}: Image3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt calculation (-7 to +7 degrees)
    const rY = ((x - centerX) / centerX) * 7;
    const rX = ((centerY - y) / centerY) * 7;

    setRotateX(rX);
    setRotateY(rY);

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlarePos({ x: glareX, y: glareY, opacity: 0.15 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div className={`perspective-1000 ${className}`}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered
            ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`
            : "rotateX(0deg) rotateY(0deg) translateY(0px)",
          transition: isHovered
            ? "transform 0.1s ease-out, box-shadow 0.3s ease"
            : "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease",
          transformStyle: "preserve-3d",
        }}
        className={`group relative overflow-hidden rounded-2xl bg-card transition-all duration-300 ${
          ceoVariant
            ? "border-2 border-amber-500/40 shadow-xl shadow-amber-500/5 hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-500/15"
            : "border border-border shadow-md hover:border-accent/40 hover:shadow-xl"
        }`}
      >
        {/* Dynamic Light Sheen / Glare overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,${glarePos.opacity}) 0%, transparent 60%)`,
          }}
        />

        {/* Image Container */}
        <div className={`relative w-full ${aspectRatio} overflow-hidden bg-slate-100`}>
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Floating Badge on top left of image */}
          {badge && (
            <div
              style={{ transform: "translateZ(25px)" }}
              className="absolute top-3 left-3 z-20"
            >
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide backdrop-blur-md shadow-md ${
                  ceoVariant
                    ? "bg-amber-500 text-slate-950 font-bold shadow-amber-500/20"
                    : "bg-slate-900/85 text-white border border-white/20"
                }`}
              >
                {badge}
              </span>
            </div>
          )}
        </div>

        {/* Text Content Below Image for High Readability */}
        {textBelow && (title || subtitle) && (
          <div
            style={{ transform: "translateZ(15px)" }}
            className="p-5 bg-card border-t border-border/50"
          >
            {title && (
              <h3 className="text-lg font-bold text-navy-deep tracking-tight group-hover:text-accent transition-colors">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="mt-1.5 text-sm text-foreground/70 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Interactive Border Highlight */}
        <div
          style={{ transform: "translateZ(10px)" }}
          className="absolute inset-0 border border-transparent group-hover:border-accent/20 rounded-2xl pointer-events-none transition-colors duration-300"
        />
      </div>
    </div>
  );
}

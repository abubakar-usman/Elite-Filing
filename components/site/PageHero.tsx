import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="grad-hero text-white">
      <div className="container-page pt-24 pb-24 md:pt-32 md:pb-28">
        {eyebrow && <div className="eyebrow !text-orange-soft mb-4">{eyebrow}</div>}
        <h1 className="font-display text-4xl md:text-6xl font-semibold text-white max-w-4xl leading-[1.05]">{title}</h1>
        {description && (
          <p className="mt-6 text-lg text-white/75 max-w-2xl leading-relaxed">{description}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

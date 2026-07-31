import Link from "next/link";
import { ArrowRight } from "lucide-react";

const images = [
  {
    // Relevant to: Consultation & Strategy
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
    alt: "Business consultation and strategy",
    delay: "200ms",
  },
  {
    // Relevant to: Legal & Compliance Documents
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
    alt: "Legal compliance and corporate paperwork",
    delay: "350ms",
  },
  {
    // Relevant to: Tax, Bookkeeping & Banking
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
    alt: "Business banking, tax, and accounting",
    delay: "500ms",
  },
  {
    // Relevant to: Success & Corporate Growth
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
    alt: "Successful corporate team and global growth",
    delay: "650ms",
  },
];

export function Overview() {
  return (
    <section className="section-pad bg-slate-950 overflow-hidden relative">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-navy-deep/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="container-page relative z-10 grid gap-12 lg:gap-16 lg:grid-cols-[1.1fr_1fr] items-center">
        
        {/* Left Column: Text Content & CTA */}
        <div 
          className="flex flex-col items-start animate-fade-up" 
          style={{ animationFillMode: "both" }}
        >
          <div className="eyebrow">What we do</div>
          
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-white">
            One Partner for Every Stage of Your Business
          </h2>
          
          <div className="relative mt-8">
            {/* Elegant Orange gradient line anchoring the text */}
            <div className="absolute left-0 top-2 bottom-2 w-[3px] bg-gradient-to-b from-orange via-orange-soft to-transparent rounded-full opacity-90 hidden md:block" />
            
            <div className="space-y-5 text-sm md:text-[0.95rem] text-slate-300 leading-loose md:pl-6">
              <p>
                <strong className="text-white font-semibold">Elite Filing</strong> is a corporate services and business consulting firm built for founders who
                need more than a form-filling service. We help you choose the right jurisdiction,
                register your company correctly the first time, and stay compliant year after year. From
                your first LLC or private limited company to trademark protection, tax registration,
                business banking, and ongoing bookkeeping, our team manages the process so you can focus
                on building your business.
              </p>
              <p>
                We work with startups launching their first entity, ecommerce sellers expanding into new
                marketplaces, and established companies restructuring across multiple countries.
                Wherever you are in your journey, we bring the same commitment to precision,
                transparency, and professionalism.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Link 
              href="/services" 
              className="btn-secondary-cta group inline-flex items-center gap-2 text-sm"
            >
              See All Services 
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Column: Perfectly Symmetrical 2x2 Grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-5 w-full">
          {images.map((img, idx) => (
            <div 
              key={idx}
              className="relative rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 animate-fade-up group aspect-square"
              style={{ animationDelay: img.delay, animationFillMode: "both" }}
            >
              {/* Subtle tint that vanishes on hover */}
              <div className="absolute inset-0 bg-navy-deep/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              
              <img 
                src={img.src} 
                alt={img.alt}
                loading="lazy"
                // object-cover and absolute inset-0 guarantee the image perfectly fills the symmetrical square
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
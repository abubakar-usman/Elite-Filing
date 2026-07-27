import type { Metadata } from "next";
import Link from "next/link";
import { articlesData } from "@/lib/data/resources";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Knowledge Center & Guides — Elite Filing",
  description: "Explore formation guides, tax compliance articles, trademark tutorials, banking guides, and country comparison guides.",
};

export default function ResourcesPage() {
  return (
    <div className="py-12">
      {/* Hero */}
      <section className="container-page py-12 text-center max-w-4xl mx-auto">
        <div className="eyebrow mx-auto mb-4">Knowledge Center</div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold text-navy-deep dark:text-white leading-tight">
          Global Business Guides & <span className="text-orange">Tax Intelligence</span>.
        </h1>
        <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Comprehensive guides written by international corporate lawyers, certified tax specialists, and IP attorneys to help you navigate cross-border expansion.
        </p>
      </section>

      {/* Articles Grid */}
      <section className="container-page py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articlesData.map((article) => (
            <article
              key={article.slug}
              className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between group hover:border-orange-500/50 hover:shadow-xl transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-500/10 text-orange-500">
                    {article.categoryLabel}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors leading-snug">
                  {article.title}
                </h2>

                <p className="mt-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="text-xs text-slate-500">
                  By <span className="font-semibold text-slate-700 dark:text-slate-300">{article.author}</span>
                </div>
                <Link
                  href={`/resources/${article.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-orange-500 hover:text-orange-600"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      {/* CTA Section */}
      <section className="container-page py-16">
        <div className="rounded-3xl bg-surface-alt p-10 md:p-14 text-center border border-border">
          <h2 className="text-3xl md:text-4xl font-semibold max-w-2xl mx-auto text-navy-deep dark:text-white">
            Have a Question We Haven&apos;t Answered?
          </h2>
          <p className="mt-4 text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
            Our corporate specialists are ready to provide custom advice for your exact situation.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/contact" className="btn-accent">
              Ask Our Team <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

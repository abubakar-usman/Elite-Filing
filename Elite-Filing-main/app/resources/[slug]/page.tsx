import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articlesData } from "@/lib/data/resources";
import { ArrowLeft, Clock, Calendar, Share2, ArrowRight } from "lucide-react";
import { TrustSignals } from "@/components/site/TrustSignals";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articlesData.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const article = articlesData.find((a) => a.slug === resolvedParams?.slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} — Elite Filing Knowledge Center`,
    description: article.summary,
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const article = articlesData.find((a) => a.slug === resolvedParams?.slug);

  if (!article) {
    notFound();
  }

  const related = articlesData.filter((a) => article.relatedSlugs.includes(a.slug));

  return (
    <article className="pb-24">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16 border-b border-slate-800">
        <div className="container-page max-w-3xl">
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-xs text-orange-400 hover:text-orange-300 font-semibold mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Knowledge Center
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4 text-xs">
            <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 font-semibold">
              {article.categoryLabel}
            </span>
            <span className="text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {article.readTime}
            </span>
            <span className="text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {article.publishedDate}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight">
            {article.title}
          </h1>

          <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-sm">
                {article.author.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-white">{article.author}</div>
                <div className="text-slate-400">{article.authorRole}</div>
              </div>
            </div>

            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-white">
              <Share2 className="w-3.5 h-3.5" /> Share Guide
            </button>
          </div>
        </div>
      </div>

      {/* Main Markdown Article Content */}
      <div className="container-page max-w-3xl py-12">
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-slate-800 dark:text-slate-200 leading-relaxed">
          {article.contentMarkdown.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={index} className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 border-b pb-2 border-slate-200 dark:border-slate-800">
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={index} className="text-lg font-bold text-slate-900 dark:text-white mt-6 mb-2">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('> [!WARNING]')) {
              return (
                <div key={index} className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-sm my-4">
                  {paragraph.replace('> [!WARNING]\n', '').replace('> ', '')}
                </div>
              );
            }
            if (paragraph.startsWith('> [!TIP]')) {
              return (
                <div key={index} className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-900 dark:text-emerald-200 text-sm my-4">
                  {paragraph.replace('> [!TIP]\n', '').replace('> ', '')}
                </div>
              );
            }
            return <p key={index} className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">{paragraph}</p>;
          })}
        </div>

        {/* CTA Box */}
        <div className="mt-16 p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 text-center">
          <h3 className="text-2xl font-bold text-white">Need Personal Advice on This Topic?</h3>
          <p className="mt-2 text-sm text-slate-300 max-w-lg mx-auto">
            Schedule a 1-on-1 consultation with our legal and tax team to get personalized guidance for your business.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-orange-500 hover:bg-orange-600 shadow-md text-sm"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Trust Signals */}
      <TrustSignals />

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="container-page py-16 max-w-3xl border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Related Guides</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/resources/${rel.slug}`}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 block group transition-all"
              >
                <span className="text-[10px] font-bold text-orange-500 uppercase">{rel.categoryLabel}</span>
                <h4 className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-orange-500 mt-1">
                  {rel.title}
                </h4>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

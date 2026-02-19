"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Clock, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n-context";
import { dictionaries } from "@/lib/dictionaries";

const articleIds = [
  "digital-hr",
  "hr-outsourcing",
  "ai-chatbot",
  "hr-analytics",
  "hybrid-work",
  "digital-transformation-guide",
];

export function BlogSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  // Store the full article object from dictionary
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const { language } = useLanguage();
  const t = dictionaries[language].blog;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (selectedArticleId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedArticleId]);

  // @ts-ignore
  const selectedArticle = selectedArticleId ? t.items[selectedArticleId] : null;

  return (
    <>
      <section id="articles" className="section-light py-28 relative overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute bottom-0 right-0 w-96 h-96 gradient-blob gradient-blob-cyan animate-pulse-soft" />

        <div className="mx-auto max-w-7xl px-6 relative z-10" ref={ref}>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
                {t.label}
              </span>
              <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-gray-900 md:text-4xl heading-accent">
                {t.title}
              </h2>
              <p className="mt-8 max-w-lg text-lg text-gray-500">
                {t.subtitle}
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articleIds.map((id, index) => {
              // @ts-ignore
              const article = t.items[id];
              return (
                <article
                  key={id}
                  className="group card-gradient-border flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-white transition-all duration-500 hover:-translate-y-2"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(24px)",
                    transitionDelay: `${index * 100}ms`,
                  }}
                  onClick={() => setSelectedArticleId(id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedArticleId(id);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <div className="relative h-48 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                    <span className="absolute bottom-3 left-3 inline-block rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-primary shadow-sm">
                      {article.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-base font-semibold text-gray-900 leading-snug group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-gray-500 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                      <span>{article.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                      {t.readMore}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/40 backdrop-blur-sm p-4 sm:p-8"
          onClick={() => setSelectedArticleId(null)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setSelectedArticleId(null);
          }}
          role="dialog"
          aria-modal="true"
          aria-label={selectedArticle.title}
        >
          <div
            className="relative my-8 w-full max-w-3xl rounded-2xl bg-white shadow-2xl animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={() => { }}
            role="document"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedArticleId(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow-md backdrop-blur-sm transition-all hover:bg-white hover:text-gray-900 hover:scale-110"
              aria-label={t.close}
            >
              <X className="h-5 w-5" />
            </button>

            {/* Hero image */}
            <div className="relative h-56 overflow-hidden rounded-t-2xl sm:h-72">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedArticle.image || "/placeholder.svg"}
                alt={selectedArticle.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white shadow-md">
                  {selectedArticle.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 leading-snug sm:text-2xl">
                {selectedArticle.title}
              </h2>
              <div className="mt-3 flex items-center gap-4 text-sm text-gray-400">
                <span>{selectedArticle.date}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {selectedArticle.readTime}
                </span>
              </div>
              <div className="mt-6 space-y-4">
                {/* @ts-ignore */}
                {selectedArticle.body.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-base text-gray-600 leading-[1.8]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-8 border-t border-gray-100 pt-6">
                <a
                  href="#contact"
                  onClick={() => setSelectedArticleId(null)}
                  className="btn-shimmer inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/25"
                >
                  {t.consult}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

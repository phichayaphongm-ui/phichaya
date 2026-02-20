"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Clock, X, User } from "lucide-react";
import { useLanguage } from "@/lib/i18n-context";
import { dictionaries } from "@/lib/dictionaries";
import { blogPosts, BlogPost } from "@/lib/blog-data";
import Link from "next/link";

export function BlogSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();
  const t = dictionaries[language].blog;

  // Sort by date (newest first) and take top 3
  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

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

  return (
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
          <Link
            href="/blog"
            className="group flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary"
          >
            {t.viewAll || (language === 'th' ? "ดูทั้งหมด" : "View All")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group card-gradient-border flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-lg"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative h-48 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title[language]}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                <span className="absolute bottom-3 left-3 inline-block rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-primary shadow-sm">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-base font-semibold text-gray-900 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {post.title[language]}
                </h3>
                <p className="mt-2 flex-1 text-sm text-gray-500 leading-relaxed line-clamp-3">
                  {post.excerpt[language]}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {post.author}
                  </span>
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  {t.readMore}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

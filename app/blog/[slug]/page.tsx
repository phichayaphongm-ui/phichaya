"use client";

import React from "react";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { blogPosts } from "@/lib/blog-data";
import { useLanguage } from "@/lib/i18n-context";
import { useParams, useRouter } from "next/navigation";
import { Calendar, User, ArrowLeft, Lightbulb } from "lucide-react";

export default function BlogPostPage() {
    const { language } = useLanguage();
    const params = useParams();
    const router = useRouter();
    const slug = params.slug;

    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <main className="min-h-screen bg-white">
            <Navigation />

            <article className="pt-32 pb-24">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        {language === 'th' ? 'กลับไปที่หน้าบทความ' : 'Back to Blog'}
                    </button>

                    <header className="mb-12">
                        <div className="flex items-center gap-x-4 text-xs text-gray-500 mb-6">
                            <time dateTime={post.date}>{post.date}</time>
                            <span className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                                {post.category}
                            </span>
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                            {post.title[language]}
                        </h1>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                        </div>
                    </header>

                    {/* GEO/AI Summary Block */}
                    {post.tldr && (
                        <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-2xl mb-12">
                            <div className="flex items-center gap-2 text-primary font-bold mb-3">
                                <Lightbulb className="w-5 h-5" />
                                <span>Quick Summary (AI Friendly)</span>
                            </div>
                            <p className="text-gray-700 italic">
                                {post.tldr[language]}
                            </p>
                        </div>
                    )}

                    <div className="prose prose-lg max-w-none prose-primary prose-headings:text-gray-900 prose-p:text-gray-600">
                        {/* Split content by double newlines to simulate paragraphs/sections */}
                        {post.content[language].split('\n').map((line, i) => {
                            if (line.startsWith('##')) {
                                return <h2 key={i} className="text-2xl font-bold mt-12 mb-6">{line.replace('##', '').trim()}</h2>;
                            }
                            if (line.startsWith('###')) {
                                return <h3 key={i} className="text-xl font-bold mt-8 mb-4">{line.replace('###', '').trim()}</h3>;
                            }
                            if (line.trim() === '') return null;
                            return <p key={i} className="mb-6">{line.trim()}</p>;
                        })}
                    </div>
                </div>
            </article>

            <SiteFooter />
        </main>
    );
}

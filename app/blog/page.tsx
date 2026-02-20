"use client";

import React from "react";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { blogPosts } from "@/lib/blog-data";
import { useLanguage } from "@/lib/i18n-context";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function BlogListPage() {
    const { language } = useLanguage();

    return (
        <main className="min-h-screen bg-white">
            <Navigation />

            {/* Header */}
            <section className="bg-gray-50 pt-32 pb-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            {language === 'th' ? 'บทความและความรู้' : 'Knowledge & Articles'}
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            {language === 'th'
                                ? 'รวบรวมเทรนด์ HR เทคโนโลยี และกฎหมายแรงงานที่คุณต้องรู้'
                                : 'Collection of HR trends, technology, and labor laws you need to know.'}
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {blogPosts.map((post) => (
                            <article key={post.slug} className="flex flex-col items-start justify-between">
                                <div className="relative w-full">
                                    <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100 overflow-hidden sm:aspect-[2/1] lg:aspect-[3/2]">
                                        <img
                                            src={post.image}
                                            alt={post.title[language]}
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                </div>
                                <div className="max-w-xl">
                                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                                        <time dateTime={post.date} className="text-gray-500">
                                            {post.date}
                                        </time>
                                        <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                                            {post.category}
                                        </span>
                                    </div>
                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-primary transition-colors">
                                            <Link href={`/blog/${post.slug}`}>
                                                <span className="absolute inset-0" />
                                                {post.title[language]}
                                            </Link>
                                        </h3>
                                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                            {post.excerpt[language]}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <SiteFooter />
        </main>
    );
}

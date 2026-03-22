"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n-context";
import { useRouter } from "next/navigation";
import { Calendar, User, ArrowLeft, Lightbulb } from "lucide-react";
import { BlogPost } from "@/lib/blog-data";
import Image from "next/image";

export function BlogPostContent({ post }: { post: BlogPost }) {
    const { language } = useLanguage();
    const router = useRouter();

    return (
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
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-8">
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                        </div>
                    </div>

                    {/* Blog Image */}
                    <div className="aspect-[16/9] w-full rounded-3xl overflow-hidden bg-gray-100 mb-12 shadow-xl ring-1 ring-gray-900/10">
                        <Image
                            src={post.image}
                            alt={post.title[language]}
                            width={800}
                            height={450}
                            className="h-full w-full object-cover"
                            priority
                        />
                    </div>
                </header>

                {/* GEO/AI Summary Block */}
                {post.tldr && (
                    <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-2xl mb-12">
                        <div className="flex items-center gap-2 text-primary font-bold mb-3">
                            <Lightbulb className="w-5 h-5" />
                            <span>Quick Summary (AI Friendly) / สรุปประเด็นสำคัญ</span>
                        </div>
                        <p className="text-gray-700 italic">
                            {post.tldr[language]}
                        </p>
                    </div>
                )}

                <div className="prose prose-lg max-w-none prose-primary prose-headings:text-gray-900 prose-p:text-gray-600">
                    {post.content[language].split('\n').map((line, i) => {
                        const trimmed = line.trim();
                        if (trimmed === '') return null;

                        const renderInlineTags = (text: string) => {
                            const parts = text.split(/(\*\*.*?\*\*)/g);
                            return parts.map((part, index) => {
                                if (part.startsWith('**') && part.endsWith('**')) {
                                    return <strong key={index} className="font-bold">{part.slice(2, -2)}</strong>;
                                }
                                return part;
                            });
                        };

                        if (trimmed.startsWith('#### ')) {
                            return <h4 key={i} className="text-lg font-bold mt-6 mb-3">{renderInlineTags(trimmed.replace('#### ', ''))}</h4>;
                        }
                        if (trimmed.startsWith('### ')) {
                            return <h3 key={i} className="text-xl font-bold mt-8 mb-4">{renderInlineTags(trimmed.replace('### ', ''))}</h3>;
                        }
                        if (trimmed.startsWith('## ')) {
                            return <h2 key={i} className="text-2xl font-bold mt-12 mb-6">{renderInlineTags(trimmed.replace('## ', ''))}</h2>;
                        }
                        if (trimmed.startsWith('# ')) {
                            return <h2 key={i} className="text-3xl font-bold mt-12 mb-6">{renderInlineTags(trimmed.replace('# ', ''))}</h2>;
                        }
                        if (trimmed.startsWith('- ')) {
                            return (
                                <ul key={i} className="list-disc ml-6 mb-2">
                                    <li className="pl-1">{renderInlineTags(trimmed.replace('- ', ''))}</li>
                                </ul>
                            );
                        }
                        if (trimmed.startsWith('* ')) {
                            return (
                                <ul key={i} className="list-disc ml-6 mb-2">
                                    <li className="pl-1">{renderInlineTags(trimmed.replace('* ', ''))}</li>
                                </ul>
                            );
                        }
                        
                        return <p key={i} className="mb-6">{renderInlineTags(trimmed)}</p>;
                    })}
                </div>
            </div>
        </article>
    );
}

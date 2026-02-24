import React from "react";
import { blogPosts } from "@/lib/blog-data";
import { BlogPostContent } from "./content";
import { Metadata } from "next";

export const runtime = 'edge';

type Props = {
    params: Promise<{ slug: string }>
};

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const slug = (await params).slug;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.title.th} | Phichaya HR Blog`,
        description: post.excerpt.th,
        openGraph: {
            title: post.title.th,
            description: post.excerpt.th,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                    alt: post.title.th,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title.th,
            description: post.excerpt.th,
            images: [post.image],
        },
    };
}

import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";

export default async function BlogPostPage({ params }: Props) {
    const slug = (await params).slug;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return <div>Post not found</div>;
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title.th,
        "description": post.excerpt.th,
        "image": `https://phichaya.com${post.image}`,
        "datePublished": post.date,
        "author": {
            "@type": "Person",
            "name": post.author,
        },
        "publisher": {
            "@type": "Organization",
            "name": "Phichaya HR Solutions",
            "logo": {
                "@type": "ImageObject",
                "url": "https://phichaya.com/logo.png",
            },
        },
    };

    return (
        <main>
            <Navigation />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <BlogPostContent post={post} />
            <SiteFooter />
            <BackToTop />
        </main>
    );
}

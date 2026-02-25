import type { Metadata } from "next";
import { GalleryBookContent } from "./content";
import { StructuredData } from "@/components/structured-data";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";

export const metadata: Metadata = {
    title: "ตัวอย่างผลงานเว็บไซต์",
    description:
        "รวมตัวอย่างผลงานเว็บไซต์และโซลูชั่นที่เราออกแบบ พาธุรกิจคุณออกสู่โลกกว้างด้วยเว็บไซต์ระดับมืออาชีพ",
    keywords:
        "ตัวอย่างผลงาน, Web Design, Website Portfolio, Phichaya HR Solutions, ออกแบบเว็บไซต์",
    openGraph: {
        title: "ตัวอย่างผลงานเว็บไซต์ | Phichaya HR Solutions",
        description: "รวมตัวอย่างผลงานเว็บไซต์และโซลูชั่นที่เราออกแบบ พาธุรกิจคุณออกสู่โลกกว้างด้วยเว็บไซต์ระดับมืออาชีพ",
        images: ["/logo.png"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "ตัวอย่างผลงานเว็บไซต์ | Phichaya HR Solutions",
        description: "รวมตัวอย่างผลงานเว็บไซต์และโซลูชั่นที่เราออกแบบ พาธุรกิจคุณออกสู่โลกกว้างด้วยเว็บไซต์ระดับมืออาชีพ",
        images: ["/logo.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: "https://phichaya.com/portfolio/gallery",
    },
};

export default function GalleryPage() {
    return (
        <main>
            <StructuredData type="organization" page="portfolio" />
            <Navigation />
            <GalleryBookContent />
            <SiteFooter />
            <BackToTop />
        </main>
    );
}

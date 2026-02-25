import type { Metadata } from "next";
import { StructuredData } from "@/components/structured-data";
import { FAQContent } from "./faq-content";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";

export const metadata: Metadata = {
    title: "คำถามที่พบบ่อย (FAQ)",
    description:
        "รวมคำถามที่พบบ่อยเกี่ยวกับ HR Outsourcing, HR Software, Digital Transformation, PDPA และบริการอื่นๆ ของ Phichaya HR Solutions คำตอบชัดเจนเพื่อช่วยคุณตัดสินใจ",
    keywords: "FAQ, คำถามที่พบบ่อย, HR Outsourcing, PDPA, Digital Transformation, Phichaya HR",
    openGraph: {
        title: "คำถามที่พบบ่อย (FAQ) | Phichaya HR Solutions",
        description: "รวมคำถามที่พบบ่อยเกี่ยวกับ HR Outsourcing, HR Software, Digital Transformation, PDPA และบริการอื่นๆ",
        images: ["/logo.png"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "คำถามที่พบบ่อย (FAQ) | Phichaya HR Solutions",
        description: "รวมคำถามที่พบบ่อยเกี่ยวกับ HR Outsourcing, HR Software, Digital Transformation, PDPA และบริการอื่นๆ",
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
        canonical: "https://phichaya.com/faq",
    },
};

export default function FAQPage() {
    return (
        <main>
            <StructuredData type="organization" page="faq" />
            <Navigation />
            <FAQContent />
            <SiteFooter />
            <BackToTop />
        </main>
    );
}

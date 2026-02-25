import type { Metadata } from "next";
import { RecruitmentSolutionContent } from "./content";
import { StructuredData } from "@/components/structured-data";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";

export const metadata: Metadata = {
    title:
        "Recruitment Solution | ตัวอย่างผลงาน",
    description:
        "ระบบสรรหาพนักงานยุคดิจิทัล (Digital Recruitment) ช่วยให้การสมัครงานง่าย รวดเร็ว และมีประสิทธิภาพ พร้อมระบบคัดกรองและรายงานผลแบบ Real-time",
    keywords:
        "Recruitment System, Digital Recruitment, HR Software, Applicant Tracking System, HR Solutions, ระบบสรรหา",
    openGraph: {
        title: "Recruitment Solution | ตัวอย่างผลงาน | Phichaya HR Solutions",
        description: "ระบบสรรหาพนักงานยุคดิจิทัล (Digital Recruitment) ช่วยให้การสมัครงานง่าย รวดเร็ว และมีประสิทธิภาพ",
        images: ["/logo.png"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Recruitment Solution | ตัวอย่างผลงาน | Phichaya HR Solutions",
        description: "ระบบสรรหาพนักงานยุคดิจิทัล (Digital Recruitment) ช่วยให้การสมัครงานง่าย รวดเร็ว และมีประสิทธิภาพ",
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
        canonical: "https://phichaya.com/portfolio/recruitment-solution",
    },
};

export default function RecruitmentSolutionPage() {
    return (
        <main>
            <StructuredData type="organization" page="portfolio" />
            <Navigation />
            <RecruitmentSolutionContent />
            <SiteFooter />
            <BackToTop />
        </main>
    );
}

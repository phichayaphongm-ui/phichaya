import type { Metadata } from "next";
import { RecruitmentSolutionContent } from "./content";
import { StructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
    title:
        "Recruitment Solution | ตัวอย่างผลงาน | Phichaya HR Solutions",
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
        canonical: "/portfolio/recruitment-solution",
    },
};

export default function RecruitmentSolutionPage() {
    return (
        <>
            <StructuredData type="organization" page="portfolio" />
            <RecruitmentSolutionContent />
        </>
    );
}

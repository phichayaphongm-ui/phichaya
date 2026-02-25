import type { Metadata } from "next";
import { TrainingGameContent } from "./content";
import { StructuredData } from "@/components/structured-data";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";

export const metadata: Metadata = {
    title:
        "Service Mind Simulation Game | ตัวอย่างผลงาน",
    description:
        "เกมฝึกอบรมแบบจำลองสถานการณ์ (Scenario-based Training) สำหรับ e-learning ช่วยให้พนักงานเรียนรู้ผ่านสถานการณ์จริงในรูปแบบเกม สนุก เข้าใจง่าย และมีส่วนร่วมสูง",
    keywords:
        "Service Mind, Training Game, Simulation, E-learning, HR Training, Scenario-based Training",
    openGraph: {
        title: "Service Mind Training Game | ตัวอย่างผลงาน | Phichaya HR Solutions",
        description: "เกมฝึกอบรมแบบจำลองสถานการณ์ (Scenario-based Training) สำหรับ e-learning ช่วยให้พนักงานเรียนรู้ผ่านสถานการณ์จริง",
        images: ["/logo.png"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Service Mind Training Game | ตัวอย่างผลงาน | Phichaya HR Solutions",
        description: "เกมฝึกอบรมแบบจำลองสถานการณ์ (Scenario-based Training) สำหรับ e-learning ช่วยให้พนักงานเรียนรู้ผ่านสถานการณ์จริง",
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
        canonical: "https://phichaya.com/portfolio/training-game",
    },
};

export default function TrainingGamePage() {
    return (
        <main>
            <StructuredData type="organization" page="portfolio" />
            <Navigation />
            <TrainingGameContent />
            <SiteFooter />
            <BackToTop />
        </main>
    );
}

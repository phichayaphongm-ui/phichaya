import type { Metadata } from "next";
import AboutContent from "./content";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";

export const metadata: Metadata = {
    title: "เกี่ยวกับเรา (About Us)",
    description:
        "Phichaya HR Solutions | พันธมิตรเชิงกลยุทธ์ด้าน HR และ AI เพื่อการเติบโตอย่างยั่งยืนขององค์กร เชี่ยวชาญด้าน HR Consulting, AI Recruitment และ Digital HR Transformation ด้วยประสบการณ์กว่า 15 ปี",
    keywords:
        "เกี่ยวกับเรา, Phichaya HR, HR Consulting Thailand, ที่ปรึกษา HR, AI Recruitment, HR Digital Transformation, Strategic HR Partner, #โปรแกรม HR ครบวงจร, #โปรแกรมเงินเดือน, PHR-One",
    alternates: {
        canonical: "https://phichaya.com/about",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function AboutPage() {
    return (
        <main>
            <Navigation />
            <AboutContent />
            <SiteFooter />
            <BackToTop />
        </main>
    );
}

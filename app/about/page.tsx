import type { Metadata } from "next";
import AboutContent from "./content";

export const metadata: Metadata = {
    title: "เกี่ยวกับเรา (About Us) | Phichaya HR Solutions",
    description:
        "รู้จัก Phichaya HR Solutions ผู้เชี่ยวชาญด้าน HR Digital Transformation และ Consulting ที่มีประสบการณ์กว่า 15 ปี พร้อมทีมงานมืออาชีพ",
};

export default function AboutPage() {
    return <AboutContent />;
}

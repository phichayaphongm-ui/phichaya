import type { Metadata } from "next";
import AboutContent from "./content";

export const metadata: Metadata = {
    title: "เกี่ยวกับเรา (About Us) | Phichaya HR Solutions",
    description:
        "รู้จัก Phichaya HR Solutions ผู้เชี่ยวชาญด้าน HR Digital Transformation, HR Consulting และ People Development ที่มีประสบการณ์กว่า 15 ปี พร้อมทีมงานมืออาชีพที่รับทำ HR Outsourcing, สรรหาพนักงาน, วางระบบ E-learning และพัฒนา Web App สำหรับองค์กรและ SME ทุกขนาด",
    keywords:
        "เกี่ยวกับเรา, Phichaya HR, HR Consulting ไทย, ที่ปรึกษา HR, HR Outsourcing, Digital Transformation HR, People Development, ประสบการณ์ HR 15 ปี",
    alternates: {
        canonical: "https://phichaya.com/about",
    },
};

export default function AboutPage() {
    return <AboutContent />;
}

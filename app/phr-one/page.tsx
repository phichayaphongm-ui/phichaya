import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";
import { PhrOneContent } from "./content";

export const metadata: Metadata = {
  title: "PHR-One โปรแกรม HR ครบวงจร | All-in-one HR & Payroll Platform",
  description:
    "PHR-One โปรแกรม HR Solution ครบวงจรสำหรับองค์กรไทย ครอบคลุมโปรแกรมเงินเดือน สรรหาว่าจ้าง Time & Attendance HRIS ฝึกอบรม OD & KPI และ PMS ในระบบเดียว รองรับ Zero Paper HR และ PDPA อย่างมืออาชีพ.",
  keywords: [
    "PHR-One",
    "โปรแกรม HR ครบวงจร",
    "โปรแกรมเงินเดือน",
    "โปรแกรมสรรหาว่าจ้าง",
    "โปรแกรม Time Attendance",
    "โปรแกรม HRIS",
    "โปรแกรมฝึกอบรม",
    "โปรแกรมประเมินผลงาน",
    "All-in-one HR Software",
    "HR Digital Transformation",
    "HR Solution Thailand",
  ],
  alternates: {
    canonical: "https://phichaya.com/phr-one",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "PHR-One โปรแกรม HR ครบวงจร | All-in-one HR & Payroll Platform",
    description:
      "ระบบ HR ดิจิทัลแบบ All-in-one ครบทั้งเงินเดือน สรรหาว่าจ้าง Time & Attendance HRIS ฝึกอบรม OD & KPI และ PMS ในระบบเดียว รองรับ Zero Paper HR.",
    url: "https://phichaya.com/phr-one",
    type: "website",
    images: [
      {
        url: "/images/phr-one-poster.png",
        width: 900,
        height: 1200,
        alt: "PHR-One All-in-one HR Program Poster",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PHR-One โปรแกรม HR ครบวงจร | All-in-one HR & Payroll Platform",
    description:
      "All-in-one HR Solution สำหรับองค์กรไทย ครบทุกโมดูล HR ในแพลตฟอร์มเดียว ขับเคลื่อนด้วยกลยุทธ์ PPT (People–Process–Technology).",
    images: ["/images/phr-one-poster.png"],
  },
};

export default function PhrOnePage() {
  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PHR-One",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    description:
      "PHR-One คือโปรแกรม HR Solution ครบวงจรแบบ All-in-one ครอบคลุมเงินเดือน สรรหา Time & Attendance HRIS ฝึกอบรม OD & KPI และ PMS ในแพลตฟอร์มเดียว รองรับ Zero Paper HR และ PDPA.",
    url: "https://phichaya.com/phr-one",
    image: "https://phichaya.com/images/phr-one-poster.png",
    publisher: {
      "@type": "Organization",
      name: "Phichaya HR Solutions",
      url: "https://phichaya.com",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "THB",
      availability: "https://schema.org/InStock",
    },
    featureList: [
      "Payroll & e-Payslip",
      "Time & Attendance",
      "Recruitment & Applicant Tracking System",
      "HRIS & Employee Self-service",
      "Learning & Development / e-Learning",
      "OD & KPI Management",
      "Performance Management System",
      "Zero Paper HR & PDPA compliance",
    ],
  };

  return (
    <main>
      <Navigation />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <PhrOneContent />
      <SiteFooter />
      <BackToTop />
    </main>
  );
}


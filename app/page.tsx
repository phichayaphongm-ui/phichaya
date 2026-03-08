import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { PromotionBanner } from "@/components/promotion-banner";
import { ServicesSection } from "@/components/services-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { WhyChooseUs } from "@/components/why-choose-us";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";
import { CtaBanner } from "@/components/cta-banner";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";

import { Kanit } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://phichaya.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "HR Solutions Thailand",
    "#โปรแกรม HR ครบวงจร",
    "#โปรแกรมเงินเดือน",
    "PHR-One",
    "ที่ปรึกษา HR มืออาชีพ"
  ],
};

export default function Page() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <PromotionBanner />
      <ServicesSection />
      <PortfolioSection />
      <WhyChooseUs />
      <BlogSection />
      <ContactSection />
      <CtaBanner />
      <SiteFooter />
      <BackToTop />

      {/* GEO: Services Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Service",
                  "name": "HR Digital Transformation",
                  "description": "Comprehensive consulting and implementation for digitizing HR processes."
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Service",
                  "name": "HR Systems & Apps",
                  "description": "Custom HR software developmemt and system integration solutions."
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Service",
                  "name": "Recruitment Services",
                  "description": "Professional recruitment and headhunting services in Thailand."
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "Service",
                  "name": "Training Solutions",
                  "description": "Corporate training and development programs for HR and management."
                }
              }
            ]
          }),
        }}
      />

      {/* AEO/GEO: Software Application Structured Data for PHR-One */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "PHR-One",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "All",
            "description": "โปรแกรม HR ครบวงจร Zero Paper บริหารจัดการทรัพยากรบุคคลครอบคลุมตั้งแต่สรรหา เงินเดือน พัฒนาบุคลากร และ PDPA ในแอปพลิเคชันเดียว",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "THB",
              "availability": "https://schema.org/InStock"
            },
            "brand": {
              "@type": "Organization",
              "name": "Phichaya HR Solutions"
            }
          }),
        }}
      />
    </main>
  );
}

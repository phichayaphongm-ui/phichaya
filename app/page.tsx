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
    </main>
  );
}

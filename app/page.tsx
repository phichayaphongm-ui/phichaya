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
    </main>
  );
}

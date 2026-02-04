import { HeroSection } from "@/components/landing-page/hero-section";
import { BenefitsSection } from "@/components/landing-page/benefits-section";
import { ContentSection } from "@/components/landing-page/content-section";
import { TitleGenerator } from "@/components/landing-page/title-generator";
import { TestimonialsSection } from "@/components/landing-page/testimonials-section";
import { AuthorSection } from "@/components/landing-page/author-section";
import { PricingSection } from "@/components/landing-page/pricing-section";
import { GuaranteeSection } from "@/components/landing-page/guarantee-section";
import { AppFooter } from "@/components/landing-page/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />
        <BenefitsSection />
        <ContentSection />
        <TitleGenerator />
        <TestimonialsSection />
        <AuthorSection />
        <PricingSection />
        <GuaranteeSection />
      </main>
      <AppFooter />
    </div>
  );
}

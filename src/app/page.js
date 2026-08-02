export const dynamic = "force-dynamic";

import Hero from "@/components/home/Hero";
import Section from "@/components/layout/Section";
import PracticeAreaHighlights from "@/components/home/PracticeAreaHighlights";
import WhyTrustUs from "@/components/home/WhyTrustUs";
import AboutBrief from "@/components/home/AboutBrief";
import ConsultationProcess from "@/components/home/ConsultationProcess";
import Testimonials from "@/components/home/Testimonials";
import LatestInsights from "@/components/home/LatestInsights";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <div>
      <Hero />
      <Section tone="cream">
        <PracticeAreaHighlights />
      </Section>
      <WhyTrustUs />
      <AboutBrief />
      <ConsultationProcess />
      <Testimonials />
      <LatestInsights />
      <CTABanner />
    </div>
  );
}
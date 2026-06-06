'use client';

// ── Layouts & wrappers ────────────────────────────────────────
import Wrapper from "../../../layouts/Wrapper";
import HomeLayout from "../HomeLayout";
import HeaderOne from "../../../layouts/headers/HeaderOne";
import FooterThree from "../../../layouts/footers/FooterThree";

// ── SEO ───────────────────────────────────────────────────────
import PageSEO from "../../SEO/PageSEO";

// ── Sections (exactly as per PDF design) ──────────────────────
import HeroSection from "../home/HeroSection";
import ServicesSection from "../home/ServicesSection";
import OurClients from "../../single-service/OurClients";
import PortfolioAreaHomeTwo from "./PortfolioAreaHomeTwo";
import ProcessSection from "../home/ProcessSection";
import TestimonialsSection from "../home/TestimonialsSection";
import FAQSection from "../home/FAQSection";


export default function HomeTwo() {
  // Sections ordered strictly according to PDF design structure
  const sections = [
    <PageSEO
      key="seo-home"
      title="Home"
      description="Proxen Digital - Leading IT consulting and digital marketing company in Canada. Innovative web solutions and digital transformation services."
      canonical="https://proxen.ca/"
    />,
    <HeroSection key="hero" />,
    <ServicesSection key="services" />,
    <OurClients key="clients" />,
    <PortfolioAreaHomeTwo key="portfolio" />,
    <ProcessSection key="process" />,
    <TestimonialsSection key="testimonials" />,
    <FAQSection key="faq" />,
  ];

  return (
    <Wrapper>
      <HomeLayout
        header={<HeaderOne />}
        footer={<FooterThree />}
        sections={sections}
      />
    </Wrapper>
  );
}
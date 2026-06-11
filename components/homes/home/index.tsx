'use client';

// ── Layouts & wrappers ────────────────────────────────────────
import Wrapper from "../../../layouts/Wrapper";
import HomeLayout from "../HomeLayout";
import HeaderOne from "../../../layouts/headers/HeaderOne";
import FooterThree from "../../../layouts/footers/FooterThree";

// ── SEO ───────────────────────────────────────────────────────
import PageSEO from "../../SEO/PageSEO";

// ── Above-fold sections (eagerly loaded for FCP) ──────────────
import HeroSection from "../home/HeroSection";
import ServicesSection from "../home/ServicesSection";

// ── Below-fold sections (dynamically loaded to reduce TBT/JS) ─
import dynamic from "next/dynamic";

const OurClients = dynamic(() => import("../../single-service/OurClients"), {
  ssr: false,
  loading: () => <div style={{ minHeight: 200 }} />,
});

const PortfolioAreaHomeTwo = dynamic(() => import("./PortfolioAreaHomeTwo"), {
  ssr: false,
  loading: () => <div style={{ minHeight: 200 }} />,
});

const ProcessSection = dynamic(() => import("../home/ProcessSection"), {
  ssr: false,
  loading: () => <div style={{ minHeight: 200 }} />,
});

const TestimonialsSection = dynamic(() => import("../home/TestimonialsSection"), {
  ssr: false,
  loading: () => <div style={{ minHeight: 200 }} />,
});

const FAQSection = dynamic(() => import("../home/FAQSection"), {
  ssr: false,
  loading: () => <div style={{ minHeight: 200 }} />,
});


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
// src/pages/services/[slug]/index.tsx
// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SERVICE PAGE — fully dynamic, content-driven architecture.
// Every section receives its own unique data resolved from the current slug.
// ─────────────────────────────────────────────────────────────────────────────
import { redirect } from "next/navigation";
import { getServiceBySlug } from "../../data/services-data";

import Wrapper     from "../../layouts/Wrapper";
import HeaderOne   from "../../layouts/headers/HeaderOne";
import FooterThree from "../../layouts/footers/FooterThree";
import PageSEO     from "../SEO/PageSEO";


// ── Section components ────────────────────────────────────────────────────────
import ServicesHeroSection  from "./ServicesHeroSection";
import IndustriesWeServe    from "./IndustriesWeServe";
import ServicesTechnologies from "./ServicesTechnologies";
import ServicePortfolio     from "./ServicePortfolio";
import WhyChooseProxen      from "./WhyChooseProxen";
import OurClients           from "./OurClients";
import ServiceTestimonials  from "./ServiceTestimonials";

// ─────────────────────────────────────────────────────────────────────────────

export default function ServiceDetails({ params }: { params?: { slug?: string } } = {}) {
  const slug = params?.slug ?? '';

  // Resolve the service by URL slug — redirect if unknown
  const service = getServiceBySlug(slug ?? "");
  if (!service) {
    redirect('/services');
  }

  // ── Destructure all per-service section data ──────────────────────────────
  const {
    hero,
    industriesSection,
    whyChoose,
    technologies,
  } = service;

  return (
    <Wrapper>
      <PageSEO
        title={service.title}
        description={service.hero.description}
        canonical={`https://proxen.ca/services/${service.slug}`}
      />
      <HeaderOne />

      <main className="spp-page-wrapper">

        {/* ── Hero ── unique headline, description, CTA & mockup per service */}
        <ServicesHeroSection {...hero} />

        {/* ── Industries ── unique heading, description & industry tags per service */}
        <IndustriesWeServe {...industriesSection} />

        {/* ── Why Choose ── unique eyebrow, heading, features per service */}
        <WhyChooseProxen {...whyChoose} />

        {/* ── Technologies ── unique platform logos & heading per service */}
        <ServicesTechnologies {...technologies} />

        {/* ── Portfolio, Clients, Testimonials ── shared across services ── */}
        <ServicePortfolio />
        <OurClients />
        <ServiceTestimonials />

      </main>

      <FooterThree />
    </Wrapper>
  );
}
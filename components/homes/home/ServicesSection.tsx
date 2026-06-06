'use client';

// src/components/.../ServicesSection.tsx

import React from "react";
import Link from "next/link";
import {
  HiOutlineGlobeAlt,
  HiOutlinePaintBrush,
  HiOutlineShoppingCart,
  HiOutlineMagnifyingGlass,
  HiOutlineMegaphone,
  HiOutlineShare,
  HiOutlineCodeBracketSquare,
  HiOutlineDevicePhoneMobile,
  HiOutlinePencilSquare,
  HiOutlineWrenchScrewdriver,
  HiArrowUpRight, // Consolidated into the same import block
} from "react-icons/hi2";

import { getAllServices, type ServiceData } from "../../../data/services-data";

// ─────────────────────────────────────────────────────────────────────────────
// ICON MAP
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Maps each service `id` (stable integer in services-data.ts) to its icon.
 * When a new service is added to services-data.ts, add its id → icon entry here.
 * HiOutlineWrenchScrewdriver is the fallback for any unmapped id.
 */
const SERVICE_ICON_MAP: Record<number, React.ReactNode> = {
  1: <HiOutlineGlobeAlt />,          // Website Designing
  2: <HiOutlinePaintBrush />,        // Branding & Identity
  3: <HiOutlineShoppingCart />,      // E-Commerce Solutions
  4: <HiOutlineMagnifyingGlass />,   // Search Engine Optimization (SEO)
  5: <HiOutlineShare />,             // Social Media Management
  6: <HiOutlineMegaphone />,         // PPC Advertising
  7: <HiOutlineDevicePhoneMobile />, // Mobile App Development
  8: <HiOutlineCodeBracketSquare />, // Web Application Development
  9: <HiOutlinePencilSquare />,      // Content Marketing (Reserved)
};

/** Returns the mapped icon or a generic fallback for future services. */
const getServiceIcon = (id: number): React.ReactNode =>
  SERVICE_ICON_MAP[id] ?? <HiOutlineWrenchScrewdriver />;

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Build the canonical /services/:slug path.
 * Single URL-building function — no conditional slash logic anywhere else.
 */
const buildServicePath = (service: ServiceData): string =>
  `/services/${service.slug}`;

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

/**
 * ServicesSection
 *
 * All titles, descriptions, links, and card count are driven exclusively by
 * services-data.ts via getAllServices(). The icon map above is the only place
 * that needs touching when a new service is added. No other changes required.
 */
const ServicesSection: React.FC = () => {
  // Synchronous — no loading state, no API call, no useEffect.
  const services = getAllServices();

  return (
    <section id="services" className="hp-services-section">
      <div className="container">

        {/* ── Section Header ── */}
        <div className="hp-section-header" data-aos="fade-up">
          <p className="hp-eyebrow">What We Do For You</p>
          <h2 className="hp-section-h2">Services Built for Business Results</h2>
          <p className="hp-section-desc">
            Every service we offer is designed to move the needle — not just look good.
          </p>
        </div>

        {/* ── Services Grid ── */}
        <div className="hp-services-grid">
          {services.map((svc, idx) => (
            <Link
              key={svc.id}
              href={buildServicePath(svc)}
              className="hp-service-card"
              data-aos="fade-up"
              data-aos-delay={(idx % 4) * 100} // Stagger by column position
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="hp-service-card-top">
                <div className="hp-service-icon">
                  {/* Icon resolved from SERVICE_ICON_MAP; falls back gracefully */}
                  {getServiceIcon(svc.id)}
                </div>
                <div className="hp-service-arrow" aria-hidden="true">
                  <HiArrowUpRight />
                </div>
              </div>

              {/* Title pulled directly from services-data.ts */}
              <h3 className="hp-service-title">{svc.title}</h3>

              {/* Description pulled dynamically from listing.shortDescription */}
              <p className="hp-service-desc">{svc.listing.shortDescription}</p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
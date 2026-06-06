// src/components/single-service/IndustriesWeServe.tsx
import React from "react";
import {
  industriesSection,
  type IndustriesSectionData,
  type IndustryTag,
} from "../../data/services-data";

// ─────────────────────────────────────────────────────────────────────────────
//  Re-exports for consumers
// ─────────────────────────────────────────────────────────────────────────────
export type { IndustriesSectionData, IndustryTag };

// ─────────────────────────────────────────────────────────────────────────────
//  Props  — every field is optional; falls back to services-data.ts defaults
// ─────────────────────────────────────────────────────────────────────────────
type IndustriesWeServeProps = Partial<IndustriesSectionData>;

// ─────────────────────────────────────────────────────────────────────────────
//  Helper — duplicates array so marquee animation loops seamlessly
// ─────────────────────────────────────────────────────────────────────────────
function doubleForLoop<T>(arr: T[]): T[] {
  return [...arr, ...arr];
}

// ─────────────────────────────────────────────────────────────────────────────
//  Sub-component: single pill tag
// ─────────────────────────────────────────────────────────────────────────────
const Tag: React.FC<{ tag: IndustryTag }> = ({ tag }) => (
  <span
    className="spp-industry-tag"
    style={{ backgroundColor: tag.bg, color: tag.color }}
    aria-hidden="true" /* duplicated items are decorative */
  >
    {tag.label}
  </span>
);

// ─────────────────────────────────────────────────────────────────────────────
//  Main Component
// ─────────────────────────────────────────────────────────────────────────────
const IndustriesWeServe: React.FC<IndustriesWeServeProps> = ({
  eyebrow    = industriesSection.eyebrow,
  heading    = industriesSection.heading,
  description = industriesSection.description,
  industries = industriesSection.industries,
}) => {
  // Single row duplicated for infinite scroll
  const marqueeRow = doubleForLoop(industries!);

  return (
    <section className="spp-industries-section" aria-label="Industries we serve">

      {/* ── Section header ── */}
      <div className="spp-industries-header">
        {eyebrow && (
          <p className="spp-industries-eyebrow" data-aos="fade-up">
            {eyebrow}
          </p>
        )}
        <h2 className="spp-industries-h2" data-aos="fade-up" data-aos-delay="0">
          {heading}
        </h2>
        <p className="spp-industries-desc" data-aos="fade-up" data-aos-delay="60">
          {description}
        </p>
      </div>

      {/* ── Single-row infinite marquee ── */}
      <div
        className="spp-industries-ticker-wrap"
        role="marquee"
        aria-label="Scrolling list of industries served"
        data-aos="fade-up"
        data-aos-delay="120"
      >
        <div className="spp-industries-row">
          <div className="spp-industries-track" aria-hidden="true">
            {marqueeRow.map((tag, i) => (
              <Tag key={`tag-${i}`} tag={tag} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Accessible static list (screen readers only) ── */}
      <ul className="spp-sr-only" aria-label="Industries served">
        {industries!.map((tag, i) => (
          <li key={i}>{tag.label}</li>
        ))}
      </ul>

    </section>
  );
};

export default IndustriesWeServe;
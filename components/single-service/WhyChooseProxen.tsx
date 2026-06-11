// src/components/services/WhyChooseProxen.tsx
import React from "react";
import Image from 'next/image';
import {
  HiOutlineFunnel,
  HiOutlineBolt,
  HiOutlinePresentationChartLine,
  HiOutlineDevicePhoneMobile,
  HiOutlineCurrencyDollar,
  HiOutlineChatBubbleLeftEllipsis,
} from "react-icons/hi2";
import {
  whyChooseSection,
  type WhyChooseSectionData,
  type WhyChooseFeature,
  type WhyChooseIconId,
} from "../../data/services-data";

// ─────────────────────────────────────────────────────────────────────────────
//  Re-exports for consumers
// ─────────────────────────────────────────────────────────────────────────────
export type { WhyChooseSectionData, WhyChooseFeature };

// ─────────────────────────────────────────────────────────────────────────────
//  Icon map — bridges short iconId string keys to react-icons/hi2 JSX.
//  Used when iconId is NOT a URL (e.g. service-specific whyChoose sections).
//  To add a new icon: import above + add entry here + use the key in data.
// ─────────────────────────────────────────────────────────────────────────────
const ICON_MAP: Partial<Record<string, React.ReactNode>> = {
  "funnel":           <HiOutlineFunnel />,
  "bolt":             <HiOutlineBolt />,
  "chart-line":       <HiOutlinePresentationChartLine />,
  "phone-mobile":     <HiOutlineDevicePhoneMobile />,
  "currency-dollar":  <HiOutlineCurrencyDollar />,
  "chat-bubble":      <HiOutlineChatBubbleLeftEllipsis />,
};

// ─────────────────────────────────────────────────────────────────────────────
//  renderIcon — resolves an iconId to a React node.
//
//  Two strategies are supported in services-data.ts:
//
//  1. URL-based  (main whyChooseSection + service 1):
//     iconId = "https://proxen.cdn.prismic.io/proxen/....svg"
//     → renders an <img> tag pointing at the CDN asset.
//
//  2. Key-based  (all other service-specific whyChoose sections):
//     iconId = "funnel" | "bolt" | "chart-line" | etc.
//     → resolved via ICON_MAP to a react-icons/hi2 component.
//
//  If neither matches (e.g. a typo in the data file) the icon slot is
//  rendered as an empty div so the card layout is never broken.
// ─────────────────────────────────────────────────────────────────────────────
function renderIcon(iconId: WhyChooseIconId): React.ReactNode {
  // Strategy 1: full URL (http/https) or root-relative path → <img>
  if (iconId.startsWith("http://") || iconId.startsWith("https://") || iconId.startsWith("/")) {
    return (
      <Image
        src={iconId}
        alt=""
        className="spp-why-icon-img"
        aria-hidden="true"
        loading="lazy"
        width={40}
        height={40}
        style={{ objectFit: 'contain' }}
      />
    );
  }

  // Strategy 2: short string key → react-icons/hi2 via ICON_MAP
  const icon = ICON_MAP[iconId];
  if (icon) return icon;

  // Fallback: unknown key — render nothing rather than crash
  return null;
}

// ─────────────────────────────────────────────────────────────────────────────
//  Props — all optional; fall back to services-data.ts defaults
// ─────────────────────────────────────────────────────────────────────────────
type WhyChooseProxenProps = Partial<WhyChooseSectionData>;

// ─────────────────────────────────────────────────────────────────────────────
//  Component
// ─────────────────────────────────────────────────────────────────────────────
const WhyChooseProxen: React.FC<WhyChooseProxenProps> = ({
  eyebrow       = whyChooseSection.eyebrow,
  headingPlain  = whyChooseSection.headingPlain,
  headingAccent = whyChooseSection.headingAccent,
  headingTrail  = whyChooseSection.headingTrail,
  description   = whyChooseSection.description,
  features      = whyChooseSection.features,
}) => {
  return (
    <section
      id="spp-why-choose"
      className="spp-why-section"
      aria-labelledby="spp-why-heading"
    >
      {/* ── Section header ── */}
      <div className="spp-why-header" data-aos="fade-up">
        <span className="spp-why-eyebrow">{eyebrow}</span>

        <h2 className="spp-why-h2" id="spp-why-heading">
          {headingPlain}{" "}
          <span className="spp-why-accent">{headingAccent}</span>{" "}
          {headingTrail}
        </h2>

        <p className="spp-why-desc">{description}</p>
      </div>

      {/* ── 3 × 2 feature card grid ── */}
      <div className="spp-container">
        <div className="spp-why-grid-sp">
          {features.map((feat, idx) => (
            <article
              key={idx}
              className="spp-why-card"
              data-aos="fade-up"
              data-aos-delay={60 + (idx % 3) * 80}
            >
              {/* Icon block */}
              <div className="spp-why-icon-wrap" aria-hidden="true">
                {renderIcon(feat.iconId)}
              </div>

              {/* Copy */}
              <h3 className="spp-why-card-title">{feat.title}</h3>
              <p className="spp-why-card-desc">{feat.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseProxen;
// src/components/services/ServicesTechnologies.tsx
import React from "react";
import {
  technologiesSection,
  type TechnologiesSectionData,
  type PlatformData,
  type PlatformId,
} from "../../data/services-data";

// ─────────────────────────────────────────────────────────────────────────────
//  Re-exports for consumers
// ─────────────────────────────────────────────────────────────────────────────
export type { TechnologiesSectionData, PlatformData };

/* ─────────────────────────────────────────────────────────────────────────────
   INLINE SVG LOGOS
   Each logo is hand-tuned to render crisply at ~38 px tall inside a 192 × 72 px card.
   viewBox widths are proportional so every logo fills the available space naturally.
   These cannot live in a plain .ts file — they stay here and are wired to services-data.ts
   platform IDs via LOGO_MAP below.
   ───────────────────────────────────────────────────────────────────────────── */

const ShopifyLogo: React.FC = () => (
  <svg viewBox="0 0 130 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Shopify" role="img">
    <path d="M27.5 9.4c-.02-.19-.19-.29-.34-.3-.15-.01-3.16-.06-3.16-.06s-2.09-2.03-2.32-2.25c-.24-.22-.7-.16-.88-.1L19.59 7.4C19 6.97 18.18 6.75 17.27 6.65 15.47 4.91 13.22 4 11.39 4 5.8 4 3.14 10.8 2.34 14.3c-1.96.6-3.34 1.04-3.48 1.08C-2.24 15.72-2.28 15.75.8 18.36l4.92 4.55c-.19 1.94-.43 4.3-.66 6.54L9.8 33l11.93 2.86S25.63 15.11 25.67 14.97c.05-.14.24-.19.32-.08l2.32 1.72c.18.14.42.12.57-.05l1.48-7.65c.06-.31-.06-.67-.42-.67l-2.32-.01c.57-2.04 1.15-3.17 1.15-3.17l2.46 1.61c.17.11.38.08.52-.05l.36-.36c.14-.14.12-.36.05-.47l-.44-.53zM17.1 13.04l-3.15.97c.34-1.3.98-2.58 1.94-3.42.32-.28.78-.59 1.2-.78v3.23zm-2.4-.74c.34-1.27 1.06-2.53 2.04-3.34-1.24.42-2.04 1.06-2.04 1.06v2.28zm6.1-5.52c.14.08.29.22.43.38-1.36.64-2.82 2.22-3.42 4.49l-2.59.8C15.8 9.7 17.43 7.34 20.8 6.78z" fill="#95BF47" />
    <path d="M27.16 9.1c-.15-.01-3.16-.06-3.16-.06s-2.09-2.03-2.32-2.25c-.08-.08-.19-.12-.31-.12V34.5l11.93-2.98L29.1 9.52c-.05-.3-.23-.49-.37-.51l-.43.11-.01-.01c-.35 0-.78-.01-1.13-.01z" fill="#5E8E3E" />
    <path d="M16.87 17.4l-1.48 4.37s-1.31-.7-2.89-.7c-2.33 0-2.45 1.46-2.45 1.82 0 2.02 5.26 2.79 5.26 7.52 0 3.72-2.36 6.12-5.55 6.12-3.82 0-5.76-2.38-5.76-2.38l1.02-3.36s2 1.72 3.7 1.72c1.1 0 1.56-.86 1.56-1.5 0-2.62-4.31-2.72-4.31-7.07 0-3.64 2.62-7.16 7.88-7.16 2.03 0 3.01.58 3.01.58v.03z" fill="#fff" />
    <text x="34" y="27" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontSize="19" fontWeight="700" fill="#111827" letterSpacing="-0.5">shopify</text>
  </svg>
);

const WordPressLogo: React.FC = () => (
  <svg viewBox="0 0 186 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="WordPress" role="img">
    <circle cx="18" cy="19" r="15.5" fill="#21759B" fillOpacity="0.1" />
    <circle cx="18" cy="19" r="15.5" stroke="#21759B" strokeWidth="1.8" fill="none" />
    <path d="M3.5 19A14.5 14.5 0 0118 4.5 14.5 14.5 0 0132.5 19 14.5 14.5 0 0118 33.5 14.5 14.5 0 013.5 19zm2.4 0l4.2 11.4L17.8 8.6l6.6 21.8 4.2-11.4H31a13 13 0 10-25 0h2z" fill="#21759B" />
    <text x="42" y="26" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontSize="18" fontWeight="800" fill="#21759B" letterSpacing="0.5">W</text>
    <text x="58" y="26" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontSize="18" fontWeight="700" fill="#111827" letterSpacing="0.4">ORDPRESS</text>
  </svg>
);

const WixLogo: React.FC = () => (
  <svg viewBox="0 0 88 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Wix" role="img">
    <text x="0" y="32" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontSize="36" fontWeight="900" fill="#111827" letterSpacing="-2">Wix</text>
  </svg>
);

const WebflowLogo: React.FC = () => (
  <svg viewBox="0 0 158 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Webflow" role="img">
    <path d="M33 5H21.5L17 19.5 13.5 9H7L3.5 19.5 0 5h-2l7.2 24h4.8L14 17l4 12h4.8L30 5h3z" fill="#4353FF" />
    <path d="M19 5h-4.8L10.5 16l2.4 6 6.1-17z" fill="#146EF5" />
    <text x="39" y="27" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontSize="19" fontWeight="700" fill="#111827" letterSpacing="-0.4">webflow</text>
  </svg>
);

const NextJsLogo: React.FC = () => (
  <svg viewBox="0 0 126 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Next.js" role="img">
    <circle cx="18" cy="19" r="16" fill="#000" />
    <path d="M11 27V11l17 19V11" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    <text x="42" y="26" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontSize="19" fontWeight="900" fill="#111827" letterSpacing="-1.2">NEXT</text>
    <text x="96" y="28" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontSize="13" fontWeight="700" fill="#111827">.JS</text>
  </svg>
);

const SquarespaceLogo: React.FC = () => (
  <svg viewBox="0 0 200 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Squarespace" role="img">
    <path d="M18 2L34 19L18 36L2 19L18 2z" fill="none" stroke="#111827" strokeWidth="1.8" />
    <path d="M10 19L18 11l8 8-8 8-8-8z" fill="#111827" fillOpacity="0.12" />
    <path d="M14 19l4-4 4 4-4 4-4-4z" fill="#111827" />
    <text x="42" y="25" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontSize="14" fontWeight="700" fill="#111827" letterSpacing="0.6">SQUARESPACE</text>
  </svg>
);

const WeeblyLogo: React.FC = () => (
  <svg viewBox="0 0 108 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Weebly" role="img">
    <text x="0" y="28" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontSize="24" fontWeight="800" fill="#F76B1C" letterSpacing="-0.6">weebly</text>
  </svg>
);

const ReactLogo: React.FC = () => (
  <svg viewBox="0 0 112 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="React" role="img">
    <circle cx="18" cy="19" r="4" fill="#61DAFB" />
    <ellipse cx="18" cy="19" rx="16" ry="6.5" stroke="#61DAFB" strokeWidth="1.6" fill="none" />
    <ellipse cx="18" cy="19" rx="16" ry="6.5" stroke="#61DAFB" strokeWidth="1.6" fill="none" transform="rotate(60 18 19)" />
    <ellipse cx="18" cy="19" rx="16" ry="6.5" stroke="#61DAFB" strokeWidth="1.6" fill="none" transform="rotate(120 18 19)" />
    <text x="40" y="26" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontSize="19" fontWeight="700" fill="#111827">React</text>
  </svg>
);

const VueLogo: React.FC = () => (
  <svg viewBox="0 0 96 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Vue.js" role="img">
    <path d="M18 3L32 3L18 28L4 3L11 3L18 20L25 3Z" fill="#41B883" />
    <path d="M11 3L18 20L25 3L21.5 3L18 13L14.5 3Z" fill="#35495E" />
    <text x="38" y="26" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontSize="19" fontWeight="700" fill="#111827">Vue.js</text>
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
//  Logo map — bridges PlatformId strings (from services-data.ts) to
//  inline SVG components (which cannot live in a plain .ts file).
//  To add a new platform: add the SVG component above + entry here +
//  the PlatformId union type + entry in services-data.ts > technologiesSection.
// ─────────────────────────────────────────────────────────────────────────────
const LOGO_MAP: Record<PlatformId, React.ReactNode> = {
  shopify:     <ShopifyLogo />,
  wordpress:   <WordPressLogo />,
  wix:         <WixLogo />,
  webflow:     <WebflowLogo />,
  nextjs:      <NextJsLogo />,
  squarespace: <SquarespaceLogo />,
  weebly:      <WeeblyLogo />,
  react:       <ReactLogo />,
  vue:         <VueLogo />,
};

// ─────────────────────────────────────────────────────────────────────────────
//  Props  — all optional; fall back to services-data.ts defaults
// ─────────────────────────────────────────────────────────────────────────────
type ServicesTechnologiesProps = Partial<TechnologiesSectionData>;

// ─────────────────────────────────────────────────────────────────────────────
//  Component
// ─────────────────────────────────────────────────────────────────────────────
const ServicesTechnologies: React.FC<ServicesTechnologiesProps> = ({
  eyebrow       = technologiesSection.eyebrow,
  headingPlain  = technologiesSection.headingPlain,
  headingAccent = technologiesSection.headingAccent,
  headingTrail  = technologiesSection.headingTrail,
  description   = technologiesSection.description,
  platforms     = technologiesSection.platforms,
}) => {
  /*
   * Triple-duplicate so the marquee has enough width to appear infinite
   * even on very wide screens. CSS animation translates -50% of total
   * track width, cycling through exactly one full copy before looping.
   */
  const tripled = [...platforms, ...platforms, ...platforms];

  return (
    <section
      id="spp-technologies"
      className="spp-tech-section-tech"
      aria-labelledby="spp-tech-heading"
    >
      {/* ── Text header ── */}
      <div className="spp-tech-header" data-aos="fade-up">
        <span className="spp-tech-eyebrow">{eyebrow}</span>

        <h2 className="spp-tech-h2" id="spp-tech-heading">
          {headingPlain}{" "}
          <span className="spp-tech-accent">{headingAccent}</span>{" "}
          {headingTrail}
        </h2>

        <p className="spp-tech-desc">{description}</p>
      </div>

      {/* ── Infinite marquee ── */}
      <div className="spp-tech-ticker-viewport" aria-hidden="true">
        <div className="spp-tech-ticker-track">
          {tripled.map((platform, idx) => (
            <div
              key={`${platform.id}-${idx}`}
              className="spp-tech-logo-card"
              title={platform.label}
            >
              <span className="spp-tech-logo-inner" aria-label={platform.label}>
                {LOGO_MAP[platform.id]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesTechnologies;
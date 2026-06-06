'use client';

import React, { useState, useEffect, useRef } from "react";
import { heroSection, type HeroSectionData } from "../../data/services-data";

// ─────────────────────────────────────────────────────────────────────────────
//  Types  (re-exported from services-data.ts for any parent that needs them)
// ─────────────────────────────────────────────────────────────────────────────
export type { HeroSectionData };

// ─────────────────────────────────────────────────────────────────────────────
//  Props  — every field is optional; falls back to services-data.ts defaults
// ─────────────────────────────────────────────────────────────────────────────
type ServiceHeroProps = Partial<HeroSectionData>;

// ─────────────────────────────────────────────────────────────────────────────
//  Auto-slide interval (ms) — time each image is visible before crossfading
// ─────────────────────────────────────────────────────────────────────────────
const SLIDE_INTERVAL_MS = 3500;

// ─────────────────────────────────────────────────────────────────────────────
//  Component
// ─────────────────────────────────────────────────────────────────────────────
const ServicesHeroSection: React.FC<ServiceHeroProps> = ({
  eyebrow       = heroSection.eyebrow,
  headlineParts = heroSection.headlineParts,
  description   = heroSection.description,
  primaryCta    = heroSection.primaryCta,
  secondaryCta  = heroSection.secondaryCta,
  trustAvatars  = heroSection.trustAvatars,
  trustText     = heroSection.trustText,
  mockupSlides  = heroSection.mockupSlides,
}) => {
  // ── Active slide index ──────────────────────────────────────────────────
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ── Auto-advance: only run the timer when there are multiple slides ─────
  useEffect(() => {
    if (mockupSlides.length <= 1) return; // nothing to cycle through

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % mockupSlides.length);
    }, SLIDE_INTERVAL_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [mockupSlides.length]);

  // ── Reset to slide 0 whenever the slide-set itself changes (route change) ─
  useEffect(() => {
    setActiveIndex(0);
  }, [mockupSlides]);

  return (
    <section className="spp-hero-section" aria-label="Service hero">

      {/* ── Layered backgrounds ── */}
      <div className="spp-hero-dots"   aria-hidden="true" />
      <div className="spp-hero-blob-1" aria-hidden="true" />
      <div className="spp-hero-blob-2" aria-hidden="true" />

      <div className="spp-container spp-hero-grid">

        {/* ══════════════════════════════
            Left column — copy
        ══════════════════════════════ */}
        <div className="spp-hero-left">

          {/* Eyebrow pill badge */}
          <div className="spp-eyebrow-badge" data-aos="fade-up" data-aos-delay="0">
            <span className="spp-eyebrow-dot" aria-hidden="true" />
            {eyebrow}
          </div>

          {/* H1 — uppercase, massive, mixed accent */}
          <h1 className="spp-hero-h1" data-aos="fade-up" data-aos-delay="80">
            {headlineParts.map((part, i) => {
              const segments = part.text.split("\n");
              return (
                <React.Fragment key={i}>
                  {segments.map((seg, j) => (
                    <React.Fragment key={j}>
                      {part.accent
                        ? <span className="spp-accent">{seg}</span>
                        : seg}
                      {j < segments.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </React.Fragment>
              );
            })}
          </h1>

          {/* Description */}
          <p className="spp-hero-desc" data-aos="fade-up" data-aos-delay="160">
            {description}
          </p>

          {/* CTA buttons */}
          <div className="spp-hero-ctas" data-aos="fade-up" data-aos-delay="240">
            <a href={primaryCta.href} className="spp-btn-primary">
              {primaryCta.label}
            </a>
            <a href={secondaryCta.href} className="spp-btn-outline">
              {secondaryCta.label}
            </a>
          </div>

          {/* Trust row — avatars + divider + text */}
          <div className="spp-hero-trust" data-aos="fade-up" data-aos-delay="320">
            <div className="spp-avatar-stack" aria-label="Trusted by clients">
              {trustAvatars.map((av, i) => (
                <img
                  key={i}
                  src={av.src}
                  alt={av.alt}
                  className="spp-avatar"
                  width={32}
                  height={32}
                  loading="lazy"
                />
              ))}
            </div>

            <span className="spp-trust-divider" aria-hidden="true" />

            <p className="spp-trust-text">
              {trustText}
            </p>
          </div>
        </div>

        {/* ══════════════════════════════
            Right column — image carousel
            (auto-crossfade, no controls)
        ══════════════════════════════ */}
        <div className="spp-hero-right" data-aos="fade-left" data-aos-delay="200">
          <div className="spp-hero-media-wrap">
            {/*
              Slider container — gives the wrap a concrete height anchor.
              All slides stack via absolute positioning; the active one is
              opacity:1, every other is opacity:0. CSS handles the crossfade.
            */}
            <div
              className="spp-hero-slider"
              role="region"
              aria-label="Service preview images"
              aria-live="polite"
            >
              {mockupSlides.map((slide, i) => (
                <div
                  key={`${slide.src}-${i}`}
                  className={
                    "spp-hero-slide" +
                    (i === activeIndex ? " spp-hero-slide--active" : "")
                  }
                  aria-hidden={i !== activeIndex}
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="spp-hero-mockup"
                    /*
                      First slide loads eagerly (above the fold).
                      Subsequent slides defer to avoid blocking initial render.
                    */
                    loading={i === 0 ? "eager" : "lazy"}
                    width={640}
                    height={520}
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesHeroSection;
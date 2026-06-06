'use client';

// src/components/home/ProcessSection.tsx
// ─────────────────────────────────────────────────────────────────────────
//  Pixel-perfect "How We Work" horizontal-timeline section.
//  All CSS lives in home.css under the .pprocess-* namespace — no conflicts.
//  Dependencies: react-intersection-observer (useInView), AOS (data-aos attrs)
// ─────────────────────────────────────────────────────────────────────────

import React from "react";
import { useInView } from "react-intersection-observer";

// ─── Data ─────────────────────────────────────────────────────────────────

interface Step {
  num: number;
  title: string;
  desc: string;
  /** Set true to render the highlighted/active circle (design: step 2). */
  active?: boolean;
}

const STEPS: Step[] = [
  {
    num: 1,
    title: "Discovery",
    desc: "We analyze your business goals and product requirements to define a clear roadmap.",
  },
  {
    num: 2,
    title: "Strategy & Planning",
    desc: "We structure features, architecture, timelines, and scalable development strategies.",
    active: true,
  },
  {
    num: 3,
    title: "UI/UX Design",
    desc: "We create intuitive, modern interfaces focused on usability and user experience.",
  },
  {
    num: 4,
    title: "Development",
    desc: "Our team builds scalable, secure, performance-driven apps using modern technologies.",
  },
  {
    num: 5,
    title: "Launch & Growth",
    desc: "We support deployment, optimization, and long-term product growth.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────

const ProcessSection: React.FC = () => {
  /**
   * useInView fires once when ≥ 20% of the timeline is visible.
   * Adding --on class triggers the left-to-right track-fill CSS animation.
   */
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="pprocess-section" id="process" aria-label="How we work">
      <div className="pprocess-container">

        {/* ══════════════════════════════
            Section Header
        ══════════════════════════════ */}
        <div className="pprocess-header" data-aos="fade-up">
          <p className="pprocess-eyebrow">How We Work</p>
          <h2 className="pprocess-h2">
            From Idea to Impact in{" "}
            <span className="pprocess-accent">5 Steps</span>
          </h2>
          <p className="pprocess-lead">
            A proven 5-step framework from discovery to growth — with full
            transparency every step of the way.
          </p>
        </div>

        {/* ══════════════════════════════
            Desktop — Horizontal Timeline
            (hidden on ≤ 860 px)
        ══════════════════════════════ */}
        <div
          className="pprocess-timeline"
          ref={ref}
          role="list"
          aria-label="Process steps"
        >
          {/* Animated connector track — sits behind all circles */}
          <div className="pprocess-track" aria-hidden="true">
            <div
              className={`pprocess-track-fill${
                inView ? " pprocess-track-fill--on" : ""
              }`}
            />
          </div>

          {STEPS.map((step, idx) => (
            <div
              key={step.num}
              className="pprocess-step"
              role="listitem"
              data-aos="fade-up"
              data-aos-delay={80 + idx * 90}
            >
              {/* Numbered circle */}
              <div
                className={`pprocess-circle${
                  step.active ? " pprocess-circle--active" : ""
                }`}
              >
                <span className="pprocess-circle-num">{step.num}</span>
                {/* Pulsing outer ring — rendered only on the active circle */}
                {step.active && (
                  <span className="pprocess-circle-ring" aria-hidden="true" />
                )}
              </div>

              <h3 className="pprocess-step-title">{step.title}</h3>
              <p className="pprocess-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* ══════════════════════════════
            Mobile — Vertical Timeline
            (hidden on > 860 px)
        ══════════════════════════════ */}
        <ol className="pprocess-mobile" aria-label="Process steps">
          {STEPS.map((step, idx) => (
            <li
              key={step.num}
              className="pprocess-mobile-item"
              data-aos="fade-right"
              data-aos-delay={idx * 70}
            >
              {/* Left spine: circle + vertical connector */}
              <div className="pprocess-mobile-spine">
                <div
                  className={`pprocess-circle${
                    step.active ? " pprocess-circle--active" : ""
                  }`}
                >
                  <span className="pprocess-circle-num">{step.num}</span>
                  {step.active && (
                    <span className="pprocess-circle-ring" aria-hidden="true" />
                  )}
                </div>

                {/* Vertical line between this step and the next */}
                {idx < STEPS.length - 1 && (
                  <div className="pprocess-vline" aria-hidden="true" />
                )}
              </div>

              {/* Right: text content */}
              <div className="pprocess-mobile-body">
                <h3 className="pprocess-step-title">{step.title}</h3>
                <p className="pprocess-step-desc">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
};

export default ProcessSection;
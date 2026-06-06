'use client';

import React from "react";
import { useInView } from "react-intersection-observer";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    number: 1,
    title: "Discovery",
    description:
      "We analyze your business goals and product requirements to define a clear roadmap.",
  },
  {
    number: 2,
    title: "Strategy & Planning",
    description:
      "We structure features, architecture, timelines, and scalable development strategies.",
  },
  {
    number: 3,
    title: "UI/UX Design",
    description:
      "We create intuitive, modern interfaces focused on usability and user experience.",
  },
  {
    number: 4,
    title: "Development",
    description:
      "Our team builds scalable, secure, performance-driven apps using modern technologies.",
  },
  {
    number: 5,
    title: "Launch & Growth",
    description:
      "We support deployment, optimization, and long-term product growth.",
  },
];

const DevelopmentProcess: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="sp-dev-process" className="sp-section sp-process-section">
      <div className="container">
        <div className="sp-section-header-center" data-aos="fade-up">
          <p className="sp-section-eyebrow">How We Work</p>
          <h2 className="sp-section-heading">Our Development Process</h2>
          <p className="sp-section-sub">
            A proven 5-step framework from discovery to growth — with full
            transparency every step of the way.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="sp-process-track" ref={ref}>
          <div className="sp-process-connector" aria-hidden="true">
            <div
              className={`sp-process-connector-fill ${
                inView ? "sp-process-connector-animate" : ""
              }`}
            />
          </div>

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="sp-process-step"
              data-aos="fade-up"
              data-aos-delay={80 + idx * 100}
            >
              <div
                className={`sp-process-circle ${
                  idx === 1 ? "sp-process-circle--active" : ""
                }`}
              >
                {step.number}
              </div>
              <div className="sp-process-content">
                <h3 className="sp-process-title">{step.title}</h3>
                <p className="sp-process-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: vertical steps */}
        <div className="sp-process-mobile">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="sp-process-mobile-step"
              data-aos="fade-right"
              data-aos-delay={idx * 70}
            >
              <div className="sp-process-mobile-left">
                <div
                  className={`sp-process-circle ${
                    idx === 1 ? "sp-process-circle--active" : ""
                  }`}
                >
                  {step.number}
                </div>
                {idx < steps.length - 1 && (
                  <div className="sp-process-mobile-line" aria-hidden="true" />
                )}
              </div>
              <div className="sp-process-content">
                <h3 className="sp-process-title">{step.title}</h3>
                <p className="sp-process-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;

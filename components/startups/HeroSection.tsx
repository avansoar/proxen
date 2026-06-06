'use client';

import React from "react";
import Marquee from "react-fast-marquee";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const trustedCategories: string[] = [
  "SaaS Founders",
  "E-Commerce",
  "Fintech",
  "Health Tech",
  "Logistics",
  "Agencies",
];

const HeroSection: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="sp-hero" className="sp-hero-section">
      <div className="sp-hero-bg-grid" aria-hidden="true" />

      <div className="sp-hero-container" ref={ref}>
        <p className="sp-eyebrow" data-aos="fade-up" data-aos-delay="0">
          Trusted Technology Partner
        </p>

        <h1 className="sp-hero-heading" data-aos="fade-up" data-aos-delay="80">
          Build &amp; Launch Scalable{" "}
          <span className="sp-hero-accent">Digital Products</span>
        </h1>

        <p className="sp-hero-desc" data-aos="fade-up" data-aos-delay="160">
          We help startups, SMBs, and growing businesses turn ideas into
          powerful SaaS platforms, web apps, mobile apps, and AI-driven systems
          — built for performance, scalability, and long-term growth.
        </p>

        <div className="sp-hero-cta-row" data-aos="fade-up" data-aos-delay="240">
          <a href="/contact-us" className="sp-btn-primary">
            Book a Discovery Call
          </a>
          <a href="/work" className="sp-btn-outline">
            View Portfolio
          </a>
        </div>

        {/* STATS SECTION - Updated with modern interactive CSS classes */}
        <div className="sp-hero-stats-row" data-aos="fade-up" data-aos-delay="320">
          <span className="sp-hero-stat-item">
            {inView ? <CountUp end={50} duration={2} suffix="+" /> : "50+"}{" "}
            products launched
          </span>
          <span className="sp-hero-stat-divider" aria-hidden="true" />
          <span className="sp-hero-stat-item">Canada-led team</span>
          <span className="sp-hero-stat-divider" aria-hidden="true" />
          <span className="sp-hero-stat-item">Startup to enterprise</span>
        </div>
      </div>

      <div className="sp-hero-marquee-wrapper" data-aos="fade-up" data-aos-delay="400">
        <div className="container">
          <div className="sp-marquee-label-row">
            <span className="sp-marquee-label">Trusted across</span>
          </div>
        </div>
        {/* Added autoFill={true} to completely eliminate the blank gap loop issue */}
        <Marquee gradient={false} speed={42} className="sp-trusted-marquee" autoFill={true}>
          {trustedCategories.map((cat, idx) => (
            <span key={idx} className="sp-marquee-chip">
              {cat}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default HeroSection;
import React from "react";
import Link from 'next/link';

const AboutUsHero: React.FC = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* ============================================================
           ABOUT US MAIN HERO SECTION (LIGHT THEME & LEFT ALIGNED)
           ============================================================ */
        .sp-about-hero-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          padding: 160px 0 100px;
          /* Uses the light background provided */
          background-image: url("https://images.prismic.io/proxen/aiFonAeQX7-eWuu0_proxenback1.png?auto=format,compress");
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          background-color: #f8fafc; /* Light fallback to match the aesthetic */
          display: flex;
          align-items: center;
          overflow: hidden;
          font-family: "Plus Jakarta Sans", system-ui, sans-serif;
        }

        .sp-about-hero-container {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* Left-Aligned Content Block */
        .sp-about-content-block {
          text-align: left;
          max-width: 640px; /* Constrains text to the left side */
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .sp-about-eyebrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #086CFE;
          border: 1px solid #086CFE;
          border-radius: 50px;
          padding: 6px 20px;
          margin-bottom: 32px;
        }

        .sp-about-heading {
          font-size: clamp(2.75rem, 5vw, 4.5rem);
          font-weight: 800; /* Extra bold matching the design */
          line-height: 1.1;
          color: #000000;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
          margin-top: 0;
        }

        .sp-about-desc {
          font-size: clamp(1.0625rem, 1.5vw, 1.25rem);
          line-height: 1.65;
          color: #6b7280; /* Gray text matching the design */
          font-weight: 500;
          margin-bottom: 48px;
          margin-top: 0;
          max-width: 580px;
        }

        /* Call-to-action Elements Layout */
        .sp-about-cta-row {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        /* Solid Blue Button */
        .sp-about-btn-primary {
          background: #086CFE;
          color: #ffffff;
          border: 2px solid #086CFE;
          padding: 14px 32px;
          font-size: 1.0625rem;
          font-weight: 600;
          border-radius: 12px; /* Rounded rectangle, not a full pill */
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        .sp-about-btn-primary:hover {
          background: #065acc;
          border-color: #065acc;
          box-shadow: 0 8px 24px rgba(8, 108, 254, 0.25);
          transform: translateY(-2px);
          color: #ffffff;
        }

        /* Outlined Button */
        .sp-about-btn-outline {
          background: transparent;
          color: #000000;
          border: 1px solid #000000; /* Thin black border */
          padding: 14px 32px;
          font-size: 1.0625rem;
          font-weight: 600;
          border-radius: 12px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        .sp-about-btn-outline:hover {
          background: #f3f4f6;
          transform: translateY(-2px);
        }

        /* ── Responsive Adaptations ───────────────────────────────── */
        @media (max-width: 1024px) {
          .sp-about-hero-section {
            padding: 120px 0 80px;
          }
        }

        @media (max-width: 768px) {
          .sp-about-hero-section {
            padding: 100px 0 60px;
          }
          .sp-about-heading {
            font-size: 2.5rem;
          }
          .sp-about-cta-row {
            flex-direction: column;
            width: 100%;
            align-items: stretch;
          }
          .sp-about-btn-primary, 
          .sp-about-btn-outline {
            width: 100%;
            text-align: center;
          }
        }
      `}} />

      <section id="sp-about-hero" className="sp-about-hero-section">
        <div className="container">
          
          {/* Left-Aligned Content Block */}
          <div className="sp-about-content-block" data-aos="fade-right">
            <span className="sp-about-eyebrow">ABOUT US</span>
            
            <h1 className="sp-about-heading">
              DIGITAL PRODUCTS<br />
              THAT DRIVE REAL<br />
              GROWTH
            </h1>
            
            <p className="sp-about-desc">
              We help startups growing businesses turn ideas into<br />
              powerful SaaS platforms, web apps, mobile apps, and AI-<br />
              driven systems — built for performance, scalability, and<br />
              long-term growth.
            </p>
            
            {/* Action CTAs */}
            <div className="sp-about-cta-row">
              <Link href="/contact-us" className="sp-about-btn-primary">
                Start Project
              </Link>
              <Link href="/work" className="sp-about-btn-outline">
                View Our Work
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default AboutUsHero;
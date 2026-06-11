// src/components/single-city/Cityservicesarea.tsx
// ─────────────────────────────────────────────────────────────────────────────
// "What we do" + "Related services" panel.
// Reads directly from CityData — no WordPress dependency.
// ─────────────────────────────────────────────────────────────────────────────

import Link from 'next/link';
import Image from 'next/image';
import type { CityData } from '../../data/cities-data';
import { normalizeCityPlainText } from './cityUtils';

interface Props {
  city: CityData;
}

export default function CityServicesArea({ city }: Props) {
  const { intro } = city;
  const { relatedServicesPanel } = intro;

  const introEyebrow = normalizeCityPlainText(intro.eyebrow, city);
  const introHeading = normalizeCityPlainText(intro.heading, city);
  const introDescription = normalizeCityPlainText(intro.description, city);
  const panelHeading = normalizeCityPlainText(relatedServicesPanel.heading, city);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .csa-section {
          --csa-slate:      #0f172a;
          --csa-blue:       #086CFE;
          --csa-blue-pale:  #eff6ff;
          --csa-muted:      #64748b;
          --csa-border:     #e2e8f0;
          --csa-surface:    #ffffff;
          --csa-surface2:   #f8fafc;
          --csa-font:       'Plus Jakarta Sans', sans-serif;

          font-family: var(--csa-font);
          padding: 100px 0;
          background: #f8fafc;
          position: relative;
          overflow: hidden;
        }

        .csa-section::before {
          content: '';
          position: absolute; top: -120px; right: -120px;
          width: 480px; height: 480px; border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .csa-section::after {
          content: '';
          position: absolute; bottom: -80px; left: -80px;
          width: 320px; height: 320px; border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── Left column ── */
        .csa-left {
          display: flex; flex-direction: column;
          justify-content: center; gap: 0;
        }

        .csa-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 0.75rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--csa-blue); margin-bottom: 20px;
        }

        .csa-eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--csa-blue); flex-shrink: 0;
        }

        .csa-heading {
          font-size: clamp(1.75rem, 3.5vw, 2.75rem);
          font-weight: 800; line-height: 1.18;
          color: var(--csa-slate); letter-spacing: -0.025em;
          margin: 0 0 20px;
        }

        .csa-description {
          font-size: 1rem; line-height: 1.75;
          color: var(--csa-muted); margin: 0 0 28px; max-width: 520px;
        }

        /* ── Pills ── */
        .csa-pills {
          display: flex; flex-wrap: wrap; gap: 8px;
          margin-bottom: 36px; padding: 0; list-style: none;
        }

        .csa-pills li a {
          display: inline-flex; align-items: center;
          padding: 6px 16px; border-radius: 999px;
          font-size: 0.8125rem; font-weight: 600;
          color: var(--csa-blue); background: var(--csa-blue-pale);
          border: 1.5px solid rgba(37,99,235,0.15);
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }

        .csa-pills li a:hover {
          background: var(--csa-blue); color: #fff; border-color: var(--csa-blue);
        }

        /* ── CTA row ── */
        .csa-cta-row {
          display: flex; flex-wrap: wrap; gap: 12px; align-items: center;
        }

        .csa-btn-primary {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 28px; background: var(--csa-blue); color: #fff;
          font-size: 0.9rem; font-weight: 700; border-radius: 12px;
          text-decoration: none; border: 2px solid var(--csa-blue);
          transition: background 0.22s, transform 0.22s, box-shadow 0.22s;
          box-shadow: 0 4px 16px rgba(37,99,235,0.25);
        }

        .csa-btn-primary:hover {
          background: #0556d4; border-color: #0556d4;
          transform: translateY(-2px); box-shadow: 0 8px 24px rgba(37,99,235,0.32); color: #fff;
        }

        .csa-btn-secondary {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 28px; background: transparent; color: var(--csa-slate);
          font-size: 0.9rem; font-weight: 700; border-radius: 12px;
          text-decoration: none; border: 2px solid var(--csa-border);
          transition: border-color 0.22s, background 0.22s, transform 0.22s;
        }

        .csa-btn-secondary:hover {
          border-color: var(--csa-blue); background: var(--csa-blue-pale);
          transform: translateY(-2px); color: var(--csa-blue);
        }

        .csa-btn-icon {
          display: inline-flex; align-items: center;
          justify-content: center; width: 22px; height: 22px; flex-shrink: 0;
        }

        .csa-btn-icon img { width: 16px; height: 16px; object-fit: contain; }

        /* ── Right panel ── */
        .csa-panel {
          background: var(--csa-surface); border-radius: 28px;
          padding: 36px;
          box-shadow: 0 0 0 1px rgba(15,23,42,0.06), 0 24px 64px rgba(15,23,42,0.09);
          position: relative; overflow: hidden;
        }

        .csa-panel::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #086CFE 0%, #60a5fa 50%, #086CFE 100%);
          border-radius: 28px 28px 0 0;
        }

        .csa-panel-eyebrow {
          font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--csa-blue); margin-bottom: 10px;
        }

        .csa-panel-heading {
          font-size: clamp(1.1rem, 2vw, 1.45rem); font-weight: 800;
          color: var(--csa-slate); letter-spacing: -0.02em;
          margin: 0 0 24px; line-height: 1.25;
        }

        /* ── Service cards grid ── */
        .csa-cards-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px;
        }

        .csa-card {
          display: block; text-decoration: none;
          background: var(--csa-surface2); border: 1.5px solid var(--csa-border);
          border-radius: 18px; padding: 22px 20px;
          transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease, background 0.22s ease;
          position: relative; overflow: hidden;
        }

        .csa-card::after {
          content: ''; position: absolute; inset: 0; border-radius: 18px;
          background: linear-gradient(135deg, rgba(37,99,235,0.04) 0%, transparent 60%);
          opacity: 0; transition: opacity 0.22s;
        }

        .csa-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(37,99,235,0.12);
          border-color: rgba(37,99,235,0.35); background: #fff;
        }

        .csa-card:hover::after { opacity: 1; }

        .csa-card-number {
          display: inline-flex; align-items: center; justify-content: center;
          width: 36px; height: 36px; border-radius: 10px;
          background: linear-gradient(135deg, #086CFE, #086CFE);
          color: #fff; font-size: 0.75rem; font-weight: 800;
          letter-spacing: 0.01em; margin-bottom: 14px; position: relative; z-index: 1;
        }

        .csa-card-title {
          font-size: 0.9375rem; font-weight: 700; color: var(--csa-slate);
          margin: 0 0 8px; line-height: 1.3; position: relative; z-index: 1;
        }

        .csa-card-desc {
          font-size: 0.825rem; color: var(--csa-muted);
          line-height: 1.65; margin: 0; position: relative; z-index: 1;
        }

        .csa-card-arrow {
          position: absolute; top: 18px; right: 18px;
          width: 28px; height: 28px; border-radius: 8px;
          background: transparent; border: 1.5px solid var(--csa-border);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transform: translateX(-4px);
          transition: opacity 0.22s, transform 0.22s, background 0.22s; z-index: 1;
        }

        .csa-card:hover .csa-card-arrow {
          opacity: 1; transform: translateX(0);
          background: var(--csa-blue); border-color: var(--csa-blue);
        }

        .csa-card-arrow svg { width: 12px; height: 12px; color: #fff; }

        /* ── Responsive ── */
        @media (max-width: 991px) {
          .csa-section { padding: 70px 0; }
          .csa-left { margin-bottom: 48px; }
        }

        @media (max-width: 639px) {
          .csa-section { padding: 56px 0; }
          .csa-cards-grid { grid-template-columns: 1fr; }
          .csa-panel { padding: 24px 20px; }
          .csa-heading { font-size: 1.625rem; }
          .csa-cta-row { flex-direction: column; align-items: stretch; }
          .csa-btn-primary, .csa-btn-secondary { justify-content: center; }
        }
      `}} />

      <section className="csa-section">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* ── Left: intro content ── */}
            <div className="col-lg-6">
              <div className="csa-left" data-aos="fade-up" data-aos-delay="100">

                <span className="csa-eyebrow">
                  <span className="csa-eyebrow-dot" />
                  {introEyebrow}
                </span>

                <h2 className="csa-heading">{introHeading}</h2>

                <p className="csa-description">{introDescription}</p>

                {intro.pills.length > 0 && (
                  <ul className="csa-pills">
                    {intro.pills.map((pill, i) => (
                      <li key={`${normalizeCityPlainText(pill.label, city)}-${i}`}>
                        <a href={pill.href || '/services'}>{normalizeCityPlainText(pill.label, city)}</a>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="csa-cta-row">
                  <Link className="csa-btn-primary" href={intro.primaryCta.href}>
                    {normalizeCityPlainText(intro.primaryCta.label, city)}
                    <span className="csa-btn-icon">
                      <Image src="/assets/images/svg/arrow-right.png" alt="" aria-hidden="true" width={16} height={16} style={{ objectFit: 'contain' }} />
                    </span>
                  </Link>

                  {intro.secondaryCta && (
                    <a className="csa-btn-secondary" href={intro.secondaryCta.href}>
                      {normalizeCityPlainText(intro.secondaryCta.label, city)}
                      <span className="csa-btn-icon">
                        <Image src="/assets/images/svg/arrow-right.png" alt="" aria-hidden="true" width={16} height={16} style={{ objectFit: 'contain' }} />
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* ── Right: related services panel ── */}
            <div className="col-lg-6">
              <div className="csa-panel" data-aos="fade-up" data-aos-delay="200">

                <p className="csa-panel-eyebrow">Related Services</p>
                <h3 className="csa-panel-heading">{panelHeading}</h3>

                <div className="csa-cards-grid">
                  {relatedServicesPanel.services.map((svc, index) => (
                    <a
                      href={svc.href}
                      className="csa-card"
                      key={`${normalizeCityPlainText(svc.title, city)}-${index}`}
                      aria-label={`Learn about ${normalizeCityPlainText(svc.title, city)}`}
                    >
                      <div className="csa-card-arrow" aria-hidden="true">
                        <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 10L10 2M10 2H4M10 2v6" />
                        </svg>
                      </div>
                      <div className="csa-card-number">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h4 className="csa-card-title">{normalizeCityPlainText(svc.title, city)}</h4>
                      <p className="csa-card-desc">{normalizeCityPlainText(svc.description, city)}</p>
                    </a>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
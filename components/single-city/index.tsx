// src/components/single-city/index.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Reads all content from src/data/cities-data.ts.
// No WordPress REST calls — fully self-contained, statically typed.
// ─────────────────────────────────────────────────────────────────────────────

import Link from 'next/link';
import Image from 'next/image';

import Wrapper from '../../layouts/Wrapper';
import HeaderOne from '../../layouts/headers/HeaderOne';
import FooterThree from '../../layouts/footers/FooterThree';
// import DividedArea from '../../common/DividedArea';
import PageSEO from '../SEO/PageSEO';
import PortfolioAreaHomeTwo from '../homes/home/PortfolioAreaHomeTwo';

import { getCityBySlug } from '../../data/cities-data';
import type { CityData } from '../../data/cities-data';
import CityServicesAreaStatic from './CityServicesArea';
import CityFaqAreaStatic from './CityFaqArea';
import { normalizeCityPlainText } from './cityUtils';

/* ─────────────────────────────────────────
   Scoped page styles (hero + about sections)
───────────────────────────────────────── */
const PAGE_STYLES = `
  :root {
    --sc-navy:       #0a0f1e;
    --sc-slate:      #0f172a;
    --sc-blue:       #086CFE;
    --sc-blue-light: #086CFE;
    --sc-blue-pale:  #eff6ff;
    --sc-muted:      #64748b;
    --sc-border:     #e2e8f0;
    --sc-surface:    #ffffff;
    --sc-bg:         #f8fafc;
    --sc-font:       'Plus Jakarta Sans', sans-serif;
    --sc-serif:      'Lora', serif;
  }

  /* ── Error state ── */
  .sc-state-wrap {
    font-family: var(--sc-font);
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
  }

  .sc-error-card { text-align: center; max-width: 480px; width: 100%; }

  .sc-error-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    border-radius: 999px;
    background: #fef2f2;
    color: #dc2626;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  .sc-error-title {
    font-family: var(--sc-font);
    font-size: 1.75rem;
    font-weight: 800;
    color: var(--sc-slate);
    margin: 0 0 12px;
    letter-spacing: -0.02em;
  }

  .sc-error-desc {
    font-size: 0.9375rem;
    color: var(--sc-muted);
    margin: 0 0 28px;
    line-height: 1.65;
  }

  /* ════════════════════════════════════════
     HERO SECTION
  ════════════════════════════════════════ */
  .sc-hero {
    font-family: var(--sc-font);
    background: var(--sc-navy);
    position: relative;
    overflow: hidden;
    padding: 120px 0 100px;
  }

  .sc-hero::before {
    content: '';
    position: absolute;
    top: -200px; right: -200px;
    width: 700px; height: 700px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 65%);
    pointer-events: none;
  }

  .sc-hero::after {
    content: '';
    position: absolute;
    bottom: -100px; left: -100px;
    width: 400px; height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 65%);
    pointer-events: none;
  }

  .sc-hero-grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }

  .sc-hero-content { position: relative; z-index: 2; display: flex; flex-direction: column; justify-content: center; }

  .sc-hero-eyebrow {
    display: inline-flex; align-items: center; gap: 10px;
    padding: 6px 16px 6px 6px; border-radius: 999px;
    background: rgba(37,99,235,0.15); border: 1px solid rgba(37,99,235,0.30);
    color: #93c5fd; font-size: 0.75rem; font-weight: 700;
    letter-spacing: 0.10em; text-transform: uppercase;
    margin-bottom: 24px; width: fit-content;
  }

  .sc-hero-eyebrow-icon {
    width: 22px; height: 22px; border-radius: 999px;
    background: rgba(37,99,235,0.40);
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  }

  .sc-hero-eyebrow-icon svg { width: 10px; height: 10px; color: #93c5fd; }

  .sc-hero-title {
    font-family: var(--sc-font);
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800; line-height: 1.12;
    color: #ffffff; letter-spacing: -0.03em;
    margin: 0 0 24px;
  }

  .sc-hero-title em {
    font-style: italic; font-family: var(--sc-serif);
    font-weight: 400; color: #60a5fa; display: block;
  }

  .sc-hero-desc {
    font-size: 1.0625rem; line-height: 1.75;
    color: rgba(255,255,255,0.65);
    margin: 0 0 36px; max-width: 540px;
  }

  .sc-hero-ctas { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }

  .sc-btn-primary {
    display: inline-flex; align-items: center; gap: 10px;
    padding: 15px 28px; background: var(--sc-blue); color: #fff;
    font-family: var(--sc-font); font-size: 0.9rem; font-weight: 700;
    border-radius: 12px; text-decoration: none; border: 2px solid var(--sc-blue);
    transition: background 0.22s, transform 0.22s, box-shadow 0.22s;
    box-shadow: 0 4px 20px rgba(37,99,235,0.40);
  }

  .sc-btn-primary:hover {
    background: #0556d4; border-color: #0556d4;
    transform: translateY(-2px); box-shadow: 0 8px 28px rgba(37,99,235,0.50); color: #fff;
  }

  .sc-btn-secondary {
    display: inline-flex; align-items: center; gap: 10px;
    padding: 15px 28px; background: rgba(255,255,255,0.08);
    color: rgba(255,255,255,0.90); font-family: var(--sc-font);
    font-size: 0.9rem; font-weight: 700; border-radius: 12px;
    text-decoration: none; border: 2px solid rgba(255,255,255,0.18);
    transition: background 0.22s, border-color 0.22s, transform 0.22s;
    backdrop-filter: blur(8px);
  }

  .sc-btn-secondary:hover {
    background: rgba(255,255,255,0.14); border-color: rgba(255,255,255,0.32);
    transform: translateY(-2px); color: #fff;
  }

  .sc-btn-icon { display: inline-flex; align-items: center; justify-content: center; width: 20px; height: 20px; flex-shrink: 0; }
  .sc-btn-icon img { width: 14px; height: 14px; object-fit: contain; filter: brightness(0) invert(1); }

  .sc-hero-image-wrap { position: relative; z-index: 2; }

  .sc-hero-image-frame {
    position: relative; border-radius: 24px; overflow: hidden;
    box-shadow: 0 0 0 1px rgba(255,255,255,0.08), 0 32px 80px rgba(0,0,0,0.50);
  }

  .sc-hero-image-frame::before {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(180deg, rgba(10,15,30,0.10) 0%, rgba(10,15,30,0.50) 100%);
    z-index: 1; pointer-events: none; border-radius: inherit;
  }

  .sc-hero-img {
    width: 100%; height: 420px; object-fit: cover;
    object-position: center 35%; display: block;
    transition: transform 0.55s ease;
  }

  .sc-hero-image-frame:hover .sc-hero-img { transform: scale(1.025); }

  .sc-hero-stat {
    position: absolute; bottom: -16px; left: -16px; z-index: 3;
    background: #fff; border-radius: 16px; padding: 16px 20px;
    box-shadow: 0 16px 40px rgba(0,0,0,0.18);
    display: flex; align-items: center; gap: 14px; min-width: 180px;
  }

  .sc-hero-stat-icon {
    width: 44px; height: 44px; border-radius: 12px;
    background: var(--sc-blue-pale);
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  }

  .sc-hero-stat-icon svg { width: 20px; height: 20px; color: var(--sc-blue); }
  .sc-hero-stat-value { font-family: var(--sc-font); font-size: 1.25rem; font-weight: 800; color: var(--sc-slate); line-height: 1; letter-spacing: -0.02em; margin: 0 0 4px; }
  .sc-hero-stat-label { font-size: 0.75rem; font-weight: 600; color: var(--sc-muted); margin: 0; letter-spacing: 0.02em; }

  /* ════════════════════════════════════════
     ABOUT SECTION
  ════════════════════════════════════════ */
  .sc-about {
    font-family: var(--sc-font); padding: 100px 0;
    background: var(--sc-bg); position: relative; overflow: hidden;
  }

  .sc-about::before {
    content: ''; position: absolute; top: 50%; right: -100px;
    transform: translateY(-50%); width: 400px; height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%);
    pointer-events: none;
  }

  .sc-about-content { display: flex; flex-direction: column; justify-content: center; }

  .sc-about-eyebrow {
    display: inline-flex; align-items: center; gap: 10px;
    font-size: 0.73rem; font-weight: 700; letter-spacing: 0.14em;
    text-transform: uppercase; color: var(--sc-blue); margin-bottom: 18px;
  }

  .sc-about-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--sc-blue); }

  .sc-about-heading {
    font-family: var(--sc-font);
    font-size: clamp(1.6rem, 3vw, 2.5rem);
    font-weight: 800; color: var(--sc-slate);
    letter-spacing: -0.025em; line-height: 1.18; margin: 0 0 20px;
  }

  .sc-about-heading em { font-style: italic; font-family: var(--sc-serif); font-weight: 400; color: var(--sc-blue); }

  .sc-about-text { font-size: 1rem; line-height: 1.78; color: var(--sc-muted); margin: 0 0 32px; max-width: 520px; }

  .sc-about-link {
    display: inline-flex; align-items: center; gap: 10px;
    padding: 14px 28px; background: var(--sc-blue); color: #fff;
    font-family: var(--sc-font); font-size: 0.9rem; font-weight: 700;
    border-radius: 12px; text-decoration: none; border: 2px solid var(--sc-blue);
    transition: background 0.22s, transform 0.22s, box-shadow 0.22s;
    box-shadow: 0 4px 16px rgba(37,99,235,0.25); width: fit-content;
  }

  .sc-about-link:hover {
    background: #0556d4; border-color: #0556d4;
    transform: translateY(-2px); box-shadow: 0 8px 24px rgba(37,99,235,0.32); color: #fff;
  }

  .sc-about-image-wrap { position: relative; }

  .sc-about-image-frame {
    border-radius: 24px; overflow: hidden;
    box-shadow: 0 0 0 1px rgba(15,23,42,0.06), 0 24px 64px rgba(15,23,42,0.10);
    position: relative;
  }

  .sc-about-image-frame::after {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(37,99,235,0.08) 0%, transparent 55%);
    z-index: 1; pointer-events: none; border-radius: inherit;
  }

  .sc-about-img {
    width: 100%; height: 380px; object-fit: cover;
    object-position: center 40%; display: block;
    transition: transform 0.55s ease;
  }

  .sc-about-image-frame:hover .sc-about-img { transform: scale(1.025); }
  .sc-about-accent { position: absolute; bottom: -20px; right: -20px; width: 80px; height: 80px; border-radius: 20px; background: linear-gradient(135deg, var(--sc-blue) 0%, #60a5fa 100%); z-index: -1; }

  /* ── Responsive ── */
  @media (max-width: 991px) {
    .sc-hero { padding: 80px 0 70px; }
    .sc-hero-image-wrap { margin-top: 48px; }
    .sc-hero-stat { bottom: -12px; left: 12px; }
    .sc-about { padding: 70px 0; }
    .sc-about-image-wrap { margin-top: 40px; }
  }

  @media (max-width: 639px) {
    .sc-hero { padding: 60px 0 56px; }
    .sc-hero-title { font-size: 1.875rem; }
    .sc-hero-img { height: 260px; }
    .sc-hero-ctas { flex-direction: column; align-items: stretch; }
    .sc-btn-primary, .sc-btn-secondary { justify-content: center; }
    .sc-about { padding: 56px 0; }
    .sc-about-img { height: 240px; }
  }
`;

export default function SingleCity({ params }: { params?: { slug?: string } } = {}) {
  const slug = params?.slug ?? '';

  // Synchronous lookup — no loading state needed
  const city: CityData | undefined = slug ? getCityBySlug(slug) : undefined;

  /* ── Not found ── */
  if (!city) {
    return (
      <Wrapper>
        <style dangerouslySetInnerHTML={{ __html: PAGE_STYLES }} />
        <PageSEO
          title="City Not Found"
          description="The requested city page could not be found."
          canonical="https://proxen.ca/cities-we-serve"
          noIndex
        />
        <HeaderOne />
        <div className="sc-state-wrap">
          <div className="sc-error-card">
            <p className="sc-error-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              Not found
            </p>
            <h2 className="sc-error-title">City not found</h2>
            <p className="sc-error-desc">
              The requested city page could not be found. It may have been moved or is not yet available.
            </p>
            <Link className="sc-btn-primary" href="/cities-we-serve">
              ← Back to Cities
            </Link>
          </div>
        </div>
        <FooterThree />
      </Wrapper>
    );
  }

  const { hero, faq, about, seo } = city;
  const heroEyebrow = normalizeCityPlainText(hero.eyebrow, city);
  const heroHeadingMain = normalizeCityPlainText(hero.heading.main, city);
  const heroHeadingHighlight = hero.heading.highlight
    ? normalizeCityPlainText(hero.heading.highlight, city)
    : '';
  const heroDescription = normalizeCityPlainText(hero.description, city);
  const heroBadgeValue = hero.badge
    ? normalizeCityPlainText(hero.badge.value, city)
    : '';
  const heroBadgeLabel = hero.badge
    ? normalizeCityPlainText(hero.badge.label, city)
    : '';
  const heroImageAlt = normalizeCityPlainText(hero.image.alt, city);
  const aboutEyebrow = normalizeCityPlainText(about.eyebrow, city);
  const aboutHeadingPrefix = normalizeCityPlainText(about.heading.prefix, city);
  const aboutHeadingHighlight = normalizeCityPlainText(about.heading.highlight, city);
  const aboutHeadingSuffix = normalizeCityPlainText(about.heading.suffix, city);
  const aboutBody = normalizeCityPlainText(about.body, city);
  const aboutImageAlt = normalizeCityPlainText(about.image.alt, city);
  const seoTitle = normalizeCityPlainText(seo.title, city);
  const seoDescription = normalizeCityPlainText(seo.description, city);

  return (
    <Wrapper>
      <style dangerouslySetInnerHTML={{ __html: PAGE_STYLES }} />

      <PageSEO
        title={seoTitle}
        description={seoDescription}
        canonical={`https://proxen.ca${seo.canonicalPath}`}
      />

      <HeaderOne />
      <main id="main-content" className="single-city-wrapper">

      {/* ════════════════════════
          HERO
      ════════════════════════ */}
      <section className="sc-hero">
        <div className="sc-hero-grid" aria-hidden="true" />
        <div className="container">
          <div className="row align-items-center g-5">

            {/* Left — copy */}
            <div className="col-lg-6">
              <div className="sc-hero-content" data-aos="fade-up" data-aos-delay="100">

                <span className="sc-hero-eyebrow">
                  <span className="sc-hero-eyebrow-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </span>
                  {heroEyebrow}
                </span>

                <h1 className="sc-hero-title">
                  {heroHeadingMain}
                  {heroHeadingHighlight && (
                    <em>{heroHeadingHighlight}</em>
                  )}
                </h1>

                <p className="sc-hero-desc">{heroDescription}</p>

                <div className="sc-hero-ctas">
                  <a className="sc-btn-primary" href={hero.primaryCta.href}>
                    {hero.primaryCta.label}
                    <span className="sc-btn-icon">
                      <Image src="/assets/images/svg/arrow-right.png" alt="" aria-hidden="true" width={14} height={14} style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                    </span>
                  </a>

                  {hero.secondaryCta && (
                    <a className="sc-btn-secondary" href={hero.secondaryCta.href}>
                      {hero.secondaryCta.label}
                      <span className="sc-btn-icon">
                        <Image src="/assets/images/svg/arrow-right.png" alt="" aria-hidden="true" width={14} height={14} style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Right — image */}
            <div className="col-lg-6">
              <div className="sc-hero-image-wrap" data-aos="fade-left" data-aos-delay="200">
                <div className="sc-hero-image-frame">
                  <Image
                    src={hero.image.src}
                    alt={heroImageAlt}
                    className="sc-hero-img"
                    width={640}
                    height={420}
                    style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
                    priority
                  />
                </div>

                {hero.badge && (
                  <div className="sc-hero-stat" aria-hidden="true">
                    <div className="sc-hero-stat-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                        <polyline points="16 7 22 7 22 13" />
                      </svg>
                    </div>
                    <div>
                      <p className="sc-hero-stat-value">{heroBadgeValue}</p>
                      <p className="sc-hero-stat-label">{heroBadgeLabel}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* <DividedArea /> */}

      {/* Services + intro section */}
      <CityServicesAreaStatic city={city} />

      {/* <DividedArea /> */}

      <PortfolioAreaHomeTwo />

      {/* <DividedArea /> */}

      {/* FAQ section */}
      {faq.faqs.length > 0 && (
        <>
          <CityFaqAreaStatic city={city} />
          {/* <DividedArea /> */}
        </>
      )}

      {/* ════════════════════════
          ABOUT SECTION
      ════════════════════════ */}
      <section className="sc-about">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* Left — text */}
            <div className="col-lg-6">
              <div className="sc-about-content" data-aos="fade-up" data-aos-delay="100">
                <span className="sc-about-eyebrow">
                  <span className="sc-about-eyebrow-dot" aria-hidden="true" />
                  {aboutEyebrow}
                </span>

                <h2 className="sc-about-heading">
                  {aboutHeadingPrefix}{' '}
                  <em>{aboutHeadingHighlight}</em>{' '}
                  {aboutHeadingSuffix}
                </h2>

                <p className="sc-about-text">{aboutBody}</p>

                <Link className="sc-about-link" href={about.cta.href}>
                  {about.cta.label}
                  <span className="sc-btn-icon">
                    <Image src="/assets/images/svg/arrow-right.png" alt="" aria-hidden="true" width={14} height={14} style={{ objectFit: 'contain' }} />
                  </span>
                </Link>
              </div>
            </div>

            {/* Right — image */}
            <div className="col-lg-6">
              <div className="sc-about-image-wrap" data-aos="fade-right" data-aos-delay="200">
                <div className="sc-about-image-frame">
                  <Image
                    src={about.image.src}
                    alt={aboutImageAlt}
                    className="sc-about-img"
                    width={640}
                    height={380}
                    style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
                    loading="lazy"
                  />
                </div>
                <div className="sc-about-accent" aria-hidden="true" />
              </div>
            </div>

          </div>
        </div>
      </section>
      </main>

      {/* <DividedArea /> */}
      <FooterThree />
    </Wrapper>
  );
}
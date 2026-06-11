// src/pages/single-work/PortfolioHero.tsx

import Link from 'next/link';
import Image from 'next/image';
import { type PortfolioProject } from '../../data/portfolio-data';

interface PortfolioHeroProps {
  project: PortfolioProject;
}

export default function PortfolioHero({ project }: PortfolioHeroProps) {
  const { hero, heroBackground, color: projectColor } = project;

  // Determine the button background color: hero.buttonColor > project.color > default
  const buttonColor = hero.buttonColor || projectColor || '#dc3545';

  // Use hero CTA with fallbacks
  const ctaText = hero.ctaText || "Explore";
  const ctaLink = hero.ctaLink || '/';

  // Apply custom background if provided
  const sectionStyle: React.CSSProperties = heroBackground
    ? {
        backgroundImage: `url(${heroBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top right',
        backgroundSize: 'auto',
        paddingTop: '100px',
      }
    : {};

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* Main image */
        .portfolio-hero-main-image {
          width: 100%;
          max-width: 100%;
          min-width: 200px;
          border-radius: 12px;
          object-fit: cover;
        }

        /* Logo image */
        .portfolio-hero-logo {
          max-width: 210px;
          min-width: 100px;
          height: auto;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .portfolio-hero-main-image {
            min-width: 150px;
          }
          .portfolio-hero-logo {
            min-width: 80px;
            max-width: 160px;
          }
        }
      `}} />

      <section
        className="proxenabout-section1 proxendefault-bg portfolio-bg"
        style={sectionStyle}
      >
        <div className="container">
          <div className="row align-items-center">

            {/* Right column — Main image */}
            <div className="col-lg-6 order-lg-2">
              <div
                className="proxenabout-thumb"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <Image
                  src={hero.mainImage}
                  alt={hero.headline}
                  className="portfolio-hero-main-image img-fluid"
                  width={600}
                  height={420}
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>

            {/* Left column — Text content */}
            <div className="col-lg-6 d-flex align-items-center justify-content-center order-lg-1">
              <div className="case-study-content text-center">

                {/* Logo */}
                {hero.logo && (
                  <div className="mb-4" data-aos="fade-up" data-aos-delay="300">
                    <Image
                      src={hero.logo}
                      alt={`${hero.headline} logo`}
                      className="portfolio-hero-logo img-fluid mx-auto d-block"
                      width={210}
                      height={80}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                )}

                {/* Badge */}
                <div className="mb-3" data-aos="fade-up" data-aos-delay="400">
                  <span className="badge bg-light text-dark px-3 py-2" style={{ fontSize: '13px', fontWeight: 600 }}>
                    {hero.badge}
                  </span>
                </div>

                {/* Headline */}
                <h3
                  className="fw-bold mb-3"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  {hero.headline}
                </h3>

                {/* Services */}
                {hero.services && hero.services.length > 0 && (
                  <p
                    className="text-muted mb-4"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    {hero.services.join(' | ')}
                  </p>
                )}

                {/* CTA Button — with custom arrow icons */}
                <div
                  className="proxencta-btn text-center project-btn"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <Link
                    className="proxendefault-btn"
                    href={ctaLink}
                    style={{
                      backgroundColor: buttonColor,
                      borderColor: buttonColor,
                      color: '#ffffff !important' as React.CSSProperties['color'],
                    }}
                  >
                    {ctaText}
                    <span className="proxenbutton-icon">
                      <Image className="arry1" src="/assets/images/svg/arrow-white.svg" alt="" aria-hidden="true" width={20} height={20} />
                      <Image className="arry2" src="/assets/images/svg/arrow-white.svg" alt="" aria-hidden="true" width={20} height={20} />
                    </span>
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
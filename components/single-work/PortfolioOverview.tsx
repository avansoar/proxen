// src/pages/single-work/PortfolioOverview.tsx

import Link from 'next/link';
import { type PortfolioProject } from '../../data/portfolio-data';

interface PortfolioOverviewProps {
  project: PortfolioProject;
}

export default function PortfolioOverview({ project }: PortfolioOverviewProps) {
  const { overview, hero } = project;
  const { timeline, industry, location } = overview.projectInfo;

  // Use hero CTA with fallbacks
  const ctaText = hero.ctaText || "View All FAQ's";
  const ctaLink = hero.ctaLink || '/faq';
  const buttonColor = project.color || '#212529'; // fallback to dark gray

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .about-project-header {
          display: inline-block;
          // background: linear-gradient(135deg, #a8c9e0 0%, #b8d8f0 100%);
          padding: 14px 24px;
          border-radius: 12px;
          margin-bottom: 24px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .about-project-header p {
          margin: 0;
          font-size: 18px;
          font-weight: 700;
          color: #1a2942;
        }

        .project-description {
          font-size: 16px;
          line-height: 1.7;
          color: #4a5568;
          margin-bottom: 32px;
          font-weight: 400;
        }

        .project-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 36px;
        }

        .badge-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid #2d3748;
          border-radius: 50px;
          padding: 12px 20px;
          background: transparent;
          transition: all 0.3s ease;
        }

        .badge-item:hover {
          // border-color: #e53e3e;
          box-shadow: 0 4px 12px rgba(229, 62, 62, 0.15);
        }

        .badge-label {
          font-size: 13px;
          font-weight: 600;
          color: #2d3748;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .badge-value {
          font-size: 14px;
          font-weight: 600;
          color: #1a202c;
        }
      `}} />

      <section className="proxenabout-section1 proxendefault-bg py-5">
        <div className="container">
          <div className="row align-items-center">

            {/* Overview Image */}
            <div className="col-lg-6">
              <div
                className="proxenabout-thumb"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <img
                  src={overview.image}
                  alt={`${project.hero.headline} overview`}
                  className="w-100"
                  style={{ borderRadius: '12px', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Overview Content */}
            <div className="col-lg-6 d-flex align-items-center">
              <div className="case-study-content w-100">

                {/* About Header */}
                <div
                  className="about-project-header rounded-0"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <p>{overview.aboutHeader}</p>
                </div>

                {/* Description */}
                <p
                  className="project-description"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  {overview.description}
                </p>

                {/* Info Badges */}
                <div
                  className="project-badges"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  {timeline && (
                    <div className="badge-item">
                      <span className="badge-label">Timeline:</span>
                      <span className="badge-value">{timeline}</span>
                    </div>
                  )}
                  {industry && (
                    <div className="badge-item">
                      <span className="badge-label">Industry:</span>
                      <span className="badge-value">{industry}</span>
                    </div>
                  )}
                  {location && (
                    <div className="badge-item">
                      <span className="badge-label">Location:</span>
                      <span className="badge-value">{location}</span>
                    </div>
                  )}
                </div>

                {/* CTA — with dynamic background */}
                <div
                  className="proxencta-btn text-start project-btn"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <Link
                    className="proxendefault-btn"
                    href={ctaLink}
                    style={{
                      backgroundColor: buttonColor,
                      borderColor: buttonColor,
                      color: '#fff',
                    }}
                  >
                    {ctaText}
                    <span className="proxenbutton-icon">
                      <img className="arry1" src="/assets/images/svg/arrow-white.svg" alt="arrow-right" />
                      <img className="arry2" src="/assets/images/svg/arrow-white.svg" alt="arrow-right" />
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
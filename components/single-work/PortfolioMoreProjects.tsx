'use client';

// src/pages/single-work/PortfolioMoreProjects.tsx

import Link from 'next/link';
import { useMemo } from 'react';
import { portfolioProjects, type PortfolioProject } from '../../data/portfolio-data';
import Slider from 'react-slick';

const PLACEHOLDER_IMAGE = '/assets/images/placeholder.jpg';

interface PortfolioMoreProjectsProps {
  project: PortfolioProject;
}

export default function PortfolioMoreProjects({ project }: PortfolioMoreProjectsProps) {
  // Get all projects except the current one
  const otherProjects = portfolioProjects.filter(p => p.slug !== project.slug);

  // If there are no other projects, don't render the section
  if (otherProjects.length === 0) {
    return null;
  }

  // Use heading, viewAllText, viewAllLink from the project's moreProjects if available, otherwise defaults
  const heading = project.moreProjects?.heading || 'More Projects';
  const viewAllText = project.moreProjects?.viewAllText || 'View All Projects';
  const viewAllLink = project.moreProjects?.viewAllLink || '/work';
  const buttonColor = project.color || '#212529';

  // Prepare slides with best available images
  const enhancedProjects = useMemo(() => {
    return otherProjects.map((proj) => {
      // Priority: relatedPortfolioImage → listingImage → hero.mainImage → placeholder
      const image =
        proj.relatedPortfolioImage ||
        proj.listingImage ||
        proj.hero.mainImage ||
        PLACEHOLDER_IMAGE;

      return {
        link: `/work/${proj.slug}`,
        title: proj.hero.badge, // use brand name as title
        image,
      };
    });
  }, [otherProjects]);

  const count = enhancedProjects.length;

  const sliderSettings = {
    dots: true,
    infinite: count > 4,
    speed: 600,
    slidesToShow: Math.min(4, count),   // 4 on desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    cssEase: 'ease',
    responsive: [
      {
        breakpoint: 1200, // large tablet / small desktop → 3 slides
        settings: { slidesToShow: Math.min(3, count), slidesToScroll: 1 },
      },
      {
        breakpoint: 992,  // tablet landscape → 2 slides
        settings: { slidesToShow: Math.min(2, count), slidesToScroll: 1 },
      },
      {
        breakpoint: 768,  // tablet portrait → 2 slides
        settings: { slidesToShow: Math.min(2, count), slidesToScroll: 1 },
      },
      {
        breakpoint: 576,  // large mobile → 1 slide
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section className="proxenabout-section1 work-bg proxendefault-bg py-5">
      <div className="container">

        {/* Section Heading */}
        <div className="proxensection-title center max-width-750">
          <h2 data-aos="fade-up" data-aos-delay="500">
            {heading}
          </h2>
        </div>

        {/* Projects Slider */}
        <div className="pmp-slider-wrap" data-aos="fade-up" data-aos-delay="700">
          <Slider {...sliderSettings} className="proxenportfolio-slider-js-init">
            {enhancedProjects.map((proj, index) => (
              <div key={index} className="pmp-slide">
                <div className="proxenp-thumb">
                  <Link href={proj.link} title={proj.title}>
                    <img
                      src={proj.image}
                      alt={proj.title || `Project ${index + 1}`}
                      className="pmp-image"
                      loading="lazy"
                      onError={(e) => { e.currentTarget.src = PLACEHOLDER_IMAGE; }}
                    />
                  </Link>
                </div>
                {proj.title && (
                  <p className="pmp-title">{proj.title}</p>
                )}
              </div>
            ))}
          </Slider>
        </div>

        {/* View All Button */}
        <div
          className="proxencta-btn project-btn moreProjectBtn"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <Link
            className="proxendefault-btn"
            href={viewAllLink}
            style={{ backgroundColor: buttonColor, borderColor: buttonColor, color: '#fff' }}
          >
            {viewAllText}
            <span className="proxenbutton-icon">
              <img className="arry1" src="/assets/images/svg/arrow-white.svg" alt="arrow-right" />
              <img className="arry2" src="/assets/images/svg/arrow-white.svg" alt="arrow-right" />
            </span>
          </Link>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* Slider wrapper min-height so layout doesn't jump */
        .pmp-slider-wrap { min-height: 380px; }

        /* Gap between slides */
        .slick-slide > div { margin: 0 8px; }
        .slick-list       { margin: 0 -8px; }

        /* Slide inner padding */
        .pmp-slide { padding: 4px 0 12px; }

        /* Card image */
        .pmp-image {
          width: 100%;
          height: 280px;
          object-fit: cover;
          border-radius: 12px;
          display: block;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .pmp-image:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.14);
        }

        /* Slide title */
        .pmp-title {
          text-align: center;
          margin-top: 10px;
          font-size: 0.875rem;
          font-weight: 600;
          color: #4a5568;
          line-height: 1.4;
        }

        /* Dots */
        .slick-dots { margin-top: 8px; }
        .slick-dots li button:before { font-size: 8px; color: #cbd5e0; opacity: 1; }
        .slick-dots li.slick-active button:before { color: #086CFE; opacity: 1; }

        /* Responsive image heights */
        @media (max-width: 1200px) {
          .pmp-image { height: 260px; }
          .pmp-slider-wrap { min-height: 360px; }
        }
        @media (max-width: 992px) {
          .pmp-image { height: 240px; }
          .pmp-slider-wrap { min-height: 340px; }
        }
        @media (max-width: 768px) {
          .pmp-image { height: 220px; }
          .pmp-slider-wrap { min-height: 310px; }
          .slick-slide > div { margin: 0 6px; }
          .slick-list       { margin: 0 -6px; }
        }
        @media (max-width: 576px) {
          .pmp-image { height: 200px; }
          .pmp-slider-wrap { min-height: 280px; }
          .slick-slide > div { margin: 0 4px; }
          .slick-list       { margin: 0 -4px; }
        }
        @media (max-width: 400px) {
          .pmp-image { height: 180px; }
          .pmp-slider-wrap { min-height: 260px; }
          .pmp-title { font-size: 0.8rem; }
        }
      `}} />
    </section>
  );
}
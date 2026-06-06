'use client';

// src/pages/single-work/PortfolioAssets.tsx

import { type PortfolioProject } from '../../data/portfolio-data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const PLACEHOLDER_IMAGE = 'https://placehold.co/800x600/2b4f5c/white?text=Project+Image';

interface PortfolioAssetsProps {
  project: PortfolioProject;
}

export default function PortfolioAssets({ project }: PortfolioAssetsProps) {
  const { images, buttonText, buttonLink } = project.assets;
  const buttonColor = project.color || '#212529'; // fallback to dark gray

  // Guard: nothing to show if no images
  if (!images || images.length === 0) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .proxenabout-thumb-slider .swiper-slide img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 12px;
          background-color: #f0f0f0;
          display: block;
          max-width: 100%;
          min-width: 200px;
        }

        .proxenabout-thumb-slider .swiper-pagination {
          margin-top: 1.5rem;
          position: static;
        }
      `}} />

      <section className="proxenabout-section1 work-bg proxendefault-bg py-5">
        <div className="container">

          <Swiper
            modules={[EffectCoverflow, Autoplay, Pagination]}
            effect="coverflow"
            loop={images.length > 1}
            speed={1000}
            centeredSlides={true}
            initialSlide={Math.min(3, images.length - 1)}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 3,
              depth: 395,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              0:   { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
            className="proxenabout-thumb-slider"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`${project.hero.headline} screenshot ${index + 1}`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  onError={(e) => {
                    e.currentTarget.src = PLACEHOLDER_IMAGE;
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Live Site / External CTA — updated to match button style */}
          {buttonLink && buttonText && (
            <div
              className="proxencta-btn project-btn text-center mt-5"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <a
                href={buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="proxendefault-btn"
                style={{
                  backgroundColor: buttonColor,
                  borderColor: buttonColor,
                  color: '#fff',
                }}
              >
                {buttonText}
                <span className="proxenbutton-icon">
                  <img className="arry1" src="/assets/images/svg/arrow-white.svg" alt="arrow-right" />
                  <img className="arry2" src="/assets/images/svg/arrow-white.svg" alt="arrow-right" />
                </span>
              </a>
            </div>
          )}

        </div>
      </section>
    </>
  );
}
'use client';

import React, { useState, useEffect } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";

// ==================== Data ====================
const benefits: string[] = [
  "Product-focused development approach",
  "Scalable architecture built for growth",
  "Transparent communication & milestone-based execution",
  "Dedicated long-term technical support",
  "Canada-led project management with offshore engineering efficiency",
];

interface Testimonial {
  quote: string;
  author: string;
  company: string;
  initials: string;
  rating?: number; // 1-5, default 5
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Proxen helped us scale our lead generation campaigns across Canada with a strategy that actually delivered measurable growth.",
    author: "Ethan Walker",
    company: "Founder, NovaEdge Solutions",
    initials: "EW",
  },
  {
    quote:
      "The website and branding work from Proxen gave our business a much more professional identity. We started seeing better engagement within weeks.",
    author: "Olivia Bennett",
    company: "Director, Maple Grove Realty",
    initials: "OB",
  },
  {
    quote:
      "We needed a modern marketing partner that understood performance and branding together. Proxen exceeded our expectations on both.",
    author: "Daniel Cooper",
    company: "CEO, NorthPeak Logistics",
    initials: "DC",
  },
  {
    quote:
      "Our social media finally feels premium and consistent. The Proxen team brought clarity, creativity, and strong execution to every campaign.",
    author: "Sofia Martin",
    company: "Marketing Manager, Urban Bloom Clinic",
    initials: "SM",
  },
  {
    quote:
      "From website development to SEO, Proxen handled everything smoothly. Communication was fast and the final result looked outstanding.",
    author: "Ryan Mitchell",
    company: "Owner, Elevate Fitness Studio",
    initials: "RM",
  },
  {
    quote:
      "The ad creatives and content strategy from Proxen significantly improved our online reach and customer inquiries.",
    author: "Chloe Anderson",
    company: "Co-Founder, TrueNest Interiors",
    initials: "CA",
  },
  {
    quote:
      "Professional team, modern design sense, and strong marketing knowledge. Working with Proxen has been a great experience for our brand.",
    author: "Liam Carter",
    company: "Managing Director, Westline Builders",
    initials: "LC",
  },
  {
    quote:
      "Proxen transformed our outdated digital presence into a modern brand that now attracts the right audience consistently.",
    author: "Emma Wilson",
    company: "Founder, Aurora Beauty Lounge",
    initials: "EW",
  },
];

// ==================== Component ====================
const WhyChooseUs: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = testimonials.length;

  // Auto-play only — no manual navigation
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused, total]);

  return (
    <section id="sp-why-choose-us" className="sp-section sp-why-section">
      <div className="container">
        <p className="sp-section-eyebrow" data-aos="fade-up">
          Who We Work With
        </p>

        <div className="sp-why-grid">
          {/* Left: Benefits */}
          <div
            className="sp-why-left"
            data-aos="fade-right"
            data-aos-delay="60"
          >
            <h2 className="sp-section-heading sp-why-heading">
              Why Businesses
              <br />
              Choose <span className="sp-hero-accent">Proxen</span>
            </h2>

            <ul className="sp-benefits-list">
              {benefits.map((benefit, idx) => (
                <li
                  key={idx}
                  className="sp-benefit-item"
                  data-aos="fade-right"
                  data-aos-delay={100 + idx * 65}
                >
                  <span className="sp-benefit-icon">
                    <HiCheckCircle />
                  </span>
                  <span className="sp-benefit-text">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Testimonial Carousel (auto-play, no arrows or dots) */}
          <div
            className="sp-why-right"
            data-aos="fade-left"
            data-aos-delay="140"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="sp-testimonial-carousel">
              <div
                className="sp-carousel-track"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {testimonials.map((t, idx) => (
                  <div className="sp-carousel-slide" key={idx}>
                    <div className="sp-testimonial-card">
                      <div className="sp-stars-row" aria-label="5 star rating">
                        {Array.from({ length: t.rating ?? 5 }).map((_, i) => (
                          <AiFillStar key={i} className="sp-star-icon" />
                        ))}
                      </div>

                      <blockquote className="sp-testimonial-quote">
                        "{t.quote}"
                      </blockquote>

                      <div className="sp-testimonial-author">
                        <div className="sp-author-avatar" aria-hidden="true">
                          {t.initials}
                        </div>
                        <div className="sp-author-info">
                          <p className="sp-author-name">{t.author}</p>
                          <p className="sp-author-company">{t.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
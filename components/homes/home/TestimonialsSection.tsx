'use client';

import React, { useRef, useState, useEffect, useCallback } from "react";
import { AiFillStar } from "react-icons/ai";

// --- Types ---
interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

// --- Data (10 realistic testimonials) ---
const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Working with Proxen completely transformed our online presence. Traffic is up 3× and our conversion rate has never been higher.",
    name: "Michael Curtis",
    role: "Founding Director",
    company: "QueenCity Events",
  },
  {
    quote:
      "The design team nailed our brand identity on the first round. It's rare to find a team that listens this well and executes this fast.",
    name: "Jamie Ryan",
    role: "CEO",
    company: "Northgate Hospitality Group",
  },
  {
    quote:
      "Proxen redesigned our SEO strategy from the ground up. We hit page one in six months — something we'd been trying for two years.",
    name: "Jasmeen Singh",
    role: "Marketing Head",
    company: "Selysia",
  },
  {
    quote:
      "From the initial brief to the final launch, every touchpoint felt thoughtful and intentional. Our clients constantly compliment our new website.",
    name: "David Okonkwo",
    role: "Managing Partner",
    company: "Harrow & Peak Consulting",
  },
  {
    quote:
      "The ROI we've seen since Proxen revamped our paid campaigns has been extraordinary. We cut our cost-per-lead in half within the first quarter.",
    name: "Sophie Whitfield",
    role: "Growth Director",
    company: "Luminary Finance",
  },
  {
    quote:
      "We handed Proxen a vague idea and they returned a fully realized brand system. The team's ability to translate vision into design is truly exceptional.",
    name: "Carlos Mendes",
    role: "Co-Founder",
    company: "Atlaz Studio",
  },
  {
    quote:
      "Our e-commerce revenue jumped 68% in the first two months post-launch. The new UX flows are intuitive, clean, and drive people right to checkout.",
    name: "Priya Nair",
    role: "Head of Digital",
    company: "Verdant Lifestyle",
  },
  {
    quote:
      "Proxen didn't just build us a website — they built us a sales engine. The content strategy alone brought in three major enterprise clients this year.",
    name: "Thomas Bergström",
    role: "VP of Marketing",
    company: "Nordic SaaS Group",
  },
  {
    quote:
      "I was skeptical about outsourcing our rebrand, but Proxen put every concern to rest. Delivery was on time, on budget, and far beyond our expectations.",
    name: "Aisha Kamara",
    role: "Brand Manager",
    company: "Elara Wellness",
  },
  {
    quote:
      "The attention to detail in both design and development is unlike any agency we've worked with. Every pixel, every interaction feels deliberately crafted.",
    name: "Liam O'Sullivan",
    role: "CTO",
    company: "Kinetica Labs",
  },
];

const VISIBLE_CARDS = 3;

const TestimonialsSection: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalSlides = TESTIMONIALS.length;
  const maxIndex = totalSlides - VISIBLE_CARDS;

  const scrollToIndex = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clamped);
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector(".hp-testi-card") as HTMLElement;
    if (!card) return;
    const cardWidth = card.offsetWidth + 24; // gap is 24px
    trackRef.current.scrollTo({ left: clamped * cardWidth, behavior: "smooth" });
  }, [maxIndex]);

  const resetAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev >= maxIndex ? 0 : prev + 1;
        if (trackRef.current) {
          const card = trackRef.current.querySelector(".hp-testi-card") as HTMLElement;
          if (card) {
            const cardWidth = card.offsetWidth + 24;
            trackRef.current.scrollTo({ left: next * cardWidth, behavior: "smooth" });
          }
        }
        return next;
      });
    }, 4500);
  };

  useEffect(() => {
    resetAutoPlay();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [maxIndex]);

  // Drag-to-scroll
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollStart(trackRef.current?.scrollLeft ?? 0);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    const delta = e.pageX - startX;
    trackRef.current.scrollLeft = scrollStart - delta;
  };

  const onMouseUp = () => {
    setIsDragging(false);
    syncIndexFromScroll();
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].pageX);
    setScrollStart(trackRef.current?.scrollLeft ?? 0);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!trackRef.current) return;
    const delta = e.touches[0].pageX - startX;
    trackRef.current.scrollLeft = scrollStart - delta;
  };

  const onTouchEnd = () => syncIndexFromScroll();

  const syncIndexFromScroll = () => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector(".hp-testi-card") as HTMLElement;
    if (!card) return;
    const cardWidth = card.offsetWidth + 24;
    const idx = Math.round(trackRef.current.scrollLeft / cardWidth);
    setCurrentIndex(Math.max(0, Math.min(idx, maxIndex)));
  };

  return (
    <section id="testimonials" className="hp-testimonials-section">
      <div className="container">

        {/* Section Header */}
        <div className="hp-section-header" data-aos="fade-up">
          <p className="hp-eyebrow">Client Stories</p>
          <h2 className="hp-section-h2">What Our Clients Say</h2>
          <p className="hp-section-desc">
            Real words from real partners we've helped grow.
          </p>
        </div>

        {/* Slider Track */}
        <div className="hp-testi-slider" data-aos="fade-up" data-aos-delay="100">
          <div
            className={`hp-testi-track${isDragging ? " hp-testi-track--dragging" : ""}`}
            ref={trackRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="hp-testi-card">

                {/* Stars */}
                <div className="hp-testi-stars" aria-label="5-star rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <AiFillStar key={i} className="hp-testi-star" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="hp-testi-quote">"{t.quote}"</blockquote>

                {/* Author */}
                <div className="hp-testi-author">
                  <div className="hp-testi-avatar" aria-hidden="true">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="hp-testi-name">{t.name}</p>
                    <p className="hp-testi-role">{t.role}, {t.company}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="hp-testi-dots" role="tablist" aria-label="Testimonial navigation">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === currentIndex}
              aria-label={`Go to slide ${i + 1}`}
              className={`hp-testi-dot${i === currentIndex ? " hp-testi-dot--active" : ""}`}
              onClick={() => { scrollToIndex(i); resetAutoPlay(); }}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
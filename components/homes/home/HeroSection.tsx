'use client';

// HeroSection.tsx
import React, { useState, useEffect } from "react";
import {
  HiOutlineChartBar,
  HiRocketLaunch,
  HiShieldCheck,
  HiOutlineCodeBracket,
} from "react-icons/hi2";

// --- Types ---
interface FeatureCardProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  variant: "white" | "blue";
  children?: React.ReactNode;
}

// --- Data ---
const featureData: Omit<FeatureCardProps, "children">[] = [
  {
    id: "growth",
    icon: <HiOutlineChartBar />,
    title: "Growth Dashboard",
    subtitle: "Real-time analytics for every campaign we run for you.",
    variant: "white",
  },
  {
    id: "launch",
    icon: <HiRocketLaunch />,
    title: "Launch Ready",
    subtitle: "Shipped on time, every time.",
    variant: "blue",
  },
  {
    id: "brand",
    icon: <HiShieldCheck />,
    title: "Brand Identity",
    subtitle: "Design systems that scale with your business.",
    variant: "white",
  },
  {
    id: "code",
    icon: <HiOutlineCodeBracket />,
    title: "Clean Code",
    subtitle: "Performant, accessible, and maintainable.",
    variant: "white",
  },
];

// Content Data
const H1_SERVICES = ["Digital Brands", "Websites", "Mobile Apps", "SaaS Systems"];
const EYEBROW_SERVICES = ["Web Development", "Brand Design", "React & TypeScript", "Shopify Solutions"];

// --- Sub-component ---
const FeatureCard: React.FC<FeatureCardProps> = ({
  id,
  icon,
  title,
  subtitle,
  variant,
  children,
}) => (
  <div className={`hp-feat-card hp-feat-card--${variant} hp-feat-card--${id}`}>
    <div className="hp-feat-icon-wrapper">{icon}</div>
    <h3 className="hp-feat-title">{title}</h3>
    <p className="hp-feat-sub">{subtitle}</p>
    {children && <div className="hp-feat-decor">{children}</div>}
  </div>
);

// --- Main Component ---
const HeroSection: React.FC = () => {
  // --- Main H1 Typing Animation Logic ---
  const [h1WordIndex, setH1WordIndex] = useState(0);
  const [h1Text, setH1Text] = useState("");
  const [isH1Deleting, setIsH1Deleting] = useState(false);
  const [h1TypingSpeed, setH1TypingSpeed] = useState(100);

  useEffect(() => {
    const activeWord = H1_SERVICES[h1WordIndex];

    const handleH1Typing = () => {
      if (!isH1Deleting) {
        setH1Text(activeWord.substring(0, h1Text.length + 1));
        if (h1Text === activeWord) {
          setH1TypingSpeed(2200); 
          setIsH1Deleting(true);
        } else {
          setH1TypingSpeed(80);
        }
      } else {
        setH1Text(activeWord.substring(0, h1Text.length - 1));
        if (h1Text === "") {
          setIsH1Deleting(false);
          setH1WordIndex((prev) => (prev + 1) % H1_SERVICES.length);
          setH1TypingSpeed(400); 
        } else {
          setH1TypingSpeed(40);
        }
      }
    };

    const timer = setTimeout(handleH1Typing, h1TypingSpeed);
    return () => clearTimeout(timer);
  }, [h1Text, isH1Deleting, h1WordIndex, h1TypingSpeed]);


  // --- Eyebrow Badge Typing Animation Logic ---
  const [eyebrowWordIndex, setEyebrowWordIndex] = useState(0);
  const [eyebrowText, setEyebrowText] = useState("");
  const [isEyebrowDeleting, setIsEyebrowDeleting] = useState(false);
  const [eyebrowTypingSpeed, setEyebrowTypingSpeed] = useState(100);

  useEffect(() => {
    const activeWord = EYEBROW_SERVICES[eyebrowWordIndex];

    const handleEyebrowTyping = () => {
      if (!isEyebrowDeleting) {
        setEyebrowText(activeWord.substring(0, eyebrowText.length + 1));
        if (eyebrowText === activeWord) {
          setEyebrowTypingSpeed(2500); // Stay slightly longer on the small badge
          setIsEyebrowDeleting(true);
        } else {
          setEyebrowTypingSpeed(60); // Fast typing for small text
        }
      } else {
        setEyebrowText(activeWord.substring(0, eyebrowText.length - 1));
        if (eyebrowText === "") {
          setIsEyebrowDeleting(false);
          setEyebrowWordIndex((prev) => (prev + 1) % EYEBROW_SERVICES.length);
          setEyebrowTypingSpeed(300);
        } else {
          setEyebrowTypingSpeed(30); // Fast deletion
        }
      }
    };

    const timer = setTimeout(handleEyebrowTyping, eyebrowTypingSpeed);
    return () => clearTimeout(timer);
  }, [eyebrowText, isEyebrowDeleting, eyebrowWordIndex, eyebrowTypingSpeed]);


  return (
    <section id="hp-hero" className="hp-hero-section">
      {/* ── Background Layers ── */}
      <div className="hp-hero-dots-bg" aria-hidden="true" />
      <div className="hp-hero-blob" aria-hidden="true" />
      <div className="hp-hero-blob-2" aria-hidden="true" />

      <div className="container hp-hero-container">
        {/* ════════════════════════════════
            Left Column
        ════════════════════════════════ */}
        <div className="hp-hero-left">
          
          {/* Eyebrow badge — Floating pill with Typing Effect */}
          <div className="hp-eyebrow-badge" data-aos="fade-up" data-aos-delay="0">
            <span className="hp-eyebrow-dot" aria-hidden="true" />
            <span className="hp-eyebrow-text-wrapper">
              {eyebrowText}
              <span className="hp-type-cursor" aria-hidden="true">|</span>
            </span>
          </div>

          {/* Headline — uppercase, heavy with Typing Effect */}
          <h1 className="hp-hero-h1" data-aos="fade-up" data-aos-delay="80">
            We Build
            <br />
            Strategic <br />
            <span className="hp-accent hp-typed-box">
              {h1Text}
              <span className="hp-type-cursor" aria-hidden="true">|</span>
            </span>
            <br />
            That Actually Grow
          </h1>

          {/* Description */}
          <p className="hp-hero-desc" data-aos="fade-up" data-aos-delay="160">
            From strategy to launch — we craft websites, apps, and marketing
            systems that turn visitors into loyal customers.
          </p>

          {/* CTAs */}
          <div className="hp-hero-ctas" data-aos="fade-up" data-aos-delay="240">
            <a href="/contact-us" className="hp-btn-primary">
              Book a Discovery Call
            </a>
            <a href="/work" className="hp-btn-outline">
              View Portfolio
            </a>
          </div>

          {/* Social proof — plain inline dots */}
          <p className="hp-hero-proof" data-aos="fade-up" data-aos-delay="320">
            <span>50+ products launched</span>
            <span className="hp-proof-dot" aria-hidden="true">·</span>
            <span>Canada-led team</span>
            <span className="hp-proof-dot" aria-hidden="true">·</span>
            <span>Startup to enterprise</span>
          </p>
        </div>

        {/* ════════════════════════════════
            Right Column — Floating Cards
        ════════════════════════════════ */}
        <div
          className="hp-hero-right"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="hp-feature-cards-wrap">
            {/* ① Growth Dashboard — large white, top-left */}
            <FeatureCard {...featureData[0]}>
              {/* Horizontal progress-bar style chart */}
              <div className="hp-feat-hbars" aria-hidden="true">
                <div className="hp-feat-hbar">
                  <span className="hp-feat-hbar-fill hp-feat-hbar-fill--blue" style={{ width: "58%" }} />
                </div>
                <div className="hp-feat-hbar">
                  <span className="hp-feat-hbar-fill hp-feat-hbar-fill--indigo" style={{ width: "78%" }} />
                </div>
                <div className="hp-feat-hbar">
                  <span className="hp-feat-hbar-fill hp-feat-hbar-fill--sky" style={{ width: "40%" }} />
                </div>
              </div>
            </FeatureCard>

            {/* ② Launch Ready — blue, top-right */}
            <FeatureCard {...featureData[1]} />

            {/* ③ Brand Identity — white, bottom-right */}
            <FeatureCard {...featureData[2]} />

            {/* ④ Clean Code — white, bottom-left */}
            <FeatureCard {...featureData[3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
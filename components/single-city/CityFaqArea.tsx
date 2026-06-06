'use client';

// src/components/single-city/CityFaqArea.tsx
// ─────────────────────────────────────────────────────────────────────────────
// FAQ accordion section.
// Reads directly from CityData — no WordPress dependency.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, useState } from 'react';
import HtmlRenderer from '../../common/HtmlRenderer';
import type { CityData } from '../../data/cities-data';
import { normalizeCityPlainText, normalizeCityRichText } from './cityUtils';

interface Props {
  city: CityData;
}

interface AccordionItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, index, isOpen, onToggle }: AccordionItemProps) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<string>(isOpen ? 'auto' : '0px');

  useEffect(() => {
    if (!bodyRef.current) return;
    if (isOpen) {
      const h = bodyRef.current.scrollHeight;
      setHeight(`${h}px`);
      const t = setTimeout(() => setHeight('auto'), 320);
      return () => clearTimeout(t);
    } else {
      const h = bodyRef.current.scrollHeight;
      setHeight(`${h}px`);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setHeight('0px'));
      });
    }
  }, [isOpen]);

  const num = String(index + 1).padStart(2, '0');

  return (
    <div className={`cfa-item ${isOpen ? 'cfa-item--open' : ''}`}>
      <button
        className="cfa-trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-body-${index}`}
        id={`faq-trigger-${index}`}
      >
        <span className="cfa-trigger-num">{num}</span>
        <span className="cfa-trigger-text">{question}</span>
        <span className="cfa-trigger-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>

      <div
        ref={bodyRef}
        id={`faq-body-${index}`}
        role="region"
        aria-labelledby={`faq-trigger-${index}`}
        className="cfa-body"
        style={{ height, overflow: 'hidden', transition: 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        <HtmlRenderer
          html={answer}
          tag="div"
          className="cfa-body-inner"
        />
      </div>
    </div>
  );
}

export default function CityFaqArea({ city }: Props) {
  const { faq } = city;
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const heading = normalizeCityPlainText(faq.heading, city);
  const headingHighlight = faq.headingHighlight
    ? normalizeCityPlainText(faq.headingHighlight, city)
    : '';
  const normalizedFaqs = faq.faqs.map((item) => ({
    question: normalizeCityPlainText(item.question ?? '', city),
    answer: normalizeCityRichText(item.answer ?? '', city),
  }));

  if (!faq.faqs.length) return null;

  const handleToggle = (index: number) =>
    setActiveIndex((prev) => (prev === index ? null : index));

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .cfa-section {
          --cfa-slate:     #0f172a;
          --cfa-blue:      #086CFE;
          --cfa-blue-pale: #eff6ff;
          --cfa-muted:     #64748b;
          --cfa-border:    #e2e8f0;
          --cfa-surface:   #ffffff;
          --cfa-font:      'Plus Jakarta Sans', sans-serif;

          font-family: var(--cfa-font);
          padding: 100px 0;
          background: #ffffff;
          position: relative;
        }

        .cfa-header { text-align: center; margin-bottom: 64px; }

        .cfa-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 0.73rem; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--cfa-blue); margin-bottom: 18px;
        }

        .cfa-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--cfa-blue); }

        .cfa-heading {
          font-size: clamp(1.75rem, 3.5vw, 2.75rem); font-weight: 800;
          color: var(--cfa-slate); letter-spacing: -0.025em; line-height: 1.18;
          margin: 0 auto;
        }

        .cfa-heading em {
          font-style: italic; font-family: 'Lora', serif;
          font-weight: 400; color: var(--cfa-blue);
        }

        .cfa-list {
          margin: 0 auto;
          display: flex; flex-direction: column; gap: 12px;
        }

        .cfa-item {
          background: var(--cfa-surface); border: 1.5px solid var(--cfa-border);
          border-radius: 18px; overflow: hidden;
          transition: border-color 0.22s, box-shadow 0.22s;
        }

        .cfa-item:hover { border-color: rgba(37,99,235,0.25); box-shadow: 0 6px 24px rgba(37,99,235,0.07); }
        .cfa-item--open { border-color: rgba(37,99,235,0.35); box-shadow: 0 8px 32px rgba(37,99,235,0.10); }

        .cfa-trigger {
          width: 100%;
          display: grid; grid-template-columns: 40px 1fr 40px;
          align-items: center; gap: 16px;
          padding: 22px 24px;
          background: transparent; border: none; cursor: pointer;
          text-align: left; transition: background 0.18s;
        }

        .cfa-trigger:hover { background: var(--cfa-blue-pale); }
        .cfa-item--open .cfa-trigger { background: var(--cfa-blue-pale); }

        .cfa-trigger-num { font-size: 0.75rem; font-weight: 800; color: var(--cfa-blue); letter-spacing: 0.04em; line-height: 1; }

        .cfa-trigger-text { font-size: 1rem; font-weight: 700; color: var(--cfa-slate); line-height: 1.4; transition: color 0.18s; }
        .cfa-item--open .cfa-trigger-text { color: var(--cfa-blue); }

        .cfa-trigger-icon {
          display: flex; align-items: center; justify-content: center;
          width: 36px; height: 36px; border-radius: 10px;
          background: var(--cfa-surface); border: 1.5px solid var(--cfa-border);
          flex-shrink: 0; margin-left: auto;
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), background 0.22s, border-color 0.22s;
        }

        .cfa-trigger-icon svg { width: 16px; height: 16px; color: var(--cfa-muted); transition: color 0.22s; }
        .cfa-item--open .cfa-trigger-icon { transform: rotate(180deg); background: var(--cfa-blue); border-color: var(--cfa-blue); }
        .cfa-item--open .cfa-trigger-icon svg { color: #fff; }

        .cfa-body-inner { padding: 0 24px 24px; padding-left: calc(24px + 40px + 16px); }
        .cfa-body-inner p { font-size: 0.9375rem; line-height: 1.78; color: var(--cfa-muted); margin: 0 0 12px; }
        .cfa-body-inner p:last-child { margin-bottom: 0; }
        .cfa-body-inner ul, .cfa-body-inner ol { font-size: 0.9375rem; line-height: 1.78; color: var(--cfa-muted); padding-left: 20px; margin: 8px 0 12px; }
        .cfa-body-inner li { margin-bottom: 6px; }
        .cfa-body-inner a { color: var(--cfa-blue); text-decoration: underline; text-underline-offset: 3px; }
        .cfa-body-inner strong { color: var(--cfa-slate); font-weight: 600; }

        @media (max-width: 767px) {
          .cfa-section { padding: 64px 0; }
          .cfa-header { margin-bottom: 40px; }
          .cfa-trigger { grid-template-columns: 32px 1fr 36px; gap: 12px; padding: 18px 16px; }
          .cfa-body-inner { padding: 0 16px 20px; padding-left: calc(16px + 32px + 12px); }
          .cfa-trigger-text { font-size: 0.9375rem; }
        }
      `}} />

      <section className="cfa-section">
        <div className="container">

          <div className="cfa-header" data-aos="fade-up" data-aos-delay="100">
            <p className="cfa-eyebrow">
              <span className="cfa-eyebrow-dot" aria-hidden="true" />
              Frequently Asked Questions
            </p>
            <h2 className="cfa-heading">
              {heading}<br />
              {headingHighlight && (
                <em>{headingHighlight}</em>
              )}
            </h2>
          </div>

          <div className="cfa-list" data-aos="fade-up" data-aos-delay="200">
            {normalizedFaqs.map((item, index) => (
              <AccordionItem
                key={`${item.question}-${index}`}
                question={item.question}
                answer={item.answer}
                index={index}
                isOpen={activeIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
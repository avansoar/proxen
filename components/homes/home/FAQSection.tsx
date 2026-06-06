'use client';

// src/components/home/FAQSection.tsx
import { useState } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi2';

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: 'What services does Proxen Tech Labs offer?',
    a: 'We help businesses grow online through web design and development, digital marketing, branding, SEO, PPC, e-commerce, and mobile apps. From startups to enterprises, we build digital strategies that attract, engage, and convert.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Project timelines vary based on scope and complexity. A standard website typically takes 4–6 weeks, while a full SaaS platform or mobile app can range from 8–20 weeks. We provide a detailed timeline during the discovery phase.',
  },
  {
    q: 'Do you provide ongoing maintenance and support?',
    a: "Yes — we offer flexible retainer packages for ongoing maintenance, security updates, performance monitoring, and growth optimization. We're a long-term partner, not just a one-time vendor.",
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Absolutely. We specialize in redesigns that preserve your SEO equity while dramatically improving design, performance, and conversion rates. We start with an audit of your current site before proposing any changes.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  const handleToggle = (idx: number) => {
    setOpen((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="hp-faq" className="hp-faq-section">
      <div className="hp-faq-section__container">
        <div className="hp-faq-section__header" data-aos="fade-up">
          <span className="hp-faq-section__eyebrow">Client Stories</span>
          <h2 className="hp-faq-section__h2">What Our Clients Say</h2>
          <p className="hp-faq-section__desc">
            Can&apos;t find what you&apos;re looking for? Reach out — we reply within 24&nbsp;hours.
          </p>
        </div>

        <div className="hp-faq-section__list" data-aos="fade-up" data-aos-delay="80" role="list">
          {FAQS.map((faq, idx) => {
            const isOpen = open === idx;

            return (
              <div
                key={idx}
                className={`hp-faq-item${isOpen ? ' hp-faq-item--open' : ''}`}
                role="listitem"
              >
                <button
                  className="hp-faq-item__trigger"
                  onClick={() => handleToggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`hp-faq-body-${idx}`}
                  id={`hp-faq-btn-${idx}`}
                  type="button"
                >
                  <span className="hp-faq-item__question">{faq.q}</span>
                  <span className="hp-faq-item__icon-wrap" aria-hidden="true">
                    {isOpen ? <HiMinus /> : <HiPlus />}
                  </span>
                </button>

                <div
                  id={`hp-faq-body-${idx}`}
                  role="region"
                  aria-labelledby={`hp-faq-btn-${idx}`}
                  className="hp-faq-item__body"
                  style={{ maxHeight: isOpen ? '400px' : '0px' }}
                >
                  <p className="hp-faq-item__answer">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

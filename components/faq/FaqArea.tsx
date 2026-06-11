'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  keywords?: string[];
}

const faq_data: FaqItem[] = [
  {
    id: 1,
    question: 'What services does Proxen Tech Labs offer?',
    answer:
      'Proxen Tech Labs helps businesses grow online through web development, branding, and digital marketing solutions. From stunning websites and online stores to SEO, PPC, and social media strategies, we build digital experiences that attract, engage, and convert.',
    keywords: ['web development', 'branding', 'digital marketing', 'SEO', 'PPC', 'social media'],
  },
  {
    id: 2,
    question: 'How long will it take to build my website?',
    answer:
      'Every project is unique. A simple business website usually takes 4–6 weeks, while an advanced or e-commerce website can take 8–12 weeks. We follow a clear process, from design and development to testing and launch, ensuring your website is built right, not rushed.',
    keywords: ['4–6 weeks', '8–12 weeks', 'design', 'development', 'testing', 'launch'],
  },
  {
    id: 3,
    question: 'Do you provide website maintenance and support after launch?',
    answer:
      "Yes, we do! Our partnership doesn't end at launch. We offer ongoing website maintenance, updates, and performance monitoring to keep your site secure, fast, and SEO-friendly so you can focus on running your business.",
    keywords: ['website maintenance', 'updates', 'performance monitoring', 'secure', 'SEO-friendly'],
  },
  {
    id: 4,
    question: 'Can you redesign my existing website?',
    answer:
      "Absolutely. We specialize in redesigns that preserve your SEO equity while dramatically improving design, performance, and conversion rates. We start with an audit of your current site before proposing any changes.",
    keywords: ['redesign', 'SEO equity', 'design', 'performance', 'conversion rates'],
  },
  {
    id: 5,
    question: 'What platforms do you work with?',
    answer:
      "We work with WordPress, Webflow, and Shopify, along with custom-coded websites for businesses that need more flexibility. Our goal is to create a platform that's easy to manage and perfectly fits your business goals.",
    keywords: ['WordPress', 'Webflow', 'Shopify', 'custom-coded', 'flexibility'],
  },
];

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const formatTextWithBoldKeywords = (text: string, keywords: string[] = []) => {
  if (!keywords.length) return text;

  return keywords.reduce((formattedText, keyword) => {
    const safeKeyword = escapeRegExp(keyword);
    const regex = new RegExp(`\\b${safeKeyword}\\b`, 'gi');
    return formattedText.replace(regex, (match) => `<strong class="font-semibold text-primary">${match}</strong>`);
  }, text);
};

const formatQuestionWithNumber = (question: string, index: number) => {
  const number = String(index + 1).padStart(2, '0');
  return `${number}. ${question}`;
};

export default function FaqArea() {
  const [activeId, setActiveId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="proxenabout-section1 proxendefault-bg">
      <div className="container">
        <div className="proxensection-title center max-width-1080">
          <div className="proxensub-title aos-init" data-aos-delay="400" data-aos="fade-up">
            <p>Clarity Builds Confidence</p>
          </div>
          <h1 className="aos-init" data-aos-delay="500" data-aos="fade-up">
            Common inquiries
          </h1>
        </div>

        <div className="proxenfaq-wrap1 aos-init" data-aos-delay="700" data-aos="fade-up">
          {faq_data.map((faq, index) => (
            <div key={faq.id} className={`proxenfaq-item ${activeId === faq.id ? 'open' : ''}`}>
              <button
                className="proxenfaq-header"
                onClick={() => toggleFaq(faq.id)}
                type="button"
                style={{ background: "transparent", border: 0, width: "100%", padding: 0, textAlign: "left", cursor: "pointer" }}
              >
                <h3>{formatQuestionWithNumber(faq.question, index)}</h3>
                <div className="proxenactive-icon" aria-hidden="true">
                  <Image className="mynusicon" src="/assets/images/svg/plas.svg" alt="" width={20} height={20} />
                </div>
              </button>

              <div
                className="proxenfaq-body"
                style={{
                  display: activeId === faq.id ? 'block' : 'none',
                }}
              >
                <p
                  dangerouslySetInnerHTML={{
                    __html: formatTextWithBoldKeywords(faq.answer, faq.keywords),
                  }}
                />
              </div>
            </div>
          ))}

          <div className="proxenp-btn">
            <Link className="proxendefault-btn aos-init" data-aos-delay="1000" data-aos="fade-up" href="/contact-us">
              Ready to Grow?
              <span className="proxenbutton-icon">
                <Image className="arry1" src="/assets/images/svg/arrow-right.png" alt="" aria-hidden="true" width={20} height={20} />
                <Image className="arry2" src="/assets/images/svg/arrow-right.png" alt="" aria-hidden="true" width={20} height={20} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

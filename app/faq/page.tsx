import type { Metadata } from 'next';
import FaqPage from '@/components/faq';
import JsonLd from '@/components/SEO/JsonLd';
import { siteConfig } from '@/siteConfig';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Find answers to common questions about Proxen Digital.',
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    type: 'website',
    title: 'FAQ | Proxen Digital',
    description: 'Find answers to common questions about Proxen Digital.',
    url: `${siteConfig.url}/faq`,
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does Proxen Tech Labs offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Proxen Tech Labs helps businesses grow online through web development, branding, and digital marketing solutions. From stunning websites and online stores to SEO, PPC, and social media strategies, we build digital experiences that attract, engage, and convert.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long will it take to build my website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every project is unique. A simple business website usually takes 4–6 weeks, while an advanced or e-commerce website can take 8–12 weeks. We follow a clear process, from design and development to testing and launch, ensuring your website is built right, not rushed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide website maintenance and support after launch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, we do! Our partnership doesn't end at launch. We offer ongoing website maintenance, updates, and performance monitoring to keep your site secure, fast, and SEO-friendly so you can focus on running your business.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you redesign my existing website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Absolutely. We specialize in redesigns that preserve your SEO equity while dramatically improving design, performance, and conversion rates. We start with an audit of your current site before proposing any changes.",
      },
    },
    {
      '@type': 'Question',
      name: 'What platforms do you work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We work with WordPress, Webflow, and Shopify, along with custom-coded websites for businesses that need more flexibility. Our goal is to create a platform that's easy to manage and perfectly fits your business goals.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <FaqPage />
    </>
  );
}

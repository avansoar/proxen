import type { Metadata } from 'next';
import { siteConfig } from '@/siteConfig';
import HomePage from '@/components/homes/home';
import JsonLd from '@/components/SEO/JsonLd';

export const metadata: Metadata = {
  title: 'Home',
  description: "Proxen Digital is a leading IT consulting and digital marketing company in Canada. We specialize in innovative web solutions, web development, and digital transformation.",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    url: siteConfig.url,
    type: 'website',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Proxen Digital',
  url: 'https://proxen.ca',
  logo: 'https://proxen.ca/assets/images/logo/proxen-logo.svg',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-905-782-6558',
    contactType: 'customer service',
    areaServed: 'CA',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://www.instagram.com/proxen.ca/',
    'https://www.linkedin.com/company/proxen.ca',
    'https://www.facebook.com/proxen.ca',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Proxen Digital',
  url: siteConfig.url,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteConfig.url}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <HomePage />
    </>
  );
}
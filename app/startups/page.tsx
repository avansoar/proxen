import type { Metadata } from 'next';
import StartupsPage from '@/components/startups';
import JsonLd from '@/components/SEO/JsonLd';
import { siteConfig } from '@/siteConfig';

export const metadata: Metadata = {
  title: 'Startups',
  description: 'Digital solutions tailored for startups and scaling businesses.',
  alternates: {
    canonical: '/startups',
  },
  openGraph: {
    type: 'website',
    title: 'Startups | Proxen Digital',
    description: 'Digital solutions tailored for startups and scaling businesses.',
    url: `${siteConfig.url}/startups`,
  },
};

const startupsSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Startups Solutions | Proxen Digital',
  description: 'Digital solutions tailored for startups and scaling businesses.',
  url: `${siteConfig.url}/startups`,
  publisher: {
    '@type': 'Organization',
    name: 'Proxen Digital',
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/assets/images/logo/proxen-logo.svg`,
    },
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={startupsSchema} />
      <StartupsPage />
    </>
  );
}

import type { Metadata } from 'next';
import OurWorkPage from '@/components/our-work';
import JsonLd from '@/components/SEO/JsonLd';
import { siteConfig } from '@/siteConfig';

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Browse Proxen Digital portfolio and featured web projects.',
  alternates: {
    canonical: '/work',
  },
  openGraph: {
    type: 'website',
    title: 'Our Work | Proxen Digital',
    description: 'Browse Proxen Digital portfolio and featured web projects.',
    url: `${siteConfig.url}/work`,
  },
};

const workPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Our Work | Proxen Digital',
  description: 'Browse Proxen Digital portfolio and featured web projects.',
  url: `${siteConfig.url}/work`,
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
      <JsonLd data={workPageSchema} />
      <OurWorkPage />
    </>
  );
}

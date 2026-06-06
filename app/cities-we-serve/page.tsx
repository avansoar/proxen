import type { Metadata } from 'next';
import CitiesPage from '@/components/cities';
import JsonLd from '@/components/SEO/JsonLd';
import { siteConfig } from '@/siteConfig';

export const metadata: Metadata = {
  title: 'Cities We Serve',
  description: 'Explore the cities Proxen Digital serves.',
  alternates: {
    canonical: '/cities-we-serve',
  },
  openGraph: {
    type: 'website',
    title: 'Cities We Serve | Proxen Digital',
    description: 'Explore the cities Proxen Digital serves.',
    url: `${siteConfig.url}/cities-we-serve`,
  },
};

const citiesSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Cities We Serve | Proxen Digital',
  description: 'Explore the cities Proxen Digital serves.',
  url: `${siteConfig.url}/cities-we-serve`,
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
      <JsonLd data={citiesSchema} />
      <CitiesPage />
    </>
  );
}

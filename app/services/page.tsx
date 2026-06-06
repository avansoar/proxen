import type { Metadata } from 'next';
import ServicePage from '@/components/service';
import JsonLd from '@/components/SEO/JsonLd';
import { siteConfig } from '@/siteConfig';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore Proxen Digital services, from web development to digital marketing.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    type: 'website',
    title: 'Services | Proxen Digital',
    description: 'Explore Proxen Digital services, from web development to digital marketing.',
    url: `${siteConfig.url}/services`,
  },
};

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Services | Proxen Digital',
  description: 'Explore Proxen Digital services, from web development to digital marketing.',
  url: `${siteConfig.url}/services`,
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
      <JsonLd data={servicesSchema} />
      <ServicePage />
    </>
  );
}

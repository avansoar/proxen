import type { Metadata } from 'next';
import PrivacyPolicyPage from '@/components/privacy-policy';
import JsonLd from '@/components/SEO/JsonLd';
import { siteConfig } from '@/siteConfig';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the Proxen Digital privacy policy.',
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    type: 'website',
    title: 'Privacy Policy | Proxen Digital',
    description: 'Read the Proxen Digital privacy policy.',
    url: `${siteConfig.url}/privacy-policy`,
  },
};

const privacySchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Privacy Policy | Proxen Digital',
  description: 'Read the Proxen Digital privacy policy.',
  url: `${siteConfig.url}/privacy-policy`,
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
      <JsonLd data={privacySchema} />
      <PrivacyPolicyPage />
    </>
  );
}

import type { Metadata } from 'next';
import AboutPage from '@/components/abouts/about';
import JsonLd from '@/components/SEO/JsonLd';
import { siteConfig } from '@/siteConfig';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about Proxen Digital, our team, approach, and values.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    type: 'website',
    title: 'About Us | Proxen Digital',
    description: 'Learn more about Proxen Digital, our team, approach, and values.',
    url: `${siteConfig.url}/about`,
  },
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Proxen Digital',
  description: 'Learn more about Proxen Digital, our team, approach, and values.',
  url: `${siteConfig.url}/about`,
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
      <JsonLd data={aboutSchema} />
      <AboutPage />
    </>
  );
}

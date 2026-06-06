import type { Metadata } from 'next';
import CaseStudyPage from '@/components/case-study';
import JsonLd from '@/components/SEO/JsonLd';
import { siteConfig } from '@/siteConfig';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Read Proxen Digital case studies and project outcomes.',
  alternates: {
    canonical: '/case-studies',
  },
  openGraph: {
    type: 'website',
    title: 'Case Studies | Proxen Digital',
    description: 'Read Proxen Digital case studies and project outcomes.',
    url: `${siteConfig.url}/case-studies`,
  },
};

const caseStudiesSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Case Studies | Proxen Digital',
  description: 'Read Proxen Digital case studies and project outcomes.',
  url: `${siteConfig.url}/case-studies`,
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
      <JsonLd data={caseStudiesSchema} />
      <CaseStudyPage />
    </>
  );
}

import type { Metadata } from 'next';
import BlogPage from '@/components/blog';
import JsonLd from '@/components/SEO/JsonLd';
import { siteConfig } from '@/siteConfig';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read Proxen Digital insights, updates, and digital strategy articles.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    type: 'website',
    title: 'Blog | Proxen Digital',
    description: 'Read Proxen Digital insights, updates, and digital strategy articles.',
    url: `${siteConfig.url}/blog`,
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Proxen Digital Blog',
  description: 'Read Proxen Digital insights, updates, and digital strategy articles.',
  url: `${siteConfig.url}/blog`,
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
      <JsonLd data={blogSchema} />
      <BlogPage />
    </>
  );
}

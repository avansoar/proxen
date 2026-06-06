import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/siteConfig';
import caseStudyData, { getCaseStudyBySlug } from '@/data/case-study-data';
import CaseStudyDetails from '@/components/single-casestudy';
import JsonLd from '@/components/SEO/JsonLd';

export async function generateStaticParams() {
  return caseStudyData.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const caseStudy = getCaseStudyBySlug(params.slug);
  if (!caseStudy) return {};
  return {
    title: caseStudy.seo.title,
    description: caseStudy.seo.description,
    keywords: caseStudy.seo.keywords,
    alternates: {
      canonical: `${siteConfig.url}/case-studies/${caseStudy.slug}`,
    },
    openGraph: {
      type: 'article',
      title: caseStudy.seo.title,
      description: caseStudy.seo.description,
      url: `${siteConfig.url}/case-studies/${caseStudy.slug}`,
      images: caseStudy.img ? [{ url: caseStudy.img }] : undefined,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const caseStudy = getCaseStudyBySlug(params.slug);
  if (!caseStudy) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: caseStudy.title,
    description: caseStudy.seo.description,
    datePublished: caseStudy.date,
    author: {
      '@type': 'Organization',
      name: 'Proxen Digital',
      url: 'https://proxen.ca',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Proxen Digital',
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/assets/images/logo/proxen-logo.svg`,
      },
    },
    url: `${siteConfig.url}/case-studies/${caseStudy.slug}`,
    image: caseStudy.img,
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <CaseStudyDetails params={params} />
    </>
  );
}

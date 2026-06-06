import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/siteConfig';
import { portfolioProjects, getProjectBySlug } from '@/data/portfolio-data';
import SingleWorkPage from '@/components/single-work';
import JsonLd from '@/components/SEO/JsonLd';

export async function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  const pageTitle = `${project.hero.badge} Project Showcase | Proxen Digital`;
  const pageDesc = project.overview.description;
  const pageImage = project.listingImage || project.hero.mainImage;

  return {
    title: pageTitle,
    description: pageDesc,
    alternates: {
      canonical: `${siteConfig.url}/work/${project.slug}`,
    },
    openGraph: {
      type: 'website',
      title: pageTitle,
      description: pageDesc,
      url: `${siteConfig.url}/work/${project.slug}`,
      images: pageImage ? [{ url: pageImage }] : undefined,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.hero.headline,
    description: project.overview.description,
    url: `${siteConfig.url}/work/${project.slug}`,
    creator: {
      '@type': 'Organization',
      name: 'Proxen Digital',
      url: 'https://proxen.ca',
    },
    image: project.listingImage || project.hero.mainImage,
  };

  return (
    <>
      <JsonLd data={projectSchema} />
      <SingleWorkPage params={params} />
    </>
  );
}

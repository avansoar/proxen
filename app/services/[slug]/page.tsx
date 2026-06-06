import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/siteConfig';
import { getAllServices, getServiceBySlug } from '@/data/services-data';
import ServiceDetails from '@/components/single-service';
import JsonLd from '@/components/SEO/JsonLd';

export async function generateStaticParams() {
  return getAllServices().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.hero.description,
    alternates: {
      canonical: `${siteConfig.url}/services/${service.slug}`,
    },
    openGraph: {
      type: 'website',
      title: service.title,
      description: service.hero.description,
      url: `${siteConfig.url}/services/${service.slug}`,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    provider: {
      '@type': 'Organization',
      name: 'Proxen Digital',
      url: 'https://proxen.ca',
    },
    areaServed: 'CA',
    description: service.hero.description,
    url: `${siteConfig.url}/services/${service.slug}`,
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <ServiceDetails params={params} />
    </>
  );
}

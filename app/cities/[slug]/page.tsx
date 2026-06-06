import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/siteConfig';
import { citiesData, getCityBySlug } from '@/data/cities-data';
import SingleCity from '@/components/single-city';
import JsonLd from '@/components/SEO/JsonLd';

export async function generateStaticParams() {
  return citiesData.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const city = getCityBySlug(params.slug);
  if (!city) return {};
  return {
    title: city.seo.title,
    description: city.seo.description,
    alternates: {
      canonical: `${siteConfig.url}${city.seo.canonicalPath}`,
    },
    openGraph: {
      type: 'website',
      title: city.seo.title,
      description: city.seo.description,
      url: `${siteConfig.url}${city.seo.canonicalPath}`,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const city = getCityBySlug(params.slug);
  if (!city) notFound();

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Proxen Digital - ${city.cityName}`,
    description: city.seo.description,
    url: `${siteConfig.url}${city.seo.canonicalPath}`,
    areaServed: city.cityName,
    telephone: '+1-905-782-6558',
    email: 'business@proxen.ca',
    address: {
      '@type': 'PostalAddress',
      addressRegion: city.state ?? 'Ontario',
      addressCountry: 'CA',
    },
  };

  const faqSchema =
    city.faq.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: city.faq.faqs.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <SingleCity params={params} />
    </>
  );
}

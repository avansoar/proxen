import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/siteConfig';
import { getBlogPosts, getBlogPostBySlug } from '@/data/blogs-data';
import BlogDetails from '@/components/single-blog';
import JsonLd from '@/components/SEO/JsonLd';

export async function generateStaticParams() {
  return getBlogPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.seoDescription,
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.seoDescription,
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: post.image ? [{ url: `${siteConfig.url}${post.image}` }] : undefined,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.seoDescription,
    datePublished: post.date,
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
        url: 'https://proxen.ca/assets/images/logo/proxen-logo.svg',
      },
    },
    url: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <BlogDetails params={params} />
    </>
  );
}

import type { MetadataRoute } from 'next';
import { siteConfig } from '@/siteConfig';
import { getAllServices } from '@/data/services-data';
import { citiesData } from '@/data/cities-data';
import { getBlogPosts } from '@/data/blogs-data';
import { portfolioProjects } from '@/data/portfolio-data';
import caseStudyData from '@/data/case-study-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  // 1. Homepage (Priority 1.0, Daily)
  const homePage: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  // 2. Listing / Hub Pages (Priority 0.8, Weekly)
  const hubPages = [
    '/services',
    '/work',
    '/blog',
    '/case-studies',
    '/cities-we-serve',
    '/startups',
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // 3. Core Info Pages (Priority 0.7, Monthly)
  const infoPages = [
    '/about',
    '/faq',
    '/contact-us',
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 4. Legal Pages (Priority 0.3, Yearly)
  const legalPages = [
    '/privacy-policy',
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }));

  // 5. Dynamic Detail Pages (Priority 0.6, Weekly/Monthly)
  const servicePages = getAllServices().map((service) => ({
    url: `${base}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const cityPages = citiesData.map((city) => ({
    url: `${base}${city.seo.canonicalPath}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const blogPages = getBlogPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const workPages = portfolioProjects.map((project) => ({
    url: `${base}/work/${project.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const caseStudyPages = caseStudyData.map((item) => ({
    url: `${base}/case-studies/${item.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [
    ...homePage,
    ...hubPages,
    ...infoPages,
    ...legalPages,
    ...servicePages,
    ...cityPages,
    ...blogPages,
    ...workPages,
    ...caseStudyPages,
  ];
}

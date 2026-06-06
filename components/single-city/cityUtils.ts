// src/components/single-city/cityUtils.ts
// Shared utilities used across all single-city section components.

import type { CityData } from '../../data/cities-data';

export const strip = (html: string = ''): string =>
  html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

export const decodeHtml = (html: string = ''): string => {
  if (!html) return '';

  if (typeof window !== 'undefined' && typeof window.DOMParser !== 'undefined') {
    const parser = new window.DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    return doc.documentElement.textContent || '';
  }

  return html
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
};

export const normalizeTextBlock = (value: string = ''): string => {
  const decoded = decodeHtml(value);
  return /<[^>]+>/.test(decoded) ? strip(decoded) : decoded;
};

export const extractCityNameFromTitle = (title: string): string => {
  const clean = strip(title);
  const parts = clean.split(/\s+in\s+/i);
  return parts.length > 1 ? parts[parts.length - 1] : clean;
};

export const SERVICE_MAP: Record<string, string> = {
  'web-design': 'Website Designing',
  'web-design-services': 'Website Designing',
  'website-design-services': 'Website Designing',
  'website-designing': 'Website Designing',
  'web-development': 'Web Development',
  'web-development-services': 'Web Development',
  'seo': 'SEO',
  'search-engine-optimization': 'SEO',
  'shopify-plus': 'Shopify Plus',
  'magento': 'Magento Development',
  'digital-marketing': 'Digital Marketing',
  'branding': 'Branding & Identity',
  'branding-identity-design-company': 'Branding & Identity',
  'ui-ux': 'UI/UX Design',
  'mobile-app-development': 'Mobile App Development',
  'web-application-development': 'Web Application Development',
  'e-commerce-solutions': 'E-Commerce Solutions',
  'ecommerce-store-development-company': 'E-Commerce Solutions',
};

export const toService = (key?: string): string =>
  key
    ? (SERVICE_MAP[key] ??
        key
          .replace(/[-_]+/g, ' ')
          .replace(/\s+/g, ' ')
          .trim()
          .replace(/\b\w/g, (c) => c.toUpperCase()))
    : 'Digital Solutions';

export const replaceCityPlaceholders = (
  value: string,
  cityName: string,
  serviceName: string,
  state?: string
): string =>
  value
    .replace(/\{service\}/gi, serviceName)
    .replace(/\{city\}/gi, cityName)
    .replace(/\{state\}/gi, state ?? '');

const GENERATED_CITY_OBJECT_RE =
  /\{'name':\s*'([^']+)',\s*'state':\s*'([^']+)',\s*'economy':\s*'([^']+)',\s*'vibe':\s*'([^']+)',\s*'adjective':\s*'([^']+)'\}/g;

const applyCityContext = (
  value: string = '',
  city: Pick<CityData, 'cityName' | 'state' | 'serviceType'>
): string => {
  const serviceName = toService(city.serviceType);

  return decodeHtml(value)
    .replace(/\{service\}/gi, serviceName)
    .replace(/\{city\}/gi, city.cityName)
    .replace(/\{state\}/gi, city.state ?? '')
    .replace(GENERATED_CITY_OBJECT_RE, city.cityName);
};

export const normalizeCityPlainText = (
  value: string = '',
  city: Pick<CityData, 'cityName' | 'state' | 'serviceType'>
): string => strip(applyCityContext(value, city));

export const normalizeCityRichText = (
  value: string = '',
  city: Pick<CityData, 'cityName' | 'state' | 'serviceType'>
): string => applyCityContext(value, city);

export const getCityLink = (slug: string): string => `/cities/${slug}`;

export const getServiceLink = (slug?: string): string =>
  slug ? `/services/${slug}` : '/services';

export const sanitizeText = (value: string = ''): string =>
  strip(decodeHtml(value));

export const shortenText = (value: string = '', maxWords = 14): string => {
  const clean = sanitizeText(value);
  const words = clean.split(/\s+/).filter(Boolean);
  if (words.length <= maxWords) return clean;
  return `${words.slice(0, maxWords).join(' ')}…`;
};

export const buildOptimizedHeading = (
  value: string = '',
  maxWords = 12
): string => shortenText(value, maxWords);

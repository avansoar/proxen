# Proxen → Next.js Migration Plan
> Vite + React SPA → Next.js 14 (App Router) | Deployed on Vercel

---

## Project Snapshot (What We're Migrating)

**Stack:** React 18 + Vite + TypeScript + react-router-dom v7 + react-helmet-async  
**Host:** Vercel (currently SPA with catch-all rewrite)  
**Data:** Fully static TypeScript data files (`services-data.ts`, `cities-data.ts`, `blogs-data.ts`, `portfolio-data.ts`, `case-study-data.ts`) — **no database, no server-rendered API calls for page content**  
**External APIs:** WordPress REST (`admin.proxen.ca/wp-json/wp/v2`) for cities/services/work — currently called client-side  
**Forms:** EmailJS + Google reCAPTCHA (fully client-side, no server needed)  
**Animations:** AOS (requires `window`, browser-only)  
**SEO:** `react-helmet-async` `PageSEO` component used on every page  

**Route inventory:**

| Route | Type | Data Source |
|---|---|---|
| `/` | Static | Inline |
| `/about` | Static | Inline |
| `/services` | Static | `services-data.ts` |
| `/services/:slug` | Dynamic (8 slugs) | `services-data.ts` |
| `/work` | Static | `portfolio-data.ts` |
| `/work/:slug` | Dynamic (11 slugs) | `portfolio-data.ts` |
| `/case-studies` | Static | `case-study-data.ts` |
| `/case-studies/:slug` | Dynamic (4 slugs) | `case-study-data.ts` |
| `/blog` | Static | `blogs-data.ts` |
| `/blog/:slug` | Dynamic (6 slugs) | `blogs-data.ts` |
| `/cities-we-serve` | Static | `cities-data.ts` |
| `/cities/:slug` | Dynamic (200 slugs) | `cities-data.ts` |
| `/team` `/faq` `/contact-us` `/privacy-policy` `/startups` | Static | Inline |
| `/single-blog` `/single-blog/:slug` `/cities` | Legacy redirects | — |

**SEO risk level: HIGH** — 200 city pages + 8 service pages are primary SEO assets. Migration must preserve all URLs and produce real SSG HTML.

---

## Phase 0 — Pre-Migration Preparation

### 0.1 — Git branch strategy

```bash
git checkout -b feat/nextjs-migration
# Keep Vite branch alive until Next.js is verified on staging
```

Never delete the Vite branch until Next.js passes full QA on a staging domain.

### 0.2 — Crawl existing site

Before touching code, crawl `https://proxen.ca` with Screaming Frog or `sitemap-generator-cli`:

```bash
npx sitemap-generator-cli https://proxen.ca --filepath ./pre-migration-sitemap.xml
```

Save this. Use it post-launch to verify 1:1 URL parity. Every URL that exists today must exist (or redirect 301) after migration.

### 0.3 — Google Search Console baseline

Export current impressions/clicks/index coverage report. Screenshot it. You'll compare it 30 days post-launch to measure SEO impact.

### 0.4 — Inventory `import.meta.env` usages

```bash
grep -r "import.meta.env" src/
```

Every `VITE_*` env var must become `NEXT_PUBLIC_*` in Next.js. Currently: `VITE_WORDPRESS_API_URL` → `NEXT_PUBLIC_WORDPRESS_API_URL`.

---

## Phase 1 — Project Initialization

### 1.1 — Bootstrap Next.js alongside Vite (don't delete yet)

```bash
# In a sibling directory or new repo
npx create-next-app@latest proxen-next \
  --typescript \
  --app \
  --no-src-dir \
  --import-alias "@/*" \
  --no-tailwind
```

Use `--no-tailwind` — Proxen uses a custom CSS file (`src/styles/index.css`, ~106KB), not Tailwind.

### 1.2 — Install exact same dependencies

```bash
npm install \
  @emailjs/browser \
  aos \
  axios \
  dompurify \
  react-countup \
  react-fast-marquee \
  react-google-recaptcha \
  react-icons \
  react-intersection-observer \
  react-slick \
  slick-carousel \
  swiper

npm install -D \
  @types/aos \
  @types/dompurify \
  @types/react-google-recaptcha \
  @types/react-slick
```

**Do NOT install:** `react-router-dom`, `react-helmet-async` — Next.js replaces both.  
**Do NOT install:** `@vitejs/plugin-react`, `vite` — replaced by Next.js build system.

### 1.3 — Copy static assets

```bash
cp -r public/* proxen-next/public/
# favicon.ico already in public/
# Add og-image.jpg to public/ (referenced in siteConfig but missing from zip)
```

---

## Phase 2 — Folder Structure Mapping

### Current Vite structure → Next.js App Router structure

```
VITE (current)                      NEXT.JS (target)
─────────────────────────────────── ──────────────────────────────────────
src/
  App.tsx (router)               →  app/layout.tsx (root layout)
  main.tsx                       →  app/layout.tsx (providers)
  styles/index.css               →  app/globals.css (imported in layout)
  siteConfig.ts                  →  lib/siteConfig.ts (same file, moved)
  data/                          →  lib/data/ (same files, moved)
  services/api/                  →  lib/api/ (same files, moved)
  components/                    →  components/ (same, mostly unchanged)
  common/                        →  components/common/
  layouts/                       →  components/layouts/
  
  # PAGE COMPONENTS become route segments:
  components/homes/home/         →  app/page.tsx
  components/abouts/about/       →  app/about/page.tsx
  components/service/            →  app/services/page.tsx
  components/single-service/     →  app/services/[slug]/page.tsx
  components/our-work/           →  app/work/page.tsx
  components/single-work/        →  app/work/[slug]/page.tsx
  components/case-study/         →  app/case-studies/page.tsx
  components/single-casestudy/   →  app/case-studies/[slug]/page.tsx
  components/team/               →  app/team/page.tsx
  components/faq/                →  app/faq/page.tsx
  components/blog/               →  app/blog/page.tsx
  components/single-blog/        →  app/blog/[slug]/page.tsx
  components/contact-us/         →  app/contact-us/page.tsx
  components/privacy-policy/     →  app/privacy-policy/page.tsx
  components/startups/           →  app/startups/page.tsx
  components/cities/             →  app/cities-we-serve/page.tsx
  components/single-city/        →  app/cities/[slug]/page.tsx
  error.tsx                      →  app/not-found.tsx

  # LEGACY REDIRECTS become next.config.js redirects (not page files)
  /single-blog → /blog
  /single-blog/:slug → /blog/:slug
  /cities → /cities-we-serve
```

---

## Phase 3 — Root Layout (`app/layout.tsx`)

This replaces `main.tsx` + `HelmetProvider` + `Wrapper` global behavior.

```tsx
// app/layout.tsx
import type { Metadata } from 'next';
import Script from 'next/script';
import { siteConfig } from '@/lib/siteConfig';
import '@/styles/index.css';
// Slick CSS (previously loaded via CDN in index.html)
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: `%s${siteConfig.seo.titleTemplate}`,
  },
  description: siteConfig.seo.defaultDescription,
  openGraph: {
    type: 'website',
    siteName: siteConfig.business.name,
    images: [{ url: siteConfig.seo.defaultImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: siteConfig.seo.twitterHandle,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Slick CSS loaded via npm import above — CDN link in index.html removed */}
      </head>
      <body>
        {children}
        {/* Google Analytics — next/script handles deferring */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GD15NGHY95"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-GD15NGHY95');`}
        </Script>
      </body>
    </html>
  );
}
```

**Key changes from current:**
- `react-helmet-async` removed — `metadata` export handles all `<head>` tags natively
- Slick CSS moved from CDN `<link>` in `index.html` to npm import (eliminates render-blocking external request)
- GA script uses `next/script` `strategy="afterInteractive"` — no longer blocks page render
- `HelmetProvider` wrapper gone

---

## Phase 4 — Page Migration Pattern

### 4.1 — Static pages (e.g., `/about`)

Current `src/components/abouts/about/index.tsx` uses `useParams`, `PageSEO`, `Wrapper`.

**Next.js pattern:**

```tsx
// app/about/page.tsx
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';
import AboutHero from '@/components/abouts/about/AboutHero';
import HeroAboutThree from '@/components/abouts/about/HeroAboutThree';
import HeaderOne from '@/components/layouts/headers/HeaderOne';
import FooterThree from '@/components/layouts/footers/FooterThree';
import ClientWrapper from '@/components/ClientWrapper'; // AOS init

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Proxen Digital...',
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: { url: `${siteConfig.url}/about` },
};

export default function AboutPage() {
  return (
    <ClientWrapper>
      <HeaderOne />
      <main>
        <AboutHero />
        <HeroAboutThree />
      </main>
      <FooterThree />
    </ClientWrapper>
  );
}
```

Every static page follows this pattern. The `PageSEO` component is deleted — `metadata` export replaces it entirely.

### 4.2 — Dynamic pages with static data (`/services/:slug`)

Since all service data lives in `services-data.ts` (a static TypeScript file), this becomes full **SSG** with `generateStaticParams`.

```tsx
// app/services/[slug]/page.tsx
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllServices, getServiceBySlug } from '@/lib/data/services-data';
import { siteConfig } from '@/lib/siteConfig';
import HeaderOne from '@/components/layouts/headers/HeaderOne';
import FooterThree from '@/components/layouts/footers/FooterThree';
import ClientWrapper from '@/components/ClientWrapper';
import ServicesHeroSection from '@/components/single-service/ServicesHeroSection';
import IndustriesWeServe from '@/components/single-service/IndustriesWeServe';
// ... other section imports

// SSG: tell Next.js all valid slugs at build time
export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((s) => ({ slug: s.slug }));
}

// Per-page metadata (replaces PageSEO component)
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
      title: service.title,
      description: service.hero.description,
      url: `${siteConfig.url}/services/${service.slug}`,
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound(); // renders app/not-found.tsx

  const { hero, industriesSection, whyChoose, technologies } = service;

  return (
    <ClientWrapper>
      <HeaderOne />
      <main className="spp-page-wrapper">
        <ServicesHeroSection {...hero} />
        <IndustriesWeServe {...industriesSection} />
        {/* ... remaining sections */}
      </main>
      <FooterThree />
    </ClientWrapper>
  );
}
```

Apply this exact same pattern for:
- `/work/[slug]` → `portfolio-data.ts`
- `/case-studies/[slug]` → `case-study-data.ts`
- `/blog/[slug]` → `blogs-data.ts`

### 4.3 — High-volume dynamic pages (`/cities/:slug` — 200 pages)

Cities are the most SEO-critical pages. Currently fetched from both WordPress REST and `cities-data.ts`. The component comments say "No WordPress REST calls — fully self-contained". Use **SSG**.

```tsx
// app/cities/[slug]/page.tsx
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllCities, getCityBySlug } from '@/lib/data/cities-data';
import { siteConfig } from '@/lib/siteConfig';
// ... component imports

export async function generateStaticParams() {
  const cities = getAllCities(); // must export this from cities-data.ts
  return cities.map((c) => ({ slug: c.slug }));
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
      title: city.seo.title,
      description: city.seo.description,
      url: `${siteConfig.url}${city.seo.canonicalPath}`,
    },
  };
}

export default function CityPage({ params }: { params: { slug: string } }) {
  const city = getCityBySlug(params.slug);
  if (!city) notFound();
  // render city content...
}
```

**Note:** `cities-data.ts` must export `getAllCities()`. Check if it does; if not, add:

```ts
// Add to cities-data.ts
export function getAllCities(): CityData[] {
  return citiesData; // wherever the array is defined
}
```

---

## Phase 5 — Client Component Strategy

Next.js App Router defaults to **Server Components**. Many Proxen components use browser APIs or React hooks — these must be marked `'use client'`.

### Components that MUST be `'use client'`

| Component | Reason |
|---|---|
| `Wrapper.tsx` (AOS) | `useEffect`, `window.addEventListener` |
| `BackToTop.tsx` | Scroll event listener |
| `scroll-to-top.tsx` | `useLocation` (react-router — must refactor) |
| `OffCanvas.tsx` | `useState` for open/close |
| `Sidebar.tsx` | `useState` |
| `HeaderOne/Two/Three.tsx` | `useState` for mobile menu |
| `Contactus3Area.tsx` | Form state, EmailJS, reCAPTCHA |
| `FaqArea.tsx` | Accordion `useState` |
| `HeroSection.tsx` | Swiper / AOS |
| `TestimonialsSection.tsx` | Swiper |
| `BrandAreaHomeTwo.tsx` | react-fast-marquee |
| Any component using `useParams` | Router hook |
| Any component using `useInView` | IntersectionObserver hook |
| `react-countup` components | Browser animation |
| `react-slick` components | DOM manipulation |

**Rule of thumb:** Add `'use client'` to any component that uses `useState`, `useEffect`, `useRef`, `useContext`, event handlers, or any browser API. Everything else can remain a Server Component (and will be faster).

### `ClientWrapper` — replaces `Wrapper.tsx`

```tsx
// components/ClientWrapper.tsx
'use client';
import { useEffect, ReactNode } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BackToTop from './common/BackToTop';
import ScrollToTopOnNav from './common/ScrollToTopOnNav'; // see Phase 7

interface Props { children: ReactNode; }

export default function ClientWrapper({ children }: Props) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out', offset: 50 });
    const onResize = () => AOS.refresh();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      {children}
      <ScrollToTopOnNav />
      <BackToTop />
    </>
  );
}
```

---

## Phase 6 — Remove `react-router-dom` Dependencies

Every component that imports from `react-router-dom` needs to migrate to Next.js equivalents.

| react-router-dom | Next.js replacement |
|---|---|
| `useParams()` | `params` prop passed from page (Server Component) or `useParams()` from `next/navigation` (Client Component) |
| `useNavigate()` | `useRouter()` from `next/navigation` |
| `<Link to="/path">` | `<Link href="/path">` from `next/link` |
| `<Navigate to="/path" replace />` | `redirect('/path')` (server) or `useRouter().replace()` (client) |
| `useLocation()` | `usePathname()` from `next/navigation` |

### `scroll-to-top.tsx` refactor

Current code uses `useLocation()` to detect route changes and scroll to top. Replace:

```tsx
// components/common/ScrollToTopOnNav.tsx
'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ScrollToTopOnNav() {
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}
```

### Legacy redirects from `App.tsx`

The `LegacyBlogListRedirect`, `LegacyBlogDetailRedirect`, `LegacyCitiesRedirect` components are deleted. Move to `next.config.js` (see Phase 10).

---

## Phase 7 — SEO Implementation (Core)

### 7.1 — Delete `PageSEO.tsx`

The entire `src/components/SEO/PageSEO.tsx` is replaced by Next.js `metadata` exports. It does exactly what `metadata` does, but at runtime in the browser — meaning crawlers hitting the SPA saw a generic `<title>` tag, not the page-specific one. **This is the most important SEO improvement in the entire migration.**

### 7.2 — `generateMetadata` for every dynamic route

Every `app/[route]/[slug]/page.tsx` needs `generateMetadata`. Pattern shown in Phase 4. Key fields per route type:

**Services (`/services/:slug`):**
```ts
{
  title: service.title,                          // "Website Design - Proxen"
  description: service.hero.description,
  alternates: { canonical: `${url}/services/${slug}` },
  openGraph: { type: 'website', url, title, description, images },
}
```

**Cities (`/cities/:slug`):**
```ts
{
  title: city.seo.title,                         // Already defined in CityData.seo!
  description: city.seo.description,             // Already defined!
  alternates: { canonical: `${url}${city.seo.canonicalPath}` }, // Already defined!
}
```
Cities already have a `seo` object in `CityData` with `title`, `description`, `canonicalPath` — use them directly.

**Blogs (`/blog/:slug`):**
```ts
{
  title: post.title,
  description: post.seoDescription,             // Already in BlogPost interface!
  alternates: { canonical: `${url}/blog/${slug}` },
  openGraph: { type: 'article', images: [{ url: post.image }] },
}
```

### 7.3 — Structured data (JSON-LD)

Add structured data as Server Components (no `'use client'` needed). Create a reusable helper:

```tsx
// components/seo/JsonLd.tsx
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

**Homepage — Organization schema:**
```tsx
// In app/page.tsx
import JsonLd from '@/components/seo/JsonLd';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Proxen Digital',
  url: 'https://proxen.ca',
  logo: 'https://proxen.ca/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-905-782-6558',
    contactType: 'customer service',
    areaServed: 'CA',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://www.instagram.com/proxen.ca/',
    'https://www.linkedin.com/company/proxen.ca',
    'https://www.facebook.com/proxen.ca',
  ],
};
// Inside JSX: <JsonLd data={organizationSchema} />
```

**Service pages — Service schema:**
```ts
{
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.title,
  provider: { '@type': 'Organization', name: 'Proxen Digital' },
  areaServed: 'CA',
  description: service.hero.description,
  url: `https://proxen.ca/services/${service.slug}`,
}
```

**City pages — LocalBusiness schema:**
```ts
{
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: `Proxen Digital - ${city.cityName}`,
  description: city.seo.description,
  url: `https://proxen.ca${city.seo.canonicalPath}`,
  areaServed: city.cityName,
  telephone: '+1-905-782-6558',
}
```

**FAQ pages — FAQPage schema:**
```ts
{
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: city.faq.faqs.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}
```
City pages have FAQs in `CityData.faq.faqs`. City FAQ schema is high-value for local SEO.

**Blog posts — Article schema:**
```ts
{
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  description: post.seoDescription,
  datePublished: post.date,
  author: { '@type': 'Organization', name: 'Proxen Digital' },
  publisher: { '@type': 'Organization', name: 'Proxen Digital' },
}
```

---

## Phase 8 — Sitemap, robots.txt, and Canonical Tags

### 8.1 — Dynamic sitemap (`app/sitemap.ts`)

```ts
// app/sitemap.ts
import type { MetadataRoute } from 'next';
import { getAllServices } from '@/lib/data/services-data';
import { getAllCities } from '@/lib/data/cities-data';
import { blogPosts } from '@/lib/data/blogs-data';
import { portfolioProjects } from '@/lib/data/portfolio-data';
import { caseStudies } from '@/lib/data/case-study-data';

const BASE = 'https://proxen.ca';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${BASE}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE}/services`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${BASE}/work`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${BASE}/case-studies`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE}/blog`, priority: 0.8, changeFrequency: 'daily' as const },
    { url: `${BASE}/cities-we-serve`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${BASE}/team`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE}/faq`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE}/contact-us`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE}/startups`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE}/privacy-policy`, priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  const servicePages = getAllServices().map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    priority: 0.9,
    changeFrequency: 'monthly' as const,
  }));

  const cityPages = getAllCities().map((c) => ({
    url: `${BASE}${c.seo.canonicalPath}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }));

  const blogPages = blogPosts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    priority: 0.7,
    changeFrequency: 'yearly' as const,
  }));

  const workPages = portfolioProjects.map((p) => ({
    url: `${BASE}/work/${p.slug}`,
    priority: 0.7,
    changeFrequency: 'yearly' as const,
  }));

  const caseStudyPages = caseStudies.map((c) => ({
    url: `${BASE}/case-studies/${c.slug}`,
    priority: 0.7,
    changeFrequency: 'yearly' as const,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...cityPages,
    ...blogPages,
    ...workPages,
    ...caseStudyPages,
  ];
}
```

This auto-generates `/sitemap.xml` at build time with all 230+ URLs.

**Export function names needed from data files (add if missing):**
```ts
// services-data.ts — already has getAllServices() based on code review ✓
// cities-data.ts — needs getAllCities() added
// blogs-data.ts — export blogPosts array directly
// portfolio-data.ts — export portfolioProjects array directly
// case-study-data.ts — export caseStudies array directly
```

### 8.2 — `robots.txt` (`app/robots.ts`)

```ts
// app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://proxen.ca/sitemap.xml',
    host: 'https://proxen.ca',
  };
}
```

Delete `public/_redirects` (Netlify format, not used on Vercel). The current `vercel.json` SPA rewrite is also deleted — Next.js handles routing natively.

### 8.3 — Canonical tags

In Next.js, canonical tags are set via `metadata.alternates.canonical`. The `<link rel="canonical">` tag is rendered server-side in `<head>` automatically.

```ts
// Pattern for every page:
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://proxen.ca/services/website-design-services',
  },
};
```

For dynamic pages, set this inside `generateMetadata`. Never hardcode — always derive from `siteConfig.url + path`.

---

## Phase 9 — Rendering Strategy Per Route

| Route | Strategy | Reason |
|---|---|---|
| `/` | SSG (Static) | No dynamic data |
| `/about` `/team` `/faq` `/startups` `/privacy-policy` | SSG | No dynamic data |
| `/services` | SSG | Data from static TS file |
| `/services/[slug]` | SSG + `generateStaticParams` | 8 slugs, static file |
| `/work` | SSG | Static file |
| `/work/[slug]` | SSG + `generateStaticParams` | 11 slugs, static file |
| `/case-studies` | SSG | Static file |
| `/case-studies/[slug]` | SSG + `generateStaticParams` | 4 slugs, static file |
| `/blog` | SSG | Static file |
| `/blog/[slug]` | SSG + `generateStaticParams` | 6 slugs, static file |
| `/cities-we-serve` | SSG | Static file |
| `/cities/[slug]` | SSG + `generateStaticParams` | 200 slugs, static file |
| `/contact-us` | SSG | Form is client-side (EmailJS) |

**Result:** Entire site is 100% SSG. Every page pre-renders to static HTML at build time. Zero server-side computation at request time. This is optimal for Vercel Free tier and maximizes SEO crawlability.

**Build time estimate:** ~200 city pages + 30 other pages = ~230 pages. At ~100ms/page, build takes ~25 seconds. Well within Vercel limits.

**ISR is not needed** for this project because all content is in static TypeScript files. If WordPress API content is ever added back to page rendering, ISR becomes relevant (`revalidate: 3600` for hourly refresh).

---

## Phase 10 — Redirects, `next.config.js`

```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Legacy URL redirects (replaces App.tsx redirect components)
  async redirects() {
    return [
      {
        source: '/single-blog',
        destination: '/blog',
        permanent: true, // 301
      },
      {
        source: '/single-blog/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
      {
        source: '/cities',
        destination: '/cities-we-serve',
        permanent: true,
      },
    ];
  },

  // Image optimization — allow external image domains used in data files
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'randomuser.me' },      // trust avatars in services-data.ts
      { protocol: 'https', hostname: 'admin.proxen.ca' },    // WordPress media
      { protocol: 'https', hostname: 'images.unsplash.com' }, // if used in data files
    ],
  },

  // TypeScript strict — already configured in tsconfig
  typescript: { ignoreBuildErrors: false },
};

module.exports = nextConfig;
```

**Delete `vercel.json`** — the current SPA catch-all rewrite breaks Next.js routing. Next.js on Vercel needs no `vercel.json` for basic routing.

---

## Phase 11 — Image Optimization

### Replace `<img>` tags with `next/image`

Current codebase uses plain `<img>` tags throughout. `next/image` provides:
- Automatic WebP/AVIF conversion
- Lazy loading by default
- Prevents Cumulative Layout Shift (CLS) via required `width`/`height` or `fill`
- Serves correctly sized image per device viewport

**Migration pattern:**
```tsx
// Before
<img src="/images/hero.jpg" alt="Hero" className="hero-img" />

// After
import Image from 'next/image';
<Image src="/images/hero.jpg" alt="Hero" width={1200} height={600} className="hero-img" priority />
```

**`priority` prop** — add to hero images (first above-fold image on each page). This generates `<link rel="preload">` and removes the LCP penalty. City hero images, service hero images, and home hero image all need `priority`.

**`fill` prop** — for images inside positioned containers where dimensions aren't fixed:
```tsx
<div style={{ position: 'relative', width: '100%', height: '400px' }}>
  <Image src={city.hero.image.src} alt={city.hero.image.alt} fill style={{ objectFit: 'cover' }} />
</div>
```

**Scope of change:** Every `<img>` tag in `components/` — this is a large change. Prioritize hero sections first (LCP impact), then lazy images (CLS impact). Can be done incrementally post-launch.

---

## Phase 12 — Contact Form Migration

`Contactus3Area.tsx` uses EmailJS + Google reCAPTCHA entirely client-side. **No changes required to the form logic.** Just add `'use client'` directive.

```tsx
// components/contact-us/Contactus3Area.tsx
'use client'; // ← add this line at top
// rest of file unchanged
```

The `VITE_*` env var reference must be removed (there are none in this file — EmailJS keys are hardcoded). For production security, consider moving keys to `NEXT_PUBLIC_*` env vars:

```bash
# .env.local
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_6w6rszi
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_rwyydej
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=CTIe8UGQcD6A58wwY
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LdervssAAAAAF5_11T2srL0G2KlrFrrfPCU_QdQ
```

---

## Phase 13 — Environment Variables

| Vite variable | Next.js equivalent | Usage |
|---|---|---|
| `VITE_WORDPRESS_API_URL` | `NEXT_PUBLIC_WORDPRESS_API_URL` | `client.ts` |

Update `src/services/api/client.ts`:
```ts
// Before
import.meta.env.VITE_WORDPRESS_API_URL

// After  
process.env.NEXT_PUBLIC_WORDPRESS_API_URL
```

Note: Since city/service page content now comes from static TS data files (not the WordPress API at render time), the WordPress API is only used for optional client-side data fetching (if any remains). Review all `citiesApi`, `servicesApi`, `workApi` usages to determine if they're still called at runtime or can be removed entirely.

---

## Phase 14 — Core Web Vitals Optimization

### LCP (Largest Contentful Paint)
- Add `priority` to all above-fold `<Image>` components (hero images)
- Move Slick CSS from CDN to npm import (eliminates render-blocking external request) — already handled in Phase 3
- GA script uses `strategy="afterInteractive"` — already handled in Phase 3

### CLS (Cumulative Layout Shift)
- Use `next/image` with explicit `width`/`height` (removes layout shift from images loading)
- Ensure slick carousel has fixed height container before images load

### FID/INP (Interaction to Next Paint)
- AOS runs `once: true` — no continuous scroll cost
- Heavy components (Swiper, react-slick) are already in Client Components, load only on hydration

### Font optimization
Current fonts loaded via CSS (likely @import or system fonts). Migrate any Google Fonts to `next/font`:

```tsx
// app/layout.tsx
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});
// Add variable to <html> className
```

City pages reference `'Plus Jakarta Sans'` and `'Lora'` in inline CSS — optimize both via `next/font`.

---

## Phase 15 — Deployment

### 15.1 — Vercel configuration

No `vercel.json` needed. Next.js on Vercel auto-detects framework. On first deploy:

1. Connect GitHub repo to Vercel
2. Framework preset: **Next.js** (auto-detected)
3. Build command: `next build` (default)
4. Output directory: `.next` (default)
5. Add env vars: `NEXT_PUBLIC_WORDPRESS_API_URL`

### 15.2 — Staging deploy before DNS cutover

Deploy to a preview URL (e.g., `proxen-next.vercel.app`) first. Run full QA:
- All 200+ city pages load and render correct content
- All service pages load
- Blog/work/case-study detail pages load
- Legacy redirect URLs (`/single-blog/slug`) correctly 301 to new URLs
- Contact form submits successfully
- Sitemap at `/sitemap.xml` lists all expected URLs
- `robots.txt` at `/robots.txt` is correct
- View page source — confirm `<title>` and `<meta description>` are in initial HTML (not injected by JS)

### 15.3 — DNS cutover checklist

1. Set custom domain in Vercel project settings
2. Update DNS (or Vercel nameservers)
3. Verify SSL certificate issues automatically
4. Submit updated sitemap to Google Search Console
5. Request re-indexing of changed URLs via Search Console URL Inspection

---

## Phase 16 — Post-Migration SEO Tasks

### 16.1 — Submit sitemap
In Google Search Console → Sitemaps → `https://proxen.ca/sitemap.xml`

### 16.2 — Verify structured data
Use [Google Rich Results Test](https://search.google.com/test/rich-results) on:
- Homepage (Organization schema)
- A city page (LocalBusiness + FAQPage schema)
- A service page (Service schema)
- A blog post (Article schema)

### 16.3 — Run Core Web Vitals audit
Use PageSpeed Insights on:
- Homepage
- A city page (200 of these, spot check 5)
- A service page

Target: LCP < 2.5s, CLS < 0.1, INP < 200ms.

### 16.4 — Verify canonical tags
View source on multiple pages. Confirm `<link rel="canonical">` points to correct URL with `https://proxen.ca` base (not `http://` or a preview URL).

---

## Risks & Project-Specific Considerations

### Risk 1 — AOS `window` SSR crash (HIGH)
`AOS.init()` calls `window` and `document`. In `ClientWrapper` with `useEffect` this is safe, but if AOS is initialized anywhere outside `useEffect` (e.g., module-level), it will crash during SSG build.

**Mitigation:** Audit every AOS import. All must be inside `useEffect` or a `'use client'` component. Never call `AOS.init()` at module scope.

### Risk 2 — `DOMParser` in `decodeHtml` utility (MEDIUM)
`PageSEO.tsx` and `cities-api.ts` both use `typeof window !== 'undefined' && typeof window.DOMParser !== 'undefined'` guards. These guards work correctly on the server but the string fallback path must handle all HTML entities. Since `PageSEO.tsx` is deleted entirely, this risk is reduced. Audit `cities-api.ts` and `cityUtils.ts` for any server-side usage.

### Risk 3 — `cities-data.ts` is 1.36MB (HIGH)
This file is ~24,000 lines and 1.36MB. It's imported in every city page. During Next.js build, this file is bundled **once** server-side and tree-shaken per page — only the specific city's data is included in that page's bundle. However, the import itself loads the entire module into build memory.

**Mitigation:** At 200 pages × 1 city each, build is fine. Watch build memory usage. If builds OOM on Vercel free tier (512MB), split `cities-data.ts` into per-city files or a region-grouped file structure. This is a potential future optimization, not a blocker.

### Risk 4 — WordPress API in `cities-api.ts` and `services-api.ts` (MEDIUM)
These API files exist but city/service page components comment "No WordPress REST calls." Verify during migration which components still call these APIs client-side. If they do, and the WordPress endpoint is unavailable, pages will show empty content. Since data is in static TS files, consider removing runtime WordPress API calls entirely for page content.

### Risk 5 — `react-slick` and `swiper` SSR incompatibility (MEDIUM)
Both libraries manipulate the DOM directly. They must be in `'use client'` components. Additionally, `react-slick` may need dynamic import to prevent SSR:

```tsx
import dynamic from 'next/dynamic';
const Slider = dynamic(() => import('react-slick'), { ssr: false });
```

Apply this for any carousel/slider that renders on first paint. Test each slider component for hydration errors during build.

### Risk 6 — `import.meta.env` not defined in Next.js build (HIGH)
Any remaining `import.meta.env.VITE_*` reference will throw `ReferenceError` during build. Do a global search before running `next build`:

```bash
grep -r "import\.meta\.env" .
```

Must all be `process.env.NEXT_PUBLIC_*` in Next.js.

### Risk 7 — Inline `<style>` tags in `single-city/index.tsx` (LOW)
The `PAGE_STYLES` constant with a multi-line CSS string is injected via `<style dangerouslySetInnerHTML>`. This works in Next.js Server Components with no change. Just ensure it stays outside `'use client'` sections.

### Risk 8 — City canonical path format (MEDIUM)
`CityData.seo.canonicalPath` values look like `/cities/website-design-oakville`. Route in Next.js is `app/cities/[slug]/page.tsx`. Verify all 200 `canonicalPath` values match `/cities/[slug]` pattern — if any say `/cities-we-serve/[slug]`, canonical tag will be wrong. Audit:
```bash
grep -o '"canonicalPath": "[^"]*"' src/data/cities-data.ts | sort | uniq | head -20
```

### Risk 9 — `react-google-recaptcha` component (LOW)
Works client-side unchanged. Add `'use client'` to `Contactus3Area.tsx`. The reCAPTCHA domain allowlist in Google Console must include the Vercel preview domain for staging QA.

### Risk 10 — `decodeHtml` uses `window.DOMParser` fallback pattern (LOW)
Same utility exists in both `PageSEO.tsx` (deleted) and `cities-api.ts`. If `cities-api.ts` is called server-side in future SSR/ISR contexts, DOMParser won't be available. Already guarded with `typeof window !== 'undefined'` but the fallback regex path should be validated covers all entity types in actual city data.

---

## Migration Checklist (Ordered Execution)

```
Phase 0 — Pre-migration
  [ ] Crawl site, save URL inventory
  [ ] Export GSC baseline
  [ ] Audit import.meta.env usages
  [ ] Tag git branch

Phase 1 — Init
  [ ] create-next-app with TypeScript + App Router
  [ ] Install all dependencies
  [ ] Copy public/ assets

Phase 2 — Structure
  [ ] Move data/ → lib/data/
  [ ] Move services/api/ → lib/api/
  [ ] Move siteConfig.ts → lib/siteConfig.ts
  [ ] Update all import paths

Phase 3 — Root layout
  [ ] app/layout.tsx with metadata, global CSS, GA via next/script
  [ ] Remove CDN slick CSS link, import from npm

Phase 4 — Static pages (12 pages)
  [ ] app/page.tsx (home)
  [ ] app/about/page.tsx
  [ ] app/services/page.tsx
  [ ] app/work/page.tsx
  [ ] app/case-studies/page.tsx
  [ ] app/blog/page.tsx
  [ ] app/team/page.tsx
  [ ] app/faq/page.tsx
  [ ] app/contact-us/page.tsx
  [ ] app/privacy-policy/page.tsx
  [ ] app/startups/page.tsx
  [ ] app/cities-we-serve/page.tsx
  [ ] app/not-found.tsx

Phase 5 — Dynamic pages
  [ ] app/services/[slug]/page.tsx + generateStaticParams + generateMetadata
  [ ] app/work/[slug]/page.tsx
  [ ] app/case-studies/[slug]/page.tsx
  [ ] app/blog/[slug]/page.tsx
  [ ] app/cities/[slug]/page.tsx (200 slugs — most critical)

Phase 6 — Client components
  [ ] Add 'use client' to all browser-dependent components
  [ ] Create ClientWrapper.tsx (replaces Wrapper.tsx)
  [ ] Replace all react-router-dom imports with next/navigation or next/link
  [ ] Create ScrollToTopOnNav.tsx
  [ ] Dynamic import react-slick with ssr:false

Phase 7 — SEO
  [ ] Delete PageSEO.tsx
  [ ] Add generateMetadata to all dynamic routes
  [ ] Add JsonLd.tsx helper
  [ ] Add Organization schema to homepage
  [ ] Add Service schema to service pages
  [ ] Add LocalBusiness + FAQPage schema to city pages
  [ ] Add Article schema to blog posts

Phase 8 — Sitemap + robots
  [ ] app/sitemap.ts
  [ ] app/robots.ts
  [ ] Add getAllCities(), export blogPosts, portfolioProjects, caseStudies from data files

Phase 9 — Config
  [ ] next.config.js with redirects + image domains
  [ ] Delete vercel.json
  [ ] Delete public/_redirects
  [ ] Update VITE_ → NEXT_PUBLIC_ env vars
  [ ] .env.local for EmailJS + reCAPTCHA keys

Phase 10 — Image optimization
  [ ] Replace hero <img> with next/image + priority prop
  [ ] Replace remaining <img> with next/image

Phase 11 — Build & QA
  [ ] next build — fix all errors
  [ ] Verify /sitemap.xml
  [ ] Verify /robots.txt
  [ ] View source — confirm title/meta in static HTML
  [ ] Test all 200+ city pages
  [ ] Test legacy redirects
  [ ] Test contact form on staging domain

Phase 12 — Deploy
  [ ] Deploy to Vercel preview URL
  [ ] Full QA on preview
  [ ] DNS cutover
  [ ] Submit sitemap to GSC
  [ ] Monitor GSC index coverage for 30 days
```

---

## Summary of SEO Improvements vs Current SPA

| Concern | Current (Vite SPA) | After (Next.js SSG) |
|---|---|---|
| `<title>` in static HTML | ✗ Generic title only | ✓ Page-specific, server-rendered |
| `<meta description>` in static HTML | ✗ Generic only | ✓ Page-specific, server-rendered |
| Open Graph tags | ✗ Generic only | ✓ Page-specific |
| Canonical tags | ✗ Client-side injection | ✓ Server-rendered |
| Structured data | ✗ None | ✓ JSON-LD on all key pages |
| Sitemap | ✗ None | ✓ Auto-generated, 230+ URLs |
| `robots.txt` | ✗ None | ✓ Generated |
| Crawlability | ✗ JS required to read content | ✓ Full HTML in initial response |
| LCP (hero images) | ✗ No preload hints | ✓ `priority` prop = `<link rel="preload">` |
| CLS (images) | ✗ No dimensions | ✓ next/image prevents layout shift |
| GA script | ✗ Render-blocking | ✓ `afterInteractive` = non-blocking |
| Slick CSS | ✗ Render-blocking CDN | ✓ Bundled, non-blocking |
| City pages indexed | ✗ Googlebot must execute JS | ✓ 200 static HTML pages |

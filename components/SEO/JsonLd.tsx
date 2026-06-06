// components/seo/JsonLd.tsx
// Server Component — renders JSON-LD structured data in <head>
// No 'use client' needed — this runs server-side
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

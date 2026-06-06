import type { Metadata } from 'next';
import ContactUsPage from '@/components/contact-us';
import JsonLd from '@/components/SEO/JsonLd';
import { siteConfig } from '@/siteConfig';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Proxen Digital.',
  alternates: {
    canonical: '/contact-us',
  },
  openGraph: {
    type: 'website',
    title: 'Contact Us | Proxen Digital',
    description: 'Get in touch with Proxen Digital.',
    url: `${siteConfig.url}/contact-us`,
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Proxen Digital',
  description: 'Get in touch with Proxen Digital.',
  url: `${siteConfig.url}/contact-us`,
  mainEntity: {
    '@type': 'Organization',
    name: 'Proxen Digital',
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: '+1-905-782-6558',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <ContactUsPage />
    </>
  );
}

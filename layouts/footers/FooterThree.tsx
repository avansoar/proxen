// FooterThree.tsx
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '../../siteConfig';

// ─── Inline Social Icons (no extra dependency) ────────────────────────────────

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// ─── Services list with correct URL slugs ─────────────────────────────────────
const SERVICES = [
  { label: 'Website Development', href: '/services/website-design-services' },
  { label: 'App Development', href: '/services/mobile-app-development' },
  { label: 'Social Media Management', href: '/services/social-media-marketing-agency' },
  { label: 'Web Application Development', href: '/services/web-application-development' },
  { label: 'E-commerce Solutions', href: '/services/ecommerce-store-development-company' },
  { label: 'Branding & Identity', href: '/services/branding-identity-design-company' },
  { label: 'SEO Optimization', href: '/services/professional-seo-services' },
  { label: 'PPC Advertising', href: '/services/ppc-advertising-services' },
] as const;

// ─── Component ────────────────────────────────────────────────────────────────

export default function FooterThree() {
  return (
    <footer className="proxenfooter-section">

      {/* ── Scoped styles ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* ── Outer wrapper ── */
        .proxenfooter-section {
          font-family: "Plus Jakarta Sans", system-ui, -apple-system, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        /* ── Main footer body ── */
        .pf3-body {
          background: #eef1f8;
          padding: 72px 0 0;
        }

        /* ── Inner container ── */
        .pf3-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
        }

        /* ── 4-column grid ── */
        .pf3-grid {
          display: grid;
          grid-template-columns: 2fr 1.6fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 56px;
        }

        /* ── Left column: Brand ── */
        .pf3-brand-logo {
          display: block;
          margin-bottom: 20px;
        }
        .pf3-brand-logo img {
          max-width: 150px;
          height: auto;
          display: block;
        }

        .pf3-bio {
          font-size: 0.9375rem;
          font-weight: 400;
          color: #374151;
          line-height: 1.75;
          max-width: 360px;
          margin: 0 0 20px;
        }

        .pf3-email-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9375rem;
          font-weight: 500;
          color: #086CFE;
          text-decoration: none;
          margin-bottom: 24px;
          transition: color 0.2s ease;
        }
        .pf3-email-link:hover {
          color: #086CFE;
          text-decoration: underline;
        }

        /* ── Social icon badges ── */
        .pf3-social-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .pf3-social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: #086CFE;
          color: #ffffff;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.2s ease;
          flex-shrink: 0;
        }
        .pf3-social-btn:hover {
          background: #000;
          transform: translateY(-2px);
        }

        /* ── Nav column shared styles ── */
        .pf3-col-heading {
          font-size: 1.3375rem;
          font-weight: 500;
          color: #111827;
          letter-spacing: -0.01em;
          margin: 0 0 20px;
        }

        .pf3-nav-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .pf3-nav-list li a {
          font-size: 1.0375rem;
          font-weight: 400;
          color: #596170;
          text-decoration: none;
          transition: color 0.2s ease;
          line-height: 1.4;
        }
        .pf3-nav-list li a:hover {
          color: #111827;
        }

        /* ────────────────────────────────────────────────
           Bottom bar
           Desktop: copyright LEFT · privacy policy RIGHT
           Mobile:  stacked and centred
        ──────────────────────────────────────────────── */
        .pf3-bottom {
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          padding: 22px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .pf3-bottom-copy {
          margin: 0;
          font-size: 0.875rem;
          font-weight: 400;
          color: #596170;
          letter-spacing: 0.01em;
        }

        .pf3-bottom-policy {
          font-size: 0.875rem;
          font-weight: 400;
          color: #596170;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
          transition: color 0.2s ease;
        }
        .pf3-bottom-policy:hover {
          color: #111827;
          text-decoration: underline;
        }

        /* ── Responsive — tablet: 2 columns ── */
        @media (max-width: 1024px) {
          .pf3-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }

        /* ── Responsive — mobile: single column, bottom bar stacks ── */
        @media (max-width: 640px) {
          .pf3-body {
            padding: 56px 0 0;
          }
          .pf3-container {
            padding: 0 20px;
          }
          .pf3-grid {
            grid-template-columns: 1fr;
            gap: 36px;
            padding-bottom: 40px;
          }
          /* Stack copyright above privacy policy, both centred */
          .pf3-bottom {
            flex-direction: column;
            align-items: center;
            gap: 8px;
            padding: 18px 0;
            text-align: center;
          }
          .pf3-bottom-copy,
          .pf3-bottom-policy {
            font-size: 0.8125rem;
          }
        }
      `}} />

      {/* ── Main footer body ── */}
      <div className="pf3-body">
        <div className="pf3-container">

          {/* ── 4-column grid ── */}
          <div className="pf3-grid">

            {/* ── Column 1: Brand ── */}
            <div className="pf3-col-brand">
              <Link href="/" className="pf3-brand-logo" aria-label="Proxen — go to homepage">
                <Image
                  src="/assets/images/logo/proxen-logo.svg"
                  alt="Proxen Logo"
                  width={150}
                  height={46}
                  style={{ height: 'auto' }}
                />
              </Link>

              <p className="pf3-bio">
                We partner with ambitious businesses to design, build, and scale digital
                products that deliver real results.
              </p>

              <a href={siteConfig.emailLink} className="pf3-email-link">
                {siteConfig.email}
              </a>

              {/* Social icon badges */}
              <div className="pf3-social-row">
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pf3-social-btn"
                  aria-label="Follow Proxen on Facebook"
                >
                  <FacebookIcon />
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pf3-social-btn"
                  aria-label="Follow Proxen on Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pf3-social-btn"
                  aria-label="Follow Proxen on LinkedIn"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>

            {/* ── Column 2: Services ── */}
            <div className="pf3-col-services">
              <h4 className="pf3-col-heading">Services</h4>
              <ul className="pf3-nav-list">
                {SERVICES.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Column 3: Navigation ── */}
            <div className="pf3-col-nav">
              <h4 className="pf3-col-heading">Navigation</h4>
              <ul className="pf3-nav-list">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                {/* <li><Link href="/work">Work</Link></li> */}
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
              </ul>
            </div>

            {/* ── Column 4: Other ── */}
            <div className="pf3-col-other">
              <h4 className="pf3-col-heading">Other</h4>
              <ul className="pf3-nav-list">
                {/* <li><Link href="/partners">Partners</Link></li> */}
                <li><Link href="/cities-we-serve">Cities</Link></li>
                <li><Link href="/contact-us">Contact</Link></li>
                <li><Link href="/case-studies">Case Studies</Link></li>
                <li><Link href="/startups">Startups</Link></li>
              </ul>
            </div>

          </div>

          {/* ────────────────────────────────────────────────────────────
               Bottom bar
               · Copyright text — left-aligned on desktop
               · Privacy Policy link — right-aligned on desktop
               · Both centred and stacked vertically on mobile
          ──────────────────────────────────────────────────────────── */}
          <div className="pf3-bottom">
            <p className="pf3-bottom-copy">
              © {new Date().getFullYear()} Proxen. All rights reserved. Canada-led, globally delivered.
            </p>
            <Link href="/privacy-policy" className="pf3-bottom-policy">
              Privacy Policy
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}
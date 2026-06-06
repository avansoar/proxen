import Link from 'next/link';

type PortfolioCard = {
  src: string;
  alt: string;
  colSpan: number;
  rowSpan: number;
  link: string;
};

const cardImages: PortfolioCard[] = [
  {
    src: 'https://images.prismic.io/proxen/aeim1sBOoF08xNDj_1.png?auto=format,compress',
    alt: 'NR Roofing',
    colSpan: 2,
    rowSpan: 1,
    link: '/work/best-website-designing-for-roofing-companies',
  },
  {
    src: 'https://images.prismic.io/proxen/aeim18BOoF08xNDk_2.png?auto=format,compress',
    alt: 'Gardec',
    colSpan: 1,
    rowSpan: 1,
    link: '/work/top-web-application-development-for-hardware-manufacturers',
  },
  {
    src: 'https://images.prismic.io/proxen/aeim2MBOoF08xNDl_3.png?auto=format,compress',
    alt: 'HeatFlow',
    colSpan: 1,
    rowSpan: 1,
    link: '/work/professional-website-designing-for-hvac-services',
  },
  {
    src: 'https://images.prismic.io/proxen/aeim2sBOoF08xNDn_4.png?auto=format,compress',
    alt: 'Made in India',
    colSpan: 2,
    rowSpan: 1,
    link: '/work/ecommerce-solutions-for-indian-grocery-stores',
  },
  {
    src: 'https://images.prismic.io/proxen/aeim3MBOoF08xNDp_5.png?auto=format,compress',
    alt: 'HSS',
    colSpan: 2,
    rowSpan: 1,
    link: '/work/seo-and-website-designing-for-construction-companies',
  },
  {
    src: 'https://images.prismic.io/proxen/aeimz8BOoF08xNDe_6.png?auto=format,compress',
    alt: 'Vanguard',
    colSpan: 1,
    rowSpan: 1,
    link: '/work/seo-optimized-website-for-used-car-dealerships',
  },
  {
    src: 'https://images.prismic.io/proxen/aeim0MBOoF08xNDf_7.png?auto=format,compress',
    alt: 'Desire Motors',
    colSpan: 1,
    rowSpan: 1,
    link: '/work/mobile-app-development-for-car-dealerships',
  },
  {
    src: 'https://images.prismic.io/proxen/aeim0MBOoF08xNDg_8.png?auto=format,compress',
    alt: 'GTA Ice Cream',
    colSpan: 2,
    rowSpan: 1,
    link: '/work/content-marketing-for-event-catering-businesses',
  },
  {
    src: 'https://images.prismic.io/proxen/aeim08BOoF08xNDh_9.png?auto=format,compress',
    alt: 'Elysian',
    colSpan: 2,
    rowSpan: 1,
    link: '/work/social-media-management-for-luxury-lounges',
  },
  {
    src: 'https://images.prismic.io/proxen/aeim1cBOoF08xNDi_10.png?auto=format,compress',
    alt: 'Game Changer',
    colSpan: 1,
    rowSpan: 1,
    link: '/work/branding-and-design-for-fitness-businesses',
  },
  {
    src: 'https://images.prismic.io/proxen/af8adqYofJOwHCFI_gta-softee.png?auto=format,compress',
    alt: 'GTA Softee Ice Cream Rental Truck',
    colSpan: 1,
    rowSpan: 1,
    link: '/work/best-website-designing-for-ice-cream-truck-rentals',
  },
];

export default function PortfolioAreaHomeTwo() {
  return (
    <div
      className="proxensection-padding proxendefault-bg margin-30"
      style={{ fontFamily: "-apple-system,'Segoe UI',sans-serif" }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#888',
              margin: '0 0 8px',
            }}
          >
            Our Work Speaks For Us
          </p>
          <h2
            style={{
              fontSize: 44,
              fontWeight: 800,
              color: '#111',
              letterSpacing: '-1.5px',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Our Projects
          </h2>
        </div>

        <div className="portfolio-grid">
          {cardImages.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className="portfolio-item"
              style={{
                gridColumn: `span ${item.colSpan}`,
                gridRow: `span ${item.rowSpan}`,
              }}
            >
              <img src={item.src} alt={item.alt} loading={item.rowSpan === 1 ? 'lazy' : 'eager'} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

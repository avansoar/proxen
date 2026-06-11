'use client';

// src/components/cities/CitiesArea.tsx
// ─────────────────────────────────────────────────────────────────────────────
// City listing grouped by service type.
// Services come from services-data.ts; city content from cities-data.ts.
// Group titles follow the service order from services-data.ts.
// ─────────────────────────────────────────────────────────────────────────────

import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  citiesData,
  getCitiesByServiceType,
  getServiceDisplayName,
} from '../../data/cities-data';
import type { CityData } from '../../data/cities-data';
import { services } from '../../data/services-data';
import type { ServiceData } from '../../data/services-data';

// ─────────────────────────────────────────────────────────────────────────────
// Mapping: city serviceType key → service slug in services-data.ts
// Bridges the two data files without modifying either.
// ─────────────────────────────────────────────────────────────────────────────
const SERVICE_TYPE_TO_SLUG: Record<string, string> = {
  'branding-identity-design-company': 'branding-identity-design-company',
  'web-design-services': 'website-design-services',
  'seo': 'professional-seo-services',
  'ecommerce-store-development-company': 'ecommerce-store-development-company',
  'digital-marketing': 'social-media-marketing-agency',
  'social-media-management': 'social-media-marketing-agency',
  'web-development': 'web-application-development',
  'mobile-app-development': 'mobile-app-development',
};

// ─────────────────────────────────────────────────────────────────────────────
// Build ordered groups:
//   1. For every service in services-data (preserving services order),
//      collect cities whose serviceType maps to that service's slug.
//   2. Deduplicate cities by slug within each service group.
//   3. Append any cities whose serviceType has NO service mapping (ungrouped).
// ─────────────────────────────────────────────────────────────────────────────
interface CityGroup {
  key: string;
  serviceType: string;       // original serviceType key from cities-data
  service: ServiceData | undefined;
  title: string;             // resolved display title from services-data
  cities: CityData[];
}

function uniqueCities(input: CityData[]): CityData[] {
  const seen = new Map<string, CityData>();
  input.forEach((city) => {
    const key = `${city.cityName.toLowerCase()}|${(city.state ?? '').toLowerCase()}`;
    if (!seen.has(key)) {
      seen.set(key, city);
    }
  });
  return [...seen.values()];
}

function buildGroups(): CityGroup[] {
  const usedServiceTypes = [...new Set(citiesData.map((c) => c.serviceType))];
  const groups: CityGroup[] = [];
  const coveredServiceTypes = new Set<string>();

  for (const service of services) {
    const matchingTypes = usedServiceTypes.filter(
      (serviceType) => SERVICE_TYPE_TO_SLUG[serviceType] === service.slug
    );

    if (matchingTypes.length === 0) continue;

    const combinedCities = uniqueCities(
      matchingTypes.flatMap((serviceType) => getCitiesByServiceType(serviceType))
    );

    if (combinedCities.length === 0) continue;

    groups.push({
      key: service.slug,
      serviceType: matchingTypes[0],
      service,
      title: service.title,
      cities: combinedCities,
    });

    matchingTypes.forEach((serviceType) => coveredServiceTypes.add(serviceType));
  }

  for (const serviceType of usedServiceTypes) {
    if (coveredServiceTypes.has(serviceType)) continue;

    const cities = uniqueCities(getCitiesByServiceType(serviceType));
    if (cities.length === 0) continue;

    groups.push({
      key: `fallback-${serviceType}`,
      serviceType,
      service: undefined,
      title: getServiceDisplayName(serviceType),
      cities,
    });
  }

  return groups;
}

// ─────────────────────────────────────────────────────────────────────────────
// Components
// ─────────────────────────────────────────────────────────────────────────────

interface CityCardProps {
  city: CityData;
  serviceTitle: string;
  delay: number;
}

const CityCard = ({ city, serviceTitle, delay }: CityCardProps) => (
  <div
    className="col-12 col-sm-4 col-lg-3"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <Link
      href={`/cities/${city.slug}`}
      className="text-decoration-none city-card-link d-block h-100"
    >
      <div className="city-card d-flex align-items-center gap-2 rounded-3 px-3 py-3 h-100">
        <svg
          className="city-pin-icon flex-shrink-0"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
        <span className="city-card-text text-white small text-truncate">
          {serviceTitle} in {city.cityName}
        </span>
      </div>
    </Link>
  </div>
);

export default function CitiesArea() {
  const groups = useMemo(() => buildGroups(), []);

  if (citiesData.length === 0) {
    return (
      <div className="bg-light py-5">
        <div className="container-xl text-center py-5">
          <h3 className="mb-3">No cities available yet</h3>
          <p className="text-secondary mb-0">
            City pages will appear here once they are added to cities-data.ts.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-light py-5">
      <div className="container-xl">
        {groups.map((group, groupIndex) => (
          <section
            key={group.key}
            data-aos="fade-up"
            data-aos-delay={200 + groupIndex * 80}
          >
            <div className="text-center mb-5">
              <h2 className="fw-bolder text-dark lh-sm mb-2 cities-group-title">
                {group.title}
              </h2>
              <div className="cities-title-bar mx-auto mb-4" />
              <p className="text-secondary fs-6 mb-0 tracking-wide">
                Available in regions where Proxen supports growth-focused businesses.
              </p>
            </div>

            <div className="row g-3">
              {group.cities.map((city, cityIndex) => (
                <CityCard
                  key={city.slug}
                  city={city}
                  serviceTitle={group.title}
                  delay={300 + cityIndex * 20}
                />
              ))}
            </div>

            {groupIndex < groups.length - 1 && (
              <hr className="border-top border-secondary-subtle my-5 opacity-50" />
            )}
          </section>
        ))}

        <div
          className="text-center mt-5 pt-4 border-top border-secondary-subtle"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Link className="proxendefault-btn" href="/services">
            View All Services
            <span className="proxenbutton-icon">
              <Image className="arry1" src="/assets/images/svg/arrow-right.png" alt="" aria-hidden="true" width={20} height={20} />
              <Image className="arry2" src="/assets/images/svg/arrow-right.png" alt="" aria-hidden="true" width={20} height={20} />
            </span>
          </Link>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .cities-group-title {
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          letter-spacing: -0.025em;
        }
        .cities-title-bar {
          width: 70px;
          height: 3px;
          background: var(--accent-color);
          border-radius: 2px;
        }
        .city-card {
          background-color: #111111;
          border: 1px solid #1e1e1e;
          min-height: 56px;
          transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
          cursor: pointer;
        }
        .city-card-link:hover .city-card {
          background-color: #222;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }
        .city-pin-icon {
          width: 15px;
          height: 15px;
          color: #fff;
          opacity: 0.75;
        }
        .city-card-text {
          color: #fff;
          line-height: 1.4;
        }
      `}} />
    </div>
  );
}

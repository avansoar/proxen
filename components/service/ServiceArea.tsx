'use client';

// src/components/service/ServiceArea.tsx
import Link from "next/link";
import { getAllServices, toServiceListing } from "../../data/services-data";
import HtmlRenderer from "../../common/HtmlRenderer";

// ─── Constants ────────────────────────────────────────────────────────────────

const PLACEHOLDER_IMAGE = "/assets/images/placeholder.jpg";

// ─── Types ────────────────────────────────────────────────────────────────────

interface BulletPoint {
  bullet_point: string;
}

interface ServiceListing {
  id: number;
  slug: string;
  title: { rendered: string };
  acf: {
    layout_side?: string;
    listing_image?: string;
    service_short_description?: string;
    feature_bullet_points?: BulletPoint[];
  };
}

// ─── Service Card Component ───────────────────────────────────────────────────

interface ServiceCardProps {
  service: ServiceListing;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const acf = service.acf || {};
  const bulletPoints = acf.feature_bullet_points ?? [];
  const layoutSide = acf.layout_side === "right" ? "right" : "left";
  const number = (index + 1).toString().padStart(2, "0");
  const imageUrl = acf.listing_image || PLACEHOLDER_IMAGE;

  return (
    <div
      className={`proxenservice-main-box card-sticky ${
        index > 0 ? "mt-80" : ""
      }`}
    >
      <div className="row">
        {/* Image column */}
        <div
          className={`col-lg-6 ${layoutSide === "right" ? "order-lg-2" : ""}`}
        >
          <div className="proxenservice-d-thumb">
            <img
              src={imageUrl}
              alt={service.title.rendered}
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src = PLACEHOLDER_IMAGE;
              }}
            />
          </div>
        </div>

        {/* Content column */}
        <div className="col-lg-6 d-flex align-items-center">
          <div
            className={`proxendefault-content ${
              layoutSide === "right" ? "pr-110" : "pl-110"
            }`}
          >
            <HtmlRenderer
              tag="h3"
              className="title"
              html={`${number}. ${service.title.rendered}`}
            />

            <HtmlRenderer
              tag="p"
              html={acf.service_short_description || ""}
            />

            <div className="mt-50">
              <div className="proxenservice-d-data">
                <ul>
                  {bulletPoints.length > 0 ? (
                    bulletPoints.map((bullet, i) => (
                      <li key={i}>
                        <HtmlRenderer tag="h4" html={bullet.bullet_point} />
                      </li>
                    ))
                  ) : (
                    <li>
                      <h4 className="text-muted">No features listed</h4>
                    </li>
                  )}
                </ul>
              </div>
            </div>

            <div className="mt-50">
              <Link
                className="proxendefault-btn"
                href={`/services/${service.slug}`}
              >
                Explore more
                <span className="proxenbutton-icon">
                  <img
                    className="arry1"
                    src="/assets/images/svg/arrow-right.png"
                    alt=""
                  />
                  <img
                    className="arry2"
                    src="/assets/images/svg/arrow-right.png"
                    alt=""
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ServiceArea() {
  const services: ServiceListing[] = getAllServices().map(toServiceListing);

  if (services.length === 0) {
    return (
      <div style={{ padding: "60px", textAlign: "center" }}>
        <h3>No Services Found</h3>
        <p>
          Add entries to <code>src/data/service-data.ts</code> to get started.
        </p>
      </div>
    );
  }

  return (
    <section className="proxenabout-section1 proxendefault-bg services_section">
      <div className="container">
        <div className="proxensection-title services_title">
          <div
            className="proxensub-title aos-init"
            data-aos-delay="300"
            data-aos="fade-up"
          >
            <p>What we do for you</p>
          </div>
          <h1 className="aos-init" data-aos-delay="400" data-aos="fade-up">
            Our Services
          </h1>
        </div>

        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}

// ─── Additional Styles (if not provided globally) ─────────────────────────────
// The classes used below must be defined in your global CSS or via a CSS module:
// .proxenabout-section1.services_section { padding: 120px 0 130px; }
// .mt-80 { margin-top: 80px; }
// .pl-110 { padding-left: 110px; }
// .pr-110 { padding-right: 110px; }
// .mt-50 { margin-top: 50px; }
// etc.
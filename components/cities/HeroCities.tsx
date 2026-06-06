// src/components/cities/HeroCities.tsx

import { siteConfig } from '../../siteConfig';

export default function HeroCities() {
  return (
    <section className="proxenabout-section1 proxendefault-bg">
      <div className="container">
        <div className="proxensection-title">
          <div className="proxensub-title aos-init" data-aos-delay="400" data-aos="fade-up">
            <p>Discover cities we serve</p>
          </div>
          <h1 className="aos-init" data-aos-delay="500" data-aos="fade-up">
            Cities We Serve
          </h1>
          <p className="mt-3 mb-0 text-secondary" data-aos="fade-up" data-aos-delay="600">
            {siteConfig.business.name} supports businesses in key locations with scalable digital solutions built for growth.
          </p>
        </div>
      </div>
    </section>
  );
}

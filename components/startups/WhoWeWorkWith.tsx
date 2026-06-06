'use client';

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  HiOutlineLightBulb,
  HiOutlineOfficeBuilding,
  HiOutlineCode,
  HiOutlineGlobe,
  HiOutlineCog,
} from "react-icons/hi";

interface WorkWithItem {
  icon: React.ReactNode;
  label: string;
}

const workWithItems: WorkWithItem[] = [
  { icon: <HiOutlineLightBulb />, label: "Startup founders building SaaS products & MVPs" },
  { icon: <HiOutlineOfficeBuilding />, label: "Businesses digitizing internal operations & workflows" },
  { icon: <HiOutlineCode />, label: "Agencies seeking white label development support" },
  { icon: <HiOutlineGlobe />, label: "Organizations scaling web and mobile platforms" },
  { icon: <HiOutlineCog />, label: "Service companies automating customer workflows" },
];

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 50, suffix: "+", label: "Products Launched" },
  { value: 3, suffix: "×", label: "Faster Time-to-Market" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 10, suffix: "+", label: "Years Experience" },
];

const WhoWeWorkWith: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="sp-who-we-work-with" className="sp-section sp-wwww-section">
      <div className="container">
        <p className="sp-section-eyebrow" data-aos="fade-up">
          Who We Work With
        </p>

        <div className="sp-wwww-grid">
          {/* Left column */}
          <div className="sp-wwww-left" data-aos="fade-right" data-aos-delay="60">
            <h2 className="sp-section-heading sp-wwww-heading">
              Built for Forward-<br />Thinking Businesses
            </h2>
            <p className="sp-wwww-sub">
              We partner with ambitious businesses to design, build, and scale
              digital products that solve real operational and customer challenges.
            </p>

            <ul className="sp-wwww-list">
              {workWithItems.map((item, idx) => (
                <li
                  key={idx}
                  className="sp-wwww-list-item"
                  data-aos="fade-right"
                  data-aos-delay={80 + idx * 55}
                >
                  <span className="sp-wwww-icon">{item.icon}</span>
                  <span className="sp-wwww-item-label">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column */}
          <div className="sp-wwww-right" data-aos="fade-left" data-aos-delay="120">
            <div className="sp-wwww-right-card">
              <h3 className="sp-wwww-card-title">From MVP to Full-Scale Platform</h3>
              <p className="sp-wwww-card-desc">
                Whether you're starting from scratch or modernizing an existing product,
                our team combines strategy, design, and engineering to deliver modern
                digital solutions with speed and clarity — bringing your ideas to market faster.
              </p>

              <div className="sp-stats-grid" ref={ref}>
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="sp-stat-card"
                    data-aos="zoom-in"
                    data-aos-delay={180 + idx * 70}
                  >
                    <span className="sp-stat-number">
                      {inView ? (
                        <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
                      ) : (
                        `${stat.value}${stat.suffix}`
                      )}
                    </span>
                    <span className="sp-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;

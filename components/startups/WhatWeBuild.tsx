import React from "react";
import {
  HiOutlineServer,
  HiOutlineDesktopComputer,
  HiOutlineLightningBolt,
  HiOutlineChartBar,
  HiOutlineDeviceMobile,
  HiOutlineSparkles,
} from "react-icons/hi";

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: ServiceCard[] = [
  {
    icon: <HiOutlineServer />,
    title: "SaaS Platforms",
    description:
      "Scalable SaaS applications designed for long-term product growth and subscription-based businesses.",
  },
  {
    icon: <HiOutlineDesktopComputer />,
    title: "Web Applications",
    description:
      "Custom business applications that improve workflows, operations, and customer experiences.",
  },
  {
    icon: <HiOutlineLightningBolt />,
    title: "MVP Development",
    description:
      "Rapid MVP development focused on validation, speed, and market readiness — ship fast, learn fast.",
  },
  {
    icon: <HiOutlineChartBar />,
    title: "Dashboards & Portals",
    description:
      "Interactive data dashboards and client portals designed for clarity, speed, and business intelligence.",
  },
  {
    icon: <HiOutlineDeviceMobile />,
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile apps built to delight users and drive real business outcomes.",
  },
  {
    icon: <HiOutlineSparkles />,
    title: "AI Automation",
    description:
      "AI-powered systems, workflow automation, API integrations, and smart business tools.",
  },
];

const WhatWeBuild: React.FC = () => {
  return (
    <section id="sp-what-we-build" className="sp-section sp-wwb-section">
      <div className="container">
        <div className="sp-section-header-center" data-aos="fade-up">
          <p className="sp-section-eyebrow">Our Expertise</p>
          <h2 className="sp-section-heading">What We Build</h2>
          <p className="sp-section-sub">
            From idea to launch — we build the digital products that power your
            business growth.
          </p>
        </div>

        <div className="sp-wwb-grid">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="sp-service-card"
              data-aos="fade-up"
              data-aos-delay={80 + (idx % 3) * 70}
            >
              <div className="sp-service-icon-wrap">{service.icon}</div>
              <h3 className="sp-service-title">{service.title}</h3>
              <p className="sp-service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;

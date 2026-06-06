import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiStripe,
} from "react-icons/si";
import { TbApi, TbCloud } from "react-icons/tb";
import { FiArrowRight } from "react-icons/fi";

interface TechItem {
  icon: React.ReactNode;
  name: string;
}

const techStack: TechItem[] = [
  { icon: <SiReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiStripe />, name: "Stripe" },
  { icon: <TbApi />, name: "REST APIs" },
  { icon: <TbCloud />, name: "AWS" },
];

const TechStack: React.FC = () => {
  return (
    <section id="sp-tech-stack" className="sp-tech-section">
      <div className="sp-tech-container">
        <div className="sp-section-header-center" data-aos="fade-up">
          <h2 className="sp-section-heading sp-tech-heading">
            Technologies We Work With
          </h2>
        </div>

        <div className="sp-tech-grid">
          {techStack.map((tech, idx) => (
            <div key={idx} className="sp-tech-card" data-aos="fade-up" data-aos-delay={idx * 50}>
              <span className="sp-tech-icon">{tech.icon}</span>
              <span className="sp-tech-name">{tech.name}</span>
            </div>
          ))}
          
          {/* 10th Item: All Integrations Link */}
          <a href="#integrations" className="sp-tech-card sp-tech-card-link" data-aos="fade-up" data-aos-delay={techStack.length * 50}>
            <span className="sp-tech-icon-link">
              <FiArrowRight />
            </span>
            <span className="sp-tech-name">All Integrations</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
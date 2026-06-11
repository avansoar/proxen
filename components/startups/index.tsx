'use client';

// src/pages/startup/index.tsx
import React from "react";

import Wrapper from "../../layouts/Wrapper";
import HeaderOne from "../../layouts/headers/HeaderOne";
import FooterThree from "../../layouts/footers/FooterThree";
import DividedArea from "../../common/DividedArea";
import PageSEO from "../SEO/PageSEO";

import HeroSection from "../../components/startups/HeroSection";
import WhoWeWorkWith from "../../components/startups/WhoWeWorkWith";
import WhatWeBuild from "../../components/startups/WhatWeBuild";
import TechStack from "../../components/startups/TechStack";
import DevelopmentProcess from "../../components/startups/DevelopmentProcess";
import WhyChooseUs from "../../components/startups/WhyChooseUs";
import CaseStudyForStartUps from "../../components/startups/CaseStudyForStartUps";
// import CTASection from "../../components/startups/CTASection";

const StartupPage: React.FC = () => {
  return (
    <Wrapper>
      <PageSEO
        title="Startups"
        description="Proxen helps startups build fast, scalable digital products, launch stronger brands, and grow with smart technology."
        canonical="https://proxen.ca/startups"
      />
      <HeaderOne />

      <main id="sp-startup-page" className="sp-page-wrapper">
        <HeroSection />

        <WhoWeWorkWith />

        <WhatWeBuild />

        <TechStack />

        <DevelopmentProcess />

        <WhyChooseUs />

        <CaseStudyForStartUps />

        <DividedArea />

        {/* <CTASection /> */}

        {/* <DividedArea /> */}
      </main>

      <FooterThree />
    </Wrapper>
  );
};

export default StartupPage;

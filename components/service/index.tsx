// src/components/service/index.tsx

import DividedArea from "../../common/DividedArea";
import FooterThree from "../../layouts/footers/FooterThree";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Wrapper from "../../layouts/Wrapper";
import ServiceArea from "./ServiceArea";

// 🔹 Add PageSEO
import PageSEO from "../SEO/PageSEO";

export default function Service() {
  return (
    <Wrapper>
      {/* 🔥 SEO Added */}
      <PageSEO
        title="Services"
        description="Proxen delivers professional web development, app development, UI/UX design, IT consulting, and digital marketing services to help businesses grow."
        canonical="https://proxen.ca/services"
      />

      <HeaderOne />
      <ServiceArea />
      <DividedArea />
      <FooterThree />
    </Wrapper>
  );
}

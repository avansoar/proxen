// src/components/case-study/index.tsx
import DividedArea from '../../common/DividedArea';
import FooterThree from '../../layouts/footers/FooterThree';
import HeaderOne from '../../layouts/headers/HeaderOne';
import Wrapper from '../../layouts/Wrapper';
import CaseStudyListing from './CaseStudyListing';

// 🔹 Add SEO component
import PageSEO from '../SEO/PageSEO';

export default function CaseStudiesPage() {
  return (
    <Wrapper>
      {/* 🔥 Case Studies Page SEO */}
      <PageSEO
        title="Case Studies"
        description="Read Proxen's detailed case studies on web development, SaaS products, and digital transformation projects delivered for startups and enterprises."
        canonical="https://proxen.ca/case-studies"
      />

      <HeaderOne />
      <CaseStudyListing />
      <DividedArea />
      <FooterThree />
    </Wrapper>
  );
}
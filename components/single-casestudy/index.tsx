// components/single-casestudy/index.tsx
import { redirect } from 'next/navigation';
import DividedArea from '../../common/DividedArea';
import FooterThree from '../../layouts/footers/FooterThree';
import HeaderOne from '../../layouts/headers/HeaderOne';
import Wrapper from '../../layouts/Wrapper';
import PageSEO from '../SEO/PageSEO';
import { getCaseStudyBySlug } from '../../data/case-study-data';
import CaseStudyDetailsArea from './CaseStudyDetailsArea';
import CaseStudyForStartUps from './CaseStudyForStartUps';

export default function CaseStudyDetails({ params }: { params?: { slug?: string } } = {}) {
  const slug = params?.slug ?? '';
  const caseStudy = slug ? getCaseStudyBySlug(slug) : null;

  if (!caseStudy) {
    redirect('/case-studies');
  }

  return (
    <Wrapper>
      <PageSEO
        title={caseStudy.title}
        description={`Explore Proxen's case study on ${caseStudy.title}. Review the challenge, process, outcomes, and business impact.`}
        canonical={`https://proxen.ca/case-studies/${caseStudy.slug}`}
      />
      <HeaderOne />
      <main id="main-content">
        <CaseStudyDetailsArea caseStudy={caseStudy} />
        <DividedArea />
        <CaseStudyForStartUps />
      </main>
      <FooterThree />
    </Wrapper>
  );
}

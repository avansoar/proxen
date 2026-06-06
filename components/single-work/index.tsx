// src/pages/single-work/index.tsx

import { redirect } from 'next/navigation';
import { getProjectBySlug } from '../../data/portfolio-data';

import Wrapper from '../../layouts/Wrapper';
import HeaderOne from '../../layouts/headers/HeaderOne';
import FooterThree from '../../layouts/footers/FooterThree';
import DividedArea from '../../common/DividedArea';
import PageSEO from '../SEO/PageSEO';

import PortfolioHero from './PortfolioHero';
import PortfolioOverview from './PortfolioOverview';
import PortfolioAssets from './PortfolioAssets';
import PortfolioMoreProjects from './PortfolioMoreProjects';
// import PortfolioBottomCTA from './PortfolioBottomCTA';

const SingleWorkPage = ({ params }: { params?: { slug?: string } } = {}) => {
  const slug = params?.slug ?? '';

  // ✅ Fetch project ONCE here and pass as props — no repeated fetches in children
  const project = getProjectBySlug(slug);

  if (!project) {
    redirect('/work');
  }

  return (
    <Wrapper>
      <PageSEO
        title={`${project.hero.headline} | Our Work`}
        description={project.overview.description}
        canonical={`https://proxen.ca/work/${project.slug}`}
      />

      <HeaderOne />
      <DividedArea />

      <PortfolioHero project={project} />
      <DividedArea />

      <PortfolioOverview project={project} />
      <DividedArea />

      <PortfolioAssets project={project} />
      <DividedArea />

      <PortfolioMoreProjects project={project} />
      <DividedArea />

      {/* <PortfolioBottomCTA project={project} /> */}

      <FooterThree />
    </Wrapper>
  );
};

export default SingleWorkPage;
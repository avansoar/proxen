// src/components/cities/index.tsx

import Wrapper from '../../layouts/Wrapper';
import HeaderOne from '../../layouts/headers/HeaderOne';
import FooterThree from '../../layouts/footers/FooterThree';
import DividedArea from '../../common/DividedArea';
import PageSEO from '../SEO/PageSEO';
import CitiesArea from './CitiesArea';
import HeroCities from './HeroCities';
import { siteConfig } from '../../siteConfig';

export default function CitiesPage() {
  return (
    <Wrapper>
      <PageSEO
        title="Cities We Serve"
        description={`${siteConfig.business.name} delivers web design, development, SEO, and digital marketing services across the cities listed on this page.`}
        canonical="https://proxen.ca/cities-we-serve"
      />
      <HeaderOne />
      <HeroCities />
      <DividedArea />
      <CitiesArea />
      <DividedArea />
      <FooterThree />
    </Wrapper>
  );
}

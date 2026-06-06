// src/components/our-work/index.tsx

import DividedArea from '../../common/DividedArea'
import FooterThree from '../../layouts/footers/FooterThree'
import HeaderOne from '../../layouts/headers/HeaderOne'
import Wrapper from '../../layouts/Wrapper'
import WorkListing from './WorkListing'

// 👇 Add the SEO component
import PageSEO from '../SEO/PageSEO'

export default function WorkPage() {
  return (
    <Wrapper>
      <PageSEO
        title="Our Work"
        description="Explore Proxen's portfolio showcasing creative web development, app development, UI/UX design, and digital transformation projects delivered for global brands."
        canonical="https://proxen.ca/work"
      />

      <HeaderOne />
      <WorkListing />
      <DividedArea />
      <FooterThree />
    </Wrapper>
  )
}

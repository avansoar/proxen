// src/components/faq/index.tsx

import DividedArea from '../../common/DividedArea'
import FooterThree from '../../layouts/footers/FooterThree'
import HeaderOne from '../../layouts/headers/HeaderOne'
import Wrapper from '../../layouts/Wrapper'
import FaqArea from './FaqArea'

// 👇 SEO component import
import PageSEO from '../SEO/PageSEO'

export default function Faq() {
  return (
    <Wrapper>
      {/* 🔥 FAQ Page SEO */}
      <PageSEO
        title="FAQs"
        description="Find answers to common questions about Proxen's web development, IT consulting, and digital marketing services, processes, pricing, and support."
        canonical="https://proxen.ca/faq"
      />

      <HeaderOne />
      <FaqArea />
      <DividedArea />
      <FooterThree />
    </Wrapper>
  )
}

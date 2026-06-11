// src/components/contact-us/index.tsx

import DividedArea from '../../common/DividedArea'
// import GoogleMap from '../../common/GoogleMap'
import FooterThree from '../../layouts/footers/FooterThree'
import HeaderOne from '../../layouts/headers/HeaderOne'
import Wrapper from '../../layouts/Wrapper'
import Contactus3Area from './Contactus3Area'
import OurClients from "../../components/single-service/OurClients";
import ServiceTestimonials from "../../components/single-service/ServiceTestimonials";

// 🔹 Replace SEOTitle with PageSEO
import PageSEO from '../SEO/PageSEO'

export default function Contactus3() {
  return (
    <Wrapper>
      {/* 🔥 Contact Page SEO */}
      <PageSEO
        title="Contact Proxen"
        description="Get in touch with Proxen for web development, app development, UI/UX, IT consulting and digital marketing services. We’re here to help your business grow."
        canonical="https://proxen.ca/contact-us"
      />

      <HeaderOne />
      <main id="main-content">
        <Contactus3Area />
        <DividedArea />
        {/* <GoogleMap /> */}
        <OurClients />
        <DividedArea />
        <ServiceTestimonials />
        <DividedArea />
      </main>

      <FooterThree />
    </Wrapper>
  )
}

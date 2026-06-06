 
// // import AboutFaq from '../about-1/AboutFaq'
// import HeroAboutThree from './HeroAboutThree' 
// import AboutHistory from '../about-1/AboutHistory' 
// import AboutFeatures from '../about-1/AboutFeatures' 
// import Wrapper from '../../../layouts/Wrapper'
// import HeaderOne from '../../../layouts/headers/HeaderOne'
// import DividedArea from '../../../common/DividedArea'
// import BrandAreaHomeTwo from '../../homes/home/BrandAreaHomeTwo'
// // import TeamAreaHomeThree from '../../homes/home-3/TeamAreaHomeThree'
// import FaqAreaHomeOne from '../../homes/home/FaqAreaHomeOne'
// import FooterThree from '../../../layouts/footers/FooterThree'
// import SEOTitle from '../../SEOTitle';



// export default function AboutThree() {
//   return (
//     <Wrapper>
//       <SEOTitle 
//         title="About Us"
//         description="Learn about Proxen Digital - Our expertise in IT consulting, digital marketing, and innovative web solutions in Canada."
//       />
//       <HeaderOne />
//       <HeroAboutThree />
//       <DividedArea />
//       <AboutHistory />
//       <DividedArea />
//       <BrandAreaHomeTwo />
//       <AboutFeatures />
//       <DividedArea />
//       <FaqAreaHomeOne />
//       <DividedArea />
//       <FooterThree />
//     </Wrapper>
//   )
// }












// src/components/abouts/about/index.tsx (ya jo bhi exact path hai)

// import AboutFaq from '../about-1/AboutFaq'
import AboutHero from "./AboutHero";
import ServicesSection from "../../homes/home/ServicesSection";
import TechStack from "../../startups/TechStack";
import WhyChooseUs from "../../startups/WhyChooseUs";
import OurClients from "../../single-service/OurClients";

import Wrapper from "../../../layouts/Wrapper";
import HeaderOne from "../../../layouts/headers/HeaderOne";
import FooterThree from "../../../layouts/footers/FooterThree";

// ⬇️ yahan SEOTitle ki jagah PageSEO import
import PageSEO from "../../SEO/PageSEO";

export default function AboutThree() {
  return (
    <Wrapper>
      <PageSEO
        title="About Us"
        description="Learn about Proxen Digital - Our expertise in IT consulting, digital marketing, and innovative web solutions in Canada."
        canonical="https://proxen.ca/about"
      />

      <HeaderOne />
      <AboutHero />
      <ServicesSection />
      <TechStack />
      <WhyChooseUs />
      <OurClients />
      {/* <HeroAboutThree />
      <DividedArea />
      <AboutHistory />
      <DividedArea />
      <BrandAreaHomeTwo />
      <AboutFeatures />
      <DividedArea />
      <FaqAreaHomeOne />
      <DividedArea /> */}
      <FooterThree />
    </Wrapper>
  );
}

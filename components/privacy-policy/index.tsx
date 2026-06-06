// src/components/privacy-policy/index.tsx

import DividedArea from '../../common/DividedArea';
import FooterThree from '../../layouts/footers/FooterThree';
import HeaderOne from '../../layouts/headers/HeaderOne';
import Wrapper from '../../layouts/Wrapper';
import PrivacyPolicyArea from './PrivacyPolicyArea';

// 👇 Add PageSEO component
import PageSEO from '../SEO/PageSEO';

export default function PrivacyPolicy() {
  return (
    <Wrapper>
      <PageSEO
        title="Privacy Policy"
        description="Read Proxen's privacy policy outlining how your data is managed, protected and secured when you use our digital services."
        canonical="https://proxen.ca/privacy-policy"
        noIndex={true}   // ❗Optional → Search engines generally don't need to index privacy pages
      />

      <HeaderOne />
      <PrivacyPolicyArea />
      <DividedArea />
      <FooterThree />
    </Wrapper>
  );
}

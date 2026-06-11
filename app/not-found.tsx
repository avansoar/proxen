'use client';

import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import ErrorArea from '@/common/ErrorArea';
import FooterThree from '@/layouts/footers/FooterThree';

export default function NotFound() {
  return (
    <Wrapper>
      <HeaderOne />
      <main id="main-content">
        <ErrorArea />
      </main>
      <FooterThree />
    </Wrapper>
  );
}

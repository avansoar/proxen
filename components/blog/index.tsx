import DividedArea from '../../common/DividedArea';
import FooterThree from '../../layouts/footers/FooterThree';
import HeaderOne from '../../layouts/headers/HeaderOne';
import Wrapper from '../../layouts/Wrapper';
import PageSEO from '../SEO/PageSEO';
import BlogArea from './BlogArea';

export default function Blog() {
  return (
    <Wrapper>
      <PageSEO
        title="Blog"
        description="Read the latest insights, strategies, and creative thinking from Proxen."
        canonical="https://proxen.ca/blog"
      />
      <HeaderOne />
      <BlogArea />
      <DividedArea />
      <FooterThree />
    </Wrapper>
  );
}

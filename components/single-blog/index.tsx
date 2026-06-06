import { redirect } from 'next/navigation';
import DividedArea from '../../common/DividedArea';
import FooterThree from '../../layouts/footers/FooterThree';
import HeaderOne from '../../layouts/headers/HeaderOne';
import Wrapper from '../../layouts/Wrapper';
import PageSEO from '../SEO/PageSEO';
import { getBlogPostBySlug } from '../../data/blogs-data';
import BlogDetailsArea from './BlogDetailsArea';

export default function BlogDetails({ params }: { params?: { slug?: string } } = {}) {
  const slug = params?.slug ?? '';
  const post = getBlogPostBySlug(slug ?? '');

  if (!post) {
    redirect('/blog');
  }

  return (
    <Wrapper>
      <PageSEO
        title={post.title}
        description={post.seoDescription}
        canonical={`https://proxen.ca/blog/${post.slug}`}
      />
      <HeaderOne />
      <BlogDetailsArea post={post} />
      <DividedArea />
      <FooterThree />
    </Wrapper>
  );
}

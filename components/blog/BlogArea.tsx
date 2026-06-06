import Link from 'next/link';
import { getBlogCategories, getFeaturedBlogPosts, getRecentBlogPosts } from '../../data/blogs-data';

export default function BlogArea() {
  const posts = getFeaturedBlogPosts(4);
  const recentPosts = getRecentBlogPosts(posts[0]?.slug, 2);
  const categories = getBlogCategories();

  return (
    <section className="proxenabout-section1 proxendefault-bg">
      <div className="container">
        <div className="proxensection-title">
          <div className="proxensub-title aos-init" data-aos-delay="400" data-aos="fade-up">
            <p>our creative ideas and insights</p>
          </div>
          <h1 className="aos-init" data-aos-delay="500" data-aos="fade-up">
            Our articles
          </h1>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="blog-page-wrap">
              {posts.map((post, index) => (
                <div
                  key={post.slug}
                  className={`proxenblog-wrap mb-0 ${index > 0 ? 'mt-50' : ''} aos-init`}
                  data-aos-delay={400 + index * 100}
                  data-aos="fade-up"
                >
                  <div className="proxenblog-thumb">
                    <Link href={`/blog/${post.slug}`}>
                      <img src={post.image} alt={post.title} />
                    </Link>
                    <Link href={`/blog/${post.slug}`}>
                      <div className="proxenblog-btn">{post.category}</div>
                    </Link>
                  </div>
                  <div className="proxenblog-meta">
                    <ul>
                      <li>
                        <Link href={`/blog/${post.slug}`}>{post.date} –</Link>
                      </li>
                      <li>{post.readTime}</li>
                    </ul>
                  </div>
                  <div className="proxenblog-title">
                    <Link href={`/blog/${post.slug}`}>
                      <h3>{post.title}</h3>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="proxenblog-sidebar">
              <div className="proxenblog-widgets">
                <h4>Search</h4>
                <form action="#">
                  <div className="proxensearch-box">
                    <input type="search" placeholder="Type keyword here..." />
                    <button id="proxensearch-btn" className="proxendefault-btn" type="button">
                      <span className="proxenbutton-icon">
                        <img className="arry1" src="/assets/images/svg/arrow-right.png" alt="" />
                        <img className="arry2" src="/assets/images/svg/arrow-right.png" alt="" />
                      </span>
                    </button>
                  </div>
                </form>
              </div>

              <div className="proxenblog-widgets">
                <h4>Categories:</h4>
                <div className="proxenblog-categorie">
                  <ul>
                    {categories.map((category) => (
                      <li key={category.label}>
                        <Link href={category.href}>
                          {category.label} ({String(category.count).padStart(2, '0')})
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="proxenblog-widgets">
                <h4>Recent Posts</h4>
                {recentPosts.map((post) => (
                  <div key={post.slug} className="proxenrecent-post-item">
                    <div className="proxenrecent-post-thumb">
                      <Link href={`/blog/${post.slug}`}>
                        <img src={post.image} alt={post.title} />
                      </Link>
                    </div>
                    <div className="proxenrecent-post-content">
                      <div className="proxenblog-meta recent-post-meta">
                        <ul>
                          <li>
                            <Link href={`/blog/${post.slug}`}>{post.date} –</Link>
                          </li>
                          <li>{post.readTime}</li>
                        </ul>
                      </div>
                      <div className="proxenrecent-post">
                        <Link href={`/blog/${post.slug}`}>
                          <h4>{post.title}</h4>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
{/* hsha */}
              <div className="proxenblog-widgets">
                <h4>Tags</h4>
                <div className="proxenblog-tags">
                  <ul>
                    {categories.slice(0, 5).map((category) => (
                      <li key={category.label}>
                        <Link href={category.href}>{category.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getBlogCategories, getRecentBlogPosts, type BlogPost } from '../../data/blogs-data';

interface BlogDetailsAreaProps {
  post: BlogPost;
}

export default function BlogDetailsArea({ post }: BlogDetailsAreaProps) {
  const categories = getBlogCategories();
  const recentPosts = getRecentBlogPosts(post.slug, 2);

  return (
    <section className="proxenabout-section1 proxendefault-bg">
      <div className="container">
        <div className="proxensection-title center max-w100">
          <div className="proxensub-title title3 aos-init" data-aos-delay="400" data-aos="fade-up">
            <p>{post.category}</p>
          </div>
          <h2 className="aos-init" data-aos-delay="500" data-aos="fade-up">
            {post.title}
          </h2>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="blog-page-wrap aos-init" data-aos-delay="700" data-aos="fade-up">
              <div className="proxenblog-single-thumb" style={{ position: 'relative' }}>
                <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 66vw" priority />
              </div>

              <div className="proxenblog-meta">
                <ul>
                  <li>
                    <Link href={`/blog/${post.slug}`}>{post.date} –</Link>
                  </li>
                  <li>{post.readTime}</li>
                </ul>
              </div>

              <div className="proxenblog-single-data">
                <p>{post.intro}</p>
                <h4>Here is the full breakdown of the topic:</h4>
              </div>

              {post.sections.map((section) => (
                <div
                  key={`${post.slug}-${section.heading}`}
                  className="proxenblog-single-data pt-40"
                >
                  <h3>{section.heading}</h3>
                  <p>{section.body}</p>
                </div>
              ))}

              {post.quote && (
                <blockquote className="proxenblockquote-text">
                  <h4>{post.quote}</h4>
                </blockquote>
              )}

              <div className="proxenblog-d-content-wrap">
                <div className="proxenblog-widgets widgets2">
                  <h4>Tags</h4>
                  <div className="proxenblog-tags">
                    <ul>
                      {post.tags.map((tag) => (
                        <li key={tag}>
                          <Link href="/blog">{tag}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="tag-share-social">
                  <h4>Share:</h4>
                  <ul>
                    <li>
                      <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                        <svg width="8" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.26296 8.50593H0.396489C0.0949817 8.50593 0 8.39549 0 8.10944V5.82991C0 5.52841 0.110444 5.43342 0.396489 5.43342H2.26407V3.77679C2.24163 3.03369 2.41736 2.298 2.77321 1.64525C3.14708 0.993513 3.74293 0.498015 4.45193 0.249264C4.9178 0.082563 5.40947 -0.000442427 5.90424 0.00408169H7.75305C8.017 0.00408169 8.13076 0.114524 8.13076 0.381794V2.53211C8.13076 2.79606 8.02032 2.90982 7.75305 2.90982C7.24391 2.90982 6.73477 2.90982 6.22563 2.92859C6.12054 2.91318 6.0133 2.92255 5.91247 2.95595C5.81164 2.98935 5.72002 3.04586 5.64491 3.12097C5.5698 3.19607 5.5133 3.2877 5.47989 3.38853C5.44649 3.48936 5.43713 3.5966 5.45254 3.70169C5.43376 4.26715 5.45254 4.81495 5.45254 5.39919H7.6404C7.94191 5.39919 8.05566 5.50963 8.05566 5.81445V8.09619C8.05566 8.3977 7.96179 8.49268 7.6404 8.49268H5.45033V14.641C5.45033 14.9613 5.35645 15.075 5.01629 15.075H2.65945C2.37672 15.075 2.26296 14.9646 2.26296 14.6786V8.50593Z" fill="currentColor"></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                          <path d="M8.73508 6.35148L14.1991 0H12.9043L8.1599 5.5149L4.37056 0H0L5.73023 8.3395L0 15H1.29487L6.30508 9.17608L10.3069 15H14.6775L8.73477 6.35148H8.73508ZM6.96158 8.41297L6.38099 7.58255L1.76143 0.974755H3.75027L7.47831 6.30746L8.0589 7.13788L12.9049 14.0696H10.9161L6.96158 8.41329V8.41297Z" fill="currentColor" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                          <path d="M9.37397 0.0010458C9.99422 -0.00133431 10.6145 0.00489948 11.2346 0.0197452L11.3995 0.025695C11.5898 0.0324948 11.7777 0.0409945 12.0046 0.0511941C12.909 0.0936927 13.5261 0.236488 14.0675 0.446431C14.6285 0.662323 15.1011 0.954713 15.5737 1.4273C16.0058 1.85195 16.3402 2.36562 16.5537 2.9326C16.7636 3.47403 16.9064 4.09196 16.9489 4.99633C16.9591 5.22242 16.9676 5.41111 16.9744 5.60151L16.9795 5.7664C16.9946 6.38619 17.0011 7.00616 16.9991 7.62614L16.9999 8.26021V9.37368C17.002 9.99393 16.9955 10.6142 16.9804 11.2343L16.9753 11.3992C16.9685 11.5896 16.96 11.7774 16.9498 12.0043C16.9073 12.9087 16.7628 13.5258 16.5537 14.0672C16.3409 14.6348 16.0064 15.1489 15.5737 15.5734C15.1486 16.0054 14.6347 16.3398 14.0675 16.5534C13.5261 16.7633 12.909 16.9061 12.0046 16.9486C11.7777 16.9588 11.5898 16.9673 11.3995 16.9741L11.2346 16.9792C10.6145 16.9943 9.99423 17.0008 9.37397 16.9988L8.73989 16.9996H7.62728C7.00702 17.0017 6.38677 16.9952 5.76669 16.9801L5.6018 16.975C5.40003 16.9677 5.19829 16.9592 4.99662 16.9495C4.09225 16.907 3.47517 16.7625 2.93289 16.5534C2.36569 16.3403 1.85193 16.0059 1.42759 15.5734C0.994995 15.1486 0.660259 14.6346 0.446725 14.0672C0.236782 13.5258 0.0939872 12.9087 0.0514886 12.0043C0.0420224 11.8027 0.0335227 11.6009 0.0259895 11.3992L0.0217398 11.2343C0.00606937 10.6142 -0.00101448 9.99394 0.000490434 9.37368V7.62614C-0.00188181 7.00617 0.00435198 6.3862 0.0191899 5.7664L0.0251396 5.60151C0.0319394 5.41111 0.0404391 5.22242 0.0506387 4.99633C0.0931373 4.09111 0.235932 3.47488 0.445875 2.9326C0.659535 2.36534 0.994926 1.85181 1.42844 1.42815C1.85249 0.995301 2.36593 0.66026 2.93289 0.446431C3.47517 0.236488 4.0914 0.0936927 4.99662 0.0511941L5.6018 0.025695L5.76669 0.0214453C6.38648 0.00578267 7.00645 -0.00130118 7.62643 0.000195891L9.37397 0.0010458ZM8.5002 4.2509C7.9371 4.24294 7.37803 4.34697 6.85549 4.55695C6.33294 4.76693 5.85734 5.07867 5.45632 5.47406C5.05531 5.86944 4.73687 6.34059 4.51952 6.86011C4.30217 7.37963 4.19025 7.93717 4.19025 8.50033C4.19025 9.06349 4.30217 9.62103 4.51952 10.1406C4.73687 10.6601 5.05531 11.1312 5.45632 11.5266C5.85734 11.922 6.33294 12.2337 6.85549 12.4437C7.37803 12.6537 7.9371 12.7577 8.5002 12.7498C9.62733 12.7498 10.7083 12.302 11.5053 11.505C12.3023 10.708 12.7501 9.62704 12.7501 8.49991C12.7501 7.37278 12.3023 6.29181 11.5053 5.4948C10.7083 4.6978 9.62733 4.2509 8.5002 4.2509ZM8.5002 5.95084C8.83892 5.9446 9.17549 6.00592 9.49024 6.13121C9.805 6.25651 10.0916 6.44327 10.3334 6.68058C10.5752 6.9179 10.7672 7.20101 10.8983 7.51338C11.0295 7.82575 11.097 8.16112 11.0971 8.4999C11.0971 8.83868 11.0297 9.17407 10.8987 9.48648C10.7677 9.7989 10.5757 10.0821 10.334 10.3195C10.0923 10.5569 9.80575 10.7437 9.49103 10.8691C9.17632 10.9945 8.83977 11.0559 8.50105 11.0498C7.82477 11.0498 7.17619 10.7812 6.69799 10.303C6.21979 9.82477 5.95114 9.17619 5.95114 8.49991C5.95114 7.82363 6.21979 7.17505 6.69799 6.69685C7.17619 6.21864 7.82477 5.94999 8.50105 5.94999L8.5002 5.95084ZM12.9625 2.97594C12.6883 2.98692 12.429 3.10357 12.2389 3.30146C12.0488 3.49935 11.9426 3.76313 11.9426 4.03756C11.9426 4.31198 12.0488 4.57577 12.2389 4.77366C12.429 4.97155 12.6883 5.0882 12.9625 5.09917C13.2443 5.09917 13.5146 4.98723 13.7138 4.78798C13.9131 4.58873 14.025 4.31849 14.025 4.03671C14.025 3.75493 13.9131 3.48468 13.7138 3.28543C13.5146 3.08618 13.2443 2.97424 12.9625 2.97424V2.97594Z" fill="currentColor" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.55536 1.77857C3.55512 2.25004 3.36761 2.7021 3.03406 3.03532C2.70051 3.36853 2.24826 3.55559 1.77679 3.55536C1.30532 3.55512 0.853254 3.36761 0.520042 3.03406C0.186829 2.70051 -0.000235512 2.24826 2.22531e-07 1.77679C0.000235957 1.30532 0.187753 0.853255 0.521299 0.520042C0.854845 0.186829 1.3071 -0.000235512 1.77857 2.22531e-07C2.25004 0.000235957 2.7021 0.187753 3.03532 0.521299C3.36853 0.854845 3.55559 1.3071 3.55536 1.77857ZM3.60869 4.87173H0.0533305V16H3.60869V4.87173ZM9.22615 4.87173H5.68857V16H9.1906V10.1603C9.1906 6.90717 13.4304 6.60497 13.4304 10.1603V16H16.9413V8.9515C16.9413 3.46736 10.6661 3.6718 9.1906 6.36498L9.22615 4.87173Z" fill="currentColor" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* {post.comments && post.comments.length > 0 && (
                <div className="proxenblog-d-comment-box">
                  <h4>Comments:</h4>

                  {post.comments.map((comment, index) => (
                    <div
                      key={`${post.slug}-comment-${comment.name}-${index}`}
                      className={`proxenblog-d-comment-wrap${index === 1 ? ' pl-101' : '1'}${index === 2 ? ' wrap2' : ''}`}
                    >
                      <div className="proxenblog-d-comment-thumb">
                        <img src={comment.avatar} alt={comment.name} />
                      </div>
                      <div className={index === 1 ? 'proxenblog-d-comment-data' : 'proxenblog-d-comment-data1'}>
                        <h5>{comment.name}</h5>
                        <span>{comment.date}</span>
                        <p>{comment.text}</p>
                      </div>
                      <div className="reply-btn">
                        <Link href={`/blog/${post.slug}`}>Reply</Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="proxencontact-box">
                <div className="proxencontact-title">
                  <h4>Leave a comments:</h4>
                </div>

                <form action="#">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="proxenmain-field">
                        <h6>Name</h6>
                        <input type="text" placeholder="First Your name" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="proxenmain-field">
                        <h6>Email</h6>
                        <input type="email" placeholder="Enter Your Email" />
                      </div>
                    </div>
                  </div>
                  <div className="proxenmain-field-textarea">
                    <h6>Message</h6>
                    <textarea className="button-text" name="textarea" placeholder="Let us know about your project"></textarea>
                  </div>
                  <button className="proxendefault-btn submit-btn btn2 mt-50">
                    Submit message
                    <span className="proxenbutton-icon">
                      <img className="arry1" src="/assets/images/svg/arrow-right.png" alt="" />
                      <img className="arry2" src="/assets/images/svg/arrow-right.png" alt="" />
                    </span>
                  </button>
                </form>
              </div> */}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="proxenblog-sidebar">
              <div className="proxenblog-widgets">
                <h4>Search</h4>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="proxensearch-box">
                    <input type="search" placeholder="Type keyword here..." />
                    <button id="proxensearch-btn" className="proxendefault-btn" type="button" aria-label="Search">
                      <span className="proxenbutton-icon">
                        <Image className="arry1" src="/assets/images/svg/arrow-right.png" alt="" aria-hidden="true" width={20} height={20} />
                        <Image className="arry2" src="/assets/images/svg/arrow-right.png" alt="" aria-hidden="true" width={20} height={20} />
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
                {recentPosts.map((recentPost) => (
                  <div key={recentPost.slug} className="proxenrecent-post-item">
                    <div className="proxenrecent-post-thumb" style={{ position: 'relative' }}>
                      <Link href={`/blog/${recentPost.slug}`}>
                        <Image src={recentPost.image} alt={recentPost.title} fill style={{ objectFit: 'cover' }} sizes="150px" loading="lazy" />
                      </Link>
                    </div>
                    <div className="proxenrecent-post-content">
                      <div className="proxenblog-meta recent-post-meta">
                        <ul>
                          <li>
                            <Link href={`/blog/${recentPost.slug}`}>{recentPost.date} –</Link>
                          </li>
                          <li>{recentPost.readTime}</li>
                        </ul>
                      </div>
                      <div className="proxenrecent-post">
                        <Link href={`/blog/${recentPost.slug}`}>
                          <h4>{recentPost.title}</h4>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="proxenblog-widgets">
                <h4>Tags</h4>
                <div className="proxenblog-tags">
                  <ul>
                    {post.tags.map((tag) => (
                      <li key={`sidebar-tag-${tag}`}>
                        <Link href="/blog">{tag}</Link>
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

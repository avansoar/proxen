// components/single-casestudy/CaseStudyDetailsArea.tsx
import Link from 'next/link';
import {
  getCaseStudyBySlug,
  getCaseStudyCategories,
  getRelatedCaseStudies,
} from '../../data/case-study-data';

export default function CaseStudyDetailsArea({ caseStudy: initialCaseStudy }: { caseStudy?: ReturnType<typeof getCaseStudyBySlug> } = {}) {
  const caseStudy = initialCaseStudy ?? null;

  const relatedStudies = caseStudy
    ? getRelatedCaseStudies(caseStudy.slug, 2)
    : [];

  const categories = getCaseStudyCategories();

  if (!caseStudy) {
    return (
      <section className="proxenabout-section1 proxendefault-bg py-120">
        <div className="container">
          <div className="proxensection-title center max-w100">
            <h2 className="mb-30">Case Study Not Found</h2>

            <Link
              href="/case-studies"
              className="proxendefault-btn"
            >
              Back to Case Studies
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="proxenabout-section1 proxendefault-bg py-120">
      <div className="container">
        <div className="proxensection-title center max-w100 mb-70">
          <div className="proxensub-title title3">
            <p>{caseStudy.category}</p>
          </div>

          <h1>{caseStudy.title}</h1>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="case-study-page-wrap">
              <div className="proxenblog-single-thumb mb-40 rounded-3 overflow-hidden">
                <img
                  src={caseStudy.img}
                  alt={caseStudy.title}
                  loading="eager"
                />
              </div>

              <div className="proxenblog-meta mb-50">
                <ul className="d-flex gap-3 flex-wrap">
                  <li>{caseStudy.date}</li>
                  <li>{caseStudy.readTime}</li>

                  {caseStudy.client && (
                    <li>{caseStudy.client}</li>
                  )}

                  {caseStudy.year && (
                    <li>{caseStudy.year}</li>
                  )}
                </ul>
              </div>

              {caseStudy.sections.map((section) => (
                <div
                  key={section.id}
                  className="proxenblog-single-data mb-50 mt-50"
                >
                  <h3>{section.title}</h3>

                  {section.description && (
                    <p>{section.description}</p>
                  )}

                  {section.type === 'text' &&
                    section.content && (
                      <p>{section.content}</p>
                    )}

                  {section.type === 'list' &&
                    section.items && (
                      <ul className="mt-20">
                        {section.items.map((item) => (
                          <li key={item}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                  {section.type === 'rich-text' &&
                    section.content && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: section.content,
                        }}
                      />
                    )}
                </div>
              ))}

              {caseStudy.services &&
                caseStudy.services.length > 0 && (
                  <div className="proxenblog-tags mb-50 mt-50">
                    <h4 className="mb-50">
                      Services Used
                    </h4>

                    <ul>
                      {caseStudy.services.map(
                        (service) => (
                          <li key={service}>
                            <Link href="/services">
                              {service}
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="proxenblog-sidebar">
              <div className="proxenblog-widgets">
                <h4>Categories</h4>

                <div className="proxenblog-categorie">
                  <ul>
                    {categories.map((category) => (
                      <li key={category.label}>
                        <Link href={category.href}>
                          {category.label} (
                          {String(
                            category.count
                          ).padStart(2, '0')}
                          )
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="proxenblog-widgets">
                <h4>Related Case Studies</h4>

                {relatedStudies.map((item) => (
                  <div
                    key={item.slug}
                    className="proxenrecent-post-item"
                  >
                    <div className="proxenrecent-post-thumb">
                      <Link
                        href={`/case-studies/${item.slug}`}
                      >
                        <img
                          src={item.img}
                          alt={item.title}
                        />
                      </Link>
                    </div>

                    <div className="proxenrecent-post-content">
                      <Link
                        href={`/case-studies/${item.slug}`}
                      >
                        <h5>{item.title}</h5>
                      </Link>

                      <span>{item.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// components/case-study/CaseStudyListing.tsx
import Link from "next/link";
import { getAllCaseStudies } from "../../data/case-study-data";

export default function CaseStudyListing() {
  return (
    <div className="proxendefault-bg margin-30">
      <div className="proxensection-padding2">
        <div className="container">
          {/* Section Title */}
          <div className="proxensection-title">
            <div className="row">
              <div className="col-xl-12">
                <div
                  className="proxensub-title aos-init"
                  data-aos-delay="400"
                  data-aos="fade-up"
                >
                  <p>Case Studies & Success Stories</p>
                </div>
                <h1
                  className="aos-init"
                  data-aos-delay="500"
                  data-aos="fade-up"
                >
                  All Case Studies
                </h1>
              </div>
            </div>
          </div>

          {/* All Case Studies Grid */}
          <div className="row">
            {getAllCaseStudies().map((item) => (
              <div
                key={item.id}
                className="col-lg-6 col-md-6 mb-30"
                data-aos={item.dataAos}
                data-aos-delay={item.dataAosDelay}
              >
                <div className="proxenblog-wrap aos-init">
                  <div className="proxenblog-thumb">
                    <Link href={`/case-studies/${item.slug}`}>
                      <img src={item.img} alt={item.title} />
                    </Link>
                    <Link href={`/case-studies/${item.slug}`}>
                      <div className="proxenblog-btn">{item.category}</div>
                    </Link>
                  </div>
                  <div className="proxenblog-meta">
                    <ul>
                      <li>
                        <Link href={`/case-studies/${item.slug}`}>{item.date} –</Link>
                      </li>
                      <li>{item.readTime}</li>
                    </ul>
                  </div>
                  <div className="proxenblog-title">
                    <Link href={`/case-studies/${item.slug}`}>
                      <h3>{item.title}</h3>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
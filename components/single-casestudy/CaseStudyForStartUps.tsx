// components/startups-guide/CaseStudyForStartUps.tsx
import Link from "next/link";
import case_data from "../../data/case-study-data";

export default function CaseStudyForStartUps() {
  return (
    <div className="proxendefault-bg margin-30">
      <div className="proxensection-padding2">
        <div className="container">
          {/* Section Title */}
          <div className="proxensection-title">
            <div className="row">
              <div className="col-xl-7 col-lg-8">
                <div
                  className="proxensub-title aos-init"
                  data-aos-delay="400"
                  data-aos="fade-up"
                >
                  <p>Case Studies & Success Stories</p>
                </div>
                <h2
                  className="aos-init"
                  data-aos-delay="500"
                  data-aos="fade-up"
                >
                  Our Case Studies
                </h2>
              </div>
              <div className="col-xl-5 col-lg-4 d-flex align-items-end justify-content-end">
                <div className="proxentitle-btn">
                  <Link className="proxendefault-btn" href="/case-studies">
                    View All Studies
                    <span className="proxenbutton-icon">
                      <img
                        className="arry1"
                        src="/assets/images/svg/arrow-right.png"
                        alt=""
                      />
                      <img
                        className="arry2"
                        src="/assets/images/svg/arrow-right.png"
                        alt=""
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study Grid */}
          <div className="row">
            {case_data.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className="col-lg-6 col-md-6"
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
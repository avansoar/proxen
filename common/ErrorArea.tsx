
import Link from 'next/link';
 

export default function ErrorArea() {
  return (
    <section className="proxenabout-section1 proxendefault-bg">
        <div className="container">
          <div className="proxen404-content">
            <div className="proxen404-content-thumb aos-init" data-aos-delay="400" data-aos="fade-up">
              <img src="/assets/images/team/404.png" alt="icon" />
            </div>
            <h1 className="aos-init" data-aos-delay="500" data-aos="fade-up">Page not found</h1> 
            <Link className="proxendefault-btn mt-50 aos-init" data-aos-delay="600" data-aos="fade-up" href="/">Return to homepage
              <span className="proxenbutton-icon">
                <img className="arry1" src="/assets/images/svg/arrow-right.png" alt="" />
                <img className="arry2" src="/assets/images/svg/arrow-right.png" alt="" />
              </span>
            </Link>
          </div>
        </div>
      </section>
  )
}

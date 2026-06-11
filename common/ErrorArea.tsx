
import Link from 'next/link';
import Image from 'next/image';


export default function ErrorArea() {
  return (
    <section className="proxenabout-section1 proxendefault-bg">
        <div className="container">
          <div className="proxen404-content">
            <div className="proxen404-content-thumb aos-init" data-aos-delay="400" data-aos="fade-up">
              <Image src="/assets/images/team/404.png" alt="Page not found illustration" width={400} height={300} style={{ objectFit: 'contain' }} />
            </div>
            <h1 className="aos-init" data-aos-delay="500" data-aos="fade-up">Page not found</h1> 
            <Link className="proxendefault-btn mt-50 aos-init" data-aos-delay="600" data-aos="fade-up" href="/">Return to homepage
              <span className="proxenbutton-icon">
                <Image className="arry1" src="/assets/images/svg/arrow-right.png" alt="" aria-hidden="true" width={20} height={20} />
                <Image className="arry2" src="/assets/images/svg/arrow-right.png" alt="" aria-hidden="true" width={20} height={20} />
              </span>
            </Link>
          </div>
        </div>
      </section>
  )
}

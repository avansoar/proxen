import Link from 'next/link';
import { portfolioProjects } from '../../data/portfolio-data';
import DividedArea from '../../common/DividedArea';

// Helper to get project slug by brand name (exact match with hero.badge)
const getProjectSlugByBrand = (brandName: string): string => {
  const project = portfolioProjects.find(p => p.hero.badge === brandName);
  return project ? project.slug : '#';
};

export default function WorkGrid() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* ── Reset & Base ── */
        *, *::before, *::after { box-sizing: border-box; }

        .wg-section {
          padding: 80px 0 100px;
          background: #f0f2f5;
          font-family: 'Segoe UI', sans-serif;
        }
        .wg-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ════════════════════════════════
           HEADER
           ════════════════════════════════ */
        .wg-header {
          text-align: center;
          margin-bottom: 52px;
        }
        .wg-badge {
          display: inline-block;
          background: #dce8fb;
          color: #1a1a2e;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.04em;
          padding: 8px 22px;
          border-radius: 6px;
          margin-bottom: 18px;
        }
        .wg-title {
          font-size: 44px;
          font-weight: 800;
          color: #0f0f1a;
          margin: 0 0 14px;
          line-height: 1.15;
        }
        .wg-title-accent { color: #086CFE; }
        .wg-subtitle {
          font-size: 15.5px;
          color: #5a6173;
          max-width: 580px;
          margin: 0 auto;
          line-height: 1.65;
        }

        /* ════════════════════════════════
           GRID — 4 equal columns
           Row 1: Card1(1-2) | Card2(3) | Card3(4)
           Row 2: Card4(1)   | Card5(2) | Card6(3-4)
           ════════════════════════════════ */
        .wg-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: auto auto;
          gap: 14px;
        }

        /* ── Base card ── */
        .wg-card {
          border-radius: 20px;
          padding: 28px 26px 24px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-height: 300px;
        }

        /* ════════════════════════════════
           CARD PLACEMENTS
           ════════════════════════════════ */
        .wg-card-1 {
          grid-column: 1 / 3;
          grid-row: 1;
          background: #c8dff5;
          flex-direction: row;
          gap: 20px;
          align-items: stretch;
          min-height: 320px;
        }
        .wg-card-2 { grid-column: 3; grid-row: 1; background: #f59e0b; }
        .wg-card-3 { grid-column: 4; grid-row: 1; background: #d6eaf8; }
        .wg-card-4 { grid-column: 1; grid-row: 2; background: #fde8e8; }
        .wg-card-5 { grid-column: 2; grid-row: 2; background: #222222; }
        .wg-card-6 {
          grid-column: 3 / 5;
          grid-row: 2;
          background: #f59e0b;
          flex-direction: row;
          gap: 20px;
          align-items: stretch;
          min-height: 320px;
        }

        /* ════════════════════════════════
           HORIZONTAL CARDS (1 & 6)
           Left: logo + body | Right: mockup
           ════════════════════════════════ */
        .wg-card-1 .wg-card-left,
        .wg-card-6 .wg-card-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          min-width: 0;
        }

        .wg-card-1 .wg-card-mockup,
        .wg-card-6 .wg-card-mockup {
          width: 55%;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .wg-card-1 .wg-card-mockup img,
        .wg-card-6 .wg-card-mockup img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        /* ════════════════════════════════
           LOGO — standalone block
           ════════════════════════════════ */
        .wg-logo { flex-shrink: 0; }
        .wg-logo img {
          // height: 44px;
          width: auto;
          max-width: 180px;
          object-fit: contain;
          display: block;
        }

        /* ════════════════════════════════
           CARD BODY — title + button
           ════════════════════════════════ */
        .wg-card-body {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 14px;
        }

        /* ── Card title ── */
        .wg-card-title {
          font-size: 16px;
          font-weight: 500;
          color: #0f0f1a;
          line-height: 1.45;
          margin: 0;
        }
        .wg-card-5 .wg-card-title { color: #ffffff; }

        /* ── Buttons ── */
        .wg-btn {
          display: inline-block;
          padding: 10px 22px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.02em;
          text-decoration: none;
          cursor: pointer;
          border: none;
          width: fit-content;
          white-space: nowrap;
        }
        .wg-btn-red   { background: #e53e3e; color: #fff; }
        .wg-btn-white { background: #ffffff; color: #0f0f1a; }
        .wg-btn-blue  { background: #086CFE; color: #fff; }

        /* ════════════════════════════════
           BOTTOM MOCKUP — cards 2,3,4,5
           ════════════════════════════════ */
        .wg-mock-bottom {
          margin-top: 14px;
          border-radius: 10px;
          overflow: hidden;
          flex: 1;
          min-height: 150px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }
        .wg-mock-bottom img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: bottom center;
          display: block;
        }


        /* ════════════════════════════════
           TABLET LANDSCAPE ≤ 1024px
           2×3 grid: card1 full-top, card6 full-bottom
           ════════════════════════════════ */
        @media (max-width: 1024px) {
          .wg-title { font-size: 38px; }

          .wg-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
          }

          /* Card 1: full width, stays horizontal */
          .wg-card-1 {
            grid-column: 1 / -1;
            grid-row: auto;
            min-height: 260px;
          }
          .wg-card-1 .wg-card-mockup { width: 48%; }

          /* Middle cards: 2×2 */
          .wg-card-2 { grid-column: 1; grid-row: auto; }
          .wg-card-3 { grid-column: 2; grid-row: auto; }
          .wg-card-4 { grid-column: 1; grid-row: auto; }
          .wg-card-5 { grid-column: 2; grid-row: auto; }

          /* Card 6: full width, stays horizontal */
          .wg-card-6 {
            grid-column: 1 / -1;
            grid-row: auto;
            min-height: 260px;
          }
          .wg-card-6 .wg-card-mockup { width: 48%; }
        }


        /* ════════════════════════════════
           TABLET PORTRAIT ≤ 768px
           Cards 1 & 6 stack vertically
           ════════════════════════════════ */
        @media (max-width: 768px) {
          .wg-section  { padding: 60px 0 80px; }
          .wg-container { padding: 0 16px; }
          .wg-header   { margin-bottom: 40px; }
          .wg-title    { font-size: 32px; }
          .wg-subtitle { font-size: 14px; }
          .wg-badge    { font-size: 12px; padding: 7px 18px; }
          .wg-grid     { gap: 12px; }

          /* Cards 1 & 6: collapse to column */
          .wg-card-1,
          .wg-card-6 {
            flex-direction: column;
            min-height: auto;
          }
          .wg-card-1 .wg-card-left,
          .wg-card-6 .wg-card-left { width: 100%; }
          .wg-card-1 .wg-card-mockup,
          .wg-card-6 .wg-card-mockup {
            width: 100%;
            min-height: 180px;
            margin-top: 16px;
          }
          .wg-card-1 .wg-card-mockup img,
          .wg-card-6 .wg-card-mockup img {
            height: 180px;
            object-fit: contain;
          }

          .wg-card-2, .wg-card-3,
          .wg-card-4, .wg-card-5 { min-height: 240px; }
          .wg-card-title { font-size: 15px; }
          .wg-mock-bottom { min-height: 130px; }
        }


        /* ════════════════════════════════
           LARGE MOBILE ≤ 600px
           Single column
           ════════════════════════════════ */
        @media (max-width: 600px) {
          .wg-title    { font-size: 28px; }
          .wg-subtitle { font-size: 13.5px; }

          .wg-grid { grid-template-columns: 1fr; }

          .wg-card-1, .wg-card-2, .wg-card-3,
          .wg-card-4, .wg-card-5, .wg-card-6 {
            grid-column: 1;
            grid-row: auto;
            flex-direction: column;
            min-height: auto;
          }
          .wg-card-1 .wg-card-left,
          .wg-card-6 .wg-card-left { width: 100%; }
          .wg-card-1 .wg-card-mockup,
          .wg-card-6 .wg-card-mockup {
            width: 100%;
            min-height: 200px;
            margin-top: 16px;
          }
          .wg-card-1 .wg-card-mockup img,
          .wg-card-6 .wg-card-mockup img { height: 200px; }

          .wg-mock-bottom { min-height: 160px; }
          .wg-card  { padding: 22px 18px 20px; }
          .wg-card-title { font-size: 15px; }
          .wg-btn   { font-size: 12.5px; padding: 8px 18px; }
        }


        /* ════════════════════════════════
           SMALL MOBILE ≤ 400px
           ════════════════════════════════ */
        @media (max-width: 400px) {
          .wg-section  { padding: 48px 0 60px; }
          .wg-container { padding: 0 12px; }
          .wg-title    { font-size: 24px; }
          .wg-subtitle { font-size: 13px; }
          .wg-card     { padding: 18px 14px 16px; border-radius: 14px; }
          .wg-card-title { font-size: 14px; }
          .wg-btn      { font-size: 16px; padding: 7px 15px; }
          .wg-mock-bottom { min-height: 130px; }
          .wg-card-1 .wg-card-mockup img,
          .wg-card-6 .wg-card-mockup img { height: 160px; }
          .wg-grid     { gap: 10px; }
        }
      `}} />
      <DividedArea />
      <section className="proxendefault-bg z-index overflow-hidden">

        <div className="proxensection-padding">
          <div className="container">

            {/* ══ Header ══ */}
            <div className="wg-header">
              <div className="wg-badge">What We Do</div>
              <h2 className="wg-title">
                Our <span className="wg-title-accent">Work</span> Speaks for Itself.
              </h2>
              <p className="wg-subtitle">
                From innovative websites to powerful digital solutions — explore the projects that
                showcase our creativity, strategy, and technical expertise.
              </p>
            </div>

            {/* ══ Grid ══ */}
            <div className="wg-grid">

              {/* ── Card 1 — NR Roofing (col 1-2, horizontal) ── */}
              <div className="wg-card wg-card-1">
                <div className="wg-card-left">

                  {/* Logo — standalone */}
                  <div className="wg-logo">
                    <img src="https://images.prismic.io/proxen/ac9eW5GXnQHGZPch_nr-logo.png?auto=format,compress" alt="NR Roofing & Renos logo" />
                  </div>

                  {/* Title + Button — together */}
                  <div className="wg-card-body">
                    <h3 className="wg-card-title">Turning a basic website into a lead engine</h3>
                    <Link href={`/work/${getProjectSlugByBrand('NR Roofing & Renos')}`} className="wg-btn wg-btn-red">Preview</Link>
                  </div>

                </div>
                <div className="wg-card-mockup">
                  <img src="https://images.prismic.io/proxen/ac9fV5GXnQHGZPcs_nr-main-img.png?auto=format,compress" alt="NR Roofing mockup" />
                </div>
              </div>

              {/* ── Card 2 — Gardec (col 3) ── */}
              <div className="wg-card wg-card-2">

                {/* Logo — standalone */}
                <div className="wg-logo">
                  <img src="https://images.prismic.io/proxen/ac9eXZGXnQHGZPcj_gardec-logo.png?auto=format,compress" alt="Gardec logo" />
                </div>

                {/* Title + Button — together */}
                <div className="wg-card-body">
                  <h3 className="wg-card-title">B2B Hardware Website Built for Performance</h3>
                  <Link href={`/work/${getProjectSlugByBrand('Gardec')}`} className="wg-btn wg-btn-white">Preview</Link>
                </div>

                <div className="wg-mock-bottom">
                  <img src="https://images.prismic.io/proxen/ac9uopGXnQHGZPfs_gared-main.png?auto=format,compress" alt="Gardec mockup" />
                </div>
              </div>

              {/* ── Card 3 — Heatflow Experts (col 4) ── */}
              <div className="wg-card wg-card-3">

                {/* Logo — standalone */}
                <div className="wg-logo">
                  <img src="https://images.prismic.io/proxen/ac9eXJGXnQHGZPci_heatflow-logo.png?auto=format,compress" alt="Heatflow Experts logo" />
                </div>

                {/* Title + Button — together */}
                <div className="wg-card-body">
                  <h3 className="wg-card-title">Turning HVAC Services into Consistent Lead Generation</h3>
                  <Link href={`/work/${getProjectSlugByBrand('Heatflow Experts')}`} className="wg-btn wg-btn-blue">Preview</Link>
                </div>

                <div className="wg-mock-bottom">
                  <img src="https://images.prismic.io/proxen/ac9uoJGXnQHGZPfr_Heaatflow-main.png?auto=format,compress" alt="Heatflow Experts mockup" />
                </div>
              </div>

              {/* ── Card 4 — Game Changer Universe (col 1) ── */}
              <div className="wg-card wg-card-4">

                {/* Logo — standalone */}
                <div className="wg-logo">
                  <img src="https://images.prismic.io/proxen/ac9eWpGXnQHGZPcg_gcu-logo.png?auto=format,compress" alt="Game Changer Universe logo" />
                </div>

                {/* Title + Button — together */}
                <div className="wg-card-body">
                  <h3 className="wg-card-title">Powerful Platform for Fitness &amp; Transformation</h3>
                  <Link href={`/work/${getProjectSlugByBrand('Game Changer Universe')}`} className="wg-btn wg-btn-red">Preview</Link>
                </div>

                <div className="wg-mock-bottom">
                  <img src="https://images.prismic.io/proxen/ac9un5GXnQHGZPfq_gcu-main.png?auto=format,compress" alt="Game Changer Universe mockup" />
                </div>
              </div>

              {/* ── Card 5 — Desire Motors (col 2) ── */}
              <div className="wg-card wg-card-5">

                {/* Logo — standalone */}
                <div className="wg-logo">
                  <img src="https://images.prismic.io/proxen/ac9eWZGXnQHGZPcf_dm-logo.png?auto=format,compress" alt="Desire Motors logo" />
                </div>

                {/* Title + Button — together */}
                <div className="wg-card-body">
                  <h3 className="wg-card-title">Car Dealership Website That Drives Conversions</h3>
                  <Link href={`/work/${getProjectSlugByBrand('Desire Motors')}`} className="wg-btn wg-btn-white">Preview</Link>
                </div>

                <div className="wg-mock-bottom">
                  <img src="https://images.prismic.io/proxen/ac9uopGXnQHGZPft_dm-main.png?auto=format,compress" alt="Desire Motors mockup" />
                </div>
              </div>

              {/* ── Card 6 — Made In India (col 3-4, horizontal — mirrors Card 1) ── */}
              <div className="wg-card wg-card-6">
                <div className="wg-card-left">

                  {/* Logo — standalone */}
                  <div className="wg-logo">
                    <img src="https://images.prismic.io/proxen/ac9eXpGXnQHGZPck_mii-logo.png?auto=format,compress" alt="Made In India logo" />
                  </div>

                  {/* Title + Button — together */}
                  <div className="wg-card-body">
                    <h3 className="wg-card-title">Car Dealership Website That Drives Conversions</h3>
                    <Link href={`/work/${getProjectSlugByBrand('Made in India')}`} className="wg-btn wg-btn-white">Preview</Link>
                  </div>

                </div>
                <div className="wg-card-mockup">
                  <img src="https://images.prismic.io/proxen/ac-Bq5GXnQHGZPlY_MadeinIndia1-1-.png?auto=format,compress" alt="Made In India mockup" />
                </div>
              </div>

            </div>


            {/* Button */}
          <div
            className="proxencta-btn mt-40 pt-40 aos-init"
            data-aos-delay="600"
            data-aos="fade-up"
          >
            <Link className="proxendefault-btn" href="/work">
              View All Work
              <span className="proxenbutton-icon">
                <img
                  className="arry1"
                  src="/assets/images/svg/arrow-right.png"
                  alt="arrow-right"
                />
                <img
                  className="arry2"
                  src="/assets/images/svg/arrow-right.png"
                  alt="arrow-right"
                />
              </span>
            </Link>
          </div>
          </div>
        </div>
      </section>
      <DividedArea />
    </>
  );
}
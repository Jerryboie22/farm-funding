import type { Metadata } from "next";
import Link from "next/link";

const TITLE = "Tariff Relief Program Available for New York Producers";
const DESCRIPTION =
  "The Agricultural Resiliency Against Tariffs Program was recently appropriated $30 million to provide payments directly to NY agricultural producers. Applications are due by August 11, 2026.";

const BLOG_PATH = "/resources/todays-harvest-Blog";
const AUTHORS_PATH = "/resources/meet-the-authors";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "Tariff Relief Program Available for New York Producers, Farm Funders, New York agriculture producers, agriculture, Dario Arezzo",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/images/homepage/DFS_2018.jpg",
        alt: "Dairy cows eating hay at a feeding station inside a barn",
      },
    ],
  },
};

const RELATED_ARTICLES = [
  {
    category: "Ag Economy",
    categoryHref: `${BLOG_PATH}?category=ag-economy`,
    title: "2025 Northeast Dairy Farm Summary & Mid-Year Outlook",
    href: "/resources/Industry-Trends-and-Outlooks/Reports/2025NEDairyFarmSummary2026MidYearOutlook.html",
    date: "July 10, 2026",
  },
  {
    category: "Public Policy",
    categoryHref: `${BLOG_PATH}?category=public-policy`,
    title: "2026 Farm Bill Takes Shape: Comparing the House and Senate Proposals",
    href: `${BLOG_PATH}/260707_2026FarmBillTakesShape`,
    date: "July 7, 2026",
  },
  {
    category: "Crop Insurance",
    categoryHref: `${BLOG_PATH}?category=Crop%20Insurance`,
    title:
      "Understanding USDA’s Base Acre Review Opportunity: What Farmers Need to Know",
    href: `${BLOG_PATH}/260609CG_BaseAcreReviewForFarmers.html`,
    date: "June 9, 2026",
  },
];

const TAGS = [
  ["economy", "economy"],
  ["expenses", "expenses"],
  ["social programs", "social-security"],
  ["ag economy", "ag-economy"],
  ["risk management", "risk-management"],
];

const styles = `
  .tariff-page,
  .tariff-page * { box-sizing: border-box; }

  .tariff-page {
    --clay: #496d83;
    --clay-dark: #3b5a6d;
    --forest: #4f832a;
    --cream: #ecf1e4;
    --grey: #686868;
    --line: #d8d8d8;
    --light: #f1f3f4;
    --charcoal: #231f20;
    width: 100%;
    overflow-x: hidden;
    background: #fff;
    color: var(--grey);
  }

  /* Reference article hero: full-width clay banner with the photograph layered into it. */
  .tariff-page .hero {
    position: relative;
    width: 100%;
    height: 364px;
    background: var(--clay);
    color: #fff;
  }

  .tariff-page .hero-inner {
    width: min(1800px, calc(100% - 120px));
    height: 100%;
    margin: 0 auto;
    padding: 16px 7px 0;
  }

  .tariff-page .category {
    display: inline-block;
    margin: 0 0 31px;
    padding: 4px 7px 5px;
    border: 1px solid #fff;
    color: #fff;
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.25;
    text-decoration: none;
  }

  .tariff-page .category:hover,
  .tariff-page .author-link:hover { text-decoration: underline; }

  .tariff-page h1 {
    max-width: none;
    margin: 0;
    color: var(--cream);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 52px;
    font-weight: 700;
    line-height: 1.08;
    letter-spacing: -0.7px;
    white-space: nowrap;
  }

  .tariff-page .byline {
    margin: 25px 0 0;
    color: #fff;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.4;
  }

  .tariff-page .author-link {
    color: #fff;
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .tariff-page .image-wrap {
    position: relative;
    z-index: 2;
    width: 750px;
    max-width: calc(100% - 28px);
    margin: -253px auto 0;
  }

  .tariff-page .image-wrap img {
    display: block;
    width: 100%;
    height: auto;
    margin: 0;
    object-fit: cover;
  }

  .tariff-page .content {
    width: min(1106px, calc(100% - 56px));
    margin: 48px auto 0;
  }

  .tariff-page .copy {
    width: 100%;
    padding-bottom: 28px;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    color: var(--grey);
  }

  .tariff-page .copy p,
  .tariff-page .copy li {
    margin: 0 0 24px;
    color: var(--grey);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.72;
  }

  .tariff-page .copy strong { font-weight: 700; }

  .tariff-page .copy h3,
  .tariff-page .copy h4 {
    color: var(--grey);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-weight: 700;
    line-height: 1.2;
  }

  .tariff-page .copy h3 {
    margin: 50px 0 35px;
    font-size: 36px;
    letter-spacing: -0.25px;
  }

  .tariff-page .copy h4 {
    margin: 42px 0 25px;
    font-size: 25px;
  }

  .tariff-page .copy ul {
    margin: 0 0 20px;
    padding-left: 35px;
  }

  .tariff-page .copy li { margin-bottom: 22px; padding-left: 0; }
  .tariff-page .copy li:last-child { margin-bottom: 24px; }

  .tariff-page .copy a {
    color: var(--clay);
    text-decoration: underline;
    text-underline-offset: 2px;
    text-decoration-thickness: 1px;
  }

  .tariff-page .copy a:hover { color: var(--forest); }

  .tariff-page .contact {
    padding: 4px 0 28px;
    text-align: center;
  }

  .tariff-page .button {
    display: inline-flex;
    min-height: 50px;
    align-items: center;
    justify-content: center;
    padding: 13px 28px;
    background: var(--clay);
    color: #fff;
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.2;
    text-decoration: none;
  }

  .tariff-page .button:hover { background: var(--clay-dark); }

  .tariff-page .tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
    margin: 0 auto;
    padding: 22px 0 28px;
    border-top: 1px solid var(--line);
    color: var(--grey);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.6;
  }

  .tariff-page .tags svg {
    width: 17px;
    height: 17px;
    margin-right: 2px;
    color: var(--forest);
  }

  .tariff-page .tags a { color: var(--clay); text-decoration: underline; }
  .tariff-page .tags a:hover { color: var(--forest); }
  .tariff-page .tag-separator { color: var(--grey); margin-right: 2px; }

  .tariff-page .author-share {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px;
    padding: 20px 0 52px;
  }

  .tariff-page .box {
    min-height: 176px;
    padding: 22px;
    background: var(--light);
  }

  .tariff-page .author-box {
    display: flex;
    align-items: center;
    gap: 22px;
  }

  .tariff-page .author-photo {
    width: 176px;
    height: 176px;
    flex: 0 0 176px;
    object-fit: cover;
  }

  .tariff-page .author-name {
    color: var(--forest);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 21px;
    font-weight: 700;
    line-height: 1.3;
    text-decoration: underline;
  }

  .tariff-page .author-role {
    margin: 8px 0 0;
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 17px;
    font-weight: 700;
    line-height: 1.4;
  }

  .tariff-page .share-box {
    display: flex;
    align-items: center;
  }

  .tariff-page .share-label {
    margin: 0 0 16px;
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 17px;
    font-weight: 600;
  }

  .tariff-page .share-list {
    display: flex;
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .tariff-page .share-list a {
    display: inline-flex;
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: #fff;
    text-decoration: none;
  }

  .tariff-page .share-list svg { width: 22px; height: 22px; }
  .tariff-page .share-x { background: #14171a; }
  .tariff-page .share-facebook { background: #1877f2; }
  .tariff-page .share-linkedin { background: #0a66c2; }
  .tariff-page .share-email { background: #34a853; }

  .tariff-page .related-wrap { width: 100%; background: var(--cream); }
  .tariff-page .related { width: min(1800px, calc(100% - 120px)); margin: 0 auto; padding: 34px 7px 54px; }
  .tariff-page .section-title {
    margin: 0;
    color: var(--forest);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.25;
  }
  .tariff-page .related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 34px; margin-top: 20px; }
  .tariff-page .related-card { padding-top: 26px; }
  .tariff-page .related-category {
    display: inline-block;
    padding: 6px 14px;
    background: var(--grey);
    color: #fff;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: .02em;
    text-transform: uppercase;
    text-decoration: none;
  }
  .tariff-page .related-title {
    display: block;
    margin-top: 26px;
    color: var(--forest);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 21px;
    font-weight: 700;
    line-height: 1.35;
    text-decoration: none;
  }
  .tariff-page .related-date {
    margin: 26px 0 0;
    color: var(--grey);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .tariff-page .authors-cta {
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    gap: 28px;
    width: min(1800px, calc(100% - 120px));
    margin: 0 auto;
    padding: 50px 7px;
  }
  .tariff-page .authors-copy { max-width: 900px; }
  .tariff-page .authors-text {
    margin: 14px 0 0;
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 20px;
    line-height: 1.5;
  }
  .tariff-page .authors-button { justify-self: end; min-width: 205px; }

  .tariff-page .newsletter {
    width: 100%;
    padding: 60px 20px;
    background: var(--forest);
    color: #fff;
    text-align: center;
  }
  .tariff-page .newsletter-title {
    margin: 0;
    color: #fff;
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 44px;
    font-weight: 700;
    line-height: 1.15;
  }
  .tariff-page .newsletter-subhead {
    margin: 22px 0 0;
    color: #fff;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 21px;
    line-height: 1.4;
  }
  .tariff-page .newsletter-form { display: flex; justify-content: center; margin-top: 30px; }
  .tariff-page .newsletter-inner { display: flex; align-items: flex-end; gap: 10px; }
  .tariff-page .newsletter-group { text-align: left; }
  .tariff-page .newsletter-label {
    display: block;
    margin-bottom: 9px;
    color: #fff;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 18px;
    font-weight: 700;
  }
  .tariff-page .newsletter-email {
    width: 245px;
    height: 44px;
    border: 0;
    border-radius: 2px;
    padding: 0 13px;
    background: #fff;
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 17px;
    outline: none;
  }
  .tariff-page .required {
    margin-top: 8px;
    color: #fff;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 14px;
    font-style: italic;
  }
  .tariff-page .signup {
    height: 44px;
    min-width: 112px;
    border: 2px solid #fff;
    border-radius: 4px;
    padding: 0 20px;
    background: var(--forest);
    color: #fff;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
  }

  @media (max-width: 1400px) {
    .tariff-page h1 { font-size: 46px; }
  }

  @media (max-width: 991px) {
    .tariff-page .hero { height: auto; min-height: 330px; }
    .tariff-page .hero-inner { width: calc(100% - 56px); padding: 22px 0 150px; }
    .tariff-page h1 { font-size: 42px; white-space: normal; }
    .tariff-page .image-wrap { margin-top: -110px; width: min(750px, calc(100% - 56px)); }
    .tariff-page .content { width: calc(100% - 56px); margin-top: 42px; }
    .tariff-page .related,
    .tariff-page .authors-cta { width: calc(100% - 56px); }
  }

  @media (max-width: 767px) {
    .tariff-page .hero { min-height: 0; }
    .tariff-page .hero-inner { width: 100%; padding: 24px 14px 135px; }
    .tariff-page .category { margin-bottom: 20px; font-size: 14px; }
    .tariff-page h1 { font-size: 34px; line-height: 1.12; letter-spacing: -.35px; }
    .tariff-page .byline { margin-top: 17px; font-size: 16px; }
    .tariff-page .image-wrap { width: calc(100% - 28px); margin-top: -105px; }
    .tariff-page .content { width: calc(100% - 28px); margin-top: 30px; }
    .tariff-page .copy p,
    .tariff-page .copy li { font-size: 17px; line-height: 1.72; }
    .tariff-page .copy h3 { margin-top: 35px; margin-bottom: 24px; font-size: 27px; }
    .tariff-page .copy h4 { margin-top: 30px; margin-bottom: 20px; font-size: 22px; }
    .tariff-page .author-share { grid-template-columns: 1fr; gap: 18px; padding-bottom: 35px; }
    .tariff-page .box { min-height: 0; padding: 18px; }
    .tariff-page .author-box { align-items: flex-start; gap: 15px; }
    .tariff-page .author-photo { width: 96px; height: 96px; flex-basis: 96px; }
    .tariff-page .related { width: calc(100% - 28px); padding: 25px 0 35px; }
    .tariff-page .related-grid { grid-template-columns: 1fr; gap: 25px; }
    .tariff-page .authors-cta { grid-template-columns: 1fr; width: calc(100% - 28px); gap: 18px; padding: 38px 0; }
    .tariff-page .authors-button { justify-self: start; }
    .tariff-page .newsletter { padding: 48px 14px 52px; }
    .tariff-page .newsletter-title { font-size: 31px; }
    .tariff-page .newsletter-subhead { font-size: 17px; }
    .tariff-page .newsletter-inner { width: 100%; flex-direction: column; align-items: stretch; }
    .tariff-page .newsletter-email,
    .tariff-page .signup { width: 100%; }
  }
`;

export default function TariffReliefProgramNYProducersPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="tariff-page">
        <section className="hero">
          <div className="hero-inner">
            <Link
              href={`${BLOG_PATH}?category=business-tips-and-tools`}
              className="category"
            >
              Business Tips and Tools
            </Link>

            <h1 id="maincontent">{TITLE}</h1>

            <p className="byline">
              By:{" "}
              <Link
                href={`${AUTHORS_PATH}#Dario-Arezzo`}
                className="author-link"
              >
                Dario Arezzo
              </Link>
            </p>
          </div>
        </section>

        <div className="image-wrap">
          <img
            src="/images/homepage/DFS_2018.jpg"
            alt="Dairy cows eating hay at a feeding station inside a barn, with warm sunlight in the background."
          />
        </div>

        <div className="content">
          <article className="copy">
            <p>
              The Agricultural Resiliency Against Tariffs Program was recently
              appropriated <strong>$30 million</strong> to provide payments
              directly to agricultural producers. These payments range from
              $1,000 to $25,000 per entity. Timing is of the essence as there
              is an application process that currently runs through August 11.
            </p>

            <h3>Determining Product Eligibility</h3>

            <p>
              The first step is to determine if the agricultural product an
              applicant is producing qualifies for the program. The following
              products are eligible:
            </p>

            <ul>
              <li>Milk (Dairy farms)</li>
              <li>
                Livestock, Livestock Products, Specialty Crops, Aquaculture
              </li>
            </ul>

            <p>
              Livestock and livestock products include eggs, cattle, sheep,
              hogs, goats, poultry, natural fiber, cow dairy milk sold to
              consumers raw, milk from non-bovine animals, and other animals
              raised as livestock. Specialty crops include those products that
              are listed as eligible under the{" "}
              <a
                href="https://www.ams.usda.gov/services/grants/scbgp/specialty-crop"
                target="_blank"
                rel="noopener noreferrer"
              >
                USDA Specialty Crop Block Grant Program
              </a>
              .
            </p>

            <p>
              Aquaculture products include fish, fish products, water plants
              and shellfish (excluding wild harvested products).
            </p>

            <h4>What products don’t qualify?</h4>

            <p>
              Any row crops eligible under the{" "}
              <a
                href="https://www.fsa.usda.gov/resources/income-support/farmer-bridge-assistance-fba-program"
                target="_blank"
                rel="noopener noreferrer"
              >
                USDA Farmer Bridge Assistance Program
              </a>{" "}
              (e.g., corn, soybeans, barley, wheat, etc.) are{" "}
              <strong>ineligible</strong> under the Agricultural Resiliency
              Against Tariffs Program.
            </p>

            <h3>Determining Farm Eligibility</h3>

            <p>
              The second step is to determine farm eligibility. To qualify,
              applicants must meet the following criteria:
            </p>

            <ul>
              <li>Operating in 2025 and currently in business;</li>
              <li>
                Has active agricultural production within New York State for
                an eligible product(s);
              </li>
              <li>
                Meets the eligible farm income requirement. An eligible farm
                must have at least two-thirds of its federal gross income from
                all sources in excess of $30,000 derived from agricultural
                activities, as defined by{" "}
                <a
                  href="https://www.tax.ny.gov/pit/credits/eligible-farmer-income-test.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  New York State Tax Law
                </a>
                .
              </li>
              <li>
                This test is similar to the farmers who get certain tax
                credits, such as the New York Farmers’ School Tax credit.
              </li>
              <li>
                Program eligibility must be certified and attested to by a
                qualified financial professional.
              </li>
            </ul>

            <h3>Completing the Application Process</h3>

            <p>
              After determining steps one and two, the next step is the
              application. Eligible producers can access the application at
              the following link:{" "}
              <a
                href="https://agriculture.ny.gov/agricultural-resiliency-against-tariffs-program"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://agriculture.ny.gov/agricultural-resiliency-against-tariffs-program
              </a>
              . There are two different tracks, one for dairy farms and another
              for other eligible applicants with slightly different
              requirements. Applications must be completed by August 11.
            </p>

            <p>
              Farm Funders’s team of agricultural advisors can help applicants
              navigate the process. Relief programs are helpful, but they are
              most effective when aligned with a broader financial plan,
              including budgeting and risk mitigation tools such as Dairy
              Revenue Protection and crop insurance.
            </p>

            <p>
              Farm Funders’s whole-farm, advisory approach connects programs,
              insurance and financial strategy into a clear path forward.
              Applicants are encouraged to start the application process now
              and reach out to their advisors along the way.
            </p>

            <p>
              At Farm Funders, we are committed to being a trusted advisor to
              New York’s agricultural producers, helping you navigate
              uncertainty and strengthen your operation for the future.
            </p>

            <div className="contact">
              <a
                href="https://farm-funders.com/ContactUs.html"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                Contact Us Today!
              </a>
            </div>
          </article>

          <div className="tags">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.41l9 9c.36.36.86.59 1.41.59.55 0 1.05-.23 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5 8 5.67 8 6.5 7.33 8 6.5 8z" />
            </svg>
            <span>Tags:</span>{" "}
            {TAGS.map(([label, slug], index) => (
              <span key={slug}>
                <Link href={`${BLOG_PATH}?tag=${slug}`}>{label}</Link>
                {index < TAGS.length - 1 && (
                  <span className="tag-separator">,</span>
                )}
              </span>
            ))}
          </div>

          <section className="author-share" aria-label="Article author and sharing">
            <div className="box author-box">
              <img
                src="https://farm-funders.com/-/media/farm-credit-east/Blog/Authors/ArezzoDario_web.jpg"
                alt="Professional business portrait of Dario Arezzo"
                className="author-photo"
              />
              <div>
                <Link
                  href={`${AUTHORS_PATH}#Dario-Arezzo`}
                  className="author-name"
                >
                  Dario Arezzo
                </Link>
                <p className="author-role">
                  Executive Vice President, Chief Financial Services Officer
                </p>
              </div>
            </div>

            <div className="box share-box">
              <div>
                <p className="share-label">Share this post on</p>
                <ul className="share-list">
                  <li>
                    <a
                      className="share-x"
                      href={`https://twitter.com/share?text=${encodeURIComponent(TITLE)}&url=${encodeURIComponent("https://www.farmcrediteast.com/resources/todays-harvest-Blog/260701TariffReliefProgramNYProducers")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on X"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      className="share-facebook"
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://www.farmcrediteast.com/resources/todays-harvest-Blog/260701TariffReliefProgramNYProducers")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on Facebook"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      className="share-linkedin"
                      href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent("https://www.farmcrediteast.com/resources/todays-harvest-Blog/260701TariffReliefProgramNYProducers")}&title=${encodeURIComponent(TITLE)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on LinkedIn"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      className="share-email"
                      href={`mailto:?subject=${encodeURIComponent(TITLE)}&body=${encodeURIComponent("https://farm-funders.com/en/resources/todays-harvest-Blog/260701TariffReliefProgramNYProducers.html")}`}
                      aria-label="Share by email"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="related-wrap">
          <section className="related">
            <h2 className="section-title">You Might Also Like</h2>
            <div className="related-grid">
              {RELATED_ARTICLES.map((item) => (
                <article key={item.title} className="related-card">
                  <Link href={item.categoryHref} className="related-category">
                    {item.category}
                  </Link>
                  <Link href={item.href} className="related-title">
                    {item.title} <span aria-hidden="true">›</span>
                  </Link>
                  <p className="related-date">{item.date}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <section className="authors-cta">
          <div className="authors-copy">
            <h2 className="section-title">Meet the Authors</h2>
            <p className="authors-text">
              Connect with and discover our Today’s Harvest blog authors and
              their broad range of financial and northeast agricultural
              expertise.
            </p>
          </div>
          <Link href={AUTHORS_PATH} className="button authors-button">
            Meet the Authors
          </Link>
        </section>

        <section className="newsletter">
          <h2 className="newsletter-title">
            Sign up for our Today&apos;s Harvest Blog.
          </h2>
          <p className="newsletter-subhead">
            Get the latest blog articles delivered to your inbox.
          </p>
          <div className="newsletter-form">
            <form className="newsletter-inner" action="#" method="post">
              <div className="newsletter-group">
                <label htmlFor="email" className="newsletter-label">
                  Enter your email*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="newsletter-email"
                  placeholder="email@address.com"
                  required
                />
                <div className="required">*Required Field</div>
              </div>
              <button type="submit" className="signup">
                Sign Up
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

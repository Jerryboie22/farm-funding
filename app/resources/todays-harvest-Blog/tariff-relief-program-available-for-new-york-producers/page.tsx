import type { Metadata } from "next";
import Link from "next/link";

const TITLE = "Tariff Relief Program Available for New York Producers";

const DESCRIPTION =
  "The Agricultural Resiliency Against Tariffs Program was recently appropriated $30 million to provide payments directly to agricultural producers. These payments range from $1,000 to $25,000 per entity.";

const BLOG_PATH = "/resources/todays-harvest-Blog";
const AUTHORS_PATH = "/resources/meet-the-authors";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "Tariff Relief Program Available for New York Producers, Farm Funding, New York agriculture producers, agriculture, Dario Arezzo",
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
    href:
      "/resources/Industry-Trends-and-Outlooks/Reports/2025NEDairyFarmSummary2026MidYearOutlook.html",
    date: "July 10, 2026",
  },
  {
    category: "Public Policy",
    categoryHref: `${BLOG_PATH}?category=public-policy`,
    title:
      "2026 Farm Bill Takes Shape: Comparing the House and Senate Proposals",
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
  .tariff-page * {
    box-sizing: border-box;
  }

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

  /*
    ============================================================
    HERO
    ============================================================
  */

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

    font-family:
      var(--font-montserrat),
      Montserrat,
      Arial,
      sans-serif;

    font-size: 16px;
    font-weight: 700;
    line-height: 1.25;

    text-decoration: none;
  }

  .tariff-page .category:hover,
  .tariff-page .author-link:hover {
    text-decoration: underline;
  }

  .tariff-page h1 {
    max-width: none;
    margin: 0;

    color: var(--cream);

    font-family:
      var(--font-montserrat),
      Montserrat,
      Arial,
      sans-serif;

    font-size: 52px;
    font-weight: 700;
    line-height: 1.08;
    letter-spacing: -0.7px;

    white-space: nowrap;
  }

  .tariff-page .byline {
    margin: 25px 0 0;

    color: #fff;

    font-family:
      var(--font-barlow),
      Barlow,
      Arial,
      sans-serif;

    font-size: 18px;
    font-weight: 500;
    line-height: 1.4;
  }

  .tariff-page .author-link {
    color: #fff;
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  /*
    ============================================================
    FEATURED IMAGE
    ============================================================
  */

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

  /*
    ============================================================
    ARTICLE CONTENT
    ============================================================
  */

  .tariff-page .content {
    width: min(1106px, calc(100% - 56px));

    margin: 48px auto 0;
  }

  .tariff-page .copy {
    width: 100%;

    padding-bottom: 28px;

    color: var(--grey);

    font-family:
      var(--font-barlow),
      Barlow,
      Arial,
      sans-serif;
  }

  .tariff-page .copy p,
  .tariff-page .copy li {
    margin: 0 0 24px;

    color: var(--grey);

    font-family:
      var(--font-barlow),
      Barlow,
      Arial,
      sans-serif;

    font-size: 18px;
    font-weight: 500;
    line-height: 1.72;
  }

  .tariff-page .copy strong {
    font-weight: 700;
  }

  .tariff-page .copy h3,
  .tariff-page .copy h4 {
    color: var(--grey);

    font-family:
      var(--font-montserrat),
      Montserrat,
      Arial,
      sans-serif;

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

  .tariff-page .copy li {
    margin-bottom: 22px;
    padding-left: 0;
  }

  .tariff-page .copy li:last-child {
    margin-bottom: 24px;
  }

  .tariff-page .copy a {
    color: var(--clay);

    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;
  }

  .tariff-page .copy a:hover {
    color: var(--forest);
  }

  /*
    ============================================================
    CONTACT BUTTON
    ============================================================
  */

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

    font-family:
      var(--font-montserrat),
      Montserrat,
      Arial,
      sans-serif;

    font-size: 16px;
    font-weight: 700;
    line-height: 1.2;

    text-decoration: none;
  }

  .tariff-page .button:hover {
    background: var(--clay-dark);
  }

  /*
    ============================================================
    TAGS
    ============================================================
  */

  .tariff-page .tags {
    display: flex;

    align-items: center;
    flex-wrap: wrap;

    gap: 5px;

    margin: 0 auto;

    padding: 22px 0 28px;

    border-top: 1px solid var(--line);

    color: var(--grey);

    font-family:
      var(--font-barlow),
      Barlow,
      Arial,
      sans-serif;

    font-size: 16px;
    line-height: 1.6;
  }

  .tariff-page .tags svg {
    width: 17px;
    height: 17px;

    margin-right: 2px;

    color: var(--forest);
  }

  .tariff-page .tags a {
    color: var(--clay);
    text-decoration: underline;
  }

  .tariff-page .tags a:hover {
    color: var(--forest);
  }

  .tariff-page .tag-separator {
    margin-right: 2px;
    color: var(--grey);
  }

  /*
    ============================================================
    AUTHOR / SHARE
    ============================================================
  */

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

  .tariff-page .author-details {
    min-width: 0;
  }

  .tariff-page .author-name {
    color: var(--forest);

    font-family:
      var(--font-montserrat),
      Montserrat,
      Arial,
      sans-serif;

    font-size: 21px;
    font-weight: 700;
    line-height: 1.3;

    text-decoration: underline;
  }

  .tariff-page .author-role {
    margin: 8px 0 0;

    color: var(--charcoal);

    font-family:
      var(--font-barlow),
      Barlow,
      Arial,
      sans-serif;

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

    font-family:
      var(--font-barlow),
      Barlow,
      Arial,
      sans-serif;

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

  .tariff-page .share-list svg {
    width: 22px;
    height: 22px;
  }

  .tariff-page .share-x {
    background: #14171a;
  }

  .tariff-page .share-facebook {
    background: #1877f2;
  }

  .tariff-page .share-linkedin {
    background: #0a66c2;
  }

  .tariff-page .share-email {
    background: #34a853;
  }

  /*
    ============================================================
    RELATED ARTICLES
    ============================================================
  */

  .tariff-page .related-wrap {
    width: 100%;
    background: var(--cream);
  }

  .tariff-page .related {
    width: min(1800px, calc(100% - 120px));

    margin: 0 auto;

    padding: 34px 7px 54px;
  }

  .tariff-page .section-title {
    margin: 0;

    color: var(--forest);

    font-family:
      var(--font-montserrat),
      Montserrat,
      Arial,
      sans-serif;

    font-size: 30px;
    font-weight: 700;
    line-height: 1.25;
  }

  .tariff-page .related-grid {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 34px;

    margin-top: 20px;
  }

  .tariff-page .related-card {
    padding-top: 26px;
  }

  .tariff-page .related-category {
    display: inline-block;

    padding: 6px 14px;

    background: var(--grey);
    color: #fff;

    font-family:
      var(--font-barlow),
      Barlow,
      Arial,
      sans-serif;

    font-size: 13px;
    font-weight: 700;

    letter-spacing: 0.02em;

    text-transform: uppercase;

    text-decoration: none;
  }

  .tariff-page .related-title {
    display: block;

    margin-top: 26px;

    color: var(--forest);

    font-family:
      var(--font-montserrat),
      Montserrat,
      Arial,
      sans-serif;

    font-size: 21px;
    font-weight: 700;
    line-height: 1.35;

    text-decoration: none;
  }

  .tariff-page .related-title:hover {
    text-decoration: underline;
  }

  .tariff-page .related-date {
    margin: 26px 0 0;

    color: var(--grey);

    font-family:
      var(--font-barlow),
      Barlow,
      Arial,
      sans-serif;

    font-size: 14px;
    font-weight: 700;

    text-transform: uppercase;
  }

  /*
    ============================================================
    AUTHORS CTA
    ============================================================
  */

  .tariff-page .authors-cta {
    display: grid;

    grid-template-columns: 2fr 1fr;

    align-items: center;

    gap: 28px;

    width: min(1800px, calc(100% - 120px));

    margin: 0 auto;

    padding: 50px 7px;
  }

  .tariff-page .authors-copy {
    max-width: 900px;
  }

  .tariff-page .authors-text {
    margin: 14px 0 0;

    color: var(--charcoal);

    font-family:
      var(--font-barlow),
      Barlow,
      Arial,
      sans-serif;

    font-size: 20px;
    line-height: 1.5;
  }

  .tariff-page .authors-button {
    justify-self: end;

    min-width: 205px;
  }

  /*
    ============================================================
    NEWSLETTER
    ============================================================
  */

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

    font-family:
      var(--font-montserrat),
      Montserrat,
      Arial,
      sans-serif;

    font-size: 44px;
    font-weight: 700;
    line-height: 1.15;
  }

  .tariff-page .newsletter-subhead {
    margin: 22px 0 0;

    color: #fff;

    font-family:
      var(--font-barlow),
      Barlow,
      Arial,
      sans-serif;

    font-size: 21px;
    line-height: 1.4;
  }

  .tariff-page .newsletter-form {
    display: flex;

    justify-content: center;

    margin-top: 30px;
  }

  .tariff-page .newsletter-inner {
    display: flex;

    align-items: flex-end;

    gap: 10px;
  }

  .tariff-page .newsletter-group {
    text-align: left;
  }

  .tariff-page .newsletter-label {
    display: block;

    margin-bottom: 9px;

    color: #fff;

    font-family:
      var(--font-barlow),
      Barlow,
      Arial,
      sans-serif;

    font-size: 18px;
    font-weight: 700;
  }

  .tariff-page .newsletter-email {
    width: 245px;
    height: 50px;

    padding: 0 15px;

    border: 0;
    outline: none;

    background: #fff;
    color: var(--charcoal);

    font-family:
      var(--font-barlow),
      Barlow,
      Arial,
      sans-serif;

    font-size: 17px;
  }

  .tariff-page .newsletter-submit {
    height: 50px;

    padding: 0 25px;

    border: 0;

    background: var(--clay);

    color: #fff;

    font-family:
      var(--font-montserrat),
      Montserrat,
      Arial,
      sans-serif;

    font-size: 15px;
    font-weight: 700;

    cursor: pointer;
  }

  /*
    ============================================================
    RESPONSIVE
    ============================================================
  */

  @media (max-width: 1200px) {
    .tariff-page h1 {
      font-size: 46px;
    }

    .tariff-page .hero {
      height: 340px;
    }

    .tariff-page .image-wrap {
      margin-top: -235px;
    }
  }

  @media (max-width: 900px) {
    .tariff-page .hero {
      height: auto;
      min-height: 330px;
    }

    .tariff-page .hero-inner {
      width: calc(100% - 40px);
      padding: 18px 0 45px;
    }

    .tariff-page h1 {
      font-size: clamp(34px, 6vw, 46px);
      white-space: normal;
    }

    .tariff-page .image-wrap {
      width: 750px;
      margin: -30px auto 0;
    }

    .tariff-page .content {
      margin-top: 40px;
    }

    .tariff-page .author-share {
      grid-template-columns: 1fr;
    }

    .tariff-page .related-grid {
      grid-template-columns: 1fr;
      gap: 10px;
    }

    .tariff-page .authors-cta {
      grid-template-columns: 1fr;
    }

    .tariff-page .authors-button {
      justify-self: start;
    }
  }

  @media (max-width: 640px) {
    .tariff-page .hero {
      min-height: 0;
    }

    .tariff-page .hero-inner {
      width: calc(100% - 32px);
      padding: 16px 0 34px;
    }

    .tariff-page .category {
      margin-bottom: 22px;

      font-size: 14px;
    }

    .tariff-page h1 {
      font-size: 34px;
      line-height: 1.08;
      letter-spacing: -0.3px;
    }

    .tariff-page .byline {
      margin-top: 20px;
      font-size: 17px;
    }

    .tariff-page .image-wrap {
      width: calc(100% - 28px);
      max-width: none;

      margin: 0 auto;
    }

    .tariff-page .content {
      width: calc(100% - 36px);

      margin-top: 32px;
    }

    .tariff-page .copy p,
    .tariff-page .copy li {
      font-size: 17px;
      line-height: 1.65;
    }

    .tariff-page .copy h3 {
      margin: 40px 0 25px;
      font-size: 30px;
    }

    .tariff-page .copy h4 {
      margin: 35px 0 20px;
      font-size: 23px;
    }

    .tariff-page .author-box {
      flex-direction: column;
      align-items: flex-start;
    }

    .tariff-page .author-photo {
      width: 150px;
      height: 150px;
      flex-basis: 150px;
    }

    .tariff-page .related {
      width: calc(100% - 36px);
      padding: 34px 0 45px;
    }

    .tariff-page .authors-cta {
      width: calc(100% - 36px);
      padding: 40px 0;
    }

    .tariff-page .newsletter-title {
      font-size: 34px;
    }

    .tariff-page .newsletter-subhead {
      font-size: 18px;
    }

    .tariff-page .newsletter-inner {
      width: 100%;
      flex-direction: column;
      align-items: stretch;
    }

    .tariff-page .newsletter-email {
      width: 100%;
    }

    .tariff-page .newsletter-submit {
      width: 100%;
    }
  }
`;

function ShareIcon({
  type,
}: {
  type: "x" | "facebook" | "linkedin" | "email";
}) {
  if (type === "x") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.244 2H21.5l-7.11 8.128L22.75 22h-6.56l-5.14-6.72L5.17 22H1.91l7.61-8.696L1.25 2h6.73l4.646 6.145L18.244 2Zm-1.15 17.86h1.81L7.03 4.03H5.09L17.094 19.86Z" />
      </svg>
    );
  }

  if (type === "facebook") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.87.24-1.46 1.5-1.46h1.7V4.95c-.3-.04-1.34-.13-2.55-.13-2.52 0-4.25 1.54-4.25 4.36V11H7v3h2.9v8h3.6Z" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M6.94 8.5H3.5V20h3.44V8.5ZM5.22 3A2.01 2.01 0 1 0 5.22 7.02 2.01 2.01 0 0 0 5.22 3ZM20.5 13.4c0-3.46-1.84-5.07-4.3-5.07-1.98 0-2.86 1.09-3.36 1.85V8.5H9.4V20h3.44v-5.7c0-1.5.28-2.94 2.14-2.94 1.83 0 1.85 1.7 1.85 3.04V20h3.44l.23-6.6Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.4-.2L12 11.1l7.6-5.8H4.4ZM19.6 19a.9.9 0 0 0 .9-.9V7.1l-7.9 5.9a1 1 0 0 1-1.2 0L3.5 7.1v11a.9.9 0 0 0 .9.9h15.2Z" />
    </svg>
  );
}

export default function TariffReliefProgramPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <main className="tariff-page">
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="hero">
          <div className="hero-inner">
            <Link
              href={`${BLOG_PATH}?category=business-tips-and-tools`}
              className="category"
            >
              Business Tips and Tools
            </Link>

            <h1>{TITLE}</h1>

            <p className="byline">
              By:{" "}
              <Link
                href={`${AUTHORS_PATH}/dario-arezzo`}
                className="author-link"
              >
                Dario Arezzo
              </Link>
            </p>
          </div>
        </section>

        {/* =====================================================
            FEATURED IMAGE
        ====================================================== */}

        <div className="image-wrap">
          <img
            src="/images/homepage/DFS_2018.jpg"
            alt="Dairy cows eating hay at a feeding station inside a barn"
          />
        </div>

        {/* =====================================================
            ARTICLE
        ====================================================== */}

        <div className="content">
          <article className="copy">
            <p>
              The Agricultural Resiliency Against Tariffs Program was recently
              appropriated <strong>$30 million</strong> to provide payments
              directly to agricultural producers. These payments range from
              $1,000 to $25,000 per entity. Timing is of the essence as there
              is an application process that has now been extended through
              August 18.
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
              are listed as eligible under the USDA Specialty Crop Block Grant
              Program.
            </p>

            <p>
              Aquaculture products include fish, fish products, water plants
              and shellfish (excluding wild harvested products).
            </p>

            <h4>What products don’t qualify?</h4>

            <p>
              Any row crops eligible under the USDA Farmer Bridge Assistance
              Program (e.g., corn, soybeans, barley, wheat, etc.) are
              ineligible under the Agricultural Resiliency Against Tariffs
              Program.
            </p>

            <h3>Determining Farm Eligibility</h3>

            <p>
              The second step is to determine farm eligibility. To qualify,
              applicants must meet the following criteria:
            </p>

            <ul>
              <li>
                Operating in 2025 and currently in business;
              </li>

              <li>
                Has active agricultural production within New York State for
                an eligible product(s);
              </li>

              <li>
                Meets the eligible farm income requirement. An eligible farm
                must have at least two-thirds of its federal gross income from
                all sources in excess of $30,000 derived from agricultural
                activities, as defined by New York State Tax Law.
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
                rel="noreferrer"
              >
                Agricultural Resiliency Against Tariffs Program
              </a>
              .
            </p>

            <p>
              There are two different tracks, one for dairy farms and another
              for other eligible applicants with slightly different
              requirements. Applications must be completed by August 18 at
              11:59 p.m. EDT.
            </p>

            <p>
              Farm Credit East’s team of agricultural advisors can help
              applicants navigate the process. Relief programs are helpful,
              but they are most effective when aligned with a broader financial
              plan, including budgeting and risk mitigation tools such as
              Dairy Revenue Protection and crop insurance.
            </p>

            <p>
              Farm Credit East’s whole-farm, advisory approach connects
              programs, insurance and financial strategy into a clear path
              forward. Applicants are encouraged to start the application
              process now and reach out to their advisors along the way.
            </p>

            <p>
              At Farm Credit East, we are committed to being a trusted advisor
              to New York’s agricultural producers, helping you navigate
              uncertainty and strengthen your operation for the future.
            </p>

            {/* =================================================
                CONTACT
            ================================================== */}

            <div className="contact">
              <Link href="/contact-us" className="button">
                Contact Us
              </Link>
            </div>

            {/* =================================================
                TAGS
            ================================================== */}

            <div className="tags">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3.4 13.4a2 2 0 0 1 0-2.8l7.2-7.2A2 2 0 0 1 12 2.8h5.8a2 2 0 0 1 2 2v5.8a2 2 0 0 1-.6 1.4Z" />
                <circle cx="16.5" cy="7.5" r="1.2" />
              </svg>

              <span>Tags:</span>

              {TAGS.map(([label, slug], index) => (
                <span key={slug}>
                  {index > 0 && (
                    <span className="tag-separator">, </span>
                  )}

                  <Link
                    href={`${BLOG_PATH}?tag=${encodeURIComponent(slug)}`}
                  >
                    {label}
                  </Link>
                </span>
              ))}
            </div>

            {/* =================================================
                AUTHOR + SHARE
            ================================================== */}

            <div className="author-share">
              <div className="box author-box">
                <img
                  className="author-photo"
                  src="/images/resources/Dario Arezzo.jpg"
                  alt="Dario Arezzo"
                />

                <div className="author-details">
                  <Link
                    href={`${AUTHORS_PATH}/dario-arezzo`}
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
                  <p className="share-label">Share this article</p>

                  <ul className="share-list">
                    <li>
                      <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                          TITLE
                        )}&url=${encodeURIComponent(
                          "https://www.farm-funding.com/en/resources/todays-harvest-Blog/260701TariffReliefProgramNYProducers.html"
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="share-x"
                        aria-label="Share on X"
                      >
                        <ShareIcon type="x" />
                      </a>
                    </li>

                    <li>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          "https://www.farm-funding.com/en/resources/todays-harvest-Blog/260701TariffReliefProgramNYProducers.html"
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="share-facebook"
                        aria-label="Share on Facebook"
                      >
                        <ShareIcon type="facebook" />
                      </a>
                    </li>

                    <li>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                          "https://www.farm-funding.com/en/resources/todays-harvest-Blog/260701TariffReliefProgramNYProducers.html"
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="share-linkedin"
                        aria-label="Share on LinkedIn"
                      >
                        <ShareIcon type="linkedin" />
                      </a>
                    </li>

                    <li>
                      <a
                        href={`mailto:?subject=${encodeURIComponent(
                          TITLE
                        )}&body=${encodeURIComponent(
                          "https://www.farm-funding.com/en/resources/todays-harvest-Blog/260701TariffReliefProgramNYProducers.html"
                        )}`}
                        className="share-email"
                        aria-label="Share by email"
                      >
                        <ShareIcon type="email" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* =====================================================
            RELATED ARTICLES
        ====================================================== */}

        <section className="related-wrap">
          <div className="related">
            <h2 className="section-title">Related Articles</h2>

            <div className="related-grid">
              {RELATED_ARTICLES.map((article) => (
                <article
                  key={article.title}
                  className="related-card"
                >
                  <Link
                    href={article.categoryHref}
                    className="related-category"
                  >
                    {article.category}
                  </Link>

                  <Link
                    href={article.href}
                    className="related-title"
                  >
                    {article.title}
                  </Link>

                  <p className="related-date">
                    {article.date}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            AUTHORS CTA
        ====================================================== */}

        <section className="authors-cta">
          <div className="authors-copy">
            <h2 className="section-title">Meet Our Authors</h2>

            <p className="authors-text">
              Get to know the agricultural professionals and industry experts
              who share insights, analysis and practical information to help
              farmers and rural businesses make informed decisions.
            </p>
          </div>

          <Link
            href={AUTHORS_PATH}
            className="button authors-button"
          >
            Meet Our Authors
          </Link>
        </section>

        {/* =====================================================
            NEWSLETTER
        ====================================================== */}

        <section className="newsletter">
          <h2 className="newsletter-title">
            Stay Informed
          </h2>

          <p className="newsletter-subhead">
            Sign up to receive the latest agricultural news,
            insights and resources.
          </p>

          <form className="newsletter-form">
            <div className="newsletter-inner">
              <div className="newsletter-group">
                <label
                  htmlFor="newsletter-email"
                  className="newsletter-label"
                >
                  Email Address
                </label>

                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  className="newsletter-email"
                  placeholder="Email Address"
                />
              </div>

              <button
                type="submit"
                className="newsletter-submit"
              >
                Subscribe
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

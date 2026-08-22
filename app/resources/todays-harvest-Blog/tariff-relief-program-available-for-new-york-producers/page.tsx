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

const pageStyles = `
  .tariff-article-page {
    --forest: #4f832a;
    --forest-dark: #3f6e20;
    --clay: #496d83;
    --clay-dark: #3b5a6d;
    --gold-line: #c36d15;
    --cream: #ecf1e4;
    --grey-bg: #f8f8f8;
    --grey-badge: #686868;
    --grey-text: #686868;
    --charcoal: #231f20;
    --line: #d8d8d8;
    color: var(--charcoal);
    background: #fff;
  }

  .tariff-article-page,
  .tariff-article-page * {
    box-sizing: border-box;
  }

  .tariff-article-page .article-hero {
    position: relative;
    width: calc(100% - 28px);
    margin: 0 auto 30px;
    padding: 30px 34px 34px;
    min-height: 285px;
    background: var(--clay);
    color: #fff;
  }

  .tariff-article-page .article-date {
    margin: 0 0 28px;
    text-align: right;
    color: #fff;
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 1.4;
  }

  .tariff-article-page .article-heading {
    max-width: 1100px;
  }

  .tariff-article-page .article-category {
    display: inline-block;
    margin: 0 0 18px;
    padding: 8px 16px;
    border: 1px solid #fff;
    color: #fff;
    text-decoration: none;
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 1.4;
  }

  .tariff-article-page .article-category:hover,
  .tariff-article-page .article-author:hover {
    text-decoration: underline;
  }

  .tariff-article-page .article-title {
    margin: 0;
    max-width: 1120px;
    color: var(--cream);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: clamp(34px, 4vw, 58px);
    font-weight: 700;
    line-height: 1.08;
    letter-spacing: -0.5px;
  }

  .tariff-article-page .article-byline {
    margin: 18px 0 0;
    color: #fff;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 17px;
    line-height: 1.5;
  }

  .tariff-article-page .article-author {
    color: #fff;
    text-decoration: underline;
  }

  .tariff-article-page .featured-image {
    width: 100%;
    overflow: hidden;
    margin-bottom: 44px;
  }

  .tariff-article-page .featured-image img {
    display: block;
    width: 100%;
    height: clamp(230px, 31vw, 520px);
    object-fit: cover;
    object-position: center;
  }

  .tariff-article-page .article-content {
    width: min(91.8%, 1760px);
    margin: 0 auto;
  }

  .tariff-article-page .article-copy {
    width: min(100%, 1180px);
    margin: 0 auto;
    padding: 0 0 26px;
  }

  .tariff-article-page .article-copy,
  .tariff-article-page .article-copy p,
  .tariff-article-page .article-copy li {
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
  }

  .tariff-article-page .article-copy p,
  .tariff-article-page .article-copy li {
    font-size: 18px;
    line-height: 1.7;
  }

  .tariff-article-page .article-copy p {
    margin: 0 0 24px;
  }

  .tariff-article-page .article-copy h3,
  .tariff-article-page .article-copy h4 {
    margin: 38px 0 16px;
    color: var(--forest);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-weight: 700;
    line-height: 1.25;
  }

  .tariff-article-page .article-copy h3 {
    font-size: 25px;
  }

  .tariff-article-page .article-copy h4 {
    font-size: 21px;
  }

  .tariff-article-page .article-copy ul {
    margin: 0 0 24px;
    padding-left: 30px;
  }

  .tariff-article-page .article-copy li {
    margin-bottom: 7px;
  }

  .tariff-article-page .article-copy a {
    color: var(--clay);
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;
  }

  .tariff-article-page .article-copy a:hover {
    color: var(--forest);
  }

  .tariff-article-page .contact-wrap {
    padding: 8px 0 30px;
    text-align: center;
  }

  .tariff-article-page .primary-button {
    display: inline-flex;
    min-height: 50px;
    align-items: center;
    justify-content: center;
    padding: 13px 28px;
    border: 0;
    background: var(--clay);
    color: #fff !important;
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.2;
    text-decoration: none !important;
    transition: background-color 160ms ease;
  }

  .tariff-article-page .primary-button:hover {
    background: var(--clay-dark);
  }

  .tariff-article-page .tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
    margin: 0 auto;
    width: min(100%, 1180px);
    padding: 22px 0 28px;
    border-top: 1px solid var(--line);
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.7;
  }

  .tariff-article-page .tag-icon {
    flex: 0 0 auto;
    width: 17px;
    height: 17px;
    margin-right: 2px;
    color: var(--forest);
  }

  .tariff-article-page .tags a {
    color: var(--clay);
    text-decoration: underline;
  }

  .tariff-article-page .tags a:hover {
    color: var(--forest);
  }

  .tariff-article-page .tag-separator {
    margin: 0 2px;
    color: var(--grey-text);
  }

  .tariff-article-page .social-author-row {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 28px;
    width: min(100%, 1180px);
    margin: 0 auto;
    padding: 20px 0 52px;
  }

  .tariff-article-page .grey-box {
    min-height: 176px;
    padding: 22px;
    background: #f1f3f4;
  }

  .tariff-article-page .author-box {
    display: flex;
    align-items: center;
    gap: 22px;
  }

  .tariff-article-page .author-photo {
    display: block;
    width: 176px;
    height: 176px;
    flex: 0 0 176px;
    object-fit: cover;
  }

  .tariff-article-page .author-name {
    color: var(--forest);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 21px;
    font-weight: 700;
    line-height: 1.3;
    text-decoration: underline;
  }

  .tariff-article-page .author-role {
    margin: 8px 0 0;
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 17px;
    font-weight: 700;
    line-height: 1.4;
  }

  .tariff-article-page .share-box {
    display: flex;
    min-height: 176px;
    align-items: center;
  }

  .tariff-article-page .share-label {
    margin: 0 0 16px;
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 17px;
    font-weight: 600;
  }

  .tariff-article-page .share-list {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .tariff-article-page .share-list a {
    display: inline-flex;
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: #fff;
    text-decoration: none;
  }

  .tariff-article-page .share-list svg {
    width: 22px;
    height: 22px;
  }

  .tariff-article-page .share-x {
    background: #14171a;
  }

  .tariff-article-page .share-facebook {
    background: #1877f2;
  }

  .tariff-article-page .share-linkedin {
    background: #0a66c2;
  }

  .tariff-article-page .share-email {
    background: #34a853;
  }

  .tariff-article-page .related-wrap {
    width: 100%;
    background: var(--cream);
  }

  .tariff-article-page .related {
    width: min(91.8%, 1760px);
    margin: 0 auto;
    padding: 34px 0 54px;
  }

  .tariff-article-page .section-title {
    margin: 0;
    color: var(--forest);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.25;
  }

  .tariff-article-page .related-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 34px;
    margin-top: 20px;
  }

  .tariff-article-page .related-card {
    padding-top: 26px;
  }

  .tariff-article-page .related-category {
    display: inline-block;
    padding: 6px 14px;
    background: var(--grey-badge);
    color: #fff;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    text-decoration: none;
  }

  .tariff-article-page .related-title {
    display: block;
    margin-top: 26px;
    color: var(--forest);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 21px;
    font-weight: 700;
    line-height: 1.35;
    text-decoration: none;
  }

  .tariff-article-page .related-date {
    margin: 26px 0 0;
    color: var(--grey-text);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .tariff-article-page .authors-cta {
    display: grid;
    grid-template-columns: minmax(0, 2fr) minmax(240px, 1fr);
    align-items: center;
    gap: 28px;
    width: min(91.8%, 1760px);
    margin: 0 auto;
    padding: 50px 0;
  }

  .tariff-article-page .authors-cta .section-title {
    margin-bottom: 14px;
  }

  .tariff-article-page .authors-cta-text {
    max-width: 900px;
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 20px;
    line-height: 1.5;
  }

  .tariff-article-page .authors-cta-button {
    justify-self: end;
    min-width: 205px;
    background: var(--clay);
  }

  .tariff-article-page .newsletter {
    width: 100%;
    padding: 60px 20px;
    background: var(--forest);
    color: #fff;
    text-align: center;
  }

  .tariff-article-page .newsletter-title {
    margin: 0;
    color: #fff;
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 44px;
    font-weight: 700;
    line-height: 1.15;
  }

  .tariff-article-page .newsletter-subhead {
    margin-top: 22px;
    color: #fff;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 21px;
    font-weight: 500;
    line-height: 1.4;
  }

  .tariff-article-page .newsletter-input {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }

  .tariff-article-page .newsletter-inner {
    display: flex;
    align-items: flex-end;
    gap: 10px;
  }

  .tariff-article-page .newsletter-group {
    text-align: left;
  }

  .tariff-article-page .newsletter-label {
    display: block;
    margin-bottom: 9px;
    color: #fff;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.3;
  }

  .tariff-article-page .newsletter-email {
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

  .tariff-article-page .newsletter-email:focus {
    box-shadow: 0 0 0 2px rgb(255 255 255 / 55%);
  }

  .tariff-article-page .required {
    margin-top: 8px;
    color: #fff;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 14px;
    font-style: italic;
  }

  .tariff-article-page .signup-button {
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

  .tariff-article-page .signup-button:hover {
    background: var(--forest-dark);
  }

  @media (max-width: 991px) {
    .tariff-article-page .article-hero {
      width: calc(100% - 28px);
      min-height: 250px;
      padding: 26px 28px 30px;
    }

    .tariff-article-page .article-title {
      font-size: 45px;
    }

    .tariff-article-page .article-content,
    .tariff-article-page .related,
    .tariff-article-page .authors-cta {
      width: calc(100% - 56px);
    }

    .tariff-article-page .article-copy {
      width: 100%;
    }

    .tariff-article-page .social-author-row {
      width: 100%;
    }

    .tariff-article-page .related-grid {
      gap: 24px;
    }
  }

  @media (max-width: 767px) {
    .tariff-article-page .article-hero {
      width: 100%;
      margin: 0 0 20px;
      min-height: 0;
      padding: 24px 14px 30px;
    }

    .tariff-article-page .article-date {
      margin-bottom: 22px;
      text-align: left;
      font-size: 14px;
    }

    .tariff-article-page .article-category {
      margin-bottom: 14px;
      font-size: 14px;
    }

    .tariff-article-page .article-title {
      font-size: 35px;
      line-height: 1.12;
    }

    .tariff-article-page .article-byline {
      margin-top: 16px;
      font-size: 16px;
    }

    .tariff-article-page .featured-image {
      margin-bottom: 28px;
    }

    .tariff-article-page .featured-image img {
      height: 230px;
    }

    .tariff-article-page .article-content,
    .tariff-article-page .related,
    .tariff-article-page .authors-cta {
      width: calc(100% - 28px);
    }

    .tariff-article-page .article-copy p,
    .tariff-article-page .article-copy li {
      font-size: 17px;
      line-height: 1.72;
    }

    .tariff-article-page .article-copy h3 {
      margin-top: 32px;
      font-size: 23px;
    }

    .tariff-article-page .article-copy h4 {
      margin-top: 28px;
      font-size: 20px;
    }

    .tariff-article-page .tags {
      font-size: 15px;
    }

    .tariff-article-page .social-author-row {
      grid-template-columns: 1fr;
      width: 100%;
      gap: 18px;
      padding-bottom: 35px;
    }

    .tariff-article-page .grey-box {
      min-height: 0;
      padding: 18px;
    }

    .tariff-article-page .author-box {
      align-items: flex-start;
      gap: 15px;
    }

    .tariff-article-page .author-photo {
      width: 96px;
      height: 96px;
      flex-basis: 96px;
    }

    .tariff-article-page .author-name {
      font-size: 20px;
    }

    .tariff-article-page .author-role {
      font-size: 15px;
    }

    .tariff-article-page .share-box {
      min-height: 0;
    }

    .tariff-article-page .related {
      padding-top: 25px;
      padding-bottom: 35px;
    }

    .tariff-article-page .section-title {
      font-size: 27px;
    }

    .tariff-article-page .related-grid {
      grid-template-columns: 1fr;
      gap: 25px;
    }

    .tariff-article-page .related-title {
      font-size: 20px;
    }

    .tariff-article-page .authors-cta {
      grid-template-columns: 1fr;
      gap: 18px;
      padding: 38px 0;
    }

    .tariff-article-page .authors-cta-text {
      font-size: 17px;
      line-height: 1.55;
    }

    .tariff-article-page .authors-cta-button {
      justify-self: start;
    }

    .tariff-article-page .newsletter {
      padding: 48px 14px 52px;
    }

    .tariff-article-page .newsletter-title {
      font-size: 31px;
    }

    .tariff-article-page .newsletter-subhead {
      margin-top: 18px;
      font-size: 17px;
    }

    .tariff-article-page .newsletter-input {
      margin-top: 24px;
    }

    .tariff-article-page .newsletter-inner {
      width: 100%;
      flex-direction: column;
      align-items: stretch;
      gap: 10px;
    }

    .tariff-article-page .newsletter-email {
      width: 100%;
    }

    .tariff-article-page .signup-button {
      width: 100%;
    }
  }
`;

export default function TariffReliefArticlePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      <main className="tariff-article-page w-full overflow-x-hidden">
        {/* Hero */}
        <section className="article-hero">
          <p className="article-date">July 1, 2026</p>

          <div className="article-heading">
            <Link
              href={`${BLOG_PATH}?category=business-tips-and-tools`}
              className="article-category"
            >
              Business Tips and Tools
            </Link>

            <h1 id="maincontent" className="article-title">
              {TITLE}
            </h1>

            <p className="article-byline">
              By:{" "}
              <Link
                href={`${AUTHORS_PATH}#Dario-Arezzo`}
                className="article-author"
              >
                Dario Arezzo
              </Link>
            </p>
          </div>
        </section>

        {/* Dynamic image */}
        <div className="featured-image">
          <img
            src="https://farm-funders.com/-/media/farm-credit-east/featured-images/DFS_2018.ashx"
            alt="Dairy cows eating hay at a feeding station inside a barn, with warm sunlight in the background."
            className="h-full w-full"
          />
        </div>

        <div className="article-content">
          <article className="article-copy">
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
            </ul>

            <ul>
              <li>Livestock, Livestock Products, Specialty Crops, Aquaculture</li>
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

            <div className="contact-wrap">
              <a
                href="https://farm-funders.com/ContactUs.html"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                Contact Us Today!
              </a>
            </div>
          </article>

          {/* Tags */}
          <div className="tags">
            <svg
              className="tag-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
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

          {/* Author + share */}
          <section className="social-author-row" aria-label="Article author and sharing">
            <div className="grey-box author-box">
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

            <div className="grey-box share-box">
              <div>
                <p className="share-label">Share this post on</p>

                <ul className="share-list">
                  <li>
                    <a
                      className="share-x"
                      href={`https://twitter.com/share?text=${encodeURIComponent(
                        TITLE
                      )}&url=${encodeURIComponent(
                        "https://www.farmcrediteast.com/resources/todays-harvest-Blog/260701TariffReliefProgramNYProducers"
                      )}`}
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
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        "https://www.farmcrediteast.com/resources/todays-harvest-Blog/260701TariffReliefProgramNYProducers"
                      )}`}
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
                      href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
                        "https://www.farmcrediteast.com/resources/todays-harvest-Blog/260701TariffReliefProgramNYProducers"
                      )}&title=${encodeURIComponent(TITLE)}`}
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
                      href={`mailto:?subject=${encodeURIComponent(
                        TITLE
                      )}&body=${encodeURIComponent(
                        "https://farm-funders.com/resources/todays-harvest-Blog/260701TariffReliefProgramNYProducers"
                      )}`}
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

        {/* You Might Also Like */}
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
                    {item.title}
                    <span aria-hidden="true"> ›</span>
                  </Link>

                  <p className="related-date">{item.date}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        {/* Meet the Authors CTA */}
        <section className="authors-cta">
          <div>
            <h2 className="section-title">Meet the Authors</h2>
            <p className="authors-cta-text">
              Connect with and discover our Today’s Harvest blog authors and
              their broad range of financial and northeast agricultural
              expertise.
            </p>
          </div>

          <Link
            href={AUTHORS_PATH}
            className="primary-button authors-cta-button"
          >
            Meet the Authors
          </Link>
        </section>

        {/* Newsletter — immediately before the global footer */}
        <section className="newsletter">
          <h2 className="newsletter-title">
            Sign up for our Today&apos;s Harvest Blog.
          </h2>

          <p className="newsletter-subhead">
            Get the latest blog articles delivered to your inbox.
          </p>

          <div className="newsletter-input">
            <form
              className="newsletter-inner"
              action="#"
              method="post"
            >
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

              <button type="submit" className="signup-button">
                Sign Up
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Montserrat, Barlow } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-barlow",
  display: "swap",
});

const TITLE =
  "A Smarter Safety Net: What the New USDA Payment Rules Mean for Your Farm";

const DESCRIPTION =
  "New USDA payment limitation and eligibility rules for the 2026 crop year could change how farm operations qualify for benefits and how payments are calculated.";

const BLOG_PATH = "/resources/todays-harvest-Blog";
const AUTHORS_PATH = "/resources/meet-the-authors";

const ARTICLE_URL =
  "https://farm-funding.com/en/resources/todays-harvest-Blog/260630NewUSDAPaymentRulesForYourFarm.html";

export const metadata: Metadata = {
  title: `${TITLE} | Farm Funding`,
  description: DESCRIPTION,
  keywords:
    "USDA payment rules, 2026 crop year, AGI limitation, ARC PLC, farm management, tax planning, USDA payments",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/images/homepage/USDA-payment-rules.jpg",
        alt: "Agricultural operation representing USDA farm payment changes",
      },
    ],
  },
};

const RELATED_ARTICLES = [
  {
    category: "Knowledge Exchange Partner",
    categoryHref: `${BLOG_PATH}?category=knowledge-exchange-partner`,
    title:
      "United States Citizenship and Immigration Service Clears H-2A Path for Dairy Employers",
    href: undefined as string | undefined,
    date: "July 7, 2026",
  },
  {
    category: "Crop Insurance",
    categoryHref: `${BLOG_PATH}?category=crop-insurance`,
    title:
      "Understanding USDA’s Base Acre Review Opportunity: What Farmers Need to Know",
    href: `${BLOG_PATH}/260609CG_BaseAcreReviewForFarmers.html`,
    date: "June 9, 2026",
  },
  {
    category: "Tax Talks",
    categoryHref: `${BLOG_PATH}?category=tax-talks`,
    title: "Highlights from the Fiscal Year 2026-2027 NYS Budget",
    href: undefined as string | undefined,
    date: "June 4, 2026",
  },
];

const TAGS = [
  ["business management", "business-management"],
  ["farm management", "farm-management"],
  ["tax planning", "tax-planning"],
  ["taxes", "taxes"],
];

const pageStyles = `
  .usda-payment-page {
    --forest: #4f832a;
    --forest-dark: #3f6e20;
    --heading-brown: #5a4400;
    --heading-brown-dark: #493600;
    --clay: #496d83;
    --clay-dark: #3b5a6d;
    --cream: #ecf1e4;
    --grey-box: #f1f3f4;
    --grey-badge: #686868;
    --grey-text: #686868;
    --charcoal: #231f20;
    --line: #d8d8d8;

    color: var(--charcoal);
    background: #fff;
  }

  .usda-payment-page,
  .usda-payment-page * {
    box-sizing: border-box;
  }

  .usda-payment-page .article-hero {
    position: relative;
    width: 100%;
    padding: 24px 20px 28px;
    background: var(--clay);
    color: #fff;
  }

  .usda-payment-page .article-date {
    margin: 0 0 20px;
    text-align: right;
    color: #fff;
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.4;
  }

  .usda-payment-page .article-heading {
    max-width: 100%;
  }

  .usda-payment-page .article-category {
    display: inline-block;
    margin: 0 0 14px;
    padding: 6px 12px;
    border: 1px solid #fff;
    color: #fff;
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.3;
    text-decoration: none;
  }

  .usda-payment-page .article-category:hover,
  .usda-payment-page .article-author:hover {
    text-decoration: underline;
  }

  .usda-payment-page .article-title {
    margin: 0;
    color: var(--cream);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: clamp(28px, 7vw, 40px);
    font-weight: 700;
    line-height: 1.12;
    letter-spacing: -0.3px;
  }

  .usda-payment-page .article-byline {
    margin: 14px 0 0;
    color: #fff;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 15px;
    line-height: 1.5;
  }

  .usda-payment-page .article-author {
    color: #fff;
    text-decoration: underline;
  }

  .usda-payment-page .hero-image-wrap {
    width: 100%;
    max-width: 600px;
    margin: 20px auto 0;
  }

  .usda-payment-page .hero-image-wrap img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 645 / 403;
    object-fit: cover;
    object-position: center;
  }

  .usda-payment-page .article-copy {
    width: min(100% - 40px, 860px);
    margin: 0 auto;
    padding: 52px 0 20px;
  }

  .usda-payment-page .article-copy p,
  .usda-payment-page .article-copy li {
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 18px;
    line-height: 1.7;
  }

  .usda-payment-page .article-copy p {
    margin: 0 0 24px;
  }

  .usda-payment-page .article-copy h2 {
    margin: 38px 0 16px;
    color: var(--heading-brown);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 25px;
    font-weight: 700;
    line-height: 1.25;
  }

  .usda-payment-page .article-copy ul,
  .usda-payment-page .article-copy ol {
    margin: 0 0 24px;
    padding-left: 30px;
  }

  .usda-payment-page .article-copy li {
    margin-bottom: 8px;
  }

  .usda-payment-page .article-copy strong {
    font-weight: 700;
  }

  .usda-payment-page .article-copy a {
    color: var(--clay);
    text-decoration: underline;
  }

  .usda-payment-page .contact-wrap {
    padding: 10px 0 32px;
    text-align: center;
  }

  .usda-payment-page .primary-button {
    display: inline-flex;
    min-height: 50px;
    align-items: center;
    justify-content: center;
    padding: 13px 28px;
    background: var(--clay);
    color: #fff !important;
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.2;
    text-decoration: none !important;
  }

  .usda-payment-page .primary-button:hover {
    background: var(--clay-dark);
  }

  .usda-payment-page .tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
    width: min(100% - 40px, 860px);
    margin: 0 auto;
    padding: 22px 0 28px;
    border-top: 1px solid var(--line);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.7;
  }

  .usda-payment-page .tag-icon {
    width: 17px;
    height: 17px;
    color: var(--heading-brown);
  }

  .usda-payment-page .tags a {
    color: var(--clay);
    text-decoration: underline;
  }

  .usda-payment-page .tag-separator {
    margin: 0 2px;
    color: var(--grey-text);
  }

  .usda-payment-page .social-author-row {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 28px;
    width: min(100% - 40px, 1180px);
    margin: 0 auto;
    padding: 20px 0 52px;
  }

  .usda-payment-page .grey-box {
    min-height: 176px;
    padding: 22px;
    background: var(--grey-box);
  }

  .usda-payment-page .author-box {
    display: flex;
    align-items: center;
    gap: 22px;
  }

  .usda-payment-page .author-photo {
    display: block;
    width: 176px;
    height: 176px;
    flex: 0 0 176px;
    object-fit: cover;
    object-position: center;
  }

  .usda-payment-page .author-name {
    color: var(--heading-brown);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 21px;
    font-weight: 700;
    line-height: 1.3;
    text-decoration: underline;
  }

  .usda-payment-page .author-role {
    margin: 8px 0 0;
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 17px;
    font-weight: 700;
    line-height: 1.4;
  }

  .usda-payment-page .share-box {
    display: flex;
    min-height: 176px;
    align-items: center;
  }

  .usda-payment-page .share-label {
    margin: 0 0 16px;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 17px;
    font-weight: 600;
  }

  .usda-payment-page .share-list {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .usda-payment-page .share-list a {
    display: inline-flex;
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: #fff;
  }

  .usda-payment-page .share-list svg {
    width: 22px;
    height: 22px;
  }

  .usda-payment-page .share-x { background: #14171a; }
  .usda-payment-page .share-facebook { background: #1877f2; }
  .usda-payment-page .share-linkedin { background: #0a66c2; }
  .usda-payment-page .share-email { background: #34a853; }

  .usda-payment-page .related-wrap {
    width: 100%;
    background: var(--cream);
  }

  .usda-payment-page .related {
    width: min(100% - 40px, 1180px);
    margin: 0 auto;
    padding: 34px 0 54px;
  }

  .usda-payment-page .section-title {
    margin: 0;
    color: var(--heading-brown);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.25;
  }

  .usda-payment-page .related-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 34px;
    margin-top: 20px;
  }

  .usda-payment-page .related-card { padding-top: 26px; }

  .usda-payment-page .related-category {
    display: inline-block;
    padding: 6px 14px;
    background: var(--grey-badge);
    color: #fff;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    text-decoration: none;
  }

  .usda-payment-page .related-title {
    display: block;
    margin-top: 26px;
    color: var(--heading-brown);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 21px;
    font-weight: 700;
    line-height: 1.35;
    text-decoration: none;
  }

  .usda-payment-page .related-title:hover {
    color: var(--heading-brown-dark);
    text-decoration: underline;
  }

  .usda-payment-page .related-date {
    margin: 26px 0 0;
    color: var(--grey-text);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .usda-payment-page .authors-cta {
    display: grid;
    grid-template-columns: minmax(0, 2fr) minmax(240px, 1fr);
    align-items: center;
    gap: 28px;
    width: min(100% - 40px, 1180px);
    margin: 0 auto;
    padding: 50px 0;
  }

  .usda-payment-page .authors-cta-title {
    margin: 0 0 14px;
    color: var(--heading-brown);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.25;
  }

  .usda-payment-page .authors-cta-text {
    max-width: 900px;
    margin: 0;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 20px;
    line-height: 1.5;
  }

  .usda-payment-page .authors-cta-button {
    justify-self: end;
    min-width: 205px;
  }

  .usda-payment-page .newsletter {
    width: 100%;
    padding: 60px 20px;
    background: var(--forest);
    color: #fff;
    text-align: center;
  }

  .usda-payment-page .newsletter-title {
    margin: 0;
    color: #fff;
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 44px;
    font-weight: 700;
    line-height: 1.15;
  }

  .usda-payment-page .newsletter-subhead {
    margin: 22px 0 0;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 21px;
    line-height: 1.4;
  }

  .usda-payment-page .newsletter-form-wrap {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }

  .usda-payment-page .newsletter-form {
    display: flex;
    align-items: flex-end;
    gap: 10px;
  }

  .usda-payment-page .newsletter-group { text-align: left; }

  .usda-payment-page .newsletter-label {
    display: block;
    margin-bottom: 9px;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 18px;
    font-weight: 700;
  }

  .usda-payment-page .newsletter-email {
    width: 245px;
    height: 44px;
    border: 0;
    border-radius: 2px;
    padding: 0 13px;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 17px;
    outline: none;
  }

  .usda-payment-page .required {
    margin-top: 8px;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 14px;
    font-style: italic;
  }

  .usda-payment-page .signup-button {
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

  .usda-payment-page .signup-button:hover {
    background: var(--forest-dark);
  }

  @media (min-width: 992px) {
    .usda-payment-page .article-hero {
      height: 312px;
      padding: 15px 67px 0;
      overflow: visible;
    }

    .usda-payment-page .article-heading { max-width: 1480px; }

    .usda-payment-page .article-category {
      margin-bottom: 34px;
      padding: 7px 14px;
      font-size: 14px;
      line-height: 1.2;
    }

    .usda-payment-page .article-title {
      max-width: 1480px;
      font-size: 52px;
      line-height: 1.08;
    }

    .usda-payment-page .article-byline {
      margin-top: 30px;
      font-size: 17px;
    }

    .usda-payment-page .hero-image-wrap {
      width: 645px;
      max-width: 645px;
      margin: -37px auto 0;
    }

    .usda-payment-page .hero-image-wrap img {
      height: 403px;
      aspect-ratio: auto;
    }

    .usda-payment-page .article-copy { padding-top: 60px; }
  }

  @media (max-width: 991px) {
    .usda-payment-page .article-title { font-size: 45px; }

    .usda-payment-page .article-copy,
    .usda-payment-page .tags {
      width: min(100% - 56px, 860px);
    }

    .usda-payment-page .social-author-row,
    .usda-payment-page .related,
    .usda-payment-page .authors-cta {
      width: calc(100% - 56px);
    }
  }

  @media (max-width: 767px) {
    .usda-payment-page .article-hero {
      padding: 20px 16px 24px;
    }

    .usda-payment-page .article-date {
      margin-bottom: 22px;
      text-align: left;
      font-size: 14px;
    }

    .usda-payment-page .article-category {
      margin-bottom: 14px;
      font-size: 14px;
    }

    .usda-payment-page .article-title {
      font-size: 35px;
      line-height: 1.12;
    }

    .usda-payment-page .article-byline {
      margin-top: 16px;
      font-size: 16px;
    }

    .usda-payment-page .hero-image-wrap {
      width: 100%;
      max-width: none;
      margin-top: 20px;
    }

    .usda-payment-page .hero-image-wrap img {
      height: 230px;
      aspect-ratio: auto;
    }

    .usda-payment-page .article-copy {
      width: calc(100% - 28px);
      padding-top: 34px;
    }

    .usda-payment-page .article-copy p,
    .usda-payment-page .article-copy li {
      font-size: 17px;
      line-height: 1.72;
    }

    .usda-payment-page .article-copy h2 {
      margin-top: 32px;
      font-size: 23px;
    }

    .usda-payment-page .tags {
      width: calc(100% - 28px);
      font-size: 15px;
    }

    .usda-payment-page .social-author-row {
      width: calc(100% - 28px);
      grid-template-columns: 1fr;
      gap: 18px;
      padding-bottom: 35px;
    }

    .usda-payment-page .grey-box {
      min-height: 0;
      padding: 18px;
    }

    .usda-payment-page .author-box {
      align-items: flex-start;
      gap: 15px;
    }

    .usda-payment-page .author-photo {
      width: 96px;
      height: 96px;
      flex-basis: 96px;
    }

    .usda-payment-page .author-name { font-size: 20px; }
    .usda-payment-page .author-role { font-size: 15px; }

    .usda-payment-page .related {
      width: calc(100% - 28px);
      padding-top: 25px;
      padding-bottom: 35px;
    }

    .usda-payment-page .section-title { font-size: 27px; }

    .usda-payment-page .related-grid {
      grid-template-columns: 1fr;
      gap: 25px;
    }

    .usda-payment-page .related-title {
      margin-top: 20px;
      font-size: 20px;
    }

    .usda-payment-page .related-date {
      margin-top: 20px;
    }

    .usda-payment-page .authors-cta {
      width: calc(100% - 28px);
      grid-template-columns: 1fr;
      gap: 18px;
      padding: 38px 0;
    }

    .usda-payment-page .authors-cta-title { font-size: 27px; }

    .usda-payment-page .authors-cta-text {
      font-size: 17px;
      line-height: 1.55;
    }

    .usda-payment-page .authors-cta-button {
      justify-self: start;
    }

    .usda-payment-page .newsletter {
      padding: 48px 14px 52px;
    }

    .usda-payment-page .newsletter-title { font-size: 31px; }

    .usda-payment-page .newsletter-subhead {
      margin-top: 18px;
      font-size: 17px;
    }

    .usda-payment-page .newsletter-form-wrap {
      margin-top: 24px;
    }

    .usda-payment-page .newsletter-form {
      width: 100%;
      flex-direction: column;
      align-items: stretch;
    }

    .usda-payment-page .newsletter-email,
    .usda-payment-page .signup-button {
      width: 100%;
    }
  }
`;

export default function USDAPaymentRulesPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      <main
        className={`usda-payment-page w-full overflow-x-hidden ${montserrat.variable} ${barlow.variable}`}
      >
        <section className="article-hero">
          <p className="article-date">June 30, 2026</p>

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
                href={`${AUTHORS_PATH}#Marty-Knapp`}
                className="article-author"
              >
                Marty Knapp, CPA
              </Link>
            </p>
          </div>
        </section>

        <div className="hero-image-wrap">
          <img
            src="/images/homepage/USDA-payment-rules.jpg"
            alt="Agricultural operation representing USDA farm payment changes"
          />
        </div>

        <article className="article-copy">
          <p>
            Effective with the 2026 crop year, USDA has updated payment
            limitation and eligibility rules. The changes are intended to
            modernize how benefits are calculated and who can qualify.
          </p>

          <h2>What’s Changing?</h2>

          <p>
            Under the updated rules, LLCs and S-Corporations can be treated as
            qualified pass-through structures alongside partnerships and joint
            ventures. Payment eligibility is considered at the owner level
            rather than simply at the entity level.
          </p>

          <ul>
            <li>
              Pass-through structures can now be evaluated based on the
              contributions of individual owners.
            </li>
            <li>
              The $900,000 Average AGI test and payment limitations are tested
              at the owner level for the applicable test years.
            </li>
            <li>
              The actively-engaged rules have been clarified, including how
              wages and guaranteed payments are treated.
            </li>
            <li>
              Qualified owners may be eligible for separate payment limits,
              with provisions allowing annual inflation adjustments.
            </li>
            <li>
              Certain disaster and conservation programs may remain available
              to producers who exceed the AGI limitation when the applicable
              farming-income test is satisfied.
            </li>
            <li>
              Every entity will need a new Form 902E filed by September 15,
              2026.
            </li>
          </ul>

          <h2>How these changes could impact your operation</h2>

          <ul>
            <li>
              Core programs such as ARC and PLC carry a base limit of $155,000
              per person, per year.
            </li>
            <li>
              A multi-owner operation may be able to access multiple limits,
              one for each qualified owner.
            </li>
            <li>
              Liability-protection structures do not automatically eliminate
              program access.
            </li>
            <li>
              Ownership and entity structure may be worth reassessing in the
              context of the farm’s broader goals.
            </li>
            <li>
              Tax planning becomes increasingly important as the payment and
              income limitations interact.
            </li>
          </ul>

          <h2>Next Steps</h2>

          <p>
            To benefit from the updated rules, proactive review is important.
          </p>

          <ol>
            <li>
              Reassess the structure of the operation and make sure ownership
              reflects how the farm operates today.
            </li>
            <li>
              Validate active engagement by reviewing actual labor, management
              and capital contributions.
            </li>
            <li>
              Update operating plans and complete the required FSA filings by
              September 15, 2026.
            </li>
            <li>
              Coordinate tax, financial and crop-insurance advisors before
              making structural changes.
            </li>
            <li>
              Keep Average AGI and applicable farming-income calculations
              current so potential limitations are identified early.
            </li>
          </ol>

          <h2>Farm Funders&apos;s perspective</h2>

          <p>
            At Farm Funding, we’re focused on helping you translate policy
            changes into practical decisions so your operation remains
            compliant while being better positioned for what comes next.
          </p>

          <div className="contact-wrap">
            <Link href="/contact" className="primary-button">
              Contact Us Today!
            </Link>
          </div>
        </article>

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

        <section
          className="social-author-row"
          aria-label="Article author and sharing"
        >
          <div className="grey-box author-box">
            <img
              src="/images/homepage/MartyKnapp_web.jpg"
              alt="Professional portrait of Marty Knapp"
              className="author-photo"
            />

            <div>
              <Link
                href={`${AUTHORS_PATH}#Marty-Knapp`}
                className="author-name"
              >
                Marty Knapp, CPA
              </Link>

              <p className="author-role">
                Farm Tax and Business Advisory
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
                    )}&url=${encodeURIComponent(ARTICLE_URL)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on X"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    className="share-facebook"
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      ARTICLE_URL
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Facebook"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22C18.34 21.21 22 17.06 22 12.06z" />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    className="share-linkedin"
                    href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
                      ARTICLE_URL
                    )}&title=${encodeURIComponent(TITLE)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z" />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    className="share-email"
                    href={`mailto:?subject=${encodeURIComponent(
                      TITLE
                    )}&body=${encodeURIComponent(ARTICLE_URL)}`}
                    aria-label="Share by email"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="related-wrap">
          <div className="related">
            <h2 className="section-title">You Might Also Like</h2>

            <div className="related-grid">
              {RELATED_ARTICLES.map((item) => (
                <article key={item.title} className="related-card">
                  <Link
                    href={item.categoryHref}
                    className="related-category"
                  >
                    {item.category}
                  </Link>

                  {item.href ? (
                    <Link href={item.href} className="related-title">
                      {item.title}
                      <span aria-hidden="true"> ›</span>
                    </Link>
                  ) : (
                    <span className="related-title">{item.title}</span>
                  )}

                  <p className="related-date">{item.date}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="authors-cta">
          <div>
            <h2 className="authors-cta-title">Meet the Authors</h2>

            <p className="authors-cta-text">
              Connect with and discover our Today&apos;s Harvest blog authors
              and their broad range of financial and northeast agricultural
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

        <section className="newsletter">
          <h2 className="newsletter-title">
            Sign up for our Today&apos;s Harvest Blog.
          </h2>

          <p className="newsletter-subhead">
            Get the latest blog articles delivered to your inbox.
          </p>

          <div className="newsletter-form-wrap">
            <form className="newsletter-form" action="#" method="post">
              <div className="newsletter-group">
                <label
                  htmlFor="usda-newsletter-email"
                  className="newsletter-label"
                >
                  Enter your email*
                </label>

                <input
                  id="usda-newsletter-email"
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

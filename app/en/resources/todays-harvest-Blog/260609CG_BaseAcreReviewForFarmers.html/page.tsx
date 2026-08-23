import type { Metadata } from "next";
import Link from "next/link";

const TITLE = "Understanding USDA's Base Acre Review Opportunity: What Farmers Need to Know";
const DESCRIPTION =
  "The U.S. Department of Agriculture (USDA) has announced a significant opportunity for landowners to review and potentially increase their base acres under the Agriculture Risk Coverage (ARC) and Price Loss Coverage (PLC) programs.";

const BLOG_PATH = "/resources/todays-harvest-Blog";
const AUTHORS_PATH = "/resources/meet-the-authors";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "Understanding USDA's Base Acre Review Opportunity, Farm Funders, crop insurance, base acres, USDA, Jeremy Forrett",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/images/homepage/DFS_2018.jpg",
        alt: "Couple of farmers examining a field of cereal crops",
      },
    ],
  },
};

const RELATED_ARTICLES = [
  {
    category: "Tax Talks",
    categoryHref: `${BLOG_PATH}?category=tax-talks`,
    title: "Highlights from the Fiscal Year 2026-2027 NYS Budget",
    href: `${BLOG_PATH}/260604FarmHighlightsNYSBudget`,
    date: "June 4, 2026",
  },
  {
    category: "Knowledge Exchange Partner",
    categoryHref: "/resources/Industry-Trends-and-Outlooks?category=knowledge-exchange-partner",
    title: "United States Citizenship and Immigration Service Clears H-2A Path for Dairy Employers",
    href: "/resources/Industry-Trends-and-Outlooks/Reports/2607KEP_H2AForDairyEmployers.html",
    date: "July 7, 2026",
  },
  {
    category: "Tax Talks",
    categoryHref: `${BLOG_PATH}?category=tax-talks`,
    title: "A Smarter Safety Net: What the New USDA Payment Rules Mean for Your Farm",
    href: `${BLOG_PATH}/260630NewUSDAPaymentRulesForYourFarm`,
    date: "June 30, 2026",
  },
];

const styles = `
  .basereview-page,
  .basereview-page * { box-sizing: border-box; }

  .basereview-page {
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

  .basereview-page .hero {
    position: relative;
    width: 100%;
    height: 364px;
    background: var(--clay);
    color: #fff;
  }

  .basereview-page .hero-inner {
    width: min(1800px, calc(100% - 120px));
    height: 100%;
    margin: 0 auto;
    padding: 16px 7px 0;
  }

  .basereview-page .category {
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

  .basereview-page .category:hover,
  .basereview-page .author-link:hover { text-decoration: underline; }

  .basereview-page h1 {
    max-width: none;
    margin: 0;
    color: var(--cream);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 46px;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.5px;
  }

  .basereview-page .byline {
    margin: 25px 0 0;
    color: #fff;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.4;
  }

  .basereview-page .author-link {
    color: #fff;
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .basereview-page .image-wrap {
    position: relative;
    z-index: 2;
    width: 750px;
    max-width: calc(100% - 28px);
    margin: -253px auto 0;
  }

  .basereview-page .image-wrap img {
    display: block;
    width: 100%;
    height: auto;
    margin: 0;
    object-fit: cover;
  }

  .basereview-page .content {
    width: min(1106px, calc(100% - 56px));
    margin: 48px auto 0;
  }

  .basereview-page .copy {
    width: 100%;
    padding-bottom: 28px;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    color: var(--grey);
  }

  .basereview-page .copy p,
  .basereview-page .copy li {
    margin: 0 0 24px;
    color: var(--grey);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.72;
  }

  .basereview-page .copy strong { font-weight: 700; }

  .basereview-page .copy h3,
  .basereview-page .copy h4 {
    color: var(--grey);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-weight: 700;
    line-height: 1.2;
  }

  .basereview-page .copy h3 {
    margin: 50px 0 35px;
    font-size: 30px;
    letter-spacing: -0.25px;
  }

  .basereview-page .copy ul {
    margin: 0 0 20px;
    padding-left: 35px;
  }

  .basereview-page .copy li { margin-bottom: 14px; padding-left: 0; }
  .basereview-page .copy li:last-child { margin-bottom: 24px; }

  .basereview-page .copy a {
    color: var(--clay);
    text-decoration: underline;
    text-underline-offset: 2px;
    text-decoration-thickness: 1px;
  }

  .basereview-page .copy a:hover { color: var(--forest); }

  .basereview-page .contact {
    padding: 4px 0 28px;
    text-align: center;
  }

  .basereview-page .button {
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

  .basereview-page .button:hover { background: var(--clay-dark); }

  .basereview-page .tags {
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

  .basereview-page .tags svg { width: 17px; height: 17px; margin-right: 2px; color: var(--forest); }
  .basereview-page .tags a { color: var(--clay); text-decoration: underline; }
  .basereview-page .tags a:hover { color: var(--forest); }
  .basereview-page .tag-separator { color: var(--grey); margin-right: 2px; }

  .basereview-page .author-share {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px;
    padding: 20px 0 52px;
  }

  .basereview-page .box { min-height: 176px; padding: 22px; background: var(--light); }
  .basereview-page .author-box { display: flex; align-items: center; gap: 22px; }
  .basereview-page .author-photo { width: 176px; height: 176px; flex: 0 0 176px; object-fit: cover; }
  .basereview-page .author-name {
    color: var(--forest);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 21px;
    font-weight: 700;
    line-height: 1.3;
    text-decoration: underline;
  }
  .basereview-page .author-role {
    margin: 8px 0 0;
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 17px;
    font-weight: 700;
    line-height: 1.4;
  }

  .basereview-page .share-box { display: flex; align-items: center; }
  .basereview-page .share-label {
    margin: 0 0 16px;
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 17px;
    font-weight: 600;
  }
  .basereview-page .share-list { display: flex; gap: 10px; margin: 0; padding: 0; list-style: none; }
  .basereview-page .share-list a {
    display: inline-flex;
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: #fff;
    text-decoration: none;
  }
  .basereview-page .share-list svg { width: 22px; height: 22px; }
  .basereview-page .share-x { background: #14171a; }
  .basereview-page .share-facebook { background: #1877f2; }
  .basereview-page .share-linkedin { background: #0a66c2; }
  .basereview-page .share-email { background: #34a853; }

  .basereview-page .related-wrap { width: 100%; background: var(--cream); }
  .basereview-page .related { width: min(1800px, calc(100% - 120px)); margin: 0 auto; padding: 34px 7px 54px; }
  .basereview-page .section-title {
    margin: 0;
    color: var(--forest);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.25;
  }
  .basereview-page .related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 34px; margin-top: 20px; }
  .basereview-page .related-card { padding-top: 26px; }
  .basereview-page .related-category {
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
  .basereview-page .related-title {
    display: block;
    margin-top: 26px;
    color: var(--forest);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 21px;
    font-weight: 700;
    line-height: 1.35;
    text-decoration: none;
  }
  .basereview-page .related-date {
    margin: 26px 0 0;
    color: var(--grey);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .basereview-page .authors-cta {
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    gap: 28px;
    width: min(1800px, calc(100% - 120px));
    margin: 0 auto;
    padding: 50px 7px;
  }
  .basereview-page .authors-copy { max-width: 900px; }
  .basereview-page .authors-text {
    margin: 14px 0 0;
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 20px;
    line-height: 1.5;
  }
  .basereview-page .authors-button { justify-self: end; min-width: 205px; }

  .basereview-page .newsletter {
    width: 100%;
    padding: 60px 20px;
    background: var(--forest);
    color: #fff;
    text-align: center;
  }
  .basereview-page .newsletter-title {
    margin: 0;
    color: #fff;
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 44px;
    font-weight: 700;
    line-height: 1.15;
  }
  .basereview-page .newsletter-subhead {
    margin: 22px 0 0;
    color: #fff;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 21px;
    line-height: 1.4;
  }
  .basereview-page .newsletter-form { display: flex; justify-content: center; margin-top: 30px; }
  .basereview-page .newsletter-inner { display: flex; align-items: flex-end; gap: 10px; }
  .basereview-page .newsletter-group { text-align: left; }
  .basereview-page .newsletter-label {
    display: block;
    margin-bottom: 9px;
    color: #fff;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 18px;
    font-weight: 700;
  }
  .basereview-page .newsletter-email {
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
  .basereview-page .required {
    margin-top: 8px;
    color: #fff;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 14px;
    font-style: italic;
  }
  .basereview-page .signup {
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
    .basereview-page h1 { font-size: 40px; }
  }

  @media (max-width: 991px) {
    .basereview-page .hero { height: auto; min-height: 330px; }
    .basereview-page .hero-inner { width: calc(100% - 56px); padding: 22px 0 150px; }
    .basereview-page h1 { font-size: 36px; }
    .basereview-page .image-wrap { margin-top: -110px; width: min(750px, calc(100% - 56px)); }
    .basereview-page .content { width: calc(100% - 56px); margin-top: 42px; }
    .basereview-page .related,
    .basereview-page .authors-cta { width: calc(100% - 56px); }
  }

  @media (max-width: 767px) {
    .basereview-page .hero { min-height: 0; }
    .basereview-page .hero-inner { width: 100%; padding: 24px 14px 135px; }
    .basereview-page .category { margin-bottom: 20px; font-size: 14px; }
    .basereview-page h1 { font-size: 30px; line-height: 1.15; }
    .basereview-page .byline { margin-top: 17px; font-size: 16px; }
    .basereview-page .image-wrap { width: calc(100% - 28px); margin-top: -105px; }
    .basereview-page .content { width: calc(100% - 28px); margin-top: 30px; }
    .basereview-page .copy p,
    .basereview-page .copy li { font-size: 17px; line-height: 1.72; }
    .basereview-page .copy h3 { margin-top: 35px; margin-bottom: 24px; font-size: 25px; }
    .basereview-page .author-share { grid-template-columns: 1fr; gap: 18px; padding-bottom: 35px; }
    .basereview-page .box { min-height: 0; padding: 18px; }
    .basereview-page .author-box { align-items: flex-start; gap: 15px; }
    .basereview-page .author-photo { width: 96px; height: 96px; flex-basis: 96px; }
    .basereview-page .related { width: calc(100% - 28px); padding: 25px 0 35px; }
    .basereview-page .related-grid { grid-template-columns: 1fr; gap: 25px; }
    .basereview-page .authors-cta { grid-template-columns: 1fr; width: calc(100% - 28px); gap: 18px; padding: 38px 0; }
    .basereview-page .authors-button { justify-self: start; }
    .basereview-page .newsletter { padding: 48px 14px 52px; }
    .basereview-page .newsletter-title { font-size: 31px; }
    .basereview-page .newsletter-subhead { font-size: 17px; }
    .basereview-page .newsletter-inner { width: 100%; flex-direction: column; align-items: stretch; }
    .basereview-page .newsletter-email,
    .basereview-page .signup { width: 100%; }
  }
`;

export default function BaseAcreReviewPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="basereview-page">
        <section className="hero">
          <div className="hero-inner">
            <Link href={`${BLOG_PATH}?category=crop-insurance`} className="category">
              Crop Insurance
            </Link>

            <h1 id="maincontent">{TITLE}</h1>

            <p className="byline">
              By:{" "}
              <Link href={`${AUTHORS_PATH}#Jeremy-Forrett`} className="author-link">
                Jeremy Forrett
              </Link>
            </p>
          </div>
        </section>

        <div className="image-wrap">
          <img
            src="/images/homepage/DFS_2018.jpg"
            alt="Couple of farmers examining a field of cereal crops"
          />
        </div>

        <div className="content">
          <article className="copy">
            <p>
              The U.S. Department of Agriculture (USDA) has announced a significant opportunity for
              landowners to review and potentially increase their base acres under the Agriculture
              Risk Coverage (ARC) and Price Loss Coverage (PLC) programs. For many operations, this
              represents the first opportunity in more than two decades to align farm program base
              acres with more recent planting history.
            </p>

            <p>
              Beginning June 1 through August 31, 2026, eligible landowners can review their Base
              Allocation Summary and determine whether additional base acres may be available for
              their operation. USDA estimates that up to 30 million base acres nationwide could be
              added through this process.
            </p>

            <h3>Why This Matters</h3>

            <p>
              ARC and PLC remain cornerstone components of the federal farm safety net, providing
              financial protection when revenues or commodity prices decline.
            </p>

            <p>
              While these programs do not replace crop insurance, they play a critical role in
              strengthening a farm&rsquo;s overall risk management strategy, particularly during
              periods of volatility.
            </p>

            <p>
              Many farms have evolved significantly since base acres were last established.
              Expansion, changes in crop mix and shifting production patterns may mean current base
              acres no longer reflect today&rsquo;s operation. This USDA initiative is designed to
              address that gap by reconnecting program support to more recent planting history.
            </p>

            <h3>Who May Be Eligible?</h3>

            <p>
              Eligibility is generally tied to a farm&rsquo;s planting and prevented planting history
              from 2019 through 2023. Farms may qualify for additional base acres if:
            </p>

            <ul>
              <li>Average planted and prevented planted acres exceed current base acreage levels</li>
              <li>Covered commodities were produced during the eligibility period</li>
            </ul>

            <p>
              Because base acres are tied to the land &mdash; not the operator &mdash; and
              calculations can be complex, each situation requires a careful, individualized review.
            </p>

            <h3>Key Dates to Act</h3>

            <ul>
              <li><strong>June 1, 2026</strong> &ndash; Base Allocation Summaries available for review</li>
              <li><strong>August 31, 2026</strong> &ndash; Deadline to review, verify and take action</li>
              <li><strong>2026 Crop Year and Beyond</strong> &ndash; Updated base acres apply to ARC and PLC participation</li>
            </ul>

            <p>
              This is a defined and limited window. Missing the deadline may mean missing a
              long-term opportunity to strengthen your farm&rsquo;s safety net.
            </p>

            <h3>How This Fits Into Your Risk Management Strategy</h3>

            <p>
              Base acres are a foundational driver of ARC and PLC program benefits as they influence
              payment eligibility and long-term program value.
            </p>

            <p>But federal programs don&rsquo;t operate in isolation. The most effective operations take an integrated approach, aligning:</p>

            <ul>
              <li>ARC and PLC elections</li>
              <li>Crop insurance coverage levels</li>
              <li>Marketing and pricing strategies</li>
              <li>Whole-farm financial planning</li>
            </ul>

            <p>
              The opportunity to update base acres should be evaluated within that broader
              framework, not as a standalone decision.
            </p>

            <h3>How Farm Funding Can Help</h3>

            <p>
              USDA programs continue to evolve, creating both opportunity and complexity. That&rsquo;s
              where having the right advisory team matters.
            </p>

            <p>As your trusted USDA program advisor, Farm Funding helps you move from awareness to action with clarity and confidence:</p>

            <ul>
              <li><strong>Review Your Base Allocation Summary</strong> &mdash; Validate planting history and identify potential eligibility for additional acres</li>
              <li><strong>Evaluate Program Impact</strong> &mdash; Understand how changes may influence ARC and PLC participation</li>
              <li><strong>Align With Crop Insurance Strategy</strong> &mdash; Integrate federal programs with your existing risk management approach</li>
              <li><strong>Coordinate With FSA and Advisors</strong> &mdash; Ensure alignment across your operation, landowners and USDA offices</li>
              <li><strong>Incorporate Into a Broader Plan</strong> &mdash; Position your operation for long-term success through a disciplined, integrated strategy</li>
            </ul>

            <p>
              Every operation is different, but disciplined evaluation and timely execution are what
              separate missed opportunities from realized value.
            </p>

            <h3>Take Action</h3>

            <p>If you receive a Base Allocation Summary from USDA, don&rsquo;t set it aside.</p>

            <p>Review the information carefully. Validate your data. Engage your advisor team.</p>

            <p>
              Opportunities to update base acres are rare. This is a moment to ensure your operation
              is properly positioned within today&rsquo;s USDA safety net programs and aligned for
              the future.
            </p>

            <p>
              For guidance on USDA programs, ARC/PLC participation, or how this fits into your
              broader risk management strategy, connect with your Farm Funding representative.
            </p>

            <div className="contact">
              <Link href="/CROP-INSURANCE/Find-An-Agent" className="button">
                Contact an Agent
              </Link>
            </div>
          </article>

          <div className="tags">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.41l9 9c.36.36.86.59 1.41.59.55 0 1.05-.23 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5 8 5.67 8 6.5 7.33 8 6.5 8z" />
            </svg>
            <span>Tags:</span>{" "}
            {[
              ["business management", "business-management"],
              ["crop insurance", "crop-insurance"],
              ["risk management", "risk-management"],
            ].map(([label, slug], index, arr) => (
              <span key={slug}>
                <Link href={`${BLOG_PATH}?tag=${slug}`}>{label}</Link>
                {index < arr.length - 1 && <span className="tag-separator">,</span>}
              </span>
            ))}
          </div>

          <section className="author-share" aria-label="Article author and sharing">
            <div className="box author-box">
              <img
                src="/images/homepage/DFS_2018.jpg"
                alt="Professional business portrait of Jeremy Forrett"
                className="author-photo"
              />
              <div>
                <Link href={`${AUTHORS_PATH}#Jeremy-Forrett`} className="author-name">
                  Jeremy Forrett
                </Link>
                <p className="author-role">Retail Financial Services Leader</p>
              </div>
            </div>

            <div className="box share-box">
              <div>
                <p className="share-label">Share this post on</p>
                <ul className="share-list">
                  <li>
                    <a
                      className="share-x"
                      href={`https://twitter.com/share?text=${encodeURIComponent(TITLE)}&url=${encodeURIComponent("https://farm-funders.com/en/resources/todays-harvest-Blog/260609CG_BaseAcreReviewForFarmers")}`}
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
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://farm-funders.com/en/resources/todays-harvest-Blog/260609CG_BaseAcreReviewForFarmers")}`}
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
                      href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent("https://farm-funders.com/en/resources/todays-harvest-Blog/260609CG_BaseAcreReviewForFarmers")}&title=${encodeURIComponent(TITLE)}`}
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
                      href={`mailto:?subject=${encodeURIComponent(TITLE)}&body=${encodeURIComponent("https://farm-funders.com/en/resources/todays-harvest-Blog/260609CG_BaseAcreReviewForFarmers.html")}`}
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
                    {item.title} <span aria-hidden="true">&rsaquo;</span>
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
              Connect with and discover our Today&rsquo;s Harvest blog authors and their broad
              range of financial and northeast agricultural expertise.
            </p>
          </div>
          <Link href={AUTHORS_PATH} className="button authors-button">
            Meet the Authors
          </Link>
        </section>

        <section className="newsletter">
          <h2 className="newsletter-title">Sign up for our Today&apos;s Harvest Blog.</h2>
          <p className="newsletter-subhead">Get the latest blog articles delivered to your inbox.</p>
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

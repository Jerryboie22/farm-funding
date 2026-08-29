import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

const TITLE = "2025 Northeast Dairy Farm Summary & Mid-Year Outlook";
const DESCRIPTION = TITLE;

const ARTICLE_URL =
  "https://farm-funding.vercel.app/resources/Industry-Trends-and-Outlooks/Reports/2025NEDairyFarmSummary2026MidYearOutlook";

const OUTLOOKS_PATH = "/resources/Industry-Trends-and-Outlooks";
const BLOG_PATH = "/resources/todays-harvest-Blog";
const AUTHORS_PATH = "/resources/meet-the-authors";

const CATEGORY = "Ag Economy";
const CATEGORY_HREF = `${OUTLOOKS_PATH}?category=ag-economy`;
const DATE = "July 10, 2026";

const ISSUU_EMBED_SRC =
  "https://e.issuu.com/embed.html?backgroundColor=%23ffffff&backgroundColorFullscreen=%23ffffff&d=26-0018_fce_dairyfarmsummary2025_final_pages&hideIssuuLogo=true&showOtherPublicationsAsSuggestions=true&u=farmcrediteast";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "2025 Northeast Dairy Farm Summary & 2026 Mid-Year Outlook, Chris Laughton, Farm Funding, Northeast Dairy, Dairy",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: ARTICLE_URL,
    type: "article",
    publishedTime: "2026-07-10",
  },
};

const HIGHLIGHTS: string[] = [
  "Net earnings for our sample of 136 Northeast farms increased by 34%, to an average of $791 per cow (when averaged across size categories) in 2025,¹ from $592 per cow in 2024.",
  "Total costs increased by 4% from 2024 to 2025. Total costs including depreciation and family living per cwt. increased by $1.07 per cwt., from $26.54 to $27.61 in 2025.",
  "Net cost of production² (NCOP) decreased to $19.83 per cwt., $1.66 lower than 2024’s $21.49. Multiple factors contributed to this decrease including greater non-milk farm income and larger herd sizes in our sample.",
  "Feed expense, a farm’s largest cost, increased from $1,760 per cow in 2024 to $2,002 per cow in 2025.",
  "Productivity increased. Per cow production in our sample herds was 3.4% greater than the prior year. Average cows per worker increased from 47 to 51.",
  "Cash flow was sufficient, on average, to meet all financial commitments (e.g., operating expenses, debt repayment, family living and income taxes), resulting in an average cash margin (excluding government payments) per cwt. of $2.12.³",
  "Percent net worth in our sample declined to 62%. This was largely due to an increase in total liabilities. Total debt-per-cow increased from $6,514 to $7,744.",
];

const TAGS: [string, string][] = [
  ["ag economy", "ag-economy"],
  ["outlook", "ag-outlook"],
  ["dairy", "dairy"],
];

const RELATED_ARTICLES = [
  {
    category: "Public Policy",
    categoryHref: `${BLOG_PATH}?category=public-policy`,
    title:
      "2026 Farm Bill Takes Shape: Comparing the House and Senate Proposals",
    href: `${BLOG_PATH}/260707_2026FarmBillTakesShape`,
    date: "July 7, 2026",
  },
  {
    category: "Knowledge Exchange Partner",
    categoryHref: `${OUTLOOKS_PATH}?category=Knowledge%20Exchange%20Partner`,
    title:
      "United States Citizenship and Immigration Service Clears H-2A Path for Dairy Employers",
    href: `${OUTLOOKS_PATH}/Reports/2607KEP_H2AForDairyEmployers`,
    date: "July 7, 2026",
  },
  {
    category: "Business Tips and Tools",
    categoryHref: `${BLOG_PATH}?category=business-tips-and-tools`,
    title: "Tariff Relief Program Available for New York Producers",
    href: "https://farm-funding.vercel.app/resources/todays-harvest-Blog/tariff-relief-program-available-for-new-york-producers",
    date: "July 1, 2026",
  },
];

const styles = `
  .dfs-page,
  .dfs-page * {
    box-sizing: border-box;
  }

  .dfs-page {
    --clay: #496d83;
    --clay-dark: #3b5a6d;
    --forest: #4f832a;
    --olive: #5a4400;
    --orange: #c36d15;
    --cream: #ecf1e4;
    --grey: #686868;
    --line: #d8d8d8;
    --charcoal: #231f20;

    width: 100%;
    overflow-x: clip;
    background: #fff;
    color: var(--charcoal);
  }

  /* ============================================================
     HERO
     ============================================================ */

  .dfs-page .hero {
    position: relative;
    width: 100%;
    padding-bottom: 88px;
    background: var(--clay);
    color: #fff;
  }

  .dfs-page .hero-inner {
    width: min(1800px, calc(100% - 120px));
    margin: 0 auto;
    padding: 40px 7px 0;
  }

  .dfs-page .date {
    margin: 0 0 16px;
    color: #fff;
    text-align: right;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
  }

  .dfs-page .category {
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

  .dfs-page .category:hover {
    text-decoration: underline;
  }

  .dfs-page h1 {
    max-width: 1220px;
    margin: 0;
    color: var(--cream);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 52px;
    font-weight: 700;
    line-height: 1.08;
    letter-spacing: -0.7px;
  }

  /* ============================================================
     ARTICLE CONTENT
     Single-column layout — deliberately no sidebar / TOC.
     ============================================================ */

  .dfs-page .article-container {
    width: min(984px, calc(100% - 40px));
    margin: 48px auto 0;
  }

  .dfs-page .copy {
    width: 100%;
    max-width: 820px;
    margin: 0 auto;
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
  }

  .dfs-page .copy p {
    margin: 0 0 24px;
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.68;
  }

  .dfs-page .copy em {
    font-style: italic;
  }

  .dfs-page .copy strong {
    font-weight: 700;
  }

  /* ============================================================
     ISSUU REPORT
     ============================================================ */

  .dfs-page .report-embed {
    width: 100%;
    margin: 34px auto 48px;
  }

  .dfs-page .report-embed-frame {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: max(60%, 326px);
    background: #fff;
  }

  .dfs-page .report-embed-frame iframe {
    position: absolute;
    border: none;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  /* ============================================================
     HIGHLIGHTS
     ============================================================ */

  .dfs-page .highlights {
    width: 100%;
    max-width: 820px;
    margin: 0 auto;
  }

  .dfs-page .highlights-title {
    margin: 0 0 22px;
    color: var(--charcoal);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.25px;
  }

  .dfs-page .highlights-title em {
    font-style: italic;
  }

  .dfs-page .highlights-list {
    margin: 0;
    padding-left: 30px;
    list-style: disc;
  }

  .dfs-page .highlights-list li {
    margin: 0 0 14px;
    padding-left: 4px;
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.68;
  }

  .dfs-page .highlights-list li:last-child {
    margin-bottom: 0;
  }

  .dfs-page sup {
    position: relative;
    top: -0.35em;
    font-size: 0.68em;
    line-height: 0;
    vertical-align: baseline;
  }

  /* ============================================================
     FOOTNOTES
     ============================================================ */

  .dfs-page .footnotes {
    width: 100%;
    max-width: 820px;
    margin: 28px auto 0;
    padding-top: 24px;
    border-top: 1px solid var(--line);
  }

  .dfs-page .footnotes p {
    margin: 0 0 8px;
    color: var(--grey);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6;
  }

  .dfs-page .footnotes p:last-child {
    margin-bottom: 0;
  }

  .dfs-page .footnotes sup {
    margin-right: 2px;
    font-size: 0.75em;
  }

  /* ============================================================
     TAGS
     ============================================================ */

  .dfs-page .tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
    width: min(984px, 100%);
    margin: 28px auto 0;
    padding: 22px 0;
    border-top: 1px solid var(--line);
    color: var(--grey);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.6;
  }

  .dfs-page .tags svg {
    width: 17px;
    height: 17px;
    margin-right: 4px;
    color: var(--orange);
    flex: 0 0 auto;
  }

  .dfs-page .tags a {
    color: var(--clay);
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .dfs-page .tags a:hover {
    color: var(--forest);
  }

  .dfs-page .tag-separator {
    margin-right: 2px;
    color: var(--grey);
  }

  /* ============================================================
     SOCIAL SHARING
     ============================================================ */

  .dfs-page .share {
    width: min(984px, 100%);
    margin: 0 auto;
    padding: 8px 0 62px;
  }

  .dfs-page .share-label {
    margin: 0 0 16px;
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 17px;
    font-weight: 600;
    line-height: 1.3;
  }

  .dfs-page .share-list {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .dfs-page .share-list a {
    display: inline-flex;
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: #fff;
    text-decoration: none;
  }

  .dfs-page .share-list svg {
    width: 22px;
    height: 22px;
  }

  .dfs-page .share-x {
    background: #14171a;
  }

  .dfs-page .share-facebook {
    background: #1877f2;
  }

  .dfs-page .share-linkedin {
    background: #0a66c2;
  }

  .dfs-page .share-email {
    background: #4f832a;
  }

  /* ============================================================
     RELATED ARTICLES
     ============================================================ */

  .dfs-page .related-wrap {
    width: 100%;
    background: var(--cream);
  }

  .dfs-page .related {
    width: 91.8%;
    max-width: 1760px;
    margin: 0 auto;
    padding: 72px 0 70px;
  }

  .dfs-page .section-title {
    margin: 0;
    color: var(--forest);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 44px;
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -0.5px;
  }

  .dfs-page .related-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 80px;
    margin-top: 46px;
  }

  .dfs-page .related-card {
    min-width: 0;
  }

  .dfs-page .related-category {
    display: inline-block;
    padding: 8px 14px;
    background: var(--grey);
    color: #fff;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.15;
    text-transform: uppercase;
    text-decoration: none;
  }

  .dfs-page .related-category:hover {
    background: var(--clay);
  }

  .dfs-page .related-title {
    display: block;
    margin-top: 18px;
    color: var(--olive);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.25;
    text-decoration: none;
  }

  .dfs-page .related-title:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  .dfs-page .related-date {
    margin: 20px 0 0;
    color: var(--grey);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.3;
    text-transform: uppercase;
  }

  /* ============================================================
     MEET THE AUTHORS
     ============================================================ */

  .dfs-page .authors-cta {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
    gap: 50px;
    width: 91.8%;
    max-width: 1760px;
    margin: 0 auto;
    padding: 72px 0;
  }

  .dfs-page .authors-copy {
    min-width: 0;
  }

  .dfs-page .authors-title {
    margin: 0 0 18px;
    color: var(--forest);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 44px;
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -0.5px;
  }

  .dfs-page .authors-text {
    max-width: 980px;
    margin: 0;
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 21px;
    font-weight: 400;
    line-height: 1.5;
  }

  .dfs-page .authors-button {
    display: inline-flex;
    min-width: 205px;
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

  .dfs-page .authors-button:hover {
    background: var(--clay-dark);
  }

  /* ============================================================
     RESPONSIVE
     ============================================================ */

  @media (max-width: 1400px) {
    .dfs-page h1 {
      font-size: 46px;
    }
  }

  @media (max-width: 991px) {
    .dfs-page .hero-inner {
      width: calc(100% - 56px);
      padding: 22px 0 36px;
    }

    .dfs-page h1 {
      font-size: 42px;
      line-height: 1.1;
    }

    .dfs-page .article-container {
      width: min(960px, calc(100% - 56px));
      margin-top: 36px;
    }

    .dfs-page .related,
    .dfs-page .authors-cta {
      width: calc(100% - 56px);
    }

    .dfs-page .related-grid {
      gap: 34px;
    }

    .dfs-page .authors-cta {
      gap: 30px;
    }
  }

  @media (max-width: 767px) {
    .dfs-page .hero {
      padding-bottom: 0;
    }

    .dfs-page .hero-inner {
      width: 100%;
      padding: 24px 14px 34px;
    }

    .dfs-page .date {
      margin-bottom: 12px;
      font-size: 15px;
    }

    .dfs-page .category {
      margin-bottom: 20px;
      padding: 4px 7px;
      font-size: 14px;
    }

    .dfs-page h1 {
      font-size: 32px;
      line-height: 1.14;
      letter-spacing: -0.35px;
    }

    .dfs-page .article-container {
      width: calc(100% - 28px);
      margin-top: 28px;
    }

    .dfs-page .copy,
    .dfs-page .highlights {
      max-width: none;
    }

    .dfs-page .copy p,
    .dfs-page .highlights-list li {
      font-size: 16px;
      line-height: 1.65;
    }

    .dfs-page .report-embed {
      margin-top: 28px;
      margin-bottom: 36px;
    }

    .dfs-page .highlights-title {
      margin-bottom: 18px;
      font-size: 22px;
      line-height: 1.25;
    }

    .dfs-page .highlights-list {
      padding-left: 24px;
    }

    .dfs-page .footnotes {
      margin-top: 24px;
      padding-top: 20px;
    }

    .dfs-page .tags,
    .dfs-page .share {
      width: 100%;
    }

    .dfs-page .share {
      padding-bottom: 38px;
    }

    .dfs-page .related {
      width: calc(100% - 28px);
      padding-top: 38px;
      padding-bottom: 42px;
    }

    .dfs-page .section-title,
    .dfs-page .authors-title {
      font-size: 30px;
      line-height: 1.2;
      letter-spacing: 0;
    }

    .dfs-page .related-grid {
      grid-template-columns: 1fr;
      gap: 28px;
      margin-top: 30px;
    }

    .dfs-page .related-title {
      font-size: 22px;
      line-height: 1.3;
    }

    .dfs-page .authors-cta {
      grid-template-columns: 1fr;
      width: calc(100% - 28px);
      gap: 22px;
      padding-top: 38px;
      padding-bottom: 42px;
    }

    .dfs-page .authors-text {
      font-size: 17px;
      line-height: 1.5;
    }

    .dfs-page .authors-button {
      justify-self: start;
    }
  }
`;

export default function DairyFarmSummaryPage() {
  const shareText = encodeURIComponent(TITLE);
  const shareUrl = encodeURIComponent(ARTICLE_URL);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="dfs-page">
        {/* HERO */}
        <section className="hero">
          <div className="hero-inner">
            <p className="date">{DATE}</p>

            <Link href={CATEGORY_HREF} className="category">
              {CATEGORY}
            </Link>

            <h1 id="maincontent">{TITLE}</h1>
          </div>
        </section>

        {/* ARTICLE */}
        <main className="article-container">
          <article className="copy">
            <p>
              Farm Funding is pleased to present the{" "}
              <em>2025 Northeast Dairy Farm Summary (DFS)</em> and outlook for
              the remainder of 2026. Now in its 46th year, the annual{" "}
              <em>DFS</em> is a unique project within the U.S. dairy industry,
              providing a major regional summary of actual dairy farm business
              results. Through assessment of the financial health and progress
              of Northeast dairy farm businesses, it is intended to provide
              dairy producers, Farm Credit staff, Northeast public policymakers
              and dairy industry leaders with a better understanding of the
              current status of the Northeast&rsquo;s largest farm sector.
            </p>
          </article>

          {/* ISSUU REPORT */}
          <div className="report-embed">
            <div className="report-embed-frame">
              <iframe
                src={ISSUU_EMBED_SRC}
                title="26-0018_FCE_DairyFarmSummary2025_final_pages"
                allow="fullscreen"
                allowFullScreen
              />
            </div>
          </div>

          {/* HIGHLIGHTS */}
          <section className="highlights">
            <h2 className="highlights-title">
              Highlights of the{" "}
              <em>
                2025 Northeast Dairy Farm Summary &amp; Mid-Year Outlook
              </em>
            </h2>

            <ul className="highlights-list">
              {HIGHLIGHTS.map((text, index) => (
                <li key={index}>{renderHighlight(text)}</li>
              ))}
            </ul>
          </section>

          {/* FOOTNOTES */}
          <div className="footnotes">
            <p>
              <sup>1</sup>On an accrual basis, after family living, not
              including nonfarm income.
            </p>

            <p>
              <sup>2</sup>Total farm expense, plus family living, less non-milk
              income. For more information, see Figure 6.
            </p>

            <p>
              <sup>3</sup>See figure 7.
            </p>
          </div>

          {/* TAGS */}
          <div className="tags">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.41l9 9c.36.36.86.36 1.41.59.55-.23 1.41-.59 1.41-1.41l7-7c.37-.36.59-.86.59-1.41 0-.55-.22-1.06-.59-1.42zM6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5 8 5.67 8 6.5 7.33 8 6.5 8z" />
            </svg>

            <span>Tags:</span>

            {TAGS.map(([label, slug], index) => (
              <span key={slug}>
                <Link
                  href={`${OUTLOOKS_PATH}?tag=${encodeURIComponent(slug)}`}
                >
                  {label}
                </Link>

                {index < TAGS.length - 1 && (
                  <span className="tag-separator">,</span>
                )}
              </span>
            ))}
          </div>

          {/* SHARE */}
          <section className="share" aria-label="Share this article">
            <p className="share-label">Share this post on</p>

            <ul className="share-list">
              <li>
                <a
                  className="share-x"
                  href={`https://twitter.com/share?text=${shareText}&url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on X"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  className="share-facebook"
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  className="share-linkedin"
                  href={`https://www.linkedin.com/shareArticle?url=${shareUrl}&title=${shareText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  className="share-email"
                  href={`mailto:?subject=${shareText}&body=${shareUrl}`}
                  aria-label="Share by email"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
              </li>
            </ul>
          </section>
        </main>

        {/* RELATED ARTICLES */}
        <div className="related-wrap">
          <section className="related">
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

                  <Link href={item.href} className="related-title">
                    {item.title}{" "}
                    <span aria-hidden="true">&#8250;</span>
                  </Link>

                  <p className="related-date">{item.date}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        {/* MEET THE AUTHORS */}
        <section className="authors-cta">
          <div className="authors-copy">
            <h2 className="authors-title">Meet the Authors</h2>

            <p className="authors-text">
              Connect with and discover our Today&rsquo;s Harvest blog
              authors and their broad range of financial and Northeast
              agricultural expertise.
            </p>
          </div>

          <Link href={AUTHORS_PATH} className="authors-button">
            Meet the Authors
          </Link>
        </section>
      </div>
    </>
  );
}

function renderHighlight(text: string): ReactNode {
  const regex = /([,.])([123])(?=\s|$)/g;

  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    const fullMatch = match[0];
    const punctuation = match[1];
    const digit = match[2];

    parts.push(
      <span key={`text-${key}`}>
        {text.slice(lastIndex, match.index)}
        {punctuation}
      </span>
    );

    parts.push(
      <sup key={`sup-${key}`}>
        {digit}
      </sup>
    );

    lastIndex = match.index + fullMatch.length;
    key += 1;
  }

  parts.push(
    <span key={`text-final-${key}`}>
      {text.slice(lastIndex)}
    </span>
  );

  return parts;
}

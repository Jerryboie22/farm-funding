import type { Metadata } from "next";
import Link from "next/link";

/**
 * ============================================================
 * SOURCE OF TRUTH
 * ============================================================
 * This page was rebuilt against the LIVE reference at:
 *   https://farm-funders.com/resources/Industry-Trends-and-Outlooks/Reports/2025NEDairyFarmSummary2026MidYearOutlook.html
 *
 * The live HTML was fetched directly and used to source:
 *   - exact copy (intro paragraphs, all 7 highlight bullets,
 *     all 3 footnotes, tag labels, related-article titles/
 *     categories/dates, Meet the Authors copy)
 *   - exact link targets (tag hrefs, related-article hrefs,
 *     the live Issuu embed URL, the Meet the Authors href)
 *   - exact page structure/order (hero -> intro -> Issuu embed
 *     -> highlights -> footnotes -> tags -> share -> related
 *     -> meet the authors)
 *
 * Visual proportions (spacing, widths, font sizes) are matched
 * against the three provided screenshots since a fetched page
 * returns extracted markdown, not the live stylesheet. Flag
 * anything that still looks off against your browser and I'll
 * tighten it further with exact devtools measurements.
 *
 * ============================================================
 * STRUCTURAL DECISIONS (per the brief)
 * ============================================================
 * - NO sticky sidebar / table of contents (this page never had
 *   one on the live site — that pattern only exists on the H-2A
 *   article, which has a genuine multi-anchor TOC in its source).
 * - NO fabricated author card, no newsletter block, no hero image.
 * - This page assumes your project's global header and footer are
 *   already rendered by a parent layout (e.g. app/layout.tsx) and
 *   wrap every route. This component intentionally renders ONLY
 *   the article-specific region (hero through Meet the Authors) so
 *   the global header/footer are never duplicated. If your project
 *   does NOT already wrap pages with a shared header/footer, import
 *   your existing <SiteHeader /> / <SiteFooter /> components here
 *   and place them immediately before/after the <div className="dfs-page">
 *   wrapper below — do not rebuild them from scratch.
 * - Single content column throughout; no two-column grid anywhere
 *   on this page.
 */

const TITLE = "2025 Northeast Dairy Farm Summary & Mid-Year Outlook";
const DESCRIPTION = TITLE;

const ARTICLE_URL =
  "https://farm-funding.com/en/resources/Industry-Trends-and-Outlooks/Reports/2025NEDairyFarmSummary2026MidYearOutlook.html";

const OUTLOOKS_PATH = "/resources/Industry-Trends-and-Outlooks";
const BLOG_PATH = "/resources/todays-harvest-Blog";
const AUTHORS_PATH = "/resources/meet-the-authors";

const CATEGORY = "Ag Economy";
const CATEGORY_HREF = `${OUTLOOKS_PATH}?category=ag-economy`;
const DATE = "July 10, 2026";

// Exact Issuu embed source from the live page.
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
  "Net cost of production² (NCOP) decreased to $19.83 per cwt., $1.66 lower than 2024\u2019s $21.49. Multiple factors contributed to this decrease including greater non-milk farm income and larger herd sizes in our sample.",
  "Feed expense, a farm\u2019s largest cost, increased from $1,760 per cow in 2024 to $2,002 per cow in 2025.",
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
    href: `${BLOG_PATH}/260707_2026FarmBillTakesShape.html`,
    date: "July 7, 2026",
  },
  {
    category: "Knowledge Exchange Partner",
    categoryHref: `${OUTLOOKS_PATH}?category=Knowledge%20Exchange%20Partner`,
    title:
      "United States Citizenship and Immigration Service Clears H-2A Path for Dairy Employers",
    href: `${OUTLOOKS_PATH}/Reports/2607KEP_H2AForDairyEmployers.html`,
    date: "July 7, 2026",
  },
  {
    category: "Business Tips and Tools",
    categoryHref: `${BLOG_PATH}?category=business-tips-and-tools`,
    title: "Tariff Relief Program Available for New York Producers",
    href: `${BLOG_PATH}/260701TariffReliefProgramNYProducers.html`,
    date: "July 1, 2026",
  },
];

/**
 * Page-scoped styles. Namespaced under .dfs-page so nothing here
 * leaks onto other routes.
 */
const styles = `
  .dfs-page,
  .dfs-page * { box-sizing: border-box; }

  .dfs-page {
    width: 100%;
    overflow-x: clip;
    background: #fff;
    color: #231f20;
    --clay: #496d83;
    --clay-dark: #3b5a6d;
    --forest: #4f832a;
    --olive: #5a4400;
    --orange: #c36d15;
    --cream: #ecf1e4;
    --grey: #686868;
    --line: #d8d8d8;
    --charcoal: #231f20;
  }

  /* ---------- Hero ---------- */
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
    text-align: right;
    color: #fff;
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

  .dfs-page .category:hover { text-decoration: underline; }

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

  /* ---------- Single-column article container ---------- */
  .dfs-page .container {
    width: min(950px, calc(100% - 64px));
    margin: 48px auto 0;
  }

  .dfs-page .copy {
    width: 100%;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    color: var(--charcoal);
  }

  .dfs-page .copy p {
    margin: 0 0 24px;
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.68;
  }

  .dfs-page .copy em { font-style: italic; }
  .dfs-page .copy strong { font-weight: 700; }

  /* ---------- Issuu embed ---------- */
  .dfs-page .report-embed {
    width: 100%;
    max-width: 700px;
    margin: 8px auto 40px;
  }

  .dfs-page .report-embed-frame-wrap {
    position: relative;
    width: 100%;
    aspect-ratio: 631 / 900;
    border: 1px solid var(--line);
  }

  .dfs-page .report-embed-frame-wrap iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  /* ---------- Highlights ---------- */
  .dfs-page h2.highlights-title {
    margin: 4px 0 22px;
    color: var(--charcoal);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 26px;
    font-weight: 700;
    line-height: 1.3;
  }

  .dfs-page h2.highlights-title em { font-style: italic; }

  .dfs-page .highlights-list {
    margin: 0 0 32px;
    padding-left: 22px;
    list-style: disc;
  }

  .dfs-page .highlights-list li {
    margin-bottom: 20px;
    padding-left: 4px;
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.68;
  }

  .dfs-page .highlights-list li:last-child { margin-bottom: 0; }

  .dfs-page .highlights-list sup {
    font-size: 0.65em;
    line-height: 0;
    position: relative;
    top: -0.5em;
  }

  /* ---------- Footnotes ---------- */
  .dfs-page .footnotes {
    margin: 24px 0 0;
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

  .dfs-page .footnotes p:last-child { margin-bottom: 0; }

  .dfs-page .footnotes sup {
    font-size: 0.75em;
    line-height: 0;
    position: relative;
    top: -0.4em;
    margin-right: 1px;
  }

  /* ---------- Tags ---------- */
  .dfs-page .tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
    margin: 28px 0 0;
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
    color: var(--forest);
  }

  .dfs-page .tags a { color: var(--clay); text-decoration: underline; }
  .dfs-page .tags a:hover { color: var(--forest); }
  .dfs-page .tag-separator { color: var(--grey); margin-right: 2px; }

  /* ---------- Share ---------- */
  .dfs-page .share {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
    margin: 0 0 52px;
    padding: 18px 20px;
    background: #f1f3f4;
    border-radius: 4px;
  }

  .dfs-page .share-label {
    margin: 0;
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 17px;
    font-weight: 600;
  }

  .dfs-page .share-list {
    display: flex;
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .dfs-page .share-list a {
    display: inline-flex;
    width: 36px;
    height: 36px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: #fff;
    text-decoration: none;
  }

  .dfs-page .share-list svg { width: 19px; height: 19px; }
  .dfs-page .share-x { background: #14171a; }
  .dfs-page .share-facebook { background: #1877f2; }
  .dfs-page .share-linkedin { background: #0a66c2; }
  .dfs-page .share-email { background: #34a853; }

  /* ---------- Related ---------- */
  .dfs-page .related-wrap { width: 100%; background: var(--cream); }
  .dfs-page .related {
    width: min(1800px, calc(100% - 120px));
    margin: 0 auto;
    padding: 34px 7px 54px;
  }
  .dfs-page .section-title {
    margin: 0;
    color: var(--forest);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.25;
  }
  .dfs-page .related-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 34px;
    margin-top: 20px;
  }
  .dfs-page .related-card { padding-top: 26px; }
  .dfs-page .related-category {
    display: inline-block;
    padding: 6px 14px;
    background: var(--grey);
    color: #fff;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    text-decoration: none;
  }
  .dfs-page .related-title {
    display: block;
    margin-top: 26px;
    color: var(--olive);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 21px;
    font-weight: 700;
    line-height: 1.35;
    text-decoration: none;
  }
  .dfs-page .related-title:hover { text-decoration: underline; }
  .dfs-page .related-date {
    margin: 26px 0 0;
    color: var(--grey);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
  }

  /* ---------- Meet the Authors ---------- */
  .dfs-page .authors-cta {
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    gap: 28px;
    width: min(1800px, calc(100% - 120px));
    margin: 0 auto;
    padding: 50px 7px;
  }
  .dfs-page .authors-copy { max-width: 900px; }
  .dfs-page .authors-text {
    margin: 14px 0 0;
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 20px;
    line-height: 1.5;
  }
  .dfs-page .button {
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
  .dfs-page .button:hover { background: var(--clay-dark); }
  .dfs-page .authors-button { justify-self: end; min-width: 205px; }

  /* ============================================================
     RESPONSIVE
     ============================================================ */
  @media (max-width: 1400px) {
    .dfs-page h1 { font-size: 46px; }
  }

  @media (max-width: 991px) {
    .dfs-page .hero-inner { width: calc(100% - 56px); padding: 22px 0 36px; }
    .dfs-page h1 { font-size: 42px; line-height: 1.1; }
    .dfs-page .container { width: calc(100% - 56px); margin-top: 36px; }
    .dfs-page .related,
    .dfs-page .authors-cta { width: calc(100% - 56px); }
    .dfs-page .related-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 767px) {
    .dfs-page .hero-inner { width: 100%; padding: 24px 14px 28px; }
    .dfs-page .date { margin-bottom: 12px; font-size: 15px; }
    .dfs-page .category { margin-bottom: 20px; font-size: 14px; }
    .dfs-page h1 { font-size: 32px; line-height: 1.14; letter-spacing: -0.35px; }
    .dfs-page .container { width: calc(100% - 28px); margin-top: 28px; }
    .dfs-page .copy p,
    .dfs-page .highlights-list li { font-size: 16px; line-height: 1.65; }
    .dfs-page h2.highlights-title { font-size: 22px; margin-top: 0; }
    .dfs-page .share { flex-direction: column; align-items: flex-start; gap: 12px; }
    .dfs-page .related { width: calc(100% - 28px); padding: 25px 0 35px; }
    .dfs-page .related-grid { grid-template-columns: 1fr; gap: 25px; }
    .dfs-page .authors-cta {
      grid-template-columns: 1fr;
      width: calc(100% - 28px);
      gap: 18px;
      padding: 38px 0;
    }
    .dfs-page .authors-button { justify-self: start; }
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

        {/* ARTICLE — single column, no sidebar */}
        <div className="container">
          <article className="copy">
            <p>
              Farm Funding is pleased to present the{" "}
              <em>2025 Northeast Dairy Farm Summary (DFS)</em> and outlook for
              the remainder of 2026. Now in its 46th year, the annual{" "}
              <em>DFS</em> is a unique project within the U.S. dairy industry,
              providing a major regional summary of actual dairy farm business
              results. Through assessment of the financial health and
              progress of Northeast dairy farm businesses, it is intended to
              provide dairy producers, Farm Credit staff, Northeast public
              policymakers and dairy industry leaders with a better
              understanding of the current status of the Northeast&rsquo;s
              largest farm sector.
            </p>
          </article>

          {/* REPORT / ISSUU EMBED */}
          <div className="report-embed">
            <div className="report-embed-frame-wrap">
              <iframe
                src={ISSUU_EMBED_SRC}
                title="26-0018_FCE_DairyFarmSummary2025_final_pages"
                allow="fullscreen"
                allowFullScreen
              />
            </div>
          </div>

          {/* HIGHLIGHTS */}
          <h2 className="highlights-title">
            Highlights of the{" "}
            <em>
              2025 Northeast Dairy Farm Summary &amp; Mid-Year Outlook
            </em>
          </h2>

          <ul className="highlights-list">
            {HIGHLIGHTS.map((text, i) => (
              <li key={i}>{renderHighlight(text)}</li>
            ))}
          </ul>

          {/* FOOTNOTES */}
          <div className="footnotes">
            <p>
              <sup>1</sup>On an accrual basis, after family living, not
              including nonfarm income.
            </p>
            <p>
              <sup>2</sup>Total farm expense, plus family living, less
              non-milk income. For more information, see Figure 6.
            </p>
            <p>
              <sup>3</sup>See figure 7.
            </p>
          </div>

          {/* TAGS */}
          <div className="tags">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.41l9 9c.36.36.86.36 1.41.59.55-.23 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.22-1.06-.59-1.42zM6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5 8 5.67 8 6.5 7.33 8 6.5 8z" />
            </svg>
            <span>Tags:</span>{" "}
            {TAGS.map(([label, slug], index) => (
              <span key={slug}>
                <Link href={`${OUTLOOKS_PATH}?tag=${encodeURIComponent(slug)}`}>
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
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
              </li>
            </ul>
          </section>
        </div>

        {/* RELATED */}
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
                    {item.title} <span aria-hidden="true">&#8250;</span>
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
            <h2 className="section-title">Meet the Authors</h2>
            <p className="authors-text">
              Connect with and discover our Today&rsquo;s Harvest blog
              authors and their broad range of financial and Northeast
              agricultural expertise.
            </p>
          </div>
          <Link href={AUTHORS_PATH} className="button authors-button">
            Meet the Authors
          </Link>
        </section>
      </div>
    </>
  );
}

/**
 * Renders a highlight bullet, converting a trailing footnote digit
 * (1, 2, or 3) that immediately follows punctuation-free text into
 * a <sup> element, matching the live page's superscript footnote
 * markers. Handles the two patterns present in the live copy:
 *   "...in 2025,1 from..."   (mid-sentence, after a comma)
 *   "...per cwt. of $2.12.3" (end of sentence, after a period)
 */
function renderHighlight(text: string) {
  const match = text.match(/^(.*?)([123])(\s.*|\.\s*)$|^(.*[123])$/);
  // Simpler, robust approach: split on known footnote insertion points
  // by looking for a digit 1-3 immediately followed by a space or end,
  // preceded by a comma or period, and not part of a larger number.
  const parts: (string | JSX.Element)[] = [];
  const regex = /([,.])([123])(?=\s|$)/g;
  let lastIndex = 0;
  let m: RegExpExecArray | null;
  let key = 0;

  while ((m = regex.exec(text)) !== null) {
    const [full, punctuation, digit] = m;
    parts.push(text.slice(lastIndex, m.index) + punctuation);
    parts.push(<sup key={key++}>{digit}</sup>);
    lastIndex = m.index + full.length;
  }
  parts.push(text.slice(lastIndex));

  return parts;
}

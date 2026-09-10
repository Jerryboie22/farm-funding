import type { Metadata } from "next";
import Link from "next/link";

const TITLE = "Dairy Markets Show Positive Trends";
const DESCRIPTION =
  "Improving milk margins, strong protein demand, and record exports are boosting the U.S. dairy outlook, even as butterfat growth and global risks add volatility.";

const ARTICLE_URL =
  "https://farm-funding.com/en/resources/Industry-Trends-and-Outlooks/Reports/2605KEP_DairyMidYearTrends.html";
const OUTLOOKS_PATH = "/resources/Industry-Trends-and-Outlooks";
const BLOG_PATH = "/resources/todays-harvest-Blog";
const AUTHORS_PATH = "en/resources/Meet-the-Authors";

const CATEGORY = "Knowledge Exchange Partner";
const CATEGORY_HREF = `${OUTLOOKS_PATH}?category=Knowledge%20Exchange%20Partner`;
const DATE = "May 3, 2026";

const IMG_BASE =
  "/images/resources/Industry-Trends-and-Outlooks/Reports/2605KEP_DairyMidYearTrends";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "Dairy Markets Show Positive Trends, dairy, KEP, Knowledge Exchange Partner, Corey Geiger, Chris Laughton, Megan Clancy",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: ARTICLE_URL,
    type: "article",
    publishedTime: "2026-05-03",
    images: [
      {
        url: "https://farm-funding.com/-/media/farm-credit-east/featured-images/Dairy-cows-in-barn_1.ashx",
      },
    ],
  },
};

// Contents/TOC entries — hrefs match the live page's in-page anchors exactly.
const TOC = [
  { label: "Butterfat Growth", href: "#butterfat" },
  { label: "Low-milkfat Products", href: "#milkfat" },
  { label: "Butter Imports", href: "#butter" },
  { label: "Butterfat Exports", href: "#butterfatexports" },
  { label: "Class III Milk Futures", href: "#milkfutures" },
  { label: "Class IV Futures", href: "#futures" },
  { label: "Protecting Margins", href: "#risk" },
];

const TAGS: [string, string][] = [
  ["outlook", "ag-outlook"],
  ["dairy", "dairy"],
  ["economy", "economy"],
  ["risk management", "risk-management"],
];

const RELATED_ARTICLES = [
  {
    category: "Ag Economy",
    categoryHref: `${OUTLOOKS_PATH}?category=ag-economy`,
    title: "2025 Northeast Dairy Farm Summary & Mid-Year Outlook",
    href: `${OUTLOOKS_PATH}/Reports/2025NEDairyFarmSummary2026MidYearOutlook`,
    date: "July 10, 2026",
  },
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
    categoryHref: CATEGORY_HREF,
    title:
      "United States Citizenship and Immigration Service Clears H-2A Path for Dairy Employers",
    href: `${OUTLOOKS_PATH}/Reports/2607KEP_H2AForDairyEmployers.html`,
    date: "July 7, 2026",
  },
];

const styles = `
  .dairy-kep-page,
  .dairy-kep-page * { box-sizing: border-box; }

  .dairy-kep-page {
    scroll-behavior: smooth;
    --clay: #496d83;
    --clay-dark: #3b5a6d;
    --forest: #4f832a;
    --olive: #5a4400;
    --orange: #c36d15;
    --cream: #ecf1e4;
    --grey: #686868;
    --line: #d8d8d8;
    --light: #f1f3f4;
    --charcoal: #231f20;
    width: 100%;
    overflow-x: clip;
    background: #fff;
    color: var(--charcoal);
  }

  /* Hero */
  .dairy-kep-page .hero {
    position: relative;
    width: 100%;
    padding-bottom: 88px;
    background: var(--clay);
    color: #fff;
  }

  .dairy-kep-page .hero-inner {
    width: min(1800px, calc(100% - 120px));
    margin: 0 auto;
    padding: 40px 7px 0;
  }

  .dairy-kep-page .date {
    margin: 0 0 16px;
    text-align: right;
    color: #fff;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
  }

  .dairy-kep-page .category {
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

  .dairy-kep-page .category:hover { text-decoration: underline; }

  .dairy-kep-page h1 {
    max-width: 1220px;
    margin: 0;
    color: var(--cream);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 52px;
    font-weight: 700;
    line-height: 1.08;
    letter-spacing: -0.7px;
  }

  /* Two-column layout: sticky Contents + article. */
  .dairy-kep-page .layout {
    width: min(1280px, calc(100% - 32px));
    margin: 48px auto 0;
    display: grid;
    grid-template-columns: 300px minmax(0, 820px);
    column-gap: 220px;
    justify-content: start;
    align-items: start;
  }

  .dairy-kep-page .sidebar {
    position: sticky;
    top: 96px;
    align-self: start;
    height: fit-content;
    width: 100%;
    padding: 16px 18px 18px;
    background: #e9edf1;
    border: 1px solid #f1a24a;
    border-radius: 4px;
    box-shadow: 3px 4px 0 rgba(35, 31, 32, 0.16);
  }

  .dairy-kep-page .toc-static { display: block; width: 100%; }
  .dairy-kep-page .toc-dropdown { display: none; width: 100%; }

  .dairy-kep-page .toc-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin: 0 0 14px;
    padding: 0 0 12px;
    color: var(--charcoal);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.25;
  }

  .dairy-kep-page .toc-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .dairy-kep-page .toc-list a {
    display: block;
    padding: 4px 0;
    color: var(--clay);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 16px;
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .dairy-kep-page .toc-list a:hover { color: var(--forest); }

  .dairy-kep-page .article { min-width: 0; }

  .dairy-kep-page .copy {
    width: 100%;
    max-width: 820px;
    padding-bottom: 12px;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    color: var(--charcoal);
  }

  .dairy-kep-page .copy p,
  .dairy-kep-page .copy li {
    margin: 0 0 24px;
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.68;
  }

  .dairy-kep-page .copy .lede { font-weight: 700; }
  .dairy-kep-page .copy .byline-note { font-style: italic; }
  .dairy-kep-page .copy strong { font-weight: 700; }
  .dairy-kep-page .copy em { font-style: italic; }

  .dairy-kep-page .copy h3,
  .dairy-kep-page .copy > div[id] {
    scroll-margin-top: 110px;
  }

  .dairy-kep-page .copy h3 {
    margin: 46px 0 20px;
    color: var(--charcoal);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.25px;
  }

  .dairy-kep-page .copy ul,
  .dairy-kep-page .copy ol {
    margin: 0 0 28px;
    padding-left: 30px;
  }

  .dairy-kep-page .copy ul { list-style: disc; }
  .dairy-kep-page .copy ol { list-style: decimal; }

  .dairy-kep-page .copy li {
    margin-bottom: 14px;
    padding-left: 4px;
  }
  .dairy-kep-page .copy li:last-child { margin-bottom: 0; }
  .dairy-kep-page .copy li strong { display: inline; }

  .dairy-kep-page .copy a {
    color: var(--clay);
    text-decoration: underline;
    text-underline-offset: 2px;
    text-decoration-thickness: 1px;
  }

  .dairy-kep-page .copy a:hover { color: var(--forest); }

  .dairy-kep-page .copy figure {
    margin: 8px 0 32px;
  }

  .dairy-kep-page .copy figure img {
    display: block;
    width: 100%;
    height: auto;
    border: 1px solid var(--line);
  }

  .dairy-kep-page .copy hr {
    margin: 28px 0;
    border: none;
    border-top: 1px solid var(--line);
  }

  @media (prefers-reduced-motion: reduce) {
    .dairy-kep-page { scroll-behavior: auto; }
  }

  .dairy-kep-page .button {
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

  .dairy-kep-page .button:hover { background: var(--clay-dark); }

  .dairy-kep-page .tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
    margin: 0;
    padding: 22px 0;
    border-top: 1px solid var(--line);
    color: var(--grey);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.6;
  }

  .dairy-kep-page .tags svg {
    width: 17px;
    height: 17px;
    margin-right: 4px;
    color: var(--orange);
  }

  .dairy-kep-page .tags a { color: var(--clay); text-decoration: underline; }
  .dairy-kep-page .tags a:hover { color: var(--forest); }
  .dairy-kep-page .tag-separator { color: var(--grey); margin-right: 2px; }

  .dairy-kep-page .share { padding: 8px 0 52px; }

  .dairy-kep-page .share-label {
    margin: 0 0 16px;
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 17px;
    font-weight: 600;
  }

  .dairy-kep-page .share-list {
    display: flex;
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .dairy-kep-page .share-list a {
    display: inline-flex;
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: #fff;
    text-decoration: none;
  }

  .dairy-kep-page .share-list svg { width: 22px; height: 22px; }
  .dairy-kep-page .share-x { background: #14171a; }
  .dairy-kep-page .share-facebook { background: #1877f2; }
  .dairy-kep-page .share-linkedin { background: #0a66c2; }
  .dairy-kep-page .share-email { background: #34a853; }

  /* Related */
  .dairy-kep-page .related-wrap { width: 100%; background: var(--cream); }
  .dairy-kep-page .related { width: min(1800px, calc(100% - 120px)); margin: 0 auto; padding: 34px 7px 54px; }
  .dairy-kep-page .section-title {
    margin: 0;
    color: var(--forest);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.25;
  }
  .dairy-kep-page .related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 34px; margin-top: 20px; }
  .dairy-kep-page .related-card { padding-top: 26px; }
  .dairy-kep-page .related-category {
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
  .dairy-kep-page .related-title {
    display: block;
    margin-top: 26px;
    color: var(--olive);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 21px;
    font-weight: 700;
    line-height: 1.35;
    text-decoration: none;
  }
  .dairy-kep-page .related-title:hover { text-decoration: underline; }
  .dairy-kep-page .related-date {
    margin: 26px 0 0;
    color: var(--grey);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
  }

  /* Meet the Authors CTA */
  .dairy-kep-page .authors-cta {
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    gap: 28px;
    width: min(1800px, calc(100% - 120px));
    margin: 0 auto;
    padding: 50px 7px;
  }
  .dairy-kep-page .authors-copy { max-width: 900px; }
  .dairy-kep-page .authors-text {
    margin: 14px 0 0;
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 20px;
    line-height: 1.5;
  }
  .dairy-kep-page .authors-button { justify-self: end; min-width: 205px; }

  @media (max-width: 1400px) {
    .dairy-kep-page h1 { font-size: 46px; }
  }

  @media (max-width: 991px) {
    .dairy-kep-page .hero-inner { width: calc(100% - 56px); padding: 22px 0 36px; }
    .dairy-kep-page h1 { font-size: 42px; line-height: 1.1; }
    .dairy-kep-page .layout {
      width: calc(100% - 56px);
      grid-template-columns: 1fr;
      gap: 28px;
      margin-top: 36px;
    }
    .dairy-kep-page .sidebar { position: static; top: auto; }
    .dairy-kep-page .toc-static { display: none; }
    .dairy-kep-page .toc-dropdown { display: block; }
    .dairy-kep-page .toc-title {
      cursor: pointer;
      margin-bottom: 0;
      padding-bottom: 0;
    }
    .dairy-kep-page .toc-dropdown[open] .toc-title {
      margin-bottom: 14px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--line);
    }
    .dairy-kep-page .toc-title::after {
      content: "";
      display: block;
      flex: none;
      width: 9px;
      height: 9px;
      border-right: 2px solid var(--clay);
      border-bottom: 2px solid var(--clay);
      transform: rotate(45deg);
      transition: transform 0.2s ease;
    }
    .dairy-kep-page .toc-dropdown[open] .toc-title::after {
      transform: rotate(-135deg);
    }
    .dairy-kep-page .toc-dropdown:not([open]) .toc-list {
      display: none;
    }
    .dairy-kep-page .copy { max-width: none; }
    .dairy-kep-page .related,
    .dairy-kep-page .authors-cta { width: calc(100% - 56px); }
  }

  @media (max-width: 767px) {
    .dairy-kep-page .hero-inner { width: 100%; padding: 24px 14px 28px; }
    .dairy-kep-page .date { margin-bottom: 12px; font-size: 15px; }
    .dairy-kep-page .category { margin-bottom: 20px; font-size: 14px; }
    .dairy-kep-page h1 { font-size: 32px; line-height: 1.14; letter-spacing: -.35px; }
    .dairy-kep-page .layout { width: calc(100% - 28px); margin-top: 28px; gap: 24px; }
    .dairy-kep-page .sidebar { padding: 14px 16px 16px; }
    .dairy-kep-page .toc-title { font-size: 18px; }
    .dairy-kep-page .toc-dropdown[open] .toc-title { margin-bottom: 10px; padding-bottom: 10px; }
    .dairy-kep-page .toc-list { gap: 6px; }
    .dairy-kep-page .copy p,
    .dairy-kep-page .copy li { font-size: 16px; line-height: 1.65; }
    .dairy-kep-page .copy h3 { margin-top: 34px; margin-bottom: 18px; font-size: 24px; line-height: 1.22; }
    .dairy-kep-page .related { width: calc(100% - 28px); padding: 25px 0 35px; }
    .dairy-kep-page .related-grid { grid-template-columns: 1fr; gap: 25px; }
    .dairy-kep-page .authors-cta { grid-template-columns: 1fr; width: calc(100% - 28px); gap: 18px; padding: 38px 0; }
    .dairy-kep-page .authors-button { justify-self: start; }
  }
`;

export default function DairyMidYearTrendsPage() {
  const shareText = encodeURIComponent(TITLE);
  const shareUrl = encodeURIComponent(ARTICLE_URL);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="dairy-kep-page">
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

        {/* CONTENTS + ARTICLE */}
        <div className="layout">
          <aside className="sidebar" aria-label="Table of contents">
            <div className="toc-static">
              <p className="toc-title">Contents</p>
              <nav className="toc-list">
                {TOC.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <details className="toc-dropdown">
              <summary className="toc-title">Contents</summary>
              <nav className="toc-list">
                {TOC.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </nav>
            </details>
          </aside>

          <div className="article">
            <article className="copy">
              <p className="lede">
                Volume 20, Issue 5
                <br />
                May 2026
              </p>

              <p className="byline-note">
                Contributed by CoBank dairy lead economist Corey Geiger
              </p>

              <p>
                After some rather sluggish dairy prices to start out the new
                year, margins to make milk have improved and that is one
                reason for a positive outlook. Another reason for optimism is
                strong consumer demand for protein and dairy wins two ways –
                protein found in milk and protein from beef sales. A third
                reason to be optimistic is new dairy plant investment
                continues to be announced this year and by my count, there is
                $13 billion of new capital investment in U.S. dairy plants
                and that will ensure a home for the growing milk supply.
              </p>

              <p>
                While many indicators point upward, there are some reasons
                for caution. For starters, the EU continues to show strong
                growth in milk production with output being up 5% or more
                year-over-year from October 2025 through February 2026.
                That’s noteworthy growth for the world’s largest dairy
                product and ingredient exporter that’s 1.6 times the size of
                the U.S. dairy sector. Another reason for caution is the
                ongoing conflict in the Middle East that is making it
                extremely difficult to move products. That includes dairy
                products into, and fuel and fertilizer out of the region.
              </p>

              <h3 id="butterfat">Butterfat growth remains strong</h3>

              <p>
                Many Middle East countries import over 90% of their food
                supply. For dairy, that includes a great deal of butterfat.
                Bringing this back to U.S. milk markets, our country has been
                a butterfat-deficit market for many decades. However, the
                tide has turned, and America may be structurally short on
                dairy protein and long on butterfat moving forward.
              </p>

              <p>
                This will change how products and ingredients move in both
                domestic and export markets. We will balance product flows
                based on dairy protein production, and butterfat will need to
                find new markets, with the export market being a significant
                focus. This transition will create more market volatility, as
                we have already witnessed from August 2025 through March
                2026.
              </p>

              <p>
                Prior to the creation of the North American Free Trade
                Agreement in 1994 and the U.S. Dairy Export Council in 1995,
                the U.S. was largely a nonplayer on the dairy export stage. By
                2011, the U.S. was exporting 16.5% of its milk production on
                a skim solids basis. In other words, the U.S. kept the
                skimmed off butterfat from the milk stream and sold the skim
                solids (largely in the form of protein and lactose) to
                customers around the world. In fact, the spread was so large
                between the product mix that exports measured on a milk fat
                basis were a meager 4.6% of U.S. milk production.
              </p>

              <div id="milkfat">
                <figure>
                  <img
                    src={`${IMG_BASE}/Low-Milkfat-Products.png`}
                    alt="Chart: Low Milkfat Products"
                  />
                </figure>

                <p>
                  The story hadn’t changed much by 2024. That year, U.S.
                  dairy processors exported 21.6% of America’s milk
                  production on a skim solids basis. But exports on a
                  milk-fat basis hardly budged, posting just 5.2% in exports
                  even though total exports represented 17% of the nation’s
                  total milk production. In other words, domestic consumers
                  were buying nearly all of America’s butterfat production in
                  the form of dairy products and little was available for
                  export markets.
                </p>
              </div>

              <div id="butter">
                <p>
                  Not only were Americans buying domestic butterfat, but they
                  also started buying more imported butter. In 2011, the U.S.
                  imported 10 million pounds of butter. By 2021, butter
                  imports grew 10-fold to reach 100 million pounds. With more
                  demand from American consumers, butter imports grew another
                  72% to reach 173 million pounds of imported butter by 2024.
                  With strong domestic butterfat production in 2025, butter
                  imports fell 57% to 98 million pounds.
                </p>

                <figure>
                  <img
                    src={`${IMG_BASE}/Butter-Imports.png`}
                    alt="Chart: Butter Imports"
                  />
                </figure>
              </div>

              <p>
                Along the way, U.S. multiple component pricing factors, via
                the Federal Milk Marketing Order system, gave stronger
                signals to produce more butterfat. As a result, butterfat
                percentages on farm went on a historic run, moving from 3.66%
                in 2010 to 4.29% in 2025. This growth stemmed from a
                combination of changes in feed rations and the influx of
                genetic change via artificial breeding programs and the new
                science of genomic predictions.
              </p>

              <p>
                This rapid growth in butterfat eventually pushed the
                production pendulum in the opposite direction mid-year 2025 —
                long on butterfat and short on protein. Not only did
                production of products like cottage cheese, dairy
                nutritional shakes and Greek yogurt demand more protein and
                less fat, but butterfat production on a pounds basis also
                began growing by 5% to 6% in any given month by mid-year.
                That strong growth began outstripping domestic market demand
                to absorb farmgate butterfat production.
              </p>

              <p>
                As a result, butter prices on the CME began to drop from
                $2.44 per pound on Aug. 1, 2025, to $1.50 per pound by
                mid-November just when butter sales typically would peak as
                the holiday season approached.
              </p>

              <div id="butterfatexports">
                <p>
                  Spot butter prices have since improved to the $1.75 to $2
                  per pound range. Domestic market demand didn’t improve spot
                  prices; export markets did. The U.S. exported an impressive
                  269 million pounds of butterfat and anhydrous milkfat in
                  2025, boosting total export volume 271% from the previous
                  year. More importantly to balancing markets, 60% of those
                  269 million pounds of butterfat were exported in the second
                  half of the year when the U.S. needed to move inventory.
                </p>

                <figure>
                  <img
                    src={`${IMG_BASE}/Butterfat-Exports.png`}
                    alt="Chart: Butterfat Exports"
                  />
                </figure>
              </div>

              <div id="milkfutures">
                <p>
                  This huge increase in domestic butterfat production has
                  created significant volatility in Class III cheese and
                  whey markets, and an even greater downturn in Class IV
                  butter and powder markets. In August 2025, Class III
                  contracts for April 2026 to August 2026 milk traded between
                  $17 to $18. In January, due to market pressures from
                  butterfat, those same contracts traded between $15 and $17.
                  Then with strong butterfat exports and other factors, April
                  24 CME futures nearly rebounded to pre-August levels with
                  stronger prices seen in later months’ contracts.
                </p>

                <figure>
                  <img
                    src={`${IMG_BASE}/Class-III-Milk-Futures.png`}
                    alt="Chart: Class III Milk Futures"
                  />
                </figure>
              </div>

              <div id="futures">
                <p>
                  The situation was more dramatic in the Class IV space. In
                  August 2025, all contracts for the March 2026 to July 2026
                  window traded above $19 per hundredweight. By January 9,
                  2026, those same contracts dropped to the $14 to $15 range.
                  After the impact of strong butterfat exports and the recent
                  tightening nonfat dry milk market that sent prices to
                  record highs, April to July 2026 CME Class IV futures
                  climbed to pre-August 2025 trading levels and in some
                  months those contracts traded close to or over $20.
                </p>

                <figure>
                  <img
                    src={`${IMG_BASE}/Class-IV-Futures.png`}
                    alt="Chart: Class IV Futures"
                  />
                </figure>
              </div>

              <p>
                Protein has become the most important consumer demand trend
                and that’s where the growing U.S. dairy cow herd comes into
                play as beef prices stand at record highs. That begs the
                question: how much larger will the U.S. dairy cow herd grow
                to reap rewards from beef-on-dairy calves and may that
                resulting growth in milk production cause an oversupply in
                the marketplace?
              </p>

              <p>
                The U.S. dairy cow milking herd is at its largest in over 30
                years at 9.621 million head in March. Compared to a year ago,
                the herd is 187,000 head (+1.9%) larger and produced about
                the same amount of milk per cow. However, these additional
                cows added to total milk production, which grew by 2.3%.
                March butterfat production grew 3.3% and protein pounds were
                up 3.6% reflecting feeding adjustments for lower butterfat
                prices in recent months.
              </p>

              <p>
                Beef-on-dairy calves are one of the primary reasons to keep
                dairy cows longer in the herd, especially after notching a
                record $1,918 per head in mid-April. Recent visits by CoBank
                (Farm Funders’s lending bank) staff to feedlots in Texas
                mentioned 15% to 20% of cattle on feed are beef-on-dairy
                animals. These crossbreds grow well in the feedlot and can
                weigh over 1,700 pounds before heading to the beef packer due
                to the larger frame provided by the dairy genetics. Strong
                interest in beef-on-dairy calves should continue given the
                U.S. beef cow herd is at the lowest level in 65 years. Plus,
                beef sales to consumers have shown 27 straight months of
                volume growth.
              </p>

              <p>
                While the are many reasons for optimism, dairy markets are
                not out of the proverbial woods. The 2025 export year might
                have been even better had there not been geopolitical issues
                and tariffs making an impact. The largest catalyst supporting
                U.S. sales growth was lower cheese and butter prices compared
                to the world’s top two dairy exporters – the EU and New
                Zealand. Given this situation, dairy farmers and processors
                alike should consider hedging opportunities when market
                prices look favorable and cover expenses because small
                product movements could significantly move prices.
              </p>

              <hr />

              <h3 id="risk">
                Risk Management Update: Protecting Margins in a Volatile
                Market
              </h3>

              <p className="byline-note">
                Contributed by Megan Clancy, Crop Growers Dairy &amp;
                Livestock Risk Management Senior Advisor
              </p>

              <p className="byline-note">
                Crop Growers is an equal opportunity provider.
              </p>

              <p>
                As we move through the second half of the year, risk
                management remains a critical component of maintaining
                profitability in today’s dairy environment. While milk prices
                and feed costs continue to shift, protecting both core
                revenue and growing revenue streams, such as beef-on-dairy
                calves, has never been more important.
              </p>

              <p>
                <Link href="/crop-insurance/dairy-livestock">
                  Livestock Risk Protection (LRP)
                </Link>{" "}
                continues to offer strong opportunities to lock in favorable
                calf prices. With cattle markets remaining historically
                strong, LRP allows producers to establish a price floor on
                calves. Current coverage prices range up to $1,500 per head.
                This protection is especially relevant as more dairy
                operations capitalize on beef genetics, making calves a
                meaningful and growing contributor to overall farm revenue.
              </p>

              <p>
                On the milk side,{" "}
                <Link href="/crop-insurance/dairy-livestock">
                  Dairy Revenue Protection (DRP)
                </Link>{" "}
                remains a cornerstone risk management tool. With ongoing
                volatility in Class III and Class IV markets, DRP helps
                stabilize income and support more predictable cash flow.
                Notably, DRP delivered significant indemnity payments to
                producers in the first quarter. Since the beginning of the
                year, Class III and Class IV futures have increased by
                approximately $7.00/cwt, creating additional risk management
                opportunities for forward coverage. As milk prices have
                shifted higher, DRP participation for 2026 has increased,
                with approximately 30% of U.S. milk production covered
                already for Q3.
              </p>

              <p>
                Finally, it’s important to remember that these programs are
                not static. Each year, particularly with updates that take
                effect on July 1, risk management tools continue to evolve
                and modernize to better meet the needs of today’s producers.
                Staying informed and working with a trusted advisor ensures
                you’re maximizing the value of the tools available.
              </p>

              <hr />

              <p>
                <strong>Editor:</strong>{" "}
                <a href="mailto:Chris.Laughton@FarmCreditEast.com?subject=Knowledge%20Exchange%20Partner">
                  Chris Laughton
                </a>
                <br />
                <strong>Contributors:</strong>{" "}
                <em>
                  <a
                    href="https://www.cobank.com/people/expert/corey-geiger"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Corey Geiger, Lead Economist, Dairy, CoBank
                  </a>
                </em>
              </p>

              <hr />

              <p>
                <a
                  href="https://www.farmcrediteast.com/resources/Industry-Trends-and-Outlooks?category=Knowledge%20Exchange%20Partner"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View previous editions of the KEP
                </a>
              </p>

              <p className="byline-note">
                Farm Funders Disclaimer: The information provided in this
                communication/newsletter is not intended to be investment,
                tax, or legal advice and should not be relied upon by
                recipients for such purposes. Farm Funders does not make any
                representation or warranty regarding the content, and
                disclaims any responsibility for the information, materials,
                third-party opinions, and data included in this report. In no
                event will Farm Funders be liable for any decision made or
                actions taken by any person or persons relying on the
                information contained in this report.
              </p>
            </article>

            <p style={{ margin: "0 0 24px" }}>
              <a
                href="#maincontent"
                style={{
                  color: "var(--clay)",
                  textDecoration: "underline",
                  textUnderlineOffset: "2px",
                  fontFamily: "var(--font-barlow), Barlow, Arial, sans-serif",
                  fontWeight: 600,
                }}
              >
                ↑ Back to top
              </a>
            </p>

            <div className="tags">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.41l9 9c.36.36.86.59 1.41.59.55 0 1.05-.23 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5 8 5.67 8 6.5 7.33 8 6.5 8z" />
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

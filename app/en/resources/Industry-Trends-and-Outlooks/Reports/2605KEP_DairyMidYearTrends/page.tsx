import type { Metadata } from "next";
import Link from "next/link";

const TITLE = "Dairy Markets Show Positive Trends";
const DESCRIPTION = "Dairy Markets Show Positive Trends — May 3, 2026.";
const SITE_URL = "https://farm-funding.vercel.app";
const ARTICLE_URL = `${SITE_URL}/resources/Industry-Trends-and-Outlooks/Reports/2605KEP_DairyMidYearTrends`;

const OUTLOOKS_PATH = "/resources/Industry-Trends-and-Outlooks";
const BLOG_PATH = "/resources/todays-harvest-Blog";
const AUTHORS_PATH = "/resources/Meet-the-Authors";

const CATEGORY = "Knowledge Exchange Partner";
const CATEGORY_HREF = `${OUTLOOKS_PATH}?category=knowledge-exchange-partner`;
const DATE = "May 3, 2026";

const IMAGE_BASE =
  "https://farm-funders.com/-/media/farm-credit-east/knowledge-exchange/KEP/2026";

export const metadata: Metadata = {
  title: `${TITLE} | Farm Funding`,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: ARTICLE_URL,
    type: "article",
    publishedTime: "2026-05-03",
  },
};

const intro = [
  "After some rather sluggish dairy prices to start out the new year, margins to make milk have improved and that is one reason for a positive outlook. Another reason for optimism is strong consumer demand for protein and dairy wins two ways – protein found in milk and protein from beef sales. A third reason to be optimistic is new dairy plant investment continues to be announced this year and by my count, there is $13 billion of new capital investment in U.S. dairy plants and that will ensure a home for the growing milk supply.",
  "While many indicators point upward, there are some reasons for caution. For starters, the EU continues to show strong growth in milk production with output being up 5% or more year-over-year from October 2025 through February 2026. That’s noteworthy growth for the world’s largest dairy product and ingredient exporter that’s 1.6 times the size of the U.S. dairy sector. Another reason for caution is the ongoing conflict in the Middle East that is making it extremely difficult to move products. That includes dairy products into, and fuel and fertilizer out of the region.",
];

const butterfatGrowth = [
  "Many Middle East countries import over 90% of their food supply. For dairy, that includes a great deal of butterfat. Bringing this back to U.S. milk markets, our country has been a butterfat-deficit market for many decades. However, the tide has turned, and America may be structurally short on dairy protein and long on butterfat moving forward.",
  "This will change how products and ingredients move in both domestic and export markets. We will balance product flows based on dairy protein production, and butterfat will need to find new markets, with the export market being a significant focus. This transition will create more market volatility, as we have already witnessed from August 2025 through March 2026.",
  "Prior to the creation of the North American Free Trade Agreement in 1994 and the U.S. Dairy Export Council in 1995, the U.S. was largely a nonplayer on the dairy export stage. By 2011, the U.S. was exporting 16.5% of its milk production on a skim solids basis. In other words, the U.S. kept the skimmed off butterfat from the milk stream and sold the skim solids (largely in the form of protein and lactose) to customers around the world. In fact, the spread was so large between the product mix that exports measured on a milk fat basis were a meager 4.6% of U.S. milk production.",
  "The story hadn’t changed much by 2024. That year, U.S. dairy processors exported 21.6% of America’s milk production on a skim solids basis. But exports on a milk-fat basis hardly budged, posting just 5.2% in exports even though total exports represented 17% of the nation’s total milk production. In other words, domestic consumers were buying nearly all of America’s butterfat production in the form of dairy products and little was available for export markets.",
  "Not only were Americans buying domestic butterfat, but they also started buying more imported butter. In 2011, the U.S. imported 10 million pounds of butter. By 2021, butter imports grew 10-fold to reach 100 million pounds. With more demand from American consumers, butter imports grew another 72% to reach 173 million pounds of imported butter by 2024. With strong domestic butterfat production in 2025, butter imports fell 57% to 98 million pounds.",
  "Along the way, U.S. multiple component pricing factors, via the Federal Milk Marketing Order system, gave stronger signals to produce more butterfat. As a result, butterfat percentages on farm went on a historic run, moving from 3.66% in 2010 to 4.29% in 2025. This growth stemmed from a combination of changes in feed rations and the influx of genetic change via artificial breeding programs and the new science of genomic predictions.",
  "This rapid growth in butterfat eventually pushed the production pendulum in the opposite direction mid-year 2025 — long on butterfat and short on protein. Not only did production of products like cottage cheese, dairy nutritional shakes and Greek yogurt demand more protein and less fat, but butterfat production on a pounds basis also began growing by 5% to 6% in any given month by mid-year. That strong growth began outstripping domestic market demand to absorb farmgate butterfat production.",
  "As a result, butter prices on the CME began to drop from $2.44 per pound on Aug. 1, 2025, to $1.50 per pound by mid-November just when butter sales typically would peak as the holiday season approached.",
  "Spot butter prices have since improved to the $1.75 to $2 per pound range. Domestic market demand didn’t improve spot prices; export markets did. The U.S. exported an impressive 269 million pounds of butterfat and anhydrous milkfat in 2025, boosting total export volume 271% from the previous year. More importantly to balancing markets, 60% of those 269 million pounds of butterfat were exported in the second half of the year when the U.S. needed to move inventory.",
];

const classIII = [
  "This huge increase in domestic butterfat production has created significant volatility in Class III cheese and whey markets, and an even greater downturn in Class IV butter and powder markets. In August 2025, Class III contracts for April 2026 to August 2026 milk traded between $17 to $18. In January, due to market pressures from butterfat, those same contracts traded between $15 and $17. Then with strong butterfat exports and other factors, April 24 CME futures nearly rebounded to pre-August levels with stronger prices seen in later months’ contracts.",
];

const classIV = [
  "The situation was more dramatic in the Class IV space. In August 2025, all contracts for the March 2026 to July 2026 window traded above $19 per hundredweight. By January 9, 2026, those same contracts dropped to the $14 to $15 range. After the impact of strong butterfat exports and the recent tightening nonfat dry milk market that sent prices to record highs, April to July 2026 CME Class IV futures climbed to pre-August 2025 trading levels and in some months those contracts traded close to or over $20.",
  "Protein has become the most important consumer demand trend and that’s where the growing U.S. dairy cow herd comes into play as beef prices stand at record highs. That begs the question: how much larger will the U.S. dairy cow herd grow to reap rewards from beef-on-dairy calves and may that resulting growth in milk production cause an oversupply in the marketplace?",
  "The U.S. dairy cow milking herd is at its largest in over 30 years at 9.621 million head in March. Compared to a year ago, the herd is 187,000 head (+1.9%) larger and produced about the same amount of milk per cow. However, these additional cows added to total milk production, which grew by 2.3%. March butterfat production grew 3.3% and protein pounds were up 3.6% reflecting feeding adjustments for lower butterfat prices in recent months.",
  "Beef-on-dairy calves are one of the primary reasons to keep dairy cows longer in the herd, especially after notching a record $1,918 per head in mid-April. Recent visits by CoBank (Farm Funders’s lending bank) staff to feedlots in Texas mentioned 15% to 20% of cattle on feed are beef-on-dairy animals. These crossbreds grow well in the feedlot and can weigh over 1,700 pounds before heading to the beef packer due to the larger frame provided by the dairy genetics. Strong interest in beef-on-dairy calves should continue given the U.S. beef cow herd is at the lowest level in 65 years. Plus, beef sales to consumers have shown 27 straight months of volume growth.",
  "While the are many reasons for optimism, dairy markets are not out of the proverbial woods. The 2025 export year might have been even better had there not been geopolitical issues and tariffs making an impact. The largest catalyst supporting U.S. sales growth was lower cheese and butter prices compared to the world’s top two dairy exporters – the EU and New Zealand. Given this situation, dairy farmers and processors alike should consider hedging opportunities when market prices look favorable and cover expenses because small product movements could significantly move prices.",
];

const riskManagement = [
  "Contributed by Megan Clancy, Crop Growers Dairy & Livestock Risk Management Senior Advisor",
  "Crop Growers is an equal opportunity provider.",
  "As we move through the second half of the year, risk management remains a critical component of maintaining profitability in today’s dairy environment. While milk prices and feed costs continue to shift, protecting both core revenue and growing revenue streams, such as beef-on-dairy calves, has never been more important.",
  "Livestock Risk Protection (LRP) continues to offer strong opportunities to lock in favorable calf prices. With cattle markets remaining historically strong, LRP allows producers to establish a price floor on calves. Current coverage prices range up to $1,500 per head. This protection is especially relevant as more dairy operations capitalize on beef genetics, making calves a meaningful and growing contributor to overall farm revenue.",
  "On the milk side, Dairy Revenue Protection (DRP) remains a cornerstone risk management tool. With ongoing volatility in Class III and Class IV markets, DRP helps stabilize income and support more predictable cash flow. Notably, DRP delivered significant indemnity payments to producers in the first quarter. Since the beginning of the year, Class III and Class IV futures have increased by approximately $7.00/cwt, creating additional risk management opportunities for forward coverage. As milk prices have shifted higher, DRP participation for 2026 has increased, with approximately 30% of U.S. milk production covered already for Q3.",
  "Finally, it’s important to remember that these programs are not static. Each year, particularly with updates that take effect on July 1, risk management tools continue to evolve and modernize to better meet the needs of today’s producers. Staying informed and working with a trusted advisor ensures you’re maximizing the value of the tools available.",
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
    title: "2026 Farm Bill Takes Shape: Comparing the House and Senate Proposals",
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
];

const TAGS: [string, string][] = [
  ["outlook", "outlook"],
  ["dairy", "dairy"],
  ["economy", "economy"],
  ["risk management", "risk-management"],
];

const styles = `
  .dairy-report,
  .dairy-report * { box-sizing: border-box; }

  .dairy-report {
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
    color: var(--grey);
  }

  .dairy-report .report-hero {
    position: relative;
    width: 100%;
    padding-bottom: 88px;
    background: var(--clay);
    color: #fff;
  }

  .dairy-report .hero-inner {
    width: min(1800px, calc(100% - 120px));
    margin: 0 auto;
    padding: 40px 7px 0;
  }

  .dairy-report .hero-date {
    margin: 0 0 16px;
    color: #fff;
    text-align: right;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
  }

  .dairy-report .hero-kicker {
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

  .dairy-report .hero-kicker:hover { text-decoration: underline; }

  .dairy-report .hero-title {
    max-width: 1220px;
    margin: 0;
    color: var(--cream);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 52px;
    font-weight: 700;
    line-height: 1.08;
    letter-spacing: -0.7px;
  }

  .dairy-report .article-container {
    width: min(984px, calc(100% - 40px));
    margin: 48px auto 0;
    padding-bottom: 0;
  }

  .dairy-report .copy,
  .dairy-report .meta,
  .dairy-report .footnotes {
    width: 100%;
    max-width: 820px;
    margin-left: auto;
    margin-right: auto;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
  }

  .dairy-report .copy p {
    margin: 0 0 24px;
    color: var(--grey);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.68;
  }

  .dairy-report .contents {
    margin: 0 0 28px;
    padding: 18px 0 16px;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.6;
  }

  .dairy-report .contents-title {
    margin: 0 0 8px !important;
    color: var(--charcoal) !important;
    font-weight: 700 !important;
  }

  .dairy-report .contents a {
    margin-right: 18px;
    color: var(--grey);
    text-decoration: none;
  }

  .dairy-report .contents a:hover { text-decoration: underline; }

  .dairy-report .issue {
    margin: 0 0 55px;
  }

  .dairy-report .issue p {
    margin: 0;
    color: var(--charcoal);
    font-size: 18px;
    line-height: 1.55;
  }

  .dairy-report .contributor {
    font-weight: 700 !important;
    color: var(--charcoal) !important;
  }

  .dairy-report .report-section {
    margin: 0 0 64px;
  }

  .dairy-report .report-section h2 {
    margin: 0 0 30px;
    color: var(--grey);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 34px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.35px;
  }

  .dairy-report .risk-section {
    margin-top: 10px;
    padding-top: 26px;
    border-top: 1px solid var(--line);
  }

  .dairy-report .risk-section h2 {
    font-size: 34px;
  }

  .dairy-report .risk-contributor,
  .dairy-report .risk-provider {
    color: var(--charcoal) !important;
    font-weight: 700 !important;
  }

  .dairy-report .report-image {
    width: 100%;
    max-width: 820px;
    margin: 18px auto 32px;
  }

  .dairy-report .report-image img {
    display: block;
    width: 100%;
    height: auto;
  }

  .dairy-report .meta {
    margin-top: 28px;
    color: var(--grey);
    font-size: 14px;
    line-height: 1.65;
  }

  .dairy-report .meta p { margin: 0 0 10px; }
  .dairy-report .meta strong { color: var(--charcoal); }
  .dairy-report .meta a { color: var(--clay); }

  .dairy-report .tags {
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

  .dairy-report .tags svg {
    width: 17px;
    height: 17px;
    margin-right: 4px;
    color: var(--orange);
    flex: 0 0 auto;
  }

  .dairy-report .tags a {
    color: var(--clay);
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .dairy-report .tag-separator { margin-right: 2px; color: var(--grey); }

  .dairy-report .share {
    width: min(984px, 100%);
    margin: 0 auto;
    padding: 8px 0 62px;
  }

  .dairy-report .share-label {
    margin: 0 0 16px;
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 17px;
    font-weight: 600;
    line-height: 1.3;
  }

  .dairy-report .share-list {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .dairy-report .share-list a {
    display: inline-flex;
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: #fff;
    text-decoration: none;
  }

  .dairy-report .share-list svg { width: 22px; height: 22px; }
  .dairy-report .share-x { background: #14171a; }
  .dairy-report .share-facebook { background: #1877f2; }
  .dairy-report .share-linkedin { background: #0a66c2; }
  .dairy-report .share-email { background: var(--forest); }

  .dairy-report .related-wrap { width: 100%; background: var(--cream); }

  .dairy-report .related {
    width: 91.8%;
    max-width: 1760px;
    margin: 0 auto;
    padding: 72px 0 70px;
  }

  .dairy-report .section-title,
  .dairy-report .authors-title {
    margin: 0;
    color: var(--forest);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 44px;
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -0.5px;
  }

  .dairy-report .related-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 80px;
    margin-top: 46px;
  }

  .dairy-report .related-card { min-width: 0; }

  .dairy-report .related-category {
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

  .dairy-report .related-category:hover { background: var(--clay); }

  .dairy-report .related-title {
    display: block;
    margin-top: 18px;
    color: var(--olive);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.25;
    text-decoration: none;
  }

  .dairy-report .related-title:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  .dairy-report .related-date {
    margin: 20px 0 0;
    color: var(--grey);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.3;
    text-transform: uppercase;
  }

  .dairy-report .authors-cta {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
    gap: 50px;
    width: 91.8%;
    max-width: 1760px;
    margin: 0 auto;
    padding: 72px 0;
  }

  .dairy-report .authors-copy { min-width: 0; }

  .dairy-report .authors-title { margin-bottom: 18px; }

  .dairy-report .authors-text {
    max-width: 980px;
    margin: 0;
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 21px;
    font-weight: 400;
    line-height: 1.5;
  }

  .dairy-report .authors-button {
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

  .dairy-report .authors-button:hover { background: var(--clay-dark); }

  @media (max-width: 1400px) {
    .dairy-report .hero-title { font-size: 46px; }
  }

  @media (max-width: 991px) {
    .dairy-report .hero-inner {
      width: calc(100% - 56px);
      padding: 22px 0 36px;
    }

    .dairy-report .hero-title { font-size: 42px; line-height: 1.1; }

    .dairy-report .article-container {
      width: min(960px, calc(100% - 56px));
      margin-top: 36px;
    }

    .dairy-report .related,
    .dairy-report .authors-cta { width: calc(100% - 56px); }

    .dairy-report .related-grid { gap: 34px; }
    .dairy-report .authors-cta { gap: 30px; }
  }

  @media (max-width: 767px) {
    .dairy-report .hero { padding-bottom: 0; }

    .dairy-report .hero-inner {
      width: 100%;
      padding: 24px 14px 34px;
    }

    .dairy-report .hero-date {
      margin-bottom: 12px;
      font-size: 15px;
    }

    .dairy-report .hero-kicker {
      margin-bottom: 20px;
      padding: 4px 7px;
      font-size: 14px;
    }

    .dairy-report .hero-title {
      font-size: 32px;
      line-height: 1.14;
      letter-spacing: -0.35px;
    }

    .dairy-report .article-container {
      width: calc(100% - 28px);
      margin-top: 28px;
    }

    .dairy-report .copy,
    .dairy-report .meta,
    .dairy-report .footnotes { max-width: none; }

    .dairy-report .copy p { font-size: 16px; line-height: 1.65; }
    .dairy-report .issue p { font-size: 16px; }

    .dairy-report .contents { line-height: 1.9; }
    .dairy-report .contents a { display: block; margin: 0; }

    .dairy-report .report-section { margin-bottom: 52px; }
    .dairy-report .report-section h2 { font-size: 30px; margin-bottom: 22px; }
    .dairy-report .risk-section h2 { font-size: 29px; }

    .dairy-report .report-image { margin: 14px auto 26px; }

    .dairy-report .tags,
    .dairy-report .share { width: 100%; }

    .dairy-report .share { padding-bottom: 38px; }

    .dairy-report .related {
      width: calc(100% - 28px);
      padding-top: 38px;
      padding-bottom: 42px;
    }

    .dairy-report .section-title,
    .dairy-report .authors-title {
      font-size: 30px;
      line-height: 1.2;
      letter-spacing: 0;
    }

    .dairy-report .related-grid {
      grid-template-columns: 1fr;
      gap: 28px;
      margin-top: 30px;
    }

    .dairy-report .related-title { font-size: 22px; line-height: 1.3; }

    .dairy-report .authors-cta {
      grid-template-columns: 1fr;
      width: calc(100% - 28px);
      gap: 22px;
      padding-top: 38px;
      padding-bottom: 42px;
    }

    .dairy-report .authors-text { font-size: 17px; line-height: 1.5; }
    .dairy-report .authors-button { justify-self: start; }
  }
`;

function ReportImage({
  id,
  src,
  alt,
}: {
  id: string;
  src: string;
  alt: string;
}) {
  return (
    <figure id={id} className="report-image">
      <img src={src} alt={alt} />
    </figure>
  );
}

function Paragraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <p key={`${index}-${paragraph.slice(0, 24)}`}>{paragraph}</p>
      ))}
    </>
  );
}

export default function DairyMidYearTrendsPage() {
  const shareText = encodeURIComponent(TITLE);
  const shareUrl = encodeURIComponent(ARTICLE_URL);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <main className="dairy-report">
        <header className="report-hero">
          <div className="hero-inner">
            <p className="hero-date">{DATE}</p>
            <Link className="hero-kicker" href={CATEGORY_HREF}>
              {CATEGORY}
            </Link>
            <h1 className="hero-title" id="maincontent">
              {TITLE}
            </h1>
          </div>
        </header>

        <article className="article-container">
          <div className="copy">
            <div className="contents">
              <p className="contents-title">Contents</p>
              <a href="#butterfat-growth">Butterfat Growth</a>
              <a href="#low-milkfat">Low-milkfat Products</a>
              <a href="#butter-imports">Butter Imports</a>
              <a href="#butterfat-exports">Butterfat Exports</a>
              <a href="#class-iii">Class III Milk Futures</a>
              <a href="#class-iv">Class IV Futures</a>
              <a href="#risk-management">Protecting Margins</a>
            </div>

            <div className="issue">
              <p>Volume 20, Issue 5</p>
              <p>May 2026</p>
            </div>

            <p className="contributor">
              Contributed by CoBank dairy lead economist Corey Geiger
            </p>

            <Paragraphs paragraphs={intro} />

            <section id="butterfat-growth" className="report-section">
              <h2>Butterfat growth remains strong</h2>

              <p>{butterfatGrowth[0]}</p>
              <p>{butterfatGrowth[1]}</p>
              <p>{butterfatGrowth[2]}</p>

              <ReportImage
                id="low-milkfat"
                src={`${IMAGE_BASE}/Low%20Milkfat%20Products.png`}
                alt="Low-milkfat products outpacing milk fat in U.S. dairy exports"
              />

              <p>{butterfatGrowth[3]}</p>
              <p>{butterfatGrowth[4]}</p>

              <ReportImage
                id="butter-imports"
                src={`${IMAGE_BASE}/Butter%20Imports.png`}
                alt="Butter imports into the U.S. dropped 57% in 2025"
              />

              <p>{butterfatGrowth[5]}</p>
              <p>{butterfatGrowth[6]}</p>
              <p>{butterfatGrowth[7]}</p>

              <ReportImage
                id="butterfat-exports"
                src={`${IMAGE_BASE}/Butterfat%20Exports.png`}
                alt="Butterfat exports set a record in 2025"
              />

              <p>{butterfatGrowth[8]}</p>
            </section>

            <section id="class-iii" className="report-section">
              <h2>Class III Milk Futures</h2>
              <Paragraphs paragraphs={classIII} />

              <ReportImage
                src={`${IMAGE_BASE}/Class%20III%20Milk%20Futures.png`}
                alt="Class III milk futures have rebounded from January 2026 lows"
                id="class-iii-chart"
              />
            </section>

            <section id="class-iv" className="report-section">
              <h2>Class IV Futures</h2>
              <p>{classIV[0]}</p>

              <ReportImage
                src={`${IMAGE_BASE}/Class%20IV%20Futures.png`}
                alt="Class IV futures quickly turned from bearish to bullish"
                id="class-iv-chart"
              />

              <Paragraphs paragraphs={classIV.slice(1)} />
            </section>

            <section id="risk-management" className="report-section risk-section">
              <h2>Risk Management Update: Protecting Margins in a Volatile Market</h2>
              <p className="risk-contributor">{riskManagement[0]}</p>
              <p className="risk-provider">{riskManagement[1]}</p>
              <p>{riskManagement[2]}</p>
              <p>
                <a href="https://www.rma.usda.gov/en/Topics/Livestock-Risk-Protection" target="_blank" rel="noreferrer">
                  Livestock Risk Protection (LRP)
                </a>{" "}
                continues to offer strong opportunities to lock in favorable calf prices. With cattle markets remaining historically strong, LRP allows producers to establish a price floor on calves. Current coverage prices range up to $1,500 per head. This protection is especially relevant as more dairy operations capitalize on beef genetics, making calves a meaningful and growing contributor to overall farm revenue.
              </p>
              <p>
                On the milk side, <a href="https://www.rma.usda.gov/en/Topics/Dairy-Revenue-Protection" target="_blank" rel="noreferrer">Dairy Revenue Protection (DRP)</a>{" "}
                remains a cornerstone risk management tool. With ongoing volatility in Class III and Class IV markets, DRP helps stabilize income and support more predictable cash flow. Notably, DRP delivered significant indemnity payments to producers in the first quarter. Since the beginning of the year, Class III and Class IV futures have increased by approximately $7.00/cwt, creating additional risk management opportunities for forward coverage. As milk prices have shifted higher, DRP participation for 2026 has increased, with approximately 30% of U.S. milk production covered already for Q3.
              </p>
              <p>{riskManagement[5]}</p>
            </section>
          </div>

          <div className="meta">
            <p>
              <strong>Editor:</strong>{" "}
              <a href="mailto:Chris.Laughton@FarmCreditEast.com">
                Chris Laughton (Chris.Laughton@FarmCreditEast.com)
              </a>
            </p>
            <p>
              <strong>Contributors:</strong>{" "}
              <a href="https://www.cobank.com" target="_blank" rel="noreferrer">
                Corey Geiger, Lead Economist, Dairy, CoBank
              </a>
            </p>
            <p>
              <strong>Previous editions:</strong>{" "}
              <a href="https://www.farmcrediteast.com/resources/knowledge-exchange-partners" target="_blank" rel="noreferrer">
                View previous editions of the KEP
              </a>
            </p>
            <p>
              <strong>Farm Funders Disclaimer:</strong> The information provided in this communication/newsletter is not intended to be investment, tax, or legal advice and should not be relied upon by recipients for such purposes. Farm Funders does not make any representation or warranty regarding the content, and disclaims any responsibility for the information, materials, third-party opinions, and data included in this report. In no event will Farm Funders be liable for any decision made or actions taken by any person or persons relying on the information contained in this report.
            </p>
          </div>

          <div className="tags">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.41l9 9c.36.36.86.36 1.41.59.55-.23 1.41-.59 1.41-1.41l7-7c.37-.36.59-.86.59-1.41 0-.55-.22-1.06-.59-1.42zM6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5 8 5.67 8 6.5 7.33 8 6.5 8z" />
            </svg>
            <span>Tags:</span>
            {TAGS.map(([label, slug], index) => (
              <span key={slug}>
                <Link href={`${OUTLOOKS_PATH}?tag=${encodeURIComponent(slug)}`}>
                  {label}
                </Link>
                {index < TAGS.length - 1 && <span className="tag-separator">,</span>}
              </span>
            ))}
          </div>

          <section className="share" aria-label="Share this article">
            <p className="share-label">Share this post on</p>
            <ul className="share-list">
              <li>
                <a className="share-x" href={`https://twitter.com/share?text=${shareText}&url=${shareUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on X">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
              </li>
              <li>
                <a className="share-facebook" href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" /></svg>
                </a>
              </li>
              <li>
                <a className="share-linkedin" href={`https://www.linkedin.com/shareArticle?url=${shareUrl}&title=${shareText}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" /></svg>
                </a>
              </li>
              <li>
                <a className="share-email" href={`mailto:?subject=${shareText}&body=${shareUrl}`} aria-label="Share by email">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg>
                </a>
              </li>
            </ul>
          </section>
        </article>

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

        <section className="authors-cta">
          <div className="authors-copy">
            <h2 className="authors-title">Meet the Authors</h2>
            <p className="authors-text">
              Connect with and discover our Today&rsquo;s Harvest blog authors and their broad range of financial and Northeast agricultural expertise.
            </p>
          </div>
          <Link href={AUTHORS_PATH} className="authors-button">
            Meet the Authors
          </Link>
        </section>
      </main>
    </>
  );
}

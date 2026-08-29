import type { Metadata } from "next";
import Link from "next/link";

const TITLE =
  "United States Citizenship and Immigration Service Clears H-2A Path for Dairy Employers";
const DESCRIPTION =
  "United States Citizenship and Immigration Service Clears H-2A Path for Dairy Employers";

const ARTICLE_URL =
  "https://farm-funding.com/en/resources/Industry-Trends-and-Outlooks/Reports/2607KEP_H2AForDairyEmployers.html";
const OUTLOOKS_PATH = "/resources/Industry-Trends-and-Outlooks";
const BLOG_PATH = "/resources/todays-harvest-Blog";
const AUTHORS_PATH = "en/resources/Meet-the-Authors";

const CATEGORY = "Knowledge Exchange Partner";
const CATEGORY_HREF = `${OUTLOOKS_PATH}?category=Knowledge%20Exchange%20Partner`;
const DATE = "July 7, 2026";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "United States Citizenship and Immigration Service Clears H-2A Path for Dairy Employers, Farm Funding, Knowledge Exchange Partner, dairy, labor, H-2A, L.J. D\u2019Arrigo, Harris Beach Murtha Attorneys at Law, Chris Laughton",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: ARTICLE_URL,
    type: "article",
    publishedTime: "2026-07-07",
    images: [
      {
        url: "https://farm-funding.com/-/media/farm-credit-east/featured-images/Dairy-cows-milking.ashx",
      },
    ],
  },
};

// Contents/TOC entries — hrefs match the live page's in-page anchors exactly.
const TOC = [
  { label: "H-2A for Dairies", href: "#Dairies" },
  { label: "The Statutory Foundation", href: "#foundation" },
  { label: "Employer's Need", href: "#need" },
  { label: "How to Establish Need", href: "#EstablishNeed" },
  { label: "What USCIS Will Be Looking For", href: "#lookingfor" },
  { label: "Practical Takeaways", href: "#takeaways" },
  { label: "A Word of Caution", href: "#caution" },
];

const TAGS: [string, string][] = [
  ["dairy", "dairy"],
  ["employee management", "employee-management"],
  ["farm management", "farm management"],
  ["labor", "labor"],
];

const RELATED_ARTICLES = [
  {
    category: "Ag Economy",
    categoryHref: `${OUTLOOKS_PATH}?category=ag-economy`,
    title: "2025 Northeast Dairy Farm Summary & Mid-Year Outlook",
    href: `${OUTLOOKS_PATH}/Reports/2025NEDairyFarmSummary2026MidYearOutlook.html`,
    date: "July 10, 2026",
  },
  {
    category: "Business Tips and Tools",
    categoryHref: `${BLOG_PATH}?category=business-tips-and-tools`,
    title:
      "A Smarter Safety Net: What the New USDA Payment Rules Mean for Your Farm",
    href: `${BLOG_PATH}/260630NewUSDAPaymentRulesForYourFarm.html`,
    date: "June 30, 2026",
  },
  {
    category: "Crop Insurance",
    categoryHref: `${BLOG_PATH}?category=Crop%20Insurance`,
    title:
      "Key Changes Coming to DRP, LGM and LRP Programs: What Producers Need to Know",
    href: `${BLOG_PATH}/260603CG_KeyChangesToDRPandLGMandLRP.html`,
    date: "June 3, 2026",
  },
];


const styles = `
  .h2a-page,
  .h2a-page * { box-sizing: border-box; }

    .h2a-page {
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
    /* was overflow-x: hidden — see comment above the styles block */
    overflow-x: clip;
    background: #fff;
    color: var(--charcoal);
  }

  /* Hero */
  .h2a-page .hero {
    position: relative;
    width: 100%;
    padding-bottom: 88px;
    background: var(--clay);
    color: #fff;
  }

  .h2a-page .hero-inner {
    width: min(1800px, calc(100% - 120px));
    margin: 0 auto;
    padding: 40px 7px 0;
  }

  .h2a-page .date {
    margin: 0 0 16px;
    text-align: right;
    color: #fff;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
  }

  .h2a-page .category {
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

  .h2a-page .category:hover { text-decoration: underline; }

  .h2a-page h1 {
    max-width: 1220px;
    margin: 0;
    color: var(--cream);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 52px;
    font-weight: 700;
    line-height: 1.08;
    letter-spacing: -0.7px;
  }

  /* Two-column layout: sticky Contents + article.
     grid + align-items: start (plus align-self: start and height: fit-content
     on .sidebar itself) is what keeps the Contents box from stretching to the
     article's height — do not add a fixed/percentage height to .sidebar. */
            .h2a-page .layout {
    width: min(1280px, calc(100% - 32px));
    margin: 48px auto 0;
    display: grid;
    grid-template-columns: 300px minmax(0, 820px);
    column-gap: 220px;
    justify-content: start;
    align-items: start;
  }

  .h2a-page .sidebar {
    position: sticky;
    /* Offset below the site header. This page component doesn't include
       the global header, so 96px is an estimate — set this to your
       header's actual rendered height (plus a little breathing room). */
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

    .h2a-page .toc-static { display: block; width: 100%; }
  .h2a-page .toc-dropdown { display: none; width: 100%; }

  /* .toc-title now targets the <summary>. Forcing display: flex (instead of
     the browser default display: list-item) removes the native disclosure
     triangle in every engine without needing ::marker/::-webkit-details-marker
     hacks, and lets us right-align a custom chevron next to the label. */
  .h2a-page .toc-title {
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

    .h2a-page .toc-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

    .h2a-page .toc-list a {
    display: block;
    padding: 4px 0;
    color: var(--clay);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 16px;
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .h2a-page .toc-list a:hover { color: var(--forest); }

  .h2a-page .article { min-width: 0; }

  .h2a-page .copy {
    width: 100%;
    max-width: 820px;
    padding-bottom: 12px;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    color: var(--charcoal);
  }

  .h2a-page .copy p,
  .h2a-page .copy li {
    margin: 0 0 24px;
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.68;
  }

  .h2a-page .copy .lede {
    font-weight: 700;
  }

  .h2a-page .copy .byline-note { font-style: italic; }

  .h2a-page .copy strong { font-weight: 700; }
  .h2a-page .copy em { font-style: italic; }

    .h2a-page .copy h3,
  .h2a-page .copy > div[id] {
    scroll-margin-top: 110px;
  }

  .h2a-page .copy h3 {
    margin: 46px 0 20px;
    color: var(--charcoal);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.25px;
  }

  .h2a-page .copy ul,
  .h2a-page .copy ol {
    margin: 0 0 28px;
    padding-left: 30px;
  }

  .h2a-page .copy ul { list-style: disc; }
  .h2a-page .copy ol { list-style: decimal; }

  .h2a-page .copy li {
    margin-bottom: 14px;
    padding-left: 4px;
  }
  .h2a-page .copy li:last-child { margin-bottom: 0; }
  .h2a-page .copy li strong { display: inline; }

  .h2a-page .copy a {
    color: var(--clay);
    text-decoration: underline;
    text-underline-offset: 2px;
    text-decoration-thickness: 1px;
  }

  .h2a-page .copy a:hover { color: var(--forest); }

  .h2a-page .copy blockquote {
    margin: 0 0 24px;
    padding: 0 0 0 22px;
    border-left: 3px solid var(--line);
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 18px;
    font-weight: 500;
    font-style: italic;
    line-height: 1.72;
  }

    .h2a-page .copy hr {
    margin: 28px 0;
    border: none;
    border-top: 1px solid var(--line);
  }

  @media (prefers-reduced-motion: reduce) {
    .h2a-page { scroll-behavior: auto; }
  }

  .h2a-page .button {
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

  .h2a-page .button:hover { background: var(--clay-dark); }

  .h2a-page .tags {
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

  .h2a-page .tags svg {
    width: 17px;
    height: 17px;
    margin-right: 4px;
    color: var(--orange);
  }

  .h2a-page .tags a { color: var(--clay); text-decoration: underline; }
  .h2a-page .tags a:hover { color: var(--forest); }
  .h2a-page .tag-separator { color: var(--grey); margin-right: 2px; }

  .h2a-page .share {
    padding: 8px 0 52px;
  }

  .h2a-page .share-label {
    margin: 0 0 16px;
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 17px;
    font-weight: 600;
  }

  .h2a-page .share-list {
    display: flex;
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .h2a-page .share-list a {
    display: inline-flex;
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: #fff;
    text-decoration: none;
  }

  .h2a-page .share-list svg { width: 22px; height: 22px; }
  .h2a-page .share-x { background: #14171a; }
  .h2a-page .share-facebook { background: #1877f2; }
  .h2a-page .share-linkedin { background: #0a66c2; }
  .h2a-page .share-email { background: #34a853; }

  /* Related */
  .h2a-page .related-wrap { width: 100%; background: var(--cream); }
  .h2a-page .related { width: min(1800px, calc(100% - 120px)); margin: 0 auto; padding: 34px 7px 54px; }
  .h2a-page .section-title {
    margin: 0;
    color: var(--forest);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.25;
  }
  .h2a-page .related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 34px; margin-top: 20px; }
  .h2a-page .related-card { padding-top: 26px; }
  .h2a-page .related-category {
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
  .h2a-page .related-title {
    display: block;
    margin-top: 26px;
    color: var(--olive);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 21px;
    font-weight: 700;
    line-height: 1.35;
    text-decoration: none;
  }
  .h2a-page .related-title:hover { text-decoration: underline; }
  .h2a-page .related-date {
    margin: 26px 0 0;
    color: var(--grey);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
  }

  /* Meet the Authors CTA */
  .h2a-page .authors-cta {
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    gap: 28px;
    width: min(1800px, calc(100% - 120px));
    margin: 0 auto;
    padding: 50px 7px;
  }
  .h2a-page .authors-copy { max-width: 900px; }
  .h2a-page .authors-text {
    margin: 14px 0 0;
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 20px;
    line-height: 1.5;
  }
  .h2a-page .authors-button { justify-self: end; min-width: 205px; }

    @media (max-width: 1400px) {
    .h2a-page h1 { font-size: 46px; }
  }

  @media (max-width: 991px) {
    .h2a-page .hero-inner { width: calc(100% - 56px); padding: 22px 0 36px; }
    .h2a-page h1 { font-size: 42px; line-height: 1.1; }
    .h2a-page .layout {
      width: calc(100% - 56px);
      grid-template-columns: 1fr;
      gap: 28px;
      margin-top: 36px;
    }
    /* Tablet/mobile: Contents stacks above the article and sticky is
       disabled entirely, per spec. The box itself now behaves as a
       dropdown: collapsed by default, toggled by tapping the
       "Contents" summary row. */
        .h2a-page .sidebar { position: static; top: auto; }
    .h2a-page .toc-static { display: none; }
    .h2a-page .toc-dropdown { display: block; }
    .h2a-page .toc-title {
      cursor: pointer;
      margin-bottom: 0;
      padding-bottom: 0;
    }
    .h2a-page .toc-dropdown[open] .toc-title {
      margin-bottom: 14px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--line);
    }
        .h2a-page .toc-title::after {
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
    .h2a-page .toc-dropdown[open] .toc-title::after {
      transform: rotate(-135deg);
    }
    .h2a-page .toc-dropdown:not([open]) .toc-list {
      display: none;
    }
    .h2a-page .copy { max-width: none; }
    .h2a-page .related,
    .h2a-page .authors-cta { width: calc(100% - 56px); }
  }

  @media (max-width: 767px) {
    .h2a-page .hero-inner { width: 100%; padding: 24px 14px 28px; }
    .h2a-page .date { margin-bottom: 12px; font-size: 15px; }
    .h2a-page .category { margin-bottom: 20px; font-size: 14px; }
    .h2a-page h1 { font-size: 32px; line-height: 1.14; letter-spacing: -.35px; }
    .h2a-page .layout { width: calc(100% - 28px); margin-top: 28px; gap: 24px; }
    .h2a-page .sidebar { padding: 14px 16px 16px; }
    .h2a-page .toc-title { font-size: 18px; }
    .h2a-page .toc-dropdown[open] .toc-title { margin-bottom: 10px; padding-bottom: 10px; }
    .h2a-page .toc-list { gap: 6px; }
    .h2a-page .copy p,
    .h2a-page .copy li { font-size: 16px; line-height: 1.65; }
    .h2a-page .copy h3 { margin-top: 34px; margin-bottom: 18px; font-size: 24px; line-height: 1.22; }
    .h2a-page .related { width: calc(100% - 28px); padding: 25px 0 35px; }
    .h2a-page .related-grid { grid-template-columns: 1fr; gap: 25px; }
    .h2a-page .authors-cta { grid-template-columns: 1fr; width: calc(100% - 28px); gap: 18px; padding: 38px 0; }
    .h2a-page .authors-button { justify-self: start; }
  }
`;

export default function H2ADairyEmployersPage() {
  const shareText = encodeURIComponent(TITLE);
  const shareUrl = encodeURIComponent(ARTICLE_URL);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="h2a-page">
        {/* HERO — date, category pill, title. No image, no byline. */}
        <section className="hero">
          <div className="hero-inner">
            <p className="date">{DATE}</p>
            <Link href={CATEGORY_HREF} className="category">
              {CATEGORY}
            </Link>
            <h1 id="maincontent">{TITLE}</h1>
          </div>
        </section>

        {/* CONTENTS (sticky on desktop, dropdown on mobile/tablet) + ARTICLE */}
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
                Volume 20, Issue 7
                <br />
                July 2026
              </p>

              <p className="byline-note">
                By L.J. D&rsquo;Arrigo, Harris Beach Murtha Attorneys at Law,
                originally published on Harris Beach Murtha Attorneys at Law
                blog on June 18, 2026. Republished with permission.
              </p>

              <div id="Dairies">
                <p>
                  For decades, America&rsquo;s dairy producers have been the
                  odd industry out of the{" "}
                  <a
                    href="https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-2a-temporary-agricultural-workers"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    H-2A temporary agricultural worker program
                  </a>
                  . While orchards, vegetable growers, nurseries and livestock
                  operations leveraged H-2A to address chronic labor
                  shortages, dairies were effectively left out to pasture
                  &mdash; sidelined by United States Citizenship and
                  Immigration Service&rsquo;s (USCIS) longstanding view that
                  the year-round nature of milking and herd care rendered
                  dairying needs &ldquo;permanent&rdquo; rather than
                  &ldquo;temporary or seasonal.&rdquo; For an industry that
                  has watched its domestic labor pool shrink year after year,
                  the lack of a viable agricultural visa option has been a
                  persistent and costly gap.
                </p>

                <p>
                  That gap has now narrowed considerably. On{" "}
                  <strong>June 17, 2026</strong>, USCIS issued Policy
                  Memorandum PM-602-0200, &ldquo;
                  <a
                    href="https://farm-funding.com/sites/default/files/document/policy-alerts/PM-602-0200-H2APetitionsForDairying-20260617.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Guidance on Temporary or Seasonal Need for H-2A Petitions
                    for Dairying
                  </a>
                  ,&rdquo; formally clarifying that dairy operations may, in
                  appropriate circumstances, qualify for the H-2A program.
                  The memorandum takes effect immediately and applies to all
                  USCIS adjudicators reviewing H-2A petitions involving dairy
                  work.
                </p>

                <p>
                  For dairy producers &mdash; and the immigration
                  practitioners who serve them &mdash; this is a long-awaited
                  turning point.
                </p>
              </div>

              <h3 id="foundation">
                The Statutory Foundation: Congress Already Included Dairying
              </h3>

              <p>
                The new policy is not a regulatory expansion; it is a
                recognition of what Congress wrote into law nearly four
                decades ago. As USCIS now expressly acknowledges, Section
                101(a)(15)(H)(ii)(a) of the Immigration and Nationality Act
                (INA), as amended by Section 301 of the{" "}
                <a
                  href="https://farm-funding.com/sites/default/files/eoir/legacy/2009/03/04/IRCA.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Immigration Reform and Control Act of 1986
                </a>{" "}
                (IRCA), incorporates the definitions of &ldquo;agricultural
                labor&rdquo; under{" "}
                <a
                  href="https://www.law.cornell.edu/uscode/text/26/3121"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Section 3121(g) of the Internal Revenue Code
                </a>{" "}
                and &ldquo;agriculture&rdquo; under{" "}
                <a
                  href="https://www.dol.gov/sites/dolgov/files/WHD/legacy/files/FairLaborStandAct.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Section 3(f) of the Fair Labor Standards Act
                </a>{" "}
                &mdash; <strong>both of which expressly include
                &ldquo;dairying&rdquo; and work performed on a
                &ldquo;dairy&rdquo; within the definition of qualifying H-2A
                agricultural labor.</strong>
              </p>

              <p>
                In other words, Congress decided long ago dairy work can
                qualify for H-2A. What was missing was clear adjudicative
                guidance on how dairy employers could satisfy the additional
                statutory requirement that the labor be &ldquo;of a temporary
                or seasonal nature.&rdquo;
              </p>

              <h3 id="need">
                The Core Holding: Focus on the Employer&rsquo;s Need, Not the
                Nature of the Job
              </h3>

              <p>
                The memorandum&rsquo;s analytical heart will be familiar to
                seasoned H-2 practitioners: the determination of
                &ldquo;temporary need&rdquo; turns on the employer&rsquo;s
                need, not on whether the underlying occupation is
                theoretically year-round. USCIS expressly relies on the 1987
                Department of Justice Office of Legal Counsel opinion (
                <em>
                  <a
                    href="https://www.justice.gov/olc/opinion/temporary-workers-under-%C2%A7%C2%A0301-immigration-reform-and-control-act"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Temporary Workers Under &sect; 301 of the Immigration
                    Reform &amp; Control Act
                  </a>
                </em>
                , 11 O.L.C. 39), which held:
              </p>

              <blockquote>
                &ldquo;Temporary&rdquo; work &hellip; refers to any job where
                the employer&rsquo;s need for the employee is temporary. The
                nature of the underlying job and, in particular, whether the
                underlying job itself can be described as permanent or
                temporary, is irrelevant.
              </blockquote>

              <p>
                Applying this principle, USCIS now confirms dairying is
                analytically similar to range sheep and goat herding &mdash;
                both involve year-round care of livestock, yet both can give
                rise to genuinely temporary or seasonal labor needs depending
                on the employer&rsquo;s specific operational cycle.
                Importantly, the memorandum makes clear that{" "}
                <strong>
                  dairying does not require the special procedures (such as
                  range housing or a distinct adverse effect wage rate) that
                  apply to range herding occupations
                </strong>
                ; dairy employers may rely on the standard H-2A process.
              </p>

              <h3 id="EstablishNeed">
                How Dairy Employers Can Establish Temporary or Seasonal Need
              </h3>

              <p>
                PM-602-0200 sets out a fact-driven, case-by-case framework.
                Under the governing regulation, 8 C.F.R. &sect;
                214.2(h)(5)(iv)(A):
              </p>

              <ul>
                <li>
                  <strong>Temporary</strong> employment is need that
                  &ldquo;will, except in extraordinary circumstances, last no
                  longer than one year&rdquo;; and
                </li>
                <li>
                  <strong>Seasonal</strong> employment is &ldquo;tied to a
                  certain time of year by an event or pattern &hellip; and
                  requires labor levels far above those necessary for ongoing
                  operations.&rdquo;
                </li>
              </ul>

              <p>
                The memorandum identifies several{" "}
                <strong>dairy-specific facts</strong> that may support a
                finding of temporary or seasonal need:
              </p>

              <ol>
                <li>
                  <strong>Distinct Calving and Breeding Cycles</strong>
                  <br />
                  USCIS recognizes that dairy cows are typically milked for
                  approximately 10 months after calving before being
                  &ldquo;dried off&rdquo; for two months prior to calving
                  again. For dairies that implement distinct breeding
                  seasons, employers may file separate H-2A petitions
                  &mdash; of up to 10 months each &mdash; for dairy herdsmen
                  tied to each calving cycle.
                </li>
                <li>
                  <strong>Seasonally Differentiated Duties</strong>
                  <br />
                  Even dairies without discrete breeding seasons may qualify
                  by showing that herdsmen perform materially different
                  duties at different times of year &mdash; for example,
                  pasture-based management in spring/summer versus
                  barn-based care, calf-rearing, or winterization tasks in
                  fall/winter &mdash; even though some tasks (like milking)
                  remain constant throughout the year.
                </li>
                <li>
                  <strong>Extraordinary Circumstances</strong>
                  <br />
                  A petitioner may also establish a need lasting longer than
                  one year (but not indefinitely) by showing, by a
                  preponderance of the evidence, that extraordinary
                  circumstances exist.
                </li>
              </ol>

              <h3 id="lookingfor">
                What USCIS Will Be Looking For &mdash; and Watching Out For
              </h3>

              <p>
                Consistent with{" "}
                <em>
                  <a
                    href="https://law.justia.com/cases/federal/appellate-courts/cadc/17-5202/17-5202-2018-08-17.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hispanic Affairs Project v. Acosta
                  </a>
                </em>
                , 901 F.3d 378 (D.C. Cir. 2018), USCIS will continue to
                scrutinize <strong>back-to-back, consecutive H-2A petitions</strong>{" "}
                that, taken together, suggest a permanent, year-round need
                rather than a true temporary or seasonal need. The memorandum
                identifies several inquiries adjudicators will consider,
                including:
              </p>

              <ul>
                <li>
                  Whether successive petitions reflect genuinely different
                  job duties (evaluated by examining the tools used and tasks
                  performed);
                </li>
                <li>
                  Whether each petition covers distinct temporary work,
                  supported by work contracts, invoices, employee schedules,
                  or evidence that the work recurs on the same cycle each
                  year and includes &ldquo;more than token gaps&rdquo; when
                  services are not needed;
                </li>
                <li>
                  Whether the petitioner is employing different beneficiaries
                  for each distinct period, supported by payroll records,
                  staffing/workload data or employment contracts.
                </li>
              </ul>

              <p>
                Conversely, the memorandum warns that consecutive petitions
                for the <strong>same</strong> dairying position with the{" "}
                <strong>same</strong> duties spanning more than a year
                &mdash; without an articulated seasonal event/pattern or
                extraordinary circumstances &mdash; will likely draw a
                Request for Evidence or denial.
              </p>

              <p>
                The memorandum also reaffirms that USCIS remains the{" "}
                <strong>final adjudicator of temporary or seasonal need</strong>,
                and may reach a different conclusion than the Department of
                Labor&rsquo;s Temporary Labor Certification (TLC) where
                &ldquo;substantial evidence&rdquo; in the record indicates
                the need is not temporary or seasonal &mdash; for example,
                where USCIS has information about the employer&rsquo;s prior
                filing history that DOL did not have when it issued the TLC.
              </p>

              <h3 id="takeaways">Practical Takeaways for Dairy Employers</h3>

              <p>
                For dairy producers across the country, PM-602-0200
                represents a meaningful &mdash; but not unlimited &mdash;
                opening. To position your operation for a successful H-2A
                filing under the new guidance, we recommend the following:
              </p>

              <ul>
                <li>
                  <strong>Map your operational cycle.</strong> Document
                  calving and breeding seasons, herd-rotation patterns and
                  any month-by-month variation in workforce demand. Charts
                  comparing labor levels across the calendar year are
                  powerful evidence of seasonality.
                </li>
                <li>
                  <strong>Differentiate job duties by season.</strong>{" "}
                  Carefully draft job descriptions for the{" "}
                  <a
                    href="https://www.dol.gov/agencies/eta/foreign-labor/forms"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ETA-790 and ETA-9142A
                  </a>{" "}
                  that reflect the actual seasonal variation in herdsmen
                  duties &mdash; not generic catch-all language.
                </li>
                <li>
                  <strong>Be strategic about consecutive filings.</strong> If
                  you anticipate filing back-to-back petitions, ensure each
                  is tied to a distinct, documentable event or pattern, and
                  consider whether separate beneficiary pools strengthen the
                  temporary-need narrative.
                </li>
                <li>
                  <strong>Maintain a clean audit trail.</strong> Payroll
                  records, production data, breeding/calving logs, and
                  contemporaneous staffing schedules will all be relevant
                  &mdash; both at the DOL and USCIS stages.
                </li>
                <li>
                  <strong>Coordinate with experienced H-2A counsel early.</strong>{" "}
                  The H-2A timeline is unforgiving (the ETA-9142A must be
                  filed no later than 45 days before the date of need), and
                  the case-by-case nature of the new guidance makes early
                  strategy essential.
                </li>
              </ul>

              <h3 id="caution">A Word of Caution</h3>

              <p>
                It bears emphasis that PM-602-0200 is a{" "}
                <strong>policy memorandum</strong> &mdash; guidance to USCIS
                adjudicators &mdash; rather than a regulation. It expressly
                states it &ldquo;is not intended to, does not, and may not be
                relied upon to create any right or benefit &hellip;
                enforceable by law.&rdquo; Like all policy memoranda, it can
                be modified or rescinded by a future administration. Dairy
                employers building their workforce strategy around H-2A
                should do so with eyes open to that political and regulatory
                reality, and with contingency planning in mind &mdash;
                particularly given the broader changes ushered in by the{" "}
                <a
                  href="https://www.uscis.gov/archive/dhs-helps-companies-fill-more-jobs-strengthens-worker-protections-in-the-h-2-programs-with-final"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  H-2 Modernization Final Rule
                </a>{" "}
                (whistleblower protections, prohibited fees, mandatory and
                discretionary denial grounds and codified compliance
                inspections) that now apply across the H-2A and H-2B
                programs.
              </p>

              <p className="byline-note">
                This article reprinted with permission courtesy of{" "}
                <a
                  href="https://www.harrisbeachmurtha.com/legal-practices/immigration-law/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Harris Beach Murtha Attorneys at Law
                </a>
                . Harris Beach Murtha counsels agricultural employers on H-2A
                and other immigration matters. L.J. D&rsquo;Arrigo can be
                reached at{" "}
                <a href="mailto:ldarrigo@harrisbeachmurtha.com">
                  ldarrigo@harrisbeachmurtha.com
                </a>
              </p>

              <p className="byline-note">
                Legal disclaimer: This article provides general information
                only and is not intended to be investment, tax or legal
                advice and should not be relied upon by recipients for such
                purposes. Farm Funding does not make any representation or
                warranty regarding the content, and disclaims any
                responsibility for the information, materials, third-party
                opinions, and data included in this article. In no event will
                Farm Funding be liable for any decision made or actions taken
                by any person or persons relying on the information contained
                in this report. All legal implementation of any advice should
                be handled by your retained, licensed estate planning or
                business attorney.
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
                  Leonard J. D&rsquo;Arrigo, Harris Beach Murtha Attorneys at
                  Law
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
                Farm Funding Disclaimer: The information provided in this
                communication/newsletter is not intended to be investment,
                tax, or legal advice and should not be relied upon by
                recipients for such purposes. Farm Funding does not make any
                representation or warranty regarding the content, and
                disclaims any responsibility for the information, materials,
                third-party opinions, and data included in this report. In no
                event will Farm Funding be liable for any decision made or
                actions taken by any person or persons relying on the
                information contained in this report.
              </p>
            </article>

                        <p style={{ margin: "0 0 24px" }}>
              <a href="#maincontent" style={{ color: "var(--clay)", textDecoration: "underline", textUnderlineOffset: "2px", fontFamily: "var(--font-barlow), Barlow, Arial, sans-serif", fontWeight: 600 }}>
                ↑ Back to top
              </a>
            </p>

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

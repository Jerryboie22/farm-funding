import type { Metadata } from "next";
import Link from "next/link";

const TITLE =
  "United States Citizenship and Immigration Service Clears H-2A Path for Dairy Employers";
const DESCRIPTION =
  "A new USCIS policy is opening the door for dairy producers to access the H-2A temporary agricultural worker program, a workforce option that has long been out of reach for year-round dairy operations.";

const ARTICLE_URL =
  "https://farm-funding.vercel.app/en/resources/Industry-Trends-and-Outlooks/Reports/2607KEP_H2AForDairyEmployers.html";
const BLOG_PATH = "/resources/todays-harvest-Blog";
const OUTLOOKS_PATH = "/resources/Industry-Trends-and-Outlooks";
const AUTHORS_PATH = "/resources/meet-the-authors";
const CONTACT_PATH = "/contact";
const FEATURED_IMAGE = "/images/homepage/DFS_2018.jpg";

const CATEGORY = "Knowledge Exchange Partner";
const CATEGORY_HREF = `${OUTLOOKS_PATH}?category=Knowledge%20Exchange%20Partner`;
const DATE = "July 7, 2026";
const AUTHOR = "Farm Funding Knowledge Exchange";
const AUTHOR_ROLE = "Industry Trends & Outlooks Team";
const AUTHOR_HREF = `${AUTHORS_PATH}#Farm-Funding-Knowledge-Exchange`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "H-2A dairy employers, USCIS PM-602-0200, Knowledge Exchange Partner, Farm Funding, dairy labor, seasonal workforce",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: ARTICLE_URL,
    type: "article",
    publishedTime: "2026-07-07",
    images: [
      {
        url: FEATURED_IMAGE,
        alt: "Dairy cows eating hay at a feeding station inside a barn",
      },
    ],
  },
};

const TAGS = [
  ["dairy", "dairy"],
  ["employee management", "employee-management"],
  ["farm management", "farm-management"],
  ["labor", "labor"],
];

const RELATED_ARTICLES = [
  {
    category: "Reports",
    categoryHref: OUTLOOKS_PATH,
    title: "2025 Northeast Dairy Farm Summary & Mid-Year Outlook",
    href: `${OUTLOOKS_PATH}/Reports/2025NEDairyFarmSummary2026MidYearOutlook.html`,
    date: "July 10, 2026",
  },
  {
    category: "Reports",
    categoryHref: OUTLOOKS_PATH,
    title: "Fuel, Fertilizer and Conflict in the Middle East: What to Know Now",
    href: `${OUTLOOKS_PATH}/Reports/2606KEP_FuelFertilizerandConflictinMiddleEast.html`,
    date: "June 2, 2026",
  },
  {
    category: "Reports",
    categoryHref: OUTLOOKS_PATH,
    title: "Dairy Markets Show Positive Trends",
    href: `${OUTLOOKS_PATH}/Reports/2605KEP_DairyMidYearTrends.html`,
    date: "May 3, 2026",
  },
];

const styles = `
  .h2a-page,
  .h2a-page * { box-sizing: border-box; }

  .h2a-page {
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

  .h2a-page .hero {
    position: relative;
    width: 100%;
    height: 364px;
    background: var(--clay);
    color: #fff;
  }

  .h2a-page .hero-inner {
    width: min(1800px, calc(100% - 120px));
    height: 100%;
    margin: 0 auto;
    padding: 16px 7px 0;
  }

  .h2a-page .date {
    margin: 0 0 16px;
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

  .h2a-page .category:hover,
  .h2a-page .author-link:hover { text-decoration: underline; }

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

  .h2a-page .byline {
    margin: 25px 0 0;
    color: #fff;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.4;
  }

  .h2a-page .author-link {
    color: #fff;
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .h2a-page .image-wrap {
    position: relative;
    z-index: 2;
    width: 750px;
    max-width: calc(100% - 28px);
    margin: -253px auto 0;
  }

  .h2a-page .image-wrap img {
    display: block;
    width: 100%;
    height: auto;
    margin: 0;
    object-fit: cover;
  }

  .h2a-page .content {
    width: min(1106px, calc(100% - 56px));
    margin: 48px auto 0;
  }

  .h2a-page .copy {
    width: 100%;
    padding-bottom: 28px;
    color: var(--grey);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
  }

  .h2a-page .copy p,
  .h2a-page .copy li {
    margin: 0 0 24px;
    color: var(--grey);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.72;
  }

  .h2a-page .copy strong { font-weight: 700; }
  .h2a-page .copy em { font-style: italic; }

  .h2a-page .copy h3,
  .h2a-page .copy h4 {
    color: var(--clay);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-weight: 700;
    line-height: 1.2;
  }

  .h2a-page .copy h3 {
    margin: 50px 0 35px;
    font-size: 36px;
    letter-spacing: -0.25px;
  }

  .h2a-page .copy h4 {
    margin: 42px 0 25px;
    font-size: 25px;
  }

  .h2a-page .copy ul {
    margin: 0 0 20px;
    padding-left: 35px;
  }

  .h2a-page .copy li {
    margin-bottom: 22px;
    padding-left: 0;
  }

  .h2a-page .copy li:last-child { margin-bottom: 24px; }

  .h2a-page .copy a {
    color: var(--clay);
    text-decoration: underline;
    text-underline-offset: 2px;
    text-decoration-thickness: 1px;
  }

  .h2a-page .copy a:hover { color: var(--forest); }

  .h2a-page .disclaimer {
    margin: 0 0 32px;
    padding: 18px 22px;
    background: var(--light);
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.6;
  }

  .h2a-page .contact {
    padding: 4px 0 28px;
    text-align: center;
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
    margin: 0 auto;
    padding: 22px 0 28px;
    border-top: 1px solid var(--line);
    color: var(--grey);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.6;
  }

  .h2a-page .tags svg {
    width: 17px;
    height: 17px;
    margin-right: 2px;
    color: var(--forest);
  }

  .h2a-page .tags a { color: var(--clay); text-decoration: underline; }
  .h2a-page .tags a:hover { color: var(--forest); }
  .h2a-page .tag-separator { color: var(--grey); margin-right: 2px; }

  .h2a-page .author-share {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px;
    padding: 20px 0 52px;
  }

  .h2a-page .box {
    min-height: 176px;
    padding: 22px;
    background: var(--light);
  }

  .h2a-page .author-box {
    display: flex;
    align-items: center;
    gap: 22px;
  }

  .h2a-page .author-photo {
    width: 176px;
    height: 176px;
    flex: 0 0 176px;
    object-fit: cover;
  }

  .h2a-page .author-name {
    color: var(--forest);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 21px;
    font-weight: 700;
    line-height: 1.3;
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .h2a-page .author-role {
    margin: 8px 0 0;
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 17px;
    font-weight: 700;
    line-height: 1.4;
  }

  .h2a-page .share-box { display: flex; align-items: center; }

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

  .h2a-page .related-wrap { width: 100%; background: var(--cream); }

  .h2a-page .related {
    width: min(1800px, calc(100% - 120px));
    margin: 0 auto;
    padding: 34px 7px 54px;
  }

  .h2a-page .section-title {
    margin: 0;
    color: var(--forest);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.25;
  }

  .h2a-page .related-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 34px;
    margin-top: 20px;
  }

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
    color: var(--forest);
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

  .h2a-page .newsletter {
    width: 100%;
    padding: 60px 20px;
    background: var(--forest);
    color: #fff;
    text-align: center;
  }

  .h2a-page .newsletter-title {
    margin: 0;
    color: #fff;
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 44px;
    font-weight: 700;
    line-height: 1.15;
  }

  .h2a-page .newsletter-subhead {
    margin: 22px 0 0;
    color: #fff;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 21px;
    line-height: 1.4;
  }

  .h2a-page .newsletter-form { display: flex; justify-content: center; margin-top: 30px; }
  .h2a-page .newsletter-inner { display: flex; align-items: flex-end; gap: 10px; }
  .h2a-page .newsletter-group { text-align: left; }

  .h2a-page .newsletter-label {
    display: block;
    margin-bottom: 9px;
    color: #fff;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 18px;
    font-weight: 700;
  }

  .h2a-page .newsletter-email {
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

  .h2a-page .required {
    margin-top: 8px;
    color: #fff;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 14px;
    font-style: italic;
  }

  .h2a-page .signup {
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
    .h2a-page h1 { font-size: 46px; }
  }

  @media (max-width: 991px) {
    .h2a-page .hero { height: auto; min-height: 330px; }
    .h2a-page .hero-inner { width: calc(100% - 56px); padding: 22px 0 150px; }
    .h2a-page h1 { font-size: 42px; line-height: 1.1; }
    .h2a-page .image-wrap { margin-top: -110px; width: min(750px, calc(100% - 56px)); }
    .h2a-page .content { width: calc(100% - 56px); margin-top: 42px; }
    .h2a-page .related,
    .h2a-page .authors-cta { width: calc(100% - 56px); }
  }

  @media (max-width: 767px) {
    .h2a-page .hero { min-height: 0; }
    .h2a-page .hero-inner { width: 100%; padding: 24px 14px 135px; }
    .h2a-page .date { margin-bottom: 12px; font-size: 15px; }
    .h2a-page .category { margin-bottom: 20px; font-size: 14px; }
    .h2a-page h1 { font-size: 34px; line-height: 1.12; letter-spacing: -.35px; }
    .h2a-page .byline { margin-top: 17px; font-size: 16px; }
    .h2a-page .image-wrap { width: calc(100% - 28px); margin-top: -105px; }
    .h2a-page .content { width: calc(100% - 28px); margin-top: 30px; }
    .h2a-page .copy p,
    .h2a-page .copy li { font-size: 17px; line-height: 1.72; }
    .h2a-page .copy h3 { margin-top: 35px; margin-bottom: 24px; font-size: 27px; }
    .h2a-page .copy h4 { margin-top: 30px; margin-bottom: 20px; font-size: 22px; }
    .h2a-page .disclaimer { padding: 16px 17px; font-size: 15px; }
    .h2a-page .author-share { grid-template-columns: 1fr; gap: 18px; padding-bottom: 35px; }
    .h2a-page .box { min-height: 0; padding: 18px; }
    .h2a-page .author-box { align-items: flex-start; gap: 15px; }
    .h2a-page .author-photo { width: 96px; height: 96px; flex-basis: 96px; }
    .h2a-page .author-name { font-size: 18px; }
    .h2a-page .author-role { font-size: 16px; }
    .h2a-page .related { width: calc(100% - 28px); padding: 25px 0 35px; }
    .h2a-page .related-grid { grid-template-columns: 1fr; gap: 25px; }
    .h2a-page .related-card { padding-top: 14px; }
    .h2a-page .related-title { margin-top: 18px; font-size: 20px; }
    .h2a-page .related-date { margin-top: 18px; }
    .h2a-page .authors-cta { grid-template-columns: 1fr; width: calc(100% - 28px); gap: 18px; padding: 38px 0; }
    .h2a-page .authors-button { justify-self: start; }
    .h2a-page .authors-text { font-size: 18px; }
    .h2a-page .newsletter { padding: 48px 14px 52px; }
    .h2a-page .newsletter-title { font-size: 31px; }
    .h2a-page .newsletter-subhead { font-size: 17px; }
    .h2a-page .newsletter-inner { width: 100%; flex-direction: column; align-items: stretch; }
    .h2a-page .newsletter-email,
    .h2a-page .signup { width: 100%; }
  }
`;

export default function H2ADairyEmployersPage() {
  const shareText = encodeURIComponent(TITLE);
  const shareUrl = encodeURIComponent(ARTICLE_URL);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="h2a-page">
        <section className="hero">
          <div className="hero-inner">
            <p className="date">{DATE}</p>
            <Link href={CATEGORY_HREF} className="category">{CATEGORY}</Link>
            <h1 id="maincontent">{TITLE}</h1>
            <p className="byline">
              By: <Link href={AUTHOR_HREF} className="author-link">{AUTHOR}</Link>
            </p>
          </div>
        </section>

        <div className="image-wrap">
          <img
            src={FEATURED_IMAGE}
            alt="Dairy cows eating hay at a feeding station inside a barn"
          />
        </div>

        <div className="content">
          <article className="copy">
            <p className="disclaimer">
              Republished with permission courtesy of Harris Beach Murtha Attorneys at Law.
            </p>

            <p>
              For decades, America’s dairy producers have been the odd industry out of the H-2A temporary agricultural worker program. While orchards, vegetable growers, nurseries and livestock operations leveraged H-2A to address chronic labor shortages, dairies were effectively left out to pasture — sidelined by United States Citizenship and Immigration Service’s (USCIS) longstanding view that the year-round nature of milking and herd care rendered dairying needs “permanent” rather than “temporary or seasonal.” For an industry that has watched its domestic labor pool shrink year after year, the lack of a viable agricultural visa option has been a persistent and costly gap.
            </p>

            <p>
              That gap has now narrowed considerably. On June 17, 2026, USCIS issued Policy Memorandum PM-602-0200, “Guidance on Temporary or Seasonal Need for H-2A Petitions for Dairying,” formally clarifying that dairy operations may, in appropriate circumstances, qualify for the H-2A program. The memorandum takes effect immediately and applies to all USCIS adjudicators reviewing H-2A petitions involving dairy work.
            </p>

            <p>
              For dairy producers — and the immigration practitioners who serve them — this is a long-awaited turning point.
            </p>

            <h3>The Statutory Foundation: Congress Already Included Dairying</h3>

            <p>
              The new policy is not a regulatory expansion; it is a recognition of what Congress wrote into law nearly four decades ago. As USCIS now expressly acknowledges, Section 101(a)(15)(H)(ii)(a) of the Immigration and Nationality Act (INA), as amended by Section 301 of the Immigration Reform and Control Act of 1986 (IRCA), incorporates the definitions of “agricultural labor” under Section 3121(g) of the Internal Revenue Code and “agriculture” under Section 3(f) of the Fair Labor Standards Act — both of which expressly include “dairying” and work performed on a “dairy” within the definition of qualifying H-2A agricultural labor.
            </p>

            <p>
              In other words, Congress decided long ago dairy work can qualify for H-2A. What was missing was clear adjudicative guidance on how dairy employers could satisfy the additional statutory requirement that the labor be “of a temporary or seasonal nature.”
            </p>

            <h3>The Core Holding: Focus on the Employer’s Need, Not the Nature of the Job</h3>

            <p>
              The memorandum’s analytical heart will be familiar to seasoned H-2 practitioners: the determination of “temporary need” turns on the employer’s need, not on whether the underlying occupation is theoretically year-round. USCIS expressly relies on the 1987 Department of Justice Office of Legal Counsel opinion (Temporary Workers Under § 301 of the Immigration Reform & Control Act, 11 O.L.C. 39), which held that temporary work refers to a job where the employer’s need for the employee is temporary.
            </p>

            <p>
              Applying this principle, USCIS now confirms dairying is analytically similar to range sheep and goat herding — both involve year-round care of livestock, yet both can give rise to genuinely temporary or seasonal labor needs depending on the employer’s specific operational cycle. Importantly, the memorandum makes clear that dairying does not require the special procedures that apply to range herding occupations; dairy employers may rely on the standard H-2A process.
            </p>

            <h3>How Dairy Employers Can Establish Temporary or Seasonal Need</h3>

            <p>
              PM-602-0200 sets out a fact-driven, case-by-case framework. Under the governing regulation, 8 C.F.R. § 214.2(h)(5)(iv)(A):
            </p>

            <ul>
              <li>
                <strong>Temporary employment</strong> is need that, except in extraordinary circumstances, will last no longer than one year.
              </li>
              <li>
                <strong>Seasonal employment</strong> is tied to a certain time of year by an event or pattern and requires labor levels far above those necessary for ongoing operations.
              </li>
              <li>
                <strong>Distinct calving and breeding cycles</strong> may support separate H-2A petitions tied to each calving cycle.
              </li>
              <li>
                <strong>Seasonally differentiated duties</strong> may support eligibility where herdsmen perform materially different duties at different times of year.
              </li>
              <li>
                <strong>Extraordinary circumstances</strong> may support a need lasting longer than one year, but not indefinitely, when established by a preponderance of the evidence.
              </li>
            </ul>

            <h3>What USCIS Will Be Watching For</h3>

            <p>
              Consistent with Hispanic Affairs Project v. Acosta, 901 F.3d 378 (D.C. Cir. 2018), USCIS will continue to scrutinize back-to-back, consecutive H-2A petitions that, taken together, suggest a permanent, year-round need rather than a true temporary or seasonal need.
            </p>

            <ul>
              <li>
                Whether successive petitions reflect genuinely different job duties, evaluated by examining the tools used and tasks performed.
              </li>
              <li>
                Whether each petition covers distinct temporary work, supported by work contracts, invoices, employee schedules, or evidence that the work recurs on the same cycle each year and includes more than token gaps when services are not needed.
              </li>
              <li>
                Whether the petitioner is employing different beneficiaries for each distinct period, supported by payroll records, staffing/workload data or employment contracts.
              </li>
            </ul>

            <p>
              Conversely, consecutive petitions for the same dairying position with the same duties spanning more than a year — without an articulated seasonal event or pattern or extraordinary circumstances — will likely draw a Request for Evidence or denial.
            </p>

            <p>
              The memorandum also reaffirms that USCIS remains the final adjudicator of temporary or seasonal need and may reach a different conclusion than the Department of Labor’s Temporary Labor Certification where substantial evidence in the record indicates the need is not temporary or seasonal.
            </p>

            <h3>Practical Takeaways for Dairy Employers</h3>

            <p>
              For dairy producers across the country, PM-602-0200 represents a meaningful — but not unlimited — opening. To position your operation for a successful H-2A filing under the new guidance, consider the following:
            </p>

            <ul>
              <li>
                <strong>Map your operational cycle.</strong> Document calving and breeding seasons, herd-rotation patterns and any month-by-month variation in workforce demand.
              </li>
              <li>
                <strong>Differentiate job duties by season.</strong> Carefully draft job descriptions that reflect the actual seasonal variation in herdsmen duties, not generic catch-all language.
              </li>
              <li>
                <strong>Be strategic about consecutive filings.</strong> If you anticipate filing back-to-back petitions, ensure each is tied to a distinct, documentable event or pattern.
              </li>
              <li>
                <strong>Maintain a clean audit trail.</strong> Payroll records, production data, breeding/calving logs and contemporaneous staffing schedules will all be relevant.
              </li>
              <li>
                <strong>Coordinate with experienced H-2A counsel early.</strong> The H-2A timeline is unforgiving, and the case-by-case nature of the new guidance makes early strategy essential.
              </li>
            </ul>

            <h3>A Word of Caution</h3>

            <p>
              It bears emphasis that PM-602-0200 is a policy memorandum — guidance to USCIS adjudicators — rather than a regulation. It expressly states it is not intended to create or establish an enforceable right or benefit. Like all policy memoranda, it can be modified or rescinded by a future administration.
            </p>

            <p>
              Dairy employers building their workforce strategy around H-2A should do so with eyes open to that political and regulatory reality, and with contingency planning in mind — particularly given the broader changes ushered in by the H-2 Modernization Final Rule.
            </p>

            <p>
              This article is reprinted with permission courtesy of Harris Beach Murtha Attorneys at Law. Harris Beach Murtha counsels agricultural employers on H-2A and other immigration matters. L.J. D’Arrigo can be reached at ldarrigo@harrisbeachmurtha.com.
            </p>

            <div className="contact">
              <Link href={CONTACT_PATH} className="button">
                Contact Us Today!
              </Link>
            </div>
          </article>

          <div className="tags">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.41l9 9c.36.36.86.36 1.41.59.55-.23 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.22-1.06-.59-1.42zM6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5 8 5.67 8 6.5 7.33 8 6.5 8z" />
            </svg>
            <span>Tags:</span>{" "}
            {TAGS.map(([label, slug], index) => (
              <span key={slug}>
                <Link href={`${OUTLOOKS_PATH}?tag=${slug}`}>{label}</Link>
                {index < TAGS.length - 1 && <span className="tag-separator">,</span>}
              </span>
            ))}
          </div>

          <section className="author-share" aria-label="Article author and sharing">
            <div className="box author-box">
              <img
                src={FEATURED_IMAGE}
                alt="Farm Funding Knowledge Exchange"
                className="author-photo"
              />
              <div>
                <Link href={AUTHOR_HREF} className="author-name">{AUTHOR}</Link>
                <p className="author-role">{AUTHOR_ROLE}</p>
              </div>
            </div>

            <div className="box share-box">
              <div>
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
                  <Link href={item.categoryHref} className="related-category">{item.category}</Link>
                  <Link href={item.href} className="related-title">{item.title} <span aria-hidden="true">›</span></Link>
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
              Connect with and discover our Today’s Harvest blog authors and their broad range of financial and northeast agricultural expertise.
            </p>
          </div>
          <Link href={AUTHORS_PATH} className="button authors-button">Meet the Authors</Link>
        </section>

        <section className="newsletter">
          <h2 className="newsletter-title">Sign up for our Today&apos;s Harvest Blog.</h2>
          <p className="newsletter-subhead">Get the latest blog articles delivered to your inbox.</p>
          <div className="newsletter-form">
            <form className="newsletter-inner" action="#" method="post">
              <div className="newsletter-group">
                <label htmlFor="email" className="newsletter-label">Enter your email*</label>
                <input id="email" name="email" type="email" className="newsletter-email" placeholder="email@address.com" required />
                <div className="required">*Required Field</div>
              </div>
              <button type="submit" className="signup">Sign Up</button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

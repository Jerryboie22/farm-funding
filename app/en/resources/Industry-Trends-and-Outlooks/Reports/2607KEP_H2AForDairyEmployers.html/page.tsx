import type { Metadata } from "next";
import Link from "next/link";

const TITLE = "United States Citizenship and Immigration Service Clears H-2A Path for Dairy Employers";
const DESCRIPTION =
  "A new USCIS policy is opening the door for dairy producers to access the H-2A temporary agricultural worker program, a workforce option that has long been out of reach for year-round dairy operations.";

const BLOG_PATH = "/resources/todays-harvest-Blog";
const OUTLOOKS_PATH = "/resources/Industry-Trends-and-Outlooks";
const AUTHORS_PATH = "/resources/meet-the-authors";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "H-2A dairy employers, USCIS PM-602-0200, Knowledge Exchange Partner, Farm Funding, dairy labor, seasonal workforce",
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
    category: "Crop Insurance",
    categoryHref: `${BLOG_PATH}?category=crop-insurance`,
    title: "Understanding USDA's Base Acre Review Opportunity: What Farmers Need to Know",
    href: `${BLOG_PATH}/260609CG_BaseAcreReviewForFarmers`,
    date: "June 9, 2026",
  },
  {
    category: "Tax Talks",
    categoryHref: `${BLOG_PATH}?category=tax-talks`,
    title: "Highlights from the Fiscal Year 2026-2027 NYS Budget",
    href: `${BLOG_PATH}/260604FarmHighlightsNYSBudget`,
    date: "June 4, 2026",
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
  .h2apage, .h2apage * { box-sizing: border-box; }
  .h2apage {
    --clay: #496d83; --clay-dark: #3b5a6d; --forest: #4f832a; --cream: #ecf1e4;
    --grey: #686868; --line: #d8d8d8; --light: #f1f3f4; --charcoal: #231f20;
    width: 100%; overflow-x: hidden; background: #fff; color: var(--grey);
  }
  .h2apage .hero { position: relative; width: 100%; height: 364px; background: var(--clay); color: #fff; }
  .h2apage .hero-inner { width: min(1800px, calc(100% - 120px)); height: 100%; margin: 0 auto; padding: 16px 7px 0; }
  .h2apage .category {
    display: inline-block; margin: 0 0 31px; padding: 4px 7px 5px; border: 1px solid #fff;
    color: #fff; font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 16px; font-weight: 700; line-height: 1.25; text-decoration: none;
  }
  .h2apage .category:hover, .h2apage .author-link:hover { text-decoration: underline; }
  .h2apage h1 {
    max-width: none; margin: 0; color: var(--cream);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 42px; font-weight: 700; line-height: 1.12; letter-spacing: -0.4px;
  }
  .h2apage .byline {
    margin: 25px 0 0; color: #fff; font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 18px; font-weight: 500; line-height: 1.4;
  }
  .h2apage .author-link { color: #fff; text-decoration: underline; text-underline-offset: 2px; }
  .h2apage .image-wrap { position: relative; z-index: 2; width: 750px; max-width: calc(100% - 28px); margin: -253px auto 0; }
  .h2apage .image-wrap img { display: block; width: 100%; height: auto; margin: 0; object-fit: cover; }
  .h2apage .content { width: min(1106px, calc(100% - 56px)); margin: 48px auto 0; }
  .h2apage .copy { width: 100%; padding-bottom: 28px; font-family: var(--font-barlow), Barlow, Arial, sans-serif; color: var(--grey); }
  .h2apage .copy p, .h2apage .copy li {
    margin: 0 0 24px; color: var(--grey); font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 18px; font-weight: 500; line-height: 1.72;
  }
  .h2apage .copy strong { font-weight: 700; }
  .h2apage .copy em { font-style: italic; }
  .h2apage .copy h3 {
    margin: 50px 0 35px; color: var(--grey); font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-weight: 700; line-height: 1.2; font-size: 28px; letter-spacing: -0.25px;
  }
  .h2apage .copy ul, .h2apage .copy ol { margin: 0 0 20px; padding-left: 35px; }
  .h2apage .copy li { margin-bottom: 14px; padding-left: 0; }
  .h2apage .copy li:last-child { margin-bottom: 24px; }
  .h2apage .copy a { color: var(--clay); text-decoration: underline; text-underline-offset: 2px; text-decoration-thickness: 1px; }
  .h2apage .copy a:hover { color: var(--forest); }
  .h2apage .disclaimer { padding: 18px 22px; background: var(--light); font-size: 15px; line-height: 1.6; margin: 0 0 28px; }
  .h2apage .contact { padding: 4px 0 28px; text-align: center; }
  .h2apage .button {
    display: inline-flex; min-height: 50px; align-items: center; justify-content: center; padding: 13px 28px;
    background: var(--clay); color: #fff; font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 16px; font-weight: 700; line-height: 1.2; text-decoration: none;
  }
  .h2apage .button:hover { background: var(--clay-dark); }
  .h2apage .tags {
    display: flex; align-items: center; flex-wrap: wrap; gap: 5px; margin: 0 auto; padding: 22px 0 28px;
    border-top: 1px solid var(--line); color: var(--grey); font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 16px; line-height: 1.6;
  }
  .h2apage .tags svg { width: 17px; height: 17px; margin-right: 2px; color: var(--forest); }
  .h2apage .tags a { color: var(--clay); text-decoration: underline; }
  .h2apage .tags a:hover { color: var(--forest); }
  .h2apage .tag-separator { color: var(--grey); margin-right: 2px; }
  .h2apage .author-share { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; padding: 20px 0 52px; }
  .h2apage .box { min-height: 176px; padding: 22px; background: var(--light); }
  .h2apage .author-box { display: flex; align-items: center; gap: 22px; }
  .h2apage .author-photo { width: 176px; height: 176px; flex: 0 0 176px; object-fit: cover; }
  .h2apage .author-name {
    color: var(--forest); font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 21px; font-weight: 700; line-height: 1.3;
  }
  .h2apage .author-role {
    margin: 8px 0 0; color: var(--charcoal); font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 15px; font-weight: 500; line-height: 1.4;
  }
  .h2apage .share-box { display: flex; align-items: center; }
  .h2apage .share-label {
    margin: 0 0 16px; color: var(--charcoal); font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 17px; font-weight: 600;
  }
  .h2apage .share-list { display: flex; gap: 10px; margin: 0; padding: 0; list-style: none; }
  .h2apage .share-list a {
    display: inline-flex; width: 42px; height: 42px; align-items: center; justify-content: center;
    border-radius: 4px; color: #fff; text-decoration: none;
  }
  .h2apage .share-list svg { width: 22px; height: 22px; }
  .h2apage .share-x { background: #14171a; }
  .h2apage .share-facebook { background: #1877f2; }
  .h2apage .share-linkedin { background: #0a66c2; }
  .h2apage .share-email { background: #34a853; }
  .h2apage .related-wrap { width: 100%; background: var(--cream); }
  .h2apage .related { width: min(1800px, calc(100% - 120px)); margin: 0 auto; padding: 34px 7px 54px; }
  .h2apage .section-title {
    margin: 0; color: var(--forest); font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 30px; font-weight: 700; line-height: 1.25;
  }
  .h2apage .related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 34px; margin-top: 20px; }
  .h2apage .related-card { padding-top: 26px; }
  .h2apage .related-category {
    display: inline-block; padding: 6px 14px; background: var(--grey); color: #fff;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif; font-size: 13px; font-weight: 700;
    letter-spacing: .02em; text-transform: uppercase; text-decoration: none;
  }
  .h2apage .related-title {
    display: block; margin-top: 26px; color: var(--forest);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 21px; font-weight: 700; line-height: 1.35; text-decoration: none;
  }
  .h2apage .related-date {
    margin: 26px 0 0; color: var(--grey); font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 14px; font-weight: 700; text-transform: uppercase;
  }
  .h2apage .authors-cta {
    display: grid; grid-template-columns: 2fr 1fr; align-items: center; gap: 28px;
    width: min(1800px, calc(100% - 120px)); margin: 0 auto; padding: 50px 7px;
  }
  .h2apage .authors-copy { max-width: 900px; }
  .h2apage .authors-text {
    margin: 14px 0 0; color: var(--charcoal); font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 20px; line-height: 1.5;
  }
  .h2apage .authors-button { justify-self: end; min-width: 205px; }
  .h2apage .newsletter { width: 100%; padding: 60px 20px; background: var(--forest); color: #fff; text-align: center; }
  .h2apage .newsletter-title {
    margin: 0; color: #fff; font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 44px; font-weight: 700; line-height: 1.15;
  }
  .h2apage .newsletter-subhead {
    margin: 22px 0 0; color: #fff; font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 21px; line-height: 1.4;
  }
  .h2apage .newsletter-form { display: flex; justify-content: center; margin-top: 30px; }
  .h2apage .newsletter-inner { display: flex; align-items: flex-end; gap: 10px; }
  .h2apage .newsletter-group { text-align: left; }
  .h2apage .newsletter-label {
    display: block; margin-bottom: 9px; color: #fff; font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 18px; font-weight: 700;
  }
  .h2apage .newsletter-email {
    width: 245px; height: 44px; border: 0; border-radius: 2px; padding: 0 13px; background: #fff;
    color: var(--charcoal); font-family: var(--font-barlow), Barlow, Arial, sans-serif; font-size: 17px; outline: none;
  }
  .h2apage .required { margin-top: 8px; color: #fff; font-family: var(--font-barlow), Barlow, Arial, sans-serif; font-size: 14px; font-style: italic; }
  .h2apage .signup {
    height: 44px; min-width: 112px; border: 2px solid #fff; border-radius: 4px; padding: 0 20px;
    background: var(--forest); color: #fff; font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 18px; font-weight: 700; cursor: pointer;
  }
  @media (max-width: 1400px) { .h2apage h1 { font-size: 36px; } }
  @media (max-width: 991px) {
    .h2apage .hero { height: auto; min-height: 330px; }
    .h2apage .hero-inner { width: calc(100% - 56px); padding: 22px 0 150px; }
    .h2apage h1 { font-size: 32px; }
    .h2apage .image-wrap { margin-top: -110px; width: min(750px, calc(100% - 56px)); }
    .h2apage .content { width: calc(100% - 56px); margin-top: 42px; }
    .h2apage .related, .h2apage .authors-cta { width: calc(100% - 56px); }
  }
  @media (max-width: 767px) {
    .h2apage .hero { min-height: 0; }
    .h2apage .hero-inner { width: 100%; padding: 24px 14px 135px; }
    .h2apage .category { margin-bottom: 20px; font-size: 14px; }
    .h2apage h1 { font-size: 26px; line-height: 1.2; }
    .h2apage .byline { margin-top: 17px; font-size: 16px; }
    .h2apage .image-wrap { width: calc(100% - 28px); margin-top: -105px; }
    .h2apage .content { width: calc(100% - 28px); margin-top: 30px; }
    .h2apage .copy p, .h2apage .copy li { font-size: 17px; line-height: 1.72; }
    .h2apage .copy h3 { margin-top: 35px; margin-bottom: 24px; font-size: 23px; }
    .h2apage .author-share { grid-template-columns: 1fr; gap: 18px; padding-bottom: 35px; }
    .h2apage .box { min-height: 0; padding: 18px; }
    .h2apage .author-box { align-items: flex-start; gap: 15px; }
    .h2apage .author-photo { width: 96px; height: 96px; flex-basis: 96px; }
    .h2apage .related { width: calc(100% - 28px); padding: 25px 0 35px; }
    .h2apage .related-grid { grid-template-columns: 1fr; gap: 25px; }
    .h2apage .authors-cta { grid-template-columns: 1fr; width: calc(100% - 28px); gap: 18px; padding: 38px 0; }
    .h2apage .authors-button { justify-self: start; }
    .h2apage .newsletter { padding: 48px 14px 52px; }
    .h2apage .newsletter-title { font-size: 31px; }
    .h2apage .newsletter-subhead { font-size: 17px; }
    .h2apage .newsletter-inner { width: 100%; flex-direction: column; align-items: stretch; }
    .h2apage .newsletter-email, .h2apage .signup { width: 100%; }
  }
`;

export default function H2ADairyEmployersPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="h2apage">
        <section className="hero">
          <div className="hero-inner">
            <Link href={`${OUTLOOKS_PATH}?category=knowledge-exchange-partner`} className="category">
              Knowledge Exchange Partner
            </Link>

            <h1 id="maincontent">{TITLE}</h1>

            <p className="byline">By: Farm Funding Knowledge Exchange</p>
          </div>
        </section>

        <div className="image-wrap">
          <img src="/images/homepage/DFS_2018.jpg" alt="Dairy cows eating hay at a feeding station inside a barn" />
        </div>

        <div className="content">
          <article className="copy">
            <div className="disclaimer">
              Republished with permission courtesy of Harris Beach Murtha Attorneys at Law.
            </div>

            <p>
              For decades, America&rsquo;s dairy producers have been the odd industry out of the
              H-2A temporary agricultural worker program. While orchards, vegetable growers,
              nurseries and livestock operations leveraged H-2A to address chronic labor shortages,
              dairies were effectively left out to pasture &mdash; sidelined by U.S. Citizenship and
              Immigration Services&rsquo; (USCIS) longstanding view that the year-round nature of
              milking and herd care rendered dairying needs &ldquo;permanent&rdquo; rather than
              &ldquo;temporary or seasonal.&rdquo;
            </p>

            <p>
              That gap has now narrowed considerably. On <strong>June 17, 2026</strong>, USCIS
              issued Policy Memorandum PM-602-0200, &ldquo;Guidance on Temporary or Seasonal Need
              for H-2A Petitions for Dairying,&rdquo; formally clarifying that dairy operations may,
              in appropriate circumstances, qualify for the H-2A program. The memorandum takes
              effect immediately and applies to all USCIS adjudicators reviewing H-2A petitions
              involving dairy work.
            </p>

            <h3>Congress Already Included Dairying</h3>

            <p>
              The new policy is not a regulatory expansion &mdash; it is a recognition of what
              Congress wrote into law nearly four decades ago. Section 101(a)(15)(H)(ii)(a) of the
              Immigration and Nationality Act, as amended by the Immigration Reform and Control Act
              of 1986, incorporates the definitions of &ldquo;agricultural labor&rdquo; and
              &ldquo;agriculture&rdquo; used elsewhere in federal law &mdash; both of which expressly
              include dairying and work performed on a dairy within the definition of qualifying
              H-2A agricultural labor. What was missing was clear adjudicative guidance on how dairy
              employers could satisfy the additional requirement that the labor be temporary or
              seasonal in nature.
            </p>

            <h3>The Core Holding: The Employer&rsquo;s Need, Not the Nature of the Job</h3>

            <p>
              Applying long-standing legal precedent, USCIS now confirms dairying is analytically
              similar to range sheep and goat herding &mdash; both involve year-round care of
              livestock, yet both can give rise to genuinely temporary or seasonal labor needs
              depending on the employer&rsquo;s specific operational cycle. Dairy employers may rely
              on the standard H-2A process, without the special range-herding procedures that apply
              to sheep and goat operations.
            </p>

            <h3>How Dairy Employers Can Establish Temporary or Seasonal Need</h3>

            <p>The memorandum identifies several dairy-specific facts that may support a finding of temporary or seasonal need:</p>

            <ul>
              <li>
                <strong>Distinct Calving and Breeding Cycles</strong> &mdash; Dairies with distinct
                breeding seasons may file separate H-2A petitions, of up to 10 months each, for
                herdsmen tied to each calving cycle.
              </li>
              <li>
                <strong>Seasonally Differentiated Duties</strong> &mdash; Dairies without discrete
                breeding seasons may qualify by showing herdsmen perform materially different duties
                at different times of year, even if some tasks like milking remain constant.
              </li>
              <li>
                <strong>Extraordinary Circumstances</strong> &mdash; A need lasting longer than one
                year may be established by a preponderance of evidence of extraordinary
                circumstances.
              </li>
            </ul>

            <h3>What USCIS Will Be Watching For</h3>

            <p>
              USCIS will continue to scrutinize back-to-back, consecutive H-2A petitions that,
              together, suggest a permanent year-round need rather than a genuine temporary or
              seasonal one. Adjudicators will look at whether successive petitions reflect distinct
              job duties, whether each period is supported by contracts, invoices, or schedules
              showing a recurring annual cycle with real gaps between periods, and whether different
              workers are employed for each distinct period.
            </p>

            <h3>Practical Takeaways for Dairy Employers</h3>

            <ul>
              <li><strong>Map your operational cycle</strong> &mdash; document calving and breeding seasons, herd-rotation patterns and month-by-month workforce demand.</li>
              <li><strong>Differentiate job duties by season</strong> &mdash; draft job descriptions that reflect actual seasonal variation, not generic language.</li>
              <li><strong>Be strategic about consecutive filings</strong> &mdash; tie each petition to a distinct, documentable event or pattern.</li>
              <li><strong>Maintain a clean audit trail</strong> &mdash; payroll records, production data and calving logs all matter.</li>
              <li><strong>Coordinate with experienced H-2A counsel early</strong> &mdash; filing deadlines are unforgiving.</li>
            </ul>

            <h3>A Word of Caution</h3>

            <p>
              PM-602-0200 is a policy memorandum &mdash; guidance to USCIS adjudicators &mdash;
              rather than a regulation, and it does not create any enforceable right or benefit. Like
              all policy memoranda, it can be modified or rescinded by a future administration.
              Dairy employers building their workforce strategy around H-2A should plan with that
              regulatory reality in mind.
            </p>

            <p>
              This guidance could help dairies address labor shortages, support seasonal workforce
              planning and navigate new petition requirements moving forward. If you operate a dairy
              and want to evaluate whether H-2A is now a viable workforce solution for your
              operation, reach out to your Farm Funding advisor.
            </p>

            <div className="contact">
              <Link href="/contact" className="button">
                Contact Us Today!
              </Link>
            </div>
          </article>

          <div className="tags">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.41l9 9c.36.36.86.59 1.41.59.55 0 1.05-.23 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5 8 5.67 8 6.5 7.33 8 6.5 8z" />
            </svg>
            <span>Tags:</span>{" "}
            {[
              ["outlook", "outlook"],
              ["labor", "labor"],
              ["regulations", "regulations"],
              ["farm management", "farm-management"],
            ].map(([label, slug], index, arr) => (
              <span key={slug}>
                <Link href={`${OUTLOOKS_PATH}?tag=${slug}`}>{label}</Link>
                {index < arr.length - 1 && <span className="tag-separator">,</span>}
              </span>
            ))}
          </div>

          <section className="author-share" aria-label="Article author and sharing">
            <div className="box author-box">
              <img
                src="/images/homepage/DFS_2018.jpg"
                alt="Farm Funding Knowledge Exchange"
                className="author-photo"
              />
              <div>
                <span className="author-name">Farm Funding Knowledge Exchange</span>
                <p className="author-role">Industry Trends &amp; Outlooks Team</p>
              </div>
            </div>

            <div className="box share-box">
              <div>
                <p className="share-label">Share this post on</p>
                <ul className="share-list">
                  <li>
                    <a
                      className="share-x"
                      href={`https://twitter.com/share?text=${encodeURIComponent(TITLE)}&url=${encodeURIComponent("https://farm-funders.com/en/resources/Industry-Trends-and-Outlooks/Reports/2607KEP_H2AForDairyEmployers")}`}
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
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://farm-funders.com/en/resources/Industry-Trends-and-Outlooks/Reports/2607KEP_H2AForDairyEmployers")}`}
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
                      href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent("https://farm-funders.com/en/resources/Industry-Trends-and-Outlooks/Reports/2607KEP_H2AForDairyEmployers")}&title=${encodeURIComponent(TITLE)}`}
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
                      href={`mailto:?subject=${encodeURIComponent(TITLE)}&body=${encodeURIComponent("https://farm-funders.com/en/resources/Industry-Trends-and-Outlooks/Reports/2607KEP_H2AForDairyEmployers.html")}`}
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

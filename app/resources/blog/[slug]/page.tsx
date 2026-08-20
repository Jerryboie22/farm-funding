import Link from "next/link";
import { notFound } from "next/navigation";
import { ALL_REFERENCE_ARTICLES, getReferenceArticle } from "../registry";

const BLOG_PATH = "/resources/blog";

const ARTICLE_TAGS: Record<string, string[]> = {
  "260707_2026FarmBillTakesShape": ["economy", "public policy", "ag economy", "farm bill", "risk management"],
  "260701TariffReliefProgramNYProducers": ["economy", "expenses", "social programs", "ag economy", "risk management"],
  "260630NewUSDAPaymentRulesForYourFarm": ["economy", "public policy", "ag economy", "farm management", "risk management"],
  "260623-EmployeeSpotlightADayInTheLifeOfAnInternalAuditDirector": ["Farm Credit", "employee spotlight", "leadership"],
  "260616-StayAlertToMisleadingMailMortageandHomeWarrantyCommunications": ["cybersecurity", "technology"],
  "260519AppleOutlookHighSupplyTightMargins": ["ag economy", "outlook", "apple", "fruit"],
  "260407ForestProductsOutlook": ["ag economy", "outlook", "forestry", "logging", "lumber", "timber"],
  "260324TheNortheastEconomicEngine": ["ag economy", "outlook", "agriculture", "forestry", "fishing"],
  "260310RoadAHeadForOysterGrowers": ["ag economy", "outlook", "fishing", "aquaculture"],
  "260505AgTechTrends": ["technology", "ag tech", "innovation", "business planning"],
  "260512MentalHealthResourcesforAgriculture": ["community support", "mental health", "wellness", "agriculture"],
  "key-changes-coming-to-drp-lgm-and-lrp-programs": ["crop insurance", "dairy", "livestock", "risk management"],
};

const IMAGE_OVERRIDES: Record<string, string> = {
  "high-supply-with-tight-margins-2026-apple-outlook": "/images/homepage/1-orchard_adobestock_292882711.jpg",
  "2026-forest-products-outlook-key-takeaways-for-a-shifting-industry": "/images/homepage/3-logs_adobestock_73937079.jpg",
  "the-road-ahead-for-oyster-growers-trends-risks-and-opportunities-for-2026": "/images/homepage/4-fisherman-and-vessel.jpg",
  "key-changes-coming-to-drp-lgm-and-lrp-programs": "/images/homepage/5-cow_adobestock_206891243.jpg",
};

const AUTHOR_ROLES: Record<string, string> = {
  "Dario Arezzo": "Executive Vice President, Chief Financial Services Officer",
  "Danielle Cummins": "Senior Policy Specialist",
  "Marty Knapp, CPA": "Senior Financial Consultant",
  "Elisabeth Olcott": "Farm Credit East",
  "Kristen Santos": "Farm Credit East",
  "Megan Clancy": "Livestock Insurance Specialist",
};

const AUTHOR_CARD_SLUGS = new Set([
  "260701TariffReliefProgramNYProducers",
  "260630NewUSDAPaymentRulesForYourFarm",
  "260623-EmployeeSpotlightADayInTheLifeOfAnInternalAuditDirector",
  "260616-StayAlertToMisleadingMailMortageandHomeWarrantyCommunications",
  "2026-forest-products-outlook-key-takeaways-for-a-shifting-industry",
  "key-changes-coming-to-drp-lgm-and-lrp-programs",
]);

const CTA_SLUGS = new Set([
  "260701TariffReliefProgramNYProducers",
  "260630NewUSDAPaymentRulesForYourFarm",
  "260623-EmployeeSpotlightADayInTheLifeOfAnInternalAuditDirector",
  "key-changes-coming-to-drp-lgm-and-lrp-programs",
]);

const RELATED: Record<string, string[]> = {
  "260519AppleOutlookHighSupplyTightMargins": [
    "Understanding the Agricultural Impacts of Wildfire Smoke",
    "New Report Examines Dairy Price Support Policies Across the Northeast",
    "A Review of Dairy Price Support Programs in Massachusetts, Maine and Connecticut",
  ],
  "260701TariffReliefProgramNYProducers": [
    "Trump Accounts: A New Savings Option for Children",
    "A Review of Dairy Price Support Programs in Massachusetts, Maine and Connecticut",
    "Summer 2026 Financial Partner",
  ],
  "2026-forest-products-outlook-key-takeaways-for-a-shifting-industry": [
    "2026 Apple Outlook: High Supply with Tight Margins",
    "Building Resilient Dairy Businesses: Key Takeaways from Crop Growers Dairy Producer Meeting",
    "Dairy Markets Show Positive Trends",
  ],
  "key-changes-coming-to-drp-lgm-and-lrp-programs": [
    "Beyond Dairy Revenue Protection: A Smarter Approach to Managing Dairy Risk",
    "Building Resilient Dairy Businesses: Key Takeaways from Crop Growers Dairy Producer Meeting",
    "Ensuring Stability in the Year Ahead: Protecting Farm Revenue in Uncertain Markets",
  ],
};

const REFERENCE_HEADINGS: Record<string, string[]> = {
  "key-changes-coming-to-drp-lgm-and-lrp-programs": [
    "Uniform Changes Across Programs",
    "DRP Updates",
    "LGM Changes",
    "Updates to LRP Coverage",
    "What This Means for Producers",
  ],
};

export function generateStaticParams() {
  return ALL_REFERENCE_ARTICLES.map((article) => ({ slug: article.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getReferenceArticle(slug);
  if (!article) return { title: "Today's Harvest Blog | Farm Funders" };
  return { title: `${article.title} | Farm Funders`, description: article.excerpt };
}

function formatDate(date: string) {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function getTags(slug: string, category: string) {
  return ARTICLE_TAGS[slug] ?? [category.toLowerCase()];
}

function isNestedHeading(heading: string, slug: string) {
  return slug === "260701TariffReliefProgramNYProducers" && /What products don.?t qualify\?/i.test(heading);
}

function relatedArticles(slug: string) {
  const titles = RELATED[slug];
  if (!titles) return ALL_REFERENCE_ARTICLES.filter((item) => item.slug !== slug).slice(0, 3);
  return titles
    .map((title) => ALL_REFERENCE_ARTICLES.find((item) => item.title === title))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
}

function displayHeading(slug: string, heading: string, index: number) {
  return REFERENCE_HEADINGS[slug]?.[index] ?? heading;
}

export default async function HarvestArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getReferenceArticle(slug);
  if (!article) notFound();

  const tags = getTags(slug, article.category);
  const related = relatedArticles(slug);
  const authorRole = AUTHOR_ROLES[article.author] ?? "Farm Credit East";
  const showAuthor = AUTHOR_CARD_SLUGS.has(slug);
  const showCta = CTA_SLUGS.has(slug);
  const image = IMAGE_OVERRIDES[slug] ?? article.image;

  return (
    <main className="w-full bg-white text-charcoal">
      <header className="mx-auto w-full max-w-[1180px] px-6 pb-8 pt-10 md:px-10 md:pt-12 lg:px-12 lg:pt-14">
        <time dateTime={article.date} className="block font-body text-[15px] leading-6 text-grey-text">{formatDate(article.date)}</time>
        <Link href={`${BLOG_PATH}?category=${encodeURIComponent(article.category)}`} className="mt-1 block font-display text-[15px] font-bold leading-6 text-clay hover:underline">{article.category}</Link>
        <h1 className="mt-3 max-w-[1050px] font-display text-[38px] font-extrabold leading-[1.1] text-forest md:text-[48px] lg:text-[54px]">{article.title}</h1>
        <p className="mt-4 font-body text-[16px] leading-7 text-charcoal">By: {article.author}</p>
      </header>

      <section aria-label="Article image" className="mx-auto w-full max-w-[1180px] px-6 md:px-10 lg:px-12">
        <img src={image} alt="" className="block h-auto max-h-[520px] min-h-[280px] w-full object-cover" />
      </section>

      <article className="mx-auto w-full max-w-[850px] px-6 pb-10 pt-9 md:px-10 md:pt-11 lg:px-0 lg:pt-12">
        <p className="font-body text-[17px] leading-[1.8] text-charcoal md:text-[18px]">{article.excerpt}</p>
        <div className="mt-8 font-body text-[17px] leading-[1.8] text-charcoal md:text-[18px]">
          {article.sections.map((section, index) => (
            <section key={`${section.heading}-${index}`} className="mb-7 last:mb-0">
              {isNestedHeading(section.heading, slug) ? (
                <h4 className="mb-2 font-display text-[18px] font-bold leading-[1.35] text-forest md:text-[20px]">{displayHeading(slug, section.heading, index)}</h4>
              ) : (
                <h3 className="mb-2 font-display text-[19px] font-bold leading-[1.35] text-forest md:text-[21px]">{displayHeading(slug, section.heading, index)}</h3>
              )}
              <p className="whitespace-pre-line">{section.body}</p>
            </section>
          ))}
        </div>

        {showCta && <div className="mt-9"><Link href="/contact" className="inline-flex bg-clay px-7 py-3 font-display text-sm font-bold text-white hover:bg-clay-dark">Contact Us Today!</Link></div>}

        <div className="mt-8 border-t border-charcoal/10 pt-5">
          <span className="font-body text-[15px] text-charcoal">Tags: </span>
          {tags.map((tag, index) => (
            <span key={tag}><Link href={`${BLOG_PATH}?tag=${encodeURIComponent(tag)}`} className="font-body text-[15px] text-clay hover:underline">{tag}</Link>{index < tags.length - 1 && <span className="mx-2 text-charcoal">,</span>}</span>
          ))}
        </div>

        {showAuthor && (
          <>
            <div className="mt-7 flex items-center gap-5 border-t border-charcoal/10 pt-7">
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full bg-cream"><img src={image} alt="" className="h-full w-full object-cover" /></div>
              <div><p className="font-display text-lg font-bold text-forest">{article.author}</p><p className="mt-1 font-body text-sm leading-6 text-grey-text">{authorRole}</p></div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-charcoal/10 pt-5"><span className="mr-1 font-display text-sm font-bold text-forest">Share this post on</span><button type="button" aria-label="Share on Facebook" className="h-8 w-8 border border-charcoal/15 font-display text-sm text-forest">f</button><button type="button" aria-label="Share on LinkedIn" className="h-8 w-8 border border-charcoal/15 font-display text-sm text-forest">in</button><button type="button" aria-label="Copy article link" className="h-8 border border-charcoal/15 px-3 font-display text-xs text-forest">Copy link</button></div>
          </>
        )}
      </article>

      <section className="w-full bg-cream px-6 py-10 md:py-13"><div className="mx-auto max-w-[1180px]"><h2 className="font-display text-[28px] font-bold leading-[1.2] text-forest md:text-[34px]">You Might Also Like</h2><div className="mt-6 grid gap-6 md:grid-cols-3">{related.map((item) => <Link key={item.slug} href={`${BLOG_PATH}/${item.slug}`} className="group bg-white"><img src={item.image} alt="" className="h-[190px] w-full object-cover" /><div className="p-5"><p className="font-display text-xs font-bold text-clay">{item.category}</p><h3 className="mt-2 font-display text-[19px] font-bold leading-[1.25] text-forest group-hover:underline">{item.title}</h3><p className="mt-2 font-body text-xs text-grey-text">{formatDate(item.date)}</p></div></Link>)}</div></div></section>

      <section className="w-full bg-forest-dark px-6 py-14 text-center text-white md:py-16"><div className="mx-auto max-w-[700px]"><h2 className="font-display text-[30px] font-bold leading-[1.2] text-white md:text-[36px]">Meet the Authors</h2><p className="mx-auto mt-5 max-w-[650px] font-body text-base leading-7 text-white/85">Connect with and discover our Today&apos;s Harvest blog authors and their broad range of financial and northeast agricultural expertise.</p><Link href="/resources/blog/authors" className="mt-7 inline-flex border-2 border-white px-6 py-3 font-display text-sm font-bold text-white hover:bg-white hover:text-forest-dark">Meet the Authors</Link></div></section>

      <section className="w-full bg-cream px-6 py-12 text-center md:py-16"><div className="mx-auto max-w-[650px]"><h2 className="font-display text-[26px] font-bold leading-[1.25] text-forest md:text-[32px]">Sign up for our Today&apos;s Harvest Blog.</h2><p className="mt-4 font-body text-base leading-7 text-charcoal/80">Get the latest blog articles delivered to your inbox.</p><form className="mx-auto mt-6 flex max-w-[560px] flex-col gap-3 sm:flex-row"><label htmlFor="newsletter-email" className="sr-only">Email address</label><input id="newsletter-email" type="email" required placeholder="Enter your email*" className="min-h-12 flex-1 border border-charcoal/20 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-grey-text outline-none" /><button type="submit" className="min-h-12 bg-clay px-6 py-3 font-display text-sm font-bold text-white hover:bg-clay-dark">Sign Up</button></form><p className="mt-2 text-left font-body text-xs text-grey-text">*Required Field</p></div></section>
    </main>
  );
}

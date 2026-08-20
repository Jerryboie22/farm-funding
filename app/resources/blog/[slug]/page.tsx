import Link from "next/link";
import { notFound } from "next/navigation";
import { ALL_REFERENCE_ARTICLES, getReferenceArticle } from "../registry";

const BLOG_PATH = "/resources/blog";

const ARTICLE_TAGS: Record<string, string[]> = {
  "260707_2026FarmBillTakesShape": ["economy", "public policy", "ag economy", "farm bill", "risk management"],
  "260701TariffReliefProgramNYProducers": ["economy", "expenses", "social programs", "ag economy", "risk management"],
  "260630NewUSDAPaymentRulesForYourFarm": ["economy", "farm management", "business planning", "ag policy", "risk management"],
  "260623-EmployeeSpotlightADayInTheLifeOfAnInternalAuditDirector": ["leadership", "Farm Credit", "employee spotlight"],
  "260616-StayAlertToMisleadingMailMortageandHomeWarrantyCommunications": ["security", "fraud prevention", "business tips and tools"],
  "260519AppleOutlookHighSupplyTightMargins": ["ag outlook"],
  "260407ForestProductsOutlook": ["ag outlook"],
  "260324TheNortheastEconomicEngine": ["ag outlook"],
  "260310RoadAHeadForOysterGrowers": ["ag outlook"],
  "260505AgTechTrends": ["technology"],
  "260512MentalHealthResourcesforAgriculture": ["community support"],
};

const AUTHOR_ROLES: Record<string, string> = {
  "Dario Arezzo": "Executive Vice President, Chief Financial Services Officer",
  "Danielle Cummins": "Senior Policy Specialist",
  "Marty Knapp, CPA": "Senior Financial Consultant",
  "Elisabeth Olcott": "Farm Credit East",
  "Kristen Santos": "Farm Credit East",
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
  return ARTICLE_TAGS[slug] ?? [category];
}

function isNestedHeading(heading: string) {
  return heading === "What products don’t qualify?" || heading === "What products don't qualify?";
}

export default async function HarvestArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getReferenceArticle(slug);
  if (!article) notFound();

  const tags = getTags(slug, article.category);
  const related = ALL_REFERENCE_ARTICLES.filter((item) => item.slug !== article.slug).slice(0, 3);
  const authorRole = AUTHOR_ROLES[article.author] ?? "Farm Credit East";

  return (
    <main className="w-full bg-white text-charcoal">
      <header className="mx-auto w-full max-w-[1180px] px-6 pb-8 pt-10 md:px-10 md:pt-12 lg:px-12 lg:pt-14">
        <time dateTime={article.date} className="block font-body text-[15px] leading-6 text-grey-text">{formatDate(article.date)}</time>
        <Link href={`${BLOG_PATH}?category=${encodeURIComponent(article.category)}`} className="mt-1 block font-display text-[15px] font-bold leading-6 text-clay hover:underline">{article.category}</Link>
        <h1 className="mt-3 max-w-[1050px] font-display text-[38px] font-extrabold leading-[1.1] text-forest md:text-[48px] lg:text-[54px]">{article.title}</h1>
        <p className="mt-4 font-body text-[16px] leading-7 text-charcoal">By: {article.author}</p>
      </header>

      <section aria-label="Article image" className="mx-auto w-full max-w-[1180px] px-6 md:px-10 lg:px-12">
        <img src={article.image} alt="" className="block h-auto max-h-[520px] min-h-[280px] w-full object-cover" />
      </section>

      <article className="mx-auto w-full max-w-[850px] px-6 pb-12 pt-9 md:px-10 md:pb-14 md:pt-11 lg:pb-16 lg:pt-12">
        <p className="font-body text-[17px] leading-[1.8] text-charcoal md:text-[18px]">{article.excerpt}</p>
        <div className="mt-8 font-body text-[17px] leading-[1.8] text-charcoal md:text-[18px]">
          {article.sections.map((section, index) => (
            <section key={`${section.heading}-${index}`} className="mb-7 last:mb-0">
              {isNestedHeading(section.heading) ? (
                <h3 className="mb-2 font-display text-[19px] font-bold leading-[1.35] text-forest md:text-[21px]">{section.heading}</h3>
              ) : (
                <h2 className="mb-3 font-display text-[23px] font-bold leading-[1.3] text-forest md:text-[27px]">{section.heading}</h2>
              )}
              <p className="whitespace-pre-line">{section.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/contact" className="inline-flex bg-clay px-7 py-3 font-display text-sm font-bold text-white hover:bg-clay-dark">Contact Us Today!</Link>
        </div>

        <div className="mt-9 border-t border-charcoal/10 pt-6">
          <p className="font-display text-sm font-bold text-charcoal">Tags:</p>
          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
            {tags.map((tag) => <Link key={tag} href={`${BLOG_PATH}?tag=${encodeURIComponent(tag)}`} className="font-body text-sm text-clay hover:underline">{tag}</Link>)}
          </div>
        </div>

        <div className="mt-8 flex items-center gap-5 border-t border-charcoal/10 pt-7">
          <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full bg-cream">
            <img src={article.image} alt="" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="font-display text-lg font-bold text-forest">{article.author}</p>
            <p className="mt-1 font-body text-sm leading-6 text-grey-text">{authorRole}</p>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-charcoal/10 pt-6">
          <span className="mr-1 font-display text-sm font-bold text-forest">Share this post on</span>
          <button type="button" aria-label="Share on Facebook" className="h-8 w-8 border border-charcoal/15 font-display text-sm text-forest">f</button>
          <button type="button" aria-label="Share on LinkedIn" className="h-8 w-8 border border-charcoal/15 font-display text-sm text-forest">in</button>
          <button type="button" aria-label="Copy article link" className="h-8 border border-charcoal/15 px-3 font-display text-xs text-forest">Copy link</button>
        </div>
      </article>

      {related.length > 0 && <section className="w-full bg-cream px-6 py-11 md:py-14">
        <div className="mx-auto max-w-[1180px]">
          <h2 className="font-display text-[28px] font-bold leading-[1.2] text-forest md:text-[34px]">You Might Also Like</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((item) => <Link key={item.slug} href={`${BLOG_PATH}/${item.slug}`} className="group bg-white">
              <img src={item.image} alt="" className="h-[190px] w-full object-cover" />
              <div className="p-5"><p className="font-display text-xs font-bold text-clay">{item.category}</p><h3 className="mt-2 font-display text-[19px] font-bold leading-[1.25] text-forest group-hover:underline">{item.title}</h3><p className="mt-2 font-body text-xs text-grey-text">{formatDate(item.date)}</p></div>
            </Link>)}
          </div>
        </div>
      </section>}

      <section className="w-full bg-forest-dark px-6 py-14 text-center text-white md:py-16">
        <div className="mx-auto max-w-[700px]"><h2 className="font-display text-[30px] font-bold leading-[1.2] text-white md:text-[36px]">Meet the Authors</h2><p className="mx-auto mt-5 max-w-[650px] font-body text-base leading-7 text-white/85">Connect with and discover our Today&apos;s Harvest blog authors and their broad range of financial and northeast agricultural expertise.</p><Link href="/resources/blog/authors" className="mt-7 inline-flex border-2 border-white px-6 py-3 font-display text-sm font-bold text-white hover:bg-white hover:text-forest-dark">Meet the Authors</Link></div>
      </section>

      <section className="w-full bg-cream px-6 py-12 text-center md:py-16">
        <div className="mx-auto max-w-[650px]"><h2 className="font-display text-[26px] font-bold leading-[1.25] text-forest md:text-[32px]">Sign up for our Today&apos;s Harvest Blog.</h2><p className="mt-4 font-body text-base leading-7 text-charcoal/80">Get the latest blog articles delivered to your inbox.</p><form className="mx-auto mt-6 flex max-w-[560px] flex-col gap-3 sm:flex-row"><label htmlFor="newsletter-email" className="sr-only">Email address</label><input id="newsletter-email" type="email" required placeholder="Enter your email*" className="min-h-12 flex-1 border border-charcoal/20 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-grey-text outline-none" /><button type="submit" className="min-h-12 bg-clay px-6 py-3 font-display text-sm font-bold text-white hover:bg-clay-dark">Sign Up</button></form><p className="mt-2 text-left font-body text-xs text-grey-text">*Required Field</p></div>
      </section>
    </main>
  );
}

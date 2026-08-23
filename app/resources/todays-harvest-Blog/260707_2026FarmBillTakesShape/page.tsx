import Link from "next/link";
import type { Metadata } from "next";

const TITLE = "2026 Farm Bill Takes Shape: Comparing the House and Senate Proposals";
const DESCRIPTION = "2026 Farm Bill Takes Shape: Comparing the House and Senate Proposals";
const BLOG_PATH = "/resources/todays-harvest-Blog";

export const metadata: Metadata = {
  title: `${TITLE} | Farm Funders`,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/homepage/1-orchard_adobestock_292882711.jpg"],
  },
};

const RELATED_ARTICLES = [
  {
    category: "Ag Economy",
    categoryHref: `${BLOG_PATH}?category=ag-economy`,
    title: "2025 Northeast Dairy Farm Summary & Mid-Year Outlook",
    href: undefined as string | undefined,
    date: "July 10, 2026",
  },
  {
    category: "Crop Insurance",
    categoryHref: "/crop-insurance",
    title:
      "USDA Risk Management Agency Announces Emergency Claim Procedures for New York Apple Growers Following Spring Freeze",
    href: undefined as string | undefined,
    date: "July 8, 2026",
  },
  {
    category: "Business Tips and Tools",
    categoryHref: `${BLOG_PATH}?category=business-tips-and-tools`,
    title: "Tariff Relief Program Available for New York Producers",
    href: `${BLOG_PATH}/tariff-relief-program-available-for-new-york-producers`,
    date: "July 1, 2026",
  },
];

const TAGS = ["ag economy", "outlook", "policy", "legislation"];

export default function FarmBillArticlePage() {
  return (
    <main className="w-full overflow-hidden bg-white text-charcoal">
      {/* Article hero */}
      <header className="w-full bg-forest">
        <div className="mx-auto max-w-[1180px] px-6 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14 lg:px-12 lg:py-16">
          <div className="max-w-[1060px]">
            <Link
              href={`${BLOG_PATH}?category=Public+Policy`}
              className="font-body text-[13px] font-bold uppercase tracking-[0.08em] text-white/80 transition-colors hover:text-white"
            >
              Public Policy
            </Link>

            <h1 className="mt-4 max-w-[1050px] font-display text-[36px] font-extrabold leading-[1.08] tracking-[-0.4px] text-white sm:text-[42px] md:text-[50px] lg:text-[56px]">
              {TITLE}
            </h1>

            <div className="mt-6 flex flex-col gap-1 font-body text-[15px] leading-6 text-white/85 sm:flex-row sm:items-center sm:gap-3">
              <time dateTime="2026-07-07">July 7, 2026</time>
              <span className="hidden sm:inline" aria-hidden="true">
                |
              </span>
              <span>
                By:{" "}
                <Link href="/about/leadership" className="text-white underline-offset-2 hover:underline">
                  Danielle Cummins
                </Link>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Featured image */}
      <section aria-label="Article featured image" className="w-full bg-white">
        <div className="mx-auto max-w-[1180px] px-0 sm:px-6 md:px-10 lg:px-12">
          <img
            src="/images/homepage/1-orchard_adobestock_292882711.jpg"
            alt="Capitol building framed by farm fields"
            className="block h-auto w-full object-cover"
          />
        </div>
      </section>

      {/* Article content */}
      <article className="mx-auto w-full max-w-[850px] px-6 pb-14 pt-9 sm:px-8 md:px-10 md:pt-11 lg:px-0 lg:pt-12">
        <div className="font-body text-[17px] leading-[1.8] text-charcoal md:text-[18px]">
          <p>
            After nearly three years of short-term extensions, Congress is once again debating and drafting
            comprehensive farm legislation. In May, the House passed the <em>Farm, Food, and National Security Act of 2026 (H.R. 7567)</em>, while in late June Senate Agriculture Committee Chairman John Boozman (AR) released the <em>Agricultural Act of 2026</em>, a “discussion draft” providing the Senate a starting point for negotiation with other committee members.
          </p>
          <p className="mt-6">
            While the two proposals differ in several areas, they share broad agreement on many of agriculture’s priorities. Both bills would strengthen the farm safety net, invest in conservation, modernize USDA credit programs and expand support for specialty crops through fiscal year 2031. Perhaps more notable than what the Senate proposal includes is what it leaves out. Unlike the House bill, the Senate draft largely avoids the most politically divisive provisions, instead focusing on areas where bipartisan consensus already exists. This is driven by the necessity to garner 60 votes on the Senate floor, a much different political environment than in the House. The differences in policy and politics could prove significant as lawmakers work toward a final conference agreement.
          </p>

          <h2>Title 1: Commodity Programs</h2>
          <p>
            While many Title I provisions were addressed through the One Big Beautiful Bill (OBBB), both the House and Senate proposals recognize that the current farm safety net has not kept pace with rising production costs. Both the House and Senate bills as drafted will:
          </p>
          <ul>
            <li>Increase statutory reference prices under the Price Loss Coverage (PLC) program;</li>
            <li>Raise marketing assistance loan rates;</li>
            <li>Update Agriculture Risk Coverage (ARC) benchmark calculations;</li>
            <li>Continue Dairy Margin Coverage (DMC); and</li>
            <li>Reauthorize disaster assistance programs</li>
            <li>Both bills also include a provision for ad-hoc assistance for specialty crop producers via the Specialty Crop Assistance Framework and establish authorization for USDA to administer future disaster relief payments through state disaster block grants. These changes mark a significant update to commodity support programs and reflect the current needs in a tough agriculture economy.</li>
          </ul>
          <p>
            The Senate proposal also includes several administrative improvements, including expanded authority for USDA to continue marketing assistance loans during appropriations lapses and requires additional Commodity Credit Corporation (CCC) transparency and reporting. This is likely an effort to bring more oversight into CCC spending and use of CCC funds by the executive branch.
          </p>
          <p>
            The House proposal includes several producer-focused provisions not found in the Senate bill, including restoring tobacco as a Commodity Credit Corporation commodity, authorizing electronic disaster assistance applications, directing USDA to study fertilizer storage loans, and revising livestock indemnity standards for losses caused by Mexican wolves.
          </p>

          <h2>Title 2: Conservation Programs</h2>
          <p>
            Conservation represents another area of general agreement between both chambers. There are no substantial changes to the following conservation programs in either proposal:
          </p>
          <ul>
            <li>Conservation Reserve Program (CRP)</li>
            <li>Environmental Quality Incentives Program (EQIP)</li>
            <li>Conservation Stewardship Program (CSP)</li>
            <li>Agricultural Conservation Easement Program (ACEP)</li>
            <li>Regional Conservation Partnership Program (RCPP)</li>
          </ul>
          <p>
            Both bills would incorporate much of the Inflation Reduction Act’s (IRA) conservation funding into the farm bill baseline, providing long-term funding certainty beyond annual appropriations.
          </p>
          <p>
            The two proposals diverge primarily in implementation. The Senate bill places greater emphasis on expanding the Conservation Reserve Enhancement Program (CREP), strengthening technical assistance, updating conservation practice standards, and improving administrative flexibility for USDA conservation programs.
          </p>
          <p>
            The House proposal focuses more directly on conservation outcomes, adding new soil health initiatives, flood vulnerability research, winter wheat environmental studies, and mitigation banking authorities.
          </p>

          <h2>Title 5: Credit Programs</h2>
          <p>
            Credit title provisions are among the least controversial sections of both bills and have provided critical updates for the Farm Credit System. The following breakdown highlights the Farm Credit priorities that were included in the House and Senate proposals and where they vary.
          </p>
          <p>These provisions were included in both proposals:</p>
          <ul>
            <li><strong>H.R. 1246</strong>, which would give Farm Credit institutions authority to partner with community banks and other lenders to finance essential community facilities like senior and childcare centers and healthcare facilities.</li>
            <li><strong>H.R. 1063</strong>, which would confirm the role of the Farm Credit Administration (FCA) as the Farm Credit System’s sole regulator and require the collection of certain loan applicants’ demographic information in a way that protects their privacy.</li>
            <li><strong>S.899/H.R. 1991</strong>, which would increase the amounts for USDA’s Farm Service Agency loan guarantees — an important tool for Farm Credit lenders working with beginning farmers or customers facing financial challenges.</li>
            <li><strong>S.1217/H.R. 2518</strong>, which would expand Farm Credit’s ability to lend to businesses that support the fishing and aquaculture industries.</li>
          </ul>
          <p className="font-bold">House Only:</p>
          <ul>
            <li><strong>H.R. 6779 USDA Loan Modernization Act</strong>, which amends the Consolidated Farm and Rural Development Act to expand eligibility for direct loans to individuals or entity members that hold at least a 50 percent interest</li>
            <li><strong>H.R. 7426 USDA Express Loan Act</strong>, which simplifies the application process for real estate and operating loans up to $1 million, requiring the Secretary to notify lenders of approval or disapproval within five business days.</li>
          </ul>
          <p className="font-bold">Senate Only:</p>
          <ul>
            <li>Expanding access to equity capital investment for rural businesses by eliminating unnecessary restrictions on Rural Business Investment Companies (RBIC)</li>
            <li>Promoting U.S. ag exports by increasing the amount of export financing CoBank is allowed to provide</li>
            <li>Clarifying CoBank’s renewable and waste authority to lower operational and energy costs for customers</li>
            <li>Improving the transparency and safety and soundness of the Federal Agricultural Mortgage Company (Farmer Mac)</li>
          </ul>
          <p>
            Currently, the FARM Home Loans Act, the Farm Credit Adjustment Act, and an enhanced preferred lender pilot program are not included in the draft.
          </p>
          <p>
            Overall, both proposals seek to modernize USDA lending while improving producer access to capital and strengthening the Farm Credit System.
          </p>

          <h2>Title 10: Horticulture Programs</h2>
          <p>
            Support for specialty crop producers remains a priority in both proposals. Both bills continue Specialty Crop Block Grants, the Local Agriculture Market Program, specialty crop market reporting, National Plant Diagnostic Network funding, and National Organic Program activities. These investments continue Congress’s long-term trend of expanding farm bill support beyond traditional commodity agriculture.
          </p>
          <p>
            The Senate proposal expands organic certification cost-share, food safety education, bio-stimulant regulation, biotechnology policy coordination, and agricultural quarantine inspection funding.
          </p>
          <p>
            The House proposal places greater emphasis on hemp production, modernization of organic oversight and improved organic data collection.
          </p>

          <h2>Title 11: Crop Insurance Programs</h2>
          <p>
            The crop insurance title shows strong alignment between the two proposals. Both bills strengthen premium assistance for beginning farmers, improve Whole-Farm Revenue Protection, expand quality loss adjustment coverage, continue investments in research and development, update reimbursement rates, and reinforce program integrity.
          </p>
          <p>
            The Senate proposal includes additional changes to yield determinations and Federal Crop Insurance Corporation administration. It is noteworthy that the House proposal establishes a Specialty Crop Advisory Committee. This committee would give specialty crop producers a formal role in shaping federal crop insurance policy.
          </p>

          <h2>Major Policy Differences Outside the Core Farm Bill Titles</h2>
          <p>
            Though the differences between the House and Senate bills may be nuanced, it is worth noting that the House bill focuses more on program modernization and regulatory reform, where the Senate draft bill provides broader policy and programmatic expansions.
          </p>
          <p>
            Although the core producer titles are similar, a stark divergence between the two bills are several high-profile political issues that are completely omitted from the Senate proposal.
          </p>
          <p>Among the most notable differences:</p>
          <ul>
            <li><em>SNAP reforms</em> — The House includes more significant changes to SNAP eligibility, administration, and spending than the Senate proposal.</li>
            <li><em>Year-round E15</em> — The House incorporates language addressing nationwide year-round sales of E15 gasoline, while the Senate proposal does not.</li>
            <li><em>California Proposition 12</em> — The House includes language addressing livestock production standards associated with Proposition 12. The Senate proposal omits those provisions.</li>
            <li><em>Foreign ownership of agricultural land</em> — While both proposals address agricultural security, the House adopts broader restrictions on foreign ownership of farmland.</li>
            <li><em>Regulatory reforms</em> — The House contains more expansive pesticide and environmental regulatory provisions than the Senate draft.</li>
          </ul>
          <p>
            These issues are among the most politically contentious components of the House bill and are expected to be points of contention if Congress proceeds to conference.
          </p>

          <h2>Looking Ahead</h2>
          <p>
            Despite their differences, the House and Senate proposals share far more common ground than previous farm bill debates. Both seek to strengthen the farm safety net, preserve conservation investments, modernize agricultural lending, expand specialty crop support, and reinforce crop insurance for producers facing higher costs and increasing risk.
          </p>
          <p>
            The principal differences lie less in agricultural policy than in broader political priorities, particularly those around the nutrition policy. The OBBB Act significantly altered the SNAP program by tying state financial responsibility to payment error rates. Beginning in FY 2028, states with error rates above 6% must pay between five and 15% of SNAP benefit costs, a departure from the program’s previous structure where benefits were fully funded by the federal government. The OBBB Act also shifted administrative costs to the states by an additional 25% beginning in FY 2027. Critics of this program’s changes are asking for a one-year extension, pushing the administrative cost shift until FY28 – allowing all states an additional year to adjust budgets.
          </p>
          <p>
            As we await a markup from the Senate Agriculture Committee, the challenge ahead will be preserving the bipartisan consensus around core farm programs while resolving the broader policy issues. It’s this bipartisan consensus (or lack thereof) that has historically made completing a farm bill one of Congress’s most difficult legislative undertakings.
          </p>
        </div>

        <div className="mt-10 border-t border-charcoal/10 pt-6">
          <span className="font-body text-[15px] text-charcoal">Tags: </span>
          {TAGS.map((tag, index) => (
            <span key={tag}>
              <Link href={`${BLOG_PATH}?tag=${encodeURIComponent(tag)}`} className="font-body text-[15px] text-clay hover:underline">
                {tag}
              </Link>
              {index < TAGS.length - 1 && <span className="mx-2">,</span>}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-4 border-t border-charcoal/10 pt-6">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-cream font-display text-xl font-bold text-forest" aria-hidden="true">
            DC
          </div>
          <div>
            <p className="font-display text-[16px] font-bold text-forest">Danielle Cummins</p>
            <p className="font-body text-[14px] text-grey-text">Legislative Affairs Officer</p>
          </div>
        </div>

        <div className="mt-10 border-t border-charcoal/10 pt-6">
          <Link href={BLOG_PATH} className="font-display text-[15px] font-bold text-blue hover:underline">
            ← Back to Today&apos;s Harvest
          </Link>
        </div>
      </article>

      <section className="mx-auto w-full max-w-[1180px] px-6 pb-14 pt-4 sm:px-8 md:px-10 lg:px-12">
        <h2 className="font-display text-[26px] font-bold text-forest md:text-[30px]">You Might Also Like</h2>
        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">
          {RELATED_ARTICLES.map((item) => (
            <div key={item.title} className="border-t border-charcoal/10 pt-5">
              <Link href={item.categoryHref} className="font-body text-[13px] font-bold uppercase tracking-wide text-grey-text hover:underline">
                {item.category}
              </Link>
              <div className="mt-3">
                {item.href ? (
                  <Link href={item.href} className="font-display text-[18px] font-bold leading-snug text-forest hover:underline">
                    {item.title}
                  </Link>
                ) : (
                  <span className="font-display text-[18px] font-bold leading-snug text-forest">{item.title}</span>
                )}
              </div>
              <p className="mt-3 font-body text-[13px] font-bold uppercase tracking-wide text-grey-text">{item.date}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-forest-dark px-6 py-14 text-center text-white sm:px-8 md:py-16">
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Meet the Authors</h2>
        <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-7 text-white/85">
          Connect with and discover our Today&apos;s Harvest blog authors and their broad range of financial and Northeast agricultural expertise.
        </p>
        <Link href="/contact" className="mx-auto mt-7 inline-flex rounded-sm bg-white px-6 py-3.5 font-body text-sm font-bold text-forest-dark transition-colors hover:bg-cream">
          Meet the Authors
        </Link>
      </section>

      <section className="w-full bg-cream px-6 py-12 text-center sm:px-8 md:py-16">
        <h2 className="font-display text-2xl font-bold text-forest md:text-3xl">Sign up for our Today&apos;s Harvest Blog.</h2>
        <p className="mt-4 font-body text-base text-charcoal/80">Get the latest blog articles delivered to your inbox.</p>
        <form className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input id="newsletter-email" type="email" required placeholder="Enter your email*" className="min-w-0 flex-1 rounded-sm border border-charcoal/20 bg-white px-4 py-3 font-body text-sm text-charcoal placeholder:text-grey-text" />
          <button type="submit" className="rounded-sm bg-clay px-6 py-3 font-body text-sm font-bold text-white transition-colors hover:bg-clay-dark">Sign Up</button>
        </form>
      </section>
    </main>
  );
}

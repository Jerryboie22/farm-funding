import Link from "next/link";
import type { Metadata } from "next";

const TITLE = "Tariff Relief Program Available for New York Producers";

const DESCRIPTION =
  "The Agricultural Resiliency Against Tariffs Program was recently appropriated $30 million to provide payments directly to NY agricultural producers. Applications are due by August 11, 2026.";

const BLOG_PATH = "/resources/todays-harvest-Blog";

export const metadata: Metadata = {
  title: `${TITLE} | Farm Funders`,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/homepage/Dairy cows milking.jpg"],
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
    category: "Public Policy",
    categoryHref: `${BLOG_PATH}?category=public-policy`,
    title:
      "2026 Farm Bill Takes Shape: Comparing the House and Senate Proposals",
    href: `${BLOG_PATH}/260707_2026FarmBillTakesShape`,
    date: "July 7, 2026",
  },
  {
    category: "Crop Insurance",
    categoryHref: "/crop-insurance",
    title:
      "Understanding USDA\u2019s Base Acre Review Opportunity: What Farmers Need to Know",
    href: undefined as string | undefined,
    date: "June 9, 2026",
  },
];

const TAGS = [
  { label: "economy", slug: "economy" },
  { label: "expenses", slug: "expenses" },
  { label: "social programs", slug: "social-security" },
  { label: "ag economy", slug: "ag-economy" },
  { label: "risk management", slug: "risk-management" },
];

export default function TariffReliefArticlePage() {
  return (
    <main className="w-full overflow-hidden bg-white text-charcoal">
      {/* =========================================================
          ARTICLE HERO
      ========================================================= */}
      <header className="w-full bg-forest">
        <div className="mx-auto w-full max-w-[1180px] px-6 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14 lg:px-12 lg:py-16">
          <div className="max-w-[1040px]">
            <Link
              href={`${BLOG_PATH}?category=business-tips-and-tools`}
              className="inline-block font-body text-[13px] font-bold uppercase tracking-[0.08em] text-white/85 transition-colors hover:text-white"
            >
              Business Tips and Tools
            </Link>

            <h1 className="mt-4 max-w-[1040px] font-display text-[36px] font-extrabold leading-[1.08] tracking-[-0.5px] text-white sm:text-[42px] md:text-[50px] lg:text-[56px]">
              {TITLE}
            </h1>

            <div className="mt-6 flex flex-col gap-1.5 font-body text-[15px] leading-6 text-white/85 sm:flex-row sm:items-center sm:gap-3">
              <time dateTime="2026-07-01">July 1, 2026</time>

              <span
                className="hidden text-white/50 sm:inline"
                aria-hidden="true"
              >
                |
              </span>

              <span>
                By:{" "}
                <Link
                  href="/resources/meet-the-authors#dario-arezzo"
                  className="text-white underline-offset-2 hover:underline"
                >
                  Dario Arezzo
                </Link>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================
          FEATURED IMAGE
      ========================================================= */}
      <section
        aria-label="Article featured image"
        className="w-full bg-white"
      >
        <div className="mx-auto w-full max-w-[1180px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/homepage/Dairy cows milking.jpg"
            alt="Dairy cows eating hay at a feeding station inside a barn, with warm sunlight in the background"
            className="block h-auto max-h-[600px] w-full object-cover"
          />
        </div>
      </section>

      {/* =========================================================
          ARTICLE CONTENT
      ========================================================= */}
      <article className="mx-auto w-full max-w-[850px] px-6 pb-14 pt-10 sm:px-8 md:px-10 md:pt-12 lg:px-0 lg:pt-14">
        <div
          className="
            font-body
            text-[17px]
            leading-[1.8]
            text-charcoal
            md:text-[18px]
          "
        >
          <p>
            The Agricultural Resiliency Against Tariffs Program was recently
            appropriated <strong>$30 million</strong> to provide payments
            directly to agricultural producers. These payments range from
            $1,000 to $25,000 per entity. Timing is of the essence as there
            is an application process that currently runs through August 11.
          </p>

          <h2 className="mb-3 mt-10 font-display text-[21px] font-bold leading-[1.3] text-forest md:mt-12 md:text-[23px]">
            Determining Product Eligibility
          </h2>

          <p>
            The first step is to determine if the agricultural product an
            applicant is producing qualifies for the program. The following
            products are eligible:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Milk (Dairy farms)</li>
            <li>Livestock, Livestock Products, Specialty Crops, Aquaculture</li>
          </ul>

          <p className="mt-6">
            Livestock and livestock products include eggs, cattle, sheep,
            hogs, goats, poultry, natural fiber, cow dairy milk sold to
            consumers raw, milk from non-bovine animals, and other animals
            raised as livestock. Specialty crops include those products that
            are listed as eligible under the{" "}
            <a
              rel="noopener noreferrer"
              href="https://www.ams.usda.gov/services/grants/scbgp/specialty-crop"
              target="_blank"
              className="text-clay hover:underline"
            >
              USDA Specialty Crop Block Grant Program
            </a>
            .
          </p>

          <p className="mt-6">
            Aquaculture products include fish, fish products, water plants
            and shellfish (excluding wild harvested products).
          </p>

          <h3 className="mb-3 mt-8 font-display text-[19px] font-bold leading-[1.3] text-forest">
            What products don&rsquo;t qualify?
          </h3>

          <p>
            Any row crops eligible under the{" "}
            <a
              rel="noopener noreferrer"
              href="https://www.fsa.usda.gov/resources/income-support/farmer-bridge-assistance-fba-program"
              target="_blank"
              className="text-clay hover:underline"
            >
              USDA Farmer Bridge Assistance Program
            </a>{" "}
            (e.g., corn, soybeans, barley, wheat, etc.) are{" "}
            <strong>ineligible</strong> under the Agricultural Resiliency
            Against Tariffs Program.
          </p>

          <h2 className="mb-3 mt-10 font-display text-[21px] font-bold leading-[1.3] text-forest md:mt-12 md:text-[23px]">
            Determining Farm Eligibility
          </h2>

          <p>
            The second step is to determine farm eligibility. To qualify,
            applicants must meet the following criteria:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Operating in 2025 and currently in business;</li>
            <li>
              Has active agricultural production within New York State for
              an eligible product(s);
            </li>
            <li>
              Meets the eligible farm income requirement. An eligible farm
              must have at least two-thirds of its federal gross income from
              all sources in excess of $30,000 derived from agricultural
              activities, as defined by{" "}
              <a
                rel="noopener noreferrer"
                href="https://www.tax.ny.gov/pit/credits/eligible-farmer-income-test.htm"
                target="_blank"
                className="text-clay hover:underline"
              >
                New York State Tax Law
              </a>
              .
            </li>
            <li>
              This test is similar to the farmers who get certain tax
              credits, such as the New York Farmers&rsquo; School Tax
              credit.
            </li>
            <li>
              Program eligibility must be certified and attested to by a
              qualified financial professional.
            </li>
          </ul>

          <h2 className="mb-3 mt-10 font-display text-[21px] font-bold leading-[1.3] text-forest md:mt-12 md:text-[23px]">
            Completing the Application Process
          </h2>

          <p>
            After determining steps one and two, the next step is the
            application. Eligible producers can access the application at
            the following link:{" "}
            <a
              rel="noopener noreferrer"
              href="https://agriculture.ny.gov/agricultural-resiliency-against-tariffs-program"
              target="_blank"
              className="break-words text-clay hover:underline"
            >
              https://agriculture.ny.gov/agricultural-resiliency-against-tariffs-program
            </a>
            . There are two different tracks, one for dairy farms and
            another for other eligible applicants with slightly different
            requirements. Applications must be completed by August 11.
          </p>

          <p className="mt-6">
            Farm Funders&rsquo;s team of agricultural advisors can help
            applicants navigate the process. Relief programs are helpful,
            but they are most effective when aligned with a broader
            financial plan, including budgeting and risk mitigation tools
            such as Dairy Revenue Protection and crop insurance.
          </p>

          <p className="mt-6">
            Farm Funders&rsquo;s whole-farm, advisory approach connects
            programs, insurance and financial strategy into a clear path
            forward. Applicants are encouraged to start the application
            process now and reach out to their advisors along the way.
          </p>

          <p className="mt-6">
            At Farm Funders, we are committed to being a trusted advisor to
            New York&rsquo;s agricultural producers, helping you navigate
            uncertainty and strengthen your operation for the future.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex rounded-sm bg-forest px-6 py-3.5 font-body text-sm font-bold text-white transition-colors hover:bg-forest-dark"
            >
              Contact Us Today!
            </Link>
          </div>
        </div>

        {/* =========================================================
            TAGS
        ========================================================= */}
        <div className="mt-10 border-t border-charcoal/10 pt-6">
          <span className="font-body text-[15px] text-charcoal">
            Tags:{" "}
          </span>

          {TAGS.map((tag, index) => (
            <span key={tag.slug}>
              <Link
                href={`${BLOG_PATH}?tag=${encodeURIComponent(tag.slug)}`}
                className="font-body text-[15px] text-clay hover:underline"
              >
                {tag.label}
              </Link>

              {index < TAGS.length - 1 && (
                <span className="mx-2 text-charcoal/60">,</span>
              )}
            </span>
          ))}
        </div>

        {/* =========================================================
            AUTHOR
        ========================================================= */}
        <div className="mt-8 flex items-center gap-4 border-t border-charcoal/10 pt-6">
          <div className="h-[68px] w-[68px] shrink-0 overflow-hidden rounded-full bg-grey-bg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://farm-funders.com/-/media/farm-credit-east/Blog/Authors/ArezzoDario_web-1.jpg"
              alt="Dario Arezzo"
              width={68}
              height={68}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="block h-full w-full object-cover"
            />
          </div>

          <div>
            <Link
              href="/resources/meet-the-authors#dario-arezzo"
              className="font-display text-[16px] font-bold text-forest hover:underline"
            >
              Dario Arezzo
            </Link>

            <p className="font-body text-[14px] text-grey-text">
              Executive Vice President, Chief Financial Services Officer
            </p>
          </div>
        </div>

        {/* =========================================================
            BACK TO BLOG
        ========================================================= */}
        <div className="mt-8">
          <Link
            href={BLOG_PATH}
            className="font-body text-[15px] font-bold text-blue hover:underline"
          >
            ← Back to Today&apos;s Harvest
          </Link>
        </div>
      </article>

      {/* =========================================================
          YOU MIGHT ALSO LIKE
      ========================================================= */}
      <section className="mx-auto w-full max-w-[1180px] px-6 pb-14 pt-4 sm:px-8 md:px-10 lg:px-12">
        <h2 className="font-display text-[26px] font-bold text-forest md:text-[30px]">
          You Might Also Like
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">
          {RELATED_ARTICLES.map((item) => (
            <div
              key={item.title}
              className="border-t border-charcoal/10 pt-5"
            >
              <Link
                href={item.categoryHref}
                className="font-body text-[13px] font-bold uppercase tracking-wide text-grey-text hover:underline"
              >
                {item.category}
              </Link>

              <div className="mt-3">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="font-display text-[18px] font-bold leading-snug text-forest hover:underline"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <span className="font-display text-[18px] font-bold leading-snug text-forest">
                    {item.title}
                  </span>
                )}
              </div>

              <p className="mt-3 font-body text-[13px] font-bold uppercase tracking-wide text-grey-text">
                {item.date}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          MEET THE AUTHORS
      ========================================================= */}
      <section className="w-full bg-forest-dark px-6 py-14 text-center text-white sm:px-8 md:py-16">
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          Meet the Authors
        </h2>

        <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-7 text-white/85">
          Connect with and discover our Today&apos;s Harvest blog authors and
          their broad range of financial and Northeast agricultural expertise.
        </p>

        <Link
          href="/resources/meet-the-authors"
          className="mx-auto mt-7 inline-flex rounded-sm bg-white px-6 py-3.5 font-body text-sm font-bold text-forest-dark transition-colors hover:bg-cream"
        >
          Meet the Authors
        </Link>
      </section>

      {/* =========================================================
          NEWSLETTER
      ========================================================= */}
      <section className="w-full bg-cream px-6 py-12 text-center sm:px-8 md:py-16">
        <h2 className="font-display text-2xl font-bold text-forest md:text-3xl">
          Sign up for our Today&apos;s Harvest Blog.
        </h2>

        <p className="mt-4 font-body text-base text-charcoal/80">
          Get the latest blog articles delivered to your inbox.
        </p>

        <form className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>

          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="Enter your email*"
            className="min-w-0 flex-1 rounded-sm border border-charcoal/20 bg-white px-4 py-3 font-body text-sm text-charcoal placeholder:text-grey-text focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest"
          />

          <button
            type="submit"
            className="rounded-sm bg-clay px-6 py-3 font-body text-sm font-bold text-white transition-colors hover:bg-clay-dark"
          >
            Sign Up
          </button>
        </form>
      </section>
    </main>
  );
}

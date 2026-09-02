import Link from "next/link";

export const metadata = {
  title: "Ag Building Loans: Barns, Grain Bins & More | Farm Funders",
  description:
    "We finance all types of facilities for Northeast agriculture, including horse and livestock barns, grain bins, equipment storage, greenhouses, processing plants and more.",
};

const CONTACT_URL = "/contact";

const COLORS = {
  green: "#4f832a",
  lightGreen: "#ecf1e4",
  heroGray: "#f8f8f8",
  blue: "#496d83",
  black: "#231f20",
  gray: "#686868",
  brown: "#5a4400",
};

function ChevronRight({ className = "" }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={`inline-block shrink-0 ${className}`}
    >
      <path
        d="M4 2l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContactButton() {
  return (
    <Link
      href={CONTACT_URL}
      className="inline-flex h-[51px] items-center justify-center rounded-[4px] border-2 border-[#496d83] bg-[#496d83] px-[19px] py-[10px] text-[16px] font-bold leading-[20px] text-white no-underline transition-colors hover:bg-white hover:text-[#496d83]"
    >
      Contact My Office
    </Link>
  );
}

const WHAT_WE_FINANCE = [
  "Riding arenas",
  "Barns",
  "Packing houses",
  "Processing plants",
  "Greenhouses",
  "Sawmills",
];

const RATES_TERMS = [
  {
    icon: "/images/financing/facility-loans/competitive rates.png",
    title: "Competitive rates",
    body: "Farm Funders offers fixed, variable or a combination of both.",
  },
  {
    icon: "/images/financing/facility-loans/flexible-terms.png",
    title: "Flexible terms",
    body: "We tailor our loan and repayment plans to provide a variety of interest rate programs depending on the loan's purpose, repayment terms and the flexibility you need.",
  },
  {
    icon: "/images/financing/facility-loans/flexible-payment-options.png",
    title: "Flexible payment options",
    body: "Select monthly, quarterly or semiannual payment schedules; fully or partially amortized loans; and decreasing, even or accelerated payment schedules.",
  },
  {
    icon: "/images/financing/facility-loans/rate-conversions.png",
    title: "Rate conversions",
    body: "If your financial needs change, you can convert your variable-rate loan to a fixed-rate loan. Fees may apply.",
  },
];

const STEPS = [
  {
    icon: "/images/financing/facility-loans/communication.png",
    title: "Contact your local office.",
    body: (
      <>
        Ready to purchase land or a rural home?{" "}
        <Link
          href="/contact"
          className="text-[#496d83] underline underline-offset-2"
        >
          Contact your local Farm Funders office
        </Link>
        .
      </>
    ),
  },
  {
    icon: "/images/financing/facility-loans/document.png",
    title: "Gather your financial documents.",
    body: (
      <>
        Our relationship managers will answer any questions and help get
        everything lined up to make applying quick and easy.
      </>
    ),
  },
  {
    icon: "/images/financing/facility-loans/apply.png",
    title: "Complete your application.",
    body: (
      <>
        Fill out the application we provide. Once it&apos;s filled out, we&apos;ll review
        it to ensure your success and get you on your way to advancing your
        business
      </>
    ),
  },
];

const RELATED = [
  {
    category: "Business Tips and Tools",
    categoryHref:
      "/resources/todays-harvest-Blog?category=business-tips-and-tools",
    title: "Tariff Relief Program Available for New York Producers",
    href: "/resources/todays-harvest-Blog/260701TariffReliefProgramNYProducers.html",
    date: "JULY 1, 2026",
  },
  {
    category: "Knowledge Exchange Partner",
    categoryHref:
      "/resources/Industry-Trends-and-Outlooks?category=Knowledge Exchange Partner",
    title: "Fuel, Fertilizer and Conflict in the Middle East: What to Know Now",
    href: "/resources/Industry-Trends-and-Outlooks/Reports/2606KEP_FuelFertilizerandConflictinMiddleEast.html",
    date: "JUNE 2, 2026",
  },
  {
    category: "Tax Talks",
    categoryHref: "/resources/todays-harvest-Blog?category=tax-talk",
    title:
      "Capital Construction Fund: A Fisherman's Guide to Building for the Future",
    href: "/resources/todays-harvest-Blog/260526CapitalConstructionFundFishermansGuide.html",
    date: "MAY 26, 2026",
  },
];

function SectionHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`m-0 font-[800] text-[#4f832a] ${className}`}
      style={{
        fontFamily: '"Open Sans", Arial, Helvetica, sans-serif',
      }}
    >
      {children}
    </h2>
  );
}

function BodyText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`m-0 text-[16px] font-normal leading-[26px] text-[#231f20] ${className}`}
      style={{
        fontFamily: '"Open Sans", Arial, Helvetica, sans-serif',
      }}
    >
      {children}
    </p>
  );
}

export default function FacilityLoansPage() {
  return (
    <main
      className="w-full overflow-x-hidden"
      style={{
        fontFamily: '"Open Sans", Arial, Helvetica, sans-serif',
      }}
    >
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="w-full bg-[#f8f8f8]">
        <div className="mx-auto grid w-full grid-cols-1 px-[4.05%] pb-[31px] pt-[34px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="min-w-0 lg:pr-[20px] lg:pt-[130px]">
            <h1
              id="maincontent"
              className="m-0 font-[800] text-[36px] leading-[43.2px] text-[#4f832a] lg:text-[48px] lg:leading-[57.6px]"
            >
              Facility Loans
            </h1>

            <p className="m-0 mt-[30px] max-w-[700px] text-[16px] font-normal leading-[26px] text-[#231f20] lg:text-[20px] lg:leading-[32px]">
              Financing for horse and livestock barns and sheds, farm and
              equipment storage, grain bins and more.
            </p>

            <div className="mt-[30px]">
              <ContactButton />
            </div>
          </div>

          <div className="min-w-0 lg:pt-0">
            <img
              src="/images/financing/facility-loans/facility-loans-hero.jpg"
              alt="Inside a commercial greenhouse with rows of flowers in bloom"
              width={738}
              height={409}
              className="block h-auto w-full object-cover lg:aspect-[738/409]"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="w-full bg-[#ecf1e4] px-[4.05%] pb-[70px] pt-[70px] lg:pb-[90px] lg:pt-[70px]">
        <div className="max-w-[1550px]">
          <SectionHeading className="max-w-[1350px] text-[32px] leading-[40px] lg:text-[40px] lg:leading-[50.2px]">
            Farm Funders delivers competitive rates and knowledgeable service
            for the facilities your ag business needs.
          </SectionHeading>

          <div className="mt-[30px] grid max-w-[1550px] grid-cols-1 gap-x-[50px] gap-y-[30px] md:grid-cols-3">
            <div>
              <h3 className="m-0 text-[20px] font-bold leading-[25px] text-[#231f20]">
                Our extensive expertise across Northeast industries means less
                hassle.
              </h3>

              <BodyText className="mt-[16px]">
                We understand Northeast agriculture and your growing needs. Get
                the loans you need with more expertise and less hassle.
              </BodyText>
            </div>

            <div>
              <h3 className="m-0 text-[20px] font-bold leading-[25px] text-[#231f20]">
                Financing flexibility.
              </h3>

              <BodyText className="mt-[16px]">
                Our financing includes amendable draw schedules to work with
                contractors, plus interest-only financing for the first 12
                months of a construction loan.
              </BodyText>
            </div>

            <div>
              <h3 className="m-0 text-[20px] font-bold leading-[25px] text-[#231f20]">
                Patronage dividends can add up to significant savings.
              </h3>

              <BodyText className="mt-[16px]">
                Most of our facility loans are eligible for{" "}
                <Link
                  href="/about/Who-We-Are/Patronage-Dividends"
                  className="text-[#496d83] underline underline-offset-2"
                >
                  patronage
                </Link>{" "}
                &mdash; a portion of our net earnings returned to members.
                It&apos;s a benefit you&apos;ll find nowhere else.
              </BodyText>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE FINANCE
      ========================================================= */}
      <section className="w-full bg-white px-[4.05%] pb-[70px] pt-[70px] lg:pb-[90px] lg:pt-[70px]">
        <div className="max-w-[1550px]">
          <SectionHeading className="text-[32px] leading-[40px] lg:text-[40px] lg:leading-[50.2px]">
            What We Finance
          </SectionHeading>

          <BodyText className="mt-[30px] max-w-[850px]">
            Our facility loans are available to meet the needs of agriculture
            and life in the country.
          </BodyText>

          <ul className="mt-[20px] list-disc space-y-[4px] pl-[20px] text-[16px] leading-[26px] text-[#231f20]">
            {WHAT_WE_FINANCE.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* =========================================================
          NEW YORK FARM WORKER HOUSING
      ========================================================= */}
      <section className="w-full bg-[#ecf1e4] px-[4.05%] pb-[70px] pt-[70px] lg:pb-[90px] lg:pt-[70px]">
        <div className="mx-auto grid max-w-[1550px] grid-cols-1 items-center gap-x-[50px] gap-y-[40px] lg:grid-cols-[minmax(0,1fr)_550px]">
          <div>
            <SectionHeading className="max-w-[850px] text-[32px] leading-[40px] lg:text-[40px] lg:leading-[50.2px]">
              New York State Farm Worker Housing Loan Program
            </SectionHeading>

            <BodyText className="mt-[30px] max-w-[900px]">
              No-interest loans to help New York agricultural producers finance
              improvement of existing housing or the construction/purchase of
              new housing for farm workers. $15 million in funding is available
              with the ability for agricultural producers to borrow up to
              $200,000 per year for farm worker housing projects.
            </BodyText>

            <Link
              href="/FINANCING/Facility-Loans/NYS-Farm-Worker-Housing.html"
              className="mt-[20px] inline-flex items-center gap-[4px] text-[16px] font-bold leading-[26px] text-[#496d83] no-underline"
            >
              Learn more
              <ChevronRight />
            </Link>
          </div>

          <div className="flex w-full justify-end">
            <img
              src="/images/financing/facility-loans/FarmWorkerHousing.png"
              alt="Farm Worker Housing Facility"
              width={550}
              height={255}
              className="block h-auto w-full max-w-[550px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          FACILITY LOAN RATES & TERMS
      ========================================================= */}
      <section className="w-full bg-white px-[4.05%] pb-[80px] pt-[70px] lg:pb-[90px] lg:pt-[70px]">
        <div className="mx-auto max-w-[1550px]">
          <SectionHeading className="text-[32px] leading-[40px] lg:text-[40px] lg:leading-[50.2px]">
            Facility Loan Rates &amp; Terms
          </SectionHeading>

          <div className="mt-[35px] grid grid-cols-1 gap-x-[50px] gap-y-[45px] md:grid-cols-2 lg:grid-cols-4">
            {RATES_TERMS.map((item) => (
              <div
                key={item.title}
                className="min-w-0"
              >
                {/* Fixed image slot prevents layout collapse */}
                <div className="flex h-[64px] w-full items-start">
                  <img
                    src={item.icon}
                    alt=""
                    width={64}
                    height={64}
                    className="block h-[62px] w-auto max-w-[70px] object-contain object-left"
                  />
                </div>

                <h3 className="m-0 mt-[30px] text-[20px] font-bold leading-[25px] text-[#231f20]">
                  {item.title}
                </h3>

                <BodyText className="mt-[16px]">
                  {item.body}
                </BodyText>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CALCULATOR CTA
      ========================================================= */}
      <section className="w-full bg-[#4f832a] px-[4.05%] py-[62px] text-white">
        <div className="mx-auto flex max-w-[1550px] flex-col items-center text-center">
          <h2 className="m-0 font-[800] text-[32px] leading-[40px] text-white lg:text-[40px] lg:leading-[50.2px]">
            How much will the loan cost?
          </h2>

          <p className="m-0 mt-[38px] text-[16px] font-semibold leading-[26px] text-white lg:text-[20px] lg:leading-[32px]">
            Check out our interactive calculator to determine your payments and
            financing needs
          </p>

          <Link
            href="/resources/calculators"
            className="mt-[58px] inline-flex h-[61px] min-w-[225px] items-center justify-center rounded-[4px] border-2 border-white px-[20px] py-[10px] text-[16px] font-bold leading-[20px] text-white no-underline transition-colors hover:bg-white hover:text-[#4f832a]"
          >
            Calculate Payments
          </Link>
        </div>
      </section>

      {/* =========================================================
          HOW TO START
      ========================================================= */}
      <section className="w-full bg-white px-[4.05%] pb-[90px] pt-[70px] lg:pb-[100px] lg:pt-[70px]">
        <div className="mx-auto max-w-[1550px]">
          <SectionHeading className="text-[32px] leading-[40px] lg:text-[40px] lg:leading-[50.2px]">
            How to Start Your Facility Loan
          </SectionHeading>

          <div className="mt-[35px] grid grid-cols-1 gap-x-[50px] gap-y-[45px] md:grid-cols-3">
            {STEPS.map((step) => (
              <div key={step.title} className="min-w-0">
                <div className="flex h-[65px] items-start">
                  <img
                    src={step.icon}
                    alt=""
                    width={65}
                    height={65}
                    className="block h-[64px] w-auto max-w-[75px] object-contain object-left"
                  />
                </div>

                <h3 className="m-0 mt-[30px] text-[20px] font-bold leading-[25px] text-[#231f20]">
                  {step.title}
                </h3>

                <div className="mt-[16px] text-[16px] font-normal leading-[26px] text-[#231f20]">
                  {step.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          YOU MIGHT ALSO LIKE
      ========================================================= */}
      <section className="w-full bg-[#ecf1e4] px-[4.05%] pb-[100px] pt-[70px] lg:pb-[110px] lg:pt-[70px]">
        <div className="mx-auto max-w-[1550px]">
          <SectionHeading className="text-[32px] leading-[40px] lg:text-[40px] lg:leading-[50.2px]">
            You Might Also Like
          </SectionHeading>

          <div className="mt-[30px] grid grid-cols-1 gap-x-[50px] gap-y-[50px] md:grid-cols-3">
            {RELATED.map((article) => (
              <article key={article.title} className="min-w-0">
                <Link
                  href={article.categoryHref}
                  className="inline-flex bg-[#686868] px-[10px] py-[5px] text-[16px] font-bold uppercase leading-[19px] text-white no-underline"
                >
                  {article.category}
                </Link>

                <Link
                  href={article.href}
                  className="mt-[30px] block no-underline"
                >
                  <span className="text-[25px] font-semibold leading-[32px] text-[#5a4400]">
                    {article.title}
                    <ChevronRight className="ml-[2px]" />
                  </span>
                </Link>

                <p className="m-0 mt-[30px] text-[16px] font-bold uppercase leading-[20px] text-[#686868]">
                  {article.date}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          NEWSLETTER
      ========================================================= */}
      <section className="w-full bg-[#4f832a] px-[4.05%] py-[60px] text-white">
        <div className="mx-auto flex max-w-[1550px] flex-col items-center text-center">
          <h2 className="m-0 font-[800] text-[32px] leading-[40px] text-white lg:text-[40px] lg:leading-[50.2px]">
            Sign up for our Today&apos;s Harvest Blog.
          </h2>

          <p className="m-0 mt-[16px] text-[16px] leading-[26px] text-white lg:text-[18px] lg:leading-[28.8px]">
            Get the latest blog articles delivered to your inbox.
          </p>

          <form className="mt-[30px] flex w-full max-w-[520px] flex-col gap-[12px] sm:flex-row">
            <input
              type="email"
              required
              placeholder="email@address.com"
              aria-label="Email address"
              className="min-w-0 flex-1 rounded-[2px] border-0 bg-white px-[16px] py-[12px] text-[18px] leading-[26px] text-[#231f20] outline-none"
            />

            <button
              type="submit"
              className="rounded-[4px] border-2 border-white bg-[#4f832a] px-[18px] py-[10px] text-[16px] font-bold leading-[20px] text-white transition-colors hover:bg-white hover:text-[#496d83]"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
import Link from "next/link";

export const metadata = {
  title: "Farm & Forestry Equipment Loans | Farm Funding",
  description:
    "We offer fast, simple and flexible financing on all types of farm and forestry equipment for Northeast agriculture.",
};

const CONTACT_URL = "/contact";
const OFFICE_LOCATOR_URL = "/office-locator";
const AGDIRECT_URL = "https://www.agdirect.com/";
const AGDIRECT_TOOLS_URL = "https://www.agdirect.com/resources/tools";

const IMAGES = {
  hero: "/images/financing/equipment financing/Equipment Financing_FarmCredit.jpg",
  financialOptions:
    "/images/financing/equipment financing/financial-options.png",
  flexiblePayment:
    "/images/financing/equipment financing/Flexible Payment Options.png",
  prepay: "/images/financing/equipment financing/pre-pay.png",
  communication: "/images/financing/equipment financing/Communication.png",
  document: "/images/financing/equipment financing/Document.png",
  apply: "/images/financing/equipment financing/Apply.png",
};

function ChevronRight() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className="ml-1 inline-block"
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

function ExternalArrow() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      aria-hidden="true"
      className="ml-1 inline-block"
    >
      <path
        d="M3 10L10 3M10 3H4.5M10 3V8.5"
        stroke="currentColor"
        strokeWidth="1.4"
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
      className="inline-flex h-[51px] items-center justify-center rounded-[4px] border-2 border-[#496d83] bg-[#496d83] px-[19px] text-[16px] font-bold leading-[20px] text-white transition-colors hover:bg-white hover:text-[#496d83]"
    >
      Contact My Office
    </Link>
  );
}

const WHAT_WE_FINANCE = [
  "Farm equipment",
  "Vehicles for over-the-road or on-farm use",
  "Forestry equipment",
  "Commercial fishing boats",
  "Maple equipment",
  "Equipment used for production, processing and marketing",
];

const EXPERTISE = [
  {
    title: "Our equipment expertise means less hassle.",
    body: (
      <>
        Financing ag is all we do, so we understand the ag equipment you want
        to buy and the value it holds for your business.
      </>
    ),
  },
  {
    title: "Get the financing flexibility you need.",
    body: (
      <>
        Farm Funding and AgDirect deliver ag-friendly financing with flexible
        rates to purchase, lease or refinance equipment.
      </>
    ),
  },
  {
    title: "Easy applications and quick credit decisions.",
    body: (
      <>
        Our loan applications are simple, and most credit decisions come back
        within seconds. Apply at any{" "}
        <Link href={OFFICE_LOCATOR_URL} className="underline">
          Farm Funding location
        </Link>{" "}
        or online at{" "}
        <Link
          href={AGDIRECT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-[#496d83]"
        >
          AgDirect.com
          <ExternalArrow />
        </Link>
      </>
    ),
  },
];

const RATES_TERMS = [
  {
    image: IMAGES.financialOptions,
    width: 64,
    height: 64,
    alt: "Financial options icon",
    title: "Options to fit your financial needs.",
    body: (
      <>
        You can purchase or lease new and used equipment or refinance what you
        already have.
      </>
    ),
  },
  {
    image: IMAGES.flexiblePayment,
    width: 53,
    height: 61,
    alt: "Flexible payment icon",
    title: "Flexible rate choices.",
    body: (
      <>
        Choose from variable or fixed rates with financing terms from 3 to 7
        years on most equipment. <em>(Subject to approval.)</em>
      </>
    ),
  },
  {
    image: IMAGES.prepay,
    width: 64,
    height: 64,
    alt: "Prepayment icon",
    title: "Prepay with confidence.",
    body: (
      <>
        Had a good year? Enjoy no prepayment penalties on any of our equipment
        loans. <em>(Subject to approval.)</em>
      </>
    ),
  },
];

const STEPS = [
  {
    image: IMAGES.communication,
    width: 64,
    height: 64,
    alt: "Communication icon",
    title: "Contact us",
    body: (
      <>
        Ready to purchase ag equipment?{" "}
        <Link href={CONTACT_URL} className="underline">
          Contact your local Farm Funding office
        </Link>{" "}
        or visit{" "}
        <Link
          href={AGDIRECT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-[#496d83]"
        >
          AgDirect.com
          <ExternalArrow />
        </Link>
      </>
    ),
  },
  {
    image: IMAGES.document,
    width: 51,
    height: 64,
    alt: "Document icon",
    title: "Gather your financial documents.",
    body: (
      <>
        Our equipment specialists will answer any questions and help get
        everything lined up to make applying quick and easy.
      </>
    ),
  },
  {
    image: IMAGES.apply,
    width: 64,
    height: 64,
    alt: "Application icon",
    title: "Complete your application.",
    body: (
      <>
        Fill out the application. We’ll review it to ensure your success and
        get you on your way to advancing your business.
      </>
    ),
  },
];

const RELATED = [
  {
    category: "Tax Talks",
    categoryHref: "/resources/todays-harvest-Blog?category=tax-talk",
    title:
      "Capital Construction Fund: A Fisherman’s Guide to Building for the Future",
    href:
      "/resources/todays-harvest-Blog/260526CapitalConstructionFundFishermansGuide.html",
    date: "May 26, 2026",
  },
  {
    category: "Press Releases",
    categoryHref: "/about/NewsRoom-1.html?category=press-releases",
    title: "Farm Funders Reports Strong 2025 Financial Results",
    href:
      "/about/NewsRoom/press-releases/260323-FarmCreditEastReportsStrong2025FinancialResults.html",
    date: "March 23, 2026",
  },
  {
    category: "Business Tips and Tools",
    categoryHref:
      "/about/NewsRoom/financial-partner-magazine?category=business-tips-and-tools",
    title:
      "Spring 2025 Financial Partner: Proactive Strategies for Business Success",
    href: "/about/NewsRoom/financial-partner-magazine/2025-Spring.html",
    date: "March 24, 2025",
  },
];

export default function EquipmentFinancingPage() {
  return (
    <>
      {/* HERO */}
      <section className="w-full bg-[#f8f8f8]">
        <div className="mx-auto grid w-full grid-cols-1 items-center gap-0 px-[4.05%] py-[36px] md:grid-cols-2">
          <div className="min-w-0 pr-0 md:pr-[45px]">
            <h1
              id="maincontent"
              className="m-0 text-[36px] font-bold leading-[43px] text-[#4f832a] lg:text-[48px] lg:leading-[58px]"
            >
              Equipment Financing
            </h1>

            <p className="m-0 mt-[30px] max-w-[760px] text-[16px] leading-[26px] text-[#231f20] lg:text-[20px] lg:leading-[32px]">
              Farm Funders can meet all of your ag equipment financing needs.
              Apply for a line of credit at your{" "}
              <Link href={OFFICE_LOCATOR_URL} className="text-[#496d83] underline">
                local office
              </Link>
              , or choose AgDirect financing at your dealer, at auction or for
              private party transactions.
            </p>

            <div className="mt-[30px]">
              <ContactButton />
            </div>
          </div>

          <div className="mt-[30px] min-w-0 md:mt-0">
            <img
              src={IMAGES.hero}
              alt="Farmer in tractor plowing his field"
              width={738}
              height={409}
              className="block h-[409px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="w-full bg-[#ecf1e4] px-[4.05%] py-[90px] lg:py-[100px]">
        <h2 className="m-0 max-w-[1500px] text-[32px] font-bold leading-[40px] text-[#4f832a] lg:text-[40px] lg:leading-[50px]">
          Farm Funders provides the expertise you want and the flexibility you
          need
        </h2>

        <p className="m-0 mt-[30px] max-w-[1000px] text-[16px] leading-[26px] text-[#231f20]">
          Equipment financing is available through a Farm Funders line of
          credit, an intermediate loan, or AgDirect, which is powered by Farm
          Credit. AgDirect is one of the leading farm equipment financing
          brands in the U.S., so you can expect competitive rates, ag-friendly
          terms and knowledgeable service.
        </p>

        <div className="mt-[30px] grid grid-cols-1 gap-x-[50px] gap-y-[30px] md:grid-cols-3">
          {EXPERTISE.map((item) => (
            <div key={item.title}>
              <h3 className="m-0 text-[20px] font-bold leading-[25px] text-[#231f20]">
                {item.title}
              </h3>

              <p className="m-0 mt-[16px] text-[16px] leading-[26px] text-[#231f20]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE FINANCE */}
      <section className="w-full bg-white px-[4.05%] py-[70px] lg:py-[80px]">
        <h2 className="m-0 text-[32px] font-bold leading-[38px] text-[#4f832a] lg:text-[40px] lg:leading-[50px]">
          What We Finance
        </h2>

        <p className="m-0 mt-[30px] max-w-[850px] text-[16px] leading-[26px] text-[#231f20]">
          No matter what kind of ag equipment you want to buy, Farm Funders
          can finance it.
        </p>

        <ul className="mt-[20px] max-w-[850px] list-disc space-y-[7px] pl-[22px] text-[16px] leading-[26px] text-[#231f20]">
          {WHAT_WE_FINANCE.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* RATES & TERMS */}
      <section className="w-full bg-[#ecf1e4] px-[4.05%] py-[70px] lg:py-[80px]">
        <h2 className="m-0 text-[32px] font-bold leading-[38px] text-[#4f832a] lg:text-[40px] lg:leading-[50px]">
          Equipment Financing Rates &amp; Terms
        </h2>

        <div className="mt-[30px] grid grid-cols-1 gap-x-[50px] gap-y-[40px] md:grid-cols-3">
          {RATES_TERMS.map((item) => (
            <div key={item.title}>
              <div className="flex h-[64px] items-start">
                <img
                  src={item.image}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className="block max-h-[64px] w-auto object-contain"
                />
              </div>

              <h3 className="m-0 mt-[30px] text-[20px] font-bold leading-[25px] text-[#231f20]">
                {item.title}
              </h3>

              <p className="m-0 mt-[16px] text-[16px] leading-[26px] text-[#231f20]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="w-full bg-[#2f4a1f] px-[4.05%] py-[70px] text-center text-white lg:py-[80px]">
        <div className="mx-auto max-w-[800px]">
          <h2 className="m-0 text-[28px] font-bold leading-[34px] text-white lg:text-[34px] lg:leading-[42px]">
            How much will the equipment cost?
          </h2>

          <p className="m-0 mt-[16px] text-[16px] leading-[26px] text-white lg:text-[18px] lg:leading-[28px]">
            Check out AgDirect&apos;s interactive calculator to determine your
            payments and financing needs.
          </p>

          <div className="mt-[30px]">
            <Link
              href={AGDIRECT_TOOLS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[51px] items-center justify-center rounded-[4px] border-2 border-white bg-transparent px-[22px] text-[16px] font-bold text-white transition-colors hover:bg-white hover:text-[#2f4a1f]"
            >
              Calculate Payments
              <ExternalArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW TO START */}
      <section className="w-full bg-white px-[4.05%] py-[70px] lg:py-[80px]">
        <h2 className="m-0 max-w-[900px] text-[32px] font-bold leading-[38px] text-[#4f832a] lg:text-[40px] lg:leading-[50px]">
          How to Start Your Equipment Financing Loan
        </h2>

        <div className="mt-[30px] grid grid-cols-1 gap-x-[50px] gap-y-[40px] md:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.title}>
              <div className="flex h-[64px] items-start">
                <img
                  src={step.image}
                  alt={step.alt}
                  width={step.width}
                  height={step.height}
                  className="block max-h-[64px] w-auto object-contain"
                />
              </div>

              <h3 className="m-0 mt-[30px] text-[20px] font-bold leading-[25px] text-[#231f20]">
                {step.title}
              </h3>

              <p className="m-0 mt-[16px] text-[16px] leading-[26px] text-[#231f20]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* RELATED */}
      <section className="w-full bg-[#ecf1e4] px-[4.05%] pb-[100px] pt-[60px] lg:pt-[70px]">
        <h2 className="m-0 text-[32px] font-bold leading-[38px] text-[#4f832a] lg:text-[40px] lg:leading-[50px]">
          You Might Also Like
        </h2>

        <div className="mt-[38px] grid grid-cols-1 gap-x-[50px] gap-y-[60px] md:grid-cols-3">
          {RELATED.map((article) => (
            <div key={article.title}>
              <Link
                href={article.categoryHref}
                className="inline-block bg-[#686868] px-[10px] py-[5px] text-[16px] font-bold uppercase leading-[19px] text-white no-underline"
              >
                {article.category}
              </Link>

              <Link
                href={article.href}
                className="mt-[8px] block max-w-[500px] text-[25px] font-bold leading-[32px] text-[#5a4400] no-underline"
              >
                {article.title}
                <ChevronRight />
              </Link>

              <p className="m-0 mt-[52px] text-[16px] font-bold uppercase leading-[20px] text-[#686868]">
                {article.date}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="w-full bg-[#4f832a] px-[4.05%] py-[70px] text-white lg:py-[80px]">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center text-center">
          <h2 className="m-0 text-[32px] font-bold leading-[40px] text-white lg:text-[40px] lg:leading-[50px]">
            Sign up for our Today&apos;s Harvest Blog.
          </h2>

          <p className="m-0 mt-[38px] text-[16px] leading-[26px] text-white lg:text-[18px] lg:leading-[28px]">
            Get the latest blog articles delivered to your inbox.
          </p>

          <form className="mt-[30px] flex w-full max-w-[560px] flex-col gap-[10px] sm:flex-row">
            <input
              type="email"
              required
              placeholder="email@address.com"
              aria-label="Email address"
              className="h-[51px] min-w-0 flex-1 rounded-[2px] border-0 bg-white px-[16px] text-[16px] text-[#231f20] outline-none"
            />

            <button
              type="submit"
              className="h-[51px] rounded-[4px] border-2 border-white bg-[#4f832a] px-[22px] text-[16px] font-bold text-white transition-colors hover:bg-white hover:text-[#496d83]"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
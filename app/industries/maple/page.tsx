import Link from "next/link";

export const metadata = {
  title: "Maple Business Loans & Services | Farm Funding",
  description:
    "We deliver the products and expertise to finance the needs of your maple business.",
};

const CONTACT_URL = "/contact";

const OFFERINGS = [
  {
    title: "Operating Loans",
    href: "/financing/operating-loans",
    body:
      "Cover all your operating expenses, such as tapping supplies, fuel and canning supplies, with a customized maple operating loan.",
  },
  {
    title: "Equipment Financing",
    href: "/financing/equipment-financing",
    body:
      "From trucks and tractors to reverse osmosis machines and evaporators, we offer attractive loan and lease options for all types of maple equipment.",
  },
  {
    title: "Land Loans",
    href: "/financing/land-loans",
    body:
      "Finance farmland and sugarbushes with long-term fixed rates and payment structures that align with your cash flow.",
  },
  {
    title: "Facility Loans",
    href: "/financing/facility-loans",
    body:
      "We finance sugarhouses, warehouses, retail facilities and more with flexible terms to meet your needs.",
  },
  {
    title: "Tax Planning and Prep",
    href: "/services/tax-planning-and-prep",
    body:
      "Our experts can help you navigate tax law around family business structures, prepaid farm expenses, equipment depreciation and more to get every deduction possible.",
  },
  {
    title: "Recordkeeping",
    href: "/services/recordkeeping",
    body:
      "At Farm Funding, we provide comprehensive financial record-keeping services from accounting professionals trained in ag- and maple-related rules and regulations.",
  },
  {
    title: "Business Consulting",
    href: "/services/business-consulting",
    body:
      "Our agriculture consultants can help you get the best return on your business. We develop unique working relationships with each client based on your business objectives and how you like to work on any specific aspect of business management.",
  },
  {
    title: "Estate Planning",
    href: "/services/estate-planning",
    body:
      "By working with a Farm Credit consultant, your family can build a plan that will provide peace of mind around your maple operation. No matter what happens, you can be assured that your loved ones will be taken care of.",
  },
];

const FEATURED = [
  {
    image: "/images/industries/maple/maple syrup_4.jpg",
    imageAlt: "",
    title: "2026 Maple Industry Outlook",
    subtitle:
      "Mark Cannella, Associate Professor at the University of Vermont Extension, highlights the key trends shaping today’s U.S. maple industry. Steady production, shifting demand, and ongoing economic pressures are influencing producer decisions. As the market evolves, flexibility and smart planning will be essential for long-term success.",
    linkText: "Read now",
    href: "/resources/Industry-Trends-and-Outlooks/Reports/2601KEP_MapleIndustryOutlook.html",
  },
  {
    image: "/images/industries/maple/maple syrup.jpg",
    imageAlt:
      "Bottles of maple syrup line a rack in a small syrup production facility",
    title: "Webinar: 2026 Maple Industry Outlook",
    subtitle:
      "Farm Funding and Horizon Farm Credit recently hosted Mark Cannella of the University of Vermont for a webinar looking at the Maple syrup and sugar industry in 2026.",
    linkText: "Watch the webinar",
    href: "/resources/Events-and-Webinars/Webinars/2026-Maple-Industry-Outlook.html",
  },
];

const RELATED = [
  {
    category: "Ag Economy",
    categoryHref:
      "/about/NewsRoom/financial-partner-magazine?category=ag-economy",
    title: "Spring 2026 Financial Partner",
    href: "/about/NewsRoom/financial-partner-magazine/2026-Spring.html",
    date: "March 24, 2026",
  },
  {
    category: "Ag Economy",
    categoryHref: "/resources/todays-harvest-Blog?category=ag-economy",
    title: "Maple Industry Outlook: Key Trends Shaping 2026",
    href: "/resources/todays-harvest-Blog/260210MapleIndustryKeyTrends.html",
    date: "February 10, 2026",
  },
  {
    category: "Business Tips and Tools",
    categoryHref:
      "/resources/Events-and-Webinars-1.html?category=business-tips-and-tools",
    title: "2026 Maple Industry Outlook Webinar",
    href: "/resources/Events-and-Webinars/Webinars/2026-Maple-Industry-Outlook.html",
    date: "January 20, 2026",
  },
];

function ChevronRight() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
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
      className="
        inline-flex h-[51px] w-[206px] items-center justify-center
        rounded-[4px] border-2 border-[#496d83] bg-[#496d83]
        px-[19px] py-[10px]
        text-[16px] font-bold leading-[20px] text-white
        transition-colors hover:bg-white hover:text-[#496d83]
      "
    >
      Contact My Office
    </Link>
  );
}

export default function MaplePage() {
  return (
    <div className="text-[#231f20]">
      <section className="w-full bg-[#f8f8f8]">
        <div
          className="
            mx-auto grid w-full max-w-none grid-cols-1
            px-[4.05%] pb-[31px] pt-[34px]
            md:grid-cols-2
          "
        >
          <div className="min-w-0 self-center pr-[20px] lg:pr-[30px]">
            <h1
              className="
                m-0 text-[36px] font-bold leading-[43.2px] text-[#4f832a]
                lg:text-[48px] lg:leading-[57.6px]
              "
            >
              Maple Producers
            </h1>

            <p
              className="
                m-0 mt-[30px] max-w-[690px]
                text-[16px] leading-[26px] text-[#231f20]
                lg:text-[20px] lg:leading-[32px]
              "
            >
              We deliver the products and expertise to finance the needs of
              your maple business.
            </p>

            <div className="mt-[30px]">
              <ContactButton />
            </div>
          </div>

          <div className="min-w-0">
            <img
              src="/images/industries/maple/Maple_AdobeStock_242223490.jpg"
              alt="Close-up of man’s hands fixing a maple runner tube"
              className="
                block h-auto w-full object-cover
                lg:aspect-[738/409]
              "
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-[#e8ebef]">
        <div
          className="
            mx-auto grid w-full grid-cols-1
            px-[4.05%] py-[30px]
            md:grid-cols-2
          "
        >
          {FEATURED.map((item, i) => (
            <article
              key={item.title}
              className={`
                min-w-0
                ${
                  i === 0
                    ? "border-b border-white pb-[30px] md:border-b-0 md:border-r md:pr-[30px]"
                    : "pt-[30px] md:pl-[30px] md:pt-0"
                }
              `}
            >
              <div className="grid grid-cols-[171px_minmax(0,1fr)] items-start gap-x-[42px]">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  width={171}
                  height={114}
                  className="block h-[114px] w-[171px] object-cover"
                />

                <div className="min-w-0">
                  <h3
                    className="
                      m-0 text-[20px] font-semibold leading-[25px]
                      text-[#231f20]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      m-0 mt-[16px] text-[16px] leading-[26px]
                      text-[#231f20]
                    "
                  >
                    {item.subtitle}
                  </p>

                  {/* GOLD/BROWN CONTENT LINK */}
                  <Link
                    href={item.href}
                    className="
                      mt-[18px] inline-flex items-center gap-[4px]
                      text-[14px] font-bold leading-[18px]
                      text-[#5A4400] no-underline
                    "
                  >
                    {item.linkText}
                    <ChevronRight />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="
          w-full bg-[#ecf1e4]
          px-[4.05%] pb-[60px] pt-[60px]
          lg:pb-[90px] lg:pt-[70px]
        "
      >
        <h2
          className="
            m-0 text-[32px] font-bold leading-[38px] text-[#4f832a]
            lg:text-[40px] lg:leading-[50.2px]
          "
        >
          Financing &amp; Services We Offer Maple Producers
        </h2>

        <div className="mt-[30px] grid grid-cols-1 gap-x-[50px] gap-y-[30px] md:grid-cols-3">
          {OFFERINGS.map((item) => (
            <div key={item.title} className="min-w-0">
              {/* GOLD/BROWN CONTENT LINK */}
              <Link
                href={item.href}
                className="
                  inline-flex items-center gap-[4px]
                  text-[20px] font-bold leading-[25px]
                  text-[#5A4400] no-underline
                "
              >
                {item.title}
                <ChevronRight />
              </Link>

              <p className="m-0 mt-[30px] text-[16px] leading-[26px] text-[#231f20]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="
          w-full bg-white
          px-[4.05%] pb-[60px] pt-[60px]
          lg:pb-[90px] lg:pt-[70px]
        "
      >
        <h2
          className="
            m-0 text-[32px] font-bold leading-[38px] text-[#4f832a]
            lg:text-[40px] lg:leading-[50.2px]
          "
        >
          Incentives We Offer for Veterans and Beginning Maple Producers.
        </h2>

        <div className="mt-[30px] text-[16px] leading-[26px] text-[#231f20] lg:text-[18px] lg:leading-[28.8px]">
          <p className="m-0">
            We have a number of programs to support talented, hardworking
            individuals entering the maple industry. Helping young producers
            get started is one of our long-term commitments to Northeast
            agriculture. Programs include our{" "}
            <Link
              href="/FINANCING/Beginning Farmer Programs/Young-Beginning-Small-Veteran-Farmers.html"
              className="text-[#496d83] underline"
            >
              young, beginning, small and veteran farmer incentives,
            </Link>{" "}
            <Link
              href="/FINANCING/Beginning Farmer Programs/FarmStart.html"
              className="text-[#496d83] underline"
            >
              FarmStart
            </Link>{" "}
            and{" "}
            <Link
              href="/FINANCING/Beginning Farmer Programs/GenerationNext"
              className="text-[#496d83] underline"
            >
              GenerationNext
            </Link>
            .
          </p>
        </div>
      </section>

      <section
        className="
          w-full bg-[#ecf1e4]
          px-[4.05%] pb-[70px] pt-[60px]
          lg:pb-[100px] lg:pt-[70px]
        "
      >
        <h2
          className="
            m-0 text-[32px] font-bold leading-[38px] text-[#4f832a]
            lg:text-[40px] lg:leading-[50.2px]
          "
        >
          You Might Also Like
        </h2>

        <div className="mt-[30px] grid grid-cols-1 gap-x-[50px] md:grid-cols-3">
          {RELATED.map((article) => (
            <div key={article.title} className="pt-[30px]">
              <Link
                href={article.categoryHref}
                className="
                  inline-block bg-[#686868]
                  px-[10px] py-[5px]
                  text-[16px] font-bold uppercase leading-[19px]
                  text-white no-underline
                "
              >
                {article.category}
              </Link>

              <div className="mt-[30px]">
                {/* GOLD/BROWN ARTICLE TITLE */}
                <Link href={article.href} className="block no-underline">
                  <span className="text-[25px] font-semibold leading-[32px] text-[#5A4400]">
                    {article.title} <ChevronRight />
                  </span>
                </Link>
              </div>

              <p className="m-0 mt-[30px] text-[16px] font-bold uppercase leading-[20px] text-[#686868]">
                {article.date}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
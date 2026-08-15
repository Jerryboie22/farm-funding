import Link from "next/link";

export const metadata = {
  title: "Farm Operating Loans & Lines of Credit | Farm Funding",
  description:
    "We offer competitive fixed- and variable-rate operating loans and lines of credit for your farming, livestock or agribusiness needs.",
};

const RATE_TERMS = [
  {
    title: "Fixed rates",
    body: "We offer a nonrevolving line of credit with payment plans designed around your cash flow expectations.",
    image: "/images/financing/operating loans/fixed-rates.png",
    alt: "Padlock icon with percentage symbol inside",
  },
  {
    title: "Variable rates",
    body: "Choose from a revolving or nonrevolving line of credit. Your rate will be based on either the market index or Farm Credit East-administered indexes.",
    image: "/images/financing/operating loans/variable-rates.png",
    alt: "Opened padlock icon with percentage symbol inside",
  },
  {
    title: "Flexible payment options",
    body: "We also offer flexible payment options to fit your cash flow needs. Interest-only loans with monthly statements and an annual principal give you more marketing flexibility. You can even choose the date you want to make payments.",
    image: "/images/financing/operating loans/flexible payment options.png",
    alt: "Stopwatch with percentage icon",
  },
  {
    title: "Rate conversions",
    body: "Our conversion feature offers flexibility; if your financial needs change, you can convert your variable-rate loan to a fixed-rate loan. Fees may apply.",
    image: "/images/financing/operating loans/rate conversions.png",
    alt: "Revolving circle with percentage icon",
  },
];

const START_STEPS = [
  {
    title: "Contact your local office.",
    body: (
      <>
        Ready to apply for an operating loan?{" "}
        <a href="/contact" className="underline hover:no-underline">
          Contact your local Farm Funding office
        </a>
        .
      </>
    ),
    image: "/images/financing/operating loans/communication.png",
    alt: "Two speech bubbles overlapping icon",
  },
  {
    title: "Gather your financial documents.",
    body: "Our relationship managers will answer any questions and help get everything lined up to make applying quick and easy.",
    image: "/images/financing/operating loans/document.png",
    alt: "Piece of paper icon",
  },
  {
    title: "Complete your application.",
    body: "Fill out the application we provide. We’ll review it to ensure your success and get you on your way to advancing your business.",
    image: "/images/financing/operating loans/apply.png",
    alt: "Pencil in checkbox icon",
  },
];

const RELATED = [
  {
    tag: "AG ECONOMY",
    title:
      "New Report Examines Dairy Price Support Policies Across the Northeast",
    date: "AUGUST 5, 2026",
    href: "#",
  },
  {
    tag: "AG ECONOMY",
    title:
      "A Review of Dairy Price Support Programs in Massachusetts, Maine and Connecticut",
    date: "JULY 27, 2026",
    href: "#",
  },
  {
    tag: "AG ECONOMY",
    title: "2025 Northeast Dairy Farm Summary & Mid-Year Outlook",
    date: "JULY 10, 2026",
    href: "#",
  },
];

export default function OperatingLoansPage() {
  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center px-[4%] gap-8 md:gap-12 lg:gap-16 min-h-[500px] md:min-h-[520px]">

          {/* Hero Content */}
          <div className="flex flex-col justify-center py-12 md:py-16">

            <h1 className="font-display text-[42px] md:text-[52px] font-bold text-forest leading-[1.12] tracking-[-0.5px]">
              Operating Loans
            </h1>

            <p className="mt-6 max-w-[620px] text-[16px] md:text-[17px] text-charcoal font-normal leading-[1.65]">
              We offer fixed- and variable-rate operating loans and lines for
              credit for your farming, livestock and business needs.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center w-fit min-w-[205px] h-[51px] px-6 bg-clay text-white text-[15px] font-bold rounded-sm hover:bg-clay-light transition-colors"
            >
              Contact My Office
            </Link>

          </div>

          {/* Hero Image */}
          <div className="flex items-center justify-center py-8 md:py-0">

            <img
              src="/images/financing/operating-loans_springplanting.jpg"
              alt="Farmer walking in field"
              className="block w-full h-[360px] md:h-[420px] lg:h-[440px] object-cover object-center"
            />

          </div>
        </div>
      </section>


      {/* =========================================================
          OPERATING LOANS INTRODUCTION
      ========================================================= */}

      <section className="w-full bg-cream px-[4%] pt-[72px] pb-[78px] md:pt-[92px] md:pb-[90px]">

        {/* Main Statement */}
        <h2 className="font-display text-[30px] md:text-[40px] font-bold text-forest leading-[1.2] tracking-[-0.3px] max-w-[1450px]">
          Farm Funding operating loans deliver competitive rates, terms
          and unsurpassed flexibility to meet your business needs.
        </h2>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 lg:gap-x-[62px] gap-y-12 mt-[50px]">

          {/* Column 1 */}
          <div>
            <h3 className="font-display text-[20px] md:text-[21px] font-bold text-charcoal leading-[1.45]">
              We provide local service for the life of the loan.
            </h3>

            <p className="mt-7 text-[16px] font-normal text-charcoal leading-[1.65]">
              We&apos;ll stay with you through the life of your loan. We
              don&apos;t sell your mortgage to a lender you don&apos;t know or
              trust.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-display text-[20px] md:text-[21px] font-bold text-charcoal leading-[1.45]">
              Our ag expertise means less hassle.
            </h3>

            <p className="mt-7 text-[16px] font-normal text-charcoal leading-[1.65]">
              It pays to do business with a lender that understands your
              business. Look to us for the expertise you need to make
              financing easy.
            </p>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-display text-[20px] md:text-[21px] font-bold text-charcoal leading-[1.45]">
              Patronage dividends can add up to significant savings.
            </h3>

            <p className="mt-7 text-[16px] font-normal text-charcoal leading-[1.65]">
              Our operating loans are eligible for{" "}
              <Link
                href="/about/patronage-dividends"
                className="underline hover:no-underline"
              >
                patronage
              </Link>{" "}
              – a portion of our net earnings returned to members. It&apos;s a
              benefit you&apos;ll find nowhere else. Ask us for details!
            </p>
          </div>

        </div>
      </section>


      {/* =========================================================
          WHAT WE FINANCE
      ========================================================= */}

      <section className="w-full bg-white px-[4%] py-[70px] md:py-[82px]">

        <h2 className="font-display text-[30px] md:text-[40px] font-bold text-forest leading-[1.2]">
          What We Finance
        </h2>

        <ul className="mt-7 pl-6 space-y-3 text-[16px] md:text-[17px] text-charcoal leading-[1.7] list-disc max-w-6xl">

          <li>
            If you have a short-term – less than a year – financing need,
            check out a Farm Funding operating loan.
          </li>

          <li>
            Seasonal operating expenses, such as feed, fertilizer or other
            expenses used over the general course of business.
          </li>

          <li>
            Operating expenses for ongoing costs, such as operating inputs,
            producing, processing and marketing.
          </li>

        </ul>
      </section>


      {/* =========================================================
          OPERATING LOAN RATES & TERMS
      ========================================================= */}

      <section className="w-full bg-cream px-[4%] py-[70px] md:py-[82px]">

        <h2 className="font-display text-[30px] md:text-[40px] font-bold text-forest leading-[1.2]">
          Operating Loan Rates &amp; Terms
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mt-11">

          {RATE_TERMS.map((item) => (
            <div key={item.title}>

              <div className="h-[65px] flex items-center">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="block max-w-full w-auto h-[60px] object-contain object-left"
                />
              </div>

              <h3 className="mt-7 font-display text-[20px] font-bold text-charcoal leading-[1.35]">
                {item.title}
              </h3>

              <p className="mt-5 text-[16px] text-charcoal leading-[1.65]">
                {item.body}
              </p>

            </div>
          ))}

        </div>
      </section>


      {/* =========================================================
          CALCULATOR CTA
      ========================================================= */}

      <section className="w-full bg-forest-dark text-white text-center py-[72px] md:py-[86px] px-[4%]">

        <h2 className="font-display text-[30px] md:text-[40px] font-bold text-white leading-[1.2]">
          How much can I afford for an operating loan?
        </h2>

        <p className="mt-5 text-[16px] md:text-[17px] text-white/85 leading-[1.6]">
          Check out our interactive calculator to determine your payments and
          financing needs.
        </p>

        <div className="mt-8 flex justify-center">

          <Link
            href="/resources/calculators"
            className="inline-flex px-7 py-3.5 border-2 border-white text-white text-[15px] font-bold rounded-sm hover:bg-white hover:text-forest-dark transition-colors"
          >
            Calculate Payments
          </Link>

        </div>
      </section>


      {/* =========================================================
          HOW TO START YOUR OPERATING LOAN
      ========================================================= */}

      <section className="w-full bg-white px-[4%] py-[70px] md:py-[82px]">

        <h2 className="font-display text-[30px] md:text-[40px] font-bold text-forest leading-[1.2]">
          How to Start Your Operating Loan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12 mt-11">

          {START_STEPS.map((step) => (
            <div key={step.title}>

              <div className="h-[65px] flex items-center">
                <img
                  src={step.image}
                  alt={step.alt}
                  className="block max-w-full w-auto h-[60px] object-contain object-left"
                />
              </div>

              <h3 className="mt-7 font-display text-[20px] font-bold text-charcoal leading-[1.35]">
                {step.title}
              </h3>

              <div className="mt-5 text-[16px] text-charcoal leading-[1.65]">
                {step.body}
              </div>

            </div>
          ))}

        </div>
      </section>


      {/* =========================================================
          YOU MIGHT ALSO LIKE
      ========================================================= */}

      <section className="w-full px-[4%] py-[70px] md:py-[82px] bg-cream">

        <h2 className="font-display text-[30px] md:text-[40px] font-bold text-forest leading-[1.2]">
          You Might Also Like
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">

          {RELATED.map((article) => (
            <div key={article.title}>

              <span className="inline-block bg-charcoal/60 text-white text-[11px] font-bold uppercase tracking-wide px-3 py-1.5">
                {article.tag}
              </span>

              <h3 className="mt-6 font-display text-[18px] font-bold text-gold leading-[1.4]">

                <Link
                  href={article.href}
                  className="hover:text-forest transition-colors"
                >
                  {article.title} ›
                </Link>

              </h3>

              <p className="mt-6 text-xs text-charcoal/60 font-bold uppercase">
                {article.date}
              </p>

            </div>
          ))}

        </div>
      </section>


      {/* =========================================================
          NEWSLETTER
      ========================================================= */}

      <section className="w-full bg-forest-dark text-white py-[72px] md:py-[86px] px-[4%]">

        <div className="flex flex-col items-center text-center">

          <h2 className="font-display text-[30px] md:text-[40px] font-bold text-white leading-[1.2]">
            Sign up for our Today&apos;s Harvest Blog.
          </h2>

          <p className="mt-4 text-[16px] text-white/85">
            Get the latest blog articles delivered to your inbox.
          </p>

          <form className="mt-8 flex flex-col sm:flex-row gap-3 w-full max-w-md">

            <input
              type="email"
              required
              placeholder="email@address.com"
              className="flex-1 px-4 py-3.5 border border-line rounded-sm bg-white text-charcoal text-sm focus:outline-none"
            />

            <button
              type="submit"
              className="px-7 py-3.5 bg-clay text-white text-sm font-bold rounded-sm hover:bg-clay-light transition-colors"
            >
              Sign Up
            </button>

          </form>

        </div>
      </section>
    </>
  );
}
import Link from "next/link";

export const metadata = {
  title: "Land Loans | Farm Funding",
  description:
    "We finance farmland, timberland, bare land, rural home lots and land improvements.",
};

const LOAN_FEATURES = [
  {
    title: "Competitive fixed rates you can lock in for life of the land loan",
    body: "We offer a variety of rate options, including longer-term fixed rates that are set for the life of the loan - no refinancing or changes needed!",
  },
  {
    title: "Our ag expertise means less hassle.",
    body: "We work exclusively in agriculture, which means rural features, such as out-buildings, crops and timber, are not stumbling blocks or issues.",
  },
  {
    title: "Patronage dividends can add up to significant savings.",
    body: (
      <>
        Most of our land loans are eligible for{" "}
        <Link
          href="/about/patronage-dividends"
          className="text-clay hover:text-forest underline"
        >
          patronage
        </Link>{" "}
        - a portion of our net earnings returned to members. It&apos;s a benefit
        you&apos;ll find nowhere else.
      </>
    ),
  },
];

const LAND_TYPES = ["Farmland", "Timberland", "Bare land"];

const RATE_TERMS = [
  {
    image: "/images/financing/Land loans/Competitive Rates.png",
    alt: "Starburst with percentage icon",
    title: "Competitive rates",
    body: "Farm Funding offers fixed, variable or a combination of both.",
  },
  {
    image: "/images/financing/Land loans/Flexible Terms.png",
    alt: "Paper with percentage icon",
    title: "Flexible terms",
    body: "We tailor our loan and repayment plans to provide a variety of interest rate programs depending on the loan's purpose, repayment terms and the flexibility you need.",
  },
  {
    image: "/images/financing/Land loans/Flexible Payment Options.png",
    alt: "Stopwatch with percentage icon",
    title: "Flexible payment options",
    body: "Select monthly, quarterly or semiannual payment schedules; fully or partially amortized loans; and decreasing, even or accelerated payment schedules.",
  },
  {
    image: "/images/financing/Land loans/Rate Conversions.png",
    alt: "Revolving circle with percentage icon",
    title: "Rate conversions",
    body: "If your financial needs change, you can convert your variable-rate loan to a fixed-rate loan. Fees may apply.",
  },
];

const START_STEPS = [
  {
    image: "/images/financing/Land loans/Communication.png",
    alt: "Two speech bubbles overlapping icon",
    title: "Contact your local office.",
    body: (
      <>
        Ready to purchase land or a rural home?{" "}
        <Link
          href="/contact"
          className="text-clay hover:text-forest underline"
        >
          Contact your local Farm Funding office
        </Link>
        .
      </>
    ),
  },
  {
    image: "/images/financing/Land loans/Document.png",
    alt: "Piece of paper icon",
    title: "Gather your financial documents.",
    body: "Our relationship managers will answer any questions and help get everything lined up to make applying quick and easy.",
  },
  {
    image: "/images/financing/Land loans/Apply.png",
    alt: "Pencil in checkbox icon",
    title: "Complete your application.",
    body: "Fill out the application we provide. Once it's filled out, we'll review it to ensure your success and get you on your way to advancing your business.",
  },
];

const RELATED = [
  {
    tag: "Business Tips and Tools",
    title:
      "Farm Funding offers more than just farm financing with Country Living Loans",
    date: "April 15, 2025",
    href: "/resources/todays-harvest-Blog/250415CountryLivingLoansOffersMoreThanFarmFinancing",
  },
  {
    tag: "Business Tips and Tools",
    title: "5 Steps to Building Your Rural Home",
    date: "October 2, 2024",
    href: "/resources/todays-harvest-Blog/241002_5StepsToBuildingYourRuralHome",
  },
  {
    tag: "Business Tips and Tools",
    title:
      "Emergency Assistance for New York Homeowners Impacted by Hurricane Debby",
    date: "August 20, 2024",
    href: "/resources/todays-harvest-Blog/240820EmergencyAssistanceNYHomeownersHurricaneDebby",
  },
];

export default function LandLoansPage() {
  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}
      {/* HERO */}
<section className="w-full bg-cream mt-8">
  <div className="grid grid-cols-1 md:grid-cols-12 px-[4%]">
    
    {/* Hero Text */}
    <div className="md:col-span-6 flex flex-col justify-center py-10 md:py-12 lg:py-14 md:pr-12 lg:pr-16">
      <h1 className="font-display text-4xl md:text-[52px] font-extrabold text-forest leading-tight">
        Land Loans
      </h1>

      <p className="mt-5 max-w-2xl text-base text-charcoal/80 leading-relaxed">
        Nobody finances land like Farm Funding. Along with our
        competitive rates and terms, we offer an expertise that makes
        the process easier, faster and with less trouble.
      </p>

      <Link
        href="/contact"
        className="mt-7 inline-flex w-fit px-6 py-3.5 bg-clay text-white text-sm font-bold rounded-sm hover:bg-clay-dark transition-colors"
      >
        Contact My Office
      </Link>
    </div>

    {/* Hero Image */}
    <div className="md:col-span-6">
      <img
        src="/images/financing/Land loans/Land Loans_AdobeStock_286009390.jpg"
        alt="New England pastureland with timber in background"
        className="block w-full h-[300px] md:h-[360px] lg:h-[400px] object-cover"
      />
    </div>

  </div>
</section>

      {/* =========================================================
          WHY FARM FUNDING
      ========================================================= */}
      <section className="w-full px-[4%] py-12 md:py-16 lg:py-20">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-forest max-w-5xl">
          Nobody delivers land loan financing like Farm Funding
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-10 mt-8">
          {LOAN_FEATURES.map((feature) => (
            <div key={feature.title}>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-charcoal leading-snug">
                {feature.title}
              </h3>

              <div className="mt-6 text-base text-charcoal/80 leading-relaxed">
                {feature.body}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          LAND WE FINANCE
      ========================================================= */}
      <section className="w-full px-[4%] py-12 md:py-16 bg-white">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-forest">
          Land We Finance
        </h2>

        <div className="mt-7 max-w-4xl">
          <p className="text-base text-charcoal/80 leading-relaxed">
            We finance every kind of rural land for production, plus lots,
            acreages and rural homes.
          </p>

          <ul className="mt-5 list-disc pl-6 space-y-2 text-base text-charcoal/80 leading-relaxed">
            {LAND_TYPES.map((land) => (
              <li key={land}>{land}</li>
            ))}

            <li>
              <Link
                href="/financing/rural-home-loans"
                className="text-clay hover:text-forest underline"
              >
                Rural home lots
              </Link>
            </li>

            <li>
              Land improvements (including environmental compliance and waste
              management)
            </li>
          </ul>
        </div>
      </section>

      {/* =========================================================
          LAND LOAN RATES & TERMS
      ========================================================= */}
      <section className="w-full bg-grey-bg px-[4%] py-12 md:py-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-forest">
          Land Loan Rates &amp; Terms
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mt-8">
          {RATE_TERMS.map((item) => (
            <div key={item.title}>
              <div className="w-full h-[80px] flex items-center">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-auto h-auto max-w-full max-h-[80px] object-contain"
                />
              </div>

              <h3 className="mt-7 font-display text-xl md:text-2xl font-semibold text-charcoal leading-snug">
                {item.title}
              </h3>

              <p className="mt-6 text-base text-charcoal/80 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          CALCULATOR
      ========================================================= */}
      <section className="w-full bg-forest-dark text-white text-center py-14 md:py-16 px-[4%]">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
          How much will the land cost?
        </h2>

        <p className="mt-5 text-base text-white/85">
          Check out our interactive calculator to determine your payments and
          financing needs.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/resources/calculators"
            className="inline-flex px-7 py-3.5 border-2 border-white text-white text-sm font-bold rounded-sm hover:bg-white hover:text-forest-dark transition-colors"
          >
            Calculate Payments
          </Link>
        </div>
      </section>

      {/* =========================================================
          HOW TO START
      ========================================================= */}
      <section className="w-full px-[4%] py-12 md:py-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-forest">
          How to Start Your Land Loan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-10 mt-8">
          {START_STEPS.map((step) => (
            <div key={step.title}>
              <div className="w-full h-[80px] flex items-center">
                <img
                  src={step.image}
                  alt={step.alt}
                  className="w-auto h-auto max-w-full max-h-[80px] object-contain"
                />
              </div>

              <h3 className="mt-7 font-display text-xl md:text-2xl font-semibold text-charcoal leading-snug">
                {step.title}
              </h3>

              <div className="mt-6 text-base text-charcoal/80 leading-relaxed">
                {step.body}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          YOU MIGHT ALSO LIKE
      ========================================================= */}
      <section className="w-full px-[4%] py-12 md:py-16 bg-cream">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-forest">
          You Might Also Like
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
          {RELATED.map((article) => (
            <div key={article.title}>
              <Link
                href="/resources/todays-harvest-Blog?category=business-tips-and-tools"
                className="inline-block text-grey-text text-xs font-bold uppercase tracking-wide hover:text-clay transition-colors"
              >
                {article.tag}
              </Link>

              <h3 className="mt-7 font-display text-lg md:text-xl font-bold text-gold leading-snug">
                <Link
                  href={article.href}
                  className="hover:text-forest transition-colors"
                >
                  {article.title} <span aria-hidden="true">›</span>
                </Link>
              </h3>

              <p className="mt-7 text-xs text-grey-text font-bold uppercase">
                {article.date}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          TODAY'S HARVEST NEWSLETTER
          This was missing from your Land Loans page.
      ========================================================= */}
      <section className="w-full bg-forest-dark text-white py-16 md:py-20 px-[4%]">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight">
            Sign up for our Today&apos;s Harvest Blog.
          </h2>

          <p className="mt-6 text-base md:text-lg text-white/90">
            Get the latest blog articles delivered to your inbox.
          </p>

          <form className="mt-8 w-full max-w-[520px]">
            <div className="flex flex-col items-start">
              <label
                htmlFor="harvest-email"
                className="text-base font-bold text-white mb-3"
              >
                Enter your email*
              </label>

              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <input
                  id="harvest-email"
                  type="email"
                  required
                  placeholder="email@address.com"
                  className="w-full sm:flex-1 h-[44px] px-4 bg-white text-charcoal border border-white rounded-sm text-sm focus:outline-none"
                />

                <button
                  type="submit"
                  className="h-[44px] px-7 border-2 border-white bg-transparent text-white text-sm font-bold rounded-sm hover:bg-white hover:text-forest-dark transition-colors"
                >
                  Sign Up
                </button>
              </div>

              <p className="mt-2 text-xs italic font-semibold text-white">
                *Required Field
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
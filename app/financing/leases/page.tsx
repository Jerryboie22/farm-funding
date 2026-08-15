import Link from "next/link";

export const metadata = {
  title: "Leases | Farm Funding",
};

const LEASE_BENEFITS = [
  {
    title: "Attractive fixed rates",
    body: "Leasing offers attractive fixed rates, which in most cases are tax deductible.",
    image: "/images/financing/leases/fixed-rates.png",
    alt: "Padlock icon with percentage symbol inside",
  },
  {
    title: "Convenient options",
    body: "Conserve your cash with low or no down payment, up to 100% financing and no stock purchase.",
    image: "/images/financing/leases/convenient-features.png",
    alt: "Thumbs up icon",
  },
  {
    title: "Flexible terms",
    body: "Flexible lease structures, payment schedules, end-of-lease options and maturity dates let you tailor the lease to your needs.",
    image: "/images/financing/leases/Flexible Terms.png",
    alt: "Paper with percentage icon",
  },
];

const RELATED = [
  {
    tag: "AG ECONOMY",
    title: "2025 Northeast Dairy Farm Summary & Mid-Year Outlook",
    date: "JULY 10, 2026",
    href: "#",
  },
  {
    tag: "CROP INSURANCE",
    title:
      "USDA Risk Management Agency Announces Emergency Claim Procedures for New York Apple Growers Following Spring Freeze",
    date: "JULY 8, 2026",
    href: "#",
  },
  {
    tag: "PUBLIC POLICY",
    title:
      "2026 Farm Bill Takes Shape: Comparing the House and Senate Proposals",
    date: "JULY 7, 2026",
    href: "#",
  },
];

export default function LeasesPage() {
  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 px-[4%] py-9 md:min-h-[475px] md:py-9">
          <div className="md:col-span-6 flex flex-col justify-center md:pr-10 lg:pr-14">
            <h1 className="font-display text-4xl md:text-[50px] lg:text-[52px] font-extrabold leading-[1.08] text-forest">
              Leases
            </h1>

            <p className="mt-7 max-w-[690px] text-[18px] md:text-[19px] leading-[1.65] text-charcoal">
              Leasing is a great financing option for saving costs, improving
              cash flow, managing taxes and gaining added control over your
              balance sheet.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex w-fit items-center justify-center rounded-sm bg-clay px-6 py-3.5 text-[16px] font-bold text-white transition-colors hover:bg-clay-light"
            >
              Contact My Office
            </Link>
          </div>

          <div className="md:col-span-6 flex items-center justify-center">
            <img
              src="/images/financing/Leases_Solar.jpg"
              alt="Solar panels that were leased to ag producers"
              className="w-full max-w-[770px] aspect-[770/410] object-cover"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          LEASE ALMOST ANYTHING
      ========================================================= */}
      <section className="w-full bg-cream px-[4%] py-[58px] md:py-[72px]">
        <h2 className="max-w-[1390px] font-display text-3xl md:text-[42px] lg:text-[45px] font-bold leading-[1.16] text-forest">
          Lease almost anything you need for your agricultural, forest products
          or commercial fishing business.
        </h2>

        <div className="mt-11 grid grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-x-12 lg:gap-x-16">
          <div>
            <h3 className="font-display text-[22px] md:text-[23px] font-bold leading-[1.28] text-charcoal">
              Our equipment expertise means less hassle.
            </h3>

            <p className="mt-7 text-[16px] leading-[1.65] text-charcoal">
              Farm Funders offers a variety of leasing options that may benefit
              you financially, such as reduced payments that improve your cash
              flow. There may be tax advantages, too. We&apos;ll show you the
              options and opportunities leasing offers compared to other
              financing options.
            </p>
          </div>

          <div>
            <h3 className="font-display text-[22px] md:text-[23px] font-bold leading-[1.28] text-charcoal">
              Work with any manufacturer.
            </h3>

            <p className="mt-7 text-[16px] leading-[1.65] text-charcoal">
              Have a preferred partner? Negotiate the best price from the
              manufacturer of your choice and we will step in to provide the
              financing.
            </p>
          </div>

          <div>
            <h3 className="font-display text-[22px] md:text-[23px] font-bold leading-[1.28] text-charcoal">
              We provide local service for the life of the lease.
            </h3>

            <p className="mt-7 text-[16px] leading-[1.65] text-charcoal">
              The leases we offer are the leases we own. Should you have any
              questions or needs, you can talk to people you know and trust.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHEN MAY A LEASE BE RIGHT FOR YOU?
      ========================================================= */}
      <section className="w-full bg-white px-[4%] py-[62px] md:py-[80px]">
        <h2 className="font-display text-3xl md:text-[42px] lg:text-[45px] font-bold leading-[1.16] text-forest">
          When may a lease be right for you?
        </h2>

        <ul className="mt-10 list-disc space-y-2.5 pl-7 text-[16px] leading-[1.55] text-charcoal md:text-[17px]">
          <li>
            If you are adding a new building that will result in lost capital.
          </li>

          <li>
            If you are investing in production equipment (i.e., greenhouse or
            winery equipment).
          </li>

          <li>
            If you want to capture the tax advantages of a lease. Tax
            deductions may be available when you lease that can save you money
            and improve your bottom line.
          </li>

          <li>
            If you want to preserve your capital for other investments. In most
            cases, there is no down payment requirement for a lease, and leasing
            allows you to maintain your line of credit availability for other
            investments.
          </li>
        </ul>
      </section>

      {/* =========================================================
          LEASE RATES & TERMS
      ========================================================= */}
      <section className="w-full bg-cream px-[4%] py-[62px] md:py-[76px]">
        <h2 className="font-display text-3xl md:text-[42px] lg:text-[45px] font-bold leading-[1.16] text-forest">
          Lease Rates &amp; Terms
        </h2>

        <div className="mt-11 grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-12 lg:gap-x-16">
          {LEASE_BENEFITS.map((benefit) => (
            <div key={benefit.title}>
              <div className="flex h-[58px] items-center">
                <img
                  src={benefit.image}
                  alt={benefit.alt}
                  className="h-[52px] w-auto object-contain"
                />
              </div>

              <h3 className="mt-7 font-display text-[22px] md:text-[23px] font-bold leading-[1.28] text-charcoal">
                {benefit.title}
              </h3>

              <p className="mt-7 text-[16px] leading-[1.65] text-charcoal">
                {benefit.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          CALCULATOR
      ========================================================= */}
      <section className="w-full bg-forest-dark px-[4%] py-[82px] text-center text-white md:py-[96px]">
        <h2 className="font-display text-3xl md:text-[42px] lg:text-[45px] font-bold leading-[1.16] text-white">
          How much will the lease cost?
        </h2>

        <p className="mt-8 text-[17px] font-semibold leading-relaxed text-white md:text-[18px]">
          Check out our interactive calculator to determine your payments and
          financing needs.
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            href="/resources/calculators"
            className="inline-flex items-center justify-center rounded-sm border-2 border-white px-6 py-3.5 text-[16px] font-bold text-white transition-colors hover:bg-white hover:text-forest-dark"
          >
            Calculate Payments
          </Link>
        </div>
      </section>

      {/* =========================================================
          READY TO START A LEASE
      ========================================================= */}
      <section className="w-full bg-white px-[4%] py-[62px] md:py-[78px]">
        <h2 className="font-display text-3xl md:text-[42px] lg:text-[45px] font-bold leading-[1.16] text-forest">
          Ready to start a lease?
        </h2>

        <div className="mt-11 flex flex-col gap-y-10">
          <div>
            <h3 className="font-display text-[22px] md:text-[23px] font-bold leading-[1.28] text-charcoal">
              Select your item.
            </h3>

            <p className="mt-3 text-[16px] leading-[1.65] text-charcoal">
              Have your item picked out and ready to finance.
            </p>
          </div>

          <div>
            <h3 className="font-display text-[22px] md:text-[23px] font-bold leading-[1.28] text-charcoal">
              Contact your local Farm Funders office.
            </h3>

            <p className="mt-3 text-[16px] leading-[1.65] text-charcoal">
              We&apos;ll handle the financing from there.
            </p>
          </div>

          <div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-clay px-6 py-3.5 text-[16px] font-bold text-white transition-colors hover:bg-clay-light"
            >
              Contact My Office
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          YOU MIGHT ALSO LIKE
      ========================================================= */}
      <section className="w-full bg-cream px-[4%] py-[58px] md:py-[76px]">
        <h2 className="font-display text-3xl md:text-[42px] lg:text-[45px] font-bold leading-[1.16] text-forest">
          You Might Also Like
        </h2>

        <div className="mt-11 grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-10 lg:gap-x-16">
          {RELATED.map((article) => (
            <Link
              key={article.title}
              href={article.href}
              className="group block"
            >
              <span className="inline-block bg-charcoal/65 px-3 py-1.5 text-[12px] font-bold uppercase tracking-wide text-white">
                {article.tag}
              </span>

              <h3 className="mt-7 font-display text-[22px] md:text-[23px] font-bold leading-[1.3] text-gold transition-colors group-hover:text-forest">
                {article.title}›
              </h3>

              <p className="mt-8 text-[12px] font-bold uppercase tracking-wide text-charcoal/65">
                {article.date}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================
          NEWSLETTER
      ========================================================= */}
      <section className="w-full bg-forest-dark px-[4%] py-[64px] text-white md:py-[76px]">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display text-3xl md:text-[40px] font-bold leading-tight text-white">
            Sign up for our Today&apos;s Harvest Blog.
          </h2>

          <p className="mt-5 text-[16px] text-white/85">
            Get the latest blog articles delivered to your inbox.
          </p>

          <form className="mt-8 flex w-full max-w-[520px] flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="email@address.com"
              aria-label="Email address"
              className="min-w-0 flex-1 rounded-sm border border-line bg-white px-4 py-3.5 text-sm text-charcoal outline-none"
            />

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-sm bg-clay px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-clay-light"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
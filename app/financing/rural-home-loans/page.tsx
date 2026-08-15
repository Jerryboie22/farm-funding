import Link from "next/link";

export const metadata = {
  title: "Rural Home Loans | Farm Funding",
};

const EXTERNAL_LOAN_URL = "https://www.countrylivingloans.com";

const START_STEPS = [
  {
    title: "Familiarize yourself with the process.",
    body: (
      <>
        Ready to purchase a home? Learn the steps involved in getting a
        mortgage by reviewing our{" "}
        <Link
          href="/resources/loan-process-overview"
          className="text-clay-light underline underline-offset-2 hover:text-clay"
        >
          step-by-step overview
        </Link>
        .
      </>
    ),
    icon: "/images/financing/rural-home-loans/process.png",
    iconAlt: "Clipboard icon with list of tasks",
    iconWidth: 64,
    iconHeight: 64,
  },
  {
    title: "Gather your financial documents.",
    body: (
      <>
        Use our{" "}
        <Link
          href="/resources/loan-application-checklist"
          className="text-clay-light underline underline-offset-2 hover:text-clay"
        >
          comprehensive checklist
        </Link>{" "}
        to find out what&apos;s needed to complete an application and keep you
        organized throughout the process.
      </>
    ),
    icon: "/images/financing/rural-home-loans/Document.png",
    iconAlt: "Piece of paper icon",
    iconWidth: 51,
    iconHeight: 64,
  },
  {
    title: "Contact your local office.",
    body: (
      <>
        Reach out to your{" "}
        <Link
          href="/office-locator"
          className="text-clay-light underline underline-offset-2 hover:text-clay"
        >
          local Country Living Loans office
        </Link>
        . Our mortgage specialists will answer any questions to get you on
        your way to country living.
      </>
    ),
    icon: "/images/financing/rural-home-loans/Communication.png",
    iconAlt: "Two speech bubbles overlapping icon",
    iconWidth: 64,
    iconHeight: 64,
  },
];

const RELATED = [
  {
    tag: "Business Tips and Tools",
    title:
      "Farm Funding offers more than just farm financing with Country Living Loans",
    date: "April 15, 2025",
    href: "#",
  },
  {
    tag: "Business Tips and Tools",
    title: "8 Common Questions About Real Estate Title Insurance",
    date: "December 3, 2024",
    href: "#",
  },
  {
    tag: "Business Tips and Tools",
    title: "5 Steps to Building Your Rural Home",
    date: "October 2, 2024",
    href: "#",
  },
];

function ExternalLoanLink() {
  return (
    <Link
      href={EXTERNAL_LOAN_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-fit items-center gap-2 rounded-sm bg-clay px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-clay-light"
    >
      Visit CountryLivingLoans.com

      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 10l6-6M5 4h5v5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

export default function RuralHomeLoansPage() {
  return (
    <>
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="w-full bg-cream">
        <div className="grid grid-cols-1 gap-x-10 gap-y-4 px-[4%] pb-5 pt-5 md:grid-cols-12 md:pb-7 md:pt-7 lg:gap-x-16">
          <div className="flex flex-col justify-center md:col-span-6">
            <h1 className="font-display text-4xl font-extrabold leading-tight text-forest md:text-[52px]">
              Rural Home Loans
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/80">
              If you&apos;re thinking about buying a home in the country,
              choose a lender who is already there.
            </p>

            <div className="mt-8">
              <ExternalLoanLink />
            </div>
          </div>

          <div className="md:col-span-6">
            <img
              src="/images/financing/rural-home-loans/Rural%20Home%20Loans.jpg"
              alt="White country home with American flag"
              className="h-[260px] w-full object-cover md:h-[350px]"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURE INTRO
      ========================================================== */}
      <section className="w-full bg-white px-[4%] py-12 md:py-16">
        <h2 className="max-w-5xl font-display text-3xl font-bold leading-tight text-forest md:text-4xl">
          Our Country Living loans deliver the competitive terms you want
          and the expertise you need.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-3">
          <div>
            <h3 className="font-display text-lg font-bold leading-snug text-charcoal">
              Our rural expertise means less hassle.
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-charcoal/75">
              Country homes and urban homes are distinctly different when it
              comes to their financing needs. We can make the process easy.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold leading-snug text-charcoal">
              We finance unique country properties with long-term fixed rates.
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-charcoal/75">
              Longer-term fixed rates deliver consistency for your home
              financing needs.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold leading-snug text-charcoal">
              We provide local service for the life of the loan.
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-charcoal/75">
              We&apos;ll stay with you through the life of your loan. We
              don&apos;t sell your mortgage to a lender you don&apos;t know or
              trust.
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <ExternalLoanLink />
        </div>
      </section>

      {/* =========================================================
          WHAT WE FINANCE
      ========================================================== */}
      <section className="w-full bg-cream px-[4%] py-12 md:py-16">
        <h2 className="font-display text-3xl font-bold text-forest md:text-4xl">
          What We Finance
        </h2>

        <div className="mt-6 max-w-3xl">
          <p className="text-base leading-relaxed text-charcoal/80">
            If you want to live in the country, you&apos;ve come to the right
            place. We offer financing — and refinancing — expertise
            you&apos;ll find nowhere else.
          </p>

          <ul className="mt-6 list-disc space-y-2 pl-5 text-base leading-relaxed text-charcoal/80">
            <li>Country homes</li>
            <li>
              Homes with acreage or additional features like barns, sheds and
              other farm buildings
            </li>
            <li>Rural home lots</li>
            <li>New home construction</li>
            <li>Refinancing of rural properties</li>
          </ul>
        </div>
      </section>

      {/* =========================================================
          CALCULATOR CTA
      ========================================================== */}
      <section className="w-full bg-forest-dark px-[4%] py-16 text-center text-white">
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          How much will the country home or land cost?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85">
          Check out Country Living&apos;s interactive calculator to determine
          your payments and financing needs.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/resources/calculators"
            className="inline-flex items-center gap-2 rounded-sm border-2 border-white px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white hover:text-forest-dark"
          >
            Calculate Payments
          </Link>
        </div>
      </section>

      {/* =========================================================
          HOW TO START
      ========================================================== */}
      <section className="w-full bg-white px-[4%] py-12 md:py-16">
        <h2 className="font-display text-3xl font-bold text-forest md:text-4xl">
          How to Start Your Country Living Loan
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-3">
          {START_STEPS.map((step) => (
            <div key={step.title}>
              <img
                src={step.icon}
                alt={step.iconAlt}
                width={step.iconWidth}
                height={step.iconHeight}
                className="h-16 w-auto object-contain"
              />

              <h3 className="mt-6 font-display text-lg font-bold leading-snug text-charcoal">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-charcoal/75">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          VIEW FROM THE FIELD
      ========================================================== */}
      <section className="w-full bg-cream px-[4%] py-12 md:py-16">
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img
              src="/images/financing/rural-home-loans/Evans_waters_edge2019_barn.jpg"
              alt="James and Artea Evans at Water's Edge Equestrian Center"
              className="h-auto w-full object-cover"
            />

            <div className="bg-forest p-6 text-white">
              <p className="text-sm italic leading-relaxed">
                &ldquo;Our Country Living mortgage specialist treated us like
                people, not applicants. Other lenders never wanted to meet
                face-to-face, but our Country Living representative always
                wanted to meet in person.&rdquo;
              </p>

              <p className="mt-4 text-sm font-bold leading-relaxed">
                James &amp; Artea Evans
                <br />
                Water&apos;s Edge Equestrian Center
                <br />
                Tolland, Connecticut
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl font-bold text-forest md:text-4xl">
              View From the Field
            </h2>

            <p className="mt-3 text-lg font-semibold text-gold">
              &ldquo;Country Living understands the value of rural
              properties.&rdquo;
            </p>

            <h3 className="mt-6 font-display text-lg font-bold text-charcoal">
              How can you find financing for a part-time farm?
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-charcoal/80">
              James and Artea Evans had wanted to purchase a horse farm for
              years. So when a 21.3-acre equestrian facility, complete with a
              50-stall barn and large indoor and outdoor arenas with 30
              paddocks went up for sale, they found themselves in a bind
              looking for financing from traditional lenders.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-charcoal/80">
              &ldquo;We reached out to a local bank and they said they
              wouldn&apos;t touch the property,&rdquo; said Artea. &ldquo;They
              weren&apos;t comfortable with the business.&rdquo; Luckily for
              the Evans, their realtor recommended looking into Farm
              Funding&apos;s Country Living loans.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-charcoal/80">
              &ldquo;Not only was our mortgage specialist great to work with,
              but the Farm Funding appraiser also ensured that the property was
              financed correctly by valuing excess acreage and
              outbuildings,&rdquo; added Artea.
            </p>

            <h3 className="mt-6 font-display text-lg font-bold text-charcoal">
              How we helped
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-charcoal/80">
              Country Living offered a way for James and Artea to finance their
              part-time farm and equestrian facility, which gave them the
              ability to turn their opportunity into a thriving business.
              &ldquo;We&apos;ve created an environment that is inviting to
              boarders,&rdquo; said Artea. &ldquo;We put on several horse
              clinics, as well as host lessons with top-notch trainers.&rdquo;
            </p>

            <p className="mt-3 text-sm leading-relaxed text-charcoal/80">
              James loves the part-time farm aspect of his life because it
              gives him something to do in his spare time. &ldquo;If I&apos;m
              not busy, I go a little crazy. That&apos;s what makes this farm
              perfect,&rdquo; said James. &ldquo;I can come home from work and
              tinker, and I love that.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          YOU MIGHT ALSO LIKE
          Styled to match the reference screenshot
      ========================================================== */}
      <section className="w-full bg-[#edf2e4] px-[4%] py-20 md:py-24">
        <h2 className="font-display text-[42px] font-bold leading-none tracking-[-0.02em] text-[#4b8428] md:text-[46px]">
          You Might Also Like
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-14 md:grid-cols-3">
          {RELATED.map((article) => (
            <article key={article.title}>
              {/* Category badge */}
              <div>
                <span className="inline-flex bg-[#656565] px-3 py-2 text-[15px] font-extrabold uppercase leading-none tracking-[-0.01em] text-white">
                  {article.tag}
                </span>
              </div>

              {/* Article title */}
              <Link
                href={article.href}
                className="group block"
              >
                <h3 className="mt-3 max-w-[430px] font-display text-[27px] font-semibold leading-[1.28] tracking-[-0.01em] text-[#755d08] transition-opacity group-hover:opacity-75">
                  {article.title}
                  <span className="ml-0.5 whitespace-nowrap">›</span>
                </h3>
              </Link>

              {/* Date */}
              <p className="mt-12 text-[15px] font-bold uppercase leading-none tracking-[0.01em] text-[#666666]">
                {article.date}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================================
          NEWSLETTER
      ========================================================== */}
      <section className="w-full bg-forest-dark px-[4%] py-16 text-white">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Sign up for our Today&apos;s Harvest Blog.
          </h2>

          <p className="mt-4 text-base text-white/85">
            Get the latest blog articles delivered to your inbox.
          </p>

          <form className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="email@address.com"
              className="min-w-0 flex-1 rounded-sm border border-line bg-white px-4 py-3.5 text-sm text-charcoal outline-none"
              aria-label="Email address"
            />

            <button
              type="submit"
              className="rounded-sm bg-clay px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-clay-light"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
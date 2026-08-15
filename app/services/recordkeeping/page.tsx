import Link from "next/link";

export const metadata = {
  title: "Financial Recordkeeping | Farm Funding",
  description:
    "We provide comprehensive farm financial recordkeeping services with accounting professionals trained in ag-related rules and regulations.",
};

const CONTACT_URL = "/contact";

const PAYROLL_EMPLOYER_URL =
  "https://login.accountantsoffice.com/login?firmCode=FIRST4380";

const PAYROLL_EMPLOYEE_URL =
  "https://login.accountantsoffice.com/login?firmCode=FIRST4380&returnurl=https://EmployeeCenter.payrollrelief.com/account/login";

const SERVICES = [
  {
    title: "Mail-in Service",
    body: (
      <>
        You provide us with your basic income and expense information (check,
        deposit and payroll data). We will prepare and return management, tax
        and financial reports.
      </>
    ),
  },
  {
    title: "On-farm Accounting",
    body: (
      <>
        The ideal solution if you need an on-site bookkeeper without the
        full-time expense. Our specialists will enter your income and expense
        data, develop custom management and tax reports, and provide a regular
        analysis.
      </>
    ),
  },
  {
    title: "CenterPoint® Accounting Software",
    body: (
      <>
        Farm Funding partners with Red Wing Software to offer{" "}
        <Link
          href="https://www.redwingsoftware.com/home/products/accounting-software"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#496d83] underline underline-offset-2 hover:text-[#3a5a6d]"
        >
          CenterPoint Accounting software
        </Link>{" "}
        for agricultural producers. CenterPoint is payroll and recordkeeping
        software that allows agricultural operations to customize the program
        depending on commodity and needs of the farm operation. Through
        CenterPoint, we can handle complete financial reporting for just about
        every accounting need, including check writing, check reconciliation,
        basic payroll, balance sheets, inventory management, invoices,
        budgeting, and payables and receivables.
      </>
    ),
  },
  {
    title: "Software Support",
    body: (
      <>
        <p>
          Regardless of your software, we can work with you to ensure your
          records are accurate and up to date. Depending on the size and nature
          of your business, we can customize services to meet your requirements.
        </p>

        <p className="mt-6">
          <strong>Does your accounting software need an upgrade?</strong>{" "}
          <Link
            href="/services/recordkeeping/Does-Your-Accounting-Software-Need-an-Upgrade.html"
            className="text-[#496d83] underline underline-offset-2 hover:text-[#3a5a6d]"
          >
            Complete our quick survey
          </Link>{" "}
          <strong>to find out.</strong>
        </p>
      </>
    ),
  },
];

const REPORTS = [
  "Profit and loss statements.",
  "Monthly reports on cash flow, cash summary, payroll, debt status, investments and savings.",
  "Tax planning and cash flow worksheets.",
  "Capital assets.",
  "Selling of assets.",
  "Year-end reports for tax preparation, including W-2 forms.",
];

const FAQS = [
  {
    question: "What are my responsibilities as a customer?",
    answer:
      "If you contract with us for record-keeping services, you’ll be required to pass accurate information and receipts to us on a regular basis. We will then provide professional record-keeping and reporting for your taxes and assist you with business planning.",
  },
  {
    question: "How will record-keeping help me financially?",
    answer:
      "The reports that Farm Funders provides will give you an accurate financial picture of your business and better information for your decision-making. Plus timely, well-prepared records aid effective tax planning, which can help to minimize your tax burden. A better record-keeping system is a major step toward improved profitability.",
  },
  {
    question: "Will you work with my current bookkeeper?",
    answer:
      "We are willing to do on-farm visits to review your financial records with your bookkeeper who may be busy with the day-to-day tasks of paying bills and recording entries. Farm Funders can review the bigger picture and provide additional support.",
  },
  {
    question: "What is the cost?",
    answer:
      "We charge by the number of hours needed and the complexity of your operation. Our records specialist can give you an estimate after discussing your current records and your record-keeping needs with you. Most often, we quote an annual fee for this service. If you are not happy with our service, we have a satisfaction guarantee.",
  },
];

const RELATED = [
  {
    category: "Crop Insurance",
    title:
      "The Importance of Production Records when Insuring your Apple Crop",
    date: "September 15, 2025",
    href: "/resources/todays-harvest-Blog/250915CG_InsuringYourAppleCrop.html",
    categoryHref:
      "/resources/todays-harvest-Blog?category=Crop%20Insurance",
  },
  {
    category: "Business Tips and Tools",
    title:
      "Proactive Strategies for Business Success: Tax planning early and often",
    date: "August 12, 2025",
    href: "/resources/todays-harvest-Blog/250812TaxPlanningEarlyAndOften.html",
    categoryHref:
      "/resources/todays-harvest-Blog?category=business-tips-and-tools",
  },
  {
    category: "Tax Talks",
    title: "Tax Considerations for Crop Insurance Indemnities",
    date: "July 2, 2025",
    href: "/resources/todays-harvest-Blog/250702TaxConsiderationsForCropInsurance.html",
    categoryHref: "/resources/todays-harvest-Blog?category=tax-talk",
  },
];

function ExternalArrow() {
  return (
    <span
      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-sm bg-[#496d83]"
      aria-hidden="true"
    >
      <svg
        width="13"
        height="13"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          d="M4 10L10 4M5 4H10V9"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function Chevron() {
  return (
    <svg
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 1.5L8 8.5L15 1.5"
        stroke="currentColor"
        strokeWidth="1.5"
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
      className="inline-flex w-fit items-center rounded-sm bg-[#496d83] px-6 py-3.5 text-[16px] font-bold text-white transition-colors hover:bg-[#3d5d70]"
    >
      Contact My Office
    </Link>
  );
}

export default function RecordkeepingPage() {
  return (
    <>
      {/* =========================================================
    HERO
========================================================= */}
<section className="w-full bg-white">
  <div className="grid grid-cols-1 px-[4%] pb-8 pt-8 md:grid-cols-12 md:gap-x-10 md:pb-12 md:pt-9 lg:gap-x-16">

    {/* LEFT SIDE */}
    <div className="flex flex-col justify-center md:col-span-6 md:pt-[125px]">

      <h1 className="font-display text-4xl font-extrabold leading-[1.08] text-forest md:text-[48px] lg:text-[52px] whitespace-nowrap">
  Financial Recordkeeping
</h1>

      <div className="mt-7 max-w-[730px] text-[16px] leading-[1.75] text-charcoal">

        <p>
          As an ag business owner, your financial condition and
          profitability depends on solid records, timely reports and
          sound advice. That’s why we provide comprehensive financial
          bookkeeping services with accounting professionals trained in
          ag-related rules and regulations.
        </p>

        <div className="mt-8">
          <strong>Payroll Login:</strong>
        </div>

        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">

          <Link
            href={PAYROLL_EMPLOYER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#496d83] underline underline-offset-2 hover:text-[#3a5a6d]"
          >
            Employers
          </Link>

          <ExternalArrow />

          <span>|</span>

          <Link
            href={PAYROLL_EMPLOYEE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#496d83] underline underline-offset-2 hover:text-[#3a5a6d]"
          >
            Employees
          </Link>

          <ExternalArrow />

        </div>
      </div>

      <div className="mt-8">
        <ContactButton />
      </div>
    </div>


    {/* RIGHT SIDE / HERO IMAGE */}
    <div className="md:col-span-6 md:self-start">

      <img
  src="/images/services/Recordkeeping/Recordkeeping _AdobeStock_14473564 (1).jpg"
  alt="Male farmer on laptop in front of cows"
  width={730}
  height={480}
  className="h-auto max-h-[400px] w-full object-cover"
/>

    </div>

  </div>
</section>

      {/* =========================================================
          INTRODUCTION / THREE COLUMNS
      ========================================================== */}
      <section className="w-full bg-[#edf2e4] px-[4%] py-16 md:py-[72px]">
        <h2 className="max-w-[1200px] font-display text-3xl font-bold leading-[1.25] text-forest md:text-[42px]">
          Your business relies on solid records, timely reports and sound
          advice.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-3">
          <div>
            <h3 className="font-display text-[20px] font-bold leading-[1.3] text-charcoal">
              We offer specialized, tailored services
            </h3>

            <p className="mt-5 text-[16px] leading-[1.65] text-charcoal">
              We will work with you to identify your accounting and
              recordkeeping needs, and then create a plan for your ag business.
              We tailor our services to fit the way you do business.
            </p>
          </div>

          <div>
            <h3 className="font-display text-[20px] font-bold leading-[1.3] text-charcoal">
              We deliver a holistic approach
            </h3>

            <p className="mt-5 text-[16px] leading-[1.65] text-charcoal">
              We look at the compliance-side and management-side of your
              records, which offers insights into your business, including
              industry comparisons and possible profit-saving ideas.
            </p>
          </div>

          <div>
            <h3 className="font-display text-[20px] font-bold leading-[1.3] text-charcoal">
              Flexible options to meet your recordkeeping needs
            </h3>

            <p className="mt-5 text-[16px] leading-[1.65] text-charcoal">
              We offer a variety of services and can be of value even if you
              already have a bookkeeper. We are willing to provide additional
              support through on-farm visits to review your financial records
              with your bookkeeper.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES WE OFFER
      ========================================================== */}
      <section className="w-full bg-white px-[4%] py-16 md:py-[82px]">
        <h2 className="font-display text-4xl font-bold leading-tight text-forest md:text-[42px]">
          Services We Offer
        </h2>

        <div className="mt-12 space-y-7">
          {SERVICES.map((service) => (
            <div key={service.title}>
              <h3 className="font-display text-[27px] font-bold leading-[1.25] text-charcoal">
                {service.title}
              </h3>

              <div className="mt-5 max-w-[1450px] text-[16px] leading-[1.7] text-charcoal">
                {service.body}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          FINANCIAL REPORTS
      ========================================================== */}
      <section className="w-full bg-[#f8f8f8] px-[4%] py-16 md:py-[88px]">
        <h2 className="max-w-[1300px] font-display text-4xl font-bold leading-[1.2] text-forest md:text-[42px]">
          Financial Reports Available Through Farm Funders
        </h2>

        <ul className="mt-9 max-w-[1250px] list-disc space-y-2 pl-5 text-[17px] leading-[1.55] text-charcoal">
          {REPORTS.map((report) => (
            <li key={report}>{report}</li>
          ))}
        </ul>
      </section>

      {/* =========================================================
          GET STARTED
      ========================================================== */}
      <section className="w-full bg-white px-[4%] py-16 md:py-[88px]">
        <h2 className="font-display text-4xl font-bold leading-tight text-forest md:text-[42px]">
          Get Started
        </h2>

        <p className="mt-10 max-w-[1200px] text-[17px] leading-[1.65] text-charcoal">
          Contact your local Farm Funders office to learn more about how we can
          help you with your recordkeeping needs.
        </p>

        <div className="mt-10">
          <ContactButton />
        </div>
      </section>

      {/* =========================================================
          RECORDKEEPING FAQS
      ========================================================== */}
      <section className="w-full bg-[#f8f8f8] px-[4%] py-16 md:py-[88px]">
        <h2 className="font-display text-4xl font-bold leading-tight text-forest md:text-[42px]">
          Recordkeeping FAQs
        </h2>

        <div className="mt-12">
          {FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group border-b border-[#d97900]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-8 px-[21px] py-[20px] font-display text-[18px] font-bold leading-[1.3] text-charcoal marker:hidden md:text-[21px]">
                <span>{faq.question}</span>

                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center text-charcoal transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                >
                  <Chevron />
                </span>
              </summary>

              <div className="px-[21px] pb-7 pr-16 text-[16px] leading-[1.7] text-charcoal">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* =========================================================
          VIEW FROM THE FIELD
      ========================================================== */}
      <section className="w-full bg-white px-[4%] py-16 md:py-[88px]">
        <div className="grid grid-cols-1 gap-x-14 gap-y-12 lg:grid-cols-12 lg:items-start">
          {/* CUSTOMER SPOTLIGHT */}
          <div className="lg:col-span-4">
            <img
              src="/images/SERVICES/Recordkeeping/Customer-Spotlight_Spielman1.jpg"
              alt="Art Spielman of Spielman Farm, LLC in Baltic, Connecticut"
              className="block h-auto w-full object-cover"
            />

            <div className="bg-[#4b8428] px-7 py-7 text-white">
              <p className="text-center text-[18px] font-medium italic leading-[1.6]">
                &ldquo;Switching our records to Farm Funders was easy. They
                know the farm rules and laws necessary for accurate
                accounting.&rdquo;
              </p>

              <p className="mt-6 text-[17px] font-bold leading-[1.7]">
                Art Spielman
                <br />
                Spielman Farm, LLC
                <br />
                Baltic, Connecticut
              </p>
            </div>
          </div>

          {/* STORY */}
          <div className="lg:col-span-7 lg:col-start-6">
            <h2 className="font-display text-4xl font-bold leading-tight text-forest md:text-[42px]">
              View From the Field
            </h2>

            <h3 className="mt-7 font-display text-[24px] font-bold leading-[1.3] text-charcoal">
              A full suite of services
            </h3>

            <p className="mt-3 text-[17px] leading-[1.7] text-charcoal">
              Art Spielman has been working on his family’s dairy farm since he
              was eight years old. Today, Spielman Farm, LLC, in Baltic,
              Connecticut, has 1,200 cows, milking over 600, and also operates a
              custom harvesting business. Art’s parents had been utilizing some
              of Farm Funders’s other services, including credit services and
              consulting, and when Art transitioned into a management role
              several years ago, he decided it would be a good business
              decision to add payroll and financial record-keeping to the list.
            </p>

            <h3 className="mt-7 font-display text-[24px] font-bold leading-[1.3] text-charcoal">
              How we helped
            </h3>

            <p className="mt-3 text-[17px] leading-[1.7] text-charcoal">
              Before transitioning to Farm Funders’s record-keeping service,
              Art’s mother took care of the books. &ldquo;The tax and payroll
              laws started to get too complicated,&rdquo; explained Art. So,
              the Spielmans put their trust in the employees at Farm Funders.
              &ldquo;They stay up to date in agricultural tax and payroll laws
              so that it’s one less thing we have to worry about,&rdquo; said
              Art. Additionally, Art says that maintaining all of their
              accounting services, including payroll and taxes, in one place
              has been a huge benefit. Now, Art and his family have more time
              to focus on the other important aspects of managing their
              business and are equipped with accurate and timely reports to
              help guide their decisions.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          YOU MIGHT ALSO LIKE
      ========================================================== */}
      <section className="w-full bg-[#edf2e4] px-[4%] py-16 md:py-[88px]">
        <h2 className="font-display text-4xl font-bold leading-tight tracking-[-0.02em] text-[#4b8428] md:text-[46px]">
          You Might Also Like
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-14 md:grid-cols-3">
          {RELATED.map((article) => (
            <article key={article.title}>
              <Link
                href={article.categoryHref}
                className="inline-flex bg-[#656565] px-3 py-2 text-[15px] font-extrabold uppercase leading-none tracking-[-0.01em] text-white transition-opacity hover:opacity-80"
              >
                {article.category}
              </Link>

              <Link
                href={article.href}
                className="group block"
              >
                <h3 className="mt-3 max-w-[500px] font-display text-[27px] font-semibold leading-[1.28] tracking-[-0.01em] text-[#755d08] transition-opacity group-hover:opacity-75">
                  {article.title}
                  <span className="ml-0.5 whitespace-nowrap">›</span>
                </h3>
              </Link>

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
              aria-label="Email address"
              className="min-w-0 flex-1 rounded-sm border border-white/20 bg-white px-4 py-3.5 text-sm text-charcoal outline-none"
            />

            <button
              type="submit"
              className="rounded-sm bg-[#496d83] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#3d5d70]"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
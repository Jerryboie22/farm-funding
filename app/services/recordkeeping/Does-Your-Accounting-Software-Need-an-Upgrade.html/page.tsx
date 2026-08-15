import Link from "next/link";

export const metadata = {
  title: "Does Your Accounting Software Need an Upgrade? | Farm Funders",
  description:
    "Find out if your accounting software needs an upgrade and learn how Farm Funders can help improve your financial recordkeeping.",
};

const STATEMENTS = [
  {
    text: "I can’t remember the last time I upgraded my accounting software.",
    explanation:
      "Software continues to be updated and improved, with enhancements such as cloud and mobility, and system compatibility. If you can’t remember the last time you upgraded, it’s probably time. Optimize efficiency by using the latest versions.",
  },
  {
    text: "I have developed separate Excel spreadsheets to support my accounting software.",
    explanation:
      "If you are relying on separate spreadsheets to supplement your accounting software, it may be a sign that your current system is no longer meeting your needs. A more capable accounting system can help bring your financial information together and make recordkeeping easier.",
  },
  {
    text: "The thought of a data breach scares me.",
    explanation:
      "Older software doesn’t have the newest security and malware protection, which may result in a hacker gaining control. Protect your data and your business by keeping your software current.",
  },
  {
    text: "My time is valuable.",
    explanation:
      "Software application upgrades make it easier and more efficient to do business. Sure, there’s a cost for these updates, but there is a higher cost for your time, the time of your staff, and the health of your company in not upgrading.",
  },
  {
    text: "I need my financial advisors to be aware of my business’s health.",
    explanation:
      "The most up-to-date accounting software will keep your whole team — accountant, consultant and loan officer — on the same page which is critical to the well-being of your company.",
  },
];

function GrayMarker() {
  return (
    <span
      className="mr-3 inline-block h-4 w-3 shrink-0 bg-[#808080] align-middle"
      aria-hidden="true"
    />
  );
}

function ContactButton() {
  return (
    <Link
      href="/contact"
      className="inline-flex w-fit items-center rounded-sm bg-[#496d83] px-6 py-3.5 text-[16px] font-bold text-white transition-colors hover:bg-[#3d5d70]"
    >
      Contact My Office
    </Link>
  );
}

export default function AccountingUpgradePage() {
  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="w-full bg-white px-[4%] pb-12 pt-12 md:pb-16 md:pt-16">
        <div className="max-w-[1500px] mx-auto">
          <h1
            className="
              font-display
              text-[38px]
              font-extrabold
              leading-[1.12]
              text-forest
              md:text-[48px]
              lg:text-[52px]
            "
          >
            Does Your Accounting Software Need an Upgrade?
          </h1>
        </div>
      </section>


      {/* =========================================================
          ACCOUNTING SOFTWARE QUESTIONS
      ========================================================= */}

      <section className="w-full bg-white px-[4%] pb-16 md:pb-20">
        <div className="max-w-[1500px] mx-auto">

          <div className="max-w-[1050px]">

            {STATEMENTS.map((statement, index) => (
              <div
                key={statement.text}
                className={index === 0 ? "" : "mt-12"}
              >

                {/* Question */}

                <h2
                  className="
                    font-display
                    text-[22px]
                    md:text-[25px]
                    font-bold
                    leading-[1.35]
                    text-charcoal
                  "
                >
                  {statement.text}
                </h2>


                {/* TRUE */}

                <div
                  className="
                    mt-5
                    flex
                    items-center
                    text-[16px]
                    leading-[1.6]
                    text-charcoal
                  "
                >
                  <GrayMarker />
                  TRUE
                </div>


                {/* FALSE */}

                <div
                  className="
                    mt-2
                    flex
                    items-center
                    text-[16px]
                    leading-[1.6]
                    text-charcoal
                  "
                >
                  <GrayMarker />
                  FALSE
                </div>


                {/* Explanation */}

                {statement.explanation && (
                  <p
                    className="
                      mt-5
                      max-w-[1000px]
                      text-[16px]
                      leading-[1.7]
                      text-charcoal
                    "
                  >
                    {statement.explanation}
                  </p>
                )}

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          FARM FUNDERS CAN HELP
      ========================================================= */}

      <section className="w-full bg-[#f2f1ef] px-[4%] py-16 md:py-20">
        <div className="max-w-[1500px] mx-auto">

          <h2
            className="
              font-display
              text-[32px]
              md:text-[42px]
              font-bold
              leading-[1.2]
              text-forest
            "
          >
            Farm Funding can Help!
          </h2>


          <p
            className="
              mt-6
              max-w-[950px]
              text-[16px]
              md:text-[18px]
              leading-[1.7]
              text-charcoal
            "
          >
            If you answered &ldquo;True&rdquo; to any of the above questions,
            then we recommend it&apos;s time for an upgrade to your accounting
            software. Contact us today to learn more.
          </p>


          <div className="mt-8">
            <ContactButton />
          </div>

        </div>
      </section>


      {/* =========================================================
          NEWSLETTER
      ========================================================= */}

      <section className="w-full bg-forest-dark px-[4%] py-16 text-white md:py-20">
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
              className="
                min-w-0
                flex-1
                rounded-sm
                border
                border-white/20
                bg-white
                px-4
                py-3.5
                text-sm
                text-charcoal
                outline-none
              "
            />

            <button
              type="submit"
              className="
                rounded-sm
                bg-[#496d83]
                px-7
                py-3.5
                text-sm
                font-bold
                text-white
                transition-colors
                hover:bg-[#3d5d70]
              "
            >
              Sign Up
            </button>

          </form>

        </div>
      </section>
    </>
  );
}
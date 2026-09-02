import Link from "next/link";

export const metadata = {
  title: "Office Locator | Farm Funding",
  description:
    "Find your local Farm Funding office and get in touch with our team.",
};

export default function ContactPage() {
  return (
    <>
      {/* =========================================================
          OFFICE LOCATOR
      ========================================================= */}

      <section id="offices" className="w-full bg-cream scroll-mt-24">
        <div className="px-[4%] pt-16 pb-20 md:pt-24 md:pb-24">
          <div className="max-w-[1500px] mx-auto">

            {/* Page Title */}
            <h1
              className="
                font-display
                text-[42px]
                md:text-[52px]
                font-bold
                text-forest
                leading-[1.12]
              "
            >
              Office Locator
            </h1>

            {/* Introduction */}
            <div className="mt-8 max-w-[1050px]">
              <p
                className="
                  text-[16px]
                  md:text-[18px]
                  text-charcoal
                  leading-[1.7]
                "
              >
                Thank you for your interest in Farm Funding. Our chartered
                territory includes Connecticut, Maine, Massachusetts, New
                Hampshire, New Jersey, New York, Rhode Island and Vermont.
              </p>

              <p
                className="
                  mt-5
                  text-[16px]
                  md:text-[18px]
                  text-charcoal
                  leading-[1.7]
                "
              >
                Our business hours are Monday - Friday, 8:00 a.m. to 4:30 p.m.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          OFFICE LOCATION
      ========================================================= */}

      <section className="w-full bg-white">
        <div className="px-[4%] py-16 md:py-20">
          <div className="max-w-[1500px] mx-auto">

            <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">

              {/* Office Details - LEFT */}
              <div className="md:col-span-5 flex flex-col justify-center">

                <h2
                  className="
                    font-display
                    text-[30px]
                    md:text-[40px]
                    font-bold
                    text-forest
                    leading-[1.2]
                  "
                >
                  Our Office Location
                </h2>

                <h3
                  className="
                    mt-8
                    font-display
                    text-[19px]
                    md:text-[22px]
                    font-bold
                    text-black
                    leading-[1.25]
                  "
                >
                  White River Junction
                </h3>

                <div
                  className="
                    mt-7
                    text-[16px]
                    md:text-[18px]
                    text-charcoal
                    leading-[1.8]
                  "
                >
                  <p>
                    52 FarmVu Dr.
                  </p>

                  <p>
                    White River Junction, VT 05001
                  </p>
                </div>

                <div className="mt-7">

                  <p
                    className="
                      text-[16px]
                      md:text-[18px]
                      text-charcoal
                      leading-[1.7]
                    "
                  >
                    <span className="font-bold">
                      Financial Services:
                    </span>{" "}
                    <a
                      href="tel:9175636089"
                      className="hover:underline"
                    >
                      917-563-6089
                    </a>
                  </p>

                  <p
                    className="
                      mt-2
                      text-[16px]
                      md:text-[18px]
                      text-charcoal
                      leading-[1.7]
                    "
                  >
                    <span className="font-bold">
                      Email:
                    </span>{" "}
                    <a
                      href="mailto:info@farm-funding.com"
                      className="hover:underline"
                    >
                      info@farm-funding.com
                    </a>
                  </p>

                </div>

              </div>

              {/* Map - RIGHT */}
              <div className="md:col-span-7">

                <div
                  className="
                    w-full
                    h-[360px]
                    md:h-[450px]
                    overflow-hidden
                    bg-cream
                  "
                >
                  <iframe
                    title="Farm Funding Office Location"
                    src="https://www.google.com/maps?q=52%20FarmVu%20Dr,%20White%20River%20Junction,%20VT%2005001&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          GENERAL QUESTIONS
      ========================================================= */}

      <section
        className="
          w-full
          bg-cream
          px-[4%]
          py-16
          md:py-20
        "
      >
        <div
          className="
            max-w-[1500px]
            mx-auto
            text-center
          "
        >

          <h2
            className="
              font-display
              text-[30px]
              md:text-[40px]
              font-bold
              text-forest
              leading-[1.2]
            "
          >
            Have general questions?
          </h2>

          <p
            className="
              mt-5
              text-[18px]
              md:text-[21px]
              text-charcoal
              leading-[1.6]
            "
          >
            Let&apos;s get in touch!
          </p>

          <div className="mt-8 flex justify-center">

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                justify-center
                min-w-[170px]
                h-[51px]
                px-7
                bg-clay
                text-white
                text-[16px]
                font-bold
                rounded-sm
                hover:bg-clay-light
                transition-colors
              "
            >
              Contact Us
            </Link>

          </div>

        </div>
      </section>
    </>
  );
}
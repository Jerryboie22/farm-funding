import Link from "next/link";

export const metadata = {
  title: "Meet Our Leadership | Farm Funding",
  description:
    "As a financial cooperative, we are owned and governed by our customers. Meet our Board of Directors and senior officers.",
};

export default function LeadershipPage() {
  return (
    <>
      {/* =========================================================
          PAGE HERO / INTRO — full-width dark green band, white text
      ========================================================= */}
      <section className="w-full bg-forest">
        <div className="max-w-[1600px] mx-auto px-[5%] pt-[55px] pb-[55px] md:pt-[70px] md:pb-[65px]">
          <h1 className="font-display text-[38px] md:text-[52px] font-[700] leading-[1.1] text-white">
            Leadership
          </h1>

          <p className="mt-[24px] max-w-[820px] text-[18px] leading-[1.6] text-white/95 md:text-[20px]">
            As a mission-driven financial cooperative, we are owned and
            governed by our customers. In addition, Regional Advisory
            Committees are made up of customers to provide important
            grassroots feedback.
          </p>
        </div>
      </section>

      {/* =========================================================
          BOARD OF DIRECTORS — text+links | image
      ========================================================= */}
      <section className="w-full bg-white">
        <div className="max-w-[1600px] mx-auto px-[5%] py-[55px] md:py-[70px] grid grid-cols-1 md:grid-cols-2 gap-x-[60px] gap-y-[36px] items-center">
          <div>
            <h2 className="font-display text-[32px] md:text-[38px] font-[700] leading-[1.2] text-forest">
              Board of Directors
            </h2>

            <p className="mt-[22px] max-w-[500px] text-[17px] leading-[1.65] text-charcoal">
              As a financial cooperative, we are governed by a Board of
              Directors elected by their peers – people with active roles in
              production agriculture who understand the needs of our
              customers and who work for their success.
            </p>

            <div className="mt-[26px] flex flex-wrap gap-[14px]">
              <Link
                href="/about/leadership/board-of-directors"
                className="inline-flex min-h-[51px] items-center justify-center bg-clay px-[22px] text-[16px] font-[700] text-white hover:bg-clay-dark transition-colors"
              >
                Meet Our Board
              </Link>
              <Link
                href="/about/leadership/board-of-directors/nominating-committee"
                className="inline-flex min-h-[51px] items-center justify-center bg-clay px-[22px] text-[16px] font-[700] text-white hover:bg-clay-dark transition-colors"
              >
                Learn About Board Service
              </Link>
            </div>
          </div>

          <img
            src="/images/about/leadership/2025-board.jpg"
            alt="Farm Funding 2025 Board of Directors"
            className="block w-full h-[460px] md:h-[620px] object-cover"
          />
        </div>
      </section>

      {/* =========================================================
          REGIONAL ADVISORY COMMITTEES — image | text
          (uses the real matching asset already in the project)
      ========================================================= */}
      <section className="w-full bg-white">
        <div className="max-w-[1600px] mx-auto px-[5%] py-[55px] md:py-[70px] grid grid-cols-1 md:grid-cols-2 gap-x-[60px] gap-y-[36px] items-center">
          <img
            src="/images/about/Who-We-Are_SpringPlanting_TheMillers_812_Overview-Card.jpg"
            alt="Smiling Farm Funding customer in front of tractor after a hard day of planting"
            className="block w-full h-[420px] md:h-[580px] object-cover order-2 md:order-1"
          />

          <div className="order-1 md:order-2">
            <h2 className="font-display text-[32px] md:text-[38px] font-[700] leading-[1.2] text-forest">
              Regional Advisory Committees
            </h2>

            <p className="mt-[22px] max-w-[480px] text-[17px] leading-[1.65] text-charcoal">
              Regional Advisory Committees are an important component of
              Farm Funding&apos;s governance and a critical source of
              grassroots feedback.
            </p>

            <Link
              href="/about/leadership/regional-advisory-committees"
              className="mt-[26px] inline-flex min-h-[51px] items-center justify-center bg-clay px-[22px] text-[16px] font-[700] text-white hover:bg-clay-dark transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          SENIOR OFFICERS — text+link | image
      ========================================================= */}
      <section className="w-full bg-white">
        <div className="max-w-[1600px] mx-auto px-[5%] py-[55px] md:py-[70px] grid grid-cols-1 md:grid-cols-2 gap-x-[60px] gap-y-[36px] items-center">
          <div>
            <h2 className="font-display text-[32px] md:text-[38px] font-[700] leading-[1.2] text-forest">
              Senior Officers
            </h2>

            <p className="mt-[22px] max-w-[480px] text-[17px] leading-[1.65] text-charcoal">
              Our executive team and Board of Directors work together to
              ensure Farm Funding remains a strong financial partner for
              Northeast agriculture, commercial fishing and forest products.
            </p>

            <Link
              href="/about/leadership/senior-officers"
              className="mt-[26px] inline-flex min-h-[51px] items-center justify-center bg-clay px-[22px] text-[16px] font-[700] text-white hover:bg-clay-dark transition-colors"
            >
              See Our Senior Officers
            </Link>
          </div>

          <img
            src="/images/about/leadership/2025-executive-team.jpg"
            alt="Farm Funding 2025 Executive Leadership Team"
            className="block w-full h-[420px] md:h-[580px] object-cover"
          />
        </div>
      </section>

      {/* =========================================================
          CODE OF ETHICS — image | text
      ========================================================= */}
      <section className="w-full bg-white">
        <div className="max-w-[1600px] mx-auto px-[5%] py-[55px] md:py-[70px] grid grid-cols-1 md:grid-cols-2 gap-x-[60px] gap-y-[36px] items-center">
          <img
            src="/images/about/leadership/code-of-ethics-family.jpg"
            alt="Three generations of family farmers smiling"
            className="block w-full h-[420px] md:h-[580px] object-cover order-2 md:order-1"
          />

          <div className="order-1 md:order-2">
            <h2 className="font-display text-[32px] md:text-[38px] font-[700] leading-[1.2] text-forest">
              Code of Ethics
            </h2>

            <p className="mt-[22px] max-w-[480px] text-[17px] leading-[1.65] text-charcoal">
              Farm Funding employees and Directors follow the published Code
              of Ethics. This standard is met, in basic terms, by telling
              the truth and being honest.
            </p>

            <Link
              href="/about/leadership/code-of-ethics"
              className="mt-[26px] inline-flex min-h-[51px] items-center justify-center bg-clay px-[22px] text-[16px] font-[700] text-white hover:bg-clay-dark transition-colors"
            >
              View Code of Ethics
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          HAVE ADDITIONAL QUESTIONS? — light cream band,
          heading+button share a row, paragraph sits below
      ========================================================= */}
      <section className="w-full bg-cream">
        <div className="max-w-[1600px] mx-auto px-[5%] py-[50px] md:py-[60px]">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-[24px]">
            <h2 className="font-display text-[32px] md:text-[38px] font-[700] leading-[1.2] text-forest">
              Have Additional Questions?
            </h2>

            <Link
              href="/contact"
              className="inline-flex min-h-[51px] shrink-0 items-center justify-center bg-clay px-[26px] text-[16px] font-[700] text-white hover:bg-clay-dark transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <p className="mt-[18px] text-[17px] leading-[1.6] text-charcoal">
            Let&apos;s get in touch!
          </p>
        </div>
      </section>
    </>
  );
}

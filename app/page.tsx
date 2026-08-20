"use client";

import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import WhyUsCarousel from "@/components/WhyUsCarousel";

const BLOG = [
  {
    tag: "Business Tips and Tools",
    title:
      "A Smarter Safety Net: What the New USDA Payment Rules Mean for Your Farm",
    date: "June 30, 2026",
    href: "/resources/blog",
    body:
      "New USDA payment rules could have an important impact on farm operations. Here’s what producers should know and how proactive planning can help.",
  },
  {
    tag: "Tax Talks",
    title: "Highlights from the Fiscal Year 2026-2027 NYS Budget",
    date: "June 4, 2026",
    href: "/resources/blog",
  },
  {
    tag: "Tax Talks",
    title: "Research & Development Tax Credits for Farms: A Case Study",
    date: "April 22, 2026",
    href: "/resources/blog",
  },
  {
    tag: "Press Releases",
    title: "Farm Funding Reports Strong 2025 Financial Results",
    date: "March 23, 2026",
    href: "/resources/blog",
  },
];

const TRENDS_FEATURE = {
  tag: "Reports",
  title:
    "United States Citizenship and Immigration Service Clears H-2A Path for Dairy Employers",
  date: "July 7, 2026",
  href: "/resources/Industry-Trends-and-Outlooks/Reports/2607KEP_USCISClearsH2APathforDairyEmployers",
};

const TRENDS_LIST = [
  {
    tag: "Reports",
    title: "2025 Northeast Dairy Farm Summary & Mid-Year Outlook",
    date: "July 10, 2026",
    href: "/resources/Industry-Trends-and-Outlooks/Reports/2607_2025NortheastDairyFarmSummaryMidYearOutlook",
  },
  {
    tag: "Reports",
    title:
      "United States Citizenship and Immigration Service Clears H-2A Path for Dairy Employers",
    date: "July 7, 2026",
    href: "/resources/Industry-Trends-and-Outlooks/Reports/2607KEP_USCISClearsH2APathforDairyEmployers",
  },
  {
    tag: "Reports",
    title: "Fuel, Fertilizer and Conflict in the Middle East: What to Know Now",
    date: "June 2, 2026",
    href: "/resources/Industry-Trends-and-Outlooks/Reports/2606KEP_FuelFertilizerandConflictinMiddleEast",
  },
  {
    tag: "Reports",
    title: "Dairy Markets Show Positive Trends",
    date: "May 3, 2026",
    href: "/resources/Industry-Trends-and-Outlooks/Reports/2605_DairyMarketsShowPositiveTrends",
  },
];

// Shared responsive container padding used across every section so the
// whole page lines up with a single consistent left/right margin at every
// breakpoint (24px mobile → 40px tablet → 67px desktop), matching the
// horizontal rhythm on farm-funders.com instead of the old flat 4.05%.
const CONTAINER = "mx-auto max-w-[1786px] px-[24px] sm:px-[40px] lg:px-[67px]";

export default function Home() {
  const [feature, ...rest] = BLOG;

  return (
    <>
      {/* HERO — stacked on mobile (text, then image), side-by-side from md up */}
      <section className="grid w-full grid-cols-1 md:grid-cols-2 md:min-h-[690px]">
        <div className="flex items-center bg-white py-[36px] md:py-[65px] lg:py-[70px]">
          <div className={`${CONTAINER} w-full sm:px-[24px] lg:px-[4.05%]`}>
            <div className="max-w-[700px]">
              <h1
                className="
                  m-0
                  max-w-[750px]
                  font-display
                  text-[28px]
                  font-normal
                  leading-[1.18]
                  text-[#4f832a]
                  xs:text-[32px]
                  sm:text-[36px]
                  md:text-[40px]
                  md:leading-[1.12]
                  lg:text-[50px]
                  lg:leading-[1.12]
                "
              >
                Discover an ag lender that works for you.
              </h1>

              <p
                className="
                  m-0
                  mt-[18px]
                  max-w-[650px]
                  text-[16px]
                  leading-[25px]
                  text-[#231f20]
                  sm:text-[17px]
                  sm:leading-[27px]
                  md:mt-[28px]
                  lg:text-[19px]
                  lg:leading-[31px]
                "
              >
                Farm Funding is made in agriculture - a cooperative owned by the
                customers it serves. More than any other lender, we understand
                your unique credit needs and offer the specialized products,
                tools and services to help grow your success.
              </p>

              <div className="mt-[22px] grid grid-cols-1 gap-[10px] sm:flex sm:flex-wrap sm:gap-[12px] md:mt-[28px]">
                <Link
                  href="/financing"
                  className="
                    inline-flex
                    h-[48px]
                    w-full
                    items-center
                    justify-center
                    rounded-[4px]
                    border-2
                    border-[#496d83]
                    bg-[#496d83]
                    px-[20px]
                    text-[15px]
                    font-bold
                    leading-[20px]
                    text-white
                    transition-colors
                    hover:bg-white
                    hover:text-[#496d83]
                    sm:h-[51px]
                    sm:w-auto
                    sm:text-[16px]
                  "
                >
                  Explore Financing
                </Link>

                <Link
                  href="/services"
                  className="
                    inline-flex
                    h-[48px]
                    w-full
                    items-center
                    justify-center
                    rounded-[4px]
                    border-2
                    border-[#496d83]
                    bg-[#496d83]
                    px-[20px]
                    text-[15px]
                    font-bold
                    leading-[20px]
                    text-white
                    transition-colors
                    hover:bg-white
                    hover:text-[#496d83]
                    sm:h-[51px]
                    sm:w-auto
                    sm:text-[16px]
                  "
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        <HeroCarousel className="relative h-[200px] xs:h-[240px] md:h-[500px] lg:h-[645px]" />
      </section>

      {/* PROMO CARDS — flush under hero, thin white divider between stacked cards on mobile */}
      <section
        className="
          grid
          w-full
          grid-cols-1
          divide-y
          divide-white
          bg-[#e8ebef]
          md:grid-cols-2
          md:divide-x
          md:divide-y-0
        "
      >
        <div className="flex items-start gap-[16px] py-[28px] sm:gap-[22px] md:py-[38px] lg:py-[45px]">
          <div className={`${CONTAINER} flex w-full items-start gap-[16px] sm:gap-[22px] lg:px-[4.05%]`}>
            <img
              src="/images/homepage/2026 AgViews Calendar Cover.jpg"
              alt="2026 AgViews Calendar"
              className="h-[90px] w-[120px] shrink-0 object-cover sm:h-[115px] sm:w-[155px] md:h-[125px] md:w-[170px]"
              loading="lazy"
            />

            <div>
              <h3 className="m-0 font-display text-[18px] font-bold leading-[24px] text-[#231f20] sm:text-[20px] sm:leading-[26px]">
                Calendar Photo Contest
              </h3>

              <p className="m-0 mt-[10px] text-[15px] leading-[23px] text-[#231f20] sm:text-[16px] sm:leading-[25px]">
                Submit your photo(s) of modern agriculture, fishing and forestry
                by July 31 for a chance to win $100!
              </p>

              <Link
                href="/resources/Calendar-Photo-Contest"
                className="mt-[10px] inline-block text-[15px] font-bold text-[#705600] sm:text-[16px]"
              >
                Learn more ›
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-[16px] py-[28px] sm:gap-[22px] md:py-[38px] lg:py-[45px]">
          <div className={`${CONTAINER} flex w-full items-start gap-[16px] sm:gap-[22px] lg:px-[4.05%]`}>
            <img
              src="/images/homepage/Appreciation Sign.png"
              alt="Customer appreciation event"
              className="h-[90px] w-[120px] shrink-0 object-cover sm:h-[115px] sm:w-[155px] md:h-[125px] md:w-[170px]"
              loading="lazy"
            />

            <div>
              <h3 className="m-0 font-display text-[18px] font-bold leading-[24px] text-[#231f20] sm:text-[20px] sm:leading-[26px]">
                2026 Customer Appreciation Events
              </h3>

              <p className="m-0 mt-[10px] text-[15px] leading-[23px] text-[#231f20] sm:text-[16px] sm:leading-[25px]">
                As a cooperative, our customers are at the core of everything we
                do. We hope you&apos;ll join us at an event this summer to show
                our appreciation.
              </p>

              <Link
                href="/resources/events"
                className="mt-[10px] inline-block text-[15px] font-bold text-[#705600] sm:text-[16px]"
              >
                Learn more ›
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST NEWS & BLOG */}
      <section className="w-full bg-[#ecf1e4] py-[48px] lg:py-[75px]">
        <div className={`${CONTAINER} lg:px-[4.05%]`}>
          <h2
            className="
              m-0
              font-display
              text-[26px]
              font-bold
              leading-[32px]
              text-[#4f832a]
              sm:text-[32px]
              sm:leading-[38px]
              lg:text-[40px]
              lg:leading-[50px]
            "
          >
            Latest News &amp; Blog
          </h2>

          <div className="mt-[24px] grid grid-cols-1 gap-[36px] sm:mt-[30px] md:grid-cols-2 md:gap-x-[50px]">
            {/* FEATURED */}
            <Link href={feature.href} className="group flex h-full flex-col">
              <img
                src="/images/homepage/Megan Clancy spotlight.jpg"
                alt="Featured agricultural story"
                className="block h-[220px] w-full shrink-0 object-cover sm:h-[300px] lg:h-[350px]"
                loading="lazy"
              />

              <div className="flex flex-1 flex-col bg-[#4f832a] px-[20px] py-[22px] text-white sm:px-[28px] sm:py-[25px]">
                <span
                  className="
                    mb-[14px]
                    inline-block
                    w-fit
                    rounded-[2px]
                    border
                    border-white/60
                    bg-transparent
                    px-[10px]
                    py-[5px]
                    text-[12px]
                    font-bold
                    uppercase
                    leading-[16px]
                    text-white
                    sm:mb-[16px]
                    sm:text-[13px]
                    sm:leading-[17px]
                  "
                >
                  {feature.tag}
                </span>

                <h3 className="m-0 font-display text-[21px] font-bold leading-[27px] text-white sm:text-[25px] sm:leading-[32px]">
                  {feature.title} <span aria-hidden="true">›</span>
                </h3>

                {feature.body && (
                  <p className="m-0 mt-[14px] text-[15px] leading-[23px] text-white sm:mt-[15px] sm:text-[16px] sm:leading-[25px]">
                    {feature.body}
                  </p>
                )}

                <span className="mt-auto pt-[18px] block text-[12px] font-bold uppercase leading-[18px] text-white/90 sm:text-[13px]">
                  {feature.date}
                </span>
              </div>
            </Link>

            {/* OTHER POSTS */}
            <div className="flex flex-col">
              {rest.map((post, i) => (
                <Link
                  key={i}
                  href={post.href}
                  className="
                    group
                    border-b
                    border-[#d4d8d0]
                    py-[18px]
                    first:pt-0
                    last:border-0
                    sm:py-[22px]
                  "
                >
                  <span
                    className="
                      mb-[10px]
                      inline-block
                      rounded-[2px]
                      border
                      border-[#231f20]/40
                      bg-white
                      px-[10px]
                      py-[5px]
                      text-[12px]
                      font-bold
                      uppercase
                      leading-[16px]
                      text-[#231f20]
                      sm:mb-[12px]
                      sm:text-[13px]
                      sm:leading-[17px]
                    "
                  >
                    {post.tag}
                  </span>

                  <h4
                    className="
                      m-0
                      font-display
                      text-[19px]
                      font-bold
                      leading-[25px]
                      text-[#705600]
                      transition-colors
                      group-hover:text-[#496d83]
                      sm:text-[22px]
                      sm:leading-[29px]
                    "
                  >
                    {post.title} <span aria-hidden="true">›</span>
                  </h4>

                  <span className="mt-[10px] block text-[12px] font-bold uppercase leading-[18px] text-[#686868] sm:mt-[12px] sm:text-[13px]">
                    {post.date}
                  </span>
                </Link>
              ))}

              <Link
                href="/resources/blog"
                className="
                  mt-[18px]
                  inline-flex
                  h-[48px]
                  w-full
                  items-center
                  justify-center
                  rounded-[4px]
                  border-2
                  border-[#496d83]
                  bg-[#496d83]
                  px-[22px]
                  text-[15px]
                  font-bold
                  text-white
                  transition-colors
                  hover:bg-white
                  hover:text-[#496d83]
                  sm:mt-[20px]
                  sm:h-[51px]
                  sm:w-fit
                  sm:text-[16px]
                "
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="w-full bg-white py-[48px] lg:py-[75px]">
        <div className={`${CONTAINER} lg:px-[4.05%]`}>
          <h2
            className="
              m-0
              text-center
              font-display
              text-[26px]
              font-bold
              leading-[32px]
              text-[#4f832a]
              sm:text-[32px]
              sm:leading-[38px]
              lg:text-[40px]
              lg:leading-[50px]
            "
          >
            No other lender delivers more for your money
          </h2>

          <div className="mt-[24px] sm:mt-[30px]">
            <WhyUsCarousel />
          </div>
        </div>
      </section>

      {/* ================================================================
          INDUSTRY TRENDS & EDUCATION
          Left column (image + green panel) now stretches to fill the full
          grid-row height via flex, so when the right-hand list is taller
          (4 stacked items at generous spacing) the green panel grows to
          match instead of leaving the list to run on past the left column,
          matching how farm-funders.com keeps both columns terminating at
          the same baseline.
      ================================================================= */}
      <section className="w-full bg-[#ecf1e4]">
        <div className={`${CONTAINER} py-[48px] lg:py-[75px]`}>
          <h2
            className="
              m-0
              text-left
              font-display
              text-[26px]
              font-bold
              leading-[1.15]
              text-[#4f832a]
              sm:text-[34px]
              lg:text-[44px]
              xl:text-[46px]
            "
          >
            Industry Trends &amp; Education
          </h2>

          <div className="mt-[28px] grid grid-cols-1 gap-[36px] sm:mt-[42px] lg:grid-cols-2 lg:items-stretch lg:gap-[25px]">
            {/* FEATURED TREND — left column, stretches full row height */}
            <Link href={TRENDS_FEATURE.href} className="group flex h-full flex-col">
              <img
                src="/images/homepage/Dairy cows milking.jpg"
                alt="Dairy cows being milked"
                className="block h-[220px] w-full shrink-0 object-cover sm:h-[260px] lg:h-[301px]"
                loading="lazy"
              />

              <div className="flex flex-1 flex-col bg-[#4f832a] px-[20px] py-[22px] text-white sm:px-[28px] sm:py-[25px]">
                <span
                  className="
                    mb-[12px]
                    inline-block
                    w-fit
                    rounded-none
                    border
                    border-white/50
                    bg-[#686a5c]
                    px-[10px]
                    py-[6px]
                    text-[13px]
                    font-bold
                    uppercase
                    leading-[16px]
                    tracking-wide
                    text-white
                    sm:mb-[14px]
                    sm:text-[16px]
                    sm:leading-[18px]
                  "
                >
                  {TRENDS_FEATURE.tag}
                </span>

                <h3
                  className="
                    m-0
                    font-display
                    text-[22px]
                    font-bold
                    leading-[1.25]
                    text-white
                    sm:text-[28px]
                    lg:text-[36px]
                  "
                >
                  {TRENDS_FEATURE.title} <span aria-hidden="true">›</span>
                </h3>

                <p className="m-0 mt-[16px] text-[15px] leading-[23px] text-white sm:mt-[20px] sm:text-[16px] sm:leading-[25px]">
                  A new USCIS policy is opening the door for dairy producers to
                  access the H-2A temporary agricultural worker program, a
                  workforce option that has long been out of reach for
                  year-round dairy operations. This month&apos;s{" "}
                  <em>Knowledge Exchange Partner</em> discusses how the updated
                  guidance could help dairies address labor shortages, support
                  seasonal workforce planning and navigate new petition
                  requirements moving forward. Republished with permission
                  courtesy of Harris Beach Murtha Attorneys at Law.
                </p>

                <span className="mt-auto block pt-[20px] text-[13px] font-bold uppercase leading-[18px] text-white sm:pt-[25px] sm:text-[16px]">
                  {TRENDS_FEATURE.date}
                </span>
              </div>
            </Link>

            {/* OTHER TRENDS — right column */}
            <div className="flex flex-col">
              {TRENDS_LIST.map((post, i) => (
                <Link
                  key={i}
                  href={post.href}
                  className="
                    group
                    border-b
                    border-[#686868]/30
                    pb-[20px]
                    pt-[20px]
                    first:pt-0
                    last:border-0
                    last:pb-0
                    sm:pb-[30px]
                    sm:pt-[30px]
                  "
                >
                  <span
                    className="
                      mb-[12px]
                      inline-block
                      rounded-none
                      border
                      border-[#231f20]/20
                      bg-[#686a5c]
                      px-[10px]
                      py-[6px]
                      text-[13px]
                      font-bold
                      uppercase
                      leading-[16px]
                      tracking-wide
                      text-white
                      sm:mb-[14px]
                      sm:text-[16px]
                      sm:leading-[18px]
                    "
                  >
                    {post.tag}
                  </span>

                  <h4
                    className="
                      m-0
                      font-display
                      text-[19px]
                      font-bold
                      leading-[1.28]
                      text-[#5a4400]
                      transition-colors
                      group-hover:text-[#496d83]
                      sm:text-[24px]
                      lg:text-[27px]
                    "
                  >
                    {post.title} <span aria-hidden="true">›</span>
                  </h4>

                  <span className="mt-[12px] block text-[13px] font-bold uppercase leading-[18px] text-[#686868] sm:mt-[20px] sm:text-[16px]">
                    {post.date}
                  </span>
                </Link>
              ))}

              <Link
                href="/resources/Industry-Trends-and-Outlooks"
                className="
                  mt-[20px]
                  inline-flex
                  h-[48px]
                  w-full
                  items-center
                  justify-center
                  rounded-[4px]
                  border-2
                  border-[#496d83]
                  bg-[#496d83]
                  px-[22px]
                  text-[15px]
                  font-bold
                  text-white
                  transition-colors
                  hover:bg-white
                  hover:text-[#496d83]
                  sm:mt-[30px]
                  sm:h-[51px]
                  sm:w-fit
                  sm:text-[16px]
                "
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          NEWSLETTER — "Sign up for our Today's Harvest Blog."
      ================================================================= */}
      <section className="w-full bg-[#4f832a]">
        <div
          className={`${CONTAINER} flex min-h-[320px] flex-col items-center justify-center py-[48px] text-center sm:min-h-[390px] lg:min-h-[400px] lg:py-[60px]`}
        >
          <h2
            className="
              m-0
              max-w-[900px]
              font-display
              text-[26px]
              font-bold
              leading-[1.2]
              text-white
              sm:text-[38px]
              lg:text-[44px]
              xl:text-[46px]
            "
          >
            Sign up for our Today&apos;s Harvest Blog.
          </h2>

          <p
            className="
              m-0
              mt-[18px]
              max-w-[700px]
              text-[16px]
              font-semibold
              leading-[1.4]
              text-white
              sm:mt-[26px]
              sm:text-[18px]
              lg:mt-[42px]
              lg:text-[21px]
            "
          >
            Get the latest blog articles delivered to your inbox.
          </p>

          <form className="mt-[22px] flex w-full max-w-[360px] flex-col items-center sm:mt-[28px] lg:mt-[38px]">
            <label
              htmlFor="newsletter-email"
              className="mb-[10px] text-[16px] font-bold leading-[22px] text-white sm:mb-[12px] sm:text-[18px] lg:text-[20px]"
            >
              Enter your email*
            </label>

            <div className="flex w-full items-stretch gap-[8px]">
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="email@address.com"
                className="
                  h-[44px]
                  w-full
                  min-w-0
                  flex-1
                  rounded-[2px]
                  border-0
                  bg-white
                  px-[14px]
                  text-[15px]
                  text-[#231f20]
                  placeholder:text-[13px]
                  placeholder:text-[#686868]
                  outline-none
                  sm:w-[245px]
                  sm:flex-none
                  sm:text-[16px]
                  sm:placeholder:text-[18px]
                "
              />

              <button
                type="submit"
                className="
                  inline-flex
                  h-[44px]
                  w-[92px]
                  shrink-0
                  items-center
                  justify-center
                  whitespace-nowrap
                  rounded-[4px]
                  border-2
                  border-white
                  bg-[#4f832a]
                  text-[15px]
                  font-bold
                  leading-[20px]
                  text-white
                  transition-colors
                  hover:bg-[#436d23]
                  sm:w-[112px]
                  sm:text-[18px]
                "
              >
                Sign Up
              </button>
            </div>

            <p className="mt-[12px] text-[13px] font-bold italic leading-[18px] text-white sm:mt-[14px] sm:text-[14px] lg:text-[15px]">
              *Required Field
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

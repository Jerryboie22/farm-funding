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

const TRENDS = [
  {
    tag: "Industry Trends",
    title: "New Workforce Opportunities for Year-Round Dairy Operations",
    date: "June 2026",
    href: "/resources/trends",
  },
  {
    tag: "Industry Trends",
    title: "Understanding Today's Agricultural Labor Market",
    date: "May 2026",
    href: "/resources/trends",
  },
  {
    tag: "Business Tips and Tools",
    title: "Planning Ahead for Your Farm's Next Season",
    date: "April 2026",
    href: "/resources/trends",
  },
  {
    tag: "Industry Trends",
    title: "What Changing Markets Mean for Agricultural Producers",
    date: "March 2026",
    href: "/resources/trends",
  },
];

export default function Home() {
  const [feature, ...rest] = BLOG;
  const [tFeature, ...tRest] = TRENDS;

  return (
    <>
      {/* HERO */}
      <section className="grid w-full grid-cols-1 md:grid-cols-2 md:min-h-[690px]">
        <div className="flex items-center bg-white px-[6%] py-[45px] sm:px-[5%] sm:py-[55px] md:px-[4.05%] md:py-[70px]">
          <div className="max-w-[700px]">
            <h1
              className="
                m-0
                max-w-[700px]
                font-display
                text-[32px]
                font-normal
                leading-[1.15]
                text-[#4f832a]
                sm:text-[38px]
                md:text-[46px]
                lg:text-[50px]
                lg:leading-[1.12]
              "
            >
              Discover an ag lender that works for you.
            </h1>

            <p
              className="
                m-0
                mt-[20px]
                max-w-[650px]
                text-[16px]
                leading-[25px]
                text-[#231f20]
                sm:mt-[24px]
                sm:text-[17px]
                sm:leading-[28px]
                lg:mt-[28px]
                lg:text-[19px]
                lg:leading-[31px]
              "
            >
              Farm Funding is made in agriculture — a cooperative owned by the
              customers it serves. More than any other lender, we understand
              your unique credit needs and offer the specialized products,
              tools and services to help grow your success.
            </p>

            <div className="mt-[22px] flex flex-wrap gap-[12px] sm:mt-[28px]">
              <Link
                href="/financing"
                className="
                  inline-flex
                  h-[48px]
                  flex-1
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
                  sm:flex-none
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
                  flex-1
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
                  sm:flex-none
                  sm:text-[16px]
                "
              >
                View Services
              </Link>
            </div>
          </div>
        </div>

        <HeroCarousel className="relative min-h-[280px] sm:min-h-[340px] md:min-h-[475px] lg:min-h-[500px]" />
      </section>

      {/* PROMO CARDS */}
      <section
        className="
          mt-[40px]
          grid
          w-full
          grid-cols-1
          bg-[#e8ebef]
          sm:mt-[55px]
          md:mt-[70px]
          md:grid-cols-2
          md:divide-x
          md:divide-white
          lg:mt-[85px]
        "
      >
        <div
          className="
            flex
            flex-col
            items-center
            gap-[16px]
            px-[6%]
            py-[30px]
            text-center
            sm:flex-row
            sm:items-start
            sm:gap-[22px]
            sm:px-[4.05%]
            sm:py-[38px]
            sm:text-left
            lg:py-[45px]
          "
        >
          <img
            src="/images/homepage/2026 AgViews Calendar Cover.jpg"
            alt="2026 AgViews Calendar"
            className="h-[140px] w-[190px] shrink-0 object-cover sm:h-[115px] sm:w-[155px] md:h-[125px] md:w-[170px]"
            loading="lazy"
          />

          <div>
            <h3 className="m-0 font-display text-[19px] font-bold leading-[25px] text-[#231f20] sm:text-[20px] sm:leading-[26px]">
              Calendar Photo Contest
            </h3>

            <p className="m-0 mt-[10px] text-[15px] leading-[23px] text-[#231f20] sm:text-[16px] sm:leading-[25px]">
              Submit your photo(s) of modern agriculture, fishing and forestry
              by July 31 for a chance to win $100!
            </p>

            <Link
              href="/resources/Calendar-Photo-Contest"
              className="mt-[10px] inline-block text-[16px] font-bold text-[#496d83] underline"
            >
              Learn more
            </Link>
          </div>
        </div>

        <div
          className="
            flex
            flex-col
            items-center
            gap-[16px]
            border-t
            border-white
            px-[6%]
            py-[30px]
            text-center
            sm:flex-row
            sm:items-start
            sm:gap-[22px]
            sm:border-t-0
            sm:px-[4.05%]
            sm:py-[38px]
            sm:text-left
            lg:py-[45px]
          "
        >
          <img
            src="/images/homepage/Appreciation Sign.png"
            alt="Customer appreciation event"
            className="h-[140px] w-[190px] shrink-0 object-cover sm:h-[115px] sm:w-[155px] md:h-[125px] md:w-[170px]"
            loading="lazy"
          />

          <div>
            <h3 className="m-0 font-display text-[19px] font-bold leading-[25px] text-[#231f20] sm:text-[20px] sm:leading-[26px]">
              2026 Customer Appreciation Events
            </h3>

            <p className="m-0 mt-[10px] text-[15px] leading-[23px] text-[#231f20] sm:text-[16px] sm:leading-[25px]">
              As a cooperative, our customers are at the core of everything we
              do. We hope you&apos;ll join us at an event this summer to show
              our appreciation.
            </p>

            <Link
              href="/resources/events"
              className="mt-[10px] inline-block text-[16px] font-bold text-[#496d83] underline"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      {/* LATEST NEWS & BLOG */}
      <section className="w-full bg-[#ecf1e4] px-[6%] py-[45px] sm:px-[4.05%] sm:py-[60px] lg:py-[75px]">
        <div className="w-full">
          <h2
            className="
              m-0
              font-display
              text-[27px]
              font-bold
              leading-[33px]
              text-[#4f832a]
              sm:text-[32px]
              sm:leading-[38px]
              lg:text-[40px]
              lg:leading-[50px]
            "
          >
            Latest News &amp; Blog
          </h2>

          <div className="mt-[24px] grid grid-cols-1 gap-[35px] sm:mt-[30px] sm:gap-[45px] md:grid-cols-2 md:gap-x-[50px]">
            {/* FEATURED */}
            <Link href={feature.href} className="group block">
              <img
                src="/images/homepage/Megan Clancy spotlight.jpg"
                alt="Featured agricultural story"
                className="block h-[220px] w-full object-cover sm:h-[300px] lg:h-[350px]"
                loading="lazy"
              />

              <div className="bg-[#4f832a] px-[22px] py-[22px] text-white sm:px-[28px] sm:py-[25px]">
                <span
                  className="
                    mb-[14px]
                    inline-block
                    rounded-[2px]
                    bg-[#686868]
                    px-[10px]
                    py-[5px]
                    text-[12px]
                    font-bold
                    uppercase
                    leading-[17px]
                    text-white
                    sm:mb-[16px]
                    sm:text-[13px]
                  "
                >
                  {feature.tag}
                </span>

                <h3 className="m-0 font-display text-[21px] font-bold leading-[27px] text-white sm:text-[25px] sm:leading-[32px]">
                  {feature.title}
                </h3>

                {feature.body && (
                  <p className="m-0 mt-[15px] text-[15px] leading-[23px] text-white sm:text-[16px] sm:leading-[25px]">
                    {feature.body}
                  </p>
                )}

                <span className="mt-[18px] block text-[13px] font-bold uppercase leading-[18px] text-white/90">
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
                      bg-[#686868]
                      px-[10px]
                      py-[5px]
                      text-[12px]
                      font-bold
                      uppercase
                      leading-[17px]
                      text-white
                      sm:mb-[12px]
                      sm:text-[13px]
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
                    {post.title}
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
      <section className="w-full bg-white px-[6%] py-[45px] sm:px-[4.05%] sm:py-[60px] lg:py-[75px]">
        <div className="w-full">
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

      {/* INDUSTRY TRENDS */}
      <section className="w-full bg-[#ecf1e4] px-[6%] py-[45px] sm:px-[4.05%] sm:py-[60px] lg:py-[75px]">
        <div className="w-full">
          <h2
            className="
              m-0
              font-display
              text-[27px]
              font-bold
              leading-[33px]
              text-[#4f832a]
              sm:text-[32px]
              sm:leading-[38px]
              lg:text-[40px]
              lg:leading-[50px]
            "
          >
            Industry Trends &amp; Education
          </h2>

          <div className="mt-[24px] grid grid-cols-1 gap-[35px] sm:mt-[30px] sm:gap-[45px] md:grid-cols-2 md:gap-x-[50px]">
            {/* FEATURED TREND */}
            <Link href={tFeature.href} className="group block">
              <img
                src="/images/homepage/Dairy cows milking.jpg"
                alt="Dairy cows being milked"
                className="block h-[220px] w-full object-cover sm:h-[300px] lg:h-[350px]"
                loading="lazy"
              />

              <div className="bg-[#4f832a] px-[22px] py-[22px] text-white sm:px-[28px] sm:py-[25px]">
                <span
                  className="
                    mb-[14px]
                    inline-block
                    rounded-[2px]
                    bg-[#686868]
                    px-[10px]
                    py-[5px]
                    text-[12px]
                    font-bold
                    uppercase
                    leading-[17px]
                    text-white
                    sm:mb-[16px]
                    sm:text-[13px]
                  "
                >
                  {tFeature.tag}
                </span>

                <h3 className="m-0 font-display text-[21px] font-bold leading-[27px] text-white sm:text-[25px] sm:leading-[32px]">
                  {tFeature.title}
                </h3>

                <p className="m-0 mt-[15px] text-[15px] leading-[23px] text-white sm:text-[16px] sm:leading-[25px]">
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

                <span className="mt-[18px] block text-[13px] font-bold uppercase leading-[18px] text-white/90">
                  {tFeature.date}
                </span>
              </div>
            </Link>

            {/* OTHER TRENDS */}
            <div className="flex flex-col">
              {tRest.map((post, i) => (
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
                      bg-[#686868]
                      px-[10px]
                      py-[5px]
                      text-[12px]
                      font-bold
                      uppercase
                      leading-[17px]
                      text-white
                      sm:mb-[12px]
                      sm:text-[13px]
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
                    {post.title}
                  </h4>

                  <span className="mt-[10px] block text-[12px] font-bold uppercase leading-[18px] text-[#686868] sm:mt-[12px] sm:text-[13px]">
                    {post.date}
                  </span>
                </Link>
              ))}

              <Link
                href="/resources/trends"
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

      {/* NEWSLETTER */}
      <section className="w-full bg-[#4f832a] px-[6%] py-[50px] text-white sm:px-[4.05%] sm:py-[70px] lg:py-[82px]">
        <div className="mx-auto max-w-[900px] text-center">
          <h2
            className="
              m-0
              font-display
              text-[26px]
              font-bold
              leading-[32px]
              text-white
              sm:text-[32px]
              sm:leading-[40px]
              lg:text-[42px]
              lg:leading-[52px]
            "
          >
            Sign up for our Today&apos;s Harvest Blog.
          </h2>

          <p className="m-0 mt-[14px] text-[16px] leading-[24px] text-white sm:mt-[18px] sm:text-[17px] sm:leading-[27px] lg:text-[19px] lg:leading-[30px]">
            Get the latest blog articles delivered to your inbox.
          </p>

          <form className="mx-auto mt-[24px] flex w-full max-w-[560px] flex-col gap-[10px] sm:mt-[28px] sm:flex-row">
            <input
              type="email"
              required
              placeholder="email@address.com"
              className="
                h-[48px]
                min-w-0
                flex-1
                rounded-[2px]
                border-0
                bg-white
                px-[16px]
                text-[16px]
                text-[#231f20]
                outline-none
                sm:h-[51px]
              "
              aria-label="Email address"
            />

            <button
              type="submit"
              className="
                h-[48px]
                rounded-[4px]
                border-2
                border-white
                bg-[#4f832a]
                px-[24px]
                text-[16px]
                font-bold
                text-white
                transition-colors
                hover:bg-white
                hover:text-[#4f832a]
                sm:h-[51px]
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

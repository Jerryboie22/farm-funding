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
      {/* HERO — two columns at every breakpoint, including mobile */}
      <section className="grid w-full grid-cols-2 md:min-h-[690px]">
        <div className="flex items-center bg-white px-[4vw] py-[24px] md:px-[4.05%] md:py-[65px] lg:py-[70px]">
          <div className="max-w-[700px]">
            <h1
              className="
                m-0
                max-w-[700px]
                font-display
                text-[20px]
                font-normal
                leading-[1.15]
                text-[#4f832a]
                sm:text-[28px]
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
                mt-[10px]
                max-w-[650px]
                text-[12px]
                leading-[17px]
                text-[#231f20]
                sm:text-[14px]
                sm:leading-[20px]
                md:mt-[28px]
                md:text-[17px]
                md:leading-[28px]
                lg:text-[19px]
                lg:leading-[31px]
              "
            >
              Farm Funding is made in agriculture - a cooperative owned by the
              customers it serves. More than any other lender, we understand
              your unique credit needs and offer the specialized products,
              tools and services to help grow your success.
            </p>

            <div className="mt-[14px] flex flex-wrap gap-[8px] md:mt-[28px] md:gap-[12px]">
              <Link
                href="/financing"
                className="
                  inline-flex
                  h-[34px]
                  items-center
                  justify-center
                  rounded-[4px]
                  border-2
                  border-[#496d83]
                  bg-[#496d83]
                  px-[12px]
                  text-[11px]
                  font-bold
                  leading-[14px]
                  text-white
                  transition-colors
                  hover:bg-white
                  hover:text-[#496d83]
                  sm:h-[42px]
                  sm:px-[16px]
                  sm:text-[13px]
                  md:h-[51px]
                  md:px-[20px]
                  md:text-[16px]
                  md:leading-[20px]
                "
              >
                Explore Financing
              </Link>

              <Link
                href="/services"
                className="
                  inline-flex
                  h-[34px]
                  items-center
                  justify-center
                  rounded-[4px]
                  border-2
                  border-[#496d83]
                  bg-[#496d83]
                  px-[12px]
                  text-[11px]
                  font-bold
                  leading-[14px]
                  text-white
                  transition-colors
                  hover:bg-white
                  hover:text-[#496d83]
                  sm:h-[42px]
                  sm:px-[16px]
                  sm:text-[13px]
                  md:h-[51px]
                  md:px-[20px]
                  md:text-[16px]
                  md:leading-[20px]
                "
              >
                View Services
              </Link>
            </div>
          </div>
        </div>

        <HeroCarousel className="relative h-full min-h-[280px] md:h-[500px] lg:h-[645px]" />
      </section>

      {/* PROMO CARDS — sits directly under hero, no gap; stacked with thin divider on mobile */}
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
        <div className="flex items-start gap-[14px] px-[4.05%] py-[22px] md:gap-[22px] md:py-[38px] lg:py-[45px]">
          <img
            src="/images/homepage/2026 AgViews Calendar Cover.jpg"
            alt="2026 AgViews Calendar"
            className="h-[70px] w-[95px] shrink-0 object-cover md:h-[125px] md:w-[170px]"
            loading="lazy"
          />

          <div>
            <h3 className="m-0 font-display text-[15px] font-bold leading-[19px] text-[#231f20] md:text-[20px] md:leading-[26px]">
              Calendar Photo Contest
            </h3>

            <p className="m-0 mt-[6px] text-[12px] leading-[17px] text-[#231f20] md:mt-[10px] md:text-[16px] md:leading-[25px]">
              Submit your photo(s) of modern agriculture, fishing and forestry
              by July 31 for a chance to win $100!
            </p>

            <Link
              href="/resources/Calendar-Photo-Contest"
              className="mt-[6px] inline-block text-[12px] font-bold text-[#496d83] md:mt-[10px] md:text-[16px]"
            >
              Learn more ›
            </Link>
          </div>
        </div>

        <div className="flex items-start gap-[14px] px-[4.05%] py-[22px] md:gap-[22px] md:py-[38px] lg:py-[45px]">
          <img
            src="/images/homepage/Appreciation Sign.png"
            alt="Customer appreciation event"
            className="h-[70px] w-[95px] shrink-0 object-cover md:h-[125px] md:w-[170px]"
            loading="lazy"
          />

          <div>
            <h3 className="m-0 font-display text-[15px] font-bold leading-[19px] text-[#231f20] md:text-[20px] md:leading-[26px]">
              2026 Customer Appreciation Events
            </h3>

            <p className="m-0 mt-[6px] text-[12px] leading-[17px] text-[#231f20] md:mt-[10px] md:text-[16px] md:leading-[25px]">
              As a cooperative, our customers are at the core of everything we
              do. We hope you&apos;ll join us at an event this summer to show
              our appreciation.
            </p>

            <Link
              href="/resources/events"
              className="mt-[6px] inline-block text-[12px] font-bold text-[#496d83] md:mt-[10px] md:text-[16px]"
            >
              Learn more ›
            </Link>
          </div>
        </div>
      </section>

      {/* LATEST NEWS & BLOG */}
      <section className="w-full bg-[#ecf1e4] px-[4.05%] py-[60px] lg:py-[75px]">
        <div className="w-full">
          <h2
            className="
              m-0
              font-display
              text-[32px]
              font-bold
              leading-[38px]
              text-[#4f832a]
              lg:text-[40px]
              lg:leading-[50px]
            "
          >
            Latest News &amp; Blog
          </h2>

          <div className="mt-[30px] grid grid-cols-1 gap-[45px] md:grid-cols-2 md:gap-x-[50px]">
            {/* FEATURED */}
            <Link href={feature.href} className="group block">
              <img
                src="/images/homepage/Megan Clancy spotlight.jpg"
                alt="Featured agricultural story"
                className="block h-[300px] w-full object-cover lg:h-[350px]"
                loading="lazy"
              />

              <div className="bg-[#4f832a] px-[28px] py-[25px] text-white">
                <span
                  className="
                    mb-[16px]
                    inline-block
                    rounded-[2px]
                    border
                    border-white/60
                    bg-transparent
                    px-[10px]
                    py-[5px]
                    text-[13px]
                    font-bold
                    uppercase
                    leading-[17px]
                    text-white
                  "
                >
                  {feature.tag}
                </span>

                <h3 className="m-0 font-display text-[25px] font-bold leading-[32px] text-white">
                  {feature.title} <span aria-hidden="true">›</span>
                </h3>

                {feature.body && (
                  <p className="m-0 mt-[15px] text-[16px] leading-[25px] text-white">
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
                    py-[22px]
                    first:pt-0
                    last:border-0
                  "
                >
                  <span
                    className="
                      mb-[12px]
                      inline-block
                      rounded-[2px]
                      border
                      border-[#231f20]/40
                      bg-white
                      px-[10px]
                      py-[5px]
                      text-[13px]
                      font-bold
                      uppercase
                      leading-[17px]
                      text-[#231f20]
                    "
                  >
                    {post.tag}
                  </span>

                  <h4
                    className="
                      m-0
                      font-display
                      text-[22px]
                      font-bold
                      leading-[29px]
                      text-[#705600]
                      transition-colors
                      group-hover:text-[#496d83]
                    "
                  >
                    {post.title} <span aria-hidden="true">›</span>
                  </h4>

                  <span className="mt-[12px] block text-[13px] font-bold uppercase leading-[18px] text-[#686868]">
                    {post.date}
                  </span>
                </Link>
              ))}

              <Link
                href="/resources/blog"
                className="
                  mt-[20px]
                  inline-flex
                  h-[51px]
                  w-fit
                  items-center
                  justify-center
                  rounded-[4px]
                  border-2
                  border-[#496d83]
                  bg-[#496d83]
                  px-[22px]
                  text-[16px]
                  font-bold
                  text-white
                  transition-colors
                  hover:bg-white
                  hover:text-[#496d83]
                "
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="w-full bg-white px-[4.05%] py-[60px] lg:py-[75px]">
        <div className="w-full">
          <h2
            className="
              m-0
              text-center
              font-display
              text-[32px]
              font-bold
              leading-[38px]
              text-[#4f832a]
              lg:text-[40px]
              lg:leading-[50px]
            "
          >
            No other lender delivers more for your money
          </h2>

          <div className="mt-[30px]">
            <WhyUsCarousel />
          </div>
        </div>
      </section>

      {/* INDUSTRY TRENDS */}
      <section className="w-full bg-[#ecf1e4] px-[4.05%] py-[60px] lg:py-[75px]">
        <div className="w-full">
          <h2
            className="
              m-0
              font-display
              text-[32px]
              font-bold
              leading-[38px]
              text-[#4f832a]
              lg:text-[40px]
              lg:leading-[50px]
            "
          >
            Industry Trends &amp; Education
          </h2>

          <div className="mt-[30px] grid grid-cols-1 gap-[45px] md:grid-cols-2 md:gap-x-[50px]">
            {/* FEATURED TREND */}
            <Link href={tFeature.href} className="group block">
              <img
                src="/images/homepage/Dairy cows milking.jpg"
                alt="Dairy cows being milked"
                className="block h-[300px] w-full object-cover lg:h-[350px]"
                loading="lazy"
              />

              <div className="bg-[#4f832a] px-[28px] py-[25px] text-white">
                <span
                  className="
                    mb-[16px]
                    inline-block
                    rounded-[2px]
                    border
                    border-white/60
                    bg-transparent
                    px-[10px]
                    py-[5px]
                    text-[13px]
                    font-bold
                    uppercase
                    leading-[17px]
                    text-white
                  "
                >
                  {tFeature.tag}
                </span>

                <h3 className="m-0 font-display text-[25px] font-bold leading-[32px] text-white">
                  {tFeature.title} <span aria-hidden="true">›</span>
                </h3>

                <p className="m-0 mt-[15px] text-[16px] leading-[25px] text-white">
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
                    py-[22px]
                    first:pt-0
                    last:border-0
                  "
                >
                  <span
                    className="
                      mb-[12px]
                      inline-block
                      rounded-[2px]
                      border
                      border-[#231f20]/40
                      bg-white
                      px-[10px]
                      py-[5px]
                      text-[13px]
                      font-bold
                      uppercase
                      leading-[17px]
                      text-[#231f20]
                    "
                  >
                    {post.tag}
                  </span>

                  <h4
                    className="
                      m-0
                      font-display
                      text-[22px]
                      font-bold
                      leading-[29px]
                      text-[#705600]
                      transition-colors
                      group-hover:text-[#496d83]
                    "
                  >
                    {post.title} <span aria-hidden="true">›</span>
                  </h4>

                  <span className="mt-[12px] block text-[13px] font-bold uppercase leading-[18px] text-[#686868]">
                    {post.date}
                  </span>
                </Link>
              ))}

              <Link
                href="/resources/trends"
                className="
                  mt-[20px]
                  inline-flex
                  h-[51px]
                  w-fit
                  items-center
                  justify-center
                  rounded-[4px]
                  border-2
                  border-[#496d83]
                  bg-[#496d83]
                  px-[22px]
                  text-[16px]
                  font-bold
                  text-white
                  transition-colors
                  hover:bg-white
                  hover:text-[#496d83]
                "
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="w-full bg-[#4f832a] px-[4.05%] py-[70px] text-white lg:py-[82px]">
        <div className="mx-auto max-w-[900px] text-center">
          <h2
            className="
              m-0
              font-display
              text-[32px]
              font-bold
              leading-[40px]
              text-white
              lg:text-[42px]
              lg:leading-[52px]
            "
          >
            Sign up for our Today&apos;s Harvest Blog.
          </h2>

          <p className="m-0 mt-[18px] text-[17px] leading-[27px] text-white lg:text-[19px] lg:leading-[30px]">
            Get the latest blog articles delivered to your inbox.
          </p>

          <form className="mx-auto mt-[28px] flex w-full max-w-[560px] flex-col gap-[10px] sm:flex-row">
            <input
              type="email"
              required
              placeholder="email@address.com"
              className="
                h-[51px]
                min-w-0
                flex-1
                rounded-[2px]
                border-0
                bg-white
                px-[16px]
                text-[16px]
                text-[#231f20]
                outline-none
              "
              aria-label="Email address"
            />

            <button
              type="submit"
              className="
                 label: "About",
    href: "/about",
    seeAllLabel: "See all about",
    items: [
      { label: "Who We Are", href: "/about/who-we-are" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Cooperative Involvement", href: "/about/cooperative-involvement" },
      { label: "Newsroom", href: "/about/newsroom" },
      { label: "Financial Reports", href: "/about/financial-reports" },
      { label: "Community Support", href: "/about/community-support" },
      { label: "Information Security", href: "/about/information-security" },
      { label: "Careers", href: "/about/careers" },
    ],
  },
];

export default function Header() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* utility bar */}
      <div className="hidden md:flex items-center justify-end gap-6 px-8 py-3 text-sm font-bold text-grey-text border-b border-line">
        <Link href="/search" className="flex items-center gap-1.5 hover:text-clay transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
          </svg>
          Search
        </Link>
        <Link href="/resources/calculators" className="flex items-center gap-1.5 hover:text-clay transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="4" y="3" width="16" height="18" rx="1" />
            <path d="M7 8h10M7 12h3m4 0h3M7 16h3m4 0h3" strokeLinecap="round" />
          </svg>
          Calculators
        </Link>
        <Link href="/contact#offices" className="flex items-center gap-1.5 hover:text-clay transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21s-7-7.2-7-12a7 7 0 0 1 14 0c0 4.8-7 12-7 12Z" />
          </svg>
          Office Locator
        </Link>
        <Link href="/contact" className="flex items-center gap-1.5 hover:text-clay transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="1.5" />
            <path d="m4 6 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Contact Us
        </Link>
        <Link
          href="/sign-in"
          className="px-5 py-2.5 bg-clay text-white font-display font-bold rounded-[4px] border-2 border-clay hover:bg-white hover:text-clay transition-colors"
        >
          Sign in
        </Link>
      </div>

      {/* main nav */}
      <div className="flex items-center justify-between px-6 md:px-8 py-4 border-b border-line">
        <Link href="/" className="flex items-center gap-2 font-display text-2xl font-extrabold text-charcoal tracking-tight">
          <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <defs>
              <g id="logo-petal">
                <path d="M20 20C13 15 13 5 20 2c2 6 2 12 0 18Z" fill="#6ea23f" />
                <path d="M20 20c0-6 0-12 0-18 5 3 5 13 0 18Z" fill="#3e6e2e" />
              </g>
            </defs>
            <use href="#logo-petal" />
            <use href="#logo-petal" transform="rotate(90 20 20)" />
            <use href="#logo-petal" transform="rotate(180 20 20)" />
            <use href="#logo-petal" transform="rotate(270 20 20)" />
          </svg>
          FARM FUNDING
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((section, idx) => (
            <div
              key={section.label}
              className="relative"
              onMouseEnter={() => setOpenIdx(idx)}
              onMouseLeave={() => setOpenIdx(null)}
            >
              <Link
                href={section.href}
                className="px-4 py-2 text-sm font-bold uppercase tracking-wide text-charcoal hover:text-clay transition-colors"
              >
                {section.label}
              </Link>
              {openIdx === idx && (
                <div className="absolute left-0 top-full pt-1 w-64">
                  <div className="bg-white border border-line/40 rounded-[10px] shadow-lg py-2">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-5 py-2 text-sm text-grey-text border-l-4 border-l-white hover:border-l-clay hover:bg-grey-bg hover:text-clay transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                    <Link
                      href={section.href}
                      className="block px-5 py-2 text-sm font-semibold text-clay hover:text-forest transition-colors border-t border-line/40 mt-1 pt-2 uppercase"
                    >
                      {section.seeAllLabel} →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <button
          className="lg:hidden text-forest"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden border-t border-line px-6 py-4 flex flex-col gap-1 bg-cream">
          {NAV.map((section) => (
            <Link
              key={section.label}
              href={section.href}
              className="py-2 text-sm font-bold uppercase tracking-wide text-grey-text hover:text-clay"
              onClick={() => setMobileOpen(false)}
            >
              {section.label}
            </Link>
          ))}
          <Link href="/sign-in" className="py-2 text-sm font-bold text-clay">
            Sign In →
          </Link>
        </nav>
      )}
    </header>
  );
}

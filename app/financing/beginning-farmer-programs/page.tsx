import Link from "next/link";

export const metadata = {
  title: "Northeast Beginning Farmer Programs | Farm Funding",
  description:
    "We support young, beginning, small and veteran farmers with special financing, incentives and education. Explore our offering.",
};

const FEATURED_PROGRAMS = [
  {
    title: "FarmStart Capital Investment",
    body: "FarmStart is a Farm Funders program that makes working capital investments of up to $75,000 for startup farms and ag businesses with limited financial resources and showing promise of success.",
    image:
      "/images/financing/beginning-farmer-programs/FarmStart_logo.jpg",
    alt: "FarmStart Seed Capital logo",
    button: "Learn About FarmStart",
    href: "/financing/beginning-farmer-programs/farm-start",
    imageLeft: true,
    background: "white",
  },
  {
    title: "Young, Beginning, Small & Veteran Farmer Incentives",
    body: "Farm Funders’s Young, Beginning, Small and Veteran Farmer Incentive program (YBSV) is designed to help this growing customer segment get started in agriculture through special incentives to program participants.",
    image:
      "/images/financing/beginning-farmer-programs/Young Beginning Small  Veteranfarmercouple20211021220619utc.jpg",
    alt: "Young man and woman growers in a greenhouse with heads of lettuce",
    button: "Explore Incentives",
    href: "/FINANCING/Beginning-Farmer-Programs/Young-Beginning-Small-Veteran-Farmers.html",
    imageLeft: false,
    background: "white",
  },
  {
    title: "GenerationNext Seminar Series",
    body: "GenerationNext is a series of seminars, hosted by Farm Funders, designed to advance your management skills and business knowledge. Each seminar includes group discussions, idea sharing and networking opportunities.",
    image:
      "/images/financing/beginning-farmer-programs/GenNext.jpg",
    alt: "GenerationNext logo",
    button: "GenerationNext",
    href: "/FINANCING/Beginning-Farmer-Programs/GenerationNext",
    imageLeft: true,
    background: "white",
  },
  {
    title: "Harvesting a Profit",
    body: "Harvesting a Profit is a “profitability guide” designed to help young farmers beginning a career in production agriculture. The guide provides financial management know-how for what’s needed to achieve a sustainable and profitable ag business over the long haul.",
    image:
      "/images/financing/beginning-farmer-programs/Harvesting a Profit_Fresh Vegetables.jpg",
    alt: "Collection of bright and fresh vegetables",
    button: "Get Your Guide",
    href: "/financing/beginning-farmer-programs/harvesting-a-profit",
    imageLeft: false,
    background: "grey",
  },
  {
    title:
      "Resources and Training for the Young, Beginning & Small Farmer",
    body: "Fam Credit East is a proud contributing partner of AgBizInfo, a comprehensive source of education and business resources for young, beginning and small farmers, and commercial fishermen in the United States. Whether you're just starting out or looking to expand, AgBizInfo offers the insights and support you need.",
    image:
      "/images/financing/beginning-farmer-programs/AgBizInfo.jpg",
    alt: "Young farmer and family with AgBizInfo logo",
    button: "AgBizInfo",
    href: "https://www.agbizinfo.com/",
    imageLeft: true,
    background: "white",
    external: true,
  },
];

const RELATED_ARTICLES = [
  {
    category: "Business Tips and Tools",
    title:
      "Top Three Reasons to Take GenerationNext: An Instructor’s Perspective",
    date: "September 23, 2025",
    href: "/resources/todays-harvest-Blog/250923TopThreeReasonsForGenerationNext.html",
    categoryHref:
      "/resources/todays-harvest-Blog?category=business-tips-and-tools",
  },
  {
    category: "FarmStart and Beginning Farmers",
    title: "Is GenerationNext Right for me?",
    date: "September 3, 2025",
    href: "/resources/todays-harvest-Blog/250903IsGenerationNextRightForMe.html",
    categoryHref:
      "/resources/todays-harvest-Blog?category=farmstart-and-beginning-farmers",
  },
  {
    category: "Business Tips and Tools",
    title: "Summer 2025 Financial Partner",
    date: "August 4, 2025",
    href: "/about/NewsRoom/financial-partner-magazine/2025-Summer.html",
    categoryHref:
      "/resources/todays-harvest-Blog?category=business-tips-and-tools",
  },
];

export default function BeginningFarmerProgramsPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white text-[#171717]">

      {/* =========================================================
    HERO
========================================================= */}
<section className="w-full bg-[#4f832a]">
  <div className="mx-auto grid max-w-[1632px] grid-cols-1 lg:grid-cols-[49.2%_50.8%]">

    {/* HERO TEXT */}
    <div className="flex items-center">
      <div className="w-full px-[32px] py-[18px] md:px-[48px] md:py-[20px] lg:px-[68px] lg:py-[20px]">

        <h1
          id="maincontent"
          className="font-display max-w-[735px] text-[38px] font-[700] leading-[1.16] tracking-[-0.5px] text-white md:text-[45px] lg:text-[50px]"
        >
          We believe in the future of agriculture and those who want to be a
          part of it.
        </h1>

        <p className="mt-[20px] max-w-[735px] text-[16px] font-[500] leading-[1.65] text-white md:text-[17px] lg:text-[18px]">
          The long-term strength of Northeast agriculture is dependent on
          individuals entering the industry, and Farm Funders is committed to
          supporting entrants through innovative products and services that
          contribute to their growth and success. If you have a plan to start
          in agriculture, we have a plan to help.
        </p>

      </div>
    </div>


    {/* HERO IMAGE */}
    <div className="flex items-center justify-center pl-[8px] pr-[28px] py-[18px]">

      <div className="w-full max-w-[705px] border border-white">

        <img
          src="/images/financing/beginning-farmer-programs/Future of Agriculture_AdobeStock_291452532.jpg"
          alt="Young vegetable grower family with their hand-picked crop"
          className="block h-auto w-full object-cover"
        />

      </div>

    </div>

  </div>
</section>



      {/* =========================================================
          FFA STUDENT SCHOLARSHIPS
      ========================================================= */}
      <section className="w-full bg-[#e9edf1]">

        <div className="mx-auto flex min-h-[270px] max-w-[850px] items-center px-[25px] py-[30px] sm:px-0">

          {/* FFA IMAGE */}
          <div className="h-[171px] w-[200px] shrink-0">

            <img
              src="/images/financing/beginning-farmer-programs/FFA-AdobeStock_178028122_Hero.jpg"
              alt="High school student plants seeds in planter containers"
              className="block h-full w-full object-cover"
            />

          </div>


          {/* FFA TEXT */}
          <div className="ml-[28px]">

            <h2 className="font-display text-[20px] font-[700] leading-[1.3] text-[#171717]">
              FFA Student Scholarships
            </h2>

            <p className="mt-[13px] max-w-[390px] text-[16px] leading-[1.55] text-[#171717]">
              Scholarships to support FFA students&apos; SAE projects.
            </p>

            <Link
              href="/about/community-support/Scholarships/FFA-Scholarship.html"
              className="mt-[25px] inline-flex items-center text-[16px] font-[700] text-[#496d83] hover:underline"
            >
              Learn more
              <span className="ml-[8px] text-[24px] leading-none">
                ›
              </span>
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================================
          FEATURED PROGRAMS
      ========================================================= */}
      <section className="w-full">


        {/* =======================================================
            1. FARMSTART
        ======================================================= */}
        <section className="w-full bg-white">

          <div className="mx-auto grid max-w-[1632px] grid-cols-1 items-center px-[30px] py-[75px] md:min-h-[590px] md:grid-cols-2 md:px-[48px] md:py-[65px] lg:px-[66px]">

            {/* IMAGE LEFT */}
            <div className="flex items-center justify-center md:pr-[42px]">

              <img
                src="/images/financing/beginning-farmer-programs/FarmStart_logo.jpg"
                alt="FarmStart Seed Capital logo"
                className="block h-auto w-full max-w-[570px] object-contain"
              />

            </div>


            {/* TEXT RIGHT */}
            <div className="mt-[45px] md:mt-0 md:pl-[38px]">

              <h2 className="font-display max-w-[720px] text-[38px] font-[700] leading-[1.16] tracking-[-0.5px] text-[#4f832a] md:text-[42px] lg:text-[45px]">
                FarmStart Capital Investment
              </h2>

              <p className="mt-[28px] max-w-[730px] text-[17px] leading-[1.7] md:text-[18px]">
                FarmStart is a Farm Funders program that makes working capital
                investments of up to $75,000 for startup farms and ag
                businesses with limited financial resources and showing promise
                of success.
              </p>

              <Link
                href="/financing/beginning-farmer-programs/farm-start"
                className="mt-[31px] inline-flex min-h-[51px] items-center justify-center bg-[#496d83] px-[23px] text-[16px] font-[700] text-white"
              >
                Learn About FarmStart
              </Link>

            </div>

          </div>

        </section>


        {/* =======================================================
            2. YBSV
        ======================================================= */}
        <section className="w-full bg-white">

          <div className="mx-auto grid max-w-[1632px] grid-cols-1 items-center px-[30px] py-[75px] md:min-h-[590px] md:grid-cols-2 md:px-[48px] md:py-[65px] lg:px-[66px]">

            {/* TEXT LEFT */}
            <div className="order-2 mt-[45px] md:order-1 md:mt-0 md:pr-[42px]">

              <h2 className="font-display max-w-[720px] text-[38px] font-[700] leading-[1.16] tracking-[-0.5px] text-[#4f832a] md:text-[42px] lg:text-[45px]">
                Young, Beginning, Small &amp; Veteran Farmer Incentives
              </h2>

              <p className="mt-[28px] max-w-[730px] text-[17px] leading-[1.7] md:text-[18px]">
                Farm Funders’s Young, Beginning, Small and Veteran Farmer
                Incentive program (YBSV) is designed to help this growing
                customer segment get started in agriculture through special
                incentives to program participants.
              </p>

              <Link
                href="/FINANCING/Beginning-Farmer-Programs/Young-Beginning-Small-Veteran-Farmers.html"
                className="mt-[31px] inline-flex min-h-[51px] items-center justify-center bg-[#496d83] px-[23px] text-[16px] font-[700] text-white"
              >
                Explore Incentives
              </Link>

            </div>


            {/* IMAGE RIGHT */}
            <div className="order-1 flex items-center justify-center md:order-2 md:pl-[42px]">

              <img
                src="/images/financing/beginning-farmer-programs/Young Beginning Small  Veteranfarmercouple20211021220619utc.jpg"
                alt="Young man and woman growers in a greenhouse with heads of lettuce"
                className="block h-auto max-h-[480px] w-full object-contain"
              />

            </div>

          </div>

        </section>


        {/* =======================================================
            3. GENERATION NEXT
        ======================================================= */}
        <section className="w-full bg-white">

          <div className="mx-auto grid max-w-[1632px] grid-cols-1 items-center px-[30px] py-[75px] md:min-h-[590px] md:grid-cols-2 md:px-[48px] md:py-[65px] lg:px-[66px]">

            {/* IMAGE LEFT */}
            <div className="flex items-center justify-center md:pr-[42px]">

              <img
                src="/images/financing/beginning-farmer-programs/GenNext.jpg"
                alt="GenerationNext logo"
                className="block h-auto max-h-[480px] w-full object-contain"
              />

            </div>


            {/* TEXT RIGHT */}
            <div className="mt-[45px] md:mt-0 md:pl-[38px]">

              <h2 className="font-display max-w-[720px] text-[38px] font-[700] leading-[1.16] tracking-[-0.5px] text-[#4f832a] md:text-[42px] lg:text-[45px]">
                GenerationNext Seminar Series
              </h2>

              <p className="mt-[28px] max-w-[730px] text-[17px] leading-[1.7] md:text-[18px]">
                GenerationNext is a series of seminars, hosted by Farm Funders,
                designed to advance your management skills and business
                knowledge. Each seminar includes group discussions, idea
                sharing and networking opportunities.
              </p>

              <Link
                href="/FINANCING/Beginning-Farmer-Programs/GenerationNext"
                className="mt-[31px] inline-flex min-h-[51px] items-center justify-center bg-[#496d83] px-[23px] text-[16px] font-[700] text-white"
              >
                GenerationNext
              </Link>

            </div>

          </div>

        </section>


        {/* =======================================================
            4. HARVESTING A PROFIT
        ======================================================= */}
        <section className="w-full bg-[#f5f5f5]">

          <div className="mx-auto grid max-w-[1632px] grid-cols-1 items-center px-[30px] py-[75px] md:min-h-[590px] md:grid-cols-2 md:px-[48px] md:py-[65px] lg:px-[66px]">

            {/* TEXT LEFT */}
            <div className="order-2 mt-[45px] md:order-1 md:mt-0 md:pr-[42px]">

              <h2 className="font-display text-[38px] font-[700] leading-[1.16] tracking-[-0.5px] text-[#4f832a] md:text-[42px] lg:text-[45px]">
                Harvesting a Profit
              </h2>

              <p className="mt-[28px] max-w-[730px] text-[17px] leading-[1.7] md:text-[18px]">
                Harvesting a Profit is a “profitability guide” designed to help
                young farmers beginning a career in production agriculture.
                The guide provides financial management know-how for what’s
                needed to achieve a sustainable and profitable ag business
                over the long haul.
              </p>

              <Link
                href="/FINANCING/Beginning-Farmer-Programs/Harvesting-a-Profit.html"
                className="mt-[31px] inline-flex min-h-[51px] items-center justify-center bg-[#496d83] px-[23px] text-[16px] font-[700] text-white"
              >
                Get Your Guide
              </Link>

            </div>


            {/* IMAGE RIGHT */}
            <div className="order-1 flex items-center justify-center md:order-2 md:pl-[42px]">

              <img
                src="/images/financing/beginning-farmer-programs/Harvesting a Profit_Fresh Vegetables.jpg"
                alt="Collection of bright and fresh vegetables"
                className="block h-auto max-h-[480px] w-full object-contain"
              />

            </div>

          </div>

        </section>


        {/* =======================================================
            5. AGBIZINFO
        ======================================================= */}
        <section className="w-full bg-white">

          <div className="mx-auto grid max-w-[1632px] grid-cols-1 items-center px-[30px] py-[75px] md:min-h-[590px] md:grid-cols-2 md:px-[48px] md:py-[65px] lg:px-[66px]">

            {/* IMAGE LEFT */}
            <div className="flex items-center justify-center md:pr-[42px]">

              <img
                src="/images/financing/beginning-farmer-programs/AgBizInfo.jpg"
                alt="Young farmer and family with AgBizInfo logo"
                className="block h-auto max-h-[480px] w-full object-contain"
              />

            </div>


            {/* TEXT RIGHT */}
            <div className="mt-[45px] md:mt-0 md:pl-[38px]">

              <h2 className="font-display max-w-[720px] text-[38px] font-[700] leading-[1.16] tracking-[-0.5px] text-[#4f832a] md:text-[42px] lg:text-[45px]">
                Resources and Training for the Young, Beginning &amp; Small
                Farmer
              </h2>

              <p className="mt-[28px] max-w-[730px] text-[17px] leading-[1.7] md:text-[18px]">
                Fam Credit East is a proud contributing partner of AgBizInfo, a
                comprehensive source of education and business resources for
                young, beginning and small farmers, and commercial fishermen
                in the United States. Whether you&apos;re just starting out or
                looking to expand, AgBizInfo offers the insights and support
                you need.
              </p>

              <a
                href="https://www.agbizinfo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-[31px] inline-flex min-h-[51px] items-center justify-center bg-[#496d83] px-[23px] text-[16px] font-[700] text-white"
              >
                AgBizInfo
                <span className="ml-[8px] text-[15px]">
                  ↗
                </span>
              </a>

            </div>

          </div>

        </section>

      </section>


      {/* =========================================================
          QUESTIONS
      ========================================================= */}
      <section className="w-full bg-white">

        <div className="mx-auto flex min-h-[260px] max-w-[1632px] flex-col items-start justify-center px-[30px] py-[55px] md:flex-row md:items-center md:justify-between md:px-[48px] md:py-0 lg:px-[66px]">

import Link from "next/link";

export const metadata = {
  title: "Northeast Beginning Farmer Programs | Farm Funding",
  description:
    "We support young, beginning, small and veteran farmers with special financing, incentives and education. Explore our offering.",
};

const FEATURED_PROGRAMS = [
  {
    title: "FarmStart Capital Investment",
    body: "FarmStart is a Farm Funders program that makes working capital investments of up to $75,000 for startup farms and ag businesses with limited financial resources and showing promise of success.",
    image:
      "/images/financing/beginning-farmer-programs/FarmStart_logo.jpg",
    alt: "FarmStart Seed Capital logo",
    button: "Learn About FarmStart",
    href: "/financing/beginning-farmer-programs/farm-start",
    imageLeft: true,
    background: "white",
  },
  {
    title: "Young, Beginning, Small & Veteran Farmer Incentives",
    body: "Farm Funders’s Young, Beginning, Small and Veteran Farmer Incentive program (YBSV) is designed to help this growing customer segment get started in agriculture through special incentives to program participants.",
    image:
      "/images/financing/beginning-farmer-programs/Young Beginning Small  Veteranfarmercouple20211021220619utc.jpg",
    alt: "Young man and woman growers in a greenhouse with heads of lettuce",
    button: "Explore Incentives",
    href: "/FINANCING/Beginning-Farmer-Programs/Young-Beginning-Small-Veteran-Farmers.html",
    imageLeft: false,
    background: "white",
  },
  {
    title: "GenerationNext Seminar Series",
    body: "GenerationNext is a series of seminars, hosted by Farm Funders, designed to advance your management skills and business knowledge. Each seminar includes group discussions, idea sharing and networking opportunities.",
    image:
      "/images/financing/beginning-farmer-programs/GenNext.jpg",
    alt: "GenerationNext logo",
    button: "GenerationNext",
    href: "/FINANCING/Beginning-Farmer-Programs/GenerationNext",
    imageLeft: true,
    background: "white",
  },
  {
    title: "Harvesting a Profit",
    body: "Harvesting a Profit is a “profitability guide” designed to help young farmers beginning a career in production agriculture. The guide provides financial management know-how for what’s needed to achieve a sustainable and profitable ag business over the long haul.",
    image:
      "/images/financing/beginning-farmer-programs/Harvesting a Profit_Fresh Vegetables.jpg",
    alt: "Collection of bright and fresh vegetables",
    button: "Get Your Guide",
    href: "/financing/beginning-farmer-programs/harvesting-a-profit",
    imageLeft: false,
    background: "grey",
  },
  {
    title:
      "Resources and Training for the Young, Beginning & Small Farmer",
    body: "Fam Credit East is a proud contributing partner of AgBizInfo, a comprehensive source of education and business resources for young, beginning and small farmers, and commercial fishermen in the United States. Whether you're just starting out or looking to expand, AgBizInfo offers the insights and support you need.",
    image:
      "/images/financing/beginning-farmer-programs/AgBizInfo.jpg",
    alt: "Young farmer and family with AgBizInfo logo",
    button: "AgBizInfo",
    href: "https://www.agbizinfo.com/",
    imageLeft: true,
    background: "white",
    external: true,
  },
];

const RELATED_ARTICLES = [
  {
    category: "Business Tips and Tools",
    title:
      "Top Three Reasons to Take GenerationNext: An Instructor’s Perspective",
    date: "September 23, 2025",
    href: "/resources/todays-harvest-Blog/250923TopThreeReasonsForGenerationNext.html",
    categoryHref:
      "/resources/todays-harvest-Blog?category=business-tips-and-tools",
  },
  {
    category: "FarmStart and Beginning Farmers",
    title: "Is GenerationNext Right for me?",
    date: "September 3, 2025",
    href: "/resources/todays-harvest-Blog/250903IsGenerationNextRightForMe.html",
    categoryHref:
      "/resources/todays-harvest-Blog?category=farmstart-and-beginning-farmers",
  },
  {
    category: "Business Tips and Tools",
    title: "Summer 2025 Financial Partner",
    date: "August 4, 2025",
    href: "/about/NewsRoom/financial-partner-magazine/2025-Summer.html",
    categoryHref:
      "/resources/todays-harvest-Blog?category=business-tips-and-tools",
  },
];

export default function BeginningFarmerProgramsPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white text-[#171717]">

      {/* =========================================================
    HERO
========================================================= */}
<section className="w-full bg-[#4f832a]">
  <div className="mx-auto grid max-w-[1632px] grid-cols-1 lg:grid-cols-[49.2%_50.8%]">

    {/* HERO TEXT */}
    <div className="flex items-center">
      <div className="w-full px-[32px] py-[18px] md:px-[48px] md:py-[20px] lg:px-[68px] lg:py-[20px]">

        <h1
          id="maincontent"
          className="font-display max-w-[735px] text-[38px] font-[700] leading-[1.16] tracking-[-0.5px] text-white md:text-[45px] lg:text-[50px]"
        >
          We believe in the future of agriculture and those who want to be a
          part of it.
        </h1>

        <p className="mt-[20px] max-w-[735px] text-[16px] font-[500] leading-[1.65] text-white md:text-[17px] lg:text-[18px]">
          The long-term strength of Northeast agriculture is dependent on
          individuals entering the industry, and Farm Funders is committed to
          supporting entrants through innovative products and services that
          contribute to their growth and success. If you have a plan to start
          in agriculture, we have a plan to help.
        </p>

      </div>
    </div>


    {/* HERO IMAGE */}
    <div className="flex items-center justify-center pl-[8px] pr-[28px] py-[18px]">

      <div className="w-full max-w-[705px] border border-white">

        <img
          src="/images/financing/beginning-farmer-programs/Future of Agriculture_AdobeStock_291452532.jpg"
          alt="Young vegetable grower family with their hand-picked crop"
          className="block h-auto w-full object-cover"
        />

      </div>

    </div>

  </div>
</section>



      {/* =========================================================
          FFA STUDENT SCHOLARSHIPS
      ========================================================= */}
      <section className="w-full bg-[#e9edf1]">

        <div className="mx-auto flex min-h-[270px] max-w-[850px] items-center px-[25px] py-[30px] sm:px-0">

          {/* FFA IMAGE */}
          <div className="h-[171px] w-[200px] shrink-0">

            <img
              src="/images/financing/beginning-farmer-programs/FFA-AdobeStock_178028122_Hero.jpg"
              alt="High school student plants seeds in planter containers"
              className="block h-full w-full object-cover"
            />

          </div>


          {/* FFA TEXT */}
          <div className="ml-[28px]">

            <h2 className="font-display text-[20px] font-[700] leading-[1.3] text-[#171717]">
              FFA Student Scholarships
            </h2>

            <p className="mt-[13px] max-w-[390px] text-[16px] leading-[1.55] text-[#171717]">
              Scholarships to support FFA students&apos; SAE projects.
            </p>

            <Link
              href="/about/community-support/Scholarships/FFA-Scholarship.html"
              className="mt-[25px] inline-flex items-center text-[16px] font-[700] text-[#496d83] hover:underline"
            >
              Learn more
              <span className="ml-[8px] text-[24px] leading-none">
                ›
              </span>
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================================
          FEATURED PROGRAMS
      ========================================================= */}
      <section className="w-full">


        {/* =======================================================
            1. FARMSTART
        ======================================================= */}
        <section className="w-full bg-white">

          <div className="mx-auto grid max-w-[1632px] grid-cols-1 items-center px-[30px] py-[75px] md:min-h-[590px] md:grid-cols-2 md:px-[48px] md:py-[65px] lg:px-[66px]">

            {/* IMAGE LEFT */}
            <div className="flex items-center justify-center md:pr-[42px]">

              <img
                src="/images/financing/beginning-farmer-programs/FarmStart_logo.jpg"
                alt="FarmStart Seed Capital logo"
                className="block h-auto w-full max-w-[570px] object-contain"
              />

            </div>


            {/* TEXT RIGHT */}
            <div className="mt-[45px] md:mt-0 md:pl-[38px]">

              <h2 className="font-display max-w-[720px] text-[38px] font-[700] leading-[1.16] tracking-[-0.5px] text-[#4f832a] md:text-[42px] lg:text-[45px]">
                FarmStart Capital Investment
              </h2>

              <p className="mt-[28px] max-w-[730px] text-[17px] leading-[1.7] md:text-[18px]">
                FarmStart is a Farm Funders program that makes working capital
                investments of up to $75,000 for startup farms and ag
                businesses with limited financial resources and showing promise
                of success.
              </p>

              <Link
                href="/financing/beginning-farmer-programs/farm-start"
                className="mt-[31px] inline-flex min-h-[51px] items-center justify-center bg-[#496d83] px-[23px] text-[16px] font-[700] text-white"
              >
                Learn About FarmStart
              </Link>

            </div>

          </div>

        </section>


        {/* =======================================================
            2. YBSV
        ======================================================= */}
        <section className="w-full bg-white">

          <div className="mx-auto grid max-w-[1632px] grid-cols-1 items-center px-[30px] py-[75px] md:min-h-[590px] md:grid-cols-2 md:px-[48px] md:py-[65px] lg:px-[66px]">

            {/* TEXT LEFT */}
            <div className="order-2 mt-[45px] md:order-1 md:mt-0 md:pr-[42px]">

              <h2 className="font-display max-w-[720px] text-[38px] font-[700] leading-[1.16] tracking-[-0.5px] text-[#4f832a] md:text-[42px] lg:text-[45px]">
                Young, Beginning, Small &amp; Veteran Farmer Incentives
              </h2>

              <p className="mt-[28px] max-w-[730px] text-[17px] leading-[1.7] md:text-[18px]">
                Farm Funders’s Young, Beginning, Small and Veteran Farmer
                Incentive program (YBSV) is designed to help this growing
                customer segment get started in agriculture through special
                incentives to program participants.
              </p>

              <Link
                href="/FINANCING/Beginning-Farmer-Programs/Young-Beginning-Small-Veteran-Farmers.html"
                className="mt-[31px] inline-flex min-h-[51px] items-center justify-center bg-[#496d83] px-[23px] text-[16px] font-[700] text-white"
              >
                Explore Incentives
              </Link>

            </div>


            {/* IMAGE RIGHT */}
            <div className="order-1 flex items-center justify-center md:order-2 md:pl-[42px]">

              <img
                src="/images/financing/beginning-farmer-programs/Young Beginning Small  Veteranfarmercouple20211021220619utc.jpg"
                alt="Young man and woman growers in a greenhouse with heads of lettuce"
                className="block h-auto max-h-[480px] w-full object-contain"
              />

            </div>

          </div>

        </section>


        {/* =======================================================
            3. GENERATION NEXT
        ======================================================= */}
        <section className="w-full bg-white">

          <div className="mx-auto grid max-w-[1632px] grid-cols-1 items-center px-[30px] py-[75px] md:min-h-[590px] md:grid-cols-2 md:px-[48px] md:py-[65px] lg:px-[66px]">

            {/* IMAGE LEFT */}
            <div className="flex items-center justify-center md:pr-[42px]">

              <img
                src="/images/financing/beginning-farmer-programs/GenNext.jpg"
                alt="GenerationNext logo"
                className="block h-auto max-h-[480px] w-full object-contain"
              />

            </div>


            {/* TEXT RIGHT */}
            <div className="mt-[45px] md:mt-0 md:pl-[38px]">

              <h2 className="font-display max-w-[720px] text-[38px] font-[700] leading-[1.16] tracking-[-0.5px] text-[#4f832a] md:text-[42px] lg:text-[45px]">
                GenerationNext Seminar Series
              </h2>

              <p className="mt-[28px] max-w-[730px] text-[17px] leading-[1.7] md:text-[18px]">
                GenerationNext is a series of seminars, hosted by Farm Funders,
                designed to advance your management skills and business
                knowledge. Each seminar includes group discussions, idea
                sharing and networking opportunities.
              </p>

              <Link
                href="/FINANCING/Beginning-Farmer-Programs/GenerationNext"
                className="mt-[31px] inline-flex min-h-[51px] items-center justify-center bg-[#496d83] px-[23px] text-[16px] font-[700] text-white"
              >
                GenerationNext
              </Link>

            </div>

          </div>

        </section>


        {/* =======================================================
            4. HARVESTING A PROFIT
        ======================================================= */}
        <section className="w-full bg-[#f5f5f5]">

          <div className="mx-auto grid max-w-[1632px] grid-cols-1 items-center px-[30px] py-[75px] md:min-h-[590px] md:grid-cols-2 md:px-[48px] md:py-[65px] lg:px-[66px]">

            {/* TEXT LEFT */}
            <div className="order-2 mt-[45px] md:order-1 md:mt-0 md:pr-[42px]">

              <h2 className="font-display text-[38px] font-[700] leading-[1.16] tracking-[-0.5px] text-[#4f832a] md:text-[42px] lg:text-[45px]">
                Harvesting a Profit
              </h2>

              <p className="mt-[28px] max-w-[730px] text-[17px] leading-[1.7] md:text-[18px]">
                Harvesting a Profit is a “profitability guide” designed to help
                young farmers beginning a career in production agriculture.
                The guide provides financial management know-how for what’s
                needed to achieve a sustainable and profitable ag business
                over the long haul.
              </p>

              <Link
                href="/FINANCING/Beginning-Farmer-Programs/Harvesting-a-Profit.html"
                className="mt-[31px] inline-flex min-h-[51px] items-center justify-center bg-[#496d83] px-[23px] text-[16px] font-[700] text-white"
              >
                Get Your Guide
              </Link>

            </div>


            {/* IMAGE RIGHT */}
            <div className="order-1 flex items-center justify-center md:order-2 md:pl-[42px]">

              <img
                src="/images/financing/beginning-farmer-programs/Harvesting a Profit_Fresh Vegetables.jpg"
                alt="Collection of bright and fresh vegetables"
                className="block h-auto max-h-[480px] w-full object-contain"
              />

            </div>

          </div>

        </section>


        {/* =======================================================
            5. AGBIZINFO
        ======================================================= */}
        <section className="w-full bg-white">

          <div className="mx-auto grid max-w-[1632px] grid-cols-1 items-center px-[30px] py-[75px] md:min-h-[590px] md:grid-cols-2 md:px-[48px] md:py-[65px] lg:px-[66px]">

            {/* IMAGE LEFT */}
            <div className="flex items-center justify-center md:pr-[42px]">

              <img
                src="/images/financing/beginning-farmer-programs/AgBizInfo.jpg"
                alt="Young farmer and family with AgBizInfo logo"
                className="block h-auto max-h-[480px] w-full object-contain"
              />

            </div>


            {/* TEXT RIGHT */}
            <div className="mt-[45px] md:mt-0 md:pl-[38px]">

              <h2 className="font-display max-w-[720px] text-[38px] font-[700] leading-[1.16] tracking-[-0.5px] text-[#4f832a] md:text-[42px] lg:text-[45px]">
                Resources and Training for the Young, Beginning &amp; Small
                Farmer
              </h2>

              <p className="mt-[28px] max-w-[730px] text-[17px] leading-[1.7] md:text-[18px]">
                Fam Credit East is a proud contributing partner of AgBizInfo, a
                comprehensive source of education and business resources for
                young, beginning and small farmers, and commercial fishermen
                in the United States. Whether you&apos;re just starting out or
                looking to expand, AgBizInfo offers the insights and support
                you need.
              </p>

              <a
                href="https://www.agbizinfo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-[31px] inline-flex min-h-[51px] items-center justify-center bg-[#496d83] px-[23px] text-[16px] font-[700] text-white"
              >
                AgBizInfo
                <span className="ml-[8px] text-[15px]">
                  ↗
                </span>
              </a>

            </div>

          </div>

        </section>

      </section>


      {/* =========================================================
          QUESTIONS
      ========================================================= */}
      <section className="w-full bg-white">

        <div className="mx-auto flex min-h-[260px] max-w-[1632px] flex-col items-start justify-center px-[30px] py-[55px] md:flex-row md:items-center md:justify-between md:px-[48px] md:py-0 lg:px-[66px]">

          <div>

            <h2 className="font-display text-[38px] font-[700] leading-[1.16] text-[#4f832a] md:text-[45px]">
              Have Additional Questions?
            </h2>

            <p className="mt-[17px] text-[17px] leading-[1.65]">
              Let&apos;s get in touch!
            </p>

          </div>

          <Link
            href="/ContactUs.html"
            className="mt-[30px] inline-flex min-h-[51px] items-center justify-center bg-[#496d83] px-[23px] text-[16px] font-[700] text-white md:mt-0"
          >
            Contact Us
          </Link>

        </div>

      </section>


      {/* =========================================================
          YOU MIGHT ALSO LIKE
      ========================================================= */}
      <section className="w-full bg-[#ecf1e4]">
        <div className="mx-auto max-w-[1632px] px-[5%] py-[45px] md:px-[66px] md:py-[60px]">

          <h2 className="font-display text-[28px] font-[700] leading-[1.16] text-[#4f832a] md:text-[45px]">
            You Might Also Like
          </h2>

          <div className="mt-[24px] grid grid-cols-1 divide-y divide-[#d4d8cf] md:mt-[35px] md:grid-cols-3 md:divide-y-0">

            {RELATED_ARTICLES.map((article) => (
              <article
                key={article.title}
                className="py-[30px] first:pt-0 md:border-r md:border-[#d4d8cf] md:py-[30px] md:pr-[40px] md:first:pl-0 md:first:pr-[40px] md:last:border-r-0 md:last:pl-[40px]"
              >
                <Link
                  href={article.categoryHref}
                  className="inline-block bg-[#686868] px-[10px] py-[5px] text-[12px] font-[700] uppercase tracking-[0.3px] text-white"
                >
                  {article.category}
          

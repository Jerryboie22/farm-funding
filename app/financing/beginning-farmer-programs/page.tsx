import Link from "next/link";

export const metadata = {
  title: "Northeast Beginning Farmer Programs | Farm Funding",
  description:
    "We support young, beginning, small and veteran farmers with special financing, incentives and education. Explore our offering.",
};

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
    <main className="w-full overflow-x-hidden bg-white text-[#231f20]">

      {/* =========================================================
          HERO
          Source order:
          Heading
          Intro
          Hero image
      ========================================================= */}

      <section className="w-full bg-[#4f832a]">
        <div className="mx-auto max-w-[1600px]">

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[1fr_1fr]
            "
          >

            {/* HERO COPY */}

            <div
              className="
                flex
                items-center

                px-[23px]
                pt-[120px]
                pb-[58px]

                sm:px-[30px]
                sm:pt-[105px]
                sm:pb-[62px]

                md:px-[48px]
                md:pt-[90px]

                lg:px-[70px]
                lg:py-[92px]
              "
            >
              <div className="w-full">

                <h1
                  id="maincontent"
                  className="
                    font-display
                    m-0
                    max-w-[735px]
                    font-[700]
                    tracking-[-1px]
                    text-white

                    text-[52px]
                    leading-[1.18]

                    sm:text-[53px]

                    md:text-[52px]

                    lg:text-[49px]
                    lg:leading-[1.16]

                    xl:text-[52px]
                  "
                >
                  We believe in the future of agriculture and those who want to
                  be a part of it.
                </h1>

                <p
                  className="
                    m-0
                    max-w-[735px]
                    text-white

                    mt-[54px]

                    text-[20px]
                    leading-[1.88]

                    sm:text-[19px]
                    sm:leading-[1.8]

                    md:text-[18px]
                    md:leading-[1.72]

                    lg:mt-[28px]
                    lg:text-[18px]
                    lg:leading-[1.68]
                  "
                >
                  The long-term strength of Northeast agriculture is dependent
                  on individuals entering the industry, and Farm Funders is
                  committed to supporting entrants through innovative products
                  and services that contribute to their growth and success. If
                  you have a plan to start in agriculture, we have a plan to
                  help.
                </p>

              </div>
            </div>


            {/* HERO IMAGE */}

            <div
              className="
                flex
                items-center

                px-[23px]
                pb-[58px]

                sm:px-[30px]
                sm:pb-[65px]

                md:px-[48px]

                lg:px-[10px]
                lg:py-[30px]
                lg:pr-[68px]
                lg:pb-[30px]
              "
            >
              <div className="w-full border border-white">

                <img
                  src="/images/financing/beginning-farmer-programs/Future of Agriculture_AdobeStock_291452532.jpg"
                  alt="Young vegetable grower family with their hand-picked crop"
                  className="
                    block
                    h-auto
                    w-full
                    object-cover
                  "
                />

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          FFA STUDENT SCHOLARSHIPS
      ========================================================= */}

      <section className="w-full bg-[#e9edf1]">

        <div
          className="
            mx-auto
            flex
            max-w-[850px]
            items-center

            px-[23px]
            py-[42px]

            sm:px-[30px]

            md:py-[38px]
          "
        >

          <div
            className="
              h-[145px]
              w-[170px]
              shrink-0

              sm:h-[155px]
              sm:w-[185px]

              md:h-[171px]
              md:w-[200px]
            "
          >
            <img
              src="/images/financing/beginning-farmer-programs/FFA-AdobeStock_178028122_Hero.jpg"
              alt="High school student plants seeds in planter containers"
              className="block h-full w-full object-cover"
            />
          </div>


          <div className="ml-[24px] sm:ml-[28px]">

            <h2
              className="
                font-display
                m-0
                font-[700]
                leading-[1.25]
                text-[#231f20]

                text-[25px]

                sm:text-[26px]

                md:text-[20px]
              "
            >
              FFA Student Scholarships
            </h2>

            <p
              className="
                m-0
                mt-[12px]
                max-w-[390px]
                text-[#231f20]

                text-[17px]
                leading-[1.55]

                md:text-[16px]
              "
            >
              Scholarships to support FFA students&apos; SAE projects.
            </p>

            <Link
              href="/about/community-support/Scholarships/FFA-Scholarship.html"
              className="
                mt-[20px]
                inline-flex
                items-center
                text-[16px]
                font-[700]
                text-[#496d83]
                hover:underline
              "
            >
              Learn more
              <span className="ml-[8px] text-[24px] leading-none">›</span>
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================================
          FARMSTART
      ========================================================= */}

      <section className="w-full bg-white">

        <div
          className="
            mx-auto
            grid
            max-w-[1600px]
            grid-cols-1
            items-center

            px-[23px]
            py-[65px]

            sm:px-[30px]

            md:grid-cols-2
            md:gap-[45px]
            md:px-[48px]
            md:py-[72px]

            lg:gap-[65px]
            lg:px-[68px]
            lg:py-[82px]
          "
        >

          <div className="flex justify-center md:justify-start">

            <img
              src="/images/financing/beginning-farmer-programs/FarmStart_logo.jpg"
              alt="FarmStart Seed Capital logo"
              className="
                block
                h-auto
                w-full
                max-w-[570px]
                object-contain
              "
            />

          </div>


          <div className="mt-[42px] md:mt-0">

            <h2
              className="
                font-display
                m-0
                max-w-[700px]
                font-[700]
                leading-[1.16]
                tracking-[-0.6px]
                text-[#4f832a]

                text-[36px]

                sm:text-[39px]

                md:text-[41px]

                lg:text-[45px]
              "
            >
              FarmStart Capital Investment
            </h2>

            <p
              className="
                m-0
                mt-[25px]
                max-w-[700px]
                text-[17px]
                leading-[1.7]

                lg:text-[18px]
              "
            >
              FarmStart is a Farm Funders program that makes working capital
              investments of up to $75,000 for startup farms and ag businesses
              with limited financial resources and showing promise of success.
            </p>

            <Link
              href="/financing/beginning-farmer-programs/farm-start"
              className="
                mt-[28px]
                inline-flex
                min-h-[51px]
                items-center
                justify-center
                bg-[#496d83]
                px-[23px]
                text-[16px]
                font-[700]
                text-white
                hover:opacity-90
              "
            >
              Learn About FarmStart
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================================
          YBSV
      ========================================================= */}

      <section className="w-full bg-white">

        <div
          className="
            mx-auto
            grid
            max-w-[1600px]
            grid-cols-1
            items-center

            px-[23px]
            py-[65px]

            sm:px-[30px]

            md:grid-cols-2
            md:gap-[45px]
            md:px-[48px]
            md:py-[72px]

            lg:gap-[65px]
            lg:px-[68px]
            lg:py-[82px]
          "
        >

          <div className="order-2 md:order-1">

            <h2
              className="
                font-display
                m-0
                max-w-[700px]
                font-[700]
                leading-[1.16]
                tracking-[-0.6px]
                text-[#4f832a]

                text-[36px]

                sm:text-[39px]

                md:text-[41px]

                lg:text-[45px]
              "
            >
              Young, Beginning, Small &amp; Veteran Farmer Incentives
            </h2>

            <p
              className="
                m-0
                mt-[25px]
                max-w-[700px]
                text-[17px]
                leading-[1.7]

                lg:text-[18px]
              "
            >
              Farm Funders’s Young, Beginning, Small and Veteran Farmer
              Incentive program (YBSV) is designed to help this growing
              customer segment get started in agriculture through special
              incentives to program participants.
            </p>

            <Link
              href="/FINANCING/Beginning-Farmer-Programs/Young-Beginning-Small-Veteran-Farmers.html"
              className="
                mt-[28px]
                inline-flex
                min-h-[51px]
                items-center
                justify-center
                bg-[#496d83]
                px-[23px]
                text-[16px]
                font-[700]
                text-white
                hover:opacity-90
              "
            >
              Explore Incentives
            </Link>

          </div>


          <div className="order-1 flex justify-center md:order-2">

            <img
              src="/images/financing/beginning-farmer-programs/Young Beginning Small  Veteranfarmercouple20211021220619utc.jpg"
              alt="Young man and woman growers in a greenhouse with heads of lettuce"
              className="
                block
                h-auto
                w-full
                max-w-[590px]
                object-contain
              "
            />

          </div>

        </div>

      </section>


      {/* =========================================================
          GENERATION NEXT
      ========================================================= */}

      <section className="w-full bg-white">

        <div
          className="
            mx-auto
            grid
            max-w-[1600px]
            grid-cols-1
            items-center

            px-[23px]
            py-[65px]

            sm:px-[30px]

            md:grid-cols-2
            md:gap-[45px]
            md:px-[48px]
            md:py-[72px]

            lg:gap-[65px]
            lg:px-[68px]
            lg:py-[82px]
          "
        >

          <div className="flex justify-center md:justify-start">

            <img
              src="/images/financing/beginning-farmer-programs/GenNext.jpg"
              alt="GenerationNext logo"
              className="
                block
                h-auto
                w-full
                max-w-[570px]
                object-contain
              "
            />

          </div>


          <div className="mt-[42px] md:mt-0">

            <h2
              className="
                font-display
                m-0
                max-w-[700px]
                font-[700]
                leading-[1.16]
                tracking-[-0.6px]
                text-[#4f832a]

                text-[36px]

                sm:text-[39px]

                md:text-[41px]

                lg:text-[45px]
              "
            >
              GenerationNext Seminar Series
            </h2>

            <p
              className="
                m-0
                mt-[25px]
                max-w-[700px]
                text-[17px]
                leading-[1.7]

                lg:text-[18px]
              "
            >
              GenerationNext is a series of seminars, hosted by Farm Funders,
              designed to advance your management skills and business
              knowledge. Each seminar includes group discussions, idea sharing
              and networking opportunities.
            </p>

            <Link
              href="/FINANCING/Beginning-Farmer-Programs/GenerationNext"
              className="
                mt-[28px]
                inline-flex
                min-h-[51px]
                items-center
                justify-center
                bg-[#496d83]
                px-[23px]
                text-[16px]
                font-[700]
                text-white
                hover:opacity-90
              "
            >
              GenerationNext
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================================
          HARVESTING A PROFIT
      ========================================================= */}

      <section className="w-full bg-[#f5f5f5]">

        <div
          className="
            mx-auto
            grid
            max-w-[1600px]
            grid-cols-1
            items-center

            px-[23px]
            py-[65px]

            sm:px-[30px]

            md:grid-cols-2
            md:gap-[45px]
            md:px-[48px]
            md:py-[72px]

            lg:gap-[65px]
            lg:px-[68px]
            lg:py-[82px]
          "
        >

          <div className="order-2 md:order-1">

            <h2
              className="
                font-display
                m-0
                max-w-[700px]
                font-[700]
                leading-[1.16]
                tracking-[-0.6px]
                text-[#4f832a]

                text-[36px]

                sm:text-[39px]

                md:text-[41px]

                lg:text-[45px]
              "
            >
              Harvesting a Profit
            </h2>

            <p
              className="
                m-0
                mt-[25px]
                max-w-[700px]
                text-[17px]
                leading-[1.7]

                lg:text-[18px]
              "
            >
              Harvesting a Profit is a “profitability guide” designed to help
              young farmers beginning a career in production agriculture. The
              guide provides financial management know-how for what’s needed to
              achieve a sustainable and profitable ag business over the long
              haul.
            </p>

            <Link
              href="/FINANCING/Beginning-Farmer-Programs/Harvesting-a-Profit.html"
              className="
                mt-[28px]
                inline-flex
                min-h-[51px]
                items-center
                justify-center
                bg-[#496d83]
                px-[23px]
                text-[16px]
                font-[700]
                text-white
                hover:opacity-90
              "
            >
              Get Your Guide
            </Link>

          </div>


          <div className="order-1 flex justify-center md:order-2">

            <img
              src="/images/financing/beginning-farmer-programs/Harvesting a Profit_Fresh Vegetables.jpg"
              alt="Collection of bright and fresh vegetables, including tomatoes, peppers, green onions, potatoes, carrots and more"
              className="
                block
                h-auto
                w-full
                max-w-[590px]
                object-contain
              "
            />

          </div>

        </div>

      </section>


      {/* =========================================================
          AGBIZINFO
      ========================================================= */}

      <section className="w-full bg-white">

        <div
          className="
            mx-auto
            grid
            max-w-[1600px]
            grid-cols-1
            items-center

            px-[23px]
            py-[65px]

            sm:px-[30px]

            md:grid-cols-2
            md:gap-[45px]
            md:px-[48px]
            md:py-[72px]

            lg:gap-[65px]
            lg:px-[68px]
            lg:py-[82px]
          "
        >

          <div className="flex justify-center md:justify-start">

            <img
              src="/images/financing/beginning-farmer-programs/AgBizInfo.jpg"
              alt="Young farmer and family with AgBizInfo logo"
              className="
                block
                h-auto
                w-full
                max-w-[570px]
                object-contain
              "
            />

          </div>


          <div className="mt-[42px] md:mt-0">

            <h2
              className="
                font-display
                m-0
                max-w-[700px]
                font-[700]
                leading-[1.16]
                tracking-[-0.6px]
                text-[#4f832a]

                text-[36px]

                sm:text-[39px]

                md:text-[41px]

                lg:text-[45px]
              "
            >
              Resources and Training for the Young, Beginning &amp; Small
              Farmer
            </h2>

            <p
              className="
                m-0
                mt-[25px]
                max-w-[700px]
                text-[17px]
                leading-[1.7]

                lg:text-[18px]
              "
            >
              Fam Credit East is a proud contributing partner of AgBizInfo, a
              comprehensive source of education and business resources for
              young, beginning and small farmers, and commercial fishermen in
              the United States. Whether you&apos;re just starting out or
              looking to expand, AgBizInfo offers the insights and support you
              need.
            </p>

            <a
              href="https://www.agbizinfo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-[28px]
                inline-flex
                min-h-[51px]
                items-center
                justify-center
                bg-[#496d83]
                px-[23px]
                text-[16px]
                font-[700]
                text-white
                hover:opacity-90
              "
            >
              AgBizInfo
              <span className="ml-[8px] text-[15px]">↗</span>
            </a>

          </div>

        </div>

      </section>


      {/* =========================================================
          QUESTIONS
      ========================================================= */}

      <section className="w-full bg-white">

        <div
          className="
            mx-auto
            flex
            max-w-[1600px]
            flex-col

            px-[23px]
            py-[60px]

            sm:px-[30px]
            sm:py-[65px]

            md:flex-row
            md:items-center
            md:justify-between
            md:px-[48px]
            md:py-[72px]

            lg:px-[68px]
            lg:py-[78px]
          "
        >

          <div>

            <h2
              className="
                font-display
                m-0
                font-[700]
                leading-[1.16]
                tracking-[-0.6px]
                text-[#4f832a]

                text-[36px]

                sm:text-[39px]

                md:text-[42px]

                lg:text-[45px]
              "
            >
              Have Additional Questions?
            </h2>

            <p
              className="
                m-0
                mt-[16px]
                text-[17px]
                leading-[1.65]

                lg:text-[18px]
              "
            >
              Let&apos;s get in touch!
            </p>

          </div>


          <Link
            href="/Contact"
            className="
              mt-[28px]
              inline-flex
              min-h-[51px]
              items-center
              justify-center
              self-start
              bg-[#496d83]
              px-[23px]
              text-[16px]
              font-[700]
              text-white

              md:mt-0
              md:self-auto
            "
          >
            Contact Us
          </Link>

        </div>

      </section>


      {/* =========================================================
          YOU MIGHT ALSO LIKE
      ========================================================= */}

      <section className="w-full bg-[#ecf1e4]">

        <div
          className="
            mx-auto
            max-w-[1600px]

            px-[23px]
            py-[50px]

            sm:px-[30px]
            sm:py-[58px]

            md:px-[48px]
            md:py-[65px]

            lg:px-[68px]
          "
        >

          <h2
            className="
              font-display
              m-0
              font-[700]
              leading-[1.16]
              tracking-[-0.5px]
              text-[#4f832a]

              text-[34px]

              sm:text-[38px]

              md:text-[42px]

              lg:text-[45px]
            "
          >
            You Might Also Like
          </h2>


          <div
            className="
              mt-[28px]
              grid
              grid-cols-1

              md:mt-[35px]
              md:grid-cols-3
            "
          >

            {RELATED_ARTICLES.map((article, index) => (
              <article
                key={article.title}
                className={`
                  py-[30px]

                  md:py-[5px]
                  md:px-[38px]

                  ${
                    index > 0
                      ? "border-t border-[#d4d8cf] md:border-l md:border-t-0"
                      : ""
                  }

                  ${index === 0 ? "md:pl-0" : ""}

                  ${
                    index === RELATED_ARTICLES.length - 1
                      ? "md:pr-0"
                      : ""
                  }
                `}
              >

                <Link
                  href={article.categoryHref}
                  className="
                    inline-block
                    bg-[#686868]
                    px-[10px]
                    py-[5px]
                    text-[11px]
                    font-[700]
                    uppercase
                    tracking-[0.3px]
                    text-white
                  "
                >
                  {article.category}
                </Link>


                <div className="mt-[25px]">

                  <Link
                    href={article.href}
                    className="
                      font-display
                      text-[20px]
                      font-[700]
                      leading-[1.32]
                      text-[#5a4400]
                      hover:underline

                      sm:text-[21px]
                    "
                  >
                    {article.title}
                    <span className="ml-[4px] text-[18px]">›</span>
                  </Link>

                </div>


                <p
                  className="
                    m-0
                    mt-[24px]
                    text-[11px]
                    font-[700]
                    uppercase
                    tracking-[0.4px]
                    text-[#686868]
                  "
                >
                  {article.date}
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          NEWSLETTER
      ========================================================= */}

      <section className="w-full bg-[#4f832a] text-white">

        <div
          className="
            mx-auto
            flex
            max-w-[1550px]
            flex-col
            items-center
            px-[23px]
            py-[55px]
            text-center

            sm:px-[30px]

            md:py-[65px]

            lg:px-[40px]
            lg:py-[70px]
          "
        >

          <h2
            className="
              font-display
              m-0
              font-[800]
              leading-[1.25]
              text-white

              text-[32px]

              sm:text-[36px]

              md:text-[40px]
            "
          >
            Sign up for our Today&apos;s Harvest Blog.
          </h2>


          <p
            className="
              m-0
              mt-[15px]
              text-[17px]
              leading-[1.6]
              text-white

              md:text-[18px]
            "
          >
            Get the latest blog articles delivered to your inbox.
          </p>


          <form
            className="
              mt-[28px]
              flex
              w-full
              max-w-[520px]
              flex-col
              gap-[10px]

              sm:flex-row
            "
          >

            <input
              type="email"
              required
              placeholder="email@address.com"
              aria-label="Email address"
              className="
                min-w-0
                flex-1
                rounded-[2px]
                border-0
                bg-white
                px-[16px]
                py-[12px]
                text-[17px]
                leading-[26px]
                text-[#231f20]
                outline-none
              "
            />

            <button
              type="submit"
              className="
                min-h-[48px]
                rounded-[3px]
                border-2
                border-white
                bg-[#4f832a]
                px-[20px]
                py-[10px]
                text-[16px]
                font-[700]
                leading-[20px]
                text-white
              "
            >
              Sign Up
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}

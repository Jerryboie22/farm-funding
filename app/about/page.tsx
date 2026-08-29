import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Farm Funders | Made in Agriculture",
  description:
    "Part of the Farm Credit System, Farm Funders serves the credit, risk management and financial services needs of Northeast agriculture.",
};

const FEATURES = [
  {
    title: "Who We Are",
    description:
      "Find out more about our financial cooperative and how we serve Northeast agriculture.",
    href: "/about/who-we-are.html",
    image:
      "/images/about/Who-We-Are_SpringPlanting_TheMillers_812_Overview-Card.jpg",
    alt: "Smiling Farm Funders customer in front of tractor after a hard day of planting",
  },
  {
    title: "Careers",
    description:
      "We offer careers in the areas of credit, customer service, records, taxes, consulting, appraisal and more.",
    href: "/about/Careers.html",
    image: "/images/about/Careers_Overview-Card.jpg",
    alt: "Farm Funders employees on site with a dairy farmer",
  },
  {
    title: "Community Support",
    description:
      "We are committed to supporting rural communities through grants, scholarships and a customer assistance program.",
    href: "/about/community-support.html",
    image:
      "/images/about/Community-Support_Volunteer-talks-to-large-crowd.jpg",
    alt: "Volunteer speaking to a crowd at a community ag event",
  },
  {
    title: "Newsroom",
    description:
      "Stay up to date on Farm Funders. Check out the latest news and our Financial Partner magazine.",
    href: "/about/NewsRoom.html",
    image: "/images/about/Newsroom_Farmer_Overview-Card.jpg",
    alt: "Northeastern farmer leaning on a fence post",
  },
  {
    title: "Leadership",
    description: "Learn more about Farm Funders governance.",
    href: "/about/Leadership.html",
    image: "/images/about/VoiceInOwnershipGraphic_Overview Card.png",
    alt: "Your Voice In Ownership logo",
  },
  {
    title: "Financial Reports",
    description:
      "See how our financial strength offers both stability and opportunity for those we serve.",
    href: "/about/financial-reports.html",
    image: "/images/about/Financial-Reports_Budgets2017_Overview-Card.jpg",
    alt: "Close-up of budget sheets, graphs and a calculator",
  },
  {
    title: "Cooperative Involvement",
    description:
      "As a cooperative owned by our customers, customer involvement is key to Farm Funders’s long-term success.",
    href: "/about/Cooperative-Involvement.html",
    image: "/images/about/Appreciation Sign copy_Overview Card.png",
    alt: "We appreciate you written on an event chalkboard sign",
  },
];

const NEWS = [
  {
    category: "Ag Economy",
    categoryHref:
      "/resources/Industry-Trends-and-Outlooks?category=ag-economy",
    title: "2025 Northeast Dairy Farm Summary & Mid-Year Outlook",
    href: "/resources/Industry-Trends-and-Outlooks/Reports/2025NEDairyFarmSummary2026MidYearOutlook",
    date: "July 10, 2026",
  },
  {
    category: "Crop Insurance",
    categoryHref: "/about/NewsRoom-2.html?category=Crop Insurance",
    title:
      "USDA Risk Management Agency Announces Emergency Claim Procedures for New York Apple Growers Following Spring Freeze",
    href: "/about/NewsRoom/press-releases/260708EmergencyClaimProceduresforNewYorkAppleGrowers.html",
    date: "July 8, 2026",
  },
  {
    category: "Public Policy",
    categoryHref: "/resources/todays-harvest-Blog?category=public-policy",
    title:
      "2026 Farm Bill Takes Shape: Comparing the House and Senate Proposals",
    href: "/resources/todays-harvest-Blog/260707_2026FarmBillTakesShape.html",
    date: "July 7, 2026",
  },
];

export default function AboutUsPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white text-[#333]">

            {/* =========================================================
          HERO
      ========================================================= */}
      <section className="w-full bg-[#f8f8f8]">
        <div className="mx-auto grid w-full max-w-[1632px] grid-cols-1 lg:grid-cols-2">

          <div className="flex items-center">
            <div className="w-full px-[24px] py-[50px] md:px-[40px] lg:px-[50px] lg:py-[60px]">
              <h1
                id="maincontent"
                className="font-['Montserrat-Bold'] text-[36px] leading-[1.2] text-[#4f832a] lg:text-[48px]"
              >
                About Us
              </h1>

              <p className="mt-[20px] max-w-[570px] font-['Barlow-Medium'] text-[23px] leading-[32px] text-[#231f20]">
                Part of the Farm Credit System, Farm Funding serves the
                credit, risk management and financial services needs of
                Northeast agriculture.
              </p>

              <Link
                href="/contact"
                className="mt-[38px] inline-flex min-h-[58px] items-center justify-center rounded-[4px] border-2 border-[#496d83] bg-[#496d83] px-[19px] py-[10px] font-['Montserrat-Bold'] text-[16px] leading-[1.2] text-white transition-colors duration-200 hover:bg-white hover:text-[#496d83]"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center px-0 pb-0 pt-[35px] lg:px-0">
            <Image
              src="/images/about/Hero_female-farmer.jpg"
              alt="New England farmer driving a tractor"
              width={900}
              height={380}
              priority
              className="block h-[303px] w-full object-cover md:h-[380px] lg:h-[380px]"
            />
          </div>
        </div>
      </section>


            {/* =========================================================
          ONE CONTINUOUS PALE-GREEN SECTION — holds BOTH
          "Learn more about Farm Funding" cards AND "Latest News"
      ========================================================= */}
      <section className="w-full bg-[#eef1e2]">
        <div className="mx-auto w-full max-w-[1500px] px-[5%] py-[60px] lg:py-[70px]">

          <h2 className="text-[34px] font-bold leading-[1.2] text-[#4f832a] md:text-[38px]">
            Learn more about Farm Funding
          </h2>

          {/* 7 bordered white cards: 4 across, then 3 centered */}
          <div className="mt-[30px] grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-12">
            {FEATURES.map((feature, index) => (
              <div
                key={feature.title}
                className={`flex flex-col border border-white bg-white lg:col-span-3 ${
                  index === 4 ? "lg:col-start-3" : ""
                }`}
              >
                {/* Image sits inside the white card so the white border
                    remains visible around the picture */}
                <Link
                  href={feature.href}
                  className="block px-[6px] pt-[6px]"
                >
                  <div className="relative h-[195px] w-full overflow-hidden bg-[#f2f2f2]">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                </Link>

                {/* White area underneath each picture */}
                <div className="flex flex-1 flex-col items-center bg-white px-[20px] pt-[20px] pb-[24px] text-center">
                  <Link
                    href={feature.href}
                    className="text-[21px] font-bold leading-[1.25] text-[#4f832a] hover:underline"
                  >
                    {feature.title}
                    <span className="ml-[3px]">›</span>
                  </Link>

                  <p className="mt-[12px] text-[15px] leading-[1.55] text-[#333]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>


          {/* =========================================================
              LATEST NEWS
          ========================================================= */}
          <h2 className="mt-[60px] text-[34px] font-bold leading-[1.2] text-[#4f832a] md:text-[38px]">
            Latest News
          </h2>

          <div className="mt-[30px] grid grid-cols-1 gap-x-[32px] gap-y-[32px] md:grid-cols-3">
            {NEWS.map((item) => (
              <article key={item.title}>
                <Link
                  href={item.categoryHref}
                  className="inline-flex bg-[#6b6b6b] px-[10px] py-[5px] text-[12px] font-bold uppercase tracking-[0.2px] text-white transition hover:bg-[#555]"
                >
                  {item.category}
                </Link>

                <Link
                  href={item.href}
                  className="mt-[22px] block text-[22px] font-bold leading-[1.4] text-[#765b00] hover:underline md:text-[25px]"
                >
                  {item.title}
                  <span className="ml-[5px]">›</span>
                </Link>

                <p className="mt-[20px] text-[13px] font-bold uppercase tracking-[0.35px] text-[#686868]">
                  {item.date}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================
          CTA — white background
      ========================================================= */}
      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-[1500px] flex-col px-[5%] py-[60px] md:flex-row md:items-center md:justify-between lg:min-h-[220px] lg:py-[55px]">

          <div>
            <h2 className="text-[44px] font-bold leading-[1.2] text-[#4f832a] md:text-[48px]">
              Have Additional Questions?
            </h2>

            <p className="mt-[14px] text-[17px] leading-[1.5] text-[#333]">
              Let&apos;s get in touch!
            </p>
          </div>

          <Link
            href="/contact"
            className="mt-[28px] inline-flex min-h-[48px] w-fit items-center justify-center bg-[#496d83] px-[24px] text-[15px] font-bold text-white transition-colors hover:bg-[#3e5e71] md:mt-0"
          >
            Contact Us
          </Link>

        </div>
      </section>

    </main>
  );
}
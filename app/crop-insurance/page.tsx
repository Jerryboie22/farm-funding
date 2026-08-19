import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Crop Growers Crop & Livestock Insurance – Farm Funders",
  description:
    "Our Crop Growers team of insurance specialists understands Northeast agriculture. We can help protect your crop and livestock investment.",
};

const OVERVIEW_CARDS = [
  {
    title: "Crop Insurance Products",
    description:
      "Learn about the different policy types and which is best for you.",
    href: "/crop-insurance/products",
    imagePath:
      "/images/crop-insurance/Cash Grain_shutterstock_1153070285.jpg",
    imageAlt: "Close-up of soybeans in sunlight",
  },
  {
    title: "Dairy & Livestock Insurance",
    description: "Protect your dairy and livestock revenue.",
    href: "/crop-insurance/dairy-livestock",
    imagePath: "/images/crop-insurance/Dairy_Farm Image.jpg",
    imageAlt: "A lineup of cows eating feed",
  },
  {
    title: "Insurance Resources",
    description:
      "Find market prices, insurance providers and additional information.",
    href: "/crop-insurance/resources",
    imagePath: "/images/crop-insurance/Insurance-Resources.jpg",
    imageAlt: "Tractor in field with row crop sprouting",
  },
];

const FOOTER_COLUMNS = [
  {
    title: "FINANCING",
    links: [
      ["Land Loans", "/financing/land-loans"],
      ["Rural Home Loans", "/financing/rural-home-loans"],
      ["Operating Loans", "/financing/operating-loans"],
      ["Facility Loans", "/financing/facility-loans"],
      ["Equipment Financing", "/financing/equipment-financing"],
      ["Leases", "/financing/leases"],
      ["Beginning Farmer Programs", "/financing/beginning-farmer-programs"],
    ],
  },
  {
    title: "SERVICES",
    links: [
      ["Tax Planning and Prep", "/services/tax-planning-and-prep"],
      ["Recordkeeping", "/services/recordkeeping"],
      ["Appraisals", "/services/appraisals"],
      ["Business Consulting", "/services/business-consulting"],
      ["Financial Benchmarking", "/services/financial-benchmarking"],
      ["Estate Planning", "/services/estate-planning"],
      ["Grant Writing", "/services/grant-writing"],
      ["Farm Credit Connect", "/services/farm-credit-connect"],
    ],
  },
  {
    title: "CROP INSURANCE",
    links: [
      ["Crop Insurance Products", "/crop-insurance/products"],
      [
        "Dairy & Livestock Insurance Products",
        "/crop-insurance/dairy-livestock",
      ],
      ["Insurance Resources", "/crop-insurance/resources"],
      ["Crop Insurance Agent Finder", "/crop-insurance/agent-finder"],
      ["File Notice of Loss", "/crop-insurance/notice-of-loss"],
      ["Non-Discrimination Statement", "/about/non-discrimination"],
    ],
  },
  {
    title: "INDUSTRIES",
    links: [
      ["Cash Grain", "/industries/cash-grain"],
      ["Dairy", "/industries/dairy"],
      ["Livestock/Equine", "/industries/livestock-equine"],
      ["Timber/Forestry", "/industries/timber-forestry"],
      ["Fruit/Winery", "/industries/fruit-winery"],
      ["Vegetables", "/industries/vegetables"],
      ["Fishing/Aquatic", "/industries/fishing-aquatic"],
      ["Greenhouse/Nursery", "/industries/greenhouse-nursery"],
      ["Maple", "/industries/maple"],
    ],
  },
  {
    title: "RESOURCES",
    links: [
      ["Today's Harvest Blog", "/resources/blog"],
      ["Industry Trends & Outlooks", "/resources/industry-trends"],
      ["Events & Webinars", "/resources/events"],
      ["Calculators", "/resources/calculators"],
      ["DTN Markets & Weather", "/resources/dtn"],
      ["Northeast Farm Fresh Guide", "/resources/farm-fresh-guide"],
      ["Calendar Photo Contest", "/resources/photo-contest"],
      ["Go To Assist", "/resources/go-to-assist"],
    ],
  },
  {
    title: "ABOUT",
    links: [
      ["Who We Are", "/about/who-we-are"],
      ["Leadership", "/about/leadership"],
      ["Cooperative Involvement", "/about/cooperative-involvement"],
      ["Newsroom", "/about/newsroom"],
      ["Financial Reports", "/about/financial-reports"],
      ["Community Support", "/about/community-support"],
      ["Information Security", "/about/information-security"],
      ["Careers", "/about/careers"],
    ],
  },
];

function ButtonLink({
  href,
  children,
  variant = "blue",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "blue" | "outline-white";
}) {
  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center justify-center rounded-[4px] border-2",
        "px-[19px] py-[10px]",
        "text-[16px] leading-[24px]",
        "font-bold",
        "transition-colors duration-200",
        variant === "blue"
          ? "border-[#496d83] bg-[#496d83] text-white hover:bg-white hover:text-[#496d83]"
          : "border-white bg-transparent text-white hover:bg-white hover:text-[#4f832a]",
      ].join(" ")}
      style={{ fontFamily: "Montserrat-Bold" }}
    >
      {children}
    </Link>
  );
}

export default function CropInsurancePage() {
  return (
    <main className="w-full overflow-hidden">
      {/* =========================================================
          HERO — white bg, text left / image right (stacks on mobile)
      ========================================================= */}
      <section className="w-full bg-white">
        <div className="mx-auto grid w-full max-w-[1140px] grid-cols-1 items-center gap-[30px] px-[15px] py-[50px] lg:grid-cols-2 lg:gap-[60px] lg:py-[85px]">
          {/* TEXT COLUMN */}
          <div className="flex flex-col items-start">
            <div className="relative h-[50px] w-[190px]">
              <Image
                src="/images/crop-insurance/CG_White_Web3_1.png"
                alt="Crop Growers logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>

            <h1
              className="mt-[18px] text-[36px] leading-[43.2px] text-[#4f832a] lg:text-[48px] lg:leading-[57.6px]"
              style={{ fontFamily: "Montserrat-Bold" }}
            >
              Crop Insurance by Crop Growers
            </h1>

            <p
              className="mt-[20px] max-w-[560px] text-[16px] leading-[26px] text-[#231f20] lg:text-[18px] lg:leading-[28.8px]"
              style={{ fontFamily: "Barlow-Medium" }}
            >
              Crop Growers is the crop insurance team at Farm Funders. That
              means along with knowing agriculture, we understand your
              financial risks and their impact on your operation. More than
              just protecting your crops and livestock, we work to protect
              your livelihood.
            </p>

            <div className="mt-[26px]">
              <ButtonLink href="/crop-insurance/agent-finder">
                Find an Agent
              </ButtonLink>
            </div>
          </div>

          {/* IMAGE COLUMN */}
          <div className="relative h-[260px] w-full overflow-hidden md:h-[420px] lg:h-[560px]">
            <Image
              src="/images/crop-insurance/Crop  Livestock Insuranceshutterstock55253641.jpg"
              alt="Hands holding crop seedling"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          RISK MANAGEMENT HEADING + OVERVIEW CARDS
          (single continuous cream section — image lives in hero, not here)
      ========================================================= */}
      <section className="w-full bg-[#ecf1e4] px-[15px] py-[50px] lg:py-[80px]">
        <div className="mx-auto w-full max-w-[1140px]">
          <h2
            className="max-w-[900px] text-[32px] leading-[38px] text-[#4f832a] lg:text-[40px] lg:leading-[50.2px]"
            style={{ fontFamily: "Montserrat-Bold" }}
          >
            Our Crop Growers agents help you make the best risk management
            decisions to protect your operation and family&apos;s future.
          </h2>

          <div className="mt-[45px] grid grid-cols-1 gap-y-[45px] md:grid-cols-3 md:gap-x-[30px] md:gap-y-[30px]">
            {OVERVIEW_CARDS.map((card) => (
              <article key={card.href} className="flex flex-col bg-white">
                <div className="relative h-[158px] w-full overflow-hidden md:h-[129px] lg:h-[158px]">
                  <Image
                    src={card.imagePath}
                    alt={card.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-[24px]">
                  <Link
                    href={card.href}
                    className="text-[22px] leading-[32px] text-[#5a4400] hover:underline"
                    style={{ fontFamily: "Montserrat-Bold" }}
                  >
                    {card.title} &gt;
                  </Link>

                  <p
                    className="mt-[10px] text-[18px] leading-[28.8px] text-[#231f20]"
                    style={{ fontFamily: "Barlow-Medium" }}
                  >
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT CROP GROWERS — solid green, white text, outline button
      ========================================================= */}
      <section className="w-full bg-[#4f832a] px-[15px] py-[50px] text-center lg:py-[100px]">
        <div className="mx-auto max-w-[760px]">
          <h2
            className="text-[32px] leading-[38px] text-white lg:text-[40px] lg:leading-[50.2px]"
            style={{ fontFamily: "Montserrat-Bold" }}
          >
            Want to talk to Crop Growers?
          </h2>

          <p
            className="mt-[20px] text-[18px] leading-[28.8px] text-white lg:text-[20px] lg:leading-[32px]"
            style={{ fontFamily: "Barlow-Medium" }}
          >
            Not sure where to start? Let our team of crop insurance
            specialists answer any questions and find the coverage that fits
            your operation. Contact the Crop Growers Service Center at{" "}
            <a href="tel:8002347012" className="underline">
              800-234-7012
            </a>{" "}
            or submit an email inquiry by clicking below.
          </p>

          <div className="mt-[30px]">
            <ButtonLink href="/contact" variant="outline-white">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* =========================================================
          BENEFITS + INDUSTRIES — both rows share white bg,
          alternating text/image sides (stacks image-below-text on mobile)
      ========================================================= */}
      <section className="w-full bg-white px-[15px] py-[50px] lg:py-[100px]">
        <div className="mx-auto w-full max-w-[1140px]">
          {/* ROW 1: text left, image right */}
          <div className="grid grid-cols-1 items-center gap-[30px] lg:grid-cols-2 lg:gap-[60px]">
            <div>
              <h2
                className="text-[28px] leading-[34px] text-[#4f832a] lg:text-[34px] lg:leading-[46px]"
                style={{ fontFamily: "Montserrat-Bold" }}
              >
                Beginning/Veteran Farmer &amp; Rancher Benefits
              </h2>

              <p
                className="mt-[18px] text-[16px] leading-[26px] text-[#231f20] lg:text-[18px] lg:leading-[28.8px]"
                style={{ fontFamily: "Barlow-Medium" }}
              >
                Beginning and veteran farmers are eligible for special rules
                and provisions under the federal crop insurance program. Some
                of the benefits include exemption from paying the
                administrative fee for catastrophic and additional coverage
                level policies, additional premium subsidy resulting in lower
                grower premium, and other policy adjustments. There are
                specific qualification requirements for each program.
              </p>

              <div className="mt-[20px]">
                <ButtonLink href="/crop-insurance/resources/beginning-farmer-rancher-benefits">
                  Learn More
                </ButtonLink>
              </div>
            </div>

            <div className="relative h-[260px] w-full overflow-hidden md:h-[380px] lg:h-[440px]">
              <Image
                src="/images/crop-insurance/Beginning-Veteran-Farmer.jpg"
                alt="Young woman farmer in field during harvest"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* ROW 2: image left, text right (mobile: image still first) */}
          <div className="mt-[60px] grid grid-cols-1 items-center gap-[30px] lg:mt-[80px] lg:grid-cols-2 lg:gap-[60px]">
            <div className="relative order-1 h-[220px] w-full overflow-hidden md:h-[320px] lg:h-[380px]">
              <Image
                src="/images/crop-insurance/Industries_cran.jpg"
                alt="Cranberry bog during harvest"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-2">
              <h2
                className="text-[28px] leading-[34px] text-[#4f832a] lg:text-[34px] lg:leading-[46px]"
                style={{ fontFamily: "Montserrat-Bold" }}
              >
                Industries We Serve
              </h2>

              <p
                className="mt-[18px] text-[16px] leading-[26px] text-[#231f20] lg:text-[18px] lg:leading-[28.8px]"
                style={{ fontFamily: "Barlow-Medium" }}
              >
                Crop Growers insurance works with crop producers, fruit and
                vegetable growers, dairy farmers, livestock producers and
                more.
              </p>

              <div className="mt-[20px]">
                <ButtonLink href="/industries">Visit Industries</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          NOTICE OF LOSS — solid green, white text, outline button
          (already matched the live site — unchanged)
      ========================================================= */}
      <section className="w-full bg-[#4f832a] px-[15px] py-[50px] text-center text-white lg:py-[100px]">
        <div className="mx-auto max-w-[820px]">
          <h2
            className="text-[32px] leading-[38px] text-white lg:text-[40px] lg:leading-[50.2px]"
            style={{ fontFamily: "Montserrat-Bold" }}
          >
            File a Crop Insurance Notice of Loss
          </h2>

          <p
            className="mt-[20px] text-[16px] leading-[26px] text-white lg:text-[18px] lg:leading-[28.8px]"
            style={{ fontFamily: "Barlow-Medium" }}
          >
            Crop Growers crop insurance policyholders may electronically
            submit a notice of loss. If an adjuster has not been in contact
            within two business days, call the Crop Growers Service Center at
            800-234-7012 immediately.
          </p>

          <div className="mt-[26px]">
            <ButtonLink
              href="/crop-insurance/notice-of-loss"
              variant="outline-white"
            >
              File a Notice of Loss
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}

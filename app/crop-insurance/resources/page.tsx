import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Insurance Resources | Farm Funders",
  description:
    "Find market prices, insurance providers and additional crop insurance resources.",
};

const RESOURCES = [
  {
    title: "Market Prices",
    description:
      "Track commodity futures and local cash prices that factor into your coverage and revenue guarantees.",
  },
  {
    title: "Important Dates",
    description:
      "Sales closing dates, production reporting deadlines, and acreage reporting dates by commodity.",
  },
  {
    title: "Beginning & Veteran Farmer Benefits",
    description:
      "Special rules, fee waivers, and additional premium subsidies available to qualifying producers.",
  },
  {
    title: "Frequently Asked Questions",
    description:
      "Answers to common questions about coverage, claims, and how federal crop insurance works.",
  },
];

export default function ResourcesPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      {/* HERO */}
      <section className="w-full bg-forest">
        <div className="px-[24px] pt-[40px] pb-[32px] md:px-[67px] md:pt-[74px] md:pb-[52px]">
          <h1
            className="text-[32px] leading-[38px] text-white md:text-[50px] md:leading-[60px]"
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
          >
            Insurance Resources
          </h1>

          <p
            className="mt-[29px] max-w-full text-[17px] leading-[28px] text-white md:max-w-[1490px] md:text-[20px] md:leading-[34px]"
            style={{ fontFamily: "var(--font-barlow)", fontWeight: 500 }}
          >
            Market prices, key dates, and other tools to help you stay ahead
            of your crop insurance decisions.
          </p>
        </div>
      </section>

      {/* IMAGE */}
      <section className="w-full flex justify-center">
        <div className="relative h-[260px] w-full md:h-[420px]">
          <Image
            src="/images/crop-insurance/Insurance-Resources.jpg"
            alt="Tractor working in a crop field"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* RESOURCES */}
      <section className="w-full bg-white px-[24px] pt-[64px] md:px-[53px] md:pt-[108px]">
        <h2
          className="text-[32px] leading-[38px] text-forest md:text-[42px] md:leading-[51px]"
          style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
        >
          Where to Start
        </h2>

        <div className="mt-[31px] grid grid-cols-1 gap-[28px] md:grid-cols-2 md:gap-[30px]">
          {RESOURCES.map((resource) => (
            <div key={resource.title} className="border border-[#d9d9d9] p-[24px]">
              <h3
                className="text-[22px] leading-[28px] text-[#231f20]"
                style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
              >
                {resource.title}
              </h3>
              <p
                className="mt-[12px] text-[16px] leading-[24px] text-charcoal"
                style={{ fontFamily: "var(--font-barlow)", fontWeight: 500 }}
              >
                {resource.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="w-full bg-white px-[24px] pt-[64px] pb-[64px] md:px-[95px] md:pt-[90px] md:pb-[130px]">
        <div className="flex flex-col gap-[24px] md:flex-row md:items-start md:justify-between md:gap-0">
          <div>
            <h2
              className="text-[32px] leading-[38px] text-forest md:text-[42px] md:leading-[51px]"
              style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
            >
              Still have questions?
            </h2>
            <p
              className="mt-[24px] text-[18px] leading-[26px] text-[#231f20] md:mt-[42px] md:text-[20px] md:leading-[30px]"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 500 }}
            >
              Our specialists are ready to help you find the right coverage.
            </p>
          </div>

          <div className="md:pt-[8px]">
            <Link
              href="/contact"
              className="inline-flex h-[46px] min-w-[144px] items-center justify-center rounded-[4px] bg-clay px-[22px] text-[17px] leading-[24px] text-white transition hover:bg-clay-dark"
              style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

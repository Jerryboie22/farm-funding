import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Dairy & Livestock Insurance | Farm Funders",
  description:
    "Protect your dairy and livestock revenue with coverage tailored to Northeast operations.",
};

const COVERAGE_OPTIONS = [
  {
    title: "Dairy Revenue Protection",
    description:
      "Guards against a drop in milk revenue, so a swing in price or production doesn't put your operation at risk.",
  },
  {
    title: "Livestock Risk Protection",
    description:
      "Locks in a floor price for cattle and swine, protecting your herd's value against sudden market declines.",
  },
  {
    title: "Livestock Gross Margin",
    description:
      "Covers the gap between what you earn and what you spend on feed, so rising input costs don't erase your margin.",
  },
];

export default function DairyLivestockPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      {/* HERO */}
      <section className="w-full bg-forest">
        <div className="px-[24px] pt-[40px] pb-[32px] md:px-[67px] md:pt-[74px] md:pb-[52px]">
          <h1
            className="text-[32px] leading-[38px] text-white md:text-[50px] md:leading-[60px]"
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
          >
            Dairy &amp; Livestock Insurance
          </h1>

          <p
            className="mt-[29px] max-w-full text-[17px] leading-[28px] text-white md:max-w-[1490px] md:text-[20px] md:leading-[34px]"
            style={{ fontFamily: "var(--font-barlow)", fontWeight: 500 }}
          >
            Dairy and livestock producers face price swings and rising feed
            costs every season. Our specialists build coverage around your
            herd and your operation, not a one-size-fits-all policy.
          </p>
        </div>
      </section>

      {/* IMAGE + INTRO */}
      <section className="w-full bg-white px-[24px] pt-[64px] md:px-[53px] md:pt-[108px]">
        <div className="grid grid-cols-1 gap-[32px] md:grid-cols-2 md:gap-[60px] md:items-center">
          <div className="relative h-[240px] w-full overflow-hidden md:h-[360px]">
            <Image
              src="/images/crop-insurance/Dairy_Farm Image.jpg"
              alt="Dairy cattle in a barn"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <h2
              className="text-[32px] leading-[38px] text-forest md:text-[42px] md:leading-[51px]"
              style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
            >
              Coverage built for the Northeast
            </h2>
            <p
              className="mt-[20px] text-[16px] leading-[24px] text-charcoal md:text-[18px] md:leading-[27px]"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 500 }}
            >
              Every dairy and livestock operation carries a different mix of
              risk. Our agents walk through your production numbers and help
              you choose a plan that fits the size and shape of your
              business, not a generic template.
            </p>
          </div>
        </div>
      </section>

      {/* COVERAGE OPTIONS */}
      <section className="w-full bg-white px-[24px] pt-[64px] md:px-[53px] md:pt-[90px]">
        <h2
          className="text-[32px] leading-[38px] text-forest md:text-[42px] md:leading-[51px]"
          style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
        >
          Ways We Help You Manage Risk
        </h2>

        <div className="mt-[32px] grid grid-cols-1 gap-y-[32px] md:grid-cols-3 md:gap-x-[30px] md:gap-y-0">
          {COVERAGE_OPTIONS.map((option) => (
            <div key={option.title} className="border border-[#d9d9d9] p-[24px]">
              <h3
                className="text-[22px] leading-[28px] text-[#231f20]"
                style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
              >
                {option.title}
              </h3>
              <p
                className="mt-[12px] text-[16px] leading-[24px] text-charcoal"
                style={{ fontFamily: "var(--font-barlow)", fontWeight: 500 }}
              >
                {option.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="w-full bg-forest mt-[64px] md:mt-[90px]">
        <div className="px-[24px] py-[64px] text-center md:px-[67px] md:py-[108px]">
          <h2
            className="text-[32px] leading-[38px] text-white md:text-[44px] md:leading-[1.2]"
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
          >
            Ready to talk dairy and livestock coverage?
          </h2>
          <p
            className="mx-auto mt-[24px] max-w-[900px] text-[17px] leading-[28px] text-white md:text-[18px]"
            style={{ fontFamily: "var(--font-barlow)", fontWeight: 500 }}
          >
            Find your local agent or reach the Crop Growers Service Center at
            800-234-7012.
          </p>
          <div className="mt-[32px] flex justify-center">
            <Link
              href="/crop-insurance/agent-finder"
              className="inline-flex h-[46px] min-w-[144px] items-center justify-center rounded-[4px] border-2 border-white bg-transparent px-[22px] text-[17px] leading-[24px] text-white transition hover:bg-white hover:text-forest"
              style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
            >
              Find an Agent
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

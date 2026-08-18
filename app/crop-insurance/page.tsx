import Link from "next/link";
import AssetSlot from "@/components/AssetSlot";

export const metadata = {
  title: "Crop Growers Crop & Livestock Insurance | Farm Funding",
  description:
    "Our Crop Growers team of insurance specialists understands Northeast agriculture. We can help protect your crop and livestock investment.",
};

const OVERVIEW_CARDS = [
  {
    title: "Crop Insurance Products",
    description: "Learn about the different policy types and which is best for you.",
    href: "/crop-insurance/products",
    imageLabel: "Close-up of soybeans in sunlight",
    imagePath: "/images/crop-insurance/soybeans-sunlight.jpg",
  },
  {
    title: "Dairy & Livestock Insurance",
    description: "Protect your dairy and livestock revenue.",
    href: "/crop-insurance/dairy-livestock",
    imageLabel: "A lineup of cows eating feed",
    imagePath: "/images/crop-insurance/cows-feeding.jpg",
  },
  {
    title: "Insurance Resources",
    description: "Find market prices, insurance providers and additional information.",
    href: "/crop-insurance/resources",
    imageLabel: "Tractor in field with row crop sprouting",
    imagePath: "/images/crop-insurance/tractor-row-crop.jpg",
  },
];

export default function CropInsurancePage() {
  return (
    <>
      {/* =========================================================
          HERO — matches .hero3 (bg-dark-green variant) treatment:
          logo + heading + subhead + CTA, centered content column.
          hero3 img heights: 303px / 380px(768+) / 438px(992+)
      ========================================================= */}
      <section className="hero3 w-full bg-[#4f832a] py-[50px] md:py-[50px] lg:py-[85px]">
        <div className="max-w-[1140px] mx-auto px-[15px]">
          <div className="flex items-center gap-4 flex-wrap">
            <AssetSlot
              label="Crop Growers logo"
              expectedPath="/images/crop-insurance/crop-growers-logo.png"
              className="h-[50px] w-[190px] shrink-0 hero-logo-white"
            />
            <h1
              className="text-[36px] leading-[43.2px] lg:text-[48px] lg:leading-[57.6px] text-[#ecf1e4]"
              style={{ fontFamily: "Montserrat-Bold" }}
            >
              Crop Insurance by Crop Growers
            </h1>
          </div>

          <p
            className="hero2-subhead mt-[20px] max-w-[720px] text-[16px] leading-[26px] lg:text-[20px] lg:leading-[32px] text-white"
            style={{ fontFamily: "Barlow-Medium" }}
          >
            Crop Growers is the crop insurance team at Farm Funding. That
            means along with knowing agriculture, we understand your
            financial risks and their impact on your operation. More than
            just protecting your crops and livestock, we work to protect
            your livelihood.
          </p>

          <Link
            href="/crop-insurance/agent-finder"
            className="custom-CTA-dark inline-flex mt-[26px] rounded-[4px] border-2 border-white px-[19px] py-[10px] text-[16px] text-white"
            style={{ fontFamily: "Montserrat-Bold" }}
          >
            Find an Agent
          </Link>
        </div>
      </section>

      {/* =========================================================
          FEATURE — risk-management image + heading
          (matches .featured-block / .hero-comp image ratio:
          303 / 500(768+) / 645(992+), object-fit cover)
      ========================================================= */}
      <section className="featured-green w-full bg-[#ecf1e4]">
        <div className="max-w-[1140px] mx-auto px-[15px] py-[50px] lg:py-[100px]">
          <AssetSlot
            label="Hands holding crop seedling"
            expectedPath="/images/crop-insurance/hands-seedling.jpg"
            className="w-full h-[303px] md:h-[500px] lg:h-[645px] object-cover"
          />

          <h2
            className="mt-[30px] max-w-[820px] text-[32px] leading-[38px] lg:text-[40px] lg:leading-[50.2px] text-[#231f20]"
            style={{ fontFamily: "Montserrat-Bold" }}
          >
            Our Crop Growers agents help you make the best risk management
            decisions to protect your operation and family&apos;s future.
          </h2>
        </div>
      </section>

      {/* =========================================================
          OVERVIEW CARDS — matches .overview-cards exactly:
          bg #ecf1e4, pt-50/pb-20, img h158(576+)/h129(768)/h158(992+),
          title color #5a4400 centered, h5-primary Montserrat-Bold
          22px/32px, body Barlow-Medium 18px/28.8px centered
      ========================================================= */}
      <section className="overview-cards w-full bg-[#ecf1e4] pt-[50px] pb-[20px]">
        <div className="max-w-[1140px] mx-auto px-[15px] grid grid-cols-1 md:grid-cols-3 gap-x-[30px] gap-y-[30px]">
          {OVERVIEW_CARDS.map((card) => (
            <div key={card.href} className="flex flex-col text-center">
              <AssetSlot
                label={card.imageLabel}
                expectedPath={card.imagePath}
                className="w-full h-[158px] md:h-[129px] lg:h-[158px] object-cover"
              />

              <Link
                href={card.href}
                className="h5-primary mt-0 pt-[20px] pb-[20px] text-[22px] leading-[32px] text-[#5a4400] hover:underline"
                style={{ fontFamily: "Montserrat-Bold" }}
              >
                {card.title}
              </Link>

              <p
                className="text-[18px] leading-[28.8px] text-[#231f20]"
                style={{ fontFamily: "Barlow-Medium" }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          WANT TO TALK TO CROP GROWERS?
          matches .basic-centered.bg-grey: h2 green #4f832a,
          hero-subhead #231f20 20px/32px, CTA .custom-CTA-dark
          (blue bg #496d83, border 2px solid #496d83, white text)
      ========================================================= */}
      <section className="basic-centered bg-grey w-full bg-[#f8f8f8] px-[15px] py-[50px] lg:py-[100px] text-center">
        <div className="max-w-[720px] mx-auto">
          <h2
            className="text-[32px] leading-[38px] lg:text-[40px] lg:leading-[50.2px] text-[#4f832a]"
            style={{ fontFamily: "Montserrat-Bold" }}
          >
            Want to talk to Crop Growers?
          </h2>

          <p
            className="hero-subhead mt-[20px] text-[20px] leading-[32px] text-[#231f20]"
            style={{ fontFamily: "Barlow-Medium" }}
          >
            Not sure where to start? Let our team of crop insurance
            specialists answer any questions and find the coverage that fits
            your operation.
          </p>

          <p
            className="hero-subhead mt-[14px] text-[20px] leading-[32px] text-[#231f20]"
            style={{ fontFamily: "Barlow-Medium" }}
          >
            Contact the Crop Growers Service Center at{" "}
            <a href="tel:8002347012" className="text-[#496d83] underline">
              800-234-7012
            </a>{" "}
            or submit an email inquiry by clicking below.
          </p>

          <Link
            href="/contact"
            className="custom-CTA-dark inline-flex mt-[26px] rounded-[4px] border-2 border-[#496d83] bg-[#496d83] px-[19px] py-[10px] text-[16px] text-white hover:bg-white hover:text-[#496d83]"
            style={{ fontFamily: "Montserrat-Bold" }}
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* =========================================================
          BEGINNING/VETERAN FARMER BENEFITS  +  INDUSTRIES WE SERVE
          Reference groups these two blocks with a stacked image
          column (per the scraped page order). Using col-header /
          right-block text styling: h2-primary green, body #231f20
          18px/28.8px Barlow-Medium.
          NOTE: I haven't confirmed the exact desktop column split
          against a live screenshot — worth checking against the
          real page before treating this 2-col layout as final.
      ========================================================= */}
      <section className="w-full bg-white px-[15px] py-[50px] lg:py-[100px]">
        <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-[50px] gap-y-[40px]">
          <div className="flex flex-col gap-[40px]">
            <div>
              <h2
                className="text-[28px] leading-[34px] lg:text-[34px] lg:leading-[46px] text-[#231f20]"
                style={{ fontFamily: "Montserrat-SemiBold" }}
              >
                Beginning/Veteran Farmer &amp; Rancher Benefits
              </h2>

              <p
                className="mt-[18px] text-[16px] leading-[26px] lg:text-[18px] lg:leading-[28.8px] text-[#231f20]"
                style={{ fontFamily: "Barlow-Medium" }}
              >
                Beginning and veteran farmers are eligible for special rules
                and provisions under the federal crop insurance program. Some
                of the benefits include exemption from paying the
                administrative fee for catastrophic and additional coverage
                level policies, additional premium subsidy resulting in
                lower grower premium, and other policy adjustments. There
                are specific qualification requirements for each program.
              </p>

              <Link
                href="/crop-insurance/resources"
                className="custom-CTA-dark inline-flex mt-[20px] rounded-[4px] border-2 border-[#496d83] bg-[#496d83] px-[19px] py-[10px] text-[16px] text-white hover:bg-white hover:text-[#496d83]"
                style={{ fontFamily: "Montserrat-Bold" }}
              >
                Learn More
              </Link>
            </div>

            <div>
              <h2
                className="text-[28px] leading-[34px] lg:text-[34px] lg:leading-[46px] text-[#231f20]"
                style={{ fontFamily: "Montserrat-SemiBold" }}
              >
                Industries We Serve
              </h2>

              <p
                className="mt-[18px] text-[16px] leading-[26px] lg:text-[18px] lg:leading-[28.8px] text-[#231f20]"
                style={{ fontFamily: "Barlow-Medium" }}
              >
                Crop Growers insurance works with crop producers, fruit and
                vegetable growers, dairy farmers, livestock producers and
                more.
              </p>

              <Link
                href="/industries"
                className="custom-CTA-dark inline-flex mt-[20px] rounded-[4px] border-2 border-[#496d83] bg-[#496d83] px-[19px] py-[10px] text-[16px] text-white hover:bg-white hover:text-[#496d83]"
                style={{ fontFamily: "Montserrat-Bold" }}
              >
                Visit Industries
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-[24px]">
            <AssetSlot
              label="Young woman farmer in field during harvest"
              expectedPath="/images/crop-insurance/young-woman-farmer.jpg"
              className="w-full h-[220px] lg:h-[280px] object-cover"
            />
            <AssetSlot
              label="Cranberry bog during harvest"
              expectedPath="/images/crop-insurance/cranberry-bog.jpg"
              className="w-full h-[180px] lg:h-[220px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          FILE A CROP INSURANCE NOTICE OF LOSS
          matches .cta3-download / .newsletter pattern:
          bg #4f832a, white text, custom-CTA-dark (white border) CTA
      ========================================================= */}
      <section className="cta3-download w-full bg-[#4f832a] text-white text-center px-[15px] py-[50px] lg:py-[100px]">
        <div className="max-w-[700px] mx-auto">
          <h2
            className="text-[32px] leading-[38px] lg:text-[40px] lg:leading-[50.2px] text-white"
            style={{ fontFamily: "Montserrat-Bold" }}
          >
            File a Crop Insurance Notice of Loss
          </h2>

          <p
            className="mt-[20px] text-[16px] leading-[26px] lg:text-[18px] lg:leading-[28.8px] text-white"
            style={{ fontFamily: "Barlow-Medium" }}
          >
            Crop Growers crop insurance policyholders may electronically
            submit a notice of loss. If an adjuster has not been in contact
            within two business days, call the Crop Growers Service Center
            at 800-234-7012 immediately.
          </p>

          <Link
            href="/crop-insurance/notice-of-loss"
            className="custom-CTA-dark inline-flex mt-[26px] rounded-[4px] border-2 border-white px-[19px] py-[10px] text-[16px] text-white hover:bg-white hover:text-[#4f832a]"
            style={{ fontFamily: "Montserrat-Bold" }}
          >
            File a Notice of Loss
          </Link>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";

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
    imageAlt: "Close-up of soybeans in sunlight",
    imagePath: "/images/crop-insurance/Cash Grain_shutterstock_1153070285.jpg",
  },
  {
    title: "Dairy & Livestock Insurance",
    description: "Protect your dairy and livestock revenue.",
    href: "/crop-insurance/dairy-livestock",
    imageAlt: "A lineup of cows eating feed",
    imagePath: "/images/crop-insurance/Dairy_Farm Image.jpg",
  },
  {
    title: "Insurance Resources",
    description: "Find market prices, insurance providers and additional information.",
    href: "/crop-insurance/resources",
    imageAlt: "Tractor in field with row crop sprouting",
    imagePath: "/images/crop-insurance/Insurance-Resources.jpg",
  },
];

export default function CropInsurancePage() {
  return (
    <>
      {/* =========================================================
          HERO — white bg, two-column: text (constrained, left)
          + image bleeding to the right edge of the viewport.
          Mobile: text stacks above image, full width.
      ========================================================= */}
      <section className="w-full bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="px-[15px] lg:pl-[60px] lg:pr-[40px] py-[40px] lg:py-0 max-w-[600px]">
            <div className="relative h-[46px] w-[190px]">
              <Image
                src="/images/crop-insurance/crop-growers-logo.png"
                alt="Crop Growers logo"
                fill
                className="object-contain object-left"
              />
            </div>

            <h1
              className="mt-[20px] text-[40px] leading-[46px] lg:text-[52px] lg:leading-[58px] text-[#4f832a]"
              style={{ fontFamily: "Montserrat-Bold" }}
            >
              Crop Insurance by Crop Growers
            </h1>

            <p
              className="mt-[24px] text-[17px] leading-[27px] text-[#231f20]"
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
              className="inline-flex mt-[28px] rounded-[4px] bg-[#496d83] px-[24px] py-[12px] text-[16px] text-white hover:opacity-90 transition-opacity"
              style={{ fontFamily: "Montserrat-Bold" }}
            >
              Find an Agent
            </Link>
          </div>

          <div className="relative w-full h-[300px] lg:h-[560px]">
            <Image
              src="/images/crop-insurance/Crop  Livestock Insuranceshutterstock55253641.jpg"
              alt="Hands holding crop seedling"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURE HEADING + 3 CARDS — bg pale green (#ecf1e4),
          heading left-aligned above, white boxed cards below with
          centered image/title/description.
      ========================================================= */}
      <section className="w-full bg-[#ecf1e4] px-[15px] py-[50px] lg:py-[70px]">
        <div className="max-w-[1140px] mx-auto">
          <h2
            className="max-w-[900px] text-[30px] leading-[36px] lg:text-[40px] lg:leading-[48px] text-[#4f832a]"
            style={{ fontFamily: "Montserrat-Bold" }}
          >
            Our Crop Growers agents help you make the best risk management
            decisions to protect your operation and family&apos;s future.
          </h2>

          <div className="mt-[40px] grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            {OVERVIEW_CARDS.map((card) => (
              <div
                key={card.href}
                className="flex flex-col bg-white shadow-sm overflow-hidden"
              >
                <div className="relative w-full h-[180px]">
                  <Image
                    src={card.imagePath}
                    alt={card.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="px-[24px] py-[24px] text-center flex flex-col items-center">
                  <Link
                    href={card.href}
                    className="text-[20px] leading-[26px] text-[#5a4400] hover:underline"
                    style={{ fontFamily: "Montserrat-Bold" }}
                  >
                    {card.title} &rsaquo;
                  </Link>

                  <p
                    className="mt-[12px] text-[16px] leading-[24px] text-[#231f20]"
                    style={{ fontFamily: "Barlow-Medium" }}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WANT TO TALK TO CROP GROWERS? — dark green bg, centered,
          white heading + white body text, white-outline CTA.
      ========================================================= */}
      <section className="w-full bg-[#4f832a] text-center px-[15px] py-[60px] lg:py-[90px]">
        <div className="max-w-[820px] mx-auto">
          <h2
            className="text-[32px] leading-[38px] lg:text-[40px] lg:leading-[48px] text-white"
            style={{ fontFamily: "Montserrat-Bold" }}
          >
            Want to talk to Crop Growers?
          </h2>

          <p
            className="mt-[24px] text-[18px] leading-[28px] text-white"
            style={{ fontFamily: "Barlow-Medium" }}
          >
            Not sure where to start? Let our team of crop insurance
            specialists answer any questions and find the coverage that fits
            your operation.
          </p>

          <p
            className="mt-[10px] text-[18px] leading-[28px] text-white"
            style={{ fontFamily: "Barlow-Medium" }}
          >
            Contact the Crop Growers Service Center at 800-234-7012 or submit
            an email inquiry by clicking below.
          </p>

          <Link
            href="/contact"
            className="inline-flex mt-[28px] rounded-[4px] border-2 border-white px-[24px] py-[12px] text-[16px] text-white hover:bg-white hover:text-[#4f832a] transition-colors"
            style={{ fontFamily: "Montserrat-Bold" }}
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* =========================================================
          BEGINNING/VETERAN FARMER BENEFITS — white bg, two-col:
          text LEFT / image RIGHT
      ========================================================= */}
      <section className="w-full bg-white">
        <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[40px] items-center px-[15px] py-[60px] lg:py-[90px]">
          <div>
            <h2
              className="text-[30px] leading-[36px] lg:text-[36px] lg:leading-[42px] text-[#4f832a]"
              style={{ fontFamily: "Montserrat-Bold" }}
            >
              Beginning/Veteran Farmer &amp; Rancher Benefits
            </h2>

            <p
              className="mt-[20px] text-[17px] leading-[27px] text-[#231f20]"
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

            <Link
              href="/crop-insurance/resources"
              className="inline-flex mt-[24px] rounded-[4px] bg-[#496d83] px-[24px] py-[12px] text-[16px] text-white hover:opacity-90 transition-opacity"
              style={{ fontFamily: "Montserrat-Bold" }}
            >
              Learn More
            </Link>
          </div>

          <div className="relative w-full h-[320px] lg:h-[420px]">
            <Image
              src="/images/crop-insurance/Beginning-Veteran-Farmer.jpg"
              alt="Young woman farmer in field during harvest"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* =========================================================
            INDUSTRIES WE SERVE — white bg, two-col: image LEFT /
            text RIGHT (mirrored from the row above)
        ========================================================= */}
        <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[40px] items-center px-[15px] pb-[60px] lg:pb-[90px]">
          <div className="relative w-full h-[280px] lg:h-[360px] order-2 lg:order-1">
            <Image
              src="/images/crop-insurance/Industries_cran.jpg"
              alt="Cranberry bog during harvest"
              fill
              className="object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2
              className="text-[30px] leading-[36px] lg:text-[36px] lg:leading-[42px] text-[#4f832a]"
              style={{ fontFamily: "Montserrat-Bold" }}
            >
              Industries We Serve
            </h2>

            <p
              className="mt-[20px] text-[17px] leading-[27px] text-[#231f20]"
              style={{ fontFamily: "Barlow-Medium" }}
            >
              Crop Growers insurance works with crop producers, fruit and
              vegetable growers, dairy farmers, livestock producers and
              more.
            </p>

            <Link
              href="/industries"
              className="inline-flex mt-[24px] rounded-[4px] bg-[#496d83] px-[24px] py-[12px] text-[16px] text-white hover:opacity-90 transition-opacity"
              style={{ fontFamily: "Montserrat-Bold" }}
            >
              Visit Industries
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          FILE A CROP INSURANCE NOTICE OF LOSS — dark green bg,
          centered, white heading + body, white-outline CTA.
      ========================================================= */}
      <section className="w-full bg-[#4f832a] text-center px-[15px] py-[60px] lg:py-[90px]">
        <div className="max-w-[900px] mx-auto">
          <h2
            className="text-[32px] leading-[38px] lg:text-[40px] lg:leading-[48px] text-white"
            style={{ fontFamily: "Montserrat-Bold" }}
          >
            File a Crop Insurance Notice of Loss
          </h2>

          <p
            className="mt-[24px] text-[17px] leading-[27px] text-white"
            style={{ fontFamily: "Barlow-Medium" }}
          >
            Crop Growers crop insurance policyholders may electronically
            submit a notice of loss. If an adjuster has not been in contact
            within two business days, call the Crop Growers Service Center
            at 800-234-7012 immediately.
          </p>

          <Link
            href="/crop-insurance/notice-of-loss"
            className="inline-flex mt-[28px] rounded-[4px] border-2 border-white px-[24px] py-[12px] text-[16px] text-white hover:bg-white hover:text-[#4f832a] transition-colors"
            style={{ fontFamily: "Montserrat-Bold" }}
          >
            File a Notice of Loss
          </Link>
        </div>
      </section>
    </>
  );
}

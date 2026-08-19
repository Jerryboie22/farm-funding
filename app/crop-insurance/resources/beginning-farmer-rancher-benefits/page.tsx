import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Beginning, Small & Veteran Farmer Incentives | Farm Funders",
  description:
    "Learn about Beginning Farmer & Rancher and Veteran Farmer & Rancher crop insurance benefits, qualifications and resources.",
};

const BENEFITS = [
  {
    title: "$0 administrative fees",
    description: "All administrative fees are dropped for any coverage level.",
  },
  {
    title: "Additional 10% premium subsidy",
    description:
      "Must be buy-up coverage; does not apply to catastrophic (CAT) coverage.",
  },
  {
    title: "Extended production history",
    description:
      "Use of production history of farming operation that you were previously involved in the decision-making or physical activities. The operation must allow you access to use these records.",
  },
  {
    title: "Increased substitute yield adjustment",
    description:
      "Replace a low yield due to an insured cause of loss, from 60% to 80% of the applicable T- yield.",
  },
];

const QUALIFICATIONS = [
  "Must file as individual, or all members must meet all BFR/VFR benefits.",
  "Veteran (who has served on active duty in the armed forces and was discharged other than dishonorable) must first obtain status as a veteran during the most recent five-year period.",
  "Must not have actively operated and managed a farm or ranch anywhere with an insurable interest in any crop or livestock for more than five crop years. This includes an insurable interest as an individual or as a substantial beneficial interest holder (10% or more) in another person who has an insurable interest in any crop or livestock.",
  "May exclude a crops year’s insurable interest if you were under the age of 18, enrolled in post-secondary studies (not to exceed five crop years) or on active duty in the U.S. military.",
  "Must apply by the sales closing date.",
];

function ButtonLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-[46px] items-center justify-center rounded-[4px] border-2 border-[#496d83] bg-[#496d83] px-[20px] py-[9px] text-[16px] leading-[24px] text-white transition-colors hover:bg-[#3d5d70]"
      style={{ fontFamily: "Montserrat-Bold" }}
    >
      {children}
    </Link>
  );
}

export default function BeginningFarmerRancherBenefitsPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      {/* HERO */}
      <section className="w-full bg-[#f8f8f8]">
        <div className="mx-auto grid w-full max-w-[1630px] grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center px-[24px] py-[52px] sm:px-[45px] sm:py-[68px] lg:px-[67px] lg:py-[82px]">
            <Image
              src="/images/crop-insurance/CG_White_Web3_1.png"
              alt="Crop Growers logo"
              width={240}
              height={60}
              priority
              className="h-auto w-[190px] sm:w-[215px]"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(43%) sepia(37%) saturate(1000%) hue-rotate(52deg) brightness(90%) contrast(90%)",
              }}
            />
            <h1
              className="mt-[30px] max-w-[760px] text-[36px] leading-[1.16] text-[#4f832a] sm:text-[46px] lg:text-[50px]"
              style={{ fontFamily: "Montserrat-Bold" }}
            >
              Beginning/Veteran Farmer &amp; Rancher Benefits for Crop Insurance
            </h1>
            <p
              className="mt-[28px] text-[18px] leading-[1.65] text-[#231f20]"
              style={{ fontFamily: "Barlow-Medium" }}
            >
              Veterans — thank you for your service!
            </p>
            <p
              className="mt-[8px] text-[18px] leading-[1.65] text-[#231f20]"
              style={{ fontFamily: "Barlow-Medium" }}
            >
              Beginning farmers — thank you for becoming the 1% of the U.S. population who help feed the world!
            </p>
          </div>

          <div className="relative h-[300px] w-full sm:h-[400px] lg:h-[500px]">
            <Image
              src="/images/crop-insurance/Beginning-Veteran-Farmer.jpg"
              alt="Young woman farmer in field during harvest"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="w-full bg-white px-[24px] py-[58px] sm:px-[45px] lg:px-[67px] lg:py-[90px]">
        <div className="mx-auto max-w-[1500px]">
          <h2
            className="text-[32px] leading-[1.2] text-[#4f832a] sm:text-[40px]"
            style={{ fontFamily: "Montserrat-Bold" }}
          >
            About the BFR &amp; VFR Programs
          </h2>
          <p
            className="mt-[25px] max-w-[1200px] text-[18px] leading-[1.7] text-[#231f20]"
            style={{ fontFamily: "Barlow-Medium" }}
          >
            Beginning and veteran farmers are eligible for special rules and provisions under the federal crop insurance program. Some of the benefits include exemption from paying the administrative fee for catastrophic and additional coverage level policies, additional premium subsidy resulting in lower grower premium, and other policy adjustments. There are specific qualification requirements for each program. Some of the benefits are outlined below.
          </p>
          <p
            className="mt-[18px] max-w-[1200px] text-[18px] leading-[1.7] text-[#231f20]"
            style={{ fontFamily: "Barlow-Medium" }}
          >
            To learn more or to see how the programs could work for you, contact a Crop Growers agent.
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="w-full bg-[#ecf1e4] px-[24px] py-[58px] sm:px-[45px] lg:px-[67px] lg:py-[90px]">
        <div className="mx-auto max-w-[1500px]">
          <h2
            className="text-[32px] leading-[1.2] text-[#4f832a] sm:text-[40px]"
            style={{ fontFamily: "Montserrat-Bold" }}
          >
            BFR &amp; VFR Crop Insurance Benefits
          </h2>

          <div className="mt-[42px] grid grid-cols-1 gap-[24px] md:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((benefit) => (
              <article key={benefit.title} className="bg-white px-[25px] py-[30px] text-center">
                <div className="mx-auto mb-[22px] flex h-[72px] w-[72px] items-center justify-center rounded-full border-[3px] border-[#4f832a] text-[25px] font-bold text-[#4f832a]">
                  ✓
                </div>
                <h3
                  className="text-[22px] leading-[1.25] text-[#5a4400]"
                  style={{ fontFamily: "Montserrat-Bold" }}
                >
                  {benefit.title}
                </h3>
                <p
                  className="mt-[14px] text-[17px] leading-[1.65] text-[#231f20]"
                  style={{ fontFamily: "Barlow-Medium" }}
                >
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QUALIFICATIONS */}
      <section className="w-full bg-white px-[24px] py-[58px] sm:px-[45px] lg:px-[67px] lg:py-[90px]">
        <div className="mx-auto max-w-[1500px]">
          <h2
            className="text-[32px] leading-[1.2] text-[#4f832a] sm:text-[40px]"
            style={{ fontFamily: "Montserrat-Bold" }}
          >
            BFR &amp; VFR Crop Insurance Qualifications
          </h2>
          <ul className="mt-[28px] list-disc space-y-[14px] pl-[26px] text-[18px] leading-[1.65] text-[#231f20]" style={{ fontFamily: "Barlow-Medium" }}>
            {QUALIFICATIONS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-[#ecf1e4] px-[24px] py-[58px] sm:px-[45px] lg:px-[67px] lg:py-[90px]">
        <div className="mx-auto max-w-[1200px]">
          <h2
            className="text-[32px] leading-[1.2] text-[#4f832a] sm:text-[40px]"
            style={{ fontFamily: "Montserrat-Bold" }}
          >
            Beginning/Veteran Farmer &amp; Rancher Benefits FAQs
          </h2>

          <details className="mt-[35px] border-b border-[#c9cfc4] bg-white">
            <summary className="cursor-pointer list-none px-[24px] py-[22px] text-[19px] leading-[1.4] text-[#5a4400]" style={{ fontFamily: "Montserrat-Bold" }}>
              What is a beginning farmer and rancher (BFR) and how do you qualify?
            </summary>
            <div className="px-[24px] pb-[25px] text-[18px] leading-[1.65] text-[#231f20]" style={{ fontFamily: "Barlow-Medium" }}>
              <p>If you haven’t operated or managed a farm or you haven’t had an insurable interest in a crop or livestock product for more than 5 crop years, you could qualify for BFR benefits.</p>
              <p className="mt-[18px]">The 5 crop years:</p>
              <ul className="mt-[8px] list-disc space-y-[8px] pl-[25px]">
                <li>Includes an insurable interest as an individual or as a substantial beneficial interest holder (10% or more) in another person who has an insurable interest in any crop or livestock; and</li>
                <li>Excludes crop years when the BFR was under the age 18, enrolled in post-secondary studies (not to exceed 5 crop years) or on active duty in the US military.</li>
              </ul>
            </div>
          </details>

          <details className="border-b border-[#c9cfc4] bg-white">
            <summary className="cursor-pointer list-none px-[24px] py-[22px] text-[19px] leading-[1.4] text-[#5a4400]" style={{ fontFamily: "Montserrat-Bold" }}>
              What is a veteran farmer and rancher (VFR) and how do you qualify?
            </summary>
            <div className="px-[24px] pb-[25px] text-[18px] leading-[1.65] text-[#231f20]" style={{ fontFamily: "Barlow-Medium" }}>
              <p>A VFR is an individual who has served on active duty in the United States Army, Navy, Marine Corps, Air Force, and Coast Guard, including the reserve components, was discharged or released under conditions other than dishonorable, and qualifies under any of the following:</p>
              <ul className="mt-[12px] list-disc space-y-[8px] pl-[25px]">
                <li>Has not operated a farm or ranch;</li>
                <li>Has operated a farm or ranch for not more than 5 years; or</li>
                <li>Is a veteran who has first obtained status as a veteran during the most recent 5-year period, even if that veteran has previously operated a farm or ranch for more than 5 years.</li>
              </ul>
              <p className="mt-[15px]">Business entities, other than an individual, may be eligible for veteran farmer or rancher benefits if all substantial beneficial interest holders qualify individually as a VFR. A spouse’s veteran status does not impact whether a person (comprised only of the veteran and their spouse) is considered a veteran farmer or rancher.</p>
            </div>
          </details>

          <details className="border-b border-[#c9cfc4] bg-white">
            <summary className="cursor-pointer list-none px-[24px] py-[22px] text-[19px] leading-[1.4] text-[#5a4400]" style={{ fontFamily: "Montserrat-Bold" }}>
              What does it mean to have an insurable interest in crops or livestock when determining BFR status?
            </summary>
            <div className="px-[24px] pb-[25px] text-[18px] leading-[1.65] text-[#231f20]" style={{ fontFamily: "Barlow-Medium" }}>
              <p>An insurable interest does not mean that the crop or livestock must be insurable, just that the individual must have an interest that is at financial risk in the crop or livestock.</p>
              <p className="mt-[15px]">For example, if an individual has a 100% share in the planting and harvesting of blueberries in Massachusetts where blueberries are not an insurable crop, then the individual has a financial risk that is considered an insurable interest for the purpose of determining BFR benefits.</p>
            </div>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-[#4f832a] px-[24px] py-[62px] text-center sm:px-[45px] lg:py-[90px]">
        <h2 className="text-[32px] leading-[1.2] text-white sm:text-[40px]" style={{ fontFamily: "Montserrat-Bold" }}>
          Interested in applying?
        </h2>
        <p className="mt-[18px] text-[22px] leading-[1.4] text-white" style={{ fontFamily: "Barlow-Medium" }}>
          Let’s get in touch!
        </p>
        <div className="mt-[28px] flex justify-center">
          <ButtonLink href="/crop-insurance/agent-finder">Contact an Agent</ButtonLink>
        </div>
      </section>

      {/* OTHER RESOURCES */}
      <section className="w-full bg-white px-[24px] py-[58px] sm:px-[45px] lg:px-[67px] lg:py-[80px]">
        <div className="mx-auto max-w-[1500px]">
          <h2 className="text-[30px] leading-[1.2] text-[#4f832a] sm:text-[38px]" style={{ fontFamily: "Montserrat-Bold" }}>
            Other Crop Insurance Resources
          </h2>
          <div className="mt-[30px] flex flex-wrap gap-[25px]">
            <Link href="/crop-insurance/resources" className="text-[20px] font-bold text-[#5a4400] hover:underline" style={{ fontFamily: "Montserrat-Bold" }}>
              See all Resources →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "File a Crop Insurance Notice of Loss | Farm Funders",
  description:
    "Crop Growers policyholders can submit a notice of loss electronically and reach an adjuster quickly.",
};

const STEPS = [
  {
    title: "Report the loss promptly",
    description:
      "Contact us as soon as you notice damage. Most policies require notice within a set window after loss occurs or harvest begins.",
  },
  {
    title: "Submit your notice",
    description:
      "File electronically below, or call the Crop Growers Service Center and a specialist will walk you through it.",
  },
  {
    title: "Meet your adjuster",
    description:
      "An adjuster will contact you to schedule an inspection. If you haven't heard back within two business days, call us directly.",
  },
];

export default function NoticeOfLossPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      {/* HERO */}
      <section className="w-full bg-forest">
        <div className="px-[24px] pt-[40px] pb-[32px] md:px-[67px] md:pt-[74px] md:pb-[52px]">
          <h1
            className="text-[32px] leading-[38px] text-white md:text-[50px] md:leading-[60px]"
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
          >
            File a Crop Insurance Notice of Loss
          </h1>

          <p
            className="mt-[29px] max-w-full text-[17px] leading-[28px] text-white md:max-w-[1490px] md:text-[20px] md:leading-[34px]"
            style={{ fontFamily: "var(--font-barlow)", fontWeight: 500 }}
          >
            Crop Growers policyholders can submit a notice of loss
            electronically. If an adjuster hasn&apos;t been in touch within
            two business days, call the Crop Growers Service Center at
            800-234-7012 right away.
          </p>
        </div>
      </section>

      {/* IMAGE + STEPS */}
      <section className="w-full bg-white px-[24px] pt-[64px] md:px-[53px] md:pt-[108px]">
        <div className="grid grid-cols-1 gap-[32px] md:grid-cols-2 md:gap-[60px] md:items-center">
          <div>
            <h2
              className="text-[32px] leading-[38px] text-forest md:text-[42px] md:leading-[51px]"
              style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
            >
              What to Expect
            </h2>

            <div className="mt-[24px] flex flex-col gap-[24px]">
              {STEPS.map((step, index) => (
                <div key={step.title} className="flex gap-[16px]">
                  <span
                    className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-forest text-[16px] text-white"
                    style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3
                      className="text-[20px] leading-[26px] text-[#231f20]"
                      style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="mt-[6px] text-[16px] leading-[24px] text-charcoal"
                      style={{ fontFamily: "var(--font-barlow)", fontWeight: 500 }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[240px] w-full overflow-hidden md:h-[400px]">
            <Image
              src="/images/crop-insurance/Cash Grain_shutterstock_1153070285.jpg"
              alt="Close-up of a crop field"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
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
              Need to speak with someone now?
            </h2>
            <p
              className="mt-[24px] text-[18px] leading-[26px] text-[#231f20] md:mt-[42px] md:text-[20px] md:leading-[30px]"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 500 }}
            >
              Call the Crop Growers Service Center at 800-234-7012.
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

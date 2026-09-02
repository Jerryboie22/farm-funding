import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Crop Insurance Non-Discrimination Statement | Farm Funding",
  description:
    "Crop Growers is an equal opportunity provider. Read the USDA non-discrimination statement and how to file a program discrimination complaint.",
};

export default function NonDiscriminationStatementPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      {/* HERO */}
      <section className="w-full bg-forest">
        <div className="px-[24px] pt-[40px] pb-[32px] md:px-[67px] md:pt-[74px] md:pb-[52px]">
          <h1
            className="text-[32px] leading-[38px] text-white md:text-[50px] md:leading-[60px]"
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
          >
            Non-Discrimination Statement
          </h1>

          <p
            className="mt-[29px] max-w-full text-[17px] leading-[28px] text-white md:max-w-[1490px] md:text-[20px] md:leading-[34px]"
            style={{ fontFamily: "var(--font-barlow)", fontWeight: 500 }}
          >
            Crop Growers is an equal opportunity provider.
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="w-full bg-white px-[24px] pt-[64px] md:px-[95px] md:pt-[100px]">
        <div className="grid grid-cols-1 gap-[40px] md:grid-cols-2 md:gap-[60px] md:items-start">
          <div>
            <p
              className="text-[16px] leading-[26px] text-charcoal md:text-[17px] md:leading-[28px]"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 500 }}
            >
              In accordance with federal civil rights law and U.S. Department
              of Agriculture (USDA) civil rights regulations and policies,
              USDA, its agencies, offices and employees, and institutions
              participating in or administering USDA programs are prohibited
              from discriminating on the basis of race, color, national
              origin, religion, sex, gender identity, sexual orientation,
              disability, age, marital or family status, income derived from
              a public assistance program, political beliefs, or reprisal for
              prior civil rights activity, in any program or activity
              conducted or funded by USDA. Not all bases apply to every
              program, and remedies and complaint-filing deadlines vary by
              program.
            </p>

            <h3
              className="mt-[36px] text-[20px] leading-[26px] text-forest"
              style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
            >
              Persons with disabilities
            </h3>
            <p
              className="mt-[10px] text-[16px] leading-[26px] text-charcoal"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 500 }}
            >
              Individuals who need an alternative means of communication for
              program information (Braille, large print, audiotape, American
              Sign Language, etc.) should contact the responsible agency, or
              USDA&apos;s TARGET Center at (202) 720-2600 (voice and TTY), or
              the Federal Relay Service at (800) 877-8339. Program
              information may also be available in languages other than
              English.
            </p>

            <h3
              className="mt-[36px] text-[20px] leading-[26px] text-forest"
              style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
            >
              How to file a complaint
            </h3>
            <p
              className="mt-[10px] text-[16px] leading-[26px] text-charcoal"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 500 }}
            >
              A program discrimination complaint can be filed using the USDA
              Program Discrimination Complaint Form (AD-3027), available
              online, at any USDA office, or by requesting a copy at
              (866) 632-9992. Completed forms or an equivalent letter can be
              submitted by mail to the U.S. Department of Agriculture, Office
              of the Assistant Secretary for Civil Rights, 1400 Independence
              Avenue SW, Washington, D.C. 20250-9410; by fax to
              (202) 690-7442; or by email to program.intake@usda.gov.
            </p>
            <p
              className="mt-[16px] text-[14px] leading-[22px] text-charcoal/70"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 500 }}
            >
              USDA is an equal opportunity provider, employer and lender.
            </p>
          </div>

          <div className="relative h-[240px] w-full overflow-hidden rounded-sm md:h-[420px]">
            <Image
              src="/images/crop-insurance/Crop  Livestock Insuranceshutterstock55253641.jpg"
              alt="Crop field under insurance coverage"
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
              Questions about this statement?
            </h2>
            <p
              className="mt-[24px] text-[18px] leading-[26px] text-[#231f20] md:mt-[42px] md:text-[20px] md:leading-[30px]"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 500 }}
            >
              Contact the RMA Civil Rights Office at 202-690-3578, or reach
              out to your Farm Funding crop insurance team.
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

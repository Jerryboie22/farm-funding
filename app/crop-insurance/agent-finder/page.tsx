// app/crop-insurance/agent-finder/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function CropInsuranceAgentFinderPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      {/* HERO */}
      <section className="w-full bg-[#4f832a]">
        <div className="px-[24px] pt-[40px] pb-[32px] md:px-[67px] md:pt-[74px] md:pb-[52px]">
          {/* CROP GROWERS LOGO */}
          <div className="flex items-center">
            <Image
              src="/images/resources/beginning-farmer-rancher-benefits/CG_White_Web3_1.png"
              alt="Crop Growers"
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-auto max-w-none"
              priority
            />
          </div>

          {/* PAGE TITLE */}
          <h1
            className="mt-[24px] text-[32px] leading-[38px] text-white md:text-[50px] md:leading-[60px]"
            style={{
              fontFamily: "Montserrat-Bold, Montserrat, sans-serif",
            }}
          >
            Crop Insurance Agent Finder
          </h1>

          {/* HERO DESCRIPTION */}
          <p
            className="mt-[29px] max-w-full text-[17px] leading-[28px] text-white md:max-w-[1490px] md:text-[20px] md:leading-[34px]"
            style={{
              fontFamily: "Barlow-Medium, Barlow, sans-serif",
            }}
          >
            Thank you for your interest in Crop Growers insurance. You can
            reach our Crop Growers Service Center at 800-234-7012. Our local
            specialists are here to answer any questions and get you on the
            right track to the crop, dairy and livestock coverage you desire.
          </p>
        </div>
      </section>

      {/* ALL CROP INSURANCE AGENTS */}
      <section className="w-full bg-white px-[24px] pb-0 pt-[64px] md:px-[53px] md:pt-[108px]">
        <h2
          className="text-[32px] leading-[38px] text-[#4f832a] md:text-[42px] md:leading-[51px]"
          style={{
            fontFamily: "Montserrat-Bold, Montserrat, sans-serif",
          }}
        >
          All Crop Insurance Agents
        </h2>

        <div className="mt-[31px]">
          {/* OFFICE */}
          <h3
            className="text-[24px] leading-[30px] text-[#231f20] md:text-[28px] md:leading-[35px]"
            style={{
              fontFamily: "Montserrat-Bold, Montserrat, sans-serif",
            }}
          >
            White River Junction
          </h3>

          {/* ADDRESS */}
          <p
            className="mt-[7px] text-[16px] leading-[24px] text-[#496d83] md:text-[18px] md:leading-[27px]"
            style={{
              fontFamily: "Barlow-Medium, Barlow, sans-serif",
            }}
          >
            52 FarmVu Dr.
          </p>

          <p
            className="text-[16px] leading-[24px] text-[#496d83] md:text-[18px] md:leading-[27px]"
            style={{
              fontFamily: "Barlow-Medium, Barlow, sans-serif",
            }}
          >
            White River Junction, VT 05001
          </p>

          {/* PHONE */}
          <p
            className="text-[16px] leading-[24px] text-[#496d83] md:text-[18px] md:leading-[27px]"
            style={{
              fontFamily: "Barlow-Medium, Barlow, sans-serif",
            }}
          >
            <span
              className="text-[#231f20]"
              style={{
                fontFamily: "Montserrat-Bold, Montserrat, sans-serif",
              }}
            >
              Financial Services:
            </span>{" "}
            917-563-6089
          </p>

          {/* EMAIL */}
          <p
            className="text-[16px] leading-[24px] text-[#231f20] md:text-[18px] md:leading-[27px]"
            style={{
              fontFamily: "Barlow-Medium, Barlow, sans-serif",
            }}
          >
            Email: info@farm-funding.com
          </p>
        </div>
      </section>

      {/* GENERAL QUESTIONS */}
      <section className="w-full bg-white px-[24px] pb-[64px] pt-[64px] md:px-[95px] md:pb-[130px] md:pt-[90px]">
        <div className="flex flex-col gap-[24px] md:flex-row md:items-start md:justify-between md:gap-0">
          {/* TEXT */}
          <div>
            <h2
              className="text-[32px] leading-[38px] text-[#4f832a] md:text-[42px] md:leading-[51px]"
              style={{
                fontFamily: "Montserrat-Bold, Montserrat, sans-serif",
              }}
            >
              Have general questions?
            </h2>

            <p
              className="mt-[24px] text-[18px] leading-[26px] text-[#231f20] md:mt-[42px] md:text-[20px] md:leading-[30px]"
              style={{
                fontFamily: "Barlow-Medium, Barlow, sans-serif",
              }}
            >
              Let&apos;s get in touch!
            </p>
          </div>

          {/* CONTACT BUTTON */}
          <div className="md:mr-[310px] md:pt-[8px]">
            <Link
              href="/contact"
              className="inline-flex h-[46px] min-w-[144px] items-center justify-center rounded-[4px] bg-[#496d83] px-[22px] text-[17px] leading-[24px] text-white transition hover:bg-[#3e5d70]"
              style={{
                fontFamily: "Montserrat-Bold, Montserrat, sans-serif",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
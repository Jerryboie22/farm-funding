"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const BENEFITS = [
  {
    icon: "/images/resources/beginning-farmer-rancher-benefits/no-admin0fees.png",
    title: "$0 administrative fees",
    description: "All administrative fees are dropped for any coverage level.",
  },
  {
    icon: "/images/resources/beginning-farmer-rancher-benefits/subsidy.png",
    title: "Additional 10% premium subsidy",
    description:
      "Must be buy-up coverage; does not apply to catastrophic (CAT) coverage.",
  },
  {
    icon: "/images/resources/beginning-farmer-rancher-benefits/extended-history.png",
    title: "Extended production history",
    description:
      "Use of production history of farming operation that you were previously involved in the decision-making or physical activities. The operation must allow you access to use these records.",
  },
  {
    icon: "/images/resources/beginning-farmer-rancher-benefits/substitute-yield.png",
    title: "Increased substitute yield adjustment",
    description:
      "Replace a low yield due to an insured cause of loss, from 60% to 80% of the applicable T-yield.",
  },
];

const QUALIFICATIONS = [
  "Must file as individual, or all members must meet all BFR/VFR benefits.",
  "Veteran (who has served on active duty in the armed forces and was discharged other than dishonorable) must first obtain status as a veteran during the most recent five-year period.",
  "Must not have actively operated and managed a farm or ranch anywhere with an insurable interest in any crop or livestock for more than five crop years. This includes an insurable interest as an individual or as a substantial beneficial interest holder (10% or more) in another person who has an insurable interest in any crop or livestock.",
  "May exclude a crops year's insurable interest if you were under the age of 18, enrolled in post-secondary studies (not to exceed five crop years) or on active duty in the U.S. military.",
  "Must apply by the sales closing date.",
];

const FAQS = [
  {
    question:
      "What is a beginning farmer and rancher (BFR) and how do you qualify?",
    answer: [
      "If you haven't operated or managed a farm or you haven't had an insurable interest in a crop or livestock product for more than 5 crop years, you could qualify for BFR benefits. The 5 crop years:",
    ],
    bullets: [
      "Includes an insurable interest as an individual or as a substantial beneficial interest holder (10% or more) in another person who has an insurable interest in any crop or livestock; and",
      "Excludes crop years when the BFR was under the age 18, enrolled in post-secondary studies (not to exceed 5 crop years) or on active duty in the US military.",
    ],
  },
  {
    question:
      "What is a veteran farmer and rancher (VFR) and how do you qualify?",
    answer: [
      "A VFR is an individual who has served on active duty in the United States Army, Navy, Marine Corps, Air Force, and Coast Guard, including the reserve components, was discharged or released under conditions other than dishonorable, and qualifies under any of the following:",
    ],
    bullets: [
      "Has not operated a farm or ranch;",
      "Has operated a farm or ranch for not more than 5 years; or",
      "Is a veteran who has first obtained status as a veteran during the most recent 5-year period, even if that veteran has previously operated a farm or ranch for more than 5 years.",
    ],
    footer:
      "Business entities, other than an individual, may be eligible for veteran farmer or rancher benefits if all substantial beneficial interest holders qualify individually as a VFR. A spouse's veteran status does not impact whether a person (comprised only of the veteran and their spouse) is considered a veteran farmer or rancher.",
  },
  {
    question:
      "What does it mean to have an insurable interest in crops or livestock when determining BFR status?",
    answer: [
      "An insurable interest does not mean that the crop or livestock must be insurable, just that the individual must have an interest that is at financial risk in the crop or livestock.",
      "For example, if an individual has a 100% share in the planting and harvesting of blueberries in Massachusetts where blueberries are not an insurable crop, then the individual has a financial risk that is considered an insurable interest for the purpose of determining BFR benefits.",
    ],
  },
];

const OTHER_RESOURCES = [
  {
    title: "Crop Insurance Deadlines",
    href: "#",
    icon: "/images/resources/beginning-farmer-rancher-benefits/records.png",
  },
  {
    // Not built yet — placeholder until app/resources/producer-responsibilities/page.tsx exists.
    title: "Producer Responsibilities",
    href: "#",
    icon: "/images/resources/beginning-farmer-rancher-benefits/process (1).png",
  },
  {
    // Points at app/resources/page.tsx, the index that's actually a sibling
    // of this page — NOT app/crop-insurance/resources/page.tsx, which is a
    // separate listing page.
    title: "See all Resources",
    href: "/resources",
    icon: "/images/resources/beginning-farmer-rancher-benefits/we-understand.png",
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
  const styles = {
    blue: "border-[#496d83] bg-[#496d83] text-white hover:bg-white hover:text-[#496d83]",
    "outline-white":
      "border-white bg-transparent text-white hover:bg-white hover:text-[#4f832a]",
  };
  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center justify-center rounded-[4px] border-2",
        "px-[19px] py-[10px]",
        "text-[16px] leading-[24px] font-bold",
        "transition-colors duration-200",
        styles[variant],
      ].join(" ")}
      style={{ fontFamily: "Montserrat-Bold" }}
    >
      {children}
    </Link>
  );
}

/**
 * Chevron icon used in the FAQ accordion. Flips 180deg when the
 * associated item is open.
 */
function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={[
        "shrink-0 transition-transform duration-200",
        open ? "rotate-180" : "rotate-0",
      ].join(" ")}
      aria-hidden="true"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="#231f20"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Single accordion row for the FAQ section. Bordered box with a gold
 * rule under the question row (matches live site), chevron flips on
 * open, answer content reveals below.
 */
function FaqAccordionItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof FAQS)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-[#d9d9d9]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={[
          "flex w-full items-center justify-between gap-[16px]",
          "px-[24px] py-[20px] text-left",
          "border-b-[3px]",
          isOpen ? "border-b-[#d9d9d9]" : "border-b-[#c36d15]",
        ].join(" ")}
      >
        <span
          className="text-[18px] leading-[26px] text-[#231f20] sm:text-[20px] sm:leading-[28px]"
          style={{ fontFamily: "Montserrat-Bold" }}
        >
          {faq.question}
        </span>
        <ChevronIcon open={isOpen} />
      </button>

      {isOpen && (
        <div className="px-[24px] pb-[28px] pt-[20px]">
          {faq.answer.map((p, i) => (
            <p
              key={i}
              className="text-[16px] leading-[26px] text-[#231f20]"
              style={{ fontFamily: "Barlow-Medium" }}
            >
              {p}
            </p>
          ))}

          {faq.bullets && (
            <ul
              className="mt-[12px] list-disc space-y-[8px] pl-[22px] text-[16px] leading-[26px] text-[#231f20]"
              style={{ fontFamily: "Barlow-Medium" }}
            >
              {faq.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}

          {faq.footer && (
            <p
              className="mt-[12px] text-[16px] leading-[26px] text-[#231f20]"
              style={{ fontFamily: "Barlow-Medium" }}
            >
              {faq.footer}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default function BeginningVeteranFarmerBenefitsPage() {
  // Live site opens the first FAQ by default (see reference screenshot),
  // so we seed state with index 0 open.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="w-full overflow-x-hidden">
      
      {/* HERO */}
<section className="w-full bg-white px-[15px] py-[40px] sm:px-[24px] sm:py-[60px] lg:px-[78px] lg:py-[70px]">
  <div className="grid grid-cols-1 items-center gap-[32px] lg:grid-cols-2 lg:gap-[60px]">

    {/* Left Column */}
    <div>

      {/* Crop Growers Logo */}
      <div className="relative mb-[20px] h-[48px] w-[260px] sm:h-[56px] sm:w-[300px] lg:h-[64px] lg:w-[340px]">
        <Image
          src="/images/resources/beginning-farmer-rancher-benefits/CropGrowers_NoTag_Web.png"
          alt="Crop Growers"
          fill
          priority
          className="object-contain object-left"
        />
      </div>

      <h1
        className="text-[30px] leading-[36px] text-[#4f832a] sm:text-[40px] sm:leading-[48px] lg:text-[46px] lg:leading-[54px]"
        style={{ fontFamily: "Montserrat-Bold" }}
      >
        Beginning/Veteran Farmer &amp; Rancher Benefits for Crop Insurance
      </h1>

      <p
        className="mt-[24px] text-[18px] leading-[30px] text-[#231f20]"
        style={{ fontFamily: "Barlow-Medium" }}
      >
        Veterans — thank you for your service!
        <br />
        Beginning farmers — thank you for becoming the 1% of the U.S.
        population who help feed the world!
      </p>

    </div>

    {/* Right Column */}
    <div className="relative h-[240px] w-full overflow-hidden sm:h-[340px] lg:h-[430px]">
      <Image
        src="/images/crop-insurance/Beginning-Veteran-Farmer.jpg"
        alt="Young woman farmer in field during harvest"
        fill
        priority
        sizes="(max-width:1024px) 100vw, 50vw"
        className="object-cover"
      />
    </div>

  </div>
</section>

      {/* ABOUT THE PROGRAMS */}
      <section className="w-full bg-[#ecf1e4] px-[15px] py-[40px] sm:px-[24px] sm:py-[60px] lg:px-[78px] lg:py-[70px]">
        <div className="grid grid-cols-1 items-center gap-[32px] lg:grid-cols-2 lg:gap-[60px]">
          <div>
            <h2
              className="text-[26px] leading-[32px] text-[#4f832a] sm:text-[32px] sm:leading-[38px]"
              style={{ fontFamily: "Montserrat-Bold" }}
            >
              About the BFR &amp; VFR Programs
            </h2>

            <p
              className="mt-[18px] text-[16px] leading-[26px] text-[#231f20] sm:text-[18px] sm:leading-[28.8px]"
              style={{ fontFamily: "Barlow-Medium" }}
            >
              Beginning and veteran farmers are eligible for special rules
              and provisions under the federal crop insurance program. Some
              of the benefits include exemption from paying the
              administrative fee for catastrophic and additional coverage
              level policies, additional premium subsidy resulting in lower
              grower premium, and other policy adjustments. There are
              specific qualification requirements for each program. Some of
              the benefits are outlined below. To learn more or to see how
              the programs could work for you, contact a Crop Growers agent.
            </p>
          </div>

          <div className="relative h-[220px] w-full overflow-hidden sm:h-[300px] lg:h-[350px]">
            <Image
              src="/images/resources/beginning-farmer-rancher-benefits/farmer-veterans_1.jpg"
              alt="Farmer veteran"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section className="w-full bg-white px-[15px] py-[40px] sm:px-[24px] sm:py-[60px] lg:px-[78px] lg:py-[70px]">
        <h2
          className="text-[26px] leading-[32px] text-[#4f832a] sm:text-[32px] sm:leading-[38px]"
          style={{ fontFamily: "Montserrat-Bold" }}
        >
          BFR &amp; VFR Crop Insurance Benefits
        </h2>

        <div className="mt-[32px] grid grid-cols-1 gap-[32px] sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => (
            <div key={b.title} className="flex flex-col items-start">
              <div className="relative h-[56px] w-[56px]">
                <Image src={b.icon} alt="" fill className="object-contain" />
              </div>
              <h3
                className="mt-[16px] text-[20px] leading-[26px] text-[#231f20]"
                style={{ fontFamily: "Montserrat-Bold" }}
              >
                {b.title}
              </h3>
              <p
                className="mt-[10px] text-[15px] leading-[24px] text-[#231f20]"
                style={{ fontFamily: "Barlow-Medium" }}
              >
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* QUALIFICATIONS — full width, no max-w cap (matches live layout) */}
      <section className="w-full bg-[#ecf1e4] px-[15px] py-[40px] sm:px-[24px] sm:py-[60px] lg:px-[78px] lg:py-[70px]">
        <h2
          className="text-[26px] leading-[32px] text-[#4f832a] sm:text-[32px] sm:leading-[38px]"
          style={{ fontFamily: "Montserrat-Bold" }}
        >
          BFR &amp; VFR Crop Insurance Qualifications
        </h2>

        <ul
          className="mt-[20px] list-disc space-y-[14px] pl-[22px] text-[16px] leading-[26px] text-[#231f20] sm:text-[18px] sm:leading-[28.8px]"
          style={{ fontFamily: "Barlow-Medium" }}
        >
          {QUALIFICATIONS.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ul>
      </section>

      {/* FAQS — interactive accordion, full width (matches live layout) */}
      <section className="w-full bg-white px-[15px] py-[40px] sm:px-[24px] sm:py-[60px] lg:px-[78px] lg:py-[70px]">
        <h2
          className="text-[26px] leading-[32px] text-[#4f832a] sm:text-[32px] sm:leading-[38px]"
          style={{ fontFamily: "Montserrat-Bold" }}
        >
          Beginning/Veteran Farmer &amp; Rancher Benefits FAQs
        </h2>

        <div className="mt-[28px] space-y-[16px]">
          {FAQS.map((faq, index) => (
            <FaqAccordionItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex((current) => (current === index ? null : index))
              }
            />
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="w-full bg-[#4f832a] px-[15px] py-[50px] text-center sm:px-[24px] sm:py-[70px] lg:px-[15px] lg:py-[90px]">
        <div className="mx-auto max-w-[700px]">
          <h2
            className="text-[28px] leading-[34px] text-white sm:text-[36px] sm:leading-[43px]"
            style={{ fontFamily: "Montserrat-Bold" }}
          >
            Interested in applying?
          </h2>

          <p
            className="mt-[16px] text-[18px] leading-[28.8px] text-white"
            style={{ fontFamily: "Barlow-Medium" }}
          >
            Let&apos;s get in touch!
          </p>

          <div className="mt-[24px] flex justify-center">
            <ButtonLink
              href="/crop-insurance/agent-finder"
              variant="outline-white"
            >
              Contact an Agent
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* OTHER RESOURCES */}
      <section className="w-full bg-white px-[15px] py-[40px] sm:px-[24px] sm:py-[60px] lg:px-[78px] lg:py-[70px]">
        <h2
          className="text-[26px] leading-[32px] text-[#4f832a] sm:text-[32px] sm:leading-[38px]"
          style={{ fontFamily: "Montserrat-Bold" }}
        >
          Other Crop Insurance Resources
        </h2>

        <div className="mt-[36px] grid grid-cols-1 gap-[40px] sm:grid-cols-3 sm:gap-[32px]">
          {OTHER_RESOURCES.map((r) => (
            <div key={r.title} className="flex flex-col items-start">
              <div className="relative h-[64px] w-[64px]">
                <Image src={r.icon} alt="" fill className="object-contain" />
              </div>

              <Link
                href={r.href}
                className="mt-[24px] inline-flex items-center gap-[6px] text-[20px] leading-[26px] font-bold text-[#5a4400] hover:opacity-80"
                style={{ fontFamily: "Montserrat-Bold" }}
              >
                {r.title}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  aria-hidden="true"
                  className="shrink-0"
                >
                  <path
                    d="m9 6 6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
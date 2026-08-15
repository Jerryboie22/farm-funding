"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const HERO_VIDEO = {
  youtubeId: "B8_4Zpmv5iI",
};

function VideoModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Farm Funding video"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[1000px] overflow-hidden bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close video"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center bg-white/95 text-[30px] leading-none text-[#333] shadow-md transition hover:bg-white"
        >
          ×
        </button>

        <div className="bg-black">
          <div className="relative aspect-video w-full">
            <iframe
              src={`https://www.youtube.com/embed/${HERO_VIDEO.youtubeId}?autoplay=1&rel=0`}
              title="Farm Funding video"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-6 w-6 shrink-0 stroke-[#333] transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

const faqs = [
  {
    question: "What makes you different from other lenders?",
    answer: (
      <p>
        Farm Funding is a mission-driven, customer-owned, ag financial
        cooperative. We are dedicated to serving the financial needs of
        Northeast agriculture.
      </p>
    ),
  },
  {
    question: "How does being customer-owned make a difference?",
    answer: (
      <>
        <p>
          Our products and services are focused on saving our customers money.
          Plus, our customer-owners receive a share of our net earnings not
          needed to operate or capitalize the business. Learn more about our{" "}
          <Link
            href="/about/Who-We-Are/Patronage-Dividends.html"
            className="text-[#496f88] underline"
          >
            patronage dividend program
          </Link>
          .
        </p>

        <p className="mt-5">
          Additionally, Farm Funding is governed by a member-elected Board of
          Directors. Board candidates are selected by the Association
          Nominating Committee, who represent each branch office across the
          Association territory, and then all voting stockholders have the
          opportunity to vote in the annual Director elections. This ensures
          the Board of Directors represent the customers and industries Farm
          Funding serves. Learn more about the{" "}
          <Link
            href="/about/Leadership/Board-of-directors.html"
            className="text-[#496f88] underline"
          >
            Board of Directors
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    question: "Where do you get your money – how are you funded?",
    answer: (
      <p>
        Farm Credit raises funds by selling debt securities on the nation&apos;s
        money markets through the Federal Farm Credit Banks Funding
        Corporation. Farm Credit debt is insured through the Farm Credit System
        Insurance Corporation, a self-funded insurance entity.
      </p>
    ),
  },
  {
    question: "Is Farm Funding a commercial bank or a credit union?",
    answer: (
      <p>
        Neither. Unlike commercial banks and other lenders, Farm Funding is not
        a depository institution. We are owned by our customers. This
        cooperative structure is your best assurance that competitively priced
        credit will always be available to farmers, fishermen, forest products
        producers and other agricultural businesses.
      </p>
    ),
  },
  {
    question: "What is a cooperative?",
    answer: (
      <p>
        Cooperatives are structured so that customers are stockholders and
        entitled to share in the earnings of the organization.{" "}
        <Link
          href="/about/Who-We-Are/Patronage-Dividends.html"
          className="text-[#496f88] underline"
        >
          Patronage dividends
        </Link>{" "}
        are a major advantage when you borrow from Farm Funding. Being a
        cooperative also means that we are led by a member-elected{" "}
        <Link
          href="/about/Leadership/Board-of-directors.html"
          className="text-[#496f88] underline"
        >
          Board of Directors
        </Link>
        .
      </p>
    ),
  },
  {
    question: "Do you have to be a member to utilize Farm Funding’s services?",
    answer: (
      <p>
        It depends on the services that you wish to use. For credit services,
        you must buy stock and therefore become a member. We provide financial
        services for anyone involved in an agricultural business, including
        owners, managers, employees and part-time farmers as well as
        agricultural processing and marketing businesses. Agricultural
        cooperatives borrow from Farm Credit through our affiliated lending
        institution, CoBank.
      </p>
    ),
  },
  {
    question:
      "What kind of benefits and support programs are offered for young and beginning farmers?",
    answer: (
      <p>
        We have a number of programs to help support talented, hardworking
        individuals enter agriculture. Helping young people get started in
        farming is one of our long-term commitments to Northeast agriculture.
        Programs include our{" "}
        <Link
          href="/FINANCING/Beginning-Farmer-Programs/Young-Beginning-Small-Veteran-Farmers.html"
          className="text-[#496f88] underline"
        >
          young and beginning farmer incentives
        </Link>
        ,{" "}
        <Link
          href="/financing/beginning-farmer-programs/farm-start"
          className="text-[#496f88] underline"
        >
          FarmStart
        </Link>{" "}
        and{" "}
        <Link
          href="/financing/beginning-farmer-programs/GenerationNext"
          className="text-[#496f88] underline"
        >
          GenerationNext
        </Link>
        .
      </p>
    ),
  },
];

const FAQ_DIVIDER = "#c9a24a";

export default function WhoWeArePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <main className="bg-white text-[#333]">
      <VideoModal
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
      />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1500px] px-[4%] py-[70px] lg:py-[100px]">
          <div className="grid grid-cols-1 gap-[55px] lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="text-[44px] font-bold leading-[1.08] text-[#4f832a] md:text-[54px] lg:text-[62px]">
                Who We Are
              </h1>

              <p className="mt-7 max-w-[720px] text-[18px] leading-[1.75] text-[#444]">
                Farm Funding is a financial cooperative providing credit and
                financial services to farmers, commercial fishermen, forest
                products producers and agribusinesses in Connecticut, Maine,
                Massachusetts, New Hampshire, Rhode Island, New York, New
                Jersey and Vermont.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex w-fit bg-[#496f88] px-[24px] py-[14px] text-[15px] font-bold text-white transition hover:bg-[#3e6077]"
              >
                Contact My Office
              </Link>
            </div>

            {/* HERO IMAGE / VIDEO */}
<button
  type="button"
  aria-label="Play Farm Funding video"
  onClick={() => setVideoOpen(true)}
  className="group relative h-[260px] w-full overflow-hidden lg:h-[360px]"
>
  <Image
    src="/images/who we are/FiveMile770x622.png"
    alt="Three men walking in a dairy barn."
    fill
    priority
    className="object-cover opacity-60 transition-all duration-500 group-hover:scale-[1.02] group-hover:opacity-70"
    sizes="(max-width: 1024px) 100vw, 50vw"
  />

  {/* White transparent wash */}
  <span
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 bg-white/20"
  />

  {/* Play button */}
  <span className="absolute inset-0 flex items-center justify-center">
    <span className="flex h-[90px] w-[90px] items-center justify-center rounded-full bg-[#4f832a] shadow-xl transition-transform duration-300 group-hover:scale-110">
      <svg
        viewBox="0 0 24 24"
        className="ml-[4px] h-[32px] w-[32px] fill-white"
        aria-hidden="true"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  </span>
</button>
          </div>
        </div>
      </section>

      {/* =========================================================
          MADE IN AGRICULTURE
      ========================================================= */}
      <section className="bg-[#eef3e6]">
        <div className="mx-auto w-full max-w-[1500px] px-[4%] py-[70px] lg:py-[100px]">
          <div className="grid grid-cols-1 gap-[45px] lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="text-[40px] font-bold leading-[1.1] text-[#4f832a] lg:text-[50px]">
                Made in Agriculture
              </h2>

              <p className="mt-7 max-w-[700px] text-[18px] leading-[1.75] text-[#444]">
                We are a part of the Farm Credit System, a nationwide
                agricultural network providing credit and affiliated services
                to those in agriculture and related industries across the
                United States. Since 1916, the Farm Credit System has supplied
                the nation&apos;s agricultural industry with nearly one-third
                of its credit needs.
              </p>

              <a
                href="https://farmcredit.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-fit items-center gap-[8px] bg-[#496f88] px-[24px] py-[14px] text-[15px] font-bold text-white transition hover:bg-[#3e6077]"
              >
                Visit FarmCredit.com
                <svg
                  viewBox="0 0 24 24"
                  className="h-[14px] w-[14px] fill-white"
                  aria-hidden="true"
                >
                  <path d="M14 3v2h3.59L7 15.59 8.41 17 19 6.41V10h2V3h-7zM5 5v14h14v-7h-2v5H7V7h5V5H5z" />
                </svg>
              </a>
            </div>

            <div className="relative min-h-[360px] overflow-hidden lg:min-h-[500px]">
              <Image
                src="/images/who we are/Made-in-Agriculture_Featured-Content.jpg"
                alt="Smiling agricultural producer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
    WHO WE SERVE
========================================================= */}
<section className="bg-white">
  <div className="mx-auto w-full max-w-[1500px] px-[4%] py-[70px] lg:py-[100px]">
    <div className="grid grid-cols-1 items-center gap-[45px] lg:grid-cols-2">

      {/* IMAGE — LEFT */}
      <div className="relative h-[300px] w-full overflow-hidden lg:h-[420px]">
        <Image
          src="/images/who we are/Who-We-Serve_Featured-Content.jpg"
          alt="Tractor tilling a New England field"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* TEXT — RIGHT */}
      <div className="flex flex-col justify-center">
        <h2 className="text-[40px] font-bold leading-[1.1] text-[#4f832a] lg:text-[50px]">
          Who We Serve
        </h2>

        <p className="mt-7 max-w-[750px] text-[18px] leading-[1.75] text-[#444]">
          Farm Funding serves the credit and financial needs of more than
          18,000 producers involved in farming, forestry, fishing and
          related agribusinesses. We also finance country homes.
        </p>

        <Link
          href="/industries"
          className="mt-7 inline-flex w-fit bg-[#496f88] px-[24px] py-[14px] text-[15px] font-bold text-white transition hover:bg-[#3e6077]"
        >
          View Industries
        </Link>
      </div>

    </div>
  </div>
</section>

      {/* =========================================================
          HOW WE OPERATE
      ========================================================= */}
      <section className="bg-[#f5f5f2]">
        <div className="mx-auto w-full max-w-[1500px] px-[4%] py-[70px] lg:py-[100px]">
          <div className="grid grid-cols-1 gap-[50px] lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="text-[40px] font-bold leading-[1.1] text-[#4f832a] lg:text-[50px]">
                How We Operate
              </h2>

              <p className="mt-7 text-[18px] leading-[1.75] text-[#444]">
                Farm Funding is a cooperative – owned by more than 18,000
                customers and governed by a{" "}
                <Link
                  href="/about/Leadership/Board-of-directors.html"
                  className="text-[#496f88] underline"
                >
                  Board of their peers
                </Link>
                . In addition to customer-elected directors, local{" "}
                <Link
                  href="/about/Leadership/Regional-Advisory-Committees.html"
                  className="text-[#496f88] underline"
                >
                  Regional Advisory Committees
                </Link>{" "}
                provide local industry expertise and guidance.
              </p>

              <p className="mt-6 text-[18px] leading-[1.75] text-[#444]">
                Along with a share of voice, our customer-owners may get a
                share of our net returns in the form of a patronage payment
                based on their financing with us.
              </p>

              <Link
                href="/about/Who-We-Are/Patronage-Dividends.html"
                className="mt-7 inline-flex w-fit bg-[#496f88] px-[24px] py-[14px] text-[15px] font-bold text-white transition hover:bg-[#3e6077]"
              >
                View Patronage Program
              </Link>
            </div>

            <div className="relative min-h-[360px] overflow-hidden lg:min-h-[500px]">
              <Image
                src="/images/who we are/How-We-Operate_Featured-Content.jpg"
                alt="Greenhouse grower smiling"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE OFFER
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1500px] px-[4%] py-[70px] lg:py-[100px]">
          <div className="grid grid-cols-1 gap-[50px] lg:grid-cols-2">
            <div className="relative order-2 min-h-[360px] overflow-hidden lg:order-1 lg:min-h-[500px]">
              <Image
                src="/images/who we are/What-We-Offer_Featured-Content.jpg"
                alt="Agricultural analyst in a field during harvest season"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="order-1 flex flex-col justify-center lg:order-2">
              <h2 className="text-[40px] font-bold leading-[1.1] text-[#4f832a] lg:text-[50px]">
                What We Offer
              </h2>

              <p className="mt-7 max-w-[850px] text-[18px] leading-[1.75] text-[#444]">
                We are a leading provider of credit and financial services for
                Northeast agriculture, including those who work in the farming,
                livestock, timber, fishing and nursery industries.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  href="/financing"
                  className="bg-[#496f88] px-[24px] py-[14px] text-[15px] font-bold text-white transition hover:bg-[#3e6077]"
                >
                  Explore Financing
                </Link>

                <Link
                  href="/services"
                  className="bg-[#496f88] px-[24px] py-[14px] text-[15px] font-bold text-white transition hover:bg-[#3e6077]"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COMMUNITY
      ========================================================= */}
      <section className="bg-[#f5f5f2]">
        <div className="mx-auto w-full max-w-[1500px] px-[4%] py-[70px] lg:py-[100px]">
          <div className="grid grid-cols-1 gap-[50px] lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="text-[40px] font-bold leading-[1.1] text-[#4f832a] lg:text-[50px]">
                Commitment to Northeast Rural Communities
              </h2>

              <p className="mt-7 text-[18px] leading-[1.75] text-[#444]">
                Farm Funding&apos;s commitment to Northeast rural communities
                extends beyond credit and financial services. In addition to
                sponsoring local agricultural events and offering various
                scholarships to support agricultural education and the
                industry&apos;s future leaders, many Farm Funding teammates
                volunteer in their community and with agricultural
                organizations. Farm Funding also offers various grant programs
                that support the quality of life in rural communities.
              </p>

              <Link
                href="/about/community-support.html"
                className="mt-7 inline-flex w-fit bg-[#496f88] px-[24px] py-[14px] text-[15px] font-bold text-white transition hover:bg-[#3e6077]"
              >
                View Community Support
              </Link>
            </div>

            <div className="relative min-h-[360px] overflow-hidden lg:min-h-[500px]">
              <Image
                src="/images/who we are/Giving-Back_Stover-presents-Paillex-w-1000-check_Featured-Content.jpg"
                alt="Farm Funding representative hands a community organization a $1,000 check"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BACK TO OUR ROOTS
      ========================================================= */}
      <section className="bg-[#eef3e6]">
        <div className="mx-auto w-full max-w-[1500px] px-[4%] py-[70px] lg:py-[100px]">
          <div className="grid grid-cols-1 gap-[50px] lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="text-[40px] font-bold leading-[1.1] text-[#4f832a] lg:text-[50px]">
                Back to Our Roots
              </h2>

              <p className="mt-7 text-[18px] leading-[1.75] text-[#444]">
                Our 2025 Sustainability Report shares Farm Funding&apos;s
                efforts to support Northeast agriculture through the lens of
                our association pillars: exceptional customer and employee
                experience; quality growth; stewardship; data security; and
                operational excellence. This year&apos;s report shows how Farm
                Funding remains committed to helping our customers achieve
                their goals.
              </p>

              <p className="mt-6 text-[18px] leading-[1.75] text-[#444]">
                As we continue to evolve our business, we stay rooted in what
                matters most: Northeast agriculture, our commitment to
                customer-owners, and our focus on long-term strength.
              </p>

              <Link
                href="/about/NewsRoom/press-releases/2025SustainabilityReport.html"
                className="mt-7 inline-flex w-fit bg-[#496f88] px-[24px] py-[14px] text-[15px] font-bold text-white transition hover:bg-[#3e6077]"
              >
                Read the Sustainability Report
              </Link>
            </div>

            <div className="relative min-h-[360px] overflow-hidden lg:min-h-[500px]">
              <Image
                src="/images/who we are/two men walking through orchard.jpg"
                alt="Two men walking through an orchard"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHERE WE ARE LOCATED
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1500px] px-[4%] py-[70px] lg:py-[100px]">
          <div className="grid grid-cols-1 items-center gap-[45px] lg:grid-cols-2">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/who we are/Where-We-Are-Located_Option-2_Featured-Content.png"
                alt="Green outlines of Farm Funding's eight-state territory"
                fill
                className="object-contain object-left"
                sizes="(max-width: 1024px) 100vw, 700px"
              />
            </div>

            <div>
              <h2 className="text-[40px] font-bold leading-[1.1] text-[#4f832a] lg:text-[50px]">
                Where We Are Located
              </h2>

              <p className="mt-7 text-[18px] leading-[1.75] text-[#444]">
                Farm Funding has{" "}
                <Link
                  href="/contact"
                  className="text-[#333] underline"
                >
                  locations
                </Link>{"/contact "}
                within Connecticut, Maine, Massachusetts, New Hampshire, Rhode
                Island, New York, New Jersey and Vermont.
              </p>

              <Link
                href="/about/Who-We-Are/How-We-Serve-Northeast-Agriculture.html"
                className="mt-7 inline-flex w-fit bg-[#496f88] px-[24px] py-[14px] text-[15px] font-bold text-white transition hover:bg-[#3e6077]"
              >
                How We Serve Each State
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
          FULL WIDTH
      ========================================================= */}
      <section className="bg-[#f5f5f2]">
        <div className="mx-auto w-full max-w-[1500px] px-[4%] py-[70px] lg:py-[100px]">
          <h2 className="text-[40px] font-bold leading-[1.1] text-[#4f832a] lg:text-[50px]">
            FAQs
          </h2>

          <div
            className="mt-[45px] w-full border-t"
            style={{ borderColor: FAQ_DIVIDER }}
          >
            {faqs.map((faq, index) => {
              const open = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="w-full border-b"
                  style={{ borderColor: FAQ_DIVIDER }}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() =>
                      setOpenFaq(open ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-8 py-[28px] text-left"
                  >
                    <span className="max-w-[1250px] text-[20px] font-bold leading-[1.4] text-[#333] lg:text-[23px]">
                      {faq.question}
                    </span>

                    <ChevronIcon open={open} />
                  </button>

                  {open && (
                    <div
                      id={`faq-answer-${index}`}
                      className="w-full max-w-[1250px] pb-[35px] pr-10 text-[17px] leading-[1.8] text-[#444] lg:text-[18px]"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          VIEWS FROM THE FIELD
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1500px] px-[4%] py-[70px] lg:py-[100px]">
          <div className="grid grid-cols-1 gap-[55px] lg:grid-cols-2">
            <div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/who we are/crist-family-portrait_Customer-Spotlight.jpg"
                  alt="Jennifer, Jeff and Joy Crist of Crist Bros. Orchards posing in their state-of-the-art apple packing facility."
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <blockquote className="bg-[#4f832a] p-[35px]">
                <p className="text-[21px] font-semibold italic leading-[1.55] text-white">
                  “Farm Funding is a true partner and ahead of the curve as a
                  lender. Their representatives are facilitators, not road
                  blockers. Credit availability tied to competitive interest
                  rates, crop insurance and regular patronage refunds have
                  positively impacted our business. We could not have carried
                  out many of our projects with any other lender.”
                </p>

                <footer className="mt-5 text-[16px] font-bold italic leading-[1.6] text-white">
                  Jeff Crist
                  <br />
                  Crist Bros. Orchards
                  <br />
                  Walden, New York
                </footer>
              </blockquote>
            </div>

            <div>
              <h2 className="text-[40px] font-bold leading-[1.1] text-[#4f832a] lg:text-[50px]">
                Views From the Field
              </h2>

              <p className="mt-8 text-[27px] font-semibold italic leading-[1.35] text-[#765b00]">
                “Farm Funding is a true partner.”
              </p>

              <h3 className="mt-12 text-[25px] font-bold text-[#4f832a]">
                The mission: immediate expansion
              </h3>

              <p className="mt-4 text-[18px] leading-[1.75] text-[#444]">
                The Crists came to Farm Funding to expand their business after
                increasing the volume of their apple production and missing key
                sales dates due to breakdowns and other holdups. The family’s
                solution was to replace their out-of-date packinghouse with a
                state-of-the-art facility that would make them more competitive
                and efficient. Knowing that swings in agricultural markets
                would make financing hard to obtain from a commercial lender,
                they turned to Farm Funding.
              </p>

              <h3 className="mt-10 text-[25px] font-bold text-[#4f832a]">
                How we helped
              </h3>

              <p className="mt-4 text-[18px] leading-[1.75] text-[#444]">
                Farm Funding was instrumental in funding an expansion that
                better prepared them to profit from key agricultural cycles.
                Their Farm Funding loan officer’s understanding of the Crists’
                business and industry needs helped shepherd the loan through to
                meet their specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1500px] px-[4%] py-[60px] lg:py-[80px]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <h2 className="text-[40px] font-bold leading-[1.1] text-[#4f832a] lg:text-[50px]">
              Have Additional Questions?
            </h2>

            <Link
              href="/contact" 
              className="inline-flex w-fit shrink-0 bg-[#496f88] px-[25px] py-[15px] text-[15px] font-bold text-white transition hover:bg-[#3e6077]"
            >
              Contact Us
            </Link>
          </div>

          <p className="mt-5 text-[20px] leading-[1.5] text-[#444]">
            Let’s get in touch!
          </p>
        </div>
      </section>
    </main>
  );
}
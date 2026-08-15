"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FarmStartPage() {
  const [openItem, setOpenItem] = useState<number | null>(0);
  const [videoOpen, setVideoOpen] = useState(false);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  useEffect(() => {
    if (!videoOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setVideoOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [videoOpen]);

  const profileItems = [
    {
      image:
        "/images/financing/beginning-farmer-programs/farm-start/drive.png",
      title: "Drive",
      text: "You and your management team need to work hard, smart and have a strong work ethic. Starting a new business means risk, sacrifice and learning new skills in the first few years.",
    },
    {
      image:
        "/images/financing/beginning-farmer-programs/farm-start/record-keeping.png",
      title: "Recordkeeping",
      text: "Good management skills are as important as being a good producer. You either need to love paperwork as much as you love machinery, plants or cattle, or you need to be able to outsource your record-keeping.",
    },
    {
      image:
        "/images/financing/beginning-farmer-programs/farm-start/business-plan.png",
      title: "Business plan",
      text: "Develop a written business plan with a first-year monthly cash flow spreadsheet. Know when and where the money comes from to get you started.",
    },
    {
      image:
        "/images/financing/beginning-farmer-programs/farm-start/support-network.png",
      title: "Support network",
      text: "Starting a business means cultivating information and building a support network of friends and neighbors who can help and provide resources. Along with Farm Credit’s mentor/advisor relationship, this can be a lasting benefit of your business.",
    },
    {
      image:
        "/images/financing/beginning-farmer-programs/farm-start/off-fram-income.png",
      title: "Available off-farm income",
      text: "During the first year, the average new FarmStart business made $19,000 in farm profit before owner’s income. Having off-farm income can provide a financial buffer and mitigate risk to your business.",
    },
    {
      image:
        "/images/financing/beginning-farmer-programs/farm-start/marketing-sales.png",
      title: "Marketing and sales skills",
      text: "Understanding your market and setting realistic sales goals can help keep your business on track.",
    },
  ];

  const accordionItems = [
    {
      title: "Who is eligible?",
      content: (
        <p>
          Farmers, forestry producers, fishermen, farm-related service
          businesses and cooperatives, generally in their first three years of
          business. Candidates are expected to be rural entrepreneurs or
          cooperatives with very little accumulated net worth and few financial
          resources. The applicant also must be an independent enterprise and
          cannot be affiliated with an established operation.
        </p>
      ),
    },
    {
      title: "What resources are available?",
      content: (
        <div className="space-y-5">
          <p>
            <strong>Business plan information:</strong> We&apos;re looking for
            substance, work ethic, responsibility and follow-through. A business
            plan is a productive way for new business owners to demonstrate
            their ability to successfully use their FarmStart investment.
            Please refer to guidelines, available in your local Farm Credit
            East branch or from your advisor, on how to write a business plan.
          </p>

          <p>
            <strong>Advisors:</strong> Each FarmStart participant will work with
            a Farm Credit advisor who is knowledgeable in financial management.
            Advisors stay in touch with participants to help them follow
            through with their business plan.
          </p>
        </div>
      ),
    },
    {
      title: "Who can I contact with questions or to get started?",
      content: (
        <p>
          Learn more by contacting your local{" "}
          <Link
            href="/office-locator"
            className="underline underline-offset-2 hover:no-underline"
          >
            Farm Funders office
          </Link>{" "}
          or email{" "}
          <a
            href="mailto:FarmStart@farmcrediteast.com"
            className="underline underline-offset-2 hover:no-underline"
          >
            FarmStart@farmcrediteast.com
          </a>
          .
        </p>
      ),
    },
  ];

  return (
    <>
      <main className="bg-white text-[#111]">
        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="bg-white">
          <div className="mx-auto grid max-w-[1500px] grid-cols-1 lg:grid-cols-2">
            {/* LEFT */}
            <div className="flex items-center px-[6%] py-[70px] lg:min-h-[475px] lg:px-[7%]">
              <div className="w-full">
                <h1 className="m-0 max-w-[700px] text-[42px] font-bold leading-[1.12] text-[#4f832a] sm:text-[46px] lg:text-[50px]">
                  FarmStart Seed Capital
                </h1>

                <p className="mt-[34px] max-w-[700px] text-[18px] leading-[1.7] text-[#171717]">
                  Anything worth growing needs encouragement, including the next
                  generation in agriculture.
                </p>

                <Link
                  href="/contact"
                  className="mt-[31px] inline-flex items-center bg-[#496f88] px-[23px] py-[14px] text-[16px] font-bold text-white transition hover:bg-[#3e6077]"
                >
                  Contact My Office
                </Link>
              </div>
            </div>

            {/* RIGHT HERO IMAGE */}
            <div className="relative h-[360px] w-full sm:h-[400px] lg:h-[378px]">
              <img
                src="/images/financing/beginning-farmer-programs/farm-start/NewMoon_FS_Web_770x622.png"
                alt="Man watering flats in greenhouse"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-white/45" />

              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                aria-label="Play FarmStart video"
                className="absolute left-1/2 top-1/2 z-10 flex h-[96px] w-[96px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#4f832a] transition-transform duration-200 hover:scale-105"
              >
                <span
                  className="ml-[7px]"
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "15px solid transparent",
                    borderBottom: "15px solid transparent",
                    borderLeft: "23px solid white",
                  }}
                />
              </button>
            </div>
          </div>
        </section>

        {/* =========================================================
            INVESTING IN THE FUTURE
        ========================================================= */}
        <section className="bg-white">
          <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-center px-[4%] py-[75px] md:grid-cols-[42%_58%] md:py-[90px] lg:py-[100px]">
            <div className="flex items-center justify-center md:justify-start md:pr-[65px]">
              <Image
                src="/images/financing/beginning-farmer-programs/FarmStart_logo.jpg"
                alt="FarmStart Seed Capital"
                width={570}
                height={300}
                className="h-auto w-full max-w-[570px] object-contain"
              />
            </div>

            <div className="mt-[45px] md:mt-0">
              <h2 className="m-0 max-w-[850px] text-[38px] font-bold leading-[1.15] text-[#4f832a] md:text-[42px] lg:text-[46px]">
                Investing in the future of agriculture
              </h2>

              <p className="mt-[25px] max-w-[800px] text-[18px] leading-[1.65]">
                FarmStart is a Farm Funders program that makes working capital
                investments of up to $75,000 to Northeast agricultural
                ventures showing promise of success with limited financial
                resources.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            HOW TO GET STARTED
        ========================================================= */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1500px] px-[4%] pb-[75px]">
            <h2 className="m-0 text-[42px] font-bold leading-[1.15] text-[#4f832a] lg:text-[46px]">
              How to Get Started
            </h2>

            <p className="mt-[28px] max-w-[1450px] text-[18px] leading-[1.7]">
              FarmStart offers a source of credit for startups who are not
              generally eligible for conventional lending programs.{" "}
              <a
                href="https://issuu.com/farmcredit/docs/farmstart"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                Click here
              </a>{" "}
              to view the FarmStart report, which highlights 10 FarmStart
              participants and the approaches many participants are using to
              garner success in the competitive agriculture industry.
            </p>

            <div className="mt-[48px]">
              {accordionItems.map((item, index) => {
                const isOpen = openItem === index;

                return (
                  <div
                    key={item.title}
                    className="border-t border-[#d47c19] last:border-b"
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(index)}
                      className={`flex w-full items-center justify-between border-x-2 border-black px-[22px] py-[22px] text-left ${
                        isOpen ? "border-b-0" : "border-b-2"
                      }`}
                    >
                      <span className="pr-5 text-[20px] font-bold md:text-[22px]">
                        {item.title}
                      </span>

                      <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center text-[28px] font-light leading-none">
                        {isOpen ? "⌃" : "⌄"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="border-x-2 border-b-2 border-black px-[22px] py-[28px] text-[17px] leading-[1.7] md:text-[18px]">
                        {item.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            PROFILE OF SUCCESSFUL PARTICIPANTS
        ========================================================= */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1500px] px-[4%] py-[35px] lg:py-[45px]">
            <h2 className="m-0 text-[40px] font-bold leading-[1.15] text-[#4f832a] lg:text-[46px]">
              Profile of Successful FarmStart Participants
            </h2>

            <div className="mt-[42px] grid grid-cols-1 gap-x-[55px] gap-y-[42px] sm:grid-cols-2 lg:grid-cols-4">
              {profileItems.map((item) => (
                <article key={item.title} className="min-w-0">
                  <div className="flex h-[76px] items-start">
                    <img
                      src={item.image}
                      alt=""
                      className="h-[70px] w-[70px] object-contain object-left"
                    />
                  </div>

                  <h3 className="mt-[24px] text-[22px] font-bold leading-[1.25]">
                    {item.title}
                  </h3>

                  <p className="mt-[28px] text-[17px] leading-[1.6]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            VIEWS FROM THE FIELD (REPLACED / REFACTORED)
        ========================================================= */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1500px] px-[4%] py-[80px] lg:py-[90px]">
            <div className="grid grid-cols-1 gap-[55px] lg:grid-cols-12 lg:gap-[65px]">
              {/* LEFT COLUMN: HERO IMAGE & FEATURED QUOTE CARD */}
              <div className="flex flex-col lg:col-span-5">
                <div className="relative w-full overflow-hidden shadow-sm">
                  <img
                    src="/images/financing/beginning-farmer-programs/farm-start/FranckeWeb_710x495.png"
                    alt="Colleen Francke, Summit Point Seafood Founder"
                    className="block aspect-[710/495] w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between bg-[#4f832a] p-8 text-center text-white md:p-10">
                  <p className="text-[20px] font-semibold leading-[1.4] md:text-[22px]">
                    Colleen Francke, Summit Point Seafood Founder, Casco Bay, Maine
                  </p>

                  <blockquote className="my-6 border-none p-0 text-[18px] italic leading-[1.6] md:text-[20px]">
                    &ldquo;It is rewarding to be able to work with beginning
                    entrepreneurs through the early stages of their business and
                    see how their hard work pays off over the next few
                    years.&rdquo;
                  </blockquote>

                  <p className="text-[15px] font-bold uppercase tracking-wider md:text-[16px]">
                    &mdash; Kathryn Bisson, FarmStart Advisor
                  </p>
                </div>
              </div>

              {/* RIGHT COLUMN: ARTICLE CONTENT */}
              <div className="flex flex-col justify-center lg:col-span-7">
                <h2 className="m-0 text-[38px] font-bold leading-[1.15] text-[#4f832a] lg:text-[46px]">
                  Views From the Field
                </h2>

                <div className="mt-6 space-y-6 text-[18px] leading-[1.7] text-[#333]">
                  <div>
                    <h3 className="mb-2 text-[22px] font-bold text-[#111]">
                      The Mission: Secure credit for startup entrepreneurs
                    </h3>
                    <p>
                      Colleen Francke, Summit Point Seafood Founder, always knew
                      she wanted to be on the water, but after nearly a decade
                      offshore lobstering, she set her sights on something new —
                      kelp production.
                    </p>
                  </div>

                  <p>
                    Today, Colleen harvests macroalgae, the large brown kelp, on 18
                    acres in Casco Bay, Maine. Production starts indoors in the
                    fall and in November is transplanted to horizontal lines that
                    run about seven feet below the water&apos;s surface. The kelp
                    grows over the course of the winter and is harvested in the
                    spring.
                  </p>

                  <div>
                    <h3 className="mb-2 text-[22px] font-bold text-[#111]">
                      How we helped
                    </h3>
                    <p>
                      The FarmStart program invests working capital of up to
                      $75,000 in Northeast agriculture, fishing and forest
                      products ventures showing promise of success. Early in her
                      business, Colleen was introduced to FarmStart and teamed up
                      with a business advisor through FarmStart&apos;s collaboration
                      with SCORE.
                    </p>
                  </div>

                  <blockquote className="border-l-4 border-[#4f832a] pl-4 italic text-[#444]">
                    &ldquo;SCORE was the most valuable component of the
                    FarmStart program for me. My advisor helped me think through
                    every aspect of the business, helped to identify gaps, and
                    prepare for potential market fluctuations. This helpful
                    learning tool turned my project into something I could
                    actually make a living at.&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            YOU MIGHT ALSO LIKE
        ========================================================= */}
        <section className="bg-[#eef3e6]">
          <div className="mx-auto max-w-[1500px] px-[4%] py-[90px]">
            <h2 className="m-0 text-[40px] font-bold text-[#4f832a] lg:text-[46px]">
              You Might Also Like
            </h2>

            <div className="mt-[45px] grid grid-cols-1 gap-[50px] md:grid-cols-3">
              <article>
                <span className="inline-block bg-[#666] px-[11px] py-[7px] text-[14px] font-bold uppercase text-white">
                  Business Tips and Tools
                </span>

                <h3 className="mt-[14px] text-[25px] font-normal leading-[1.25] text-[#765b00]">
                  Summer 2025 Financial Partner
                </h3>

                <p className="mt-[45px] text-[14px] font-bold uppercase text-[#777]">
                  August 4, 2025
                </p>
              </article>

              <article>
                <span className="inline-block bg-[#666] px-[11px] py-[7px] text-[14px] font-bold uppercase text-white">
                  Business Tips and Tools
                </span>

                <h3 className="mt-[14px] text-[25px] font-normal leading-[1.25] text-[#765b00]">
                  Spring 2025 Financial Partner: Proactive Strategies for
                  Business Success
                </h3>

                <p className="mt-[45px] text-[14px] font-bold uppercase text-[#777]">
                  March 24, 2025
                </p>
              </article>

              <article>
                <span className="inline-block bg-[#666] px-[11px] py-[7px] text-[14px] font-bold uppercase text-white">
                  Business Tips and Tools
                </span>

                <h3 className="mt-[14px] text-[25px] font-normal leading-[1.25] text-[#765b00]">
                  The 5 Cs of Credit for Young and Beginning Producers
                </h3>

                <p className="mt-[45px] text-[14px] font-bold uppercase text-[#777]">
                  July 15, 2024
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================
          NEWSLETTER
      ========================================================= */}
    <section className="w-full bg-[#4f832a] text-white">
      <div className="mx-auto flex min-h-[300px] max-w-[1200px] flex-col items-center justify-center px-[30px] py-[55px] text-center">
        <h2 className="font-display m-0 text-[30px] font-[800] leading-[1.25] text-white">
          Sign up for our Today&apos;s Harvest Blog.
        </h2>

        <p className="mt-[12px] text-[16px] leading-[1.6] text-white">
          Get the latest blog articles delivered to your inbox.
        </p>

        <form className="mt-[24px] w-full max-w-[520px]">
          <label
            htmlFor="newsletter-email"
            className="mb-[7px] block text-left text-[13px] font-[600] text-white"
          >
            Enter your email*
          </label>

          <div className="flex w-full flex-col gap-[10px] sm:flex-row">
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="email@address.com"
              className="min-w-0 flex-1 rounded-[2px] border-0 bg-white px-[15px] py-[11px] text-[16px] leading-[25px] text-[#231f20] outline-none"
            />

            <button
              type="submit"
              className="w-full shrink-0 rounded-[4px] border-2 border-white bg-[#4f832a] px-[22px] py-[10px] text-[15px] font-[700] leading-[20px] text-white sm:w-auto"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </section>

      {/* =========================================================
          VIDEO MODAL
      ========================================================= */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-5 py-10"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setVideoOpen(false);
            }
          }}
        >
          <div className="relative w-full max-w-[1000px] overflow-hidden bg-black shadow-2xl">
            <button
              type="button"
              onClick={() => setVideoOpen(false)}
              aria-label="Close video"
              className="absolute right-3 top-3 z-10 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-black/70 text-[28px] text-white hover:bg-black"
            >
              ×
            </button>

            <div className="relative aspect-video w-full">
              <video
                className="h-full w-full"
                controls
                autoPlay
                playsInline
                preload="auto"
              >
                <source src="/videos/farmstart.mp4" type="video/mp4" />
                Your browser does not support the video element.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
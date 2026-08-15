"use client";

import Link from "next/link";

export default function CalendarPhotoContestPage() {
  return (
    <main className="w-full bg-white">
      {/* HERO BANNER */}
      <section className="bg-[#4f832a]">
        <div className="mx-auto w-[91.8%] max-w-[1760px] py-[72px] lg:py-[84px]">
          <h1 className="font-display text-[42px] font-bold leading-[1.12] text-[#ecf1e4] lg:text-[52px]">
            <span className="italic">Agricultural Views</span> Photo Calendar
            Contest
          </h1>
        </div>
      </section>

      {/* SHOW YOUR PRIDE */}
      <section className="bg-[#ecf1e4]">
        <div className="mx-auto grid w-[91.8%] max-w-[1760px] grid-cols-1 items-center gap-[70px] py-[90px] lg:grid-cols-[1.4fr_0.9fr] lg:py-[110px]">
          <div>
            <h2 className="font-display text-[38px] font-bold leading-[1.1] text-[#4f832a] lg:text-[44px]">
              Show Your Pride
            </h2>

            <p className="mt-6 max-w-[1000px] text-[18px] leading-[28px] text-[#1b2430] xl:text-[24px] xl:leading-[36px]">
              Help us fill Farm Credit East&rsquo;s{" "}
              <em>Agricultural Views 2027</em> calendar with lots of fresh
              imagery that illustrates the best of Northeast farming,
              horticulture, forestry and commercial fishing, as well as
              creative photos that celebrate country life in New England, New
              York or New Jersey. Your photo entry may appear in Farm
              Funders&rsquo;s <em>Agricultural Views 2027</em> calendar and
              also earn you a $100 cash prize!
            </p>

            <a
              href="https://farmcrediteast.smapply.us/prog/photo_contest_/"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex h-[51px] items-center justify-center rounded-[3px] bg-[#496d83] px-6 text-[16px] font-bold text-white transition hover:bg-[#52768a]"
            >
              Enter your photos ↗
            </a>
          </div>

          <div className="justify-self-center lg:justify-self-end">
            <img
              src="/images/resources/Calendar-Photo-Contest/2026 AgViews Calendar Cover-1.jpg"
              alt="Agricultural Views Calendar"
              className="w-full max-w-[625px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* ACCEPTABLE ENTRIES */}
      <section className="bg-white py-[110px]">
        <div className="mx-auto w-[91.8%] max-w-[1760px]">
          <h2 className="text-[32px] font-bold text-[#182a3b]">
            Acceptable Contest Entries
          </h2>

          <ul className="mt-8 space-y-5 pl-6 text-[19px] leading-[31px] text-[#182a3b]">
            <li>
              Planting, timber, irrigation, livestock or harvest scenes.
            </li>

            <li>
              Industry shots of vineyards, commercial fishing, dairy farms,
              orchards, vegetable operations, nurseries, greenhouses, etc.
            </li>

            <li>Action shots in fields, forests, barns or docks.</li>

            <li>
              Seasonal photos, such as holiday decorations, Fourth of July
              events, pumpkins, winter scenes, etc.
            </li>

            <li>
              County fairs, roadside markets or farmers&rsquo; markets.
            </li>

            <li>4-H or FFA events.</li>
          </ul>

          <h3 className="mt-12 text-[20px] font-bold text-[#182a3b]">
            Need creative inspiration?
          </h3>

          <p className="mt-2 text-[19px] text-[#182a3b]">
            View our most recent Agricultural Views Photo Calendar.
          </p>

          <a
            href="https://farm-funders.com/-/media/farm-credit-east/Calendar-photo-contest/Calendars/2026%20Agricultural%20Views%20Calendar.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex h-[51px] items-center justify-center rounded-[3px] bg-[#496d83] px-6 text-[16px] font-bold text-white transition hover:bg-[#52768a]"
          >
            Download 2026 Calendar
          </a>
        </div>
      </section>

      {/* RULES */}
      <section className="bg-[#f8f8f8] py-[110px]">
        <div className="mx-auto w-[91.8%] max-w-[1760px]">
          <h2 className="font-display text-[40px] font-bold text-[#4f832a]">
            The rules
          </h2>

          <ul className="mt-10 space-y-5 pl-6 text-[19px] leading-[31px] text-[#182a3b]">
            <li>
              Photo must be taken in New England, New York or New Jersey.
            </li>

            <li>
              High-resolution (at least 1MB) images digitally submitted via
              the form below. Please note: the resolution of the photo
              submitted is used for judging.
            </li>

            <li>
              Do not touch up or add filters to photos prior to submitting.
            </li>

            <li>
              No negatives, printed photos or links to web libraries.
            </li>

            <li>
              Photos should have horizontal orientation.
            </li>

            <li>
              Images become the property of Farm Funders as outlined in the
              fine print below.
            </li>

            <li>
              Individuals may submit multiple entries.
            </li>

            <li>
              Parties submitting photos are asked in their submission if they
              have permission of all individuals shown in each photo and all
              individuals owning property shown in each photo. If not and the
              photo is selected, this permission will be required to be
              obtained.
            </li>
          </ul>
        </div>
      </section>

      {/* WINNING PHOTOS */}
      <section className="bg-white py-[110px]">
        <div className="mx-auto w-[91.8%] max-w-[1760px]">
          <h2 className="text-[32px] font-bold text-[#182a3b]">
            Winning photos
          </h2>

          <p className="mt-6 max-w-[1100px] text-[19px] leading-[31px] text-[#182a3b]">
            Fourteen (14) photos will be selected for a $100 cash prize each.
            We will also award $25 prizes for small shots that we run in the
            date blocks.
          </p>

          <h2 className="mt-16 text-[32px] font-bold text-[#182a3b]">
            Timeline
          </h2>

          <p className="mt-6 text-[19px] leading-[31px] text-[#182a3b]">
            The deadline to submit photos to the 2027{" "}
            <em>Agricultural Views</em> calendar is July 31, 2026. Winners
            will be contacted by October 15, 2026.
          </p>

          <h2 className="mt-16 text-[32px] font-bold text-[#182a3b]">
            Get Started
          </h2>

          <p className="mt-6 max-w-[900px] text-[19px] leading-[31px] text-[#182a3b]">
            Please use the button below to submit your photos. If you have
            additional questions, please contact your{" "}
            <a
              href="/contact#offices"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              local office
            </a>
            .
          </p>

          <a
            href="https://farmcrediteast.smapply.us/prog/photo_contest_/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex h-[51px] items-center justify-center rounded-[3px] bg-[#496d83] px-6 text-[16px] font-bold text-white transition hover:bg-[#52768a]"
          >
            Enter your photos ↗
          </a>
        </div>
      </section>
    </main>
  );
}
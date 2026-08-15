"use client";

import Link from "next/link";

export default function CustomerAppreciationMeetingPage() {
  return (
    <main className="w-full bg-white">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="bg-[#4f832a]">
        <div className="mx-auto flex min-h-[500px] w-[91.8%] max-w-[1495px] items-center">
          <div className="grid w-full grid-cols-1 items-center lg:grid-cols-[1.25fr_0.75fr]">
            {/* HERO TEXT */}
            <div>
              <h1 className="m-0 max-w-[700px] font-display text-[42px] font-bold leading-[1.12] tracking-[-0.5px] text-white lg:text-[52px]">
                2026 Customer
                <br />
                Appreciation Events
              </h1>

              <p className="mt-[34px] max-w-[760px] text-[18px] font-semibold leading-[31px] text-white lg:text-[19px] lg:leading-[31px]">
                As a cooperative, our customers are at the core of everything
                we do. Farm Funders continues to be successful thanks to the
                strength and innovation of our members. We hope you'll join us
                at an event this summer to show our appreciation.
              </p>
            </div>

            {/*
              MADE IN AGRICULTURE HERO IMAGE
              Measured directly off the two reference screenshots (both 1920x1080
              captures): the circle badge renders at ~404px diameter on the
              original vs ~205px on localhost — almost exactly 2x off. The prior
              w-[430px] Tailwind class was already close to the right number but
              wasn't actually landing at that width, so this sets it as an
              inline style instead of a bracket class to rule out any
              build/purge issue swallowing it.
            */}
            <div className="flex items-center justify-end">
              <img
                src="/images/resources/customer-appreciation/MadeInAg_Hero550px.png"
                alt="Made in Agriculture"
                style={{ width: "750px", maxWidth: "100%", height: "auto" }}
                className="block object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LOCAL EVENTS DETAILS
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto w-[91.8%] max-w-[1495px] py-[80px] lg:py-[105px]">
          <div className="grid grid-cols-1 items-start gap-[65px] lg:grid-cols-[515px_1fr] lg:gap-[70px]">
            {/* APPRECIATION SIGN */}
            <div className="w-full">
              <img
                src="/images/resources/customer-appreciation/Appreciation Sign-1.png"
                alt="Customer Appreciation"
                style={{ aspectRatio: "740 / 648" }}
                className="block h-auto w-full object-contain"
              />
            </div>

            {/* EVENTS CONTENT */}
            <div className="pt-[3px]">
              <h2 className="m-0 font-display text-[36px] font-bold leading-[1.12] text-[#4f832a] lg:text-[44px]">
                Local Events Details
              </h2>

              <p className="mt-[32px] m-0 text-[18px] leading-[30px] text-[#231f20] lg:text-[19px] lg:leading-[31px]">
                Below is a listing of the local events planned across our
                territory this spring into summer.
              </p>

              <p className="mt-[25px] m-0 text-[16px] italic leading-[28px] text-[#231f20] lg:text-[17px] lg:leading-[30px]">
                *Subject to change. Farm Funders customers are invited to
                attend any of the upcoming customer appreciation events. It is
                not necessary to attend the event of the office you do
                business with.*
              </p>

              {/* =====================================================
                  EVENTS — verified against the live source HTML,
                  no text changes needed.
              ===================================================== */}
              <div className="mt-[38px]">
                <Event
                  title="July 7 | 11 a.m. - 2 p.m. | 21 Brix Winery"
                  details="6654 W Main Rd, Portland, NY 14769 | Hosted by the Mayville, NY office"
                />

                <Event
                  title="July 8 | 5 - 8 p.m. | Columbia County Fairgrounds"
                  details="182 Hudson Ave, Chatham, NY 12037 | Hosted by the Claverack, NY office"
                />

                <Event
                  title="July 21 | 12 - 3 p.m. | Three Brothers Wineries & Estates"
                  details="623 Lerch Rd, Geneva, NY 14456 | Hosted by the Cortland & Geneva, NY offices"
                />

                <Event
                  title="July 22 | 11 a.m. - 3 p.m. | The Hillcrest Estate"
                  details="1940 Craig Rd, Pavilion, NY 14525 | Hosted by the Batavia & Hornell, NY offices"
                />

                <Event
                  title="July 30 | 6 - 8 p.m. | Long Island Horticultural Research Extension Center"
                  details="3059 Sound Ave, Riverhead, NY 11901 | Hosted by the Riverhead, NY office"
                />

                <Event
                  title="August 4 | 5 - 8 p.m. | The Barn on Hyder Creek"
                  details="7954 NY-28, Richfield Springs, NY 13439 | Hosted by the Cooperstown, NY office"
                />

                <Event
                  title="August 5 | 5 - 8 p.m. | Creekstone Farms Weddings & Events"
                  details="11040 Fuller Rd, Adams Center, NY 13606 | Hosted by the Burrville, NY office"
                />

                <Event
                  title="August 6 | 4 - 7 p.m. | The Upper Lodge at Titus Mountain"
                  details="636 Fayette Rd, Malone, NY 12953 | Hosted by the Potsdam, NY office"
                />

                <Event
                  title="August 11 | 11 a.m. - 2 p.m. | Coppal House Farm"
                  details="118 North River Rd, Lee, NH 03861 | Hosted by the Bedford, NH office"
                />

                <Event
                  title="August 12 | 5 - 8 p.m. | Maquam Barn & Winery"
                  details="125 Duffy Rd, Milton, VT 05468 | Hosted by the Vermont offices"
                />

                <Event
                  title="August 19 | 4 - 8 p.m. | Sauchuk's Corn Maze & Pumpkin Patch"
                  details="200 Center Rd, Plympton, MA 02367 | Hosted by the Middleboro, MA office"
                />

                <Event
                  title="August 20 | 4:30 - 7:30 p.m. | The Governor Hill Mansion"
                  details="136 State St, Augusta, ME 04330 | Hosted by the Auburn, ME office"
                />

                <Event
                  title="September 2 | 5 - 8 p.m. | Legacy Ranch & Event Center"
                  details="66 White Rd, Mars Hill, ME 04758 | Hosted by the Presque Isle, ME office"
                />

                <Event
                  title="September 10 | 3 - 7 p.m. | Fair Weather Growers"
                  details="10 County Line Drive, Cromwell, CT 06416 | Hosted by the Enfield, CT office"
                />

                <Event
                  title="September 23 | 6 - 9 p.m. | Hopewell Valley Vineyards"
                  details="46 Yard Rd, Pennington, NJ 08534 | Hosted by the Flemington, NJ office"
                />

                <Event
                  title="September 24 | 5 - 8 p.m. | William Heritage Winery"
                  details="480 Mullica Hill Rd | Hosted by the Bridgeton, NJ office"
                />
              </div>

              {/*
                REGISTER BUTTON
                Fixed: the live source links to https://cvent.me/Ayqav0, not
                farmcrediteast.smapply.us. If smapply.us is intentional (e.g. a
                newer/different registration flow your client wants), revert
                this — but as pulled from the live page right now, cvent.me is
                the accurate href.
              */}
              <div className="mt-[32px]">
                <a
                  href="https://cvent.me/Ayqav0"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-[3px] bg-[#52768a] px-[24px] py-[14px] text-[16px] font-bold text-white transition hover:bg-[#496d83]"
                >
                  Register here ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          QUESTIONS
      ========================================================= */}
      <section className="bg-[#eef3e6]">
        <div className="mx-auto w-[91.8%] max-w-[1495px] py-[58px] lg:py-[55px]">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto]">
            {/* QUESTION TEXT */}
            <div>
              <h2 className="m-0 font-display text-[36px] font-bold leading-[1.12] text-[#4f832a] lg:text-[44px]">
                Have additional questions?
              </h2>

              <p className="mt-[38px] m-0 text-[18px] leading-[30px] text-[#231f20] lg:text-[19px]">
                Please reach out!
              </p>
            </div>

            {/* CONTACT BUTTON */}
            <div className="lg:pr-[180px]">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-[3px] bg-[#52768a] px-[25px] py-[14px] text-[16px] font-bold text-white transition hover:bg-[#496d83]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =============================================================
   EVENT COMPONENT
============================================================= */

function Event({
  title,
  details,
}: {
  title: string;
  details: string;
}) {
  return (
    <div className="mb-[24px]">
      <p className="m-0 text-[17px] font-bold leading-[27px] text-[#231f20] lg:text-[18px] lg:leading-[29px]">
        {title}
      </p>

      <p className="m-0 text-[16px] leading-[27px] text-[#231f20] lg:text-[17px] lg:leading-[28px]">
        {formatEventDetails(details)}
      </p>
    </div>
  );
}

/* =============================================================
   FORMAT "HOSTED BY" AS ITALIC
============================================================= */

function formatEventDetails(text: string) {
  const parts = text.split(" | Hosted by ");

  if (parts.length !== 2) {
    return text;
  }

  return (
    <>
      {parts[0]} | <em>Hosted by {parts[1]}</em>
    </>
  );
}
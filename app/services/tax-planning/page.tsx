"use client";

import Link from "next/link";
import { useState } from "react";
import PlaceholderImage from "@/components/PlaceholderImage";
import VideoHero from "@/components/VideoHero";

/* ---- design tokens pulled directly from style.min.css ---- */
// green (primary/headings):      #4f832a
// blue (secondary/buttons/links): #496d83
// orange/clay (accents, accordion border): #c36d15
// charcoal (body text):          #231f20
// dark gold (title links):       #5a4400
// grey-blue bg (alerts):         #e8ebef
// light green bg (cards):        #ecf1e4
// light grey bg:                 #f8f8f8
// heading font: Montserrat-Bold / Montserrat-SemiBold
// body font: Barlow-Medium

type FaqBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; rows: { label: string; value: string }[] };

type Faq = { q: string; blocks: FaqBlock[] };

const FAQS: Faq[] = [
  {
    q: "What kind of life events and activities can affect my tax situation?",
    blocks: [
      {
        type: "list",
        items: [
          "Marriage, retirement, purchasing a home, etc.",
          "Starting a new business.",
          "Income and expense analysis and projections",
          "Major purchases, sales and investments, including leases",
          "Depreciation schedules.",
          "Organizing farm records",
          "Bringing in another owner",
          "Exiting your business",
        ],
      },
    ],
  },
  {
    q: "When should I call Farm Funders?",
    blocks: [
      {
        type: "p",
        text: "We suggest you consult with a Farm Credit tax planner well in advance of filing your tax return. It's also a good idea to talk to us when you're considering a change in your business.",
      },
    ],
  },
  {
    q: "Are my records confidential?",
    blocks: [
      {
        type: "p",
        text: "You can be assured that the financial information you give to your Farm Funders tax specialist is strictly confidential. If you borrow from us, you decide whether your loan officer may see your tax records.",
      },
    ],
  },
  {
    q: "What is the cost?",
    blocks: [
      {
        type: "table",
        rows: [
          { label: "Basic 1040 tax return without a business schedule", value: "$250, or time entered, whichever is greater" },
          { label: "1040 tax returns with business schedules (including C, E, and F)", value: "$750, or time entered, whichever is greater" },
          { label: "1099's", value: "$150 for the first 10, with $15 for each additional 1099. Any accounting work to determine the list of vendors will be billed at an hourly rate" },
        ],
      },
      {
        type: "p",
        text: "Above pricing is subject to change. For additional tax services, such as tax planning, the cost of our service is dependent on the complexity of your operation. Your Farm Funders tax specialist can give you an estimate after discussing your tax plan.",
      },
    ],
  },
  {
    q: "What are my responsibilities as a customer?",
    blocks: [
      {
        type: "p",
        text: "You are responsible for working with Farm Funders to ensure that your tax deadlines are met. This means holding regular conversations with your tax specialist and regularly updating your records. Also, you will need to make up-to-date records available to your tax specialist to accurately plan for your future. We can help with your Recordkeeping needs as well.",
      },
    ],
  },
  {
    q: "Are there any requirements to utilize Farm Funders's tax services?",
    blocks: [
      { type: "p", text: "Business customers must provide one of the following:" },
      {
        type: "list",
        items: [
          "A backup to their accounting software (e.g. QuickBooks or CenterPoint)",
          "Submit a profit and loss report or summarized financials (not check stubs, receipts or bank statements).",
        ],
      },
      {
        type: "p",
        text: "If you do not have this information, we'd encourage you to consider Farm Funders's recordkeeping services prior to pursuing our tax services.",
      },
    ],
  },
  {
    q: "Are there deadlines for submitting my tax information?",
    blocks: [
      { type: "p", text: "Yes. To ensure the timely completion of tax returns, information to process 1099s must be received by January 17, with a processing cutoff date of January 31." },
      { type: "p", text: "All other information needed to complete the tax return must be received by March 15, otherwise the return will be put on extension." },
      { type: "p", text: "Customers who have their returns completed after April 15, will receive communication in May requesting all outstanding information required to prepare the tax return (excluding any outstanding K-1s that have yet to be received) by June 1." },
    ],
  },
  {
    q: "What types of tax returns does Farm Funders prepare?",
    blocks: [
      {
        type: "list",
        items: [
          "Individual returns",
          "Sole proprietor with Schedule F or C",
          "Partnership",
          "S corporation and C corporation",
          "Fiduciary (for estates and trusts)",
          "Part-time farmers and fishermen",
          "Payroll tax reporting",
          "Sales tax reporting",
          "Estate returns",
          "Gift taxes",
          "Amended returns",
          "Sales and gasoline tax refunds",
          "Retirement plan reporting",
        ],
      },
    ],
  },
  {
    q: "What are some tax provisions Farm Funders can help me with?",
    blocks: [
      {
        type: "p",
        text: "Your Farm Funders specialist will take a close look at your whole situation and provide specific advice to get you the most out of your tax provisions. Some of the frequently overlooked provisions that your specialist can help you identify include:",
      },
      {
        type: "list",
        items: [
          "Depreciation. Has the optimum amount been taken?",
          "Prepaid farm expenses, such as feed and supplies",
          "Special credits, such as rehabilitation credit, earned income credit and investment credit.",
          "Tax benefits that cannot be taken in one year but can be carried over to another year (investment credit, net operating loss).",
          "The sale of assets on Schedule F. Many preparers report these sales on Schedule F, which forces farmers to unnecessarily pay self-employment tax on the income.",
          "The tax considerations of various business structures (partnerships, S corporations, C corporations).",
        ],
      },
    ],
  },
  {
    q: "Do I need to borrow from Farm Funders to utilize tax preparation services?",
    blocks: [
      {
        type: "p",
        text: "You do not need to borrow from us for us to prepare your taxes. You are eligible if you are an individual or enterprise involved in agriculture, fishing and aquaculture, as well as timber, nursery, greenhouse, vineyard and similar operations. Managers, employees and part-time farmers may also use Farm Funders tax preparation services.",
      },
    ],
  },
  {
    q: "What happens if I get audited?",
    blocks: [
      { type: "p", text: "Farm Funders is willing to represent you in an audit. We will prepare the reports and help you navigate through the process." },
    ],
  },
  {
    q: "What happens if a mistake is made?",
    blocks: [
      { type: "p", text: "We will work with you to correct the mistake. If it is our mistake, we will pay any penalties that may occur. If it is due to misinformation, we will work to correct the issue with you for the future and minimize the current penalties." },
    ],
  },
];

const body = "font-['Barlow-Medium'] text-[18px] leading-[28.8px] max-md:text-[16px] max-md:leading-[26px] text-[#231f20]";
const h2Style = "font-['Montserrat-Bold'] text-[#4f832a] text-[40px] leading-[50.2px] max-md:text-[32px] max-md:leading-[38px]";

function FaqBody({ blocks }: { blocks: FaqBlock[] }) {
  return (
    <div className={`${body} pb-4 space-y-3`}>
      {blocks.map((b, i) => {
        if (b.type === "p") return <p key={i}>{b.text}</p>;
        if (b.type === "list")
          return (
            <ul key={i} className="list-disc pl-6 space-y-1.5">
              {b.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        return (
          <table key={i} className="w-full border-collapse text-[16px]">
            <thead>
              <tr>
                <th className="bg-[#4f832a] text-white text-left font-['Montserrat-Bold'] px-4 py-3">Product</th>
                <th className="bg-[#4f832a] text-white text-left font-['Montserrat-Bold'] px-4 py-3">Minimum Pricing</th>
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r, j) => (
                <tr key={j} className={j % 2 === 0 ? "bg-[#f8f8f8]" : "bg-[#ecf1e4]"}>
                  <td className="px-4 py-3 align-top">{r.label}</td>
                  <td className="px-4 py-3 align-top">{r.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      })}
    </div>
  );
}

export default function Page() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <>
 {/* Hero — .hero2-comp */}
<section className="bg-[#f8f8f8]">
  <div className="grid md:grid-cols-2 items-center w-full max-w-[1600px] mx-auto px-4 md:px-[40px] py-[45px] md:py-[55px]">
    <div className="pr-0 md:pr-[70px]">
      <h1 className="font-['Montserrat-Bold'] text-[#4f832a] text-[48px] leading-[57.6px] max-md:text-[36px] max-md:leading-[43.2px]">
        Tax Planning &amp; Prep
      </h1>

      <p className={`${body} pt-[30px] max-w-[720px]`}>
        Tax planning is a year-round effort. Our specialists understand
        agriculture as well as ag taxes, so we can develop a plan to
        minimize the taxes you need to pay. Our tax preparers can take
        the burden of doing your taxes – and look for every deduction
        you deserve.
      </p>

      <Link
        href="/contact"
        className="mt-[30px] inline-block px-[19px] py-[10px] bg-[#496d83] border-2 border-[#496d83] text-white font-['Montserrat-Bold'] text-[16px] rounded-[4px] hover:bg-white hover:text-[#496d83] transition-colors"
      >
        Contact My Office
      </Link>
    </div>

    <div className="w-full">
      <VideoHero
        youtubeId="1PIl6RMdeVU"
        src="/images/services/tax-planning-hero.jpg"
        alt="Close-up of female's hand typing on calculator and reviewing tax documents"
      />
    </div>
  </div>
</section>

      {/* Two-up alert band — .alerts, bg #e8ebef */}
      <section className="bg-[#e8ebef]">
        <div className="max-w-[1320px] mx-auto px-4 md:px-[50px] py-[30px] grid md:grid-cols-2 gap-10 md:divide-x md:divide-white">
          <div className="flex gap-5 items-start md:pr-8">
            {/* Career feature image */}
<img
  src="/images/services/farmers-in-field-with-tablet.jpg"
  alt="Farmers in field with tablet"
  className="h-[150px] w-[170px] shrink-0 rounded-sm object-cover"
  loading="lazy"
/>
            <div>
              <h3 className="font-['Montserrat-SemiBold'] text-[18px] text-[#231f20]">
                Looking for a career you can truly commit to?
              </h3>
              <p className="font-['Barlow-Medium'] text-[16px] text-[#231f20] mt-2">
                Join a dynamic team of tax professionals who build lasting
                client relationships, enjoy work-life balance, and grow
                through a comprehensive training program. Be part of a
                supportive environment where your development matters and
                your contributions make a difference. Start your career
                journey with us today!
              </p>
              <Link href="/about/careers" className="mt-3 inline-block font-['Montserrat-Bold'] text-[14px] text-[#5a4400] hover:underline">
                Learn about open opportunities ›
              </Link>
            </div>
          </div>
          <div className="flex gap-5 items-start md:pl-8">
            {/* Federal tax checks feature image */}
<img
  src="/images/services/federal-checks.png"
  alt="Federal tax checks"
  className="h-[150px] w-[170px] shrink-0 rounded-sm object-cover"
  loading="lazy"
/>
            <div>
              <h3 className="font-['Montserrat-SemiBold'] text-[18px] text-[#231f20]">
                Tax Talks-Federal Government to Phase Out Paper Checks: What It Means for You
              </h3>
              <p className="font-['Barlow-Medium'] text-[16px] text-[#231f20] mt-2">
                Early in 2025, the federal government announced an Executive
                Order aimed at modernizing how federal payments are handled.
                Under Executive Order 14247, signed in March 2025, all
                federal disbursements and receipts will transition to
                electronic formats by September 30, 2025.
              </p>
              <Link href="/resources/blog" className="mt-3 inline-block font-['Montserrat-Bold'] text-[14px] text-[#5a4400] hover:underline">
                Read Now ›
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3-up value props — .column-card, bg #ecf1e4 */}
      <section className="bg-[#ecf1e4]">
        <div className="max-w-[1320px] mx-auto px-4 md:px-[50px] py-[50px] md:py-[100px]">
          <h2 className={h2Style}>Let us take the worry out of tax season.</h2>
          <div className="grid sm:grid-cols-3 gap-8 pt-[30px]">
            <div>
              <h3 className="font-['Montserrat-Bold'] text-[20px] text-[#231f20]">
                We offer long-term tax planning that can mean significant tax savings.
              </h3>
              <p className="font-['Barlow-Medium'] text-[16px] text-[#231f20] pt-[30px]">
                Just as your crop and livestock plans are made in advance,
                your tax liability should be planned in advance, too.
              </p>
            </div>
            <div>
              <h3 className="font-['Montserrat-Bold'] text-[20px] text-[#231f20]">
                Our tax expertise means you get the tax deductions you deserve.
              </h3>
              <p className="font-['Barlow-Medium'] text-[16px] text-[#231f20] pt-[30px]">
                We understand the latest ag tax laws and work to find the deductions you deserve.
              </p>
            </div>
            <div>
              <h3 className="font-['Montserrat-Bold'] text-[20px] text-[#231f20]">
                Easy, seamless process makes it convenient for you.
              </h3>
              <p className="font-['Barlow-Medium'] text-[16px] text-[#231f20] pt-[30px]">
                We make tax planning and preparation as easy and hassle free as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services offered — .col-header, plain white */}
      <section className="bg-white">
        <div className="max-w-[1320px] mx-auto px-4 md:px-[50px] py-[50px] md:py-[100px]">
          <h2 className={h2Style}>Tax Services We Offer</h2>
          <div className="grid sm:grid-cols-2 gap-10 pt-[30px]">
            <div>
              <h3 className="font-['Montserrat-SemiBold'] text-[28px] leading-[33.6px] text-[#231f20] pb-[30px]">
                Tax Planning
              </h3>
              <p className={`${body} mb-3`}>There are several ways to realize deduction, including:</p>
              <div className={`${body} space-y-3`}>
                <p><strong>Business organization</strong><br />
                  For example, operating as a partnership may offer more tax savings than operating as a sole proprietor.</p>
                <p><strong>Family tax planning</strong><br />
                  Hiring family members to work in the business could reduce family tax liability.</p>
                <p><strong>Fringe benefits</strong><br />
                  Setting up retirement plans, medical plans and other fringe benefits could mean attractive tax deductions for many businesses.</p>
              </div>
            </div>
            <div>
              <h3 className="font-['Montserrat-SemiBold'] text-[28px] leading-[33.6px] text-[#231f20] pb-[30px]">
                Tax Preparation
              </h3>
              <p className={body}>
                Agricultural businesses are subject to a variety of tax laws,
                deductions and requirements that may not be familiar to
                nonspecialized advisers and tax preparers. Using a Farm
                Funders tax specialist ensures you&apos;ll receive the
                correct and maximum deductions and allowances while avoiding
                penalties for failing to meet any special requirements.{" "}
                <Link href="/services/tax-planning-and-prep/requirements" className="text-[#496d83] underline">
                  Review our tax preparation requirements.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started band — .basic-grey, bg #f8f8f8 (NOT dark) */}
      <section className="bg-[#f8f8f8]">
        <div className="max-w-[1320px] mx-auto px-4 md:px-[50px] py-[50px] md:py-[100px]">
          <h2 className={h2Style}>Get Started</h2>
          <p className={`${body} pt-[30px] max-w-2xl`}>
            Ready to get a head start on your taxes? We encourage you to{" "}
            <Link href="/services/tax-planning-and-prep/requirements" className="text-[#496d83] underline">
              review our tax preparation requirements
            </Link>{" "}
            before submitting an inquiry. If you&apos;re aligned with our
            standards and commitment to your business, contact your local
            Farm Funders office to get started.
          </p>
          <Link
            href="/contact"
            className="mt-[30px] inline-block px-[19px] py-[10px] bg-[#496d83] border-2 border-[#496d83] text-white font-['Montserrat-Bold'] text-[16px] rounded-[4px] hover:bg-white hover:text-[#496d83] transition-colors"
          >
            Contact My Office
          </Link>
        </div>
      </section>

      {/* You Might Also Like — .rel-article-card, bg #ecf1e4 */}
      <section className="bg-[#ecf1e4]">
        <div className="max-w-[1320px] mx-auto px-4 md:px-[50px] py-[50px] md:py-[100px]">
          <h2 className={h2Style}>You Might Also Like</h2>
          <div className="grid md:grid-cols-3 gap-10 pt-[30px]">
            {[
              { tag: "Business Tips and Tools", title: "A Smarter Safety Net: What the New USDA Payment Rules Mean for Your Farm", date: "June 30, 2026" },
              { tag: "Tax Talks", title: "Highlights from the Fiscal Year 2026-2027 NYS Budget", date: "June 4, 2026" },
              { tag: "Tax Talks", title: "Research & Development Tax Credits for Farms: A Case Study", date: "April 22, 2026" },
            ].map((r) => (
              <div key={r.title}>
                <span className="inline-block bg-[#686868] text-white border border-[#686868] rounded-[2px] font-['Barlow-Bold'] text-[16px] leading-[19px] px-[10px] py-[5px]">
                  {r.tag}
                </span>
                <h4 className="font-['Montserrat-SemiBold'] text-[25px] leading-[32px] text-[#5a4400] pt-[15px]">
                  {r.title} ›
                </h4>
                <span className="mt-4 block font-['Barlow-Bold'] text-[16px] text-[#686868] uppercase">{r.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ accordion — white bg, thin orange divider lines, chevron toggle */}
      <section className="bg-white">
        <div className="max-w-[1050px] mx-auto px-4 md:px-[50px] py-[50px] md:py-[100px]">
          <h2 className={h2Style}>Tax Planning &amp; Preparation FAQs</h2>
          <div className="mt-[30px] border-t-2 border-[#c36d15]">
            {FAQS.map((f, i) => (
              <div key={f.q} className="border-b-2 border-[#c36d15]">
                <button
                  type="button"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between py-4 text-left font-['Montserrat-Bold'] text-[20px] leading-[32px] text-[#231f20]"
                >
                  {f.q}
                  <svg
                    className={`ml-4 shrink-0 w-4 h-4 text-[#231f20] transition-transform ${openIdx === i ? "rotate-180" : ""}`}
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m2 5 6 6 6-6" />
                  </svg>
                </button>
                {openIdx === i && <FaqBody blocks={f.blocks} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter — .newsletter, bg #4f832a (only dark-green section) */}
      <section className="bg-[#4f832a] text-white">
        <div className="max-w-[1320px] mx-auto px-4 md:px-[50px] py-[60px] text-center">
          <h2 className="font-['Montserrat-Bold'] text-white text-[40px] leading-[50.2px] max-md:text-[32px] max-md:leading-[38px]">
            Sign up for our Today&apos;s Harvest Blog.
          </h2>
          <p className="font-['Barlow-Medium'] text-[18px] mt-3">
            Get the latest blog articles delivered to your inbox.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="email@address.com"
              className="flex-1 px-4 py-3.5 rounded-[2px] bg-white text-[#231f20] font-['Barlow-Medium'] text-[18px] focus:outline-none"
            />
            <button
              type="submit"
              className="px-[18px] py-[4px] bg-transparent border-2 border-white text-white font-['Montserrat-Bold'] text-[16px] rounded-[4px] hover:bg-white hover:text-[#4f832a] transition-colors"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type RelatedArticle = {
  category: string;
  categoryHref: string;
  title: string;
  date: string;
  href: string;
};

type Report = {
  title: string;
  date: string;
  issue: string;
  category: string;
  sections: {
    id: string;
    heading: string;
    paragraphs: string[];
    image?: string;
    imageAlt?: string;
    caption?: string;
    source?: string;
  }[];
  editor?: string;
  contributors?: string;
  tags: string[];
  relatedArticles: RelatedArticle[];
};

const SITE_URL = "https://farm-funding.vercel.app";
const REPORT_SLUG = "2606KEP_FuelFertilizerandConflictinMiddleEast";
const OUTLOOKS_PATH = "/resources/Industry-Trends-and-Outlooks";
const BLOG_PATH = "/resources/todays-harvest-Blog";
const AUTHORS_PATH = "/en/resources/Meet-the-Authors";

const REPORTS: Record<string, Report> = {
  "2606KEP_FuelFertilizerandConflictinMiddleEast.html": {
    title: "Fuel, Fertilizer and Conflict in the Middle East: What to Know Now",
    date: "June 2, 2026",
    issue: "Volume 20, Issue 6",
    category: "Knowledge Exchange Partner",
    sections: [
      {
        id: "motor-fuels",
        heading: "Motor Fuels",
        paragraphs: [
          "It’s no secret that fuel prices have increased sharply since the U.S. conflict with Iran began at the end of February 2026. The war has led to a blockage of oil tanker ships traveling through the Strait of Hormuz, where prior to the conflict, approximately 20% to 25% of the world’s global oil supply, or 20 to 21 million barrels per day flowed.",
          "While the U.S. has become the world’s largest producer of crude oil, (and is actually a net exporter of oil at this point — exporting around 2.8 million more barrels per day than we import), oil prices are heavily influenced by global market conditions. As such, we have seen sustained increases in domestic crude oil prices, and subsequently, gasoline and diesel prices.",
          "The cause and effect of the rise in fuel costs was immediate and obvious, but what will come next? When can we expect fuel prices to decline? Unfortunately, the answers are much less clear. If hostilities between the U.S. and Iran end, and/or an agreement is reached to reopen the Strait of Hormuz sometime in June, ship traffic through the Strait would likely start to pick up shortly thereafter. However, for a number of reasons, oil shipments in the region are unlikely to return to pre-conflict levels until the end of the year, if not later.",
          "While oil futures markets would likely drop immediately after the reopening of the Strait, it could take up to six months for physical oil trade flows to normalize and retail prices at the pump to fall to pre-conflict levels. Energy analysts forecast that wholesale crude oil is unlikely to fall below $80 per barrel this year. Subsequently, retail gasoline prices will likely remain elevated well into 2027. The U.S. Energy Information Administration forecasts the average price of a gallon of gas at $3.88 for 2026, assuming the Iran war is resolved in June.",
        ],
        image: "/images/resources/Industry-Trends-and-Outlooks/Reports/2606KEP_FuelFertilizerandConflictinMiddleEast/June KEP_avg motor fuel.png",
        imageAlt: "Chart of U.S. Average Motor Fuel Cost, May 2025-May 2026",
        caption: "U.S. Average Motor Fuel Cost, May 2025-May 2026",
        source: "Source: U.S. Energy Information Administration",
      },
      {
        id: "fertilizer",
        heading: "Fertilizer",
        paragraphs: [
          "In 2024, approximately 30% of global fertilizer trade passed through the Strait of Hormuz to export markets around the world, including the U.S. While supplies of potash are less affected, nitrogen and phosphate are significantly impacted. Over the past three years, the Middle East was the biggest regional exporter of urea and ammonia, two common forms of nitrogen fertilizer. In addition to direct exports of fertilizer, the Persian Gulf is a major exporter of liquified natural gas (LNG), which is vital to fertilizer production elsewhere.",
          "For phosphate fertilizer, the Persian Gulf region accounts for 26% of diammonium phosphate (DAP) and 13% of monoammonium phosphate (MAP) exports. In addition, the region provides close to 50% of sulfur exports, critical to the production of phosphate fertilizers.¹",
          "While wholesale fertilizer prices generally remain below their 2022 peak, prices have climbed from recent levels. However, these fertilizer price hikes are occurring at a particularly inopportune time, when many agricultural commodities are selling at depressed prices, exacerbating a situation where farmers’ output is not covering their input costs.",
          "The Iran conflict represents the third major supply shock to fertilizer markets in the past six years. This time may be the most severe. While many energy and mineral facilities in the Gulf region have been directly damaged due to the Iran conflict, additional capacity has been idled due to precautionary closures or logistics constraints. For example, nearly all Middle Eastern ammonia production has been idled as storage space and stocks reach maximum levels. The time required for bulk shipments to resume, draw down Gulf stockpiles and restore fertilizer production could be months, assuming shipments resume unimpeded and production facilities have not been damaged.²",
          "Despite the Strait of Hormuz being closed for approximately 12 weeks, fertilizer markets have, as of yet, avoided severe shortages as buyers sit on the sidelines, deterred by high fertilizer prices, low farm commodity prices, seasonality, drought and more. This means that farmers may not see the most significant impacts of the conflict until late fall 2026 or spring 2027.",
        ],
        image: "/images/resources/Industry-Trends-and-Outlooks/Reports/2606KEP_FuelFertilizerandConflictinMiddleEast/June KEP_fertilizer prices.png",
        imageAlt: "Chart of Selected Fertilizer Prices",
        caption: "Selected Fertilizer Prices",
        source: "Source: Bloomberg",
      },
    ],
    editor: "Chris Laughton",
    contributors: "Chris Laughton, Farm Funders, Director of Knowledge Exchange",
    tags: ["outlook", "business management", "cost of production", "economy", "expenses", "international"],
    relatedArticles: [
      {
        category: "Ag Economy",
        categoryHref: `${OUTLOOKS_PATH}?category=ag-economy`,
        title: "2025 Northeast Dairy Farm Summary & Mid-Year Outlook",
        date: "July 10, 2026",
        href: `${OUTLOOKS_PATH}/Reports/2025NEDairyFarmSummary2026MidYearOutlook`,
      },
      {
        category: "Public Policy",
        categoryHref: `${BLOG_PATH}?category=public-policy`,
        title: "2026 Farm Bill Takes Shape: Comparing the House and Senate Proposals",
        date: "July 7, 2026",
        href: `${BLOG_PATH}/260707_2026FarmBillTakesShape`,
      },
      {
        category: "Business Tips and Tools",
        categoryHref: `${BLOG_PATH}?category=business-tips-and-tools`,
        title: "Tariff Relief Program Available for New York Producers",
        date: "July 1, 2026",
        href: `${BLOG_PATH}/tariff-relief-program-available-for-new-york-producers`,
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(REPORTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const report = REPORTS[slug];
  return report
    ? { title: `${report.title} | Farm Funding`, description: report.title }
    : { title: "Industry Trends & Outlooks | Farm Funding" };
}

export default async function ReportPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const report = REPORTS[slug];
  if (!report) notFound();

  const pageUrl = `${SITE_URL}${OUTLOOKS_PATH}/Reports/${REPORT_SLUG}`;
  const shareText = encodeURIComponent(report.title);
  const shareUrl = encodeURIComponent(pageUrl);

  return (
    <main className="w-full overflow-x-hidden bg-white text-[#686868]">
      <section className="relative w-full bg-[#496d83] px-[6%] py-[40px] sm:px-[5%] sm:py-[52px] md:h-[449px] md:px-[4.05%] md:py-0">
        <div className="relative mx-auto h-full max-w-[1800px]">
          <p className="mb-[18px] font-display text-[13px] font-bold leading-[1.2] text-[#ecf1e4] sm:text-[14px] md:absolute md:right-0 md:top-[78px] md:mb-0 md:text-[16px] lg:text-[17px]">{report.date}</p>
          <div className="md:absolute md:left-0 md:right-0 md:top-[112px]">
            <Link href={`${OUTLOOKS_PATH}?category=Knowledge%20Exchange%20Partner`} className="inline-block border border-[#ecf1e4] px-[6px] py-[5px] font-display text-[13px] font-bold leading-[1.2] text-[#ecf1e4] no-underline transition-colors hover:bg-[#ecf1e4] hover:text-[#496d83] sm:text-[14px] md:text-[15px]">{report.category}</Link>
            <h1 className="mt-[18px] max-w-[1720px] font-display text-[28px] font-bold leading-[1.18] tracking-[-0.2px] text-[#ecf1e4] sm:text-[36px] sm:leading-[1.12] md:mt-[32px] md:text-[46px] lg:mt-[40px] lg:text-[58px] lg:leading-[1.08]">{report.title}</h1>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <article className="mx-auto max-w-[800px] px-[20px] pb-[56px] pt-[40px] sm:px-[24px] sm:pb-[64px] sm:pt-[52px] md:px-[24px] md:pb-[80px] md:pt-[68px] lg:px-0 lg:pt-[70px]">
          <div className="mb-[36px] font-display text-[17px] font-semibold leading-[1.4] text-[#686868] sm:mb-[46px] sm:text-[18px] md:mb-[55px] md:text-[20px]">
            <p className="m-0">{report.issue}</p>
            <p className="m-0">June 2026</p>
          </div>

          {report.sections.map((section) => (
            <section key={section.id} id={section.id} className="mb-[52px] scroll-mt-[20px] last:mb-0 sm:mb-[64px] md:mb-[78px] md:scroll-mt-[35px]">
              <h2 className="mb-[18px] font-display text-[26px] font-bold leading-[1.2] text-[#686868] sm:mb-[24px] sm:text-[31px] md:mb-[30px] md:text-[36px] lg:text-[38px]">{section.heading}</h2>
              {section.image && (
                <figure className="mb-[22px] sm:mb-[28px] md:mb-[34px]">
                  <div className="relative w-full overflow-hidden bg-white">
                    <Image src={section.image} alt={section.imageAlt || ""} width={800} height={section.id === "motor-fuels" ? 568 : 601} sizes="(max-width: 799px) 100vw, 800px" className="block h-auto w-full object-contain" priority={section.id === "motor-fuels"} />
                  </div>
                  {section.caption && <figcaption className="mt-[8px] font-sans text-[13px] leading-[1.5] text-[#686868] sm:text-[14px]">{section.caption}</figcaption>}
                  {section.source && <p className="m-0 mt-[2px] font-sans text-[12px] leading-[1.5] text-[#686868] sm:text-[13px]">{section.source}</p>}
                </figure>
              )}
              {section.paragraphs.map((paragraph) => <p key={paragraph} className="mb-[18px] font-sans text-[16px] font-medium leading-[1.55] text-[#686868] last:mb-0 sm:mb-[22px] sm:text-[17px] md:mb-[24px] md:text-[18px] md:leading-[1.6]">{paragraph}</p>)}
              {section.id === "fertilizer" && <div className="mt-[24px] font-sans text-[13px] leading-[1.6] text-[#686868] sm:mt-[28px] sm:text-[14px]"><p className="m-0"><sup>1</sup> International Food Policy Research Institute</p><p className="m-0"><sup>2</sup> Argus Analytics</p></div>}
            </section>
          ))}

          <div className="mt-[34px] border-t border-[#d8d8d8] pt-[24px] font-sans text-[14px] leading-[1.65] text-[#686868]">
            {report.editor && <p className="m-0"><strong className="font-bold text-[#231f20]">Editor:</strong>{" "}{report.editor}</p>}
            {report.contributors && <p className="m-0 mt-[7px]"><strong className="font-bold text-[#231f20]">Contributors:</strong>{" "}{report.contributors}</p>}
          </div>

          <div className="mt-[28px] border-t border-[#d8d8d8] pt-[24px] font-sans text-[14px] leading-[1.65] text-[#686868]">
            <p className="m-0"><a href="https://www.farmcrediteast.com/resources/knowledge-exchange-partner" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#496d83] underline underline-offset-2 hover:text-[#4f832a]">View previous editions of the KEP</a></p>
            <p className="mt-[18px]"><strong className="font-bold text-[#231f20]">Farm Funders Disclaimer:</strong>{" "}The information provided in this communication/newsletter is not intended to be investment, tax, or legal advice and should not be relied upon by recipients for such purposes. Farm Funders does not make any representation or warranty regarding the content, and disclaims any responsibility for the information, materials, third-party opinions, and data included in this report.</p>
            <p className="mt-[12px]">In no event will Farm Funders be liable for any decision made or actions taken by any person or persons relying on the information contained in this report.</p>
          </div>

          <div className="mt-[24px] border-t border-[#d8d8d8] pt-[20px] font-sans text-[14px] leading-[1.65] text-[#686868]">
            <span className="font-bold text-[#231f20]">Tags:</span>{" "}
            {report.tags.map((tag, index) => <span key={tag}><Link href={`${OUTLOOKS_PATH}?tag=${encodeURIComponent(tag)}`} className="text-[#496d83] underline underline-offset-2 hover:text-[#4f832a]">{tag}</Link>{index < report.tags.length - 1 && ", "}</span>)}
          </div>

          <section className="mt-[16px] border-t border-[#d8d8d8] pt-[16px] font-sans sm:mt-[20px] sm:pt-[20px]" aria-label="Share this article">
            <p className="m-0 mb-[16px] text-[17px] font-semibold text-[#231f20]">Share this post on</p>
            <ul className="m-0 flex list-none gap-[10px] p-0">
              <li><a href={`https://twitter.com/share?text=${shareText}&url=${shareUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on X" className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-[4px] bg-[#14171a] text-white"><svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></a></li>
              <li><a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-[4px] bg-[#1877f2] text-white"><svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" /></svg></a></li>
              <li><a href={`https://www.linkedin.com/shareArticle?url=${shareUrl}&title=${shareText}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-[4px] bg-[#0a66c2] text-white"><svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" /></svg></a></li>
              <li><a href={`mailto:?subject=${shareText}&body=${shareUrl}`} aria-label="Share by email" className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-[4px] bg-[#34a853] text-white"><svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg></a></li>
            </ul>
          </section>
        </article>
      </section>

      <section className="w-full bg-[#ecf1e4]">
        <div className="mx-auto w-[calc(100%-120px)] max-w-[1800px] px-[7px] py-[34px] sm:py-[42px] md:py-[54px]">
          <h2 className="m-0 font-display text-[30px] font-bold leading-[1.25] text-[#4f832a]">You Might Also Like</h2>
          <div className="mt-[20px] grid grid-cols-1 gap-[25px] md:grid-cols-3 md:gap-[34px]">
            {report.relatedArticles.map((item) => (
              <article key={item.title} className="pt-[26px]">
                <Link href={item.categoryHref} className="inline-block bg-[#686868] px-[14px] py-[6px] font-sans text-[13px] font-bold uppercase tracking-[.02em] text-white no-underline">{item.category}</Link>
                <Link href={item.href} className="mt-[26px] block font-display text-[21px] font-bold leading-[1.35] text-[#5a4400] no-underline hover:underline">{item.title} <span aria-hidden="true">&#8250;</span></Link>
                <p className="mt-[26px] font-sans text-[14px] font-bold uppercase text-[#686868]">{item.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto grid w-[calc(100%-120px)] max-w-[1800px] grid-cols-1 items-center gap-[28px] px-[7px] py-[50px] md:grid-cols-[2fr_1fr] md:py-[50px]">
          <div className="max-w-[900px]">
            <h2 className="m-0 font-display text-[30px] font-bold leading-[1.25] text-[#4f832a]">Meet the Authors</h2>
            <p className="m-[14px_0_0] font-sans text-[20px] leading-[1.5] text-[#686868]">Connect with and discover our Today&rsquo;s Harvest blog authors and their broad range of financial and Northeast agricultural expertise.</p>
          </div>
          <Link href={AUTHORS_PATH} className="inline-flex min-w-[205px] justify-self-start items-center justify-center bg-[#496d83] px-[22px] py-[13px] font-display text-[15px] font-bold text-white no-underline transition-colors hover:bg-[#3b5a6d] md:justify-self-end">Meet the Authors</Link>
        </div>
      </section>
    </main>
  );
}

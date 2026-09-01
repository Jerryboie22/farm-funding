import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type RelatedArticle = {
  category: string;
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
        title: "2025 Northeast Dairy Farm Summary & Mid-Year Outlook",
        date: "July 10, 2026",
        href: "/resources/Industry-Trends-and-Outlooks/Reports/2025NEDairyFarmSummary2026MidYearOutlook",
      },
      {
        category: "Public Policy",
        title: "2026 Farm Bill Takes Shape: Comparing the House and Senate Proposals",
        date: "July 7, 2026",
        href: "/resources/todays-harvest-Blog/260707_2026FarmBillTakesShape",
      },
      {
        category: "Business Tips and Tools",
        title: "Tariff Relief Program Available for New York Producers",
        date: "July 1, 2026",
        href: "/resources/todays-harvest-Blog/tariff-relief-program-available-for-new-york-producers",
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

  const pageUrl = `${SITE_URL}/resources/Industry-Trends-and-Outlooks/Reports/${REPORT_SLUG}`;
  const encodedTitle = encodeURIComponent(report.title);
  const encodedUrl = encodeURIComponent(pageUrl);

  const shareLinks = [
    { name: "X", icon: "/images/icons/social/Twitter.png", href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}` },
    { name: "Facebook", icon: "/images/icons/social/Facebook.png", href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}` },
    { name: "LinkedIn", icon: "/images/icons/social/LinkedIn.png", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}` },
    { name: "Email", icon: "/images/icons/social/Email.png", href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}` },
  ];

  return (
    <main className="w-full overflow-x-hidden bg-white text-[#686868]">
      <section className="relative w-full bg-[#496d83] px-[6%] py-[40px] sm:px-[5%] sm:py-[52px] md:h-[449px] md:px-[4.05%] md:py-0">
        <div className="relative mx-auto h-full max-w-[1800px]">
          <p className="mb-[18px] font-display text-[13px] font-bold leading-[1.2] text-[#ecf1e4] sm:text-[14px] md:absolute md:right-0 md:top-[78px] md:mb-0 md:text-[16px] lg:text-[17px]">
            {report.date}
          </p>
          <div className="md:absolute md:left-0 md:right-0 md:top-[112px]">
            <Link href="/resources/Industry-Trends-and-Outlooks?category=knowledge-exchange-partner" className="inline-block border border-[#ecf1e4] px-[6px] py-[5px] font-display text-[13px] font-bold leading-[1.2] text-[#ecf1e4] no-underline transition-colors hover:bg-[#ecf1e4] hover:text-[#496d83] sm:text-[14px] md:text-[15px]">
              {report.category}
            </Link>
            <h1 className="mt-[18px] max-w-[1720px] font-display text-[28px] font-bold leading-[1.18] tracking-[-0.2px] text-[#ecf1e4] sm:text-[36px] sm:leading-[1.12] sm:tracking-[-0.3px] md:mt-[32px] md:text-[46px] md:tracking-[-0.5px] lg:mt-[40px] lg:text-[58px] lg:leading-[1.08] lg:tracking-[-0.6px]">{report.title}</h1>
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
            <section key={section.id} id={section.id} className="mb-[52px] scroll-mt-[20px] last:mb-0 sm:mb-[64px] sm:scroll-mt-[30px] md:mb-[78px] md:scroll-mt-[35px]">
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
              <div>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mb-[18px] font-sans text-[16px] font-medium leading-[1.55] text-[#686868] last:mb-0 sm:mb-[22px] sm:text-[17px] md:mb-[24px] md:text-[18px] md:leading-[1.6]">{paragraph}</p>
                ))}
              </div>
              {section.id === "fertilizer" && (
                <div className="mt-[24px] border-t border-[#686868] pt-[16px] font-sans text-[13px] leading-[1.6] text-[#686868] sm:mt-[28px] sm:pt-[18px] sm:text-[14px]">
                  <p className="m-0"><sup>1</sup>International Food Policy Research Institute</p>
                  <p className="m-0"><sup>2</sup>Argus Analytics</p>
                </div>
              )}
            </section>
          ))}

          <div className="mt-[34px] border-t border-[#d8d8d8] pt-[24px] font-sans text-[14px] leading-[1.65] text-[#686868]">
            {report.editor && <p className="m-0"><strong className="font-bold text-[#231f20]">Editor:</strong>{" "}{report.editor}</p>}
            {report.contributors && <p className="m-0 mt-[7px]"><strong className="font-bold text-[#231f20]">Contributors:</strong>{" "}{report.contributors}</p>}
          </div>

          <div className="mt-[28px] border-t border-[#d8d8d8] pt-[24px] font-sans text-[14px] leading-[1.65] text-[#686868]">
            <p className="m-0"><Link href="https://www.farmcrediteast.com/resources/knowledge-exchange-partner" className="font-semibold text-[#496d83] underline underline-offset-2 hover:text-[#4f832a]">View previous editions of the KEP</Link></p>
            <p className="mt-[18px]"><strong className="font-bold text-[#231f20]">Farm Funders Disclaimer:</strong>{" "}The information provided in this communication/newsletter is not intended to be investment, tax, or legal advice and should not be relied upon by recipients for such purposes. Farm Funders does not make any representation or warranty regarding the content, and disclaims any responsibility for the information, materials, third-party opinions, and data included in this report.</p>
            <p className="mt-[12px]">In no event will Farm Funders be liable for any decision made or actions taken by any person or persons relying on the information contained in this report.</p>
          </div>

          <div className="mt-[24px] border-t border-[#d8d8d8] pt-[20px] font-sans text-[14px] leading-[1.65] text-[#686868]">
            <span className="font-bold text-[#231f20]">Tags:</span>{" "}
            {report.tags.map((tag, index) => (
              <span key={tag}>
                <Link href={`/resources/Industry-Trends-and-Outlooks?tag=${encodeURIComponent(tag)}`} className="text-[#496d83] underline underline-offset-2 hover:text-[#4f832a]">{tag}</Link>
                {index < report.tags.length - 1 && ", "}
              </span>
            ))}
          </div>

          <div className="mt-[16px] flex flex-wrap items-center gap-[16px] border-t border-[#d8d8d8] pt-[16px] font-sans text-[13px] leading-[1.6] text-[#686868] sm:mt-[20px] sm:gap-[14px] sm:pt-[20px] sm:text-[14px] md:leading-[1.65]">
            <span className="font-bold text-[#231f20]">Share this post on</span>
            {shareLinks.map((item) => (
              <a key={item.name} href={item.href} title={item.name} target="_blank" rel="noopener noreferrer" className="inline-flex h-[28px] w-[28px] items-center justify-center">
                <Image src={item.icon} alt={item.name} width={28} height={28} className="h-full w-full object-contain" />
              </a>
            ))}
          </div>
        </article>
      </section>

      <section className="w-full bg-[#ecf1e4] px-[24px] py-[70px] md:px-[5%] lg:px-[7%] lg:py-[82px]">
        <div className="mx-auto max-w-[1760px]">
          <h2 className="mb-[46px] font-display text-[38px] font-bold leading-[1.15] text-[#4f832a] md:text-[44px]">You Might Also Like</h2>
          <div className="grid grid-cols-1 gap-[38px] md:grid-cols-3 md:gap-[80px]">
            {report.relatedArticles.map((article) => (
              <article key={article.title} className="min-w-0">
                <Link href={article.href} className="inline-block bg-[#686868] px-[14px] py-[8px] font-sans text-[16px] font-bold uppercase leading-[1.15] text-white no-underline transition-colors hover:bg-[#496d83]">{article.category}</Link>
                <Link href={article.href} className="mt-[18px] block font-display text-[30px] font-bold leading-[1.25] text-[#5a4400] no-underline hover:underline hover:underline-offset-[3px]">{article.title} <span aria-hidden="true">&#8250;</span></Link>
                <p className="mt-[20px] font-sans text-[14px] font-bold uppercase leading-[1.3] text-[#686868]">{article.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-[24px] py-[70px] md:px-[5%] lg:px-[7%] lg:py-[78px]">
        <div className="mx-auto grid max-w-[1760px] grid-cols-1 items-center gap-[28px] md:grid-cols-[minmax(0,1fr)_auto] md:gap-[50px]">
          <div className="min-w-0">
            <h2 className="font-display text-[38px] font-bold leading-[1.15] text-[#4f832a] md:text-[44px]">Meet the Authors</h2>
            <p className="mt-[18px] max-w-[980px] font-sans text-[18px] font-medium leading-[1.65] text-[#686868] md:text-[20px]">Connect with and discover our Today&rsquo;s Harvest blog authors and their broad range of financial and Northeast agricultural expertise.</p>
          </div>
          <Link href="/resources/Meet-the-Authors.html" className="inline-flex min-w-[205px] items-center justify-center border border-[#496d83] bg-[#496d83] px-[22px] py-[13px] font-display text-[16px] font-bold text-white no-underline transition-colors hover:bg-[#3b5a6d] hover:border-[#3b5a6d]">Meet the Authors</Link>
        </div>
      </section>
    </main>
  );
}

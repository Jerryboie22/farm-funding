import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Report = {
  title: string;
  date: string;
  issue: string;
  category: string;
  image: string;
  intro: string;
  contents: { id: string; label: string }[];
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
};

const REPORTS: Record<string, Report> = {
  "2606KEP_FuelFertilizerandConflictinMiddleEast.html": {
    title: "Fuel, Fertilizer and Conflict in the Middle East: What to Know Now",
    date: "June 2, 2026",
    issue: "Volume 20, Issue 6",
    category: "Knowledge Exchange Partner",
    image: "/images/homepage/capacity-to-serve-your-needs.jpg",
    intro:
      "It’s no secret that fuel prices have increased sharply since the U.S. conflict with Iran began at the end of February 2026. The war has led to a blockage of oil tanker ships traveling through the Strait of Hormuz, where prior to the conflict, approximately 20% to 25% of the world’s global oil supply, or 20 to 21 million barrels per day flowed.",
    contents: [
      { id: "motor-fuels", label: "Motor Fuels" },
      { id: "fertilizer", label: "Fertilizer" },
    ],
    sections: [
      {
        id: "motor-fuels",
        heading: "Motor Fuels",
        paragraphs: [
          "While the U.S. has become the world’s largest producer of crude oil, (and is actually a net exporter of oil at this point — exporting around 2.8 million more barrels per day than we import), oil prices are heavily influenced by global market conditions. As such, we have seen sustained increases in domestic crude oil prices, and subsequently, gasoline and diesel prices.",
          "The cause and effect of the rise in fuel costs was immediate and obvious, but what will come next? When can we expect fuel prices to decline? Unfortunately, the answers are much less clear. If hostilities between the U.S. and Iran end, and/or an agreement is reached to reopen the Strait of Hormuz sometime in June, ship traffic through the Strait would likely start to pick up shortly thereafter. However, for a number of reasons, oil shipments in the region are unlikely to return to pre-conflict levels until the end of the year, if not later.",
          "While oil futures markets would likely drop immediately after the reopening of the Strait, it could take up to six months for physical oil trade flows to normalize and retail prices at the pump to fall to pre-conflict levels. Energy analysts forecast that wholesale crude oil is unlikely to fall below $80 per barrel this year. Subsequently, retail gasoline prices will likely remain elevated well into 2027. The U.S. Energy Information Administration forecasts the average price of a gallon of gas at $3.88 for 2026, assuming the Iran war is resolved in June.",
        ],
        image: "/images/resources/June KEP_avg motor fuel.jpg",
        imageAlt: "U.S. average motor fuel cost",
        caption: "U.S. Average Motor Fuel Cost, May 2025-May 2026",
        source: "Source: U.S. Energy Information Administration",
      },
      {
        id: "fertilizer",
        heading: "Fertilizer",
        paragraphs: [
          "In 2024, approximately 30% of global fertilizer trade passed through the Strait of Hormuz to export markets around the world, including the U.S. While supplies of potash are less affected, nitrogen and phosphate are significantly impacted. Over the past three years, the Middle East was the biggest regional exporter of urea and ammonia, two common forms of nitrogen fertilizer. In addition to direct exports of fertilizer, the Persian Gulf is a major exporter of liquified natural gas (LNG), which is vital to fertilizer production elsewhere.",
          "For phosphate fertilizer, the Persian Gulf region accounts for 26% of diammonium phosphate (DAP) and 13% of monoammonium phosphate (MAP) exports. In addition, the region provides close to 50% of sulfur exports, critical to the production of phosphate fertilizers.",
          "While wholesale fertilizer prices generally remain below their 2022 peak, prices have climbed from recent levels. However, these fertilizer price hikes are occurring at a particularly inopportune time, when many agricultural commodities are selling at depressed prices, exacerbating a situation where farmers’ output is not covering their input costs.",
          "The Iran conflict represents the third major supply shock to fertilizer markets in the past six years. This time may be the most severe. While many energy and mineral facilities in the Gulf region have been directly damaged due to the Iran conflict, additional capacity has been idled due to precautionary closures or logistics constraints. For example, nearly all Middle Eastern ammonia production has been idled as storage space and stocks reach maximum levels. The time required for bulk shipments to resume, draw down Gulf stockpiles and restore fertilizer production could be months, assuming shipments resume unimpeded and production facilities have not been damaged.",
          "Despite the Strait of Hormuz being closed for approximately 12 weeks, fertilizer markets have, as of yet, avoided severe shortages as buyers sit on the sidelines, deterred by high fertilizer prices, low farm commodity prices, seasonality, drought and more. This means that farmers may not see the most significant impacts of the conflict until late fall 2026 or spring 2027.",
        ],
        image: "/images/resources/June KEP_fertilizer prices.jpg",
        imageAlt: "Selected fertilizer prices",
        caption: "Selected Fertilizer Prices",
        source: "Source: Bloomberg",
      },
    ],
    editor: "Chris Laughton",
    contributors: "Chris Laughton, Farm Funders, Director of Knowledge Exchange",
    tags: [
      "outlook",
      "business management",
      "cost of production",
      "economy",
      "expenses",
      "international",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(REPORTS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const report = REPORTS[slug];

  return report
    ? {
        title: `${report.title} | Farm Funding`,
        description: report.intro,
      }
    : {
        title: "Industry Trends & Outlooks | Farm Funding",
      };
}

export default async function ReportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const report = REPORTS[slug];

  if (!report) notFound();

  return (
    <main className="w-full bg-white text-[#686868]">
      <section className="w-full bg-[#ecf1e4]">
        <div className="mx-auto max-w-[1800px] px-[4.05%] pb-[62px] pt-[52px] md:pb-[78px] md:pt-[68px] lg:pb-[88px] lg:pt-[78px]">
          <Link
            href="/resources/Industry-Trends-and-Outlooks?category=knowledge-exchange-partner"
            className="inline-block border border-[#4f832a] px-[8px] py-[5px] text-[13px] font-bold uppercase tracking-[0.03em] text-[#4f832a] hover:bg-[#4f832a] hover:text-white"
          >
            {report.category}
          </Link>

          <h1 className="mt-[27px] max-w-[1180px] font-display text-[38px] font-bold leading-[1.12] text-[#4f832a] md:text-[50px] lg:text-[58px]">
            {report.title}
          </h1>

          <p className="mt-[24px] text-[16px] font-semibold uppercase tracking-[0.04em] text-[#686868]">
            {report.issue} | {report.date}
          </p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-[42px] px-[24px] py-[48px] md:px-[42px] md:py-[62px] lg:grid-cols-[minmax(0,1fr)_285px] lg:gap-[68px] lg:px-[28px] lg:py-[76px]">
          <article className="min-w-0">
            <p className="mb-[34px] text-[18px] font-medium leading-[1.75] text-[#686868] md:text-[19px]">
              {report.intro}
            </p>

            {report.sections.map((section) => (
              <section key={section.id} id={section.id} className="mb-[56px] scroll-mt-[35px]">
                <h2 className="mb-[30px] font-display text-[29px] font-bold leading-[1.22] text-[#4f832a] md:text-[34px]">
                  {section.heading}
                </h2>

                {section.image && (
                  <figure className="mb-[31px]">
                    <div className="relative w-full overflow-hidden bg-[#f4f4f4]">
                      <Image
                        src={section.image}
                        alt={section.imageAlt || ""}
                        width={900}
                        height={520}
                        className="h-auto w-full object-contain"
                        priority={section.id === "motor-fuels"}
                      />
                    </div>
                    {section.caption && (
                      <figcaption className="mt-[8px] text-[14px] leading-[1.5] text-[#686868]">
                        {section.caption}
                      </figcaption>
                    )}
                    {section.source && (
                      <p className="mt-[2px] text-[13px] leading-[1.5] text-[#686868]">
                        {section.source}
                      </p>
                    )}
                  </figure>
                )}

                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mb-[23px] text-[17px] font-medium leading-[1.76] text-[#686868] md:text-[18px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            <div className="border-t border-[#d8d8d8] pt-[22px] text-[14px] leading-[1.65] text-[#686868]">
              {report.editor && (
                <p>
                  <strong className="font-bold text-[#231f20]">Editor:</strong>{" "}
                  {report.editor}
                </p>
              )}
              {report.contributors && (
                <p className="mt-[6px]">
                  <strong className="font-bold text-[#231f20]">Contributor:</strong>{" "}
                  {report.contributors}
                </p>
              )}
            </div>

            <div className="mt-[28px] flex flex-wrap items-center gap-x-[7px] gap-y-[5px] border-t border-[#d8d8d8] pt-[20px] text-[14px]">
              <span className="font-bold text-[#231f20]">Tags:</span>
              {report.tags.map((tag, index) => (
                <span key={tag}>
                  <Link
                    href={`/resources/Industry-Trends-and-Outlooks?tag=${encodeURIComponent(tag)}`}
                    className="text-[#496d83] underline underline-offset-2 hover:text-[#4f832a]"
                  >
                    {tag}
                  </Link>
                  {index < report.tags.length - 1 && <span>,</span>}
                </span>
              ))}
            </div>
          </article>

          <aside className="h-fit lg:sticky lg:top-[30px]">
            <div className="overflow-hidden border border-[#d8d8d8] bg-[#f1f3f4]">
              <div className="border-b border-[#d8d8d8] px-[22px] py-[18px]">
                <h2 className="font-display text-[25px] font-bold text-[#4f832a]">
                  Contents
                </h2>
              </div>

              <nav aria-label="Article contents">
                {report.contents.map((item, index) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block px-[22px] py-[14px] text-[15px] leading-[1.45] text-[#686868] hover:bg-white hover:text-[#4f832a] ${
                      index < report.contents.length - 1
                        ? "border-b border-[#d8d8d8]"
                        : ""
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

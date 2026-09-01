import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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
};

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
        image: "/images/resources/June KEP_avg motor fuel.jpg",
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
        image: "/images/resources/June KEP_fertilizer prices.jpg",
        imageAlt: "Chart of Selected Fertilizer Prices",
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
        description: report.title,
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
    <main className="w-full overflow-x-hidden bg-white text-[#686868]">
      {/* Reference hero: Farm Funders blue/clay background, white category/date,
          and the large cream article title. */}
      <section className="relative h-[449px] w-full bg-[#496d83]">
        <div className="relative mx-auto h-full max-w-[1800px] px-[4.05%]">
          <p className="absolute right-[4.05%] top-[78px] m-0 font-display text-[16px] font-bold leading-[1.2] text-[#ecf1e4] md:text-[17px]">
            {report.date}
          </p>

          <div className="absolute left-[4.05%] right-[4.05%] top-[112px]">
            <Link
              href="/resources/Industry-Trends-and-Outlooks?category=knowledge-exchange-partner"
              className="inline-block border border-[#ecf1e4] px-[6px] py-[5px] font-display text-[15px] font-bold leading-[1.2] text-[#ecf1e4] no-underline transition-colors hover:bg-[#ecf1e4] hover:text-[#496d83]"
            >
              {report.category}
            </Link>

            <h1 className="mt-[40px] max-w-[1720px] font-display text-[58px] font-bold leading-[1.08] tracking-[-0.6px] text-[#ecf1e4] md:text-[58px] lg:text-[58px]">
              {report.title}
            </h1>
          </div>
        </div>
      </section>

      {/* The reference article is a single centered column. There is no
          contents sidebar on this report. */}
      <section className="w-full bg-white">
        <article className="mx-auto max-w-[1000px] px-[24px] pb-[80px] pt-[66px] md:px-[28px] md:pt-[68px] lg:px-0 lg:pt-[70px]">
          <div className="mb-[55px] font-display text-[19px] font-semibold leading-[1.45] text-[#686868] md:text-[20px]">
            <p className="m-0">{report.issue}</p>
            <p className="m-0">June 2026</p>
          </div>

          {report.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="mb-[78px] scroll-mt-[35px] last:mb-0"
            >
              <h2 className="mb-[30px] font-display text-[36px] font-bold leading-[1.2] text-[#686868] md:text-[38px]">
                {section.heading}
              </h2>

              {section.image && (
                <figure className="mb-[34px]">
                  <div className="relative w-full overflow-hidden bg-white">
                    <Image
                      src={section.image}
                      alt={section.imageAlt || ""}
                      width={1000}
                      height={580}
                      className="block h-auto w-full object-contain"
                      priority={section.id === "motor-fuels"}
                    />
                  </div>

                  {section.caption && (
                    <figcaption className="mt-[8px] font-sans text-[14px] leading-[1.5] text-[#686868]">
                      {section.caption}
                    </figcaption>
                  )}

                  {section.source && (
                    <p className="m-0 mt-[2px] font-sans text-[13px] leading-[1.5] text-[#686868]">
                      {section.source}
                    </p>
                  )}
                </figure>
              )}

              <div>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mb-[24px] font-sans text-[18px] font-medium leading-[1.6] text-[#686868] last:mb-0 md:text-[18px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {section.id === "fertilizer" && (
                <div className="mt-[34px] font-sans text-[14px] leading-[1.65] text-[#686868]">
                  <p className="m-0">¹ International Food Policy Research Institute</p>
                  <p className="m-0">² Argus Analytics</p>
                </div>
              )}
            </section>
          ))}

          <div className="mt-[34px] border-t border-[#d8d8d8] pt-[24px] font-sans text-[14px] leading-[1.65] text-[#686868]">
            {report.editor && (
              <p className="m-0">
                <strong className="font-bold text-[#231f20]">Editor:</strong>{" "}
                {report.editor}
              </p>
            )}
            {report.contributors && (
              <p className="m-0 mt-[7px]">
                <strong className="font-bold text-[#231f20]">Contributors:</strong>{" "}
                {report.contributors}
              </p>
            )}
          </div>

          <div className="mt-[28px] border-t border-[#d8d8d8] pt-[20px] font-sans text-[14px] leading-[1.65] text-[#686868]">
            <span className="font-bold text-[#231f20]">Tags:</span>{" "}
            {report.tags.map((tag, index) => (
              <span key={tag}>
                <Link
                  href={`/resources/Industry-Trends-and-Outlooks?tag=${encodeURIComponent(tag)}`}
                  className="text-[#496d83] underline underline-offset-2 hover:text-[#4f832a]"
                >
                  {tag}
                </Link>
                {index < report.tags.length - 1 && ", "}
              </span>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}

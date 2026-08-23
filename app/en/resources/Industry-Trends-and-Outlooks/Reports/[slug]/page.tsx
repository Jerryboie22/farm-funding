import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Report = {
  title: string;
  date: string;
  issue: string;
  category: string;
  image: string;
  intro?: string;
  contents: string[];
  sections: { heading: string; paragraphs: string[] }[];
  byline?: string;
  contributors?: string;
};

const REPORTS: Record<string, Report> = {
  "2025NEDairyFarmSummary2026MidYearOutlook.html": {
    title: "2025 Northeast Dairy Farm Summary & Mid-Year Outlook",
    date: "July 10, 2026",
    issue: "2025 Northeast Dairy Farm Summary",
    category: "Ag Economy",
    image: "/images/homepage/Dairy cows milking.jpg",
    intro:
      "Farm Funders presents the 2025 Northeast Dairy Farm Summary and the outlook for the remainder of 2026. The annual study provides a regional view of dairy-farm financial performance and the conditions shaping the industry.",
    contents: ["2025 Highlights", "Farm Financial Performance", "Production and Costs", "Cash Flow and Balance Sheets", "2026 Mid-Year Outlook"],
    sections: [
      { heading: "2025 Highlights", paragraphs: ["The 2025 sample showed stronger net earnings across Northeast dairy operations. Average earnings increased materially from the prior year even as milk prices softened and feed costs remained elevated.", "The study covers 136 Northeast dairy farms ranging from smaller family operations to herds of more than 5,000 cows, giving producers and industry leaders a useful regional benchmark."] },
      { heading: "Farm Financial Performance", paragraphs: ["Financial performance improved in 2025, supported by production gains, changes in non-milk income and lower net cost of production. Total costs nevertheless continued to rise, keeping cost control and productivity central to profitability."] },
      { heading: "Production and Costs", paragraphs: ["Feed remained the largest individual expense and increased on a per-cow basis. At the same time, milk production per cow and cows-per-worker improved, showing continued productivity gains across the sample."] },
      { heading: "Cash Flow and Balance Sheets", paragraphs: ["Average cash flow was sufficient to meet operating expenses, debt repayment, family living and tax obligations. Leverage increased, however, and debt per cow rose, making liquidity and capital planning important considerations for producers."] },
      { heading: "2026 Mid-Year Outlook", paragraphs: ["The remainder of 2026 will require attention to milk markets, feed costs, labor, interest rates and balance-sheet strength. Producers can use their own benchmarks alongside the regional data to evaluate margins and prepare for market volatility."] },
    ],
    byline: "Farm Credit East",
  },
  "2607KEP_H2AForDairyEmployers.html": {
    title: "United States Citizenship and Immigration Service Clears H-2A Path for Dairy Employers",
    date: "July 7, 2026",
    issue: "Volume 20, Issue 7",
    category: "Knowledge Exchange Partner",
    image: "/images/homepage/Dairy cows milking.jpg",
    intro:
      "A new USCIS policy provides a potential H-2A pathway for qualifying dairy employers, addressing a long-standing workforce challenge for year-round dairy operations.",
    contents: ["H-2A for Dairies", "The Statutory Foundation", "Employer's Need", "How to Establish Need", "What USCIS Will Be Looking For", "Practical Takeaways", "A Word of Caution"],
    sections: [
      { heading: "H-2A for Dairies", paragraphs: ["Dairy operations have historically faced difficulty using the H-2A temporary agricultural worker program because milking and herd-care work is performed year-round. New USCIS guidance clarifies circumstances in which dairy employers may demonstrate a qualifying temporary or seasonal need."] },
      { heading: "The Statutory Foundation", paragraphs: ["The policy guidance builds on existing federal definitions of agricultural labor and agriculture. Those definitions include dairying, so the central question is whether the employer can establish the required temporary or seasonal nature of the need."] },
      { heading: "Employer's Need", paragraphs: ["Employers should be prepared to explain why additional workers are needed, how the need is connected to seasonal conditions and why the requested period is temporary. Documentation should tell a clear, evidence-based story."] },
      { heading: "How to Establish Need", paragraphs: ["Workforce records, production cycles, staffing history, operational changes and other supporting evidence can help demonstrate a temporary labor requirement. Producers considering the program should work with qualified immigration counsel before filing."] },
      { heading: "What USCIS Will Be Looking For", paragraphs: ["USCIS will evaluate the petition against the statutory requirements and the facts presented by the employer. Consistency between the petition, supporting records and the farm's actual operating pattern is essential."] },
      { heading: "Practical Takeaways", paragraphs: ["Dairy employers should assess whether their operation has a defensible temporary or seasonal workforce need, gather supporting records early and coordinate with experienced counsel on the petition process."] },
      { heading: "A Word of Caution", paragraphs: ["The availability of a potential pathway does not mean every dairy operation will qualify. Immigration rules are fact-specific and can change, so producers should obtain current legal advice before relying on the program."] },
    ],
    byline: "L.J. D’Arrigo, Harris Beach Murtha Attorneys at Law",
    contributors: "Republished with permission from Harris Beach Murtha Attorneys at Law.",
  },
  "2606KEP_FuelFertilizerandConflictinMiddleEast.html": {
    title: "Fuel, Fertilizer and Conflict in the Middle East: What to Know Now",
    date: "June 2, 2026",
    issue: "Volume 20, Issue 6",
    category: "Knowledge Exchange Partner",
    image: "/images/homepage/capacity-to-serve-your-needs.jpg",
    intro:
      "Conflict in the Middle East has created new uncertainty for fuel and fertilizer markets. For farms, the key questions are how long elevated costs may persist and how input decisions should be managed through the remainder of 2026.",
    contents: ["Motor Fuels", "Fertilizer", "Farm Planning Implications"],
    sections: [
      { heading: "Motor Fuels", paragraphs: ["Global oil markets respond quickly to disruptions in major shipping routes. The conflict and disruption around the Strait of Hormuz pushed crude, gasoline and diesel costs higher even though the United States remains a major oil producer and net exporter.", "A reopening of the shipping route could ease futures markets quickly, but physical supply chains and retail prices can take substantially longer to normalize. Producers should therefore avoid assuming that a short-term market move will immediately translate to lower farm fuel costs."] },
      { heading: "Fertilizer", paragraphs: ["The Middle East is a major participant in global nitrogen, phosphate, ammonia and related fertilizer trade. Disruptions can affect both direct fertilizer shipments and the energy inputs used to manufacture fertilizer.", "The timing is especially challenging when commodity prices are weak. Farmers may see the largest effects later in the season or into the following year as inventories are replenished and production and shipping systems adjust."] },
      { heading: "Farm Planning Implications", paragraphs: ["Input procurement, working-capital needs and margin protection deserve close attention when fuel and fertilizer markets are volatile. Producers can compare forward prices with expected crop and livestock revenue, review storage and purchasing options and build flexibility into cash-flow plans."] },
    ],
    byline: "Chris Laughton, Farm Credit East",
    contributors: "Director of Knowledge Exchange",
  },
  "2605KEP_DairyMidYearTrends.html": {
    title: "Dairy Markets Show Positive Trends",
    date: "May 3, 2026",
    issue: "Volume 20, Issue 5",
    category: "Knowledge Exchange Partner",
    image: "/images/homepage/Dairy cows milking.jpg",
    intro:
      "Dairy margins have improved after a sluggish start to the year. Strong protein demand, expanding dairy-plant investment and continued opportunities in beef-on-dairy production are contributing to a more constructive outlook, although volatility remains.",
    contents: ["Butterfat Growth", "Low-Milkfat Products", "Butter Imports", "Butterfat Exports", "Class III Milk Futures", "Class IV Futures", "Protecting Margins"],
    sections: [
      { heading: "Butterfat Growth", paragraphs: ["U.S. milk has become increasingly rich in butterfat, changing the balance between dairy protein and fat in domestic and export markets. The shift has important implications for product flows and pricing."] },
      { heading: "Low-Milkfat Products", paragraphs: ["Protein-focused products such as Greek yogurt, cottage cheese and nutritional beverages continue to influence the mix of dairy demand. The changing product mix can create opportunities while also increasing market volatility."] },
      { heading: "Butter Imports and Exports", paragraphs: ["Domestic butter demand and changing production have altered the role of imports. At the same time, stronger butterfat exports have provided an important outlet for excess production and helped rebalance the market."] },
      { heading: "Class III and Class IV Futures", paragraphs: ["Cheese, whey, butter and powder markets have experienced significant swings. Forward prices can move quickly when product inventories, export demand or butterfat production change, making margin planning particularly important."] },
      { heading: "Protecting Margins", paragraphs: ["Dairy producers should consider available risk-management tools when market prices provide attractive opportunities. Livestock Risk Protection can help establish a floor for qualifying calf sales, while Dairy Revenue Protection can support more predictable milk revenue."] },
    ],
    byline: "Corey Geiger, Lead Economist, Dairy, CoBank",
    contributors: "Risk Management update contributed by Megan Clancy, Crop Growers Dairy & Livestock Risk Management Senior Advisor.",
  },
};

export function generateStaticParams() {
  return Object.keys(REPORTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const report = REPORTS[slug];
  return report
    ? { title: `${report.title} | Farm Funders`, description: report.intro }
    : { title: "Industry Trends & Outlooks | Farm Funders" };
}

export default async function ReportPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const report = REPORTS[slug];
  if (!report) notFound();

  return (
    <main className="w-full bg-white text-[#231f20]">
      <section className="w-full bg-[#ecf1e4]">
        <div className="mx-auto max-w-[1440px] px-[4.05%] py-[55px] md:py-[70px] lg:py-[82px]">
          <div className="max-w-[1040px]">
            <p className="text-[14px] font-bold uppercase tracking-[0.06em] text-[#5f5f5f]">{report.category}</p>
            <h1 className="mt-[14px] font-display text-[36px] leading-[1.13] text-[#4f832a] md:text-[48px] lg:text-[54px]">{report.title}</h1>
            <p className="mt-[20px] text-[16px] font-medium text-[#555]">{report.date}</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-[45px] px-[24px] py-[50px] md:px-[45px] lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-[70px] lg:py-[75px]">
          <article>
            <div className="relative mb-[35px] h-[280px] w-full overflow-hidden md:h-[390px] lg:h-[460px]">
              <Image src={report.image} alt="" fill sizes="(max-width: 1024px) 100vw, 900px" className="object-cover" priority />
            </div>

            {report.intro && <p className="mb-[34px] text-[20px] leading-[1.7] text-[#231f20]">{report.intro}</p>}

            {report.sections.map((section) => (
              <section key={section.heading} className="mb-[38px]">
                <h2 className="font-display text-[28px] leading-[1.25] text-[#4f832a] md:text-[34px]">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-[17px] text-[17px] leading-[1.78] md:text-[18px]">{paragraph}</p>
                ))}
              </section>
            ))}

            <div className="mt-[45px] border-t border-[#d5d5d5] pt-[25px] text-[14px] leading-[1.7] text-[#555]">
              {report.byline && <p><strong>{report.byline}</strong></p>}
              {report.contributors && <p className="mt-[7px]">{report.contributors}</p>}
            </div>
          </article>

          <aside className="h-fit lg:sticky lg:top-[30px]">
            <div className="border border-[#d8ddd5] bg-[#f7f8f5] p-[25px]">
              <h2 className="font-display text-[25px] text-[#4f832a]">Contents</h2>
              <ul className="mt-[16px] space-y-[11px]">
                {report.contents.map((item) => <li key={item} className="border-b border-[#dde0da] pb-[10px] text-[15px] leading-[1.45]">{item}</li>)}
              </ul>
            </div>
            <Link href="/resources/trends" className="mt-[22px] inline-flex w-full items-center justify-center rounded-[4px] border-2 border-[#496d83] bg-[#496d83] px-[20px] py-[11px] text-[16px] font-bold text-white hover:bg-white hover:text-[#496d83]">Back to Industry Trends</Link>
          </aside>
        </div>
      </section>
    </main>
  );
}

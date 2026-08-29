import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Industry Trends & Outlooks | Farm Funding",
  description:
    "Discover agricultural trends, market outlooks and timely industry insights for Northeast agriculture.",
};

const REPORTS = [
  {
    title: "United States Citizenship and Immigration Service Clears H-2A Path for Dairy Employers",
    date: "July 7, 2026",
    image: "/images/homepage/Dairy cows milking.jpg",
    href: "/en/resources/Industry-Trends-and-Outlooks/Reports/2607KEP_H2AForDairyEmployers.html",
    excerpt:
      "A new policy path may give dairy producers access to the H-2A temporary agricultural worker program, creating a potential workforce option for year-round dairy operations.",
  },
  {
    title: "2025 Northeast Dairy Farm Summary & Mid-Year Outlook",
    date: "July 10, 2026",
    image: "/images/homepage/Dairy cows milking.jpg",
    href: "/resources/Industry-Trends-and-Outlooks/Reports/2025NEDairyFarmSummary2026MidYearOutlook",
    excerpt:
      "The annual Northeast dairy farm summary reviews regional financial performance and provides an outlook for the remainder of 2026.",
  },
  {
    title: "Fuel, Fertilizer and Conflict in the Middle East: What to Know Now",
    date: "June 2, 2026",
    image: "/images/homepage/capacity-to-serve-your-needs.jpg",
    href: "/en/resources/Industry-Trends-and-Outlooks/Reports/2606KEP_FuelFertilizerandConflictinMiddleEast.html",
    excerpt:
      "Global conflict is affecting fuel and fertilizer markets. The report examines potential implications for input costs, margins and farm planning.",
  },
  {
    title: "Dairy Markets Show Positive Trends",
    date: "May 3, 2026",
    image: "/images/homepage/Dairy cows milking.jpg",
    href: "/en/resources/Industry-Trends-and-Outlooks/Reports/2605KEP_DairyMidYearTrends.html",
    excerpt:
      "Improving dairy margins, strong protein demand and continued dairy-plant investment are supporting a more positive market outlook, while volatility remains a risk.",
  },
];

export default function Page() {
  return (
    <main className="w-full bg-white">
      <section className="w-full bg-[#ecf1e4]">
        <div className="mx-auto max-w-[1440px] px-[4.05%] py-[55px] md:py-[70px] lg:py-[85px]">
          <h1 className="font-display text-[34px] leading-[1.15] text-[#4f832a] md:text-[44px] lg:text-[50px]">
            Ag Industry Trends &amp; Outlooks
          </h1>
          <p className="mt-[22px] max-w-[900px] text-[17px] leading-[1.75] text-[#231f20] md:text-[19px] md:leading-[1.7]">
            Discover insights, trends, ag market outlooks and other topical information as it relates to the Northeast&apos;s diverse agricultural industries. Brought to you by Knowledge Exchange from Farm Funding.
          </p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1440px] px-[4.05%] py-[55px] md:py-[70px] lg:py-[85px]">
          <h2 className="font-display text-[32px] leading-[1.2] text-[#4f832a] md:text-[40px]">
            Industry Trends &amp; Education
          </h2>

          <div className="mt-[35px] grid grid-cols-1 gap-[35px] md:grid-cols-2">
            {REPORTS.map((report) => (
              <article key={report.title} className="bg-white">
                <Link href={report.href} className="group block">
                  <div className="relative h-[260px] w-full overflow-hidden md:h-[300px]">
                    <Image
                      src={report.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="border border-t-0 border-[#d9d9d9] p-[26px]">
                    <span className="inline-block border border-[#231f20]/40 bg-white px-[10px] py-[5px] text-[12px] font-bold uppercase leading-[16px] text-[#231f20]">
                      Reports
                    </span>
                    <h3 className="mt-[14px] font-display text-[24px] leading-[1.25] text-[#705600] group-hover:underline md:text-[27px]">
                      {report.title} <span aria-hidden="true">›</span>
                    </h3>
                    <p className="mt-[13px] text-[16px] leading-[1.65] text-[#231f20]">
                      {report.excerpt}
                    </p>
                    <p className="mt-[16px] text-[13px] font-bold uppercase tracking-[0.04em] text-[#686868]">
                      {report.date}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-[55px] border-t border-[#d4d8d0] pt-[35px]">
            <Link href="/" className="inline-flex h-[51px] items-center justify-center rounded-[4px] border-2 border-[#496d83] bg-[#496d83] px-[22px] text-[16px] font-bold text-white transition-colors hover:bg-white hover:text-[#496d83]">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

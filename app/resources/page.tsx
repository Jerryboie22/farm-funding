import Link from "next/link";

export const metadata = {
  title: "Resources | Farm Funding",
  description: "Industry trends, reports, market information and practical resources for Northeast agriculture.",
};

const resources = [
  {
    label: "Reports",
    title: "Industry Trends & Outlooks",
    description: "Stay informed with agricultural market analysis, industry outlooks and reports from Farm Funders and its Knowledge Exchange Partners.",
    href: "/resources/Industry-Trends-and-Outlooks",
  },
  {
    label: "Today's Harvest",
    title: "Today's Harvest Blog",
    description: "Read the latest Farm Funders news, business guidance, agricultural updates and practical information for producers.",
    href: "/resources/todays-harvest-Blog",
  },
  {
    label: "Markets",
    title: "DTN Ag Markets, Weather & News",
    description: "Review current agricultural market information, commodity prices, local weather and industry news.",
    href: "/resources/DTNMarketWeather",
  },
  {
    label: "Tools",
    title: "Calculators",
    description: "Use financial tools to estimate payments and explore financing scenarios for your operation.",
    href: "/resources/calculators",
  },
  {
    label: "Agriculture",
    title: "Northeast Farm Fresh Guide",
    description: "Find farms, farmers' markets, vineyards, wineries and other local agriculture resources across the Northeast.",
    href: "/resources/Northeast-Farm-Fresh-Guide",
  },
  {
    label: "Photo Contest",
    title: "Calendar Photo Contest",
    description: "Share your best agricultural photography and see how producers across the Northeast are represented.",
    href: "/resources/photo-contest",
  },
];

export default function ResourcesPage() {
  return (
    <main>
      <section className="bg-cream px-[4%] py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-grey-text">Farm Funders</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-extrabold text-forest leading-tight">
            Resources
          </h1>
          <p className="mt-5 max-w-3xl text-base md:text-lg text-charcoal/80 leading-relaxed">
            Information, tools and insights to help you make informed decisions and build a stronger agricultural business.
          </p>
        </div>
      </section>

      <section className="px-[4%] py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <article key={resource.title} className="border border-line bg-white p-7 min-h-[270px] flex flex-col">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-grey-text">{resource.label}</p>
                <h2 className="mt-4 font-display text-2xl font-bold text-forest leading-tight">
                  <Link href={resource.href} className="hover:text-clay transition-colors">
                    {resource.title}
                  </Link>
                </h2>
                <p className="mt-4 text-base text-charcoal/75 leading-relaxed flex-1">
                  {resource.description}
                </p>
                <Link href={resource.href} className="mt-6 text-sm font-bold text-clay hover:text-forest">
                  Explore Resource →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-dark text-white px-[4%] py-14 md:py-16 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold">Have Additional Questions?</h2>
        <p className="mt-4 text-white/85 max-w-2xl mx-auto leading-relaxed">
          Let&apos;s get in touch. Our local team can help you find the information, financing and services that fit your operation.
        </p>
        <Link href="/contact" className="mt-8 inline-flex px-7 py-3.5 border-2 border-white text-white text-sm font-bold rounded-sm hover:bg-white hover:text-forest-dark">
          Contact Us
        </Link>
      </section>
    </main>
  );
}

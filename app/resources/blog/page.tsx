import Link from "next/link";
import { HARVEST_ARTICLES } from "./articles";

export const metadata = {
  title: "Today's Harvest Blog | Farm Funding",
  description:
    "Get the latest news, insights and tips from Farm Funding - experts in Northeast agriculture, fishing and forestry.",
};

const CATEGORIES = [
  "Ag Economy",
  "Business Tips and Tools",
  "Crop Insurance",
  "Farm Credit",
  "FarmStart and Beginning Farmers",
  "Financial Management",
  "Innovation and Emerging Markets",
  "Knowledge Exchange Partner",
  "Profitability",
  "Public Policy",
  "Tax Talks",
  "Transition Planning",
];

const YEARS = ["2026", "2025", "2024", "2023"];

export default function TodaysHarvestBlogPage() {
  const featured = HARVEST_ARTICLES[0];
  const latestTaxTalk = HARVEST_ARTICLES.find((post) => post.category === "Tax Talks");

  return (
    <main className="w-full bg-white">
      <section className="w-full bg-cream mt-8">
        <div className="grid grid-cols-1 md:grid-cols-12 px-[4%]">
          <div className="md:col-span-6 flex flex-col justify-center py-10 md:py-12 lg:py-14 md:pr-12 lg:pr-16">
            <h1 className="font-display text-4xl md:text-[52px] font-extrabold text-forest leading-tight">
              Today&apos;s Harvest Blog
            </h1>
            <p className="mt-5 max-w-2xl text-base text-charcoal/80 leading-relaxed">
              Today&apos;s Harvest is a timely resource for stories, news, tips and information relevant to Northeast agriculture and our customers.
            </p>
          </div>
          <div className="md:col-span-6">
            <img
              src="/images/homepage/1-orchard_adobestock_292882711.jpg"
              alt="Farm tractor working a field during harvest"
              className="block w-full h-[300px] md:h-[360px] lg:h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="w-full px-[4%] py-12 md:py-16 bg-white">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-forest">
          Latest From Today&apos;s Harvest Blog
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Link href={`/resources/blog/${featured.slug}`} className="block">
            <img
              src={featured.image}
              alt={featured.title}
              className="block w-full h-[260px] md:h-[340px] object-cover rounded-sm"
            />
          </Link>
          <div>
            <span className="inline-block text-grey-text text-xs font-bold uppercase tracking-wide">
              {featured.category}
            </span>
            <Link href={`/resources/blog/${featured.slug}`}>
              <h3 className="mt-3 font-display text-2xl md:text-3xl font-semibold text-gold leading-snug hover:underline">
                {featured.title}
              </h3>
            </Link>
            <p className="mt-4 text-base text-charcoal/80 leading-relaxed">{featured.excerpt}</p>
            <p className="mt-4 text-sm text-grey-text">{featured.date}</p>
          </div>
        </div>
      </section>

      {latestTaxTalk && (
        <section className="w-full px-[4%] py-12 md:py-16 bg-grey-bg">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-forest">Latest Tax Talk</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <Link href={`/resources/blog/${latestTaxTalk.slug}`} className="block">
              <img
                src={latestTaxTalk.image}
                alt={latestTaxTalk.title}
                className="block w-full h-[260px] md:h-[340px] object-cover rounded-sm"
              />
            </Link>
            <div>
              <span className="inline-block text-grey-text text-xs font-bold uppercase tracking-wide">
                {latestTaxTalk.category}
              </span>
              <Link href={`/resources/blog/${latestTaxTalk.slug}`}>
                <h3 className="mt-3 font-display text-2xl md:text-3xl font-semibold text-gold leading-snug hover:underline">
                  {latestTaxTalk.title}
                </h3>
              </Link>
              <p className="mt-4 text-base text-charcoal/80 leading-relaxed">{latestTaxTalk.excerpt}</p>
              <p className="mt-4 text-sm text-grey-text">{latestTaxTalk.date}</p>
            </div>
          </div>
        </section>
      )}

      <section className="w-full px-[4%] py-12 md:py-16 bg-white">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-forest">All Posts</h2>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-x-12 gap-y-10">
          <aside className="order-2 lg:order-1">
            <div>
              <h3 className="font-display text-lg font-semibold text-charcoal">Category</h3>
              <ul className="mt-4 space-y-2.5">
                {CATEGORIES.map((cat) => (
                  <li key={cat}>
                    <label className="flex items-start gap-2.5 text-sm text-charcoal/80 cursor-pointer">
                      <input type="checkbox" className="mt-1 accent-clay" aria-label={cat} />
                      {cat}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10">
              <h3 className="font-display text-lg font-semibold text-charcoal">Year</h3>
              <ul className="mt-4 space-y-2.5">
                {YEARS.map((year) => (
                  <li key={year}>
                    <label className="flex items-center gap-2.5 text-sm text-charcoal/80 cursor-pointer">
                      <input type="checkbox" className="accent-clay" aria-label={year} />
                      {year}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
            {HARVEST_ARTICLES.map((post) => (
              <article key={post.slug}>
                <Link href={`/resources/blog/${post.slug}`} className="block">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="block w-full h-[200px] object-cover rounded-sm"
                  />
                </Link>
                <span className="mt-4 inline-block text-grey-text text-xs font-bold uppercase tracking-wide">{post.category}</span>
                <Link href={`/resources/blog/${post.slug}`}>
                  <h3 className="mt-2 font-display text-lg font-semibold text-gold leading-snug hover:underline">{post.title}</h3>
                </Link>
                <p className="mt-3 text-sm text-charcoal/80 leading-relaxed line-clamp-3">{post.excerpt}</p>
                <p className="mt-3 text-xs text-grey-text">{post.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-forest-dark text-white text-center py-14 md:py-16 px-[4%]">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Meet the Authors</h2>
        <p className="mt-5 max-w-2xl mx-auto text-base text-white/85">
          Connect with and discover our Today&apos;s Harvest blog authors and their broad range of financial and Northeast agricultural expertise.
        </p>
        <Link href="/contact" className="mt-7 inline-flex w-fit mx-auto px-6 py-3.5 bg-white text-forest-dark text-sm font-bold rounded-sm hover:bg-cream transition-colors">
          Meet the Authors
        </Link>
      </section>

      <section className="w-full bg-cream px-[4%] py-12 md:py-16 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-forest">Sign up for our Today&apos;s Harvest Blog</h2>
        <p className="mt-4 text-base text-charcoal/80">Get the latest blog articles delivered to your inbox.</p>
        <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input id="newsletter-email" type="email" required placeholder="Enter your email*" className="flex-1 px-4 py-3 border border-charcoal/20 rounded-sm text-sm text-charcoal placeholder:text-grey-text bg-white" />
          <button type="submit" className="px-6 py-3 bg-clay text-white text-sm font-bold rounded-sm hover:bg-clay-dark transition-colors">Sign Up</button>
        </form>
      </section>
    </main>
  );
}

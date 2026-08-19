import Link from "next/link";
import {
  CURRENT_FEATURED_ARTICLE,
  CURRENT_LATEST_TAX_TALK,
  ALL_REFERENCE_ARTICLES,
} from "./all";

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

const YEARS = ["2023", "2024", "2025", "2026"];
const PAGE_SIZE = 4;

export default async function TodaysHarvestBlogPage({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string;
    category?: string;
    year?: string;
    page?: string;
  }>;
}) {
  const params = await searchParams;
  const query = (params.q ?? "").trim().toLowerCase();
  const category = params.category ?? "";
  const year = params.year ?? "";
  const page = Math.max(1, Number(params.page ?? "1") || 1);

  const filtered = ALL_REFERENCE_ARTICLES.filter((article) => {
    const matchesQuery =
      !query ||
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query);
    const matchesCategory = !category || article.category === category;
    const matchesYear = !year || article.date.endsWith(year);
    return matchesQuery && matchesCategory && matchesYear;
  });

  const start = (page - 1) * PAGE_SIZE;
  const visiblePosts = filtered.slice(start, start + PAGE_SIZE);
  const hasNext = start + PAGE_SIZE < filtered.length;
  const hasPrevious = page > 1;

  const makePageHref = (nextPage: number) => {
    const search = new URLSearchParams();
    if (query) search.set("q", query);
    if (category) search.set("category", category);
    if (year) search.set("year", year);
    if (nextPage > 1) search.set("page", String(nextPage));
    const value = search.toString();
    return `/resources/blog${value ? `?${value}` : ""}`;
  };

  return (
    <main className="w-full bg-white">
      <section className="w-full bg-cream mt-8">
        <div className="grid grid-cols-1 md:grid-cols-12 px-[4%]">
          <div className="md:col-span-6 flex flex-col justify-center py-10 md:py-12 lg:py-14 md:pr-12 lg:pr-16">
            <h1 className="font-display text-4xl md:text-[52px] font-extrabold text-forest leading-tight">
              Today&apos;s Harvest Blog
            </h1>
            <p className="mt-5 max-w-2xl text-base text-charcoal/80 leading-relaxed">
              Today&apos;s Harvest is a valued, timely resource for stories,
              news, tips and information relevant to Northeast agriculture and
              our customers.
            </p>
          </div>
          <div className="md:col-span-6">
            <img
              src="/images/homepage/1-orchard_adobestock_292882711.jpg"
              alt="Farm tractor in a field during the fall harvest"
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
          <Link
            href={`/resources/blog/${CURRENT_FEATURED_ARTICLE.slug}`}
            className="block"
          >
            <img
              src={CURRENT_FEATURED_ARTICLE.image}
              alt={CURRENT_FEATURED_ARTICLE.title}
              className="block w-full h-[260px] md:h-[340px] object-cover rounded-sm"
            />
          </Link>
          <div>
            <span className="inline-block text-grey-text text-xs font-bold uppercase tracking-wide">
              {CURRENT_FEATURED_ARTICLE.category}
            </span>
            <Link href={`/resources/blog/${CURRENT_FEATURED_ARTICLE.slug}`}>
              <h3 className="mt-3 font-display text-2xl md:text-3xl font-semibold text-gold leading-snug hover:underline">
                {CURRENT_FEATURED_ARTICLE.title}
              </h3>
            </Link>
            <p className="mt-3 text-sm text-grey-text">
              {CURRENT_FEATURED_ARTICLE.author}
            </p>
            <p className="mt-4 text-base text-charcoal/80 leading-relaxed">
              {CURRENT_FEATURED_ARTICLE.excerpt}
            </p>
            <p className="mt-4 text-sm text-grey-text">
              {CURRENT_FEATURED_ARTICLE.date}
            </p>
          </div>
        </div>
      </section>

      <section className="w-full px-[4%] py-12 md:py-16 bg-grey-bg">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-forest">
          Latest Tax Talk
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Link
            href={`/resources/blog/${CURRENT_LATEST_TAX_TALK.slug}`}
            className="block"
          >
            <img
              src={CURRENT_LATEST_TAX_TALK.image}
              alt="Woman in front of tractor in agriculture field holding and looking at a laptop computer"
              className="block w-full h-[260px] md:h-[340px] object-cover rounded-sm"
            />
          </Link>
          <div>
            <span className="inline-block text-grey-text text-xs font-bold uppercase tracking-wide">
              {CURRENT_LATEST_TAX_TALK.category}
            </span>
            <Link href={`/resources/blog/${CURRENT_LATEST_TAX_TALK.slug}`}>
              <h3 className="mt-3 font-display text-2xl md:text-3xl font-semibold text-gold leading-snug hover:underline">
                {CURRENT_LATEST_TAX_TALK.title}
              </h3>
            </Link>
            <p className="mt-3 text-sm text-grey-text">
              {CURRENT_LATEST_TAX_TALK.author}
            </p>
            <p className="mt-4 text-base text-charcoal/80 leading-relaxed">
              {CURRENT_LATEST_TAX_TALK.excerpt}
            </p>
            <p className="mt-4 text-sm text-grey-text">
              {CURRENT_LATEST_TAX_TALK.date}
            </p>
          </div>
        </div>
      </section>

      <section className="w-full px-[4%] py-12 md:py-16 bg-white">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-forest">
          Today&apos;s Harvest Blog
        </h2>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-x-12 gap-y-10">
          <aside className="order-2 lg:order-1">
            <form method="get" action="/resources/blog" className="space-y-8">
              <div>
                <h3 className="font-display text-lg font-semibold text-charcoal">
                  Category
                </h3>
                <div className="mt-4 space-y-2.5">
                  {CATEGORIES.map((item) => (
                    <label
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-charcoal/80 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="category"
                        value={item}
                        defaultChecked={category === item}
                        className="mt-1 accent-clay"
                      />
                      {item}
                    </label>
                  ))}
                  <label className="flex items-start gap-2.5 text-sm text-charcoal/80 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value=""
                      defaultChecked={!category}
                      className="mt-1 accent-clay"
                    />
                    All categories
                  </label>
                </div>
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold text-charcoal">
                  Year
                </h3>
                <div className="mt-4 space-y-2.5">
                  {YEARS.map((item) => (
                    <label
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-charcoal/80 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="year"
                        value={item}
                        defaultChecked={year === item}
                        className="accent-clay"
                      />
                      {item}
                    </label>
                  ))}
                  <label className="flex items-center gap-2.5 text-sm text-charcoal/80 cursor-pointer">
                    <input
                      type="radio"
                      name="year"
                      value=""
                      defaultChecked={!year}
                      className="accent-clay"
                    />
                    All years
                  </label>
                </div>
              </div>

              <div>
                <label
                  htmlFor="blog-search"
                  className="font-display text-lg font-semibold text-charcoal"
                >
                  Search
                </label>
                <input
                  id="blog-search"
                  name="q"
                  defaultValue={params.q ?? ""}
                  placeholder="Search articles"
                  className="mt-4 w-full px-3 py-2.5 border border-charcoal/20 rounded-sm text-sm bg-white text-charcoal"
                />
                <button
                  type="submit"
                  className="mt-3 px-5 py-2.5 bg-clay text-white text-sm font-bold rounded-sm hover:bg-clay-dark transition-colors"
                >
                  Search
                </button>
                {(query || category || year) && (
                  <Link
                    href="/resources/blog"
                    className="mt-3 ml-3 inline-block text-sm font-semibold text-clay hover:text-forest"
                  >
                    Reset Filters
                  </Link>
                )}
              </div>
            </form>
          </aside>

          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              {visiblePosts.map((post) => (
                <article key={post.slug}>
                  <Link
                    href={`/resources/blog/${post.slug}`}
                    className="block"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="block w-full h-[200px] object-cover rounded-sm"
                    />
                  </Link>
                  <span className="mt-4 inline-block text-grey-text text-xs font-bold uppercase tracking-wide">
                    {post.category}
                  </span>
                  <Link href={`/resources/blog/${post.slug}`}>
                    <h3 className="mt-2 font-display text-lg font-semibold text-gold leading-snug hover:underline">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="mt-3 text-sm text-charcoal/80 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <p className="mt-3 text-xs text-grey-text">{post.date}</p>
                </article>
              ))}
            </div>

            {visiblePosts.length === 0 && (
              <p className="py-12 text-center text-sm text-grey-text">
                No results found. Please modify your search criteria and try
                again.
              </p>
            )}

            {(hasPrevious || hasNext) && (
              <div className="mt-12 flex items-center justify-between border-t border-charcoal/10 pt-6">
                {hasPrevious ? (
                  <Link
                    href={makePageHref(page - 1)}
                    className="text-sm font-bold text-clay hover:text-forest"
                  >
                    ← Previous
                  </Link>
                ) : (
                  <span />
                )}
                {hasNext ? (
                  <Link
                    href={makePageHref(page + 1)}
                    className="text-sm font-bold text-clay hover:text-forest"
                  >
                    Next →
                  </Link>
                ) : (
                  <span />
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="w-full bg-forest-dark text-white text-center py-14 md:py-16 px-[4%]">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
          Meet the Authors
        </h2>
        <p className="mt-5 max-w-2xl mx-auto text-base text-white/85">
          Connect with and discover our Today&apos;s Harvest blog authors and
          their broad range of financial and Northeast agricultural expertise.
        </p>
        <Link
          href="/contact"
          className="mt-7 inline-flex w-fit mx-auto px-6 py-3.5 bg-white text-forest-dark text-sm font-bold rounded-sm hover:bg-cream transition-colors"
        >
          Meet the Authors
        </Link>
      </section>

      <section className="w-full bg-cream px-[4%] py-12 md:py-16 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-forest">
          Sign up for our Today&apos;s Harvest Blog.
        </h2>
        <p className="mt-4 text-base text-charcoal/80">
          Get the latest blog articles delivered to your inbox.
        </p>
        <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="Enter your email*"
            className="flex-1 px-4 py-3 border border-charcoal/20 rounded-sm text-sm text-charcoal placeholder:text-grey-text bg-white"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-clay text-white text-sm font-bold rounded-sm hover:bg-clay-dark transition-colors"
          >
            Sign Up
          </button>
        </form>
      </section>
    </main>
  );
}

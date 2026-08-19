import Link from "next/link";
import { CURRENT_FEATURED_ARTICLE, CURRENT_LATEST_TAX_TALK, ALL_REFERENCE_ARTICLES } from "./all";

export const metadata = {
  title: "Today's Harvest Blog | Farm Funding",
  description: "Get the latest news, insights and tips from Farm Funding - experts in Northeast agriculture, fishing and forestry.",
};

const CATEGORIES = ["Ag Economy", "Business Tips and Tools", "Crop Insurance", "Farm Credit", "FarmStart and Beginning Farmers", "Financial Management", "Innovation and Emerging Markets", "Knowledge Exchange Partner", "Profitability", "Public Policy", "Tax Talks", "Transition Planning"];
const YEARS = ["2023", "2024", "2025", "2026"];
const PAGE_SIZE = 4;

function pageHref({ query, category, year, page }: { query: string; category: string; year: string; page?: number }) {
  const params = new URLSearchParams();
  if (query) params.set("q", query);
  if (category) params.set("category", category);
  if (year) params.set("year", year);
  if (page && page > 1) params.set("page", String(page));
  const value = params.toString();
  return `/resources/blog${value ? `?${value}` : ""}`;
}

export default async function TodaysHarvestBlogPage({ searchParams }: { searchParams: Promise<{ q?: string; category?: string; year?: string; page?: string }> }) {
  const params = await searchParams;
  const query = (params.q ?? "").trim();
  const category = params.category ?? "";
  const year = params.year ?? "";
  const requestedPage = Math.max(1, Number(params.page ?? "1") || 1);
  const normalizedQuery = query.toLowerCase();
  const filtered = ALL_REFERENCE_ARTICLES.filter((article) => {
    const haystack = `${article.title} ${article.excerpt} ${article.category}`.toLowerCase();
    return (!normalizedQuery || haystack.includes(normalizedQuery)) && (!category || article.category === category) && (!year || article.date.endsWith(year));
  });
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const page = Math.min(requestedPage, totalPages);
  const visiblePosts = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <main className="w-full bg-white">
      <section className="w-full bg-cream mt-8">
        <div className="grid grid-cols-1 md:grid-cols-12 px-[4%]">
          <div className="md:col-span-6 flex flex-col justify-center py-10 md:py-12 lg:py-14 md:pr-12 lg:pr-16">
            <h1 className="font-display text-4xl md:text-[52px] font-extrabold text-forest leading-tight">Today&apos;s Harvest Blog</h1>
            <p className="mt-5 max-w-2xl text-base text-charcoal/80 leading-relaxed">Today&apos;s Harvest is a valued, timely resource for stories, news, tips and information relevant to Northeast agriculture and our customers.</p>
          </div>
          <div className="md:col-span-6"><img src="/images/homepage/1-orchard_adobestock_292882711.jpg" alt="Farm tractor in a field during the fall harvest" className="block w-full h-[300px] md:h-[360px] lg:h-[400px] object-cover" /></div>
        </div>
      </section>

      <section className="w-full px-[4%] py-12 md:py-16 bg-white">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-forest">Latest From Today&apos;s Harvest Blog</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Link href={`/resources/blog/${CURRENT_FEATURED_ARTICLE.slug}`} className="block"><img src={CURRENT_FEATURED_ARTICLE.image} alt="Picture of Megan Clancy, Farm Credit East Risk Advisor standing in a dairy barn with black and white cows in the background" className="block w-full h-[260px] md:h-[340px] object-cover rounded-sm" /></Link>
          <div>
            <span className="inline-block text-grey-text text-xs font-bold uppercase tracking-wide">{CURRENT_FEATURED_ARTICLE.category}</span>
            <Link href={`/resources/blog/${CURRENT_FEATURED_ARTICLE.slug}`}><h3 className="mt-3 font-display text-2xl md:text-3xl font-semibold text-gold leading-snug hover:underline">{CURRENT_FEATURED_ARTICLE.title}</h3></Link>
            <p className="mt-3 text-sm text-grey-text">{CURRENT_FEATURED_ARTICLE.author}</p>
            <p className="mt-4 text-base text-charcoal/80 leading-relaxed">{CURRENT_FEATURED_ARTICLE.excerpt}</p>
            <p className="mt-4 text-sm text-grey-text">{CURRENT_FEATURED_ARTICLE.date}</p>
          </div>
        </div>
      </section>

      <section className="w-full px-[4%] py-12 md:py-16 bg-grey-bg">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-forest">Latest Tax Talk</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Link href={`/resources/blog/${CURRENT_LATEST_TAX_TALK.slug}`} className="block"><img src={CURRENT_LATEST_TAX_TALK.image} alt="Woman in front of tractor in agriculture field holding and looking at a laptop computer, with tax talk logo in corner" className="block w-full h-[260px] md:h-[340px] object-cover rounded-sm" /></Link>
          <div>
            <span className="inline-block text-grey-text text-xs font-bold uppercase tracking-wide">{CURRENT_LATEST_TAX_TALK.category}</span>
            <Link href={`/resources/blog/${CURRENT_LATEST_TAX_TALK.slug}`}><h3 className="mt-3 font-display text-2xl md:text-3xl font-semibold text-gold leading-snug hover:underline">{CURRENT_LATEST_TAX_TALK.title}</h3></Link>
            <p className="mt-4 text-base text-charcoal/80 leading-relaxed">{CURRENT_LATEST_TAX_TALK.excerpt}</p>
            <p className="mt-4 text-sm text-grey-text">{CURRENT_LATEST_TAX_TALK.date}</p>
          </div>
        </div>
      </section>

      <section className="w-full px-[4%] py-12 md:py-16 bg-white">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-forest">Today&apos;s Harvest Blog</h2>
        <form method="get" action="/resources/blog" className="mt-8 flex flex-col md:flex-row md:items-end gap-4">
          <div className="w-full md:flex-1"><label htmlFor="blog-search" className="sr-only">Type Search here</label><input id="blog-search" name="q" defaultValue={query} placeholder="Type Search here" className="w-full h-12 px-4 border border-charcoal/20 rounded-sm bg-white text-sm text-charcoal placeholder:text-grey-text focus:outline-none focus:border-clay" /></div>
          <div className="w-full md:w-[250px]"><label htmlFor="blog-category" className="sr-only">Filter by category</label><select id="blog-category" name="category" defaultValue={category} className="w-full h-12 px-4 border border-charcoal/20 rounded-sm bg-white text-sm text-charcoal focus:outline-none focus:border-clay"><option value="">Filter by category</option>{CATEGORIES.map((item) => <option key={item} value={item}>{item}</option>)}</select></div>
          <div className="w-full md:w-[180px]"><label htmlFor="blog-year" className="sr-only">Filter by year</label><select id="blog-year" name="year" defaultValue={year} className="w-full h-12 px-4 border border-charcoal/20 rounded-sm bg-white text-sm text-charcoal focus:outline-none focus:border-clay"><option value="">Filter by year</option>{YEARS.map((item) => <option key={item} value={item}>{item}</option>)}</select></div>
          <button type="submit" className="h-12 px-6 bg-clay text-white text-sm font-bold rounded-sm hover:bg-clay-dark transition-colors">Search</button>
          {(query || category || year) && <Link href="/resources/blog" className="h-12 inline-flex items-center text-sm font-semibold text-clay hover:text-forest whitespace-nowrap">Reset Filters</Link>}
        </form>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-12">
          {visiblePosts.map((post) => <article key={post.slug}><Link href={`/resources/blog/${post.slug}`} className="block"><img src={post.image} alt={post.title} className="block w-full h-[190px] object-cover rounded-sm" /></Link><span className="mt-4 inline-block text-grey-text text-xs font-bold uppercase tracking-wide">{post.category}</span><Link href={`/resources/blog/${post.slug}`}><h3 className="mt-2 font-display text-lg font-semibold text-gold leading-snug hover:underline">{post.title}</h3></Link><p className="mt-3 text-sm text-charcoal/80 leading-relaxed">{post.excerpt}</p><p className="mt-3 text-xs text-grey-text">{post.date}</p></article>)}
        </div>
        {visiblePosts.length === 0 && <p className="py-12 text-center text-sm text-grey-text">No results found. Please modify your search criteria and try again.</p>}
        {totalPages > 1 && <nav aria-label="Blog pagination" className="mt-12 flex justify-center items-center gap-2">{Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => <Link key={number} href={pageHref({ query, category, year, page: number })} aria-current={page === number ? "page" : undefined} className={`min-w-10 h-10 px-3 inline-flex items-center justify-center border text-sm font-semibold transition-colors ${page === number ? "bg-clay text-white border-clay" : "bg-white text-charcoal border-charcoal/20 hover:border-clay hover:text-clay"}`}>{number}</Link>)}</nav>}
      </section>

      <section className="w-full bg-forest-dark text-white text-center py-14 md:py-16 px-[4%]"><h2 className="font-display text-3xl md:text-4xl font-bold text-white">Meet the Authors</h2><p className="mt-5 max-w-2xl mx-auto text-base text-white/85">Connect with and discover our Today&apos;s Harvest blog authors and their broad range of financial and Northeast agricultural expertise.</p><Link href="/contact" className="mt-7 inline-flex w-fit mx-auto px-6 py-3.5 bg-white text-forest-dark text-sm font-bold rounded-sm hover:bg-cream transition-colors">Meet the Authors</Link></section>

      <section className="w-full bg-cream px-[4%] py-12 md:py-16 text-center"><h2 className="font-display text-2xl md:text-3xl font-bold text-forest">Sign up for our Today&apos;s Harvest Blog.</h2><p className="mt-4 text-base text-charcoal/80">Get the latest blog articles delivered to your inbox.</p><form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"><label htmlFor="newsletter-email" className="sr-only">Email address</label><input id="newsletter-email" type="email" required placeholder="Enter your email*" className="flex-1 px-4 py-3 border border-charcoal/20 rounded-sm text-sm text-charcoal placeholder:text-grey-text bg-white" /><button type="submit" className="px-6 py-3 bg-clay text-white text-sm font-bold rounded-sm hover:bg-clay-dark transition-colors">Sign Up</button></form></section>
    </main>
  );
}

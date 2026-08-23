import Link from "next/link";
import { ALL_REFERENCE_ARTICLES } from "../blog/registry";

export const metadata = {
  title: "Today's Harvest Blog | Farm Funding",
  description: "Agricultural insights, business tips, policy updates and industry perspectives from Farm Funding.",
};

export default function TodaysHarvestBlogPage() {
  return (
    <main className="w-full bg-white text-charcoal">
      <section className="bg-forest">
        <div className="mx-auto max-w-[1180px] px-6 py-14 md:px-10 md:py-18 lg:px-12 lg:py-20">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.12em] text-white/80">Resources</p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-[54px]">Today&apos;s Harvest</h1>
          <p className="mt-5 max-w-3xl font-body text-lg leading-8 text-white/90">Insights and practical information for farmers, agribusinesses and rural communities.</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-6 py-12 md:px-10 lg:px-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ALL_REFERENCE_ARTICLES.map((article) => (
            <article key={article.slug} className="overflow-hidden border border-black/10 bg-white shadow-sm">
              <img src={article.image} alt="" className="h-52 w-full object-cover" />
              <div className="p-6">
                <time className="font-body text-sm text-grey-text">{article.date}</time>
                <p className="mt-2 font-display text-sm font-bold text-clay">{article.category}</p>
                <h2 className="mt-2 font-display text-xl font-bold leading-tight text-forest">{article.title}</h2>
                <p className="mt-3 line-clamp-4 font-body text-[15px] leading-6 text-charcoal">{article.excerpt}</p>
                <Link href={`/resources/todays-harvest-Blog/${article.slug}`} className="mt-5 inline-flex font-display text-sm font-bold text-blue hover:underline">Read more</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { getHarvestArticle, HARVEST_ARTICLES } from "../articles";

export function generateStaticParams() {
  return HARVEST_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getHarvestArticle(slug);
  if (!article) return { title: "Today's Harvest Blog | Farm Funding" };
  return {
    title: `${article.title} | Farm Funding`,
    description: article.excerpt,
  };
}

export default async function HarvestArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getHarvestArticle(slug);
  if (!article) notFound();

  return (
    <main className="w-full bg-white">
      <section className="w-full bg-cream mt-8">
        <div className="px-[4%] py-12 md:py-16 lg:py-20 max-w-[1440px] mx-auto">
          <div className="max-w-4xl">
            <Link
              href="/resources/blog"
              className="inline-flex items-center text-sm font-semibold text-clay hover:text-forest transition-colors"
            >
              ← Back to Today&apos;s Harvest Blog
            </Link>
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.12em] text-grey-text">
              {article.category}
            </p>
            <h1 className="mt-3 font-display text-4xl md:text-5xl lg:text-[52px] font-bold text-forest leading-tight">
              {article.title}
            </h1>
            <p className="mt-5 text-sm text-grey-text">{article.date}</p>
          </div>
        </div>
      </section>

      <section className="w-full px-[4%] py-10 md:py-14 lg:py-16">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-10 lg:gap-14">
          <article>
            <img
              src={article.image}
              alt={article.title}
              className="block w-full h-[260px] md:h-[400px] lg:h-[480px] object-cover rounded-sm"
            />

            <p className="mt-8 text-lg md:text-xl text-charcoal leading-relaxed font-medium">
              {article.excerpt}
            </p>

            <div className="mt-8 border-t border-line pt-8">
              {article.sections.map((section) => (
                <section key={section.heading} className="mb-9">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-forest">
                    {section.heading}
                  </h2>
                  <p className="mt-4 text-base md:text-lg text-charcoal/85 leading-relaxed">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>
          </article>

          <aside className="lg:pt-[400px]">
            <div className="border-t-4 border-line bg-grey-bg p-6">
              <p className="text-xs uppercase tracking-wide font-bold text-grey-text">
                Today&apos;s Harvest
              </p>
              <h2 className="mt-2 font-display text-xl font-bold text-forest">
                {article.category}
              </h2>
              <p className="mt-4 text-sm text-charcoal/75 leading-relaxed">
                Timely stories, news, tips and information relevant to Northeast agriculture and our customers.
              </p>
              <Link
                href="/resources/blog"
                className="mt-5 inline-flex text-sm font-bold text-clay hover:text-forest transition-colors"
              >
                View all posts →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="w-full bg-forest-dark text-white text-center py-12 md:py-14 px-[4%]">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
          Have questions about your operation?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-base text-white/85">
          Our team understands Northeast agriculture and can help you evaluate your next steps.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex px-6 py-3.5 bg-white text-forest-dark text-sm font-bold rounded-sm hover:bg-cream transition-colors"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}

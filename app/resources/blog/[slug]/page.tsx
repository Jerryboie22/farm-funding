import Link from "next/link";
import { notFound } from "next/navigation";
import { ALL_REFERENCE_ARTICLES, getReferenceArticle } from "../all";

export function generateStaticParams() {
  return ALL_REFERENCE_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getReferenceArticle(slug);
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
  const article = getReferenceArticle(slug);
  if (!article) notFound();

  return (
    <main className="w-full bg-white">
      <section className="w-full bg-cream mt-8">
        <div className="px-[4%] py-12 md:py-16 lg:py-20 max-w-[1440px] mx-auto">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-grey-text">
              {article.category}
            </p>
            <h1 className="mt-3 font-display text-4xl md:text-5xl lg:text-[52px] font-bold text-forest leading-tight">
              {article.title}
            </h1>
            <p className="mt-5 text-sm text-grey-text">By: {article.author}</p>
            <p className="mt-1 text-sm text-grey-text">{article.date}</p>
          </div>
        </div>
      </section>

      <section className="w-full px-[4%] py-10 md:py-14 lg:py-16">
        <article className="max-w-[1100px] mx-auto">
          <img
            src={article.image}
            alt={article.title}
            className="block w-full h-[260px] md:h-[400px] lg:h-[520px] object-cover rounded-sm"
          />

          <div className="max-w-[900px] mx-auto mt-8 md:mt-10">
            <p className="text-lg md:text-xl text-charcoal leading-relaxed">
              {article.excerpt}
            </p>

            <div className="mt-8">
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

            <Link
              href="/resources/blog"
              className="mt-4 inline-flex text-sm font-bold text-clay hover:text-forest transition-colors"
            >
              ← Back to Today&apos;s Harvest Blog
            </Link>
          </div>
        </article>
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

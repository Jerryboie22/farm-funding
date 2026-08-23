import Link from "next/link";
import { notFound } from "next/navigation";
import { ALL_REFERENCE_ARTICLES, getReferenceArticle } from "../registry";

const BLOG_PATH = "/resources/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return ALL_REFERENCE_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getReferenceArticle(slug);
  if (!article) return { title: "Today's Harvest Blog | Farm Funders" };
  return { title: `${article.title} | Farm Funders`, description: article.excerpt };
}

function formatDate(date: string) {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default async function HarvestArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getReferenceArticle(slug);
  if (!article) notFound();

  return (
    <main className="w-full bg-white text-charcoal">
      <header className="mx-auto w-full max-w-[1180px] px-6 pb-8 pt-10 md:px-10 md:pt-12 lg:px-12 lg:pt-14">
        <time dateTime={article.date} className="block font-body text-[15px] leading-6 text-grey-text">{formatDate(article.date)}</time>
        <Link href={`${BLOG_PATH}?category=${encodeURIComponent(article.category)}`} className="mt-1 block font-display text-[15px] font-bold leading-6 text-clay hover:underline">{article.category}</Link>
        <h1 className="mt-3 max-w-[1050px] font-display text-[38px] font-extrabold leading-[1.1] text-forest md:text-[48px] lg:text-[54px]">{article.title}</h1>
        <p className="mt-4 font-body text-[16px] leading-7 text-charcoal">By: {article.author}</p>
      </header>

      <section aria-label="Article image" className="mx-auto w-full max-w-[1180px] px-6 md:px-10 lg:px-12">
        <img src={article.image} alt="" className="block h-auto max-h-[520px] min-h-[280px] w-full object-cover" />
      </section>

      <article className="mx-auto w-full max-w-[850px] px-6 pb-14 pt-9 md:px-10 md:pt-11 lg:px-0 lg:pt-12">
        <p className="font-body text-[17px] leading-[1.8] text-charcoal md:text-[18px]">{article.excerpt}</p>
        <div className="mt-8 font-body text-[17px] leading-[1.8] text-charcoal md:text-[18px]">
          {article.sections.map((section, index) => (
            <section key={`${section.heading}-${index}`} className="mb-7 last:mb-0">
              <h2 className="mb-2 font-display text-[19px] font-bold leading-[1.35] text-forest md:text-[21px]">{section.heading}</h2>
              <p className="whitespace-pre-line">{section.body}</p>
            </section>
          ))}
        </div>

        {article.tags?.length ? (
          <div className="mt-8 border-t border-charcoal/10 pt-5">
            <span className="font-body text-[15px] text-charcoal">Tags: </span>
            {article.tags.map((tag, index) => (
              <span key={tag}>
                <Link href={`${BLOG_PATH}?tag=${encodeURIComponent(tag)}`} className="font-body text-[15px] text-clay hover:underline">{tag}</Link>
                {index < article.tags!.length - 1 && <span className="mx-2 text-charcoal">,</span>}
              </span>
            ))}
          </div>
        ) : null}
      </article>
    </main>
  );
}

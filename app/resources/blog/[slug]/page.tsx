import Link from "next/link";
import { notFound } from "next/navigation";
import { ALL_REFERENCE_ARTICLES, getReferenceArticle } from "../registry";

const BLOG_PATH = "/resources/blog";

export function generateStaticParams() {
  return ALL_REFERENCE_ARTICLES.map((article) => ({ slug: article.slug }));
}

export const dynamicParams = false;

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
      <header className="mx-auto w-full max-w-[1200px] px-6 pb-8 pt-12 md:px-10 md:pt-14 lg:px-12 lg:pt-16">
        <time dateTime={article.date} className="block font-body text-[15px] leading-6 text-grey-text">{formatDate(article.date)}</time>
        <Link href={BLOG_PATH} className="mt-3 inline-block font-display text-[15px] font-bold leading-6 text-clay hover:underline">{article.category}</Link>
        <h1 className="mt-2 max-w-[1050px] font-display text-[38px] font-extrabold leading-[1.12] text-forest md:text-[48px] lg:text-[54px]">{article.title}</h1>
        <p className="mt-4 font-body text-[17px] leading-7 text-charcoal">By: {article.author}</p>
      </header>

      <section aria-label="Article image" className="mx-auto w-full max-w-[1200px] px-6 md:px-10 lg:px-12">
        <img src={article.image} alt={article.title} className="block h-[300px] w-full object-cover md:h-[450px] lg:h-[560px]" />
      </section>

      <article className="mx-auto w-full max-w-[900px] px-6 pb-12 pt-10 md:px-10 md:pb-16 md:pt-12 lg:pb-20 lg:pt-14">
        <p className="font-body text-[17px] leading-[1.8] text-charcoal md:text-[18px]">{article.excerpt}</p>

        <div className="mt-9 font-body text-[17px] leading-[1.8] text-charcoal md:text-[18px]">
          {article.sections.map((section, index) => (
            <section key={`${section.heading}-${index}`} className="mb-8 last:mb-0">
              <h2 className="mb-3 font-display text-[24px] font-bold leading-[1.3] text-forest md:text-[28px]">{section.heading}</h2>
              <p className="whitespace-pre-line">{section.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-10 border-t border-charcoal/10 pt-6">
          <p className="font-body text-sm leading-6 text-grey-text">
            Tags: <Link href={`${BLOG_PATH}?category=${encodeURIComponent(article.category)}`} className="text-clay hover:underline">{article.category.toLowerCase()}</Link>
          </p>
        </div>
      </article>

      <section className="w-full bg-forest-dark px-6 py-14 text-center text-white md:py-16">
        <div className="mx-auto max-w-[700px]">
          <h2 className="font-display text-[30px] font-bold leading-[1.2] text-white md:text-[36px]">Meet the Authors</h2>
          <p className="mx-auto mt-5 max-w-[650px] font-body text-base leading-7 text-white/85">Connect with and discover our Today&apos;s Harvest blog authors and their broad range of financial and northeast agricultural expertise.</p>
          <Link href="/resources/blog/authors" className="mt-7 inline-flex border-2 border-white px-6 py-3 font-display text-sm font-bold text-white hover:bg-white hover:text-forest-dark">Meet the Authors</Link>
        </div>
      </section>

      <section className="w-full bg-cream px-6 py-12 text-center md:py-16">
        <div className="mx-auto max-w-[650px]">
          <h2 className="font-display text-[26px] font-bold leading-[1.25] text-forest md:text-[32px]">Sign up for our Today&apos;s Harvest Blog.</h2>
          <p className="mt-4 font-body text-base leading-7 text-charcoal/80">Get the latest blog articles delivered to your inbox.</p>
          <form className="mx-auto mt-6 flex max-w-[560px] flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input id="newsletter-email" type="email" required placeholder="Enter your email*" className="min-h-12 flex-1 border border-charcoal/20 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-grey-text outline-none" />
            <button type="submit" className="min-h-12 bg-clay px-6 py-3 font-display text-sm font-bold text-white hover:bg-clay-dark">Sign Up</button>
          </form>
          <p className="mt-2 text-left font-body text-xs text-grey-text">*Required Field</p>
        </div>
      </section>
    </main>
  );
}

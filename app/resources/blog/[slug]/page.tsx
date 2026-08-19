import Link from "next/link";
import { notFound } from "next/navigation";
import { ALL_REFERENCE_ARTICLES, getReferenceArticle } from "../all";

const BLOG_PATH = "/resources/blog";

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

  if (!article) {
    return { title: "Today's Harvest Blog | Farm Funding" };
  }

  return {
    title: `${article.title} | Farm Funding`,
    description: article.excerpt,
  };
}

function formatDate(date: string) {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;

  return parsed.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function HarvestArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getReferenceArticle(slug);

  if (!article) notFound();

  const related = ALL_REFERENCE_ARTICLES
    .filter((item) => item.slug !== article.slug)
    .sort((a, b) => {
      const sameCategoryA = a.category === article.category ? 1 : 0;
      const sameCategoryB = b.category === article.category ? 1 : 0;
      return sameCategoryB - sameCategoryA;
    })
    .slice(0, 3);

  return (
    <main className="w-full bg-white text-charcoal">
      {/* =========================================================
          ARTICLE HEADER
      ========================================================= */}
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-[4%] pt-10 md:pt-14 lg:pt-16">
          <div className="max-w-[1080px]">
            <p className="text-sm font-medium text-grey-text">
              {formatDate(article.date)}
            </p>

            <div className="mt-5">
              <Link
                href={BLOG_PATH}
                className="text-sm font-bold text-clay hover:text-forest transition-colors"
              >
                {article.category}
              </Link>
            </div>

            <h1 className="mt-3 max-w-[1050px] font-display text-4xl font-bold leading-[1.08] text-forest md:text-5xl lg:text-[52px]">
              {article.title}
            </h1>

            <p className="mt-5 text-base text-charcoal md:text-lg">
              By: {article.author}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURE IMAGE
      ========================================================= */}
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-[4%] pt-8 md:pt-10 lg:pt-12">
          <img
            src={article.image}
            alt=""
            className="block h-[260px] w-full object-cover md:h-[420px] lg:h-[560px]"
          />
        </div>
      </section>

      {/* =========================================================
          ARTICLE CONTENT
      ========================================================= */}
      <section className="w-full bg-white">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 px-[4%] py-10 md:py-14 lg:grid-cols-[minmax(0,900px)_260px] lg:gap-16 lg:py-16">
          <article className="min-w-0">
            <p className="text-base leading-8 text-charcoal md:text-lg md:leading-9">
              {article.excerpt}
            </p>

            <div className="mt-10 md:mt-12">
              {article.sections.map((section, index) => (
                <section
                  key={`${section.heading}-${index}`}
                  className="mb-10 md:mb-12"
                >
                  <h2 className="font-display text-2xl font-bold leading-tight text-forest md:text-3xl">
                    {section.heading}
                  </h2>

                  <p className="mt-4 text-base leading-8 text-charcoal md:text-lg md:leading-9">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>

            {/* Reference-style article utility area */}
            <div className="mt-12 border-t border-charcoal/15 pt-6">
              <p className="text-sm text-grey-text">Tags:</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-sm text-clay">{article.category}</span>
                <span className="text-sm text-grey-text">,</span>
                <span className="text-sm text-clay">Today&apos;s Harvest</span>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href={BLOG_PATH}
                className="inline-flex items-center text-sm font-bold text-clay transition-colors hover:text-forest"
              >
                ← Back to Today&apos;s Harvest Blog
              </Link>
            </div>
          </article>

          {/* =======================================================
              ARTICLE SIDEBAR / CONTEXT
          ======================================================= */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 border-l border-charcoal/15 pl-7">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-grey-text">
                Today&apos;s Harvest
              </p>

              <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-forest">
                Agriculture news, insights and resources
              </h2>

              <p className="mt-4 text-sm leading-7 text-charcoal/75">
                Explore more verified Farm Funding articles based on the real
                Today&apos;s Harvest reference archive.
              </p>

              <Link
                href={BLOG_PATH}
                className="mt-6 inline-flex border-b border-clay pb-1 text-sm font-bold text-clay hover:text-forest transition-colors"
              >
                View all articles
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* =========================================================
          YOU MIGHT ALSO LIKE
      ========================================================= */}
      {related.length > 0 && (
        <section className="w-full bg-grey-bg">
          <div className="mx-auto w-full max-w-[1440px] px-[4%] py-12 md:py-16 lg:py-20">
            <h2 className="font-display text-3xl font-bold text-forest md:text-4xl">
              You Might Also Like
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
              {related.map((item) => (
                <article key={item.slug} className="min-w-0 bg-white">
                  <Link href={`${BLOG_PATH}/${item.slug}`} className="block">
                    <img
                      src={item.image}
                      alt=""
                      className="block h-[210px] w-full object-cover"
                    />

                    <div className="p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.1em] text-grey-text">
                        {item.category}
                      </p>

                      <h3 className="mt-3 font-display text-xl font-bold leading-snug text-gold">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-charcoal/75">
                        {item.date}
                      </p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          MEET THE AUTHORS
      ========================================================= */}
      <section className="w-full bg-forest-dark px-[4%] py-14 text-center text-white md:py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Meet the Authors
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/85">
            Connect with and discover our Today&apos;s Harvest blog authors and
            their broad range of financial and Northeast agricultural
            expertise.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex bg-white px-7 py-3.5 text-sm font-bold text-forest-dark transition-colors hover:bg-cream"
          >
            Meet the Authors
          </Link>
        </div>
      </section>

      {/* =========================================================
          NEWSLETTER
      ========================================================= */}
      <section className="w-full bg-cream px-[4%] py-12 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold text-forest md:text-3xl">
            Sign up for our Today&apos;s Harvest Blog.
          </h2>

          <p className="mt-4 text-base leading-7 text-charcoal/80">
            Get the latest blog articles delivered to your inbox.
          </p>

          <form className="mx-auto mt-6 flex max-w-[560px] flex-col gap-3 sm:flex-row">
            <label htmlFor="article-newsletter-email" className="sr-only">
              Email address
            </label>

            <input
              id="article-newsletter-email"
              type="email"
              required
              placeholder="Enter your email*"
              className="min-h-[50px] flex-1 border border-charcoal/20 bg-white px-4 text-sm text-charcoal outline-none placeholder:text-grey-text focus:border-clay"
            />

            <button
              type="submit"
              className="min-h-[50px] bg-clay px-7 text-sm font-bold text-white transition-colors hover:bg-clay-dark"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-3 text-left text-xs text-grey-text sm:pl-1">
            *Required Field
          </p>
        </div>
      </section>

      {/* =========================================================
          ARTICLE FOOT CTA
      ========================================================= */}
      <section className="w-full bg-white px-[4%] py-10 md:py-12">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 border-t border-charcoal/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-grey-text">Today&apos;s Harvest</p>
            <p className="mt-1 font-display text-xl font-bold text-forest">
              More stories, news and information for Northeast agriculture.
            </p>
          </div>

          <Link
            href={BLOG_PATH}
            className="inline-flex w-fit bg-forest px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-forest-dark"
          >
            Explore Today&apos;s Harvest
          </Link>
        </div>
      </section>
    </main>
  );
}

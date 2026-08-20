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
  return parsed.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function authorRole(author: string) {
  if (author === "Danielle Cummins") return "Legislative Affairs Officer";
  if (author === "Dario Arezzo") return "Executive Vice President, Chief Financial Services Officer";
  if (author === "Megan Clancy") return "Senior Advisor";
  if (author === "Kristen Santos") return "Farm Credit East";
  return "Farm Credit East";
}

export default async function HarvestArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getReferenceArticle(slug);
  if (!article) notFound();

  const related = ALL_REFERENCE_ARTICLES
    .filter((item) => item.slug !== article.slug)
    .sort(
      (a, b) =>
        Number(b.category === article.category) - Number(a.category === article.category) ||
        new Date(b.date).getTime() - new Date(a.date).getTime(),
    )
    .slice(0, 3);

  return (
    <main className="w-full bg-white text-charcoal">
      {/* Today's Harvest article header */}
      <header className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1180px] px-[4%] pt-12 md:pt-14 lg:pt-16">
          <time dateTime={article.date} className="font-body text-[15px] leading-6 text-grey-text">
            {formatDate(article.date)}
          </time>

          <Link
            href={BLOG_PATH}
            className="mt-4 inline-block font-display text-[15px] leading-6 font-bold text-clay hover:underline"
          >
            {article.category}
          </Link>

          <h1 className="mt-2 max-w-[1080px] font-display text-[38px] leading-[1.12] font-extrabold text-forest md:text-[48px] lg:text-[54px]">
            {article.title}
          </h1>

          <p className="mt-4 font-body text-[17px] leading-7 text-charcoal">
            By: {article.author}
          </p>
        </div>
      </header>

      {/* Reference image block */}
      <section className="w-full bg-white" aria-label="Article image">
        <div className="mx-auto w-full max-w-[1180px] px-[4%] pt-8 md:pt-10">
          <img
            src={article.image}
            alt={article.title}
            className="block h-[280px] w-full object-cover md:h-[440px] lg:h-[540px]"
          />
        </div>
      </section>

      {/* Reference writing pattern: intro paragraph, section headings, body paragraphs */}
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[900px] px-[6%] py-12 md:py-16 lg:py-20">
          <article className="font-body text-[17px] leading-[1.8] text-charcoal md:text-[18px]">
            {/* The reference article places the opening summary immediately below the image. */}
            <p className="mb-10 md:mb-12">
              {article.excerpt}
            </p>

            {article.sections.map((section, index) => (
              <section key={`${section.heading}-${index}`} className="mb-10 md:mb-12 last:mb-0">
                {/* Today's Harvest uses article subheads rather than making every section an H2. */}
                <h2 className="font-display text-[24px] leading-[1.3] font-bold text-forest md:text-[28px]">
                  {section.heading}
                </h2>
                <div className="mt-4 whitespace-pre-line">
                  {section.body}
                </div>
              </section>
            ))}

            {/* Reference article CTA appears as part of the article, immediately before tags. */}
            <div className="mt-12 border-t border-charcoal/10 pt-8">
              <Link
                href="/contact"
                className="font-display text-[22px] leading-8 font-bold text-clay hover:underline"
              >
                Contact Us Today!
              </Link>
            </div>
          </article>

          {/* Reference article metadata */}
          <div className="mt-10 border-t border-charcoal/10 pt-6">
            <p className="font-body text-sm leading-6 text-grey-text">
              Tags: <span className="text-clay">{article.category.toLowerCase()}</span>, <span className="text-clay">expenses</span>, <span className="text-clay">social programs</span>, <span className="text-clay">ag economy</span>, <span className="text-clay">risk management</span>
            </p>
          </div>

          {/* Author profile */}
          <section className="mt-8 border-t border-charcoal/10 pt-8" aria-label="Article author">
            <div className="flex items-start gap-5">
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full bg-grey-bg">
                <img
                  src={article.author === "Dario Arezzo" ? "/images/homepage/Dario Arezzo.jpg" : article.image}
                  alt={article.author}
                  className="h-full w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div>
                <p className="font-display text-[21px] leading-7 font-bold text-forest">
                  {article.author}
                </p>
                <p className="mt-1 font-body text-[16px] leading-6 text-grey-text">
                  {authorRole(article.author)}
                </p>
              </div>
            </div>
          </section>

          {/* Share row */}
          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-charcoal/10 pt-6">
            <span className="font-body text-sm text-charcoal">Share this post on</span>
            <a href="#facebook" className="font-display text-sm font-bold text-clay hover:underline">Facebook</a>
            <a href="#x" className="font-display text-sm font-bold text-clay hover:underline">X</a>
            <a href="#linkedin" className="font-display text-sm font-bold text-clay hover:underline">LinkedIn</a>
            <a href={`mailto:?subject=${encodeURIComponent(article.title)}`} className="font-display text-sm font-bold text-clay hover:underline">Email</a>
          </div>
        </div>
      </section>

      {/* Related articles */}
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1180px] px-[4%] py-12 md:py-16">
          <h2 className="font-display text-[30px] leading-[1.2] font-bold text-forest md:text-[36px]">
            You Might Also Like
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-7 md:grid-cols-3">
            {related.map((item) => (
              <article key={item.slug} className="min-w-0">
                <Link href={`${BLOG_PATH}/${item.slug}`} className="block">
                  <img src={item.image} alt={item.title} className="block h-[190px] w-full object-cover" />
                </Link>
                <div className="pt-5">
                  <span className="font-display text-xs font-bold uppercase tracking-wide text-grey-text">{item.category}</span>
                  <Link href={`${BLOG_PATH}/${item.slug}`}>
                    <h3 className="mt-2 font-display text-[20px] leading-7 font-semibold text-gold hover:underline">{item.title}</h3>
                  </Link>
                  <p className="mt-3 font-body text-sm leading-6 text-grey-text">{formatDate(item.date)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Site closing blocks */}
      <section className="w-full bg-forest-dark px-[4%] py-14 text-center text-white md:py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-[30px] leading-[1.2] font-bold text-white md:text-[36px]">Meet the Authors</h2>
          <p className="mx-auto mt-5 max-w-[650px] font-body text-base leading-7 text-white/85">
            Connect with and discover our Today&apos;s Harvest blog authors and their broad range of financial and northeast agricultural expertise.
          </p>
          <Link href="/contact" className="mt-7 inline-flex border-2 border-white px-6 py-3 font-display text-sm font-bold text-white hover:bg-white hover:text-forest-dark">
            Meet the Authors
          </Link>
        </div>
      </section>

      <section className="w-full bg-cream px-[4%] py-12 text-center md:py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-[26px] leading-[1.25] font-bold text-forest md:text-[32px]">
            Sign up for our Today&apos;s Harvest Blog.
          </h2>
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

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

  const related = ALL_REFERENCE_ARTICLES
    .filter((item) => item.slug !== article.slug)
    .sort((a, b) => Number(b.category === article.category) - Number(a.category === article.category) || new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <main className="w-full bg-white text-charcoal">
      <section className="w-full bg-cream mt-8">
        <div className="grid grid-cols-1 md:grid-cols-12 px-[4%]">
          <div className="md:col-span-6 flex flex-col justify-center py-12 md:py-14 lg:py-20 md:pr-12 lg:pr-20">
            <Link href={BLOG_PATH} className="font-body text-sm font-bold text-grey-text hover:text-clay transition-colors">{article.category}</Link>
            <h1 className="mt-4 max-w-[720px] font-display text-4xl md:text-[48px] lg:text-[54px] font-extrabold text-forest leading-[1.08]">{article.title}</h1>
            <p className="mt-6 font-body text-base text-charcoal/80 leading-relaxed">{article.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-body text-sm text-grey-text">
              <span>{article.author}</span><span aria-hidden="true">|</span><time dateTime={article.date}>{formatDate(article.date)}</time>
            </div>
          </div>
          <div className="md:col-span-6">
            <img src={article.image} alt={article.title} className="block w-full h-[300px] md:h-[430px] lg:h-[500px] object-cover" />
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[900px] px-[6%] py-12 md:py-16 lg:py-20">
          <article>
            {article.sections.map((section, index) => (
              <section key={`${section.heading}-${index}`} className="mb-10 md:mb-12 last:mb-0">
                <h2 className="font-display text-2xl md:text-[32px] font-bold text-forest leading-tight">{section.heading}</h2>
                <div className="mt-4 font-body text-[17px] md:text-[18px] leading-[1.8] text-charcoal whitespace-pre-line">{section.body}</div>
              </section>
            ))}
          </article>
        </div>
      </section>

      <section className="w-full bg-grey-bg">
        <div className="mx-auto max-w-[1180px] px-[4%] py-12 md:py-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-forest">You Might Also Like</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {related.map((item) => (
              <article key={item.slug} className="bg-white">
                <Link href={`${BLOG_PATH}/${item.slug}`} className="block">
                  <img src={item.image} alt={item.title} className="block w-full h-[190px] object-cover" />
                </Link>
                <div className="p-5">
                  <span className="text-grey-text text-xs font-bold uppercase tracking-wide">{item.category}</span>
                  <Link href={`${BLOG_PATH}/${item.slug}`}><h3 className="mt-2 font-display text-lg md:text-xl font-semibold text-gold leading-snug hover:underline">{item.title}</h3></Link>
                  <p className="mt-3 text-sm text-charcoal/80 leading-relaxed">{item.excerpt}</p>
                  <p className="mt-3 text-xs text-grey-text">{formatDate(item.date)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-forest-dark text-white text-center py-14 md:py-16 px-[4%]">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Meet the Authors</h2>
          <p className="mt-5 font-body text-base text-white/85 leading-relaxed">Connect with and discover our Today&apos;s Harvest blog authors and their broad range of financial and Northeast agricultural expertise.</p>
          <Link href="/contact" className="mt-7 inline-flex w-fit mx-auto px-6 py-3.5 bg-white text-forest-dark text-sm font-bold rounded-sm hover:bg-cream transition-colors">Meet the Authors</Link>
        </div>
      </section>

      <section className="w-full bg-cream px-[4%] py-12 md:py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-forest">Sign up for our Today&apos;s Harvest Blog.</h2>
          <p className="mt-4 font-body text-base text-charcoal/80">Get the latest blog articles delivered to your inbox.</p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input id="newsletter-email" type="email" required placeholder="Enter your email*" className="flex-1 px-4 py-3 border border-charcoal/20 rounded-sm text-sm text-charcoal placeholder:text-grey-text bg-white" />
            <button type="submit" className="px-6 py-3 bg-clay text-white text-sm font-bold rounded-sm hover:bg-clay-dark transition-colors">Sign Up</button>
          </form>
          <p className="mt-2 text-left font-body text-xs text-grey-text">*Required Field</p>
        </div>
      </section>
    </main>
  );
}

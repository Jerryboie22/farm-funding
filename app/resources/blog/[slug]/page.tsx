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

  if (!article) return { title: "Today's Harvest Blog | Farm Funding" };

  return {
    title: `${article.title} | Farm Funders`,
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
      const categoryScore = Number(b.category === article.category) - Number(a.category === article.category);
      if (categoryScore) return categoryScore;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, 3);

  return (
    <main className="w-full bg-white text-[#231f20]">
      {/* Farm Funders / Farm Credit East article header */}
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1180px] px-[24px] pt-[48px] md:px-[32px] md:pt-[62px] lg:pt-[72px]">
          <p className="text-[15px] leading-[24px] text-[#666]" style={{ fontFamily: "Barlow-Medium" }}>
            {formatDate(article.date)}
          </p>

          <Link
            href={BLOG_PATH}
            className="mt-[16px] inline-block text-[15px] leading-[24px] font-bold text-[#496d83] hover:underline"
            style={{ fontFamily: "Montserrat-Bold" }}
          >
            {article.category}
          </Link>

          <h1
            className="mt-[10px] max-w-[1080px] text-[38px] leading-[45px] text-[#4f832a] md:text-[48px] md:leading-[56px] lg:text-[52px] lg:leading-[60px]"
            style={{ fontFamily: "Montserrat-Bold" }}
          >
            {article.title}
          </h1>

          <p className="mt-[18px] text-[17px] leading-[28px] text-[#231f20]" style={{ fontFamily: "Barlow-Medium" }}>
            By: {article.author}
          </p>
        </div>
      </section>

      {/* Reference article image */}
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1180px] px-[24px] pt-[34px] md:px-[32px] md:pt-[42px]">
          <img
            src={article.image}
            alt={article.title}
            className="block h-[270px] w-full object-cover md:h-[430px] lg:h-[520px]"
          />
        </div>
      </section>

      {/* Article body */}
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[980px] px-[24px] py-[42px] md:px-[32px] md:py-[58px] lg:py-[66px]">
          <p className="text-[17px] leading-[30px] md:text-[18px] md:leading-[32px]" style={{ fontFamily: "Barlow-Medium" }}>
            {article.excerpt}
          </p>

          <div className="mt-[42px] md:mt-[50px]">
            {article.sections.map((section, index) => (
              <section key={`${section.heading}-${index}`} className="mb-[38px] md:mb-[46px]">
                <h2
                  className="text-[27px] leading-[34px] text-[#4f832a] md:text-[32px] md:leading-[40px]"
                  style={{ fontFamily: "Montserrat-Bold" }}
                >
                  {section.heading}
                </h2>
                <p className="mt-[14px] whitespace-pre-line text-[17px] leading-[30px] md:text-[18px] md:leading-[32px]" style={{ fontFamily: "Barlow-Medium" }}>
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-[10px] border-t border-[#d7d7d7] pt-[24px]">
            <p className="text-[14px] leading-[24px] text-[#666]" style={{ fontFamily: "Barlow-Medium" }}>
              Tags: <span className="text-[#496d83]">{article.category}</span>, <span className="text-[#496d83]">Today&apos;s Harvest</span>
            </p>
          </div>

          <div className="mt-[38px] flex items-start gap-[18px] border-t border-[#e2e2e2] pt-[28px]">
            <div className="h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full bg-[#ecf1e4]" aria-hidden="true" />
            <div>
              <p className="text-[20px] leading-[28px] text-[#4f832a]" style={{ fontFamily: "Montserrat-Bold" }}>
                {article.author}
              </p>
              <p className="mt-[3px] text-[16px] leading-[25px] text-[#666]" style={{ fontFamily: "Barlow-Medium" }}>
                Farm Funders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* You Might Also Like */}
      <section className="w-full bg-[#f4f4f2]">
        <div className="mx-auto w-full max-w-[1180px] px-[24px] py-[52px] md:px-[32px] md:py-[68px]">
          <h2 className="text-[30px] leading-[38px] text-[#4f832a] md:text-[38px] md:leading-[46px]" style={{ fontFamily: "Montserrat-Bold" }}>
            You Might Also Like
          </h2>

          <div className="mt-[30px] grid grid-cols-1 gap-[28px] md:grid-cols-3">
            {related.map((item) => (
              <article key={item.slug} className="bg-white">
                <Link href={`${BLOG_PATH}/${item.slug}`} className="block">
                  <img src={item.image} alt={item.title} className="block h-[190px] w-full object-cover" />
                  <div className="p-[22px]">
                    <p className="text-[12px] uppercase tracking-[0.08em] text-[#666]" style={{ fontFamily: "Montserrat-Bold" }}>{item.category}</p>
                    <h3 className="mt-[9px] text-[20px] leading-[28px] text-[#5a4400] hover:underline" style={{ fontFamily: "Montserrat-Bold" }}>{item.title}</h3>
                    <p className="mt-[12px] text-[14px] leading-[22px] text-[#666]" style={{ fontFamily: "Barlow-Medium" }}>{formatDate(item.date)}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Exact reference footer content sections */}
      <section className="w-full bg-[#4f832a] px-[24px] py-[58px] text-center text-white md:py-[72px]">
        <div className="mx-auto max-w-[760px]">
          <h2 className="text-[30px] leading-[38px] text-white md:text-[38px] md:leading-[46px]" style={{ fontFamily: "Montserrat-Bold" }}>
            Meet the Authors
          </h2>
          <p className="mx-auto mt-[18px] max-w-[650px] text-[17px] leading-[29px] text-white" style={{ fontFamily: "Barlow-Medium" }}>
            Connect with and discover our Today&apos;s Harvest blog authors and their broad range of financial and northeast agricultural expertise.
          </p>
          <Link href="/contact" className="mt-[28px] inline-flex rounded-[4px] border-2 border-white bg-transparent px-[20px] py-[10px] text-[16px] font-bold text-white hover:bg-white hover:text-[#4f832a]" style={{ fontFamily: "Montserrat-Bold" }}>
            Meet the Authors
          </Link>
        </div>
      </section>

      <section className="w-full bg-[#ecf1e4] px-[24px] py-[48px] md:py-[60px]">
        <div className="mx-auto max-w-[680px] text-center">
          <h2 className="text-[26px] leading-[34px] text-[#4f832a] md:text-[32px]" style={{ fontFamily: "Montserrat-Bold" }}>
            Sign up for our Today&apos;s Harvest Blog.
          </h2>
          <p className="mt-[14px] text-[17px] leading-[28px] text-[#231f20]" style={{ fontFamily: "Barlow-Medium" }}>
            Get the latest blog articles delivered to your inbox.
          </p>
          <form className="mx-auto mt-[22px] flex max-w-[560px] flex-col gap-[10px] sm:flex-row">
            <input type="email" required placeholder="Enter your email*" aria-label="Email address" className="min-h-[48px] flex-1 border border-[#cfcfcf] bg-white px-[14px] text-[15px] outline-none" />
            <button type="submit" className="min-h-[48px] bg-[#496d83] px-[24px] text-[15px] font-bold text-white" style={{ fontFamily: "Montserrat-Bold" }}>Sign Up</button>
          </form>
          <p className="mt-[7px] text-left text-[12px] text-[#666]">*Required Field</p>
        </div>
      </section>
    </main>
  );
}

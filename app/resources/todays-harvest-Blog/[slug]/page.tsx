import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ALL_REFERENCE_ARTICLES, getReferenceArticle } from "../../blog/registry";

const BLOG_PATH = "/resources/todays-harvest-Blog";
const AUTHORS_PATH = "/resources/meet-the-authors";

export const dynamicParams = false;

export function generateStaticParams() {
  return ALL_REFERENCE_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getReferenceArticle(slug);
  if (!article) return { title: "Today's Harvest Blog | Farm Funders" };

  return {
    title: article.title,
    description: article.excerpt,
    keywords: `${article.title}, Farm Funders, ${article.category}, agriculture, ${article.author}`,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image, alt: article.title }],
    },
  };
}

const styles = `
  .harvest-page,
  .harvest-page * { box-sizing: border-box; }
  .harvest-page {
    --clay: #496d83;
    --clay-dark: #3b5a6d;
    --forest: #4f832a;
    --cream: #ecf1e4;
    --grey: #686868;
    --line: #d8d8d8;
    --light: #f1f3f4;
    --charcoal: #231f20;
    width: 100%;
    overflow-x: hidden;
    background: #fff;
    color: var(--grey);
  }
  .harvest-page .hero {
    position: relative;
    width: 100%;
    height: 364px;
    background: var(--clay);
    color: #fff;
  }
  .harvest-page .hero-inner {
    width: min(1800px, calc(100% - 120px));
    height: 100%;
    margin: 0 auto;
    padding: 16px 7px 0;
  }
  .harvest-page .category {
    display: inline-block;
    margin: 0 0 31px;
    padding: 4px 7px 5px;
    border: 1px solid #fff;
    color: #fff;
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.25;
    text-decoration: none;
  }
  .harvest-page .category:hover,
  .harvest-page .author-link:hover { text-decoration: underline; }
  .harvest-page h1 {
    max-width: none;
    margin: 0;
    color: var(--cream);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 52px;
    font-weight: 700;
    line-height: 1.08;
    letter-spacing: -0.7px;
  }
  .harvest-page .byline {
    margin: 25px 0 0;
    color: #fff;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.4;
  }
  .harvest-page .author-link {
    color: #fff;
    text-decoration: underline;
    text-underline-offset: 2px;
  }
  .harvest-page .image-wrap {
    position: relative;
    z-index: 2;
    width: 750px;
    max-width: calc(100% - 28px);
    margin: -253px auto 0;
  }
  .harvest-page .image-wrap img {
    display: block;
    width: 100%;
    height: auto;
    margin: 0;
    object-fit: cover;
  }
  .harvest-page .content {
    width: min(1106px, calc(100% - 56px));
    margin: 48px auto 0;
  }
  .harvest-page .copy {
    width: 100%;
    padding-bottom: 28px;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    color: var(--grey);
  }
  .harvest-page .copy p,
  .harvest-page .copy li {
    margin: 0 0 24px;
    color: var(--grey);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.72;
  }
  .harvest-page .copy strong { font-weight: 700; }
  .harvest-page .copy h3,
  .harvest-page .copy h4 {
    color: var(--grey);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-weight: 700;
    line-height: 1.2;
  }
  .harvest-page .copy h3 {
    margin: 50px 0 35px;
    font-size: 36px;
    letter-spacing: -0.25px;
  }
  .harvest-page .copy h4 {
    margin: 42px 0 25px;
    font-size: 25px;
  }
  .harvest-page .copy ul {
    margin: 0 0 20px;
    padding-left: 35px;
  }
  .harvest-page .copy li { margin-bottom: 22px; padding-left: 0; }
  .harvest-page .copy li:last-child { margin-bottom: 24px; }
  .harvest-page .copy a {
    color: var(--clay);
    text-decoration: underline;
    text-underline-offset: 2px;
    text-decoration-thickness: 1px;
  }
  .harvest-page .copy a:hover { color: var(--forest); }
  .harvest-page .contact { padding: 4px 0 28px; text-align: center; }
  .harvest-page .button {
    display: inline-flex;
    min-height: 50px;
    align-items: center;
    justify-content: center;
    padding: 13px 28px;
    background: var(--clay);
    color: #fff;
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.2;
    text-decoration: none;
  }
  .harvest-page .button:hover { background: var(--clay-dark); }
  .harvest-page .tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
    margin: 0 auto;
    padding: 22px 0 28px;
    border-top: 1px solid var(--line);
    color: var(--grey);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.6;
  }
  .harvest-page .tags svg { width: 17px; height: 17px; margin-right: 2px; color: var(--forest); }
  .harvest-page .tags a { color: var(--clay); text-decoration: underline; }
  .harvest-page .tags a:hover { color: var(--forest); }
  .harvest-page .tag-separator { color: var(--grey); margin-right: 2px; }
  .harvest-page .author-share {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px;
    padding: 20px 0 52px;
  }
  .harvest-page .box { min-height: 176px; padding: 22px; background: var(--light); }
  .harvest-page .author-box { display: flex; align-items: center; gap: 22px; }
  .harvest-page .author-photo {
    width: 176px;
    height: 176px;
    flex: 0 0 176px;
    object-fit: cover;
  }
  .harvest-page .author-name {
    color: var(--forest);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 21px;
    font-weight: 700;
    line-height: 1.3;
    text-decoration: underline;
  }
  .harvest-page .author-role {
    margin: 8px 0 0;
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 17px;
    font-weight: 700;
    line-height: 1.4;
  }
  .harvest-page .share-box { display: flex; align-items: center; }
  .harvest-page .share-label {
    margin: 0 0 16px;
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 17px;
    font-weight: 600;
  }
  .harvest-page .share-list { display: flex; gap: 10px; margin: 0; padding: 0; list-style: none; }
  .harvest-page .share-list a {
    display: inline-flex;
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: #fff;
    text-decoration: none;
  }
  .harvest-page .share-list svg { width: 22px; height: 22px; }
  .harvest-page .share-x { background: #14171a; }
  .harvest-page .share-facebook { background: #1877f2; }
  .harvest-page .share-linkedin { background: #0a66c2; }
  .harvest-page .share-email { background: #34a853; }
  .harvest-page .related-wrap { width: 100%; background: var(--cream); }
  .harvest-page .related { width: min(1800px, calc(100% - 120px)); margin: 0 auto; padding: 34px 7px 54px; }
  .harvest-page .section-title {
    margin: 0;
    color: var(--forest);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.25;
  }
  .harvest-page .related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 34px; margin-top: 20px; }
  .harvest-page .related-card { padding-top: 26px; }
  .harvest-page .related-category {
    display: inline-block;
    padding: 6px 14px;
    background: var(--grey);
    color: #fff;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: .02em;
    text-transform: uppercase;
    text-decoration: none;
  }
  .harvest-page .related-title {
    display: block;
    margin-top: 26px;
    color: var(--forest);
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 21px;
    font-weight: 700;
    line-height: 1.35;
    text-decoration: none;
  }
  .harvest-page .related-date {
    margin: 26px 0 0;
    color: var(--grey);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
  }
  .harvest-page .authors-cta {
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    gap: 28px;
    width: min(1800px, calc(100% - 120px));
    margin: 0 auto;
    padding: 50px 7px;
  }
  .harvest-page .authors-copy { max-width: 900px; }
  .harvest-page .authors-text {
    margin: 14px 0 0;
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 20px;
    line-height: 1.5;
  }
  .harvest-page .authors-button { justify-self: end; min-width: 205px; }
  .harvest-page .newsletter {
    width: 100%;
    padding: 60px 20px;
    background: var(--forest);
    color: #fff;
    text-align: center;
  }
  .harvest-page .newsletter-title {
    margin: 0;
    color: #fff;
    font-family: var(--font-montserrat), Montserrat, Arial, sans-serif;
    font-size: 44px;
    font-weight: 700;
    line-height: 1.15;
  }
  .harvest-page .newsletter-subhead {
    margin: 22px 0 0;
    color: #fff;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 21px;
    line-height: 1.4;
  }
  .harvest-page .newsletter-form { display: flex; justify-content: center; margin-top: 30px; }
  .harvest-page .newsletter-inner { display: flex; align-items: flex-end; gap: 10px; }
  .harvest-page .newsletter-group { text-align: left; }
  .harvest-page .newsletter-label {
    display: block;
    margin-bottom: 9px;
    color: #fff;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 18px;
    font-weight: 700;
  }
  .harvest-page .newsletter-email {
    width: 245px;
    height: 44px;
    border: 0;
    border-radius: 2px;
    padding: 0 13px;
    background: #fff;
    color: var(--charcoal);
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 17px;
    outline: none;
  }
  .harvest-page .required {
    margin-top: 8px;
    color: #fff;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 14px;
    font-style: italic;
  }
  .harvest-page .signup {
    height: 44px;
    min-width: 112px;
    border: 2px solid #fff;
    border-radius: 4px;
    padding: 0 20px;
    background: var(--forest);
    color: #fff;
    font-family: var(--font-barlow), Barlow, Arial, sans-serif;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
  }
  @media (max-width: 1400px) { .harvest-page h1 { font-size: 46px; } }
  @media (max-width: 991px) {
    .harvest-page .hero { height: auto; min-height: 330px; }
    .harvest-page .hero-inner { width: calc(100% - 56px); padding: 22px 0 150px; }
    .harvest-page h1 { font-size: 42px; white-space: normal; }
    .harvest-page .image-wrap { margin-top: -110px; width: min(750px, calc(100% - 56px)); }
    .harvest-page .content { width: calc(100% - 56px); margin-top: 42px; }
    .harvest-page .related, .harvest-page .authors-cta { width: calc(100% - 56px); }
  }
  @media (max-width: 767px) {
    .harvest-page .hero { min-height: 0; }
    .harvest-page .hero-inner { width: 100%; padding: 24px 14px 135px; }
    .harvest-page .category { margin-bottom: 20px; font-size: 14px; }
    .harvest-page h1 { font-size: 34px; line-height: 1.12; letter-spacing: -.35px; }
    .harvest-page .byline { margin-top: 17px; font-size: 16px; }
    .harvest-page .image-wrap { width: calc(100% - 28px); margin-top: -105px; }
    .harvest-page .content { width: calc(100% - 28px); margin-top: 30px; }
    .harvest-page .copy p, .harvest-page .copy li { font-size: 17px; line-height: 1.72; }
    .harvest-page .copy h3 { margin-top: 35px; margin-bottom: 24px; font-size: 27px; }
    .harvest-page .copy h4 { margin-top: 30px; margin-bottom: 20px; font-size: 22px; }
    .harvest-page .author-share { grid-template-columns: 1fr; gap: 18px; padding-bottom: 35px; }
    .harvest-page .box { min-height: 0; padding: 18px; }
    .harvest-page .author-box { align-items: flex-start; gap: 15px; }
    .harvest-page .author-photo { width: 96px; height: 96px; flex-basis: 96px; }
    .harvest-page .related { width: calc(100% - 28px); padding: 25px 0 35px; }
    .harvest-page .related-grid { grid-template-columns: 1fr; gap: 25px; }
    .harvest-page .authors-cta { grid-template-columns: 1fr; width: calc(100% - 28px); gap: 18px; padding: 38px 0; }
    .harvest-page .authors-button { justify-self: start; }
    .harvest-page .newsletter { padding: 48px 14px 52px; }
    .harvest-page .newsletter-title { font-size: 31px; }
    .harvest-page .newsletter-subhead { font-size: 17px; }
    .harvest-page .newsletter-inner { width: 100%; flex-direction: column; align-items: stretch; }
    .harvest-page .newsletter-email, .harvest-page .signup { width: 100%; }
  }
`;

function getTags(article: NonNullable<ReturnType<typeof getReferenceArticle>>) {
  if (article.tags?.length) return article.tags;
  return [article.category.toLowerCase(), "ag economy", "risk management"];
}

function authorRole(author: string) {
  if (author === "Dario Arezzo") return "Executive Vice President, Chief Financial Services Officer";
  if (author.includes("Knowledge Exchange")) return "Farm Credit East Knowledge Exchange";
  return "Farm Credit East Agricultural Advisor";
}

function relatedArticles(slug: string) {
  return ALL_REFERENCE_ARTICLES.filter((article) => article.slug !== slug).slice(0, 3);
}

export default async function HarvestArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getReferenceArticle(slug);
  if (!article) notFound();

  const tags = getTags(article);
  const related = relatedArticles(article.slug);
  const articleUrl = `https://farm-funding.com${BLOG_PATH}/${article.slug}`;
  const shareText = encodeURIComponent(article.title);
  const shareUrl = encodeURIComponent(articleUrl);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="harvest-page">
        <section className="hero">
          <div className="hero-inner">
            <Link href={`${BLOG_PATH}?category=${encodeURIComponent(article.category)}`} className="category">{article.category}</Link>
            <h1 id="maincontent">{article.title}</h1>
            <p className="byline">
              By: {" "}
              <Link href={`${AUTHORS_PATH}#${encodeURIComponent(article.author.replace(/[^a-zA-Z0-9-]/g, "-"))}`} className="author-link">{article.author}</Link>
            </p>
          </div>
        </section>

        <div className="image-wrap">
          <img src={article.image} alt={article.title} />
        </div>

        <div className="content">
          <article className="copy">
            <p>{article.excerpt}</p>

            {article.sections.map((section, index) => (
              <section key={`${section.heading}-${index}`}>
                <h3>{section.heading}</h3>
                <p>{section.body}</p>
              </section>
            ))}

            <p>
              Farm Funders&apos;s team of agricultural advisors can help producers connect these insights to a broader financial plan, including budgeting, financing and risk-management tools.
            </p>
            <p>
              Farm Funders&apos;s whole-farm, advisory approach connects programs, insurance and financial strategy into a clear path forward. Producers are encouraged to reach out to their advisors as they evaluate the opportunities and challenges discussed above.
            </p>
            <p>
              At Farm Funders, we are committed to being a trusted advisor to Northeast agricultural producers, helping you navigate uncertainty and strengthen your operation for the future.
            </p>

            <div className="contact">
              <a href="/contact" className="button">Contact Us Today!</a>
            </div>
          </article>

          <div className="tags">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.41l9 9c.36.36.86.59 1.41.59.55 0 1.05-.23 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5 8 5.67 8 6.5 7.33 8 6.5 8z" />
            </svg>
            <span>Tags:</span>{" "}
            {tags.map((tag, index) => (
              <span key={tag}>
                <Link href={`${BLOG_PATH}?tag=${encodeURIComponent(tag)}`}>{tag}</Link>
                {index < tags.length - 1 && <span className="tag-separator">,</span>}
              </span>
            ))}
          </div>

          <section className="author-share" aria-label="Article author and sharing">
            <div className="box author-box">
              <img src={article.image} alt={`Professional business portrait of ${article.author}`} className="author-photo" />
              <div>
                <Link href={`${AUTHORS_PATH}#${encodeURIComponent(article.author.replace(/[^a-zA-Z0-9-]/g, "-"))}`} className="author-name">{article.author}</Link>
                <p className="author-role">{authorRole(article.author)}</p>
              </div>
            </div>

            <div className="box share-box">
              <div>
                <p className="share-label">Share this post on</p>
                <ul className="share-list">
                  <li><a className="share-x" href={`https://twitter.com/share?text=${shareText}&url=${shareUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on X"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></a></li>
                  <li><a className="share-facebook" href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" /></svg></a></li>
                  <li><a className="share-linkedin" href={`https://www.linkedin.com/shareArticle?url=${shareUrl}&title=${shareText}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" /></svg></a></li>
                  <li><a className="share-email" href={`mailto:?subject=${shareText}&body=${shareUrl}`} aria-label="Share by email"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg></a></li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="related-wrap">
          <section className="related">
            <h2 className="section-title">You Might Also Like</h2>
            <div className="related-grid">
              {related.map((item) => (
                <article key={item.slug} className="related-card">
                  <Link href={`${BLOG_PATH}?category=${encodeURIComponent(item.category)}`} className="related-category">{item.category}</Link>
                  <Link href={`${BLOG_PATH}/${item.slug}`} className="related-title">{item.title} <span aria-hidden="true">›</span></Link>
                  <p className="related-date">{item.date}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <section className="authors-cta">
          <div className="authors-copy">
            <h2 className="section-title">Meet the Authors</h2>
            <p className="authors-text">Connect with and discover our Today&apos;s Harvest blog authors and their broad range of financial and northeast agricultural expertise.</p>
          </div>
          <Link href={AUTHORS_PATH} className="button authors-button">Meet the Authors</Link>
        </section>

        <section className="newsletter">
          <h2 className="newsletter-title">Sign up for our Today&apos;s Harvest Blog.</h2>
          <p className="newsletter-subhead">Get the latest blog articles delivered to your inbox.</p>
          <div className="newsletter-form">
            <form className="newsletter-inner" action="#" method="post">
              <div className="newsletter-group">
                <label htmlFor="email" className="newsletter-label">Enter your email*</label>
                <input id="email" name="email" type="email" className="newsletter-email" placeholder="email@address.com" required />
                <div className="required">*Required Field</div>
              </div>
              <button type="submit" className="signup">Sign Up</button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

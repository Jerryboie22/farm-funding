import type { Metadata } from "next";
import Link from "next/link";
import { Montserrat, Barlow } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-barlow",
  display: "swap",
});

const TITLE = "Highlights from the Fiscal Year 2026-2027 NYS Budget";
const DESCRIPTION =
  "Highlights from the Fiscal Year 2026-2027 NYS Budget for New York farm and agribusiness customers.";
const BLOG_PATH = "/resources/todays-harvest-Blog";
const AUTHORS_PATH = "/resources/meet-the-authors";
const ARTICLE_URL =
  "https://farm-funding.vercel.app/resources/todays-harvest-Blog/260604FarmHighlightsNYSBudget";

export const metadata: Metadata = {
  title: `${TITLE} | Farm Funding`,
  description: DESCRIPTION,
  keywords:
    "NYS Budget, New York State Budget, Fiscal Year 2026-2027, New York agriculture, farm tax, Tax Talks",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: ARTICLE_URL,
    type: "article",
    publishedTime: "2026-06-04",
  },
};

const RELATED_ARTICLES = [
  {
    category: "Public Policy",
    categoryHref: `${BLOG_PATH}?category=public-policy`,
    title:
      "2026 Farm Bill Takes Shape: Comparing the House and Senate Proposals",
    href: `${BLOG_PATH}/260707_2026FarmBillTakesShape`,
    date: "July 7, 2026",
  },
  {
    category: "Crop Insurance",
    categoryHref: `${BLOG_PATH}?category=crop-insurance`,
    title:
      "Key Changes Coming to DRP, LGM and LRP Programs: What Producers Need to Know",
    href: `${BLOG_PATH}/260603CG_KeyChangesToDRPandLGMandLRP`,
    date: "June 3, 2026",
  },
  {
    category: "Business Tips and Tools",
    categoryHref: `${BLOG_PATH}?category=business-tips-and-tools`,
    title: "Tariff Relief Program Available for New York Producers",
    href: `${BLOG_PATH}/tariff-relief-program-available-for-new-york-producers`,
    date: "July 1, 2026",
  },
];

const TAGS = [
  ["tax planning", "tax-planning"],
  ["new york", "new-york"],
  ["legislation", "legislation"],
];

const styles = `
.nys-budget-page,.nys-budget-page *{box-sizing:border-box}
.nys-budget-page{--forest:#4f832a;--forest-dark:#3f6e20;--heading-brown:#5a4400;--heading-brown-dark:#493600;--clay:#496d83;--clay-dark:#3b5a6d;--cream:#ecf1e4;--grey-box:#f1f3f4;--grey-badge:#686868;--grey-text:#686868;--charcoal:#231f20;--line:#d8d8d8;color:var(--charcoal);background:#fff}
.nys-budget-page .article-hero{position:relative;width:100%;padding:24px 20px 28px;background:var(--clay);color:#fff}
.nys-budget-page .article-date{margin:0 0 20px;text-align:right;color:#fff;font:700 14px/1.4 var(--font-montserrat),Montserrat,Arial,sans-serif}
.nys-budget-page .article-category{display:inline-block;margin:0 0 34px;padding:7px 14px;border:1px solid #fff;color:#fff;text-decoration:none;font:700 14px/1.3 var(--font-montserrat),Montserrat,Arial,sans-serif}
.nys-budget-page .article-category:hover{text-decoration:underline}
.nys-budget-page .article-title{max-width:1480px;margin:0;color:var(--cream);font:700 clamp(32px,5vw,52px)/1.1 var(--font-montserrat),Montserrat,Arial,sans-serif;letter-spacing:-.5px}
.nys-budget-page .article-copy{width:min(calc(100% - 40px),860px);margin:0 auto;padding:60px 0 20px}
.nys-budget-page .article-copy p,.nys-budget-page .article-copy li{font-family:var(--font-barlow),Barlow,Arial,sans-serif;font-size:18px;line-height:1.7}
.nys-budget-page .article-copy p{margin:0 0 24px}
.nys-budget-page .article-copy h2{margin:42px 0 17px;color:var(--heading-brown);font:700 27px/1.25 var(--font-montserrat),Montserrat,Arial,sans-serif}
.nys-budget-page .article-copy h3{margin:34px 0 14px;color:var(--heading-brown);font:700 22px/1.3 var(--font-montserrat),Montserrat,Arial,sans-serif}
.nys-budget-page .article-copy ul{margin:0 0 26px;padding-left:30px}
.nys-budget-page .article-copy li{margin-bottom:10px}
.nys-budget-page .article-copy a{color:var(--clay);text-decoration:underline;text-underline-offset:2px}
.nys-budget-page .article-copy strong{font-weight:700}
.nys-budget-page .tags{display:flex;align-items:center;flex-wrap:wrap;gap:6px;width:min(calc(100% - 40px),860px);margin:0 auto;padding:22px 0 28px;border-top:1px solid var(--line);font:16px/1.7 var(--font-barlow),Barlow,Arial,sans-serif}
.nys-budget-page .tag-icon{width:17px;height:17px;color:var(--heading-brown);flex:0 0 auto}
.nys-budget-page .tags a{color:var(--clay);text-decoration:underline}
.nys-budget-page .tag-separator{margin:0 2px;color:var(--grey-text)}
.nys-budget-page .share-wrap{width:min(calc(100% - 40px),860px);margin:0 auto;padding:4px 0 58px}
.nys-budget-page .share-label{margin:0 0 16px;font:600 17px/1.4 var(--font-barlow),Barlow,Arial,sans-serif}
.nys-budget-page .share-list{display:flex;align-items:center;gap:10px;margin:0;padding:0;list-style:none}
.nys-budget-page .share-list a{display:inline-flex;width:42px;height:42px;align-items:center;justify-content:center;border-radius:4px;color:#fff;text-decoration:none}
.nys-budget-page .share-list svg{width:22px;height:22px}
.nys-budget-page .share-x{background:#14171a}.nys-budget-page .share-facebook{background:#1877f2}.nys-budget-page .share-linkedin{background:#0a66c2}.nys-budget-page .share-email{background:#4f832a}
.nys-budget-page .related-wrap{width:100%;background:var(--cream)}
.nys-budget-page .related{width:min(calc(100% - 40px),1180px);margin:0 auto;padding:58px 0 64px}
.nys-budget-page .section-title{margin:0;color:var(--forest);font:700 42px/1.15 var(--font-montserrat),Montserrat,Arial,sans-serif;letter-spacing:-.4px}
.nys-budget-page .related-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:46px;margin-top:40px}
.nys-budget-page .related-card{min-width:0}
.nys-budget-page .related-category{display:inline-block;padding:8px 14px;background:var(--grey-badge);color:#fff;font:700 14px/1.2 var(--font-barlow),Barlow,Arial,sans-serif;text-transform:uppercase;text-decoration:none}
.nys-budget-page .related-title{display:block;margin-top:20px;color:var(--heading-brown);font:700 26px/1.3 var(--font-montserrat),Montserrat,Arial,sans-serif;text-decoration:none}
.nys-budget-page .related-title:hover{text-decoration:underline;text-underline-offset:3px}
.nys-budget-page .related-date{margin:20px 0 0;color:var(--grey-text);font:700 14px/1.3 var(--font-barlow),Barlow,Arial,sans-serif;text-transform:uppercase}
.nys-budget-page .authors-cta{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:50px;width:min(calc(100% - 40px),1180px);margin:0 auto;padding:64px 0}
.nys-budget-page .authors-title{margin:0 0 18px;color:var(--forest);font:700 42px/1.15 var(--font-montserrat),Montserrat,Arial,sans-serif}
.nys-budget-page .authors-text{max-width:900px;margin:0;color:var(--charcoal);font:21px/1.5 var(--font-barlow),Barlow,Arial,sans-serif}
.nys-budget-page .authors-button{display:inline-flex;min-width:205px;min-height:50px;align-items:center;justify-content:center;padding:13px 28px;background:var(--clay);color:#fff;font:700 16px/1.2 var(--font-montserrat),Montserrat,Arial,sans-serif;text-decoration:none}
.nys-budget-page .authors-button:hover{background:var(--clay-dark)}
@media(max-width:991px){.nys-budget-page .article-hero{padding:22px 28px 34px}.nys-budget-page .article-title{font-size:45px}.nys-budget-page .article-copy,.nys-budget-page .tags,.nys-budget-page .share-wrap{width:min(calc(100% - 56px),860px)}.nys-budget-page .related,.nys-budget-page .authors-cta{width:calc(100% - 56px)}.nys-budget-page .related-grid{gap:30px}.nys-budget-page .authors-cta{gap:30px}}
@media(max-width:767px){.nys-budget-page .article-hero{padding:20px 14px 28px}.nys-budget-page .article-date{text-align:left;font-size:14px;margin-bottom:14px}.nys-budget-page .article-category{margin-bottom:20px;padding:5px 9px;font-size:13px}.nys-budget-page .article-title{font-size:34px;line-height:1.14}.nys-budget-page .article-copy{width:calc(100% - 28px);padding-top:34px}.nys-budget-page .article-copy p,.nys-budget-page .article-copy li{font-size:17px;line-height:1.7}.nys-budget-page .article-copy h2{font-size:23px;margin-top:34px}.nys-budget-page .article-copy h3{font-size:20px}.nys-budget-page .tags,.nys-budget-page .share-wrap{width:calc(100% - 28px)}.nys-budget-page .related{width:calc(100% - 28px);padding-top:38px;padding-bottom:42px}.nys-budget-page .section-title,.nys-budget-page .authors-title{font-size:30px}.nys-budget-page .related-grid{grid-template-columns:1fr;gap:30px;margin-top:30px}.nys-budget-page .related-title{font-size:22px}.nys-budget-page .authors-cta{grid-template-columns:1fr;width:calc(100% - 28px);gap:22px;padding:40px 0}.nys-budget-page .authors-text{font-size:17px}.nys-budget-page .authors-button{justify-self:start}}
`;

export default function NYSBudgetArticlePage() {
  const shareText = encodeURIComponent(TITLE);
  const shareUrl = encodeURIComponent(ARTICLE_URL);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <main className={`nys-budget-page ${montserrat.variable} ${barlow.variable}`}>
        <section className="article-hero">
          <p className="article-date">June 4, 2026</p>
          <Link href={`${BLOG_PATH}?category=tax-talk`} className="article-category">
            Tax Talks
          </Link>
          <h1 className="article-title">{TITLE}</h1>
        </section>

        <article className="article-copy">
          <p>
            Following three-months of delays, the New York State legislature has
            passed the Fiscal Year 2026-2027 (FY 26-27) budget. The final budget,
            signed into law by Gov. Kathy Hochul, includes many provisions relevant
            to our farm and agribusiness customers. The following are a few
            highlights of the recently passed legislation.
          </p>

          <h2>Fiscal Year 2026-2027 NYS Budget</h2>

          <p>
            The budget contains provisions affecting New York farm and
            agribusiness customers. Producers and business owners should review
            the final legislation with their tax and financial advisers to
            understand which provisions apply to their individual operations.
          </p>
        </article>

        <div className="tags">
          <svg className="tag-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.41l9 9c.36.36.86.59 1.41.59.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.22-1.05-.59-1.42zM6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5 8 5.67 8 6.5 7.33 8 6.5 8z" />
          </svg>
          <span>Tags:</span>
          {TAGS.map(([label, slug], index) => (
            <span key={slug}>
              <Link href={`${BLOG_PATH}?tag=${encodeURIComponent(slug)}`}>{label}</Link>
              {index < TAGS.length - 1 && <span className="tag-separator">,</span>}
            </span>
          ))}
        </div>

        <section className="share-wrap" aria-label="Share this article">
          <p className="share-label">Share this post on</p>
          <ul className="share-list">
            <li><a className="share-x" href={`https://twitter.com/share?text=${shareText}&url=${shareUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on X"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></a></li>
            <li><a className="share-facebook" href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" /></svg></a></li>
            <li><a className="share-linkedin" href={`https://www.linkedin.com/shareArticle?url=${shareUrl}&title=${shareText}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0-4.12zM7.12 20.45H3.56V9h3.56v11.45z" /></svg></a></li>
            <li><a className="share-email" href={`mailto:?subject=${shareText}&body=${shareUrl}`} aria-label="Share by email"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg></a></li>
          </ul>
        </section>

        <div className="related-wrap">
          <section className="related">
            <h2 className="section-title">You Might Also Like</h2>
            <div className="related-grid">
              {RELATED_ARTICLES.map((item) => (
                <article key={item.title} className="related-card">
                  <Link href={item.categoryHref} className="related-category">{item.category}</Link>
                  <Link href={item.href} className="related-title">{item.title} <span aria-hidden="true">&#8250;</span></Link>
                  <p className="related-date">{item.date}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <section className="authors-cta">
          <div>
            <h2 className="authors-title">Meet the Authors</h2>
            <p className="authors-text">
              Connect with and discover our Today&rsquo;s Harvest blog authors and
              their broad range of financial and Northeast agricultural expertise.
            </p>
          </div>
          <Link href={AUTHORS_PATH} className="authors-button">Meet the Authors</Link>
        </section>
      </main>
    </>
  );
}

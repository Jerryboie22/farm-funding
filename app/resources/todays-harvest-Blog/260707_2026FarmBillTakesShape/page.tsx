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

const TITLE =
  "2026 Farm Bill Takes Shape: Comparing the House and Senate Proposals";

const DESCRIPTION =
  "2026 Farm Bill Takes Shape: Comparing the House and Senate Proposals";

const BLOG_PATH = "/resources/todays-harvest-Blog";
const AUTHORS_PATH = "/resources/meet-the-authors";

const ARTICLE_URL =
  "https://farm-funding.com/resources/todays-harvest-Blog/260707_2026FarmBillTakesShape";

export const metadata: Metadata = {
  title: `${TITLE} | Farm Funding`,
  description: DESCRIPTION,
  keywords:
    "2026 Farm Bill, Farm Bill Takes Shape, House Senate Farm Bill, agricultural policy, farm policy, Farm Funding",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/images/homepage/1-orchard_adobestock_292882711.jpg",
        alt: "Capitol building framed by farm fields",
      },
    ],
  },
};

const RELATED_ARTICLES = [
  {
    category: "Ag Economy",
    categoryHref: `${BLOG_PATH}?category=ag-economy`,
    title: "2025 Northeast Dairy Farm Summary & Mid-Year Outlook",
    href:
      "/resources/Industry-Trends-and-Outlooks/Reports/2025NEDairyFarmSummary2026MidYearOutlook.html",
    date: "July 10, 2026",
  },
  {
    category: "Crop Insurance",
    categoryHref: `${BLOG_PATH}?category=crop-insurance`,
    title:
      "USDA Risk Management Agency Announces Emergency Claim Procedures for New York Apple Growers Following Spring Freeze",
    href: undefined,
    date: "July 8, 2026",
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
  ["ag economy", "ag-economy"],
  ["outlook", "outlook"],
  ["policy", "policy"],
  ["legislation", "legislation"],
];

const pageStyles = `
  .farm-bill-page {
    --forest: #4f832a;
    --forest-dark: #3f6e20;

    --heading-brown: #5a4400;
    --heading-brown-dark: #493600;

    --clay: #496d83;
    --clay-dark: #3b5a6d;

    --cream: #ecf1e4;
    --grey-bg: #f8f8f8;
    --grey-box: #f1f3f4;
    --grey-badge: #686868;
    --grey-text: #686868;
    --charcoal: #231f20;
    --line: #d8d8d8;

    color: var(--charcoal);
    background: #fff;
  }

  .farm-bill-page,
  .farm-bill-page * {
    box-sizing: border-box;
  }

  /* ==========================================================
     HERO
     ========================================================== */

  .farm-bill-page .article-hero {
    position: relative;
    width: 100%;
    padding: 24px 20px 28px;
    background: var(--clay);
    color: #fff;
  }

  .farm-bill-page .article-date {
    margin: 0 0 20px;
    text-align: right;
    color: #fff;
    font-family:
      var(--font-montserrat),
      Montserrat,
      Arial,
      sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.4;
  }

  .farm-bill-page .article-heading {
    max-width: 100%;
  }

  .farm-bill-page .article-category {
    display: inline-block;
    margin: 0 0 14px;
    padding: 6px 12px;
    border: 1px solid #fff;
    color: #fff;
    text-decoration: none;
    font-family:
      var(--font-montserrat),
      Montserrat,
      Arial,
      sans-serif;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.3;
  }

  .farm-bill-page .article-category:hover,
  .farm-bill-page .article-author:hover {
    text-decoration: underline;
  }

  .farm-bill-page .article-title {
    margin: 0;
    color: var(--cream);
    font-family:
      var(--font-montserrat),
      Montserrat,
      Arial,
      sans-serif;
    font-size: clamp(28px, 7vw, 40px);
    font-weight: 700;
    line-height: 1.12;
    letter-spacing: -0.3px;
  }

  .farm-bill-page .article-byline {
    margin: 14px 0 0;
    color: #fff;
    font-family:
      var(--font-barlow),
      Barlow,
      Arial,
      sans-serif;
    font-size: 15px;
    line-height: 1.5;
  }

  .farm-bill-page .article-author {
    color: #fff;
    text-decoration: underline;
  }

  /* ==========================================================
     FEATURED IMAGE
     ========================================================== */

  .farm-bill-page .hero-image-wrap {
    width: 100%;
    max-width: 600px;
    margin: 20px auto 0;
    position: relative;
  }

  .farm-bill-page .hero-image-wrap img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 645 / 403;
    object-fit: cover;
    object-position: center;
  }

  /* ==========================================================
     ARTICLE CONTENT
     ========================================================== */

  .farm-bill-page .article-content {
    width: 100%;
    margin: 0 auto;
  }

  .farm-bill-page .article-copy {
    width: min(100% - 40px, 860px);
    margin: 0 auto;
    padding: 52px 0 20px;
  }

  .farm-bill-page .article-copy,
  .farm-bill-page .article-copy p,
  .farm-bill-page .article-copy li {
    font-family:
      var(--font-barlow),
      Barlow,
      Arial,
      sans-serif;
  }

  .farm-bill-page .article-copy p,
  .farm-bill-page .article-copy li {
    font-size: 18px;
    line-height: 1.7;
  }

  .farm-bill-page .article-copy p {
    margin: 0 0 24px;
  }

  .farm-bill-page .article-copy h2 {
    margin: 38px 0 16px;
    color: var(--heading-brown);
    font-family:
      var(--font-montserrat),
      Montserrat,
      Arial,
      sans-serif;
    font-size: 25px;
    font-weight: 700;
    line-height: 1.25;
  }

  .farm-bill-page .article-copy ul {
    margin: 0 0 24px;
    padding-left: 30px;
  }

  .farm-bill-page .article-copy li {
    margin-bottom: 8px;
  }

  .farm-bill-page .article-copy a {
    color: var(--clay);
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;
  }

  .farm-bill-page .article-copy a:hover {
    color: var(--heading-brown);
  }

  .farm-bill-page .article-copy strong {
    font-weight: 700;
  }

  .farm-bill-page .article-copy em {
    font-style: italic;
  }

  /* ==========================================================
     CONTACT BUTTON
     ========================================================== */

  .farm-bill-page .contact-wrap {
    padding: 10px 0 32px;
    text-align: center;
  }

  .farm-bill-page .primary-button {
    display: inline-flex;
    min-height: 50px;
    align-items: center;
    justify-content: center;
    padding: 13px 28px;
    border: 0;
    background: var(--clay);
    color: #fff !important;
    font-family:
      var(--font-montserrat),
      Montserrat,
      Arial,
      sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.2;
    text-decoration: none !important;
    transition:
      background-color 160ms ease,
      transform 160ms ease;
  }

  .farm-bill-page .primary-button:hover {
    background: var(--clay-dark);
  }

  /* ==========================================================
     TAGS
     ========================================================== */

  .farm-bill-page .tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
    width: min(100% - 40px, 860px);
    margin: 0 auto;
    padding: 22px 0 28px;
    border-top: 1px solid var(--line);
    color: var(--charcoal);
    font-family:
      var(--font-barlow),
      Barlow,
      Arial,
      sans-serif;
    font-size: 16px;
    line-height: 1.7;
  }

  .farm-bill-page .tag-icon {
    flex: 0 0 auto;
    width: 17px;
    height: 17px;
    margin-right: 2px;
    color: var(--heading-brown);
  }

  .farm-bill-page .tag-label {
    font-weight: 600;
  }

  .farm-bill-page .tags a {
    color: var(--clay);
    text-decoration: underline;
  }

  .farm-bill-page .tags a:hover {
    color: var(--heading-brown);
  }

  .farm-bill-page .tag-separator {
    margin: 0 2px;
    color: var(--grey-text);
  }

  /* ==========================================================
     AUTHOR + SHARE CARD
     ========================================================== */

  .farm-bill-page .social-author-row {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 28px;
    width: min(100% - 40px, 1180px);
    margin: 0 auto;
    padding: 20px 0 52px;
  }

  .farm-bill-page .grey-box {
    min-height: 176px;
    padding: 22px;
    background: var(--grey-box);
  }

  .farm-bill-page .author-box {
    display: flex;
    align-items: center;
    gap: 22px;
  }

  .farm-bill-page .author-photo {
    display: block;
    width: 176px;
    height: 176px;
    flex: 0 0 176px;
    object-fit: cover;
    object-position: center;
  }

  .farm-bill-page .author-name {
    color: var(--heading-brown);
    font-family:
      var(--font-montserrat),
      Montserrat,
      Arial,
      sans-serif;
    font-size: 21px;
    font-weight: 700;
    line-height: 1.3;
    text-decoration: underline;
  }

  .farm-bill-page .author-role {
    margin: 8px 0 0;
    color: var(--charcoal);
    font-family:
      var(--font-barlow),
      Barlow,
      Arial,
      sans-serif;
    font-size: 17px;
    font-weight: 700;
    line-height: 1.4;
  }

  .farm-bill-page .share-box {
    display: flex;
    min-height: 176px;
    align-items: center;
  }

  .farm-bill-page .share-label {
    margin: 0 0 16px;
    color: var(--charcoal);
    font-family:
      var(--font-barlow),
      Barlow,
      Arial,
      sans-serif;
    font-size: 17px;
    font-weight: 600;
  }

  .farm-bill-page .share-list {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .farm-bill-page .share-list a {
    display: inline-flex;
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: #fff;
    text-decoration: none;
  }

  .farm-bill-page .share-list svg {
    width: 22px;
    height: 22px;
  }

  .farm-bill-page .share-x {
    background: #14171a;
  }

  .farm-bill-page .share-facebook {
    background: #1877f2;
  }

  .farm-bill-page .share-linkedin {
    background: #0a66c2;
  }

  .farm-bill-page .share-email {
    background: #34a853;
  }

  /* ==========================================================
     YOU MIGHT ALSO LIKE
     ========================================================== */

  .farm-bill-page .related-wrap {
    width: 100%;
    background: var(--cream);
  }

  .farm-bill-page .related {
    width: min(100% - 40px, 1180px);
    margin: 0 auto;
    padding: 34px 0 54px;
  }

  .farm-bill-page .related-title-main {
    margin: 0;
    color: var(--heading-brown);
    font-family:
      var(--font-montserrat),
      Montserrat,
      Arial,
      sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.25;
  }

  .farm-bill-page .related-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 34px;
    margin-top: 20px;
  }

  .farm-bill-page .related-card {
    min-width: 0;
    padding-top: 26px;
  }

  .farm-bill-page .related-category {
    display: inline-block;
    padding: 6px 14px;
    background: var(--grey-badge);
    color: #fff;
    font-family:
      var(--font-barlow),
      Barlow,
      Arial,
      sans-serif;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    text-decoration: none;
  }

  .farm-bill-page .related-title {
    display: block;
    margin-top: 26px;
    color: var(--heading-brown);
    font-family:
      var(--font-montserrat),
      Montserrat,
      Arial,
      sans-serif;
    font-size: 21px;
    font-weight: 700;
    line-height: 1.35;
    text-decoration: none;
  }

  .farm-bill-page .related-title:hover {
    color: var(--heading-brown-dark);
    text-decoration: underline;
  }

  .farm-bill-page .related-date {
    margin: 26px 0 0;
    color: var(--grey-text);
    font-family:
      var(--font-barlow),
      Barlow,
      Arial,
      sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.3;
    text-transform: uppercase;
  }

  /* ==========================================================
     MEET THE AUTHORS
     ========================================================== */

  .farm-bill-page .authors-cta {
    display: grid;
    grid-template-columns: minmax(0, 2fr) minmax(240px, 1fr);
    align-items: center;
    gap: 28px;
    width: min(100% - 40px, 1180px);
    margin: 0 auto;
    padding: 50px 0;
  }

  .farm-bill-page .authors-cta-title {
    margin: 0 0 14px;
    color: var(--heading-brown);
    font-family:
      var(--font-montserrat),
      Montserrat,
      Arial,
      sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.25;
  }

  .farm-bill-page .authors-cta-text {
    max-width: 900px;
    margin: 0;
    color: var(--charcoal);
    font-family:
      var(--font-barlow),
      Barlow,
      Arial,
      sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
  }

  .farm-bill-page .authors-cta-button {
    justify-self: end;
    min-width: 205px;
  }

  /* ==========================================================
     NEWSLETTER
     ========================================================== */

  .farm-bill-page .newsletter {
    width: 100%;
    padding: 60px 20px;
    background: var(--forest);
    color: #fff;
    text-align: center;
  }

  .farm-bill-page .newsletter-title {
    margin: 0;
    color: #fff;
    font-family:
      var(--font-montserrat),
      Montserrat,
      Arial,
      sans-serif;
    font-size: 44px;
    font-weight: 700;
    line-height: 1.15;
  }

  .farm-bill-page .newsletter-subhead {
    margin: 22px 0 0;
    color: #fff;
    font-family:
      var(--font-barlow),
      Barlow,
      Arial,
      sans-serif;
    font-size: 21px;
    font-weight: 500;
    line-height: 1.4;
  }

  .farm-bill-page .newsletter-form-wrap {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }

  .farm-bill-page .newsletter-form {
    display: flex;
    align-items: flex-end;
    gap: 10px;
  }

  .farm-bill-page .newsletter-group {
    text-align: left;
  }

  .farm-bill-page .newsletter-label {
    display: block;
    margin-bottom: 9px;
    color: #fff;
    font-family:
      var(--font-barlow),
      Barlow,
      Arial,
      sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.3;
  }

  .farm-bill-page .newsletter-email {
    width: 245px;
    height: 44px;
    border: 0;
    border-radius: 2px;
    padding: 0 13px;
    background: #fff;
    color: var(--charcoal);
    font-family:
      var(--font-barlow),
      Barlow,
      Arial,
      sans-serif;
    font-size: 17px;
    outline: none;
  }

  .farm-bill-page .newsletter-email:focus {
    box-shadow: 0 0 0 2px rgb(255 255 255 / 55%);
  }

  .farm-bill-page .required {
    margin-top: 8px;
    color: #fff;
    font-family:
      var(--font-barlow),
      Barlow,
      Arial,
      sans-serif;
    font-size: 14px;
    font-style: italic;
  }

  .farm-bill-page .signup-button {
    height: 44px;
    min-width: 112px;
    border: 2px solid #fff;
    border-radius: 4px;
    padding: 0 20px;
    background: var(--forest);
    color: #fff;
    font-family:
      var(--font-barlow),
      Barlow,
      Arial,
      sans-serif;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
  }

  .farm-bill-page .signup-button:hover {
    background: var(--forest-dark);
  }

  /* ==========================================================
     DESKTOP
     ========================================================== */

  @media (min-width: 992px) {
    .farm-bill-page .article-hero {
      height: 312px;
      padding: 15px 67px 0;
      overflow: visible;
    }

    .farm-bill-page .article-heading {
      max-width: 1480px;
    }

    .farm-bill-page .article-category {
      margin-bottom: 34px;
      padding: 7px 14px;
      font-size: 14px;
      line-height: 1.2;
    }

    .farm-bill-page .article-title {
      max-width: 1480px;
      font-size: 52px;
      line-height: 1.08;
      letter-spacing: -0.5px;
    }

    .farm-bill-page .article-byline {
      margin-top: 30px;
      font-size: 17px;
    }

    .farm-bill-page .hero-image-wrap {
      width: 645px;
      max-width: 645px;
      margin: -37px auto 0;
    }

    .farm-bill-page .hero-image-wrap img {
      height: 403px;
      aspect-ratio: auto;
    }

    .farm-bill-page .article-copy {
      padding-top: 60px;
    }
  }

  /* ==========================================================
     TABLET
     ========================================================== */

  @media (max-width: 991px) {
    .farm-bill-page .article-title {
      font-size: 45px;
    }

    .farm-bill-page .article-copy,
    .farm-bill-page .tags {
      width: min(100% - 56px, 860px);
    }

    .farm-bill-page .social-author-row,
    .farm-bill-page .related,
    .farm-bill-page .authors-cta {
      width: calc(100% - 56px);
    }

    .farm-bill-page .related-grid {
      gap: 24px;
    }
  }

  /* ==========================================================
     MOBILE
     ========================================================== */

  @media (max-width: 767px) {
    .farm-bill-page .article-hero {
      padding: 20px 16px 24px;
    }

    .farm-bill-page .article-date {
      margin-bottom: 22px;
      text-align: left;
      font-size: 14px;
    }

    .farm-bill-page .article-category {
      margin-bottom: 14px;
      font-size: 14px;
    }

    .farm-bill-page .article-title {
      font-size: 35px;
      line-height: 1.12;
    }

    .farm-bill-page .article-byline {
      margin-top: 16px;
      font-size: 16px;
    }

    .farm-bill-page .hero-image-wrap {
      width: 100%;
      max-width: none;
      margin-top: 20px;
    }

    .farm-bill-page .hero-image-wrap img {
      height: 230px;
      aspect-ratio: auto;
    }

    .farm-bill-page .article-copy {
      width: calc(100% - 28px);
      padding-top: 34px;
    }

    .farm-bill-page .article-copy p,
    .farm-bill-page .article-copy li {
      font-size: 17px;
      line-height: 1.72;
    }

    .farm-bill-page .article-copy h2 {
      margin-top: 32px;
      font-size: 23px;
    }

    .farm-bill-page .tags {
      width: calc(100% - 28px);
      font-size: 15px;
    }

    .farm-bill-page .social-author-row {
      width: calc(100% - 28px);
      grid-template-columns: 1fr;
      gap: 18px;
      padding-bottom: 35px;
    }

    .farm-bill-page .grey-box {
      min-height: 0;
      padding: 18px;
    }

    .farm-bill-page .author-box {
      align-items: flex-start;
      gap: 15px;
    }

    .farm-bill-page .author-photo {
      width: 96px;
      height: 96px;
      flex-basis: 96px;
    }

    .farm-bill-page .author-name {
      font-size: 20px;
    }

    .farm-bill-page .author-role {
      font-size: 15px;
    }

    .farm-bill-page .related {
      width: calc(100% - 28px);
      padding-top: 25px;
      padding-bottom: 35px;
    }

    .farm-bill-page .related-title-main {
      font-size: 27px;
    }

    .farm-bill-page .related-grid {
      grid-template-columns: 1fr;
      gap: 25px;
    }

    .farm-bill-page .related-card {
      padding-top: 20px;
    }

    .farm-bill-page .related-category {
      font-size: 12px;
    }

    .farm-bill-page .related-title {
      margin-top: 20px;
      font-size: 20px;
    }

    .farm-bill-page .related-date {
      margin-top: 20px;
      font-size: 14px;
    }

    .farm-bill-page .authors-cta {
      width: calc(100% - 28px);
      grid-template-columns: 1fr;
      gap: 18px;
      padding: 38px 0;
    }

    .farm-bill-page .authors-cta-title {
      font-size: 27px;
    }

    .farm-bill-page .authors-cta-text {
      font-size: 17px;
      line-height: 1.55;
    }

    .farm-bill-page .authors-cta-button {
      justify-self: start;
    }

    .farm-bill-page .newsletter {
      padding: 48px 14px 52px;
    }

    .farm-bill-page .newsletter-title {
      font-size: 31px;
    }

    .farm-bill-page .newsletter-subhead {
      margin-top: 18px;
      font-size: 17px;
    }

    .farm-bill-page .newsletter-form-wrap {
      margin-top: 24px;
    }

    .farm-bill-page .newsletter-form {
      width: 100%;
      flex-direction: column;
      align-items: stretch;
      gap: 10px;
    }

    .farm-bill-page .newsletter-email {
      width: 100%;
    }

    .farm-bill-page .signup-button {
      width: 100%;
    }
  }
`;

export default function FarmBillArticlePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      <main
        className={`farm-bill-page w-full overflow-x-hidden ${montserrat.variable} ${barlow.variable}`}
      >
        {/* ======================================================
            HERO
            ====================================================== */}

        <section className="article-hero">
          <p className="article-date">July 7, 2026</p>

          <div className="article-heading">
            <Link
              href={`${BLOG_PATH}?category=Public+Policy`}
              className="article-category"
            >
              Public Policy
            </Link>

            <h1 id="maincontent" className="article-title">
              {TITLE}
            </h1>

            <p className="article-byline">
              By:{" "}
              <Link
                href={`${AUTHORS_PATH}#Danielle-Cummins`}
                className="article-author"
              >
                Danielle Cummins
              </Link>
            </p>
          </div>
        </section>

        {/* ======================================================
            FEATURED IMAGE
            ====================================================== */}

        <div className="hero-image-wrap">
          <img
            src="/images/homepage/1-orchard_adobestock_292882711.jpg"
            alt="Capitol building framed by farm fields"
          />
        </div>

        {/* ======================================================
            ARTICLE BODY
            ====================================================== */}

        <div className="article-content">
          <article className="article-copy">
            <p>
              After nearly three years of short-term extensions, Congress is
              once again debating and drafting comprehensive farm legislation.
              In May, the House passed the{" "}
              <em>Farm, Food, and National Security Act of 2026 (H.R. 7567)</em>
              , while in late June Senate Agriculture Committee Chairman John
              Boozman (AR) released the{" "}
              <em>Agricultural Act of 2026</em>, a &ldquo;discussion
              draft&rdquo; providing the Senate a starting point for
              negotiation with other committee members.
            </p>

            <p>
              While the two proposals differ in several areas, they share
              broad agreement on many of agriculture&rsquo;s priorities. Both
              bills would strengthen the farm safety net, invest in
              conservation, modernize USDA credit programs and expand support
              for specialty crops through fiscal year 2031. Perhaps more
              notable than what the Senate proposal includes is what it leaves
              out. Unlike the House bill, the Senate draft largely avoids the
              most politically divisive provisions, instead focusing on areas
              where bipartisan consensus already exists. This is driven by the
              necessity to garner 60 votes on the Senate floor, a much
              different political environment than in the House. The
              differences in policy and politics could prove significant as
              lawmakers work toward a final conference agreement.
            </p>

            <h2>Title 1: Commodity Programs</h2>

            <p>
              While many Title I provisions were addressed through the One Big
              Beautiful Bill (OBBB), both the House and Senate proposals
              recognize that the current farm safety net has not kept pace with
              rising production costs. Both the House and Senate bills as
              drafted will:
            </p>

            <ul>
              <li>
                Increase statutory reference prices under the Price Loss
                Coverage (PLC) program;
              </li>
              <li>Raise marketing assistance loan rates;</li>
              <li>
                Update Agriculture Risk Coverage (ARC) benchmark calculations;
              </li>
              <li>Continue Dairy Margin Coverage (DMC); and</li>
              <li>Reauthorize disaster assistance programs.</li>
              <li>
                Both bills also include a provision for ad-hoc assistance for
                specialty crop producers via the Specialty Crop Assistance
                Framework and establish authorization for USDA to administer
                future disaster relief payments through state disaster block
                grants. These changes mark a significant update to commodity
                support programs and reflect the current needs in a tough
                agriculture economy.
              </li>
            </ul>

            <p>
              The Senate proposal also includes several administrative
              improvements, including expanded authority for USDA to continue
              marketing assistance loans during appropriations lapses and
              requires additional Commodity Credit Corporation (CCC)
              transparency and reporting. This is likely an effort to bring
              more oversight into CCC spending and use of CCC funds by the
              executive branch.
            </p>

            <p>
              The House proposal includes several producer-focused provisions
              not found in the Senate bill, including restoring tobacco as a
              Commodity Credit Corporation commodity, authorizing electronic
              disaster assistance applications, directing USDA to study
              fertilizer storage loans, and revising livestock indemnity
              standards for losses caused by Mexican wolves.
            </p>

            <h2>Title 2: Conservation Programs</h2>

            <p>
              Conservation represents another area of general agreement
              between both chambers. There are no substantial changes to the
              following conservation programs in either proposal:
            </p>

            <ul>
              <li>Conservation Reserve Program (CRP)</li>
              <li>Environmental Quality Incentives Program (EQIP)</li>
              <li>Conservation Stewardship Program (CSP)</li>
              <li>Agricultural Conservation Easement Program (ACEP)</li>
              <li>Regional Conservation Partnership Program (RCPP)</li>
            </ul>

            <p>
              Both bills would incorporate much of the Inflation Reduction
              Act&rsquo;s (IRA) conservation funding into the farm bill
              baseline, providing long-term funding certainty beyond annual
              appropriations.
            </p>

            <p>
              The two proposals diverge primarily in implementation. The
              Senate bill places greater emphasis on expanding the
              Conservation Reserve Enhancement Program (CREP), strengthening
              technical assistance, updating conservation practice standards,
              and improving administrative flexibility for USDA conservation
              programs.
            </p>

            <p>
              The House proposal focuses more directly on conservation
              outcomes, adding new soil health initiatives, flood
              vulnerability research, winter wheat environmental studies, and
              mitigation banking authorities.
            </p>

            <h2>Title 5: Credit Programs</h2>

            <p>
              Credit title provisions are among the least controversial
              sections of both bills and have provided critical updates for
              the Farm Credit System. The following breakdown highlights the
              Farm Credit priorities that were included in the House and
              Senate proposals and where they vary.
            </p>

            <p>
              These provisions were included in both proposals:
            </p>

            <ul>
              <li>
                <strong>H.R. 1246</strong>, which would give Farm Credit
                institutions authority to partner with community banks and
                other lenders to finance essential community facilities like
                senior and childcare centers and healthcare facilities.
              </li>
              <li>
                <strong>H.R. 1063</strong>, which would confirm the role of
                the Farm Credit Administration (FCA) as the Farm Credit
                System&rsquo;s sole regulator and require the collection of
                certain loan applicants&rsquo; demographic information in a
                way that protects their privacy.
              </li>
              <li>
                <strong>S.899/H.R. 1991</strong>, which would increase the
                amounts for USDA&rsquo;s Farm Service Agency loan guarantees —
                an important tool for Farm Credit lenders working with
                beginning farmers or customers facing financial challenges.
              </li>
              <li>
                <strong>S.1217/H.R. 2518</strong>, which would expand Farm
                Credit&rsquo;s ability to lend to businesses that support the
                fishing and aquaculture industries.
              </li>
            </ul>

            <p>
              <strong>House Only:</strong>
            </p>

            <ul>
              <li>
                <strong>H.R. 6779 USDA Loan Modernization Act</strong>, which
                amends the Consolidated Farm and Rural Development Act to
                expand eligibility for direct loans to individuals or entity
                members that hold at least a 50 percent interest.
              </li>
              <li>
                <strong>H.R. 7426 USDA Express Loan Act</strong>, which
                simplifies the application process for real estate and
                operating loans up to $1 million, requiring the Secretary to
                notify lenders of approval or disapproval within five business
                days.
              </li>
            </ul>

            <p>
              <strong>Senate Only:</strong>
            </p>

            <ul>
              <li>
                Expanding access to equity capital investment for rural
                businesses by eliminating unnecessary restrictions on Rural
                Business Investment Companies (RBIC).
              </li>
              <li>
                Promoting U.S. ag exports by increasing the amount of export
                financing CoBank is allowed to provide.
              </li>
              <li>
                Clarifying CoBank&rsquo;s renewable and waste authority to
                lower operational and energy costs for customers.
              </li>
              <li>
                Improving the transparency and safety and soundness of the
                Federal Agricultural Mortgage Company (Farmer Mac).
              </li>
            </ul>

            <p>
              Currently, the FARM Home Loans Act, the Farm Credit Adjustment
              Act, and an enhanced preferred lender pilot program are not
              included in the draft.
            </p>

            <p>
              Overall, both proposals seek to modernize USDA lending while
              improving producer access to capital and strengthening the Farm
              Credit System.
            </p>

            <h2>Title 10: Horticulture Programs</h2>

            <p>
              Support for specialty crop producers remains a priority in both
              proposals. Both bills continue Specialty Crop Block Grants, the
              Local Agriculture Market Program, specialty crop market
              reporting, National Plant Diagnostic Network funding, and
              National Organic Program activities. These investments continue
              Congress&rsquo;s long-term trend of expanding farm bill support
              beyond traditional commodity agriculture.
            </p>

            <p>
              The Senate proposal expands organic certification cost-share,
              food safety education, bio-stimulant regulation, biotechnology
              policy coordination, and agricultural quarantine inspection
              funding.
            </p>

            <p>
              The House proposal places greater emphasis on hemp production,
              modernization of organic oversight and improved organic data
              collection.
            </p>

            <h2>Title 11: Crop Insurance Programs</h2>

            <p>
              The crop insurance title shows strong alignment between the two
              proposals. Both bills strengthen premium assistance for
              beginning farmers, improve Whole-Farm Revenue Protection, expand
              quality loss adjustment coverage, continue investments in
              research and development, update reimbursement rates, and
              reinforce program integrity.
            </p>

            <p>
              The Senate proposal includes additional changes to yield
              determinations and Federal Crop Insurance Corporation
              administration. It is noteworthy that the House proposal
              establishes a Specialty Crop Advisory Committee. This committee
              would give specialty crop producers a formal role in shaping
              federal crop insurance policy.
            </p>

            <h2>Major Policy Differences Outside the Core Farm Bill Titles</h2>

            <p>
              Though the differences between the House and Senate bills may be
              nuanced, it is worth noting that the House bill focuses more on
              program modernization and regulatory reform, where the Senate
              draft bill provides broader policy and programmatic expansions.
            </p>

            <p>
              Although the core producer titles are similar, a stark
              divergence between the two bills are several high-profile
              political issues that are completely omitted from the Senate
              proposal.
            </p>

            <p>
              Among the most notable differences:
            </p>

            <ul>
              <li>
                <em>SNAP reforms</em> — The House includes more significant
                changes to SNAP eligibility, administration, and spending than
                the Senate proposal.
              </li>
              <li>
                <em>Year-round E15</em> — The House incorporates language
                addressing nationwide year-round sales of E15 gasoline, while
                the Senate proposal does not.
              </li>
              <li>
                <em>California Proposition 12</em> — The House includes
                language addressing livestock production standards associated
                with Proposition 12. The Senate proposal omits those
                provisions.
              </li>
              <li>
                <em>Foreign ownership of agricultural land</em> — While both
                proposals address agricultural security, the House adopts
                broader restrictions on foreign ownership of farmland.
              </li>
              <li>
                <em>Regulatory reforms</em> — The House contains more expansive
                pesticide and environmental regulatory provisions than the
                Senate draft.
              </li>
            </ul>

            <p>
              These issues are among the most politically contentious
              components of the House bill and are expected to be points of
              contention if Congress proceeds to conference.
            </p>

            <h2>Looking Ahead</h2>

            <p>
              Despite their differences, the House and Senate proposals share
              far more common ground than previous farm bill debates. Both
              seek to strengthen the farm safety net, preserve conservation
              investments, modernize agricultural lending, expand specialty
              crop support, and reinforce crop insurance for producers facing
              higher costs and increasing risk.
            </p>

            <p>
              The principal differences lie less in agricultural policy than
              in broader political priorities, particularly those around the
              nutrition policy. The OBBB Act significantly altered the SNAP
              program by tying state financial responsibility to payment error
              rates. Beginning in FY 2028, states with error rates above 6%
              must pay between five and 15% of SNAP benefit costs, a departure
              from the program&rsquo;s previous structure where benefits were
              fully funded by the federal government. The OBBB Act also
              shifted administrative costs to the states by an additional 25%
              beginning in FY 2027. Critics of this program&rsquo;s changes
              are asking for a one-year extension, pushing the administrative
              cost shift until FY28 — allowing all states an additional year
              to adjust budgets.
            </p>

            <p>
              As we await a markup from the Senate Agriculture Committee, the
              challenge ahead will be preserving the bipartisan consensus
              around core farm programs while resolving the broader policy
              issues. It&rsquo;s this bipartisan consensus (or lack thereof)
              that has historically made completing a farm bill one of
              Congress&rsquo;s most difficult legislative undertakings.
            </p>

            <div className="contact-wrap">
              <Link href="/contact" className="primary-button">
                Contact Us Today!
              </Link>
            </div>
          </article>

          {/* ====================================================
              TAGS
              ==================================================== */}

          <div className="tags">
            <svg
              className="tag-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.41l9 9c.36.36.86.59 1.41.59.55 0 1.05-.23 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5 8 5.67 8 6.5 7.33 8 6.5 8z" />
            </svg>

            <span className="tag-label">Tags:</span>{" "}

            {TAGS.map(([label, slug], index) => (
              <span key={slug}>
                <Link href={`${BLOG_PATH}?tag=${slug}`}>{label}</Link>

                {index < TAGS.length - 1 && (
                  <span className="tag-separator">,</span>
                )}
              </span>
            ))}
          </div>

          {/* ====================================================
              AUTHOR + SHARE
              ==================================================== */}

          <section
            className="social-author-row"
            aria-label="Article author and sharing"
          >
            <div className="grey-box author-box">
              <img
                src="/images/homepage/DanielleCummins_web.jpg"
                alt="Professional portrait of Danielle Cummins"
                className="author-photo"
              />

              <div>
                <Link
                  href={`${AUTHORS_PATH}#Danielle-Cummins`}
                  className="author-name"
                >
                  Danielle Cummins
                </Link>

                <p className="author-role">
                  Legislative Affairs Officer
                </p>
              </div>
            </div>

            <div className="grey-box share-box">
              <div>
                <p className="share-label">Share this post on</p>

                <ul className="share-list">
                  <li>
                    <a
                      className="share-x"
                      href={`https://twitter.com/share?text=${encodeURIComponent(
                        TITLE
                      )}&url=${encodeURIComponent(ARTICLE_URL)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on X"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      className="share-facebook"
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        ARTICLE_URL
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on Facebook"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      className="share-linkedin"
                      href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
                        ARTICLE_URL
                      )}&title=${encodeURIComponent(TITLE)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on LinkedIn"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      className="share-email"
                      href={`mailto:?subject=${encodeURIComponent(
                        TITLE
                      )}&body=${encodeURIComponent(ARTICLE_URL)}`}
                      aria-label="Share by email"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* ======================================================
            YOU MIGHT ALSO LIKE
            ====================================================== */}

        <section className="related-wrap">
          <div className="related">
            <h2 className="related-title-main">You Might Also Like</h2>

            <div className="related-grid">
              {RELATED_ARTICLES.map((item) => (
                <article key={item.title} className="related-card">
                  <Link
                    href={item.categoryHref}
                    className="related-category"
                  >
                    {item.category}
                  </Link>

                  {item.href ? (
                    <Link href={item.href} className="related-title">
                      {item.title}
                      <span aria-hidden="true"> ›</span>
                    </Link>
                  ) : (
                    <span className="related-title">
                      {item.title}
                    </span>
                  )}

                  <p className="related-date">{item.date}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================
            MEET THE AUTHORS
            ====================================================== */}

        <section className="authors-cta">
          <div>
            <h2 className="authors-cta-title">Meet the Authors</h2>

            <p className="authors-cta-text">
              Connect with and discover our Today&apos;s Harvest blog authors
              and their broad range of financial and northeast agricultural
              expertise.
            </p>
          </div>

          <Link
            href={AUTHORS_PATH}
            className="primary-button authors-cta-button"
          >
            Meet the Authors
          </Link>
        </section>

        {/* ======================================================
            NEWSLETTER
            ====================================================== */}

        <section className="newsletter">
          <h2 className="newsletter-title">
            Sign up for our Today&apos;s Harvest Blog.
          </h2>

          <p className="newsletter-subhead">
            Get the latest blog articles delivered to your inbox.
          </p>

          <div className="newsletter-form-wrap">
            <form className="newsletter-form" action="#" method="post">
              <div className="newsletter-group">
                <label
                  htmlFor="farm-bill-newsletter-email"
                  className="newsletter-label"
                >
                  Enter your email*
                </label>

                <input
                  id="farm-bill-newsletter-email"
                  name="email"
                  type="email"
                  className="newsletter-email"
                  placeholder="email@address.com"
                  required
                />

                <div className="required">
                  *Required Field
                </div>
              </div>

              <button type="submit" className="signup-button">
                Sign Up
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

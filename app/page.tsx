"use client";

import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import WhyUsCarousel from "@/components/WhyUsCarousel";

const BLOG = [
  {
    tag: "Today's Harvest Blog",
    title:
      "Employee Spotlight: A Day in the Life of a Dairy Risk Management Advisor",
    date: "July 14, 2026",
    href: "/resources/blog",
    body: "Shifting dairy markets and late-day price updates are daily challenges for Dairy & Livestock Risk Management Senior Advisor Megan Clancy. Read on as Megan shares what a typical week looks like, why collaboration matters and how her work helps protect dairy farms across the Northeast for the long haul.",
  },
  {
    tag: "Today's Harvest Blog",
    title: "2026 Farm Bill Takes Shape: Comparing the House and Senate Proposals",
    date: "July 7, 2026",
    href: "/resources/blog",
  },
  {
    tag: "Today's Harvest Blog",
    title: "Tariff Relief Program Available for New York Producers",
    date: "July 1, 2026",
    href: "/resources/blog",
  },
  {
    tag: "Today's Harvest Blog",
    title:
      "A Smarter Safety Net: What the New USDA Payment Rules Mean for Your Farm",
    date: "June 30, 2026",
    href: "/resources/blog",
  },
];

const TRENDS = [
  {
    tag: "Reports",
    title:
      "United States Citizenship and Immigration Service Clears H-2A Path for Dairy Employers",
    date: "July 7, 2026",
    href: "/resources/trends",
    body: "A new USCIS policy is opening the door for dairy producers to access the H-2A temporary agricultural worker program, a workforce option that has long been out of reach for year-round dairy operations. This month’s Knowledge Exchange Partner discusses how the updated guidance could help dairies address labor shortages, support seasonal workforce planning and navigate new petition requirements moving forward. Republished with permission courtesy of Harris Beach Murtha Attorneys at Law.",
  },
  {
    tag: "Reports",
    title: "2025 Northeast Dairy Farm Summary & Mid-Year Outlook",
    date: "July 10, 2026",
    href: "/resources/trends",
  },
  {
    tag: "Reports",
    title:
      "Fuel, Fertilizer and Conflict in the Middle East: What to Know Now",
    date: "June 2, 2026",
    href: "/resources/trends",
  },
  {
    tag: "Reports",
    title: "Dairy Markets Show Positive Trends",
    date: "May 3, 2026",
    href: "/resources/trends",
  },
];

export default function Home() {
  const [feature, ...rest] = BLOG;
  const [tFeature, ...tRest] = TRENDS;

  return (
    <div className="homepage">
      {/* HERO */}
      <section className="hero-home">
        <div className="hero-copy">
          <div>
            <h1>Discover an ag lender that works for you.</h1>

            <p>
              Farm Funders is made in agriculture - a cooperative owned by the
              customers it serves. More than any other lender, we understand
              your unique credit needs and offer the specialized products,
              tools and services to help grow your success.
            </p>

            <div className="hero-actions">
              <Link href="/financing">Explore Financing</Link>
              <Link href="/services">View Services</Link>
            </div>
          </div>
        </div>

        <HeroCarousel className="hero-carousel" />
      </section>

      {/* PROMOTIONAL CARDS */}
      <section className="promo-grid">
        <article className="promo-card">
          <img
            src="/images/homepage/2026 AgViews Calendar Cover.jpg"
            alt="2026 Agricultural Views calendar cover image of a wheat field at sunset"
            loading="lazy"
          />

          <div>
            <h2>Calendar Photo Contest</h2>

            <p>
              Submit your photo(s) of modern agriculture, fishing and forestry
              by July 31 for a chance to win $100!
            </p>

            <Link href="/resources/Calendar-Photo-Contest">
              Learn more
            </Link>
          </div>
        </article>

        <article className="promo-card">
          <img
            src="/images/homepage/Appreciation Sign.png"
            alt="A sign reading welcome we appreciate you."
            loading="lazy"
          />

          <div>
            <h2>2026 Customer Appreciation Events</h2>

            <p>
              As a cooperative, our customers are at the core of everything we
              do. We hope you'll join us at an event this summer to show our
              appreciation.
            </p>

            <Link href="/resources/events">Learn more</Link>
          </div>
        </article>
      </section>

      {/* LATEST NEWS */}
      <section className="content-section light-green">
        <h2>Latest News &amp; Blog</h2>

        <div className="news-grid">
          <Link href={feature.href} className="featured-post">
            <img
              src="/images/homepage/Megan Clancy spotlight.jpg"
              alt="Picture of Megan Clancy, Farm Funders Risk Advisor standing in a dairy barn with black and white cows in the background"
              loading="lazy"
            />

            <div className="post-panel">
              <span>{feature.tag}</span>

              <h3>{feature.title}</h3>

              <p>{feature.body}</p>

              <time>{feature.date}</time>
            </div>
          </Link>

          <div className="post-list">
            {rest.map((post) => (
              <Link
                key={post.title}
                href={post.href}
                className="post-list-item"
              >
                <span>{post.tag}</span>

                <h3>{post.title}</h3>

                <time>{post.date}</time>
              </Link>
            ))}

            <Link href="/resources/blog" className="outline-button">
              View More
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="content-section why-section">
        <h2 className="center-heading">
          No other lender delivers more for your money
        </h2>

        <WhyUsCarousel />
      </section>

      {/* INDUSTRY TRENDS */}
      <section className="content-section light-green">
        <h2>Industry Trends &amp; Education</h2>

        <div className="news-grid">
          <Link href={tFeature.href} className="featured-post">
            <img
              src="/images/homepage/Dairy cows milking.jpg"
              alt="Cow milking facility and mechanized milking equipment"
              loading="lazy"
            />

            <div className="post-panel">
              <span>{tFeature.tag}</span>

              <h3>{tFeature.title}</h3>

              <p>{tFeature.body}</p>

              <time>{tFeature.date}</time>
            </div>
          </Link>

          <div className="post-list">
            {tRest.map((post) => (
              <Link
                key={post.title}
                href={post.href}
                className="post-list-item"
              >
                <span>{post.tag}</span>

                <h3>{post.title}</h3>

                <time>{post.date}</time>
              </Link>
            ))}

            <Link href="/resources/trends" className="outline-button">
              View More
            </Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter">
        <h2>Sign up for our Today&apos;s Harvest Blog.</h2>

        <p>Get the latest blog articles delivered to your inbox.</p>

        <form>
          <label htmlFor="home-email">Enter your email*</label>

          <div>
            <input
              id="home-email"
              type="email"
              required
              placeholder="email@address.com"
            />

            <button type="submit">Sign Up</button>
          </div>
        </form>
      </section>
    </div>
  );
}

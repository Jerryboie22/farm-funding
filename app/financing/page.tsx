import Link from "next/link";
import VideoHero from "@/components/VideoHero";

export const metadata = {
  title: "Financing | Farm Funding",
};

const CARDS = [
  {
    title: "Land Loans",
    body: "With no acreage limits, we offer competitive, long-term mortgages on various types of ag real estate.",
    href: "/financing/land-loans",
    image: "/images/financing/land-loans.jpg",
    alt: "New England pastureland with timber in background",
  },
  {
    title: "Rural Home Loans",
    body: "We specialize in loans and refinancing for country homes.",
    href: "/financing/rural-home-loans",
    image: "/images/financing/rural-home-loans.jpg",
    alt: "White country home with American flag",
  },
  {
    title: "Operating Loans",
    body: "We provide revolving operating lines to match the seasonality of your business.",
    href: "/financing/operating-loans",
    image: "/images/financing/operating-loans_springplanting.jpg",
    alt: "Farmer walking in corn field",
  },
  {
    title: "Equipment Financing",
    body: "We offer competitive rates and ag-friendly terms for all your equipment needs.",
    href: "/financing/equipment-financing",
    image: "/images/financing/equipment-financing_farmcredit.jpg",
    alt: "Forestry equipment loading logs",
  },
  {
    title: "Facility Loans",
    body: "We focus on facility loans for the agriculture, forestry and fishing industries.",
    href: "/financing/facility-loans",
    image: "/images/financing/Facility Loans_IMG_2734_edit.jpg",
    alt: "Inside a commercial greenhouse with rows of flowers in bloom",
  },
  {
    title: "Leases",
    body: "Leasing is available for ag buildings, construction and various types of production equipment.",
    href: "/financing/leases",
    image: "/images/financing/Leases_Solar.jpg",
    alt: "Solar panels that were leased to ag producers",
  },
];

const RELATED = [
  {
    tag: "Tax Talks",
    title: "Capital Construction Fund: A Fisherman's Guide to Building for the Future",
    date: "May 26, 2026",
  },
  {
    tag: "Press Releases",
    title: "Farm Funding Reports Strong 2025 Financial Results",
    date: "March 23, 2026",
  },
  {
    tag: "Business Tips and Tools",
    title: "Spring 2025 Financial Partner: Proactive Strategies for Business Success",
    date: "March 24, 2025",
  },
];

export default function FinancingPage() {
  return (
    <>
      {/* Hero */}
      <section className="w-full bg-cream">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 lg:gap-x-16 gap-y-8 px-[4%] pt-12 pb-14 md:pt-20 md:pb-16">
          <div className="md:col-span-6 flex flex-col justify-center">
            <h1 className="font-display text-4xl md:text-[52px] font-extrabold text-forest leading-tight">
              Loans &amp; Leases
            </h1>

            <p className="mt-6 max-w-2xl text-base text-charcoal/80 leading-relaxed">
              Farm Funding works for agriculture. Whether you&apos;re a rural
              home or landowner, a small family operation or a large
              agribusiness with diverse markets, we can provide the financial
              products, services and management support that you&apos;re
              looking for.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex w-fit px-6 py-3.5 bg-clay text-white text-sm font-bold rounded-sm hover:bg-clay-light transition-colors"
            >
              Contact My Office
            </Link>
          </div>

          <div className="md:col-span-6 flex items-center">
            <VideoHero
              youtubeId="dQd_UXkhuTU"
              src="/images/financing/SteinFarms770x622_2.png"
              alt="Two men and a woman at a dairy farm"
            />
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="w-full bg-cream px-[4%] py-12 md:py-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-forest max-w-4xl">
          Financing that meets your needs and helps grow your ag business.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center gap-x-6 gap-y-8 mt-8">
          {CARDS.map((card) => (
            <div key={card.href} className="flex">
              <Link
                href={card.href}
                className="group w-full bg-white border border-line px-2 pt-3 text-center flex flex-col hover:border-forest transition-colors"
              >
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-auto object-cover"
                />

                <h3 className="mt-5 font-display text-xl font-bold text-gold group-hover:text-forest transition-colors">
                  {card.title} ›
                </h3>

                <p className="px-4 pb-5 mt-3 text-sm text-charcoal/75 leading-relaxed">
                  {card.body}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Calculator */}
      <section className="w-full bg-forest-dark text-white text-center py-16 px-[4%]">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
          Can I afford the loan?
        </h2>

        <p className="mt-5 text-base text-white/85">
          Check out our interactive calculator to determine your payments and
          financing needs.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/resources/calculators"
            className="inline-flex px-7 py-3.5 border-2 border-white text-white text-sm font-bold rounded-sm hover:bg-white hover:text-forest-dark transition-colors"
          >
            Calculate Payments
          </Link>
        </div>
      </section>

      {/* Beginning Farmer Programs */}
      <section className="grid grid-cols-1 md:grid-cols-12 bg-cream px-[4%] py-10 md:py-16">
        <div className="md:col-span-7 flex flex-col justify-center md:pr-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-forest">
            Beginning Farmer Programs
          </h2>

          <p className="mt-5 text-base text-charcoal/80 leading-relaxed">
            Farm Funding works for the next generation by providing innovative
            products and services that contribute to their growth and success.
          </p>

          <Link
            href="/financing/beginning-farmer-programs"
            className="mt-7 inline-flex w-fit px-6 py-3.5 bg-clay text-white text-sm font-bold rounded-sm hover:bg-clay-light transition-colors"
          >
            Learn More
          </Link>
        </div>

        <div className="md:col-span-5 mt-8 md:mt-0">
          <img
            src="/images/financing/beginning-farmer.jpg"
            alt="Young farmer smiling in front of ag equipment"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="grid grid-cols-1 md:grid-cols-12 bg-white px-[4%] py-10 md:py-16">
        <div className="md:col-span-5">
          <img
            src="/images/financing/Industries.jpg"
            alt="Tractor spraying potato field"
            className="w-full h-auto"
          />
        </div>

        <div className="md:col-span-7 flex flex-col justify-center md:pl-12 mt-8 md:mt-0">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-forest">
            Industries We Serve
          </h2>

          <p className="mt-5 text-base text-charcoal/80 leading-relaxed">
            Farm Funding is dedicated to serving the agricultural credit and
            financial needs of those in the business of agriculture. Along with
            those in production agriculture and livestock, we serve nursery and
            greenhouse operators, forest products producers, fishermen,
            lobstermen, part-time growers, agribusiness owners and country
            homeowners.
          </p>

          <Link
            href="/industries"
            className="mt-7 inline-flex w-fit px-6 py-3.5 bg-clay text-white text-sm font-bold rounded-sm hover:bg-clay-light transition-colors"
          >
            Visit Industries
          </Link>
        </div>
      </section>

      {/* You Might Also Like */}
      <section className="w-full px-[4%] py-12 md:py-16 bg-cream">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-forest">
          You Might Also Like
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
          {RELATED.map((article) => (
            <div key={article.title}>
              <span className="inline-block bg-charcoal/60 text-white text-[11px] font-bold uppercase tracking-wide px-3 py-1.5">
                {article.tag}
              </span>

              <h3 className="mt-7 font-display text-lg font-bold text-gold leading-snug">
                {article.title} ›
              </h3>

              <p className="mt-7 text-xs text-charcoal/60 font-bold uppercase">
                {article.date}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full bg-forest-dark text-white py-16 px-[4%]">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Sign up for our Today&apos;s Harvest Blog.
          </h2>

          <p className="mt-4 text-base text-white/85">
            Get the latest blog articles delivered to your inbox.
          </p>

          <form className="mt-8 flex flex-col sm:flex-row gap-3 w-full max-w-md">
            <input
              type="email"
              required
              placeholder="email@address.com"
              className="flex-1 px-4 py-3.5 border border-line rounded-sm bg-white text-charcoal text-sm focus:outline-none"
            />

            <button
              type="submit"
              className="px-7 py-3.5 bg-clay text-white text-sm font-bold rounded-sm hover:bg-clay-light transition-colors"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
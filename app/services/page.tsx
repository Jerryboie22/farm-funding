import Link from "next/link";

export const metadata = {
  title: "Northeast Farm Financial Services | Farm Funding",
  description:
    "Whether you're a small family operation or large agribusiness, we can provide the financial services, services and management support to help you run your ag business.",
};

const SERVICES = [
  {
    image: "/images/services/Tax Planning  Prepistock1177540747.jpg",
    alt: "Close-up of female's hand typing on calculator and reviewing tax documents",
    title: "Tax Planning & Prep",
    href: "/services/tax-planning",
    body: "Our ag tax specialists can help develop the most beneficial plan for your business.",
  },
  {
    image: "/images/services/Recordkeeping _AdobeStock_14473564.jpg",
    alt: "Male farmer on laptop in front of cows",
    title: "Recordkeeping",
    href: "/services/recordkeeping",
    body: "Our ag accounting professionals help keep an eye on your bottom line.",
  },
  {
    image: "/images/services/Appraisals_AdobeStock_171103079.jpg",
    alt: "Large aerial view of Northeastern fields and pastures",
    title: "Appraisals",
    href: "/services/appraisals",
    body: "Our appraisers can help you determine the value of your assets.",
  },
  {
    image: "/images/services/Business Consulting _AdobeStock_143537446.jpg",
    alt: "Farmer and an ag consultant with a laptop walk in a cornfield at sunset",
    title: "Business Consulting",
    href: "/services/business-consulting",
    body: "A Farm Funding consultant can help you get the best return from your business.",
  },
  {
    image: "/images/services/Estate Planning_shutterstock_383350174.jpg",
    alt: "Horse grazing in front of red barn",
    title: "Estate Planning",
    href: "/services/estate-planning",
    body: "We can help you create an estate plan that provides certainty for your family.",
  },
  {
    image: "/images/services/Financial Benchmarking.jpg",
    alt: "Row of grapes growing in vineyard",
    title: "Financial Benchmarking",
    href: "/services/benchmarking",
    body: "Benchmarking is one of the most powerful tools for growing profit and planning your business.",
  },
  {
    image: "/images/services/Grant Writing_AdobeStock_163522442.jpg",
    alt: "Close-up of farmer in field reviewing data on his tablet",
    title: "Grant Writing",
    href: "/services/grant-writing",
    body: "Our grant writing expertise can help you grow, change or expand your enterprise.",
  },
  {
    image: "/images/services/FCC tile.png",
    alt: "Farmer standing in a corn field looking at a mobile device in his hands.",
    title: "Farm Credit Connect",
    href: "/services/farm-credit-connect",
    body: "Farm Funding Connect is your secure digital portal to do business with Farm Funding.",
  },
];

const RELATED = [
  {
    tag: "Crop Insurance",
    tagHref: "/about/newsroom-2?category=Crop%20Insurance",
    title:
      "USDA Risk Management Agency Announces Emergency Claim Procedures for New York Apple Growers Following Spring Freeze",
    date: "July 8, 2026",
    href: "/about/newsroom/press-releases/260708-emergency-claim-procedures-for-new-york-apple-growers",
  },
  {
    tag: "Business Tips and Tools",
    tagHref:
      "/resources/todays-harvest-blog?category=business-tips-and-tools",
    title:
      "A Smarter Safety Net: What the New USDA Payment Rules Mean for Your Farm",
    date: "June 30, 2026",
    href: "/resources/todays-harvest-blog/260630-new-usda-payment-rules-for-your-farm",
  },
  {
    tag: "Crop Insurance",
    tagHref: "/resources/todays-harvest-blog?category=Crop%20Insurance",
    title:
      "Understanding USDA's Base Acre Review Opportunity: What Farmers Need to Know",
    date: "June 9, 2026",
    href: "/resources/todays-harvest-blog/260609-cg-base-acre-review-for-farmers",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="w-full bg-grey">
        <div className="grid grid-cols-1 md:grid-cols-12 px-[4%] pb-[30px]">
          <div className="md:col-span-6 flex flex-col justify-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-[52px] font-bold text-forest leading-tight">
              Financial Services
            </h1>

            <p className="mt-5 max-w-3xl text-base md:text-lg text-charcoal/80 leading-relaxed">
              Whether you&apos;re a small family operation or large agribusiness
              with diverse markets, we can provide the financial products,
              services and management support that will help you run your ag
              business smarter.
            </p>

            <div className="pt-[30px]">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-clay text-white text-sm font-bold rounded-sm hover:bg-clay-dark transition-colors"
              >
                Contact My Office
              </Link>
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="relative pt-[30px]">
              <img
                src="/images/services/WrightsDairy770x622.png"
                className="block w-full h-auto"
                alt="Three women on farm"
                width={770}
                height={622}
              />

              <a
                href="https://www.youtube.com/watch?v=Q9D_advAsrk"
                target="_blank"
                rel="noreferrer"
                aria-label="Play Financial Services video"
                className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg"
              >
                <span
                  aria-hidden="true"
                  className="ml-1 border-y-[9px] border-y-transparent border-l-[14px] border-l-forest"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="w-full px-[4%]">
        <div className="py-12 md:py-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-forest">
            Our business services are designed to help save money and grow your
            success.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="flex pt-[30px] pb-[30px] px-2"
              >
                <div className="w-full">
                  <div className="pt-3">
                    <Link href={service.href}>
                      <img
                        src={service.image}
                        className="block w-full h-auto"
                        alt={service.alt}
                      />
                    </Link>
                  </div>

                  <Link
                    href={service.href}
                    className="block no-underline mt-5"
                  >
                    <div className="font-display text-xl md:text-2xl font-bold text-center text-charcoal leading-snug hover:text-clay transition-colors">
                      {service.title}{" "}
                      <span aria-hidden="true">›</span>
                    </div>
                  </Link>

                  <Link
                    href={service.href}
                    className="block no-underline"
                  >
                    <p className="pt-4 pb-5 text-base text-charcoal/80 leading-relaxed text-center">
                      {service.body}
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beginning Farmer Programs */}
      <section className="w-full bg-grey">
        <div className="grid grid-cols-1 md:grid-cols-12 px-[4%] py-12 md:py-16">
          <div className="md:col-span-7 flex flex-col justify-center md:pr-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-forest">
              Beginning Farmer Programs
            </h2>

            <p className="mt-5 text-base md:text-lg text-charcoal/80 leading-relaxed">
              The long-term strength of Northeast agriculture is dependent on
              individuals entering the industry. Farm Funders supports those
              who choose agriculture as a career by providing innovative
              products and services that contribute to their growth and
              success.
            </p>

            <div className="pt-[30px]">
              <Link
                href="/financing/beginning-farmer-programs"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-clay text-white text-sm font-bold rounded-sm hover:bg-clay-dark transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 mt-8 md:mt-0">
            <img
              src="/images/services/beginning-farmer.jpg"
              className="block w-full h-auto"
              alt="Young farmer smiling in front of ag equipment"
            />
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-12 px-[4%] py-12 md:py-16">
          <div className="md:col-span-5">
            <img
              src="/images/services/Industries.jpg"
              className="block w-full h-auto"
              alt="Tractor spraying potato field"
            />
          </div>

          <div className="md:col-span-7 flex flex-col justify-center mt-8 md:mt-0 md:pl-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-forest">
              Industries We Serve
            </h2>

            <p className="mt-5 text-base md:text-lg text-charcoal/80 leading-relaxed">
              Farm Funding serves the credit and financial needs of more than
              16,000 producers involved in farming, forestry, livestock,
              fishing and related agribusinesses. We also finance country
              homes.
            </p>

            <div className="pt-[30px]">
              <Link
                href="/industries"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-clay text-white text-sm font-bold rounded-sm hover:bg-clay-dark transition-colors"
              >
                View Industries
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* You Might Also Like */}
      <section className="w-full">
        <div className="px-[4%] py-[60px]">
          <h2 className="font-display m-0 text-[40px] leading-[48px] font-bold text-forest">
            You Might Also Like
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {RELATED.map((article) => (
              <div key={article.href} className="px-3">
                <div className="pt-[30px]">
                  <Link
                    href={article.tagHref}
                    className="text-xs font-bold uppercase text-grey-text no-underline"
                  >
                    {article.tag}
                  </Link>

                  <div className="pt-[30px]">
                    <Link
                      href={article.href}
                      className="font-display text-[22px] leading-[30px] font-bold text-gold no-underline hover:text-forest"
                    >
                      {article.title} <span aria-hidden="true">›</span>
                    </Link>
                  </div>

                  <p className="pt-[30px] m-0 text-xs leading-[18px] font-bold uppercase text-grey-text">
                    {article.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

           {/* NEWSLETTER */}
      <section className="w-full bg-[#4f832a] px-[4.05%] py-[70px] text-white lg:py-[80px]">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center text-center">
          <h2 className="m-0 text-[32px] font-bold leading-[40px] text-white lg:text-[40px] lg:leading-[50px]">
            Sign up for our Today&apos;s Harvest Blog.
          </h2>

          <p className="m-0 mt-[38px] text-[16px] leading-[26px] text-white lg:text-[18px] lg:leading-[28px]">
            Get the latest blog articles delivered to your inbox.
          </p>

          <form className="mt-[30px] flex w-full max-w-[560px] flex-col gap-[10px] sm:flex-row">
            <input
              type="email"
              required
              placeholder="email@address.com"
              aria-label="Email address"
              className="h-[51px] min-w-0 flex-1 rounded-[2px] border-0 bg-white px-[16px] text-[16px] text-[#231f20] outline-none"
            />

            <button
              type="submit"
              className="h-[51px] rounded-[4px] border-2 border-white bg-[#4f832a] px-[22px] text-[16px] font-bold text-white transition-colors hover:bg-white hover:text-[#496d83]"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
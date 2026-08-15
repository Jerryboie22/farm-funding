import Link from "next/link";

export const metadata = {
  title: "Agriculture Industries We Serve | Farm Funders",
};

const INDUSTRIES = [
  {
    title: "Cash Grain",
    href: "/industries/cash-grain",
    image: "/images/industries/Cash%20Grain_shutterstock_1153070285-1.jpg",
    alt: "Close-up of soybeans in sunlight",
  },
  {
    title: "Dairy",
    href: "/industries/dairy",
    image: "/images/industries/Dairy_Farm%20Image-1.jpg",
    alt: "A lineup of cows eating feed",
  },
  {
    title: "Livestock / Equine",
    href: "/industries/livestock-equine",
    image: "/images/industries/Equine_iStock-862128746.jpg",
    alt: "Horses graze in sunset with fall-color backdrop",
  },
  {
    title: "Timber / Forestry",
    href: "/industries/timber-forestry",
    image: "/images/industries/Timber_iStock_000018089726XLarge.jpg",
    alt: "Man trims tree trunk with chainsaw",
  },
  {
    title: "Fruit / Winery",
    href: "/industries/fruit-winery",
    image: "/images/industries/Fruit-Winery_shutterstock_1592342302.jpg",
    alt: "Red tractor parked between grape vineyard rows",
  },
  {
    title: "Vegetables",
    href: "/industries/vegetable-farmers",
    image: "/images/industries/Vegetables_shutterstock_1125187883.jpg",
    alt: "Close-up of rows of tomato plants",
  },
  {
    title: "Fishing / Aquatic",
    href: "/industries/fishing-aquatic",
    image: "/images/industries/Fishing_shutterstock_744093874.jpg",
    alt: "Two workers in waders look at bins of lobsters",
  },
  {
    title: "Green Industries",
    href: "/industries/greenhouse",
    image: "/images/industries/Green_AdobeStock_184545898.jpg",
    alt: "Two females stand cross-armed in greenhouse full of flowers",
  },
  {
    title: "Maple",
    href: "/industries/maple",
    image: "/images/industries/Maple_AdobeStock_242223490.jpg",
    alt: "Close-up of man\u2019s hands fixing a maple runner tube",
  },
];

function ChevronRightIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="inline-block ml-1">
      <path d="M3 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="w-full bg-[#f2f1ef]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 lg:gap-x-16 gap-y-8 px-[4%] pt-12 pb-14 md:pt-16 md:pb-16">
          <div className="md:col-span-6 flex flex-col justify-center">
            <h1 className="font-display text-4xl md:text-[52px] font-extrabold text-forest leading-tight">
              Industries We Serve
            </h1>

            <p className="mt-6 max-w-xl text-base text-charcoal/80 leading-relaxed">
              Farm Funders is dedicated to serving the credit and financial
              needs of industries specific to the Northeast.
            </p>

            <Link
              href="/contact-us"
              className="mt-8 inline-flex w-fit items-center gap-2 px-6 py-3.5 bg-[#496d83] text-white text-sm font-bold rounded-sm hover:bg-[#3d5b6d] transition-colors"
            >
              Contact My Office
            </Link>
          </div>

          <div className="md:col-span-6">
            <img
              src="/images/industries/Industries%20Hero_AdobeStock_214274310.jpg"
              alt="Ag father and son stand in front of dairy cows"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Industries grid */}
      <section className="w-full bg-white px-[4%] py-12 md:py-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-forest max-w-4xl">
          We are proud to serve Northeast agriculture and its related
          industries.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10 mt-10">
          {INDUSTRIES.map((industry) => (
            <Link
              key={industry.title}
              href={industry.href}
              className="group flex flex-col items-center text-center"
            >
              <img
                src={industry.image}
                alt={industry.alt}
                className="w-full h-40 object-cover"
              />
              <div className="mt-4 font-display text-base font-bold text-charcoal group-hover:text-forest transition-colors">
                {industry.title}
                <ChevronRightIcon />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Ag Financing & Services */}
      <section className="w-full bg-white px-[4%] py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-8 items-center">
          <div className="md:col-span-5">
            <img
              src="/images/industries/Ag%20Financing%20%20Servicesshutterstock1307440267.jpg"
              alt="Farmer hands using smartphone"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="md:col-span-7">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-forest">
              Ag Financing &amp; Services
            </h2>

            <p className="mt-4 max-w-xl text-base text-charcoal/80 leading-relaxed">
              Nobody delivers more products or expertise to help you grow and
              succeed.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/financing"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#496d83] text-white text-sm font-bold rounded-sm hover:bg-[#3d5b6d] transition-colors"
              >
                Explore Financing
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#496d83] text-white text-sm font-bold rounded-sm hover:bg-[#3d5b6d] transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Beginning Farmer Programs */}
      <section className="w-full bg-[#f2f1ef] px-[4%] py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-8 items-center">
          <div className="md:col-span-7">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-forest">
              Beginning Farmer Programs
            </h2>

            <p className="mt-4 max-w-xl text-base text-charcoal/80 leading-relaxed">
              The long-term strength of Northeast agriculture is dependent on
              individuals entering the industry. Farm Funders supports those
              who choose agriculture as a career by providing innovative
              products and services that contribute to their growth and
              success.
            </p>

            <Link
              href="/financing/beginning-farmer-programs"
              className="mt-8 inline-flex w-fit items-center gap-2 px-6 py-3.5 bg-[#496d83] text-white text-sm font-bold rounded-sm hover:bg-[#3d5b6d] transition-colors"
            >
              Learn More
            </Link>
          </div>

          <div className="md:col-span-5">
            <img
              src="/images/industries/Beginning%20Farmer%20Programs_Lilac%20Hedge_GenNext%202.jpg"
              alt="Man in T-shirt and backward hat leans on a tractor"
              className="w-full h-auto object-cover"
            />
          </div>
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

          <form className="mt-8 flex flex-col sm:flex-row gap-3 w-full max-w-md items-start">
            <div className="flex-1 text-left">
              <label htmlFor="email" className="block text-xs font-bold mb-1">
                Enter your email*
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="email@address.com"
                className="w-full px-4 py-3.5 border border-line rounded-sm bg-white text-charcoal text-sm focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="px-7 py-3.5 bg-[#496d83] text-white text-sm font-bold rounded-sm hover:bg-[#3d5b6d] transition-colors sm:mt-6"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
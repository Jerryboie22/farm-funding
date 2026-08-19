import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Crop Insurance Products | Farm Funders",
  description:
    "Learn about the different crop insurance policy types and which is best for your operation.",
};

const PRODUCTS = [
  {
    title: "Revenue Protection (RP)",
    description:
      "Guarantees revenue based on your yield history and market price, covering both a production loss and a drop in price.",
  },
  {
    title: "Yield Protection (YP)",
    description:
      "Protects against a shortfall in production caused by weather, disease, or other insurable events, regardless of price.",
  },
  {
    title: "Area Risk Protection",
    description:
      "County-level coverage that pays out when average yield or revenue in your area falls below a set threshold.",
  },
  {
    title: "Whole-Farm Revenue Protection",
    description:
      "A single policy covering all commodities on your farm, built for diversified or specialty operations.",
  },
];

export default function ProductsPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      {/* HERO */}
      <section className="w-full bg-forest">
        <div className="px-[24px] pt-[40px] pb-[32px] md:px-[67px] md:pt-[74px] md:pb-[52px]">
          <h1
            className="text-[32px] leading-[38px] text-white md:text-[50px] md:leading-[60px]"
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
          >
            Crop Insurance Products
          </h1>

          <p
            className="mt-[29px] max-w-full text-[17px] leading-[28px] text-white md:max-w-[1490px] md:text-[20px] md:leading-[34px]"
            style={{ fontFamily: "var(--font-barlow)", fontWeight: 500 }}
          >
            Crop insurance isn&apos;t one-size-fits-all. Here&apos;s a look at
            the main policy types, so you can talk through which fits your
            operation with a local specialist.
          </p>
        </div>
      </section>

      {/* IMAGE */}
      <section className="w-full flex justify-center">
        <div className="relative h-[260px] w-full md:h-[420px]">
          <Image
            src="/images/crop-insurance/Cash Grain_shutterstock_1153070285.jpg"
            alt="Close-up of soybeans in sunlight"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="w-full bg-white px-[24px] pt-[64px] md:px-[53px] md:pt-[108px]">
        <h2
          className="text-[32px] leading-[38px] text-forest md:text-[42px] md:leading-[51px]"
          style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
        >
          Policy Types
        </h2>

        <div className="mt-[31px] grid grid-cols-1 gap-[28px] md:grid-cols-2 md:gap-[30px]">
          {PRODUCTS.map((product) => (
            <div key={product.title} className="border border-[#d9d9d9] p-[24px]">
              <h3
                className="text-[22px] leading-[28px] text-[#231f20]"
                style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
              >
                {product.title}
              </h3>
              <p
                className="mt-[12px] text-[16px] leading-[24px] text-charcoal"
                style={{ fontFamily: "var(--font-barlow)", fontWeight: 500 }}
              >
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="w-full bg-white px-[24px] pt-[64px] pb-[64px] md:px-[95px] md:pt-[90px] md:pb-[130px]">
        <div className="flex flex-col gap-[24px] md:flex-row md:items-start md:justify-between md:gap-0">
          <div>
            <h2
              className="text-[32px] leading-[38px] text-forest md:text-[42px] md:leading-[51px]"
              style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
            >
              Not sure which policy fits?
            </h2>
            <p
              className="mt-[24px] text-[18px] leading-[26px] text-[#231f20] md:mt-[42px] md:text-[20px] md:leading-[30px]"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 500 }}
            >
              Talk it through with a local Crop Growers agent.
            </p>
          </div>

          <div className="md:pt-[8px]">
            <Link
              href="/crop-insurance/agent-finder"
              className="inline-flex h-[46px] min-w-[144px] items-center justify-center rounded-[4px] bg-clay px-[22px] text-[17px] leading-[24px] text-white transition hover:bg-clay-dark"
              style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
            >
              Find an Agent
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Meet Our Leadership | Farm Funding",
  description:
    "As a mission-driven financial cooperative, we are owned and governed by our customers. Meet our Board of Directors and senior officers.",
};

const sections = [
  {
    title: "Board of Directors",
    text: "As a financial cooperative, we are governed by a Board of Directors elected by their peers – people with active roles in production agriculture who understand the needs of our customers and who work for their success.",
    image: "/images/about/2025%20FCE%20Board.jpg",
    imageAlt: "Farm Funding 2025 Board of Directors",
    href: "/about/leadership/board-of-directors",
    label: "Meet Our Board",
    secondaryHref: "/about/leadership/board-of-directors/nominating-committee",
    secondaryLabel: "Learn About Board Service",
    imageFirstMobile: false,
  },
  {
    title: "Regional Advisory Committees",
    text: "Regional Advisory Committees are an important component of Farm Funding's governance and a critical source of grassroots feedback.",
    image:
      "/images/about/Who-We-Are_SpringPlanting_TheMillers_812_Featured-Content.jpg",
    imageAlt:
      "Farm Funding customer standing in a field during spring planting",
    href: "/about/leadership/regional-advisory-committees",
    label: "Learn More",
    imageFirstMobile: true,
  },
  {
    title: "Senior Officers",
    text: "Our executive team and Board of Directors work together to ensure Farm Funding remains a strong financial partner for Northeast agriculture, commercial fishing and forest products.",
    image: "/images/about/2025%20ELT.jpg",
    imageAlt: "Farm Funding 2025 Executive Leadership Team",
    href: "/about/leadership/senior-officers",
    label: "See Our Senior Officers",
    imageFirstMobile: false,
  },
  {
    title: "Code of Ethics",
    text: "Farm Funding employees and Directors follow the published Code of Ethics. This standard is met, in basic terms, by telling the truth and being honest.",
    image:
      "/images/about/Code-of-Ethics_iStock-1340002658_Featured-Content.jpg",
    imageAlt: "Farm family representing Farm Funding's commitment to ethics",
    href: "/about/leadership/code-of-ethics",
    label: "View Code of Ethics",
    imageFirstMobile: true,
  },
];

function ActionLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-[50px] items-center justify-center rounded-[2px] bg-clay px-[22px] py-[12px] text-center font-display text-[15px] font-bold leading-[20px] text-white transition-colors hover:bg-clay-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 sm:min-h-[52px] sm:px-[24px] sm:text-[16px]"
    >
      {children}
    </Link>
  );
}

export default function LeadershipPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      <section className="w-full bg-forest">
        <div className="mx-auto flex min-h-[236px] w-[91.8%] max-w-[1536px] flex-col justify-center py-[48px] sm:min-h-[260px] sm:py-[54px] md:py-[60px] lg:min-h-[280px] lg:py-[66px]">
          <h1 className="font-display text-[38px] font-bold leading-[1.08] tracking-[-0.4px] text-white sm:text-[44px] md:text-[48px] lg:text-[52px]">
            Leadership
          </h1>
          <p className="mt-[20px] max-w-[900px] font-sans text-[16px] leading-[1.6] text-cream sm:mt-[23px] sm:text-[17px] md:text-[18px] lg:text-[19px]">
            As a mission-driven financial cooperative, we are owned and
            governed by our customers. In addition, Regional Advisory
            Committees are made up of customers to provide important
            grassroots feedback.
          </p>
        </div>
      </section>

      <div className="mx-auto w-[91.8%] max-w-[1536px]">
        {sections.map((section, index) => {
          const imageFirstMobile = section.imageFirstMobile;

          return (
            <section
              key={section.title}
              className={`grid grid-cols-1 items-center gap-y-[34px] border-b border-[#e1e1e1] py-[52px] sm:gap-y-[42px] sm:py-[64px] md:py-[72px] lg:grid-cols-2 lg:gap-x-[8%] lg:gap-y-0 lg:py-[86px] xl:gap-x-[10%] ${
                index === 0 ? "lg:pt-[82px]" : ""
              }`}
            >
              <div
                className={`min-w-0 ${
                  imageFirstMobile ? "order-2 lg:order-2" : "order-1 lg:order-1"
                }`}
              >
                <h2 className="max-w-[650px] font-display text-[30px] font-bold leading-[1.18] tracking-[-0.2px] text-forest sm:text-[34px] md:text-[37px] lg:text-[40px]">
                  {section.title}
                </h2>
                <p className="mt-[18px] max-w-[620px] font-sans text-[16px] leading-[1.65] text-charcoal sm:mt-[21px] sm:text-[17px] sm:leading-[1.7] lg:mt-[24px] lg:text-[18px] lg:leading-[1.7]">
                  {section.text}
                </p>
                <div className="mt-[24px] flex w-full flex-col items-stretch gap-[12px] sm:mt-[28px] sm:flex-row sm:flex-wrap sm:items-center sm:gap-[14px]">
                  <ActionLink href={section.href}>{section.label}</ActionLink>
                  {section.secondaryHref && section.secondaryLabel ? (
                    <ActionLink href={section.secondaryHref}>
                      {section.secondaryLabel}
                    </ActionLink>
                  ) : null}
                </div>
              </div>

              <div
                className={`min-w-0 ${
                  imageFirstMobile ? "order-1 lg:order-1" : "order-2 lg:order-2"
                }`}
              >
                <div className="relative w-full overflow-hidden bg-[#eef1ed]">
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    width={1200}
                    height={900}
                    priority={index === 0}
                    sizes="(max-width: 1023px) 100vw, (max-width: 1536px) 41vw, 614px"
                    className="block h-auto max-h-[620px] w-full object-cover"
                  />
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="w-full bg-cream">
        <div className="mx-auto w-[91.8%] max-w-[1536px] py-[46px] sm:py-[54px] md:py-[62px]">
          <div className="flex flex-col gap-[22px] sm:gap-[26px] md:flex-row md:items-center md:justify-between md:gap-[40px]">
            <div className="min-w-0">
              <h2 className="font-display text-[29px] font-bold leading-[1.18] text-forest sm:text-[34px] md:text-[38px] lg:text-[40px]">
                Have Additional Questions?
              </h2>
              <p className="mt-[14px] font-sans text-[16px] leading-[1.6] text-charcoal sm:text-[17px]">
                Let&apos;s get in touch!
              </p>
            </div>
            <div className="shrink-0">
              <ActionLink href="/contact">Contact Us</ActionLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

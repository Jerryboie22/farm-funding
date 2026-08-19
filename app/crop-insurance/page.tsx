import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Crop Growers Crop & Livestock Insurance – Farm Funders",
  description:
    "Our Crop Growers team of insurance specialists understands Northeast agriculture. We can help protect your crop and livestock investment.",
};

const OVERVIEW_CARDS = [
  {
    title: "Crop Insurance Products",
    description:
      "Learn about the different policy types and which is best for you.",
    href: "/crop-insurance/products",
    imagePath:
      "/images/crop-insurance/Cash Grain_shutterstock_1153070285.jpg",
    imageAlt: "Close-up of soybeans in sunlight",
  },
  {
    title: "Dairy & Livestock Insurance",
    description: "Protect your dairy and livestock revenue.",
    href: "/crop-insurance/dairy-livestock",
    imagePath: "/images/crop-insurance/Dairy_Farm Image.jpg",
    imageAlt: "Dairy cattle in a barn",
  },
  {
    title: "Insurance Resources",
    description:
      "Find market prices, insurance providers and additional information.",
    href: "/crop-insurance/resources",
    imagePath: "/images/crop-insurance/Insurance-Resources.jpg",
    imageAlt: "Tractor working in a crop field",
  },
];

function ButtonLink({
  href,
  children,
  variant = "blue",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "blue" | "outline-white";
}) {
  const styles = {
    blue: [
      "border-[#496d83]",
      "bg-[#496d83]",
      "text-white",
      "hover:bg-[#3d5d70]",
    ].join(" "),
    "outline-white": [
      "border-white",
      "bg-transparent",
      "text-white",
      "hover:bg-white",
      "hover:text-[#4f832a]",
    ].join(" "),
  };

  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center justify-center",
        "rounded-[4px]",
        "border-2",
        "px-[20px] py-[11px]",
        "text-[16px] leading-[24px]",
        "font-bold",
        "transition-colors duration-200",
        styles[variant],
      ].join(" ")}
      style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
    >
      {children}
    </Link>
  );
}

export default function CropInsurancePage() {
  return (
    <main className="w-full overflow-x-hidden">

      {/* =========================================================
          HERO
          Matches the supplied Farm Funders screenshot:
          - very light grey/white background
          - left text
          - Crop Growers logo above heading
          - large image on right
          - generous horizontal spacing
      ========================================================= */}
      <section className="w-full bg-[#f8f8f8]">
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1630px]
            grid-cols-1
            lg:grid-cols-2
          "
        >
          {/* LEFT HERO CONTENT */}
          <div
            className="
              flex
              flex-col
              justify-center
              px-[30px]
              py-[55px]
              sm:px-[45px]
              sm:py-[65px]
              lg:px-[67px]
              lg:py-[36px]
            "
          >
            {/* =====================================================
                CROP GROWERS LOGO

                IMPORTANT:
                The source file is named "CG_White_Web3_1.png".
                Because the screenshot has the logo GREEN on a
                white background, the white logo is converted to
                the Crop Growers green using CSS filtering.
            ===================================================== */}
            <div className="mb-[28px] h-auto w-fit">
              <Image
                src="/images/crop-insurance/CG_White_Web3_1.png"
                alt="Crop Growers"
                width={320}
                height={80}
                priority
                unoptimized
                className="
                  block
                  h-auto
                  w-[215px]
                  sm:w-[230px]
                  lg:w-[240px]
                "
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(43%) sepia(37%) saturate(1000%) hue-rotate(52deg) brightness(90%) contrast(90%)",
                }}
              />
            </div>

            {/* HERO HEADING */}
            <h1
              className="
                max-w-[700px]
                text-[#4f832a]
                text-[40px]
                leading-[1.12]
                sm:text-[47px]
                lg:text-[52px]
                xl:text-[54px]
              "
              style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
            >
              Crop Insurance by Crop Growers
            </h1>

            {/* HERO DESCRIPTION */}
            <p
              className="
                mt-[32px]
                max-w-[700px]
                text-[#231f20]
                text-[17px]
                leading-[1.7]
                sm:text-[18px]
                sm:leading-[1.78]
              "
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 500 }}
            >
              Crop Growers is the crop insurance team at Farm Funders. That
              means along with knowing agriculture, we understand your
              financial risks and their impact on your operation. More than
              just protecting your crops and livestock, we work to protect
              your livelihood.
            </p>

            {/* FIND AN AGENT */}
            <div className="mt-[31px]">
              <ButtonLink href="/crop-insurance/agent-finder">
                Find an Agent
              </ButtonLink>
            </div>
          </div>

          {/* RIGHT HERO IMAGE */}
          <div
            className="
              relative
              h-[300px]
              w-full
              overflow-hidden
              sm:h-[380px]
              lg:h-[408px]
              lg:self-center
          "
          >
            <Image
              src="/images/crop-insurance/Crop  Livestock Insuranceshutterstock55253641.jpg"
              alt="Hands holding a young crop seedling"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              style={{
                objectPosition: "center center",
              }}
            />
          </div>
        </div>
      </section>

            {/* =========================================================
          RISK MANAGEMENT + CARDS
          Corrected against a full-resolution live screenshot:
          fluid width (~78px side padding, no fixed max-width cap),
          cards have a thin light-gray border, image ~200px tall
          at this width, ~30px gap between cards.
      ========================================================= */}
      <section className="w-full bg-[#ecf1e4] px-[15px] py-[40px] sm:px-[24px] sm:py-[60px] lg:px-[78px] lg:py-[70px]">
        <div className="mx-auto w-full">
          <h2
            className="max-w-[1600px] text-[26px] leading-[32px] font-medium text-[#4f832a] sm:text-[32px] sm:leading-[38px] lg:text-[48px] lg:leading-[58px]"
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
          >
            Our Crop Growers agents help you make the best risk management
            decisions to protect your operation and family&apos;s future.
          </h2>

          <div className="mt-[32px] grid grid-cols-1 gap-y-[32px] sm:mt-[45px] md:grid-cols-3 md:gap-x-[30px] md:gap-y-[30px]">
            {OVERVIEW_CARDS.map((card) => (
              <article
                key={card.href}
                className="flex flex-col border border-[#d9d9d9] bg-white text-center"
              >
                <div className="relative h-[170px] w-full overflow-hidden sm:h-[195px] lg:h-[200px]">
                  <Image
                    src={card.imagePath}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <div className="px-[24px] py-[24px] sm:px-[28px] sm:py-[28px]">
                  <Link
                    href={card.href}
                    className="inline-block text-[22px] leading-[30px] text-[#5a4400] hover:underline sm:text-[26px] sm:leading-[34px]"
                    style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
                  >
                    {card.title}&nbsp;›
                  </Link>

                  <p
                    className="mt-[14px] text-[16px] leading-[25.6px] text-[#231f20] sm:mt-[18px] sm:text-[18px] sm:leading-[28.8px]"
                    style={{ fontFamily: "var(--font-barlow)", fontWeight: 500 }}
                  >
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT CROP GROWERS
          Matches screenshot:
          solid Crop Growers green
          centered white heading
          centered white paragraph
          outlined white button
      ========================================================= */}
      <section className="w-full bg-[#4f832a]">
        <div
          className="
            mx-auto
            max-w-[1630px]
            px-[30px]
            py-[75px]
            text-center
            sm:px-[45px]
            sm:py-[90px]
            lg:px-[67px]
            lg:py-[108px]
          "
        >
          <h2
            className="
              text-[36px]
              leading-[1.2]
              text-white
              sm:text-[42px]
              lg:text-[44px]
            "
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
          >
            Want to talk to Crop Growers?
          </h2>

          <p
            className="
              mx-auto
              mt-[38px]
              max-w-[1100px]
              text-[17px]
              leading-[1.8]
              text-white
              sm:text-[18px]
            "
            style={{ fontFamily: "var(--font-barlow)", fontWeight: 500 }}
          >
            Not sure where to start? Let our team of crop insurance
            specialists answer any questions and find the coverage that fits
            your operation.
            <br />
            Contact the Crop Growers Service Center at 800-234-7012 or submit
            an email inquiry by clicking below.
          </p>

          <div className="mt-[38px] flex justify-center">
            <ButtonLink href="/contact" variant="outline-white">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* =========================================================
          BEGINNING / VETERAN FARMER BENEFITS
      ========================================================= */}
      <section className="w-full bg-white">
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1630px]
            grid-cols-1
            items-center
            gap-[40px]
            px-[30px]
            py-[70px]
            sm:px-[45px]
            sm:py-[80px]
            lg:grid-cols-2
            lg:gap-[70px]
            lg:px-[67px]
            lg:py-[95px]
          "
        >
          <div>
            <h2
              className="
                text-[30px]
                leading-[1.25]
                text-[#4f832a]
                sm:text-[36px]
              "
              style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
            >
              Beginning/Veteran Farmer &amp; Rancher Benefits
            </h2>

            <p
              className="
                mt-[22px]
                text-[17px]
                leading-[1.75]
                text-[#231f20]
                sm:text-[18px]
              "
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 500 }}
            >
              Beginning and veteran farmers are eligible for special rules
              and provisions under the federal crop insurance program. Some
              of the benefits include exemption from paying the
              administrative fee for catastrophic and additional coverage
              level policies, additional premium subsidy resulting in lower
              grower premium, and other policy adjustments. There are
              specific qualification requirements for each program.
            </p>

            <div className="mt-[28px]">
              <ButtonLink href="/resources/beginning-farmer-rancher-benefits">
                Learn More
              </ButtonLink>
            </div>
          </div>

          <div className="relative h-[280px] w-full overflow-hidden sm:h-[360px] lg:h-[400px]">
            <Image
              src="/images/crop-insurance/Beginning-Veteran-Farmer.jpg"
              alt="Young woman farmer in field during harvest"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          INDUSTRIES WE SERVE
      ========================================================= */}
      <section className="w-full bg-white">
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1630px]
            grid-cols-1
            items-center
            gap-[40px]
            px-[30px]
            pb-[85px]
            sm:px-[45px]
            lg:grid-cols-2
            lg:gap-[70px]
            lg:px-[67px]
            lg:pb-[100px]
          "
        >
          {/* IMAGE */}
          <div className="relative h-[260px] w-full overflow-hidden sm:h-[330px] lg:h-[340px]">
            <Image
              src="/images/crop-insurance/Industries_cran.jpg"
              alt="Cranberry bog during harvest"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* TEXT */}
          <div>
            <h2
              className="
                text-[30px]
                leading-[1.25]
                text-[#4f832a]
                sm:text-[36px]
              "
              style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
            >
              Industries We Serve
            </h2>

            <p
              className="
                mt-[22px]
                text-[17px]
                leading-[1.75]
                text-[#231f20]
                sm:text-[18px]
              "
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 500 }}
            >
              Crop Growers insurance works with crop producers, fruit and
              vegetable growers, dairy farmers, livestock producers and more.
            </p>

            <div className="mt-[28px]">
              <ButtonLink href="/industries">
                Visit Industries
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          NOTICE OF LOSS
      ========================================================= */}
      <section className="w-full bg-[#4f832a]">
        <div
          className="
            mx-auto
            max-w-[1630px]
            px-[30px]
            py-[75px]
            text-center
            sm:px-[45px]
            sm:py-[90px]
            lg:px-[67px]
            lg:py-[108px]
          "
        >
          <h2
            className="
              text-[34px]
              leading-[1.2]
              text-white
              sm:text-[40px]
              lg:text-[44px]
            "
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
          >
            File a Crop Insurance Notice of Loss
          </h2>

          <p
            className="
              mx-auto
              mt-[28px]
              max-w-[1100px]
              text-[17px]
              leading-[1.8]
              text-white
              sm:text-[18px]
            "
            style={{ fontFamily: "var(--font-barlow)", fontWeight: 500 }}
          >
            Crop Growers crop insurance policyholders may electronically
            submit a notice of loss. If an adjuster has not been in contact
            within two business days, call the Crop Growers Service Center at
            800-234-7012 immediately.
          </p>

          <div className="mt-[35px] flex justify-center">
            <ButtonLink
              href="/crop-insurance/notice-of-loss"
              variant="outline-white"
            >
              File a Notice of Loss
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}

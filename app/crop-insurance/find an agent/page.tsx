import Link from "next/link";

export default function FindAnAgentPage() {
  return (
    <main className="w-full bg-white">
      <section className="bg-[#4f832a]">
        <div className="mx-auto flex min-h-[345px] w-[91.8%] max-w-[1495px] items-center">
          <div className="w-full">
            <div className="mb-[25px]">
              <div className="inline-block font-serif text-[28px] font-bold leading-none tracking-[-1.5px] text-white underline decoration-[1px] underline-offset-[4px]">
                CROP GROWERS
                <sup className="relative -top-[10px] ml-[2px] text-[10px] no-underline">®</sup>
              </div>
            </div>

            <h1 className="m-0 font-display text-[42px] font-bold leading-[1.12] tracking-[-0.6px] text-white lg:text-[52px]">
              Crop Insurance Agent Finder
            </h1>

            <p className="mt-[34px] max-w-[1450px] text-[18px] font-semibold leading-[31px] text-white lg:text-[19px] lg:leading-[31px]">
              Thank you for your interest in Crop Growers insurance. You can reach our Crop Growers Service Center at 800-234-7012. Our local specialists are here to answer any questions and get you on the right track to the crop, dairy and livestock coverage you desire.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-[91.8%] max-w-[1495px] pb-[105px] pt-[108px]">
          <h2 className="m-0 font-display text-[38px] font-bold leading-[1.12] tracking-[-0.4px] text-[#4f832a] lg:text-[44px]">
            All Crop Insurance Agents
          </h2>

          <div className="mt-[34px]">
            <h3 className="m-0 font-display text-[27px] font-bold leading-[1.2] text-[#171b20] lg:text-[28px]">
              White River Junction
            </h3>

            <div className="mt-[10px] text-[18px] leading-[30px] text-[#59616a] lg:text-[19px] lg:leading-[30px]">
              <p className="m-0">52 FarmVu Dr.</p>
              <p className="m-0">White River Junction, VT 05001</p>
              <p className="m-0"><span className="font-semibold">Financial Services:</span> 917-563-6089</p>
              <p className="m-0"><span className="font-semibold">Email:</span> info@farm-funders.com</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef3e6]">
        <div className="mx-auto w-[91.8%] max-w-[1495px] py-[58px] lg:py-[55px]">
          <div className="grid grid-cols-1 items-center gap-[35px] lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="m-0 font-display text-[38px] font-bold leading-[1.12] text-[#4f832a] lg:text-[44px]">
                Have general questions?
              </h2>
              <p className="mt-[28px] m-0 text-[18px] leading-[30px] text-[#231f20] lg:text-[19px] lg:leading-[31px]">
                Let’s get in touch!
              </p>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-[3px] bg-[#52768a] px-[25px] py-[14px] text-[16px] font-bold text-white transition hover:bg-[#496d83]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
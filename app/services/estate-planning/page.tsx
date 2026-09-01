import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Estate Planning | Farm Funding",
  description: "Estate and farm succession planning for Northeast families.",
};

const faqs = [
  {
    q: "When should I begin estate planning?",
    a: "The earlier a family starts, the more time there is to prepare for retirement, develop successors and adjust the plan as circumstances change.",
  },
];

export default function EstatePlanningPage() {
  return (
    <main className="bg-white text-[#333]">
      <section className="grid md:grid-cols-2 min-h-[430px] bg-[#f3f0e8]">
        <div className="flex flex-col justify-center px-[7%] py-14 md:py-20">
          <h1 className="text-[#174b35] font-display text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.05]">Estate Planning</h1>
          <p className="mt-6 max-w-xl text-base md:text-lg leading-7">Estate planning can give your family a clear path for protecting assets, preparing the next generation and preserving the future of the business.</p>
          <Link href="/contact" className="mt-8 w-fit bg-[#b55b3c] px-7 py-4 text-white font-bold text-sm uppercase tracking-wide">Contact My Office</Link>
        </div>
        <div className="min-h-[320px] md:min-h-full">
          <img src="/images/services/Estate Planning_shutterstock_383350174.jpg" alt="Horse grazing in front of a red barn" className="h-full w-full object-cover" />
        </div>
      </section>

      <section className="px-[7%] py-16 md:py-20">
        <h2 className="text-[#174b35] font-display text-3xl md:text-4xl font-bold">You can trust Farm Funders for the estate planning you need.</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {[
            ["More expertise", "Farm families can work with experienced consultants who understand agricultural businesses and succession decisions."],
            ["We demystify the process", "A complicated transition can be broken into practical decisions that are easier for the family to understand."],
            ["We understand your needs", "Planning a legacy involves financial decisions as well as the emotions and relationships within a family."],
          ].map(([title, body]) => (
            <div key={title}>
              <h3 className="text-[#174b35] font-display text-2xl font-bold">{title}</h3>
              <p className="mt-4 leading-7 text-[#555]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f3f0e8] px-[7%] py-16 md:py-20">
        <h2 className="text-[#174b35] font-display text-3xl md:text-4xl font-bold">Why estate planning is important</h2>
        <ul className="mt-8 max-w-4xl grid gap-3 list-disc pl-6 leading-7 text-[#555]">
          <li>Direct assets toward the people and purposes you choose.</li>
          <li>Protect your family from avoidable financial and legal difficulties.</li>
          <li>Plan for a comfortable retirement.</li>
          <li>Prepare the next generation to take responsibility.</li>
          <li>Give the farm and your family greater certainty about the future.</li>
        </ul>
      </section>

      <section className="px-[7%] py-16 md:py-20">
        <h2 className="text-[#174b35] font-display text-3xl md:text-4xl font-bold">Family business transfers</h2>
        <div className="mt-7 max-w-4xl space-y-5 leading-7 text-[#555]">
          <p>We help families assess retirement needs while protecting the long-term viability of the business.</p>
          <p>Successor development can include Farm Funders programs such as GenerationNext, giving the next generation an opportunity to prepare for leadership.</p>
          <p>Continuity, management responsibilities and each family member’s role are important parts of a complete transition plan.</p>
        </div>
      </section>

      <section className="bg-[#f7f7f5] px-[7%] py-16 md:py-20">
        <h2 className="text-[#174b35] font-display text-3xl md:text-4xl font-bold">Estate Planning FAQs</h2>
        <div className="mt-8 max-w-5xl divide-y divide-[#d4d1c8] border-y border-[#d4d1c8]">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-8 text-lg md:text-xl font-bold">{faq.q}<span className="text-[#b55b3c] text-2xl transition-transform group-open:rotate-45">+</span></summary>
              <p className="pt-4 max-w-4xl leading-7 text-[#555]">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="px-[7%] py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl">
          <img src="/images/services/Estate Planning_shutterstock_383350174.jpg" alt="Farm estate planning" className="w-full aspect-[4/3] object-cover" />
          <div>
            <p className="text-[#b55b3c] font-bold uppercase tracking-wide text-sm">View From the Field</p>
            <h2 className="mt-3 text-[#174b35] font-display text-3xl md:text-4xl font-bold">Planning for the future</h2>
            <p className="mt-5 leading-7 text-[#555]">A thoughtful succession plan can make a complicated family transition easier to navigate and help protect the work built over generations.</p>
            <Link href="/contact" className="mt-7 inline-flex border-2 border-[#174b35] px-7 py-3.5 text-[#174b35] font-bold text-sm uppercase tracking-wide hover:bg-[#174b35] hover:text-white">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

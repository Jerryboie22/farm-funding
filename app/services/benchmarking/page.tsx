import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Financial Benchmarking | Farm Funding",
  description:
    "Financial benchmarking programs that help agricultural businesses compare performance and identify opportunities to improve profitability.",
};

const faqs = [
  ["Who participates in the benchmarking programs?", "Benchmarking programs are designed for successful and progressive owners of dairy, ag retail, winery and green industry businesses focused on achieving maximum results."],
  ["How do I report data?", "After year-end records are completed, participants provide the information needed to profile the business. A consultant can help collect and organize the required data."],
  ["What reports will I receive?", "Participants receive benchmark reports containing useful comparative financial, production and operational measures. Reporting varies by program."],
  ["What kind of information can I expect to gain?", "The results can help identify opportunities to control costs, improve efficiency, evaluate labor and compensation, compare performance and make expansion decisions."],
];

const questions = [
  "How can I decrease labor expenses?",
  "Is my employee compensation package competitive?",
  "How efficient is my staff?",
  "How does my farm or business measure up to other top producers?",
  "How do I know when – or if – it is time to expand my operation?",
  "I had a large drop in production last year. What happened?",
];

export default function BenchmarkingPage() {
  return (
    <main className="bg-white text-[#333]">
      <section className="grid min-h-[520px] lg:grid-cols-2">
        <div className="flex items-center bg-[#f3f0e8] px-6 py-16 sm:px-10 lg:px-[9%] lg:py-24">
          <div className="max-w-[610px]">
            <h1 className="font-display text-4xl font-bold leading-[1.06] text-[#174b35] sm:text-5xl lg:text-[58px]">
              Financial Benchmarking
            </h1>
            <p className="mt-7 max-w-[570px] text-base leading-7 text-[#4d4d4d] sm:text-lg">
              Benchmark programs provide an objective view of your operation by comparing financial and operational results with industry standards and successful producers.
            </p>
            <Link href="/contact" className="mt-9 inline-flex bg-[#b45b3d] px-7 py-4 text-sm font-bold uppercase tracking-[.04em] text-white transition hover:bg-[#91462e]">
              Contact My Office
            </Link>
          </div>
        </div>
        <div className="relative min-h-[340px] lg:min-h-full">
          <Image src="/images/services/Financial-Benchmarking.jpg" alt="Row of grapes growing in vineyard" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-[9%] lg:py-24">
        <h2 className="max-w-4xl font-display text-3xl font-bold leading-tight text-[#174b35] sm:text-4xl">
          Financial benchmarking delivers insights for profitability.
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3 lg:gap-16">
          {[
            ["Personalized service", "One-on-one assistance from a Farm Funding consultant who reviews the analysis and offers insights personalized to your business."],
            ["More expertise", "Gain useful information and insights together with access to a business consultant who can assist the financial growth of your business."],
            ["Comprehensive management review", "Benchmarking helps evaluate and improve the operational and financial management of your business."],
          ].map(([title, body]) => (
            <article key={title}>
              <h3 className="font-display text-2xl font-bold text-[#174b35]">{title}</h3>
              <p className="mt-4 leading-7 text-[#555]">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f3f0e8] px-6 py-16 sm:px-10 lg:px-[9%] lg:py-24">
        <h2 className="font-display text-3xl font-bold text-[#174b35] sm:text-4xl">We Offer the Following Benchmarking Services</h2>
        <div className="mt-12 grid max-w-6xl gap-8 md:grid-cols-2">
          <article className="bg-white p-8 sm:p-10">
            <div className="mb-5 text-3xl" aria-hidden>◉</div>
            <h3 className="font-display text-2xl font-bold text-[#174b35]">Dairy</h3>
            <p className="mt-4 leading-7 text-[#555]">The Dairy Benchmarks Program provides in-depth financial and production analyses and compares results with similar profitable farms in the program.</p>
            <Link href="/services/benchmarking/dairy" className="mt-6 inline-block font-bold uppercase tracking-wide text-[#b45b3d]">Learn More</Link>
          </article>
          <article className="bg-white p-8 sm:p-10">
            <div className="mb-5 text-3xl" aria-hidden>✣</div>
            <h3 className="font-display text-2xl font-bold text-[#174b35]">Winery</h3>
            <p className="mt-4 leading-7 text-[#555]">The Winery Benchmarks Program provides an in-depth financial and operational analysis that shows how your business compares with industry peers.</p>
            <Link href="/services/benchmarking/winery" className="mt-6 inline-block font-bold uppercase tracking-wide text-[#b45b3d]">Learn More</Link>
          </article>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-[9%] lg:py-24">
        <h2 className="font-display text-3xl font-bold text-[#174b35] sm:text-4xl">What Is Benchmarking</h2>
        <p className="mt-6 max-w-4xl leading-7 text-[#555]">Working with a Farm Funding consultant, together, you can use your business data to identify areas that are holding you back, recognize strengths, compare your operation with industry peers and develop an action plan.</p>
        <ul className="mt-7 max-w-4xl space-y-3 pl-6 leading-7 text-[#555] marker:text-[#b45b3d]">
          <li>Identify areas of your business that are holding you back.</li>
          <li>Identify strengths your business can lean on.</li>
          <li>Compare your business to industry peers.</li>
          <li>Develop an action plan based on your business&apos;s data.</li>
          <li>Identify ways to increase profitability, including controlling costs and gaining efficiencies.</li>
        </ul>
      </section>

      <section className="bg-[#f7f7f5] px-6 py-16 sm:px-10 lg:px-[9%] lg:py-24">
        <h2 className="font-display text-3xl font-bold text-[#174b35] sm:text-4xl">How Benchmarking Works</h2>
        <div className="mt-12 grid gap-12 md:grid-cols-3">
          {[
            ["Data collection", "A benchmark specialist works with you to compile data profiling many aspects of the business, including profitability, customer counts, employee compensation and benefits."],
            ["Data analysis", "Your results are compared with other operations of similar size, scope, profitability level and geographic area. Your individual results remain confidential."],
            ["Comprehensive seminar", "Targeted management topics, questions and discussion with other business operators help turn benchmark results into practical solutions."],
          ].map(([title, body], index) => (
            <article key={title}>
              <span className="text-sm font-bold text-[#b45b3d]">0{index + 1}</span>
              <h3 className="mt-3 font-display text-2xl font-bold text-[#174b35]">{title}</h3>
              <p className="mt-4 leading-7 text-[#555]">{body}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-12 border-t border-[#d6d3ca] pt-12 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-2xl font-bold text-[#174b35]">Benchmarks report</h3>
            <p className="mt-4 leading-7 text-[#555]">Dairy participants receive a personal benchmark report with comparative financial and operational information. Winery participants can select reporting suited to their business and level of participation.</p>
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold text-[#174b35]">Follow-up meeting</h3>
            <p className="mt-4 leading-7 text-[#555]">Following the seminar, a consultant reviews the personal benchmark results with you and helps develop a personalized action plan for improving the bottom line.</p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-display text-2xl font-bold text-[#174b35]">Program extras</h3>
          <p className="mt-4 max-w-4xl leading-7 text-[#555]">Participants can also benefit from networking opportunities, small-group meetings, webinars and access to an online community.</p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-[9%] lg:py-24">
        <h2 className="max-w-4xl font-display text-3xl font-bold text-[#174b35] sm:text-4xl">How do dairy farmers and winery business owners use these programs?</h2>
        <p className="mt-6 max-w-4xl leading-7 text-[#555]">Owners enter the program with questions about improving their businesses and use the results to make decisions based on meaningful comparisons.</p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {questions.map((question) => <li key={question} className="border-l-2 border-[#b45b3d] pl-4 leading-7 text-[#555]">{question}</li>)}
        </ul>
        <div className="mt-10">
          <h3 className="font-display text-2xl font-bold text-[#174b35]">Next step</h3>
          <p className="mt-3 leading-7 text-[#555]">To learn more about our benchmarking programs, contact your local office.</p>
          <Link href="/contact" className="mt-6 inline-flex bg-[#b45b3d] px-7 py-4 text-sm font-bold uppercase tracking-wide text-white">Contact My Office</Link>
        </div>
      </section>

      <section className="bg-[#f3f0e8] px-6 py-16 sm:px-10 lg:px-[9%] lg:py-24">
        <h2 className="font-display text-3xl font-bold text-[#174b35] sm:text-4xl">Benchmarking FAQs</h2>
        <div className="mt-8 max-w-5xl divide-y divide-[#d3d0c7] border-y border-[#d3d0c7]">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-bold text-[#333] sm:text-lg">
                <span>{question}</span><span className="text-2xl font-normal text-[#b45b3d] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-4xl pt-4 leading-7 text-[#555]">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-[9%] lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src="/images/services/Financial-Benchmarking.jpg" alt="Dairy farm benchmarking" fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[.08em] text-[#b45b3d]">View From the Field</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-[#174b35] sm:text-4xl">Farm Funders brings businesses to the next level.</h2>
            <p className="mt-5 leading-7 text-[#555]">Benchmarking gives owners a way to use their numbers, industry comparisons and expert guidance to make better-informed business decisions.</p>
            <Link href="/contact" className="mt-7 inline-flex border-2 border-[#174b35] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-[#174b35] transition hover:bg-[#174b35] hover:text-white">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

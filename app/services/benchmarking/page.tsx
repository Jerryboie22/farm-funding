import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financial Benchmarking | Farm Funding",
  description: "Financial benchmarking programs for Northeast agricultural businesses.",
};

const faqs = [
  {
    q: "Who participates in the benchmarking programs?",
    a: "The programs are designed for progressive agricultural and related businesses that want a clearer view of financial and operational performance.",
  },
  {
    q: "How do I report data?",
    a: "Your consultant works with you to assemble the financial and operating information needed for your selected benchmark program.",
  },
  {
    q: "What reports will I receive?",
    a: "Reports vary by program and can include comparative earnings, balance-sheet, cash-flow, expense, compensation, equipment and efficiency measures.",
  },
  {
    q: "What kind of information can I expect to gain?",
    a: "The analysis can highlight cost, labor, productivity, efficiency and expansion opportunities and help you prioritize improvements.",
  },
  {
    q: "Do you need to be a Farm Funders member?",
    a: "No. Benchmarking participation is available beyond Farm Funders lending customers, subject to the requirements of the selected program.",
  },
];

export default function BenchmarkingPage() {
  return (
    <main className="bg-white text-[#333]">
      <section className="grid md:grid-cols-2 min-h-[430px] bg-[#f3f0e8]">
        <div className="flex flex-col justify-center px-[7%] py-14 md:py-20">
          <h1 className="text-[#174b35] font-display text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.05]">
            Financial Benchmarking
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg leading-7">
            Benchmark your operation against relevant industry data and turn the numbers into practical management decisions.
          </p>
          <Link href="/contact" className="mt-8 w-fit bg-[#b55b3c] px-7 py-4 text-white font-bold text-sm uppercase tracking-wide hover:bg-[#93462d]">
            Contact My Office
          </Link>
        </div>
        <div className="min-h-[320px] md:min-h-full">
          <img src="/images/services/Financial Benchmarking.jpg" alt="Vineyard rows" className="h-full w-full object-cover" />
        </div>
      </section>

      <section className="px-[7%] py-16 md:py-20">
        <h2 className="max-w-4xl text-[#174b35] font-display text-3xl md:text-4xl font-bold">
          Financial benchmarking delivers insights for profitability.
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {[
            ["Personalized service", "Work one-on-one with a consultant who helps interpret your results and focus on your priorities."],
            ["More expertise", "Pair meaningful comparison data with agricultural business expertise and practical management guidance."],
            ["Comprehensive management review", "Use financial and operational measures to identify strengths, weaknesses and opportunities."],
          ].map(([title, body]) => (
            <div key={title}>
              <h3 className="text-[#174b35] font-display text-2xl font-bold">{title}</h3>
              <p className="mt-4 leading-7 text-[#555]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f3f0e8] px-[7%] py-16 md:py-20">
        <h2 className="text-[#174b35] font-display text-3xl md:text-4xl font-bold">
          We Offer the Following Benchmarking Services
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 max-w-5xl">
          <article className="bg-white p-8 md:p-10">
            <div className="text-4xl" aria-hidden>◉</div>
            <h3 className="mt-5 text-[#174b35] font-display text-2xl font-bold">Dairy</h3>
            <p className="mt-4 leading-7 text-[#555]">A detailed financial and production comparison helps dairy businesses understand performance against appropriate peer operations.</p>
          </article>
          <article className="bg-white p-8 md:p-10">
            <div className="text-4xl" aria-hidden>✣</div>
            <h3 className="mt-5 text-[#174b35] font-display text-2xl font-bold">Winery</h3>
            <p className="mt-4 leading-7 text-[#555]">Winery benchmarking provides financial and operational comparisons that help owners understand their position within the industry.</p>
          </article>
        </div>
      </section>

      <section className="px-[7%] py-16 md:py-20">
        <h2 className="text-[#174b35] font-display text-3xl md:text-4xl font-bold">What Is Benchmarking</h2>
        <p className="mt-6 max-w-4xl leading-7 text-[#555]">Working with a Farm Funders consultant, you can use your own operating information to identify strengths, uncover constraints, compare performance and build an action plan.</p>
        <ul className="mt-7 grid gap-3 max-w-4xl list-disc pl-6 leading-7 text-[#555]">
          <li>Identify areas that are holding the business back.</li>
          <li>Recognize strengths that can be developed further.</li>
          <li>Compare results with appropriate industry peers.</li>
          <li>Turn findings into practical management priorities.</li>
          <li>Identify opportunities to improve profitability and efficiency.</li>
        </ul>
      </section>

      <section className="bg-[#f7f7f5] px-[7%] py-16 md:py-20">
        <h2 className="text-[#174b35] font-display text-3xl md:text-4xl font-bold">How Benchmarking Works</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {["Data collection", "Data analysis", "Comprehensive seminar"].map((title, i) => (
            <article key={title}>
              <span className="text-[#b55b3c] font-bold text-sm">0{i + 1}</span>
              <h3 className="mt-3 text-[#174b35] font-display text-2xl font-bold">{title}</h3>
              <p className="mt-4 leading-7 text-[#555]">
                {i === 0 ? "Compile the financial and operational information needed to profile the business." : i === 1 ? "Compare results with appropriate operations while keeping individual business results confidential." : "Review targeted management topics, discuss results and exchange practical ideas with other operators."}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-12 border-t border-[#d8d5cc] pt-10">
          <h3 className="text-[#174b35] font-display text-2xl font-bold">Benchmarks report</h3>
          <p className="mt-4 max-w-4xl leading-7 text-[#555]">Participants receive a personal benchmark report. Available reporting depends on the program and can provide comparative financial, production and operational measures.</p>
        </div>
        <div className="mt-10">
          <h3 className="text-[#174b35] font-display text-2xl font-bold">Follow-up meeting</h3>
          <p className="mt-4 max-w-4xl leading-7 text-[#555]">A consultant reviews the results with you and helps translate the findings into practical business objectives and next steps.</p>
        </div>
      </section>

      <section className="px-[7%] py-16 md:py-20">
        <h2 className="text-[#174b35] font-display text-3xl md:text-4xl font-bold">How do dairy farmers and winery business owners use these programs?</h2>
        <p className="mt-6 max-w-4xl leading-7 text-[#555]">Owners use benchmark results to answer management questions about labor, compensation, efficiency, expansion, production and profitability.</p>
        <Link href="/contact" className="mt-8 inline-flex bg-[#b55b3c] px-7 py-4 text-white font-bold text-sm uppercase tracking-wide">Contact My Office</Link>
      </section>

      <section className="bg-[#f3f0e8] px-[7%] py-16 md:py-20">
        <h2 className="text-[#174b35] font-display text-3xl md:text-4xl font-bold">Benchmarking FAQs</h2>
        <div className="mt-8 max-w-5xl divide-y divide-[#d4d1c8] border-y border-[#d4d1c8]">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-8 text-lg md:text-xl font-bold text-[#333]">
                {faq.q}<span className="text-[#b55b3c] text-2xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-4xl pt-4 leading-7 text-[#555]">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="px-[7%] py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] items-center">
          <div>
            <img src="/images/services/Financial Benchmarking.jpg" alt="Agricultural benchmarking" className="w-full aspect-[4/3] object-cover" />
          </div>
          <div>
            <p className="text-[#b55b3c] font-bold uppercase tracking-wide text-sm">View From the Field</p>
            <h2 className="mt-3 text-[#174b35] font-display text-3xl md:text-4xl font-bold">Farm Funders brings businesses to the next level.</h2>
            <p className="mt-5 leading-7 text-[#555]">Benchmarking gives owners a practical way to understand where their operation stands and make decisions using more than instinct alone.</p>
            <Link href="/contact" className="mt-7 inline-flex border-2 border-[#174b35] px-7 py-3.5 text-[#174b35] font-bold text-sm uppercase tracking-wide hover:bg-[#174b35] hover:text-white">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

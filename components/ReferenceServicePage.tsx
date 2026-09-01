import Link from "next/link";

type ServiceSection = {
  title: string;
  body?: string;
  bullets?: string[];
};

type ServiceFaq = { q: string; a: string };

export type ReferenceServiceData = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  introTitle: string;
  highlights: { title: string; body: string }[];
  sections: ServiceSection[];
  faqs?: ServiceFaq[];
  related?: { label: string; title: string; href: string; date?: string }[];
};

export default function ReferenceServicePage({ data }: { data: ReferenceServiceData }) {
  return (
    <main>
      <section className="w-full bg-cream mt-8">
        <div className="grid grid-cols-1 md:grid-cols-12 px-[4%]">
          <div className="md:col-span-6 flex flex-col justify-center py-10 md:py-14 lg:py-16 md:pr-12 lg:pr-16">
            <h1 className="font-display text-4xl md:text-[52px] font-extrabold text-forest leading-tight">
              {data.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base text-charcoal/80 leading-relaxed">
              {data.description}
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex w-fit px-6 py-3.5 bg-clay text-white text-sm font-bold rounded-sm hover:bg-clay-dark transition-colors"
            >
              Contact My Office
            </Link>
          </div>
          <div className="md:col-span-6 min-h-[300px] md:min-h-[360px] lg:min-h-[400px]">
            <img
              src={data.image}
              alt={data.imageAlt}
              className="block w-full h-[300px] md:h-[360px] lg:h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="w-full px-[4%] py-12 md:py-16 lg:py-20">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-forest max-w-5xl">
          {data.introTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-10 mt-8">
          {data.highlights.map((item) => (
            <div key={item.title}>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-charcoal leading-snug">
                {item.title}
              </h3>
              <p className="mt-5 text-base text-charcoal/80 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {data.sections.map((section, index) => (
        <section
          key={section.title}
          className={`w-full px-[4%] py-12 md:py-16 ${index % 2 ? "bg-grey-bg" : "bg-white"}`}
        >
          <div className="max-w-6xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-forest">
              {section.title}
            </h2>
            {section.body && (
              <p className="mt-6 max-w-4xl text-base text-charcoal/80 leading-relaxed">
                {section.body}
              </p>
            )}
            {section.bullets && (
              <ul className="mt-6 max-w-4xl list-disc pl-6 space-y-3 text-base text-charcoal/80 leading-relaxed">
                {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            )}
          </div>
        </section>
      ))}

      <section className="w-full bg-forest-dark text-white text-center py-14 md:py-16 px-[4%]">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Ready to get started?</h2>
        <p className="mt-5 text-base text-white/85">Talk with a Farm Funding specialist about your operation and goals.</p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex px-7 py-3.5 border-2 border-white text-white text-sm font-bold rounded-sm hover:bg-white hover:text-forest-dark transition-colors"
          >
            Contact My Office
          </Link>
        </div>
      </section>

      {data.faqs?.length ? (
        <section className="w-full px-[4%] py-12 md:py-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-forest">{data.title} FAQs</h2>
          <div className="mt-8 max-w-5xl divide-y divide-line border-y border-line">
            {data.faqs.map((faq) => (
              <details key={faq.q} className="py-5 group">
                <summary className="cursor-pointer list-none font-display text-lg md:text-xl font-semibold text-charcoal flex items-center justify-between gap-6">
                  {faq.q}
                  <span className="text-clay text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 pr-8 text-base text-charcoal/75 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      ) : null}

      {data.related?.length ? (
        <section className="w-full px-[4%] py-12 md:py-16 bg-cream">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-forest">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
            {data.related.map((item) => (
              <article key={item.title}>
                <Link href={item.href} className="text-grey-text text-xs font-bold uppercase tracking-wide hover:text-clay">
                  {item.label}
                </Link>
                <h3 className="mt-6 font-display text-lg md:text-xl font-bold text-gold leading-snug">
                  <Link href={item.href} className="hover:text-forest">{item.title} <span aria-hidden>›</span></Link>
                </h3>
                {item.date && <p className="mt-6 text-xs text-grey-text font-bold uppercase">{item.date}</p>}
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}

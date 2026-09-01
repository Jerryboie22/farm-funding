import Link from "next/link";

type IndustryData = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  update?: { title: string; body: string; href?: string };
  services: string[];
  programs?: string[];
  related?: { title: string; href: string; date: string; label: string }[];
};

export default function ReferenceIndustryPage({ data }: { data: IndustryData }) {
  return (
    <main>
      <section className="w-full bg-cream mt-8">
        <div className="grid grid-cols-1 md:grid-cols-12 px-[4%]">
          <div className="md:col-span-6 flex flex-col justify-center py-10 md:py-14 lg:py-16 md:pr-12 lg:pr-16">
            <h1 className="font-display text-4xl md:text-[52px] font-extrabold text-forest leading-tight">{data.title}</h1>
            <p className="mt-5 max-w-2xl text-base text-charcoal/80 leading-relaxed">{data.description}</p>
            <Link href="/contact" className="mt-7 inline-flex w-fit px-6 py-3.5 bg-clay text-white text-sm font-bold rounded-sm hover:bg-clay-dark">Contact My Office</Link>
          </div>
          <div className="md:col-span-6">
            <img src={data.image} alt={data.imageAlt} className="block w-full h-[300px] md:h-[360px] lg:h-[400px] object-cover" />
          </div>
        </div>
      </section>

      {data.update && (
        <section className="px-[4%] py-10 md:py-12 bg-white">
          <div className="max-w-5xl border-l-4 border-clay pl-6">
            <p className="text-xs font-bold uppercase tracking-wide text-grey-text">Industry Update</p>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold text-forest">{data.update.title}</h2>
            <p className="mt-4 text-base text-charcoal/80 leading-relaxed">{data.update.body}</p>
            {data.update.href && <Link href={data.update.href} className="mt-4 inline-block text-sm font-bold text-clay hover:text-forest">Read Now →</Link>}
          </div>
        </section>
      )}

      <section className="w-full px-[4%] py-12 md:py-16 bg-grey-bg">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-forest">Financing &amp; Services We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 mt-8">
          {data.services.map((service) => (
            <article key={service}>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-charcoal">{service}</h3>
              <p className="mt-4 text-base text-charcoal/75 leading-relaxed">Our specialists understand the needs of {data.title.toLowerCase()} and can tailor financing, planning or risk-management support to your operation.</p>
            </article>
          ))}
        </div>
      </section>

      {data.programs?.length ? (
        <section className="w-full px-[4%] py-12 md:py-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-forest">Programs for Beginning &amp; Veteran Producers</h2>
          <p className="mt-5 max-w-4xl text-base text-charcoal/80 leading-relaxed">We support producers entering agriculture and help experienced operators evaluate programs that can strengthen the next stage of their business.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.programs.map((program) => <div key={program} className="border border-line bg-white p-6"><h3 className="font-display text-xl font-bold text-charcoal">{program}</h3><Link href="/financing/beginning-farmer-programs" className="mt-4 inline-block text-sm font-bold text-clay">Learn More →</Link></div>)}
          </div>
        </section>
      ) : null}

      {data.related?.length ? (
        <section className="w-full px-[4%] py-12 md:py-16 bg-cream">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-forest">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
            {data.related.map((item) => <article key={item.title}><Link href={item.href} className="text-grey-text text-xs font-bold uppercase tracking-wide hover:text-clay">{item.label}</Link><h3 className="mt-6 font-display text-lg md:text-xl font-bold text-gold leading-snug"><Link href={item.href} className="hover:text-forest">{item.title} <span aria-hidden>›</span></Link></h3><p className="mt-6 text-xs text-grey-text font-bold uppercase">{item.date}</p></article>)}
          </div>
        </section>
      ) : null}

      <section className="w-full bg-forest-dark text-white text-center py-14 px-[4%]">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Let&apos;s talk about your operation.</h2>
        <p className="mt-5 text-white/85">Our local team can help you find the right financing and services for your goals.</p>
        <Link href="/contact" className="mt-8 inline-flex px-7 py-3.5 border-2 border-white text-white text-sm font-bold rounded-sm hover:bg-white hover:text-forest-dark">Contact My Office</Link>
      </section>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";

type Section = {
  title: string;
  body?: string;
  bullets?: string[];
  image?: string;
  imageAlt?: string;
  links?: { label: string; href: string }[];
};

type Props = {
  title: string;
  intro: string;
  image?: string;
  imageAlt?: string;
  sections: Section[];
  cta?: string;
};

export default function ReferenceContentPage({ title, intro, image, imageAlt, sections, cta = "Have Additional Questions?" }: Props) {
  return (
    <main className="bg-white text-[#231f20]">
      <section className="bg-[#f8f8f8]">
        <div className="mx-auto grid max-w-[1632px] lg:grid-cols-2">
          <div className="flex items-center px-[5%] py-[58px] lg:px-[7%]">
            <div>
              <h1 className="font-['Montserrat-Bold'] text-[36px] leading-[1.2] text-[#4f832a] lg:text-[48px]">{title}</h1>
              <p className="mt-5 max-w-[650px] font-['Barlow-Medium'] text-[18px] leading-[1.6] lg:text-[21px]">{intro}</p>
              <Link href="/contact" className="mt-8 inline-flex min-h-[50px] items-center bg-[#496d83] px-6 font-['Montserrat-Bold'] text-[15px] text-white hover:bg-[#3a576a]">Contact My Office</Link>
            </div>
          </div>
          {image ? <div className="relative min-h-[300px] lg:min-h-[390px]"><Image src={image} alt={imageAlt || title} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /></div> : <div className="hidden lg:block bg-[#ecf1e4]" />}
        </div>
      </section>

      {sections.map((section, i) => (
        <section key={section.title} className={`${i % 2 ? "bg-[#f8f8f8]" : "bg-white"} px-[5%] py-[55px] lg:px-[8%]`}>
          <div className="mx-auto max-w-[1200px]">
            <div className="grid gap-9 lg:grid-cols-12 lg:items-start">
              <div className={section.image ? "lg:col-span-7" : "lg:col-span-12"}>
                <h2 className="font-['Montserrat-Bold'] text-[30px] leading-[1.25] text-[#4f832a] md:text-[38px]">{section.title}</h2>
                {section.body && <p className="mt-5 max-w-[900px] text-[17px] leading-[1.75] text-[#333]">{section.body}</p>}
                {section.bullets && <ul className="mt-5 space-y-3 pl-5 text-[17px] leading-[1.65] text-[#333]">{section.bullets.map((b) => <li key={b} className="list-disc">{b}</li>)}</ul>}
                {section.links && <div className="mt-6 flex flex-wrap gap-4">{section.links.map((l) => <Link key={l.href} href={l.href} className="font-['Montserrat-Bold'] text-[15px] text-[#496d83] hover:text-[#4f832a]">{l.label} ›</Link>)}</div>}
              </div>
              {section.image && <div className="relative min-h-[250px] lg:col-span-5"><Image src={section.image} alt={section.imageAlt || section.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" /></div>}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-white px-[5%] py-[60px]">
        <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-7 md:flex-row md:items-center">
          <div><h2 className="font-['Montserrat-Bold'] text-[34px] text-[#4f832a] md:text-[42px]">{cta}</h2><p className="mt-3 text-[17px]">Let&apos;s get in touch!</p></div>
          <Link href="/contact" className="inline-flex min-h-[50px] items-center justify-center bg-[#496d83] px-7 font-bold text-white hover:bg-[#3a576a]">Contact Us</Link>
        </div>
      </section>
    </main>
  );
}

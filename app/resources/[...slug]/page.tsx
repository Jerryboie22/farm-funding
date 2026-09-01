import type { Metadata } from "next";
import Link from "next/link";

const DATA: Record<string, { title: string; intro: string; image?: string; sections: { title: string; body: string }[] }> = {
  "farm-fresh-guide": { title: "Northeast Farm Fresh Guide", intro: "A guide to farm-fresh products, producers and agricultural resources across the Northeast.", image: "/images/homepage/1-orchard_adobestock_292882711.jpg", sections: [{ title: "Explore Northeast agriculture", body: "Use the guide to discover agricultural producers, local food resources and ways to connect with the region's farms." }] },
  "go-to-assist": { title: "Go To Assist", intro: "Get connected with practical assistance and resources for agricultural and rural business needs.", image: "/images/resources/farmer-smartphone.jpg", sections: [{ title: "Find the right resource", body: "Start with your question and use the available Farm Funding resources, specialists and tools to find the next step." }] },
  "Industry-Trends-and-Outlooks": { title: "Industry Trends & Outlooks", intro: "Agricultural market analysis, industry reports and outlooks for Northeast producers and related businesses.", image: "/images/homepage/Dairy cows milking.jpg", sections: [{ title: "Industry intelligence", body: "Review current reports and analysis covering markets, policy, production and the business conditions affecting agriculture." }] },
  "Northeast-Farm-Fresh-Guide.html": { title: "Northeast Farm Fresh Guide", intro: "A guide to farm-fresh products, producers and agricultural resources across the Northeast.", image: "/images/homepage/1-orchard_adobestock_292882711.jpg", sections: [{ title: "Explore Northeast agriculture", body: "Discover agricultural producers and local food resources throughout the region." }] },
  "Go-To-Assist.html": { title: "Go To Assist", intro: "Practical assistance and resources for agricultural and rural business needs.", image: "/images/resources/farmer-smartphone.jpg", sections: [{ title: "Find the right resource", body: "Use Farm Funding's resources and specialists to identify the right next step." }] },
};

function titleFromSlug(slug: string[]) {
  return slug.map((part) => part.replace(/\.html$/i, "").replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase())).join(" / ");
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = DATA[slug.join("/")];
  return { title: `${data?.title ?? titleFromSlug(slug)} | Farm Funding` };
}

export default async function ResourceCatchAllPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const key = slug.join("/");
  const data = DATA[key] ?? { title: titleFromSlug(slug), intro: "Explore Farm Funding resources, tools and information for Northeast agriculture.", sections: [{ title: "Explore resources", body: "Use the links below to continue exploring Farm Funding resources or contact your local office for assistance." }] };
  return <main>
    <section className="w-full bg-cream mt-8 px-[4%] py-14 md:py-20"><div className="max-w-6xl mx-auto"><p className="text-xs font-bold uppercase tracking-[0.16em] text-grey-text">Resources</p><h1 className="mt-3 font-display text-4xl md:text-[52px] font-extrabold text-forest">{data.title}</h1><p className="mt-5 max-w-3xl text-base md:text-lg text-charcoal/80 leading-relaxed">{data.intro}</p></div></section>
    {data.image && <div className="px-[4%] py-8"><img src={data.image} alt="" className="w-full max-h-[460px] object-cover" /></div>}
    <section className="px-[4%] py-12 md:py-16"><div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">{data.sections.map((section) => <article key={section.title} className="border-t-4 border-clay pt-5"><h2 className="font-display text-2xl md:text-3xl font-bold text-forest">{section.title}</h2><p className="mt-4 text-base text-charcoal/80 leading-relaxed">{section.body}</p></article>)}</div></section>
    <section className="bg-forest-dark text-white text-center px-[4%] py-14"><h2 className="font-display text-3xl font-bold text-white">Explore more Farm Funding resources</h2><div className="mt-7 flex flex-wrap justify-center gap-3"><Link href="/resources/blog" className="px-6 py-3 border-2 border-white text-white font-bold rounded-sm">Today&apos;s Harvest Blog</Link><Link href="/resources/trends" className="px-6 py-3 border-2 border-white text-white font-bold rounded-sm">Industry Trends</Link></div></section>
  </main>;
}

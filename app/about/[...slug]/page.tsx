import type { Metadata } from "next";
import Link from "next/link";

type PageData = { title: string; intro: string; sections: { title: string; body: string; bullets?: string[] }[]; image?: string };

const DATA: Record<string, PageData> = {
  "who-we-are/ceo-message": {
    title: "CEO Message",
    intro: "A message from Farm Funding leadership about our cooperative, our customers and our commitment to Northeast agriculture.",
    sections: [{ title: "Our commitment", body: "We remain focused on being a dependable, customer-owned financial partner for agriculture and rural communities." }, { title: "Looking ahead", body: "Our goal is to combine local relationships with the expertise, capital and services customers need as agriculture changes." }],
    image: "/images/about/Hero_female-farmer.jpg",
  },
  "who-we-are/patronage-dividends": {
    title: "Patronage Dividends",
    intro: "As a customer-owned cooperative, eligible customers may share in the association's earnings through patronage payments.",
    sections: [{ title: "Customer ownership", body: "The cooperative model connects the financial strength of the organization with the customers who use its products and services." }, { title: "How patronage works", body: "Patronage is based on eligible business with the cooperative and is subject to the association's financial and board-approved requirements." }],
    image: "/images/homepage/customer-owned-and-mission-driven.jpg",
  },
  "who-we-are/how-we-serve-northeast-agriculture": {
    title: "How We Serve Northeast Agriculture",
    intro: "Farm Funding serves agriculture across the Northeast with local relationships, specialized products and a broad set of financial services.",
    sections: [{ title: "Local knowledge", body: "Teams work close to the producers, businesses and communities they serve, bringing regional market knowledge into customer decisions." }, { title: "Specialized expertise", body: "Financing, insurance, consulting, recordkeeping and other services are designed around agricultural businesses rather than a one-size-fits-all lending model." }],
    image: "/images/about/Who-We-Are_SpringPlanting_TheMillers_812_Featured-Content.jpg",
  },
  "leadership/board-charter-responsibilities": { title: "Board Charter & Responsibilities", intro: "The Board of Directors provides governance and oversight on behalf of the cooperative's customer-owners.", sections: [{ title: "Board responsibilities", body: "The board oversees strategy, financial stewardship, risk and the long-term interests of the cooperative and its customers." }] },
  "leadership/nominating-committee-director-candidate-nominations": { title: "Nominating Committee & Director Candidate Nominations", intro: "Learn how director candidates are identified and how the cooperative's customer-owners participate in the election process.", sections: [{ title: "A customer-owned governance model", body: "The nomination process is designed to support a board that reflects the industries, regions and customers served by the cooperative." }] },
  "leadership/nominating-committee-director-candidate-nominations/the-value-of-board-service": { title: "The Value of Board Service", intro: "Board service gives customer-owners an opportunity to contribute industry knowledge and help guide the cooperative.", sections: [{ title: "Serve your cooperative", body: "Directors bring practical agricultural and business perspectives to governance and long-term strategy." }] },
  "leadership/young-beginning-small-veteran-board-advisor": { title: "Young, Beginning, Small, Veteran Board Advisor", intro: "A board advisory opportunity designed to bring emerging producer perspectives into cooperative governance.", sections: [{ title: "New voices in agriculture", body: "The advisory role helps ensure younger, beginning, small and veteran producers have a meaningful perspective in conversations about the future." }] },
  "leadership/senior-officers": { title: "Senior Officers", intro: "Meet the senior officers responsible for leading the cooperative and executing its strategy.", sections: [{ title: "Leadership", body: "Our leadership team brings experience across agricultural finance, risk, operations and customer service." }], image: "/images/about/2025 ELT.jpg" },
  "leadership/regional-advisory-committees": { title: "Regional Advisory Committees", intro: "Regional advisory committees bring local agricultural knowledge and customer perspectives into the cooperative.", sections: [{ title: "Local perspective", body: "Committee members help leadership understand regional conditions, opportunities and challenges facing agriculture." }] },
  "leadership/code-of-ethics": { title: "Code of Ethics", intro: "Farm Funding's ethical standards guide how employees, directors and representatives conduct business.", sections: [{ title: "Integrity and accountability", body: "Our standards emphasize responsible conduct, confidentiality, fairness and stewardship of customer and cooperative interests." }], image: "/images/about/Code-of-Ethics_iStock-1340002658_Featured-Content.jpg" },
  "cooperative-involvement": { title: "Cooperative Involvement", intro: "Farm Funding participates in agricultural and cooperative organizations that strengthen Northeast communities and the industries we serve.", sections: [{ title: "Supporting agriculture", body: "Our involvement extends beyond lending through education, community partnerships, industry organizations and cooperative initiatives." }] },
  "newsroom": { title: "Newsroom", intro: "Find Farm Funding news, announcements and stories from across the Northeast.", sections: [{ title: "Latest news", body: "Use the newsroom to follow organizational updates, community announcements and other news from Farm Funding." }], image: "/images/about/Newsroom_Farmer_Overview-Card.jpg" },
  "newsroom/financial-partner-magazine": { title: "Financial Partner Magazine", intro: "Explore stories, insights and perspectives from Northeast agriculture and the Farm Funding community.", sections: [{ title: "Agriculture in focus", body: "The magazine brings together customer stories, industry perspectives and information relevant to agricultural businesses." }] },
  "newsroom/press-releases": { title: "Press Releases", intro: "Official Farm Funding announcements and organizational news.", sections: [{ title: "News and announcements", body: "Review recent releases and updates from Farm Funding." }] },
  "financial-reports": { title: "Financial Reports", intro: "Financial reports provide transparency into the cooperative's performance and stewardship.", sections: [{ title: "Financial information", body: "Explore annual and periodic financial information published by Farm Funding." }], image: "/images/about/Financial-Reports_Budgets2017_Overview-Card.jpg" },
  "community-support": { title: "Community Support", intro: "Farm Funding invests in Northeast communities through grants, scholarships, agricultural education and public-policy engagement.", sections: [{ title: "Grants and awards", body: "Programs support rural communities, agricultural organizations and initiatives that improve quality of life." }, { title: "Scholarships", body: "Scholarship programs support students and educators connected to agriculture and rural communities." }, { title: "Public policy", body: "We engage on issues that affect the future of Northeast agriculture and rural communities." }], image: "/images/about/Community-Support_Volunteer-talks-to-large-crowd.jpg" },
  "community-support/grants-and-awards": { title: "Grants and Awards", intro: "Community grant programs support organizations and projects that strengthen Northeast rural communities.", sections: [{ title: "Current opportunities", body: "Review program requirements, deadlines and eligibility before applying." }] },
  "community-support/grants-and-awards/agenhancement-grants": { title: "AgEnhancement Grants", intro: "A grant program supporting projects that benefit agriculture and agricultural communities.", sections: [{ title: "Program focus", body: "Eligible projects can support agricultural education, community development and initiatives that strengthen the region's agricultural future." }] },
  "community-support/grants-and-awards/farmers-market-grants": { title: "Farmers Market Grants", intro: "Support for farmers markets and projects that improve local food access and agricultural communities.", sections: [{ title: "Program focus", body: "Funding can help eligible organizations improve market infrastructure, outreach and access to locally produced food." }] },
  "community-support/grants-and-awards/food-access-infrastructure-initiative-grant": { title: "Food Access Infrastructure Initiative Grant", intro: "Support for infrastructure that improves food access in Northeast communities.", sections: [{ title: "Program focus", body: "The initiative is intended to strengthen local food systems and the infrastructure connecting producers and communities." }] },
  "community-support/grants-and-awards/lipinski-rural-initiatives-award": { title: "Lipinski Rural Initiatives Award", intro: "Recognition and support for initiatives that make a meaningful difference in rural communities.", sections: [{ title: "Rural impact", body: "The award highlights community leadership and projects that contribute to a stronger rural Northeast." }] },
  "community-support/scholarships": { title: "Scholarships", intro: "Scholarship opportunities support agricultural education and the next generation of Northeast agricultural leaders.", sections: [{ title: "Investing in education", body: "Scholarship programs help students pursue education and careers connected to agriculture and rural communities." }] },
  "community-support/scholarships/higher-education-scholarship-program": { title: "Higher Education Scholarship Program", intro: "Scholarship support for students pursuing higher education with an agricultural connection.", sections: [{ title: "Eligibility", body: "Review current program requirements and application instructions before submitting materials." }] },
  "community-support/scholarships/ffa-sae-scholarships": { title: "FFA SAE Scholarships", intro: "Scholarship support for students whose supervised agricultural experiences demonstrate commitment to agriculture.", sections: [{ title: "Future agricultural leaders", body: "The program encourages students to continue developing agricultural knowledge, leadership and practical experience." }] },
  "community-support/scholarships/ag-educator-scholarships": { title: "Ag Educator Scholarships", intro: "Support for educators investing in agricultural education and the future of the industry.", sections: [{ title: "Supporting educators", body: "Scholarship opportunities help agricultural educators build skills and bring stronger learning experiences to students." }] },
  "community-support/public-policy": { title: "Public Policy", intro: "Farm Funding engages on public-policy issues that affect agriculture, rural communities and the cooperative's customer-owners.", sections: [{ title: "Advocating for agriculture", body: "We monitor policy developments and participate in constructive conversations about the future of Northeast agriculture." }] },
  "information-security": { title: "Information Security", intro: "Protecting customer information and maintaining secure systems are essential to Farm Funding's commitment to its customer-owners.", sections: [{ title: "Security and privacy", body: "We use administrative, technical and physical safeguards designed to protect information and support reliable digital services." }] },
  "careers/benefits": { title: "Benefits", intro: "Farm Funding offers a benefits program designed to support employees and their families.", sections: [{ title: "Employee benefits", body: "Benefits vary by role and eligibility and may include health, retirement, paid time off and other employee programs." }], image: "/images/about/Careers_Overview-Card.jpg" },
};

function titleFromSlug(slug: string[]) {
  return slug.map((part) => part.replace(/\.html$/i, "").replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase())).join(" / ");
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = DATA[slug.join("/")];
  return { title: `${data?.title ?? titleFromSlug(slug)} | Farm Funding` };
}

export default async function AboutCatchAllPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const key = slug.join("/");
  const data = DATA[key] ?? {
    title: titleFromSlug(slug),
    intro: "Explore this Farm Funding resource and learn how it supports agriculture, customers and Northeast communities.",
    sections: [{ title: "Learn more", body: "Contact your local Farm Funding office for current details, eligibility and next steps." }],
  };
  return (
    <main>
      <section className="w-full bg-cream mt-8 px-[4%] py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-grey-text">About</p>
          <h1 className="mt-3 font-display text-4xl md:text-[52px] font-extrabold text-forest leading-tight">{data.title}</h1>
          <p className="mt-5 max-w-3xl text-base md:text-lg text-charcoal/80 leading-relaxed">{data.intro}</p>
        </div>
      </section>
      {data.image && <div className="px-[4%] py-8"><img src={data.image} alt="" className="w-full max-h-[480px] object-cover" /></div>}
      <section className="px-[4%] py-10 md:py-16">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
          {data.sections.map((section) => <article key={section.title} className="border-t-4 border-clay pt-5"><h2 className="font-display text-2xl md:text-3xl font-bold text-forest">{section.title}</h2><p className="mt-4 text-base text-charcoal/80 leading-relaxed">{section.body}</p>{section.bullets && <ul className="mt-4 list-disc pl-6 space-y-2 text-base text-charcoal/80">{section.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}</article>)}
        </div>
      </section>
      <section className="bg-forest-dark text-white text-center px-[4%] py-14"><h2 className="font-display text-3xl font-bold text-white">Have additional questions?</h2><Link href="/contact" className="mt-7 inline-flex px-7 py-3.5 border-2 border-white text-white font-bold rounded-sm hover:bg-white hover:text-forest-dark">Contact Us</Link></section>
    </main>
  );
}

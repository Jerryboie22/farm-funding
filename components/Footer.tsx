import Link from "next/link";

const COLUMNS = [
  {
    title: "Financing",
    links: [
      ["Land Loans", "/financing/land-loans"], ["Rural Home Loans", "/financing/rural-home-loans"], ["Operating Loans", "/financing/operating-loans"], ["Facility Loans", "/financing/facility-loans"], ["Equipment Financing", "/financing/equipment-financing"], ["Leases", "/financing/leases"], ["Beginning Farmer Programs", "/financing/beginning-farmer-programs"],
    ],
  },
  {
    title: "Services",
    links: [
      ["Tax Planning and Prep", "/services/tax-planning"], ["Recordkeeping", "/services/recordkeeping"], ["Appraisals", "/services/appraisals"], ["Business Consulting", "/services/business-consulting"], ["Financial Benchmarking", "/services/benchmarking"], ["Estate Planning", "/services/estate-planning"], ["Grant Writing", "/services/grant-writing"], ["Farm Credit Connect", "/services/farm-credit-connect"],
    ],
  },
  {
    title: "Crop Insurance",
    links: [
      ["Crop Insurance Products", "/crop-insurance/products"], ["Dairy & Livestock Insurance Products", "/crop-insurance/dairy-livestock"], ["Insurance Resources", "/crop-insurance/resources"], ["Crop Insurance Agent Finder", "/crop-insurance/agent-finder"], ["File Notice of Loss", "/crop-insurance/notice-of-loss"], ["Non-Discrimination Statement", "/en/Non-Discrimination-Statement.html"],
    ],
  },
  {
    title: "Industries",
    links: [
      ["Cash Grain", "/industries/cash-grain"], ["Dairy", "/industries/dairy"], ["Livestock/Equine", "/industries/livestock-equine"], ["Timber/Forestry", "/industries/timber-forestry"], ["Fruit/Winery", "/industries/fruit-winery"], ["Vegetables", "/industries/vegetables"], ["Fishing/Aquatic", "/industries/fishing-aquatic"], ["Greenhouse/Nursery", "/industries/greenhouse-nursery"], ["Maple", "/industries/maple"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Today's Harvest Blog", "/resources/blog"], ["Industry Trends & Outlooks", "/resources/trends"], ["Events & Webinars", "/resources/events"], ["Calculators", "/resources/calculators"], ["DTN Markets & Weather", "/resources/markets-weather"], ["Northeast Farm Fresh Guide", "/resources/farm-fresh-guide"], ["Calendar Photo Contest", "/resources/photo-contest"], ["Go To Assist", "/resources/go-to-assist"],
    ],
  },
  {
    title: "About",
    links: [
      ["Who We Are", "/about/who-we-are"], ["Leadership", "/about/leadership"], ["Cooperative Involvement", "/about/cooperative-involvement"], ["Newsroom", "/about/newsroom"], ["Financial Reports", "/about/financial-reports"], ["Community Support", "/about/community-support"], ["Information Security", "/about/information-security"], ["Careers", "/about/careers"],
    ],
  },
];

const SOCIAL = [
  { label: "En Español", href: "/es", icon: <span className="inline-block h-3 w-4 bg-[#c60b1e] relative overflow-hidden"><span className="absolute inset-x-0 top-1/4 h-1/2 bg-[#ffc400]" /></span> },
  { label: "X (formerly Twitter)", href: "https://x.com", icon: <span aria-hidden>𝕏</span> },
  { label: "Facebook", href: "https://facebook.com", icon: <span aria-hidden>f</span> },
  { label: "YouTube", href: "https://youtube.com", icon: <span aria-hidden>▶</span> },
  { label: "Linked In", href: "https://linkedin.com", icon: <span aria-hidden>in</span> },
  { label: "Instagram", href: "https://instagram.com", icon: <span aria-hidden>◎</span> },
];

const LEGAL_LINKS: [string, string][] = [
  ["SiteMap", "/en/Sitemap.html"], ["Privacy Statement", "/en/Privacy-Statement.html"], ["Equal Opportunity & Legal", "/en/Equal-Opportunity-and-Legal.html"], ["Data Rights for California Residents", "/en/Data-Rights-for-California-Residents.html"], ["Terms of Use", "/en/Terms-of-Use.html"], ["Whistleblower", "/en/Whistleblower.html"], ["Non-Discrimination Statement", "/en/Non-Discrimination-Statement.html"], ["Privacy Settings", "/privacy#settings"],
];

export default function Footer() {
  return <footer className="bg-white text-charcoal border-t border-line"><div className="max-w-[1680px] mx-auto px-6 md:px-16 py-14"><div className="grid grid-cols-2 md:grid-cols-7 gap-8">
    <div className="col-span-2 md:col-span-1"><span className="flex items-center gap-2 font-display text-xl font-extrabold text-charcoal"><span className="text-2xl text-forest">✣</span></span><span className="mt-1 block font-display text-lg font-extrabold tracking-tight text-charcoal">FARM FUNDING</span><ul className="mt-5 space-y-3 text-sm"><li><Link href="/sign-in" className="underline hover:text-clay">Sign In</Link></li><li><Link href="/search" className="underline hover:text-clay">Search</Link></li><li><Link href="/contact#offices" className="underline hover:text-clay">Office Locator</Link></li><li><Link href="/contact" className="underline hover:text-clay">Contact Us</Link></li>{SOCIAL.map((s) => <li key={s.label}><Link href={s.href} className="flex items-center gap-2 underline hover:text-clay"><span className="text-charcoal/70 min-w-4">{s.icon}</span>{s.label}</Link></li>)}</ul></div>
    {COLUMNS.map((col) => <div key={col.title}><h3 className="text-sm font-extrabold uppercase tracking-wide text-clay mb-3">{col.title}</h3><ul className="space-y-2">{col.links.map(([label, href]) => <li key={href}><Link href={href} className="text-sm text-charcoal hover:text-clay transition-colors underline underline-offset-2">{label}</Link></li>)}</ul></div>)}
  </div><div className="mt-12 pt-6 border-t border-line text-xs text-charcoal/60 flex flex-wrap items-center gap-x-2 gap-y-3"><span>© Copyright 2026 Farm Funding | NMLS No. 522993</span>{LEGAL_LINKS.map(([label, href]) => <span key={href} className="flex items-center gap-2"><span className="text-line">|</span><Link href={href} className="hover:text-clay underline">{label}</Link></span>)}</div></div></footer>;
}

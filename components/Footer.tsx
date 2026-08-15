import Link from "next/link";

const COLUMNS = [
  {
    title: "Financing",
    links: [
      ["Land Loans", "/financing/land-loans"],
      ["Rural Home Loans", "/financing/rural-home-loans"],
      ["Operating Loans", "/financing/operating-loans"],
      ["Facility Loans", "/financing/facility-loans"],
      ["Equipment Financing", "/financing/equipment-financing"],
      ["Leases", "/financing/leases"],
      ["Beginning Farmer Programs", "/financing/beginning-farmer-programs"],
    ],
  },
  {
    title: "Services",
    links: [
      ["Tax Planning and Prep", "/services/tax-planning"],
      ["Recordkeeping", "/services/recordkeeping"],
      ["Appraisals", "/services/appraisals"],
      ["Business Consulting", "/services/business-consulting"],
      ["Financial Benchmarking", "/services/benchmarking"],
      ["Estate Planning", "/services/estate-planning"],
      ["Grant Writing", "/services/grant-writing"],
      ["Farm Credit Connect", "/services/farm-credit-connect"],
    ],
  },
  {
    title: "Crop Insurance",
    links: [
      ["Crop Insurance Products", "/crop-insurance/products"],
      ["Dairy & Livestock Insurance Products", "/crop-insurance/dairy-livestock"],
      ["Insurance Resources", "/crop-insurance/resources"],
      ["Crop Insurance Agent Finder", "/crop-insurance/agent-finder"],
      ["File Notice of Loss", "/crop-insurance/notice-of-loss"],
      ["Non-Discrimination Statement", "/equal-opportunity#non-discrimination"],
    ],
  },
  {
    title: "Industries",
    links: [
      ["Cash Grain", "/industries/cash-grain"],
      ["Dairy", "/industries/dairy"],
      ["Livestock/Equine", "/industries/livestock-equine"],
      ["Timber/Forestry", "/industries/timber-forestry"],
      ["Fruit/Winery", "/industries/fruit-winery"],
      ["Vegetables", "/industries/vegetables"],
      ["Fishing/Aquatic", "/industries/fishing-aquatic"],
      ["Greenhouse/Nursery", "/industries/greenhouse-nursery"],
      ["Maple", "/industries/maple"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Today's Harvest Blog", "/resources/blog"],
      ["Industry Trends & Outlooks", "/resources/trends"],
      ["Events & Webinars", "/resources/events"],
      ["Calculators", "/resources/calculators"],
      ["DTN Markets & Weather", "/resources/markets-weather"],
      ["Northeast Farm Fresh Guide", "/resources/farm-fresh-guide"],
      ["Calendar Photo Contest", "/resources/events#photo-contest"],
      ["Go To Assist", "/resources/go-to-assist"],
    ],
  },
  {
    title: "About",
    links: [
      ["Who We Are", "/about/who-we-are"],
      ["Leadership", "/about/leadership"],
      ["Cooperative Involvement", "/about/cooperative-involvement"],
      ["Newsroom", "/about/newsroom"],
      ["Financial Reports", "/about/financial-reports"],
      ["Community Support", "/about/community-support"],
      ["Information Security", "/about/information-security"],
      ["Careers", "/about/careers"],
    ],
  },
];

const SOCIAL = [
  {
    label: "En Español",
    href: "/es",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 16" aria-hidden="true">
        <rect width="24" height="16" fill="#c60b1e" />
        <rect y="4" width="24" height="8" fill="#ffc400" />
      </svg>
    ),
  },
  {
    label: "X (formerly Twitter)",
    href: "https://x.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.2l-5.6-7.3L4 22H1l8.1-9.3L.8 2h7.4l5.1 6.7L18.9 2Zm-1.3 18h2l-12.4-16h-2.1L17.6 20Z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.4c0-.9.3-1.6 1.7-1.6h1.7V2.9C16.6 2.8 15.5 2.7 14.3 2.7c-2.6 0-4.4 1.6-4.4 4.5v2.4H7.1v3.2H10V21h3.5Z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22 12s0-3.2-.4-4.7a3 3 0 0 0-2.1-2.1C17.9 4.7 12 4.7 12 4.7s-5.9 0-7.5.5a3 3 0 0 0-2.1 2.1C2 8.8 2 12 2 12s0 3.2.4 4.7a3 3 0 0 0 2.1 2.1c1.6.5 7.5.5 7.5.5s5.9 0 7.5-.5a3 3 0 0 0 2.1-2.1C22 15.2 22 12 22 12Zm-12.1 3V9l5.2 3-5.2 3Z" />
      </svg>
    ),
  },
  {
    label: "Linked In",
    href: "https://linkedin.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.9 8.4H3.3V21H6.9V8.4ZM5.1 3a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM21 21v-7c0-3.5-1.9-5.2-4.4-5.2a3.8 3.8 0 0 0-3.4 1.9V8.4h-3.6v.1c0 .8 0 12.5 0 12.5H13v-7c0-.4 0-.7.1-1 .3-.7.9-1.5 2-1.5 1.5 0 2.1 1.1 2.1 2.7V21H21Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const LEGAL_LINKS: [string, string][] = [
  ["SiteMap", "/sitemap"],
  ["Privacy Statement", "/privacy"],
  ["Equal Opportunity & Legal", "/equal-opportunity"],
  ["Data Rights for California Residents", "/privacy#california"],
  ["Terms of Use", "/terms"],
  ["Whistleblower", "/about/whistleblower"],
  ["Non-Discrimination Statement", "/equal-opportunity#non-discrimination"],
  ["Privacy Settings", "/privacy#settings"],
];

export default function Footer() {
  return (
    <footer className="bg-white text-charcoal mt-24 border-t border-line">
      <div className="max-w-[1680px] mx-auto px-6 md:px-16 py-14">
        <div className="grid grid-cols-2 md:grid-cols-7 gap-8">
          {/* Logo + utility/social column */}
          <div className="col-span-2 md:col-span-1">
            <span className="flex items-center gap-2 font-display text-xl font-extrabold text-charcoal">
              <svg width="28" height="28" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <defs>
                  <g id="footer-logo-petal">
                    <path d="M20 20C13 15 13 5 20 2c2 6 2 12 0 18Z" fill="#6ea23f" />
                    <path d="M20 20c0-6 0-12 0-18 5 3 5 13 0 18Z" fill="#3e6e2e" />
                  </g>
                </defs>
                <use href="#footer-logo-petal" />
                <use href="#footer-logo-petal" transform="rotate(90 20 20)" />
                <use href="#footer-logo-petal" transform="rotate(180 20 20)" />
                <use href="#footer-logo-petal" transform="rotate(270 20 20)" />
              </svg>
            </span>
            <span className="mt-1 block font-display text-lg font-extrabold tracking-tight text-charcoal">
              FARM FUNDING
            </span>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link href="/sign-in" className="underline hover:text-clay transition-colors">Sign In</Link></li>
              <li><Link href="/search" className="underline hover:text-clay transition-colors">Search</Link></li>
              <li><Link href="/contact#offices" className="underline hover:text-clay transition-colors">Office Locator</Link></li>
              <li><Link href="/contact" className="underline hover:text-clay transition-colors">Contact Us</Link></li>
              <li>
                <Link href="/es" className="flex items-center gap-2 underline hover:text-clay transition-colors">
                  <span className="inline-block h-3 w-4 overflow-hidden rounded-[1px]">{SOCIAL[0].icon}</span>
                  {SOCIAL[0].label}
                </Link>
              </li>
              {SOCIAL.slice(1).map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="flex items-center gap-2 underline hover:text-clay transition-colors">
                    <span className="text-charcoal/70">{s.icon}</span>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-extrabold uppercase tracking-wide text-clay mb-3">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="text-sm text-charcoal hover:text-clay transition-colors underline underline-offset-2">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-line text-xs text-charcoal/60 flex flex-wrap items-center gap-x-2 gap-y-3">
          <span>© Copyright 2026 Farm Funding | NMLS No. XXXXXX</span>
          {LEGAL_LINKS.map(([label, href]) => (
            <span key={href} className="flex items-center gap-2">
              <span className="text-line">|</span>
              {label === "Equal Opportunity & Legal" && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="shrink-0">
                  <path d="M12 3v18M5 7h14M5 7l-3 6a3 3 0 0 0 6 0l-3-6Zm14 0l-3 6a3 3 0 0 0 6 0l-3-6Z" />
                </svg>
              )}
              <Link href={href} className="hover:text-clay underline">{label}</Link>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
import Link from "next/link";

export const metadata = {
  title: "Sitemap | Farm Funding",
  description: "A full directory of every page on the Farm Funding website.",
};

type Group = { title: string; links: { label: string; href: string }[] };

const GROUPS: Group[] = [
  {
    title: "Financing",
    links: [
      { label: "Financing Overview", href: "/financing" },
      { label: "Land Loans", href: "/financing/land-loans" },
      { label: "Rural Home Loans", href: "/financing/rural-home-loans" },
      { label: "Operating Loans", href: "/financing/operating-loans" },
      { label: "Facility Loans", href: "/financing/facility-loans" },
      { label: "Equipment Financing", href: "/financing/equipment-financing" },
      { label: "Leases", href: "/financing/leases" },
      { label: "Beginning Farmer Programs", href: "/financing/beginning-farmer-programs" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Services Overview", href: "/services" },
      { label: "Tax Planning and Prep", href: "/services/tax-planning" },
      { label: "Recordkeeping", href: "/services/recordkeeping" },
      { label: "Appraisals", href: "/services/appraisals" },
      { label: "Business Consulting", href: "/services/business-consulting" },
      { label: "Financial Benchmarking", href: "/services/benchmarking" },
      { label: "Estate Planning", href: "/services/estate-planning" },
      { label: "Grant Writing", href: "/services/grant-writing" },
      { label: "Farm Credit Connect", href: "/services/farm-credit-connect" },
    ],
  },
  {
    title: "Crop Insurance",
    links: [
      { label: "Crop Insurance Overview", href: "/crop-insurance" },
      { label: "Crop Insurance Products", href: "/crop-insurance/products" },
      { label: "Dairy & Livestock Insurance Products", href: "/crop-insurance/dairy-livestock" },
      { label: "Insurance Resources", href: "/crop-insurance/resources" },
      { label: "Crop Insurance Agent Finder", href: "/crop-insurance/agent-finder" },
      { label: "File Notice of Loss", href: "/crop-insurance/notice-of-loss" },
      { label: "Non-Discrimination Statement", href: "/crop-insurance/non-discrimination-statement" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Industries Overview", href: "/industries" },
      { label: "Cash Grain", href: "/industries/cash-grain" },
      { label: "Dairy", href: "/industries/dairy" },
      { label: "Livestock/Equine", href: "/industries/livestock-equine" },
      { label: "Timber/Forestry", href: "/industries/timber-forestry" },
      { label: "Fruit/Winery", href: "/industries/fruit-winery" },
      { label: "Vegetables", href: "/industries/vegetables" },
      { label: "Fishing/Aquatic", href: "/industries/fishing-aquatic" },
      { label: "Greenhouse/Nursery", href: "/industries/greenhouse-nursery" },
      { label: "Maple", href: "/industries/maple" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resources Overview", href: "/resources" },
      { label: "Today's Harvest Blog", href: "/resources/blog" },
      { label: "Industry Trends & Outlooks", href: "/resources/trends" },
      { label: "Events & Webinars", href: "/resources/events" },
      { label: "Calculators", href: "/resources/calculators" },
      { label: "DTN Markets & Weather", href: "/resources/markets-weather" },
      { label: "Northeast Farm Fresh Guide", href: "/resources/farm-fresh-guide" },
      { label: "Calendar Photo Contest", href: "/resources/photo-contest" },
      { label: "Go To Assist", href: "/resources/go-to-assist" },
      { label: "Meet the Authors", href: "/resources/meet-the-authors" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About Overview", href: "/about" },
      { label: "Who We Are", href: "/about/who-we-are" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Cooperative Involvement", href: "/about/cooperative-involvement" },
      { label: "Newsroom", href: "/about/newsroom" },
      { label: "Financial Reports", href: "/about/financial-reports" },
      { label: "Community Support", href: "/about/community-support" },
      { label: "Information Security", href: "/about/information-security" },
      { label: "Careers", href: "/about/careers" },
    ],
  },
  {
    title: "Other",
    links: [
      { label: "Home", href: "/" },
      { label: "Contact Us / Office Locator", href: "/contact" },
      { label: "Search", href: "/search" },
      { label: "Sign In", href: "/sign-in" },
      { label: "Privacy Statement", href: "/privacy" },
      { label: "Data Rights for California Residents", href: "/data-rights-california" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Equal Opportunity & Legal", href: "/equal-opportunity" },
      { label: "Whistleblower", href: "/whistleblower" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-8 py-14">
      <h1 className="font-display text-3xl md:text-4xl font-semibold text-forest">
        Sitemap
      </h1>
      <p className="mt-4 max-w-2xl text-[16px] leading-[1.7] text-charcoal/80">
        A full directory of every page on the Farm Funding website.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
        {GROUPS.map((group) => (
          <div key={group.title}>
            <h2 className="font-display text-lg font-semibold text-forest border-b border-charcoal/10 pb-2">
              {group.title}
            </h2>
            <ul className="mt-3 space-y-2">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-charcoal/80 hover:text-clay hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Link
        href="/"
        className="mt-12 inline-block text-sm font-semibold text-clay hover:text-forest"
      >
        ← Back to home
      </Link>
    </section>
  );
}

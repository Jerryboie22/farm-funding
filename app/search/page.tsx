import Link from "next/link";

export const metadata = {
  title: "Search | Farm Funding",
};

const QUICK_LINKS = [
  { label: "Financing", href: "/financing" },
  { label: "Services", href: "/services" },
  { label: "Crop Insurance", href: "/crop-insurance" },
  { label: "Industries", href: "/industries" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function SearchPage({
  searchParams,
}: {
  searchParams?: { q?: string };
}) {
  const query = searchParams?.q?.trim() ?? "";

  return (
    <section className="w-full bg-cream px-[4%] py-16 md:py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-3xl md:text-4xl font-extrabold text-forest">
          Search
        </h1>

        <form
          action="/search"
          method="GET"
          className="mt-6 flex flex-col sm:flex-row gap-3 w-full max-w-xl"
        >
          <input
            type="search"
            name="q"
            defaultValue={query}
            placeholder="Search farmfunding.com"
            className="flex-1 px-4 py-3.5 border border-line rounded-sm bg-white text-charcoal text-sm focus:outline-none"
          />
          <button
            type="submit"
            className="px-7 py-3.5 bg-clay text-white text-sm font-bold rounded-sm hover:bg-clay-dark transition-colors"
          >
            Search
          </button>
        </form>

        {query ? (
          <p className="mt-8 text-base text-charcoal/80">
            Search results for <span className="font-bold">&quot;{query}&quot;</span> aren&apos;t available yet.
            In the meantime, here are the main sections of the site:
          </p>
        ) : (
          <p className="mt-8 text-base text-charcoal/80">
            Site search is coming soon. In the meantime, here are the main
            sections of the site:
          </p>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-5 py-2.5 bg-white border border-line rounded-sm text-sm font-bold text-charcoal hover:border-forest hover:text-forest transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

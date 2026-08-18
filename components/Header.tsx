"use client";

import Link from "next/link";
import { useState } from "react";

const NAV = [
  {
    label: "Financing",
    href: "/financing",
    items: [
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
    label: "Services",
    href: "/services",
    items: [
      { label: "Tax Planning and Prep", href: "/services/tax-planning" },
      { label: "Recordkeeping", href: "/services/recordkeeping" },
      { label: "Appraisals", href: "/services/appraisals" },
      { label: "Business Consulting", href: "/services/business-consulting" },
      { label: "Financial Benchmarking", href: "/services/benchmarking" },
      { label: "Estate Planning", href: "/services/estate-planning" },
      { label: "Grant Writing", href: "/services/grant-writing" },
    ],
  },
  {
    label: "Crop Insurance",
    href: "/crop-insurance",
    items: [
      { label: "Crop Insurance Products", href: "/crop-insurance/products" },
      { label: "Dairy & Livestock Insurance", href: "/crop-insurance/dairy-livestock" },
      { label: "Insurance Resources", href: "/crop-insurance/resources" },
      { label: "File Notice of Loss", href: "/crop-insurance/notice-of-loss" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    items: [
      { label: "Cash Grain", href: "/industries/cash-grain" },
      { label: "Dairy", href: "/industries/dairy" },
      { label: "Livestock/Equine", href: "/industries/livestock-equine" },
      { label: "Timber/Forestry", href: "/industries/timber-forestry" },
      { label: "Fruit/Winery", href: "/industries/fruit-winery" },
      { label: "Vegetables", href: "/industries/vegetables" },
      { label: "Fishing/Aquatic", href: "/industries/fishing-aquatic" },
      { label: "Greenhouse/Nursery", href: "/industries/greenhouse-nursery" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    items: [
      { label: "Today's Harvest Blog", href: "/resources/blog" },
      { label: "Industry Trends & Outlooks", href: "/resources/trends" },
      { label: "Events & Webinars", href: "/resources/events" },
      { label: "Loan Calculators", href: "/resources/calculators" },
      { label: "Markets & Weather", href: "/resources/markets-weather" },
    ],
  },
  {
    label: "About",
    href: "/about",
    items: [
      { label: "Who We Are", href: "/about/who-we-are" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Newsroom", href: "/about/newsroom" },
      { label: "Careers", href: "/about/careers" },
    ],
  },
];

export default function Header() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-line">
      {/* utility bar */}
      <div className="hidden md:flex items-center justify-end gap-6 px-8 py-3 text-sm font-bold text-grey-text border-b border-line">
        <Link href="/search" className="flex items-center gap-1.5 hover:text-clay transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
          </svg>
          Search
        </Link>
        <Link href="/resources/calculators" className="flex items-center gap-1.5 hover:text-clay transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="4" y="3" width="16" height="18" rx="1" />
            <path d="M7 8h10M7 12h3m4 0h3M7 16h3m4 0h3" strokeLinecap="round" />
          </svg>
          Calculators
        </Link>
        <Link href="/contact#offices" className="flex items-center gap-1.5 hover:text-clay transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21s-7-7.2-7-12a7 7 0 0 1 14 0c0 4.8-7 12-7 12Z" />
          </svg>
          Office Locator
        </Link>
        <Link href="/contact" className="flex items-center gap-1.5 hover:text-clay transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="1.5" />
            <path d="m4 6 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Contact Us
        </Link>
        <Link
          href="/sign-in"
          className="px-5 py-2.5 bg-clay text-white font-display font-bold rounded-[4px] border-2 border-clay hover:bg-white hover:text-clay transition-colors"
        >
          Sign in
        </Link>
      </div>

      {/* main nav */}
      <div className="flex items-center justify-between px-6 md:px-8 py-4">
        <Link href="/" className="flex items-center gap-2 font-display text-2xl font-extrabold text-charcoal tracking-tight">
          <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <defs>
              <g id="logo-petal">
                <path d="M20 20C13 15 13 5 20 2c2 6 2 12 0 18Z" fill="#6ea23f" />
                <path d="M20 20c0-6 0-12 0-18 5 3 5 13 0 18Z" fill="#3e6e2e" />
              </g>
            </defs>
            <use href="#logo-petal" />
            <use href="#logo-petal" transform="rotate(90 20 20)" />
            <use href="#logo-petal" transform="rotate(180 20 20)" />
            <use href="#logo-petal" transform="rotate(270 20 20)" />
          </svg>
          FARM FUNDING
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((section, idx) => (
            <div
              key={section.label}
              className="relative"
              onMouseEnter={() => setOpenIdx(idx)}
              onMouseLeave={() => setOpenIdx(null)}
            >
              <Link
                href={section.href}
                className="flex items-center gap-1 px-4 py-2 text-sm font-bold uppercase tracking-wide text-charcoal hover:text-clay transition-colors"
              >
                {section.label}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                  className={`shrink-0 transition-transform ${openIdx === idx ? "rotate-180" : ""}`}
                >
                  <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              {openIdx === idx && (
                <div className="absolute left-0 top-full pt-1 w-64">
                  <div className="bg-white border border-line/40 rounded-[10px] shadow-lg py-2">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-5 py-2 text-sm text-grey-text border-l-4 border-l-white hover:border-l-clay hover:bg-grey-bg hover:text-clay transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                    <Link
                      href={section.href}
                      className="block px-5 py-2 text-sm font-semibold text-clay hover:text-forest transition-colors border-t border-line/40 mt-1 pt-2"
                    >
                      See all {section.label.toLowerCase()} →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <button
          className="lg:hidden text-forest"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden border-t border-line px-6 py-4 flex flex-col gap-1 bg-cream">
          {NAV.map((section) => (
            <Link
              key={section.label}
              href={section.href}
              className="py-2 text-sm font-bold uppercase tracking-wide text-grey-text hover:text-clay"
              onClick={() => setMobileOpen(false)}
            >
              {section.label}
            </Link>
          ))}
          <Link href="/sign-in" className="py-2 text-sm font-bold text-clay">
            Sign In →
          </Link>
        </nav>
      )}
    </header>
  );
}

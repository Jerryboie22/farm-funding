"use client";

import Link from "next/link";
import { useState } from "react";

const NAV = [
  {
    label: "Financing",
    href: "/financing",
    seeAllLabel: "See all financing",
    items: [
      { label: "Land Loans", href: "/financing/land-loans" },
      { label: "Rural Home Loans", href: "/financing/rural-home-loans" },
      { label: "Operating Loans", href: "/financing/operating-loans" },
      { label: "Facility Loans", href: "/financing/facility-loans" },
      { label: "Equipment Financing", href: "/financing/equipment-financing" },
      { label: "Leases", href: "/financing/leases" },
      {
        label: "Beginning Farmer Programs",
        href: "/financing/beginning-farmer-programs",
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    seeAllLabel: "See all services",
    items: [
      { label: "Tax Planning and Prep", href: "/services/tax-planning" },
      { label: "Recordkeeping", href: "/services/recordkeeping" },
      { label: "Appraisals", href: "/services/appraisals" },
      {
        label: "Business Consulting",
        href: "/services/business-consulting",
      },
      {
        label: "Financial Benchmarking",
        href: "/services/benchmarking",
      },
      { label: "Estate Planning", href: "/services/estate-planning" },
      { label: "Grant Writing", href: "/services/grant-writing" },
      { label: "Farm Credit Connect", href: "/services/farm-credit-connect" },
    ],
  },
  {
    label: "Crop Insurance",
    href: "/crop-insurance",
    seeAllLabel: "See all insurance",
    items: [
      {
        label: "Crop Insurance Products",
        href: "/crop-insurance/products",
      },
      {
        label: "Dairy & Livestock Insurance Products",
        href: "/crop-insurance/dairy-livestock",
      },
      {
        label: "Insurance Resources",
        href: "/crop-insurance/resources",
      },
      {
        label: "File Notice of Loss",
        href: "/crop-insurance/notice-of-loss",
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    seeAllLabel: "See all industries",
    items: [
      { label: "Cash Grain", href: "/industries/cash-grain" },
      { label: "Dairy", href: "/industries/dairy" },
      { label: "Livestock/Equine", href: "/industries/livestock-equine" },
      { label: "Timber/Forestry", href: "/industries/timber-forestry" },
      { label: "Fruit/Winery", href: "/industries/fruit-winery" },
      { label: "Vegetables", href: "/industries/vegetables" },
      { label: "Fishing/Aquatic", href: "/industries/fishing-aquatic" },
      {
        label: "Greenhouse/Nursery",
        href: "/industries/greenhouse-nursery",
      },
      { label: "Maple", href: "/industries/maple" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    seeAllLabel: "Resources overview",
    items: [
      { label: "Today's Harvest Blog", href: "/resources/blog" },
      {
        label: "Industry Trends & Outlooks",
        href: "/resources/trends",
      },
      { label: "Events & Webinars", href: "/resources/events" },
      {
        label: "DTN Markets & Weather",
        href: "/resources/markets-weather",
      },
      {
        label: "Northeast Farm Fresh Guide",
        href: "/resources/farm-fresh-guide",
      },
      {
        label: "Calendar Photo Contest",
        href: "/resources/photo-contest",
      },
    ],
  },
  {
    label: "About",
    href: "/about",
    seeAllLabel: "See all about",
    items: [
      { label: "Who We Are", href: "/about/who-we-are" },
      { label: "Leadership", href: "/about/leadership" },
      {
        label: "Cooperative Involvement",
        href: "/about/cooperative-involvement",
      },
      { label: "Newsroom", href: "/about/newsroom" },
      {
        label: "Financial Reports",
        href: "/about/financial-reports",
      },
      {
        label: "Community Support",
        href: "/about/community-support",
      },
      {
        label: "Information Security",
        href: "/about/information-security",
      },
      { label: "Careers", href: "/about/careers" },
    ],
  },
];

export default function Header() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpenIdx, setMobileOpenIdx] = useState<number | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* utility bar */}
      <div className="hidden md:flex items-center justify-end gap-6 px-8 py-3 text-sm font-bold text-grey-text border-b border-line">
        <Link
          href="/search"
          className="flex items-center gap-1.5 hover:text-clay transition-colors"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
          </svg>
          Search
        </Link>

        <Link
          href="/resources/calculators"
          className="flex items-center gap-1.5 hover:text-clay transition-colors"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <rect x="4" y="3" width="16" height="18" rx="1" />
            <path
              d="M7 8h10M7 12h3m4 0h3M7 16h3m4 0h3"
              strokeLinecap="round"
            />
          </svg>
          Calculators
        </Link>

        <Link
          href="/contact#offices"
          className="flex items-center gap-1.5 hover:text-clay transition-colors"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21s-7-7.2-7-12a7 7 0 0 1 14 0c0 4.8-7 12-7 12Z" />
          </svg>
          Office Locator
        </Link>

        <Link
          href="/contact"
          className="flex items-center gap-1.5 hover:text-clay transition-colors"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <rect x="3" y="5" width="18" height="14" rx="1.5" />
            <path
              d="m4 6 8 6 8-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
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
      <div className="flex items-center justify-between px-6 md:px-8 py-4 border-b border-line">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-2xl font-extrabold text-charcoal tracking-tight"
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 40 40"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <g id="logo-petal">
                <path
                  d="M20 20C13 15 13 5 20 2c2 6 2 12 0 18Z"
                  fill="#6ea23f"
                />
                <path
                  d="M20 20c0-6 0-12 0-18 5 3 5 13 0 18Z"
                  fill="#3e6e2e"
                />
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
                className="px-4 py-2 text-sm font-bold uppercase tracking-wide text-charcoal hover:text-clay transition-colors"
              >
                {section.label}
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
                      className="block px-5 py-2 text-sm font-semibold text-clay hover:text-forest transition-colors border-t border-line/40 mt-1 pt-2 uppercase"
                    >
                      {section.seeAllLabel} →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <button
          className="lg:hidden text-charcoal"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* mobile full-screen menu — pixel-spec corrected */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white overflow-y-auto">
          {/* header: logo + close, ~54px tall */}
          <div className="flex items-center justify-between h-[54px] pl-[12px] pr-[10px] bg-white">
            <Link
              href="/"
              className="flex items-center gap-2 w-[228px]"
              onClick={() => setMobileOpen(false)}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 40 40"
                fill="none"
                aria-hidden="true"
                className="shrink-0"
              >
                <use href="#logo-petal" />
                <use href="#logo-petal" transform="rotate(90 20 20)" />
                <use href="#logo-petal" transform="rotate(180 20 20)" />
                <use href="#logo-petal" transform="rotate(270 20 20)" />
              </svg>
              <span className="font-display text-[17px] font-extrabold uppercase tracking-tight text-black leading-none whitespace-nowrap">
                Farm Funding
              </span>
            </Link>

            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="flex items-center justify-center w-[44px] h-[44px] text-[#676964]"
            >
              <svg
                width="27"
                height="27"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* nav panel */}
          <div className="bg-[#EDF1E3] pt-[30px] pl-[50px] pr-[44px] min-h-full">
            {NAV.map((section, idx) => {
              const isOpen = mobileOpenIdx === idx;

              return (
                <div key={section.label}>
                  <button
                    className={`w-full flex items-center justify-between h-[56px] font-display text-[19px] font-bold uppercase tracking-normal transition-colors ${
                      isOpen ? "text-[#496D83]" : "text-[#676964]"
                    }`}
                    onClick={() => setMobileOpenIdx(isOpen ? null : idx)}
                  >
                    {section.label}
                    {isOpen ? (
                      <span
                        className="shrink-0 ml-3"
                        style={{
                          width: 0,
                          height: 0,
                          borderLeft: "6px solid transparent",
                          borderRight: "6px solid transparent",
                          borderBottom: "7px solid #496D83",
                        }}
                      />
                    ) : (
                      <span
                        className="shrink-0 ml-3"
                        style={{
                          width: 0,
                          height: 0,
                          borderLeft: "6px solid transparent",
                          borderRight: "6px solid transparent",
                          borderTop: "7px solid #676964",
                        }}
                      />
                    )}
                  </button>

                  {isOpen && (
                    <div className="relative pl-[20px] pb-[20px]">
                      <span
                        className="absolute left-0 top-[2px] bottom-[2px] rounded-full"
                        style={{ width: "5px", backgroundColor: "#496D83" }}
                      />
                      <div className="flex flex-col gap-[26px] pt-[6px]">
                        {section.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="font-display text-[17px] font-bold leading-[1.3] text-[#676964] hover:text-[#496D83] transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}

                        <Link
                          href={section.href}
                          className="font-display text-[14px] font-bold uppercase text-[#676964] hover:text-[#496D83] transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {section.seeAllLabel}
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* divider */}
            <div
              className="h-[1.5px] bg-[#676964] mt-[8px] mb-[24px]"
              style={{ marginLeft: "-6px", marginRight: "-6px" }}
            />

            {/* utility nav */}
            <div className="flex flex-col gap-[22px] pb-[24px]">
              <Link
                href="/search"
                className="flex items-center gap-[11px] font-sans text-[19px] font-normal text-[#676964]"
                onClick={() => setMobileOpen(false)}
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  className="shrink-0"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
                </svg>
                Search
              </Link>

              <Link
                href="/resources/calculators"
                className="flex items-center gap-[11px] font-sans text-[19px] font-normal text-[#676964]"
                onClick={() => setMobileOpen(false)}
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  className="shrink-0"
                >
                  <rect x="4" y="3" width="16" height="18" rx="1.5" />
                  <path
                    d="M7 8h10M7 12h3m4 0h3M7 16h3m4 0h3"
                    strokeLinecap="round"
                  />
                </svg>
                Calculators
              </Link>

              <Link
                href="/contact#offices"
                className="flex items-center gap-[11px] font-sans text-[19px] font-normal text-[#676964]"
                onClick={() => setMobileOpen(false)}
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  className="shrink-0"
                >
                  <circle cx="12" cy="10" r="3.2" />
                  <path d="M12 21.5s-7.5-7.4-7.5-12.3a7.5 7.5 0 0 1 15 0c0 4.9-7.5 12.3-7.5 12.3Z" />
                </svg>
                Office Locator
              </Link>

              <Link
                href="/contact"
                className="flex items-center gap-[11px] font-sans text-[19px] font-normal text-[#676964]"
                onClick={() => setMobileOpen(false)}
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  className="shrink-0"
                >
                  <rect x="3" y="5" width="18" height="14" rx="1.5" />
                  <path
                    d="m4 6 8 6 8-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Contact Us
              </Link>
            </div>

            {/* Sign In — small, fixed size */}
            <div className="pb-[30px]">
              <Link
                href="/sign-in"
                className="flex items-center justify-center font-display text-[14px] font-bold text-white transition-opacity hover:opacity-90"
                style={{
                  width: "168px",
                  height: "32px",
                  backgroundColor: "#496D83",
                  borderRadius: "2px",
                }}
                onClick={() => setMobileOpen(false)}
              >
                SIGN IN
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* shared logo sprite defs, rendered once, off-screen */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <g id="logo-petal">
            <path d="M20 20C13 15 13 5 20 2c2 6 2 12 0 18Z" fill="#6ea23f" />
            <path d="M20 20c0-6 0-12 0-18 5 3 5 13 0 18Z" fill="#3e6e2e" />
          </g>
        </defs>
      </svg>
    </header>
  );
}

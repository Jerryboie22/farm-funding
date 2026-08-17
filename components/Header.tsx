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
      { label: "Beginning Farmer Programs", href: "/financing/beginning-farmer-programs" },
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
      { label: "Business Consulting", href: "/services/business-consulting" },
      { label: "Financial Benchmarking", href: "/services/benchmarking" },
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
      { label: "Crop Insurance Products", href: "/crop-insurance/products" },
      { label: "Dairy & Livestock Insurance Products", href: "/crop-insurance/dairy-livestock" },
      { label: "Insurance Resources", href: "/crop-insurance/resources" },
      { label: "File Notice of Loss", href: "/crop-insurance/notice-of-loss" },
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
      { label: "Greenhouse/Nursery", href: "/industries/greenhouse-nursery" },
      { label: "Maple", href: "/industries/maple" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    seeAllLabel: "Resources overview",
    items: [
      { label: "Today's Harvest Blog", href: "/resources/blog" },
      { label: "Industry Trends & Outlooks", href: "/resources/trends" },
      { label: "Events & Webinars", href: "/resources/events" },
      { label: "DTN Markets & Weather", href: "/resources/markets-weather" },
      { label: "Northeast Farm Fresh Guide", href: "/resources/farm-fresh-guide" },
      { label: "Calendar Photo Contest", href: "/resources/photo-contest" },
    ],
  },
  {
    label: "About",
    href: "/about",
    seeAllLabel: "See all about",
    items: [
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
];

export default function Header() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpenIdx, setMobileOpenIdx] = useState<number | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white">
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
      <div className="flex items-center justify-between px-6 md:px-8 py-4 border-b border-line">
        <Link href="/" className="flex items-center gap-2 font-display text-2xl font-extrabold text-charcoal tracking-tight">
          <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <use href="#logo-petal" />
            <use href="#logo-petal" transform="rotate(90 20 20)" />
            <use href="#logo-petal" transform="rotate(180 20 20)" />
            <use href="#logo-petal" transform="rotate(270 20 20)" />
          </svg>
          FARM FUNDERS
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
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* mobile full-screen accordion menu — pixel-spec match */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white overflow-y-auto">
          {/* mobile menu header: logo + large close X */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-line">
            <Link
              href="/"
              className="flex items-center gap-3 font-display text-[36px] leading-none font-bold text-black tracking-tight uppercase"
              onClick={() => setMobileOpen(false)}
            >
              <svg width="46" height="46" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <use href="#logo-petal" />
                <use href="#logo-petal" transform="rotate(90 20 20)" />
                <use href="#logo-petal" transform="rotate(180 20 20)" />
                <use href="#logo-petal" transform="rotate(270 20 20)" />
              </svg>
              Farm Funders
            </Link>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="text-[#8a8a8a] shrink-0">
              <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* accordion body — natural reflow, no overlay */}
          <div className="bg-[#F0F4E7] pl-[clamp(24px,15vw,100px)] pr-[6vw] min-h-full">
            {NAV.map((section, idx) => {
              const isOpen = mobileOpenIdx === idx;
              return (
                <div key={section.label}>
                  <button
                    className={`w-full flex items-center justify-between py-[26px] font-display text-[36px] leading-[1.2] font-bold uppercase tracking-tight transition-colors ${
                      isOpen ? "text-[#4E7488]" : "text-[#626466]"
                    }`}
                    onClick={() => setMobileOpenIdx(isOpen ? null : idx)}
                  >
                    {section.label}
                    <svg
                      width="22"
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
      { label: "Beginning Farmer Programs", href: "/financing/beginning-farmer-programs" },
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
      { label: "Business Consulting", href: "/services/business-consulting" },
      { label: "Financial Benchmarking", href: "/services/benchmarking" },
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
      { label: "Crop Insurance Products", href: "/crop-insurance/products" },
      { label: "Dairy & Livestock Insurance Products", href: "/crop-insurance/dairy-livestock" },
      { label: "Insurance Resources", href: "/crop-insurance/resources" },
      { label: "File Notice of Loss", href: "/crop-insurance/notice-of-loss" },
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
      { label: "Greenhouse/Nursery", href: "/industries/greenhouse-nursery" },
      { label: "Maple", href: "/industries/maple" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    seeAllLabel: "Resources overview",
    items: [
      { label: "Today's Harvest Blog", href: "/resources/blog" },
      { label: "Industry Trends & Outlooks", href: "/resources/trends" },
      { label: "Events & Webinars", href: "/resources/events" },
      { label: "DTN Markets & Weather", href: "/resources/markets-weather" },
      { label: "Northeast Farm Fresh Guide", href: "/resources/farm-fresh-guide" },
      { label: "Calendar Photo Contest", href: "/resources/photo-contest" },
    ],
  },
  {
    label: "About",
    href: "/about",
    seeAllLabel: "See all about",
    items: [
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
];

export default function Header() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpenIdx, setMobileOpenIdx] = useState<number | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white">
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
      <div className="flex items-center justify-between px-6 md:px-8 py-4 border-b border-line">
        <Link href="/" className="flex items-center gap-2 font-display text-2xl font-extrabold text-charcoal tracking-tight">
          <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden="true">
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
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* mobile full-screen accordion menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white overflow-y-auto">
          {/* mobile menu header: logo + close */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-line">
            <Link
              href="/"
              className="flex items-center gap-2 font-display text-2xl font-extrabold text-charcoal tracking-tight"
              onClick={() => setMobileOpen(false)}
            >
              <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <use href="#logo-petal" />
                <use href="#logo-petal" transform="rotate(90 20 20)" />
                <use href="#logo-petal" transform="rotate(180 20 20)" />
                <use href="#logo-petal" transform="rotate(270 20 20)" />
              </svg>
              FARM FUNDING
            </Link>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="text-grey-text">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* accordion body */}
          <div className="bg-[#e8ebe0] px-6 min-h-full">
            {NAV.map((section, idx) => {
              const isOpen = mobileOpenIdx === idx;
              return (
                <div key={section.label} className="border-b border-charcoal/15">
                  <button
                    className={`w-full flex items-center justify-between py-[22px] text-[19px] font-bold uppercase tracking-wide transition-colors ${
                      isOpen ? "text-[#496d83]" : "text-[#4b4b4b]"
                    }`}
                    onClick={() => setMobileOpenIdx(isOpen ? null : idx)}
                  >
                    {section.label}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                    >
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className="border-l-2 border-[#496d83] pl-5 pb-[22px] flex flex-col gap-[26px]">
                      {section.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="text-[17px] font-bold text-[#4b4b4b] hover:text-[#496d83] transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                      <Link
                        href={section.href}
                        className="text-[17px] font-bold uppercase text-[#4b4b4b] hover:text-[#496d83] transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {section.seeAllLabel}
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}

            {/* utility links */}
            <div className="flex flex-col gap-[26px] py-[26px]">
              <Link href="/search" className="flex items-center gap-3 text-[18px] text-[#4b4b4b]" onClick={() => setMobileOpen(false)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
                </svg>
                Search
              </Link>
              <Link href="/resources/calculators" className="flex items-center gap-3 text-[18px] text-[#4b4b4b]" onClick={() => setMobileOpen(false)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="4" y="3" width="16" height="18" rx="1" />
                  <path d="M7 8h10M7 12h3m4 0h3M7 16h3m4 0h3" strokeLinecap="round" />
                </svg>
                Calculators
              </Link>
              <Link href="/contact#offices" className="flex items-center gap-3 text-[18px] text-[#4b4b4b]" onClick={() => setMobileOpen(false)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 21s-7-7.2-7-12a7 7 0 0 1 14 0c0 4.8-7 12-7 12Z" />
                </svg>
                Office Locator
              </Link>
              <Link href="/contact" className="flex items-center gap-3 text-[18px] text-[#4b4b4b]" onClick={() => setMobileOpen(false)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="5" width="18" height="14" rx="1.5" />
                  <path d="m4 6 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Contact Us
              </Link>
            </div>

            <Link
              href="/sign-in"
              className="block text-center py-[15px] mb-6 bg-[#496d83] text-white font-display text-[16px] font-bold rounded-[4px]"
              onClick={() => setMobileOpen(false)}
            >
              Sign in
            </Link>
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
                    }header>
  );
}

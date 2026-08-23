"use client";

import { useEffect } from "react";

const ARTICLE_ROUTES: Record<string, string> = {
  "A Smarter Safety Net: What the New USDA Payment Rules Mean for Your Farm":
    "/resources/blog/a-smarter-safety-net-what-the-new-usda-payment-rules-mean-for-your-farm",
  "Highlights from the Fiscal Year 2026-2027 NYS Budget":
    "/resources/blog/260604FarmHighlightsNYSBudget",
  "Research & Development Tax Credits for Farms: A Case Study":
    "/resources/blog/260421ResearchDevelopmentTaxCreditsforFarms",
  "Farm Funding Reports Strong 2025 Financial Results":
    "/about/NewsRoom/press-releases/260323-FarmCreditEastReportsStrong2025FinancialResults",
};

export default function HomeArticleRouting() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest<HTMLAnchorElement>("a[href='/resources/blog']");
      if (!link) return;

      const title = link.textContent?.replace(/›/g, "").replace(/\s+/g, " ").trim();
      if (!title) return;

      const route = Object.entries(ARTICLE_ROUTES).find(([key]) =>
        title.includes(key),
      )?.[1];

      if (!route) return;

      event.preventDefault();
      window.location.assign(route);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

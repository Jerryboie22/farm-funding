import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source:
          "/resources/todays-harvest-Blog/260707_2026FarmBillTakesShape",
        destination:
          "/en/resources/todays-harvest-Blog/260707_2026FarmBillTakesShape.html",
      },
      {
        source:
          "/resources/Industry-Trends-and-Outlooks/Reports/2025NEDairyFarmSummary2026MidYearOutlook.html",
        destination:
          "/en/resources/Industry-Trends-and-Outlooks/Reports/2025NEDairyFarmSummary2026MidYearOutlook.html",
      },
      {
        source:
          "/resources/todays-harvest-Blog/260630NewUSDAPaymentRulesForYourFarm.html",
        destination:
          "/en/resources/todays-harvest-Blog/260630NewUSDAPaymentRulesForYourFarm.html",
      },
      {
        source:
          "/resources/todays-harvest-Blog/260604FarmHighlightsNYSBudget.html",
        destination:
          "/en/resources/todays-harvest-Blog/260604FarmHighlightsNYSBudget.html",
      },
      {
        source:
          "/resources/todays-harvest-Blog/260609CG_BaseAcreReviewForFarmers.html",
        destination:
          "/en/resources/todays-harvest-Blog/260609CG_BaseAcreReviewForFarmers.html",
      },
      {
        source:
          "/resources/todays-harvest-Blog/260701TariffReliefProgramNYProducers.html",
        destination:
          "/en/resources/todays-harvest-Blog/260701TariffReliefProgramNYProducers.html",
      },
    ];
  },
};

export default nextConfig;

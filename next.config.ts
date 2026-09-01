import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source:
          "/resources/Industry-Trends-and-Outlooks/Reports/2025NEDairyFarmSummary2026MidYearOutlook.html",
        destination:
          "/resources/Industry-Trends-and-Outlooks/Reports/2025NEDairyFarmSummary2026MidYearOutlook",
        permanent: true,
      },
      {
        source:
          "/en/resources/Industry-Trends-and-Outlooks/Reports/2025NEDairyFarmSummary2026MidYearOutlook.html",
        destination:
          "/resources/Industry-Trends-and-Outlooks/Reports/2025NEDairyFarmSummary2026MidYearOutlook",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source:
          "/resources/todays-harvest-Blog/260603CG_KeyChangesToDRPandLGMandLRP.html",
        destination:
          "/en/resources/todays-harvest-Blog/260603CG_KeyChangesToDRPandLGMandLRP.html",
      },
      {
        source:
          "/resources/todays-harvest-Blog/260707_2026FarmBillTakesShape",
        destination:
          "/en/resources/todays-harvest-Blog/260707_2026FarmBillTakesShape.html",
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
          "/resources/Industry-Trends-and-Outlooks/Reports/2606KEP_FuelFertilizerandConflictinMiddleEast.html",
        destination:
          "/en/resources/Industry-Trends-and-Outlooks/Reports/2606KEP_FuelFertilizerandConflictinMiddleEast.html",
      },
      {
        source:
          "/resources/Industry-Trends-and-Outlooks/Reports/2606KEP_FuelFertilizerandConflictinMiddleEast",
        destination:
          "/en/resources/Industry-Trends-and-Outlooks/Reports/2606KEP_FuelFertilizerandConflictinMiddleEast.html",
      },
    ];
  },
};

export default nextConfig;

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
    ];
  },
};

export default nextConfig;

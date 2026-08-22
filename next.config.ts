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
    ];
  },
};

export default nextConfig;

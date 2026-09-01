import type { Metadata } from "next";
import ReferenceIndustryPage from "@/components/ReferenceIndustryPage";

export const metadata: Metadata = { title: "Cash Grain Producers | Farm Funding" };

export default function CashGrainPage() {
  return <ReferenceIndustryPage data={{
    title: "Cash Grain Producers",
    description: "Farm Funding understands the financial needs of cash grain producers and the importance of managing markets, input costs and working capital.",
    image: "/images/industries/Cash Grain_shutterstock_1153070285-1.jpg",
    imageAlt: "Cash grain field",
    services: ["Operating Loans", "Equipment Financing", "Facility Loans", "Tax Planning and Prep", "Recordkeeping", "Business Consulting", "Crop Insurance"],
    programs: ["Young, Beginning, Small & Veteran Farmer Incentives", "FarmStart", "GenerationNext"],
    related: [{ label: "Business Tips and Tools", title: "Agricultural market and risk-management insights", href: "/resources/blog", date: "2026" }, { label: "Resources", title: "Explore our crop insurance resources", href: "/crop-insurance/resources", date: "2026" }]
  }} />;
}

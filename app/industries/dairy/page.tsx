import type { Metadata } from "next";
import ReferenceIndustryPage from "@/components/ReferenceIndustryPage";

export const metadata: Metadata = { title: "Dairy Farmers | Farm Funding" };

export default function DairyPage() {
  return <ReferenceIndustryPage data={{
    title: "Dairy Farmers",
    description: "Farm Funding works with dairy producers on financing, risk management, financial planning and the long-term decisions that shape a dairy business.",
    image: "/images/industries/Dairy_Farm Image-1.jpg",
    imageAlt: "Dairy farm and cows",
    services: ["Operating Loans", "Facility Loans", "Equipment Financing", "Dairy Revenue Protection", "Tax Planning and Prep", "Recordkeeping", "Business Consulting", "Estate Planning"],
    programs: ["FarmStart", "GenerationNext", "Young, Beginning, Small & Veteran Farmer Incentives"],
    related: [{ label: "Dairy", title: "Dairy and livestock insurance options", href: "/crop-insurance/dairy-livestock", date: "2026" }, { label: "Resources", title: "Industry Trends & Outlooks", href: "/resources/trends", date: "2026" }]
  }} />;
}

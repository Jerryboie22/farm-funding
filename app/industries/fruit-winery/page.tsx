import type { Metadata } from "next";
import ReferenceIndustryPage from "@/components/ReferenceIndustryPage";

export const metadata: Metadata = { title: "Fruit & Winery Producers | Farm Funding" };

export default function FruitWineryPage() {
  return <ReferenceIndustryPage data={{
    title: "Fruit & Winery Producers",
    description: "Specialty crops and wineries require specialized financial planning. Farm Funding brings agricultural lending and business expertise together for Northeast producers.",
    image: "/images/industries/Fruit-Winery_shutterstock_1592342302.jpg",
    imageAlt: "Fruit and winery production",
    services: ["Operating Loans", "Equipment Financing", "Facility Loans", "Tax Planning and Prep", "Recordkeeping", "Financial Benchmarking", "Business Consulting", "Crop Insurance"],
    programs: ["FarmStart", "GenerationNext", "Young, Beginning, Small & Veteran Farmer Incentives"],
    related: [{ label: "Insurance", title: "Crop Insurance Products", href: "/crop-insurance/products", date: "2026" }, { label: "Services", title: "Financial Benchmarking", href: "/services/benchmarking", date: "2026" }]
  }} />;
}

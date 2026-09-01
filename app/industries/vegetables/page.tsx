import type { Metadata } from "next";
import ReferenceIndustryPage from "@/components/ReferenceIndustryPage";

export const metadata: Metadata = { title: "Vegetable Producers | Farm Funding" };

export default function VegetablesPage() {
  return <ReferenceIndustryPage data={{
    title: "Vegetable Producers",
    description: "Farm Funding works with vegetable growers on seasonal operating needs, equipment, facilities, crop insurance and long-term business planning.",
    image: "/images/industries/Vegetables_shutterstock_1125187883.jpg",
    imageAlt: "Vegetable production in a field",
    services: ["Operating Loans", "Equipment Financing", "Facility Loans", "Tax Planning and Prep", "Recordkeeping", "Business Consulting", "Crop Insurance"],
    programs: ["FarmStart", "GenerationNext", "Young, Beginning, Small & Veteran Farmer Incentives"],
    related: [{ label: "Insurance", title: "Crop Insurance Products", href: "/crop-insurance/products", date: "2026" }, { label: "Financing", title: "Operating Loans", href: "/financing/operating-loans", date: "2026" }]
  }} />;
}

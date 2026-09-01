import type { Metadata } from "next";
import ReferenceIndustryPage from "@/components/ReferenceIndustryPage";

export const metadata: Metadata = { title: "Greenhouse & Nursery Producers | Farm Funding" };

export default function GreenhouseNurseryPage() {
  return <ReferenceIndustryPage data={{
    title: "Greenhouse & Nursery Producers",
    description: "Greenhouse and nursery businesses have specialized production cycles and capital needs. Farm Funding combines agricultural financing with business expertise for these operations.",
    image: "/images/industries/Green_AdobeStock_184545898.jpg",
    imageAlt: "Greenhouse production",
    services: ["Operating Loans", "Equipment Financing", "Facility Loans", "Tax Planning and Prep", "Recordkeeping", "Business Consulting", "Financial Benchmarking", "Crop Insurance"],
    programs: ["FarmStart", "GenerationNext", "Young, Beginning, Small & Veteran Farmer Incentives"],
    related: [{ label: "Services", title: "Business Consulting", href: "/services/business-consulting", date: "2026" }, { label: "Services", title: "Financial Benchmarking", href: "/services/benchmarking", date: "2026" }]
  }} />;
}

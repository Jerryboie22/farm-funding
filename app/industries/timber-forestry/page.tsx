import type { Metadata } from "next";
import ReferenceIndustryPage from "@/components/ReferenceIndustryPage";

export const metadata: Metadata = { title: "Timber & Forestry Producers | Farm Funding" };

export default function TimberForestryPage() {
  return <ReferenceIndustryPage data={{
    title: "Timber & Forestry Producers",
    description: "Farm Funding understands the long cycles, land values and specialized equipment that shape timber and forestry businesses.",
    image: "/images/industries/Timber_iStock_000018089726XLarge.jpg",
    imageAlt: "Forested landscape",
    services: ["Land Loans", "Operating Loans", "Equipment Financing", "Facility Loans", "Tax Planning and Prep", "Recordkeeping", "Business Consulting", "Estate Planning"],
    programs: ["Young, Beginning, Small & Veteran Farmer Incentives", "GenerationNext"],
    related: [{ label: "Financing", title: "Land Loans", href: "/financing/land-loans", date: "2026" }, { label: "Industries", title: "Explore all industries", href: "/industries", date: "2026" }]
  }} />;
}

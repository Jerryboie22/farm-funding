import type { Metadata } from "next";
import ReferenceIndustryPage from "@/components/ReferenceIndustryPage";

export const metadata: Metadata = { title: "Fishing & Aquatic Producers | Farm Funding" };

export default function FishingAquaticPage() {
  return <ReferenceIndustryPage data={{
    title: "Fishing & Aquatic Producers",
    description: "Farm Funding understands the unique needs of commercial fishing and aquatic producers, from vessels and facilities to working capital and risk management.",
    image: "/images/industries/Fishing_shutterstock_744093874.jpg",
    imageAlt: "Commercial fishing vessel and water",
    services: ["Operating Loans", "Equipment Financing", "Facility Loans", "Tax Planning and Prep", "Recordkeeping", "Business Consulting", "Estate Planning", "Crop Insurance"],
    programs: ["Young, Beginning, Small & Veteran Farmer Incentives", "FarmStart", "GenerationNext"],
    related: [{ label: "Industry Update", title: "Oyster industry outlook and market resources", href: "/resources/trends", date: "2026" }, { label: "Financing", title: "Equipment Financing", href: "/financing/equipment-financing", date: "2026" }]
  }} />;
}

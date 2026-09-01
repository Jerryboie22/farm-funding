import type { Metadata } from "next";
import ReferenceIndustryPage from "@/components/ReferenceIndustryPage";

export const metadata: Metadata = { title: "Livestock & Equine Producers | Farm Funding" };

export default function LivestockEquinePage() {
  return <ReferenceIndustryPage data={{
    title: "Livestock & Equine Producers",
    description: "From cattle and sheep to equine operations, Farm Funding provides financing and business services built around the realities of livestock production.",
    image: "/images/industries/Equine_iStock-862128746.jpg",
    imageAlt: "Horse in a farm pasture",
    services: ["Operating Loans", "Equipment Financing", "Facility Loans", "Tax Planning and Prep", "Recordkeeping", "Business Consulting", "Estate Planning", "Livestock Insurance"],
    programs: ["Young, Beginning, Small & Veteran Farmer Incentives", "FarmStart", "GenerationNext"],
    related: [{ label: "Crop Insurance", title: "Dairy & Livestock Insurance", href: "/crop-insurance/dairy-livestock", date: "2026" }, { label: "Financing", title: "Operating Loans", href: "/financing/operating-loans", date: "2026" }]
  }} />;
}

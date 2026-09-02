import type { Metadata } from "next";
import ReferenceIndustryPage from "@/components/ReferenceIndustryPage";

export const metadata: Metadata = {
  title: "Fishing & Aquatic Producers | Farm Funding",
  description: "Financing and financial services for commercial fishing and aquatic producers in the Northeast.",
};

export default function FishingAquaticPage() {
  return (
    <ReferenceIndustryPage
      data={{
        title: "Fishing & Aquatic Producers",
        description: "Farm Funders understands the unique needs of fishing and aquatic producers.",
        image: "/images/industries/Fishing_shutterstock_744093874.jpg",
        imageAlt: "Commercial fishing vessel and water",
        update: {
          title: "Read our latest analysis of the current state of the commercial fishing industry.",
          body: "Our industry specialists provide practical information on markets, operating conditions and the financial considerations that shape commercial fishing and aquatic businesses.",
          href: "/resources/Industry-Trends-and-Outlooks",
        },
        webinar: {
          title: "2026 Oyster Industry Outlook",
          body: "Bob Rheault of East Coast Shellfish Growers Association provided an outlook on oyster farming approaches, challenges and markets.",
          href: "/resources/Industry-Trends-and-Outlooks",
        },
        servicesHeading: "Financing & Services We Offer Fishermen & Aquatic Producers",
        services: [
          "Operating Loans",
          "Equipment Financing",
          "Facility Loans",
          "Tax Planning and Prep",
          "Recordkeeping",
          "Business Consulting",
          "Estate Planning",
        ],
        programs: [
          "Young, Beginning, Small & Veteran Farmer Incentives",
          "FarmStart",
          "GenerationNext",
        ],
        related: [
          {
            label: "Industry Update",
            title: "Fuel, Fertilizer and Conflict in the Middle East: What to Know Now",
            href: "/resources/Industry-Trends-and-Outlooks/Reports/2606KEP_FuelFertilizerandConflictinMiddleEast",
            date: "June 2, 2026",
          },
          {
            label: "Financing",
            title: "Equipment Financing",
            href: "/financing/equipment-financing",
            date: "2026",
          },
        ],
      }}
    />
  );
}

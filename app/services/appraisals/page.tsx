import type { Metadata } from "next";
import ReferenceServicePage from "@/components/ReferenceServicePage";

export const metadata: Metadata = {
  title: "Appraisals | Farm Funding",
  description:
    "Agricultural appraisal expertise for farms, rural property and lending decisions.",
};

const REFERENCE_APPRAISAL_IMAGE =
  "https://www.farm-funders.com/-/media/farm-credit-east/services/Appraisals_AdobeStock_171103079.jpg?hash=9EE2A22686C3EA017337978F30D5F251&iar=0";

export default function AppraisalsPage() {
  return (
    <ReferenceServicePage
      data={{
        title: "Appraisals",
        description:
          "Our appraisal professionals understand agricultural property and the factors that influence value across the Northeast.",
        image: REFERENCE_APPRAISAL_IMAGE,
        imageAlt: "Agricultural property appraisal",
        introTitle: "Agricultural appraisal expertise",
        highlights: [
          {
            title: "Agricultural knowledge",
            body: "Our team understands farms, farmland, improvements and the specialized characteristics of agricultural real estate.",
          },
          {
            title: "Local market perspective",
            body: "Appraisal decisions are informed by knowledge of Northeast agricultural markets and rural property conditions.",
          },
          {
            title: "Useful valuations",
            body: "We provide valuation work that supports financing, planning, transfers and other important farm-business decisions.",
          },
        ],
        sections: [
          {
            title: "Appraisal services",
            body: "Our appraisal work can address agricultural land, rural residences, farm improvements and other property associated with an agricultural operation.",
          },
          {
            title: "When an appraisal may be needed",
            bullets: [
              "Purchasing or refinancing agricultural real estate",
              "Farm transfer and estate planning",
              "Business expansion and capital improvements",
              "Financing and collateral decisions",
              "Establishing an informed property value",
            ],
          },
          {
            title: "An agriculture-focused approach",
            body: "Agricultural property requires more than a conventional real-estate comparison. Our process considers the property's use, improvements, location, market evidence and the characteristics of the operation.",
          },
        ],
        faqs: [
          {
            q: "What types of property can be appraised?",
            a: "Assignments may include agricultural land, rural residences, farm improvements and other rural property, depending on the purpose and scope of the appraisal.",
          },
          {
            q: "When should I request an appraisal?",
            a: "An appraisal can be useful when you are purchasing, refinancing, transferring, expanding or otherwise making an important decision involving agricultural real estate.",
          },
          {
            q: "How do I get started?",
            a: "Contact your local office to discuss your property and determine the appropriate next step.",
          },
        ],
        related: [
          {
            label: "SERVICES",
            title: "Business Consulting",
            href: "/services/business-consulting",
          },
          {
            label: "SERVICES",
            title: "Estate Planning",
            href: "/services/estate-planning",
          },
          {
            label: "FINANCING",
            title: "Land Loans",
            href: "/financing/land-loans",
          },
        ],
      }}
    />
  );
}

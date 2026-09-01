import type { Metadata } from "next";
import ReferenceServicePage from "@/components/ReferenceServicePage";

export const metadata: Metadata = {
  title: "Farm Credit Connect | Farm Funding",
  description: "Farm Credit Connect resources and connections for agricultural customers.",
};

export default function FarmCreditConnectPage() {
  return (
    <ReferenceServicePage
      data={{
        title: "Farm Credit Connect",
        description:
          "Connect with agricultural resources, specialists and practical information that can help you make stronger business decisions.",
        image: "/images/services/farmers-in-field-with-tablet.jpg",
        imageAlt: "Agricultural professionals reviewing information together",
        introTitle: "A better connection to agricultural expertise",
        highlights: [
          { title: "Built for agriculture", body: "Farm Credit Connect brings agricultural knowledge and practical resources closer to the businesses that need them." },
          { title: "Useful connections", body: "Find information and people who can help you evaluate opportunities, challenges and next steps." },
          { title: "One relationship at a time", body: "Your local Farm Funding team can help point you toward the resources most relevant to your situation." },
        ],
        sections: [
          { title: "What you can connect to", bullets: ["Agricultural business resources", "Farm management and financial information", "Industry specialists and subject-matter expertise", "Education, events and webinars", "Programs and services available to eligible customers"] },
          { title: "How to use Farm Credit Connect", body: "Start with the question or business need you are trying to solve. Your Farm Funding representative can help identify the right resource or specialist and explain how to take the next step." },
        ],
      }}
    />
  );
}

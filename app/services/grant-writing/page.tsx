import type { Metadata } from "next";
import ReferenceServicePage from "@/components/ReferenceServicePage";

export const metadata: Metadata = {
  title: "Grant Writing | Farm Funding",
  description: "Grant writing and funding support for farms and agribusinesses.",
};

export default function GrantWritingPage() {
  return (
    <ReferenceServicePage
      data={{
        title: "Grant Writing",
        description:
          "Grant writing support for farms and agribusinesses pursuing projects that grow, improve or diversify their operations.",
        image: "/images/services/Grant Writing_AdobeStock_163522442.jpg",
        imageAlt: "Agricultural professional reviewing information in a field",
        introTitle: "We position our clients to succeed.",
        highlights: [
          { title: "Agricultural experience", body: "Our team understands agriculture and knows how to identify programs that can fit real farm and agribusiness projects." },
          { title: "Program knowledge", body: "We evaluate program requirements and help match the opportunity with the project, eligibility and funding objectives." },
          { title: "Personalized service", body: "A grant writer works directly with you to understand the project and shape a clear, persuasive application." },
        ],
        sections: [
          { title: "Types of grants we work with", bullets: ["Value-added producer programs", "Economic development opportunities", "Energy and efficiency programs", "State and regional agricultural programs", "Conservation and rural development opportunities"] },
          { title: "How we can help", bullets: ["Clarify the project's story and measurable benefits", "Determine whether a program fits your objectives", "Organize an application around program requirements", "Prepare supporting analysis when required", "Help identify additional funding opportunities"] },
          { title: "Get started", body: "Tell us about the project, the investment you are considering and the stage you are in. We can help determine whether grant writing support is a good fit." },
        ],
        faqs: [
          { q: "How much does grant writing cost?", a: "The cost depends on the time and complexity required for the application and related reporting. Your local office can discuss the engagement with you." },
          { q: "Will I be billed if I do not receive a grant?", a: "Grant writing involves professional time and preparation, so fees can apply regardless of the final funding decision." },
          { q: "How long does a grant decision take?", a: "Timing depends on the funding organization and program. Some decisions arrive within weeks while others take several months." },
        ],
      }}
    />
  );
}

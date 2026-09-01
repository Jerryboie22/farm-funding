import type { Metadata } from "next";
import ReferenceServicePage from "@/components/ReferenceServicePage";

export const metadata: Metadata = {
  title: "Estate Planning | Farm Funding",
  description: "Estate and farm succession planning for Northeast families.",
};

export default function EstatePlanningPage() {
  return (
    <ReferenceServicePage
      data={{
        title: "Estate Planning",
        description:
          "Build a practical plan for your family, your assets and the future of your agricultural business with guidance from an experienced Farm Funding consultant.",
        image: "/images/services/Estate Planning_shutterstock_383350174.jpg",
        imageAlt: "Horse grazing beside a red farm barn",
        introTitle: "You can trust Farm Funding for the estate planning you need.",
        highlights: [
          { title: "More expertise", body: "Our consultants have helped Northeast farm families work through complex financial and transition decisions." },
          { title: "We simplify the process", body: "Planning is broken into manageable decisions so families can understand the choices and keep moving forward." },
          { title: "We understand your legacy", body: "A farm transfer involves more than assets. We help families address the financial and personal realities of passing a business forward." },
        ],
        sections: [
          { title: "Why estate planning matters", bullets: ["Direct assets toward the people and purposes you choose", "Reduce the chance of costly surprises for your family", "Plan for retirement needs", "Prepare the next generation for ownership and management", "Give the farm and family a clearer path forward"] },
          { title: "Family business transfers", body: "A strong transition plan considers retirement needs, successor development, continuity of the business and the responsibilities each family member will carry." },
          { title: "Start the conversation", body: "Estate planning works best when it starts early. Contact your local Farm Funding office to discuss your family, your timeline and the areas that need attention first." },
        ],
        faqs: [
          { q: "When should I begin estate planning?", a: "Earlier is generally better. Starting before a transition is urgent gives a family time to build resources, develop successors and work through difficult decisions." },
          { q: "Does transferring ownership also transfer control?", a: "Not necessarily. There are multiple structures that can separate the timing of equity transfers from management and control decisions." },
          { q: "Who should consider estate planning?", a: "Any agricultural business owner with assets, a family transition or retirement goals can benefit from a well-organized plan." },
        ],
      }}
    />
  );
}

import type { Metadata } from "next";
import ReferenceServicePage from "@/components/ReferenceServicePage";

export const metadata: Metadata = {
  title: "Appraisals | Farm Funding",
  description: "Agricultural and rural property appraisal services from Farm Funding.",
};

export default function AppraisalsPage() {
  return (
    <ReferenceServicePage
      data={{
        title: "Appraisals",
        description:
          "Accurate, defensible valuations help farmers, landowners and lenders make confident decisions about agricultural and rural property.",
        image: "/images/services/Appraisals_AdobeStock_171103079.jpg",
        imageAlt: "Aerial view of farms and rural property",
        introTitle: "Appraisal expertise built around agriculture",
        highlights: [
          { title: "Agricultural expertise", body: "Our appraisal approach is grounded in the realities of farms, land, improvements, timber and other rural property uses." },
          { title: "Local knowledge", body: "We understand Northeast agricultural markets and the factors that can influence rural property value." },
          { title: "Clear, useful reports", body: "Our work is designed to give customers and lending teams a practical valuation they can use for planning and financing decisions." },
        ],
        sections: [
          { title: "What we appraise", body: "Our appraisal work can support farmland, rural residences, agricultural improvements, specialty operations and other property connected to an agricultural business." },
          { title: "When an appraisal can help", bullets: ["Purchasing or refinancing agricultural real estate", "Planning a farm transfer or estate", "Evaluating an expansion, improvement or new enterprise", "Supporting financing and collateral decisions", "Understanding the value of land and improvements"] },
          { title: "A practical process", body: "We review the property, its intended use, relevant market evidence and the characteristics that make agricultural real estate different from conventional residential or commercial property." },
        ],
        faqs: [
          { q: "What types of property can be appraised?", a: "Agricultural land, rural homes, farm improvements and other rural property can be evaluated depending on the assignment." },
          { q: "How do I request an appraisal?", a: "Contact your local Farm Funding office and a representative can help determine the appropriate next step." },
        ],
      }}
    />
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import ReferenceServicePage from "@/components/ReferenceServicePage";

export const metadata: Metadata = {
  title: "Business Consulting | Farm Funding",
  description: "Agricultural business consulting and financial management services.",
};

export default function BusinessConsultingPage() {
  return (
    <>
      <ReferenceServicePage
        data={{
          title: "Business Consulting",
          description:
            "Agricultural consultants work alongside you to understand your goals, evaluate the business from multiple angles and identify practical ways to strengthen the bottom line.",
          image: "/images/services/Business Consulting _AdobeStock_143537446.jpg",
          imageAlt: "Two agricultural professionals reviewing information in a greenhouse",
          introTitle: "We help turn farm records and business goals into better decisions.",
          highlights: [
            { title: "Unbiased perspective", body: "A consultant provides an objective outside view when you are weighing investments, transitions, growth or operational changes." },
            { title: "Agricultural experience", body: "Our consultants understand the financial and operational realities of Northeast agriculture and related businesses." },
            { title: "A plan built around you", body: "Recommendations are connected to your goals, resources, risk tolerance and the way you want to run your business." },
          ],
          sections: [
            { title: "Consulting services", bullets: ["Financial analysis and cash-flow planning", "Business and strategic planning", "Enterprise and cost-of-production analysis", "Expansion and transition planning", "Succession and estate planning", "Management decision support"] },
            { title: "Benchmarking", body: "Consultants can also connect qualifying businesses with financial benchmarking programs that compare performance with relevant peers." },
            { title: "The relationship matters", body: "Good consulting starts with understanding the people behind the numbers. We work collaboratively, explain the findings and help turn priorities into actions you can track." },
            { title: "Meet the Consulting Team", body: "Explore the Farm Funding consulting team and the agricultural specialists serving customers throughout the Northeast." },
          ],
          faqs: [
            { q: "What does a business consultant do?", a: "A consultant reviews financial and operational information, discusses your goals and helps you evaluate decisions using the numbers and the realities of your business." },
            { q: "Can a consultant help with succession planning?", a: "Yes. Business transition, succession and estate planning are among the areas where a Farm Funding consultant can provide structured guidance." },
          ],
        }}
      />
      <section className="px-[4%] py-12 bg-white text-center">
        <Link href="/services/business-consulting/consulting-team" className="inline-flex px-7 py-3.5 bg-clay text-white text-sm font-bold rounded-sm hover:bg-clay-dark">
          Meet the Consulting Team
        </Link>
      </section>
    </>
  );
}

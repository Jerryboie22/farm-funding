import type { Metadata } from "next";
import ReferenceServicePage from "@/components/ReferenceServicePage";

export const metadata: Metadata = {
  title: "Financial Benchmarking | Farm Funding",
  description: "Benchmarking programs for Northeast agricultural businesses.",
};

export default function BenchmarkingPage() {
  return (
    <ReferenceServicePage
      data={{
        title: "Financial Benchmarking",
        description:
          "Benchmark your operation against relevant industry data and turn the numbers into practical management decisions.",
        image: "/images/services/Financial Benchmarking.jpg",
        imageAlt: "Grape grower working among vineyard rows",
        introTitle: "Financial benchmarking delivers insights for profitability.",
        highlights: [
          { title: "Personalized service", body: "A Farm Funding consultant works with you to interpret the results and focus on the areas that matter most to your operation." },
          { title: "More expertise", body: "You get comparative information together with agricultural business expertise that helps put the results into context." },
          { title: "Comprehensive review", body: "Benchmarking can reveal strengths, weaknesses, efficiency opportunities and areas where management changes may improve results." },
        ],
        sections: [
          { title: "Benchmarking programs", body: "Programs can be tailored to agricultural businesses such as dairy and winery operations, using the measures that best describe the business." },
          { title: "What benchmarking helps you see", bullets: ["How your business compares with similar operations", "Where costs or productivity are out of line", "Which strengths can be leveraged", "Where efficiencies may improve profitability", "What actions deserve attention first"] },
          { title: "How benchmarking works", bullets: ["Collect and organize financial and operational information", "Compare results with appropriate peer data", "Review the findings with a Farm Funding consultant", "Set practical priorities and an action plan", "Follow up as your business and results change"] },
          { title: "Your information stays confidential", body: "Benchmarking is designed to provide useful comparisons while keeping the individual results of participating businesses private between the business and its consultant." },
        ],
        faqs: [
          { q: "Who participates in benchmarking?", a: "Programs are designed for progressive agricultural and related businesses that want a clearer view of financial and operational performance." },
          { q: "What reports can I receive?", a: "Reports vary by program, but can include comparative earnings, balance-sheet, cash-flow, expense, labor, equipment and efficiency measures." },
          { q: "How do I learn more?", a: "Contact your local Farm Funding office to discuss the program that fits your business." },
        ],
      }}
    />
  );
}

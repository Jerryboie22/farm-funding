import ReferenceContentPage from "@/components/ReferenceContentPage";

export const metadata = { title: "Financial Reports | Farm Funding" };

const reports = ["March 2026 Quarterly Report", "Farm Funding 2025 Annual Report", "2025 Annual Report – Financials Only", "September 2025 Quarterly Report", "June 2025 Quarterly Report", "March 2025 Quarterly Report", "2024 Annual Report", "2024 Annual Report – Financials Only", "2023 Annual Report", "2023 Annual Report – Financials Only"];

export default function FinancialReportsPage() {
  return <ReferenceContentPage title="Financial Reports" intro="Download and view the latest Farm Funding financial reports and learn more about the financial strength behind our customer-owned cooperative." image="/images/about/Financial-Reports_Budgets2017_Overview-Card.jpg" sections={[
    { title: "Financial Highlights", body: "Farm Funding's financial strength supports dependable service, long-term lending capacity and value for customer-owners.", bullets: ["$14.2 billion in total loans as of December 31, 2025.", "More than $1.7 billion in cash patronage dividends paid since the program began.", "$20.2 million invested through FarmStart in more than 400 beginning farm and fishing businesses."] },
    { title: "From the CEO", body: "Strong growth and continued investment in strategic technology helped produce strong 2025 financial results. Patronage remains a fundamental part of the cooperative value proposition." },
    { title: "Financial Reports", body: "The current reporting library includes quarterly reports, annual reports and financial-only versions for recent years.", bullets: reports },
    { title: "Need a printed report?", body: "If you prefer not to download a report, contact us with your name and address and our team can help arrange a copy.", links: [{ label: "Contact Us", href: "/contact" }] },
  ]} />;
}

import ReferenceContentPage from "@/components/ReferenceContentPage";

export const metadata = {
  title: "Equal Opportunity & Legal | Farm Funding",
  description:
    "Farm Funding is an equal opportunity provider, employer, and lender, committed to fair lending and workplace practices.",
};

export default function EqualOpportunityPage() {
  return (
    <ReferenceContentPage
      title="Equal Opportunity & Legal"
      intro="Farm Funding is an equal opportunity provider, employer and lender. We are committed to fair treatment of every applicant, customer, and employee, regardless of race, color, national origin, religion, sex, gender identity, sexual orientation, disability, age, marital or family status, or any other characteristic protected by law."
      sections={[
        {
          title: "Fair lending",
          body: "Credit decisions are based on an applicant's ability to repay and other legitimate business factors — never on a protected characteristic. If you believe you have been treated unfairly in connection with a credit application, you have the right to file a complaint with the appropriate regulator.",
        },
        {
          title: "Equal employment opportunity",
          body: "Farm Funding provides equal employment opportunity to all employees and applicants, and prohibits discrimination and harassment of any kind related to a protected characteristic during any stage of employment, including hiring, promotion, and termination.",
        },
        {
          title: "Related policies",
          bullets: [
            "Non-Discrimination Statement (crop insurance)",
            "Whistleblower Reporting System",
            "Privacy Statement",
          ],
          links: [
            { label: "Crop Insurance Non-Discrimination Statement", href: "/crop-insurance/non-discrimination-statement" },
            { label: "Whistleblower", href: "/whistleblower" },
            { label: "Privacy Statement", href: "/privacy" },
          ],
        },
      ]}
      cta="Have a concern to report?"
    />
  );
}

import ReferenceContentPage from "@/components/ReferenceContentPage";

export const metadata = {
  title: "Whistleblower | Farm Funding",
  description:
    "Farm Funding provides a confidential, third-party channel for reporting suspected illegal or unethical activity within the association.",
};

export default function WhistleblowerPage() {
  return (
    <ReferenceContentPage
      title="Whistleblower Reporting System"
      intro="Farm Funding has established a confidential and anonymous channel for reporting suspected illegal and unethical activity within the cooperative. It is intended for concerns such as suspected fraud, embezzlement, misuse of funds, or intentional misstatement of financial records — not for general customer-service questions or complaints."
      image="/images/about/Code-of-Ethics_iStock-1340002658_Featured-Content.jpg"
      sections={[
        {
          title: "How to report",
          body: "Reports can be made anonymously, or with your name provided, through an independent third-party vendor. Reports may be submitted online or by calling the toll-free reporting line at any time.",
          bullets: [
            "Online: submit a report through our independent EthicsPoint-hosted reporting portal",
            "Phone: call the confidential, toll-free reporting line (available 24/7)",
          ],
          links: [{ label: "Customer-service concern? Contact Us instead", href: "/contact" }],
        },
        {
          title: "Confidentiality",
          body: "Reports are handled with the highest degree of confidentiality by the independent vendor facilitating the process. You may choose to remain anonymous or share your name with the vendor only.",
        },
        {
          title: "How reports are reviewed",
          body: "Every report is routed to the association's Chief Risk Officer and Standards of Conduct Official. Matters involving accounting, auditing, or fraud are also escalated to the Board Audit Committee Chair for review and resolution.",
        },
        {
          title: "Protection for reporters",
          body: "Retaliation against anyone who reports a good-faith concern is prohibited under applicable federal whistleblower protection laws. That said, knowingly filing a false report or providing false information may result in action against the reporter.",
        },
      ]}
      cta="Have a customer-service question instead?"
    />
  );
}

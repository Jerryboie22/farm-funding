import ReferenceContentPage from "@/components/ReferenceContentPage";

export const metadata = {
  title: "Privacy Statement | Farm Funding",
  description:
    "How Farm Funding collects, uses, and shares customer information, and your choices regarding your personal data.",
};

export default function PrivacyPage() {
  return (
    <ReferenceContentPage
      title="Privacy Statement"
      intro="Farm Funding is committed to protecting the privacy of the personal information you share with us. This statement explains what we collect, how we use it, and the choices available to you."
      sections={[
        {
          title: "Information we collect",
          body: "We collect information you provide directly, such as through a loan application or the Contact Us form, along with information gathered automatically when you use our digital platforms.",
        },
        {
          title: "How we share information",
          bullets: [
            "With your consent, for a specific purpose you've agreed to",
            "With service providers who help us operate our business",
            "In connection with a merger, acquisition, or sale of assets",
            "As required by law, regulation, or legal process",
          ],
          body: "We do not sell your personal information. Regulations applicable to agricultural lenders generally restrict further disclosure of certain borrower information beyond what's needed to service your account.",
        },
        {
          title: "Retention and updates",
          body: "We retain personal information for as long as we have a legitimate business, legal, or regulatory need for it. We may update this Privacy Statement from time to time; continued use of our digital platforms after an update constitutes acknowledgment of the change.",
        },
        {
          title: "Your rights",
          body: "California residents have additional rights regarding their personal information under state law.",
          links: [{ label: "Data Rights for California Residents", href: "/data-rights-california" }],
        },
      ]}
      cta="Questions about your data?"
    />
  );
}

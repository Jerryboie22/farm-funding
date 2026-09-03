import ReferenceContentPage from "@/components/ReferenceContentPage";

export const metadata = {
  title: "Terms of Use | Farm Funding",
  description:
    "The terms governing your use of Farm Funding's website and online banking services.",
};

export default function TermsPage() {
  return (
    <ReferenceContentPage
      title="Terms of Use"
      intro="Thank you for your interest in Farm Funding's website and online services. These terms explain what you agree to by using our digital platforms, including online account access."
      sections={[
        {
          title: "Using our online services",
          body: "By enrolling in online access, you agree to keep your User ID and password confidential and to update your account information regularly. It's strongly recommended that you change your password periodically to help protect your financial information.",
        },
        {
          title: "Reporting unauthorized use",
          body: "If you suspect unauthorized use of your account, notify us immediately. Prompt notification helps minimize any losses that could otherwise result from unauthorized access.",
          links: [{ label: "Contact Us", href: "/contact" }],
        },
        {
          title: "Website content",
          body: "Content on this site is provided for general informational purposes and is subject to change without notice. Use of this website does not create a lender-borrower relationship; that relationship is established only through a signed loan or service agreement.",
        },
      ]}
      cta="Need help with your online account?"
    />
  );
}

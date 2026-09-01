import ReferenceContentPage from "@/components/ReferenceContentPage";

export const metadata = { title: "Information Security | Farm Funding" };

export default function InformationSecurityPage() {
  return <ReferenceContentPage title="Information Security" intro="Protecting customer information is a shared responsibility. Farm Funding uses people, processes, technology and physical safeguards to protect sensitive information." image="/images/about/Code-of-Ethics_iStock-1340002658_Featured-Content.jpg" sections={[
    { title: "Protecting your information", body: "We maintain safeguards designed to protect confidential customer, employee and business information and continually review our practices as technology and threats evolve." },
    { title: "Security awareness", body: "Employees receive guidance on recognizing suspicious activity, protecting credentials and handling confidential information appropriately." },
    { title: "Online security", body: "Use strong, unique passwords, keep devices and software current, and be cautious with unexpected links, attachments or requests for sensitive information." },
    { title: "Farm Funding will not ask for sensitive information by unexpected message", body: "If a message appears suspicious, do not use the contact information in the message. Contact your local Farm Funding office through a trusted channel instead." },
    { title: "Secure facilities", body: "Physical security controls and access practices help protect the buildings, systems and records used to serve customer-owners." },
    { title: "Report a concern", body: "If you believe your information or account may have been compromised, contact Farm Funding promptly so our team can help determine the appropriate next steps.", links: [{ label: "Contact Us", href: "/contact" }] },
  ]} />;
}

import ReferenceContentPage from "@/components/ReferenceContentPage";

export const metadata = { title: "Go To Assist | Farm Funding" };

export default function GoToAssistPage() {
  return <ReferenceContentPage title="Go To Assist" intro="Go To Assist connects agricultural producers with practical resources, tools and information to help them move their business forward." image="/images/industries/Industries Hero_AdobeStock_214274310.jpg" sections={[
    { title: "Resources for your operation", body: "Use the resources available through Farm Funding to find information that can support financial planning, agriculture, risk management and business decisions.", links: [{ label: "Explore Resources", href: "/resources" }] },
    { title: "Talk with your local team", body: "When you need advice tailored to your operation, our local teams can help you identify the appropriate financing and services.", links: [{ label: "Contact Us", href: "/contact" }] },
  ]} cta="Need help getting started?" />;
}

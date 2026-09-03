import ReferenceContentPage from "@/components/ReferenceContentPage";

export const metadata = {
  title: "Newsroom | Farm Funding",
  description:
    "Press releases, financial results, and company news from Farm Funding, a customer-owned cooperative serving Northeast agriculture.",
};

export default function NewsroomPage() {
  return (
    <ReferenceContentPage
      title="Newsroom"
      intro="Stay up to date on Farm Funding press releases, financial results, and the initiatives that support our customer-owners and the communities we serve."
      image="/images/about/Newsroom_Farmer_Overview-Card.jpg"
      sections={[
        {
          title: "Press Releases",
          body: "From board elections and leadership changes to community grants and scholarship programs, our press releases cover the cooperative's ongoing work across the region.",
          bullets: [
            "Board election results and reorganization",
            "Community fund and mental-health initiative donations",
            "Scholarship and grant program announcements",
            "Partner webinars and industry outlook events",
          ],
        },
        {
          title: "Financial Results",
          body: "As a customer-owned cooperative, Farm Funding shares its quarterly and annual financial results with the members it serves, including patronage dividends returned to customer-owners each year.",
        },
        {
          title: "Media Contact",
          body: "Members of the media can reach our Marketing & Communications team directly for interview requests, company background, or additional information.",
          links: [{ label: "Contact Us", href: "/contact" }],
        },
      ]}
      cta="Looking for a specific announcement?"
    />
  );
}

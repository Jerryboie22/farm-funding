import ReferenceContentPage from "@/components/ReferenceContentPage";

export const metadata = { title: "Community Support | Farm Funding" };

export default function CommunitySupportPage() {
  return <ReferenceContentPage title="Community Support" intro="Farm Funding helps support Northeast rural communities through grants, scholarships, sponsorships, customer assistance and other programs." image="/images/about/Community-Support_Volunteer-talks-to-large-crowd.jpg" sections={[
    { title: "Giving back to Northeast rural communities", body: "Being a true partner to agriculture, commercial fishing and forest products means supporting the people and rural communities where those industries thrive. We consider sponsorship requests and publish resources about our stewardship work." },
    { title: "2025 Sustainability Report", body: "Our sustainability reporting highlights the ways Farm Funding supports customers, employees, rural communities and the long-term future of Northeast agriculture.", links: [{ label: "Learn More", href: "/about/community-support" }] },
    { title: "Grants & Awards", body: "Our community programs include support for agricultural development, farmers markets, food access and rural initiatives.", bullets: ["AgEnhancement Grants", "Farmers Market Grants", "Food Access Infrastructure Initiative Grants", "Lipinski Rural Initiatives Award"] },
    { title: "Scholarships", body: "We support the next generation through educational and agricultural scholarships.", bullets: ["Higher Education Scholarships", "FFA Scholarships", "Ag Educator Scholarships"], links: [{ label: "View Scholarships", href: "/about/community-support/scholarships" }] },
    { title: "Public Policy", body: "Learn more about issues that affect Northeast agriculture and the businesses and communities we serve.", links: [{ label: "View Public Policy", href: "/about/community-support/public-policy" }] },
    { title: "Farm Funding Cares", body: "Farm Funding employees support farm families and rural organizations affected by disasters and contribute to nonprofit organizations focused on youth, agriculture and rural communities." },
    { title: "Latest News", body: "Explore recent community-support announcements, scholarships and rural-development initiatives.", links: [{ label: "Visit the Newsroom", href: "/about/newsroom" }] },
  ]} />;
}

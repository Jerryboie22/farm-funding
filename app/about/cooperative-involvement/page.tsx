import ReferenceContentPage from "@/components/ReferenceContentPage";

export const metadata = { title: "Cooperative Involvement | Farm Funding" };

export default function CooperativeInvolvementPage() {
  return <ReferenceContentPage title="Cooperative Involvement" intro="As a cooperative owned by our customers, customer involvement is central to the long-term success of Farm Funding." image="/images/about/Appreciation Sign copy_Overview Card.png" sections={[
    { title: "Young, Beginning, Small, Veteran Board Advisor", body: "Our YBSV Board Advisor opportunity gives a customer from a young, beginning, small or veteran operation experience in cooperative governance while bringing those customer perspectives to the board.", image: "/images/about/VoiceInOwnershipGraphic_Overview Card.png" },
    { title: "Regional Advisory Committees", body: "Regional advisory committees bring together customer-owners and agricultural community members with local leadership to provide grassroots feedback and industry insight." },
    { title: "Customer Meetings", body: "Customers are invited to business meetings, annual meetings and appreciation events throughout the year. These gatherings provide updates about the cooperative and opportunities to share feedback." },
    { title: "Director Elections", body: "Customer-owners participate in the cooperative's governance through director elections. Eligible stockholders can participate in the nomination and voting process." },
    { title: "Association Nominating Committee", body: "The nominating committee operates independently and helps identify qualified candidates for the annual director election process." },
  ]} />;
}

import ReferenceContentPage from "@/components/ReferenceContentPage";

export const metadata = {
  title: "Careers | Farm Funding",
  description:
    "Explore careers with Farm Funding — a customer-owned cooperative serving Northeast agriculture, with benefits, career development, and community programs.",
};

export default function CareersPage() {
  return (
    <ReferenceContentPage
      title="Careers"
      intro="From our colleagues to our customers, Farm Funding is surrounded by motivated, forward-thinking people committed to Northeast agriculture. We foster a flexible, diverse and rewarding work environment, and invest heavily in the training our employees need to grow their careers."
      image="/images/about/Careers_Overview-Card.jpg"
      sections={[
        {
          title: "Employee benefits",
          body: "Farm Funding offers a range of benefits for full- and part-time employees, letting each person build a total compensation package that fits their circumstances.",
          bullets: [
            "Medical, vision and dental plans, including a health savings account option",
            "401(k) plan with employer contributions",
            "Paid time off that grows with length of service",
            "Tuition and continuing-education reimbursement",
            "Life, disability and accidental death & dismemberment coverage",
          ],
        },
        {
          title: "Career Development Program",
          body: "Many employees begin as summer interns and move into our Career Development Program (CDP) — a structured, exploratory training track that builds the credit, financial, or appraisal skills needed for a long-term career, before trainees settle into a specific role.",
        },
        {
          title: "Giving back",
          body: "Our employee-driven giving program lets staff direct year-end contributions back into local communities, and the company matches employee donations dollar-for-dollar up to an annual cap. Employees are also encouraged to volunteer with local agricultural and community organizations such as 4-H and FFA.",
          image: "/images/about/Community-Support_Volunteer-talks-to-large-crowd.jpg",
        },
      ]}
      cta="Ready to build a career in agriculture?"
    />
  );
}

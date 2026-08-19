import type { HarvestArticle } from "./articles";

const CURRENT_FEATURED_ARTICLE: HarvestArticle = {
  slug: "260714EmployeeSpotlightRiskManagementAdvisor",
  title: "Employee Spotlight: A Day in the Life of a Dairy Risk Management Advisor",
  category: "Farm Credit",
  date: "July 14, 2026",
  author: "Elisabeth Olcott",
  image: "/images/homepage/Megan Clancy spotlight.jpg",
  excerpt:
    "Shifting dairy markets and late-day price updates are daily challenges for Dairy & Livestock Risk Management Senior Advisor Megan Clancy. Read on as Megan shares what a typical week looks like, why collaboration matters and how her work helps protect dairy farms across the Northeast for the long haul.",
  sourceUrl: "https://www.farmcrediteast.com/en/resources/todays-harvest-Blog/260714EmployeeSpotlightRiskManagementAdvisor",
  sections: [
    { heading: "The Big Picture", body: "Megan Clancy works at the intersection of changing dairy markets and the long-term sustainability of Northeast farms. Her work helps producers understand risk-management tools and turn market information into practical decisions." },
    { heading: "Day-to-Day Decisions", body: "Her week combines market analysis, customer meetings, writing a weekly dairy market update and helping producers build risk-management strategies around their operations." },
    { heading: "Collaboration is Key", body: "Working across departments helps loan officers, consultants and risk-management specialists provide customers with coordinated strategies that support long-term success." },
    { heading: "Honing a Leadership Mindset", body: "Leadership development and involvement with young professionals have helped Megan grow beyond her job title while staying connected to agriculture and the next generation of industry leaders." },
  ],
};

export const CURRENT_REFERENCE_ARTICLES: HarvestArticle[] = [
  {
    slug: "260805DairyPriceSupportPolicies",
    title: "New Report Examines Dairy Price Support Policies Across the Northeast",
    category: "Ag Economy",
    date: "August 5, 2026",
    author: "Farm Credit East Knowledge Exchange",
    image: "/images/homepage/Dairy cows milking.jpg",
    excerpt: "For dairy farmers in the Northeast, profitability depends on factors outside their control. Milk prices fluctuate while production costs continue to rise. When milk prices fall below the cost of production, the financial pressure can be considerable and, ultimately, create the conditions that lead to dairy farm exits.",
    sourceUrl: "https://www.farmcrediteast.com/en/resources/todays-harvest-Blog",
    sections: [
      { heading: "The policy challenge", body: "Dairy profitability can be heavily influenced by milk-price cycles, production costs and policy decisions. The report examines the tools available to support producers when market prices do not cover the cost of production." },
      { heading: "What the report examines", body: "The analysis reviews dairy price-support approaches across Massachusetts, Maine and Connecticut and considers how policy design can affect producers, markets and long-term industry stability." },
      { heading: "What producers should watch", body: "Producers should continue to monitor milk markets, input costs and policy developments while building financial plans that account for periods of margin compression." },
    ],
  },
  {
    slug: "260803ImpersonationCalls",
    title: "Reminder to Stay Vigilant: Be Aware of Impersonation Calls",
    category: "Business Tips and Tools",
    date: "August 3, 2026",
    author: "Farm Credit East",
    image: "/images/resources/farmer-smartphone.jpg",
    excerpt: "Farm Credit East has been alerted to a rise in fraud attempts involving criminals impersonating trusted financial institutions, including Farm Credit System institutions and CoBank, Farm Credit East's funding bank. These scammers may spoof legitimate phone numbers, making it appear that the call is coming from a trusted organization even when it is not.",
    sourceUrl: "https://www.farmcrediteast.com/en/",
    sections: [
      { heading: "Be cautious with unexpected calls", body: "Scammers may spoof legitimate phone numbers so that an incoming call appears to come from a trusted financial institution. An unfamiliar request should never be treated as legitimate simply because the caller ID looks familiar." },
      { heading: "Verify before acting", body: "If a caller requests sensitive information, payment or an urgent account change, end the call and independently contact the organization using a trusted telephone number or official website." },
      { heading: "Protect your information", body: "Do not provide passwords, security codes or other sensitive information to an unexpected caller. When in doubt, pause and verify the request through an independent channel." },
    ],
  },
  {
    slug: "260721FarmCreditEastInternshipExperience",
    title: "A Summer of Learning and Growth: The Farm Credit East Internship Experience",
    category: "Farm Credit",
    date: "July 21, 2026",
    author: "Isabella Esposito",
    image: "/images/homepage/deep-agricultural-expertise_adobestock_123652875.jpg",
    excerpt: "Over the past 10 weeks, 16 interns across seven Farm Credit East offices gained hands-on experience through projects, farm tours, employee shadowing and professional development opportunities.",
    sourceUrl: "https://www.farmcrediteast.com/en/resources/todays-harvest-Blog",
    sections: [
      { heading: "Learning through experience", body: "The internship experience gives students an opportunity to see how agricultural finance works in practice through projects, farm visits and employee shadowing." },
      { heading: "Across the region", body: "Sixteen interns worked across seven Farm Credit East offices, gaining exposure to different customers, agricultural industries and professional roles." },
      { heading: "Building the next generation", body: "Hands-on learning and professional development help students understand career opportunities in agriculture, finance, accounting, communications and related fields." },
    ],
  },
];

export const FEATURED_ARTICLE = CURRENT_FEATURED_ARTICLE;

export const LATEST_TAX_TALK: HarvestArticle = {
  slug: "260604FarmHighlightsNYSBudget",
  title: "Tax Talks Highlights from the Fiscal Year 2026-2027 NYS Budget",
  category: "Tax Talks",
  date: "June 4, 2026",
  author: "Austin Weaver",
  image: "/images/resources/Logger-Calculating.jpg",
  excerpt: "Following three-months of delays, the New York State legislature has passed the Fiscal Year 2026-2027 (FY 26-27) budget. The final budget, signed into law by Gov. Kathy Hochul, includes many provisions relevant to our farm and agribusiness customers. The following are a few highlights of the recently passed legislation.",
  sourceUrl: "https://www.farmcrediteast.com/en/resources/todays-harvest-Blog/260604FarmHighlightsNYSBudget",
  sections: [
    { heading: "Extension of Refundable Investment Tax Credit for Farmers", body: "The FY 26-27 budget extends New York's refundable investment tax credit for eligible farmers, keeping the benefit available for a longer planning horizon." },
    { heading: "Standardization of Eligible Farmer Definition", body: "The budget establishes a single eligible-farmer definition for several New York agricultural tax credits, helping standardize the eligibility test across programs." },
    { heading: "$30 Million Tariff Relief Fund", body: "The budget also establishes funding for direct tariff relief intended to help New York farmers offset increased costs for fertilizer, equipment and supplies." },
  ],
};

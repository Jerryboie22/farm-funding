import type { HarvestArticle } from "./articles";
import { HARVEST_ARTICLES } from "./articles";

const FEATURED: HarvestArticle = {
  slug: "employee-spotlight-a-day-in-the-life-of-a-dairy-risk-management-advisor",
  title: "Employee Spotlight: A Day in the Life of a Dairy Risk Management Advisor",
  category: "Farm Credit",
  date: "July 14, 2026",
  author: "Elisabeth Olcott",
  image: "/images/homepage/Megan Clancy spotlight.jpg",
  excerpt: "Shifting dairy markets and late-day price updates are daily challenges for Dairy & Livestock Risk Management Senior Advisor Megan Clancy. Read on as Megan shares what a typical week looks like, why collaboration matters and how her work helps protect dairy farms across the Northeast for the long haul.",
  sourceUrl: "https://www.farmcrediteast.com/en/resources/todays-harvest-Blog/260714EmployeeSpotlightRiskManagementAdvisor",
  sections: [
    { heading: "The Big Picture", body: "Megan Clancy works at the intersection of changing dairy markets and the long-term sustainability of Northeast farms. Her work helps producers understand risk-management tools and turn market information into practical decisions." },
    { heading: "Day-to-Day Decisions", body: "Her week combines market analysis, customer meetings, writing a weekly dairy market update and helping producers build risk-management strategies around their operations." },
    { heading: "Collaboration is Key", body: "Working across departments helps loan officers, consultants and risk-management specialists provide customers with coordinated strategies that support long-term success." },
    { heading: "Honing a Leadership Mindset", body: "Leadership development and involvement with young professionals have helped Megan grow beyond her job title while staying connected to agriculture and the next generation of industry leaders." },
  ],
};

const TAX_TALK: HarvestArticle = {
  slug: "highlights-from-the-fiscal-year-2026-2027-nys-budget",
  title: "Highlights from the Fiscal Year 2026-2027 NYS Budget",
  category: "Tax Talks",
  date: "June 4, 2026",
  author: "Austin Weaver",
  image: "/images/resources/Logger-Calculating.jpg",
  excerpt: "Following three-months of delays, the New York State legislature has passed the Fiscal Year 2026-2027 (FY 26-27) budget. The final budget includes several provisions relevant to farm and agribusiness customers.",
  sourceUrl: "https://www.farmcrediteast.com/en/resources/todays-harvest-Blog/260604FarmHighlightsNYSBudget",
  sections: [
    { heading: "Extension of Refundable Investment Tax Credit for Farmers", body: "The FY 26-27 budget extends New York's refundable investment tax credit for eligible farmers, keeping the benefit available for a longer planning horizon." },
    { heading: "Standardization of Eligible Farmer Definition", body: "The budget establishes a single eligible-farmer definition for several New York agricultural tax credits, helping standardize the eligibility test across programs." },
    { heading: "$30 Million Tariff Relief Fund", body: "The budget also establishes funding for direct tariff relief intended to help New York farmers offset increased costs for fertilizer, equipment and supplies." },
  ],
};

const ADDITIONAL: HarvestArticle[] = [
  {
    slug: "supplemental-disaster-relief-program-sdrp-second-payment",
    title: "Supplemental Disaster Relief Program (SDRP) Second Payment: What It Is and What It Means for Your Farm",
    category: "Crop Insurance",
    date: "May 20, 2026",
    author: "Jeremy Forrett",
    image: "/images/resources/farmer-smartphone.jpg",
    excerpt: "USDA's SDRP update creates a second payment for producers with approved applications for qualifying 2023–2024 losses and changes the total payment factor.",
    sourceUrl: "https://www.farmcrediteast.com/en/resources/todays-harvest-Blog/260520CG_SupplementalDisasterReliefProgramSecondPayment",
    sections: [
      { heading: "What USDA Changed", body: "The updated program increases the total payment factor for eligible approved losses and provides a second payment to producers who already received the first payment." },
      { heading: "How Payments Are Delivered", body: "The program processes covered losses in stages, including losses associated with crop insurance or NAP and additional qualifying losses." },
      { heading: "What This Means for Your Operation", body: "Disaster assistance can support recovery, but it does not replace a broader risk-management strategy. Producers should understand the payment calculation and remaining exposure." },
    ],
  },
  {
    slug: "2026-apple-outlook-high-supply-with-tight-margins",
    title: "2026 Apple Outlook: High Supply with Tight Margins",
    category: "Ag Economy",
    date: "May 19, 2026",
    author: "Farm Credit East Knowledge Exchange",
    image: "/images/homepage/1-orchard_adobestock_292882711.jpg",
    excerpt: "Heavy supply, stubborn demand and rising costs are putting pressure on apple profitability as growers make orchard, labor and marketing decisions for the season ahead.",
    sourceUrl: "https://www.farmcrediteast.com/en/resources/todays-harvest-Blog/260519AppleOutlookHighSupplyTightMargins",
    sections: [
      { heading: "Supply and Demand", body: "Large supplies and changing consumer demand are putting pressure on margins, making market positioning increasingly important for growers." },
      { heading: "Orchard Decisions", body: "Growers are balancing variety decisions, labor needs and production expectations as they plan for the coming season." },
      { heading: "Managing Tight Margins", body: "Detailed cost tracking and disciplined marketing decisions can help growers respond to a high-supply environment." },
    ],
  },
  {
    slug: "building-resilient-dairy-businesses-key-takeaways-from-crop-growers-dairy-producer-meeting",
    title: "Building Resilient Dairy Businesses: Key Takeaways from Crop Growers Dairy Producer Meeting",
    category: "Crop Insurance",
    date: "May 14, 2026",
    author: "Megan Clancy",
    image: "/images/homepage/Dairy cows milking.jpg",
    excerpt: "A dairy producer meeting in Syracuse brought together industry experts to discuss dairy demand, beef-on-dairy revenue, market volatility, financial discipline and risk-management tools.",
    sourceUrl: "https://www.farmcrediteast.com/en/resources/todays-harvest-Blog/260514CG_DairyProducerMeetingTakeaway",
    sections: [
      { heading: "Dairy Demand and Components Continue to Drive Value", body: "Strong demand for value-added and high-protein products continues to support component value, while producers remain focused on the relationship between milk production and revenue." },
      { heading: "Beef-on-Dairy Revenue Continues to Grow", body: "Strong cattle markets and beef-on-dairy breeding strategies are creating additional opportunities for dairy operations to diversify revenue." },
      { heading: "Knowing Your Numbers Matters", body: "Understanding cost of production, breakeven milk prices, cash flow needs and risk tolerance remains central to resilient dairy management." },
      { heading: "Utilizing Risk Management Tools", body: "DRP, DMC, LGM, LRP and forward-contracting strategies can be combined to help producers manage volatility and protect margins." },
    ],
  },
  {
    slug: "a-day-in-the-life-of-an-appraiser-spotlight-on-young-professional-member-emily-ooms",
    title: "A Day in the Life of an Appraiser: Spotlight on Young Professional Member Emily Ooms",
    category: "Farm Credit",
    date: "January 5, 2026",
    author: "Megan Clancy",
    image: "/images/homepage/deep-agricultural-expertise_adobestock_123652875.jpg",
    excerpt: "Farm Credit East's Young Professionals program highlights Emily Ooms, whose appraisal work combines field visits, market research, valuation and mentorship.",
    sourceUrl: "https://www.farmcrediteast.com/en/resources/todays-harvest-Blog/260106-ADayInTheLifeOfAnAppraiserSpotlightOnYoungProfessionalMemberEmilyOoms",
    sections: [
      { heading: "No Two Days Alike", body: "Emily's schedule changes with customer needs, property types and project timelines, taking her across the region to evaluate agricultural properties." },
      { heading: "Boots on the Ground", body: "Field work includes visiting properties, measuring buildings, gathering notes and photographs, followed by comparable-sales research and report writing." },
      { heading: "The Art and Science of Appraisal", body: "Agricultural appraisal combines problem-solving, market knowledge and technical expertise because no two properties are exactly alike." },
      { heading: "Beyond Appraisal", body: "Emily also supports the next generation through Farm Credit East's Young Professionals efforts and mentorship of interns." },
    ],
  },
];

export const FEATURED_ARTICLE = FEATURED;
export const LATEST_TAX_TALK = TAX_TALK;
export const ALL_HARVEST_ARTICLES: HarvestArticle[] = [...HARVEST_ARTICLES, ...ADDITIONAL].filter((article, index, array) => array.findIndex((item) => item.slug === article.slug) === index);

export function getAllHarvestArticles() {
  return [FEATURED, TAX_TALK, ...ALL_HARVEST_ARTICLES].filter((article, index, array) => array.findIndex((item) => item.slug === article.slug) === index);
}

export function getCatalogArticle(slug: string) {
  return getAllHarvestArticles().find((article) => article.slug === slug);
}

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

export const FEATURED_ARTICLE = FEATURED;
export const LATEST_TAX_TALK = TAX_TALK;
export const ALL_HARVEST_ARTICLES: HarvestArticle[] = [...HARVEST_ARTICLES].filter((article, index, array) => array.findIndex((item) => item.slug === article.slug) === index);

export function getAllHarvestArticles() {
  return [FEATURED, TAX_TALK, ...ALL_HARVEST_ARTICLES].filter((article, index, array) => array.findIndex((item) => item.slug === article.slug) === index);
}

export function getCatalogArticle(slug: string) {
  return getAllHarvestArticles().find((article) => article.slug === slug);
}

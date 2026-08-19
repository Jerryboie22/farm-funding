import { ALL_HARVEST_ARTICLES } from "./catalog";
import { CURRENT_REFERENCE_ARTICLES } from "./current";

export const ALL_REFERENCE_ARTICLES = [
  ...CURRENT_REFERENCE_ARTICLES,
  ...ALL_HARVEST_ARTICLES,
].filter(
  (article, index, array) =>
    array.findIndex((item) => item.slug === article.slug) === index,
);

export const CURRENT_FEATURED_ARTICLE = CURRENT_REFERENCE_ARTICLES.find(
  (article) =>
    article.slug ===
    "employee-spotlight-a-day-in-the-life-of-a-dairy-risk-management-advisor",
)!;

export const CURRENT_LATEST_TAX_TALK = CURRENT_REFERENCE_ARTICLES.find(
  (article) =>
    article.slug ===
    "tax-talks-highlights-from-the-fiscal-year-2026-2027-nys-budget",
)!;

export function getReferenceArticle(slug: string) {
  return ALL_REFERENCE_ARTICLES.find((article) => article.slug === slug);
}

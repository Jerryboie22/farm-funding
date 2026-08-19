import { ALL_HARVEST_ARTICLES } from "./catalog";
import {
  CURRENT_REFERENCE_ARTICLES,
  FEATURED_ARTICLE as LIVE_FEATURED_ARTICLE,
  LATEST_TAX_TALK as LIVE_LATEST_TAX_TALK,
} from "./current";

export const ALL_REFERENCE_ARTICLES = [
  ...CURRENT_REFERENCE_ARTICLES,
  ...ALL_HARVEST_ARTICLES,
].filter(
  (article, index, array) =>
    array.findIndex((item) => item.slug === article.slug) === index,
);

export const CURRENT_FEATURED_ARTICLE = LIVE_FEATURED_ARTICLE;
export const CURRENT_LATEST_TAX_TALK = LIVE_LATEST_TAX_TALK;

export function getReferenceArticle(slug: string) {
  return ALL_REFERENCE_ARTICLES.find((article) => article.slug === slug);
}

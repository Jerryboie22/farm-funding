import type { HarvestArticle } from "./articles";
import { HARVEST_ARTICLES } from "./articles";
import {
  CURRENT_REFERENCE_ARTICLES,
  FEATURED_ARTICLE,
  LATEST_TAX_TALK,
} from "./current";

/**
 * Single source of truth for Today's Harvest articles.
 *
 * Current Farm Funders pages are kept first so their canonical slugs/content
 * win when an article also exists in the broader Claude-created article set.
 */
const ARTICLE_OVERRIDES: Record<string, Partial<HarvestArticle>> = {
  "beyond-dairy-revenue-protection-a-smarter-approach-to-managing-dairy-risk": {
    image: "/images/homepage/5-cow_adobestock_206891243.jpg",
  },
};

function applyOverrides(article: HarvestArticle): HarvestArticle {
  const override = ARTICLE_OVERRIDES[article.slug];
  return override ? { ...article, ...override } : article;
}

export const ALL_REFERENCE_ARTICLES: HarvestArticle[] = [
  ...CURRENT_REFERENCE_ARTICLES,
  FEATURED_ARTICLE,
  LATEST_TAX_TALK,
  ...HARVEST_ARTICLES,
]
  .map(applyOverrides)
  .filter(
    (article, index, array) =>
      array.findIndex((item) => item.slug === article.slug) === index,
  );

export const CURRENT_FEATURED_ARTICLE = FEATURED_ARTICLE;
export const CURRENT_LATEST_TAX_TALK = LATEST_TAX_TALK;

export function getReferenceArticle(slug: string) {
  return ALL_REFERENCE_ARTICLES.find((article) => article.slug === slug);
}

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
    sections: [
      { heading: "Dairy Revenue Protection: A Strong Foundation", body: "Dairy Revenue Protection remains a key risk-management tool for dairy producers." },
      { heading: "Beyond the Policy", body: "Effective risk management goes beyond simply enrolling in a program and requires ongoing strategy and timely decisions." },
      { heading: "Turning Data into Decisions", body: "Data and market analysis can help producers evaluate protection strategies and make decisions aligned with their operation's risk tolerance and financial goals." },
      { heading: "Staying Ahead of the Market", body: "Consistent market expertise and timely dairy updates help producers stay informed as conditions evolve." },
      { heading: "A Holistic Approach", body: "A coordinated risk-management strategy can bring together insurance, financial planning and the broader farm team." },
      { heading: "Important Reminder: June 30 DRP Transfer Deadline", body: "Producers with an existing DRP policy should review provider options before the annual June 30 transfer deadline." },
      { heading: "Bringing It All Together", body: "DRP is most effective when combined with market insight, useful tools and the right team behind the operation." },
    ],
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

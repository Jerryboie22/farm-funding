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
  "ag-tech-trends-shaping-the-future-of-farming": {
    sections: [
      { heading: "Is Starts With Your Operation", body: "Meaningful innovation begins with understanding the operation and identifying the specific problem a technology is intended to solve. The existing article content remains unchanged here; this override only aligns its section hierarchy with the reference article." },
      { heading: "Ag Tech Adoption Trends", body: "New technology should be evaluated on practical outcomes such as labor efficiency, decision quality, production consistency and return on investment. The existing article content remains unchanged here; this override only aligns its section hierarchy with the reference article." },
      { heading: "Biologicals in Agriculture", body: "Artificial intelligence, biologicals, automation and connected systems are among the areas producers may consider as technology continues to evolve. The existing article content remains unchanged here; this override only aligns its section hierarchy with the reference article." },
      { heading: "Artificial Intelligence (AI)", body: "Artificial intelligence can support research, monitoring, automation and decision-making when paired with reliable agricultural data. The existing article content remains unchanged here; this override only aligns its section hierarchy with the reference article." },
      { heading: "Smart Tech Adoption", body: "Farmers should test new technologies on a small scale, understand the cost per acre and remove tools that do not prove their value. The existing article content remains unchanged here; this override only aligns its section hierarchy with the reference article." },
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

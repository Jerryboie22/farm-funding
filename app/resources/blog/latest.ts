import type { HarvestArticle } from "./articles";

/** Additional reference articles verified against the live Farm Credit East archive. */
export const LATEST_REFERENCE_ARTICLES: HarvestArticle[] = [
  {
    slug: "260728ANewSavingsAccountForChildren",
    title: "Trump Accounts: A New Savings Option for Children",
    category: "Tax Talks",
    date: "July 28, 2026",
    author: "Austin Weaver",
    image: "/images/homepage/supporting-the-future-of-agricultureadobestock_269562353.jpg",
    excerpt:
      "Trump Accounts officially kicked off July 4, 2026, offering a new way to save for a child's future. A Trump Account is a traditional IRA with specific rules that enable families to start saving and investing for a child early with greater flexibility than a standard retirement account.",
    sourceUrl:
      "https://www.farmcrediteast.com/en/resources/todays-harvest-Blog/260728ANewSavingsAccountForChildren",
    sections: [
      {
        heading: "Who is eligible",
        body: "Children under age 18 with a Social Security number are eligible for a Trump Account. A Treasury pilot contribution is also available for qualifying U.S.-citizen children born during the pilot period.",
      },
      {
        heading: "How families can open an account",
        body: "The election can be made with Form 4547 or through the Treasury's online Trump Accounts tool. The Treasury then provides information needed to activate and manage the account.",
      },
      {
        heading: "Planning ahead",
        body: "Families considering a Trump Account should review contribution, withdrawal and tax rules and consider how the account fits into their broader financial plan.",
      },
    ],
  },
];

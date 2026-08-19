export type HarvestArticle = {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  sourceUrl: string;
  sections: { heading: string; body: string }[];
};

export const HARVEST_ARTICLES: HarvestArticle[] = [
  {
    slug: "2026-farm-bill-takes-shape-comparing-the-house-and-senate-proposals",
    title: "2026 Farm Bill Takes Shape: Comparing the House and Senate Proposals",
    category: "Public Policy",
    date: "July 7, 2026",
    author: "Danielle Cummins",
    image: "/images/homepage/1-orchard_adobestock_292882711.jpg",
    excerpt: "Congress is again working toward comprehensive farm legislation, with House and Senate proposals sharing several priorities while taking different approaches to conservation, credit, nutrition and agricultural policy.",
    sourceUrl: "https://www.farmcrediteast.com/en/resources/todays-harvest-Blog/260707_2026FarmBillTakesShape",
    sections: [
      { heading: "Where the proposals align", body: "Both proposals emphasize a stronger agricultural safety net, continued conservation investment, modernized USDA credit programs and support for specialty crops. Those shared priorities provide areas where bipartisan agreement may be possible as the legislation moves forward." },
      { heading: "Where the proposals differ", body: "The House and Senate approaches diverge on several implementation and nutrition-policy questions. The differences include conservation program design, SNAP provisions, agricultural trade and foreign ownership of farmland." },
      { heading: "Looking ahead", body: "The next stage will depend on negotiations and committee action. Producers should follow the process closely because changes to farm programs, conservation, credit and risk-management policy can affect planning decisions." },
    ],
  },
  {
    slug: "tariff-relief-program-available-for-new-york-producers",
    title: "Tariff Relief Program Available for New York Producers",
    category: "Business Tips and Tools",
    date: "July 1, 2026",
    author: "Dario Arezzo",
    image: "/images/homepage/Dairy cows milking.jpg",
    excerpt: "New York's Agricultural Resiliency Against Tariffs Program provides direct assistance to eligible agricultural producers, with applications subject to program requirements and deadlines.",
    sourceUrl: "https://www.farmcrediteast.com/en/resources/todays-harvest-Blog/260701TariffReliefProgramNYProducers",
    sections: [
      { heading: "Who may qualify", body: "Eligible products include dairy, livestock and livestock products, specialty crops and aquaculture, subject to the program's certification and eligibility requirements." },
      { heading: "Application process", body: "Producers should review the official program requirements, determine which application track applies to their operation and complete the required certification before the stated deadline." },
      { heading: "Plan beyond the payment", body: "Relief programs can be one part of a broader financial strategy. Budgeting, insurance and risk-management planning can help producers turn temporary assistance into a more durable operating plan." },
    ],
  },
  {
    slug: "a-smarter-safety-net-what-the-new-usda-payment-rules-mean-for-your-farm",
    title: "A Smarter Safety Net: What the New USDA Payment Rules Mean for Your Farm",
    category: "Business Tips and Tools",
    date: "June 30, 2026",
    author: "Marty Knapp, CPA",
    image: "/images/homepage/supporting-the-future-of-agricultureadobestock_269562353.jpg",
    excerpt: "Updated USDA payment-limit and eligibility rules for the 2026 crop year change how certain farm entities and owners are evaluated for program benefits.",
    sourceUrl: "https://www.farmcrediteast.com/resources/todays-harvest-Blog/260630NewUSDAPaymentRulesForYourFarm",
    sections: [
      { heading: "Pass-through entities", body: "The updated framework changes how qualifying LLCs, S-corporations, partnerships and joint ventures are considered for payment eligibility, with more attention placed on owners and their contributions." },
      { heading: "Eligibility matters", body: "Average AGI and payment-limit tests continue to matter, while the actively-engaged rules have been clarified. Producers should review their structure and records before relying on a projected payment." },
      { heading: "What producers should do", body: "Work with qualified agricultural and financial professionals to review entity structure, documentation and eligibility before making planning decisions based on USDA program payments." },
    ],
  },
  {
    slug: "employee-spotlight-a-day-in-the-life-of-an-internal-audit-director",
    title: "Employee Spotlight: A Day in the Life of an Internal Audit Director",
    category: "Farm Credit",
    date: "June 22, 2026",
    author: "Elisabeth Olcott",
    image: "/images/homepage/deep-agricultural-expertise_adobestock_123652875.jpg",
    excerpt: "An inside look at the work of Farm Credit East Internal Audit Director Daquan Holmes and how collaboration, risk awareness and strong controls support the organization.",
    sourceUrl: "https://www.farmcrediteast.com/en/resources/todays-harvest-Blog/260623-EmployeeSpotlightADayInTheLifeOfAnInternalAuditDirector",
    sections: [
      { heading: "The role of internal audit", body: "Internal audit helps identify risks, strengthen controls and support effective governance. The role combines strategic conversations, operational review and collaboration across departments." },
      { heading: "Collaboration is central", body: "A strong audit function depends on communication with leaders and teams throughout an organization. Understanding how different functions work together helps identify practical improvements." },
      { heading: "Supporting the future", body: "Sound internal controls and proactive risk management contribute to a safe and sustainable organization, ultimately helping the association continue serving Northeast agriculture." },
    ],
  },
  {
    slug: "stay-alert-to-misleading-mail-mortgage-home-warranty-communications",
    title: "Stay Alert to Misleading Mail: Mortgage & Home Warranty Communications",
    category: "Business Tips and Tools",
    date: "June 15, 2026",
    author: "Kristen Santos",
    image: "/images/resources/farmer-smartphone.jpg",
    excerpt: "Some mortgage and home-service mailings can resemble legitimate lender communications. Verify unexpected requests independently before sharing information or sending payment.",
    sourceUrl: "https://www.farmcrediteast.com/resources/todays-harvest-Blog/260616-StayAlertToMisleadingMailMortageandHomeWarrantyCommunications",
    sections: [
      { heading: "Warning signs", body: "Be cautious of documents that resemble invoices, create unusual urgency, or ask you to respond or pay before you have independently verified the sender." },
      { heading: "Verify independently", body: "Use contact information from a trusted statement or official website rather than calling a number supplied in an unexpected mailing." },
      { heading: "Protect your information", body: "Pause before providing financial or personal information. Suspicious physical mail should be handled securely, and sensitive documents should be disposed of carefully." },
    ],
  },
  {
    slug: "high-supply-with-tight-margins-2026-apple-outlook",
    title: "2026 Apple Outlook: High Supply with Tight Margins",
    category: "Ag Economy",
    date: "May 19, 2026",
    author: "Farm Credit East Knowledge Exchange",
    image: "/images/homepage/1-orchard_adobestock_292882711.jpg",
    excerpt: "Apple growers are navigating large supplies, changing variety mixes, demand pressure and rising costs as they plan orchard, labor and marketing decisions.",
    sourceUrl: "https://www.farmcrediteast.com/en/resources/todays-harvest-Blog/260519AppleOutlookHighSupplyTightMargins",
    sections: [
      { heading: "Supply remains significant", body: "Large U.S. production continues to put pressure on margins. Growers should consider supply conditions alongside their own yield, labor and marketing assumptions." },
      { heading: "Varieties continue to change", body: "The industry's variety mix is evolving as older plantings leave production and newer varieties come into bearing, creating both opportunities and competitive pressures." },
      { heading: "Planning for margins", body: "Careful orchard decisions, labor planning and market positioning remain important as producers navigate a high-supply environment." },
    ],
  },
  {
    slug: "2026-forest-products-outlook-key-takeaways-for-a-shifting-industry",
    title: "2026 Forest Products Outlook: Key Takeaways for a Shifting Industry",
    category: "Ag Economy",
    date: "April 7, 2026",
    author: "Farm Credit East Knowledge Exchange",
    image: "/images/homepage/supporting-the-future-of-agricultureadobestock_269562353.jpg",
    excerpt: "Housing demand, lumber supply, trade and broader economic conditions continue to shape the outlook for the U.S. forest products industry.",
    sourceUrl: "https://www.farmcrediteast.com/en/resources/todays-harvest-Blog/260407ForestProductsOutlook",
    sections: [
      { heading: "A stable but changing economy", body: "The forest products sector is operating in an environment of modest economic growth, shifting housing demand and continued adjustment in supply chains." },
      { heading: "Housing remains important", body: "Residential construction and remodeling activity are major demand drivers for forest products, making housing conditions an important indicator for producers and businesses." },
      { heading: "What to watch", body: "Producers should monitor trade conditions, lumber supply, construction trends and costs when evaluating near-term operating and investment decisions." },
    ],
  },
  {
    slug: "from-farm-to-forest-to-dock-the-northeasts-225b-economic-engine",
    title: "From Farm to Forest to Dock: The Northeast's $225B Economic Engine",
    category: "Ag Economy",
    date: "March 24, 2026",
    author: "Farm Credit East Knowledge Exchange",
    image: "/images/homepage/deep-agricultural-expertise_adobestock_123652875.jpg",
    excerpt: "Agriculture, commercial fishing and forest products form a diverse regional economy that supports hundreds of thousands of jobs and substantial economic activity.",
    sourceUrl: "https://www.farmcrediteast.com/resources/todays-harvest-Blog/260324TheNortheastEconomicEngine",
    sections: [
      { heading: "A diverse regional economy", body: "The Northeast's agricultural economy spans dairy, greenhouse production, fruits and vegetables, poultry, eggs, forestry and commercial fishing." },
      { heading: "$225 billion in activity", body: "Farm Credit East's economic-engine analysis highlights the scale of direct and related agricultural, forest and fishing activity across the region." },
      { heading: "Investing for the future", body: "Infrastructure investment, supportive state policies and the resilience of producers all contribute to the region's ability to maintain a strong agricultural economy." },
    ],
  },
  {
    slug: "the-road-ahead-for-oyster-growers-trends-risks-and-opportunities-for-2026",
    title: "The Road Ahead for Oyster Growers: Trends, Risks and Opportunities for 2026",
    category: "Ag Economy",
    date: "March 10, 2026",
    author: "Farm Credit East Knowledge Exchange",
    image: "/images/homepage/deep-agricultural-expertise_adobestock_123652875.jpg",
    excerpt: "Oyster growers face a mix of regulatory, technological and market forces as the industry continues to evolve in 2026.",
    sourceUrl: "https://www.farmcrediteast.com/en/resources/todays-harvest-Blog/260310RoadAHeadForOysterGrowers",
    sections: [
      { heading: "Regulation and consumer confidence", body: "Today's shellfish rules reflect decades of public-health and market-development work. Understanding those requirements remains essential for growers." },
      { heading: "Innovation creates opportunity", body: "Production technology and operational improvements can help growers respond to changing market conditions while maintaining product quality." },
      { heading: "Managing the road ahead", body: "Growers should balance regulatory compliance, production planning and market conditions when evaluating expansion and investment decisions." },
    ],
  },
  {
    slug: "key-changes-coming-to-drp-lgm-and-lrp-programs",
    title: "Key Changes Coming to DRP, LGM and LRP Programs: What Producers Need to Know",
    category: "Crop Insurance",
    date: "June 3, 2026",
    author: "Megan Clancy",
    image: "/images/crop-insurance/Insurance-Resources.jpg",
    excerpt: "Updates to Dairy Revenue Protection, Livestock Gross Margin and Livestock Risk Protection are intended to improve flexibility and expand coverage opportunities beginning with the 2027 crop year.",
    sourceUrl: "https://www.farmcrediteast.com/en/resources/todays-harvest-Blog/260603CG_KeyChangesToDRPandLGMandLRP",
    sections: [
      { heading: "Program-wide updates", body: "The changes include updated beginning-farmer subsidies, concurrent coverage opportunities and requirements around policy use and continuation." },
      { heading: "DRP and LGM", body: "The updates adjust sales timing and several livestock coverage parameters, including weight and ownership provisions." },
      { heading: "LRP", body: "Additional disaster exemptions, expanded weights, longer cull-cow coverage and new unborn-feeder categories add flexibility for eligible producers." },
    ],
  },
  {
    slug: "ag-tech-trends-shaping-the-future-of-farming",
    title: "Ag Tech Trends Shaping the Future of Farming",
    category: "Business Tips and Tools",
    date: "May 5, 2026",
    author: "Farm Credit East Knowledge Exchange",
    image: "/images/homepage/1-orchard_adobestock_292882711.jpg",
    excerpt: "Technology can create real value when it solves a clearly defined farm problem, strengthens decision-making and integrates with existing operations.",
    sourceUrl: "https://www.farmcrediteast.com/en/resources/todays-harvest-Blog/260505AgTechTrends",
    sections: [
      { heading: "Start with the operation", body: "Meaningful innovation begins with understanding the operation and identifying the specific problem a technology is intended to solve." },
      { heading: "Measure the value", body: "New technology should be evaluated on practical outcomes such as labor efficiency, decision quality, production consistency and return on investment." },
      { heading: "The next wave", body: "Artificial intelligence, biologicals, automation and connected systems are among the areas producers may consider as technology continues to evolve." },
    ],
  },
  {
    slug: "mental-health-resources-for-agriculture",
    title: "Mental Health Resources for Agriculture",
    category: "Business Tips and Tools",
    date: "May 12, 2026",
    author: "Farm Credit East Knowledge Exchange",
    image: "/images/homepage/deep-agricultural-expertise_adobestock_123652875.jpg",
    excerpt: "Agricultural producers face distinctive stressors, and practical mental-health resources can help farmers, fishers, foresters and their families manage challenges.",
    sourceUrl: "https://www.farmcrediteast.com/en/resources/todays-harvest-Blog/260512MentalHealthResourcesforAgriculture",
    sections: [
      { heading: "Recognize the pressures", body: "Weather, markets, workload and uncertainty can create sustained stress in agricultural businesses. Recognizing those pressures is an important first step." },
      { heading: "Use available resources", body: "Agriculture-focused peer support and mental-health programs provide ways for producers and families to find information and connection." },
      { heading: "Make support part of the plan", body: "Checking in with yourself, your family and your team can be part of building a healthier and more resilient farm business." },
    ],
  },
  {
    slug: "beyond-dairy-revenue-protection-a-smarter-approach-to-managing-dairy-risk",
    title: "Beyond Dairy Revenue Protection: A Smarter Approach to Managing Dairy Risk",
    category: "Crop Insurance",
    date: "April 14, 2026",
    author: "Megan Clancy",
    image: "/images/crop-insurance/Insurance-Resources.jpg",
    excerpt: "Dairy Revenue Protection remains a key risk-management tool, but producers can combine coverage with broader financial planning to manage volatility in milk prices, feed costs and markets.",
    sourceUrl: "https://www.farmcrediteast.com/en/resources/todays-harvest-Blog/260414CG_BeyondDairyRevenueProtection",
    sections: [
      { heading: "Dairy Revenue Protection", body: "DRP can establish a floor under covered quarterly milk revenue and offers producers several coverage and pricing choices." },
      { heading: "Think beyond one tool", body: "Insurance works best as part of a broader risk-management plan that considers cash flow, feed costs, debt obligations, production and market exposure." },
      { heading: "Build a strategy", body: "Review coverage decisions regularly with a qualified risk-management professional and align insurance choices with the financial needs of the operation." },
    ],
  },
];

export function getHarvestArticle(slug: string) {
  return HARVEST_ARTICLES.find((article) => article.slug === slug);
}

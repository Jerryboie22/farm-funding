import ReferenceContentPage from "@/components/ReferenceContentPage";

export const metadata = {
  title: "DTN Markets & Weather | Farm Funding",
  description:
    "Track commodity prices, market news, and hyperlocal weather forecasts built for Northeast agriculture.",
};

export default function MarketsWeatherPage() {
  return (
    <ReferenceContentPage
      title="DTN Markets & Weather"
      intro="Stay ahead of the season with real-time commodity prices, market news, and hyperlocal weather forecasts — the same tools our team uses to advise customers across the Northeast."
      image="/images/resources/farmer-smartphone.jpg"
      sections={[
        {
          title: "Commodity markets",
          body: "Track futures and cash prices across grain, dairy, and livestock markets, along with the news driving daily price movement.",
          bullets: ["Grain and oilseed futures", "Dairy and livestock pricing", "Daily market commentary"],
        },
        {
          title: "Weather forecasting",
          body: "Get field-level forecasts, radar, and seasonal outlooks tailored to Northeast growing conditions, so you can plan planting, spraying, and harvest around the weather rather than around it.",
        },
        {
          title: "Ag Globe Trotter",
          body: "A closer look at global agricultural trends and how international markets ripple back into Northeast farm decisions.",
        },
      ]}
      cta="Want this data delivered to your inbox?"
    />
  );
}

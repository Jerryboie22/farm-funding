import ReferenceContentPage from "@/components/ReferenceContentPage";

export const metadata = { title: "Northeast Farm Fresh Guide | Farm Funding" };

const states = ["Connecticut", "Maine", "Massachusetts", "New Hampshire", "New Jersey", "New York", "Rhode Island", "Vermont"];

export default function FarmFreshGuidePage() {
  return <ReferenceContentPage title="Northeast Farm Fresh Guide" intro="Looking for fresh, quality farm products in your local area? Explore resources for finding local products, farmers' markets, farm stands, wineries, breweries and other agricultural experiences across our eight-state region." image="/images/industries/Vegetables_shutterstock_1125187883.jpg" sections={[
    { title: "Find By State", body: "Choose a state to explore local food and agriculture resources.", bullets: states },
    { title: "Connecticut", body: "Explore farm stands, farmers' markets, CSAs, vineyards, wineries and breweries through regional agricultural guides and organizations." },
    { title: "Maine", body: "Find Maine farms, food and wood products, farmers' markets, vineyards, wineries and breweries using state and regional resources." },
    { title: "Massachusetts", body: "Discover Massachusetts-grown products, farmers' markets, agritourism, vineyards and craft breweries." },
    { title: "New Hampshire", body: "Explore local farms, markets and agricultural destinations across New Hampshire." },
    { title: "New Jersey", body: "Find Jersey Fresh farms, farmers' markets, CSAs, wineries, breweries and other local food resources." },
    { title: "New York", body: "Search for farm stands, farmers' markets, wineries, breweries and regional agricultural destinations throughout New York." },
    { title: "Rhode Island", body: "Explore farmers' markets, vineyards, wineries, breweries and local food resources across Rhode Island." },
    { title: "Vermont", body: "Find farm stands, farmers' markets, maple syrup operations, vineyards, wineries, breweries and cideries across Vermont." },
  ]} cta="Explore Northeast Farm Fresh" />;
}

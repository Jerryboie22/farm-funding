import type { Metadata } from "next";
import { Montserrat, Barlow } from "next/font/google";
import "./globals.css";
import "./article-reference.css";
import "./article-reference-fine.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeArticleRouting from "@/components/HomeArticleRouting";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"], // SemiBold, Bold, ExtraBold
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["500", "700"], // Medium (body), Bold (tags/buttons)
});

export const metadata: Metadata = {
  title: "Farm Funding | Financing Built for Northeast Agriculture",
  description:
    "Farm loans, crop insurance, and financial services built for farmers, growers, and producers across the Northeast.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${barlow.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col bg-white text-charcoal"
        suppressHydrationWarning
      >
        <HomeArticleRouting />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

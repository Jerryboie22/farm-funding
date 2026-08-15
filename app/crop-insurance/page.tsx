import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata = {
  title: "Crop Insurance | Farm Funding",
};

export default function Page() {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-8 py-14">
      <h1 className="font-display text-3xl md:text-4xl font-semibold text-forest">
        Crop Insurance
      </h1>
      <p className="mt-4 text-charcoal/80 max-w-2xl leading-relaxed">
        Crop, dairy and livestock insurance products to help protect your operation against loss.
      </p>
      <PlaceholderImage label="Section photo" className="h-64 rounded-sm mt-8" />
      <p className="mt-8 text-sm text-charcoal/60">
        Page content pending client copy. Structure mirrors the top-level
        navigation defined in <code>components/Header.tsx</code>.
      </p>
      <Link href="/" className="mt-6 inline-block text-sm font-semibold text-clay hover:text-forest">
        ← Back to home
      </Link>
    </section>
  );
}

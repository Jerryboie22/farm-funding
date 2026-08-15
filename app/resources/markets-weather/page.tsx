import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata = { title: "Markets & Weather | Farm Funding" };

export default function Page() {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-8 py-14">
      <h1 className="font-display text-3xl md:text-4xl font-semibold text-forest">
        Markets & Weather
      </h1>
      <PlaceholderImage label="Section photo" className="h-56 rounded-sm mt-6" />
      <p className="mt-8 text-sm text-charcoal/60">
        Placeholder page — pending client copy.
      </p>
      <Link href="/" className="mt-6 inline-block text-sm font-semibold text-clay hover:text-forest">
        ← Back to home
      </Link>
    </section>
  );
}

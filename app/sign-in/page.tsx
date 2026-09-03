import Link from "next/link";

export const metadata = {
  title: "Sign In | Farm Funding",
  description: "Sign in to your Farm Funding online account.",
};

export default function SignInPage() {
  return (
    <section className="max-w-md mx-auto px-6 md:px-8 py-16">
      <h1 className="font-display text-3xl md:text-4xl font-semibold text-forest">
        Sign In
      </h1>
      <p className="mt-3 text-sm text-charcoal/70">
        Access your Farm Funding online account.
      </p>

      <div className="mt-8 rounded-sm border border-charcoal/10 bg-cream/40 p-6 md:p-8">
        <p className="text-xs text-charcoal/60 mb-6">
          Demo form — not connected to a live account system.
        </p>

        <label className="block text-sm font-semibold text-charcoal">
          Online ID
          <input
            type="text"
            disabled
            placeholder="Enter your Online ID"
            className="mt-1 block w-full rounded-sm border border-charcoal/20 bg-white px-3 py-2 text-sm text-charcoal/60"
          />
        </label>

        <label className="block text-sm font-semibold text-charcoal mt-4">
          Password
          <input
            type="password"
            disabled
            placeholder="Enter your password"
            className="mt-1 block w-full rounded-sm border border-charcoal/20 bg-white px-3 py-2 text-sm text-charcoal/60"
          />
        </label>

        <button
          type="button"
          disabled
          className="mt-6 w-full inline-flex items-center justify-center rounded-sm bg-clay px-6 py-3 text-sm font-semibold text-white opacity-60"
        >
          Sign In
        </button>

        <div className="mt-5 flex flex-col gap-1 text-xs text-charcoal/60">
          <span>Forgot your Online ID?</span>
          <span>Forgot your password?</span>
        </div>
      </div>

      <p className="mt-6 text-sm text-charcoal/70">
        Not enrolled yet? Reach out through{" "}
        <Link href="/contact" className="underline hover:text-clay">
          Contact Us
        </Link>{" "}
        to set up online access.
      </p>

      <Link
        href="/"
        className="mt-8 inline-block text-sm font-semibold text-clay hover:text-forest"
      >
        ← Back to home
      </Link>
    </section>
  );
}

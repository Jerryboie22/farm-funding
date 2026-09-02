import Link from "next/link";

export const metadata = {
  title: "Data Rights for California Residents | Farm Funding",
  description:
    "Learn how California residents can exercise their rights under the California Consumer Privacy Act with Farm Funding.",
};

export default function DataRightsCaliforniaPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-8 py-14">
      <p className="text-xs uppercase tracking-wide text-charcoal/60 font-semibold">
        Effective January 1, 2020
      </p>
      <h1 className="mt-2 font-display text-3xl md:text-4xl font-semibold text-forest">
        Data Rights for California Residents
      </h1>

      <p className="mt-6 text-[16px] md:text-[18px] leading-[1.7] text-charcoal max-w-[820px]">
        In compliance with the California Consumer Privacy Act of 2018 (the
        &quot;CCPA&quot;), Farm Funding provides California consumers with the
        right to make certain requests about their personal information.{" "}
        <strong>Farm Funding does not sell personal information.</strong> If
        you would like to make a request under the CCPA, use the form below.
      </p>

      <p className="mt-4 text-[16px] md:text-[18px] leading-[1.7] text-charcoal max-w-[820px]">
        This right is reserved for California residents only. You can also
        reach us by phone at{" "}
        <a href="tel:8005622235" className="underline hover:text-clay">
          (800) 562-2235
        </a>
        . You may submit a request for yourself, or on behalf of another
        person as their parent or guardian. We do not knowingly collect
        personal information from anyone under 13 without a parent or
        guardian&apos;s consent.
      </p>

      <div className="mt-10 rounded-sm border border-charcoal/10 bg-cream/40 p-6 md:p-8">
        <h2 className="font-display text-xl md:text-2xl font-semibold text-forest">
          Submit a CCPA Request
        </h2>
        <p className="mt-2 text-sm text-charcoal/70">
          Demo form — not connected to a live submission process.
        </p>

        <fieldset className="mt-6">
          <legend className="text-sm font-semibold text-charcoal">
            What type of request are you making? *
          </legend>
          <div className="mt-3 flex flex-col sm:flex-row gap-3">
            <label className="flex items-center gap-2 text-sm text-charcoal">
              <input type="radio" name="request-type" disabled /> Personal
              Information Report
            </label>
            <label className="flex items-center gap-2 text-sm text-charcoal">
              <input type="radio" name="request-type" disabled /> Delete My
              Personal Information
            </label>
          </div>
        </fieldset>

        <fieldset className="mt-6">
          <legend className="text-sm font-semibold text-charcoal">
            How would you like us to respond? *
          </legend>
          <div className="mt-3 flex flex-col sm:flex-row gap-3">
            <label className="flex items-center gap-2 text-sm text-charcoal">
              <input type="radio" name="delivery" disabled /> Email a digital
              copy on file
            </label>
            <label className="flex items-center gap-2 text-sm text-charcoal">
              <input type="radio" name="delivery" disabled /> Mail a hard copy
              on file
            </label>
          </div>
        </fieldset>

        <h3 className="mt-8 text-sm font-semibold text-charcoal">
          Tell us about yourself
        </h3>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "First Name*",
            "Last Name*",
            "Last 4 of SSN or Tax ID*",
            "Date of Birth (MM/DD/YYYY)*",
            "Address*",
            "City*",
            "State*",
            "Zip Code*",
            "Email Address*",
            "Phone Number*",
          ].map((field) => (
            <label key={field} className="text-sm text-charcoal">
              {field}
              <input
                type="text"
                disabled
                placeholder={field.replace("*", "")}
                className="mt-1 block w-full rounded-sm border border-charcoal/20 bg-white px-3 py-2 text-sm text-charcoal/60"
              />
            </label>
          ))}
        </div>

        <p className="mt-6 text-xs text-charcoal/60">
          Making a request on behalf of a minor or dependent? You&apos;ll need
          to visit a local office to confirm authorization before the request
          is processed.
        </p>

        <button
          type="button"
          disabled
          className="mt-6 inline-flex items-center rounded-sm bg-clay px-6 py-3 text-sm font-semibold text-white opacity-60"
        >
          Submit Request
        </button>
      </div>

      <Link
        href="/"
        className="mt-8 inline-block text-sm font-semibold text-clay hover:text-forest"
      >
        ← Back to home
      </Link>
    </section>
  );
}

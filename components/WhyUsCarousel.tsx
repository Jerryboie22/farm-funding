"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const SLIDES = [
  {
    title: "Deep agricultural expertise.",
    bodyParts: [
      "For over 100 years, we've proven you can get more from a lender. Discover the benefits of an entire organization working for your success. Learn more about ",
      { text: "who we are", href: "/about/who-we-are" },
      ".",
    ],
    image: "/images/homepage/deep-agricultural-expertise_adobestock_123652875.jpg",
    alt: "In-field analyst reviewing plant in hand",
  },
  {
    title: "Customer-owned and mission driven",
    bodyParts: [
      "There's a difference between profit driven and mission driven – we prove it every day. Ask about our ",
      { text: "patronage program", href: "/about/who-we-are/patronage-dividends" },
      ".",
    ],
    image: "/images/homepage/customer-owned-and-mission-driven.jpg",
    alt: "Dairy farmer next to his herd",
  },
  {
    title: "Capacity to serve your needs.",
    bodyParts: [
      "We have the financing capacity to serve your needs today, stand by you when times are troubled and help you grow when the time is right. Explore ",
      { text: "financing", href: "/financing" },
      " and ",
      { text: "services", href: "/services" },
      ".",
    ],
    image: "/images/homepage/capacity-to-serve-your-needs.jpg",
    alt: "Tractor tilling through a picturesque Northeastern field",
  },
  {
    title: "Supporting the future of agriculture.",
    bodyParts: [
      "We work for the next generation. If you plan to work in agriculture, we have a plan to help. Learn about our ",
      {
        text: "Beginning Farmer Programs",
        href: "/financing/beginning-farmer-programs",
      },
      ".",
    ],
    image: "/images/homepage/supporting-the-future-of-agricultureadobestock_269562353.jpg",
    alt: "Female greenhouse grower pruning her flowers",
  },
];

export default function WhyUsCarousel() {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;

    const id = setInterval(() => {
      setI((v) => (v + 1) % SLIDES.length);
    }, 4000);

    return () => clearInterval(id);
  }, [playing]);

  return (
    <div>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(calc(-${i * 100}% + ${i * 32}px))`,
          }}
        >
          {SLIDES.map((slide, idx) => (
            <div
              key={slide.title}
              className="w-full shrink-0 px-4"
            >
              <div className="grid items-center gap-8 rounded-sm border border-line bg-white p-8 shadow-sm md:grid-cols-2 md:p-12">

                {/* TEXT */}
                <div>
                  <h3
                    className={`font-display text-2xl font-bold md:text-3xl ${
                      idx % 2 === 0
                        ? "text-clay"
                        : "text-forest"
                    }`}
                  >
                    {slide.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-relaxed text-charcoal/80 md:text-base">
                    {slide.bodyParts.map((part, partIndex) =>
                      typeof part === "string" ? (
                        <span key={partIndex}>
                          {part}
                        </span>
                      ) : (
                        <Link
                          key={partIndex}
                          href={part.href}
                          className="text-clay-light underline hover:text-clay"
                        >
                          {part.text}
                        </Link>
                      )
                    )}
                  </p>
                </div>

                {/* REAL IMAGE */}
                <div className="h-56 overflow-hidden rounded-sm md:h-72">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="h-full w-full object-cover"
                  />
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CAROUSEL CONTROLS */}
      <div className="mt-6 flex items-center justify-center gap-3">

        {/* PLAY / PAUSE */}
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-label={
            playing
              ? "Pause carousel"
              : "Play carousel"
          }
          className="flex h-7 w-7 items-center justify-center rounded-full bg-charcoal text-white"
        >
          {playing ? (
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="currentColor"
            >
              <rect
                x="1"
                width="3"
                height="10"
              />
              <rect
                x="6"
                width="3"
                height="10"
              />
            </svg>
          ) : (
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="currentColor"
            >
              <path d="M0 0l10 5-10 5z" />
            </svg>
          )}
        </button>

        {/* SLIDE DOTS */}
        {SLIDES.map((s, idx) => (
          <button
            key={s.title}
            type="button"
            aria-label={`Show ${s.title}`}
            onClick={() => setI(idx)}
            className={`h-3.5 w-3.5 rounded-full border-2 border-forest transition-colors ${
              idx === i
                ? "bg-forest"
                : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
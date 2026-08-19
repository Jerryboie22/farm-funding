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
            transform: `translateX(-${i * 100}%)`,
          }}
        >
          {SLIDES.map((slide) => (
            <div key={slide.title} className="w-full shrink-0">
              {/* CARD */}
              <div className="mx-auto flex w-[calc(100%-80px)] flex-col overflow-hidden rounded-[14px] bg-white shadow-[0_2px_14px_rgba(0,0,0,0.12)] md:w-full md:grid md:grid-cols-2 md:items-center md:gap-[50px] md:rounded-none md:bg-transparent md:shadow-none">
                {/* IMAGE — first on mobile, second column on desktop */}
                <div className="order-1 h-[190px] w-full md:order-2 md:h-[340px] lg:h-[380px]">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                {/* TEXT — second on mobile, first column on desktop */}
                <div className="order-2 px-[22px] pb-[30px] pt-[32px] md:order-1 md:px-0 md:pt-0">
                  <h3 className="font-display text-[26px] font-bold leading-[1.2] text-[#496d83] md:text-[32px] md:leading-[38px]">
                    {slide.title}
                  </h3>

                  <p className="mt-[16px] text-[18px] leading-[1.5] text-[#231f20] md:mt-[18px] md:max-w-[480px] md:text-[17px] md:leading-[27px]">
                    {slide.bodyParts.map((part, partIndex) =>
                      typeof part === "string" ? (
                        <span key={partIndex}>{part}</span>
                      ) : (
                        <Link
                          key={partIndex}
                          href={part.href}
                          className="font-bold text-[#496d83] underline hover:text-[#4f832a]"
                        >
                          {part.text}
                        </Link>
                      )
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CAROUSEL CONTROLS */}
      <div className="mt-[28px] flex items-center justify-center gap-[14px] md:mt-[36px]">
        {/* PLAY / PAUSE */}
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pause carousel" : "Play carousel"}
          className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[#8a8a8a] text-white md:h-[24px] md:w-[24px] md:border md:border-[#496d83] md:bg-transparent md:text-[#496d83] md:hover:bg-[#496d83] md:hover:text-white md:transition-colors"
        >
          {playing ? (
            <svg width="16" height="16" viewBox="0 0 10 10" fill="currentColor" className="md:h-[8px] md:w-[8px]">
              <rect x="1" width="3" height="10" />
              <rect x="6" width="3" height="10" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 10 10" fill="currentColor" className="md:h-[8px] md:w-[8px]">
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
            className={`h-[28px] w-[28px] shrink-0 rounded-full border-2 border-[#4f832a] transition-colors md:h-[10px] md:w-[10px] ${
              idx === i ? "bg-[#4f832a]" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

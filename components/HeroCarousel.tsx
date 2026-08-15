"use client";

import { useEffect, useState } from "react";

const SLIDES = [
  {
    src: "/images/homepage/1-orchard_adobestock_292882711.jpg",
    alt: "Northeastern producer walking through his orchard",
  },
  {
    src: "/images/homepage/2-strawberry-grower_adobestock_51615521.jpg",
    alt: "Female farmer smiling in strawberry field while pruning plants",
  },
  {
    src: "/images/homepage/3-logs_adobestock_73937079.jpg",
    alt: "Stack of logs with sun shining down through the trees",
  },
  {
    src: "/images/homepage/4-fisherman-and-vessel.jpg",
    alt: "Fisherman checking nets from his fishing vessel",
  },
  {
    src: "/images/homepage/5-cow_adobestock_206891243.jpg",
    alt: "Cow in a farm field",
  },
];

export default function HeroCarousel({
  className = "",
}: {
  className?: string;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setI((current) => (current + 1) % SLIDES.length);
    }, 4000);

    return () => clearInterval(id);
  }, []);

  return (
    <div
      className={`relative overflow-hidden bg-[#ecf1e4] ${className}`}
    >
      {SLIDES.map((slide, index) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            index === i ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            onClick={() => setI(index)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              index === i ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
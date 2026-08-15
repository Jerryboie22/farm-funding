"use client";

import { useState } from "react";

export default function VideoHero({
  youtubeId,
  alt,
  src,
}: {
  youtubeId: string;
  alt: string;
  src: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative block w-full group"
        aria-label={`Play video: ${alt}`}
      >
        <img
          src={src}
          alt={alt}
          className="block w-full h-[220px] md:h-[260px] object-cover"
        />

        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#4f832a] shadow-xl group-hover:bg-[#416d22] transition-colors">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              className="ml-1"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 p-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white text-2xl"
              aria-label="Close video"
            >
              ✕
            </button>

            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
              className="h-full w-full border-0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
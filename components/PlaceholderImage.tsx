// Deterministic photo lock per topic so the same slot always shows the
// same image (not a random one each load) — kept in sync with the
// standalone HTML build so both versions show identical photos.
const LOCK_MAP: Record<string, number> = {
  "wheat,field,sunset": 9768,
  "welcome,sign,farm": 9030,
  "dairy,barn,advisor": 444,
  "dairy,milking,equipment": 7662,
  "farmers,team,portrait": 3692,
  "farmland,field,aerial": 5722,
  "farmhouse,rural,home": 5052,
  "farmer,tractor,field": 5591,
  "excavator,logging,equipment": 3883,
  "greenhouse,flowers,nursery": 7770,
  "solar,panels,energy": 9773,
  "young,farmer,trailer": 5899,
  "tractor,field,dust": 1466,
};

function hashTopic(topic: string): number {
  let h = 0;
  for (let i = 0; i < topic.length; i++) h = (h * 31 + topic.charCodeAt(i)) >>> 0;
  return (h % 9999) + 1;
}

/**
 * Themed placeholder photo. The real site's actual photos are licensed
 * Adobe Stock images we can't reuse — this pulls a free, topic-matched
 * stand-in via loremflickr so every section reads as a photo, not a gray
 * box. Swap the `src` for a licensed photo whenever one is available;
 * `query` controls which placeholder theme shows (defaults to a slug of
 * the label).
 */
export default function PlaceholderImage({
  label,
  query,
  className = "",
}: {
  label: string;
  query?: string;
  className?: string;
}) {
  const topic =
    query ||
    label
      .toLowerCase()
      .replace(/[^a-z0-9\s,]/g, "")
      .split(/\s+/)
      .slice(0, 3)
      .join(",");
  const src = `https://loremflickr.com/900/700/${encodeURIComponent(topic)}?lock=${
    LOCK_MAP[topic] ?? hashTopic(topic)
  }`;

  return (
    <div className={`relative overflow-hidden bg-forest/10 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={label}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

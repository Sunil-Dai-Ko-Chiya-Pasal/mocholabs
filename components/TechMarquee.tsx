const stack = [
  { name: "Shopify Plus", icon: "🛒" },
  { name: "Vercel", icon: "▲" },
  { name: "Supabase", icon: "⚡" },
  { name: "Stripe", icon: "💳" },
  { name: "Shopify", icon: "🛍️" },
];

export default function TechMarquee() {
  const track = [...stack, ...stack];

  return (
    <div className="overflow-hidden border-y-2 border-ink-600 bg-primary-500 py-4">
      <div className="flex w-max animate-marquee gap-10">
        {[...track, ...track].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 whitespace-nowrap px-4"
          >
            <span className="text-lg text-cream" aria-hidden>
              {item.icon}
            </span>
            <span className="font-display text-sm font-bold uppercase tracking-wide text-cream">
              {item.name}
            </span>
            <span className="text-cream/50">|</span>
          </div>
        ))}
      </div>
    </div>
  );
}

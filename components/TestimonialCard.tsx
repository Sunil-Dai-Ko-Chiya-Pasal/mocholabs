// components/TestimonialCard.tsx
type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating?: number;
  variant?: "light" | "primary" | "dark";
  className?: string;
};

const variantStyles: Record<string, string> = {
  light: "bg-ink-50 text-ink-600",
  primary: "bg-primary-500 text-cream",
  dark: "bg-ink-600 text-cream",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TestimonialCard({
  quote,
  name,
  role,
  company,
  rating = 5,
  variant = "light",
  className = "",
}: TestimonialCardProps) {
  const isDarkBg = variant !== "light";

  return (
    <div
      className={`sticker-border flex h-full flex-col justify-between gap-6 p-6 ${variantStyles[variant]} ${className}`}
    >
      <div>
        <div className="mb-4 flex gap-0.5" aria-hidden>
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={`text-sm ${
                i < rating
                  ? isDarkBg
                    ? "text-cream"
                    : "text-primary-500"
                  : isDarkBg
                  ? "text-cream/25"
                  : "text-ink-600/15"
              }`}
            >
              ★
            </span>
          ))}
        </div>
        <p
          className={`font-display text-lg font-medium leading-snug ${
            isDarkBg ? "text-cream" : "text-ink-600"
          }`}
        >
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      <div
        className={`flex items-center gap-3 border-t pt-4 ${
          isDarkBg ? "border-cream/25" : "border-ink-600/15"
        }`}
      >
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 font-mono text-xs font-bold ${
            isDarkBg
              ? "border-cream/40 bg-white/10 text-cream"
              : "border-ink-600 bg-white text-ink-600"
          }`}
        >
          {initials(name)}
        </div>
        <div>
          <p
            className={`font-display text-sm font-bold ${
              isDarkBg ? "text-cream" : "text-ink-600"
            }`}
          >
            {name}
          </p>
          <p
            className={`font-mono text-[11px] uppercase tracking-wide ${
              isDarkBg ? "text-cream/70" : "text-ink-400"
            }`}
          >
            {role} · {company}
          </p>
        </div>
      </div>
    </div>
  );
}
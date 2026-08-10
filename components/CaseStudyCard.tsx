import { ReactNode } from "react";
import Button from "./Button";

type Stat = { label: string; value: string; highlight?: boolean };

type CaseStudyCardProps = {
  tag: string;
  title: string;
  description: string;
  stats: Stat[];
  media: ReactNode;
  layout?: "stacked" | "split";
  cta?: string;
  className?: string;
};

export default function CaseStudyCard({
  tag,
  title,
  description,
  stats,
  media,
  layout = "stacked",
  cta,
  className = "",
}: CaseStudyCardProps) {
  const isSplit = layout === "split";

  const content = (
    <div className={`flex flex-col justify-center gap-4 p-6 ${isSplit ? "sm:p-8" : ""}`}>
      <span className="inline-block w-fit rounded-full bg-ink-600 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-cream">
        {tag}
      </span>

      <h3 className="font-display text-2xl font-bold text-ink-600">{title}</h3>

      <p className="text-sm text-ink-400">{description}</p>

      <div className="flex flex-wrap items-end justify-between gap-4 border-t-2 border-ink-600/10 pt-4">
        <div className="flex flex-wrap gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-ink-400">
                {stat.label}
              </p>
              <p
                className={`font-display text-xl font-bold ${
                  stat.highlight ? "text-primary-500" : "text-ink-600"
                }`}
              >
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {cta && (
          <Button shape="rect" size="sm">
            {cta}
          </Button>
        )}
      </div>
    </div>
  );

  return (
    <div
      className={`sticker-border overflow-hidden bg-white ${
        isSplit ? "grid grid-cols-1 sm:grid-cols-2" : ""
      } ${className}`}
    >
      <div className={isSplit ? "h-64 sm:h-full" : "h-64"}>{media}</div>
      {content}
    </div>
  );
}
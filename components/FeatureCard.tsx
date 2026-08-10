import { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  index: string;
  variant?: "light" | "primary" | "blush";
  className?: string;
};

const variantStyles: Record<string, string> = {
  light: "bg-ink-50 text-ink-600",
  primary: "bg-primary-500 text-cream",
  blush: "bg-blush text-ink-600",
};

export default function FeatureCard({
  icon,
  title,
  description,
  index,
  variant = "light",
  className = "",
}: FeatureCardProps) {
  const isPrimary = variant === "primary";

  return (
    <div
      className={` flex h-full flex-col justify-between p-6 sticker-border-small transition-shadow hover:shadow-hard-sm ${variantStyles[variant]} ${className}`}
    >
      <div>
        <div
          className={`mb-5 flex h-9 w-9 items-center justify-center rounded-md ${
            isPrimary ? "bg-cream/15 text-cream" : "bg-ink-600 text-cream"
          }`}
        >
          {icon}
        </div>
        <h3 className="mb-2 font-display text-lg font-bold uppercase">
          {title}
        </h3>
        <p
          className={`text-sm ${
            isPrimary ? "text-cream/85" : "text-ink-400"
          }`}
        >
          {description}
        </p>
      </div>
      <div
        className={`mt-6 flex items-center justify-between border-t pt-3 font-mono text-xs ${
          isPrimary ? "border-cream/25" : "border-ink-600/15"
        }`}
      >
        <span>{index}</span>
        <span aria-hidden>→</span>
      </div>
    </div>
  );
}

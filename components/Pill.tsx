import { ReactNode } from "react";

export default function Pill({
  children,
  variant = "dark",
}: {
  children: ReactNode;
  variant?: "dark" | "primary";
}) {
  const styles =
    variant === "dark"
      ? "bg-ink-600 text-cream"
      : "bg-primary-500 text-cream";

  return (
    <span
      className={`inline-block rounded-full px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-widest ${styles}`}
    >
      {children}
    </span>
  );
}

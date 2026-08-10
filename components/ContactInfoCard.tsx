import { ReactNode } from "react";

export default function ContactInfoCard({
  icon,
  label,
}: {
  icon: ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-md border-2 border-ink-600 bg-cream px-4 py-3">
      <span
        className="flex h-6 w-6 items-center justify-center text-ink-600"
        aria-hidden
      >
        {icon}
      </span>
      <span className="font-mono text-sm font-medium uppercase tracking-wide text-ink-600">
        {label}
      </span>
    </div>
  );
}

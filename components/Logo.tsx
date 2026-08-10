export default function Logo({ className = "",textClassName = "" }: { className?: string ,textClassName?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className={`font-display text-lg font-bold uppercase tracking-tight text-ink-600 ${textClassName}`}>
        Mocho Labs
      </span>
    </div>
  );
}

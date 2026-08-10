export default function ShowcaseCard({ className }: { className: string }) {
  return (
    <div className={`sticker-border relative overflow-hidden bg-ink-600 ${className}`}>
      <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
        <div className="space-y-2 p-4 font-mono text-[9px] text-cream/70">
          <p className="text-cream">H1 Headline</p>
          <div className="flex gap-1">
            <span className="rounded border border-cream/30 px-1.5 py-0.5">
              Explore
            </span>
            <span className="rounded border border-cream/30 px-1.5 py-0.5">
              Contact Us
            </span>
          </div>
          <div className="grid grid-cols-3 gap-1 pt-2">
            {["Services", "Work", "About"].map((label) => (
              <div
                key={label}
                className="rounded border border-cream/20 p-1.5 text-center"
              >
                {label}
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-1.5 bg-ink-500 p-4 font-mono text-[9px] text-cream/70">
          <p className="text-sm font-bold uppercase text-cream">
            Brutalist Digital Innovation
          </p>
          <p>Experience uncompromising design &amp; engineering.</p>
          <div className="flex gap-1 pt-1">
            <span className="rounded bg-primary-400 px-1.5 py-0.5 text-ink-600">
              Explore Project
            </span>
            <span className="rounded border border-cream/30 px-1.5 py-0.5">
              Contact Us
            </span>
          </div>
        </div>
      </div>
      <span className="absolute bottom-3 left-3 rounded-full bg-cream px-3 py-1 font-mono text-[10px] font-bold uppercase text-ink-600 shadow-hard-sm">
        Architectural Approach
      </span>
    </div>
  );
}

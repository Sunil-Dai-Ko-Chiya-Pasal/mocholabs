// components/MochoAppPreview.tsx
export default function MochoAppPreview() {
  return (
    <div className="mx-auto w-56 rounded-[2rem] border-4 border-ink-600 bg-ink-600 p-2 shadow-hard">
      <div className="overflow-hidden rounded-[1.4rem] bg-cream">
        {/* status bar */}
        <div className="flex items-center justify-between px-4 pb-1 pt-2 font-mono text-[9px] text-ink-600">
          <span>9:41</span>
          <span>●●●</span>
        </div>

        {/* app header */}
        <div className="flex items-center justify-between px-4 pb-3">
          <span className="font-display text-sm font-bold uppercase tracking-tight text-ink-600">
            Mocho
          </span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-ink-600 text-[10px]">
            🔔
          </span>
        </div>

        {/* revenue card */}
        <div className="mx-4 rounded-xl border-2 border-ink-600 bg-ink-600 p-3 font-mono text-cream shadow-hard-sm">
          <p className="text-[9px] text-cream/50">MONTHLY REVENUE</p>
          <p className="mt-0.5 text-xl font-bold text-primary-400">$84.2k</p>
          <div className="mt-2 flex h-10 items-end gap-1">
            {[5, 8, 6, 10, 7, 12, 9, 14].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-primary-400/80"
                style={{ height: `${h * 6}%` }}
              />
            ))}
          </div>
        </div>

        {/* stat chips */}
        <div className="mx-4 mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-lg border-2 border-ink-600 bg-white p-2 font-mono">
            <p className="text-[8px] text-ink-400">CHURN</p>
            <p className="text-sm font-bold text-ink-600">1.2%</p>
          </div>
          <div className="rounded-lg border-2 border-ink-600 bg-white p-2 font-mono">
            <p className="text-[8px] text-ink-400">ACTIVE</p>
            <p className="text-sm font-bold text-ink-600">12.4k</p>
          </div>
        </div>

        {/* list rows */}
        <div className="mx-4 mt-3 space-y-1.5 pb-4">
          {[
            { label: "Returning", value: 72 },
            { label: "New", value: 45 },
          ].map((row) => (
            <div
              key={row.label}
              className="flex items-center gap-2 rounded-lg border-2 border-ink-600 bg-white px-2 py-1.5"
            >
              <span className="w-14 font-mono text-[8px] text-ink-400">
                {row.label}
              </span>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink-50">
                <div
                  className="h-full rounded-full bg-primary-500"
                  style={{ width: `${row.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* bottom tab bar */}
        <div className="flex items-center justify-around border-t-2 border-ink-600 bg-white py-2 font-mono text-[8px] text-ink-400">
          <span className="text-primary-500">● Home</span>
          <span>Orders</span>
          <span>Insights</span>
          <span>You</span>
        </div>
      </div>
    </div>
  );
}
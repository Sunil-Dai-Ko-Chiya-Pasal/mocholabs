import DeviceMockup from "./DeviceMockup";

function DashboardMockup() {
  return (
    <div className="bg-ink-600 p-3 font-mono text-cream">
      <div className="mb-2 flex items-center justify-between text-[10px] text-cream/60">
        <span>DASHBOARD</span>
        <span>17:53</span>
      </div>
      <div className="mb-2 grid grid-cols-3 gap-1 text-[9px]">
        <div className="rounded bg-ink-500 p-1.5">
          <p className="text-cream/50">REVENUE</p>
          <p className="text-sm font-bold">84%</p>
        </div>
        <div className="rounded bg-ink-500 p-1.5">
          <p className="text-cream/50">ORDERS</p>
          <p className="text-sm font-bold">467</p>
        </div>
        <div className="rounded bg-ink-500 p-1.5">
          <p className="text-cream/50">CONV.</p>
          <p className="text-sm font-bold">99%</p>
        </div>
      </div>
      <button className="w-full rounded bg-primary-400 py-1.5 text-[10px] font-bold uppercase text-ink-600">
        Start New Project
      </button>
    </div>
  );
}

function ProductMockup() {
  return (
    <div className="font-mono text-ink-600">
      <div className="flex items-center justify-between bg-ink-600 px-2 py-1.5 text-[9px] text-cream">
        <span>LABS.</span>
        <span>Cart (2)</span>
      </div>
      <div className="h-28 bg-gradient-to-br from-ink-100 to-ink-50" />
      <div className="space-y-1 p-2">
        <p className="text-[10px] font-bold uppercase">Neo-G V2</p>
        <p className="text-[8px] text-ink-400">
          Engineered utility. Brutalist design, industrial aesthetics.
        </p>
        <p className="text-[9px] font-bold">$345.00 USD</p>
        <button className="w-full rounded bg-primary-400 py-1 text-[9px] font-bold uppercase text-ink-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

function AnalyticsMockup() {
  return (
    <div className="bg-ink-600 p-2 font-mono text-cream">
      <p className="mb-1 text-[9px] text-cream/60">REAL-TIME ANALYTICS</p>
      <div className="mb-1 flex gap-1">
        <div className="flex-1 rounded bg-ink-500 p-1">
          <p className="text-[8px] text-cream/50">ENGAGEMENT</p>
          <p className="text-sm font-bold text-primary-400">6,789</p>
        </div>
        <div className="flex-1 rounded bg-ink-500 p-1">
          <p className="text-[8px] text-cream/50">ACQUISITION</p>
          <p className="text-sm font-bold">2.18</p>
        </div>
      </div>
      <div className="flex h-10 items-end gap-0.5 rounded bg-ink-500 p-1">
        {[6, 9, 4, 10, 7, 12, 5, 8].map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-sm ${
              i % 3 === 0 ? "bg-blush" : "bg-primary-400"
            }`}
            style={{ height: `${h * 6}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export default function MockupStack() {
  return (
    <div className="mx-auto mt-16 flex max-w-3xl items-center justify-center gap-6 px-6 pb-4">
      <DeviceMockup rotate="-8">
        <DashboardMockup />
      </DeviceMockup>
      <DeviceMockup rotate="3" className="translate-y-4">
        <ProductMockup />
      </DeviceMockup>
      <DeviceMockup rotate="-4">
        <AnalyticsMockup />
      </DeviceMockup>
    </div>
  );
}

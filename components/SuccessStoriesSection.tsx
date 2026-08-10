import CaseStudyCard from "./CaseStudyCard";

function PhoneMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`h-40 w-24 rounded-xl border-2 border-ink-600 bg-white shadow-hard-sm ${className}`}>
      <div className="h-3 w-full rounded-t-lg bg-ink-600" />
      <div className="space-y-1.5 p-1.5">
        <div className="h-10 w-full rounded bg-ink-100" />
        <div className="h-2 w-3/4 rounded bg-ink-100" />
        <div className="h-2 w-1/2 rounded bg-ink-100" />
      </div>
    </div>
  );
}

function BrewAndBoldMedia() {
  return (
    <div className="flex h-full items-center justify-center gap-4 bg-primary-300 p-6">
      <PhoneMockup className="-rotate-6" />
      <PhoneMockup className="translate-y-3 rotate-3" />
    </div>
  );
}

function UrbanThreadsMedia() {
  return (
    <div className="flex h-full items-center justify-center bg-ink-500 p-6">
      <div className="w-48 rounded-lg border-2 border-cream/40 bg-ink-600 p-3 font-mono text-[9px] text-cream/70 shadow-hard-sm">
        <p className="mb-2 text-cream">LIVE OVERVIEW</p>
        <div className="mb-2 grid grid-cols-3 gap-1">
          <div className="rounded bg-ink-500 p-1">$9,450</div>
          <div className="rounded bg-ink-500 p-1">64</div>
          <div className="rounded bg-ink-500 p-1">1,820</div>
        </div>
        <div className="flex h-8 items-end gap-0.5">
          {[4, 8, 5, 10, 6, 9, 7].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm bg-primary-400" style={{ height: `${h * 8}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FreightMasterMedia() {
  return (
    <div className="flex h-full items-center justify-center bg-gradient-to-br from-ink-400 to-ink-600 p-6">
      <PhoneMockup className="rotate-2" />
    </div>
  );
}

const stories = [
  {
    tag: "E-Commerce",
    title: "Brew & Bold",
    description:
      "A complete digital overhaul for a boutique coffee roaster, streamlining the subscription process and enhancing customer retention.",
    stats: [
      { label: "Revenue Impact", value: "+200%", highlight: true },
      { label: "New Users", value: "50k+" },
    ],
    media: <BrewAndBoldMedia />,
  },
  {
    tag: "Logistics",
    title: "Urban Threads Hub",
    description:
      "Custom inventory and fulfillment dashboard designed to handle massive traffic spikes during limited edition streetwear drops.",
    stats: [
      { label: "Processing Speed", value: "3x Faster", highlight: true },
      { label: "Downtime", value: "0.01%" },
    ],
    media: <UrbanThreadsMedia />,
  },
];

export default function SuccessStoriesSection() {
  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-4">
        <h2 className="text-3xl font-bold uppercase tracking-tight text-ink-600 sm:text-4xl">
          Small Business
        </h2>
        <span className="mt-2 inline-block -rotate-1 rounded-lg border-2 border-ink-600 bg-primary-500 px-4 py-1 text-3xl font-bold uppercase tracking-tight text-cream shadow-hard-sm sm:text-4xl">
          Success Stories
        </span>
      </div>

      <p className="mb-10 max-w-2xl border-l-4 border-primary-500 pl-4 text-sm text-ink-400 sm:text-base">
        We don&rsquo;t just build apps; we engineer growth engines. Explore how
        Mocho Labs transforms ambitious e-commerce visions into
        high-performance realities.
      </p>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {stories.map((story) => (
          <CaseStudyCard key={story.title} {...story} />
        ))}

        <CaseStudyCard
          className="lg:col-span-2"
          layout="split"
          tag="Enterprise SaaS"
          title="FreightMaster Pro"
          description="A comprehensive ground-up build of a logistics tracking platform. We replaced a fragmented legacy system with a unified, high-performance web app."
          stats={[
            { label: "Data Migrated", value: "2TB+" },
            { label: "Efficiency Gain", value: "45%", highlight: true },
          ]}
          cta="View Case"
          media={<FreightMasterMedia />}
        />
      </div>
    </section>
  );
}
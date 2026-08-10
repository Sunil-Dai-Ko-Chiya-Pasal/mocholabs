import Button from "./Button";
import FeatureCard from "./FeatureCard";
import ShowcaseCard from "./ShowcaseCard";

const features = [
  {
    index: "01",
    icon: "⚡",
    title: "Fast Quality Delivery",
    description:
      "We promise timely delivery and superior quality. Our structured sprints ensure you get a high-performance store without the bloat.",
    variant: "light" as const,
  },
  {
    index: "02",
    icon: "✓",
    title: "Suitable Package",
    description:
      "Subscription models that scale with your revenue. No hidden fees.",
    variant: "primary" as const,
  },
  {
    index: "03",
    icon: "📊",
    title: "Data Driven",
    description: "Every design decision backed by hard analytics.",
    variant: "blush" as const,
  },
];

export default function WhySection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex flex-col justify-between gap-6 border-b-2 border-ink-600 pb-6 md:flex-row md:items-end">
        <div>
          <h2 className="text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            Why Mocho Labs?
          </h2>
          <p className="mt-3 max-w-md text-sm text-ink-400">
            We don&rsquo;t do soft gradients and polite templates. We build
            robust, scalable systems that punch through the noise.
          </p>
        </div>
        <Button variant="dark" size="sm">
          View Methodology
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
  <FeatureCard {...features[0]} className="sm:col-span-2" />
  <FeatureCard {...features[1]} className="sm:col-span-1" />
  <FeatureCard {...features[2]} className="sm:col-span-1" />
  <ShowcaseCard className="sm:col-span-2" />
</div>
    </section>
  );
}

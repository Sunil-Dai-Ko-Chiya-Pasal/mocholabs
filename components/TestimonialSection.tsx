// components/TestimonialsSection.tsx
import Pill from "./Pill";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    quote:
      "Mocho Labs rebuilt our checkout in three weeks flat. Conversion jumped 38% before we even finished the rollout.",
    name: "Sarah Chen",
    role: "Founder",
    company: "Brew & Bold",
    rating: 5,
    variant: "primary" as const,
  },
  {
    quote:
      "No fluff, no fifty-slide decks. Just a team that ships and a dashboard that actually holds up during a drop.",
    name: "Marcus Ibe",
    role: "Head of Ops",
    company: "Urban Threads Hub",
    rating: 5,
    variant: "light" as const,
  },
  {
    quote:
      "They migrated 2TB of legacy data without a single day of downtime. Genuinely didn't think that was possible.",
    name: "Priya Nandan",
    role: "CTO",
    company: "FreightMaster Pro",
    rating: 5,
    variant: "dark" as const,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex flex-col items-center gap-4 text-center">
        <Pill>Client Feedback</Pill>
        <h2 className="max-w-2xl text-3xl font-bold uppercase tracking-tight text-ink-600 sm:text-4xl">
          Don&rsquo;t take our word for it.
        </h2>
        <p className="max-w-xl text-sm text-ink-400 sm:text-base">
          Ambitious founders and operators trust Mocho Labs to build the
          systems behind their growth.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </section>
  );
}
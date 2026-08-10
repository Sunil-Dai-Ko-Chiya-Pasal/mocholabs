import Button from "./Button";
import Pill from "./Pill";
import MockupStack from "./MockupStack";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-8 pt-16 text-center">
      <div
        aria-hidden
        className="absolute left-10 top-8 h-16 w-16 rounded-full bg-blush md:h-20 md:w-20"
      />

      <div className="mb-6 flex justify-center">
        <Pill>No BS. Just results.</Pill>
      </div>

      <h1 className="mx-auto max-w-4xl text-4xl font-bold uppercase leading-[1.1] tracking-tight text-ink-600 sm:text-5xl md:text-6xl">
        Scale your{" "}
        <span className="inline-block rotate-[-2deg] rounded-lg border-2 border-ink-600 bg-primary-500 px-3 text-cream shadow-hard-sm">
          e-commerce
        </span>{" "}
        to the moon.
      </h1>

      <p className="mx-auto mt-6 max-w-xl text-sm text-ink-400 sm:text-base">
        We build high-performance infrastructure, raw design, and conversion
        machines for ambitious small businesses ready to dominate their
        market.
      </p>

      <div className="mt-8 flex justify-center">
        <Button size="lg" icon="🚀">
          Start Scaling Now
        </Button>
      </div>

      <MockupStack />
    </section>
  );
}

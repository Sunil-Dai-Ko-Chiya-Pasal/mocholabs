// components/EngineeringHero.tsx
import Button from "./Button";

export default function EngineeringHero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 text-center">
      <div className="sticker-border relative overflow-hidden bg-white px-8 py-14 sm:px-14">
        <div
          aria-hidden
          className="absolute -left-8 -top-10 h-40 w-40 rounded-full bg-primary-200"
        />
        <div
          aria-hidden
          className="absolute -bottom-10 -right-8 h-32 w-32 rounded-full bg-ink-50"
        />

        <h1 className="relative text-4xl font-bold uppercase leading-[1.05] tracking-tight text-ink-600 sm:text-5xl md:text-6xl">
          Engineering
          <br />
          Digital Dominance
        </h1>
      </div>

      <p className="mx-auto mt-8 max-w-xl text-base text-ink-400">
        We don&rsquo;t build websites; we build scalable digital
        infrastructure for ambitious brands ready to break the mold.
      </p>

      <div className="mt-8 flex justify-center">
        <Button size="lg" shape="rect" icon="→">
          Book Your Growth Audit
        </Button>
      </div>
    </section>
  );
}
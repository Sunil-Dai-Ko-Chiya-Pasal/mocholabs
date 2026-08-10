// components/TypingWord.tsx
"use client";

import { useEffect, useState } from "react";

const TYPING_SPEED = 90;
const DELETING_SPEED = 50;
const PAUSE_AFTER_TYPED = 1600;
const PAUSE_AFTER_DELETED = 300;

export default function TypingWord({ words }: { words: string[] }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">(
    "typing"
  );

  useEffect(() => {
    const current = words[wordIndex];

    if (phase === "typing") {
      if (text.length < current.length) {
        const t = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          TYPING_SPEED
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("pausing"), PAUSE_AFTER_TYPED);
      return () => clearTimeout(t);
    }

    if (phase === "pausing") {
      const t = setTimeout(() => setPhase("deleting"), 0);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (text.length > 0) {
        const t = setTimeout(
          () => setText(current.slice(0, text.length - 1)),
          DELETING_SPEED
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
        setPhase("typing");
      }, PAUSE_AFTER_DELETED);
      return () => clearTimeout(t);
    }
  }, [text, phase, wordIndex, words]);

  return (
    <span className="inline-block min-w-[1ch] rotate-[-2deg] rounded-lg border-2 border-ink-600 bg-primary-500 px-3 text-cream shadow-hard-sm">
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-cream align-middle h-[0.9em]" />
    </span>
  );
}
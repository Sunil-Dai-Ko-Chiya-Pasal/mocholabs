# Mocho Labs — Landing Page

A Next.js 14 (App Router) + Tailwind CSS recreation of the Mocho Labs landing page.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `tailwind.config.ts` — brand tokens: `primary` (terracotta), `ink` (near-black), `cream` (background), `blush` (pink accent)
- `components/` — reusable pieces: `Button`, `Pill`, `Logo`, `Navbar`, `Hero`, `MockupStack`, `DeviceMockup`, `TechMarquee`, `FeatureCard`, `ShowcaseCard`, `WhySection`, `Footer`
- `app/page.tsx` — assembles the sections
- `app/layout.tsx` — loads Space Grotesk (display), Inter (body), JetBrains Mono (labels/data) via `next/font/google`

## Notes

- All colors are driven from the `primary`/`ink`/`cream`/`blush` tokens in `tailwind.config.ts` — change them there to re-theme the whole site.
- `Button`, `Pill`, and `FeatureCard` accept `variant` props so they're reused across the hero, marquee, and feature grid rather than duplicated.

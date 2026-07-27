# Elite Filing — Next.js

This is the Elite Filing marketing site, converted to the Next.js App Router (Next.js 15, React 19).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/` — App Router pages, layout, sitemap, error/not-found boundaries
- `components/site/` — Header, Footer, PageHero
- `components/ui/` — shadcn/ui-style primitives (client components)
- `lib/`, `hooks/` — shared utilities

## Notes on the conversion

This project was converted from a TanStack Start app. Key changes:
- TanStack Router routes → Next.js App Router `app/**/page.tsx` files
- Route `head()` metadata → Next.js `export const metadata`
- `@tanstack/react-router` `Link`/`useRouter` → `next/link` / `next/navigation`
- `src/routes/sitemap[.]xml.ts` → native `app/sitemap.ts`
- Tailwind CSS v4 wired up via `@tailwindcss/postcss` instead of the Vite plugin
- Interactive pieces (mobile nav, contact form, FAQ accordion) split into client components (`"use client"`) so the rest of each page can stay a server component with static metadata

# Eduardo Sánchez — Product Design Portfolio

A single-page product design portfolio built from Figma, showcasing UX
research, design systems, and AI-first product design work.

## Stack

- React + TypeScript
- Vite
- Tailwind CSS v4
- shadcn/ui
- Recharts (skills proficiency chart)

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Deploying to Vercel (manual)

1. Push this repo to GitHub (already done if you're reading this from the repo).
2. Go to [vercel.com/new](https://vercel.com/new) and import the
   `Product-Portfolio` GitHub repository.
3. Vercel auto-detects Vite — framework preset **Vite**, build command
   `npm run build`, output directory `dist`. Leave the defaults.
4. Click **Deploy**. Every push to `main` will redeploy automatically.

## Content notes

- The profile photo and the two testimonials are placeholders carried
  over from the Figma file (no real photo/quotes were provided there
  yet) — swap `[ FOTO DE PERFIL ]` in `AboutMe.tsx` and the testimonial
  copy in `src/lib/content.ts` once you have them.
- The "DOWNLOAD RESUME" button in `AboutMe.tsx` links to `/resume.pdf`,
  which doesn't exist yet — drop a PDF into `public/resume.pdf` to
  make it work.
- Skill proficiency percentages in the Recharts chart
  (`src/lib/content.ts` → `skills`) are illustrative; the original
  Figma design only listed skills without numeric levels — adjust them
  to taste.

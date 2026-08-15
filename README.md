# Farm Funding

Next.js 15 + Tailwind CSS v4 site for farm-funding.com, built to mirror the
layout/structure of an ag-lending site (nav depth, hero, promo cards, blog
grid, "why choose us" section, industry trends, newsletter) with an original
brand identity and a working loan payment calculator.

## Brand system

- Colors: forest `#4c7a2e`, forest-dark `#3e6e2e`, clay (slate-blue) `#3b5866`, wheat (gold) `#a3821f`, cream `#eef1e2`, charcoal `#28291f`
- Type: Baloo 2 (display/headlines), Open Sans (body), IBM Plex Mono (calculator numbers)
- Photography is placeholder, but locked to a fixed photo per slot via `?lock=N` on each loremflickr URL (see `LOCK_MAP` in `PlaceholderImage.tsx`, `HeroCarousel.tsx`, `WhyUsCarousel.tsx`) so images stay consistent across reloads and deploys instead of changing randomly — swap in real client photos before launch.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

**Option A - via GitHub (recommended)**
1. Push this folder to a new GitHub repo.
2. Go to vercel.com -> New Project -> Import the repo.
3. Vercel auto-detects Next.js - no config needed. Click Deploy.

**Option B - via Vercel CLI**
```bash
npm i -g vercel
vercel        # first deploy, follow prompts
vercel --prod # promote to production
```

## Still needed before launch

- Real client logo (replace the leaf mark + "Farm Funding" text logo in `components/Header.tsx` and `components/Footer.tsx`)
- Real photography (replace `PlaceholderImage`/`HeroCarousel`/`WhyUsCarousel`/`VideoHero` usages throughout `app/`)
- Real copy for the stub pages still pending (everything outside Home and Financing)
- Domain connected in Vercel project settings (farm-funding.com)
- NMLS number / legal entity details in `components/Footer.tsx`

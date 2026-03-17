# Altcorp Website — "Monolith" Design Spec

## Overview
Convert the Altcorp WordPress site into a static Next.js site with the "Monolith" design direction — pure black brutalist aesthetic with massive typography, minimal chrome, and premium film grain texture. Deployable on Vercel.

## Tech Stack
- **Next.js 15** (App Router, static export)
- **TypeScript** strict mode
- **Tailwind CSS v4**
- **Framer Motion** (lazy loaded, `m` components)
- **Geist Sans** (body) via `next/font`
- **Formspree** for contact form
- `output: 'export'` in next.config — fully static

## Design Direction: Monolith
Pure black (#000), white text, zero decoration. Confidence through restraint.

### Colors
- Background: `#000000`
- Surface: `#0A0A0A`
- Elevated: `#111111`
- White: `#FFFFFF`
- Ghost: `rgba(255,255,255,0.7)`
- Dim: `rgba(255,255,255,0.4)`
- Line: `rgba(255,255,255,0.06)`
- Accent (hover only): `rgba(255,255,255,0.02)` background shift

### Typography
- Font: Geist Sans (via next/font/local or next/font/google)
- Hero h1: clamp(4rem, 12vw, 11rem), weight 900, letter-spacing -0.06em, uppercase
- Hero h1 "corp": weight 400, color dim
- Section h2: clamp(1.5rem, 3vw, 2.4rem), weight 800, -0.04em
- Body: 0.92rem, weight 400-500, line-height 1.7
- Labels: 0.62-0.65rem, weight 700, letter-spacing 0.14em, uppercase, color dim

### Film Grain
SVG noise texture as fixed overlay, opacity ~0.025, pointer-events none. Creates the premium texture feel.

### Micro-interactions
- Company rows: slight left-pad on hover + arrow translateX
- Section reveals: fade-up 20px with staggered delays (Framer Motion)
- Header: transparent → blur backdrop on scroll
- Smooth cursor-following glow on interactive elements (very subtle, `rgba(255,255,255,0.02)`)
- Links: subtle underline-from-left on hover
- Buttons: slight scale(1.02) on hover

### Layout
- Container: min(1200px, calc(100vw - 4rem))
- No border-radius anywhere — sharp edges only
- Sections separated by 1px `var(--line)` horizontal rules
- Numbered sections: 001, 002, 003...

## Pages

### 1. Homepage (`/`)
- **Hero**: Full-viewport, "ALT" (900) + "CORP" (400 dim), bottom-aligned
  - Meta strip below: Type, Companies, Sectors, Base
- **001 / About**: Split layout — heading left, body text right
- **002 / Companies**: Table-style index
  - Header row: Company | Focus | Sector
  - 7 company rows with hover interaction
  - Arrow (→) right-aligned
- **003 / Leadership**: Split — text left, founder.webp image right
  - Image in sharp-edged container, object-fit cover
- **CTA**: Giant "Get in / Touch" with outline text treatment, centered

### 2. About (`/about`)
- Page hero: section label + large heading
- Split content: rich text left, structure cards right
- Structure cards: stacked, sharp edges, 1px borders

### 3. Leadership (`/leadership`)
- Split hero: name + role + bio left, founder photo right
- Full-width photo with overlay gradient
- Bio content below

### 4. Contact (`/contact`)
- Split: form left, contact info right
- Form fields: name, email, inquiry type, message
- Sharp-edged inputs, white on black
- Submit via Formspree
- Contact info: email, location, "best for" descriptor

## Components
```
components/
  header.tsx        — fixed, minimal text nav, blur on scroll
  footer.tsx        — 3-col grid, 2px top border
  section.tsx       — numbered section wrapper with divider
  company-row.tsx   — table row with hover animation
  reveal.tsx        — Framer Motion scroll-reveal wrapper
  grain.tsx         — fixed SVG noise overlay
  contact-form.tsx  — Formspree-connected form
```

## Data
```
lib/data.ts — typed constants:
  companies: { name, description, sector, slug }[]
  founder: { name, role, bio, image }
  contact: { email, location }
  navigation: { label, href }[]
```

### Company Data
1. BurnerLinks — Self-destructing privacy links — Software
2. Feedbacks.dev — Developer feedback collection — DevTools
3. Supaviewer — Entertainment analytics platform — Analytics
4. Verified.Doctor — Medical professional verification — Healthcare
5. MyGang AI — AI-native social experiences — AI / Consumer
6. Ottr Chat — Privacy-first messaging — Communication
7. AFKNPC — Gaming community platform — Gaming

## Assets
- `/public/founder.webp` — founder photo (from current repo)
- `/public/logo.png` — Altcorp logo (from current repo)
- Images from `altcorp-theme/assets/images/` as needed

## Responsive
- Desktop: full table layout, split grids
- Tablet (<900px): single column, table reduces to 2-col
- Mobile (<760px): nav hidden (hamburger menu), stacked everything, reduced type sizes

## Accessibility
- Semantic HTML (header, main, nav, section, footer)
- Skip-to-content link
- ARIA labels on interactive elements
- Keyboard navigation for company rows
- prefers-reduced-motion: disable all animations
- WCAG AA contrast (white on black passes easily)

## Performance
- Static export — no server
- next/font for zero-FOUT font loading
- Lazy Framer Motion imports
- Image optimization via next/image
- All images have explicit width/height

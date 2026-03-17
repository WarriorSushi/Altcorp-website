# Altcorp "Monolith" Next.js Rebuild — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static Next.js site with the "Monolith" brutalist design (pure black, massive type, film grain, micro-interactions) and deploy to Vercel.

**Architecture:** Static Next.js 15 App Router site with 4 pages. All content hardcoded in `lib/data.ts`. Tailwind CSS v4 for styling, Framer Motion for animations. Contact form via Formspree. Static export for Vercel deployment.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS v4, Framer Motion, Geist Sans (next/font), Formspree

**Spec:** `docs/superpowers/specs/2026-03-18-monolith-redesign-design.md`

---

## File Structure

```
altcorp-next/
├── next.config.ts              — static export config
├── tailwind.config.ts          — theme: colors, fonts, spacing
├── tsconfig.json               — strict mode
├── package.json                — dependencies
├── postcss.config.mjs          — tailwind postcss
├── app/
│   ├── layout.tsx              — root layout, fonts, grain overlay, metadata
│   ├── page.tsx                — homepage
│   ├── about/page.tsx          — about page
│   ├── leadership/page.tsx     — founder page
│   └── contact/page.tsx        — contact form page
│   └── globals.css             — tailwind directives + custom CSS vars
├── components/
│   ├── header.tsx              — fixed minimal nav, blur on scroll
│   ├── footer.tsx              — 3-col grid, sharp borders
│   ├── section-divider.tsx     — horizontal rule between sections
│   ├── company-row.tsx         — table row with hover animation
│   ├── reveal.tsx              — Framer Motion scroll-reveal wrapper
│   ├── grain.tsx               — fixed SVG film grain overlay
│   ├── contact-form.tsx        — Formspree-connected form
│   └── mobile-nav.tsx          — slide-out mobile navigation
├── lib/
│   └── data.ts                 — all content: companies, founder, nav, contact
└── public/
    ├── founder.webp            — copied from current repo
    └── logo.png                — copied from current repo
```

---

## Task 1: Project Scaffold

**Files:**
- Create: `altcorp-next/package.json`
- Create: `altcorp-next/next.config.ts`
- Create: `altcorp-next/tailwind.config.ts`
- Create: `altcorp-next/tsconfig.json`
- Create: `altcorp-next/postcss.config.mjs`
- Create: `altcorp-next/app/globals.css`
- Create: `altcorp-next/app/layout.tsx`
- Create: `altcorp-next/app/page.tsx` (minimal placeholder)

- [ ] **Step 1: Create Next.js project**

```bash
cd C:/coding/Altcorp-website
pnpm create next-app@latest altcorp-next --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-pnpm
```

- [ ] **Step 2: Install dependencies**

```bash
cd altcorp-next
pnpm add framer-motion
```

- [ ] **Step 3: Configure next.config.ts for static export**

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

- [ ] **Step 4: Set up globals.css with Monolith design tokens**

Replace `app/globals.css` with Tailwind directives and CSS custom properties for the Monolith palette:
- `--bg: #000`, `--surface: #0A0A0A`, `--elevated: #111`
- `--white: #fff`, `--ghost: rgba(255,255,255,0.7)`, `--dim: rgba(255,255,255,0.4)`
- `--line: rgba(255,255,255,0.06)`
- Base styles: black bg, white text, Geist Sans, antialiased

- [ ] **Step 5: Set up root layout.tsx with Geist font and metadata**

```tsx
// app/layout.tsx
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata = {
  title: "Altcorp — Companies, Products, and Platforms",
  description: "The parent company behind software products, digital platforms, and operating brands.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 6: Verify dev server starts**

```bash
pnpm dev
```
Expected: Server starts on localhost:3000, shows default page

- [ ] **Step 7: Copy assets from WordPress theme**

```bash
cp ../altcorp-theme/founder.webp public/founder.webp
cp ../altcorp-theme/altcorp-logo.png public/logo.png
```

- [ ] **Step 8: Commit**

```bash
git add altcorp-next/
git commit -m "feat: scaffold Next.js project with Tailwind and Framer Motion"
```

---

## Task 2: Data Layer + Shared Components

**Files:**
- Create: `altcorp-next/lib/data.ts`
- Create: `altcorp-next/components/grain.tsx`
- Create: `altcorp-next/components/reveal.tsx`
- Create: `altcorp-next/components/section-divider.tsx`
- Create: `altcorp-next/components/header.tsx`
- Create: `altcorp-next/components/footer.tsx`
- Create: `altcorp-next/components/mobile-nav.tsx`
- Modify: `altcorp-next/app/layout.tsx` — add Header, Footer, Grain

- [ ] **Step 1: Create lib/data.ts with all typed content**

All companies, founder info, navigation links, and contact info as typed constants:

```ts
export interface Company {
  name: string;
  description: string;
  sector: string;
  slug: string;
}

export const companies: Company[] = [
  { name: "BurnerLinks", description: "Self-destructing privacy links", sector: "Software", slug: "burnerlinks" },
  { name: "Feedbacks.dev", description: "Developer feedback collection", sector: "DevTools", slug: "feedbacks-dev" },
  { name: "Supaviewer", description: "Entertainment analytics platform", sector: "Analytics", slug: "supaviewer" },
  { name: "Verified.Doctor", description: "Medical professional verification", sector: "Healthcare", slug: "verified-doctor" },
  { name: "MyGang AI", description: "AI-native social experiences", sector: "AI / Consumer", slug: "mygang-ai" },
  { name: "Ottr Chat", description: "Privacy-first messaging", sector: "Communication", slug: "ottr-chat" },
  { name: "AFKNPC", description: "Gaming community platform", sector: "Gaming", slug: "afknpc" },
];

export const founder = {
  name: "Dr. Syed Irfan",
  role: "Founder & Group Lead",
  bio: "Oversees Altcorp's group strategy, product direction, and long-term development across all businesses and platforms.",
  image: "/founder.webp",
};

export const contact = {
  email: "contact@altcorp.in",
  location: "India",
};

export const navigation = [
  { label: "About", href: "/about" },
  { label: "Companies", href: "/#companies" },
  { label: "Leadership", href: "/leadership" },
  { label: "Contact", href: "/contact" },
];
```

- [ ] **Step 2: Create grain.tsx — fixed SVG noise overlay**

Film grain overlay using an inline SVG feTurbulence filter, fixed position, pointer-events none, opacity 0.025.

- [ ] **Step 3: Create reveal.tsx — Framer Motion scroll-reveal**

Wrapper component using `m.div` with `whileInView` animation. Fade up 20px, staggered delays via `transition.delay` prop. Respects `prefers-reduced-motion`.

- [ ] **Step 4: Create section-divider.tsx**

Simple `<hr>` styled as 1px `var(--line)` full-width rule.

- [ ] **Step 5: Create header.tsx — fixed minimal nav**

Fixed position, transparent background → blur backdrop on scroll (useEffect + scroll listener). Brand name left, nav links right. All text, no logo mark. Uppercase, small type.

- [ ] **Step 6: Create mobile-nav.tsx — slide-out drawer**

Hamburger button (3 lines → X), full-height slide-out panel from right, dark background, large nav links.

- [ ] **Step 7: Create footer.tsx — 3-column grid**

Brand + description | Pages links | Contact info. Top border 1px. Base row with copyright.

- [ ] **Step 8: Update layout.tsx to include Header, Footer, Grain**

Wrap `{children}` between Header and Footer components. Add Grain as fixed overlay.

- [ ] **Step 9: Verify — dev server shows header/footer with grain**

```bash
pnpm dev
```

- [ ] **Step 10: Commit**

```bash
git add -A
git commit -m "feat: add data layer, shared components (header, footer, grain, reveal)"
```

---

## Task 3: Homepage

**Files:**
- Modify: `altcorp-next/app/page.tsx`
- Create: `altcorp-next/components/company-row.tsx`

- [ ] **Step 1: Create company-row.tsx**

Table-row component with 4 columns: name, description, sector, arrow. Hover: left-pad shift, arrow translateX, subtle background. Framer Motion for hover animation.

- [ ] **Step 2: Build homepage — Hero section**

Full-viewport height, flex column justify-end. "ALT" in weight 900 + "CORP" in weight 400 dim color. Massive clamp(4rem, 12vw, 11rem) uppercase. Meta strip below with Type/Companies/Sectors/Base.

- [ ] **Step 3: Build homepage — About section (001)**

`<SectionDivider />` then numbered section. Split grid: heading left, body text right. Section label "001 / About" in dim uppercase.

- [ ] **Step 4: Build homepage — Companies section (002)**

Table header row (Company | Focus | Sector), then 7 `<CompanyRow />` components mapped from `companies` data. Each wrapped in `<Reveal />`.

- [ ] **Step 5: Build homepage — Founder section (003)**

Split grid: text left (name, role, bio, CTA button), `founder.webp` image right in sharp-edged container with `object-fit: cover`.

- [ ] **Step 6: Build homepage — CTA section**

Centered. Giant "Get in" + "Touch" (outline text: `-webkit-text-stroke: 1px white, -webkit-text-fill-color: transparent`). Subtitle, two buttons.

- [ ] **Step 7: Verify homepage renders correctly**

```bash
pnpm dev
```
Check: hero fills viewport, company table hovers work, founder photo loads, grain visible, scroll reveals animate.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat: build homepage with hero, companies, founder, CTA"
```

---

## Task 4: About Page

**Files:**
- Create: `altcorp-next/app/about/page.tsx`

- [ ] **Step 1: Build about page**

- Page hero: section label + large heading + summary text
- Split content: rich text left describing Altcorp's role and approach
- Right side: 3 stacked structure cards (sharp edges, 1px borders):
  1. "Internet-native companies"
  2. "Products and platforms"
  3. "Coherent parent structure"

Content from spec and WordPress `page-about-altcorp.php`.

- [ ] **Step 2: Verify about page**

```bash
pnpm dev
```
Navigate to /about, check layout and content.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add about page"
```

---

## Task 5: Leadership Page

**Files:**
- Create: `altcorp-next/app/leadership/page.tsx`

- [ ] **Step 1: Build leadership page**

- Split hero: founder name (massive type) + role + bio left, `founder.webp` right
- Image: sharp edges, full height, object-fit cover, object-position center 18%
- Below: rich content panel with additional bio text
- Content from WordPress `page-leadership.php`

- [ ] **Step 2: Verify leadership page**

Navigate to /leadership, check founder photo renders, layout works on mobile.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add leadership page"
```

---

## Task 6: Contact Page + Formspree

**Files:**
- Create: `altcorp-next/app/contact/page.tsx`
- Create: `altcorp-next/components/contact-form.tsx`

- [ ] **Step 1: Create contact-form.tsx**

Client component (`"use client"`). Form with 4 fields:
- Name (text input)
- Email (email input)
- Inquiry Type (text input, placeholder "Partnership / Business / Product")
- Message (textarea)

Submit to Formspree endpoint. Sharp-edged inputs: black bg, white border, white text. Submit button: white bg, black text, full width.

Form states: idle, submitting (disabled), success (thank you message), error.

Use `https://formspree.io/f/{FORM_ID}` — the user will need to create a Formspree form and replace the ID.

- [ ] **Step 2: Build contact page**

Split layout:
- Left: form
- Right: contact info cards (email, location, "best for" descriptor)
- Page hero above with section label + heading

Content from WordPress `page-contact.php`.

- [ ] **Step 3: Verify contact page**

Navigate to /contact, check form renders, inputs styled correctly, responsive layout.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add contact page with Formspree form"
```

---

## Task 7: Polish, Responsive, Accessibility

**Files:**
- Modify: various components for responsive fixes
- Modify: `altcorp-next/app/globals.css` — responsive breakpoints, reduced-motion

- [ ] **Step 1: Test and fix all responsive breakpoints**

- Mobile (<760px): single column everything, nav hidden, hamburger works, reduced hero type
- Tablet (<900px): company table reduces to 2 columns (hide sector + arrow)
- Desktop: full layout

- [ ] **Step 2: Add prefers-reduced-motion support**

In globals.css and Reveal component: disable all animations when `prefers-reduced-motion: reduce`.

- [ ] **Step 3: Accessibility pass**

- Add skip-to-content link in layout
- ARIA labels on nav toggle, form inputs
- Keyboard navigation on company rows (tabIndex, Enter/Space to navigate)
- Semantic HTML verified (header/main/nav/section/footer)

- [ ] **Step 4: Verify static build**

```bash
pnpm build
```
Expected: Static export succeeds, `out/` directory created with all pages.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: polish responsive, accessibility, static build"
```

---

## Task 8: Clean Up + Deploy

**Files:**
- Modify: root directory — remove old WordPress files, restructure for Vercel

- [ ] **Step 1: Move Next.js project to root**

Move everything from `altcorp-next/` to root. Remove old WordPress theme, docker-compose, mockups.

```bash
# From C:/coding/Altcorp-website
# Remove old files
rm -rf altcorp-theme docker-compose.yml mockups output fields.jpg lines.webp "Altcorp (1).png"
# Move Next.js to root
mv altcorp-next/* altcorp-next/.* . 2>/dev/null
rmdir altcorp-next
```

- [ ] **Step 2: Add .gitignore for Next.js**

Ensure `.gitignore` includes: `node_modules/`, `.next/`, `out/`, `.env*`, `.superpowers/`

- [ ] **Step 3: Verify build from root**

```bash
pnpm build
```

- [ ] **Step 4: Commit all changes**

```bash
git add -A
git commit -m "feat: complete Monolith redesign, ready for Vercel deployment"
```

- [ ] **Step 5: Force push to GitHub (replaces WordPress content)**

```bash
git push origin main --force
```

User can then connect the repo to Vercel for automatic deployments.

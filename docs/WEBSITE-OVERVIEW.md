# Clockout Website — Comprehensive Overview

> Last updated: June 12, 2026
> Domain: [clockout.us](https://clockout.us)
> Repository: `/Users/forex/clock`

---

## 1. Project Overview

Clockout is a marketing website for a done-for-you AI automation service targeting local trade businesses (HVAC, roofing, plumbing, electrical, etc.). It is **not a SaaS product** — it sells one-time automation builds. The customer owns the system outright with no subscriptions or recurring license fees.

**Core tagline:** "Find your revenue leaks."

**Founder:** Donovin — former product operations lead at Uber and Walgreens. He applies large-scale operations discipline (live events, 50,000-person logistics) to small service businesses.

**Geography:** Roscoe, IL — serving Northern Illinois & Southern Wisconsin, though the service is remote/deliverable anywhere.

**Contact:** `hello@clockout.us`

---

## 2. Product & Business Model

### Core Service: Revenue Leak Audit + Full Implementation

| Item | Detail |
|------|--------|
| **Beta price** | $497 all-in (normally $1,494) |
| **Turnaround** | Written audit report in 48 hours, full build in 7 days |
| **What you get** | Full workflow audit → automation build → docs + access + training |
| **Guarantee** | "If the system doesn't recover 10 hours a week within 30 days, I keep working until it does. Free." |
| **Ownership** | Customer owns everything outright — no subscriptions, no licenses |

### Exchange Model
Beta customers agree to:
- A before/after case study the founder can publish
- One testimonial

This is a deliberate trade: the customer gets a heavily discounted build ($497 vs. $1,494) in exchange for social proof assets that Clockout uses to sell future clients.

### Revenue Model
- **Beta:** $497 flat (limited to ~15 clients)
- **Post-beta:** Likely $1,494+ per engagement (indicated by "normally $1,494" anchoring)
- **No recurring revenue:** Each engagement is a one-time project. The business model is project-based consulting, not SaaS.

### What Gets Built
Per-vertical automations typically include:
- **24/7 AI front desk** — answers, qualifies, books, dispatches based on real schedules
- **Missed-call rescue** — SMS callback within 30 seconds with booking link
- **Quote follow-up engine** — multi-touch SMS + email sequences recovering 20–35% of unsigned quotes
- **Review pipeline** — auto-triggered after job completion, routes 5-star to Google, less to owner privately
- **Maintenance reactivation** — automated seasonal renewal sequences
- **Churn-saver flows** — win-back sequences for lapsed customers

The methodology is branded as **"Operator OS"** — a personal AI operating system that captures everything, routes in real time, and surfaces what needs attention.

---

## 3. Target Audience & Verticals

### Primary Verticals (8 industries)

| Vertical | Slug | Pain Point |
|----------|------|------------|
| HVAC | `hvac` | Missed calls = $400 tickets walking next door |
| Roofing | `roofing` | Storm leads not converted to signed jobs |
| Plumbing | `plumbing` | Emergency calls answered after competitors |
| Electrical | `electrical` | Disorganized schedules and invoices |
| Landscaping | `landscaping` | Recurring revenue not on autopilot |
| Cleaning | `cleaning` | No-shows and churn |
| Property Management | `property-management` | Dropped maintenance requests and owner updates |
| Real Estate | `real-estate` | Poor follow-up on leads |

### Decision-Maker Profile
Owner-led trade/service business owners who:
- Are overwhelmed by admin/operations
- Lose revenue through missed calls, un-followed-up quotes, and churned customers
- Want automation but don't know where to start or trust agencies
- Value ownership (no subscriptions) and flat pricing
- Typically have 5–50 employees

### ICP (Ideal Customer Profile)
Local service business owners who:
- Run an owner-operated trade business with 5+ employees
- Are losing calls, leads, or customers due to operational friction
- Have tried "automation" before (or been burned by agencies)
- Value simplicity, flat pricing, and outright ownership
- Are skeptical of AI but respect operational expertise

---

## 4. Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | TanStack Start (React 19 + SSR/SSR streaming) |
| **Routing** | TanStack Router (file-based, generated route tree) |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/vite` plugin) |
| **UI Components** | shadcn/ui (custom-styled, CSS variables) |
| **Animation** | `tw-animate-css` (Tailwind animation plugin) |
| **Fonts** | Google Fonts: Instrument Serif (display), Geist (sans), Geist Mono (mono) |
| **Icons** | Inline SVGs (no icon library dependency) |
| **State / Data** | TanStack Query (React Query) |
| **Analytics** | `@vercel/analytics/react` |
| **Build** | Vite + Vinxi (TanStack Start meta-framework) |
| **Deployment** | Vercel (serverless, SSR) |
| **Forms** | Tally.so embeds (assessment/booking, not custom forms) |
| **Package Manager** | npm |
| **TypeScript** | Yes, strict mode |

### Why This Stack
- **TanStack Start** is a newer SSR meta-framework built on TanStack Router and Vite. It provides file-based routing, SSR, streaming, and server functions.
- **Tailwind v4** uses the new CSS-first configuration with `@theme` directives and `oklch` color spaces.
- **No CMS:** Content is hardcoded in React components and data files. The blog is placeholder ("Coming soon").
- **No database:** The site is entirely static/marketing content with no user accounts or persistent storage.

---

## 5. Site Architecture

### Route Map

| Route | Purpose | Key Content |
|-------|---------|-------------|
| `/` | Homepage | Hero with founder story, proof bar, trust signals, Operator OS methodology, verticals grid, audit CTA |
| `/about` | About page | Founder story — Uber/Walgreens ops background, mission-driven pitch |
| `/pricing` | Pricing page | Single beta offer ($497), value breakdown, guarantee, FAQ-style pricing |
| `/audit` | Audit page | What the Revenue Leak Audit covers, process steps, deliverable description |
| `/services` | Services index | Overview of all 8 verticals with grid navigation |
| `/services/[slug]` | Vertical pages | 8 pages with per-vertical: hero, pains, process steps, automations, proof stats |
| `/operator-os` | Methodology page | The "Operator OS" framework — capture → route → surface |
| `/faq` | FAQ page | Common questions about the process, guarantee, timeline |
| `/contact` | Contact page | Tally.so embed form for inquiries |
| `/assessment` | Beta assessment | Tally.so embed for beta eligibility / signup form |
| `/blog` | Blog index | Placeholder — posts listed as "Coming soon" |
| `/privacy` | Privacy policy | Static legal page |
| `/terms` | Terms of service | Static legal page |

### Layout Structure

```
__root.tsx (shell)
├── HeadContent (SEO meta, JSON-LD structured data, fonts, analytics scripts)
├── SiteLayout
│   ├── Header (sticky, backdrop-blur, mobile hamburger menu)
│   ├── <main> (route content via Outlet)
│   ├── Footer (4-column grid, ink background)
│   └── ExitIntentOverlay (modal, shown on mouse-leave or timed triggers)
└── Scripts + Vercel Analytics
```

**Note:** `SiteLayout` is used in most routes but `__root.tsx` also has its own `main#main-content` wrapper via `RootComponent`. The `SiteLayout` adds Header/Footer/ExitIntentOverlay around a route's content.

### Component Tree (Reusable)

```
components/site/
├── SiteLayout.tsx       — Layout wrapper (Header + Footer + ExitIntent)
├── Header.tsx           — Nav bar with services dropdown, mobile menu
├── Footer.tsx           — 4-column footer with links
├── Section.tsx          — Content section wrapper (toned backgrounds, max-width)
├── Card.tsx             — Generic card (soft, outline, ghost, elevated variants)
├── CTAButton.tsx        — Call-to-action link (primary, ghost, tertiary variants)
├── AuditCard.tsx        — Revenue Leak Audit promotional card with BetaCounter
├── BetaCounter.tsx      — Scarcity progress bar + anchoring pricing display
├── GuaranteeBadge.tsx   — "10 hrs/week back or I keep working free" badge
├── Steps.tsx            — Process steps display component
├── ExitIntentOverlay.tsx — Modal popup with focus trap, shown on exit intent
└── (other route-specific components)
```

---

## 6. Design System

### Color Palette (oklch)

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| `--bone` | `oklch(0.962 0.012 85)` — warm white | same (foreground) |
| `--ink` | `oklch(0.16 0.012 60)` — near-black | same (background) |
| `--clay` | `oklch(0.55 0.04 60)` — muted brown-gray | same |
| `--signal` | `oklch(0.66 0.21 38)` — amber/orange accent | same |
| `--imessage` | `oklch(0.66 0.18 252)` — blue | same |

The palette is intentionally warm (amber "signal" on bone backgrounds) with high contrast between `ink` (text/background) and `bone` (background/text). The `signal` color is used for CTAs, accents, and emphasis.

### Typography

| Usage | Font | Weight |
|-------|------|--------|
| Display / Headings | Instrument Serif | 500 (medium) |
| Body UI | Geist (sans) | 300–700 |
| Mono / Labels | Geist Mono | 400–600 |

- **Eyebrow labels** (`eyebrow` class): Geist Mono, 0.72rem, uppercase, wide tracking
- **Operational labels** (`op-label` class): Geist Mono, 0.72rem, uppercase, bold
- **Card titles** (`card-title` class): Geist (sans), 1.25rem–1.5rem, semibold
- **Prose width**: 65ch max for readable content

### CSS Architecture
- Tailwind v4 with `@theme inline` block for CSS custom property mapping
- `:root` + `.dark` blocks for light/dark color schemes
- `@layer base` for global styles (body, headings, prose utilities)
- All colors in `oklch` format for perceptual uniformity
- `focus-visible` outlines use the `signal` color for accessibility

### Design Characteristics
- **Tone:** Warm, professional, "operator" aesthetic — mechanical, assertive, no-nonsense
- **Card style:** Rounded (`--radius: 0.5rem`), subtle borders, optional shadows
- **Animations:** Subtle transitions (0.15s ease) on interactive elements
- **Blur effects:** `backdrop-blur-xl` on sticky header
- **Dark mode:** Supported via `.dark` class (not auto-detected — class-based toggle)

---

## 7. Pricing Model

### Current Beta Pricing

| Component | Price |
|-----------|-------|
| Revenue Leak Audit (report only) | Not sold separately |
| Audit + Full Implementation | **$497** (normally $1,494) |
| Ongoing costs | $0 — no retainer, no subscription |

### Beta Scarcity Mechanics
- **BetaCounter component:** Shows 12/15 spots filled, 3 remaining
- **Hardcoded values** with comment: `⚠️ CRITICAL: filled MUST always reflect real paid beta clients. Do not fabricate social proof.`
- **Anchoring:** Every pricing display shows $1,494 struck through, then $497
- **Spot remaining display:** Active in AuditCard, ExitIntentOverlay, and inline hero CTA

### Pricing Psychology
- **Anchoring:** Full price ($1,494) shown before discounted price ($497)
- **Loss aversion:** "Lock In $497 Before This Goes to $1,494"
- **Scarcity:** Limited beta spots (15 total), visually tracked
- **Risk reversal:** "10 hrs/week back in 30 days or I keep working free"
- **Flat fee:** No hourly billing, no surprise charges — aligns with target audience's distrust of agencies

---

## 8. Content Strategy

### Vertical Content System
Content for the 8 industry verticals is centralized in `src/lib/vertical-content.ts` (509 lines, ~65 lines per vertical). Each vertical has:

```
hero: string          — Headline (e.g., "Every missed call is a $400 ticket walking next door")
heroLede: string      — Supporting description
painTitle: string     — Section heading for pain points
pains: string[]       — 4 specific pain points
steps: Step[]         — Process: Audit → Build → Handover
automations: Automation[] — 4–5 specific automations per vertical
proof: { headline, body, stats } — Social proof section
```

The `src/routes/services/[slug].tsx` dynamic route renders all verticals from this data file.

### Blog
- `/blog` route exists but shows "Coming soon" for all posts
- No blog content infrastructure yet (no CMS, no markdown processing)
- Blog is listed in navigation but not yet populated

### SEO
- **Per-route meta tags:** Each route file exports `head` with title, description, OG meta
- **Structured data:** JSON-LD in `__root.tsx` — both `Organization` and `LocalBusiness` schema
- **Canonical URLs:** Generated via `fullUrl()` helper in `src/lib/seo.ts`
- **Open Graph:** OG image, title, description per route
- **Twitter cards:** `summary` card type
- **Favicon/Apple touch icon** in `/public/`

### Existing Documentation
The `/docs/` directory contains 16 files including:
- Marketing playbook (`one-page-marketing-plan.md`, `vibe-marketing-playbook.md`)
- SEO audit (`seo-audit-report.md`) — identifies technical SEO gaps
- Site architecture plan (`site-architecture-plan.md`)
- Customer research synthesis (`customer-research-synthesis.md`)
- Deployment guides (`DEPLOYMENT.md`, `DEPLOY_CHECKLIST.md`, `QUICK_DEPLOY.md`, `VERCEL_SETTINGS.md`)
- Repositioning playbook (`NEW-JUNE10-clockout-repositioning-playbook.md`)
- Beta audit prompt (`audit-prompt.md`)

---

## 9. Deployment & Infrastructure

### Deployment
- **Host:** Vercel (serverless functions for SSR)
- **Entry:** `src/server.ts` — custom fetch handler wrapping TanStack Start's server entry
- **Environment:** Standard Vercel Node.js runtime

### Build & Scripts

| Script | Command | Purpose |
|--------|---------|---------|
| `dev` | `nitro dev --port 3000` | Local development server |
| `build` | `nitro build` | Production build |
| `start` | `nitro start` | Start production server |
| `preview` | `nitro preview` | Preview production build locally |
| `typecheck` | `tsc --noEmit` | TypeScript type checking |
| `lint` | `biome check .` | Code quality (Biome) |
| `format` | `biome check --write .` | Auto-format code |

### Error Handling
- **SSR Error Recovery:** `server.ts` intercepts h3's swallowed errors (`{unhandled: true, message: "HTTPError"}`) and returns a styled HTML error page instead of raw JSON
- **Client Error Capture:** `error-capture.ts` registers `error` and `unhandledrejection` global listeners with 5-second TTL, so `server.ts` can recover the original stack trace
- **Fallback Error Page:** `error-page.ts` renders a minimal styled HTML page with "Try again" and "Go home" links
- **TanStack Error Boundary:** Root route `errorComponent` catches React render errors with retry action

---

## 10. Conversion Optimization Features

### Exit-Intent Overlay
- **File:** `src/components/site/ExitIntentOverlay.tsx`
- **Desktop trigger:** Mouse leaves viewport from the top
- **Homepage trigger:** Scroll past 600px (fires once)
- **Pricing/Services trigger:** 12-second delay
- **Session control:** Dismissed once per session via `sessionStorage`
- **Accessibility:** `role="dialog"`, `aria-modal="true"`, focus trap, focus restoration on dismiss
- **Psychology:** Anchoring ($1,494 → $497), loss aversion, scarcity (BetaCounter), low-friction dismiss option ("No thanks — I'll keep leaking revenue")

### Scarcity / Social Proof
- `BetaCounter` component with progress bar, spot count, and price anchoring
- Hardcoded to 12/15 filled (must be manually updated for real clients)
- Displayed in AuditCard, ExitIntentOverlay, and optionally in compact form

### Guarantee Badge
- "10 hrs/week back in 30 days or I keep working free"
- Shown prominently on homepage hero

### Trust Signals
- Homepage proof bar: "6+ YRS Operations Experience", "48 HRS to Written Audit Report", "$0 Retainers. Ever."
- Logo/grid section showing brands the founder has worked with (implicit trust transfer)

---

## 11. SEO & Structured Data

### JSON-LD Schemas (in `__root.tsx`)

**Organization:**
```json
{
  "@type": "Organization",
  "name": "Clockout",
  "description": "AI automation that recovers your lost revenue...",
  "logo": "https://clockout.us/apple-touch-icon.png",
  "slogan": "Find your revenue leaks.",
  "url": "https://clockout.us"
}
```

**LocalBusiness:**
```json
{
  "@type": "LocalBusiness",
  "name": "Clockout",
  "priceRange": "$497-$5,000",
  "areaServed": ["Chicago", "Illinois"],
  "founder": { "@type": "Person", "name": "Donovin" }
}
```

### SEO Notes (from existing audit)
- Technical SEO gaps identified in `docs/seo-audit-report.md`
- Per-route meta tags and OG tags are well-structured
- No blog content yet (missed SEO opportunity for long-tail vertical keywords)
- Canonical URLs are set per route
- `robots.txt` and sitemap.xml status unclear

---

## 12. File Structure Reference

```
clock/
├── public/                    # Static assets (favicon, OG img, etc.)
├── src/
│   ├── components/
│   │   └── site/              # Reusable site components (~10 files)
│   ├── lib/
│   │   ├── site.ts            # Core site config, verticals, CTAs
│   │   ├── vertical-content.ts # Per-vertical page content (509 lines)
│   │   ├── seo.ts             # URL helper for canonical/OG URLs
│   │   ├── utils.ts           # General utility functions (cn, etc.)
│   │   ├── error-capture.ts   # Global error event capture
│   │   └── error-page.ts      # SSR fallback error HTML
│   ├── routes/
│   │   ├── __root.tsx         # Root shell + error/404 boundaries
│   │   ├── index.tsx          # Homepage
│   │   ├── about.tsx          # About page
│   │   ├── pricing.tsx        # Pricing page
│   │   ├── audit.tsx          # Audit page
│   │   ├── services.tsx       # Services index
│   │   ├── services/
│   │   │   └── [slug].tsx     # Dynamic vertical page
│   │   ├── solutions.tsx      # Solutions overview
│   │   ├── faq.tsx            # FAQ page
│   │   ├── contact.tsx        # Contact form (Tally embed)
│   │   ├── assessment.tsx     # Beta signup (Tally embed)
│   │   ├── blog.tsx           # Blog index (placeholder)
│   │   ├── operator-os.tsx    # Methodology page
│   │   ├── privacy.tsx        # Privacy policy
│   │   └── terms.tsx          # Terms of service
│   ├── router.tsx             # TanStack Router setup
│   ├── routeTree.gen.ts       # Auto-generated route tree
│   ├── server.ts              # SSR entry (custom fetch handler)
│   ├── styles.css             # Design system + Tailwind config
│   └── config.ts              # App config (ssr, etc.)
├── app.config.ts              # TanStack Start / Vinxi config
├── package.json
├── tsconfig.json
├── vite.config.ts             # Vite plugins (Tailwind, etc.)
├── docs/                      # Existing project docs (16 files)
│   ├── WEBSITE-OVERVIEW.md    # This file
│   ├── one-page-marketing-plan.md
│   ├── seo-audit-report.md
│   ├── site-architecture-plan.md
│   ├── DEPLOYMENT.md
│   └── ... (12 more)
└── .gitignore
```

---

## 13. Key Observations

1. **No backend / database:** The site is purely a marketing brochure. All content is hardcoded. No auth, no API routes, no server functions beyond SSR.

2. **Business model risk:** Clockout is not a SaaS — it sells one-time projects. This means each sale starts from zero revenue. The business depends on high-ticket project fees and/or converting beta customers into recurring referrals.

3. **Beta limitations:** 15 spots is very small. If successful, the post-beta pricing and delivery model need to be established. The service isn't currently built to scale — it's one person (the founder) delivering automations.

4. **Blog is placeholder:** The `/blog` route exists but all posts show "Coming soon." No CMS, no content pipeline. This is a missed SEO and authority-building channel.

5. **Tailwind v4 specifics:** The project uses Tailwind v4's CSS-first config (`@theme inline`), not the traditional `tailwind.config.js`. The `oklch` color space is used for all colors.

6. **Tally.so dependency:** Lead capture and contact forms depend on Tally.so embeds. There's no custom form handling. This means no custom validation, no custom thank-you flows, and dependence on a third-party embed.

7. **No tests:** There's no test configuration or test files in the project.

8. **Accessibility:** Skip-to-content link, focus-visible outlines, ARIA labels on interactive elements (ExitIntentOverlay), semantic HTML structure. Good baseline but no dedicated a11y audit.

9. **Error resilience:** Strong SSR error recovery with captured stack traces, but no client-side monitoring (Vercel Analytics only, no error reporting service configured).

10. **Font loading:** Three Google Fonts families loaded via preconnect + preload + stylesheet. Geist (Variable), Geist Mono, Instrument Serif. Slight FOUT risk mitigated by matching fallbacks in `@theme`.

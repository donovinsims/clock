# Site Architecture Plan — Clockout

*June 2026. Structural recommendation based on the revenue-leak positioning, one-page marketing plan, and current 12-route codebase (TanStack Router / Nitro / Vercel).*

---

## Current State Audit

The existing site has 12 routes, all functional. No pages are broken or missing redirects. The main structural issues are:

| Issue | Detail |
|-------|--------|
| Services vs Solutions overlap | `/services` (8 verticals) and `/solutions` (30 automation catalog) compete for the same conceptual space. Users must understand the distinction to navigate. |
| Assessment is landlocked | `/assessment` is the primary conversion page but is NOT in the nav — only reachable via CTAs. Users who arrive via blog or organic need an extra click. |
| No pricing page | Pricing is embedded only on `/assessment`. Every new conversion path requires the beta-frame explanation. |
| No case studies route | The vertical pages all say "coming soon" for proof. No dedicated path exists. |
| Blog has no individual post routes | `/blog` lists posts but there's no `/blog/$slug` route. |
| No audit standalone page | The Revenue Leak Audit methodology is explained inline on every page but has no dedicated deep-dive. |
| No FAQ page | Common questions about the model ("what do you build on?", "is it really no retainer?") have no centralized home. |

### Strengths to Preserve

- Clean flat structure (max 2 levels deep)
- Strong vertical-specific pages with deep content
- Assessment page with direct conversion mechanics
- Clear founder story on About page
- Consistent layout system across all routes

---

## Proposed Page Hierarchy

```
Homepage (/)
├── Audit (/audit)                          ★ NEW: dedicated methodology page
├── Services (/services)                    ★ RESTRUCTURED: primary offering list
│   ├── HVAC (/services/hvac)              ✓ EXISTS
│   ├── Roofing (/services/roofing)        ✓ EXISTS
│   ├── Plumbing (/services/plumbing)      ✓ EXISTS
│   ├── Electrical (/services/electrical)  ✓ EXISTS
│   ├── Landscaping (/services/landscaping) ✓ EXISTS
│   ├── Cleaning (/services/cleaning)      ✓ EXISTS
│   ├── Property Mgmt (/services/property-management) ✓ EXISTS
│   ├── Real Estate (/services/real-estate) ✓ EXISTS
│   └── Operator OS (/operator-os)         ✓ EXISTS (separate product)
├── Pricing (/pricing)                      ★ NEW: transparent pricing tiers
├── Case Studies (/case-studies)            ★ NEW: proof section
│   └── [slug] (/case-studies/{slug})      ★ FUTURE: individual case study
├── Blog (/blog)
│   ├── [Post] (/blog/{slug})              ★ NEW: individual post route
│   └── [Category] (/blog/category/{slug}) ★ FUTURE: topic filtering
├── About (/about)                          ✓ EXISTS
├── Assessment (/assessment)                ★ PROMOTE: now also in nav + footer
├── Contact (/contact)                      ✓ EXISTS
├── FAQ (/faq)                              ★ NEW: objection-handling page
├── Privacy (/privacy)                      ✓ EXISTS
└── Terms (/terms)                          ✓ EXISTS
```

### Deprecated Pages (Keep as routes, remove from nav)

| Page | Reason | Action |
|------|--------|--------|
| `/solutions` | Content merged into restructured Services section | Remove from nav; keep route alive (301 plan below) |
| `/operator-os` | Stays, but as a standalone product page | Add to nav as service |

---

## Visual Sitemap

```mermaid
graph TD
    subgraph Header Nav
        HOME[Homepage /]
        AUDIT[Audit]
        SERVICES[Services]
        ABOUT[About]
        BLOG[Blog]
        CTA[Claim Beta Spot → /assessment]
    end

    subgraph Services Dropdown
        S1[HVAC]
        S2[Roofing]
        S3[Plumbing]
        S4[Electrical]
        S5[Landscaping]
        S6[Cleaning]
        S7[Property Mgmt]
        S8[Real Estate]
        S9[Operator OS]
    end

    subgraph Footer
        PRICE[Pricing]
        CASES[Case Studies]
        FAQ[FAQ]
        CONTACT[Contact]
        PRIV[Privacy]
        TERMS[Terms]
    end

    HOME --> AUDIT
    HOME --> SERVICES
    HOME --> ABOUT
    HOME --> BLOG
    HOME --> CTA

    SERVICES --> S1
    SERVICES --> S2
    SERVICES --> S3
    SERVICES --> S4
    SERVICES --> S5
    SERVICES --> S6
    SERVICES --> S7
    SERVICES --> S8
    SERVICES --> S9

    BLOG --> B1[Post pages /blog/{slug}]
    CASES --> C1[Case study pages /case-studies/{slug}]
```

---

## URL Map

| Page | URL | Parent | Nav Location | Priority | Status |
|------|-----|--------|-------------|----------|--------|
| Homepage | `/` | — | Header | High | ✓ Existing |
| Audit | `/audit` | Homepage | Header, Services | High | ★ New |
| Services Hub | `/services` | Homepage | Header dropdown trigger | High | ✓ Existing |
| HVAC | `/services/hvac` | Services | Services dropdown | High | ✓ Existing |
| Roofing | `/services/roofing` | Services | Services dropdown | High | ✓ Existing |
| Plumbing | `/services/plumbing` | Services | Services dropdown | High | ✓ Existing |
| Electrical | `/services/electrical` | Services | Services dropdown | High | ✓ Existing |
| Landscaping | `/services/landscaping` | Services | Services dropdown | High | ✓ Existing |
| Cleaning | `/services/cleaning` | Services | Services dropdown | High | ✓ Existing |
| Property Mgmt | `/services/property-management` | Services | Services dropdown | High | ✓ Existing |
| Real Estate | `/services/real-estate` | Services | Services dropdown | High | ✓ Existing |
| Operator OS | `/operator-os` | Services | Services dropdown | Medium | ✓ Existing |
| Pricing | `/pricing` | Homepage | Footer | High | ★ New |
| Case Studies | `/case-studies` | Homepage | Footer | Medium | ★ New |
| Case Study (individual) | `/case-studies/{slug}` | Case Studies | — | Future | ★ Future |
| Blog | `/blog` | Homepage | Header | Medium | ✓ Existing |
| Blog Post | `/blog/{slug}` | Blog | — | Medium | ★ New |
| Blog Category | `/blog/category/{slug}` | Blog | — | Low | ★ Future |
| About | `/about` | Homepage | Header | Medium | ✓ Existing |
| Assessment | `/assessment` | Homepage | Header CTA, Footer | High | ✓ Existing (promote) |
| FAQ | `/faq` | Homepage | Footer | Medium | ★ New |
| Contact | `/contact` | Homepage | Footer | Medium | ✓ Existing |
| Privacy | `/privacy` | — | Footer | Low | ✓ Existing |
| Terms | `/terms` | — | Footer | Low | ✓ Existing |

---

## Navigation Spec

### Header Nav (5 items max + CTA)

```
[Logo: Clockout] | Audit | Services ▼ | About | Blog | [Claim Beta Spot →]
```

**Order rationale:**
1. **Audit** — the core methodology and primary destination for cold traffic
2. **Services** — secondary browse behavior (drop-down with 9 items)
3. **About** — authority and trust for evaluation-phase visitors
4. **Blog** — content funnel entry for organic traffic
5. **CTA button** — high-contrast, right-aligned, links to `/assessment`

**Services dropdown** — vertical list of 9 items (8 trade verticals + Operator OS with a divider). No mega menu needed at current scale.

### Footer Nav

```
Product          Resources          Company          Legal
------           ---------          -------          -----
Audit            Blog               About            Privacy
Pricing          Case Studies       Contact          Terms
Services         FAQ                Assessment
```

### Breadcrumb Implementation

Add breadcrumbs to all sub-pages:

```
Home > Services > HVAC
Home > Blog > Post Title
Home > Case Studies > Client Name
```

Rules:
- Home is always linked
- Each breadcrumb segment is clickable except the current page
- Self-separating with `›` (not `/`)
- Add `@id` BreadcrumbList schema on every sub-page

---

## Proposed Site Config Changes

### `src/lib/site.ts` — NAV array update

```ts
export const NAV = [
  { label: "Audit", href: "/audit" },
  { label: "Services", href: "/services", hasMenu: true },   // dropdown with 9 items
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];
```

Footer links should be defined separately for footer rendering.

### New routes to create

| Route file | Purpose |
|-----------|---------|
| `src/routes/audit.tsx` | Revenue Leak Audit methodology deep-dive |
| `src/routes/pricing.tsx` | Pricing tiers ($497 beta, $1,494 standard) |
| `src/routes/case-studies.tsx` | Case studies hub (initially "coming soon" with explanation) |
| `src/routes/blog.$slug.tsx` | Individual blog post (content from CMS/MDX) |
| `src/routes/faq.tsx` | FAQ page for objections and questions |

### Routes to remove from nav (but keep as valid routes)

- `/solutions` — remove from `NAV` array, keep route file and route tree entry alive
- Verify it doesn't appear in any footer or internal links

### 301 Redirect Plan

No redirects needed — all existing routes remain functional. `/solutions` stays as a route but is no longer discoverable from nav. The solutions content should be migrated into the restructured Services hub page.

---

## Content Migration Plan

### Solutions page → Services hub

The `/solutions` page (30 automations in 6 groups) should be migrated into an expanded `/services` hub page. Add a tab or section that shows the capability catalog after the vertical cards:

```
Services Hub (services.index.tsx):
├── "By Industry" — the 8 vertical cards ✓ (existing)
└── "By Capability" — the 30 automations in groups (migrated from /solutions)
```

This eliminates the overlap. One services page serves both browse modes.

### Audit page content

The new `/audit` page should explain:
- What the Revenue Leak Audit is
- The 3-step process (Audit → Build → Handover)
- What a leak looks like in dollar terms
- The 48-hour report format
- The guarantee
- CTA to claim beta spot

### Pricing page content

The new `/pricing` page should present:
- Beta offer: $497 (3 spots)
- Standard build: $1,494
- What's included at each tier
- The no-retainer guarantee
- Comparison vs alternatives (ServiceTitan, GHL, AI phone agents)

---

## Internal Linking Plan

### Hub-and-Spoke Model

```
Hub: /audit (methodology hub)
├── Spoke: /services/hvac   (← links back to /audit as "see how this works")
├── Spoke: /services/roofing (← same)
├── Spoke: /pricing          (← links to /audit as "the methodology")
├── Spoke: /assessment       (← links to /audit as "what you get")
└── Spoke: /about            (← links to /audit as "why I can do this")

Hub: /blog (content hub)
├── Spoke: /blog/{post} → links to related /services/{vertical}
├── Spoke: /blog/{post} → links to /audit
└── Spoke: /blog/{post} → links to /assessment

Hub: /services (offering hub)
├── Spoke: /services/{vertical} → links to /audit
├── Spoke: /services/{vertical} → links to /assessment
└── Spoke: /services/{vertical} → links to /pricing
```

### Key Cross-Links

| From | To | Why |
|------|----|-----|
| Every blog post bottom | `/assessment` | Conversion path for content readers |
| Every vertical page hero | `/audit` | Methodology explanation for vertical visitors |
| `/pricing` | `/assessment` | "Claim a beta spot" conversion |
| `/faq` | `/audit`, `/pricing` | Answers lead to action |
| `/about` bottom | `/audit` | Trust → methodology |
| `/case-studies` | `/services/{vertical}` | Proof → relevant offer |

---

## Phase Plan

| Phase | Changes | Effort |
|-------|---------|--------|
| **Phase A (this sprint)** | Restructure NAV array; add `/audit`, `/pricing`, `/faq` routes; merge solutions content into services hub | 3-4 route files |
| **Phase B (content)** | Write copy for new pages; create blog post route pattern | 2 route files + content |
| **Phase C (proof)** | Add `/case-studies` hub + first individual case study route when beta cases complete | 1-2 route files |
| **Phase D (scale)** | Add blog categories; add breadcrumb component; add BreadcrumbList schema | Component + schema |

---

## Scoring

**Current IA: 6/10** — Functional but has structural overlap and missing critical pages.
**Target after implementation: 9/10** — Clear hierarchy, no dead ends, every page has a purpose and a path forward.

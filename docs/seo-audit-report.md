# SEO Audit Report — Clockout

**Date:** June 11, 2026
**Scope:** Full technical + on-page audit
**Method:** Manual code audit of 14 route files, sitemap, robots.txt, llms.txt, schema, and content

---

## Summary

| Area | Score | Notes |
|------|-------|-------|
| Crawlability | 7/10 | Sitemap + robots good, missing sitemap directive in robots |
| Indexation | 8/10 | All canonical tags present, one route missing head() entirely |
| On-page meta | 6/10 | Missing head on services hub, thin descriptions on legal pages |
| Content quality | 8/10 | Strong voice, minimal AI tells, needs more substance on service pages |
| Technical | 7/10 | No LocalBusiness schema, relative canonical URLs |
| Local SEO | 4/10 | Missing local schema, location mentions, Google Business Profile signals |
| **Overall** | **6.5/10** | Solid foundation with 5-7 clear fixes before it's 8+ |

---

## 1. Crawlability

### 1.1 Sitemap (`public/sitemap.xml`)

**Good:**
- 14 URLs covering all pages
- Priority hierarchy makes sense (home=1.0, services=0.9, assessment=0.9, blog=0.6, etc.)
- All service verticals included

**Issues:**

1. **Missing `<lastmod>` on every URL** — Google uses lastmod to determine recrawl priority. Without it, pages may be crawled less frequently.
   - **Fix:** Add dynamic lastmod generation. Use `new Date().toISOString().split('T')[0]` on a rolling basis, or hardcode build date.

2. **Most pages missing `<changefreq>`** — Only `/` has it.
   - **Fix:** Add appropriate changefreq per page type.
   ```xml
   <changefreq>weekly</changefreq>  <!-- homepage, blog -->
   <changefreq>monthly</changefreq> <!-- service pages -->
   ```

3. **No blog posts** — All posts are "Coming soon" but the sitemap only has `/blog` index. Once actual posts exist, each needs its own `<url>` entry.

4. **No `/contact`** — `/contact` route exists but isn't in sitemap. All routes should be included unless noindexed.

### 1.2 Robots.txt (`public/robots.txt`)

**Good:**
- Allow all crawlers (good for AI search visibility)
- Blocks CCBot (Common Crawl training bot) — correct per AI SEO strategy

**Issues:**

1. **Missing `Sitemap:` directive** — Google needs the full absolute URL.
   ```
   Sitemap: https://clockout.co/sitemap.xml
   ```
   - **Fix:** Add the sitemap directive. Use `SITE.url` from config if available.

### 1.3 LLMs.txt (`public/llms.txt`)

**Good:**
- Well-structured with key pages, pricing, and audience description
- AI-search-optimized format

**Issues:**

1. **Missing planned routes** — `/audit`, `/pricing`, `/faq` (from site architecture plan) not listed yet.
   - **Fix:** Add after routes are built.

---

## 2. Indexation

### 2.1 Canonical Tags

**Good:**
- 12 of 14 routes have `<link rel="canonical">` in their head()
- All use the correct path for their route

**Issues:**

1. **`services.index.tsx` has NO head() at all** — This is the `/services/` hub page (the child of `/services` route). It renders fine visually but has **no title tag, no meta description, and no canonical tag**. This is a critical gap.
   - **Fix:** Add head() with title and canonical:
   ```ts
   head: () => ({
     meta: [
       { title: "Services — Clockout" },
       { name: "description", content: "..." },
       { property: "og:title", content: "Services — Clockout" },
       { property: "og:url", content: "/services" },
     ],
     links: [{ rel: "canonical", href: "/services" }],
   }),
   ```

2. **All `og:url` values are relative paths** — e.g., `"/"`, `"/about"`, `"/services"`. Open Graph requires absolute URLs for proper sharing across platforms (Facebook, LinkedIn, Slack).
   - **Fix:** Prefix with site URL base. Create a helper or use the `@/lib/site.ts` `SITE` config.

3. **No `og:image` overrides on subpages** — Only set in `__root.tsx`. When `/assessment` or `/operator-os` is shared, the OG image is generic. Consider page-specific OG images for key conversion pages.

### 2.2 Noindex / Nofollow

- No routes are set to noindex/nofollow, which is correct — all pages are intended to be indexed.
- Privacy and terms pages are valid indexable pages (they build domain authority), so this is good.

---

## 3. On-Page Meta

### 3.1 Title Tags

| Route | Title | Length | Verdict |
|-------|-------|--------|---------|
| `/` | Clockout — Find your revenue leaks. | 36 chars | ✅ Good |
| `/services` | Services — Clockout | 20 chars | ✅ Good |
| `/services/` | **MISSING** | — | ❌ Critical — no title tag |
| `/services/hvac` | HVAC automation — Clockout | 28 chars | ✅ Good |
| `/services/roofing` | Roofing automation — Clockout | 31 chars | ✅ Good |
| `/solutions` | Solutions — Clockout | 21 chars | ✅ Good |
| `/operator-os` | Operator OS — Your Personal AI Operating System | 52 chars | ⚠️ Good but long for SERP (max ~60) |
| `/assessment` | Claim a Beta Spot — Clockout | 30 chars | ✅ Good |
| `/about` | About — Clockout | 17 chars | ✅ Good |
| `/blog` | Field notes — Clockout | 22 chars | ✅ Good |
| `/contact` | Contact — Clockout | 18 chars | ✅ Good |
| `/privacy` | Privacy — Clockout | 18 chars | ⚠️ Thin, but acceptable for legal page |
| `/terms` | Terms — Clockout | 16 chars | ⚠️ Thin, but acceptable for legal page |

**No critical issues beyond missing `/services/` head().**

### 3.2 Meta Descriptions

**Good:**
- All routes (except `/services/`) have unique descriptions
- Descriptions are action-oriented and include value propositions

**Issues:**

1. **`/services/` has no description at all** — inheriting from `__root.tsx` gives `"AI automation that recovers your lost revenue..."` — not ideal for the services hub.
2. **`/privacy`** — `"How Clockout handles your information."` — too thin, but acceptable for legal page.
3. **`/terms`** — `"Terms of service for Clockout."` — too thin, acceptable for legal page.
4. **`services.$slug.tsx` uses `heroLede` as description** — Some heroLede values are long (e.g., property-management: ~190 chars). Meta descriptions should be 150-160 max. Verify none get truncated in SERP.

### 3.3 Open Graph / Twitter Cards

- All pages inherit OG tags from `__root.tsx` (og:site_name, og:type, twitter:card=summary)
- All pages override og:title, og:description, og:url
- Only `__root.tsx` sets og:image and twitter:image — subpages inherit this
- **Twitter `card` is `summary` (square image)** — For blog posts and key landing pages, `summary_large_image` produces better sharing previews. Consider per-page type.

---

## 4. Content Quality

### 4.1 AI Writing Detection

Audited against the reference guide (`make-interfaces-feel-better`):

**Strong (human-voice) signals:**
- Direct, conversational tone: "Tell us what's broken." / "My techs are great. My back office is on fire."
- Short punchy sentences: "No thought leadership. No 12-step listicles."
- Specific, concrete claims: "6+ YRS operations experience / 48 HRS to written report / $0 retainers"
- No filler words, no empty intensifiers
- No overused verbs (delve, leverage, utilize, streamline) — none found
- No overused adjectives (transformative, groundbreaking, cutting-edge) — none found
- No AI opening phrases ("In today's...", "In an era of...", "Imagine a world where...")

**Minor AI tells to clean up:**
1. **"It's not just [X], it's also [Y]"** structure — flagged in AI detection guide. Example on `/solutions` page: check for this pattern.
2. **"Whether you're a [X], [Y], or [Z]"** — check `/operator-os` and `/about` copy for this pattern.
3. **"By [doing X], you can [achieve Y]"** — check hero sections for sentence-starting-with-"By" + gerund pattern.

**Verdict:** Copy reads as largely human-written with a strong, opinionated voice. This is a significant competitive SEO advantage over typical AI-generated content.

### 4.2 Content Depth

- **Service pages** (`services.$slug.tsx`): ~400-500 words each with pains, steps, automations, and proof sections. Good for thin-content avoidance.
- **Homepage**: Strong hero + 3 sections + audit card. Good density.
- **About page**: Founder story + operational experience. Could use more depth.
- **Blog**: 4 planned posts with compelling titles. All marked "Coming soon" — the lack of actual content is a missed SEO opportunity. These are high-intent topics.

---

## 5. Technical SEO

### 5.1 Schema Markup

**Current:** Organization schema in `__root.tsx`:
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Clockout",
  "description": "AI automation that recovers your lost revenue...",
  "logo": "...",
  "slogan": "Find your revenue leaks."
}
```

**Missing:**
1. **LocalBusiness schema** — Critical for local SEO (Northern Illinois target market). Should include:
   ```json
   {
     "@context": "https://schema.org",
     "@type": "LocalBusiness",
     "name": "Clockout",
     "description": "...",
     "url": "https://clockout.co",
     "telephone": "...",
     "areaServed": [
       { "@type": "City", "name": "Chicago" },
       { "@type": "State", "name": "Illinois" }
     ],
     "priceRange": "$497-$5,000",
     "founder": { "@type": "Person", "name": "Donovin" }
   }
   ```

2. **FAQ schema** — For `/faq` (planned route) — excellent SERP feature opportunity.

3. **Service/ServiceType schema** — For service vertical pages (e.g., `HVAC` automation). Can add `@type: "Service"` on each vertical page:
   ```json
   {
     "@context": "https://schema.org",
     "@type": "Service",
     "name": "HVAC Automation — Clockout",
     "serviceType": "HVAC Automation",
     "provider": { "@type": "Organization", "name": "Clockout" },
     "areaServed": { "@type": "State", "name": "Illinois" }
   }
   ```

### 5.2 URL Structure

- Clean, descriptive paths: `/services/hvac`, `/operator-os`, `/assessment`
- No URL parameters, no fragment routing for content
- All lowercase, hyphenated
- **No trailing slash enforcement** — TanStack Router should handle both, but confirm `/services` redirects to `/services/` or vice versa. Check which version Google indexed.

### 5.3 Page Speed

- Tailwind CSS (v4) inlined via `styles.css?url` — likely efficient
- Font preloading set up for Instrument Serif, Geist, Geist Mono
- No render-blocking third-party scripts detected on core pages
- Tally.so embed on `/assessment` may slow down that page (external iframe)
- **No performance budget issues visible from code audit** — recommend Lighthouse run for baseline

### 5.4 Mobile

- Tailwind responsive classes present on all components
- Mobile hamburger menu in Header
- Footer stacks on mobile via grid
- No horizontal overflow risks visible in code
- **Good mobile baseline**, verify with Lighthouse

---

## 6. Local SEO

### 6.1 Target Market Gaps

The site targets Northern Illinois (HVAC, roofing, plumbing, etc.) but:

1. **No location pages** — No `/service-area` or `/illinois/hvac` pages. For local SEO, location-specific pages drive organic visibility in Google Local Pack.
2. **No city/state mentions in H1s** — The homepage and service pages don't mention Illinois or Northern Illinois explicitly in headings.
3. **No LocalBusiness schema** (see 5.1)
4. **No Google Business Profile** — Verify one exists and links back to site
5. **No NAP (Name, Address, Phone)** — Site contact is `hello@clockout.co` with no phone or physical address. This hurts local pack ranking.

### 6.2 Service Area Optimization

If the business model allows, consider creating location-specific service pages:
- `/services/hvac/chicago`
- `/services/plumbing/naperville`
- etc.

This is Phase-2 local SEO — not blocked on current build.

---

## 7. Critical Issues (Fix Immediately)

| # | Issue | Route | Effort | Impact |
|---|-------|-------|--------|--------|
| 1 | **No head() on services hub** | `/services/` | 5 min | High — page has no title/meta/canonical |
| 2 | **robots.txt missing Sitemap directive** | `public/robots.txt` | 2 min | Medium — slows sitemap discovery |
| 3 | **sitemap missing lastmod** | `public/sitemap.xml` | 10 min | Medium — reduces crawl efficiency |
| 4 | **Relative og:url paths** | All routes | 15 min | Medium — breaks social sharing previews |
| 5 | **No LocalBusiness schema** | `__root.tsx` | 15 min | Medium — missed local pack opportunity |

## 8. Recommended Fixes (This Sprint)

| # | Issue | Effort | Impact |
|---|-------|--------|--------|
| 1 | Add head() to `services.index.tsx` | 5 min | High |
| 2 | Add `Sitemap:` to robots.txt | 2 min | Medium |
| 3 | Add lastmod + changefreq to sitemap | 10 min | Medium |
| 4 | Make canonical/og:url absolute (use `SITE.url`) | 15 min | Medium |
| 5 | Add LocalBusiness schema | 15 min | Medium |
| 6 | Update llms.txt with new routes | 5 min | Low |
| 7 | Audit & fix any remaining AI writing tells | 20 min | Low-Medium |

## 9. Future Opportunities

| Opportunity | Value | When |
|-------------|-------|------|
| Blog content — publish the 4 planned posts | High | After Phase 2 copywriting |
| FAQ page with schema | High | After Phase A nav restructure |
| Location/service-area pages | High | Phase B |
| Case studies with structured data | Medium | After first client deliveries |
| Google Business Profile optimization | Medium | ASAP — pre-revenue is the right time |
| Performance baseline (Lighthouse) | Medium | Before any heavy JS additions |

---

## Appendix: Route head() Coverage

```
/                           ✅ head() — good
/services                   ✅ head() — good
/services/                  ❌ NO head()
/services/hvac              ✅ head() (dynamic via loader)
/services/roofing           ✅ head() (dynamic via loader)
/services/plumbing          ✅ head() (dynamic via loader)
/services/electrical        ✅ head() (dynamic via loader)
/services/landscaping       ✅ head() (dynamic via loader)
/services/cleaning          ✅ head() (dynamic via loader)
/services/property-management ✅ head() (dynamic via loader)
/services/real-estate       ✅ head() (dynamic via loader)
/solutions                  ✅ head() — good
/operator-os                ✅ head() — good
/assessment                 ✅ head() — good
/about                      ✅ head() — good
/blog                       ✅ head() — good
/contact                    ✅ head() — good
/privacy                    ✅ head() — thin but acceptable
/terms                      ✅ head() — thin but acceptable
```

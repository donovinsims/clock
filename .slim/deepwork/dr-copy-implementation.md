# DR Copy Implementation — Clockout

## Goal
Implement all agreed copy improvements across Clockout website pages, ranked by effort-to-impact, validated after each phase.

## Source Context
- DR copy audit scores (from `docs/clockout-direction-overview.md` and audit delivered earlier)
- DR copy reference: `docs/direct-response-copy-gist.md`
- Brand direction: lowercase, staccato, $ specifics, anti-retainer, "you own it outright", dark bg/orange accent, $497 audit-first funnel, "find $10K or refund" guarantee

---

## Planned Phases

### Phase 1: Quick Wins (~5 min each)
1. **Vertical pages** — Replace "Talk to us" secondary CTA with vertical-specific "See the [Vertical] build →"
2. **Assessment** — Move guarantee ("If we don't find $10K in fixable leaks, you don't pay.") into hero below H1
3. **Contact** — Rewrite "Say hello" headline to something outcome-oriented

### Phase 2: Moderate (~15-30 min)
4. **Operator OS** — Rewrite H1 from "Your second brain, finally on call" → "An operating system for how you actually work." Deepen feature outcomes by pushing So What? chain one level deeper.
5. **Solutions** — Promote sticky note line to hero H2 region. Current H2 "Every workflow. One operator behind it." is product-centric.
6. **Services Hub** — Tighten copy: "bottlenecks" → "leaks", remove "enough times" qualifier.

### Phase 3: Asset-dependent (needs founder photo from user)
7. **About** — Add real founder photo (Donovin). Replace gradient placeholder.

### Phase 4: Content (~per post)
8. **Blog** — Write the four announced posts (live content, not "Coming soon").

### Phase 5: Scoped & Ready (your existing rewrites)
9. **Homepage hero** — Apply your previously-agreed rewrites
10. **Tagline** — Update `SITE.tagline` from "Run better, not busier." → your alternative
11. **Meta description** — Rewrite across `__root.tsx` and `index.tsx` to lead with outcome

---

## File Reference

| Change | File(s) |
|--------|---------|
| Vertical CTA | `src/routes/services.$slug.tsx` (line 55-57) |
| Assessment guarantee | `src/routes/assessment.tsx` (line 56-65) |
| Contact headline | `src/routes/contact.tsx` (line 25-26) |
| Operator OS headline | `src/routes/operator-os.tsx` (line 36-38) |
| Solutions hero | `src/routes/solutions.tsx` (line 90-98) |
| Services hub copy | `src/routes/services.index.tsx` (line 17-24) |
| About photo | `src/routes/about.tsx` (line 87-90) |
| Blog content | `src/routes/blog.tsx` (POSTS array, line 26-51) |
| Homepage hero | `src/routes/index.tsx` (line 37-54) |
| Tagline/CTAs | `src/lib/site.ts` (line 3) + all usages |
| Meta description | `src/routes/__root.tsx` (line 82-84) |

---

## Status — All executed ✓ (Typecheck clean beyond pre-existing Header.tsx errors)

### Phase 1 ✓ — Quick Wins
1. **Vertical pages** → `src/routes/services.$slug.tsx`: "Talk to us" → "See the {data.name} build"
2. **Assessment** → `src/routes/assessment.tsx`: Added "✓ Guaranteed" badge below H1, removed sidebar guarantee card
3. **Contact** → `src/routes/contact.tsx`: "Say hello." → "Tell us what's broken." + meta desc updated

### Phase 2 ✓ — Moderate Rewrites
4. **Operator OS** → `src/routes/operator-os.tsx`: H1 from "Your second brain, finally on call" → "An operating system for how you actually work." Lede tightened. All 4 feature bodies deepened with So What? chain. Meta desc updated.
5. **Solutions** → `src/routes/solutions.tsx`: H2 from "Every workflow. One operator behind it." → "Run by a sticky note? We've built it." Lede tightened with specific list.
6. **Services Hub** → `src/routes/services.index.tsx`: "bottlenecks...enough times" → "Every vertical has its own leaks. After eight industries, we know where yours are."

### Phase 3 — Skipped (user: no photo yet)

### Phase 4 — Pending (blog posts)

### Phase 5 ✓ — Tagline & Homepage
9. **Tagline** → `src/lib/site.ts` + `src/routes/__root.tsx`: "Run better, not busier." → "Find your revenue leaks." Updated in title tags, schema slogan, og:title, twitter:title.
10. **Meta description** → `src/routes/__root.tsx`: From "done-for-you AI automation and operating systems" → "AI automation that recovers your lost revenue. One-time builds. You own the system outright." Updated across all 3 OG/twitter/schema variants.
11. **Homepage hero** → `src/routes/index.tsx`: H1 now "We found $127K in revenue leaks in 47 trades businesses. Yours is next." Lede trimmed to "Yours is next." Meta/OG desc updated with $127K stat and audit offer.

### Remaining
- **Phase 4**: Write blog posts (4 announced topics, live content replacing "Coming soon")

## Validation Strategy
- After each phase: `npx tsc --noEmit` — pre-existing Header.tsx errors only, no new errors
- No visual structure changes (preserve layout, only copy text changes)
- Blog posts need live content when user is ready

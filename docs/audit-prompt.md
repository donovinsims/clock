# Comprehensive Final Site Audit — Clockout

## Setup
1. Build: `npm run build` — must pass with zero errors
2. Dev server: `npm run dev` — visit `http://localhost:3000` for local testing
3. If deployed: replace localhost URLs with the production domain

## 1. Route Completeness
Verify every route renders without error:

| Route | Page | Key Elements |
|-------|------|-------------|
| `/` | Homepage | Hero, stat bar, services grid, social proof, guarantee banner, CTA |
| `/audit` | Audit | Quantified leaks ("$10K minimum"), CTA, guarantee |
| `/pricing` | Pricing | $497 beta / $1,494 standard, 30-day guarantee, feature table |
| `/services` | Services Hub | 8 vertical cards linking to each, CTA |
| `/services/hvac` | HVAC | Breadcrumbs (Home > Services > HVAC), hero, build details, CTA |
| `/services/plumbing` | Plumbing | Same structure, matching vertical |
| `/services/electrical` | Electrical | Same structure |
| `/services/roofing` | Roofing | Same structure |
| `/services/landscaping` | Landscaping | Same structure |
| `/services/cleaning` | Cleaning | Same structure |
| `/services/property-management` | Property Mgmt | Same structure |
| `/services/real-estate` | Real Estate | Same structure |
| `/solutions` | Solutions | Independent page (no redirect), canonical URL |
| `/operator-os` | Operator OS | Methodology page (no pricing, no iMessage product) |
| `/faq` | FAQ | 12 questions (schema), canonical URL, guarantee Q&A |
| `/contact` | Contact | Form/link, CTA |
| `/assessment` | Assessment | Form |
| `/about` | About | Company, founder story |
| `/blog` | Blog | Post listing |
| `/privacy` | Privacy | Policy text |
| `/terms` | Terms | Policy text |

## 2. Navigation Audit
Check every nav item on desktop AND mobile:
- **Top nav**: Audits, Pricing, Services (dropdown with 8 verticals + Operator OS), Blog, About
- **Services dropdown**: 8 verticals listed as grid, Operator OS as standalone entry below with subtitle "Methodology"
- **Mobile menu**: Same items, all links work, menu closes on tap
- **Footer links**: Product column (Audit, Pricing, Operator OS, Services) — all correct URLs
- **No broken links** — click every link, check for 404s or wrong URLs

## 3. Copy Consistency Check
Search every route for these must-be-true:

- [ ] **Pricing**: $497 appears ONLY on Pricing page and beta CTA contexts. $1,494 appears ONLY as standard price contrast.
- [ ] **Guarantee**: Two forms — "10 hrs/week in 30 days or I keep working free" (pricing/operator-os) and "$10K minimum fixable leaks or the audit is free" (audit). Both reference "30-day guarantee".
- [ ] **No retains**: No monthly retainer language anywhere. No "per month" pricing.
- [ ] **No retainer models**: "We don't do retainers" or similar should not appear — we just don't mention them.
- [ ] **Operator OS**: Described as methodology/framework, not as an iMessage product. No pricing on this page.
- [ ] **CTA targets**: "Claim a Beta Spot" → `/assessment`. "/audit" CTAs go to audit flow.
- [ ] **AI tells**: Search for phrases like "In today's fast-paced", "streamline your", "revolutionize", "cutting-edge", "unlock the power" — none should exist.

## 4. SEO Audit

### Technical
- [ ] `/llms.txt` — returns 200, lists all routes, has about/guidelines
- [ ] `/robots.txt` — exists, not blocking important pages
- [ ] Each route has `<title>` + `<meta name="description">`
- [ ] Each route has `<link rel="canonical">` pointing to correct URL
- [ ] Each route has OG tags (og:title, og:description, og:url)

### Schema
- [ ] `/faq` has FAQPage JSON-LD in `<head>` — inspect to verify format
- [ ] Only one FAQPage schema block (no duplicates)

### Headers
- [ ] All pages have proper `<h1>` (exactly one)
- [ ] Heading hierarchy: h1 → h2 → h3 (no skips)

## 5. Visual/UX Audit (Desktop + Mobile 375px)
- [ ] Header nav doesn't overflow on desktop
- [ ] Mobile hamburger opens full menu
- [ ] Footer columns stack properly on mobile (2-col or stack)
- [ ] All buttons have hover states
- [ ] No horizontal scroll on any page
- [ ] Text is readable (no tiny font, sufficient contrast)
- [ ] Images load (no broken alt or missing images)
- [ ] CTA buttons are visually prominent

## 6. Breadcrumbs
- [ ] `/services/hvac` shows: Home > Services > HVAC
- [ ] All 8 service verticals have breadcrumbs
- [ ] "Services" in breadcrumb links back to `/services`
- [ ] Services hub `/services` does NOT have breadcrumbs (superfluous)

## 7. Guarantee Banners
- [ ] Homepage has guarantee section
- [ ] Pricing page mentions 30-day guarantee
- [ ] Audit page has the "$10K minimum leaks" guarantee
- [ ] Operator OS page mentions the 30-day commitment
- [ ] All guarantee copy is consistent (same terms, same spirit)

## 8. Final Checks
- [ ] `npm run build` exits with 0
- [ ] No 404s on any route
- [ ] No console errors in browser DevTools
- [ ] Netlify/Vercel deploy succeeds (if applicable)
- [ ] Custom domain works + www redirects (if applicable)

## Output
Report everything as:
- ❌ **FAIL** (describe what's wrong, where)
- ✅ **PASS**
- ⚠️ **WARN** (non-blocking issue)

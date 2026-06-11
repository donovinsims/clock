# Clockout — Strategic Direction & Website Rebuild Overview

> **Purpose of this document:** Full context brief for anyone (human or AI) working on the Clockout website or business strategy. Covers where we started, what the audit uncovered, what strategic decisions were made, and exactly where we’re headed.

-----

## 1. Background: Who Donovin Is and What Clockout Is

**Donovin Sims** is the solo founder of **Clockout**, an AI automation and systems business based in Roscoe, IL (Northern Illinois — Rockford corridor, Winnebago County, South Beloit area). Before Clockout, Donovin spent time in **Product Operations at Uber** and in **digital product work at Walgreens**, giving him a rare combination of operational depth, product thinking, and systems instinct that most solo operators in this space don’t have.

**Clockout’s core model** is done-for-you workflow automation — flat, one-time pricing, no retainers, no recurring SaaS subscriptions. The positioning is explicitly anti-agency: Clockout doesn’t do strategy decks or month-to-month relationships. It identifies revenue leaks, builds the fix, and hands it over. You own it outright.

**Primary market:** Owner-operated trades and local service businesses — HVAC, roofing, plumbing, electrical, landscaping, cleaning companies, property management, and real estate professionals — primarily in Northern Illinois but built to serve remote.

**Tech stack Clockout runs on:** n8n (self-hosted VPS), Make.com, a custom local CRM called DenchClaw (built on OpenClaw), Cal.com, Tally, Senja, Stripe, Vercel, Spaceship, Zoom with Granola, Loom, and AI agents named Hermes, OpenClaw, and Paperclip.

**Brand voice:** lowercase by default, staccato sentence structure, specific dollar figures and plain-English math, “you own it outright” language, anti-agency framing. No fluff.

-----

## 2. Original Website State & Goals (Pre-Audit)

### What was built

The site (`clockout.us`, repo: `donovinsims/clocks`) is built with **TanStack Start + Nitro**, deployed on **Vercel**. It’s a real, actively developed codebase — 29 branches, 80 commits, 91 deployments at time of audit. Infrastructure is clean and scalable.

**Live pages at time of audit:**

|Route                  |Content                                                                                             |
|-----------------------|----------------------------------------------------------------------------------------------------|
|`/`                    |Homepage — hero: “Stop Losing Jobs to Voicemail.” Stats bar, clear CTA                              |
|`/solutions`           |“Twelve solutions. One owner.” — catalogue of 12 automation cards                                   |
|`/operator-os`         |“An assistant that lives in your texts” — iMessage-based AI assistant, blue color scheme            |
|`/about`               |“A letter to the operators still doing it all” — founder story, Roscoe/NIU/Uber/Walgreens background|
|`/blog`                |Live                                                                                                |
|`/assessment`          |Tally embed, live                                                                                   |
|`/privacy` and `/terms`|Live                                                                                                |

**Current nav:** `Solutions | Operator OS | About | Blog | Book free audit`

**Visual identity:** Dark background, orange accent color for the business lane, blue accent for Operator OS. The color separation between the two lanes is smart and worth keeping.

### What the original goals were

The original intent was to sell automation services to local business owners — broadly, without niche specificity. The solutions catalogue (`/solutions`) served as the primary sales vehicle, listing 12 types of automations (missed-call recovery, estimate follow-up, invoice reminders, review requests, etc.) and routing all visitors — regardless of what industry they were in — to the same generic page.

The primary CTA was booking a free audit. Pricing was not concrete. The value proposition was framed around automations and capabilities rather than outcomes and ROI.

**What was working:**

- The homepage headline (“Stop Losing Jobs to Voicemail”) is sharp and specific
- The founder story on `/about` is genuine and well-written
- The 12-solution catalogue is a credibility and trust asset
- The visual design is clean and distinctive
- The underlying infrastructure is solid

**What wasn’t working:**

- No industry-specific pages — every niche was served the same generic content
- Multiple CTAs competing with each other, no single dominant action
- Pricing language was vague (“let’s talk” energy)
- No testimonials, no social proof, no visible guarantee
- The positioning said “we do automation” instead of “we find and fix revenue leaks”
- Operator OS was positioned as a specific product (iMessage assistant) without a clear lane or audience definition

-----

## 3. What the Audit Revealed

A comprehensive business audit was conducted covering positioning, offer structure, sales page architecture, audience strategy, and the Operator OS opportunity.

### Core diagnosis

The site was selling a **vague automation service** when it needed to be selling a **clear, audit-first offer** with visible proof and a premium outcome tied to time and revenue saved.

**Key problems identified:**

1. **Pricing ambiguity** — no concrete price visible, “let’s talk” kills conversion
1. **Multiple CTAs** — splits attention, reduces action
1. **Generic messaging** — doesn’t speak to any specific contractor’s world
1. **No trust signals** — no testimonials, no proof, no guarantee, no clear process
1. **Wrong framing** — “we do automation” vs. “we find revenue leaks and fix them”
1. **No niche-specific landing pages** — roofing contractors, HVAC owners, and real estate agents were all landing on identical content

### The audit’s primary recommendation

Shift from “we do automation” to “we find revenue leaks, show the cost, and fix them fast.”

Replace the current vague offer with a **paid audit-first model**:

- Front-end: Revenue Leak Audit — priced around $497
- Back-end: Implementation tier at $997+
- One primary CTA: **Book the Audit**
- One strong guarantee: “Find $10K in leaks or 100% refund”

-----

## 4. The Strategic Dilemma: Niche vs. Broad

### The tension

The audit recommended focusing on HVAC contractors specifically. Donovin’s honest reaction: he doesn’t want to build an identity as a “contractor-only” business. His real interest is **any owner-led local service business with operational inefficiencies** — and eventually, individual professionals who want AI-enhanced personal operating systems.

The full audience Donovin wants to serve:

- Roofing, HVAC, Plumbing, Electrical, Landscaping, Cleaning companies
- Property management companies
- Medical practices
- Real estate businesses
- Local professional service firms

### The strategic resolution

**Use contractors as the first proof market, not the permanent ceiling.**

The highest-probability path is a **wedge strategy**:

1. Use one sharp niche (contractors, starting with HVAC/Roofing) to generate fast proof, case studies, and revenue
1. Build Clockout as the **umbrella brand for local service operations** — not “contractor automation”
1. Keep Operator OS as a **separate offer lane** under the parent brand, serving individual professionals and founders

The strongest long-term positioning:

> *“I build AI operating systems for owner-led service businesses and professionals who want to run better, not busier.”*

That’s broad enough for long-term ambition but specific enough to sell.

-----

## 5. New Brand Architecture

### Parent brand

**Clockout** — the umbrella. AI operating systems for service businesses and the people running them.

### Business lane

**Clockout for local service businesses** — covering trades, property management, real estate, and similar owner-led operations. Contractors are the entry wedge and primary proof market.

### Personal/individual lane

**Operator OS** — personal AI operating systems for founders, professionals, sales reps, consultants, and managers. Separate messaging lane, separate funnel, shared underlying methodology.

### Why keep them under one brand

The core IP is the same: building AI systems that reduce operational chaos, recover revenue leaks, and let people run better. The business version and the individual version are different buyer intents but the same philosophy. Keeping them under Clockout avoids brand confusion while allowing clear audience separation through dedicated pages.

-----

## 6. New Website Architecture

### Philosophy

> **Broad homepage. Specific conversion pages.**

The homepage frames the parent brand. Industry-specific pages do the actual converting — using language, pain points, workflows, and proof that each niche immediately recognizes. No more forcing every visitor through a one-size-fits-all solutions page.

### Site map

```
/                          → Homepage (umbrella brand, routes all visitors)
/services                  → Services hub (shows all verticals, self-selection)
/services/hvac             → HVAC-specific landing page
/services/roofing          → Roofing-specific landing page
/services/plumbing         → Plumbing-specific landing page
/services/electrical       → Electrical-specific landing page
/services/landscaping      → Landscaping-specific landing page
/services/cleaning         → Cleaning-specific landing page
/services/property-management → Property management landing page
/services/real-estate      → Real estate landing page (separate from trades)
/operator-os               → Redesigned: personal AI operating systems for professionals
/solutions                 → Existing: 12-automation catalogue (keep as trust/depth asset)
/about                     → Existing: founder story (keep as-is)
/blog                      → Existing (keep)
/assessment                → Existing (keep)
/contact                   → New or existing
```

### Navigation (updated)

**Current:**

```
Solutions | Operator OS | About | Blog | Book free audit
```

**New:**

```
Services ▾ | Solutions | Operator OS | About | Blog | Book free audit
```

Where `Services ▾` drops down to:

- HVAC
- Roofing
- Plumbing
- Electrical
- Landscaping
- Cleaning
- Property Management
- Real Estate

This single nav change is the highest-leverage structural move on the site. It opens the door for all vertical pages without breaking anything already built.

-----

## 7. Page-by-Page Specs

### Homepage (`/`)

**Job:** Frame the Clockout brand at the parent level. Speak to all service business owners. Route visitors into their correct lane.

**Keep:**

- Current headline “Stop Losing Jobs to Voicemail” (sharp, proven)
- Stats bar
- Visual design (dark bg, orange accent)

**Update:**

- Hero subtext: broaden from implied HVAC-only to all local service businesses
- Add a self-selection section or visual routing: “Are you a contractor? Are you a real estate professional? Are you an individual operator?”
- Shift CTA language slightly from “free audit” to “revenue leak audit” framing
- Add 3 proof elements below the fold: testimonials with name, role, specific result

**Messaging direction:** Contractors are losing money through fixable leaks. You find them, show the cost, and fix them in 7 days.

-----

### Services Hub (`/services`)

**Job:** Show every vertical Clockout serves. Give each niche a clear click-through. Reduce decision paralysis.

**Structure:**

- Short header: “Built for the businesses that keep everything running”
- Grid or card layout: one card per vertical (icon, trade name, one-line pain point hook, CTA)
- Each card links to `/services/[trade]`

-----

### Vertical Pages (`/services/hvac`, `/services/roofing`, etc.)

**Job:** Convert one specific niche with their own language, pain, proof, and offer.

**Critical rule:** These are NOT copy-paste templates with swapped trade names. Each page must:

- Use industry-specific pain points (HVAC: after-hours missed calls, seasonal demand spikes, dispatch chaos; Roofing: estimate no-shows, insurance job follow-up lag, slow invoice cycles)
- Name automations specific to that trade
- Reference proof from that trade or adjacent (even early: founder credibility + clear process)
- Use the same visual system but feel native

**Page structure (each vertical):**

1. Hero: “[Trade] owners are leaving money on the table every day they don’t fix this” (with specifics)
1. Pain points (3–5, named, specific)
1. What Clockout does (3-step process: Book Audit → Get Report → Choose Fix)
1. Automations available (trade-specific, pulled from the 12-solution catalogue)
1. Proof section (testimonial or mini case study)
1. Offer: Revenue Leak Audit — $497, 48-hour report, 7-day fix
1. Guarantee badge: “Find $10K in leaks or 100% refund”
1. Single CTA: Book the Audit

**Build order (priority):**

1. `/services/roofing` — highest immediate traction opportunity (Bufalo Contracting relationship)
1. `/services/hvac` — best-documented pain points, highest volume trade
1. `/services/property-management` — distinct pain set, warm market
1. Remaining verticals after first three convert

-----

### Operator OS (`/operator-os`)

**Job:** Sell personal AI operating systems to professionals, founders, consultants, sales reps, and managers.

**Decision needed:** Current page positions Operator OS as “an assistant that lives in your texts” (iMessage-based product). The new positioning makes it a **methodology** — a personal AI operating system for how you work, think, capture, and execute.

**Recommended resolution:** Keep the iMessage assistant as a *feature/component* of Operator OS, but reframe the page around the broader personal-productivity-and-execution outcome. The page should speak to:

- Founders who are drowning in decisions and tasks
- Sales reps managing leads and follow-up manually
- Real estate agents losing speed-to-lead
- Consultants managing clients without a system
- Professionals who want AI to be their actual second brain

**Messaging direction:** You already work hard. Operator OS makes sure all that work *compounds* instead of just consuming you.

**Visual:** Keep the blue accent (distinct from the orange business lane). This separation is smart.

-----

### Solutions (`/solutions`)

**Keep as-is.** The 12-solution catalogue is a trust and depth asset. It shows breadth without requiring visitors to navigate it before buying. Link to it from vertical pages as supporting material.

-----

### About (`/about`)

**Keep as-is.** The founder story (Roscoe / Hononegah / NIU / Uber / Walgreens / back to Northern Illinois to build this) is genuine, specific, and well-written. This is a conversion asset, not a formality.

-----

## 8. Offer Model

### Front-end: Revenue Leak Audit

- **Price:** $497
- **Deliverable:** 48-hour report showing revenue leaks (missed calls, cold estimates, invoice lag, dispatch chaos, etc.) with dollar values attached
- **Guarantee:** Find $10K+ in leaks or 100% refund
- **CTA copy:** “Book the Audit” (not “book a free call” — this is a paid, premium diagnostic)

### Back-end: Implementation

- **Price:** $997+ (one-time, flat)
- **Deliverable:** 7-day fix of identified leaks — automations built, tested, handed over
- **Framing:** “You own it outright” — no monthly fees, no retainer

### Relationship to current “Book free audit” CTA

The current site offers a free audit as the CTA. The new model makes the audit paid and premium. This shift:

- Increases perceived value
- Pre-qualifies buyers (someone who pays $497 is serious)
- Creates a natural upsell path to implementation
- Lets the guarantee de-risk the purchase

-----

## 9. Content Strategy & Outbound

To support the new site architecture, the parallel content and outbound plan:

**LinkedIn:** Daily posts in Clockout’s brand voice — lowercase, staccato, specific dollar figures. Topic mix: operations case studies, automation examples by trade, founder story beats, “I found $X in leaks at a [trade] company this week” posts.

**Cold email:** Personalized outreach to Northern Illinois trades contractors. Lead with the revenue leak framing — don’t open with “I do automation.”

**Local referral system:** After any engagement, ask for one referral to another local service business in the same trade or adjacent.

-----

## 10. What to Keep, Change, Add, and Remove

### Keep

- Homepage headline and hero
- About page (no changes needed)
- Solutions catalogue (`/solutions`)
- Visual design system (dark bg, orange for business, blue for Operator OS)
- TanStack Start + Nitro + Vercel infrastructure
- ConvertKit integration
- Assessment page (Tally embed)

### Change

- Navigation: add `Services ▾` dropdown
- Operator OS page: reframe from iMessage product to personal AI OS methodology
- Homepage sub-messaging: broaden to all local service businesses, not implied contractor-only

### Add

- `/services` hub page
- `/services/roofing` (priority 1)
- `/services/hvac` (priority 2)
- `/services/property-management` (priority 3)
- `/services/plumbing`, `/services/electrical`, `/services/landscaping`, `/services/cleaning`, `/services/real-estate` (phase 2)
- Testimonial section (3 testimonials: name, role, specific dollar result)
- Guarantee badge component
- Revenue Leak Audit offer block with $497 pricing
- 3-step process visualization: Book → Report → Fix

### Remove

- Multiple competing CTAs
- “Let’s talk” / vague pricing language
- Generic automation messaging that doesn’t speak to a specific trade

-----

## 11. Priority Action Sequence

1. **Update the nav** — add `Services ▾` dropdown (highest leverage, lowest effort)
1. **Build `/services` hub** — self-selection page for all verticals
1. **Build `/services/roofing`** — first full vertical page (Bufalo Contracting context)
1. **Build `/services/hvac`** — second vertical (best-documented pain points)
1. **Update homepage** — add proof section, update CTA to Revenue Leak Audit framing
1. **Reframe `/operator-os`** — expand from iMessage product to personal OS methodology
1. **Build remaining verticals** — phases 2+
1. **Build `/services/property-management`** — distinct pain set worth an early page

-----

*Document version: June 2026 | Based on comprehensive Clockout business audit and strategic planning session*
# Clockout — 1-Page Marketing Plan

*Phase 1 deliverable. Based on the Allan Dib framework. Validated against 25+ industry sources (see `customer-research-synthesis.md`).*

**Date:** June 2026
**Score Target:** 7/10 (gaps noted where beta phase constraints create unknowns)

---

## BEFORE — Prospect to Lead

### 1. Target Market

**Primary Niche:** Trade & home service business owners in the Northern Illinois / Southern Wisconsin corridor (3-4 zip code radius from Rockford).

**Sub-niches (by urgency, ranked):**
- **HVAC contractors** — 78% employ <10 people; most are owner-operators drowning in admin while trying to keep trucks running; peak season (summer/winter) amplifies every leak
- **Plumbing companies** — 550K technician shortfall projected by 2027; cash-flow cycles are brutal (30-60 day pay); any leak compounds fast
- **Roofing contractors** — Storm-chaser season creates feast/famine; lead response time is everything after a hail event; insurance claim tracking is a nightmare
- **Electrical contractors** — Similar structural profile to HVAC; code compliance adds process overhead
- **Landscaping/cleaning** — Higher seasonal variation; lower ticket sizes but higher volume; referral dependency is extreme

**Secondary Niche (Operator OS product only):** Real estate agents, insurance agents, solo sales professionals who live in their inbox and can't scale.

**Ideal Customer Avatar (Primary):**
- Owner or operator of a 3-15 person trade business
- Revenue: $500K–$3M/year
- Pain: "Busy but not profitable" — feels like money is leaking out but can't find where
- Currently using: QuickBooks + a mishmash of free tools + paper/phone notes
- Behavior: Finds recommendations through trade associations, Facebook trade groups ("Northern Illinois HVAC Owners"), and word-of-mouth between shop owners
- Objections: "I've tried software before and it never stuck" / "That's what my dispatcher is for" / "I don't have time to learn another system"
- Desires: More time with family, fewer fire drills, predictable cash flow, a system that works without him touching it

**PVP Index Score:**
- Personal fulfillment: 7/10 — founder has genuine operational ops background, enjoys the puzzle-solving aspect
- Value to marketplace: 9/10 — research validates 62% of calls missed, 52% manual processes, 2 hrs/day lost to admin noise per tech
- Profitability: 8/10 — trade businesses have cash flow (avg $500K–$3M revenue); $497 audit is trivial vs $2-5K/mo wasted on marketing they can't answer

**Copy pattern:**
> "We work exclusively with [trade niche] owners in Northern Illinois who know their techs are great but suspect their back office is bleeding money."

---

### 2. Message (USP)

**Core Positioning Statement:**
> "You know how trade business owners lose 62% of incoming calls and 2 hours per tech per day to admin chaos? What Clockout does is trace every dollar and minute that's leaking from your operation, build the automation stack that plugs the leaks, and hand you the keys in 7 days. You own the system outright. No retainers. No monthly fees. No software you have to learn. So instead of running your business by putting out fires, you run it from a single dashboard — or a single text message."

**USP — The Three Anchors:**

| Anchor | What it means | Why it beats competitors |
|--------|--------------|------------------------|
| **Operational Scale Credential** | Founder ran Uber Product Ops (live events, 50K+ people, real-time dispatch) and Walgreens digital products at national retail scale | ServiceTitan and HousecallPro sell software features; Clockout sells operational methodology proven at 100x the scale |
| **Own the System, Not a Subscription** | Flat fee. No monthly retainers. Full handover of docs, access, training. | SaaS tools ($147–$1K+/mo) lock you into recurring cost; Clockout gives you the system outright |
| **Revenue Leak Audit Methodology** | 48-hour written audit that quantifies every leak in dollars — not a generic checklist | Competitors start with "let me sell you our software"; Clockout starts with "let me show you where your money is going" |

**Elevator Pitch (30 seconds):**
> "I spent years building operational systems at Uber — events where a 2-minute delay meant a real revenue hit. The same failures running local service businesses — missed calls, cold quotes, forgotten follow-ups — are the exact ones I stress-tested at massive scale. I map them, quantify them in dollars, and build the fix in 7 days. You own it. No retainers. And I guarantee you 10 hours a week back in 30 days."

**Proof Substitution (until first case study exists):**
- Replace fabricated stats with: "Currently building my first case studies in Northern Illinois. Beta spots available at $497 — audit + full build. Next client pays $1,494."
- Use founder's Uber/Walgreens background as the credibility mechanism
- The design of the methodology (Audit → Build → Own) serves as proof of process

**Copy pattern:**
> "The only operational system for trade businesses built by someone who stress-tested the same failure modes at Uber event scale — and guarantees you 10 hours a week back, or I keep working free."

---

### 3. Media (Advertising & Channels)

**Phase 1 (Beta — 3 spots): Zero paid media. Pure direct outreach.**

| Channel | Tactic | Budget |
|---------|--------|--------|
| **Facebook Groups** | Direct posts + DM outreach in "Northern Illinois HVAC Owners," "Rockford Area Small Business Network," "Illinois Plumbing Contractors" | $0 |
| **Direct Mail** | 250 hand-addressed postcards to trade businesses within 15 miles of Rockford. Front: "Are you busy but not profitable?" Back: unique URL + QR code to assessment page. (National research shows direct mail open rates of 80-90% for B2B local when personalized.) | ~$150 (printing + postage) |
| **LinkedIn** | Founder's personal profile: daily posts sharing operational insights from Uber/Walgreens context, tagged with #TradeBusiness #RevenueLeaks | $0 |
| **Trade Association Outreach** | Door-knock/intro to local PHCC (Plumbing-Heating-Cooling Contractors) chapter, IREA (Illinois Roofing), local BNI chapters | $0 |
| **Referral Seed** | First 3 beta clients get an affiliate arrangement: for every qualified referral that books a standard audit, referrer gets 15% | $0 upfront |

**Phase 2 (Post-beta, 3+ case studies):**
- **Google Local Services Ads** — highest-intent channel; CAC target <$75
- **Google Search Ads** — "HVAC automation Rockford," "plumbing business software Northern Illinois"
- **Retargeting** — Meta pixel on site, retarget assessment page visitors
- **Direct Mail V2** — Targeted to 1,000 businesses with case study results from beta

**Tracking:**
- Unique phone number per channel (Twilio)
- Unique URL per channel (assessment/QR code per batch)
- UTM parameters on every link
- CRM (pipelines) tracking source → lead → close

**Copy pattern for ads (Phase 2):**
> "Attention [Rockford] [HVAC] owners: My audit finds exactly where your revenue is leaking. 48-hour written report. $497. [CTA]"

---

## DURING — Lead to Customer

### 4. Capture Leads

**Primary Magnet:** "Claim a Beta Spot" → Assessment page → Calendly booking for a 30-minute Revenue Leak Discovery Call.

**Secondary Magnet (Low Friction):** "The 5 Most Common Revenue Leaks in Local Service Businesses" — one-page PDF checklist. Captures email + phone for nurture sequence.

**Lead Capture Points:**
| Location | Asset | Capture |
|----------|-------|---------|
| Homepage hero | "Claim a Beta Spot" CTA | Direct to assessment + booking |
| Solutions page | Checklist lead magnet | Email + phone |
| HVAC/Roofing/Plumbing pages | "Claim a Beta Spot" CTA | Direct to assessment |
| Operator OS page | "Claim a Beta Spot" CTA | Direct to assessment |
| Blog posts (future) | In-article CTA: "Download the Revenue Leak Checklist" | Email |

**The Assessment Page Flow:**
1. Brief intro: "You're here because something feels off about your numbers"
2. Quick form: business name, role, estimated monthly revenue, primary pain point (dropdown: missed calls/ slow quoting/ no follow-up/ cash flow / other)
3. Phone number + email
4. Thank you → Calendly embed → "Pick a time for your 30-minute Revenue Leak Discovery Call"
5. Auto-trigger: welcome email with checklist PDF, SMS confirmation of booking time

**Speed-to-Lead Target:** < 5 minutes from form submission to first contact (auto-SMS + auto-email). Research shows 80%+ conversion drop-off beyond 5-minute response.

**CRM:** Kit (ConvertKit) for email + SMS automation. Pipeline for lead tracking.

**Copy pattern for lead magnet page:**
> "Download the free checklist showing the 5 revenue leaks costing your trade business thousands — and how to spot them in under 10 minutes."

---

### 5. Nurture Leads

**Email Sequence (Automated in Kit):**

| Email | Timing | Content |
|-------|--------|---------|
| #1 Welcome + Checklist | Immediate | Deliver the PDF, set expectations, intro founder's background |
| #2 "The 62% Problem" | Day 2 | Share the missed calls stat from the research + how one Rockford shop could recover ~$3K/mo |
| #3 "Why Uber" | Day 5 | Founder's operational background story — the methodology is the product |
| #4 "What a Revenue Leak Audit Looks Like" | Day 8 | Detailed breakdown of the audit process + sample findings (from beta once available) |
| #5 "The Guarantee" | Day 12 | 10 hours/week back in 30 days — explain why this is different from every SaaS pitch |
| #6 "Still Thinking?" | Day 18 | Objection handling: "I don't have time" / "I tried software before" / "How is this different" |

**SMS Nurture (For those who provided phone number):**
- Day 1: "Hey [name], [founder] from Clockout here. Just sent you the Revenue Leak Checklist. Happy to walk through it with you on a 10-min call — reply YES and I'll send my calendar link."
- Day 7: "Quick tip: The #1 leak I find in most trade shops happens between 5 PM and 8 AM. That's when 62% of calls go unanswered. If you're curious how that math works for your business, let me know."
- Day 14: "Last call: Beta pricing ends when the 3 spots fill. After that it's $1,494 for the same build. Reply BETA if you want to lock in $497."

**Retargeting:**
- Meta pixel on site → retarget assessment page visitors with "Still leaking?" creative
- Google Ads remarketing (Phase 2)

**Content Cadence:** 3:1 value-to-ask ratio across all channels.

---

### 6. Sales Conversion

**The Conversion Path:**

```
Landing Page / Assessment
        ↓
30-min Revenue Leak Discovery Call (Calendly)
        ↓
48-hour Written Audit (delivered via email + follow-up call)
        ↓
Proposal: "Here's what we found. Here's the build. $497 beta / $1,494 standard."
        ↓
Close → Onboarding
```

**The Discovery Call Structure:**
1. **Rapport** (3 min) — "Tell me about your business. How long have you been running it?"
2. **Discovery** (15 min) — Walk through the operational workflow: How do leads come in? What happens after hours? Who follows up on quotes? How do you track reviews? What does your dispatch process look like?
3. **The Moment** (5 min) — Identify 2-3 specific leaks they can feel ("So you're saying you don't know how many after-hours calls you're missing?")
4. **The Frame** (5 min) — "Here's what an audit would look at for your business. The deliverable is a written report quantifying every leak in dollars. From there, I build the fix in 7 days."
5. **The Close** (2 min) — "Beta pricing is $497 all-in — audit + full build. After beta it's $1,494 for the audit alone. I have [X] spots left. Do you want to lock one in?"

**Pricing:**

| Tier | Beta (first 3) | Standard |
|------|---------------|----------|
| Revenue Leak Audit | Included | $497 |
| Full Implementation | Included | $997 |
| **Total** | **$497** | **$1,494** |
| Guarantee | 10 hrs/week back in 30 days | Same |
| Exchange | Case study + testimonial | Nothing extra |

**Risk Reversal (The Guarantee):**
> "If the build doesn't recover at least 10 hours a week within 30 days, I keep working until it does. No charge."

This works because:
- The client can verify "did I get 10 hours back" in real time
- Time-back is what a trade owner actually cares about
- It demonstrates confidence in the implementation

**Objection Handling:**

| Objection | Response |
|-----------|----------|
| "I don't have time" | "That's exactly what every owner says before their first audit. The audit takes 48 hours of my time, not yours. I work around your schedule." |
| "I tried software before" | "I'm not selling you software. I'm selling you a system. The software is just the tool. Most implementation fails because nobody mapped the workflow first — that's what the audit is." |
| "Why so cheap?" (beta) | "I need documented case studies. You get the work at 67% off. I get the proof. Everyone wins." |
| "Can I just get the checklist?" | "Absolutely — download the free checklist. If you find a leak you can't plug, you know where to find me." |
| "How is this different from ServiceTitan?" | "ServiceTitan is a $1K+/month platform that takes weeks to set up. I map your workflow, build automations in your existing stack, and hand you the keys in 7 days. You own it. No monthly fee." |

**Proposal Format:**
- PDF sent within 24 hours of the discovery call (unless same-day close)
- Structure: The Leak → The Fix → The Investment → The Guarantee
- Includes: sample audit page (generic), case study note ("you'll be my first documented case study"), clear next step

---

## AFTER — Customer to Raving Fan

### 7. World-Class Experience

**The Clockout Delivery System:**

| Phase | What Happens | Touchpoints |
|-------|-------------|-------------|
| **Day 1-2** | Audit — deep workflow trace, process mapping, leak quantification | 2 check-in calls (15 min each), written report delivered Day 2 |
| **Day 3-9** | Build — automation installation, CRM setup, SOP documentation | Daily Slack/Loom update (~3 min), founder available via text |
| **Day 7** | Handover — full system demo, access transfer, documentation handoff | 60-min handover call, written docs, recorded walkthrough |
| **Day 10** | "You own it" — follow-up: "How's it feeling?" | 15-min call, address any friction |
| **Day 15** | First check-in: "Tracked your hours saved?" | SMS check-in |
| **Day 30** | Guarantee check: "Are you 10 hrs/week back?" | 30-min review call |
| **Ongoing** | Quarterly check-ins (optional, no charge) | Email / text |

**Moments of Truth:**
1. **The Audit Report Delivery** — This is the WOW moment. The first time the client sees every leak quantified in dollars. They've been feeling the pain vaguely — now they see it on paper. This alone sells the build.
2. **The Handover** — "You own it. Here's everything. I'm not holding anything back." This must feel different from every SaaS experience they've ever had.
3. **The 30-Day Check** — When they realize they actually got 10 hours back. This is the referral moment.

**Surprise & Delight:**
- Handwritten thank-you note mailed after handover
- "First Month Complete" email with a screenshot of their time-recovered stat
- Birthday / anniversary-of-close email (automated)
- Referral program: "Who else do you know who's drowning?" — make it easy, provide the script

**NPS Target:** 50+ (every client is a beta case study, so service quality is existential)

---

### 8. Increase Lifetime Value

**Ascension Model:**

| Tier | Offer | Price |
|------|-------|-------|
| **Entry** | Revenue Leak Checklist (PDF) | Free |
| **Low** | Revenue Leak Audit | $497 |
| **Mid** | Audit + Full Implementation | $1,494 |
| **High** | Premium Retainer (quarterly ops optimization) | $497/quarter (est.) |
| **Ultra** | Fractional COO (monthly — "I run your operations") | $2K–$5K/mo (est.) |

**Expansion Levers:**

1. **Vertical Expansion:** Client started with HVAC audit → they also own a plumbing division → upsell plumbing audit + build
2. **Multi-Location:** Single-shop client grows to second location → same system, multi-site config
3. **Ongoing Optimization (Premium Retainer):** Quarterly check-in: "Let's trace the numbers. What's changed? Where are the new leaks?"
4. **Fractional COO:** For the $2M+ trade business that's ready for a part-time operations exec but can't hire one. Clockout becomes their remote ops arm.
5. **Team Training:** "Now that you have the system, let me train your team on it" — $497 session.

**Reactivation (Lapsed Leads):**
- Tag in CRM: "assessment_complete_no_call"
- 30-day follow-up email: "Still leaking? I'm here when you're ready."
- 90-day: "Your free checklist is still valid. So is my offer to walk through it."
- 180-day: "Just wrapped a build for [anonymous beta client]. They recovered [X] hours. Your beta spot is closed now, but the audit is $497."

**Price Increase Strategy:**
- Beta → Standard: Jump from $497 to $1,494 (3x increase, justified by case studies)
- Standard → Future: After 5-10 case studies, raise audit to $697, implementation to $1,297

---

### 9. Orchestrate Referrals

**Referral Program (Beta Phase):**

| Participant | Incentive |
|-------------|-----------|
| Beta client refers another trade business | $150 cash or free quarterly optimization check ($497 value) |
| Beta client refers someone who buys standard | $250 cash |
| Trade association / BNI chapter member | 15% of any closed deal they refer |

**The Ask (Timing):**
> "Hey [name], you mentioned last week that you got your 10 hours back. Would you be open to making an introduction to [specific shop name]? I'd love to do for them what I did for you."

**The Script (Provide to Every Client):**
> "Hey [referral name], I've been working with [client name] at [shop name]. They had the same problem you've been mentioning — [specific pain]. We mapped their workflow, found [X] in leaks, and built the fix in 7 days. [Client name] said I should reach out. Happy to show you what we found — no obligation. You free for a 15-minute call?"

**Partnership Targets (Phase 2):**
- **Equipment suppliers** (Johnstone Supply, Ferguson) — refer trade shops to Clockout for ops efficiency → supplier benefits when shops are less chaotic and order more consistently
- **Trade associations** (PHCC, IREA) — sponsor a webinar: "The 5 Revenue Leaks Draining Your Trade Business"
- **Accountants who serve trade businesses** — they see the cash flow problems firsthand; equip them with a referral card
- **Commercial real estate** — property managers who oversee 50+ units need vendor management systems; Clockout can serve both the PM and their trade vendors

**Tracking:**
- Unique referral link per client (track in CRM)
- Tag: "referred_by_[client name]"
- Referral source field on assessment form (dropdown: "referred by a friend" + text field)

**Copy pattern for referral ask:**
> "Know another trade owner in Northern Illinois who's busy but doesn't know where their money is going? Send them this link: [unique URL]. If they book, you get [incentive]. Win-win."

---

## Appendix: Quick Diagnostic

| Question | Answer | Status |
|----------|--------|--------|
| Can you describe your ideal customer in one specific paragraph? | Yes — 3-15 person trade business, $500K-$3M, Northern Illinois | ✅ |
| Can you complete: "We are the only _____ that _____"? | "The only operational system built from Uber/Walgreens ops methodology, delivered in 7 days flat, owned outright with zero retainers" | ✅ |
| Do you know your CAC per channel? | Phase 1 = direct outreach at $0 CAC; Phase 2 TBD | ⚠️ (Phase 1) |
| Do you have a lead magnet that converts at 20%+? | Checklist + Assessment page — need to measure launch conversion | ⚠️ (Untested) |
| Do you have an automated email sequence of 5+ emails? | Yes — 6-email sequence in Kit | ✅ |
| Do you proactively ask for referrals with a script and system? | Script exists, program designed; need first client to activate | ⚠️ (Pre-revenue) |

**Current Score:** 5/10 — all 9 squares addressed with specificity, but squares 7-9 are unvalidated (pre-revenue) and squares 4-5 (lead capture + nurture) are designed but untested. Targeting 8/10 after first beta case study closes.

---

*Next phase: `/docs/site-architecture-plan.md` — restructuring site IA around the new positioning.*

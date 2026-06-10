---
name: cro
description: "When the user wants to optimize, improve, or increase conversions on any marketing page or form — including homepage, landing pages, pricing pages, feature pages, lead capture forms, or contact forms. Also use when the user says 'cro,' 'conversion rate optimization,' 'audit my website,' 'this page isn't converting,' 'improve conversions,' 'why isn't this page working,' 'my landing page sucks,' 'form abandonment,' 'nobody's converting,' 'low conversion rate,' 'increase bookings,' 'boost conversions,' or 'this page needs work.' Use this even if the user just shares a URL and asks for feedback. For signup/registration flows, see signup. For post-signup activation, see onboarding. For popups/modals, see popups."
metadata:
  version: 2.1.0
  last_updated: 2026-06-10
---

# Conversion Rate Optimization (CRO)

You are a conversion rate optimization expert. Your goal is to analyze marketing pages and provide actionable recommendations to improve conversion rates.

## Initial Assessment

**Always read existing files first:**
1. Check for `.agents/product-marketing.md` (or `.claude/product-marketing.md` in older setups) — read before asking questions
2. Read the actual page code/content — don't assume based on page type
3. Look for related files: design system, component library, analytics data

Before providing recommendations, identify:

1. **Page Type**: Homepage, landing page, pricing, feature, blog, about, contact, other
2. **Primary Conversion Goal**: Sign up, request demo, purchase, subscribe, download, contact sales, book appointment
3. **Traffic Context**: Where are visitors coming from? (organic, paid, email, social, referral)
4. **Tech Stack**: What framework/tools are they using? (helps tailor implementation guidance)
5. **Industry Context**: What business type? (B2B SaaS, service business, e-commerce, etc.)

---

## CRO Audit Methodology

When conducting a full website audit:

1. **Read the actual code/content** — don't guess based on page type
2. **Identify critical blockers** — broken forms, missing CTAs, non-functional features
3. **Score each dimension** — provide numerical grades (0-100) for accountability
4. **Prioritize by impact × effort** — quick wins vs. high-impact changes
5. **Provide specific fixes** — code snippets, copy alternatives, design suggestions
6. **Consider the tech stack** — tailor recommendations to their framework (React, Next.js, etc.)

## CRO Analysis Framework

Analyze the page across these dimensions, in order of impact:

### 1. Value Proposition Clarity (Highest Impact)

**Check for:**
- Can a visitor understand what this is and why they should care within 5 seconds?
- Is the primary benefit clear, specific, and differentiated?
- Is it written in the customer's language (not company jargon)?

**Common issues:**
- Feature-focused instead of benefit-focused
- Too vague or too clever (sacrificing clarity)
- Trying to say everything instead of the most important thing

### 2. Headline Effectiveness

**Evaluate:**
- Does it communicate the core value proposition?
- Is it specific enough to be meaningful?
- Does it match the traffic source's messaging?

**Strong headline patterns:**
- Outcome-focused: "Get [desired outcome] without [pain point]"
- Specificity: Include numbers, timeframes, or concrete details
- Social proof: "Join 10,000+ teams who..."

### 3. CTA Placement, Copy, and Hierarchy

**Primary CTA assessment:**
- Is there one clear primary action?
- Is it visible without scrolling?
- Does the button copy communicate value, not just action?
  - Weak: "Submit," "Sign Up," "Learn More"
  - Strong: "Start Free Trial," "Get My Report," "See Pricing"

**CTA hierarchy:**
- Is there a logical primary vs. secondary CTA structure?
- Are CTAs repeated at key decision points?

### 4. Visual Hierarchy and Scannability

**Check:**
- Can someone scanning get the main message?
- Are the most important elements visually prominent?
- Is there enough white space?
- Do images support or distract from the message?

### 5. Trust Signals and Social Proof

**Types to look for:**
- Customer logos (especially recognizable ones)
- Testimonials (specific, attributed, with photos)
- Case study snippets with real numbers
- Review scores and counts
- Security badges (where relevant)

**Placement:** Near CTAs and after benefit claims

### 6. Objection Handling

**Common objections to address:**
- Price/value concerns
- "Will this work for my situation?"
- Implementation difficulty
- "What if it doesn't work?"

**Address through:** FAQ sections, guarantees, comparison content, process transparency

### 7. Friction Points

**Look for:**
- Too many form fields
- Unclear next steps
- Confusing navigation
- Required information that shouldn't be required
- Mobile experience issues
- Long load times
- Non-functional features (broken forms, dead links)
- Missing loading states
- Poor error handling
- Lack of immediate feedback

### 8. Urgency and Scarcity (Use Ethically)

**Genuine urgency signals:**
- Limited availability (if true)
- Time-bound offers (with end date)
- Seasonal relevance
- Event-based deadlines

**Red flags (avoid):**
- Fake countdown timers
- False scarcity
- Misleading "limited spots" claims

### 9. Micro-Interactions and Perceived Performance

**Modern expectations:**
- Button states (hover, active, disabled)
- Loading indicators
- Success confirmations
- Inline validation feedback
- Skeleton screens while loading
- Smooth transitions (200-300ms)

**Impact:** Poor interaction design can reduce trust and perceived quality

---

## Output Format

### For Quick Audits (User shares URL or page):
Structure your recommendations as:

**Quick Wins (Implement Now)**
Easy changes with likely immediate impact.

**High-Impact Changes (Prioritize)**
Bigger changes that require more effort but will significantly improve conversions.

**Test Ideas**
Hypotheses worth A/B testing rather than assuming.

**Copy Alternatives**
For key elements (headlines, CTAs), provide 2-3 alternatives with rationale.

---

### For Comprehensive Audits (Full website review):
Create a detailed markdown document with:

**1. Executive Summary**
- Overall grade (0-100)
- Top 3 critical issues
- Quick wins (1 hour or less)
- Estimated conversion impact

**2. Detailed Scorecard**
Rate each dimension with scores and justifications:
- Value Proposition: X/100
- Visual Hierarchy: X/100
- CTA Effectiveness: X/100
- Social Proof: X/100
- Form Optimization: X/100
- Mobile Experience: X/100
- Trust Signals: X/100
- Page Speed: X/100

**3. Page-by-Page Analysis**
For each key page (homepage, pricing, contact, etc.):
- Current state assessment
- Specific issues with screenshots/code references
- Recommended fixes with code examples
- Copy alternatives
- Design mockups (describe if you can't show)

**4. Prioritized Action Plan**
- 🔥 Critical (Week 1): Blockers and broken features
- 🚀 High Impact (Week 2): Major conversion opportunities
- 💎 Polish (Week 3-4): Optimization and refinement
- 🔧 Technical Debt: Ongoing maintenance items

**5. Before/After Examples**
Show current vs. recommended for:
- Headlines
- CTAs
- Forms
- Key sections

**6. Technical Implementation Notes**
- Code snippets for developers
- Dependencies needed
- Integration guidance
- Testing recommendations

---

## Page-Specific Frameworks

### Homepage CRO
- Clear positioning for cold visitors
- Quick path to most common conversion
- Handle both "ready to buy" and "still researching"

### Landing Page CRO
- Message match with traffic source
- Single CTA (remove navigation if possible)
- Complete argument on one page

### Pricing Page CRO
- Clear plan comparison
- Recommended plan indication
- Address "which plan is right for me?" anxiety

### Feature Page CRO
- Connect feature to benefit
- Use cases and examples
- Clear path to try/buy

### Blog Post CRO
- Contextual CTAs matching content topic
- Inline CTAs at natural stopping points
- Lead magnets related to article content
- Exit intent for content upgrades

### Contact/Demo Request CRO
- Form friction analysis (field count, validation)
- Alternative contact methods (phone, chat, calendar)
- Trust signals near form
- Clear value proposition above form
- Response time expectations

### Assessment/Quiz CRO
- Interactive elements increase engagement
- Progressive disclosure (one question at a time)
- Results as lead magnet
- Personalized recommendations based on answers

---

## Experiment Ideas

When recommending experiments, consider tests for:
- Hero section (headline, visual, CTA)
- Trust signals and social proof placement
- Pricing presentation
- Form optimization
- Navigation and UX

**For comprehensive experiment ideas by page type**: See [references/experiments.md](references/experiments.md)

---

## Common CRO Mistakes to Avoid

1. **Optimizing the wrong metric** — conversions that don't drive business value
2. **Assuming intent** — test high-impact changes, don't guess
3. **Copying competitors** — what works for them may not work for you
4. **Ignoring qualitative data** — numbers + user feedback = insights
5. **Too many CTAs** — decision paralysis kills conversions
6. **Optimizing for mobile as afterthought** — 50%+ of traffic is mobile
7. **Not fixing broken features first** — can't optimize what doesn't work
8. **Vague value propositions** — "best" and "easy" mean nothing
9. **Hiding pricing** — transparency builds trust for many products
10. **Neglecting page speed** — 100ms delay = 1% conversion drop

## Task-Specific Questions

**For quick audits:**
1. What's the primary conversion goal?
2. What's your current conversion rate?
3. Where is traffic coming from?

**For comprehensive audits:**
1. What's your current conversion rate and goal?
2. Where is traffic coming from (organic, paid, email, social)?
3. What does your signup/purchase flow look like after this page?
4. Do you have user research, heatmaps, or session recordings?
5. What have you already tried?
6. What's your tech stack? (helps provide implementation guidance)
7. What's your timeline for implementing changes?
8. Do you have development resources or need no-code solutions?

---

## Related Skills

- **signup**: If the issue is in the signup process itself
- **popups**: If considering popups as part of the strategy
- **copywriting**: If the page needs a complete copy rewrite
- **ab-testing**: To properly test recommended changes
- **make-interfaces-feel-better**: For micro-interactions, animations, loading states

---

## Reference Library

### Form Optimization
For detailed form CRO guidance — including field optimization, multi-step forms, error handling, and form-specific experiments — see [references/form.md](references/form.md).

### High-Converting Patterns
For proven CRO patterns across hero sections, CTAs, pricing pages, trust signals, and more — see [references/patterns.md](references/patterns.md).

### Industry Benchmarks & Tactics
For industry-specific conversion rates, funnels, and best practices (B2B SaaS, service businesses, e-commerce, etc.) — see [references/industry-benchmarks.md](references/industry-benchmarks.md).

### Experiment Library
For comprehensive A/B test ideas organized by page type — see [references/experiments.md](references/experiments.md).

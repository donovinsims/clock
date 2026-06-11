import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow, H2, Lede } from "@/components/site/Section";
import { Card } from "@/components/site/Card";
import { CTAButton } from "@/components/site/CTAButton";
import { GuaranteeBadge } from "@/components/site/GuaranteeBadge";
import { fullUrl } from "@/lib/seo";
import { OFFER } from "@/lib/site";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Clockout" },
      {
        name: "description",
        content:
          "One-time pricing, no monthly fees. Revenue Leak Audit: $497. Done-for-you builds from $997. You own the system outright.",
      },
      { property: "og:title", content: "Pricing — Clockout" },
      {
        property: "og:description",
        content: "Flat price, one-time build. Audit: $497. Builds from $997. You own the system.",
      },
      { property: "og:url", content: fullUrl("/pricing") },
    ],
    links: [{ rel: "canonical", href: fullUrl("/pricing") }],
  }),
  component: PricingPage,
});

const PLANS = [
  {
    name: "Revenue Leak Audit",
    price: "$497",
    badge: "Beta — 3 spots",
    tagline: "Full audit + full build. Beta pricing. Limited to 3 trade businesses.",
    features: [
      "Full lead-to-cash workflow mapping",
      "$10K+ leak guarantee — or it's free",
      "48-hour written report with dollar figures",
      "Custom automation build for top 3 leaks",
      "Installed in your existing stack",
      "Full handover. Docs. Training.",
    ],
    cta: "Claim a Beta Spot",
    to: "/assessment",
    featured: true,
  },
  {
    name: "Standard Build",
    price: "$1,494",
    badge: "Normal price",
    tagline: "Same audit + same build. Standard pricing after beta fills.",
    features: [
      "Full lead-to-cash workflow mapping",
      "$10K+ leak guarantee — or it's free",
      "48-hour written report with dollar figures",
      "Custom automation build for top 3 leaks",
      "Installed in your existing stack",
      "Full handover. Docs. Training.",
    ],
    cta: "Claim a Beta Spot",
    to: "/assessment",
  },
];

const FAQS = [
  { q: "What's the difference between Beta and Standard?", a: "Same audit. Same build. Same guarantee. Beta is $497 all-in for the first 3 trade businesses. After they're filled, standard pricing is $1,494. The only difference is the price." },
  { q: "How is this one-time? No monthly fees?", a: "Correct. We build the system in your tools. You get all the logins, all the docs. There's nothing to subscribe to. If you need ongoing support, we can scope that separately, but there's no forced commitment." },
  { q: "What if the audit doesn't find enough leaks?", a: "If we don't surface at least $10K in fixable revenue leaks, the audit is free. No questions." },
  { q: "Do you work with my existing tools?", a: "We integrate with your current CRM, dispatch software, phone system, and anything else you're running. No forced migrations." },
];

function PricingPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 pt-14 pb-16 md:pt-24 md:pb-24">
          <GuaranteeBadge description="$497 all-in · You own the system">
            One-Time Price
          </GuaranteeBadge>
          <h1 className="mt-6 font-display text-5xl md:text-7xl tracking-tight">
            You pay once.
            <br />
            <span className="text-signal">You own it forever.</span>
          </h1>
          <Lede>
            Beta pricing is <strong className="text-foreground">$497 all-in</strong> for
            the first 3 trade businesses. After that, standard is $1,494. Same audit, same
            build, same guarantee. Most shops charge $2K–$5K/month in ongoing fees. We charge a
            flat price, build the whole system, hand you the keys. Done.
          </Lede>
        </div>
      </section>

      {/* Quick comparison table */}
      <Section tone="muted">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 opacity-60">
            <div className="op-label">Typical agency</div>
            <div className="mt-4 space-y-2 text-sm">
              <p>✗ $2,000–$5,000/month ongoing</p>
              <p>✗ 12-month contract</p>
              <p>✗ You don't own the system</p>
              <p>✗ Pay to make changes</p>
              <p>✗ Pay to cancel</p>
            </div>
          </div>
          <div className="rounded-2xl border border-signal/30 bg-card p-6">
            <div className="op-label text-signal">Clockout</div>
            <div className="mt-4 space-y-2 text-sm font-medium">
              <p>✓ One-time price. Done.</p>
              <p>✓ No contract. No commitment.</p>
              <p>✓ You own the system. All the logins.</p>
              <p>✓ Full handover and training included</p>
              <p>✓ Walk away anytime. No penalty.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <Eyebrow>Pick your path</Eyebrow>
        <H2>Three ways to stop leaking revenue.</H2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PLANS.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col p-8 ${plan.featured ? "border-signal/40 shadow-lg" : ""}`}
            >
              {plan.badge && (
                <div className="op-label mb-2 text-signal">{plan.badge}</div>
              )}
              <h3 className="card-title text-3xl">{plan.name}</h3>
              <div className="mt-2 font-display text-4xl tracking-tight">{plan.price}</div>
              <p className="mt-2 text-sm text-muted-foreground">{plan.tagline}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm text-foreground flex items-start gap-2">
                    <span className="mt-0.5 text-signal">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CTAButton to={plan.to as "/assessment" | "/operator-os"}>
                  {plan.cta}
                </CTAButton>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <Eyebrow>FAQ</Eyebrow>
        <H2>Still wondering? Good. Here's the truth.</H2>
        <div className="mt-12 max-w-2xl space-y-8">
          {FAQS.map((faq) => (
            <div key={faq.q}>
              <h3 className="text-lg font-semibold">{faq.q}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}

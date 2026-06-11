import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow, H2, Lede } from "@/components/site/Section";
import { Card } from "@/components/site/Card";
import { AuditCard } from "@/components/site/AuditCard";
import { CTAButton } from "@/components/site/CTAButton";
import { fullUrl } from "@/lib/seo";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Clockout" },
      {
        name: "description",
        content:
          "30+ automations — lead capture, dispatch, follow-ups, reporting. One-time build, you own it.",
      },
      { property: "og:title", content: "Solutions — Clockout" },
      { property: "og:description", content: "30+ automations, one-time build. Built for local service businesses, not SaaS templates." },
      { property: "og:url", content: fullUrl("/solutions") },
    ],
    links: [{ rel: "canonical", href: fullUrl("/solutions") }],
  }),
  component: Solutions,
});

const GROUPS = [
  {
    name: "Front desk & calls",
    items: [
      "24/7 AI receptionist",
      "Missed-call rescue (30-second SMS)",
      "After-hours triage + on-call dispatch",
      "Voicemail-to-text + auto-routing",
      "Spam + tire-kicker filtering",
    ],
  },
  {
    name: "Lead capture & qualification",
    items: [
      "60-second AI lead response",
      "Multi-source lead aggregation",
      "Auto-qualification + scoring",
      "Booking links with smart calendar logic",
      "Webform-to-CRM with full enrichment",
    ],
  },
  {
    name: "Follow-up & reactivation",
    items: [
      "Quote-to-job recovery sequences",
      "Dormant customer reactivation",
      "Seasonal renewal flows",
      "Long-cycle nurture (90/180/365 days)",
      "Win-back offers triggered on churn",
    ],
  },
  {
    name: "Operations & dispatch",
    items: [
      "Live tech dispatch dashboards",
      "Route + density optimization",
      "Maintenance triage AI",
      "Vendor SLA monitoring",
      "Permit + inspection tracking",
    ],
  },
  {
    name: "Reviews & reputation",
    items: [
      "Friction-free review pipelines",
      "5-star vs. private routing",
      "Reply automation in your voice",
      "Multi-platform review monitoring",
    ],
  },
  {
    name: "Reporting & decisions",
    items: [
      "Monthly owner / portfolio reports",
      "Per-tech, per-route revenue dashboards",
      "Lead source attribution",
      "Weekly KPI digests in your inbox",
    ],
  },
];

function Solutions() {
  return (
    <SiteLayout>
      <Section>
        <Eyebrow>Solutions</Eyebrow>
        <H2>
          Run by a sticky note?
          <br />
          We&apos;ve built it.
        </H2>
        <Lede>
          Phones, dispatch, sales, ops, reporting. 30+ automations, architected from real
          operations experience at massive scale. One-time build. You own it.
        </Lede>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {GROUPS.map((g) => (
            <div key={g.name} className="rounded-2xl border border-border bg-card p-8">
              <div className="eyebrow">{g.name}</div>
              <ul className="mt-6 space-y-2">
                {g.items.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      <Section tone="highlight">
        <div className="mx-auto max-w-2xl">
          <Card className="p-10 md:p-12 text-center">
            <div className="eyebrow">Free Resource</div>
            <H2>Operational Leak Audit Checklist</H2>
            <p className="mt-4 text-lg text-muted-foreground">
              The 5 most common revenue leaks in local service businesses.
              One page. No email required.
            </p>
            <div className="mt-8">
              <CTAButton to="/assessment">Download the checklist</CTAButton>
            </div>
          </Card>
        </div>
      </Section>
      <Section>
        <AuditCard variant="dark" />
      </Section>
    </SiteLayout>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow, H2, Lede } from "@/components/site/Section";
import { Card } from "@/components/site/Card";
import { AuditCard } from "@/components/site/AuditCard";
import { VERTICALS } from "@/lib/site";
import { fullUrl } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Clockout" },
      {
        name: "description",
        content:
          "Industry-specific automation builds for HVAC, roofing, plumbing, electrical, landscaping, cleaning, property management, and real estate. One-time builds, you own the system.",
      },
      { property: "og:title", content: "Services — Clockout" },
      {
        property: "og:description",
        content: "Industry-specific automation builds for owner-led service businesses.",
      },
      { property: "og:url", content: fullUrl("/services") },
    ],
    links: [{ rel: "canonical", href: fullUrl("/services") }],
  }),
  component: ServicesHub,
});

const CAPABILITIES = [
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

function ServicesHub() {
  return (
    <SiteLayout>
      <Section>
        <Eyebrow>Services</Eyebrow>
        <H2>
          Built for your industry.
          <br />
          Not a SaaS template.
        </H2>
        <Lede>
          Every vertical has its own leaks. The big guys solved these years ago. Now you can too.
        </Lede>
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {VERTICALS.map((v) => (
            <Link
              key={v.slug}
              to="/services/$slug"
              params={{ slug: v.slug }}
              className="flex flex-col justify-between"
            >
              <Card className="flex flex-col justify-between p-6 transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg hover:border-signal/40">
                <div>
                  <div className="eyebrow">{v.name}</div>
                  <h3 className="card-title mt-4 text-2xl md:text-3xl">{v.short}</h3>
                  <p className="mt-4 text-sm text-muted-foreground">{v.blurb}</p>
                </div>
                <div className="mt-8 text-sm font-medium text-ink/70 group-hover:text-signal">
                  See the {v.name} build →
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <Eyebrow>What we build</Eyebrow>
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
          {CAPABILITIES.map((g) => (
            <div key={g.name} className="rounded-3xl border border-border bg-card p-8">
              <div className="eyebrow">{g.name}</div>
              <ul className="mt-6 space-y-2">
                {g.items.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-base">
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
        <AuditCard />
      </Section>
    </SiteLayout>
  );
}

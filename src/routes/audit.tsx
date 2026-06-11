import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow, H2, Lede } from "@/components/site/Section";
import { CTAButton } from "@/components/site/CTAButton";
import { Steps } from "@/components/site/Steps";
import { AuditCard } from "@/components/site/AuditCard";
import { fullUrl } from "@/lib/seo";
import { OFFER } from "@/lib/site";

export const Route = createFileRoute("/audit")({
  head: () => ({
    meta: [
      { title: "Revenue Leak Audit — Clockout" },
      {
        name: "description",
        content:
          `${OFFER.audit.price} for a full revenue leak audit + implementation build. 48-hour written report. 30-day outcome guarantee.`,
      },
      { property: "og:title", content: "Revenue Leak Audit — Clockout" },
      {
        property: "og:description",
        content: `${OFFER.audit.price}. Full audit + build. 48-hour report. You own the system.`,
      },
      { property: "og:url", content: fullUrl("/audit") },
    ],
    links: [{ rel: "canonical", href: fullUrl("/audit") }],
  }),
  component: AuditPage,
});

function AuditPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 pt-14 pb-16 md:pt-24 md:pb-24">
          <h1 className="mt-6 font-display text-5xl md:text-7xl tracking-tight">
            You're leaking revenue <br />
            <span className="text-signal">right now. We'll name it.</span>
          </h1>
          <Lede>
            Missed calls. Late follow-ups. Quotes that go dark. We trace one real job
            through your business — phone tree to CRM to dispatch to invoice — and
            calculate exactly how much you're leaving on the table.{" "}
            <strong>Written report in 48 hours.</strong> If we don't find at least{" "}
            <strong>$10K in fixable leaks</strong>, it's free.
          </Lede>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CTAButton to="/assessment">
              <span className="op-label">{OFFER.audit.cta}</span>
            </CTAButton>
            <CTAButton to="/services" variant="ghost">
              See what we build
            </CTAButton>
          </div>
        </div>
      </section>

      <Section tone="muted">
        <Eyebrow>Where the money goes</Eyebrow>
        <H2>Most trade businesses leak 15-30% of revenue. Here's where.</H2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              metric: "Missed & mishandled calls",
              impact: "$20K–$60K/yr",
              detail: "Every ring that goes to voicemail is a job that calls your competitor next. We measure how many you're losing.",
            },
            {
              metric: "Slow quoting & follow-up",
              impact: "$15K–$45K/yr",
              detail: "A quote sent in 5 minutes closes 4x more often than one sent in 24 hours. We track every delay.",
            },
            {
              metric: "Leads that go dark",
              impact: "$10K–$30K/yr",
              detail: "No follow-up = dead lead. We count them. Then we fix the system that lost them.",
            },
          ].map((leak) => (
            <div key={leak.metric} className="rounded-2xl border border-border bg-card p-6">
              <div className="text-2xl font-display text-signal">{leak.impact}</div>
              <h3 className="mt-2 card-title">{leak.metric}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{leak.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Eyebrow>How the audit works</Eyebrow>
        <H2>Three days. Full transparency. Zero risk.</H2>
        <div className="mt-12">
          <Steps
            steps={[
              {
                title: "Day 1 — Map the workflow",
                body: "We review your current tools (CRM, dispatch, phone system) and map the full lead-to-cash workflow. We identify every handoff, every delay, every silent failure.",
              },
              {
                title: "Day 2 — Quantify the leaks",
                body: "We measure missed calls, abandoned quotes, response times, and churn points. Each leak gets a dollar figure. No fluff, just the math.",
              },
              {
                title: "Day 3 — Deliver the roadmap",
                body: "You get a written report with every leak ranked by revenue impact, the recommended fix for each, and the build cost. You decide what to do. No pressure, no sales pitch.",
              },
            ]}
          />
        </div>
      </Section>

      <Section tone="highlight">
        <AuditCard variant="dark" />
      </Section>
    </SiteLayout>
  );
}

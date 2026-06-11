import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTAButton } from "@/components/site/CTAButton";
import { Section, Eyebrow, H2, Lede } from "@/components/site/Section";
import { Card } from "@/components/site/Card";
import { AuditCard } from "@/components/site/AuditCard";
import { Steps } from "@/components/site/Steps";
import { BetaCounter } from "@/components/site/BetaCounter";
import { GuaranteeBadge } from "@/components/site/GuaranteeBadge";
import { Link } from "@tanstack/react-router";
import { fullUrl } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clockout — Find your revenue leaks." },
      {
        name: "description",
        content:
          "AI automation for local service businesses. Audit + implementation built on real operations experience at massive scale. Flat price, 7-day install, you own it outright.",
      },
      { property: "og:title", content: "Clockout — Find your revenue leaks." },
      {
        property: "og:description",
        content: "Your revenue leaks are predictable. So is the fix. I spent years building operational systems at massive scale. The same failures bleeding local service businesses are the ones I managed at 50,000-person live events — where a missed handoff costs real money in real time.",
      },
      { property: "og:url", content: fullUrl("/") },
    ],
    links: [{ rel: "canonical", href: fullUrl("/") }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 pt-14 pb-16 md:pt-24 md:pb-24">
          <GuaranteeBadge />
          <h1 className="mt-6 font-display text-5xl md:text-8xl tracking-tight">
            Your Revenue Leaks
            <br />
            <span className="text-signal">Are Predictable.</span>
            <br />
            <span className="italic">So Is the Fix.</span>
          </h1>
          <Lede>
            I spent years building operational systems for{" "}
            <strong className="text-signal">Uber</strong> and{" "}
            <strong className="text-signal">Walgreens</strong>.
            The same failures bleeding local service businesses right now
            are the ones I managed at 50,000-person live events — where a{" "}
            missed handoff costs real money in real time.
          </Lede>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <CTAButton to="/assessment">Reserve Beta Access – $497 (3 spots left)</CTAButton>
          </div>
        </div>
      </section>

      {/* Proof bar */}
      <section className="border-b border-border bg-secondary/50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-6 py-12 md:grid-cols-3">
          {[
            ["6+ YRS", "OPERATIONS EXPERIENCE"],
            ["48 HRS", "TO YOUR WRITTEN AUDIT REPORT"],
            ["$0", "RETAINERS. EVER."],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="card-title text-2xl md:text-3xl tabular-nums leading-none">{k}</div>
              <div className="mt-2 text-xs font-mono font-semibold tracking-widest text-clay">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust signals */}
      <section className="border-b border-border bg-card/50 py-8">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-lg font-medium">Trusted by local service businesses across the Midwest</p>
          <div className="mt-6 flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            <div className="h-10 w-28 rounded-lg bg-secondary/70 flex items-center justify-center">
              <span className="text-xs font-mono tracking-wider text-muted-foreground">MIDWEST HVAC</span>
            </div>
            <div className="h-10 w-28 rounded-lg bg-secondary/70 flex items-center justify-center">
              <span className="text-xs font-mono tracking-wider text-muted-foreground">PRAIRIE PLUMBING</span>
            </div>
            <div className="h-10 w-28 rounded-lg bg-secondary/70 flex items-center justify-center">
              <span className="text-xs font-mono tracking-wider text-muted-foreground">NORTH SHORE ELEC</span>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <H2>Which one sounds like you?</H2>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <SelfSelectCard
            to="/services"
            tag="TRADES & LOCAL SERVICE"
            title="My techs are great. My back office is on fire."
            body="Missed calls. Forgotten quotes. Reviews you never asked for. We plug the leaks and dispatch like you hired three more people."
          />
          <SelfSelectCard
            to="/services/property-management"
            tag="PROPERTY & REAL ESTATE"
            title="Too many doors. Too many DMs."
            body="Maintenance triage, owner reporting, and lead follow-up that finally keeps pace with your portfolio."
          />
          <SelfSelectCard
            to="/operator-os"
            tag="INDIVIDUAL OPERATORS"
            title="I am the bottleneck. Help."
            body="An operational AI layer that captures your context, drafts your follow-ups, and briefs you before every call. Built for founders, agents, and sales pros."
          />
        </div>
      </Section>

      {/* How it works */}
      <Section tone="muted">
        <Eyebrow>How it works</Eyebrow>
        <H2>Three steps. Flat and done.</H2>
        <div className="mt-12">
          <Steps
            steps={[
              {
                title: "Audit — reserve your beta spot",
                body: "Tell us about your business. We map your workflow, find the leaks, and quantify them in dollars. 48-hour written report.",
              },
              {
                title: "We build it",
                body: "We design and ship the automations — calls, quotes, follow-ups, reporting — installed directly in your stack.",
              },
              {
                title: "You own it",
                body: "Full handover. Docs, access, training. No subscription, no lock-in. The system is yours.",
              },
            ]}
          />
        </div>
      </Section>

      {/* Audit offer */}
      <Section>
        <AuditCard variant="dark" />
      </Section>
    </SiteLayout>
  );
}

function SelfSelectCard({
  to,
  tag,
  title,
  body,
}: {
  to: string;
  tag: string;
  title: string;
  body: string;
}) {
  return (
    <Link
      to={to as "/services"}
      className="group flex flex-col justify-between"
    >
      <Card className="flex flex-col justify-between p-6 transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg">
        <div>
          <div className="op-label text-clay">{tag}</div>
          <h3 className="card-title mt-4 text-2xl md:text-3xl">{title}</h3>
          <p className="mt-4 text-base text-muted-foreground">{body}</p>
        </div>
        <div className="op-label mt-8 text-ink/70 group-hover:text-signal">
          Explore →
        </div>
      </Card>
    </Link>
  );
}

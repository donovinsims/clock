import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTAButton } from "@/components/site/CTAButton";
import { Section, Eyebrow, H2, Lede } from "@/components/site/Section";
import { AuditCard } from "@/components/site/AuditCard";
import { Steps } from "@/components/site/Steps";
import { GuaranteeBadge } from "@/components/site/GuaranteeBadge";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clockout — Find your revenue leaks." },
      {
        name: "description",
        content:
          "AI automation for local service businesses. Audit + implementation built on operational systems experience from Uber and Walgreens. Flat price, 7-day install, you own it outright. 3 beta spots open.",
      },
      { property: "og:title", content: "Clockout — Find your revenue leaks." },
      {
        property: "og:description",
        content: "Your revenue leaks are predictable. So is the fix. I spent years building operational systems for Uber and Walgreens. The same failures bleeding local service businesses are the ones I stress-tested at 100x scale.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-32 md:pb-32">
          <GuaranteeBadge />
          <h1 className="mt-6 font-display text-5xl md:text-8xl tracking-tight">
            Your Revenue Leaks
            <br />
            <span className="text-signal">Are Predictable.</span>
            <br />
            <span className="italic">So Is the Fix.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-2xl text-muted-foreground">
            I spent years building operational systems for{" "}
            <strong className="text-signal">Uber</strong> and{" "}
            <strong className="text-signal">Walgreens</strong>.
            <br />
            The same failures bleeding local service businesses are
            <br />
            the ones I stress-tested at 100x the scale.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTAButton to="/assessment">
              <span className="op-label text-[0.7rem]">Claim a Beta Spot</span>
            </CTAButton>
            <CTAButton to="/services" variant="ghost">
              Explore services
            </CTAButton>
          </div>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-xs text-clay">
            <span>✓ $497 all-in · audit + full build</span>
            <span>✓ 3 beta spots available</span>
            <span>✓ 10 hrs/week back in 30 days or free</span>
          </div>
        </div>
      </section>

      {/* Proof bar */}
      <section className="border-b border-border bg-secondary/50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-6 py-12 md:grid-cols-4">
          {[
            ["6+ YRS", "UBER · WALGREENS OPS"],
            ["48 HRS", "TO YOUR WRITTEN AUDIT REPORT"],
            ["3 SPOTS", "BETA PRICING AVAILABLE NOW"],
            ["$0", "RETAINERS. EVER."],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="card-title text-3xl md:text-4xl tabular-nums">{k}</div>
              <div className="op-label mt-2 text-[0.65rem] text-clay">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Self-select */}
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
      <Section className="bg-secondary/40">
        <Eyebrow>How it works</Eyebrow>
        <H2>Three steps. No retainer.</H2>
        <div className="mt-12">
          <Steps
            steps={[
              {
                title: "Audit — claim your beta spot",
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
      className="group flex flex-col justify-between rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-2xl"
    >
      <div>
        <div className="op-label text-[0.7rem] text-clay">
          {tag}
        </div>
        <h3 className="card-title mt-4 text-2xl md:text-3xl">{title}</h3>
        <p className="mt-4 text-sm text-muted-foreground">{body}</p>
      </div>
      <div className="op-label mt-8 text-[0.7rem] text-ink/70 group-hover:text-signal">
        Explore →
      </div>
    </Link>
  );
}

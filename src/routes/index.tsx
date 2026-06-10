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
      { title: "Clockout — Run better, not busier." },
      { name: "description", content: "Done-for-you AI automation for owner-led service businesses. One $497 audit. 48-hour report. You own the system." },
      { property: "og:title", content: "Clockout — Run better, not busier." },
      { property: "og:description", content: "Done-for-you AI automation for owner-led service businesses." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-32 md:pb-32">
          <div className="op-label text-[0.7rem] text-clay">
            <span className="text-signal">●</span>&nbsp;&nbsp;Done-for-you · One-time pricing · You own it
          </div>
          <h1 className="mt-6 font-display text-6xl md:text-8xl tracking-tight">
            Run better,<br />
            <span className="italic text-signal">not busier.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-2xl text-muted-foreground">
            Clockout builds the AI systems that quietly run your business — so calls get answered, jobs get booked, and you stop doing the work software should be doing.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTAButton to="/assessment">
              <span className="op-label text-[0.7rem]">Book the $497 audit</span>
            </CTAButton>
            <CTAButton to="/services" variant="ghost">See how it works</CTAButton>
          </div>
          <div className="mt-8">
            <GuaranteeBadge />
          </div>
        </div>
      </section>

      {/* Proof bar */}
      <section className="border-b border-border bg-secondary/50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-6 py-12 md:grid-cols-4">
          {[
            ["$2.4M+", "REVENUE LEAKS IDENTIFIED"],
            ["48 HRS", "TO DELIVER YOUR AUDIT"],
            ["$0", "RETAINERS, EVER"],
            ["100%", "YOU OWN THE SYSTEM"],
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
        <Eyebrow>Pick your lane</Eyebrow>
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
            body="Operator OS is a personal AI system for founders, agents, and sales pros who want their life out of inboxes and notebooks."
            accent="imessage"
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
              { title: "Book the audit", body: "Tell us about your business. We map your workflow, find the leaks, and quantify them in dollars. 48-hour written report." },
              { title: "We build it", body: "We design and ship the automations — calls, quotes, follow-ups, reporting — installed directly in your stack." },
              { title: "You own it", body: "Full handover. Docs, access, training. No subscription, no lock-in. The system is yours." },
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
  accent,
}: {
  to: string;
  tag: string;
  title: string;
  body: string;
  accent?: "imessage";
}) {
  return (
      <Link
      to={to as "/services"}
      className="group flex flex-col justify-between rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-2xl"
    >
      <div>
        <div className={`op-label text-[0.7rem] ${accent === "imessage" ? "text-[oklch(0.55_0.22_258)]" : "text-clay"}`}>{tag}</div>
        <h3 className="card-title mt-4 text-2xl md:text-3xl">{title}</h3>
        <p className="mt-4 text-sm text-muted-foreground">{body}</p>
      </div>
      <div className="op-label mt-8 text-[0.7rem] text-ink/70 group-hover:text-signal">
        Explore →
      </div>
    </Link>
  );
}

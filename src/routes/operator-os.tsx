import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow, H2, Lede } from "@/components/site/Section";
import { CTAButton } from "@/components/site/CTAButton";
import { GuaranteeBadge } from "@/components/site/GuaranteeBadge";
import { fullUrl } from "@/lib/seo";

export const Route = createFileRoute("/operator-os")({
  head: () => ({
    meta: [
      { title: "Operator OS — Personal AI Operating System Methodology" },
      {
        name: "description",
        content:
          "A personal AI operating system methodology: capture everything, route in real time, surface what needs you. Built for founders and ops leaders who own every gap in their business.",
      },
      { property: "og:title", content: "Operator OS — Personal AI Operating System Methodology" },
      {
        property: "og:description",
        content:
          "A personal AI operating system methodology. Not a product. Not a subscription. A custom build that runs across your entire stack.",
      },
      { property: "og:url", content: fullUrl("/operator-os") },
    ],
    links: [{ rel: "canonical", href: fullUrl("/operator-os") }],
  }),
  component: OperatorOS,
});

function OperatorOS() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 pt-14 pb-16 md:pt-24 md:pb-24">
          <GuaranteeBadge description="10 hrs/wk back in 30 days or I keep working">
            Time-Back Guarantee
          </GuaranteeBadge>
          <h1 className="mt-6 font-display text-5xl md:text-7xl tracking-tight">
            A methodology,
            <br />
            <span className="text-signal">not a product.</span>
          </h1>
          <Lede>
            Operator OS is a personal AI operating system — a custom layer that captures every
            customer interaction across your stack, routes it in real time, and surfaces only
            what needs your attention. It's not a subscription. It's not a dashboard. It's a
            one-time build that lives inside the tools you already use.
          </Lede>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CTAButton to="/assessment">
              <span className="op-label">Claim a Beta Spot</span>
            </CTAButton>
            <CTAButton to="/audit" variant="ghost">
              Start with an audit
            </CTAButton>
          </div>
        </div>
      </section>

      {/* The problem */}
      <Section tone="muted">
        <Eyebrow>The problem</Eyebrow>
        <H2>You already work hard. Effort isn't the issue.</H2>
        <Lede>
          The issue is that effort doesn't compound. You close the deal and forget to follow up.
          You think of the improvement and it's gone by morning. You build the relationship and
          lose the thread three weeks later. Every gap between tools, between follow-ups, between
          decisions — that's time you can't get back.
        </Lede>
      </Section>

      {/* What it is — Methodology vs Product */}
      <Section>
        <Eyebrow>What it is</Eyebrow>
        <H2>Not another app. Not another login.</H2>
        <Lede>
          Most "AI for business" products want you to learn a new system. Operator OS is the
          opposite. We study your actual week — every tool you touch, every gap you bridge —
          and build a personal OS that works inside what you already have.
        </Lede>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="op-label text-signal">
                {f.tag}
              </div>
              <h3 className="mt-4 font-display text-2xl tracking-tight">{f.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section tone="muted">
        <Eyebrow>How it works</Eyebrow>
        <H2>Built for your stack. Deployed for your week.</H2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "01 — Map",
              b: "We shadow your actual operations. What's repeating, what's draining, what's slipping between tools.",
            },
            {
              t: "02 — Build",
              b: "We wire Operator OS into your existing stack — CRM, dispatch, phone system, email, calendar. Everything stays in place.",
            },
            {
              t: "03 — Ship",
              b: "You own it. It's tuned to your voice, your workflows, your business rules. No subscription. No vendor lock-in.",
            },
          ].map((s) => (
            <div key={s.t} className="rounded-2xl border border-border bg-card p-6">
              <div className="font-mono text-xs text-signal">{s.t}</div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{s.b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What makes it different */}
      <Section>
        <Eyebrow>Why it's different</Eyebrow>
        <H2>Most AI tools try to replace your brain. This one extends it.</H2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "No new system to learn",
              body: "Operator OS lives inside your existing tools — Gmail, your CRM, your dispatch software, the phone you already use. You don't add a dashboard to your day. You just stop dropping things.",
            },
            {
              title: "Custom to your business",
              body: "Every build starts with a week of observation. We learn your specific workflows, terminology, pricing rules, and follow-up cadences. The result fits, because it was built for you.",
            },
            {
              title: "One-time price. You own it.",
              body: "This isn't a SaaS subscription. We build Operator OS, deploy it in your environment, hand over full access, and train your team. There's nothing to pay next month unless you want changes.",
            },
            {
              title: "It works the way you already work",
              body: "Voice memo, text, email, CRM entry — whatever input channel you prefer. Operator OS captures it, routes it, and surfaces only what needs your decision. Everything else runs automated.",
            },
          ].map((d) => (
            <div key={d.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="card-title text-lg">{d.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section tone="highlight">
        <div className="text-center">
          <h2 className="font-display text-4xl md:text-5xl tracking-tight">
            Start with a conversation.
          </h2>
          <p className="mt-4 mx-auto max-w-lg text-muted-foreground">
            We'll map your current week, identify the gaps, and tell you exactly what an
            Operator OS build would look like for your business.
          </p>
          <div className="mt-8">
            <CTAButton to="/assessment"><span className="op-label">Claim a Beta Spot</span></CTAButton>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}

const FEATURES = [
  {
    tag: "01 — Capture",
    title: "Nothing slips. Ever.",
    body: "Every call, email, meeting note, and DM lands in one place automatically. You stop worrying about what you forgot.",
  },
  {
    tag: "02 — Follow-up",
    title: "The right reply, on time.",
    body: "Drafts replies in your voice based on everything you've discussed. Approve in one tap instead of starting from scratch.",
  },
  {
    tag: "03 — Decision support",
    title: "Context, before the meeting.",
    body: "Walks you into every call with the full thread — last conversation, sentiment, open items, what to ask next. You sound prepared without having to prepare.",
  },
  {
    tag: "04 — Channels",
    title: "You already use it. No new logins.",
    body: "Voice memos, text, email, your CRM — any channel you prefer. Operator OS captures from all of them. You interact the way you already interact. No dashboard to check. No new app to open.",
  },
];

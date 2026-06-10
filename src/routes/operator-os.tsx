import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTAButton } from "@/components/site/CTAButton";

export const Route = createFileRoute("/operator-os")({
  head: () => ({
    meta: [
      { title: "Operator OS — A personal AI operating system" },
      { name: "description", content: "Operator OS is a personal AI operating system for founders, sales reps, consultants, agents, and operators. Capture, follow-up, decisions, integrations — built once, owned forever." },
      { property: "og:title", content: "Operator OS — Clockout" },
      { property: "og:description", content: "A personal AI operating system for founders, sales reps, consultants, agents, and operators." },
    ],
  }),
  component: OperatorOS,
});

function OperatorOS() {
  return (
    <SiteLayout>
      <div className="theme-imessage">
        {/* Hero */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-32 md:pb-28">
            <div className="eyebrow text-[oklch(0.45_0.18_258)]">Operator OS</div>
            <h1 className="mt-6 font-display text-6xl md:text-8xl tracking-tight text-[oklch(0.16_0.02_258)]">
              Your second brain,<br />
              <span className="italic text-[oklch(0.55_0.22_258)]">finally on call.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg md:text-2xl text-muted-foreground">
              A personal AI operating system for founders, sales reps, consultants, agents, and operators. Capture everything. Follow up on time. Make calls with context. Built once. Owned forever.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <CTAButton href="#book" variant="imessage">Start a build</CTAButton>
              <CTAButton to="/assessment" variant="ghost">Take the assessment</CTAButton>
            </div>

            {/* iMessage demo */}
            <div className="mt-16 rounded-3xl border border-border bg-white p-6 md:p-8 shadow-2xl">
              <div className="space-y-3">
                <div className="flex justify-start"><span className="imessage-bubble gray text-sm">Hey — Daniel just emailed about the renewal.</span></div>
                <div className="flex justify-end"><span className="imessage-bubble text-sm">On it. Pull our last 3 calls + the pricing thread. Draft the reply.</span></div>
                <div className="flex justify-start"><span className="imessage-bubble gray text-sm">Drafted. He's flagged a budget concern twice. I led with the ROI memo and offered 15-min Wed.</span></div>
                <div className="flex justify-end"><span className="imessage-bubble text-sm">Send.</span></div>
              </div>
              <div className="mt-6 text-xs font-mono text-muted-foreground">— a real Tuesday morning with Operator OS</div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="eyebrow text-[oklch(0.45_0.18_258)]">The problem</div>
            <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-tight text-[oklch(0.16_0.02_258)]">
              You're the bottleneck. And you know it.
            </h2>
            <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
              Your follow-ups live in your head. Your context lives in 14 tabs. Your decisions wait until you have a quiet hour you'll never get. Operator OS pulls all of it into one place and works alongside you in real time.
            </p>
          </div>
        </section>

        {/* What it is */}
        <section className="border-b border-border bg-white/50">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="eyebrow text-[oklch(0.45_0.18_258)]">What it is</div>
            <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-tight text-[oklch(0.16_0.02_258)]">
              Not another app. An operating layer.
            </h2>
            <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
              Operator OS sits across your email, calendar, CRM, notes, and call transcripts. It captures, summarizes, drafts, and prompts you — so the next right action is always one tap away.
            </p>

            <div className="mt-16 grid gap-4 md:grid-cols-2">
              {FEATURES.map((f) => (
                <div key={f.title} className="rounded-2xl border border-border bg-white p-8">
                  <div className="font-mono text-xs text-[oklch(0.55_0.22_258)]">{f.tag}</div>
                  <h3 className="mt-3 font-display text-3xl text-[oklch(0.16_0.02_258)]">{f.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="eyebrow text-[oklch(0.45_0.18_258)]">How it works</div>
            <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-tight text-[oklch(0.16_0.02_258)]">
              Built for you. Around how you actually work.
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                { t: "01 — Map", b: "We shadow your actual week. What's repeating, what's draining, what's slipping." },
                { t: "02 — Build", b: "We wire Operator OS into your stack — Gmail, Calendar, CRM, notes, transcripts." },
                { t: "03 — Ship", b: "You own it. It's tuned to your voice, your style, your priorities. No subscription." },
              ].map((s) => (
                <div key={s.t} className="rounded-2xl border border-border bg-white p-6">
                  <div className="font-mono text-xs text-[oklch(0.55_0.22_258)]">{s.t}</div>
                  <p className="mt-4 text-lg text-[oklch(0.16_0.02_258)]">{s.b}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 flex flex-col items-start gap-4 rounded-3xl bg-gradient-to-br from-[oklch(0.70_0.18_252)] to-[oklch(0.50_0.22_260)] p-10 text-white md:flex-row md:items-center md:justify-between md:p-12">
              <div>
                <h3 className="font-display text-3xl md:text-5xl">Start with the assessment.</h3>
                <p className="mt-2 max-w-xl text-white/85">We'll show you what an Operator OS build would look like for your week.</p>
              </div>
              <CTAButton to="/assessment" variant="primary" className="!bg-white !text-[oklch(0.45_0.18_258)] hover:!bg-white/90">
                Book the audit
              </CTAButton>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}

const FEATURES = [
  {
    tag: "01 — Capture",
    title: "Nothing slips. Ever.",
    body: "Every call, email, meeting note, and DM is captured, summarized, and indexed. Searchable in seconds.",
  },
  {
    tag: "02 — Follow-up",
    title: "The right reply, on time.",
    body: "Drafted replies in your voice, surfaced when they need to go out. Approve, edit, send.",
  },
  {
    tag: "03 — Decision support",
    title: "Context, before the meeting.",
    body: "Walks into every call briefed: last conversation, sentiment, open threads, what to ask next.",
  },
  {
    tag: "04 — Integrations",
    title: "Lives in the tools you already use.",
    body: "Gmail, Calendar, HubSpot, Salesforce, Notion, Slack, your phone. No new app to learn.",
  },
];
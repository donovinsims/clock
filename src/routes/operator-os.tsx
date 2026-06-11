import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTAButton } from "@/components/site/CTAButton";

export const Route = createFileRoute("/operator-os")({
  head: () => ({
    meta: [
      { title: "Operator OS — Your Personal AI Operating System" },
      {
        name: "description",
        content:
          "A personal AI operating system for founders, sales reps, and professionals drowning in tasks they haven't delegated yet. Captures across your stack. Routes in real time. You own it outright.",
      },
      { property: "og:title", content: "Operator OS — Your Personal AI Operating System" },
      {
        property: "og:description",
        content:
          "A personal AI operating system for founders, sales reps, and professionals drowning in tasks they haven't delegated yet. Captures across your stack. Routes in real time. You own it outright.",
      },
      { property: "og:url", content: "/operator-os" },
    ],
    links: [{ rel: "canonical", href: "/operator-os" }],
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
            <div className="eyebrow text-[var(--imessage-accent)]">Operator OS</div>
            <h1 className="mt-6 font-display text-6xl md:text-8xl tracking-tight text-foreground">
              You Are the Bottleneck.
              <br />
              <span className="italic text-[var(--imessage-tag)]">This Is the Fix.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg md:text-2xl text-muted-foreground">
              A personal AI operating system for founders, sales reps, agents, and professionals
              who are drowning in tasks they haven't delegated to a machine yet. Captures
              everything, routes everything, surfaces what needs your attention — in the channel
              you already live in.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <CTAButton href="/assessment" variant="imessage">
                Claim a Beta Spot
              </CTAButton>
              <CTAButton to="/assessment" variant="ghost">
                Take the assessment
              </CTAButton>
            </div>

            {/* iMessage demo */}
            <div className="mt-16 rounded-3xl border border-border bg-white p-6 md:p-8 shadow-2xl">
              <div className="space-y-3">
                <div className="flex justify-start">
                  <span className="imessage-bubble gray text-sm">
                    Hey — Daniel just emailed about the renewal.
                  </span>
                </div>
                <div className="flex justify-end">
                  <span className="imessage-bubble text-sm">
                    On it. Pull our last 3 calls + the pricing thread. Draft the reply.
                  </span>
                </div>
                <div className="flex justify-start">
                  <span className="imessage-bubble gray text-sm">
                    Drafted. He's flagged a budget concern twice. I led with the ROI memo and
                    offered 15-min Wed.
                  </span>
                </div>
                <div className="flex justify-end">
                  <span className="imessage-bubble text-sm">Send.</span>
                </div>
              </div>
              <div className="mt-6 text-xs font-mono text-muted-foreground">
                iMessage is one channel. Voice, WhatsApp, Telegram, Slack — same OS. No login required.
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="eyebrow text-[var(--imessage-accent)]">The problem</div>
            <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-tight text-foreground">
              You already work hard. The problem isn't effort.
            </h2>
            <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
              The problem is that all that effort doesn't compound. You close the deal and forget
              to follow up. You think of the idea and it's gone by morning. You build the
              relationship and lose the thread three weeks later. Operator OS captures everything,
              routes everything, and surfaces what needs your attention — in the channel you
              already live in.
            </p>
          </div>
        </section>

        {/* What it is */}
        <section className="border-b border-border bg-white/50">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="eyebrow text-[var(--imessage-accent)]">What it is</div>
            <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-tight text-foreground">
              Voice memo or text. That's the whole input.
            </h2>
            <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
              "New estimate for Tom on Harrison, furnace, $3,200." The system writes the estimate,
              logs the lead, schedules the follow-up, and pings you only when it needs a yes.
              You answer the way you already text. No dashboard. No new app. No login to forget.
            </p>

            <div className="mt-16 grid gap-4 md:grid-cols-2">
              {FEATURES.map((f) => (
                <div key={f.title} className="rounded-2xl border border-border bg-white p-8">
                  <div className="font-mono text-xs text-[var(--imessage-tag)]">{f.tag}</div>
                  <h3 className="mt-3 font-display text-3xl text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="eyebrow text-[var(--imessage-accent)]">How it works</div>
            <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-tight text-foreground">
              Built for you. Around how you actually work.
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  t: "01 — Map",
                  b: "We shadow your actual week. What's repeating, what's draining, what's slipping.",
                },
                {
                  t: "02 — Build",
                  b: "We wire Operator OS into your stack — Gmail, Calendar, CRM, notes, transcripts.",
                },
                {
                  t: "03 — Ship",
                  b: "You own it. It's tuned to your voice, your style, your priorities. No subscription.",
                },
              ].map((s) => (
                <div key={s.t} className="rounded-2xl border border-border bg-white p-6">
                  <div className="font-mono text-xs text-[var(--imessage-tag)]">{s.t}</div>
                  <p className="mt-4 text-lg text-foreground">{s.b}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 flex flex-col items-start gap-4 rounded-3xl bg-gradient-to-br from-[oklch(0.70_0.18_252)] to-[oklch(0.50_0.22_260)] p-10 text-white md:flex-row md:items-center md:justify-between md:p-12">
              <div>
                <h3 className="font-display text-3xl md:text-5xl">Start with the assessment.</h3>
                <p className="mt-2 max-w-xl text-white/85">
                  We'll show you what an Operator OS build would look like for your week.
                </p>
              </div>
              <CTAButton
                to="/assessment"
                variant="primary"
                className="!bg-white !text-[var(--imessage-accent)] hover:!bg-white/90"
              >
                Claim a Beta Spot
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
    body: "Every call, email, meeting note, and DM lands in one place automatically. Stop worrying about what you forgot.",
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
    body: "iMessage runs on your existing number. Prefer voice memos, Google Voice, Telegram, WhatsApp, or Slack? All work. You interact the way you already interact. No dashboard to check. No new app to open.",
  },
];

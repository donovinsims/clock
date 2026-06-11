import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow, H2, Lede } from "@/components/site/Section";
import { AuditCard } from "@/components/site/AuditCard";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Clockout" },
      {
        name: "description",
        content:
          "Built by Donovin. Product operations at Uber and Walgreens. Now building automation systems for local service businesses. One-time build, you own it.",
      },
      { property: "og:title", content: "About — Clockout" },
      {
        property: "og:description",
        content: "Built by Donovin. Product operations at Uber and Walgreens. Now fixing revenue leaks for local service businesses. No retainer, you own it.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <Section>
        <Eyebrow>About</Eyebrow>
          <h1 className="font-display text-5xl md:text-7xl tracking-tight">
            Your ops failures are the same ones
            <br />
            I fixed at Uber and Walgreens.
          </h1>
          <Lede>
            Clockout was started by Donovin — a product operations lead who spent years building
            operational systems at Uber and Walgreens, and watched local service businesses bleed
            revenue from the same leaks the big guys solved years ago.
          </Lede>
      </Section>

      <Section className="bg-secondary/40">
        <Eyebrow>The philosophy</Eyebrow>
        <H2>Run better, not busier.</H2>
        <div className="mt-8 grid gap-12 md:grid-cols-2">
          <p className="text-lg text-muted-foreground">
            Most "automation" out there is software pretending to be a solution. It gives you a
            dashboard and a monthly bill and asks you to figure out the rest. I build the actual
            workflow, install it inside your business, and hand you the keys.
          </p>
          <p className="text-lg text-muted-foreground">
            No retainers. No lock-in. One price, full build, full handover. You own the system
            forever — the same way you own your truck and your tools.
          </p>
        </div>
      </Section>

      <Section>
        <Eyebrow>The model</Eyebrow>
        <H2>You own it. Outright.</H2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { t: "One-time price", b: "No retainer. No license fee. No surprise SaaS bills." },
            {
              t: "Your stack",
              b: "Built on tools you already use, or ones we recommend that you'll own.",
            },
            {
              t: "Full handover",
              b: "Docs, training, access. If we got hit by a bus tomorrow, your system keeps running.",
            },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="card-title text-xl">{c.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{c.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/40">
        <Eyebrow>The founder</Eyebrow>
        <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:items-start">
          <div
            className="aspect-square rounded-3xl bg-gradient-to-br from-signal/40 to-ink/20"
            aria-hidden
          />
          <div>
            <H2>Donovin</H2>
            <p className="mt-6 text-lg text-muted-foreground">
              Product Operations at Uber (major events, US &amp; Canada — 50,000+ person venues,
              real-time dispatch, zero-margin operations). Then Walgreens, where the same class of
              operational problems played out at enterprise scale.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              The missed-call leak, the quote follow-up vacuum, the maintenance customer who churns
              because nobody called — these aren't mysteries to me. I've stress-tested them at
              100x the scale of a local shop. Clockout is me applying everything I learned to the
              businesses that need it most. At a price that doesn't require enterprise budget.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <AuditCard variant="dark" />
      </Section>
    </SiteLayout>
  );
}

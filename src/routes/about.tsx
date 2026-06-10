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
          "Why Clockout exists, who's behind it, and the model that lets clients own their systems outright.",
      },
      { property: "og:title", content: "About — Clockout" },
      {
        property: "og:description",
        content: "Built by Donovin. One-time builds. You own the system outright.",
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
          Built for owners who are sick
          <br />
          of paying rent on their own tools.
        </h1>
        <Lede>
          Clockout was started by Donovin after watching too many sharp operators get bled out by
          stacks of subscriptions they didn't fully understand and consultants who never quite
          finished the job.
        </Lede>
      </Section>

      <Section className="bg-secondary/40">
        <Eyebrow>The philosophy</Eyebrow>
        <H2>Run better, not busier.</H2>
        <div className="mt-8 grid gap-12 md:grid-cols-2">
          <p className="text-lg text-muted-foreground">
            Most "automation" out there is software pretending to be a solution. It gives you a
            dashboard and a monthly bill and asks you to figure out the rest. We build the actual
            workflow, install it inside your business, and walk away.
          </p>
          <p className="text-lg text-muted-foreground">
            We're not interested in retainers. We're not interested in lock-in. We're interested in
            handing you a system that quietly earns its keep every single day — and stays yours
            forever.
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
              Donovin spent years inside operations at fast-moving service businesses, and watched
              the same pattern play out: owners working harder than they needed to because their
              tools were stitched together with hope.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Clockout exists to break that pattern. Sharp builds. Plain pricing. Real handover.
              Then we get out of the way.
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

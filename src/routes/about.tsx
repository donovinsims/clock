import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow, H2, Lede } from "@/components/site/Section";
import { Card } from "@/components/site/Card";
import { AuditCard } from "@/components/site/AuditCard";
import { fullUrl } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Clockout" },
      {
        name: "description",
        content:
          "Built by Donovin. Product operations at massive scale. Now building automation systems for local service businesses. One-time build, you own it.",
      },
      { property: "og:title", content: "About — Clockout" },
      {
        property: "og:description",
        content: "Built by Donovin. Product operations at massive scale. Now fixing revenue leaks for local service businesses. One-time build, you own it.",
      },
      { property: "og:url", content: fullUrl("/about") },
    ],
    links: [{ rel: "canonical", href: fullUrl("/about") }],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section>
        <div className="mx-auto max-w-6xl px-6 pt-14 pb-16 md:pt-24 md:pb-24">
          <Eyebrow>About</Eyebrow>
          <h1 className="font-display text-4xl md:text-7xl">
            Your ops failures are the same ones
            <br />
            I fixed at Uber and Walgreens.
          </h1>
          <Lede>
            Clockout was started by Donovin — a product operations lead who spent years building
            operational systems at massive scale, and watched local service businesses bleed
            revenue from the same leaks the big guys solved years ago.
          </Lede>
        </div>
      </section>

      <Section tone="muted">
        <Eyebrow>The founder</Eyebrow>
        <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:items-start">
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-signal/30 to-ink/30" aria-hidden>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,var(--color-signal)/15_0%,transparent_50%)]" />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-ink/20 to-transparent" />
            <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-signal/10 blur-2xl" />
            <div className="absolute bottom-8 left-8 h-16 w-16 rounded-full bg-bone/10 blur-xl" />
          </div>
          <div>
            <H2>Donovin</H2>
            <div className="prose-width">
              <p className="mt-6 text-lg text-muted-foreground">
                Grew up in Roscoe. Hononegah baseball, NIC-10 MVP, baseball scholarship to NIU.
                Summers with the Winnebago County Highway Department — learned what real work
                looks like before I learned what margin looks like. Came back home.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Then the corporate detour: Product Operations at Uber — major events, US &amp;
                Canada, 50,000+ person venues, real-time dispatch, zero-margin operations.
                Then Walgreens, where the same class of operational problems played out at
                enterprise scale. The missed-call leak, the quote follow-up vacuum, the
                maintenance customer who churns because nobody called — these aren't mysteries
                to me. I've stress-tested them at a scale most operators never see.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Clockout is me applying everything I learned to the businesses that need it
                most. At a price that doesn't require enterprise budget. In the region
                where I grew up.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <Eyebrow>The philosophy</Eyebrow>
        <H2>Run better, not busier.</H2>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <Card variant="outline" className="p-6 opacity-70">
            <div className="op-label text-clay">Most &ldquo;automation&rdquo;</div>
            <p className="mt-3 text-base text-muted-foreground">
              Most tools give you another dashboard, another login, and a monthly bill.
              You still have to figure out the workflow.
            </p>
          </Card>
          <Card variant="elevated" className="border border-signal/20 p-6 shadow-md">
            <div className="op-label text-signal">What Clockout does</div>
            <p className="mt-3 text-base text-foreground">
              I build the <strong>actual workflow</strong> — calls, quotes, follow-ups — install
              it inside your business, and hand you the keys. No lock-in, no monthly fees.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <Eyebrow>The model</Eyebrow>
        <H2>You own it. Outright.</H2>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <Card variant="outline" className="p-6">
            <span className="font-display text-3xl text-signal/60" aria-hidden>01</span>
            <h3 className="card-title mt-3">One-time price</h3>
            <p className="mt-3 text-base text-muted-foreground">No monthly fees. No license fee. No surprise SaaS bills.</p>
          </Card>
          <Card variant="outline" className="border-signal/30 bg-signal/[0.02] p-6">
            <span className="font-display text-3xl text-signal/60" aria-hidden>02</span>
            <h3 className="card-title mt-3">Your stack</h3>
            <p className="mt-3 text-base text-muted-foreground">Built on tools you already use, or ones we recommend that you'll own.</p>
          </Card>
          <Card variant="outline" className="p-6">
            <span className="font-display text-3xl text-signal/60" aria-hidden>03</span>
            <h3 className="card-title mt-3">Full handover</h3>
            <p className="mt-3 text-base text-muted-foreground">Docs, training, access. If we got hit by a bus tomorrow, your system keeps running.</p>
          </Card>
        </div>
      </Section>

      <Section tone="highlight">
        <div className="mx-auto max-w-3xl">
          <Card className="p-8 md:p-10 text-center">
            <div className="eyebrow">The guarantee</div>
            <blockquote className="mt-4 font-display text-2xl md:text-4xl text-foreground">
              &ldquo;If the system doesn&apos;t recover 10 hours a week within 30 days,
              I keep working until it does. Free.&rdquo;
            </blockquote>
            <p className="mt-4 text-base text-muted-foreground">
              That&apos;s not a marketing line. It&apos;s how I intend to run this.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <AuditCard variant="dark" />
      </Section>
    </SiteLayout>
  );
}

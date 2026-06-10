import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow, H2, Lede } from "@/components/site/Section";
import { AuditCard } from "@/components/site/AuditCard";
import { Steps } from "@/components/site/Steps";
import { CTAButton } from "@/components/site/CTAButton";
import { VERTICAL_CONTENT, type VerticalContent } from "@/lib/vertical-content";
import { VERTICALS } from "@/lib/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const data = VERTICAL_CONTENT[params.slug];
    if (!data) throw notFound();
    return { data };
  },
  head: ({ params, loaderData }) => {
    const name = loaderData?.data.name ?? "Service";
    const title = `${name} automation — Clockout`;
    const desc = loaderData?.data.heroLede ?? "";
    const url = `/services/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: VerticalPage,
  notFoundComponent: () => (
    <SiteLayout>
      <Section>
        <H2>Service not found.</H2>
        <Lede>Try the services hub.</Lede>
      </Section>
    </SiteLayout>
  ),
});

function VerticalPage() {
  const { data } = Route.useLoaderData() as { data: VerticalContent };
  const meta = VERTICALS.find((v) => v.slug === data.slug);
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28">
          <div className="eyebrow">{meta?.name}</div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl tracking-tight">{data.hero}</h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">{data.heroLede}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <CTAButton to="/assessment">Book the audit</CTAButton>
            <CTAButton to="/contact" variant="ghost">Talk to us</CTAButton>
          </div>
        </div>
      </section>

      <Section>
        <Eyebrow>What's leaking</Eyebrow>
        <H2>{data.painTitle}</H2>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {data.pains.map((p, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6">
              <div className="font-mono text-xs text-signal">— Leak {i + 1}</div>
              <p className="mt-3 text-lg">{p}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/40">
        <Eyebrow>How it works</Eyebrow>
        <H2>From audit to handover.</H2>
        <div className="mt-12">
          <Steps steps={data.steps} />
        </div>
      </Section>

      <Section>
        <Eyebrow>What we build</Eyebrow>
        <H2>The {meta?.name} stack.</H2>
        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {data.automations.map((a, i) => (
            <div key={i} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
              <span className="mt-1 font-mono text-xs text-signal">0{i + 1}</span>
              <div>
                <div className="font-medium">{a.title}</div>
                <div className="text-sm text-muted-foreground">{a.body}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/40">
        <Eyebrow>Proof</Eyebrow>
        {/* TODO: replace with real case study and verified numbers */}
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <H2>{data.proof.headline}</H2>
            <p className="mt-6 text-lg text-muted-foreground">{data.proof.body}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {data.proof.stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-6">
                <div className="card-title text-3xl tabular-nums">{s.value}</div>
                <div className="mt-2 text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <AuditCard variant="dark" />
      </Section>
    </SiteLayout>
  );
}
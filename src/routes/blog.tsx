import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow, H2, Lede } from "@/components/site/Section";
import { fullUrl } from "@/lib/seo";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Field notes — Clockout" },
      {
        name: "description",
        content: "Practical writing on automation, AI, and running an owner-led business better.",
      },
      { property: "og:title", content: "Field notes — Clockout" },
      {
        property: "og:description",
        content: "Practical writing on automation, AI, and running an owner-led business better.",
      },
      { property: "og:url", content: fullUrl("/blog") },
    ],
    links: [{ rel: "canonical", href: fullUrl("/blog") }],
  }),
  component: Blog,
});

// TODO: replace with real CMS posts
const POSTS = [
  {
    title: "The five-call rule: why most service businesses lose 40% of their leads",
    tag: "Lead response",
    read: "6 min",
    date: "Coming soon",
  },
  {
    title: "Quote-to-close: a follow-up cadence that actually works",
    tag: "Sales ops",
    read: "8 min",
    date: "Coming soon",
  },
  {
    title: "Owning your stack: flat fee, full ownership",
    tag: "Philosophy",
    read: "4 min",
    date: "Coming soon",
  },
  {
    title: "What an Operator OS does on a Tuesday morning",
    tag: "Operator OS",
    read: "5 min",
    date: "Coming soon",
  },
];

function Blog() {
  return (
    <SiteLayout>
      <Section>
        <Eyebrow>Field notes</Eyebrow>
        <H2>Plain writing for people who run things.</H2>
        <Lede>
          No thought leadership. No 12-step listicles. Just what we've seen, what we've built, and
          what's working right now.
        </Lede>

        <div className="mt-16 divide-y divide-border">
          {POSTS.map((p) => (
            <article
              key={p.title}
              className="grid gap-4 py-8 md:grid-cols-[1fr_auto] md:items-baseline"
            >
              <div>
                <div className="eyebrow">{p.tag}</div>
                <h3 className="card-title mt-3 text-2xl md:text-3xl">{p.title}</h3>
              </div>
              <div className="text-sm text-muted-foreground">
                {p.read}{p.date === "Coming soon" ? "" : ` · ${p.date}`}
              </div>
            </article>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
